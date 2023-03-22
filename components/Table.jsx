import Link from "next/link"
const Table = ({text,url,id,resName}) => {
  return (
    <div className="table">
        <Link href={{pathname:`/${url}`,query:{id:`${id}`,name:`${resName}`}}} legacyBehavior><a>{text}</a></Link>
    </div>
  )
}

export default Table
