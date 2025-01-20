import React, {useState} from 'react'
import Title from '../Components/Title'
import hpy_lady from './Image/happy.jpg'
import { 
    AiFillSmile, 
    AiFillHeart, 
    AiOutlineHeart, 
    AiOutlineComment 
    } from "react-icons/ai";
import './style.css'

const LikePhotoApp = () => {
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);

    const toggleLike =()=>{
        if(!like){
            setLike(true)
            setCount(count+1)
        }else
        {
            setLike(false)
            setCount(count-1)
        }
    }

  return (
    <div className='container text-center'>
      <Title text={"Like Photo App"}/>

      <Title classes={"subtitle"}text={`Likes ${count}`}/>
      <div className="card card-dark m-auto shadow-sm" 
           style={{width:300, cursor:"pointer"}}
           onDoubleClick={toggleLike}>
         <div className="card-header fs-xl">
            <AiFillSmile className='mr-2'/>
            <small>Delighted</small>
         </div>
         <img src={hpy_lady} alt="img" 
              style={{height:"fit-content"}} />
         <div className="card-footer d-flex fs-xl" 
              style={{justifyContent:"space-between"}}>
              <AiOutlineComment/>
            {
                like? <AiFillHeart className='text-danger' onClick={toggleLike}/>: 
                <AiOutlineHeart onClick={toggleLike}/>
            }
         </div>
      </div>
    </div>
  )
}

export default LikePhotoApp
