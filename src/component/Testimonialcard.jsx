import React from 'react'
import '../styles/Testimonialcard.css'
// import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'
function Testimonialcard(props) {
    console.log(props)
    return (
        <div className='Testimonialcard_container'>
            <div className='image' style={{
                position:'absolute',
                top:'20px',
                left:'30px',
            }}>
                <img style={{
                    width: '120px',
                    height: '120px',
                    position: 'absolute',
                    borderRadius: '50%',
                    overflow: 'hidden',
                }} src='https://www.vhv.rs/dpng/d/551-5511364_circle-profile-man-hd-png-download.png'></img>

            </div>
            <h2>{props.reviews.name}</h2>
            <div className='line'></div>
            <h4>{props.reviews.job}</h4>

            {/* <BiSolidQuoteAltLeft /> */}
            <p>{props.reviews.description}</p>
            {/* <BiSolidQuoteRight /> */}
        </div>
    )
}

export default Testimonialcard