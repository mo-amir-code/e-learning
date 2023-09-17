import React from 'react'
import Slider from 'react-slick'
import review1 from '../media/review/1.jpg'
import review2 from '../media/review/2.jpg'
import review3 from '../media/review/3.jpg'
import review4 from '../media/review/4.jpg'
import review5 from '../media/review/5.jpg'
import review6 from '../media/review/6.jpg'
import review7 from '../media/review/7.jpg'
import review8 from '../media/review/8.jpg'
import review9 from '../media/review/9.jpg'
import review10 from '../media/review/10.jpg'
import review11 from '../media/review/11.jpg'
import review12 from '../media/review/12.jpg'
import review13 from '../media/review/13.jpg'
import review14 from '../media/review/14.jpg'
import review15 from '../media/review/15.jpg'
import review16 from '../media/review/16.jpg'
import review17 from '../media/review/17.jpg'
import review18 from '../media/review/18.jpg'
import review19 from '../media/review/19.jpg'
import review20 from '../media/review/20.jpg'
import review21 from '../media/review/21.jpg'
import review22 from '../media/review/22.jpg'
import review23 from '../media/review/23.jpg'
import review24 from '../media/review/24.jpg'
import review25 from '../media/review/25.jpg'
import review26 from '../media/review/26.jpg'
import review27 from '../media/review/27.jpg'
import review28 from '../media/review/28.jpg'
import review29 from '../media/review/29.jpg'
import review30 from '../media/review/30.jpg'
import review31 from '../media/review/31.jpg'
import review32 from '../media/review/32.jpg'

const StudentReview = () => {

    const reviews = [
        {
            link: review1
        },
        {
            link: review2
        },
        {
            link: review3
        },
        {
            link: review4
        },
        {
            link: review5
        },
        {
            link: review6
        },
        {
            link: review7
        },
        {
            link: review8
        },
        {
            link: review9
        },
        {
            link: review10
        },
        {
            link: review11
        },
        {
            link: review12
        },
        {
            link: review13
        },
        {
            link: review14
        },
        {
            link: review15
        },
        {
            link: review16
        },
        {
            link: review17
        },
        {
            link: review18
        },
        {
            link: review19
        },
        {
            link: review20
        },
        {
            link: review21
        },
        {
            link: review22
        },
        {
            link: review23
        },
        {
            link: review24
        },
        {
            link: review25
        },
        {
            link: review26
        },
        {
            link: review27
        },
        {
            link: review28
        },
        {
            link: review29
        },
        {
            link: review30
        },
        {
            link: review31
        },
        {
            link: review32
        },
    ]

    const slickSettings = {
        dots: false,
        infinite: true,
        speed: 400,
        autoplay: true,
        slidesToShow: 1,
      };
  return (
    <div className='my-16' >
        <div className="py-14 flex justify-center items-center">
        <h1 className=" text-4xl text-center w-10/12 bg-orange-500 py-3 rounded-3xl shadow-md text-white shadow-black">
          Placed Student Reviews
        </h1>
      </div>
      <div className='overflow-hidden' >
        <div>
        <Slider {...slickSettings} >
            {reviews.map((review, index)=>{return<img key={index} src={review.link} alt="" />})}
        </Slider>
        </div>
      </div>
    </div>
  )
}

export default StudentReview
