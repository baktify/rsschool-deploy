import styled from '@emotion/styled'
import { color } from '../helpers/theme-provider'
import Logo from '../components/Logo'
import SocialIcon from '../components/svg/SocialIcon'

const navItems = [
  { id: 'visiting', text: 'Visiting' },
  { id: 'gallery', text: 'Gallery' },
  { id: 'explore', text: 'Explore' },
  { id: 'tickets', text: 'Tickets' },
  { id: 'video', text: 'Video' },
  { id: 'contacts', text: 'Contacts' },
]

const leftNavItems = [
  { id: 'visiting', text: 'Visiting' },
  { id: 'explore', text: 'Explore' },
  { id: 'video', text: 'Video' },
]
const rightNavItems = [
  { id: 'gallery', text: 'Gallery' },
  { id: 'tickets', text: 'Tickets' },
  { id: 'contacts', text: 'Contacts' },
]

const FooterWrapper = styled.footer`
  background: ${color('dark')};
`

const FooterContainer = styled.div`
  padding: 85px 0 50px;
  max-width: 1440px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const LeftContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const Navigation = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;

  & > ul:last-of-type {
    margin-left: 58px;
  }
`
const NavigationList = styled.ul`
  margin: 1px 0 0 -20px;
  & > * + * {
    margin-top: 27px;
  }
`
const NavigationListItem = styled.li``
const NavigationLink = styled.a`
  color: ${color('white')};
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
const RightContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: flex-end;
`
const SocialsWrapper = styled.ul`
  padding-bottom: 4px;
  display: flex;
  gap: 27px;
`
const FooterSeparator = styled.div`
  height: 3px;
  background: #666;
`
const FooterCopyright = styled.div`
  padding: 50px 0 52px;
  max-width: 1440px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  & > * {
    color: ${color('white')};
    font-size: 22px;
    font-style: normal;
    font-weight: 200;
    line-height: 22px;
    letter-spacing: 2px;
  }
  & a {
    transition: color 0.25s ease;

    &:hover {
      color: ${color('gold')};
    }
  }
`
const CopyrightYear = styled.div`
  justify-self: start;
`
const FooterSchool = styled.a`
  justify-self: center;
`
const AuthorGithub = styled.a`
  justify-self: end;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <LeftContainer>
          <Logo />
          <Navigation>
            <NavigationList>
              {leftNavItems.map(({ id, text }) => (
                <NavigationListItem key={id}>
                  <NavigationLink href={`#` + id}>{text}</NavigationLink>
                </NavigationListItem>
              ))}
            </NavigationList>
            <NavigationList>
              {rightNavItems.map(({ id, text }) => (
                <NavigationListItem key={id}>
                  <NavigationLink href={`#` + id}>{text}</NavigationLink>
                </NavigationListItem>
              ))}
            </NavigationList>
          </Navigation>
        </LeftContainer>
        <RightContainer>
          <SocialsWrapper>
            <SocialIcon
              name="youtube"
              link="https://www.youtube.com/user/louvre"
            />
            <SocialIcon
              name="instagram"
              link="https://www.instagram.com/museelouvre/"
            />
            <SocialIcon
              name="facebook"
              link="https://www.facebook.com/museedulouvre"
            />
            <SocialIcon name="twitter" link="https://twitter.com/museelouvre" />
            <SocialIcon
              name="pinterest"
              link="https://www.pinterest.fr/museedulouvre/"
            />
          </SocialsWrapper>
        </RightContainer>
      </FooterContainer>
      <FooterSeparator />
      <FooterCopyright>
        <CopyrightYear>© 2021</CopyrightYear>
        <FooterSchool href="https://rs.school/" target="_blank">
          The Rolling Scopes School
        </FooterSchool>
        <AuthorGithub href="https://github.com/baktify/" target="_blank">
          baktify
        </AuthorGithub>
      </FooterCopyright>
    </FooterWrapper>
  )
}
export default Footer
