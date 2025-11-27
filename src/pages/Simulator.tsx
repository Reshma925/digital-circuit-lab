import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Trash2, 
  Play, 
  Download,
  GitBranch,
  Cpu,
  Save
} from "lucide-react";
import { toast } from "sonner";

type GateType = "AND" | "OR" | "NOT" | "NAND" | "NOR" | "XOR" | "XNOR";

interface Gate {
  id: string;
  type: GateType;
  x: number;
  y: number;
  inputs: boolean[];
  output: boolean;
}

const gateTypes: GateType[] = ["AND", "OR", "NOT", "NAND", "NOR", "XOR", "XNOR"];

const calculateOutput = (type: GateType, inputs: boolean[]): boolean => {
  switch (type) {
    case "AND":
      return inputs.every(i => i);
    case "OR":
      return inputs.some(i => i);
    case "NOT":
      return !inputs[0];
    case "NAND":
      return !inputs.every(i => i);
    case "NOR":
      return !inputs.some(i => i);
    case "XOR":
      return inputs.filter(i => i).length === 1;
    case "XNOR":
      return inputs.filter(i => i).length !== 1;
    default:
      return false;
  }
};

export default function Simulator() {
  const [gates, setGates] = useState<Gate[]>([]);
  const [selectedGate, setSelectedGate] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const addGate = (type: GateType) => {
    const newGate: Gate = {
      id: `gate-${Date.now()}`,
      type,
      x: 100,
      y: 100 + gates.length * 80,
      inputs: type === "NOT" ? [false] : [false, false],
      output: false
    };
    
    setGates([...gates, newGate]);
    toast.success(`${type} gate added!`);
  };

  const updateGateInput = (gateId: string, inputIndex: number) => {
    setGates(gates.map(gate => {
      if (gate.id === gateId) {
        const newInputs = [...gate.inputs];
        newInputs[inputIndex] = !newInputs[inputIndex];
        return {
          ...gate,
          inputs: newInputs,
          output: calculateOutput(gate.type, newInputs)
        };
      }
      return gate;
    }));
  };

  const clearCanvas = () => {
    setGates([]);
    setSelectedGate(null);
    toast.info("Canvas cleared");
  };

  const simulateCircuit = () => {
    toast.success("Circuit simulation running!");
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-glow">Logic Gate Simulator</h1>
          <p className="text-xl text-muted-foreground">
            Build and test digital circuits with drag-and-drop logic gates
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Toolbox */}
          <Card className="p-6 gradient-card border-border/50 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-primary" />
              Logic Gates
            </h2>
            
            <div className="space-y-2">
              {gateTypes.map(type => (
                <Button
                  key={type}
                  onClick={() => addGate(type)}
                  className="w-full justify-start bg-muted hover:bg-primary/20 text-foreground border border-border hover:border-primary"
                >
                  <GitBranch className="mr-2 w-4 h-4" />
                  {type}
                </Button>
              ))}
            </div>

            <div className="mt-6 space-y-2">
              <Button 
                onClick={simulateCircuit}
                className="w-full bg-primary hover:bg-primary/90"
              >
                <Play className="mr-2 w-4 h-4" />
                Run Simulation
              </Button>
              
              <Button 
                onClick={clearCanvas}
                variant="outline"
                className="w-full"
              >
                <Trash2 className="mr-2 w-4 h-4" />
                Clear All
              </Button>

              <Button 
                variant="outline"
                className="w-full"
              >
                <Save className="mr-2 w-4 h-4" />
                Save Circuit
              </Button>
            </div>
          </Card>

          {/* Canvas */}
          <Card className="lg:col-span-3 gradient-card border-border/50">
            <div 
              ref={canvasRef}
              className="min-h-[600px] circuit-bg rounded-lg p-6 relative overflow-auto"
            >
              {gates.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <Cpu className="w-16 h-16 text-muted-foreground mx-auto mb-4 animate-pulse-glow" />
                    <h3 className="text-xl font-bold mb-2">Empty Canvas</h3>
                    <p className="text-muted-foreground">
                      Select a logic gate from the left to start building your circuit
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {gates.map(gate => (
                    <Card
                      key={gate.id}
                      className={`p-4 inline-block min-w-[250px] cursor-move transition-all ${
                        selectedGate === gate.id ? 'ring-2 ring-primary' : ''
                      }`}
                      onClick={() => setSelectedGate(gate.id)}
                      style={{ 
                        transform: `translate(${gate.x}px, ${gate.y}px)`,
                        position: 'absolute'
                      }}
                    >
                      <div className="text-center mb-3">
                        <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                          {gate.type}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <div className="space-y-2">
                          {gate.inputs.map((input, idx) => (
                            <Button
                              key={idx}
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                updateGateInput(gate.id, idx);
                              }}
                              className={`w-16 ${
                                input 
                                  ? 'bg-accent text-accent-foreground' 
                                  : 'bg-muted text-muted-foreground'
                              }`}
                            >
                              {input ? '1' : '0'}
                            </Button>
                          ))}
                        </div>

                        <div className="text-2xl text-muted-foreground">→</div>

                        <div>
                          <div className={`w-16 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${
                            gate.output 
                              ? 'bg-accent text-accent-foreground shadow-green' 
                              : 'bg-destructive text-destructive-foreground'
                          }`}>
                            {gate.output ? '1' : '0'}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Instructions */}
        <Card className="mt-6 p-6 gradient-card border-border/50">
          <h3 className="text-xl font-bold mb-4">How to Use</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-primary font-medium mb-2">1. Add Gates</div>
              <p className="text-muted-foreground">Click on any logic gate from the toolbox to add it to the canvas</p>
            </div>
            <div>
              <div className="text-primary font-medium mb-2">2. Set Inputs</div>
              <p className="text-muted-foreground">Click the input buttons (0/1) to toggle between false and true</p>
            </div>
            <div>
              <div className="text-primary font-medium mb-2">3. View Output</div>
              <p className="text-muted-foreground">The output updates in real-time based on the logic gate function</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
