import { Weather, Calendar } from "../components";
import "../assets/styles/News.css";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";


const News = () => {
  return (
    <div className="news">
      <header className="news-header">
        <h1 className="logo">News & Blog</h1>
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Search news..." aria-label="Search news"/>
            <button type="submit">
              <HiOutlineMagnifyingGlass size={16}/>
            </button>
          </form>
        </div>
      </header>
      <div className="news-content">
        <div className="navbar">
          <div className="user">User</div>
          <nav className="categories">Categories</nav>
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
