import parse from 'html-react-parser';
import '../../App.css';
import PropTypes from 'prop-types';

const ShowPost = ({ content }) => {
  return (
    <div className="mycontent">
      <div className="show-post-content">
        {parse(content)}
      </div>
    </div>
  );
};

ShowPost.propTypes = {
  content: PropTypes.string.isRequired, // Validate that content is a string
};

export default ShowPost;


