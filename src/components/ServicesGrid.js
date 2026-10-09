"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/content/services";
import SpotlightCard from "@/components/SpotlightCard";
import { staggerContainer, staggerItem } from "@/utils/animations";

export default function ServicesGrid({ hidePrice = true }) {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="max-w-7xl mx-auto grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((s) => (
        <motion.div key={s.slug} className="h-full" variants={staggerItem}>
          <SpotlightCard className="h-full flex flex-col justify-between group">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <h4 className="text-[10px] font-extrabold text-[#7B2CBF] tracking-widest uppercase">{s.category}</h4>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00F0FF] transition-colors">{s.title}</h3>
              <p className="leading-relaxed text-sm text-[#8b93b0] mb-8 line-clamp-3 group-hover:text-white/80 transition-colors duration-300 mt-2">{s.description}</p>
            </div>
            
            <div className={`mt-auto pt-6 border-t border-white/10 flex items-center ${hidePrice ? 'justify-end' : 'justify-between'}`}>
              {!hidePrice && (
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full uppercase tracking-widest">
                  {s.price}
                </span>
              )}
              <Link href={`/services/${s.slug}`} className="text-sm font-bold text-white group-hover:text-[#00F0FF] transition-colors flex items-center gap-1">
                Details <span className="text-[#00F0FF]">→</span>
              </Link>
            </div>
          </SpotlightCard>
        </motion.div>
      ))}
    </motion.div>
  );
}
