"use client"

import { motion } from 'framer-motion'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-poland-red pt-24 pb-16">
      <div className="absolute inset-0 bg-black/20" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur text-yellow-200 px-4 py-2 rounded-full mb-6"
          >
            <ExclamationTriangleIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Analiza Statystyczna</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Wybory Prezydenckie 2025:
            <span className="block text-yellow-400 mt-2">Wykryte Anomalie</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl text-gray-200 mb-8">
            Analiza 31 631 komisji wyborczych ujawniła statystyczne nieprawidłowości,
            które mogły wpłynąć na ostateczny wynik wyborów
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/10 backdrop-blur rounded-lg p-6"
            >
              <div className="text-3xl font-bold text-yellow-400">369 591</div>
              <div className="text-sm text-gray-300 mt-1">Oficjalna różnica głosów</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/10 backdrop-blur rounded-lg p-6"
            >
              <div className="text-3xl font-bold text-yellow-400">3 679 - 5 453</div>
              <div className="text-sm text-gray-300 mt-1">Komisje z anomaliami</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white/10 backdrop-blur rounded-lg p-6"
            >
              <div className="text-3xl font-bold text-yellow-400">315k - 458k</div>
              <div className="text-sm text-gray-300 mt-1">Szacowany wpływ</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  )
}