import axios from "axios";

export async function getBlogById(id) {
    return await axios.get(`http://localhost:4014/api/article/detail/${id}`,{
        
    });
}

export async function getBlogMetaList(page = 1, limit = 10, key = "", tag = null) {
    return await axios.post(`http://localhost:4014/api/article/meta/${page}/${limit}`, {
        key
    });
}

export async function getViewTop(count = 7) {
    return await axios.post(`http://localhost:4014/api/article/viewtop`, {
        count
    });
}