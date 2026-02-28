import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, AlertTriangle, ShieldCheck, HelpCircle, Loader2, Copy, Share2 } from 'lucide-react';
import RiskMeter from '../components/RiskMeter';
import { mockEmailAnalysis, simulateApi } from '../data/mockData';

const PhishingAnalyzer = () => {
    const [emailContent, setEmailContent] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState(null);

    const handleAnalyze = async () => {
        if (!emailContent.trim()) return;
        setIsAnalyzing(true);
        setResult(null);
        const data = await simulateApi(mockEmailAnalysis, 2000);
        setResult(data);
        setIsAnalyzing(false);
    };

    return (
        <div className="max-w-5xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Email Phishing Analyzer</h1>
                <p className="text-slate-500">Paste suspicious email content below for an AI-powered safety breakdown.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left Side: Input */}
                <div className="glass p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-bold mb-2">
                        <Mail className="h-5 w-5 text-primary-600" /> Suspicious Email Content
                    </div>
                    <textarea
                        value={emailContent}
                        onChange={(e) => setEmailContent(e.target.value)}
                        placeholder="Paste suspicious email content here..."
                        className="w-full h-80 p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white dark:bg-slate-900 dark:border-slate-800 transition-all resize-none text-slate-700 dark:text-slate-300"
                    />
                    <button
                        onClick={handleAnalyze}
                        disabled={isAnalyzing || !emailContent.trim()}
                        className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                    >
                        {isAnalyzing ? (
                            <><Loader2 className="h-5 w-5 animate-spin" /> Analyzing Patterns...</>
                        ) : (
                            'Analyze Content'
                        )}
                    </button>
                </div>

                {/* Right Side: Results */}
                <div className="space-y-6 min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {!result && !isAnalyzing && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400"
                            >
                                <ShieldCheck className="h-16 w-16 mb-4 opacity-20" />
                                <p className="font-medium">Analysis results will appear here after scanning.</p>
                            </motion.div>
                        )}

                        {isAnalyzing && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="glass p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center space-y-6"
                            >
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-full border-4 border-primary-100 border-t-primary-600 animate-spin" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <ShieldCheck className="h-10 w-10 text-primary-600" />
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <h3 className="font-bold text-slate-800">ML Classification in progress</h3>
                                    <p className="text-sm text-slate-500">Checking for urgency triggers & domain spoofing...</p>
                                </div>
                            </motion.div>
                        )}

                        {result && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-6"
                            >
                                {/* Risk Score Card */}
                                <div className="glass p-8 rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 flex gap-2">
                                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><Copy className="h-4 w-4 text-slate-400" /></button>
                                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><Share2 className="h-4 w-4 text-slate-400" /></button>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center gap-8">
                                        <RiskMeter score={result.riskScore} size="lg" />
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-slate-800">Detection Results</h3>
                                            <div className="space-y-2">
                                                {result.redFlags.map((flag, i) => (
                                                    <div key={i} className="flex items-start gap-2 text-rose-600 bg-rose-50 px-3 py-2 rounded-lg text-sm font-medium">
                                                        <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
                                                        {flag}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* AI Explanation */}
                                <div className="glass p-6 rounded-2xl border-l-4 border-l-primary-500 border-slate-200 shadow-sm bg-primary-50/30">
                                    <div className="flex items-center gap-2 font-bold text-primary-700 mb-3">
                                        <HelpCircle className="h-5 w-5" /> AI Explanation
                                    </div>
                                    <p className="text-slate-700 leading-relaxed text-sm italic">"{result.explanation}"</p>
                                </div>

                                {/* Recommendations */}
                                <div className="glass p-6 rounded-2xl border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-slate-800 mb-4">What Should I Do?</h4>
                                    <ul className="space-y-3">
                                        {result.advice.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                                                <div className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default PhishingAnalyzer;
