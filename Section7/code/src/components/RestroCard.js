import { CDN_LINK } from "../utilis/constants";
const RestroCard= (props)=>{
    const {resData} = props;

    const{cloudinaryImageID,
      name,
      cuisines,
      avgRating,
      sla,
   } = resData?.info;
   if (!resData) {
    return null;
  }
    return (
       <div className='card'>

           <img className='rest-logo'
               src= {CDN_LINK + resData.info.cloudinaryImageId}
               alt='food'/>
           <h3>{name}</h3>
           <h4>{cuisines.join(", ")}</h4>
           <h4>{avgRating} Stars</h4>
           <h4>{sla.deliveryTime} mins</h4>
          
             
       </div>
    )
}
export default RestroCard;