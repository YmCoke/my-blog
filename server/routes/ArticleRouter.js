const ArticleServices = require("../services/ArticleServices");
const ResponseHelper = require('./ResponseHelper');
const { uploadImageWrapper } = require("../middlewares/uploadImage");
const express = require("express");

const ArticleRouter = express.Router();

// 根据page, limit获取数据元信息
ArticleRouter.post("/meta/:page/:limit/", async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.params;
        const key = req.body.key;
        const result = await ArticleServices.queryArticleMetas(+page, +limit, key);
        ResponseHelper.send(res, result);
    }
    catch (err) {
        ResponseHelper.sendError(res, err);
    }
});

// 获取观看量最高的count个数据
ArticleRouter.post("/viewtop", async (req, res) => {
    try {
        const count = req.body.count;
        const result = await ArticleServices.queryTop(+ count);
        ResponseHelper.send(res, result);
    }
    catch (err) {
        ResponseHelper.sendError(res, err);
    }
})

// 获取文章的详细内容
ArticleRouter.get("/detail/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await ArticleServices.queryArticle(id);
        ResponseHelper.send(res, result);
    }
    catch (err) {
        ResponseHelper.sendError(res, err);
    }
});

// 通过tag标签筛选对应的元数据列表信息
ArticleRouter.get("/tag/:page/:limit/:tag", async (req, res) => {
    try {
        const { page = 1, limit = 10, tag = "" } = req.params;
        const result = await ArticleServices.queryArticleByTag(+page, +limit, tag);
        ResponseHelper.send(res, result);
    }
    catch (err) {
        ResponseHelper.sendError(res, err);
    }
});

// 使用中间件获取请求体中form-data的内容
ArticleRouter.post('/upload',
    uploadImageWrapper, // 获取图片资源
    async (req, res) => {
        try {
            const cover = req.file ? "/upload/" + req.file.filename : null;
            req.body.cover = cover;
            let article;
            if(req.body) {
                const id = req.body.id;
                if(id) {
                    // 更新逻辑
                    await ArticleServices.updateArticle(id, req.body);
                    article = await ArticleServices.queryArticle(id);
                }
                else {
                    // 添加逻辑
                    article = await ArticleServices.addArticle(req.body);
                }
            }
            if(!article) throw new Error("未知错误, 请联系网站管理员");
            ResponseHelper.send(res, article);
        }
        catch(err) {
            ResponseHelper.sendError(res, err);
        }
    }
);

// 提供删除文章的接口
ArticleRouter.delete('/', async (req, res) => {
    try {
        const id = req.body.id || -1;
        await ArticleServices.deleteArticle(id);
        ResponseHelper.send(res, "删除成功");
    }
    catch(err) {
        ResponseHelper.sendError(res);
    }
});

module.exports = ArticleRouter;