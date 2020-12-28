// deal with personalBests in LocalStorage

const PERSONAL_BESTS = 'personalBests';

export function submitResult(entry) {
  // entry: {id: 1, seconds:90}
  try {
    const personalBestsRaw = localStorage.getItem(PERSONAL_BESTS);
    const personalBests = JSON.parse(personalBestsRaw);
    if (!personalBests) {
      throw new Error('Need to populate initial data.');
    }
    const previousBest = personalBests[entry.id];
    if (!previousBest || entry.seconds < previousBest) {
      personalBests[entry.id] = entry.seconds;
      localStorage.setItem(PERSONAL_BESTS, JSON.stringify(personalBests));
    }
  } catch (err) {
    // okay to ignore error
    const personalBests = {};
    personalBests[entry.id] = entry.seconds;
    localStorage.setItem(PERSONAL_BESTS, JSON.stringify(personalBests));
  }
}

export function getPersonalBests() {
  try {
    const personalBestsRaw = localStorage.getItem(PERSONAL_BESTS);
    const personalBests = JSON.parse(personalBestsRaw);
    if (!personalBests) {
      throw new Error('Need to populate initial data.');
    }
    return personalBests;
  } catch (err) {
    // okay to ignore error
    const personalBests = {};
    localStorage.setItem(PERSONAL_BESTS, JSON.stringify(personalBests));
    return personalBests;
  }
}
