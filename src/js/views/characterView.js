import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const CharacterView = () => {
    const { store } = useContext(Context);
    const { uid } = useParams();
    const [details, setDetails] = useState(null);
    const urlImg = `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`;

    useEffect(() => {
        setDetails(store.details);
    }, [uid, store.details]);

    return (
        
        <div className="container my-5">
            <div className="card mb-3" style={{ maxWidth: "800px", margin: "0 auto" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={urlImg} className="img-fluid rounded-start" alt={"Character Image"} />
                    </div>
                    <div className="col-md-8">
                    <h2 className="card-title">{console.log(details)}</h2>
                        <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dui pellentesque ultricies venenatis. Praesent eget est malesuada, mollis felis vel, consectetur nibh. Vivamus consectetur elementum nunc quis aliquam. Pellentesque feugiat luctus nunc vitae efficitur. Donec eleifend dignissim risus, sed tincidunt sapien tristique nec. Nam ut dapibus tortor. Aenean arcu mi, dictum sed faucibus in, molestie eget sem. Etiam dictum mi in magna pharetra, sed suscipit est tristique. In facilisis, augue a ornare tempus, arcu erat interdum sem, et porttitor tellus mauris vitae felis. Ut a pellentesque nunc, vitae facilisis dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam id sem magna. Duis et ex quam. Ut et odio dolor. Curabitur lacinia pharetra tincidunt.
                        </p>
                    </div>
                </div>
                <div className="row g-0">
                <div className="card-body">
                                    <div className="row">
                                        <div className="col-2">
                                            <p><strong>Gender:</strong> {store.details.gender}</p>
                                        </div>
                                        <div className="col-2">
                                            <p><strong>Hair Color:</strong> {"details.hair_color"}</p>
                                        </div>
                                        <div className="col-2">
                                            <p><strong>Eye Color:</strong> {"details.eye_color"}</p>
                                        </div>
                                        <div className="col-2">
                                            <p><strong>Height:</strong> {"details.height"}</p>
                                        </div>
                                        <div className="col-2">
                                            <p><strong>Mass:</strong> {"details.mass"}</p>
                                        </div>
                                        <div className="col-2">
                                            <p><strong>Birth Year:</strong> {"details.birth_year"}</p>
                                        </div>
                                    </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterView;