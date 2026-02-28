import { motion } from 'framer-motion';

const RiskMeter = ({ score, size = "md" }) => {
    const getColors = (s) => {
        if (s > 70) return { stroke: '#e11d48', bg: '#fff1f2', text: 'text-rose-600' };
        if (s > 40) return { stroke: '#d97706', bg: '#fffbeb', text: 'text-amber-600' };
        return { stroke: '#059669', bg: '#ecfdf5', text: 'text-emerald-600' };
    };

    const colors = getColors(score);
    const strokeWidth = size === "lg" ? 8 : 6;
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center">
            <svg
                className={`${size === "lg" ? "w-40 h-40" : "w-24 h-24"} transform -rotate-90`}
                viewBox="0 0 100 100"
            >
                <circle
                    className="text-slate-200 dark:text-slate-800"
                    strokeWidth={strokeWidth}
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx="50"
                    cy="50"
                />
                <motion.circle
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    stroke={colors.stroke}
                    strokeLinecap="round"
                    fill="transparent"
                    r={radius}
                    cx="50"
                    cy="50"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`font-bold ${size === "lg" ? "text-4xl" : "text-xl"} ${colors.text}`}>
                    {score}%
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">
                    Risk
                </span>
            </div>
        </div>
    );
};

export default RiskMeter;
