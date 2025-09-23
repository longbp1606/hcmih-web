const routes = {
  public: {
    home: "/",
    about: "/about",
    ideology: '/ideology',
    ideologyDetail: '/ideology/:key',
  ideologyContent: '/ideology/:key/content/:index',
    learning: "/learn-and-interact",
    quizes: "/learn-and-interact/quizes",
    quizDetail: "/learn-and-interact/quizes/:id",
    news: "/learn-and-interact/news",
    newsDetail: "/learn-and-interact/news/:id",
    search: "/search",
    searchDetail: "/search/:id",
  },
  api: {
    loginGoogle: "/auth/signin",
  },
};

export default routes;
