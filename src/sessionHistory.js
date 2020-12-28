// deal with sessionHistory in sessionStorage

const SESSION_HISTORY = 'sessionHistory';

export function getSessionHistory() {
  try {
    const sessionHistoryRaw = sessionStorage.getItem(SESSION_HISTORY);
    const sessionHistory = JSON.parse(sessionHistoryRaw);
    if (!sessionHistory) {
      throw new Error('Need to populate initial data.');
    }
    return sessionHistory;
  } catch (err) {
    // okay to ignore error
    const sessionHistory = [];
    sessionStorage.setItem(SESSION_HISTORY, JSON.stringify(sessionHistory));
    return sessionHistory;
  }
}

export function addToSessionHistory(entry) {
  // entry: {id: 1, seconds: null} --seconds null if skipped
  try {
    const sessionHistoryRaw = sessionStorage.getItem(SESSION_HISTORY);
    const sessionHistory = JSON.parse(sessionHistoryRaw);
    if (!sessionHistory) {
      throw new Error('Need to populate initial data.');
    }
    sessionHistory.push(entry);
    sessionStorage.setItem(SESSION_HISTORY, JSON.stringify(sessionHistory));
  } catch (err) {
    // okay to ignore error
    const sessionHistory = [entry];
    sessionStorage.setItem(SESSION_HISTORY, JSON.stringify(sessionHistory));
  }
}

export function clearSessionHistory() {
  const sessionHistory = [];
  sessionStorage.setItem(SESSION_HISTORY, JSON.stringify(sessionHistory));
}
