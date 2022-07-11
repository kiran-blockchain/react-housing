import { useParams } from "react-router"

export const Details =()=>{
    const {id} = useParams();
    console.log(id);
    return(
        <div className="col-md-6">
            <h1>{id}</h1>
        </div>
    )
}