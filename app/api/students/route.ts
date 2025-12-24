import { NextRequest, NextResponse } from 'next/server';

const students = {
    "75748321001": {
        name: "Akash Thakur",
        age: "17",
        class: 11
    },
    "75748321002": {
        name: "Sanjay Rana",
        age: "17",
        class: 11
    },
    "75748321003": {
        name: "Rakesh Kumar",
        age: "17",
        class: 11
    }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('onlyRoll');

  if (query ===  "true") {
    return NextResponse.json({
        status: 200,
        data: Object.keys(students)
    });
  }

  return NextResponse.json({
    status: 200,
    data: students
  });
}