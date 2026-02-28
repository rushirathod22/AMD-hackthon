import { motion } from 'framer-motion';
import { Shield, Target, User, TrendingUp, Lightbulb, CheckCircle2 } from 'lucide-react';
import { mockHygieneData } from '../data/mockData';

const HygieneScore = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Digital Hygiene Score</h1>
                    <p className="text-slate-500">A personalized assessment of your online security habits.</p>
                </div>
                <div className="flex gap-4">
                    <div className="bg-white dark:bg-slate-900 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
                        <User className="h-5 w-5 text-primary-600" />
                        <span className="font-bold text-slate-700 dark:text-slate-200 text-sm">Student ID: 4122-TX</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Score Card */}
                <div className="glass p-10 rounded-3xl border border-slate-200 border-b-8 border-b-primary-600 shadow-xl flex flex-col items-center justify-center space-y-6 text-center">
                    <div className="relative">
                        <svg className="w-48 h-48 transform -rotate-90">
                            <circle
                                className="text-slate-100 dark:text-slate-800"
                                strokeWidth="12"
                                stroke="currentColor"
                                fill="transparent"
                                r="85"
                                cx="96"
                                cy="96"
                            />
                            <motion.circle
                                initial={{ strokeDashoffset: 534 }}
                                animate={{ strokeDashoffset: 534 - (mockHygieneData.score / 100) * 534 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                strokeWidth="12"
                                strokeDasharray="534"
                                strokeLinecap="round"
                                stroke="#2563eb"
                                fill="transparent"
                                r="85"
                                cx="96"
                                cy="96"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-5xl font-black text-slate-900 dark:text-white">{mockHygieneData.score}%</span>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Excellent</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-800">Your Safety Rating</h3>
                        <p className="text-slate-500 text-sm mt-2 max-w-xs">
                            Based on your interaction with known phishing templates and secure browsing habit analysis.
                        </p>
                    </div>
                </div>

                {/* Breakdown & Suggestions */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="glass p-8 rounded-3xl border border-slate-200 shadow-sm">
                        <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-2">
                            <TrendingUp className="h-6 w-6 text-indigo-500" /> Score Breakdown
                        </h3>
                        <div className="space-y-8">
                            {mockHygieneData.breakdown.map((item, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between text-sm font-bold text-slate-600">
                                        <span>{item.label}</span>
                                        <span className="text-primary-600">{item.value}%</span>
                                    </div>
                                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${item.value}%` }}
                                            transition={{ duration: 1.5, delay: i * 0.2 }}
                                            className={`h-full rounded-full ${item.value > 80 ? 'bg-emerald-500' : item.value > 60 ? 'bg-primary-500' : 'bg-amber-500'
                                                }`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass p-8 rounded-3xl border border-slate-200 shadow-sm bg-gradient-to-br from-white to-slate-50 overflow-hidden relative">
                        <div className="absolute -right-8 -bottom-8 opacity-5">
                            <Lightbulb className="h-48 w-48 text-primary-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <Target className="h-6 w-6 text-emerald-500" /> Path to 100%
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {mockHygieneData.suggestions.map((tip, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:border-primary-200 transition-all group">
                                    <div className="p-2 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 shrink-0 transition-colors">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                                    </div>
                                    <p className="text-sm font-medium text-slate-600 leading-snug">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HygieneScore;
