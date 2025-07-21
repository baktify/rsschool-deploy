import styled from '@emotion/styled'
import { color } from '../helpers/theme-provider'
import Logo from '../components/Logo'

const HeaderWrapper = styled.header`
  background: ${color('dark')};
`

const HeaderContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 59px 0;
`

const Navigation = styled.nav``

const List = styled.ul`
  display: flex;

  & > * + * {
    margin-left: 55px;
  }
`

const ListItem = styled.li`
  list-style-type: none;
`
const NavLink = styled.a`
  color: ${color('white')};
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  letter-spacing: 2px;
  transition: color 0.25s ease;

  &:hover {
    color: ${color('gold')};
  }
  &:active {
    color: ${color('gold-active-nav')};
  }
`
const navItems = [
  { id: 'visiting', text: 'Visiting' },
  { id: 'explore', text: 'Explore' },
  { id: 'video', text: 'Video' },
  { id: 'gallery', text: 'Gallery' },
  { id: 'tickets', text: 'Tickets' },
  { id: 'contacts', text: 'Contacts' },
]

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo />
        <Navigation>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.id}>
                <NavLink href={`#` + item.id}>{item.text}</NavLink>
              </ListItem>
            ))}
          </List>
        </Navigation>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
