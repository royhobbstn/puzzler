//

export function grabNextProblemId() {
  const problemIdsRaw = sessionStorage.getItem('problemIds');
  if (!problemIdsRaw) {
    return 0;
  }
  const problemIds = JSON.parse(problemIdsRaw);
  const id = problemIds.shift();
  sessionStorage.setItem('problemIds', JSON.stringify(problemIds));
  return id;
}

export function hasOutstandingProblemIds() {
  try {
    const problemIdsRaw = sessionStorage.getItem('problemIds');
    const problemIds = JSON.parse(problemIdsRaw);
    return Array.isArray(problemIds) && problemIds.length;
  } catch (err) {
    // okay to swallow error here
    return false;
  }
}
