import Link from "next/link"
const EightTable = ({text,url,id,resName}) => {
  return (
    <div className="eightTable">
      <Link href={{pathname:`/${url}`,query:{id:`${id}`,name:`${resName}`}}} legacyBehavior><a>{text}</a></Link>
    </div>
  )
}

export default EightTable
