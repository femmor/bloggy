import { MdClose } from "react-icons/md";
import demoImage from "../assets/images/demo.jpg";

import "../assets/styles/NewsModal.css";

const NewsModal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <MdClose size={24} className="close-button"/>
        <img src={demoImage} alt="modal image" className="modal-image"/>
        <h2 className="modal-title">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, quos.
        </h2>
        <p className="modal-source">
            Source: Lorem Ipsum
        </p>
        <p className="modal-date">June 24, 2024, 04:15PM</p>
        <p className="modal-content-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, eius facilis necessitatibus minima accusamus deleniti nam, doloribus enim in dolorum molestias ab maxime id aut doloremque esse. Numquam asperiores minus qui libero rerum delectus vitae facere cum labore commodi! Minima.
        </p>
        <a href="#" className="read-more-link">Read more</a>
      </div>
    </div>
  );
};

export default NewsModal;
