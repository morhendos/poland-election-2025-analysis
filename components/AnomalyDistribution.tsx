"use client"

import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

export default function AnomalyDistribution() {
  const anomalyTypes = [
    { name: 'Nadmierne poparcie', value: 3462, color: '#EF4444' },
    { name: 'Nienaturalny wzrost', value: 1524, color: '#F59E0B' },
    { name: 'Odwrócenie trendu', value: 2070, color: '#3B82F6' },
    { name: 'Spadek głosów', value: 128, color: '#8B5CF6' }
  ]

  const multipleAnomalies = [
    { label: '2+ typy anomalii', count: 1482, color: '#DC2626' },
    { label: '3+ typy anomalii', count: 216, color: '#991B1B' },
    { label: '4 typy anomalii', count: 33, color: '#7F1D1D' }
  ]

  return (
    <section id="distribution" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Rozkład Typów Anomalii
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Analiza wykryła cztery główne typy nieprawidłowości statystycznych
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Typy Wykrytych Anomalii
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={anomalyTypes}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ value }) => `${value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {anomalyTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => value.toLocaleString('pl-PL')} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Nakładanie się Anomalii
            </h3>
            <p className="text-gray-600 mb-6">
              Wiele komisji wykazało więcej niż jeden typ anomalii, co sugeruje
              zwiększone ryzyko nieprawidłowości.
            </p>
            <div className="space-y-4">
              {multipleAnomalies.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    <span className="text-sm font-bold text-gray-900">{item.count} komisji</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-6">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.count / 1482) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-6 rounded-full flex items-center justify-end px-2"
                      style={{ backgroundColor: item.color }}
                    >
                      <span className="text-xs text-white font-medium">
                        {((item.count / 31631) * 100).toFixed(2)}%
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
              <p className="text-sm text-red-800">
                <span className="font-semibold">33 komisje</span> wykazały wszystkie 4 typy anomalii
                jednocześnie, co stanowi poważny sygnał ostrzegawczy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}