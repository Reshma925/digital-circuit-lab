import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  BookOpen, 
  CheckCircle2, 
  Lightbulb,
  Calculator,
  Award,
  ChevronRight
} from "lucide-react";
import { allTopicsData } from "@/data/allTopicsData";
import ReactMarkdown from 'react-markdown';

export default function TopicDetail() {
  const { topicId } = useParams();
  const topic = allTopicsData.find(t => t.id === topicId);
  
  const [selectedLesson, setSelectedLesson] = useState(0);
  const [practiceAnswers, setPracticeAnswers] = useState<{[key: string]: number}>({});
  const [showHints, setShowHints] = useState<{[key: string]: boolean}>({});
  const [submitted, setSubmitted] = useState<{[key: string]: boolean}>({});

  if (!topic) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Topic Not Found</h1>
          <Link to="/topics">
            <Button>Back to Topics</Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentLesson = topic.lessons[selectedLesson];
  const progress = ((selectedLesson + 1) / topic.lessons.length) * 100;

  const handlePracticeAnswer = (questionId: string, answerIndex: number) => {
    setPracticeAnswers({ ...practiceAnswers, [questionId]: answerIndex });
  };

  const handleSubmitPractice = (questionId: string) => {
    setSubmitted({ ...submitted, [questionId]: true });
  };

  const toggleHint = (questionId: string) => {
    setShowHints({ ...showHints, [questionId]: !showHints[questionId] });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/topics">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Topics
            </Button>
          </Link>
          
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-glow">{topic.title}</h1>
              <p className="text-muted-foreground text-lg">{topic.description}</p>
            </div>
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center animate-pulse-glow`}>
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-2">
                <span>Progress</span>
                <span>{selectedLesson + 1} / {topic.lessons.length} lessons</span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>
            <Link to={`/quiz`}>
              <Button className="bg-accent hover:bg-accent/90">
                <Award className="w-4 h-4 mr-2" />
                Take Quiz
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar - Lessons List */}
          <Card className="lg:col-span-1 p-4 gradient-card border-border/50 h-fit">
            <h3 className="font-bold mb-4 flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              Lessons
            </h3>
            <div className="space-y-2">
              {topic.lessons.map((lesson, index) => (
                <button
                  key={lesson.id}
                  onClick={() => setSelectedLesson(index)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    selectedLesson === index
                      ? 'bg-primary/20 border border-primary/50 text-primary'
                      : 'hover:bg-muted border border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      {index + 1}. {lesson.title}
                    </span>
                    {selectedLesson === index && (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="p-8 gradient-card border-border/50">
              <h2 className="text-3xl font-bold mb-6">{currentLesson.title}</h2>

              <Tabs defaultValue="lesson" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger value="lesson">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Lesson
                  </TabsTrigger>
                  <TabsTrigger value="notes">
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Notes
                  </TabsTrigger>
                  <TabsTrigger value="practice">
                    <Calculator className="w-4 h-4 mr-2" />
                    Practice
                  </TabsTrigger>
                  <TabsTrigger value="tips">
                    <Award className="w-4 h-4 mr-2" />
                    Exam Tips
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="lesson" className="space-y-6">
                  <div className="prose prose-invert max-w-none">
                    <ReactMarkdown>{currentLesson.content}</ReactMarkdown>
                  </div>
                </TabsContent>

                <TabsContent value="notes" className="space-y-4">
                  <Card className="p-6 bg-primary/5 border-primary/20">
                    <h3 className="text-xl font-bold mb-3 flex items-center text-primary">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Quick Notes
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{currentLesson.notes}</p>
                  </Card>

                  <Card className="p-6 bg-accent/5 border-accent/20">
                    <h3 className="text-xl font-bold mb-3 flex items-center text-accent">
                      <Lightbulb className="w-5 h-5 mr-2" />
                      Memory Trick
                    </h3>
                    <p className="font-medium leading-relaxed">{currentLesson.memoryTrick}</p>
                  </Card>

                  {currentLesson.formula && (
                    <Card className="p-6 bg-secondary/5 border-secondary/20">
                      <h3 className="text-xl font-bold mb-3 flex items-center text-secondary">
                        <Calculator className="w-5 h-5 mr-2" />
                        Formula Box
                      </h3>
                      <pre className="font-mono bg-muted p-4 rounded-lg overflow-x-auto">
                        {currentLesson.formula}
                      </pre>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="practice" className="space-y-6">
                  {currentLesson.practice.map((question, idx) => {
                    const isSubmitted = submitted[question.id];
                    const userAnswer = practiceAnswers[question.id];
                    const isCorrect = userAnswer === question.correctAnswer;

                    return (
                      <Card key={question.id} className="p-6 bg-muted/30">
                        <h3 className="font-bold mb-4">
                          Question {idx + 1}: {question.question}
                        </h3>

                        <div className="space-y-2 mb-4">
                          {question.options.map((option, optionIdx) => (
                            <button
                              key={optionIdx}
                              onClick={() => handlePracticeAnswer(question.id, optionIdx)}
                              disabled={isSubmitted}
                              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                                isSubmitted
                                  ? optionIdx === question.correctAnswer
                                    ? 'border-accent bg-accent/20'
                                    : optionIdx === userAnswer
                                    ? 'border-destructive bg-destructive/20'
                                    : 'border-border/50 opacity-50'
                                  : userAnswer === optionIdx
                                  ? 'border-primary bg-primary/20'
                                  : 'border-border/50 hover:border-primary/50'
                              }`}
                            >
                              <div className="flex items-center">
                                <span className="w-8 h-8 rounded-full bg-background/50 flex items-center justify-center mr-3 font-bold text-sm">
                                  {String.fromCharCode(65 + optionIdx)}
                                </span>
                                <span>{option}</span>
                                {isSubmitted && optionIdx === question.correctAnswer && (
                                  <CheckCircle2 className="w-5 h-5 ml-auto text-accent" />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>

                        <div className="flex gap-2">
                          {!isSubmitted && (
                            <Button
                              onClick={() => handleSubmitPractice(question.id)}
                              disabled={userAnswer === undefined}
                            >
                              Submit Answer
                            </Button>
                          )}
                          <Button
                            variant="outline"
                            onClick={() => toggleHint(question.id)}
                          >
                            <Lightbulb className="w-4 h-4 mr-2" />
                            {showHints[question.id] ? 'Hide' : 'Show'} Hint
                          </Button>
                        </div>

                        {showHints[question.id] && (
                          <Card className="mt-4 p-4 bg-primary/5 border-primary/20">
                            <p className="text-sm"><strong>Hint:</strong> {question.hint}</p>
                          </Card>
                        )}

                        {isSubmitted && (
                          <Card className={`mt-4 p-4 ${isCorrect ? 'bg-accent/10 border-accent/20' : 'bg-destructive/10 border-destructive/20'}`}>
                            <p className="font-bold mb-2">
                              {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
                            </p>
                            <p className="text-sm">{question.explanation}</p>
                          </Card>
                        )}
                      </Card>
                    );
                  })}
                </TabsContent>

                <TabsContent value="tips" className="space-y-4">
                  <Card className="p-6 bg-accent/10 border-accent/30">
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-accent">
                      <Award className="w-6 h-6 mr-2" />
                      Remember This!
                    </h3>
                    <p className="text-lg leading-relaxed mb-4">{currentLesson.examTip}</p>
                  </Card>

                  <Card className="p-6 bg-primary/5">
                    <h3 className="text-xl font-bold mb-3">Exam Strategy</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 mr-2 mt-0.5 text-accent flex-shrink-0" />
                        <span>Read the question twice before answering</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 mr-2 mt-0.5 text-accent flex-shrink-0" />
                        <span>Show all working steps for maximum marks</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 mr-2 mt-0.5 text-accent flex-shrink-0" />
                        <span>Verify your answer by working backwards</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 mr-2 mt-0.5 text-accent flex-shrink-0" />
                        <span>Use proper notation and diagrams where asked</span>
                      </li>
                    </ul>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-border/50">
                <Button
                  variant="outline"
                  onClick={() => setSelectedLesson(Math.max(0, selectedLesson - 1))}
                  disabled={selectedLesson === 0}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous Lesson
                </Button>
                <Button
                  onClick={() => setSelectedLesson(Math.min(topic.lessons.length - 1, selectedLesson + 1))}
                  disabled={selectedLesson === topic.lessons.length - 1}
                >
                  Next Lesson
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
