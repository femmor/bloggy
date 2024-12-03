import propTypes from "prop-types";

import { MdClose } from "react-icons/md";

import "../assets/styles/Modal.css";
import "../assets/styles/NewsModal.css";
import { convertDate } from "../utils/convertDate";

const NewsModal = ({ article, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <MdClose size={24} className="close-button" onClick={onClose} />
        {article && (
          <>
            <img
              src={article.image}
              alt="modal image"
              className="modal-image"
            />
            <h2 className="modal-title">{article.title}</h2>
            <p className="modal-source">Source: {article.source.name}</p>
            <p className="modal-date">{convertDate(article.publishedAt)}</p>
            <p className="modal-content-text">{article.description}</p>
            <a href={article.url} target="_blank" className="read-more-link" rel="noopener noreferrer">
              Read more
            </a>
          </>
        )}
      </div>
    </div>
  );
};

NewsModal.propTypes = {
  article: propTypes.object,
  onClose: propTypes.func,
};

export default NewsModal;
