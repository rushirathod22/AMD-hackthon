import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkles, X, Check } from 'lucide-react';

const OnboardingModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(0);

    useEffect(() => {
        const hasSeenOnboarding = localStorage.getItem('seenOnboarding');
        if (!hasSeenOnboarding) {
            const timer = setTimeout(() => setIsOpen(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const closeOnboarding = () => {
        setIsOpen(false);
        localStorage.setItem('seenOnboarding', 'true');
    };

    const steps = [
        {
            title: "Welcome to TruthLens",
            text: "Your intelligence-first cybersecurity companion designed for the modern digital era.",
            icon: <Shield className="h-12 w-12 text-primary-600 mb-4" />
        },
        {
            title: "See the Unseen",
            text: "Our AI breaks down exactly WHY a message or link is risky, teaching you as you browse.",
            icon: <Sparkles className="h-12 w-12 text-amber-500 mb-4" />
        },
        {
            title: "Ready to Start?",
            text: "Try out the demo by analyzing suspicious emails or scanning unknown URLs in the dashboard.",
            icon: <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}><Check className="h-12 w-12 text-emerald-500 mb-4" /></motion.div>
        }
    ];

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-8 max-w-lg w-full shadow-2xl relative overflow-hidden text-center border border-white/20"
                >
                    <button
                        onClick={closeOnboarding}
                        className="absolute top-4 right-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                    >
                        <X className="h-5 w-5 text-slate-400" />
                    </button>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            className="py-6 flex flex-col items-center"
                        >
                            {steps[step].icon}
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{steps[step].title}</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">{steps[step].text}</p>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex flex-col gap-4 mt-8">
                        <button
                            onClick={() => step < steps.length - 1 ? setStep(step + 1) : closeOnboarding()}
                            className="bg-primary-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary-200 hover:bg-primary-700 transition-all active:scale-95"
                        >
                            {step < steps.length - 1 ? "Next Tip" : "Get Started"}
                        </button>
                        <div className="flex justify-center gap-2">
                            {steps.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1.5 rounded-full transition-all ${idx === step ? 'w-8 bg-primary-600' : 'w-2 bg-slate-200'}`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default OnboardingModal;
