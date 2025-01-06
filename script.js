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
 fetch(`https://website-restapii.vercel.app/tiktokdll?url=${url}&key=farisofc`)
 .then(response => response.json())
 .then(tik => {
 document.getElementById('videoTitle').textContent = `Title: ${tik.result.data.title}`;
 document.getElementById('videoAuthor').textContent = `Author: ${tik.result.data.author.nickname}`;
 document.getElementById('videoDescription').textContent = `Judul: ${tik.result.data.title}`;
 const videoPlayer = document.getElementById('videoPlayer');
 videoPlayer.src = tik.result.data.play;
 videoPlayer.style.display = 'block';
 videoPlayer.load();
 videoPlayer.play();

 document.getElementById('downloadButton').href = tik.result.data.play;
 document.getElementById('downloadAudioButton').href = tik.result.data.music_info.play;

 resultsContainer.style.display = 'block';
 })
 .catch(error => {
 console.error('Error:', error);
 });
 }
 });
