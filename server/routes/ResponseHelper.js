/**
 * 响应数据
 * @param {*} res 
 * @param {*} result 
 */
module.exports.send = (res, result) => {
    res.send({
        code: 200,
        message: "success",
        data: result
    });
}

/**
 * 响应错误
 * @param {*} res 
 * @param {*} error 
 */
module.exports.sendError = (res, error) => {
    res.send({
        code: 500,
        message: "failed",
        error: (error && error.message) || "未知错误, 请联系网站管理员"
    });
}