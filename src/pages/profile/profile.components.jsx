import React from 'react';
import profile_data from '../../data/profile';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './profile.css';

const Profile = () => (
    <Container className="profile" fluid>
      <Jumbotron fluid>
        <h1 className="name">{profile_data.name}</h1>
        <p className="descriptor">{profile_data.description}</p>
      </Jumbotron>
      <Container className="data-container" fluid>
        <Card style={{width: '100%'}}>
          <Card.Title>A little bit about me...</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Experience in the IT industry: {profile_data.experience}</ListGroup.Item>
            <ListGroup.Item>Phone: {profile_data.phone}</ListGroup.Item>
            <ListGroup.Item>Email: {profile_data.mail}</ListGroup.Item>
            <ListGroup.Item>GitHub: <a href={profile_data.github}>{profile_data.github}</a></ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </Container>
);

export default Profile