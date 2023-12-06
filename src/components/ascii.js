import React from 'react';

const AsciinemaPlayer = ({ asciicastId }) => (
  <iframe
    src={`https://asciinema.org/a/${asciicastId}`}
    id={`asciicast-${asciicastId}`}
    scrolling="no"
    allowFullScreen
    frameBorder="0"
  ></iframe>
);

export default AsciinemaPlayer;
