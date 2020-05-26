import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactpagePicture from "../../../static/assets/images/auth/login.jpg";


export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column nice"
                style={{
                    background: "url(" + contactpagePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    margin: "5px"
                }}
            />
            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone" />
                        </div>

                        <div className="text">
                            224-413-6293
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                        </div>

                        <div className="text">
                            estelo2jz@gmail.com
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="user-circle" />
                        </div>

                        <div className="text">
                            linkedin.com/in/estelo-abellanosa-83a335186
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marked-alt" />
                        </div>

                        <div className="text">
                            Beach Park, IL
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
