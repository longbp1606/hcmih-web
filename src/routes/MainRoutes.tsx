import config from '@/config';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import QuizesPage from '@/pages/Quizes';
import QuizDetailPage from '@/pages/Quizes/Detail';

const MainRouter = () => {
    return <MainLayout />;
};

const publicRoutes = {
    children: [
        { path: config.routes.public.home, element: <Home />},
        { path: config.routes.public.quizes, element: <QuizesPage />},
        { path: config.routes.public.quizDetail, element: <QuizDetailPage />},
    ]
};

const MainRoutes = {
    path: '/',
    element: <MainRouter />,
    children: [publicRoutes],
};

export default MainRoutes;