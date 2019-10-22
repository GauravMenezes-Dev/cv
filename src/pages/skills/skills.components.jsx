import React from 'react';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './skills.css';
import skill_data from '../../data/skills.json';
import CardColumns from 'react-bootstrap/CardColumns';


const Skills = () => {
  return (
    <Container className="profile" fluid>
      <Jumbotron fluid>
        <h1 className="name">Skills</h1>
        <p className="descriptor">{skill_data.skill_descp}</p>
      </Jumbotron>
      <Container className="data-container" fluid>
        <Container>
          <Card>
            <Card.Header>
              <Card.Title>Learned Skills: </Card.Title>
            </Card.Header>
            <Card.Body>
              <CardColumns>
              {
                skill_data.skills.map(skill => (
                  <Card key={skill.id}>
                    <Card.Title>{skill.name}</Card.Title>
                    <Card.Body>
                      {skill.useCase}
                    </Card.Body>
                  </Card>
                ))
              }
              </CardColumns>
            </Card.Body>
          </Card>          
        </Container>
      </Container>
    </Container>
  )
} 

export default Skills;

