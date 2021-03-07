import { getPersonalBests } from './personalBests.js';

export const HOME_PAGE = '/';
export const SESSION_STATS_PAGE = '/sessionStats';
export const HISTORIC_STATS_PAGE = '/historicStats';
export const GAME_PAGE = '/:id';

export const BLANK_TIME = '00:00:00';

export function constructTest(testCases, inherit, code, evaluate, setupCode) {
  let inheritedCode = ';';

  for (let idRef of inherit) {
    const foundCase = testCases.find(d => d.id === idRef);
    if (foundCase) {
      inheritedCode += foundCase.code;
    } else {
      console.error(`Could not find testCase id: ${idRef}`);
    }
  }

  const test = inheritedCode + code + evaluate;

  const text = `/* Test Code */\n\n\n${inheritedCode}${code}\n\n\n/* Evaluation Code */\n\n\n${evaluate}\n\n\n/* Implicit Code Below */\n\n\n${setupCode}`;

  return { test, text };
}

export function convertToSeconds(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
}

export function convertToTimer(secondsRaw) {
  if (!secondsRaw) {
    return BLANK_TIME;
  }
  const { hours, minutes, seconds } = convertToHoursMinutesSeconds(secondsRaw);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(
    seconds,
  ).padStart(2, '0')}`;
}

export function convertToHoursMinutesSeconds(seconds) {
  let hours = 0;
  let minutes = 0;

  if (seconds > 3600) {
    hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
  }

  if (seconds > 60) {
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
  }

  return { hours, minutes, seconds };
}

export function colorCodeTime(totalSeconds, data, revealButtonPressed, passedAllTests) {
  const personalBests = getPersonalBests();
  const personalBest = personalBests[data.problemID];

  let color = 'green';

  if (personalBest && totalSeconds > personalBest) {
    color = 'blue';
  }

  const lastStage = Math.max(...data.solution.map(row => row.stage));

  // each stage is 30 seconds, + 30sec to read problem at beginning, + 30 seconds before final solution reveal
  const lastStageSeconds = lastStage * 30 + 60;

  if (totalSeconds > lastStageSeconds || revealButtonPressed) {
    color = 'red';
  }

  if (passedAllTests) {
    color = 'green';
  }

  return color;
}
