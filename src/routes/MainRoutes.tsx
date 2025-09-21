import config from "@/config";
import MainLayout from "@/layouts/MainLayout";
import QuizesPage from "@/pages/Quizes";
import QuizDetailPage from "@/pages/Quizes/Detail";
import NewsPage from "@/pages/News";
import NewsDetailPage from "@/pages/News/Detail";
import Home from "@/pages/Home";

const MainRouter = () => {
  return <MainLayout />;
};

const publicRoutes = {
  children: [
    { path: config.routes.public.home, element: <Home /> },
    { path: config.routes.public.quizes, element: <QuizesPage /> },
    { path: config.routes.public.quizDetail, element: <QuizDetailPage /> },
    { path: config.routes.public.news, element: <NewsPage /> },
    { path: config.routes.public.newsDetail, element: <NewsDetailPage /> },
  ],
};

const MainRoutes = {
  path: "/",
  element: <MainRouter />,
  children: [publicRoutes],
};

export default MainRoutes;
