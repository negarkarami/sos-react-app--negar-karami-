import Basic from "../layout/Basic/Basic";
import {Constant} from "../../Constant";
import "./Home.css";
import {ArticleData} from "../../blog/ArticleData";
import {CardView} from "../../part/CardView/CardView";

const Home = () => {
    return(
       <Basic title={Constant.Home}>
           <div className=" WrapperDesktop box-mode">
               <div className= "WrapperTitle">
                   <h2>{Constant.Articles}</h2>
                   <h5 className="DisplayAll">{Constant.DisplayAll}</h5>
               </div>
               <div className={'row'}>
                   {
                       ArticleData.map((item, index) => (
                               <div key={index} className={'col-md-3 col-xs-12'}>
                                   <CardView data={item}/>
                               </div>
                           )
                       )
                   }
               </div>

           </div>
       </Basic>
    )
}

export default Home