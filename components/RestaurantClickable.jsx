import Link from "next/link"
const RestaurantClickable = ({url,name}) => {
  return (
    <div className='resName' >
      <Link href={`/${url}`} legacyBehavior><a>{name}</a></Link>
    </div>
  )
}

export default RestaurantClickable
