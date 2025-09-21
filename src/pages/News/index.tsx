import { useState } from "react";
import { mockNews as baseNews } from "../../data/news/mockNews";

// Sử dụng trực tiếp dữ liệu từ mockNews
const newsData = baseNews.map(news => ({
  id: news.id,
  title: news.title,
  desc: news.desc,
  img: news.img,
}));

const TOTAL_ITEMS = newsData.length;

export default function NewsPage() {
  const [page, setPage] = useState(1); // Trang 1 như hình
  const pageSize = 9; // Cố định 9 tin tức mỗi trang

  // Tính toán số trang dựa trên pageSize
  const totalPages = Math.ceil(TOTAL_ITEMS / pageSize);

  // Tính toán dữ liệu cho trang hiện tại
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageNews = newsData.slice(startIndex, endIndex);

  // Xử lý chuyển trang
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };





  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle, #f7e7c6 0%, #d2b48c 100%)",
        padding: "32px 0",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "3rem",
          color: "#b22222",
          marginBottom: "32px",
          textShadow: "2px 2px 0 #fff",
        }}
      >
        Tin tức
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
          maxWidth: "1200px",
          margin: "0 auto 32px",
        }}
      >
        {currentPageNews.map((news) => (
          <div
            key={news.id}
            style={{
              background: "#ffe4c4",
              borderRadius: "18px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              padding: "0 0 24px 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              border: "2px solid #f5d6a1",
              minHeight: "260px",
              cursor: "pointer",
              transition: "box-shadow 0.2s",
            }}
            onClick={() => (window.location.href = `/news/${news.id}`)}
            title={news.title}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: "10px",
                margin: "24px 24px 0 24px",
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={news.img}
                alt={news.title}
                style={{
                  width: "160px",
                  height: "120px",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "8px",
                }}
              />
            </div>
            <div style={{ padding: "0 24px" }}>
              <h2
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  color: "#b8860b",
                  margin: "24px 0 8px 0",
                  textAlign: "left",
                }}
              >
                {news.title}
              </h2>
              <p
                style={{
                  color: "#a97c2f",
                  fontWeight: 600,
                  fontSize: "1.15rem",
                  margin: 0,
                  textAlign: "left",
                }}
              >
                {news.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          fontSize: "1rem",
          color: "#6b4f1d",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "none",
            fontSize: "1.1rem",
            color: "#7a5a2e",
            fontWeight: 500,
          }}
        >
          {/* Prev */}
          <button
            style={{
              background: "none",
              border: "none",
              color: page === 1 ? "#b8860b55" : "#b8860b",
              fontWeight: "bold",
              fontSize: "1.2rem",
              cursor: page === 1 ? "not-allowed" : "pointer",
              padding: "0 6px",
            }}
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            &#60;
          </button>
          {/* Pagination numbers with ... */}
          <span style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* First page */}
            <button
              style={{
                background: page === 1 ? "#fbe3c0" : "none",
                border: page === 1 ? "2px solid #b8860b" : "none",
                color: page === 1 ? "#b8860b" : "#7a5a2e",
                fontWeight: page === 1 ? "bold" : "normal",
                borderRadius: 6,
                padding: "2px 8px",
                margin: "0 2px",
                boxShadow: page === 1 ? "0 0 0 2px #e7c18a33" : "none",
                cursor: "pointer",
              }}
              onClick={() => handlePageChange(1)}
            >
              1
            </button>
            {/* ... before */}
            {page > 4 && (
              <span style={{ color: "#b8860b", margin: "0 2px" }}>...</span>
            )}
            {/* Pages before current */}
            {Array.from({ length: 2 }, (_, i) => page - 2 + i)
              .filter((num) => num > 1 && num < page)
              .map((num) => (
                <button
                  key={num}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#7a5a2e",
                    fontWeight: "normal",
                    borderRadius: 6,
                    padding: "2px 8px",
                    margin: "0 2px",
                    cursor: "pointer",
                  }}
                  onClick={() => handlePageChange(num)}
                >
                  {num}
                </button>
              ))}
            {/* Current page */}
            {page !== 1 && page !== totalPages && (
              <button
                style={{
                  background: "#fbe3c0",
                  border: "2px solid #b8860b",
                  color: "#b8860b",
                  fontWeight: "bold",
                  borderRadius: 6,
                  padding: "2px 8px",
                  margin: "0 2px",
                  boxShadow: "0 0 0 2px #e7c18a33",
                  cursor: "pointer",
                }}
                disabled
              >
                {page}
              </button>
            )}
            {/* Pages after current */}
            {Array.from({ length: 2 }, (_, i) => page + 1 + i)
              .filter((num) => num < totalPages && num > page)
              .map((num) => (
                <button
                  key={num}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#7a5a2e",
                    fontWeight: "normal",
                    borderRadius: 6,
                    padding: "2px 8px",
                    margin: "0 2px",
                    cursor: "pointer",
                  }}
                  onClick={() => handlePageChange(num)}
                >
                  {num}
                </button>
              ))}
            {/* ... after */}
            {page < totalPages - 3 && (
              <span style={{ color: "#b8860b", margin: "0 2px" }}>...</span>
            )}
            {/* Last page */}
            {totalPages > 1 && (
              <button
                style={{
                  background: page === totalPages ? "#fbe3c0" : "none",
                  border: page === totalPages ? "2px solid #b8860b" : "none",
                  color: page === totalPages ? "#b8860b" : "#7a5a2e",
                  fontWeight: page === totalPages ? "bold" : "normal",
                  borderRadius: 6,
                  padding: "2px 8px",
                  margin: "0 2px",
                  boxShadow:
                    page === totalPages ? "0 0 0 2px #e7c18a33" : "none",
                  cursor: "pointer",
                }}
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </button>
            )}
          </span>
          {/* Next */}
          <button
            style={{
              background: "none",
              border: "none",
              color: page === totalPages ? "#b8860b55" : "#b8860b",
              fontWeight: "bold",
              fontSize: "1.2rem",
              cursor: page === totalPages ? "not-allowed" : "pointer",
              padding: "0 6px",
            }}
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
}
