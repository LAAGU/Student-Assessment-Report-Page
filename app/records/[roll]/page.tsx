import ErrorBox from "@/app/components/ErrorBox";
import { smartFetch } from "@/app/lib/SmartFetch";
import ReportUI from "./ReportUI";

type PageProps = {
    params: {
        roll: string
    },
    searchParams: {
        name?: string
    }
}


export default async function RecordPage({ params,  searchParams }: PageProps) {
    const id = await params;
    const roll = id.roll
    const queryName = await searchParams
    const name = queryName.name

    const res = await smartFetch(`api/records?roll=${roll}`)


    if (res?.status !== 200) {
        return <ErrorBox>
            There was an error!
        </ErrorBox>
    }

    if (!res?.data) {
        return <ErrorBox>
            No records found
        </ErrorBox>
    }

    return <ReportUI name={name || "Unkown"} scores={res.data} />
}