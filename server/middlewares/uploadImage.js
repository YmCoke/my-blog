const multer = require("multer");
const path = require('path');

// 配置文件存储时的路径信息
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../public/upload/'));
    },
    filename: (req, file, cb) => {
        // 时间戳 + 6位随机数 + 后缀
        const date = Date.now();
        const randomStr = Math.random().toString(36).substr(2, 6);
        const ext = path.extname(file.originalname);
        cb(null, `${date}-${randomStr}${ext}`);
    }
});

// 生成upload中间件，用于接收特定key值的file内容. 
const uploadImage = multer({
    storage,
    limits: {
        fileSize: 2 * 1024 * 1024, // 限制文件内容不能超过2MB
    },
    fileFilter: (req, file, cb) => {
        const allowExts = ['.jfif', '.jpg', 'jpeg', '.gif', '.png', '.bmp', '.tif', '.pcx', '.tga', '.exif', '.fpx', '.svg', '.psd', '.cdr', '.pcd', '.dxf', '.ufo', '.eps', '.ai', '.raw', '.WMF', '.webp'];
        const fileExt = path.extname(file.originalname)
        const isAllowExt = allowExts.includes(fileExt.toLocaleLowerCase());
        const errorInstance = new multer.MulterError()
        errorInstance.message = `the ext ${fileExt} is not allow`;
        if(!isAllowExt) cb(errorInstance);
        else cb(null, true);
    }
}).single("cover"); // 此处填特定key值

// 处理上传错误函数: 当上传的文件与limits options不匹配时会报错
const uploadImageWrapper = (req, res, ne) => {
    uploadImage(req, res, function(err) {
        if(err instanceof multer.MulterError) {
            res.send(err.message);
        }
        else ne();
    })
}

module.exports = {
    uploadImageWrapper
}