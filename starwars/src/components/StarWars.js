import React from'react';
import {Col,  Card,
    CardText, CardBody, CardTitle,
    CardSubtitle} from 'reactstrap';

    //const person = styled.CardTitle`
    //
    //`;

const StarWars = props =>{

return(
<Col md = "4" lg = "3">
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