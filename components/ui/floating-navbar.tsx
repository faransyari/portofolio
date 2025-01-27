"use client";
import React, { useState, JSX } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is a number
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      const direction = previous !== undefined ? current - previous : 0;

      // Show the navbar when scrolling up, even at the top
      if (direction < 0 || scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            y: -100,
          }}
          transition={{
            duration: 0.3,
          }}
          className={cn(
            "fixed top-4 inset-x-0 mx-auto max-w-fit z-[9999] border border-[rgba(50,50,50,0.8)] dark:border-[rgba(20,20,20,0.9)] rounded-full bg-neutral-900/90 backdrop-blur-md shadow-lg py-4 px-10 flex items-center justify-center space-x-8"
,
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={idx}
              href={navItem.link}
              className="text-sm text-white hover:text-blue-400 transition"
            >
              {navItem.icon && <span className="mr-1">{navItem.icon}</span>}
              {navItem.name}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
