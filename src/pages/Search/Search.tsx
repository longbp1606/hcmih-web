import { useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import { mockNewsMultilang } from "@/data/news/mockNewsMultilang";
import { useTranslation } from "@/lang/LanguageProvider";
import background from '@/assets/background.png';
import styled from 'styled-components';

export const PageBg = styled.div`
	background: url(${background}) no-repeat center/cover;
	position: fixed;
	inset: 0;
	z-index: 0;
`;

// type cho dữ liệu
interface Item {
  id: number;
  title: {
    vi: string;
    en: string;
    ja: string;
  };
  desc: {
    vi: string;
    en: string;
    ja: string;
  };
  date?: string;
  img: string;
  source: string;
  content?: {
    vi: string;
    en: string;
    ja: string;
  };
  url?: string;
}

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;

  const { locale, i18n } = useTranslation();

  // dùng data từ file mock
  const data: Item[] = mockNewsMultilang;

  // lọc theo từ khóa với ngôn ngữ hiện tại
  const filteredData = data.filter((item) =>
    item.title[locale as "vi" | "en" | "ja"]
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // chia trang
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);

  return (
    <>
      <PageBg />
      <div className="min-h-screen p-6 relative" style={{ minHeight: 'calc(100vh - 312px)' }}>
        <h1 className="text-center font-bold text-3xl mb-6 text-[#7b2e20]">
          {i18n.t("search.title")}
        </h1>

        {/* Search bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder={i18n.t("search.placeholder")}
            className="w-full max-w-md p-2 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Danh sách item */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {paginatedData.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="bg-orange-100 p-4 rounded-xl shadow hover:bg-orange-200 transition"
            >
              <div className="flex items-center gap-3">
                <span className="bg-[#d0a66e] text-[#995900] font-bold px-3 py-1 rounded-lg">
                  {item.id}
                </span>
                <h3 className="font-semibold text-[#995900]">
                  {item.title[locale as "vi" | "en" | "ja"]}
                </h3>
              </div>
              <p className="mt-2 text-[#995900] text-sm line-clamp-2">
                {item.desc[locale as "vi" | "en" | "ja"]}
              </p>
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
    </>
  );
}
