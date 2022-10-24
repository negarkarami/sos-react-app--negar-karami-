import Basic from "../layout/Basic/Basic";
import {Constant} from "../../Constant";
import "./ArticleDetail.css";
import {useEffect, useState} from "react";
import {getArticle} from "../../service/Article.service";
import {useParams} from "react-router-dom";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

const ArticleDetail = () => {
    const[data, setData] = useState({})
    const {id} = useParams();

    useEffect(() => {
        setData(getArticle(id));
    }, [])

    return(
       <Basic title={Constant.Articles}>
           <div className="WrapperArticleDetail">
               <div className="ArticleDetail">
                   <div className="BoxImgDetail">
                       <img src={data.image}/>
                   </div>
                   <div className= "DetailText">
                       <h5 className="TitleDetail">{data.title}</h5>
                       <p className="TimeDetail">
                           <QueryBuilderIcon style={{fontSize: "15px", paddingTop: "2px"}}/>
                           {data.time}
                       </p>
                       <span className="DescriptionDetail">{data.description}</span>
                   </div>
                   <div className="WrapperBtnDetail">
                       <button>{Constant.Continue}</button>
                   </div>
               </div>
           </div>
       </Basic>
    )
}

export default ArticleDetail