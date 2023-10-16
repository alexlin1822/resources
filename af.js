const apiUrl = 'https://your-airflow-instance/api/experimental/dags'; // Replace with the actual API endpoint URL
const username = 'your_username'; // Replace with your username
const password = 'your_password'; // Replace with your password

const headers = new Headers({
  'Authorization': 'Basic ' + btoa(username + ':' + password),
  'Content-Type': 'application/json',
});

fetch(apiUrl, {
  method: 'GET',
  headers: headers,
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response body as JSON
  })
  .then(data => {
    // Handle the JSON data from the API
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });
