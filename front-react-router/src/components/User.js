import React, { Component } from "react";
import Axios from "axios";

export default class User extends Component {
  state = {
    user: {}
  };

  async componentDidMount() {
    try {
      let success = await Axios.get(
        `http://localshost:3001/users//get-user-by-id/${this.props.match.params.id}`
      );
      console.log(success);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    // console.log(`!!!!`, this.props.match);
    // console.log(`?????`, this.props.location);

    return (
      <div>
        {/* //! props.match matches with the slug */}
        <h2>User: {this.props.match.params.id}</h2>
        {/* <h2>Name: {this.props.location.state.name}</h2> */}
      </div>
    );
  }
}
