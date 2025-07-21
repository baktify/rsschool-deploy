import styled from '@emotion/styled'
import { color } from '../helpers/theme-provider'
import Heading from './Heading'
import Separator from './Separator'
import { useTheme } from '@emotion/react'
import { getBaseUrl } from '../helpers/getBaseUrl'

const ExploreWrapper = styled.section`
  background: ${color('dark')};
  padding: 75px 0;
`
const ExploreContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const TextBlock = styled.div`
  margin-right: 60px;
`
const PictureDetails = styled.div`
  & > * + * {
    margin-top: 25px;
  }
`
const PictureDetail = styled.p`
  color: ${color('white')};
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  line-height: 38.5px;
`
const Illustration = styled.div`
  padding-top: 15px;
`

const Explore = () => {
  const theme = useTheme()

  return (
    <ExploreWrapper id="explore">
      <ExploreContainer>
        <TextBlock>
          <Heading>Picture explore</Heading>
          <Separator />
          <PictureDetails>
            <PictureDetail>
              Las Meninas is a 1656 painting by Diego Velázquez, the leading
              artist of the Spanish Golden Age.
            </PictureDetail>
            <PictureDetail>
              It was cleaned in 1984 to remove a{' '}
              <span css={{ color: theme.colors.gold }}>"yellow veil"</span> of
              dust that had gathered since the previous restoration in the 19th
              century.
            </PictureDetail>
            <PictureDetail>
              The cleaning provoked furious protests, not because the picture
              had been damaged in any way, but because it looked different.
            </PictureDetail>
          </PictureDetails>
        </TextBlock>
        <Illustration>
          <img
            src={getBaseUrl() + 'images/explore-slider/explore-effect.jpg'}
            alt="Explore"
          />
        </Illustration>
      </ExploreContainer>
    </ExploreWrapper>
  )
}
export default Explore
