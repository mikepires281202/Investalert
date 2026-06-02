import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-6">
          <TrendingUp className="h-8 w-8 text-blue-600" />
          <span className="font-bold text-2xl tracking-tight">InvestAlert</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Acesse sua conta
        </h2>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-3xl sm:px-10 border border-slate-100">
          
          <div className="space-y-4">
            <Link
              to="/dashboard"
              className="w-full flex justify-center py-3 px-4 border border-slate-300 rounded-full shadow-sm text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 transition-colors"
            >
              Continuar com Google
            </Link>
            
            <Link
              to="/dashboard"
              className="w-full flex justify-center py-3 px-4 border border-slate-300 rounded-full shadow-sm text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 transition-colors"
            >
              Continuar com Apple
            </Link>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500">Ou use seu WhatsApp</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
             <Link
                to="/dashboard"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Acessar com Número
              </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
