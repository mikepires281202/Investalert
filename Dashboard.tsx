import React, { useState } from 'react';
import { Theme, Format } from '../types';
import { Check, Headphones, FileText, Settings, Share, LogOut, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [activeThemes, setActiveThemes] = useState<Theme[]>(['Renda Fixa']);
  const [activeFormats, setActiveFormats] = useState<Format[]>(['PDF']);

  const toggleTheme = (theme: Theme) => {
    setActiveThemes(prev => 
      prev.includes(theme) ? prev.filter(t => t !== theme) : [...prev, theme]
    );
  };

  const toggleFormat = (format: Format) => {
    setActiveFormats(prev => 
      prev.includes(format) ? prev.filter(f => f !== format) : [...prev, format]
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight">InvestAlert<span className="text-blue-600">Panel</span></div>
          <button className="text-slate-500 hover:text-slate-900 transition flex items-center gap-2 text-sm">
            <LogOut className="w-4 h-4" /> Sair
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Painel de Controle</h1>
          <p className="text-slate-600">Personalize os temas e formatos dos relatórios que você recebe.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Themes Panel */}
          <section className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Temas Analisados</h2>
            </div>
            <div className="space-y-3">
              {(['Renda Fixa', 'Renda Variável', 'Petróleo'] as Theme[]).map(theme => {
                const isActive = activeThemes.includes(theme);
                return (
                  <button
                    key={theme}
                    onClick={() => toggleTheme(theme)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                      isActive ? 'border-blue-600 bg-blue-50/50' : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className={`font-medium ${isActive ? 'text-blue-900' : 'text-slate-700'}`}>{theme}</span>
                    {isActive && <CheckCircle className="w-5 h-5 text-blue-600" />}
                  </button>
                )
              })}
            </div>
          </section>

          {/* Formats Panel */}
          <section className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Formato de Entrega</h2>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => toggleFormat('PDF')}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${
                  activeFormats.includes('PDF') ? 'border-blue-600 bg-blue-50/50' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className={`p-2 rounded-lg ${activeFormats.includes('PDF') ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                  <FileText className="w-5 h-5" />
                </div>
                <div className="text-left flex-1">
                  <span className={`block font-medium ${activeFormats.includes('PDF') ? 'text-blue-900' : 'text-slate-700'}`}>Resumo em PDF</span>
                  <span className="text-sm text-slate-500">Documento consolidado focado em visualização</span>
                </div>
                {activeFormats.includes('PDF') && <CheckCircle className="w-5 h-5 text-blue-600" />}
              </button>

              <button
                onClick={() => toggleFormat('Áudio')}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all ${
                  activeFormats.includes('Áudio') ? 'border-blue-600 bg-blue-50/50' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className={`p-2 rounded-lg ${activeFormats.includes('Áudio') ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                  <Headphones className="w-5 h-5" />
                </div>
                <div className="text-left flex-1">
                  <span className={`block font-medium ${activeFormats.includes('Áudio') ? 'text-blue-900' : 'text-slate-700'}`}>Áudio Explicativo</span>
                  <span className="text-sm text-slate-500">Ouça as análises no trânsito ou academia</span>
                </div>
                {activeFormats.includes('Áudio') && <CheckCircle className="w-5 h-5 text-blue-600" />}
              </button>
            </div>
          </section>

          {/* Integration Status (Mock for preview) */}
          <section className="bg-slate-900 text-white rounded-3xl p-6 md:col-span-2">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Canal Ativo: WhatsApp</h3>
                <p className="text-slate-400">Número verificado: +55 (11) 99999-9999</p>
              </div>
              <button className="bg-white/10 hover:bg-white/20 transition px-6 py-3 rounded-full font-medium flex items-center gap-2">
                <Share className="w-4 h-4" /> Indicar a um amigo
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
