import { NextResponse } from "next/server";
import { profileApi } from "../../../lib/portfolio";

export function GET() {
  return NextResponse.json(profileApi, {
    headers: { "X-Powered-By": "Next.js" },
  });
}
