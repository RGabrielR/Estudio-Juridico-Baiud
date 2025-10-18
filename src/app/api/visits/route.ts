import { NextResponse, type NextRequest } from "next/server";

// Simplified version for Vercel deployment
// For production, consider using a database (Vercel KV, Supabase, etc.)

export async function POST(request: NextRequest) {
  // Log visit without persisting (use Google Analytics for actual tracking)
  const ip = request.headers.get("x-forwarded-for") ??
             request.headers.get("x-real-ip") ??
             "unknown";
  const userAgent = request.headers.get("user-agent") ?? "unknown";

  console.log(`Visit tracked: IP=${ip}, UA=${userAgent}, Time=${new Date().toISOString()}`);

  // Return success response
  return NextResponse.json({
    success: true,
    message: "Visit tracked via Google Analytics"
  });
}

export async function GET() {
  // Return basic info
  return NextResponse.json({
    success: true,
    message: "Visit tracking enabled via Google Analytics"
  });
}
