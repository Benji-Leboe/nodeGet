const https = require('https');

console.log('wooo I did the thing!');

const options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

const callback = (response) => {
  console.log('In response handler callback!');
  response.on('data', (chunk) => {
    console.log(`[-- CHUNK OF LENGTH ${chunk.length} --]`);
    console.log(chunk.toString());
  });
}

console.log('I\'m about to make the request!');

https.request(options, callback).end();

console.log('I\'ve made the request!');

