import React from'react';
import {Col,  Card,
    CardText, CardBody, CardTitle,
    CardSubtitle} from 'reactstrap';

    //const person = styled.CardTitle`
    //
    //`;

const StarWars = ({character}) =>{

return(
<Col md = "4" lg = "3">
    <Card>
        <CardTitle>{character.name}</CardTitle>
        <CardSubtitle>Gender: {character.gender} cm(?)</CardSubtitle>
        <CardBody>
            <CardText>Height: {character.height} cm</CardText>
            <CardText>Mass: {character.mass}kg</CardText>
            <CardText>Hair Color: {character.hair_color}</CardText>
            <CardText>Skin Color: {character.skin_color}</CardText>
            <CardText>Eye Color: {character.eye_color}</CardText>
            <CardText>Birth Year: {character.birth_year}</CardText>
        </CardBody>
    </Card>
</Col>
)
}
export default StarWars;