const {DataTypes} = require("sequelize");
const sequelize = require("./db");

module.exports = sequelize.define("Article", {
    cover: {
        type: DataTypes.STRING,
        commont: "文章封面图url"
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "文章标题"
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment: "文章内容"
    },
    tag: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "文章标签"
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "文章描述"
    },
    ptime: {
        type: DataTypes.DATE,
        comment: "文章发布时间"
    },
    public: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        comment: "文章是否公开"
    },
    views: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
        comment: "文章浏览数量"
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
        comment: "文章点赞数量"
    },
}, {
    paranoid: true, // 设置为true后，当删除数据时不会真的删除，而会标识删除数据的时间
    createdAt: "ctime",
    updatedAt: 'mtime',
    deletedAt: 'dtime'
});