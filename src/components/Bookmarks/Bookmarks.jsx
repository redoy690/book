import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks , readingTime}) => {
    return (
        <div className="md:w-1/3 text-center bg-gray-300 ml-6">
            <div>
                <h3 className='text-4xl'>Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl mt-4">Bookmarked Blogs: {bookmarks.length}</h2>
            <div>
            {
              bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;