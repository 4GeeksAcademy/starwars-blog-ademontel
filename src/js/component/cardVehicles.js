import React from "react";


const CardVehicles = (props) => {
const urlImg = `https://starwars-visualguide.com/assets/img/vehicles/${props.uid}.jpg` 
    return (
        <div className="card" style={{width: "18rem", flex: "none", margin: "10px"}}>
            <img src={urlImg} className="card-img-top" alt={props.uid} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="d-flex justify-content-between mx-2">
            <button type="button" className="btn btn-success">Learn More</button>
            <button type="button" className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
            </div>
        </div>
    )
}

export default CardVehicles;