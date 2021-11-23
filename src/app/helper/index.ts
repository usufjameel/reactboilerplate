export const getCopy = (object: any) => {
    return JSON.parse(JSON.stringify(object))
}
