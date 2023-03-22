import GetFont from "@/components/GetFont"
import Header from "@/components/Header"
import LeftText from "@/components/LeftText"
import Space from "@/components/Space"
import Image from "next/image"
import logo from '../public/logo.jpg'

function aboutus() {
  return (
    
    <div className="tst">
      <GetFont/>
      <Header/>
      <Space/>
      <LeftText text={"We are a small company that manages restaurant reservations based in New York, supported by 50 cities world wide."}/>
      <center>
      <Space/>
      <Image src={logo} width="150"/>
      </center>
      
    </div>
  )
}

export default aboutus
