export const isLoggedIn = () => {
  const cookies = document.cookie.split(";");
  return cookies.some((c) => c.trim().startsWith("sessionid="));
};

export const loginWithGoogle = () => {
  window.location.href = "http://localhost:8000/accounts/google/login/";
};

export const logout = () => {
  window.location.href = "http://localhost:8000/accounts/logout/";
};