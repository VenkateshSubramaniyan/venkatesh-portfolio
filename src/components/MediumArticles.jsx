import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegClock } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./MediumArticles.css";

const MediumArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0); // featured article

  const RSS_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
  const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        setArticles(res.data.items);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching Medium articles:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading articles...</p>;

  const selectedArticle = articles[selectedIndex];

  return (
    <section id="articles" className="medium-articles-section">

        {/* <div className="container">
        <div className="section-header">
          <span className="section-label">My Medium</span>
          <h2 className="section-title">Articles</h2>
          <div className="section-divider"></div>
        </div> */}

      <div className="container">
        <div className="section-header">
          <span className="section-label">My Medium</span>
          <h2 className="section-title">Articles</h2>
          <div className="section-divider"></div>
        </div>

        <div className="articles-master-detail">
          {/* Featured Article */}
          {selectedArticle && (
            <div className="featured-article">
              <h3>{selectedArticle.title}</h3>
              <a
                href={selectedArticle.link}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Read full article on Medium →
              </a>
              {/* <p className="date">
                <FaRegClock className="icon" /> {new Date(selectedArticle.pubDate).toDateString()}
              </p> */}
              {selectedArticle.thumbnail && (
                <div className="featured-thumb">
                  <img src={selectedArticle.thumbnail} alt={selectedArticle.title} />
                </div>
              )}
              {/* HTML content with limited height */}
              <div
                className="full-content"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              ></div>
            </div>
          )}

          {/* Sidebar of other articles */}
          <div className="other-articles">
            {articles.map((article, idx) => (
              <div
                key={idx}
                className={`sidebar-article-card ${idx === selectedIndex ? "active" : ""}`}
                onClick={() => setSelectedIndex(idx)}
              >
                <h4>{article.title}</h4>
                <p className="date">{new Date(article.pubDate).toDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* </div> */}
    </section>
  );
};

export default MediumArticles;
