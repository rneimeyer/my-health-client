let apiUrl;

// check if development
if (window.location.hostname === "localhost") {
  apiUrl = "http://localhost:4000";
} else {
  apiUrl = "https://peaceful-beyond-24399.herokuapp.com";
}

// export api url
export default apiUrl;
