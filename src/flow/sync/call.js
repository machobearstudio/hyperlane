const call = (func, args) => input => func(...args.map(x => x(input)))

export default call
