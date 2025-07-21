import styled from '@emotion/styled'
import { getBaseUrl } from '../helpers/getBaseUrl'

const StyledParallax = styled.div`
  width: auto;
  height: 400px;
  background-image: url(${(props) => getBaseUrl() + props.imageUrl});
  background-color: lightgray;
  background-repeat: no-repeat;
  background-attachment: fixed; // parallax effect
  background-position: center;
  background-size: cover;
  overflow: hidden;
`

const Parallax = () => {
  return <StyledParallax imageUrl="images/parallax.jpg" />
}
export default Parallax
