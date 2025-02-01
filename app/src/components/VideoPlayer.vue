<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps<{
  src: string;
}>();

const refVideoPlayer = ref<HTMLVideoElement | null>(null);
const isPlaying = ref(false);
const zoom = ref(1);
const speed = ref(1);
const progress = ref(0);

const getVideoPlayer = () => {
  return refVideoPlayer.value!;
};

const togglePlayPause = () => {
  const videoPlayer = getVideoPlayer();

  if (getVideoPlayer().paused) {
    videoPlayer.play();
    isPlaying.value = true;
  } else {
    videoPlayer.pause();
    isPlaying.value = false;
  }
};

const seekVideo = () => {
  const videoPlayer = getVideoPlayer();
  const seekTime = (progress.value / 100) * videoPlayer.duration;
  videoPlayer.currentTime = seekTime;
};

const setSpeed = (newSpeed: number) => {
  speed.value = newSpeed;
  const videoPlayer = getVideoPlayer();
  videoPlayer.playbackRate = newSpeed;
};

const setZoom = (newZoom: number) => {
  zoom.value = newZoom;
  const videoPlayer = getVideoPlayer();
  videoPlayer.style.transform = `scale(${newZoom})`;
};

const toggleFullScreen = () => {
  const videoPlayer = getVideoPlayer();
  videoPlayer.requestFullscreen();
};

onMounted(() => {
  const videoPlayer = getVideoPlayer();
  videoPlayer.addEventListener("timeupdate", () => {
    progress.value = (videoPlayer.currentTime / videoPlayer.duration) * 100;
  });
});
onBeforeUnmount(() => {
  const videoPlayer = getVideoPlayer();
  videoPlayer.removeEventListener("timeupdate", () => {
    progress.value = (videoPlayer.currentTime / videoPlayer.duration) * 100;
  });
});
</script>

<template>
  <div class="video-container">
    <video
      ref="refVideoPlayer"
      width="640"
      height="360"
      playsinline
      muted
      preload="auto"
    >
      <source :src="props.src" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="video-controls">
      <button @click="togglePlayPause">
        <svg
          v-if="isPlaying"
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 448 512"
          class="drop-shadow"
          aria-hidden="true"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"
          ></path>
        </svg>
        <svg
          v-if="!isPlaying"
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 448 512"
          class="drop-shadow"
          aria-hidden="true"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
          ></path>
        </svg>
      </button>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        v-model="progress"
        @input="seekVideo"
      />
      <button v-if="speed == 1" @click="setSpeed(0.5)">Speed 1x</button>
      <button v-if="speed == 0.5" @click="setSpeed(1)">Speed 0.5x</button>
      <button v-if="zoom == 1" @click="setZoom(2)">Zoom 1x</button>
      <button v-if="zoom == 2" @click="setZoom(1)">Zoom 2x</button>
      <button @click="toggleFullScreen()">Full screen</button>
    </div>
  </div>
</template>

<style scoped>
.video-container {
  position: relative;
  width: 640px;
  height: 360px;
}

video {
  width: 100%;
  height: 100%;
}

.video-controls {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
}
</style>
