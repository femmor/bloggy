import { Weather, Calendar } from "../components";
import "../assets/styles/News.css";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { GoBookmark } from "react-icons/go";

import userImg from "../assets/images/user.jpg";

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
          <div className="headline">Headline</div>
          <div className="news-grid">News Grid</div>
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
