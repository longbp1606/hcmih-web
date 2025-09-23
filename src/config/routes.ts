const routes = {
  public: {
    home: "/",
    about: "/about",
    ideology: '/ideology',
    ideologyDetail: '/ideology/:key',
  ideologyContent: '/ideology/:key/content/:index',
    learning: "/learn-and-interact",
    quizes: "/quizes",
    quizDetail: "/quizes/:id",
    news: "/news",
    newsDetail: "/news/:id",
    search: "/search",
    searchDetail: "/search/:id",
  },
  api: {
    loginGoogle: "/auth/signin",
  },
};

export default routes;
