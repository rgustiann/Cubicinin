"use client";

import { useEffect, useRef } from "react";

const BASE_COLORS = [
  "rgba(124, 58, 237, 0.3)",
  "rgba(244, 114, 182, 0.2)",
  "rgba(56, 189, 248, 0.15)",
  "rgba(192, 132, 252, 0.25)",
  "rgba(251, 168, 31, 0.1)",
];

export default function MeshGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX / canvas.width;
      mouse.current.y = e.clientY / canvas.height;
    };
    window.addEventListener("mousemove", handleMouse);

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      const blobs = BASE_COLORS.map((color, i) => {
        const angle = time + (i * Math.PI * 2) / BASE_COLORS.length;
        const cx =
          w / 2 +
          Math.cos(angle) * (w * 0.3 + Math.sin(time * 0.3 + i) * 60) +
          (mouse.current.x - 0.5) * 50;
        const cy =
          h / 2 +
          Math.sin(angle) * (h * 0.2 + Math.cos(time * 0.4 + i) * 50) +
          (mouse.current.y - 0.5) * 40;
        const r =
          200 +
          Math.sin(time * 0.6 + i * 1.2) * 80 +
          Math.cos(time * 0.2 + i * 0.8) * 60;

        return { cx, cy, r, color };
      });

      // fill white base
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, w, h);

      blobs.forEach(({ cx, cy, r, color }) => {
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, color);
        grad.addColorStop(0.6, color.replace(/[\d.]+\)$/, "0.08)"));
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.globalCompositeOperation = "multiply";
        ctx.fill();
      });

      ctx.globalCompositeOperation = "source-over";

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
