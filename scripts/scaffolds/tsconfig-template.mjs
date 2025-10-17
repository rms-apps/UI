// @ts-check

export const createTsConfigJson = () => `
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "dist"
  },
  "include": ["src", "index.ts"]
}`;
