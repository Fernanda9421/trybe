import React, { Component } from "react";

class Profile extends Component {
  render() {
    const { city } = this.props.match.params;
    return (
      <p>Profile - {this.props.name}, de {city}</p>
    )
  }
}

export default Profile;
