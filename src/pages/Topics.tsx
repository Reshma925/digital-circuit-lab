// src/Topics.tsx
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Binary, 
  Braces, 
  Cpu, 
  Combine,
  Timer,
  Lightbulb,
  ArrowRight
} from "lucide-react";

const topics = [
  {
    id: "number-systems",
    icon: Binary,
    title: "Number Systems & Codes",
    description: "Binary, Decimal, Octal, Hexadecimal conversions and arithmetic operations",
    color: "from-cyan-500 to-blue-500",
    lessons: 8,
    difficulty: "Beginner"
  },
  {
    id: "boolean-algebra",
    icon: Braces,
    title: "Boolean Algebra",
    description: "Laws, theorems, De Morgan's laws, SOP & POS forms",
    color: "from-purple-500 to-pink-500",
    lessons: 6,
    difficulty: "Intermediate"
  },
  {
    id: "logic-gates",
    icon: Cpu,
    title: "Logic Gates",
    description: "AND, OR, NOT, NAND, NOR, XOR gates with interactive simulator",
    color: "from-green-500 to-emerald-500",
    lessons: 7,
    difficulty: "Beginner"
  },
  {
    id: "combinational-circuits",
    icon: Combine,
    title: "Combinational Logic",
    description: "Adders, Subtractors, Multiplexers, Decoders, and more",
    color: "from-orange-500 to-red-500",
    lessons: 10,
    difficulty: "Intermediate"
  },
  {
    id: "sequential-circuits",
    icon: Timer,
    title: "Sequential Logic",
    description: "Flip-flops, Registers, Counters with timing diagrams",
    color: "from-indigo-500 to-purple-500",
    lessons: 9,
    difficulty: "Advanced"
  },
  {
    id: "projects",
    icon: Lightbulb,
    title: "Circuit Projects",
    description: "Real-world applications and mini-projects",
    color: "from-yellow-500 to-orange-500",
    lessons: 5,
    difficulty: "Advanced"
  }
];

export default function Topics() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-glow">Learning Topics</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Master Digital Electronics step by step. Each topic includes interactive lessons, 
            animations, practice problems, and memory tricks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <Card 
              key={topic.id}
              className="p-6 gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center mb-4 group-hover:animate-pulse-glow`}>
                  <topic.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                    {topic.difficulty}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {topic.lessons} lessons
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2">{topic.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{topic.description}</p>

              <Link to={`/topics/${topic.id}`}>
                {/* Ensure button content is perfectly centered and the icon aligns */}
                <Button
                  className="w-full inline-flex items-center justify-center gap-2 text-base font-medium bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/50"
                >
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* Progress Overview */}
        <Card className="mt-12 p-8 gradient-card border-border/50">
          <h2 className="text-2xl font-bold mb-4">Your Progress</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">0/6</div>
              <div className="text-muted-foreground">Topics Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">0/45</div>
              <div className="text-muted-foreground">Lessons Finished</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">0</div>
              <div className="text-muted-foreground">Badges Earned</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
