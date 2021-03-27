import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Nxkigmr15uzJjDC6gXpdgzgKpWurcToyCd1f--rKNeM",
  },
});
