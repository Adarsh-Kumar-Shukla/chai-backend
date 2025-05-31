const asyncHandler = (requestHandler) => {
    (req ,res, next) => {
        Promise.resolve(requestHandler).catch((err) => next(err))
    }
}

export {asyncHandler}


// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async() => {}

// const asyncHandler = (fn) => async() => {
//     try{
//         await fn(req, res ,next)
//     }catch (error) {
//         resizeBy.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }