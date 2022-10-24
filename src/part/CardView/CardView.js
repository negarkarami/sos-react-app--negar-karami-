
import {Link} from "react-router-dom";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import "./CardView.css"
import {Constant} from "../../Constant";
export function CardView({data}) {

    return (
        <Link to={`article/${data.id}`}>
            <div className="BoxCard">
                <div className="BoxPic">
                    <img src={data.image} />
                </div>
                <div className="Detail">
                    <h5 className="Title">{data.title}</h5>
                    <div className="TimesBox">
                        <QueryBuilderIcon style={{fontSize: "15px"}}/>
                        <p className="Time">
                            {data.time}
                        </p>
                    </div>

                    <span className="Description">{data.description}</span>
                </div>
                <div className="WrapperBtn">
                    <button>{Constant.Continue}</button>
                </div>
            </div>
        </Link>
    )
}
