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
