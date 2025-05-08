export function getFavicon(domain: string): string {
    try {
        const url = new URL(domain);
        return `${url.origin}/favicon.ico`;
    } catch (e) {
        console.error("Invalid URL", e);
        return "";
    }
}