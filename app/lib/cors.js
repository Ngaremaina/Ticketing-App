import NextCors from "nextjs-cors";

export async function runCors(request, response) {
  await NextCors(request, response, {
    origin: ["http://localhost:3000", "https://teeketee.vercel.app"],
    methods: ["GET", "POST", "OPTIONS"],
    optionsSuccessStatus: 200,
  });
}

export async function OPTIONS(request) {
  // Handle CORS preflight requests
  const response = new Response(null, { status: 204 });
  response.headers.set("Access-Control-Allow-Origin", ["http://localhost:3000", "https://teeketee.vercel.app"]);
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  return response;
}