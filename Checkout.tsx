import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ShieldCheck } from 'lucide-react';

export default function Checkout() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-6">
          <TrendingUp className="h-8 w-8 text-blue-600" />
          <span className="font-bold text-2xl tracking-tight">InvestAlert</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Complete sua assinatura
        </h2>
        <p className="mt-2 text-slate-600">
          Receba os melhores relatórios diretamente no seu WhatsApp
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-3xl sm:px-10 border border-slate-100">
          <div className="mb-8 p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-slate-900">Plano Mensal</span>
              <span className="font-bold text-xl text-blue-600">R$ 50,00</span>
            </div>
            <p className="text-sm text-slate-500">Acesso completo a relatórios diários em PDF e Áudio.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                Seu número de WhatsApp
              </label>
              <div className="mt-1">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="(00) 00000-0000"
                  className="appearance-none block w-full px-3 py-3 border border-slate-300 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <Link
                to="/dashboard"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer text-center"
              >
                Pagar com Pix ou Cartão
              </Link>
            </div>
          </form>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500 font-mono">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            Pagamento 100% Seguro
          </div>
        </div>
      </div>
    </div>
  );
}
