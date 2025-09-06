import React, {useState} from 'react'
import list from  "../list.json"
import Card from './Card'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() =>{
    const getBooks = async() => {
    try {
      const res = await axios.get("http://localhost:3000/books");
      console.log(res.data);
      setBook(res.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }
  getBooks();
  }, []);
  return (
   <>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl '>We're delighted to <span className='text-pink-600'> Welcome you </span></h1>
        <p className='mt-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus praesentium id pariatur cum provident rerum impedit voluptas aperiam omnis atque dolore, consequatur debitis, molestias sequi alias suscipit maiores reiciendis blanditiis!</p>
   
      <Link to="/">
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 duration-300'> Back </button>
        </Link>
    </div>

    <div>
        {
            book.map((item) =>(
                <Card key={item.id} item={item} />
            ))
        }
    </div>
   </div>

   </>
  )
}

export default Course