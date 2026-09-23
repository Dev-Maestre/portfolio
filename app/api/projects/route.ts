import { NextResponse } from "next/server";
import { projectsApi } from "../../../lib/portfolio";

export function GET() {
  return NextResponse.json(projectsApi, {
    headers: { "X-Powered-By": "Next.js" },
  });
}
