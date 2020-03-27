import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {Container, Row} from "reactstrap";
import StarWars from './components/StarWars';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [person, setPerson] = useState();
  const [page, setPage] = useState(1);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios.get('https://swapi.co/api/people/')
  .then(res =>{
    console.log("API ARRAY ", res);

    setPerson(res.data.results);
  })
  .catch(err =>{
    console.log("ERROR: ", err);
  })
}, [])

useEffect(() => {
  axios.get(`https://swapi.co/api/people/?page=${page}`)
  .then(res =>{
    console.log("Pagination ARRAY ", res);
  })
  .catch(err =>{
    console.log("ERROR: ", err);
  })
}, [])
  return (
    <Container>
      
      <div className="App">
      <h1 className="Header">React Wars</h1>
        <Row>
        {person && person.map(character =>{
          return <StarWars key = {character} name = {character.name}
          gender = {character.gender}
          height = {character.height}
          mass = {character.mass}
          hair_color = {character.hair_color}
          skin_color = {character.skin_color}
          eye_color = {character.eye_color}
          birth_year = {character.birth_year}/>;
        })}
        </Row>
    </div>
    
    </Container>
  );
}

export default App;
