import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {Container, Row} from "reactstrap";
import StarWars from './components/StarWars'

const App = () => {
  const [person, setPerson] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios.get('https://swapi.co/api/people/')
  .then(res =>{
    const newArray = res.data.results;
   // console.log("APP ARRAY ", res.data.results);
    setPerson(newArray);
    console.log("Grabed Data", person);
  })
  .catch(err =>{
    console.log("ERROR: ", err);
  })
}, [])
  // axios.get('https://swapi.co/api/people/')
  // .then(res =>{
  //   console.log("APP ARRAY ", res.data.results);
  // })
  // .catch(err =>{
  //   console.log("ERROR: ", err);
  // })

  return (
    <Container>
      <Row className="App">
      <h1 className="Header">React Wars</h1>
        {/* {person.map(character =>{
          return <StarWars name = {character.name} />;
        })} */}
    </Row>
    </Container>
  );
}

export default App;
