import axios from 'axios';

const KEY = 'AIzaSyBnlZJz9JU_XO2rTkTHFKq9nBP1upEQN1g';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video', // Not playlists
    maxResults: 5,
    key: KEY
  }
})
