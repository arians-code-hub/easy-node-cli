export function basePath() : any{
    const base = require.main;
    return base;
}