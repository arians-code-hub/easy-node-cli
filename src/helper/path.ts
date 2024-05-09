export function moduleBasePath() : string|undefined{
    return require.main?.path;
}
export function basePath() : string{
    const module = moduleBasePath();
    return !!module ? module+'./../../' : './';
}