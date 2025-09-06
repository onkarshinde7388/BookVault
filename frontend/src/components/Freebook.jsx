import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import Card from './Card'; 

const Freebook = () => {
     const [book, setBook] = useState([]);
      useEffect(() =>{
        const getBooks = async() => {
        try {
          const res = await axios.get("http://localhost:3000/books"); 
          const data = res.data.filter((data) => data.category == "Free")
          setBook(data);
        } catch (error) {
          console.error("Error fetching books:", error);
        }
      }
      getBooks();
      }, []);
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
    <h1 className='text-2xl font-bold py-4'>Free Books</h1>
    <div>
    <div className="slider-container">
      <Slider {...settings}>
        {book.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </Slider>
    </div>
    </div>
    </div>
    </>
  )
}

export default Freebook