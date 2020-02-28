import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PortfoliItem extends Component {
    // Data that ww'll need:
    // - backgrounf image: thumb_image_url
    // - logo
    // - description: description
    // - id: id
    // ["id", "name", "description", "url", "category", "position",
    // "thumb_image_url", "banner_image_url", "logo_url", "column_names_merged_with_images"]
    
    constructor(props) {
        super(props);

        this.state = {
            portfolioItemClass: ""
        };
    }

    handleMouseEnter() {
        this.setState({ portfolioItemClass: 'image-blur' });
    }

    handleMouseLeave() {
        this.setState({ portfolioItemClass: '' });
    }

    render() {
        const { id, description, thumb_image_url, logo_url } = this.props.item;
        return (
            <div className="portfolio-item-wrapper"
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}
            >
                <div
                    className="portfolio-img-background" 
                    style={{
                        backgroundImage: "url(" + thumb_image_url + ")"
                    }}
                />

                <div className="img-text-wrapper">
                    <div className="logo-wrapper">
                        <img src={logo_url} />
                    </div>

                    <div className="subtitle">{description}</div>
                </div>
                <Link to={`/portfolio/${id}`} />
            </div>
        );
    }
}