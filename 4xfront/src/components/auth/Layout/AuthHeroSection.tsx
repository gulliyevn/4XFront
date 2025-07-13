'use client'
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AuthHeroSectionProps {
    headline: ReactNode;
    subtitle: string;
    features: {
        icon: string;
        text: string;
    }[];
    stats: {
        value: string;
        label: string;
    }[]
}

export const AuthHeroSection = ({
    headline,
    subtitle,
    features,
    stats,
}:AuthHeroSectionProps ) => {
  return (
    <div className="hidden lg:flex lg:w-1/2 xl:w-2/3 relative overflow-hidden">
    {/* Background Gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#162A2C] via-[#1a3d3f] to-[#98b5a4]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#162A2C]/90 to-[#162A2C]/70" />
    </div>

    {/* Content Overlay */}
    <div className="relative z-10 flex flex-col justify-center px-12 py-16 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">4X</h1>
          <div className="w-16 h-1 bg-[#98b5a4]"></div>
        </div>

        {/* Hero Content */}
        <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
            {headline}
        </h2>
        
        <p className="text-xl text-gray-200 mb-8 max-w-lg">
          {subtitle}
        </p>

        {/* Features */}
        <div className="space-y-4 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <span className="text-2xl">{feature.icon}</span>
              <span className="text-gray-200">{feature.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Trading Stats */}
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-[#98b5a4]">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Floating Elements */}
    <div className="absolute top-20 right-20 w-32 h-32 bg-[#98b5a4]/20 rounded-full blur-xl"></div>
    <div className="absolute bottom-40 left-20 w-24 h-24 bg-[#98b5a4]/30 rounded-full blur-lg"></div>
  </div>
  );
};
