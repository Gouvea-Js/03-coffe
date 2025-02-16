import logo from '/images/logo-coffe.svg'
import { NavLink } from 'react-router-dom'
import { Aside, HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header(){
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt='Logo Coffee Delivery' />
      </NavLink>
       <Aside>
        <div>
          <MapPin size={22} weight='fill' />
          <span>Porto Alegre, RS</span>
        </div>

          <NavLink to="/cart">
            <ShoppingCart size={22} weight='fill'/>
          </NavLink>
       </Aside>
    </HeaderContainer>
  )
  
}