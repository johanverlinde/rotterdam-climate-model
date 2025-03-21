import { NextRequest } from 'next/server';

// This is a placeholder for the actual 3D model data
// In a real implementation, this would be replaced with the actual model data
export async function GET(request: NextRequest) {
  return new Response(
    JSON.stringify({
      message: "This is a placeholder for the Rotterdam 3D model data. In a production environment, this would serve the actual 3D model file."
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
