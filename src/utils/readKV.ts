import fetch from "node-fetch";

export default async (key: string, isFile = false) => {
    const { CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_KV_NAMESPACE_ID, CLOUDFLARE_API_TOKEN } = import.meta.env;
    try {
        const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/storage/kv/namespaces/${CLOUDFLARE_KV_NAMESPACE_ID}/values/${key}`, {
            headers: {
                "Authorization": `Bearer ${CLOUDFLARE_API_TOKEN}`,
                "Content-Type": "application/json"
            }
        })

        if (isFile) {
            return await response.arrayBuffer();
        } else {
            const data = await response.text();

            try {
                return JSON.parse(data);
            } catch (e) {
                return data;
            }
        }
    } catch (error) {
        console.error(error);
        return;
    }
}
