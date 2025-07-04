"use client"

import { motion } from 'framer-motion'
import { LightBulbIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export default function MADExplanation() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Zrozumienie Metody MAD
            </h2>
            <p className="text-lg text-gray-600">
              Mediana Odchyleń Bezwzględnych - kluczowe narzędzie analizy
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-start space-x-4 mb-6">
              <LightBulbIcon className="h-8 w-8 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Czym jest MAD?
                </h3>
                <p className="text-gray-600 mb-4">
                  MAD (Median Absolute Deviation) to statystyczna miara rozproszenia danych,
                  która jest odporna na wartości odstające. W przeciwieństwie do odchylenia
                  standardowego, MAD nie jest zakłócany przez ekstremalne wartości.
                </p>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="font-semibold text-gray-900 mb-4">
                Jak działa w kontekście wyborów?
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-poland-red text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    1
                  </span>
                  <p className="text-gray-600">
                    <span className="font-semibold">Grupowanie lokalne:</span> Komisje są grupowane
                    według kodów pocztowych, tworząc grupy 10-16 sąsiednich komisji.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-poland-red text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    2
                  </span>
                  <p className="text-gray-600">
                    <span className="font-semibold">Obliczenie mediany:</span> Dla każdej grupy
                    obliczana jest mediana poparcia dla kandydatów.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-poland-red text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    3
                  </span>
                  <p className="text-gray-600">
                    <span className="font-semibold">Obliczenie MAD:</span> Mierzone są odchylenia
                    każdej komisji od mediany grupy, a następnie obliczana jest mediana tych odchyleń.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-poland-red text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    4
                  </span>
                  <p className="text-gray-600">
                    <span className="font-semibold">Detekcja anomalii:</span> Komisje odbiegające
                    o więcej niż k×MAD od mediany są oznaczane jako anomalne.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200"
            >
              <div className="flex items-start space-x-3">
                <ChartBarIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Przykład z analizy
                  </h4>
                  <p className="text-blue-800 text-sm">
                    Średnie MAD dla poziomu poparcia wyniosło 5,06 pp. Przy progu k=3, komisja
                    musiałaby odbiegać o ponad 15,18 pp od lokalnej mediany, aby zostać oznaczona
                    jako anomalna. W jednorodnych obszarach miejskich nawet takie odchylenie jest
                    wysoce podejrzane.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}