import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Users extends Component {
  //! state is temporary data
  state = {
    users: []
  };

  async componentDidMount() {
    try {
      let success = await axios.get(
        "http://localhost:3001/users/get-all-users"
      );
      let dataArray = success.data;

      this.setState({
        users: dataArray
      });
      //   console.log(success);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    //! Object destructuring
    const { users } = this.state;

    return (
      <div>
        <ul>
          {users.map((user, index) => {
            return (
              <li key={user.id}>
                <Link to={`/users/${user.id}`}>
                  user:ID {user.id} username: {user.name}
                </Link>
                {/* //! 'to' is Link property
                <Link
                  to={{
                    pathname: `/users/${user.id}`,
                    state: {
                      name: user.name
                    }
                  }}
                >
                  user:ID {user.id} username: {user.name}
                </Link> */}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
