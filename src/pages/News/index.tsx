import { useState } from "react";
import { useTranslation } from "../../lang/LanguageProvider";
import { getLocalizedNews } from "../../data/news/newsUtils";
import config from "@/config";

export default function NewsPage() {
  const { i18n, locale } = useTranslation();
  const [page, setPage] = useState(1); // Trang 1 như hình
  const pageSize = 6; // Cố định 6 tin tức mỗi trang

  // Lấy dữ liệu theo ngôn ngữ hiện tại
  const newsData = getLocalizedNews(locale);
  const TOTAL_ITEMS = newsData.length;

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
        {i18n.t("news.title")}
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
            onClick={() => (window.location.href = config.routes.public.news + "/" + news.id)}
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
                  width: "100%",
                  height: "180px",
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
                  fontSize: "1.4rem",
                  color: "#b8860b",
                  margin: "24px 0 8px 0",
                  textAlign: "left",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "1.3",
                }}
              >
                {news.title}
              </h2>
              <p
                style={{
                  color: "#a97c2f",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  margin: 0,
                  textAlign: "left",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "1.4",
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
              fontSize: "1rem",
              cursor: page === 1 ? "not-allowed" : "pointer",
              padding: "0 8px",
            }}
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            title={i18n.t("news.pagination.previous")}
          >
            &#60; {i18n.t("news.pagination.previous")}
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
              fontSize: "1rem",
              cursor: page === totalPages ? "not-allowed" : "pointer",
              padding: "0 8px",
            }}
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            title={i18n.t("news.pagination.next")}
          >
            {i18n.t("news.pagination.next")} &#62;
          </button>
        </div>
      </div>
    </div>
  );
}
