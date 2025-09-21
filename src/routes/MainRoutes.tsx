import config from '@/config';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import QuizesPage from '@/pages/Quizes';
import QuizDetailPage from '@/pages/Quizes/Detail';
import SearchPage from '@/pages/Search/Search';
import SearchDetialPage from '@/pages/Search/Detail';

const MainRouter = () => {
    return <MainLayout />;
};

const publicRoutes = {
    children: [
        { path: config.routes.public.home, element: <Home />},
        { path: config.routes.public.quizes, element: <QuizesPage />},
        { path: config.routes.public.quizDetail, element: <QuizDetailPage />},
        { path: config.routes.public.search, element: <SearchPage />},
        { path: config.routes.public.searchDetail, element: <SearchDetialPage />},
    ]
};

const MainRoutes = {
    path: '/',
    element: <MainRouter />,
    children: [publicRoutes],
};

export default MainRoutes;