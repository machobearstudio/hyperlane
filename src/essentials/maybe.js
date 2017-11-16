export const maybe1 = f => x => (x === undefined ? undefined : f(x))
export const maybe2 = f => (x, y) => (x === undefined || y === undefined ? undefined : f(x, y))
