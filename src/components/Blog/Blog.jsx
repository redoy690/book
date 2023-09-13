import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';



const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id,title,cover, reading_time, author_img, author,posted_date,hashtags} = blog
    return (
        <div className='mb-20 space-y-2'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                  <div className='flex'>
                      <img className='w-12 rounded-full mr-3' src={author_img} alt="" />
                      <div >
                          <h3 className='text-2xl'>{author}</h3>    
                          <p>{posted_date}</p>
                      </div>
                  </div>
                  <div>
                      <span>{reading_time} min read</span>
                      <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-red-400'><FaBookmark></FaBookmark></button>
                  </div>
            </div>
            <h2 className='text-4xl mb-4'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} ><a href="">{hash}</a></span>)
                }
            </p>
            <button className='text-purple-600 font-bold underline' onClick={() => handleMarkAsRead(id, reading_time)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;