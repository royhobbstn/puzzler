import { SessionHistoryEntry } from './SessionStats';

// deal with personalBests in LocalStorage

const PERSONAL_BESTS = 'personalBests';

export function submitResult(entry: SessionHistoryEntry) {
  // entry: {id: 1, seconds:90}
  try {
    const personalBestsRaw = localStorage.getItem(PERSONAL_BESTS);
    if (typeof personalBestsRaw !== 'string') {
      throw new Error('Need to populate initial data.');
    }
    const personalBests: Record<string, number> = JSON.parse(personalBestsRaw);

    const previousBest = personalBests[entry.id];
    if (!previousBest || entry.seconds < previousBest) {
      personalBests[entry.id] = entry.seconds;
      localStorage.setItem(PERSONAL_BESTS, JSON.stringify(personalBests));
    }
  } catch (err) {
    // okay to ignore error
    const personalBests: Record<string, number> = {};
    personalBests[entry.id] = entry.seconds;
    localStorage.setItem(PERSONAL_BESTS, JSON.stringify(personalBests));
  }
}

export function getPersonalBests() {
  try {
    const personalBestsRaw = localStorage.getItem(PERSONAL_BESTS);
    if (typeof personalBestsRaw !== 'string') {
      throw new Error('Need to populate initial data.');
    }
    const personalBests = JSON.parse(personalBestsRaw);
    return personalBests;
  } catch (err) {
    // okay to ignore error
    const personalBests = {};
    localStorage.setItem(PERSONAL_BESTS, JSON.stringify(personalBests));
    return personalBests;
  }
}

export function clearPersonalBests() {
  const personalBests = {};
  localStorage.setItem(PERSONAL_BESTS, JSON.stringify(personalBests));
  return personalBests;
}
