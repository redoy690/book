import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  
  const [bookmarks, setbookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
    const newBookmark = [...bookmarks, blog]
    setbookmarks(newBookmark)
  }

  const handleMarkAsRead = (id,time) =>{
     const newtime = parseFloat(time)
     const newReadingTime= (readingTime + newtime)
     setReadingTime(newReadingTime)
    //  console.log('remove bookmark', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setbookmarks(remainingBookmarks)
  }



  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>

      </div>
    </>
  )
}

export default App
