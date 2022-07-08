const Cards = (props) => {

    return <div className="col-md-6 ">
        <div className="card">
            <img src={props.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{props.location}</p>
                <p className="card-text">{props.price}</p>
                <p className="card-text">
                    <button class="btn btn-primary" onClick={e=>{
                        props.addHouseToBuy();
                    }}>
                        Add
                    </button>
                </p>
            </div>
        </div>
    </div>
};

export default Cards;