import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavbarTop from '../components/NavbarTop';

class Post extends Component {
  render() {
    const {title} = this.props
    return(
      <h5>{title}</h5>
    )
  }
}

class Home extends Component {
  state = {posts: []}
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(result => {this.setState({posts: result})})
  }

  render(){
    const {posts} = this.state
    return(
      <>
      <NavbarTop/>
      <Container>
        {posts.map((i,key) => <Post key={key} title={i.title} />)}
      </Container>
      </>
    )
  }
}

export default Home;
