"use client"

import { motion } from 'framer-motion'
import { AcademicCapIcon, ChartBarIcon, MapIcon, CalculatorIcon } from '@heroicons/react/24/outline'

export default function Methodology() {
  const steps = [
    {
      icon: MapIcon,
      title: "Grupowanie Geograficzne",
      description: "31 631 komisji pogrupowano w 2 208 klastrów według kodów pocztowych"
    },
    {
      icon: CalculatorIcon,
      title: "Obliczenie MAD",
      description: "Dla każdej grupy obliczono medianę i odchylenie bezwzględne od mediany"
    },
    {
      icon: ChartBarIcon,
      title: "Detekcja Anomalii",
      description: "Komisje odbiegające o >k×MAD oznaczono jako anomalne"
    },
    {
      icon: AcademicCapIcon,
      title: "Przeliczenie Wyników",
      description: "Zastąpiono anomalne wyniki medianą lokalnej grupy"
    }
  ]

  return (
    <section id="methodology" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Metodologia Analizy
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Zastosowano lokalnie adaptacyjną metodę wykrywania wartości odstających
            opartą na Medianie Odchyleń Bezwzględnych (MAD)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-poland-red/10 p-3 rounded-full mb-4">
                  <step.icon className="h-8 w-8 text-poland-red" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-blue-50 rounded-lg p-6 border border-blue-200"
        >
          <h3 className="font-semibold text-blue-900 mb-2">
            Dlaczego metoda MAD?
          </h3>
          <p className="text-blue-800">
            MAD jest odporna na wartości odstające i automatycznie dostosowuje się do lokalnych warunków.
            W przeciwieństwie do sztywnych progów krajowych, każda grupa ustala własny punkt odniesienia
            dla "normalnej" zmienności, co czyni metodę bardziej precyzyjną.
          </p>
        </motion.div>
      </div>
    </section>
  )
}