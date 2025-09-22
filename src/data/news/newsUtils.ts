import { mockNewsMultilang, NewsItemMultilang } from "./mockNewsMultilang";

export interface NewsItem {
  id: number;
  title: string;
  desc: string;
  date?: string;
  img: string;
  source: string;
  content?: string;
  url?: string;
}

// Chuyển đổi dữ liệu đa ngôn ngữ thành dữ liệu đơn ngôn ngữ
export const getLocalizedNews = (locale: string): NewsItem[] => {
  const lang = (locale as keyof NewsItemMultilang["title"]) || "vi";

  return mockNewsMultilang.map((news) => ({
    id: news.id,
    title: news.title[lang] || news.title.vi,
    desc: news.desc[lang] || news.desc.vi,
    date: news.date,
    img: news.img,
    source: news.source,
    content: news.content?.[lang] || news.content?.vi,
    url: news.url,
  }));
};

// Lấy một tin tức theo ID và ngôn ngữ
export const getLocalizedNewsById = (
  id: number,
  locale: string
): NewsItem | undefined => {
  const news = mockNewsMultilang.find((n) => n.id === id);
  if (!news) return undefined;

  const lang = (locale as keyof NewsItemMultilang["title"]) || "vi";

  return {
    id: news.id,
    title: news.title[lang] || news.title.vi,
    desc: news.desc[lang] || news.desc.vi,
    date: news.date,
    img: news.img,
    source: news.source,
    content: news.content?.[lang] || news.content?.vi,
    url: news.url,
  };
};
