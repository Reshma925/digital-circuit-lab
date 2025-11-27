import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Target, Clock, Star } from "lucide-react";

const quizCategories = [
  {
    title: "Number Systems",
    questions: 20,
    time: "15 min",
    difficulty: "Easy",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Boolean Algebra",
    questions: 15,
    time: "12 min",
    difficulty: "Medium",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Logic Gates",
    questions: 25,
    time: "20 min",
    difficulty: "Easy",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Combinational Circuits",
    questions: 30,
    time: "25 min",
    difficulty: "Hard",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Sequential Circuits",
    questions: 28,
    time: "25 min",
    difficulty: "Hard",
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Final Certification",
    questions: 50,
    time: "45 min",
    difficulty: "Expert",
    color: "from-yellow-500 to-orange-500"
  }
];

export default function Quiz() {
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
          {quizCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                <Trophy className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
              
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Target className="w-4 h-4" />
                  {category.questions} questions
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {category.time}
                </span>
              </div>

              <div className="mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  category.difficulty === 'Easy' ? 'bg-accent/20 text-accent' :
                  category.difficulty === 'Medium' ? 'bg-primary/20 text-primary' :
                  category.difficulty === 'Hard' ? 'bg-secondary/20 text-secondary' :
                  'bg-destructive/20 text-destructive'
                }`}>
                  {category.difficulty}
                </span>
              </div>

              <Button className="w-full bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/50">
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
