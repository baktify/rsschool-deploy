import styled from '@emotion/styled'
import { color } from '../helpers/theme-provider'
import Heading from './Heading'
import Separator from './Separator'
import { getBaseUrl } from '../helpers/getBaseUrl'

const ContactsWrapper = styled.section`
  background: ${color('white')};
  padding: 75px 0 74px;
`
const ContactsContainer = styled.div`
  max-width: 1440px;
  margin: auto;
`
const ContactsContent = styled.div`
  display: flex;
  justify-content: space-between;
`
const AddressDetails = styled.div`
  color: #000;
  & > h3 {
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`
const AddressDescription = styled.div`
  margin-top: 51px;
  & > p {
    font-size: 22px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  & > * + * {
    margin-top: 26px;
  }
  & a {
    color: inherit;
    transition: color 0.33s ease;

    &:hover {
      color: ${color('gold')};
    }
  }
`
const AddressMap = styled.img``

const Contacts = () => {
  return (
    <ContactsWrapper id="contacts">
      <ContactsContainer>
        <Heading isGold={true}>Contacts</Heading>
        <Separator />
        <ContactsContent>
          <AddressDetails>
            <h3>
              Palais Royal <br /> Musee du Louvre
            </h3>
            <AddressDescription>
              <p>address: 75001 Paris, France</p>
              <p>
                phone: <a href="tel:+330140205050">+33(0) 1 40 20 50 50</a>
              </p>
              <p>
                mail: <a href="mailto:info@louvre.fr">info@louvre.fr</a>
              </p>
            </AddressDescription>
          </AddressDetails>
          <AddressMap
            src={getBaseUrl() + 'images/contact-map.png'}
            alt="address-map"
          />
        </ContactsContent>
      </ContactsContainer>
    </ContactsWrapper>
  )
}
export default Contacts
