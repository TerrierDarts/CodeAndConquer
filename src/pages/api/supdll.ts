// src/pages/api/version.ts
export async function GET() {
  const url = "https://api.github.com/repos/StreamUPTips/StreamUPDLL/releases/latest";
  
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "StreamUP-Library-Updater"
      }
    });
    
    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    const version = data.tag_name?.replace("v", "");
    
    if (!version) {
      return new Response("Failed to parse version from JSON response.", 
        { status: 500, headers: { "Content-Type": "text/plain" } }
      );
    }
    
    return new Response(version, 
      { headers: { "Content-Type": "text/plain" } }
    );
  } catch (error) {
    return new Response(`Request failed: ${error.message}`, 
      { status: 500, headers: { "Content-Type": "text/plain" } }
    );
  }
}