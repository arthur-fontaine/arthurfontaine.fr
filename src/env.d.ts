/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly CLOUDFLARE_ACCOUNT_ID?: string;
    readonly CLOUDFLARE_KV_NAMESPACE_ID?: string;
    readonly CLOUDFLARE_API_TOKEN?: string;
    readonly CLOUDFLARE_ANALYTICS_TOKEN?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}