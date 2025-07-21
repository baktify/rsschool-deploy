import styled from '@emotion/styled'
import { color } from '../helpers/theme-provider'
import Heading from './Heading'
import Separator from './Separator'
import { getBaseUrl } from '../helpers/getBaseUrl'

const cards = [
  {
    id: 1,
    heading: 'Royal Palace',
    type: '360° Virtual Tour',
    view: 'Google Street Panorama View',
    image: getBaseUrl() + 'images/virtual-tour/royal-palace.jpg',
    link: 'https://www.google.com/maps/@48.8606882,2.3356791,3a,90y,328.36h,87.55t/data=!3m7!1e1!3m5!1sAF1QipMZ9YgnArbwEIbTDANeSQYFu9gNqpW_2Sv8FBvY!2e10!3e12!7i4352!8i1815',
  },
  {
    id: 2,
    heading: 'Denon Wing',
    type: '360° Virtual Tour',
    view: 'Google Street Panorama View',
    image: getBaseUrl() + 'images/virtual-tour/Denon-Wing.jpg',
    link: 'https://www.google.com/maps/@48.8563254,2.3352706,3a,75y,90t/data=!3m7!1e1!3m5!1sAF1QipNRj_CwP4coDMYdCHj6qHeBeJpI2VxU5BUsOX4F!2e10!3e12!7i11000!8i5500',
  },
  {
    id: 3,
    heading: 'Colonnade Perrault',
    type: '360° Virtual Tour',
    view: 'Google Street Panorama View',
    image: getBaseUrl() + 'images/virtual-tour/Colonnade-Perrault.jpg',
    link: 'https://www.google.com/maps/@48.8601723,2.3395439,3a,88.4y,322.04h,84.25t/data=!3m7!1e1!3m5!1sAF1QipNMZGQuEA-pAUvIG_eP_2f3gWTKZEJ6XLVJ-Pgb!2e10!3e12!7i10240!8i5120',
  },
  {
    id: 4,
    heading: 'Greek hall',
    type: '360° Virtual Tour',
    view: 'Google Street Panorama View',
    image: getBaseUrl() + 'images/virtual-tour/Greek-hall.jpg',
    link: 'https://www.google.com/maps/@48.860183,2.3356156,3a,90y,177.69h,95.61t/data=!3m7!1e1!3m5!1sAF1QipP7uFZnTITRe-7AEVAgHAfqiCL-03gvBHcYWgF3!2e10!3e12!7i5472!8i2736',
  },
  {
    id: 5,
    heading: 'Mona Lisa',
    type: '360° Virtual Tour',
    view: 'Google Street Panorama View',
    image: getBaseUrl() + 'images/virtual-tour/Mona-Lisa.jpg',
    link: 'https://www.google.com/maps/@48.8598788,2.3355157,3a,82.2y,7.53h,94t/data=!3m7!1e1!3m5!1sAF1QipO1wkUUbyzpPjj-OR0mR5etZJT-xl-40XK8rDQ3!2e10!3e12!7i10240!8i5120',
  },
  {
    id: 6,
    heading: 'Night Palace',
    type: '360° Virtual Tour',
    view: 'Google Street Panorama View',
    image: getBaseUrl() + 'images/virtual-tour/Night-Palace.jpg',
    link: 'https://www.google.com/maps/@48.8563254,2.3352706,3a,90y,21.26h,79.91t/data=!3m7!1e1!3m5!1sAF1QipPpGAowYatVyk3MMGnZAaQkYm2EUk-Dlca06SS5!2e10!3e12!7i11304!8i5652',
  },
]

const TourWrapper = styled.section`
  background: ${color('white')};
  padding: 75px 0 76px;
`
const TourContainer = styled.div`
  max-width: 1440px;
  margin: auto;
`
const CardGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 76px 60px;
`
const CardWrapper = styled.a``
const Card = styled.article`
  & .small-separator {
    transition: width 0.5s ease;
  }
  &:hover .small-separator {
    width: 100%;
    transition: width 0.5s ease;
  }
`
const Image = styled.img``
const CardContent = styled.div`
  margin-top: 25px;
  & > * + * {
    margin-top: 10px;
  }
`
const CardHeading = styled.h3`
  color: ${color('dark')};
  font-family: Forum;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 5px;
  text-transform: uppercase;
`
const CardType = styled.h4`
  color: ${color('dark')};
  font-size: 22px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
`
const CardView = styled.h5`
  color: ${color('dark')};
  font-size: 18px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
`

const Tour = () => (
  <TourWrapper id="visiting">
    <TourContainer>
      <Heading isGold={true}>Virtual tour</Heading>
      <Separator />
      <CardGallery>
        {cards.map((card) => (
          <CardWrapper key={card.id} href={card.link} target="_blank">
            <Card>
              <Image src={card.image} alt={card.heading} />
              <CardContent>
                <CardHeading>{card.heading}</CardHeading>
                <Separator className="small-separator" small={true} />
                <CardType>{card.type}</CardType>
                <CardView>{card.view}</CardView>
              </CardContent>
            </Card>
          </CardWrapper>
        ))}
      </CardGallery>
    </TourContainer>
  </TourWrapper>
)

export default Tour
