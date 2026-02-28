import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Shield className="h-6 w-6 text-primary-600" />
                            <span className="text-lg font-bold text-slate-900 dark:text-white">TruthLens</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 max-w-sm">
                            Empowering students and young professionals with AI-powered explainable security. Understand threats before they understand you.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary-600 text-sm">Features</a></li>
                            <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary-600 text-sm">Security</a></li>
                            <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary-600 text-sm">How it Works</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary-600 text-sm">About</a></li>
                            <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary-600 text-sm">Careers</a></li>
                            <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary-600 text-sm">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <p className="text-slate-400 text-xs text-center w-full">
                        &copy; {new Date().getFullYear()} TruthLens Security. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
