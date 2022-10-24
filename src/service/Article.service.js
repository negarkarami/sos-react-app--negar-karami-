import {ArticleData} from "../blog/ArticleData";

const getArticle = (id = 0) => {
  return  ArticleData.find(x => x.id == id)
}

export {
    getArticle
}