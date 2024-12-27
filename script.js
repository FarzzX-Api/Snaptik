
 document.getElementById('searchButton').addEventListener('click', function() {
 const url = document.getElementById('url').value;
 const resultsContainer = document.querySelector('.resultsContainer');
 const errorMessage = document.querySelector('.errorMessage');

 if (url.trim() === '') {
 resultsContainer.style.display = 'none';
 errorMessage.style.display = 'block';
 return;
 } else {
 errorMessage.style.display = 'none';
 fetch(`https://website-api-pied.vercel.app/api/download/tiktok?url=${url}&key=farisofc`)
 .then(response => response.json())
 .then(data => {
 document.getElementById('videoTitle').textContent = `Title: ${data.result.title}`;
 document.getElementById('videoAuthor').textContent = `Author: ${data.result.music.author}`;
 document.getElementById('videoDescription').textContent = `Judul: ${data.result.title}`;
 const videoPlayer = document.getElementById('videoPlayer');
 videoPlayer.src = data.result.video.noWatermark;
 videoPlayer.style.display = 'block';
 videoPlayer.load();
 videoPlayer.play();

 document.getElementById('downloadButton').href = data.result.video.noWatermark;
 document.getElementById('downloadAudioButton').href = data.result.music.play_url;

 resultsContainer.style.display = 'block';
 })
 .catch(error => {
 console.error('Error:', error);
 });
 }
 });
