import Link from "next/link"
const Confirm = ({text,url,id}) => {
  return (
    <div className="back">
        <Link href={{pathname:`/${url}`,query:{id:`${id}`}}} legacyBehavior><a>{text}</a></Link>
    </div>
  )
}

export default Confirm
