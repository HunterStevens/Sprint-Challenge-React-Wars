import React from'react';
import {Col,  Card,
    CardText, CardHeader, CardBody, CardTitle,
    CardSubtitle} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

     const Name = styled.h1`
     font-family: 'Exo 2', sans-serif;
     background-color:black;
     color:yellow;
     `;
     const Text = styled.p`
     font-family: 'Montserrat', sans-serif;
     `;

const StarWars = props =>{

return(
<Col md = "4">
    <Card>
        <CardHeader>
            <CardTitle><Name>{props.name}</Name></CardTitle>
            <CardSubtitle>Gender: {props.gender}</CardSubtitle>
        </CardHeader>
        <CardBody>
            <CardText><Text>Height: {props.height} cm</Text></CardText>
            <CardText><Text>Mass: {props.mass}kg</Text></CardText>
            <CardText><Text>Hair Color: {props.hair_color}</Text></CardText>
            <CardText><Text>Skin Color: {props.skin_color}</Text></CardText>
            <CardText><Text>Eye Color: {props.eye_color}</Text></CardText>
            <CardText><Text>Birth Year: {props.birth_year}</Text></CardText>
        </CardBody>
    </Card>
</Col>
)
}
export default StarWars;