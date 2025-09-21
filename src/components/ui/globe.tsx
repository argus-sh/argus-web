"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

import { cn } from "../../lib/utils";

const MOVEMENT_DAMPING = 1400;

const LIGHT_GLOBE_CONFIG: COBEOptions = {
  width: 380,
  height: 380,
  onRender: () => {},
  devicePixelRatio: 1,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 1.2,
  mapSamples: 8000,
  mapBrightness: 2.5,
  baseColor: [1, 1, 1],
  markerColor: [0.3, 0.1, 0.9],
  glowColor: [0.3, 0.1, 0.9],
  markers: [
    { location: [37.7749, -122.4194], size: 0.08 }, // San Francisco
    { location: [51.5074, -0.1278], size: 0.08 }, // London
    { location: [35.6762, 139.6503], size: 0.08 }, // Tokyo
    { location: [-23.5505, -46.6333], size: 0.07 }, // São Paulo
  ],
};

const DARK_GLOBE_CONFIG: COBEOptions = {
  width: 380,
  height: 380,
  onRender: () => {},
  devicePixelRatio: 1,
  phi: 0,
  theta: 0.3,
  dark: 0.3,
  diffuse: 0.6,
  mapSamples: 8000,
  mapBrightness: 1.2,
  baseColor: [0.7, 0.7, 0.7],
  markerColor: [0.6, 0.4, 1],
  glowColor: [0.6, 0.4, 1],
  markers: [
    { location: [37.7749, -122.4194], size: 0.06 }, // San Francisco
    { location: [51.5074, -0.1278], size: 0.06 }, // London
    { location: [35.6762, 139.6503], size: 0.06 }, // Tokyo
    { location: [-23.5505, -46.6333], size: 0.05 }, // São Paulo
  ],
};

export function Globe({
  className,
  config,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    if (!canvasRef.current || !mounted) return;

    // Reset canvas opacity for smooth transition
    canvasRef.current.style.opacity = "0";

    // Get theme-specific config
    const themeConfig = (() => {
      if (config) return config;
      const isLight = resolvedTheme === "light";
      console.log("Globe theme:", resolvedTheme, "isLight:", isLight);
      return isLight ? LIGHT_GLOBE_CONFIG : DARK_GLOBE_CONFIG;
    })();

    const onResize = () => {
      if (canvasRef.current) {
        const containerWidth = canvasRef.current.offsetWidth;
        widthRef.current = Math.min(containerWidth, 450); // Max 450px
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    // Ensure we have a valid width before creating globe
    if (widthRef.current === 0) {
      widthRef.current = 380; // larger fallback width
    }

    const globe = createGlobe(canvasRef.current, {
      ...themeConfig,
      width: widthRef.current,
      height: widthRef.current,
      onRender: (state) => {
        if (!pointerInteracting.current) phiRef.current += 0.005;
        state.phi = phiRef.current + rs.get();
        state.width = widthRef.current;
        state.height = widthRef.current;
      },
    });

    // Delay opacity change to ensure proper rendering
    const timeoutId = setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, resolvedTheme, mounted, config]);

  if (!mounted) {
    return (
      <div
        className={cn(
          "relative w-full h-full max-w-[450px] max-h-[450px] mx-auto flex items-center justify-center",
          className,
        )}
      >
        <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative w-full h-full max-w-[450px] max-h-[450px] mx-auto",
        className,
      )}
    >
      <canvas
        className={cn(
          "w-full h-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
