"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import Link from "next/link";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

type Props = {
  name?: string;
  scores: {
    overall: number;
    pronunciation: number;
    fluency: number;
    vocabulary: number;
    grammar: number;
  };
};

export default function ReportUI({ name, scores }: Props) {
  const feedback =
    scores.overall >= 8
      ? "Excellent performance with strong control."
      : scores.overall >= 6
      ? "Good performance with minor inaccuracies."
      : "Needs improvement.";

  const data = {
    labels: ["Pronunciation", "Fluency", "Vocabulary", "Grammar"],
    datasets: [
      {
        label: "Score (out of 9)",
        data: [
          scores.pronunciation,
          scores.fluency,
          scores.vocabulary,
          scores.grammar,
        ],
        backgroundColor: "rgba(59,130,246,0.6)",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 9,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-8 font-mono">
  <Link href={`/`} className="mb-6">
    <div
      className="
        group
        cursor-pointer
        text-sm text-gray-400 
        hover:text-white 
        transition-colors
        flex items-center gap-2
      "
    >
      <div className={`group-hover:-translate-x-2 transition-transform`}>←</div>
      <div>Go back</div>
    </div>
  </Link>

  <h1 className="text-4xl mt-3">Speaking Assessment Report</h1>
  <p className="text-gray-400 mb-8">
    {name ? `Student: ${name}` : "Student Report"}
  </p>

  <div className="mb-8">
    <h2 className="text-2xl mb-2">Overall Score</h2>
    <div className="text-5xl font-bold text-blue-400">
      {scores.overall} / 9
    </div>
  </div>

  <div className="mb-10">
    <Bar data={data} options={options} />
  </div>

  <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
    <h2 className="text-xl mb-2">Descriptive Feedback</h2>
    <p className="text-gray-300">{feedback}</p>
  </div>
</div>

  );
}
