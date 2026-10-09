"use client";
import { motion } from "framer-motion";

/**
 * Loading Screen Component
 * Displays while pages are loading with smooth animations
 */
export default function LoadingScreen({ message = "Loading..." }) {
  return (
    <div className="min-h-screen bg-[#03040B] noise flex items-center justify-center px-4">
      <div className="text-center">
        {/* Loading Spinner */}
        <div className="mb-6 flex justify-center">
          <div className="relative w-24 h-24">
            {/* Outer Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-[#7B2CBF]/20"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                borderTopColor: "#7B2CBF",
              }}
            />
            
            {/* Inner Ring */}
            <motion.div
              className="absolute inset-2 rounded-full border-4 border-[#00F0FF]/20"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                borderRightColor: "#00F0FF",
              }}
            />

            {/* Center Dot */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#7B2CBF] to-[#00F0FF]" />
            </motion.div>
          </div>
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-lg font-medium text-[#8b93b0]"
        >
          {message}
        </motion.p>
      </div>
    </div>
  );
}

/**
 * Skeleton Card Component
 * For loading states in list views
 */
export function SkeletonCard({ className = "" }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-white/5 rounded-xl p-6 space-y-4">
        <div className="h-4 bg-white/10 rounded w-3/4" />
        <div className="h-4 bg-white/10 rounded w-1/2" />
        <div className="h-20 bg-white/10 rounded" />
        <div className="flex gap-2">
          <div className="h-8 bg-white/10 rounded w-20" />
          <div className="h-8 bg-white/10 rounded w-20" />
        </div>
      </div>
    </div>
  );
}

/**
 * Skeleton Grid Component
 * Multiple skeleton cards in a grid
 */
export function SkeletonGrid({ count = 6, columns = 3 }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

/**
 * Skeleton Text Component
 * For loading text content
 */
export function SkeletonText({ lines = 3, className = "" }) {
  return (
    <div className={`animate-pulse space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-white/10 rounded"
          style={{
            width: i === lines - 1 ? '60%' : '100%',
          }}
        />
      ))}
    </div>
  );
}
