import styled from '@emotion/styled'

const Wrapper = styled.div``
const TicketCounterHeading = styled.h4`
  color: #000;
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 16px;
`
const CountInputWrapper = styled.div`
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid #000;
  width: 150px;
  height: 50px;
  padding: 0 10px;
`
const CountChanger = styled.button`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: transparent;
`
const CountValue = styled.div`
  color: #000;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`

const TicketCounter = ({ heading, value, name }) => (
  <Wrapper>
    <TicketCounterHeading>{heading}</TicketCounterHeading>
    <CountInputWrapper>
      <CountChanger type="button">&ndash;</CountChanger>
      <CountValue>{value}</CountValue>
      <CountChanger type="button">+</CountChanger>
    </CountInputWrapper>
    <input type="number" hidden value={value} name={name} />
  </Wrapper>
)

export default TicketCounter
