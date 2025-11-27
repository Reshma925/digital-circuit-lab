import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Target, Clock, Star, CheckCircle2, XCircle } from "lucide-react";
import { allTopicsData } from "@/data/allTopicsData";

export default function Quiz() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<any[]>([]);

  const startQuiz = (topicId: string) => {
    const topic = allTopicsData.find(t => t.id === topicId);
    if (topic) {
      const shuffled = [...topic.quizQuestions].sort(() => Math.random() - 0.5).slice(0, 10);
      setQuizQuestions(shuffled);
      setSelectedTopic(topicId);
      setCurrentQuestion(0);
      setUserAnswers([]);
      setShowResults(false);
    }
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    return userAnswers.filter((answer, idx) => answer === quizQuestions[idx].correctAnswer).length;
  };

  if (selectedTopic && !showResults) {
    const question = quizQuestions[currentQuestion];
    const userAnswer = userAnswers[currentQuestion];

    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="p-8 gradient-card border-border/50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-muted-foreground">Question {currentQuestion + 1} of {quizQuestions.length}</span>
              <Button variant="outline" onClick={() => setSelectedTopic(null)}>Exit Quiz</Button>
            </div>

            <h2 className="text-2xl font-bold mb-6">{question.question}</h2>

            <div className="space-y-3 mb-6">
              {question.options.map((option: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    userAnswer === idx ? 'border-primary bg-primary/20' : 'border-border/50 hover:border-primary/50'
                  }`}
                >
                  <span className="font-medium">{String.fromCharCode(65 + idx)}. {option}</span>
                </button>
              ))}
            </div>

            <Button onClick={nextQuestion} disabled={userAnswer === undefined} className="w-full">
              {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Submit Quiz'}
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / quizQuestions.length) * 100;

    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="p-8 gradient-card border-border/50 text-center">
            <Trophy className="w-16 h-16 text-accent mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Quiz Complete!</h1>
            <p className="text-6xl font-bold text-primary mb-6">{score}/{quizQuestions.length}</p>
            <p className="text-xl text-muted-foreground mb-8">{percentage.toFixed(0)}% Correct</p>

            <div className="space-y-4 mb-8">
              {quizQuestions.map((q, idx) => (
                <Card key={idx} className={`p-4 ${userAnswers[idx] === q.correctAnswer ? 'bg-accent/10 border-accent/30' : 'bg-destructive/10 border-destructive/30'}`}>
                  <div className="flex items-start gap-3">
                    {userAnswers[idx] === q.correctAnswer ? (
                      <CheckCircle2 className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                    )}
                    <div className="text-left flex-1">
                      <p className="font-medium mb-2">{q.question}</p>
                      <p className="text-sm text-muted-foreground">{q.explanation}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Button onClick={() => setSelectedTopic(null)} className="w-full">Back to Topics</Button>
          </Card>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-glow">Practice Quizzes</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Test your knowledge with topic-wise quizzes and earn badges
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <Card className="p-6 gradient-card border-border/50 text-center">
            <Trophy className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-3xl font-bold text-accent mb-1">0</div>
            <div className="text-sm text-muted-foreground">Quizzes Completed</div>
          </Card>
          
          <Card className="p-6 gradient-card border-border/50 text-center">
            <Target className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary mb-1">0%</div>
            <div className="text-sm text-muted-foreground">Average Score</div>
          </Card>
          
          <Card className="p-6 gradient-card border-border/50 text-center">
            <Star className="w-8 h-8 text-secondary mx-auto mb-2" />
            <div className="text-3xl font-bold text-secondary mb-1">0</div>
            <div className="text-sm text-muted-foreground">Badges Earned</div>
          </Card>
          
          <Card className="p-6 gradient-card border-border/50 text-center">
            <Clock className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <div className="text-3xl font-bold mb-1">0h</div>
            <div className="text-sm text-muted-foreground">Practice Time</div>
          </Card>
        </div>

        {/* Quiz Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTopicsData.map((topic, index) => (
            <Card 
              key={topic.id}
              className="p-6 gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${topic.color} flex items-center justify-center mb-4`}>
                <Trophy className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-2">{topic.title}</h3>
              
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Target className="w-4 h-4" />
                  {topic.quizQuestions.length} questions
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  10 min
                </span>
              </div>

              <Button 
                onClick={() => startQuiz(topic.id)}
                className="w-full bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/50"
              >
                Start Quiz
              </Button>
            </Card>
          ))}
        </div>

        {/* Achievement Badges */}
        <Card className="mt-12 p-8 gradient-card border-border/50">
          <h2 className="text-2xl font-bold mb-6">Available Badges</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Beginner', 'Logic Master', 'Circuit Builder', 'Speed Demon', 'Perfect Score', 'Champion'].map((badge, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-2 flex items-center justify-center opacity-50">
                  <Star className="w-10 h-10 text-muted-foreground" />
                </div>
                <div className="text-sm font-medium">{badge}</div>
                <div className="text-xs text-muted-foreground">Locked</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
