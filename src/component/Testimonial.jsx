import React, { useState } from 'react'
import Testimonialcard from './Testimonialcard'
function Testimonial(props) {
    // let reviews = props.review
    let n = props.reviewData.length
    console.log(n)
    // console.log(props.reviewData[0])
    const [count, setCount] = useState(0)

    function IncrementData() {
        if (count === n - 1) {
            setCount(0)
        }
        else {
            setCount(count + 1)
        }
    }
    function DecrementData() {
        if (count === 0) {
            setCount(n - 1)
        }
        else {
            setCount(count - 1)
        }
    }

    function getRandom(){
        let randomReview = Math.floor(Math.random()*n)
        setCount(randomReview)
    }

    return (
        <div>

            <Testimonialcard style = {{
                width:'80%',
                margin:'20px 80px'
            }}reviews={props.reviewData[count]}></Testimonialcard>
            <div style = {{
                display:'flex',
                justifyContent:'center',
                gap:'10px'
            }} className='btn'>
                <button style ={{
                    width:'50px',
                    height:'50px',
                    backgroundColor:'green',
                    color:'white',
                    opacity:'0.6',
                    borderRadius:'10px',
                }}onClick={IncrementData}> + </button>
                <button style ={{
                    width:'50px',
                    height:'50px',
                    backgroundColor:'green',
                    color:'white',
                    opacity:'0.6',
                    borderRadius:'10px',
                    fontWeight:'bolder'
                }}onClick={DecrementData}> - </button>
            </div>
            <div style={{display:'flex',
                    justifyContent:'center'}}>
            <button style ={{
                    width:'auto',
                    height:'auto',
                    backgroundColor:'green',
                    color:'white',
                    opacity:'0.6',
                    borderRadius:'10px',
                    margin:'15px'
                }}onClick={getRandom}> Get Random Review </button>

            </div>
            
        </div>
    )
}

export default Testimonial