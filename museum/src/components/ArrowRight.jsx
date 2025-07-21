import styled from '@emotion/styled'
import { color } from '../helpers/theme-provider'

const StyledArrowRight = styled.svg`
  cursor: pointer;
  transition: fill 0.35s ease;
  &:hover {
    fill: ${color('gold')};
  }
`

export const ArrowRight = () => (
  <StyledArrowRight
    width="28"
    height="28"
    viewBox="0 0 28 8"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.659 -4.15048e-07C24.3584 1.68661 26.1387 2.91738 28 3.69231L28 4.30769C26.1387 5.10541 24.3584 6.33618 22.659 8L21.2428 8C22.052 6.5641 22.8343 5.47009 23.5896 4.71795L3.22792e-07 4.71795L4.64013e-07 3.28205L23.5896 3.28205C22.8343 2.52991 22.052 1.4359 21.2428 -5.25098e-07L22.659 -4.15048e-07Z" />
  </StyledArrowRight>
)
