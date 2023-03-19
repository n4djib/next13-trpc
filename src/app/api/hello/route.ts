import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // return new Response('Hello, Next.js!');

  const greeting = "Hello, Next.js!";
  return NextResponse.json({ greeting });
}
