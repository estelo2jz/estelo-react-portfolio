import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: []
    };

    this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
    this.handleFormSuccessfulError = this.handleFormSuccessfulError.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick(portfolioItem) {
    axios.delete(`https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`, {
      withCredentials: true
    }).then(response => {
      this.setState({
        portfolioItems: this.state.portfolioItems.filter(item => {
          return item.id !== portfolioItem.id;
        })
      })

      return response.data;
    }).catch(error => {
      console.log("handleDeleteClick error", error)
    })
  }

  handleSuccessfulFormSubmission(portfolioItem) {
  // TODO
  // update the portolioItems state
  // and add the portfolioItem to the list
  //  console.log("handleSuccessfulFormSubmission", portfolioItem);
  this.setState({
    portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
  });
  }

  handleFormSuccessfulError(error) {
    console.log("handleFormSuccessfulError", error);
  }

  getPortfolioItems() {
    axios.get("https://esteloabellanosa.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", {
      withCredentials: true
    })
    .then(response => {
      this.setState({
        portfolioItems: [...response.data.portfolio_items]
      });
    })
    .catch(error => {
      console.log("error in getPortfolioItems", error)
    })
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render () {
    return (
      <div className="portfolio-manager-wrapper">
          <div className="left-column">
            <PortfolioForm
            handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
            handleFormSuccessfulError={this.handleFormSuccessfulError}
            />
          </div>
          <div className="right-column">
            <PortfolioSidebarList 
              handleDeleteClick={this.handleDeleteClick}
              data={this.state.portfolioItems}
            />
          </div>
      </div>
    );
  }
}