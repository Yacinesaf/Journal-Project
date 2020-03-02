import axios from 'axios'

function getRandomImage() {
  return axios.get("https://api.unsplash.com/photos/random?client_id=uxmW_PR6Zn3N6vc5Zsc2pQJVOwzezAXoPBSOi1eXa4A")
  .then(res => res)
  // real.urls.regular
}


export {
    getRandomImage
  }
