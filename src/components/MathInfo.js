import React from 'react';
import moment from 'moment';

const MathInfo = props => {
  const { cases, dates } = props;
  const firstCaseDate = moment(dates[0]);
  const lastCaseDate = moment(dates[dates.length - 1]);
  const today = moment();
  const currentTotalOfCases = cases[cases.length - 1];

  const getDaysPassed = () => {
    const daysPassed = today.diff(firstCaseDate, 'days');
    return daysPassed;
  };

  const getGrowthRate = () => {
    const knownDaysOfGrowth = lastCaseDate.diff(firstCaseDate, 'days');
    return currentTotalOfCases / knownDaysOfGrowth;
  };
  return (
    <>
      <h2>SCV Covid-19 Facts:</h2>
      <ul>
        <li>{`The first known case of coronavirus in Santa Clarita was reported ${getDaysPassed()} ago on: ${
          firstCaseDate._i
        }`}</li>
        <li>{`Since then then there have been a total of ${currentTotalOfCases} cases in the SCV`}</li>
        <li>{`Currently we are seeing a growth rates of around ${getGrowthRate()} new case(s) per day`}</li>
      </ul>
    </>
  );
};

export default MathInfo;
