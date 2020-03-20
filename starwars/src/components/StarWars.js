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
     const Text = styled.div`
     font-family: 'Montserrat', sans-serif;
     background-color:black;
     color:#39dae3;
     `;

const StarWars = props =>{

return(
<Col md = "4">
    <Card>
        <CardHeader>
            <CardTitle><Name>{props.name}</Name></CardTitle>
            <CardSubtitle>Gender: {props.gender}</CardSubtitle>
        </CardHeader>
        <CardBody><Text>
            <CardText> Height: {props.height} cm </CardText>
            <CardText> Mass: {props.mass}kg </CardText>
            <CardText> Hair Color: {props.hair_color} </CardText>
            <CardText> Skin Color: {props.skin_color} </CardText>
            <CardText> Eye Color: {props.eye_color} </CardText>
            <CardText> Birth Year: {props.birth_year} </CardText>
            </Text>
        </CardBody>
    </Card>
</Col>
)
}
export default StarWars;