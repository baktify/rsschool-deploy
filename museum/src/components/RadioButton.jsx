import styled from '@emotion/styled'
import { color } from '../helpers/theme-provider'

const StyledRadioButton = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;

  & > input {
    width: 17px;
    height: 18px;
  }

  & > label {
    color: ${color('dark')};
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`

const RadioButton = ({ name, id, text, value, isDefault }) => {
  return (
    <StyledRadioButton>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        defaultChecked={isDefault}
      />
      <label htmlFor={id}>{text}</label>
    </StyledRadioButton>
  )
}

export default RadioButton
