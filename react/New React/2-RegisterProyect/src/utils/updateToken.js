export const updateToken = () => {
  const user = localStorage.getItem("user");
  if (user) {
    //Parseamos el user porque react guarda txto plano
    const parseUser = JSON.parse(user);
    return parseUser.token;
  }
};
