// inject globals into react native
global.Buffer = require('buffer').Buffer;


// hack for stream-http so it chooses the righrt default protocol
global.location = {
  protocol: 'file',
};

// hack for crypto library
global.crypto = {
  getRandomValues(byteArray) {
    for (let i = 0; i< byteArray.length; i++) {
      byteArray[i] = Math.floor(256 * Math.random());
    }
  },
};
