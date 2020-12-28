// deal with problemIds in sessionStorage

const PROBLEM_IDS = 'problemIds';

export function grabNextProblemId() {
  const problemIdsRaw = sessionStorage.getItem(PROBLEM_IDS);
  if (!problemIdsRaw) {
    return 0;
  }
  const problemIds = JSON.parse(problemIdsRaw);
  const id = problemIds.shift();
  sessionStorage.setItem(PROBLEM_IDS, JSON.stringify(problemIds));
  return id;
}

export function hasOutstandingProblemIds() {
  try {
    const problemIdsRaw = sessionStorage.getItem(PROBLEM_IDS);
    const problemIds = JSON.parse(problemIdsRaw);
    return Array.isArray(problemIds) && problemIds.length;
  } catch (err) {
    // okay to swallow error here
    return false;
  }
}
