import React from 'react';

const AboutChart = () => {
  return (
    <>
      <h2>About this tracker:</h2>
      <p>
        This site is updated approximately once per day. Currently all
        information is being sourced from{' '}
        <a
          href="https://signalscv.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Signal
        </a>
        . You can view all data with source links{' '}
        <a
          href="https://docs.google.com/spreadsheets/d/1qO9vnOXXHQ_EwAWPkffKasXEJUkkz-8keXJ-13IoH1Q/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>
    </>
  );
};

export default AboutChart;
