const counter = document.getElementById('visitor-count');

fetch('https://eallqakn92.execute-api.us-east-1.amazonaws.com/visitor_count')
  .then(response => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then(data => {
    counter.innerText = `${data}`;
    counter.hidden = false;
  })
  .catch(error => {
    // Leave the counter hidden if the API is down.
    console.error('There was an error fetching visitor_count:', error);
  });
