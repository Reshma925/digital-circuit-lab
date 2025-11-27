import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { 
  Cpu, 
  Zap, 
  BookOpen, 
  Trophy, 
  Target,
  ArrowRight,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Interactive Simulations",
    description: "Build and test circuits in real-time with drag-and-drop logic gates"
  },
  {
    icon: BookOpen,
    title: "Complete Syllabus",
    description: "Full coverage of Class 11 & 12 Digital Electronics curriculum"
  },
  {
    icon: Trophy,
    title: "Gamified Learning",
    description: "Earn badges, track progress, and compete with challenges"
  },
  {
    icon: Target,
    title: "Exam Ready",
    description: "Practice with real exam-style questions and instant feedback"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-10" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/30 mb-6 animate-slide-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Learn Digital Electronics the Fun Way</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow leading-tight">
            Digital Electronics Lab
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Learn by Doing
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Master logic gates, boolean algebra, and digital circuits through interactive simulations, 
            animations, and hands-on practice designed for Class 11 & 12 students.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/topics">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/50 transition-all">
                Start Learning
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/quiz">
              <Button size="lg" variant="outline" className="neon-border">
                <Trophy className="mr-2 w-5 h-5" />
                Practice Quizzes
              </Button>
            </Link>
          </div>

          {/* Floating Logic Gates */}
          <div className="flex justify-center gap-8 mb-16">
            <div className="animate-float">
              <div className="w-20 h-20 rounded-lg bg-gradient-primary flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold">AND</span>
              </div>
            </div>
            <div className="animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold">OR</span>
              </div>
            </div>
            <div className="animate-float" style={{ animationDelay: "1s" }}>
              <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold">NOT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-glow">
            Why Choose Our Platform?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/topics" className="group">
              <Card className="p-8 gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 h-full">
                <BookOpen className="w-12 h-12 text-primary mb-4 group-hover:animate-pulse-glow" />
                <h3 className="text-2xl font-bold mb-2">Learn Topics</h3>
                <p className="text-muted-foreground mb-4">
                  Explore all topics with animations, notes, and memory tricks
                </p>
                <span className="text-primary font-medium inline-flex items-center">
                  Start Learning <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Card>
            </Link>

            <Link to="/dashboard" className="group">
              <Card className="p-8 gradient-card border-border/50 hover:border-secondary/50 transition-all duration-300 hover:scale-105 h-full">
                <Target className="w-12 h-12 text-secondary mb-4 group-hover:animate-pulse-glow" />
                <h3 className="text-2xl font-bold mb-2">Track Progress</h3>
                <p className="text-muted-foreground mb-4">
                  Monitor your learning journey and earn achievement badges
                </p>
                <span className="text-secondary font-medium inline-flex items-center">
                  View Dashboard <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Card>
            </Link>

            <Link to="/quiz" className="group">
              <Card className="p-8 gradient-card border-border/50 hover:border-accent/50 transition-all duration-300 hover:scale-105 h-full">
                <Trophy className="w-12 h-12 text-accent mb-4 group-hover:animate-pulse-glow" />
                <h3 className="text-2xl font-bold mb-2">Take Quizzes</h3>
                <p className="text-muted-foreground mb-4">
                  Test your knowledge and earn badges with fun challenges
                </p>
                <span className="text-accent font-medium inline-flex items-center">
                  Start Quiz <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
