import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "antd";

// Khai báo type cho item
interface Item {
  id: number;
  title: string;
  text: string;
}

export default function Search() {
  const [data, setData] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15; // số item mỗi trang

  useEffect(() => {
    fetch("/search.json")
      .then((res) => res.json())
      .then((json: Item[]) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  // lọc theo từ khóa
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // chia trang
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);

  return (
    <div className="min-h-screen p-6 bg-[#f7f2e7]">
      <h1 className="text-center font-bold text-3xl mb-6 text-[#7b2e20]">Tra cứu</h1>

      {/* Search bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="w-full max-w-md p-2 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // reset về trang 1 khi search
          }}
        />
      </div>

      {/* Danh sách item */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {paginatedData.map((item) => (
          <Link
            key={item.id}
            to={`/search/${item.id}`}
            className="bg-orange-100 p-4 rounded-xl shadow hover:bg-orange-200 transition"
          >
            <div className="flex items-center gap-3">
              <span className="bg-[#d0a66e] text-[#995900] font-bold px-3 py-1 rounded-lg">
                {item.id}
              </span>
              <h3 className="font-semibold text-[#995900]">{item.title}</h3>
            </div>
            <p className="mt-2 text-[#995900] text-sm line-clamp-2">{item.text}</p>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredData.length}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false} 
        />
      </div>
    </div>
  );
}
