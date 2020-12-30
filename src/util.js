import { getPersonalBests } from './personalBests.js';

export function constructTest(testCases, inherit, code, evaluate) {
  let test = ';';

  for (let idRef of inherit) {
    const foundCase = testCases.find(d => d.id === idRef);
    if (foundCase) {
      test += foundCase.code;
    } else {
      console.error(`Could not find testCase id: ${idRef}`);
    }
  }

  test += code + evaluate;
  return test;
}

export function convertToSeconds(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
}

export function convertToTimer(secondsRaw) {
  if (!secondsRaw) {
    return `00:00:00`;
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

  const lastStageSeconds = data.solution.stages[data.solution.stages.length - 1];

  if (totalSeconds > lastStageSeconds || revealButtonPressed) {
    color = 'red';
  }

  if (passedAllTests) {
    color = 'green';
  }

  return color;
}
