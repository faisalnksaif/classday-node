const asyncHandler = fn =>
    function (...args) {
        const result = fn(...args)
        return Promise.resolve(result).catch(e => {
            console.log("error", e)
            const next = args[args.length - 1]
            return Promise.resolve(result).catch(next)
        })
    }



export default asyncHandler