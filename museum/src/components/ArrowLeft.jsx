import styled from '@emotion/styled'
import { color } from '../helpers/theme-provider'

const StyledArrowLeft = styled.svg`
  cursor: pointer;
  transition: fill 0.35s ease;
  &:hover {
    fill: ${color('gold')};
  }
`

export const ArrowLeft = () => (
  <StyledArrowLeft
    width="28"
    height="28"
    viewBox="0 0 28 8"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.34104 8C3.64162 6.31339 1.86127 5.08262 0 4.30769V3.69231C1.86127 2.89459 3.64162 1.66382 5.34104 0H6.75723C5.94798 1.4359 5.1657 2.52991 4.4104 3.28205H28V4.71795H4.4104C5.1657 5.47009 5.94798 6.5641 6.75723 8H5.34104Z" />
  </StyledArrowLeft>
)
