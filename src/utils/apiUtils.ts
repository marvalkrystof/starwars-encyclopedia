export function getEndpointFromUrl(url: string): string {
  return url.replace("http://localhost:8000/api", "");
}
