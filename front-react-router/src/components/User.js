import React, { Component } from "react";
import Axios from "axios";

export default class User extends Component {
  state = {
    user: {},
    isLoading: true,
    isError: false,
    errMsg: ""
  };

  async componentDidMount() {
    try {
      let success = await Axios.get(
        `http://localhost:3001/users/get-user-by-id/${this.props.match.params.id}`
      );
      let dataArr = success.data;
      this.setState({
        user: dataArr[0],
        isLoading: false
      });
    } catch (e) {
      this.setState({
        isError: true,
        errMsg: e.response.data,
        isLoading: false
      });
      // ! getting error status msg, use .response
      console.log(e.response);
    }
  }

  render() {
    // console.log(`!!!!`, this.props.match);
    // console.log(`?????`, this.props.location);

    return (
      <div>
        {this.state.isLoading ? (
          <h2>...loading</h2>
        ) : this.state.isError ? (
          <h2>{this.state.errMsg}</h2>
        ) : (
          <>
            <h2>name: {this.state.user.name}</h2>
            <h2>ID: {this.state.user.id}</h2>
          </>
        )}
        {/* //! props.match matches with the slug */}
        {/* <h2>User: {this.props.match.params.id}</h2> */}
        {/* <h2>Name: {this.props.location.state.name}</h2> */}
      </div>
    );
  }
}
