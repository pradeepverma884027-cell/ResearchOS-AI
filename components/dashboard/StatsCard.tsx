"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  color,
}: StatsCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.2,
      }}
      className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg transition-all hover:border-blue-500"
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-zinc-400">
            {title}
          </p>

          <h2 className="mt-5 text-5xl font-bold">
            {value}
          </h2>

          <p className="mt-4 text-sm text-green-400">
            +12% this week
          </p>

        </div>

        <div
          className={`rounded-2xl p-4 ${color}`}
        >
          <Icon
            size={30}
            className="text-white"
          />
        </div>

      </div>
    </motion.div>
  );
}