import serverInstance from "./server";
export const login = async ({ email, password }) => {
  serverInstance
    .post("/user/login", { email, password })
    .then((res) => {
      localStorage.setItem("accesstoken", res.data.accessToken);
      localStorage.setItem("user", res.data.email);
      window.location.href = "/";
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signup = async ({ email, password }) => {
  serverInstance
    .post("/user/signup", { email, password })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
