import React from 'react';
import edu_data from '../../data/education';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './education.css';
import CardColumns from 'react-bootstrap/CardColumns';

const Education = () => (
  <Container className="education" fluid>
    <Jumbotron fluid>
      <h1 className="name">Education</h1>
      <p className="descriptor"></p>
    </Jumbotron>
    <Container className="data-container" fluid>
      <Row style={{paddingLeft: '10px'}}>
        <h1>Boards/Degrees: </h1>
      </Row>
      <hr />
      <CardColumns>
        {
          edu_data.data.map(item =>(
            <Card key={item.id}>
              <Card.Title>{item.board}</Card.Title>
              <ListGroup>
                <ListGroup.Item>School: {item.school}</ListGroup.Item>
                {
                  (
                    (item.cgpa==="Not Applicable")
                    ?
                    (<ListGroup.Item>Percentage: {item.percentage}</ListGroup.Item>)
                    :
                    (<ListGroup.Item>CGPA: {item.cgpa}</ListGroup.Item>)
                  )
                }
              </ListGroup>
            </Card>
          ))
        }
      </CardColumns>
    </Container>
</Container>
);

export default Education