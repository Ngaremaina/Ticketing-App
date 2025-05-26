import NextCors from "nextjs-cors";

export function setCorsHeaders(response, origin) {
  const allowedOrigins = ["http://localhost:3000", "https://teeketee.vercel.app"];
  const allowOrigin = allowedOrigins.includes(origin) ? origin : "";

  response.headers.set("Access-Control-Allow-Origin", allowOrigin);
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return response;
}

export async function OPTIONS(request) {
  const origin = request.headers.get("origin") || "*";

  const headers = new Headers({
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  });

  return new Response(null, {
    status: 204,
    headers,
  });
}