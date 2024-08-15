declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test" | "local" | "staging";
    PORT: string;
    MONGO_URI: string;
    ALLOWED_ORIGIN: string;
  }
}
