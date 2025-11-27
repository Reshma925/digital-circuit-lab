import { Topic } from './topicsData';

export const projectsTopic: Topic = {
  id: "projects",
  title: "Circuit Projects",
  description: "Real-world applications and mini-projects",
  color: "from-yellow-500 to-orange-500",
  lessons: [
    {
      id: "traffic-light",
      title: "Traffic Light Controller",
      content: `
# Traffic Light Controller

## Project Overview
Design a traffic light system using counters and logic gates.

### Requirements
- 3 lights: Red, Yellow, Green
- Sequential pattern: Green → Yellow → Red → repeat
- Each light stays ON for specific duration

## Design Approach

### State Machine Design
**States**: S₀ (Green), S₁ (Yellow), S₂ (Red)

### State Table
| Current | Next | Red | Yellow | Green |
|---------|------|-----|--------|-------|
| S₀ (00) | S₁   | 0   | 0      | 1     |
| S₁ (01) | S₂   | 0   | 1      | 0     |
| S₂ (10) | S₀   | 1   | 0      | 0     |

## Implementation

### Using MOD-3 Counter
1. **Counter**: MOD-3 counter (00→01→10→00)
2. **Decoder**: 2:3 decoder outputs drive LEDs
3. **Timer**: Clock determines duration

### Timing
- Green: 30 seconds
- Yellow: 5 seconds
- Red: 30 seconds
- Total cycle: 65 seconds

## Circuit Components
- 2 T flip-flops (for MOD-3 counter)
- Decoder (2:3)
- 3 LEDs (Red, Yellow, Green)
- Clock generator (555 timer)

## Real-World Extensions
- **4-way intersection**: 4 sets of lights
- **Pedestrian crossing**: Add walk/don't walk signals
- **Emergency override**: Immediate red for all
- **Sensor-based**: Adjust timing based on traffic

## Boolean Expressions
- Green = Q₁'Q₀'
- Yellow = Q₁'Q₀
- Red = Q₁Q₀'
      `,
      notes: "Traffic lights are perfect sequential circuit examples - they cycle through states and remember where they are!",
      memoryTrick: "**GYR** = **G**o **Y**ield **R**ed = State order, like saying 'gear'!",
      formula: "MOD-3 counter using 2 flip-flops\nStates: 00→01→10→00",
      examTip: "Draw state diagram showing all transitions. Mention timing for each state. Show logic equations for LEDs!",
      practice: [
        {
          id: "q1",
          question: "Which counter is used for 3-state traffic light?",
          options: ["MOD-2", "MOD-3", "MOD-4", "MOD-8"],
          correctAnswer: 1,
          hint: "Number of states = modulus",
          explanation: "3 states (Green, Yellow, Red) need MOD-3 counter"
        },
        {
          id: "q2",
          question: "How many flip-flops for MOD-3 counter?",
          options: ["1", "2", "3", "4"],
          correctAnswer: 1,
          hint: "2ⁿ ≥ 3, minimum n",
          explanation: "2 flip-flops can count 0-3, sufficient for MOD-3"
        }
      ]
    },
    {
      id: "voting-system",
      title: "Digital Voting System",
      content: `
# Digital Voting System

## Project Overview
Design a circuit that determines voting results based on majority rule.

### Problem Statement
- 3 voters: A, B, C
- Each can vote YES (1) or NO (0)
- Output YES if majority (≥2) vote YES

## Truth Table
| A | B | C | Output |
|---|---|---|--------|
| 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 | ✓
| 1 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 | ✓
| 1 | 1 | 0 | 1 | ✓
| 1 | 1 | 1 | 1 | ✓

## Boolean Expression
Output = A·B + B·C + A·C

**Simplified**: Output = AB + BC + CA

**Interpretation**: At least 2 voters must agree!

## Implementation

### Using Gates
- 3 AND gates (for each pair: AB, BC, CA)
- 1 OR gate (to combine results)

### Circuit Characteristics
- **Type**: Combinational circuit
- **Inputs**: 3
- **Outputs**: 1
- **Gates needed**: 3 AND + 1 OR (3-input)

## Extensions

### 5-Person Voting
- Majority = 3 or more YES votes
- More complex boolean expression
- Use K-map for simplification

### Weighted Voting
- Different votes have different weights
- Example: Chairman vote counts as 2

## Real Applications
1. **Fault-tolerant systems**: 3 sensors, take majority
2. **Error correction**: Triple modular redundancy
3. **Democratic processes**: Electronic voting machines
      `,
      notes: "Majority logic is everywhere - from voting machines to spacecraft computers that need redundancy!",
      memoryTrick: "**3 choose 2** = AB + BC + CA\nRemember: All **pair**-wise combinations!",
      formula: "Majority of 3: Y = AB + BC + CA\n(Product of each pair, ORed)",
      examTip: "Derive from truth table, simplify using Boolean algebra or K-map. Mention 'majority' clearly!",
      practice: [
        {
          id: "q1",
          question: "For 3-input majority, how many must be 1?",
          options: ["1", "2", "3", "All"],
          correctAnswer: 1,
          hint: "Majority means more than half",
          explanation: "Majority of 3 means at least 2 inputs must be 1"
        },
        {
          id: "q2",
          question: "Majority circuit is which type?",
          options: ["Sequential", "Combinational", "Both", "Neither"],
          correctAnswer: 1,
          hint: "Does it need memory?",
          explanation: "Majority circuit is combinational (output depends only on current inputs)"
        }
      ]
    },
    {
      id: "alarm-system",
      title: "Digital Alarm System",
      content: `
# Digital Alarm System

## Project Overview
Design an alarm that triggers when specific conditions are met.

### Inputs
- **Door sensor** (D): 1 = Open, 0 = Closed
- **Window sensor** (W): 1 = Open, 0 = Closed
- **Motion detector** (M): 1 = Motion, 0 = No motion
- **System ARM** (A): 1 = Armed, 0 = Disarmed

### Output
- **Alarm** (Y): 1 = Sound alarm, 0 = Silent

## Logic
Alarm sounds if system is ARMED **AND** any sensor detects intrusion:

**Boolean Expression**:
Y = A · (D + W + M)

**Meaning**: Armed AND (Door OR Window OR Motion)

## Truth Table (simplified)
| A | D | W | M | Alarm |
|---|---|---|---|-------|
| 0 | x | x | x | 0 | (Disarmed)
| 1 | 0 | 0 | 0 | 0 | (No trigger)
| 1 | 1 | x | x | 1 | (Door open!)
| 1 | x | 1 | x | 1 | (Window open!)
| 1 | x | x | 1 | 1 | (Motion detected!)

## Implementation

### Using Gates
1. **OR gate** (3-input): Combines D, W, M
2. **AND gate** (2-input): Combines result with A

**Total**: 1 OR + 1 AND gate

## Extensions

### Delayed Alarm
Add flip-flop + counter:
- 30-second delay before sounding
- Allows owner to disarm

### Zone-Based System
Different alarms for different areas:
- Front door alarm
- Back door alarm
- Motion alarm
Each with independent logic

### Silent Alarm
Additional output to security company (no sound)

## Real Features
- **Entry delay**: Time to disarm before alarm
- **Exit delay**: Time to leave after arming
- **Panic button**: Immediate alarm
- **Bypass**: Disable specific sensors
      `,
      notes: "Security systems use simple AND-OR logic but with real-world timing. Digital circuits protect millions of homes!",
      memoryTrick: "**ARM-AND-ANY**: Alarm = **ARM**ed **AND** **ANY** sensor triggered!",
      formula: "Alarm = A · (D + W + M)\nArmed AND (any sensor)",
      examTip: "Draw gate diagram clearly. Explain each input's role. Mention 'x' means 'don't care' in truth table!",
      practice: [
        {
          id: "q1",
          question: "If system is disarmed (A=0), alarm sounds?",
          options: ["Yes, if sensors trigger", "No, never", "Only for motion", "Only for door"],
          correctAnswer: 1,
          hint: "Check the AND with A",
          explanation: "If A=0, alarm is always 0 (disarmed system never sounds)"
        },
        {
          id: "q2",
          question: "How many sensors are OR-ed together?",
          options: ["1", "2", "3", "4"],
          correctAnswer: 2,
          hint: "Count D, W, M",
          explanation: "3 sensors (Door, Window, Motion) are OR-ed"
        }
      ]
    }
  ],
  quizQuestions: [
    {
      id: "q1",
      question: "Traffic light controller is which type of circuit?",
      options: ["Combinational", "Sequential", "Neither", "Both"],
      correctAnswer: 1,
      explanation: "Traffic light is sequential (has states and memory)"
    },
    {
      id: "q2",
      question: "MOD-3 counter has how many states?",
      options: ["2", "3", "4", "6"],
      correctAnswer: 1,
      explanation: "MOD-3 counter has 3 states (0, 1, 2)"
    },
    {
      id: "q3",
      question: "In majority voting (3 inputs), output is 1 when?",
      options: ["All are 1", "At least 2 are 1", "At least 1 is 1", "Exactly 1 is 1"],
      correctAnswer: 1,
      explanation: "Majority means at least 2 out of 3 must be 1"
    },
    {
      id: "q4",
      question: "Voting circuit is which type?",
      options: ["Sequential", "Combinational", "Memory", "Storage"],
      correctAnswer: 1,
      explanation: "Voting circuit is combinational (no memory needed)"
    },
    {
      id: "q5",
      question: "In alarm system, if A=0, alarm can sound?",
      options: ["Yes", "No", "Sometimes", "Depends on sensors"],
      correctAnswer: 1,
      explanation: "If system is disarmed (A=0), alarm never sounds"
    },
    {
      id: "q6",
      question: "Alarm = A·(D+W+M). Which operation is done first?",
      options: ["AND", "OR", "NOT", "XOR"],
      correctAnswer: 1,
      explanation: "Parentheses first: OR operation (D+W+M), then AND with A"
    },
    {
      id: "q7",
      question: "Traffic light needs which component?",
      options: ["Only gates", "Only flip-flops", "Counter", "Only decoder"],
      correctAnswer: 2,
      explanation: "Traffic light needs counter to cycle through states"
    },
    {
      id: "q8",
      question: "Majority of 3: AB+BC+CA is called?",
      options: ["SOP form", "POS form", "Universal form", "Standard form"],
      correctAnswer: 0,
      explanation: "AB+BC+CA is in SOP (Sum of Products) form"
    },
    {
      id: "q9",
      question: "Which project uses sequential logic?",
      options: ["Voting system", "Alarm system", "Traffic light", "All"],
      correctAnswer: 2,
      explanation: "Traffic light uses sequential logic (states and memory)"
    },
    {
      id: "q10",
      question: "Emergency override in traffic lights means?",
      options: ["All green", "All red", "No change", "All yellow"],
      correctAnswer: 1,
      explanation: "Emergency override makes all lights red immediately"
    }
  ]
};
