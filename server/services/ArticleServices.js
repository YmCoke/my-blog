const { Op } = require("sequelize");
const Article = require("../modules/Article");

/**
 * 插入Article, 若成功则返回数据的JSON格式, 反之报错
 * @param {*} article 
 */
module.exports.addArticle = async (article) => {
    try {
        const ins = await Article.create(article);
        return ins.toJSON();
    }
    catch(err) {
        err.message = err.errors.map(err => err.message);
        throw err;
    }
};

/**
 * 根据提供的id, 删除对应的文章
 * @param {*} article 
 */
module.exports.deleteArticle = async (id) => {
    await Article.destroy({
        where: {
            id
        }
    });
};

/**
 * 根据id, 修改对应的文章数据信息
 * @param {*} id 
 * @param {*} article 
 */
module.exports.updateArticle = async (id, article) => {
    return await Article.update(article, {
        where: {
            id
        }
    });
};

/**
 * 根据条件搜索文章的元数据列表信息
 * @param {*} page 
 * @param {*} skip 
 * @param {*} key 
 */
module.exports.queryArticleMetas = async (page = 1, limit = 10, key) => {
    const where = {
        public: true
    };
    if(key) {
        const searchword = "%" + key + "%";
        const condition = [
            {title: {[Op.like]: searchword}},
            {desc: {[Op.like]: searchword}},
            {tag: {[Op.like]: searchword}}
        ]
        where[Op.or] = condition;
    }
    const result = await Article.findAndCountAll({
        attributes: ['id', 'title', 'tag', 'views', 'likes', 'desc', 'mtime', 'cover'],
        where,
        limit,
        offset: (page - 1) * limit
    });
    return {
        total: result.count, 
        datas: JSON.parse(JSON.stringify(result.rows))
    }
}

/**
 * 根据id主键获取文章信息
 * @param {*} id 
 */
module.exports.queryArticle = async (id) => {
    const article = await Article.findByPk(id);
    if(article == null) throw new Error("id不存在");
    return article.toJSON();
}

/**
 * 根据提供的tag获取文章的元数据列表
 * @param {*} page 
 * @param {*} limit 
 * @param {*} tag 
 */
module.exports.queryArticleByTag = async (page = 1, limit = 10, tag) => {
    const where = {
        public: true
    };
    if(tag) {
        where.tag = {
            [Op.like]: "%" + tag + "%"
        }
    }
    const result = await Article.findAndCountAll({
        attributes: ['id', 'title', 'tag', 'views', 'likes', 'desc', 'mtime'],
        where,
        limit,
        offset: (page - 1) * limit
    });
    return {
        total: result.count, 
        datas: JSON.parse(JSON.stringify(result.rows))
    }
}

/**
 * 获取观看数前count个的数据
 * @param {*} count 
 */
module.exports.queryTop = async (count = 10) => {
    return await Article.findAll({
        attributes: ['id', 'title', 'cover'],
        limit: count,
        where: {
            public: true
        },
        order: [
            ["views", "DESC"]
        ]
    });
}