import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        if (filter === "CLEAR_FILTERS") {
            this.getPortfolioItems();
        } else {
            this.getPortfolioItems(filter);
        }
    }

    getPortfolioItems(filter = null) {
        const axios = require('axios');

        // Make a request for a user with a given ID
        axios.get('https://esteloabellanosa.devcamp.space/portfolio/portfolio_items')
            .then(response => {
                // handle success
                // console.log("response data", response);
                if (filter) {
                    this.setState({
                        data: response.data.portfolio_items.filter(item => {
                            return item.category === filter;
                        })
                    });

                } else {
                    this.setState({
                        data: response.data.portfolio_items
                    });
                }
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return (
                <PortfolioItem 
                    key={item.id}
                    item={item}
                    />
            );
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div className="homepage-wrapper">
                <div className="filter-links">
                    {/* <div>
                        <button
                            className="btn link-wrapper"
                            onClick={() => this.handleFilter("eCommerce")}
                        >eCommerce</button>
                    </div>

                    <div>
                        <button
                            className="btn link-wrapper"
                            onClick={() => this.handleFilter("Scheduling")}
                        >Scheduling</button>
                    </div>

                    <div>
                        <button
                            className="btn link-wrapper"
                            onClick={() => this.handleFilter("Enterprise")}
                        >Enterprise</button>
                    </div>

                    <div>
                        <button
                            className="btn link-wrapper"
                            onClick={() => this.handleFilter("CLEAR_FILTERS")}
                        >All</button>
                    </div> */}
                </div>
                <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>
            </div>
        )
    }
}