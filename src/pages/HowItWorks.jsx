import { motion } from 'framer-motion';
import {
    Database,
    Cpu,
    CheckCircle,
    ArrowRight,
    Search,
    Layout,
    ShieldCheck,
    FileText
} from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: "Input Data",
            desc: "Paste an email or enter a suspicious URL for analysis.",
            icon: <FileText className="h-6 w-6 text-blue-600" />,
        },
        {
            id: 2,
            title: "ML Classification",
            desc: "Our neural network identifies linguistic triggers and spoofing indicators.",
            icon: <Cpu className="h-6 w-6 text-indigo-600" />,
        },
        {
            id: 3,
            title: "Heuristic Analysis",
            desc: "We check domain history, SSL certificates, and visual similarity scores.",
            icon: <Search className="h-6 w-6 text-emerald-600" />,
        },
        {
            id: 4,
            title: "AI Explanation",
            desc: "The 'Teach-Back' engine generates a human-readable safety breakdown.",
            icon: <ShieldCheck className="h-6 w-6 text-primary-600" />,
        },
        {
            id: 5,
            title: "Risk Dashboard",
            desc: "View your personal safety score and improve your digital hygiene.",
            icon: <Layout className="h-6 w-6 text-slate-600" />,
        }
    ];

    return (
        <div className="max-w-6xl mx-auto py-12 space-y-20">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white">How TruthLens Works</h1>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                    TruthLens combines machine learning, heuristic analysis, and explainable AI to protect you while teaching you advanced security habits.
                </p>
            </div>

            {/* Step Flow */}
            <div className="relative">
                {/* Connection Line */}
                <div className="hidden lg:block absolute top-[2.75rem] left-10 right-10 h-0.5 bg-slate-100 dark:bg-slate-800 -z-10" />

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-6">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center text-center space-y-6"
                        >
                            <div className="relative">
                                <div className="h-20 w-20 rounded-2xl glass flex items-center justify-center border border-slate-200 shadow-lg bg-white dark:bg-slate-900">
                                    {step.icon}
                                </div>
                                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold border-4 border-slate-50 dark:border-slate-950">
                                    {step.id}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-bold text-slate-800 dark:text-slate-200">{step.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                            </div>
                            {idx < steps.length - 1 && (
                                <div className="md:hidden flex flex-col items-center">
                                    <ArrowRight className="h-6 w-6 text-slate-300 rotate-90" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Detail Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="glass p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                    <div className="p-3 bg-blue-50 w-fit rounded-xl">
                        <Cpu className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        Explainable Detection
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                        Most security tools are "Black Boxes." At TruthLens, we believe understanding is the best defense. Our AI breaks down its reasoning into plain English, helping you recognize the same patterns in the future.
                    </p>
                    <ul className="space-y-3">
                        {["Psychological trigger detection", "Domain impersonation scores", "URGENCY-based sentiment"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                                <CheckCircle className="h-4 w-4 text-emerald-500" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="glass p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                    <div className="p-3 bg-indigo-50 w-fit rounded-xl">
                        <Database className="h-8 w-8 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-primary-600">
                        Real-Time Heuristics
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                        We don't just rely on databases of known scams. We analyze properties of links and messages in real-time, catching "Zero Day" threats that haven't been reported by other security tools yet.
                    </p>
                    <ul className="space-y-3">
                        {["Domain age verification", "Visual similarity analysis", "Redirect chain scanning"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                                <CheckCircle className="h-4 w-4 text-emerald-500" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
