//; -*- mode: rjsx;-*-
import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import Button from './button'

const PauseButton = styled(function(props) {
  return (
      <Button className={props.className} onClick={props.onClick} title={props.title}>
      <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon={faPauseCircle} />
      </span>
    </Button>
  );
})`
`;

export default PauseButton;
