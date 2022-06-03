function teste(id) {
  if (id) {
    return Promise.resolve(
      "https://pbs.twimg.com/media/FPNE_n-XoAoptVq?format=jpg&name=240x240"
    );
  }
}

module.exports = teste;
