import React from 'react';
import { Typography } from '@material-ui/core';

const AboutChart = () => {
  return (
    <>
      <Typography>
        <h2>About the Tracker:</h2>
        <ul>
          <li>
            {' '}
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
          </li>
          <li>
            This site exists to collect, document, and visualize new Covid-19
            data as it becomes available.
          </li>
          <li>
            This project is entirely sourced from local journalism, and seeks to
            act as an intermediary between the time local news sources
            disseminate information and the time that larger institutions (such
            as the{' '}
            <a
              href="https://www.latimes.com/projects/california-coronavirus-cases-tracking-outbreak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Los Angeles Times
            </a>
            ) take that same information and display it in a meaningful way. At
            the time of writing, the LA Times are around a week behind The
            Signal.
          </li>
        </ul>
        <h2>Contribute:</h2>
        <ul>
          <li>
            This project is entirely Open-Source. If you'd like to contribute
            open a PR{' '}
            <a
              href="https://github.com/MichaelDCooper/scv-covid-tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </li>
          <li>Currently Seeking:</li>
          <ul>
            <li>High Quality API's documenting the growth of the virus.</li>
            <li>
              Engineers skilled in D3/Stata/R willing to contribute to data
              processing/visualization
            </li>
          </ul>
        </ul>
      </Typography>
    </>
  );
};

export default AboutChart;
