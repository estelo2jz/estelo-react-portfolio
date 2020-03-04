import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: [],
      portfolioToEdit: {}
    };

    this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
    this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
    this.handleFormSuccessfulError = this.handleFormSuccessfulError.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this);
  }

  clearPortfolioToEdit(portfolioItem) {
    this.setState({
      portfolioToEdit: {}
    })
  }

  handleEditClick(portfolioItem) {
    this.setState({
      portfolioToEdit: portfolioItem
    })
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

  handleEditFormSubmission() {
    this.getPortfolioItems();
  }

  handleNewFormSubmission(portfolioItem) {
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
            handleNewFormSubmission={this.handleNewFormSubmission}
            handleEditFormSubmission={this.handleEditFormSubmission}
            handleFormSuccessfulError={this.handleFormSuccessfulError}
            clearPortfolioToEdit={this.clearPortfolioToEdit}
            portfolioToEdit={this.state.portfolioToEdit}
            />
          </div>
          <div className="right-column">
            <PortfolioSidebarList 
              handleDeleteClick={this.handleDeleteClick}
              data={this.state.portfolioItems}
              handleEditClick={this.handleEditClick}
            />
          </div>
      </div>
    );
  }
}