import React, { Component } from 'react';

class Api extends Component {

  state = {
    names: []
  }

    componentDidMount() {
      var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://morning-ocean-63493.herokuapp.com/looking-for-chat'
        fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then((data) => {
          this.setState({names: data})
        })
        .catch(console.log)
    }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          hello
          <h5 className="card-title">{this.state.names}</h5>
        </div>
      </div>
    );
  }
}

export default Api;