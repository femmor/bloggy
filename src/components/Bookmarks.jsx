import propTypes from "prop-types";
import { MdClose, MdDeleteForever } from "react-icons/md";

import "../assets/styles/Modal.css";
import "../assets/styles/Bookmarks.css";

const Bookmarks = ({ onClose, bookmarks, onBookmark }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <MdClose size={24} className="close-button" onClick={onClose} />
        <h2 className="bookmark-heading">Bookmarked News</h2>
        <div className="bookmarks-list">
          {bookmarks.length > 0 ? bookmarks.map((bookmark, idx) => {
            return (
              <div className="bookmark-item" key={idx}>
                <img src={bookmark.image} alt={bookmark.title} />
                <h3>
                  {bookmark.title}
                </h3>
                <span className="delete-button">
                  <MdDeleteForever size={24} onClick={(e) => {
                    e.stopPropagation();
                    onBookmark(bookmark);
                  }}/>
                </span>
              </div>
            );
          }) : <h4 className="no-bookmarks">No bookmarks available.</h4>}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  onClose: propTypes.func,
  bookmarks: propTypes.array,
  onSelectArticle: propTypes.func,
  onBookmark: propTypes.func,
};

export default Bookmarks;
