console.log("app运行了");
require("./modules"); // 同步数据库

const express = require("express");
const path = require("path");
const cors = require("cors")
const ArticleRouter = require("./routes/ArticleRouter");
const app = express();

app.listen(4014, () => {
    console.log("监听4014端口");
})

app.use(express.static(path.resolve(__dirname, "./public/")));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cors());


app.use('/api/article', ArticleRouter);