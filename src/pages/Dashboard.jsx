import { motion } from 'framer-motion';
import {
    BarChart3,
    Mail,
    Link as LinkIcon,
    ShieldAlert,
    TrendingUp,
    Clock,
    ArrowUpRight,
    Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockHistory, mockUserStats } from '../data/mockData';

const StatCard = ({ title, value, icon: Icon, percentage, trend = "up" }) => (
    <motion.div
        whileHover={{ y: -4 }}
        className="glass p-6 rounded-2xl border border-slate-200 shadow-sm"
    >
        <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-xl">
                <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            {percentage && (
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${trend === 'up' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                    }`}>
                    {trend === 'up' ? '+' : '-'}{percentage}%
                </span>
            )}
        </div>
        <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{value}</h3>
    </motion.div>
);

const Dashboard = () => {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Security Overview</h1>
                    <p className="text-slate-500">Welcome back! Here's your digital safety status.</p>
                </div>
                <Link
                    to="/analyze"
                    className="bg-primary-600 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-primary-700 shadow-lg active:scale-95 transition-all"
                >
                    <Plus className="h-5 w-5" /> Quick Analyze
                </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Emails Analyzed"
                    value={mockUserStats.emailsAnalyzed}
                    icon={Mail}
                    percentage={12}
                />
                <StatCard
                    title="URLs Scanned"
                    value={mockUserStats.urlsScanned}
                    icon={LinkIcon}
                    percentage={8}
                />
                <StatCard
                    title="Current Risk"
                    value={mockUserStats.currentRiskLevel}
                    icon={ShieldAlert}
                    percentage={2}
                    trend="down"
                />
                <StatCard
                    title="Hygiene Score"
                    value={`${mockUserStats.hygieneScore}%`}
                    icon={TrendingUp}
                    percentage={5}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Activity Timeline */}
                <div className="lg:col-span-2">
                    <div className="glass rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50">
                            <h3 className="font-bold flex items-center gap-2">
                                <Clock className="h-5 w-5 text-primary-600" /> Recent Activity
                            </h3>
                            <button className="text-sm text-primary-600 font-medium hover:underline">View all</button>
                        </div>
                        <div className="divide-y divide-slate-100 dark:divide-slate-800">
                            {mockHistory.map((item) => (
                                <div key={item.id} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-lg ${item.type === 'Email' ? 'bg-blue-50 text-blue-600' : 'bg-indigo-50 text-indigo-600'
                                            }`}>
                                            {item.type === 'Email' ? <Mail className="h-5 w-5" /> : <LinkIcon className="h-5 w-5" />}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-800 dark:text-slate-200 truncate max-w-[200px] sm:max-w-xs">{item.name}</p>
                                            <p className="text-xs text-slate-500">{item.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div className="text-right hidden sm:block">
                                            <p className="text-xs font-medium text-slate-400 uppercase tracking-tighter">Risk Score</p>
                                            <p className={`text-sm font-bold ${item.risk > 70 ? 'text-rose-600' : item.risk > 40 ? 'text-amber-600' : 'text-emerald-600'
                                                }`}>{item.risk}%</p>
                                        </div>
                                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${item.status === 'High Risk' ? 'bg-rose-50 text-rose-700 border border-rose-100' :
                                                item.status === 'Suspicious' ? 'bg-amber-50 text-amber-700 border border-amber-100' :
                                                    'bg-emerald-50 text-emerald-700 border border-emerald-100'
                                            }`}>
                                            {item.status}
                                        </span>
                                        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                                            <ArrowUpRight className="h-4 w-4 text-slate-400" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Tips / Info */}
                <div className="space-y-6">
                    <div className="glass p-6 rounded-2xl border border-slate-200 shadow-sm bg-gradient-to-br from-primary-600 to-primary-800 text-white">
                        <ShieldAlert className="h-10 w-10 mb-4 opacity-80" />
                        <h3 className="text-xl font-bold mb-2">Secure Your Account</h3>
                        <p className="text-primary-100 text-sm mb-6 leading-relaxed">
                            We've noticed you haven't enabled 2FA yet. Users with 2FA are 99% less likely to be phished.
                        </p>
                        <button className="w-full bg-white text-primary-700 py-3 rounded-xl font-bold shadow-lg shadow-primary-900/20 active:scale-95 transition-all">
                            Setup Now
                        </button>
                    </div>

                    <div className="glass p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-indigo-500" /> Security Tip
                        </h4>
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <p className="text-sm text-slate-600 italic">
                                "Always hover over links to see the real destination URL before clicking."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
