/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly TWITCH_CLIENT_ID: string;
    readonly TWITCH_CLIENT_SECRET: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  