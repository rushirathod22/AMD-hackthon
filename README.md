

# 🛡️ TruthLens

### Explainable AI Digital Safety Companion

TruthLens is an AI-powered browser-based assistant designed to detect phishing, scams, and risky digital behavior — while explaining *why* the content is dangerous.

It combines machine learning, heuristic detection, and an AI explanation layer to transform digital threat detection into digital awareness.

---

## 🚨 Problem Statement

Students and freshers are increasingly targeted by:

* Fake internship offers
* Scholarship scams
* Phishing emails impersonating banks or universities
* Suspicious links and malicious PDFs
* Misinformation and manipulated content

Existing cybersecurity tools:

* Are technical and complex
* Provide warnings without explanation
* Do not educate users
* Are not student-focused

As a result, users either panic or ignore alerts.

---

## 💡 Our Solution

TruthLens analyzes:

* Email content
* URLs
* Text-based suspicious messages

It generates:

* Risk score
* Highlighted red flags
* Plain-language explanation
* Actionable safety advice

TruthLens does not just detect threats — it teaches users how to recognize them.

---

## ✨ Core Features (MVP)

### 1️⃣ Phishing Analyzer

* Paste suspicious email
* ML-based risk score
* Highlighted red flags
* AI explanation layer

### 2️⃣ URL Risk Scanner

* HTTPS verification
* Domain age check
* Brand impersonation detection
* Scam probability score

### 3️⃣ AI Teach-Back Mode

* Explains risk in simple language
* Suggests preventive actions

### 4️⃣ Digital Hygiene Score

* Personalized safety score
* Improvement recommendations

---

## 🏗️ System Architecture

User Input (Email / URL / Text)
↓
Preprocessing Layer

* Text cleaning
* URL extraction
* Pattern detection

↓
ML Classification Model

* Phishing probability prediction

↓
Heuristic Engine

* Urgency detection
* Suspicious keywords
* Domain mismatch

↓
LLM Explanation Layer

* Converts technical signals into human-readable reasoning

↓
User Dashboard

* Risk score
* Red flags
* Safety advice

---

## 🧠 Technology Stack

Frontend:

* React.js
* Tailwind CSS

Backend:

* FastAPI / Node.js

Machine Learning:

* Scikit-learn classification model

LLM Layer:

* Open-source LLM (Mistral / LLaMA)

Security Checks:

* Regex pattern detection
* WHOIS domain age analysis
* HTTPS verification

---

## 📊 Example Output

**Input:**
“Your bank account will be suspended. Click here immediately.”

**Output:**

Risk Score: 87%

Detected Red Flags:

* Urgency-based language
* Impersonation pattern
* Suspicious link structure

Explanation:
This message uses urgency and impersonates a bank to pressure you into clicking a suspicious link. Always verify the sender’s official domain before taking action.

---

## 🎯 Target Users

* College students
* Internship applicants
* Fresh graduates
* University networks

---

## 🌍 Impact

TruthLens aims to:

* Reduce phishing success rates
* Prevent financial fraud
* Improve digital literacy
* Promote responsible AI usage
* Encourage safe browsing habits

It bridges the gap between threat detection and user understanding.

---

## 🚀 Installation (Frontend MVP)

Clone the repository:

```bash
git clone https://github.com/rushirathod22/AMD-hackthon.git
```

Navigate to project:

```bash
cd truthlens-frontend
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

## 📌 Future Scope

* Browser extension deployment
* Real-time email integration
* University network deployment
* Deepfake detection module
* Real-time phishing database integration

---

## 🎥 Demo

Demo Video:
(Add your YouTube or Drive link here)

---

## 📂 Repository Structure

```
truthlens-frontend/
│
├── components/
├── pages/
├── assets/
├── utils/
├── mock-data/
└── README.md
```

---

## 🏆 Why TruthLens?

* Explainable AI approach
* Student-focused security
* Combines ML + heuristics + LLM
* Real-world impact
* Demo-ready MVP

TruthLens transforms digital safety into digital awareness.

---

I
