import { Topic } from './topicsData';

export const sequentialTopic: Topic = {
  id: "sequential-circuits",
  title: "Sequential Logic",
  description: "Flip-flops, Registers, Counters with timing diagrams",
  color: "from-indigo-500 to-purple-500",
  lessons: [
    {
      id: "sequential-intro",
      title: "Introduction to Sequential Circuits",
      content: `
# Sequential vs Combinational Circuits

## Combinational Circuits
**Definition**: Output depends ONLY on current inputs
**Memory**: NO memory element
**Examples**: Adders, MUX, Decoder, Encoder

### Characteristics
- Output = f(inputs)
- No feedback loops
- No clock signal needed
- Faster response

## Sequential Circuits
**Definition**: Output depends on current inputs AND previous state
**Memory**: HAS memory elements (flip-flops)
**Examples**: Counters, Registers, Memory

### Characteristics
- Output = f(inputs, previous state)
- Feedback loops present
- Clock signal usually needed
- Can store information

## Key Differences Table
| Feature | Combinational | Sequential |
|---------|---------------|------------|
| Memory | No | Yes |
| Clock | Not needed | Usually needed |
| Output depends on | Current input only | Input + Past state |
| Speed | Faster | Slower |
| Examples | Adder, MUX | Counter, Register |

## Why Sequential Circuits?
1. **Store data**: Remember previous values
2. **Count events**: Count pulses, create delays
3. **State machines**: Control complex operations
4. **Computers**: All memory is sequential!

## Clock Signal
**Purpose**: Synchronizes operations in sequential circuits

### Types
- **Synchronous**: All flip-flops change with clock
- **Asynchronous**: Independent of clock

**Clock Frequency**: How fast the circuit updates (MHz, GHz)
      `,
      notes: "Combinational = instant response. Sequential = remembers things. All computers need memory, so sequential circuits are essential!",
      memoryTrick: "**COMB**inational = **C**urrent inputs **O**nly\n**SEQ**uential = **S**tored + **E**xisting + **Q**uery (past + present)",
      examTip: "Always draw the table comparing combinational vs sequential. Mention presence/absence of memory as key difference!",
      practice: [
        {
          id: "q1",
          question: "Which circuit has memory?",
          options: ["Combinational", "Sequential", "Both", "Neither"],
          correctAnswer: 1,
          hint: "Think about which one can store past information",
          explanation: "Sequential circuits have memory elements (flip-flops)"
        },
        {
          id: "q2",
          question: "Which needs a clock signal?",
          options: ["Half adder", "Full adder", "Counter", "MUX"],
          correctAnswer: 2,
          hint: "Sequential circuits need clock",
          explanation: "Counter is sequential and needs clock for synchronization"
        }
      ]
    },
    {
      id: "flip-flops",
      title: "Flip-Flops (SR, D, JK, T)",
      content: `
# Flip-Flops

## What is a Flip-Flop?
A **bistable** device that stores 1 bit of data. Has TWO stable states: 0 or 1.

## SR Flip-Flop
**Inputs**: S (Set), R (Reset), CLK
**Outputs**: Q, Q'

### Truth Table
| S | R | Q(next) | Action |
|---|---|---------|--------|
| 0 | 0 | Q (no change) | Hold |
| 0 | 1 | 0 | Reset |
| 1 | 0 | 1 | Set |
| 1 | 1 | Invalid | Avoid! |

**Problem**: S=1, R=1 is invalid (race condition)

## D Flip-Flop (Data/Delay)
**Inputs**: D (Data), CLK
**Outputs**: Q, Q'

### Truth Table
| D | Q(next) |
|---|---------|
| 0 | 0 |
| 1 | 1 |

**Advantage**: NO invalid state! Q follows D at clock edge.

**Equation**: Q(next) = D

## JK Flip-Flop
**Inputs**: J, K, CLK
**Outputs**: Q, Q'

### Truth Table
| J | K | Q(next) | Action |
|---|---|---------|--------|
| 0 | 0 | Q | Hold |
| 0 | 1 | 0 | Reset |
| 1 | 0 | 1 | Set |
| 1 | 1 | Q' | Toggle |

**Advantage**: J=1, K=1 toggles (solves SR problem!)

**Equation**: Q(next) = JQ' + K'Q

## T Flip-Flop (Toggle)
**Inputs**: T (Toggle), CLK
**Outputs**: Q, Q'

### Truth Table
| T | Q(next) |
|---|---------|
| 0 | Q (no change) |
| 1 | Q' (toggle) |

**Equation**: Q(next) = T⊕Q

## Edge Triggering
- **Positive edge**: Changes at rising edge (0→1)
- **Negative edge**: Changes at falling edge (1→0)

## Applications
- **D FF**: Data storage, registers
- **JK FF**: Counters, shift registers
- **T FF**: Frequency dividers, counters
      `,
      notes: "D is simplest (just stores), JK is versatile (does everything), T is for toggling. Each has its superpower!",
      memoryTrick: "**D** = **D**ata follower\n**JK** = **J**ust **K**eeps improving (no invalid)\n**T** = **T**oggle master",
      formula: "D: Q⁺=D\nJK: Q⁺=JQ'+K'Q\nT: Q⁺=T⊕Q",
      examTip: "Draw characteristic table AND excitation table. Show timing diagrams with clock pulse for full marks!",
      practice: [
        {
          id: "q1",
          question: "Which flip-flop has NO invalid state?",
          options: ["SR", "D", "JK", "T"],
          correctAnswer: 1,
          hint: "One flip-flop always works correctly",
          explanation: "D flip-flop has no invalid state (Q simply follows D)"
        },
        {
          id: "q2",
          question: "What happens in T flip-flop when T=1?",
          options: ["Set", "Reset", "Toggle", "Hold"],
          correctAnswer: 2,
          hint: "T stands for Toggle",
          explanation: "When T=1, T flip-flop toggles (Q becomes Q')"
        }
      ]
    },
    {
      id: "counters",
      title: "Counters (Asynchronous & Synchronous)",
      content: `
# Counters

## What is a Counter?
A sequential circuit that counts pulses. Uses flip-flops to store count value.

## Asynchronous Counter (Ripple Counter)
**Definition**: Flip-flops are NOT clocked together. Output of one FF clocks the next.

### 2-bit Asynchronous Counter
Uses 2 T flip-flops:
- Count: 00 → 01 → 10 → 11 → 00 (repeats)
- **Modulus**: 4 (counts 0 to 3)

**Advantage**: Simple design, fewer gates
**Disadvantage**: Slow (ripple delay), glitches

### 4-bit Counter
- Count: 0000 to 1111 (0 to 15)
- **Modulus**: 16

## Synchronous Counter
**Definition**: ALL flip-flops are clocked together by same clock signal.

### 2-bit Synchronous Counter
Uses 2 T flip-flops + AND gate:
- Same counting sequence
- **Advantage**: Faster, no glitches
- **Disadvantage**: More complex

### Design using JK Flip-Flops
1. State table
2. Excitation table
3. K-maps for J and K inputs
4. Logic circuit

## MOD-N Counter
**Modulus N**: Counter counts from 0 to N-1, then resets.

### Examples
- MOD-8: Counts 000 to 111 (needs 3 FFs)
- MOD-10 (Decade): Counts 0000 to 1001 (BCD)
- MOD-16: Counts 0000 to 1111 (needs 4 FFs)

**Formula**: n flip-flops → MOD-2ⁿ counter

## Up/Down Counter
- **Up Counter**: 0→1→2→3→...
- **Down Counter**: 3→2→1→0→...
- **Up/Down**: Can count both directions

## Ring Counter
Output of last FF connects to input of first FF.
Creates rotating pattern: 0001 → 0010 → 0100 → 1000 → 0001

## Applications
1. Digital clocks
2. Frequency dividers
3. Event counting
4. Sequence generation
      `,
      notes: "Asynchronous = simple but slow (ripple effect). Synchronous = fast but complex (all together). Choose based on need!",
      memoryTrick: "**ASYNC** = A**SYNC**hronous = **A** **S**low **Y**et **N**ice **C**ounter\n**SYNC** = **SYNC**hronous = **S**peedy (same time!)",
      formula: "MOD-N counter needs ⌈log₂(N)⌉ flip-flops\nn FFs → MOD-2ⁿ counter",
      examTip: "For MOD-N design, show: (1) State diagram (2) State table (3) FF excitation (4) Logic equations. Don't skip steps!",
      practice: [
        {
          id: "q1",
          question: "How many flip-flops for MOD-16 counter?",
          options: ["2", "3", "4", "5"],
          correctAnswer: 2,
          hint: "2^n = 16, solve for n",
          explanation: "16 = 2⁴, so 4 flip-flops needed"
        },
        {
          id: "q2",
          question: "Which counter is faster?",
          options: ["Asynchronous", "Synchronous", "Both same", "Depends"],
          correctAnswer: 1,
          hint: "One updates all at once",
          explanation: "Synchronous counter is faster (no ripple delay)"
        }
      ]
    }
  ],
  quizQuestions: [
    {
      id: "q1",
      question: "Which circuit has memory?",
      options: ["Adder", "MUX", "Flip-flop", "Decoder"],
      correctAnswer: 2,
      explanation: "Flip-flop is a memory element in sequential circuits"
    },
    {
      id: "q2",
      question: "Which flip-flop has invalid state?",
      options: ["SR", "D", "JK", "T"],
      correctAnswer: 0,
      explanation: "SR flip-flop has invalid state when S=1, R=1"
    },
    {
      id: "q3",
      question: "D flip-flop equation is?",
      options: ["Q⁺=D", "Q⁺=Q'", "Q⁺=D⊕Q", "Q⁺=0"],
      correctAnswer: 0,
      explanation: "D flip-flop: Q(next) = D"
    },
    {
      id: "q4",
      question: "What does T flip-flop do when T=1?",
      options: ["Set", "Reset", "Toggle", "Hold"],
      correctAnswer: 2,
      explanation: "T=1 toggles the output (Q becomes Q')"
    },
    {
      id: "q5",
      question: "Which counter is slower?",
      options: ["Synchronous", "Asynchronous", "Both same", "Neither"],
      correctAnswer: 1,
      explanation: "Asynchronous counter is slower due to ripple delay"
    },
    {
      id: "q6",
      question: "MOD-8 counter needs how many flip-flops?",
      options: ["2", "3", "4", "8"],
      correctAnswer: 1,
      explanation: "8 = 2³, so 3 flip-flops needed"
    },
    {
      id: "q7",
      question: "Decade counter counts from?",
      options: ["0-9", "0-10", "1-10", "0-15"],
      correctAnswer: 0,
      explanation: "Decade counter (MOD-10) counts 0 to 9"
    },
    {
      id: "q8",
      question: "Which FF solves SR's invalid state?",
      options: ["D", "JK", "T", "All"],
      correctAnswer: 1,
      explanation: "JK flip-flop solves SR problem (J=K=1 toggles)"
    },
    {
      id: "q9",
      question: "Combinational circuit output depends on?",
      options: ["Current input only", "Past state only", "Both", "Neither"],
      correctAnswer: 0,
      explanation: "Combinational output depends only on current inputs"
    },
    {
      id: "q10",
      question: "Which is faster to respond?",
      options: ["Combinational", "Sequential", "Same", "Depends"],
      correctAnswer: 0,
      explanation: "Combinational circuits are faster (no memory delays)"
    }
  ]
};
