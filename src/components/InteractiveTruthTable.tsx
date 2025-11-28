import React, { useState } from "react";
import { Card } from "@/components/ui/card";

interface TruthTableConfig {
  type: string;
  inputs: number;
}

interface Props {
  tables: TruthTableConfig[];
}

export default function InteractiveTruthTable({ tables }: Props) {
  const [selectedGate, setSelectedGate] = useState(tables[0].type);
  const [inputs, setInputs] = useState([0, 0]);

  const logicFunctions: any = {
    AND: (A: number, B: number) => (A && B ? 1 : 0),
    OR: (A: number, B: number) => (A || B ? 1 : 0),
    NOT: (A: number) => (A ? 0 : 1),
    NAND: (A: number, B: number) => (A && B ? 0 : 1),
    NOR: (A: number, B: number) => (A || B ? 0 : 1),
    XOR: (A: number, B: number) => (A ^ B ? 1 : 0),
    XNOR: (A: number, B: number) => (A ^ B ? 0 : 1),
  };

  const activeGate = tables.find((t) => t.type === selectedGate)!;

  const toggleInput = (idx: number) => {
    const updated = [...inputs];
    updated[idx] = updated[idx] === 0 ? 1 : 0;
    setInputs(updated);
  };

  const output =
    activeGate.inputs === 1
      ? logicFunctions[selectedGate](inputs[0])
      : logicFunctions[selectedGate](inputs[0], inputs[1]);

  return (
    <Card className="p-6 bg-muted/20 border border-white/10 mt-10">
      <h2 className="text-2xl font-bold mb-4">Interactive Truth Table</h2>

      {/* Gate Tabs */}
      <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
        {tables.map((gate) => (
          <button
            key={gate.type}
            onClick={() => setSelectedGate(gate.type)}
            className={`px-4 py-2 rounded-lg border transition-all ${
              selectedGate === gate.type
                ? "bg-primary text-white border-primary"
                : "bg-muted border-white/10 hover:border-primary"
            }`}
          >
            {gate.type} Gate
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="flex items-center gap-6 my-6">
        {Array.from({ length: activeGate.inputs }).map((_, i) => (
          <div key={i} className="text-center">
            <p className="text-lg mb-2 font-semibold">Input {i === 0 ? "A" : "B"}</p>
            <button
              onClick={() => toggleInput(i)}
              className={`w-16 h-16 rounded-xl text-3xl font-bold transition-all ${
                inputs[i] === 1
                  ? "bg-green-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {inputs[i]}
            </button>
          </div>
        ))}

        {/* Output Bulb */}
        <div className="ml-auto text-center">
          <p className="text-lg mb-2 font-semibold">Output</p>
          <div
            className={`w-20 h-20 rounded-full mx-auto transition-all shadow-xl ${
              output === 1 ? "bg-yellow-400 shadow-yellow-500" : "bg-gray-600"
            }`}
          ></div>
        </div>
      </div>

      {/* Truth Table */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">{selectedGate} Truth Table</h3>

        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="bg-muted/40">
              {Array.from({ length: activeGate.inputs }).map((_, i) => (
                <th key={i} className="p-2 border border-white/10">
                  {i === 0 ? "A" : "B"}
                </th>
              ))}
              <th className="p-2 border border-white/10">Output</th>
            </tr>
          </thead>
          <tbody>
            {activeGate.inputs === 1 ? (
              <>
                {[0, 1].map((A) => (
                  <tr key={A}>
                    <td className="p-2 border border-white/10">{A}</td>
                    <td className="p-2 border border-white/10">
                      {logicFunctions[selectedGate](A)}
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <>
                {[0, 1].map((A) =>
                  [0, 1].map((B) => (
                    <tr key={`${A}-${B}`}>
                      <td className="p-2 border border-white/10">{A}</td>
                      <td className="p-2 border border-white/10">{B}</td>
                      <td className="p-2 border border-white/10">
                        {logicFunctions[selectedGate](A, B)}
                      </td>
                    </tr>
                  ))
                )}
              </>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
