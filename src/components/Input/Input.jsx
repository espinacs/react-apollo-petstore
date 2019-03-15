import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = styled.input`
  /* Adapt the colors based on primary prop */
  font-size: 1em;
  padding: 0.5em;
  border: 2px solid #1689d1;
  border-radius: 5px;
  margin-top: 5px;
`;

const Label = styled.label`
  /* Adapt the colors based on primary prop */
  font-size: 1em;
  color: red;
  color: #646464;
`;

const StyledInput = ({ children, onChange, label, required, ...rest }) => (
  !label ? (
    <Input onChange={onChange} {...rest} />
  ): (
    <Label>{label}{required && ' *'}<br/>
    <Input onChange={onChange} {...rest} />
    </Label>
  )
)

StyledInput.propTypes = {
    label: PropTypes.string,
    required: PropTypes.bool,
    children: PropTypes.node,
    onChange: PropTypes.func.isRequired
}

export default StyledInput