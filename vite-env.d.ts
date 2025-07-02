interface ImportMetaEnv {
  [x: string]: string;
  VITE_API_URL: string | undefined;
  readonly VITE_BASE_URL: string;
  readonly VITE_REALM: string;
  readonly VITE_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
