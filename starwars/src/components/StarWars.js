import React from'react';
import {Col,  Card,
    CardText, CardBody, CardTitle,
    CardSubtitle} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styled from ''

//     const person = styled.Card`
//     display:flex;

//     `;

const StarWars = props =>{

return(
<Col md = "4">
    <Card>
        <CardTitle>{props.name}</CardTitle>
        <CardSubtitle>Gender: {props.gender}</CardSubtitle>
        <CardBody>
            <CardText>Height: {props.height} cm</CardText>
            <CardText>Mass: {props.mass}kg</CardText>
            <CardText>Hair Color: {props.hair_color}</CardText>
            <CardText>Skin Color: {props.skin_color}</CardText>
            <CardText>Eye Color: {props.eye_color}</CardText>
            <CardText>Birth Year: {props.birth_year}</CardText>
        </CardBody>
    </Card>
</Col>
)
}
export default StarWars;