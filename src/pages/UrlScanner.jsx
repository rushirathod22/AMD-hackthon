import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, ShieldAlert, CheckCircle, Info, Loader2, AlertCircle } from 'lucide-react';
import RiskMeter from '../components/RiskMeter';
import { mockUrlAnalysis, simulateApi } from '../data/mockData';

const UrlScanner = () => {
    const [url, setUrl] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const [result, setResult] = useState(null);

    const handleScan = async (e) => {
        e.preventDefault();
        if (!url.trim()) return;
        setIsScanning(true);
        setResult(null);
        const data = await simulateApi(mockUrlAnalysis, 2500);
        setResult(data);
        setIsScanning(false);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">URL Risk Scanner</h1>
                <p className="text-slate-500 max-w-xl mx-auto">
                    Verify any website link instantly. We analyze domain age, reputation, and brand similarity to detect scams.
                </p>
            </div>

            {/* Search Layout */}
            <div className="space-y-8">
                <form onSubmit={handleScan} className="relative group">
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter URL to scan (e.g., https://example.com)"
                        className="w-full p-6 pl-14 rounded-2xl border border-slate-200 shadow-xl focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 outline-none bg-white dark:bg-slate-900 dark:border-slate-800 transition-all text-lg"
                    />
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 group-focus-within:text-primary-600 transition-colors" />
                    <button
                        type="submit"
                        disabled={isScanning || !url.trim()}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-primary-700 disabled:opacity-50 transition-all active:scale-95"
                    >
                        {isScanning ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Scan URL'}
                    </button>
                </form>

                <AnimatePresence mode="wait">
                    {isScanning && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="glass p-12 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center justify-center space-y-6"
                        >
                            <div className="flex gap-2">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                        className="h-3 w-3 rounded-full bg-primary-600"
                                    />
                                ))}
                            </div>
                            <div className="text-center">
                                <p className="font-bold text-slate-800">Connecting to heuristic engine...</p>
                                <p className="text-sm text-slate-500 italic">Verifying domain history and visual similarity...</p>
                            </div>
                        </motion.div>
                    )}

                    {result && !isScanning && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {/* Risk Meter Card */}
                            <div className="glass p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center justify-center space-y-4">
                                <RiskMeter score={result.riskScore} size="lg" />
                                <div className="text-center pt-2">
                                    <span className={`px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider ${result.riskScore > 70 ? 'bg-rose-100 text-rose-700' : 'bg-emerald-100 text-emerald-700'
                                        }`}>
                                        {result.riskScore > 70 ? 'High Risk' : 'Low Risk'}
                                    </span>
                                </div>
                            </div>

                            {/* Data Breakdown */}
                            <div className="md:col-span-2 space-y-6">
                                <div className="glass p-8 rounded-3xl border border-slate-200 shadow-sm h-full">
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <ShieldAlert className="h-6 w-6 text-primary-600" /> Analysis Breakdown
                                    </h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                        {[
                                            { label: 'Domain Age', value: result.domainAge, icon: <ClockIcon className="h-5 w-5" /> },
                                            { label: 'HTTPS Secure', value: result.https, icon: <Globe className="h-5 w-5" />, highlight: result.https === 'Yes' },
                                            { label: 'Brand Similarity', value: result.brandSimilarity, icon: <AlertCircle className="h-5 w-5" /> },
                                        ].map((item, i) => (
                                            <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                                                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
                                                    {item.icon} {item.label}
                                                </div>
                                                <div className={`font-bold ${item.highlight ? 'text-emerald-600' : 'text-slate-800 dark:text-slate-200'}`}>
                                                    {item.value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="font-bold text-slate-700 text-sm">AI Flag Assessment:</h4>
                                        <div className="space-y-3">
                                            {result.redFlags.map((flag, i) => (
                                                <div key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                                                    <CheckCircle className={`h-4 w-4 shrink-0 ${result.riskScore > 50 ? 'text-rose-500' : 'text-emerald-500'}`} />
                                                    {flag}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* AI Explanation Modal Style */}
                            <div className="md:col-span-3 glass p-6 rounded-2xl border border-primary-100 bg-primary-50/20">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-primary-100 rounded-lg shrink-0">
                                        <Info className="h-5 w-5 text-primary-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary-900 mb-1">Explainable Insight</h4>
                                        <p className="text-slate-700 leading-relaxed italic text-sm">"{result.explanation}"</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

const ClockIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export default UrlScanner;
