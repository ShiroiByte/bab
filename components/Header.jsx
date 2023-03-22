import logo from '../public/logo.jpg'
import Image from 'next/image'

const Header = () => {
  return (
<div className="header_div">
    <Image src={logo} width="75" height="80" alt='logo' className='logo'/>
    <div className="title">
        <h1 className='text'>Book-a-Bite</h1>
    </div>
    <div className='links'>
    <a href="/contact">Contact</a>
    <a href="/about-us" className='move30'>About us</a>
    </div>

</div>
  )
}

export default Header
