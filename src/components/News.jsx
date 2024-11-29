import { Weather, Calendar } from "../components";
import "../assets/styles/News.css";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { GoBookmark } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa";


import userImg from "../assets/images/user.jpg";
import techImage from "../assets/images/tech.jpg";
import sportsImg from "../assets/images/sports.jpg";
import scienceImg from "../assets/images/science.jpg";
import healthImg from "../assets/images/health.jpg";
import entertainmentImg from "../assets/images/entertainment.jpg";
import worldImg from "../assets/images/entertainment.jpg";
import nationImg from "../assets/images/world.jpg";

const News = () => {
  return (
    <div className="news">
      <header className="news-header">
        <h1 className="logo">News & Blog</h1>
        <div className="search-bar">
          <form>
            <input
              type="text"
              placeholder="Search news..."
              aria-label="Search news"
            />
            <button type="submit">
              <HiOutlineMagnifyingGlass size={16} />
            </button>
          </form>
        </div>
      </header>
      <div className="news-content">
        <div className="navbar">
          <div className="user">
            <img src={userImg} alt="user image" />
            <p>Luigi&apos;s Blog</p>
          </div>
          <nav className="categories">
            <h1 className="nav-heading">Categories</h1>
            <div className="nav-links">
              <a href="#" className="nav-link">
                General
              </a>
              <a href="#" className="nav-link">
                World
              </a>
              <a href="#" className="nav-link">
                Business
              </a>
              <a href="#" className="nav-link">
                Technology
              </a>
              <a href="#" className="nav-link">
                Entertainment
              </a>
              <a href="#" className="nav-link">
                Sports
              </a>
              <a href="#" className="nav-link">
                Science
              </a>
              <a href="#" className="nav-link">
                Health
              </a>
              <a href="#" className="nav-link">
                Bookmarks <GoBookmark className="bookmark-icon" size={20} />
              </a>
            </div>
          </nav>
        </div>
        <div className="news-section">
          <div className="headline">
            <img src={techImage} alt="Headline image" />
            <h2 className="headline-title">
              Lorem, ipsum dolor sit amet <FaRegBookmark className="bookmark"/>

            </h2>
          </div>
          <div className="news-grid">
            <div className="news-grid-item">
              <img src={nationImg} alt="Worlds image" />
              <h3 className="news-title">
                Lorem, ipsum dolor sit amet <FaRegBookmark className="bookmark"/>
              </h3>
            </div>
            <div className="news-grid-item">
              <img src={sportsImg} alt="Sports image" />
              <h3 className="news-title">
                Lorem, ipsum dolor sit amet <FaRegBookmark className="bookmark"/>
              </h3>
            </div>
            <div className="news-grid-item">
              <img src={scienceImg} alt="Science image" />
              <h3 className="news-title">
                Lorem, ipsum dolor sit amet <FaRegBookmark className="bookmark"/>
              </h3>
            </div>
            <div className="news-grid-item">
              <img src={healthImg} alt="Health image" />
              <h3 className="news-title">
                Lorem, ipsum dolor sit amet <FaRegBookmark className="bookmark"/>
              </h3>
            </div>
            <div className="news-grid-item">
              <img src={entertainmentImg} alt="Entertainment image" />
              <h3 className="news-title">
                Lorem, ipsum dolor sit amet <FaRegBookmark className="bookmark"/>
              </h3>
            </div>
            <div className="news-grid-item">
              <img src={worldImg} alt="Entertainment image" />
              <h3 className="news-title">
                Lorem, ipsum dolor sit amet <FaRegBookmark className="bookmark"/>
              </h3>
            </div>
          </div>
        </div>
        <div className="blog-section">My Blogs</div>
        <div className="weather-calendar">
          <Weather />
          <Calendar />
        </div>
      </div>
      <footer className="news-footer">Footer</footer>
    </div>
  );
};
export default News;
