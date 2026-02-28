export const mockHistory = [
    { id: 1, type: 'Email', name: 'Urgent: Your account is locked', risk: 87, status: 'High Risk', date: '2026-02-27' },
    { id: 2, type: 'URL', name: 'https://secure-bank-login.com', risk: 72, status: 'Suspicious', date: '2026-02-26' },
    { id: 3, type: 'Email', name: 'Meeting Request: Project X', risk: 5, status: 'Safe', date: '2026-02-25' },
    { id: 4, type: 'URL', name: 'https://github.com/truthlens', risk: 0, status: 'Safe', date: '2026-02-24' },
];

export const mockUserStats = {
    emailsAnalyzed: 124,
    urlsScanned: 45,
    currentRiskLevel: 'Moderate',
    hygieneScore: 68,
};

export const mockEmailAnalysis = {
    riskScore: 87,
    redFlags: [
        'Urgency-based language detected',
        'Brand impersonation (Looks like PayPal)',
        'Suspicious sender domain (@pay-pal-secure.com)',
    ],
    explanation: 'This email uses high-pressure language to force you into acting without thinking. The sender domain also mimics a legitimate brand but is incorrectly spelled.',
    advice: [
        'Do not click any links in the email.',
        'Check the actual sender address, not just the display name.',
        'Go directly to the official website if you are concerned.',
    ]
};

export const mockUrlAnalysis = {
    domainAge: '2 months',
    https: 'Yes',
    brandSimilarity: 'High',
    riskScore: 72,
    redFlags: [
        'Domain is very young (only 2 months old)',
        'High similarity to "google.com" (gooogle.com)',
    ],
    explanation: 'This website is likely a phishing site designed to steal your credentials. It mimics a well-known brand and the domain was recently registered.',
};

export const mockHygieneData = {
    score: 68,
    breakdown: [
        { label: 'Suspicious clicks avoided', value: 85 },
        { label: 'Safe browsing habits', value: 60 },
        { label: 'Email caution score', value: 75 },
    ],
    suggestions: [
        'Enable 2nd Factor Authentication (2FA) on all sensitive accounts.',
        'Manually verify domains before entering passwords.',
        'Be wary of messages that create a false sense of urgency.',
    ]
};

export const simulateApi = (data, delay = 800) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, delay);
    });
};
