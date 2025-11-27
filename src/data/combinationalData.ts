import { Topic } from './topicsData';

export const combinationalTopic: Topic = {
  id: "combinational-circuits",
  title: "Combinational Logic",
  description: "Adders, Subtractors, Multiplexers, Decoders, and more",
  color: "from-orange-500 to-red-500",
  lessons: [
    {
      id: "half-full-adder",
      title: "Half Adder and Full Adder",
      content: `
# Adder Circuits

## Half Adder
**Purpose**: Adds two single bits
**Inputs**: A, B
**Outputs**: Sum (S), Carry (C)

### Truth Table
| A | B | Sum | Carry |
|---|---|-----|-------|
| 0 | 0 |  0  |   0   |
| 0 | 1 |  1  |   0   |
| 1 | 0 |  1  |   0   |
| 1 | 1 |  0  |   1   |

### Logic Equations
- **Sum (S) = A ⊕ B** (XOR gate)
- **Carry (C) = A · B** (AND gate)

**Limitation**: Cannot handle carry input from previous stage!

## Full Adder
**Purpose**: Adds three bits (A, B, Cin)
**Inputs**: A, B, Cin (carry from previous)
**Outputs**: Sum (S), Cout (carry output)

### Truth Table
| A | B | Cin | Sum | Cout |
|---|---|-----|-----|------|
| 0 | 0 |  0  |  0  |  0   |
| 0 | 0 |  1  |  1  |  0   |
| 0 | 1 |  0  |  1  |  0   |
| 0 | 1 |  1  |  0  |  1   |
| 1 | 0 |  0  |  1  |  0   |
| 1 | 0 |  1  |  0  |  1   |
| 1 | 1 |  0  |  0  |  1   |
| 1 | 1 |  1  |  1  |  1   |

### Logic Equations
- **Sum = A ⊕ B ⊕ Cin**
- **Cout = A·B + Cin·(A⊕B)**

### Implementation
Full Adder = 2 Half Adders + 1 OR gate

## 4-bit Ripple Carry Adder
Connect 4 Full Adders in series to add two 4-bit numbers!
Carry "ripples" from LSB to MSB.
      `,
      notes: "Half adder is simple but limited. Full adder is complete - can be chained to add numbers of any size!",
      memoryTrick: "**HALF = No Carry IN**\n**FULL = Takes Carry IN**\nThink: FULL-y equipped!",
      formula: "Half: S=A⊕B, C=A·B\nFull: S=A⊕B⊕Cin, Cout=AB+Cin(A⊕B)",
      examTip: "Draw the logic diagram clearly. Show how 2 half adders connect to form 1 full adder for extra marks!",
      practice: [
        {
          id: "q1",
          question: "In a half adder, what gates are used?",
          options: ["XOR and AND", "OR and AND", "XOR and OR", "NAND and NOR"],
          correctAnswer: 0,
          hint: "Sum uses XOR, Carry uses AND",
          explanation: "Half adder uses XOR for Sum and AND for Carry"
        },
        {
          id: "q2",
          question: "How many half adders make one full adder?",
          options: ["1", "2", "3", "4"],
          correctAnswer: 1,
          hint: "Plus one additional gate",
          explanation: "Full adder = 2 Half Adders + 1 OR gate"
        }
      ]
    },
    {
      id: "multiplexer",
      title: "Multiplexer (MUX)",
      content: `
# Multiplexer (MUX)

## Definition
A **Multiplexer** is a combinational circuit that selects one of many inputs and forwards it to a single output.

**Think**: Like a TV remote selecting channels!

## 2:1 MUX (Simplest)
**Inputs**: 2 data lines (I₀, I₁), 1 select line (S)
**Output**: Y

### Truth Table
| S | Y      |
|---|--------|
| 0 | I₀     |
| 1 | I₁     |

**Logic**: Y = S'·I₀ + S·I₁

## 4:1 MUX
**Inputs**: 4 data lines (I₀, I₁, I₂, I₃), 2 select lines (S₁, S₀)
**Output**: Y

### Truth Table
| S₁ | S₀ | Y  |
|----|----|----|
| 0  | 0  | I₀ |
| 0  | 1  | I₁ |
| 1  | 0  | I₂ |
| 1  | 1  | I₃ |

**Logic**: Y = S₁'S₀'I₀ + S₁'S₀I₁ + S₁S₀'I₂ + S₁S₀I₃

## General: n:1 MUX
- **n** data inputs
- **⌈log₂(n)⌉** select lines
- **1** output

### Examples
- 8:1 MUX needs 3 select lines (2³ = 8)
- 16:1 MUX needs 4 select lines (2⁴ = 16)

## Applications
1. **Data routing**: Route data from multiple sources to one destination
2. **Parallel to serial conversion**
3. **Logic function implementation**
4. **Data bus selection** in computers
      `,
      notes: "MUX is a data selector - like choosing which input gets to go to output. Select lines control the choice!",
      memoryTrick: "**MUX = MANY to ONE** (Multiple inputs, Single output)\nThink: '**MUX**ed signals'",
      formula: "n:1 MUX needs ⌈log₂(n)⌉ select lines\n2:1 MUX: Y = S'I₀ + SI₁",
      examTip: "Always mention number of select lines! For n inputs, you need log₂(n) select lines (rounded up).",
      practice: [
        {
          id: "q1",
          question: "How many select lines does an 8:1 MUX need?",
          options: ["2", "3", "4", "8"],
          correctAnswer: 1,
          hint: "2^x = 8, solve for x",
          explanation: "8 = 2³, so 3 select lines needed"
        },
        {
          id: "q2",
          question: "What does MUX stand for?",
          options: ["Maximum", "Multiplexer", "Multiple", "Mixer"],
          correctAnswer: 1,
          hint: "It multiplexes signals",
          explanation: "MUX = Multiplexer (selects one from many inputs)"
        }
      ]
    },
    {
      id: "decoder-encoder",
      title: "Decoder and Encoder",
      content: `
# Decoder and Encoder

## Decoder
**Definition**: Converts binary information from n inputs to maximum 2ⁿ unique outputs.

### 2:4 Decoder
**Inputs**: 2 (A, B)
**Outputs**: 4 (D₀, D₁, D₂, D₃)

| A | B | D₃ | D₂ | D₁ | D₀ |
|---|---|----|----|----|----|
| 0 | 0 | 0  | 0  | 0  | 1  |
| 0 | 1 | 0  | 0  | 1  | 0  |
| 1 | 0 | 0  | 1  | 0  | 0  |
| 1 | 1 | 1  | 0  | 0  | 0  |

**Logic**: Only ONE output is HIGH at a time!

### Applications
- Memory address decoding
- Instruction decoding in CPU
- Seven-segment display drivers

## Encoder
**Definition**: Opposite of decoder. Converts 2ⁿ inputs to n-bit binary output.

### 4:2 Encoder
**Inputs**: 4 (I₀, I₁, I₂, I₃)
**Outputs**: 2 (Y₁, Y₀)

| I₃ | I₂ | I₁ | I₀ | Y₁ | Y₀ |
|----|----|----|----|----|----|
| 0  | 0  | 0  | 1  | 0  | 0  |
| 0  | 0  | 1  | 0  | 0  | 1  |
| 0  | 1  | 0  | 0  | 1  | 0  |
| 1  | 0  | 0  | 0  | 1  | 1  |

**Assumption**: Only ONE input is active at a time!

### Priority Encoder
Resolves when multiple inputs are active by giving priority to certain inputs.

### Applications
- Keyboard encoding
- Interrupt priority assignment
- Decimal to BCD conversion

## Key Difference
| Feature | Decoder | Encoder |
|---------|---------|---------|
| Inputs  | n bits  | 2ⁿ lines |
| Outputs | 2ⁿ lines | n bits  |
| Function | Code to signal | Signal to code |
      `,
      notes: "Decoder: few inputs → many outputs. Encoder: many inputs → few outputs. They're opposites!",
      memoryTrick: "**DECODER**: De-code = expand = n to 2ⁿ\n**ENCODER**: En-code = compress = 2ⁿ to n",
      formula: "n:2ⁿ Decoder\n2ⁿ:n Encoder\nThey're inverses!",
      examTip: "For decoders, only ONE output is HIGH. For encoders, mention 'priority' if needed for multiple active inputs!",
      practice: [
        {
          id: "q1",
          question: "A 3:8 decoder has how many outputs?",
          options: ["3", "6", "8", "16"],
          correctAnswer: 2,
          hint: "3 inputs can select from 2³ outputs",
          explanation: "3:8 decoder has 8 outputs (2³ = 8)"
        },
        {
          id: "q2",
          question: "Which converts signals to binary code?",
          options: ["Decoder", "Encoder", "MUX", "DEMUX"],
          correctAnswer: 1,
          hint: "It 'encodes' signals into code",
          explanation: "Encoder converts input signals to binary code"
        }
      ]
    }
  ],
  quizQuestions: [
    {
      id: "q1",
      question: "What is the output of a half adder when adding 1+1?",
      options: ["Sum=0, Carry=1", "Sum=1, Carry=0", "Sum=1, Carry=1", "Sum=0, Carry=0"],
      correctAnswer: 0,
      explanation: "1+1 in binary: Sum=0, Carry=1 (binary 10)"
    },
    {
      id: "q2",
      question: "How many inputs does a full adder have?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 1,
      explanation: "Full adder has 3 inputs: A, B, and Carry-in"
    },
    {
      id: "q3",
      question: "What does MUX stand for?",
      options: ["Multiplier", "Multiplexer", "Multiple", "Maximum"],
      correctAnswer: 1,
      explanation: "MUX = Multiplexer (selects one from many inputs)"
    },
    {
      id: "q4",
      question: "8:1 MUX requires how many select lines?",
      options: ["2", "3", "4", "8"],
      correctAnswer: 1,
      explanation: "2³ = 8, so 3 select lines needed"
    },
    {
      id: "q5",
      question: "What does a decoder do?",
      options: ["Many to one", "One to many", "Adds numbers", "Stores data"],
      correctAnswer: 1,
      explanation: "Decoder converts n inputs to 2ⁿ outputs (one to many)"
    },
    {
      id: "q6",
      question: "In a 2:4 decoder, how many outputs are HIGH at once?",
      options: ["0", "1", "2", "4"],
      correctAnswer: 1,
      explanation: "Only ONE output is HIGH for any input combination"
    },
    {
      id: "q7",
      question: "What is the opposite of a decoder?",
      options: ["MUX", "DEMUX", "Encoder", "Adder"],
      correctAnswer: 2,
      explanation: "Encoder is opposite of decoder (compresses vs expands)"
    },
    {
      id: "q8",
      question: "Which circuit adds 3 bits?",
      options: ["Half adder", "Full adder", "MUX", "Decoder"],
      correctAnswer: 1,
      explanation: "Full adder adds 3 bits: A, B, and Carry-in"
    },
    {
      id: "q9",
      question: "What gate generates Sum in a half adder?",
      options: ["AND", "OR", "XOR", "NAND"],
      correctAnswer: 2,
      explanation: "XOR gate generates Sum: S = A ⊕ B"
    },
    {
      id: "q10",
      question: "DEMUX is opposite of?",
      options: ["MUX", "Decoder", "Encoder", "Adder"],
      correctAnswer: 0,
      explanation: "DEMUX (demultiplexer) is opposite of MUX"
    }
  ]
};
