import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title,reading_time} = bookmark;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl flex justify-between'>
            <h3 className='text-2xl mr-2'>{title}</h3>
            <h3 className='text-2xl'>{reading_time}</h3>
        </div>
    );
};

Bookmark.proptypes ={
    bookmark:PropTypes.object
}

export default Bookmark;