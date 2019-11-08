

import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styled from 'styled-components'

const CardContainer = styled.div`
max-width: 800px;
background-color: blue;
margin: 0 auto;
`



const NasaGrid = (props) => {
  return (
    <CardContainer>
      <Card>
        <CardImg top width="100%" src={props.url} alt="rendom daily photo" />
        <CardBody>
          <CardTitle>{props.date}</CardTitle>
          <CardSubtitle>{props.title}</CardSubtitle>
          <CardText>{props.explanation}</CardText>
        </CardBody>
      </Card>
    </CardContainer>

  );
};

export default NasaGrid;
