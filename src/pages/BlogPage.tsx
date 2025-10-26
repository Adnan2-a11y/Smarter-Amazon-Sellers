import React from "react";
import { motion } from "framer-motion";

interface BlogPost {
  title: string;
  summary: string;
  author: string;
  date: string;
  imgUrl: string;
}

const BlogPage: React.FC = () => {
  const posts: BlogPost[] = [
    {
      title: "Top 5 Tips for Optimizing Your Amazon Product Listings",
      summary:
        "Learn how to boost visibility and sales with effective keywords, high-quality images, and compelling descriptions on Amazon.",
      author: "Jane Doe",
      date: "October 20, 2025",
      imgUrl:
        "https://via.placeholder.com/800x400?text=Amazon+Listing+Optimization",
    },
    {
      title: "Managing Inventory Like a Pro on Amazon Seller Central",
      summary:
        "Strategies to avoid stockouts, handle FBA shipments, and use tools for efficient inventory tracking.",
      author: "John Smith",
      date: "October 15, 2025",
      imgUrl: "https://via.placeholder.com/800x400?text=Inventory+Management",
    },
    {
      title: "Navigating Amazon's Advertising: PPC Basics for Sellers",
      summary:
        "A beginner’s guide to setting up Sponsored Products campaigns to drive traffic and increase conversions.",
      author: "Emily Johnson",
      date: "October 10, 2025",
      imgUrl: "https://via.placeholder.com/800x400?text=Amazon+PPC+Advertising",
    },
    {
      title: "Handling Customer Reviews and Feedback on Amazon",
      summary:
        "Best practices for responding to reviews, improving ratings, and turning negative feedback into opportunities.",
      author: "Michael Brown",
      date: "October 5, 2025",
      imgUrl: "https://via.placeholder.com/800x400?text=Customer+Reviews",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Header */}
      <motion.header
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1
          style={{
            fontSize: "2.5em",
            color: "#232f3e",
            marginBottom: "10px",
          }}
        >
          Amazon Seller Insights Blog
        </h1>
        <p
          style={{
            fontSize: "1.2em",
            color: "#555",
          }}
        >
          Expert tips and strategies to grow your Amazon business
        </p>
      </motion.header>

      {/* Main Layout */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {/* Blog Posts */}
        <main
          style={{
            flex: "3",
            minWidth: "65%",
          }}
        >
          {posts.map((post, index) => (
            <motion.article
              key={index}
              style={{
                marginBottom: "30px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                cursor: "pointer",
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            >
              <motion.img
                src={post.imgUrl}
                alt={post.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div
                style={{
                  padding: "20px",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.6em",
                    marginBottom: "10px",
                    color: "#c45500",
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    fontSize: "1em",
                    color: "#333",
                    marginBottom: "10px",
                    lineHeight: "1.6",
                  }}
                >
                  {post.summary}
                </p>
                <div
                  style={{
                    fontSize: "0.9em",
                    color: "#777",
                    marginBottom: "10px",
                  }}
                >
                  By <strong>{post.author}</strong> | {post.date}
                </div>
                <motion.a
                  href="#"
                  style={{
                    display: "inline-block",
                    marginTop: "5px",
                    padding: "8px 16px",
                    backgroundColor: "#ff9900",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "4px",
                    fontWeight: 600,
                  }}
                  whileHover={{
                    backgroundColor: "#e68a00",
                    scale: 1.05,
                  }}
                >
                  Read More
                </motion.a>
              </div>
            </motion.article>
          ))}
        </main>

        {/* Sidebar */}
        <motion.aside
          style={{
            flex: "1",
            minWidth: "250px",
            backgroundColor: "#fff",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            height: "fit-content",
          }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          <h3
            style={{
              fontSize: "1.5em",
              marginBottom: "15px",
              color: "#232f3e",
            }}
          >
            Recent Posts
          </h3>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {posts.map((post, index) => (
              <motion.li
                key={index}
                style={{
                  marginBottom: "12px",
                  borderBottom: "1px solid #eee",
                  paddingBottom: "8px",
                }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#c45500",
                    fontSize: "0.95em",
                    transition: "color 0.3s ease",
                  }}
                >
                  {post.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.aside>
      </div>

      {/* Footer */}
      <motion.footer
        style={{
          textAlign: "center",
          marginTop: "50px",
          paddingTop: "20px",
          borderTop: "1px solid #ddd",
          color: "#777",
          fontSize: "0.9em",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        &copy; 2025 Amazon Seller Website. All rights reserved.
      </motion.footer>
    </div>
  );
};

export default BlogPage;