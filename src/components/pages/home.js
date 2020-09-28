import React from "react";
import PortfolioContainer from "../portfolio/portfolio-container";

export default function () {
    return (
        <div className="home-items-container">
            {/* show portfolio items from data */}
            <PortfolioContainer /> 
        </div>
    );
}