import React from 'react';
import $ from 'jquery';

export default class BTCTracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 0.00,
      lastFetch: ""
    }
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    var context = this;

    window.setTimeout(function() {
      $.ajax({
        url: "https://api.coindesk.com/v1/bpi/currentprice.json",
        dataType: "json",
        method: "GET",
        success: function(response) {
          context.setState({
            price: response.bpi.USD.rate,
            lastFetch: response.time.updated
          });
        }
      });
    }, 3000);
  }

  render() {
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <h1>
          BTC Price: {this.state.price}
          <small>
            {this.state.lastFetch}
          </small>
        </h1>
      </div>
    );
  }
}
