"use client";

import { motion } from "framer-motion";

export default function DashboardHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h1 className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent">
        Welcome Back 👋
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-zinc-400">
        Your Research Command Center. Organize papers, collaborate
        with your team and let AI accelerate your research.
      </p>
    </motion.div>
  );
}