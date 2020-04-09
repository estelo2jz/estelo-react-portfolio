import React from "react";
import profilePicture from "../../../static/assets/images/auth/bio/headshot.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column"
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    margin: "5px"
                }}
            />
            <div className="right-column">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis
                dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis.
                Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget
                risus varius blandit sit amet non magna. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida
                at eget metus. Donec sed odio dui. Cras mattis consectetur purus sit
                amet fermentum. Etiam porta sem malesuada magna mollis euismod. Nulla
                vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque
                ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non
                commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
                elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis
                risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis
                euismod semper.
            </div>
        </div>
    )
}
