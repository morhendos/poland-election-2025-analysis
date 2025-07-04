"use client"

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts'

export default function VoteImpactChart() {
  const data = [
    {
      threshold: 'k > 2.0',
      voteShift: 457624,
      anomalousStations: 5453,
      percentage: '17.2%'
    },
    {
      threshold: 'k > 2.5',
      voteShift: 370982,
      anomalousStations: 4346,
      percentage: '13.7%'
    },
    {
      threshold: 'k > 3.0',
      voteShift: 315256,
      anomalousStations: 3679,
      percentage: '11.6%'
    }
  ]

  const officialMargin = 369591

  return (
    <section id="impact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Wpływ Anomalii na Wynik Wyborów
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Porównanie szacowanego przesunięcia głosów z oficjalną różnicą między kandydatami
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-lg p-8"
        >
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Oficjalna różnica głosów</span>
              <span className="text-2xl font-bold text-poland-red">{officialMargin.toLocaleString('pl-PL')}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-poland-red h-2 rounded-full" style={{ width: '100%' }} />
            </div>
          </div>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="threshold" 
                  label={{ value: 'Próg detekcji', position: 'insideBottom', offset: -5 }}
                />
                <YAxis 
                  label={{ value: 'Liczba głosów', angle: -90, position: 'insideLeft' }}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip 
                  formatter={(value: number) => value.toLocaleString('pl-PL')}
                  labelFormatter={(label) => `Próg: ${label}`}
                />
                <ReferenceLine 
                  y={officialMargin} 
                  stroke="#DC143C" 
                  strokeDasharray="5 5"
                  label={{ value: "Oficjalna różnica", position: "left" }}
                />
                <Bar 
                  dataKey="voteShift" 
                  fill="#3B82F6" 
                  name="Szacowane przesunięcie głosów"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            {data.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center">
                <div className="text-sm text-gray-600">Próg {item.threshold}</div>
                <div className="text-xl font-bold text-gray-900 mt-1">
                  {item.anomalousStations.toLocaleString('pl-PL')}
                </div>
                <div className="text-sm text-gray-500">komisji ({item.percentage})</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-yellow-50 rounded-lg p-6 border border-yellow-200"
        >
          <h3 className="font-semibold text-yellow-900 mb-2">
            Kluczowa obserwacja
          </h3>
          <p className="text-yellow-800">
            Nawet przy najbardziej konserwatywnym progu (k > 3.0), szacowane przesunięcie głosów
            zbliża się do oficjalnej różnicy. Przy niższych progach sugeruje to możliwość
            odwrócenia wyniku wyborów.
          </p>
        </motion.div>
      </div>
    </section>
  )
}