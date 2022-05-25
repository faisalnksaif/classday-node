
const asyncHandler = ((fn: any) =>
  async function (...args: any[]) {
    const result = fn(...args)
    try {
      return await Promise.resolve(result)
    } catch (e) {
      console.log("error", e)
      const next = args[args.length - 1]
      return await Promise.resolve(result).catch(next)
    }
  }
)


export default asyncHandler