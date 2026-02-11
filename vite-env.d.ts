// Fix: Removed the reference to 'vite/client' which was causing a "not found" error.
// The environment provides these types elsewhere or we polyfill them below.

interface ImportMetaEnv {
  readonly [key: string]: string | boolean | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Fix: Augment the NodeJS namespace to define process.env structure without redeclaring 'process'.
declare namespace NodeJS {
  interface ProcessEnv {
    readonly API_KEY: string;
    [key: string]: string | undefined;
  }
}

// Fix: Removed the explicit 'declare var process' to resolve "Cannot redeclare block-scoped variable 'process'".
// The 'process' variable is already declared in the global scope by the environment.
