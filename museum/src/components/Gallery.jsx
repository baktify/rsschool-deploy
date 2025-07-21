import styled from '@emotion/styled'
import { color } from '../helpers/theme-provider'
import Heading from './Heading'
import { getBaseUrl } from '../helpers/getBaseUrl'

const galleryImages = [
  { id: 1, src: getBaseUrl() + 'images/galery/galery1.jpg' },
  { id: 2, src: getBaseUrl() + 'images/galery/galery2.jpg' },
  { id: 3, src: getBaseUrl() + 'images/galery/galery3.jpg' },
  { id: 4, src: getBaseUrl() + 'images/galery/galery4.jpg' },
  { id: 5, src: getBaseUrl() + 'images/galery/galery5.jpg' },
  { id: 6, src: getBaseUrl() + 'images/galery/galery6.jpg' },
  { id: 7, src: getBaseUrl() + 'images/galery/galery7.jpg' },
  { id: 8, src: getBaseUrl() + 'images/galery/galery8.jpg' },
  { id: 9, src: getBaseUrl() + 'images/galery/galery9.jpg' },
  { id: 10, src: getBaseUrl() + 'images/galery/galery10.jpg' },
  { id: 11, src: getBaseUrl() + 'images/galery/galery11.jpg' },
  { id: 12, src: getBaseUrl() + 'images/galery/galery12.jpg' },
  { id: 13, src: getBaseUrl() + 'images/galery/galery13.jpg' },
  { id: 14, src: getBaseUrl() + 'images/galery/galery14.jpg' },
  { id: 15, src: getBaseUrl() + 'images/galery/galery15.jpg' },
]

const imageSelect = {
  desktop: [
    [2, 9, 4, 6],
    [1, 8, 3, 5],
    [7, 10, 15, 12],
  ],
}

const GalleryWrapper = styled.section`
  background: ${color('dark')};
  padding: 75px 0 0;
`
const GalleryContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  position: relative;
`
const GalleryContent = styled.div`
  margin-top: 75px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 36px;
`
const GalleryRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  &:nth-of-type(1) {
    margin-top: 50px;

    & div:last-child {
      max-height: 242px;
      overflow: hidden;

      & > img {
        width: 100%;
        max-height: 556px;
      }
    }
  }
  &:nth-of-type(2) {
    & div:last-child {
      max-height: 292px;
      overflow: hidden;

      & > img {
        width: 100%;
        max-height: 558px;
      }
    }
  }

  &:nth-of-type(3) {
    margin-top: 50px;
  }
  & img {
    max-width: 456px;
  }
`
const ImageWrapper = styled.div``
const GalleryFade = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 360px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
`

const Gallery = () => {
  return (
    <GalleryWrapper id="gallery">
      <GalleryContainer>
        <Heading>Art Gallery</Heading>
        <GalleryContent>
          <GalleryRow>
            {imageSelect.desktop[0].map((id) => (
              <ImageWrapper key={id}>
                <img
                  src={galleryImages.find((item) => item.id == id).src}
                  alt="Gallery image"
                />
              </ImageWrapper>
            ))}
          </GalleryRow>
          <GalleryRow>
            {imageSelect.desktop[1].map((id) => (
              <ImageWrapper key={id}>
                <img
                  src={galleryImages.find((item) => item.id == id).src}
                  alt="Gallery image"
                />
              </ImageWrapper>
            ))}
          </GalleryRow>
          <GalleryRow>
            {imageSelect.desktop[2].map((id) => (
              <ImageWrapper key={id}>
                <img
                  src={galleryImages.find((item) => item.id == id).src}
                  alt="Gallery image"
                />
              </ImageWrapper>
            ))}
          </GalleryRow>
        </GalleryContent>
        <GalleryFade />
      </GalleryContainer>
    </GalleryWrapper>
  )
}

export default Gallery
