// service for retrieving product data (TV list)
// we'll fetch the JSON file in src/data via a relative URL that works with Vite.

// build a URL pointing to the tv.json file so that it is resolved at build time
const tvUrl = new URL("../data/tv.json", import.meta.url).href;

/**
 * Get the list of products (TVs).
 * Returns a promise that resolves with the JSON array from tv.json.
 */
export function getProducts() {
    return fetch(tvUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        });
}
