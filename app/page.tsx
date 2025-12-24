import StudentButton from "./components/StudentButton";
import Link from "next/link";
import ErrorBox from "./components/ErrorBox";
import { smartFetch } from "./lib/SmartFetch";

export default async function Home() {
  const res = await smartFetch("/api/students");

  if (res?.status !== 200) {
    return <ErrorBox>There was an error!</ErrorBox>;
  }

  if (!res?.data) {
    return <ErrorBox>No students found</ErrorBox>;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black font-mono">
      <div className="w-full max-w-3xl px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-5xl mb-3">Students</h1>
          <p className="text-gray-400">
            Select a student to view the speaking assessment report
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center">
          {Object.keys(res.data).map((roll) => (
            <Link
              key={roll}
              href={`/records/${roll}?name=${res.data[roll].name}`}
            >
              <StudentButton>
                <div className="flex items-center justify-between w-full">
                  <span>{res.data[roll].name}</span>
                </div>
              </StudentButton>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
