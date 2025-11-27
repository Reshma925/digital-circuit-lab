import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Award, 
  BookOpen, 
  Target,
  Clock,
  Zap
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4 text-glow">Student Dashboard</h1>
          <p className="text-xl text-muted-foreground">
            Track your progress and achievements
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 gradient-card border-border/50">
            <div className="flex items-center justify-between mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <div className="text-3xl font-bold mb-1">0/45</div>
            <div className="text-sm text-muted-foreground">Lessons Completed</div>
            <Progress value={0} className="mt-3" />
          </Card>

          <Card className="p-6 gradient-card border-border/50">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8 text-secondary" />
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <div className="text-3xl font-bold mb-1">0%</div>
            <div className="text-sm text-muted-foreground">Average Quiz Score</div>
            <Progress value={0} className="mt-3" />
          </Card>

          <Card className="p-6 gradient-card border-border/50">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8 text-accent" />
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <div className="text-3xl font-bold mb-1">0</div>
            <div className="text-sm text-muted-foreground">Badges Earned</div>
            <Progress value={0} className="mt-3" />
          </Card>

          <Card className="p-6 gradient-card border-border/50">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-primary" />
              <Zap className="w-5 h-5 text-accent" />
            </div>
            <div className="text-3xl font-bold mb-1">0</div>
            <div className="text-sm text-muted-foreground">Circuits Designed</div>
            <Progress value={0} className="mt-3" />
          </Card>
        </div>

        {/* Learning Progress */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 gradient-card border-border/50">
            <h2 className="text-2xl font-bold mb-6">Topic Progress</h2>
            <div className="space-y-4">
              {[
                { name: "Number Systems", progress: 0 },
                { name: "Boolean Algebra", progress: 0 },
                { name: "Logic Gates", progress: 0 },
                { name: "Combinational Circuits", progress: 0 },
                { name: "Sequential Circuits", progress: 0 },
                { name: "Circuit Projects", progress: 0 }
              ].map((topic, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{topic.name}</span>
                    <span className="text-sm text-muted-foreground">{topic.progress}%</span>
                  </div>
                  <Progress value={topic.progress} />
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 gradient-card border-border/50">
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">No activity yet</p>
              <p className="text-sm text-muted-foreground mt-2">
                Start learning to see your activity here
              </p>
            </div>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="p-6 gradient-card border-border/50">
          <h2 className="text-2xl font-bold mb-6">Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Beginner', 'Logic Master', 'Circuit Builder', 'Speed Demon', 'Perfect Score', 'Champion'].map((badge, idx) => (
              <div key={idx} className="text-center">
                <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-3 flex items-center justify-center opacity-50 hover:opacity-70 transition-opacity">
                  <Award className="w-12 h-12 text-muted-foreground" />
                </div>
                <div className="text-sm font-medium">{badge}</div>
                <div className="text-xs text-muted-foreground mt-1">Locked</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
