const routes = {
  public: {
    home: "/",
    learning: "/hoc-tuong-tac",
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
