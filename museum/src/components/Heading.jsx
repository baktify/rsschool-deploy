import styled from '@emotion/styled'
import { color } from '../helpers/theme-provider'

const StyledHeading = styled.h2`
  color: ${(props) => (props.isGold ? color('gold') : color('white'))};
  font-family: Forum;
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
  line-height: 90px;
  letter-spacing: 5px;
  text-transform: uppercase;
`

const Heading = ({ isGold, children, extraCss }) => {
  return (
    <StyledHeading css={extraCss} isGold={isGold}>
      {children}
    </StyledHeading>
  )
}

export default Heading
