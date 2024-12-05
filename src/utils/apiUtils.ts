export function getEndpointFromUrl(url : string) : string {
    return url.replace('https://swapi.dev/api', '')
}