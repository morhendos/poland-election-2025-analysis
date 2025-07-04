"use client"

import { motion } from 'framer-motion'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'

export default function KeyFindings() {
  const findings = [
    {
      icon: ExclamationCircleIcon,
      title: "11.6% - 17.2% komisji wyborczych",
      description: "wykazało statystyczne anomalie w porównaniu do sąsiednich lokalizacji",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: CheckCircleIcon,
      title: "Metoda MAD potwierdzona",
      description: "przez Sąd Najwyższy - 10 z 13 komisji objętych przeliczeniem było wcześniej oznaczonych jako anomalne",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: ExclamationCircleIcon,
      title: "4 typy anomalii",
      description: "nadmierne poparcie, nienaturalny wzrost, odwrócenie trendu, spadek głosów",
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      icon: ExclamationCircleIcon,
      title: "33 komisje",
      description: "wykazały wszystkie 4 typy anomalii jednocześnie",
      color: "text-red-600",
      bgColor: "bg-red-50"
    }
  ]

  return (
    <section id="findings" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Kluczowe Ustalenia
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Analiza statystyczna ujawniła szeroko rozpowszechnione anomalie w procesie głosowania,
            które wymagały dalszego zbadania
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {findings.map((finding, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${finding.bgColor} rounded-lg p-6 border border-gray-200`}
            >
              <div className="flex items-start space-x-4">
                <finding.icon className={`h-8 w-8 ${finding.color} flex-shrink-0`} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {finding.title}
                  </h3>
                  <p className="text-gray-600">
                    {finding.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}