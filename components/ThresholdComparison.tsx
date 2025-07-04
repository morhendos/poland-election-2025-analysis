"use client"

import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts'

export default function ThresholdComparison() {
  const data = [
    { name: 'k > 1.5', stations: 7821, voteShift: 589000, label: 'Bardzo niski próg' },
    { name: 'k > 2.0', stations: 5453, voteShift: 457624, label: 'Niski próg' },
    { name: 'k > 2.5', stations: 4346, voteShift: 370982, label: 'Średni próg' },
    { name: 'k > 3.0', stations: 3679, voteShift: 315256, label: 'Wysoki próg' },
    { name: 'k > 3.5', stations: 2897, voteShift: 248000, label: 'Bardzo wysoki próg' },
  ]

  const officialMargin = 369591

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Analiza Wrażliwości Progów
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Jak zmienia się liczba wykrytych anomalii i ich wpływ przy różnych progach detekcji
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-lg p-8"
        >
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis 
                  yAxisId="left" 
                  label={{ value: 'Liczba komisji', angle: -90, position: 'insideLeft' }}
                />
                <YAxis 
                  yAxisId="right" 
                  orientation="right"
                  label={{ value: 'Przesunięcie głosów', angle: 90, position: 'insideRight' }}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip 
                  formatter={(value: number, name: string) => [
                    name === 'Liczba komisji' ? value.toLocaleString('pl-PL') : `${(value / 1000).toFixed(0)}k`,
                    name
                  ]}
                />
                <Legend />
                <ReferenceLine 
                  yAxisId="right"
                  y={officialMargin} 
                  stroke="#DC143C" 
                  strokeDasharray="5 5"
                  label={{ value: "Oficjalna różnica", position: "left" }}
                />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="stations" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  name="Liczba komisji"
                  dot={{ fill: '#3B82F6', r: 6 }}
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="voteShift" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  name="Przesunięcie głosów"
                  dot={{ fill: '#10B981', r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Obserwacja 1</h4>
              <p className="text-sm text-gray-600">
                Im niższy próg detekcji, tym więcej wykrytych anomalii i większy szacowany wpływ
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Obserwacja 2</h4>
              <p className="text-sm text-gray-600">
                Przy progu k > 2.5 szacowany wpływ przekracza oficjalną różnicę
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Obserwacja 3</h4>
              <p className="text-sm text-gray-600">
                Wiele mniejszych anomalii może pozostawać niewykrytych przy wyższych progach
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}