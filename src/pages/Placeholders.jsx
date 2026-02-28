import React from 'react';

const PagePlaceholder = ({ name }) => (
    <div className="flex items-center justify-center min-h-[60vh] flex-col gap-4">
        <h1 className="text-4xl font-bold text-slate-800">{name} Page</h1>
        <p className="text-slate-500">Work in progress...</p>
    </div>
);

export const LandingPage = () => <PagePlaceholder name="Landing" />;
export const Dashboard = () => <PagePlaceholder name="Dashboard" />;
export const PhishingAnalyzer = () => <PagePlaceholder name="Phishing Analyzer" />;
export const UrlScanner = () => <PagePlaceholder name="URL Risk Scanner" />;
export const HygieneScore = () => <PagePlaceholder name="Digital Hygiene Score" />;
export const About = () => <PagePlaceholder name="About" />;
