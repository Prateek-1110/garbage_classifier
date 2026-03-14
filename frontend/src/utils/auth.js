export const isLoggedIn = () => {
  const cookies = document.cookie.split(";");
  return cookies.some((c) => c.trim().startsWith("sessionid="));
};

export const loginWithGoogle = () => {
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";
  window.location.href = `${API_URL}/accounts/google/login/`;
    console.log("Button clicked! Trying to redirect to:", `${API_URL}/accounts/google/login/`);

};

export const logout = () => {
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";
  window.location.href = `${API_URL}/accounts/logout/`;
};