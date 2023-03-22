
import Link from "next/link"
const TwoTable = ({text,url,id,resName}) => {
  return (
    <div className="twoTable">
      <Link href={{pathname:`/${url}`,query:{id:`${id}`,name:`${resName}`}}} legacyBehavior><a>{text}</a></Link>
    </div>
  )
}

export default TwoTable
