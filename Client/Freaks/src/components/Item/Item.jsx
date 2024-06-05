import React from 'react'

const Item = (props) => {
  return (
    <div className=' w-350px'>
        <img src={props.imageUrl} alt="" />
        <p className=' mx-6 my-0'>{props.title}</p>
        <div className=' flex gap-20px'>
            <div className=' '>
                {props.discountedPrice}
            </div>
            <div className=' line-through '>
            {props.price}
            </div>
        </div>
    </div>
  )
}

export default Item