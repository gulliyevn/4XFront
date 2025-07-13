'use client'
import { motion } from 'framer-motion';
import React from 'react';

interface AuthFormContainerProps {
  children: React.ReactNode;
}

export const AuthFormContainer: React.FC<AuthFormContainerProps> = ({ children }) => (
  <div className="flex-1 flex items-center justify-center ">
    <div className="w-full max-w-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  </div>
);