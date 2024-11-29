import { useEffect, useState } from "react";
import axios from "axios";
import { Weather, Calendar } from "../components";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { GoBookmark } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa";

import "../assets/styles/News.css";

// Import images
import userImg from "../assets/images/user.jpg";
import newsPlaceholder from "../assets/images/news-placeholder.jpg";

const categories = [
  "general",
  "world",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
  "nation"
]

const News = () => {
  const [headline, setHeadline] = useState(null);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("general");

   // Fetching news data from API
  const fetchNews = async () => {
    setLoading(true);
    try {
      const url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&apikey=${import.meta.env.VITE_GNEWS_API_KEY}`;
      const response = await axios.get(url);
      const fetchedNews = response.data.articles;

      fetchedNews.forEach((article) => {
        if (!article.image) {
          article.image = newsPlaceholder;
        }
      })

      setLoading(false);
      setHeadline(fetchedNews[0]);
      setNews(fetchedNews.slice(1, 7));
    } catch (error) {
        setLoading(false);
      console.error("Error fetching news: ", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [selectedCategory])

  const handleCategoryChange = (e, category) => {
    e.preventDefault();

    setSelectedCategory(category);
  }

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
              {categories.map((category) => (
                <a href="#" className="nav-link" key={category} onClick={(e) => handleCategoryChange(e, category)}>
                {category}
              </a>
              ))}
              
              <a href="#" className="nav-link">
                Bookmarks <GoBookmark className="bookmark-icon" size={20} />
              </a>
            </div>
          </nav>
        </div>
        <div className="news-section">
          {headline && (<div className="headline">
            <img src={headline.image || newsPlaceholder} alt={headline.title} />
            <h2 className="headline-title">
              {headline?.title} <FaRegBookmark className="bookmark"/>
            </h2>
          </div>)}
          <div className="news-grid">
            {news && news.map((article, idx) => (
              <div className="news-grid-item" key={idx}>
              <img src={article.image || newsPlaceholder} alt={article.title} />
              <h3 className="news-title">
                {article.title.substr(0, 20) + '...'} <FaRegBookmark className="bookmark"/>
              </h3>
            </div>
            ))}
            
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
