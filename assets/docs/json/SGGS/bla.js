'use strict';

const fs = require('fs');
const request = require('request');

const doFor = i => request(`http://api.sikher.com/page/${i}`, (err, response, body) => {
  if (err) {
    throw err;
  } else {
    fs.writeFile(`Ang ${i}.json`, body, 'utf-8', () => {
      console.log(`\r\r\r\r\r\r${i}/1430`);
      if (i !== 1430) {
        doFor(i + 1);
      }
    });
  }
});

doFor(1);
