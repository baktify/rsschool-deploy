import styled from '@emotion/styled'
import { color } from '../helpers/theme-provider'

const StyledSeparator = styled.div`
  background: ${color('red')};
  width: ${(props) => (props.small ? '300px' : 'auto')};
  height: ${(props) => (props.small ? '2px' : '3px')};
  margin: ${(props) => (props.small ? '10px 0' : '25px 0 75px')};
`

const Separator = ({ small, ...rest }) => (
  <StyledSeparator small={small} {...rest} />
)

export default Separator
