import { Topic } from './topicsData';

export const logicGatesTopic: Topic = {
  id: "logic-gates",
  title: "Logic Gates",
  description: "AND, OR, NOT, NAND, NOR, XOR gates with interactive simulator",
  color: "from-green-500 to-emerald-500",
  lessons: [
    {
      id: "basic-gates",
      title: "Basic Logic Gates (AND, OR, NOT)",
      content: `
# Basic Logic Gates

## What is a Logic Gate?
A logic gate is a physical device that performs a logical operation on one or more binary inputs and produces a single binary output.

## 1. AND Gate
**Symbol**: Rectangle with flat input side
**Operation**: Output is HIGH (1) ONLY when ALL inputs are HIGH

### Truth Table
| A | B | Y = A·B |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    0    |
| 1 | 0 |    0    |
| 1 | 1 |    1    |

**Real-world example**: A car engine starts only when key is inserted AND brake pedal is pressed.

## 2. OR Gate
**Symbol**: Curved input side
**Operation**: Output is HIGH (1) when ANY input is HIGH

### Truth Table
| A | B | Y = A+B |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    1    |
| 1 | 0 |    1    |
| 1 | 1 |    1    |

**Real-world example**: Room light turns on when you flip switch A OR switch B.

## 3. NOT Gate (Inverter)
**Symbol**: Triangle with small circle
**Operation**: Output is opposite of input

### Truth Table
| A | Y = A' |
|---|--------|
| 0 |   1    |
| 1 |   0    |

**Real-world example**: Fan turns OFF when switch is ON, and vice versa.

## Key Points
- Gates are the building blocks of all digital circuits
- Gates can be combined to create complex circuits
- Each gate has a unique symbol and truth table
      `,
      notes: "Think of gates as decision-makers. AND is strict (needs all), OR is flexible (needs any), NOT flips everything!",
      memoryTrick: "**AND = ALL**, **OR = ANY**, **NOT = OPPOSITE**. Three simple words to remember three gates!",
      formula: "AND: Y = A·B\nOR: Y = A+B\nNOT: Y = A'",
      examTip: "Always draw gate symbols neatly. Label inputs and outputs. Write truth tables in standard format (0 0, 0 1, 1 0, 1 1)!",
      practice: [
        {
          id: "q1",
          question: "If A=1, B=0 in an AND gate, what is the output?",
          options: ["0", "1", "A", "B"],
          correctAnswer: 0,
          hint: "AND gives 1 only when ALL inputs are 1",
          explanation: "AND gate: 1·0 = 0. Since one input is 0, output is 0."
        },
        {
          id: "q2",
          question: "Which gate acts as an inverter?",
          options: ["AND", "OR", "NOT", "XOR"],
          correctAnswer: 2,
          hint: "Inverter means it flips the input",
          explanation: "NOT gate inverts/flips the input signal (0→1, 1→0)."
        }
      ]
    },
    {
      id: "universal-gates",
      title: "Universal Gates (NAND, NOR)",
      content: `
# Universal Gates: NAND and NOR

## Why "Universal"?
NAND and NOR are called **universal gates** because any other logic gate (AND, OR, NOT) can be created using only NAND or only NOR gates!

## NAND Gate
**Symbol**: AND gate + small circle at output
**Operation**: NOT + AND = Output is LOW (0) ONLY when ALL inputs are HIGH

### Truth Table
| A | B | Y = (A·B)' |
|---|---|------------|
| 0 | 0 |     1      |
| 0 | 1 |     1      |
| 1 | 0 |     1      |
| 1 | 1 |     0      |

**Key**: NAND is opposite of AND!

## NOR Gate
**Symbol**: OR gate + small circle at output
**Operation**: NOT + OR = Output is HIGH (1) ONLY when ALL inputs are LOW

### Truth Table
| A | B | Y = (A+B)' |
|---|---|------------|
| 0 | 0 |     1      |
| 0 | 1 |     0      |
| 1 | 0 |     0      |
| 1 | 1 |     0      |

**Key**: NOR is opposite of OR!

## Creating Other Gates

### NOT from NAND
Connect both inputs together: A─┬─(NAND)─ A'
                            A─┘

### AND from NAND
NAND followed by NOT: A─┬─(NAND)─(NOT)─ A·B
                      B─┘

### OR from NAND
NOT inputs, then NAND: A'─┬─(NAND)─ A+B
                       B'─┘

## Why Important?
In IC manufacturing, NAND gates are cheaper and faster to produce. Engineers build entire circuits using only NAND!
      `,
      notes: "NAND and NOR are super-gates! You can build ANY circuit with just one type. This saves cost in manufacturing!",
      memoryTrick: "**NAND = NOT AND** (bubble means NOT)\n**NOR = NOT OR** (bubble means NOT)\nBubble = Opposite!",
      formula: "NAND: Y = (A·B)'\nNOR: Y = (A+B)'",
      examTip: "When asked to implement gates using NAND/NOR, draw step-by-step diagrams. Show the conversion process clearly!",
      practice: [
        {
          id: "q1",
          question: "What is the output of NAND gate when both inputs are 1?",
          options: ["0", "1", "Undefined", "Both"],
          correctAnswer: 0,
          hint: "NAND is opposite of AND",
          explanation: "NAND(1,1) = NOT(AND(1,1)) = NOT(1) = 0"
        },
        {
          id: "q2",
          question: "Which gates are called universal gates?",
          options: ["AND, OR", "NAND, NOR", "XOR, XNOR", "AND, NOT"],
          correctAnswer: 1,
          hint: "These gates can create any other gate",
          explanation: "NAND and NOR are universal - you can build all other gates using just one of these!"
        }
      ]
    },
    {
      id: "xor-xnor",
      title: "XOR and XNOR Gates",
      content: `
# XOR and XNOR Gates

## XOR Gate (Exclusive OR)
**Symbol**: OR gate with extra curved line at input
**Operation**: Output is HIGH when inputs are DIFFERENT

### Truth Table
| A | B | Y = A⊕B |
|---|---|---------|
| 0 | 0 |    0    |
| 0 | 1 |    1    |
| 1 | 0 |    1    |
| 1 | 1 |    0    |

**Key Rule**: XOR gives 1 when number of 1s is ODD!

### Boolean Expression
Y = A⊕B = A'·B + A·B'

**Remember**: XOR = (A AND NOT B) OR (NOT A AND B)

## XNOR Gate (Exclusive NOR)
**Symbol**: XOR gate + small circle at output
**Operation**: Output is HIGH when inputs are SAME

### Truth Table
| A | B | Y = (A⊕B)' |
|---|---|------------|
| 0 | 0 |     1      |
| 0 | 1 |     0      |
| 1 | 0 |     0      |
| 1 | 1 |     1      |

**Key Rule**: XNOR gives 1 when number of 1s is EVEN!

### Boolean Expression
Y = (A⊕B)' = A'·B' + A·B

## Applications

### XOR Applications
1. **Comparator**: Check if two bits are different
2. **Parity Generator**: Create error detection bits
3. **Controlled Inverter**: B=0 passes A, B=1 inverts A

### XNOR Applications
1. **Equality Detector**: Check if two bits are same
2. **Parity Checker**: Verify even parity

## Quick Comparison
| Gate | Output HIGH when | Odd/Even Rule |
|------|------------------|---------------|
| XOR  | Inputs DIFFERENT | ODD 1s        |
| XNOR | Inputs SAME      | EVEN 1s       |
      `,
      notes: "XOR is the 'different detector', XNOR is the 'same detector'. Super useful for comparing binary numbers!",
      memoryTrick: "**XOR**: 'e**X**clusive = different = **Odd** ones'\n**XNOR**: 'equality = same = **Even** ones (including zero)'",
      formula: "XOR: Y = A⊕B = A'B + AB'\nXNOR: Y = (A⊕B)' = A'B' + AB",
      examTip: "XOR questions often involve parity. Remember: XOR chain with even 1s gives 0, odd 1s gives 1!",
      practice: [
        {
          id: "q1",
          question: "What is 1 XOR 1?",
          options: ["0", "1", "Error", "Both"],
          correctAnswer: 0,
          hint: "XOR gives 1 when inputs are different",
          explanation: "1 XOR 1 = 0 (inputs are same, so output is 0)"
        },
        {
          id: "q2",
          question: "Which gate detects equality?",
          options: ["XOR", "XNOR", "AND", "OR"],
          correctAnswer: 1,
          hint: "This gate outputs 1 when inputs are same",
          explanation: "XNOR outputs 1 when both inputs are equal (both 0 or both 1)"
        }
      ]
    }
  ],
  quizQuestions: [
    {
      id: "q1",
      question: "Which gate outputs 1 only when ALL inputs are 1?",
      options: ["OR", "AND", "XOR", "NOR"],
      correctAnswer: 1,
      explanation: "AND gate outputs 1 only when all inputs are 1"
    },
    {
      id: "q2",
      question: "What is the output of NOT gate with input 1?",
      options: ["1", "0", "Undefined", "Error"],
      correctAnswer: 1,
      explanation: "NOT inverts the input: NOT(1) = 0"
    },
    {
      id: "q3",
      question: "Which are universal gates?",
      options: ["AND, OR", "NAND, NOR", "XOR, NOT", "AND, NOT"],
      correctAnswer: 1,
      explanation: "NAND and NOR are universal gates - can create any other gate"
    },
    {
      id: "q4",
      question: "OR gate with inputs 0 and 1 gives output?",
      options: ["0", "1", "0.5", "Error"],
      correctAnswer: 1,
      explanation: "OR outputs 1 if ANY input is 1: 0 OR 1 = 1"
    },
    {
      id: "q5",
      question: "Which gate is opposite of AND?",
      options: ["OR", "NOT", "NAND", "XOR"],
      correctAnswer: 2,
      explanation: "NAND = NOT AND (opposite of AND gate)"
    },
    {
      id: "q6",
      question: "XOR of 0 and 1 is?",
      options: ["0", "1", "Error", "Both"],
      correctAnswer: 1,
      explanation: "XOR outputs 1 when inputs are different: 0 XOR 1 = 1"
    },
    {
      id: "q7",
      question: "Which gate is used for equality detection?",
      options: ["AND", "OR", "XOR", "XNOR"],
      correctAnswer: 3,
      explanation: "XNOR outputs 1 when inputs are equal"
    },
    {
      id: "q8",
      question: "NOR gate with both inputs 0 gives?",
      options: ["0", "1", "Error", "Undefined"],
      correctAnswer: 1,
      explanation: "NOR(0,0) = NOT(OR(0,0)) = NOT(0) = 1"
    },
    {
      id: "q9",
      question: "Which gate inverts the input?",
      options: ["AND", "OR", "NOT", "NAND"],
      correctAnswer: 2,
      explanation: "NOT gate (inverter) flips the input: 0→1, 1→0"
    },
    {
      id: "q10",
      question: "Symbol with bubble at output means?",
      options: ["AND operation", "OR operation", "NOT operation", "XOR operation"],
      correctAnswer: 2,
      explanation: "Bubble means NOT/inversion (e.g., NAND, NOR, XNOR)"
    }
  ]
};
