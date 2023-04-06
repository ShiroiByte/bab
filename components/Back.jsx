import Link from "next/link"
const Back = ({text,url}) => {
  return (
    <div className="back">
        <Link href={{pathname:`/${url}`}} legacyBehavior><a>{text}</a></Link>
    </div>
  )
}

export default Back
