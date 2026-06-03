"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
};

export default function Marquee({
  children,
  direction = "left",
  speed = 25,
}: Props) {
  return (
    <div className="relative flex overflow-hidden">
      <motion.div
        className="flex shrink-0 gap-6"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
