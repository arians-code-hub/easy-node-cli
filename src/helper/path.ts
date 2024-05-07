export function moduleBasePath() : string|undefined{
    return require.main?.path;
}
export function basePath() : string{
    return moduleBasePath() ?? './';
}