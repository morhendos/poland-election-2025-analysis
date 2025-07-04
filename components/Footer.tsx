"use client"

import { DocumentTextIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">O Analizie</h3>
            <p className="text-gray-400 text-sm">
              Niezależne badanie statystyczne przeprowadzone w celu
              zwiększenia przejrzystości procesów demokratycznych.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Autor</h3>
            <p className="text-gray-400 text-sm mb-2">
              Krzysztof Kontek, Merope
            </p>
            <p className="text-gray-400 text-sm">
              Warszawa, Polska
            </p>
            <a 
              href="mailto:krzysztof@merope.pl" 
              className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 mt-2"
            >
              <EnvelopeIcon className="h-4 w-4" />
              krzysztof@merope.pl
            </a>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Dokumenty Źródłowe</h3>
            <a 
              href="https://ssrn.com/abstract=5287665" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
            >
              <DocumentTextIcon className="h-4 w-4" />
              Artykuł naukowy (SSRN)
            </a>
            <p className="text-gray-400 text-sm mt-2">
              Dane z PKW - wybory.gov.pl
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Krzysztof Kontek. Analiza niezależna, nieafiliowana z żadną partią polityczną.
          </p>
        </div>
      </div>
    </footer>
  )
}