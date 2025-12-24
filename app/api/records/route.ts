import { NextRequest, NextResponse } from 'next/server';

type Records = {
    [rollNumber: string]: {
        [scores: string]: number
    }

}

const records: Records = {
    "75748321001": {
        overall: 9,
        pronunciation: 9,
        fluency: 9,
        vocabulary: 9,
        grammar: 9
    },
    "75748321002": {
        overall: 7,
        pronunciation: 7,
        fluency: 6,
        vocabulary: 7,
        grammar: 6
    },
    "75748321003": {
        overall: 3,
        pronunciation: 2,
        fluency: 1,
        vocabulary: 4,
        grammar: 1
    }
}


export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('roll');

    if (query) {
      if (!records?.[query]) return NextResponse.json({
        status: 404,
        data: {}
      })
        return NextResponse.json({
            status: 200,
            data: records?.[query]
        })
    }

    return NextResponse.json({
        status: 200,
        data: records
    });
}