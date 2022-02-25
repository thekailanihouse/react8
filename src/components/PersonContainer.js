import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Container, Row } from 'reactstrap'
import Person from '../pages/person'

class PersonContainer extends Component {
    createCard = (personProp) => (
         <Col xs={4} key={personProp.key}><Person {...personProp} /></Col>
    )

    createRow = rows => (
         <Row key={`${Math.random()}-${Date.now()}`}>
            {rows.map(i => this.createCard(Object.assign(i, {key: i.id})))}
        </Row>
    )

  render() {
      const {person, product} = this.props
      console.log(person, product);
      const contents = []
      for (let i = 0; i < person.length; i += 3) {
          contents.push(person.slice(i, i+3))
      }
    return (
      <>
        <Container fluid className='p-4'>{contents.map(i => this.createRow(i))}</Container>
      </>
    )
  }
}

const mapStateToProps = state => ({
  person: state.persons,
  product: state.product
})

const mapDispatchToProps = {}

export default connect(mapStateToProps)(PersonContainer)