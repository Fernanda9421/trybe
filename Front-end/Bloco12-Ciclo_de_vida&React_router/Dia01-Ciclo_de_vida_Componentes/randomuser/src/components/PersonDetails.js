import React, { Component } from 'react';
import Loading from './Loading';
import PersonCard from './PersonCard';

class PersonDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      storedPersons: [],
    }
  }

  fetchPerson() {
    const url = 'https://api.randomuser.me/';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        // console.log(data.results)
        this.setState({
          loading: false,
          storedPersons: data.results,
        })
      })
  }

  componentDidMount() {
    this.fetchPerson();
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const AGE = 50;
    if (nextState.storedPersons[0].dob.age > AGE) {
      return false;
    }
    return true;
  }

  getUserElements(user) {
    return {
      name: `${user.name.title}. ${user.name.first} ${user.name.last}`,
      email: `${user.email}`,
      age: `${user.dob.age}`,
      image: `${user.picture.thumbnail}`,
    }
  }

  render() {
    const { storedPersons, loading } = this.state;

    if (loading) return <Loading />
    return (
      <div>
        {
          storedPersons.map((person, index) => (
            <PersonCard key={ index } person={ this.getUserElements(person)} />
          ))
        }
      </div>
    );
  }
}

export default PersonDetails;
