import { useEffect, useState } from "react";
import axios from "axios";
import { Weather, Calendar } from "../components";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { GoBookmark } from "react-icons/go";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import NewsModal from "./NewsModal";
import Bookmarks from "./Bookmarks";

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
  "nation",
];

const News = () => {
  const [headline, setHeadline] = useState(null);
  const [news, setNews] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [showBookmarksModal, setShowBookmarksModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Fetching news data from API
  const fetchNews = async () => {
    setLoading(true);
    try {
      let url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&apikey=${
        import.meta.env.VITE_GNEWS_API_KEY
      }`;

      if (searchQuery) {
        url = `https://gnews.io/api/v4/search?q=${searchQuery}&lang=en&apikey=${
          import.meta.env.VITE_GNEWS_API_KEY
        }`;
      }

      const response = await axios.get(url);
      const fetchedNews = response.data.articles;

      fetchedNews.forEach((article) => {
        if (!article.image) {
          article.image = newsPlaceholder;
        }
      });

      setLoading(false);
      setHeadline(fetchedNews[0]);
      setNews(fetchedNews.slice(1, 7));

      // Get bookmarks from local storage
      const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
      setBookmarks(storedBookmarks);

    } catch (error) {
      setLoading(false);
      console.error("Error fetching news: ", error);
    }
  };

  // Handles category change
  const handleCategoryChange = (e, category) => {
    e.preventDefault();

    setSelectedCategory(category);
  };

  // Handles search input change
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Handles search form submission
  const handleSearch = (e) => {
    e.preventDefault();

    setSearchQuery(searchInput);
    setSearchInput("");
  };

  // Handles clicking on a news article
  const handleSelectedArticle = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  // Handles bookmarking an article
  const handleBookmarkArticle = (article) => {
    setBookmarks((prevBookmarks) => {
      const updatedBookmarks = prevBookmarks.find(
        (bookmark) => bookmark.title === article.title
      )
        ? prevBookmarks.filter((bookmark) => bookmark.title !== article.title)
        : [...prevBookmarks, article];

        // Store bookmarks in local storage
        localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));

      return updatedBookmarks;
    });
  };

  const handleCloseBookmarksModal = () => {
    setShowBookmarksModal(false)
  }

  // Fetch news on component mount and when selected category or search query changes
  useEffect(() => {
    fetchNews();
  }, [selectedCategory, searchQuery]);

  return (
    <div className="news">
      <header className="news-header">
        <h1 className="logo">News & Blog</h1>
        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search news..."
              aria-label="Search news"
              value={searchInput}
              onChange={handleSearchInputChange}
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
                <a
                  href="#"
                  className="nav-link"
                  key={category}
                  onClick={(e) => handleCategoryChange(e, category)}
                >
                  {category}
                </a>
              ))}

              <a href="#" className="nav-link" onClick={e => {
                  e.preventDefault();
                  setShowBookmarksModal(true)
                }}>
                Bookmarks {bookmarks.length > 0 ? <FaBookmark className="bookmark-icon" size={20} color="#FFD523" /> : <GoBookmark className="bookmark-icon" size={20} />}
              </a>
            </div>
          </nav>
        </div>
        <div className="news-section">
          {headline && (
            <div
              className="headline"
              onClick={() => handleSelectedArticle(headline)}
            >
              <img
                src={headline.image || newsPlaceholder}
                alt={headline.title}
              />
              <h2 className="headline-title">
                {headline?.title}{" "}
                {bookmarks.some(
                  (bookmark) => bookmark.title === headline.title
                ) ? (
                  <FaBookmark
                    className="bookmark"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookmarkArticle(headline);
                    }}
                  />
                ) : (
                  <FaRegBookmark
                    className="bookmark"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookmarkArticle(headline);
                    }}
                  />
                )}
              </h2>
            </div>
          )}
          <div className="news-grid">
            {news &&
              news.map((article, idx) => (
                <div
                  className="news-grid-item"
                  key={idx}
                  onClick={() => handleSelectedArticle(article)}
                >
                  <img
                    src={article.image || newsPlaceholder}
                    alt={article.title}
                  />
                  <h3 className="news-title">
                    {article.title.substr(0, 20) + "..."}{" "}
                    {bookmarks.some(
                      (bookmark) => bookmark.title === article.title
                    ) ? (
                      <FaBookmark
                        className="bookmark"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookmarkArticle(article);
                        }}
                      />
                    ) : (
                      <FaRegBookmark
                        className="bookmark"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookmarkArticle(article);
                        }}
                      />
                    )}
                  </h3>
                </div>
              ))}
          </div>
        </div>
        {showModal && (
          <NewsModal
            article={selectedArticle}
            show={showModal}
            onClose={() => setShowModal(false)}
          />
        )}
        {showBookmarksModal && (
          <Bookmarks
            bookmarks={bookmarks}
            onClose={handleCloseBookmarksModal}
            onBookmark={handleBookmarkArticle}
          />
        )}
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
