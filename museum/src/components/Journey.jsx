import styled from '@emotion/styled'
import { color } from '../helpers/theme-provider'
import Heading from './Heading'
import SlideLeft from './SlideLeft'
import SlideRight from './SlideRight'
import { getBaseUrl } from '../helpers/getBaseUrl'

const videos = [
  {
    id: 1,
    src: getBaseUrl() + 'images/video/slide-video-1.jpg',
  },
  {
    id: 2,
    src: getBaseUrl() + 'images/video/slide-video-2.jpg',
  },
  {
    id: 3,
    src: getBaseUrl() + 'images/video/slide-video-3.jpg',
  },
]

const JourneyWrapper = styled.section`
  background: ${color('white')};
  padding: 75px 0;
`
const JourneyContainer = styled.div`
  max-width: 1440px;
  margin: auto;
`
const HeadingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`
const HeadingDetails = styled.p`
  color: ${color('dark')};
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  line-height: 39px;
`
const MainVideo = styled.div`
  margin-top: 75px;
  cursor: pointer;
`
const VideoGallery = styled.div``
const Videos = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 42px;
`
const Video = styled.div`
  cursor: pointer;
`
const Controls = styled.div`
  display: flex;
  gap: 20px;
  & > * {
    cursor: pointer;
  }
  justify-content: center;
`
const SliderDot = styled.div`
  width: 12px;
  height: 12px;
  background: ${(props) => (props.active ? '#333333' : '#999999')};
  border-radius: 100%;
  transition: background 0.3s ease;
  &:hover {
    background: ${color('red')};
  }
`

const Journey = () => {
  return (
    <JourneyWrapper id="video">
      <JourneyContainer>
        <HeadingWrapper>
          <Heading isGold={true}>Video journey</Heading>
          <HeadingDetails>
            Enter and visit one of the most famous museums in the world and
            enjoy masterpieces such as Mona Lisa or Hammurabi's Code
          </HeadingDetails>
        </HeadingWrapper>
        <MainVideo>
          <img src={getBaseUrl() + 'images/video/player.jpg'} alt="player" />
        </MainVideo>
        <VideoGallery>
          <Videos>
            {videos.map((video) => (
              <Video key={video.id}>
                <img src={video.src} alt={`Video ` + video.id} />
              </Video>
            ))}
          </Videos>
          <Controls>
            <SlideLeft />
            <SliderDot active />
            <SliderDot />
            <SliderDot />
            <SliderDot />
            <SliderDot />
            <SlideRight />
          </Controls>
        </VideoGallery>
      </JourneyContainer>
    </JourneyWrapper>
  )
}
export default Journey
