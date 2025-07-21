import styled from '@emotion/styled'
import { color } from '../helpers/theme-provider.js'
import Heading from './Heading.jsx'
import { ArrowLeft } from './ArrowLeft.jsx'
import { ArrowRight } from './ArrowRight.jsx'
import { getBaseUrl } from '../helpers/getBaseUrl.js'

const WelcomeWrapper = styled.section`
  background-color: ${color('dark')};
`

const WelcomeContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: flex-end;
`

const WelcomeContent = styled.div`
  color: ${color('white')};
  top: 150px;
  left: 0;
  position: absolute;
  z-index: 100;
`

const ContentParagraph = styled.h1`
  color: #fff;
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 2px;
  padding: 25px 0 75px;
`

const DiscoverButton = styled.button`
  color: ${color('white')};
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 2px;
  padding: 25px 66px 25px 67px;
  background-color: ${color('red')};
  border-radius: 10px;
  transition: background-color 0.45s ease;
  &:hover {
    background-color: ${color('gold')};
  }
`

const SliderContainer = styled.div``

const SliderImage = styled.div`
  position: relative;
  margin-bottom: 60px;
  background: linear-gradient(
      90deg,
      #000 0%,
      rgba(0, 0, 0, 0.5) 16.19%,
      rgba(0, 0, 0, 0) 30.73%
    ),
    url(${(props) => props.imageUrl}) lightgray;
  width: 1000px;
  height: 750px;
  background-repeat: no-repeat;
`

const Controls = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${color('white')};
  padding: 40px 75px;
  color: #fff;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  text-transform: uppercase;
  background-color: ${color('dark')};
  display: flex;
  align-items: center;
`

const SlideCounter = styled.div`
  letter-spacing: 0px;
`

const SliderDotWrapper = styled.div`
  display: flex;
  margin: 0 60px 0 53px;

  & > * + * {
    margin-left: 25px;
  }
`

const SliderDot = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${(props) =>
    props.active ? color('gold-hover-button') : color('white')};
  cursor: pointer;
  transition: background-color 0.35s ease;
  &:hover {
    background-color: ${color('gold')};
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  & > * + * {
    margin-left: 24px;
  }
`

const Welcome = () => {
  return (
    <WelcomeWrapper id="welcome">
      <WelcomeContainer>
        <WelcomeContent>
          <Heading>
            Welcome <br /> to the Louvre
          </Heading>
          <ContentParagraph>From the castle to the museum</ContentParagraph>
          <DiscoverButton
            onClick={() =>
              window.open(
                'https://www.google.com/maps/@48.8618159,2.3366818,3a,75y,81.55h,73.4t/data=!3m7!1e1!3m5!1sAF1QipOVxZQuSy3Bx9T_HpH_7FtBHDTXvI6SF-A10ocT!2e10!3e12!7i5472!8i2736',
                '_blank'
              )
            }
          >
            Discover the Louvre
          </DiscoverButton>
        </WelcomeContent>
        <SliderContainer>
          <SliderImage
            imageUrl={getBaseUrl() + '/images/welcome-slider/1.jpg'}
          />
          <Controls>
            <SlideCounter>01&nbsp; | &nbsp;05</SlideCounter>
            <SliderDotWrapper>
              <SliderDot active />
              <SliderDot />
              <SliderDot />
              <SliderDot />
              <SliderDot />
            </SliderDotWrapper>
            <ButtonsWrapper>
              <ArrowLeft />
              <ArrowRight />
            </ButtonsWrapper>
          </Controls>
        </SliderContainer>
      </WelcomeContainer>
    </WelcomeWrapper>
  )
}

export default Welcome
