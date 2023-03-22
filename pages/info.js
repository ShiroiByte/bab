import GetFont from "@/components/GetFont"
import Header from "@/components/Header"
import LeftText from "@/components/LeftText"


const info = () => {
  return (
    <>
    <GetFont />
    <Header />
    <br/>
    <br/>
    <LeftText text={"Enter your information"} />
    <br/>
    <br/>
    <br/>
    <LeftText text={"Name"} />
    <br/>
    <br/>
    <br/>
    <br/>
    <LeftText text={"Surname"} />
    <br/>
    <br/>
    <br/>
    <br/>
    <LeftText text={"Date"} />
    </>
  )
}

export default info
