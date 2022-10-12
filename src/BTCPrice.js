import React from 'react';
import $ from 'jquery';

export default class BTCPrice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        time: {
          updated: "",
          updatedISO: "",
          updateduk: ""
        },
        disclaimer: "",
        chartName: "",
        bpi: {
          USD: {
            code: "USD",
            symbol: "&#36;",
            rate: "",
            description: "United States Dollar",
            rate_float: 0
          },
          GBP: {
            code: "GBP",
            symbol: "&pound;",
            rate: "",
            description: "British Pound Sterling",
            rate_float: 0
          },
          EUR: {
            code: "EUR",
            symbol: "&euro;",
            rate: "",
            description: "Euro",
            rate_float: 0
          }
        }
      }
    }
  }

  fetch() {
    var context = this;

    $.ajax({
      url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
      method: 'GET',
      dataType: 'json',
      success: function(response) {
        context.setState({
          data: response
        });
      }
    });
  }

  render() {
    return (
      <div>
        <h1>
          How Much is 1 BTC?
          <p>
            <h6>Last Updated: {this.state.data.time.updated}</h6>
          </p>
        </h1>

        <h2>USD: ${this.state.data.bpi.USD.rate}</h2>
        <h2>GBP: ₤{this.state.data.bpi.GBP.rate}</h2>
        <h2>EUR: €{this.state.data.bpi.EUR.rate}</h2>

        <hr/>
        <button
          onClick={this.fetch.bind(this)}
        >
          Fetch Latest
        </button>
      </div>
    );
  }
}