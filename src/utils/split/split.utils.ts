// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const splitArray = <T extends unknown>(arr: T[], size: number): T[][] => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) => 
    arr.slice(index * size, index * size + size));
};