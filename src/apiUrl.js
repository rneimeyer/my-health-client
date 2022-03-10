let apiUrl

// check if development 
if (window.location.hostname === 'localhost') {
  apiUrl = 'http://localhost:3001' 
} else {
  apiUrl = 'https://agile-temple-34348.herokuapp.com'
}

// export api url
export default apiUrl;