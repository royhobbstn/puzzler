export interface TestCase {
  id: number;
  name: string;
  inherit: number[];
  code: string;
  evaluate: string;
  expected: any;
}

export interface SolutionLine {
  stage: number;
  text: string;
}

export interface Problem {
  problemID: number;
  problemName: string;
  problemText: string;
  testCases: TestCase[];
  setupCode: string;
  source: string[];
  tags: string[];
  solution: SolutionLine[];
  effort?: number;
}
