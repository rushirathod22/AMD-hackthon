import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Globe, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="space-y-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                            Understand Digital Threats <br />
                            <span className="text-primary-600">Before They Understand You.</span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-lg">
                            AI-powered explainable security built for students and young professionals. Protect your digital life with clarity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                to="/dashboard"
                                className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-700 transition-all shadow-lg shadow-primary-200 active:scale-95"
                            >
                                Try Demo <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link
                                to="/about"
                                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all active:scale-95"
                            >
                                See How It Works
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-primary-200 blur-3xl opacity-20 -z-10 rounded-full" />
                        <div className="glass rounded-2xl p-4 shadow-2xl border border-white/50">
                            <div className="bg-slate-900 rounded-xl overflow-hidden aspect-[4/3] relative flex items-center justify-center">
                                <ShieldCheck className="h-24 w-24 text-primary-500 animate-pulse" />
                                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
                                    <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "87%" }}
                                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                            className="h-full bg-primary-500"
                                        />
                                    </div>
                                    <p className="text-xs text-white/70 mt-2 font-mono">Analyzing suspicious_email_04.eml ... 87% Risk</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold text-slate-900">Advanced Security, Simplified</h2>
                    <p className="text-slate-600">The tools you need to stay safe in an increasingly complex digital world.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <ShieldCheck className="h-8 w-8 text-blue-500" />,
                            title: "Phishing Detection",
                            desc: "Context-aware AI that identifies psychological triggers and spoofing patterns in emails."
                        },
                        {
                            icon: <Globe className="h-8 w-8 text-indigo-500" />,
                            title: "URL Scam Scanner",
                            desc: "Real-time analysis of domain reputation, age, and visual similarity to known brands."
                        },
                        {
                            icon: <Zap className="h-8 w-8 text-amber-500" />,
                            title: "AI Teach-Back Mode",
                            desc: "We don't just block threats; we explain them so you become more digitally aware."
                        }
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="glass p-8 rounded-2xl shadow-sm border border-slate-200 transition-all hover:shadow-xl hover:border-primary-100"
                        >
                            <div className="bg-slate-50 rounded-xl p-3 w-fit mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-800">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why TruthLens Section */}
            <section className="bg-primary-600 rounded-3xl p-12 lg:p-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8 italic">Why TruthLens?</h2>
                        <div className="space-y-6">
                            {[
                                "Explainable AI: No 'Black Box' decisions.",
                                "Student-Focused: Designed for your lifestyle.",
                                "Real-Time Risk Scoring for immediate action.",
                                "Educational Feedback that builds skills."
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle className="h-6 w-6 text-primary-200 shrink-0" />
                                    <span className="text-lg font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="hidden lg:flex justify-end">
                        <ShieldCheck className="h-64 w-64 opacity-20" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
