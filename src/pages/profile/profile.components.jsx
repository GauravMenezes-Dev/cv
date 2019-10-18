import React from 'react';
import profile_data from '../../data/profile';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './profile.css';

const Profile = () => (
     <Jumbotron fluid className="intro-container">
       <Container>
          <h1 className="name">{profile_data.name}</h1>
          <p className="descriptor">{profile_data.description}</p>
        </Container>
     </Jumbotron>
);

export default Profile