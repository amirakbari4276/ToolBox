<template>
  <div class="container">
    <h1>Music Player</h1>
    <form @submit.prevent="playSelectedSong">
      <input v-model="songname" placeholder="What do you like to listen?" />
      <button type="submit">Go to it</button> 
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <ul>
      <li v-for="song in songs" :key="song.id">
        {{ song.title }} - {{ song.artist }}
        <button @click="playSong(song.url)">Play</button>
      </li>
    </ul>
    <audio ref="audio" controls></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songname: "", // Stores the name of the song to be played, input by the user
      songs: [], // Stores the list of songs fetched from the server
      errorMessage: "" // Stores any error message to be displayed to the user
    };
  },
  mounted() {
    this.fetchSongs(); // Fetch the list of songs when the component is mounted
  },
  watch: {
    errorMessage(newValue) {
      if (newValue) {
        setTimeout(() => {
          this.errorMessage = "";
        }, 3000);
      }
    }
  },
  methods: {
    // Fetch the list of songs from the server
    fetchSongs() {
      fetch("/music.json") 
        .then(response => response.json()) 
        .then(data => {
          this.songs = data; 
        })
        .catch(error => console.log(error));
    },
    playSong(url) {
      this.$refs.audio.src = url; 
      this.$refs.audio.play(); 
    },
    // Play the song that matches the user's input
    playSelectedSong() {
      if (this.songname.trim() !== "") {
        this.errorMessage = ""; // Clear any previous error message
        let songFound = false;
        for (let i = 0; i < this.songs.length; i++) {
          var songsTitle = this.songs[i].title;
          if (this.songname.includes(songsTitle)) {
            this.$refs.audio.src = this.songs[i].url;
            this.$refs.audio.play();
            songFound = true;
            break; // Stop searching once the song is found
          }
        }
        if (!songFound) {
          this.errorMessage = "No matching song found.";
        }
      } else {
        this.errorMessage = "Input cannot be empty";
      }
    },
  }
};
</script>


