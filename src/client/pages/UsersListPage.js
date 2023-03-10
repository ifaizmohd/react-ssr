import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersList extends Component {
  constructor() {
    super();
    this.renderUser = this.renderUser.bind(this);
  }

  renderUser() {
    const { users } = this.props;
    return users && users.map((user) => <li key={user.id}>{user.name}</li>);
  }

  render() {
    return <div>Here's a big list of users: {this.renderUser()}</div>;
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
};
