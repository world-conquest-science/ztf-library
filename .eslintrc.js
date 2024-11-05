export default {
  root: true,
  env: { node: true },
  extends: ["eslint:recommended", "next/core-web-vitals", "next/typescript"],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
};
