// @ts-check

export const createTsConfigBuildJson = () => `
{
    extends: './tsconfig.json',
    compilerOptions: {
        outDir: 'dist',
        declaration: true,
        emitDeclarationOnly: false,
        lib: ['ES2019', 'DOM'],
    },
    include: ['src', 'index.ts', '../../nativewind-env.d.ts']
}`;
