import config from "@/config";
import MainLayout from "@/layouts/MainLayout";
import LearningPage from '@/pages/Learning';
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
        { path: config.routes.public.home, element: <Home />},
        { path: config.routes.public.learning, element: <LearningPage />},
        { path: config.routes.public.quizes, element: <QuizesPage />},
        { path: config.routes.public.quizDetail, element: <QuizDetailPage />},
    ]
};

const MainRoutes = {
  path: "/",
  element: <MainRouter />,
  children: [publicRoutes],
};

export default MainRoutes;
