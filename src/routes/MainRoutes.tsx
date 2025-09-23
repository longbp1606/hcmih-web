import config from '@/config';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import LearningPage from '@/pages/Learning';
import NewsPage from '@/pages/News';
import NewsDetailPage from '@/pages/News/Detail';
import QuizesPage from '@/pages/Quizes';
import QuizDetailPage from '@/pages/Quizes/Detail';
import SearchPage from '@/pages/Search/Search';


const MainRouter = () => {
  return <MainLayout />;
};

const publicRoutes = {
    children: [
        { path: config.routes.public.home, element: <Home />},
        { path: config.routes.public.learning, element: <LearningPage />},
        { path: config.routes.public.quizes, element: <QuizesPage />},
        { path: config.routes.public.quizDetail, element: <QuizDetailPage />},
        { path: config.routes.public.news, element: <NewsPage /> },
        { path: config.routes.public.newsDetail, element: <NewsDetailPage /> },
        { path: config.routes.public.search, element: <SearchPage />},
        
    ]
};

const MainRoutes = {
  path: "/",
  element: <MainRouter />,
  children: [publicRoutes],
};

export default MainRoutes;
