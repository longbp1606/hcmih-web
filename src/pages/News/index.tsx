import { useState } from "react";

// Tạo dữ liệu mẫu cho 85 items
const generateMockNews = () => {
  const newsTemplates = [
    {
      title: "Tin tức 1",
      desc: "Khái niệm, đối tượng, phương pháp nghiên cứu và ý nghĩa học tập môn Tư tưởng Hồ Chí Minh",
    },
    {
      title: "Tin tức 2",
      desc: "Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
    },
    {
      title: "Tin tức 3",
      desc: "Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội",
    },
    {
      title: "Tin tức 4",
      desc: "Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và nhà nước của nhân dân, do nhân dân, vì nhân dân",
    },
    {
      title: "Tin tức 5",
      desc: "Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế",
    },
    {
      title: "Tin tức 6",
      desc: "Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế",
    },
  ];

  const allNews = [];
  for (let i = 1; i <= 85; i++) {
    const template = newsTemplates[(i - 1) % newsTemplates.length];
    allNews.push({
      id: i,
      title: `${template.title} (${i})`,
      desc: template.desc,
      img: "https://via.placeholder.com/150",
    });
  }
  return allNews;
};

const mockNews = generateMockNews();

const TOTAL_ITEMS = mockNews.length;

export default function NewsPage() {
  const [page, setPage] = useState(1); // Trang 1 như hình
  const [pageSize, setPageSize] = useState(6);
  const [goToPage, setGoToPage] = useState("");

  // Tính toán số trang dựa trên pageSize
  const totalPages = Math.ceil(TOTAL_ITEMS / pageSize);

  // Tính toán dữ liệu cho trang hiện tại
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageNews = mockNews.slice(startIndex, endIndex);

  // Xử lý chuyển trang
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  // Xử lý thay đổi pageSize
  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    // Reset về trang 1 khi thay đổi pageSize
    setPage(1);
  };

  // Xử lý "Go to"
  const handleGoToPage = () => {
    const pageNum = parseInt(goToPage);
    if (pageNum && pageNum >= 1 && pageNum <= totalPages) {
      setPage(pageNum);
      setGoToPage("");
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
            title={news.title.replace(/ \(\d+\)/, "")}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: "10px",
                margin: "24px 24px 0 24px",
                padding: "16px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={news.img}
                alt={news.title}
                style={{
                  width: "120px",
                  height: "90px",
                  objectFit: "contain",
                  display: "block",
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
                {news.title.replace(/ \(\d+\)/, "")}
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
          <span style={{ marginRight: 12 }}>Total {TOTAL_ITEMS} items</span>
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
          {/* Dropdown */}
          <select
            style={{
              marginLeft: 12,
              background: "#fbe3c0",
              border: "1.5px solid #b8860b",
              borderRadius: 6,
              color: "#7a5a2e",
              fontWeight: 500,
              padding: "2px 8px",
              fontSize: "1rem",
            }}
            value={pageSize}
            onChange={(e) => handlePageSizeChange(Number(e.target.value))}
          >
            <option value={6}>6 / page</option>
            <option value={10}>10 / page</option>
            <option value={20}>20 / page</option>
          </select>
          {/* Go to */}
          <span style={{ marginLeft: 12 }}>Go to</span>
          <input
            type="number"
            min={1}
            max={totalPages}
            style={{
              width: 48,
              background: "#fbe3c0",
              border: "1.5px solid #b8860b",
              borderRadius: 6,
              color: "#7a5a2e",
              fontWeight: 500,
              fontSize: "1rem",
              padding: "2px 8px",
              marginLeft: 4,
            }}
            value={goToPage}
            onChange={(e) => setGoToPage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleGoToPage()}
          />
        </div>
      </div>
    </div>
  );
}
