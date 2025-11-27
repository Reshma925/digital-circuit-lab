import { topicsData } from './topicsData';
import { booleanAlgebraTopic } from './booleanAlgebraData';
import { logicGatesTopic } from './logicGatesData';
import { combinationalTopic } from './combinationalData';
import { sequentialTopic } from './sequentialData';
import { projectsTopic } from './projectsData';

export const allTopicsData = [
  ...topicsData,
  booleanAlgebraTopic,
  logicGatesTopic,
  combinationalTopic,
  sequentialTopic,
  projectsTopic
];

export type { Topic, Lesson, PracticeQuestion, QuizQuestion } from './topicsData';
