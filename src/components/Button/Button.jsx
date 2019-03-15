import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#1689d1" : "white"};
  color: ${props => props.primary ? "white" : "grey"};
  boder-color: ${props => props.primary ? "white" : "#1689d1"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 5px;
`;

const StyledButton = ({ children, onClick, primary }) => (
    <Button primary={primary} onClick={onClick}>{children}</Button>
)

StyledButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    primary: PropTypes.bool
}

export default StyledButton