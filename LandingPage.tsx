import React from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { TrendingUp, Clock, FileText, Smartphone, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const performanceData = [
  { month: 'Jan', value: 120 },
  { month: 'Fev', value: 150 },
  { month: 'Mar', value: 140 },
  { month: 'Abr', value: 170 },
  { month: 'Mai', value: 210 },
  { month: 'Jun', value: 250 },
  { month: 'Jul', value: 240 },
  { month: 'Ago', value: 310 },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl tracking-tight">InvestAlert</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Entrar
            </Link>
            <Link to="/checkout" className="text-sm font-semibold bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition">
              Assinar Agora
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
              Domine o mercado com relatórios <span className="text-blue-600">direto no seu WhatsApp.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl">
              Análises precisas de Renda Fixa, Renda Variável e Petróleo entregues automaticamente em PDF ou Áudio. Tome decisões sem perder tempo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/checkout" className="inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition">
                Comece Agora
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="flex items-center text-sm text-slate-500 gap-2 justify-center mt-2 sm:mt-0 font-mono">
                <ShieldCheck className="w-4 h-4" /> Cancelamento fácil
              </p>
            </div>
          </motion.div>

          {/* Hero Chart Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100"
          >
            <div className="mb-4">
              <h3 className="font-semibold text-slate-800">Rentabilidade Média dos Ativos</h3>
              <p className="text-sm text-slate-500 font-mono">Últimos 8 meses</p>
            </div>
            <div className="h-64 sm:h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#2563eb"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ajudamos você a focar no que importa</h2>
            <p className="text-slate-600">Pare de caçar informações dispersas pela CVM e Banco Central.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "10h/semana", desc: "Economizadas em leitura de balanços e indicadores." },
              { icon: TrendingUp, title: "+35% ROI", desc: "Rentabilidade média superior em carteiras analisadas." },
              { icon: FileText, title: "15 min", desc: "Tempo de leitura do nosso relatório consolidado." },
              { icon: Smartphone, title: "100%", desc: "Conteúdo focado nos formatos PDF ou Áudio direto no chat." },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-slate-200 transition"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  <metric.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 font-mono">{metric.title}</h3>
                <p className="text-slate-600">{metric.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Footer */}
      <section className="bg-slate-900 py-24 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Pronto para otimizar seus investimentos?</h2>
        <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
          Assinatura de R$ 50,00/mês. Cancele a qualquer momento. Junte-se aos investidores que confiam na automação dos dados.
        </p>
        <Link to="/checkout" className="inline-block bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition">
          Assinar Plano Mensal
        </Link>
      </section>
    </div>
  );
}
