fetch('https://eallqakn92.execute-api.us-east-1.amazonaws.com/visitor_count')
  .then(response => response.json())
  .then(data => {
    document.getElementById('visitor-count').innerText = `${data}`;
  })
  .catch(error => {
    console.error('There was an error fetching visitor_count:', error);
  });
