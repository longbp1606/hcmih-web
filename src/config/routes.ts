const routes = {
  public: {
    home: "/",
    quizes: "/quizes",
    quizDetail: "/quizes/:id",
    search: "/search",
    searchDetail: "/search/:id",
  },
  api: {
    loginGoogle: "/auth/signin",
  },
};

export default routes;