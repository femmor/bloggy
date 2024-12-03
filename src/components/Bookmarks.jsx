import propTypes from "prop-types"
import { MdClose, MdDeleteForever } from "react-icons/md"


import "../assets/styles/Modal.css";
import "../assets/styles/Bookmarks.css";

import demoImage from "../assets/images/demo.jpg";

const Bookmarks = ({ onClose }) => {
  return (
    <div className="modal-overlay">
        <div className="modal-content">
        <MdClose size={24} className="close-button" onClick={onClose} />
        <h2 className="bookmark-heading">Bookmarked News</h2>
        <div className="bookmarks-list">
            <div className="bookmark-item">
                <img src={demoImage} alt="bookmark image" />
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, consequuntur?</h3>
                <span className="delete-button">
                    <MdDeleteForever size={24} />
                </span>
            </div>
            <div className="bookmark-item">
                <img src={demoImage} alt="bookmark image" />
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, consequuntur?</h3>
                 <span className="delete-button">
                    <MdDeleteForever size={24} />
                </span>
            </div>
            <div className="bookmark-item">
                <img src={demoImage} alt="bookmark image" />
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, consequuntur?</h3>
                 <span className="delete-button">
                    <MdDeleteForever size={24} />
                </span>
            </div>
        </div>
        </div>
    </div>
  )
}

Bookmarks.propTypes = {
  onClose: propTypes.func
}

export default Bookmarks