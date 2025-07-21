import styled from '@emotion/styled'
import { color } from '../helpers/theme-provider'
import Heading from './Heading'
import Separator from './Separator'
import RadioButton from './RadioButton'
import TicketCounter from './TicketCounter'
import { getBaseUrl } from '../helpers/getBaseUrl'

const ticketTypes = [
  {
    id: 'permanent',
    name: 'ticketType',
    text: 'Permanent exhibition',
    isDefault: true,
  },
  {
    id: 'temporary',
    name: 'ticketType',
    text: 'Temporary exhibition',
  },
  {
    id: 'combined',
    name: 'ticketType',
    text: 'Combined Admission',
  },
]

const TicketsWrapper = styled.section`
  background: ${color('white')};
  padding: 75px 0;
`
const TicketsContainer = styled.div`
  max-width: 1440px;
  margin: auto;
`
const TicketsContent = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const Image = styled.img``
const TicketDetails = styled.div`
  margin-left: 60px;
  display: flex;
  justify-content: space-between;
`
const TicketType = styled.div`
  & > h3 {
    color: ${color('dark')};
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`
const TicketRadioButtons = styled.div`
  margin-top: 51px;

  & > * + * {
    margin-top: 26px;
  }
`
const TicketAmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  & > h3 {
    color: ${color('dark')};
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`
const TicketCounterContainer = styled.div`
  margin-top: 25px;
  & > * + * {
    margin-top: 10px;
  }
`
const TotalAmount = styled.p`
  color: #000;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.65px;
  margin: 50px 0 60px;
`
const SubmitButton = styled.button`
  border-radius: 2px;
  background: #000;
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 2px;
  padding: 13px 38px 12px 37px;
  transition: background 0.4s ease;

  &:hover {
    color: #000000;
    background: ${color('gold')};
  }
`

const Tickets = () => {
  return (
    <TicketsWrapper id="tickets">
      <TicketsContainer>
        <Heading isGold={true}>Buy tickets</Heading>
        <Separator />

        <TicketsContent>
          <Image
            src={getBaseUrl() + 'images/ticket-image.jpg'}
            alt="Ticket image"
          />
          <TicketDetails>
            <TicketType>
              <h3>Ticket Type</h3>
              <TicketRadioButtons>
                {ticketTypes.map((type) => (
                  <RadioButton
                    key={type.id}
                    name={type.name}
                    id={type.id}
                    text={type.text}
                    value={type.id}
                    isDefault={type.isDefault}
                  />
                ))}
              </TicketRadioButtons>
            </TicketType>
            <TicketAmountContainer>
              <h3>Amount</h3>
              <TicketCounterContainer>
                <TicketCounter heading="Basic 18+" value="1" name="basic" />
                <TicketCounter heading="Senior 65+" value="1" name="senior" />
              </TicketCounterContainer>
              <TotalAmount>Total €220</TotalAmount>
              <SubmitButton type="submit">Buy Now</SubmitButton>
            </TicketAmountContainer>
          </TicketDetails>
        </TicketsContent>
      </TicketsContainer>
    </TicketsWrapper>
  )
}
export default Tickets
