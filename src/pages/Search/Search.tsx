import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import { useTranslation } from "@/lang/LanguageProvider";
import background from '@/assets/background.png';
import styled from 'styled-components';
import routes from '@/config/routes';
import { getIdeologyContent, type ContentParagraphItem, type TopicKey } from '@/pages/Content/Content.data';
import { useAppSelector } from '@/hooks/useStore';

export const PageBg = styled.div`
	background: url(${background}) no-repeat center/cover;
	position: fixed;
	inset: 0;
	z-index: 0;
`;

type ResultItem = {
  topic: TopicKey;
  index: number; // index within the topic's content array
  title: string;
  snippet: string;
  route: string;
  topicLabel: string;
};

export default function Search() {
  const globalQuery = useAppSelector((s) => s.search.query);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;

  const { locale, i18n } = useTranslation();

  useEffect(() => {
    // Initialize from redux when page loads or when global query changes
    setSearchTerm(globalQuery ?? "");
  }, [globalQuery]);

  const norm = (s: string) => s.toLowerCase();
  const term = norm(searchTerm.trim());
  const hasTerm = term.length > 0;

  const topicKeys: TopicKey[] = ["nationalIndependence", "nationalRevolution"];

  const results: ResultItem[] = useMemo(() => {
  if (!term) return [];

    const res: ResultItem[] = [];
    for (const topic of topicKeys) {
      const items: ContentParagraphItem[] = getIdeologyContent(locale, topic);
      const topicLabel = i18n.t(`ideology.items.${topic}`, { defaultValue: topic });
      items.forEach((item, index) => {
        const titleHit = norm(item.title).includes(term);
        let paraHitIndex = -1;
        if (!titleHit) {
          paraHitIndex = item.paragraphs.findIndex(p => norm(p).includes(term));
        }
        if (titleHit || paraHitIndex >= 0) {
          const source = titleHit ? item.title : item.paragraphs[Math.max(0, paraHitIndex)];
          // Build a short snippet around the first occurrence
          const pos = norm(source).indexOf(term);
          const start = Math.max(0, pos - 60);
          const end = Math.min(source.length, pos + term.length + 120);
          const snippet = `${start > 0 ? '…' : ''}${source.slice(start, end)}${end < source.length ? '…' : ''}`;
          const route = routes.public.ideologyContent
            .replace(':key', topic)
            .replace(':index', String(index));

          res.push({
            topic,
            index,
            title: item.title,
            snippet,
            route,
            topicLabel,
          });
        }
      });
    }
    // Optional: sort by topic then index, or by title
    return res;
  }, [locale, i18n, term]);

  // chia trang
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = results.slice(startIndex, startIndex + pageSize);

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

        {/* Empty state or results */}
        {!hasTerm ? (
          <div className="flex flex-col items-center justify-center text-center text-[#995900] bg-orange-50/70 border border-orange-200 rounded-xl p-8 max-w-2xl mx-auto">
            <div className="text-5xl mb-3" aria-hidden>
              🔎
            </div>
            <p className="text-lg">
              {i18n.t('search.emptyState', { defaultValue: 'Enter a keyword above to search ideology content.' })}
            </p>
          </div>
        ) : (
          <>
            {results.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center text-[#995900] bg-orange-50/70 border border-orange-200 rounded-xl p-8 max-w-2xl mx-auto">
                <div className="text-5xl mb-3" aria-hidden>
                  ❗
                </div>
                <p className="text-lg">
                  {i18n.t('search.noResults', { defaultValue: 'No results found. Try a different keyword.' })}
                </p>
              </div>
            ) : (
              <>
                {/* Danh sách kết quả */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {paginatedData.map((item, idx) => (
                    <Link
                      key={`${item.topic}-${item.index}-${idx}`}
                      to={item.route}
                      className="bg-orange-100 p-4 rounded-xl shadow hover:bg-orange-200 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span className="bg-[#d0a66e] text-[#995900] font-bold px-3 py-1 rounded-lg">
                          {item.topicLabel}
                        </span>
                        <h3 className="font-semibold text-[#995900] line-clamp-2">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-[#995900] text-sm line-clamp-3">
                        {item.snippet}
                      </p>
                    </Link>
                  ))}
                </div>

                {/* Pagination (only when needed) */}
                {results.length > pageSize && (
                  <div className="flex justify-center">
                    <Pagination
                      current={currentPage}
                      pageSize={pageSize}
                      total={results.length}
                      onChange={(page) => setCurrentPage(page)}
                      showSizeChanger={false}
                    />
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
