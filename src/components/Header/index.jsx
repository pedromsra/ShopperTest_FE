import {Container} from "./styles.js"

import { Link } from "react-router-dom";

import {HiOutlineShoppingBag, HiUsers} from 'react-icons/hi'
import {MdSystemUpdateAlt} from 'react-icons/md'

export function Header(){
  

  return(
    <Container>
      <div className='container'>
        <Link to='/'><img src='https://shopper.com.br/static/img/logo-programada.svg' alt='shopper logo' className="logo" /></Link>
        <div className='menu'>
          <Link><div className="menuIcon"><div className='icon'><HiOutlineShoppingBag size={20} /></div><p className='description'>Lojas</p></div></Link>
          <Link><div className="menuIcon"><div className='icon'><HiUsers size={20} /></div><p className='description'>Usuário</p></div></Link>
          <Link to="/"><div className="menuIcon"><div className='icon'><MdSystemUpdateAlt size={20} /></div><p className='description'>Atualizar Preços</p></div></Link>
        </div>
      </div>
    </Container>
  )
}