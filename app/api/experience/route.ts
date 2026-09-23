import { NextResponse } from "next/server";
import { experienceApi } from "../../../lib/portfolio";

export function GET() {
  return NextResponse.json(experienceApi, {
    headers: { "X-Powered-By": "Next.js" },
  });
}
