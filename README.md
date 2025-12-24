# Student Speaking Assessment Report

A simple full-stack prototype that displays a student’s speaking assessment report, similar to IELTS / SpeechAce score reports.

This project focuses on clean UI, clear data flow, and basic feedback logic — not production-level features.

## 📌 Features

- Student list page
- Individual speaking assessment report page
- Overall score and skill-wise scores
  - Pronunciation
  - Fluency
  - Vocabulary
  - Grammar
- Graphical score representation using Chart.js
- Automatic descriptive feedback based on score ranges
- Read-only data (no editing, no authentication)

## 🧠 Feedback Logic

- Score ≥ 8 → Excellent performance with strong control
- Score 6–7 → Good performance with minor inaccuracies
- Score < 6 → Needs improvement

## ▶️ How to Run
> After cloning the repository:
```bash
npm install
npm run dev
```



## 🛠 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Chart.js + react-chartjs-2**

## 📊 Data Source

- Student data and records are served from a simple read-only API
- No database is used
- Only one student record is required for evaluation

```md
Scores are currently defined as a static object returned by the records API.

Example record format:
```ts
{
  overall: 10,
  pronunciation: 10,
  fluency: 10,
  vocabulary: 10,
  grammar: 10
}
```