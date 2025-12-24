import { headers } from "next/headers";

export async function smartFetch(path: string): Promise<any> {
  const header = await headers();

  // Build an absolute URL for server-side fetch to avoid production issues
  const host = header.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/${path}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status}`);
  }

  const response =  await res.json()
  return response;
}
