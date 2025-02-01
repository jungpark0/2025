const video = document.getElementById("video");
const playButton = document.getElementById("play-button");

// 재생 및 일시 정지 버튼 기능
playButton.addEventListener("click", () => {
  if (video.paused || video.ended) { // 영상이 끝난 경우도 고려
    video.play();
    playButton.textContent = "Pause";
  } else {
    video.pause();
    playButton.textContent = "Play";
  }
});

// 영상이 끝나면 버튼 상태 변경
video.addEventListener("ended", () => {
  playButton.textContent = "Play";
});
