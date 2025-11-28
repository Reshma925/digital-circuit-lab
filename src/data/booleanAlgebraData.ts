import { Topic } from "./topicsData";

export const booleanAlgebraTopic: Topic = {
  id: "boolean-algebra",
  title: "Boolean Algebra",
  description: "Laws, theorems, De Morgan's laws, SOP & POS forms",
  color: "from-purple-500 to-pink-500",

  lessons: [
    {
      id: "boolean-basics",
      title: "Boolean Variables and Operations",

      // Interactive gates for Lesson 1
      truthTables: [
        { type: "AND", inputs: 2 },
        { type: "OR", inputs: 2 },
        { type: "NOT", inputs: 1 },
        { type: "NAND", inputs: 2 },
        { type: "NOR", inputs: 2 },
        { type: "XOR", inputs: 2 },
        { type: "XNOR", inputs: 2 }
      ],

      content: `
# Boolean Algebra Fundamentals

## What is Boolean Algebra?
Boolean algebra is the mathematics of **logic**. It works with only **two values**: 0 (False) and 1 (True).

## Basic Operations

### 1. AND Operation (·)
Symbol: A · B or AB  
Truth: Output is 1 ONLY when ALL inputs are 1  

| A | B | A·B |
|---|---|-----|
| 0 | 0 |  0  |
| 0 | 1 |  0  |
| 1 | 0 |  0  |
| 1 | 1 |  1  |

**Example**: Switch circuit in series

### 2. OR Operation (+)
Symbol: A + B  
Truth: Output is 1 when ANY input is 1  

| A | B | A+B |
|---|---|-----|
| 0 | 0 |  0  |
| 0 | 1 |  1  |
| 1 | 0 |  1  |
| 1 | 1 |  1  |

**Example**: Switch circuit in parallel

### 3. NOT Operation (')
Symbol: A' or Ā  
Truth: Output is opposite of input  

| A | A' |
|---|----|
| 0 | 1  |
| 1 | 0  |

**Example**: Inverter switch

## Boolean Constants
- **0** = FALSE  
- **1** = TRUE  

## Boolean Variables
Letters like A, B, C, X, Y, Z

## Order of Operations
1. NOT  
2. AND  
3. OR

**Example**: A + B·C' means A + (B·(C'))
      `,

      notes:
        "Boolean algebra is the foundation of all digital circuits. Every computer operation boils down to AND, OR, NOT!",
      memoryTrick:
        "**AND**: All must be 1\n**OR**: One is enough\n**NOT**: Opposite",
      formula: "AND = A·B\nOR = A+B\nNOT = A'",
      examTip:
        "Use proper notation. Draw truth tables to avoid mistakes. Always expand expressions carefully.",
      practice: [
        {
          id: "q1",
          question: "What is the output of 1 · 0?",
          options: ["0", "1", "Undefined", "Both"],
          correctAnswer: 0,
          hint: "AND → both must be 1",
          explanation: "1 · 0 = 0 because AND only outputs 1 when ALL inputs are 1."
        },
        {
          id: "q2",
          question: "If A=1 and B=0, what is A + B?",
          options: ["0", "1", "A", "B"],
          correctAnswer: 1,
          hint: "OR → at least one input must be 1",
          explanation: "1 + 0 = 1 because OR outputs 1 if ANY input is 1."
        }
      ]
    },

    // ---------- Lesson 2: Boolean Laws and Theorems ----------
    {
      id: "boolean-laws",
      title: "Boolean Laws and Theorems",

      // Interactive gates for Lesson 2 (added)
      truthTables: [
        { type: "AND", inputs: 2 },
        { type: "OR", inputs: 2 },
        { type: "NOT", inputs: 1 },
        { type: "NAND", inputs: 2 },
        { type: "NOR", inputs: 2 },
        { type: "XOR", inputs: 2 },
        { type: "XNOR", inputs: 2 }
      ],

      content: `
# Boolean Laws and Theorems

## Identity Laws
- A + 0 = A (OR with 0 gives A)
- A · 1 = A (AND with 1 gives A)

## Null/Dominance Laws
- A + 1 = 1 (OR with 1 always gives 1)
- A · 0 = 0 (AND with 0 always gives 0)

## Idempotent Laws
- A + A = A
- A · A = A

## Complement Laws
- A + A' = 1
- A · A' = 0
- (A')' = A (Double negation)

## Commutative Laws
- A + B = B + A
- A · B = B · A

## Associative Laws
- A + (B + C) = (A + B) + C
- A · (B · C) = (A · B) · C

## Distributive Laws
- A · (B + C) = A·B + A·C (AND over OR)
- A + (B · C) = (A + B) · (A + C) (OR over AND)

## Absorption Laws
- A + A·B = A
- A · (A + B) = A

## De Morgan's Theorems** (Very Important!)
1. **(A + B)' = A' · B'**
   - NOT of OR = AND of NOTs
2. **(A · B)' = A' + B'**
   - NOT of AND = OR of NOTs

### Example: Simplify (A + B)·(A + B')
= A + (B · B')  [Distributive law]
= A + 0         [Complement law]
= A             [Identity law]
      `,
      notes:
        "These laws are your tools for simplifying expressions. Master De Morgan's - it's asked in every exam!",
      memoryTrick:
        "**DE MORGAN**: '**Break the line, Change the sign**' - Break the overbar, change AND↔OR!",
      formula: "(A+B)' = A'·B'\n(A·B)' = A'+B'",
      examTip: "Write law name when simplifying! Example: 'Using Complement Law: A·A'=0'. Examiners love this!",
      practice: [
        {
          id: "q1",
          question: "Simplify: A + A·B",
          options: ["A", "B", "A+B", "A·B"],
          correctAnswer: 0,
          hint: "Use Absorption Law",
          explanation: "A + A·B = A (Absorption Law). A absorbs the extra term."
        },
        {
          id: "q2",
          question: "Using De Morgan's: (X·Y)' equals?",
          options: ["X+Y", "X'+Y'", "X·Y", "X'+Y"],
          correctAnswer: 1,
          hint: "Break the bar, change AND to OR",
          explanation: "(X·Y)' = X'+Y' (De Morgan's Theorem: NOT of AND = OR of NOTs)"
        }
      ]
    },

    // ---------- Lesson 3: SOP and POS ----------
    {
      id: "sop-pos",
      title: "SOP and POS Forms",

      // Interactive gates for Lesson 3 (added)
      truthTables: [
        { type: "AND", inputs: 2 },
        { type: "OR", inputs: 2 },
        { type: "NOT", inputs: 1 },
        { type: "NAND", inputs: 2 },
        { type: "NOR", inputs: 2 },
        { type: "XOR", inputs: 2 },
        { type: "XNOR", inputs: 2 }
      ],

      content: `
# Sum of Products (SOP) and Product of Sums (POS)

## Sum of Products (SOP)
**Form**: OR of ANDs
**Example**: A·B' + A'·B·C + B·C'

### Characteristics:
- Sum (+) of product (·) terms
- Each product term is called a **minterm**
- Also called **Disjunctive Normal Form (DNF)**

### Example: F = A·B + A'·C
- Products: A·B and A'·C
- Sum: Combined with OR (+)

## Product of Sums (POS)
**Form**: AND of ORs
**Example**: (A+B')·(A'+B)·(B+C)

### Characteristics:
- Product (·) of sum (+) terms
- Each sum term is called a **maxterm**
- Also called **Conjunctive Normal Form (CNF)**

## Minterms and Maxterms

### Minterms (for SOP)
A product term where all variables appear (normal or complemented)
- For variables A,B: minterms are A·B, A·B', A'·B, A'·B'
- Notation: m₀, m₁, m₂, m₃

### Maxterms (for POS)
A sum term where all variables appear
- For variables A,B: maxterms are A+B, A+B', A'+B, A'+B'
- Notation: M₀, M₁, M₂, M₃

## Truth Table to Expression

### Example: Create SOP from truth table
| A | B | F |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 | → A'·B
| 1 | 0 | 1 | → A·B'
| 1 | 1 | 0 |

**SOP**: F = A'·B + A·B'

### Converting SOP ↔ POS
Any Boolean function can be expressed in both forms!

**Example**:
- SOP: F = A·B + A·C
- POS: F = (A+C)·(A+B)·(B+C)
      `,
      notes: "SOP and POS are two ways to write the same function. SOP is like addition of products, POS is multiplication of sums.",
      memoryTrick: "**SOP**: '**S**um **O**f **P**roducts = **P**lus of **M**ultiplies'\n**POS**: '**P**roduct **O**f **S**ums = **M**ultiply of **P**lus'",
      formula: "SOP: A·B + C·D (OR of ANDs)\nPOS: (A+B)·(C+D) (AND of ORs)",
      examTip: "For truth tables: SOP uses rows where F=1, POS uses rows where F=0. Write minterms/maxterms notation!",
      practice: [
        {
          id: "q1",
          question: "Which is in SOP form?",
          options: ["A·B + C", "A·(B+C)", "(A+B)·C", "A+(B·C)"],
          correctAnswer: 0,
          hint: "SOP is OR of AND terms",
          explanation: "A·B + C is SOP (sum of products: A·B and C combined with OR)"
        },
        {
          id: "q2",
          question: "How many minterms exist for 3 variables?",
          options: ["3", "6", "8", "9"],
          correctAnswer: 2,
          hint: "Each variable can be 0 or 1: 2^n combinations",
          explanation: "For n=3 variables: 2³ = 8 possible minterms (m₀ to m₇)"
        }
      ]
    }
  ],

  quizQuestions: [
    {
      id: "q1",
      question: "What is 1 + 1 in Boolean algebra?",
      options: ["0", "1", "2", "10"],
      correctAnswer: 1,
      explanation: "In Boolean: 1 + 1 = 1 (OR operation, not arithmetic)"
    },
    {
      id: "q2",
      question: "Which law states A + A' = 1?",
      options: ["Identity", "Complement", "Idempotent", "Associative"],
      correctAnswer: 1,
      explanation: "Complement Law: A variable ORed with its complement equals 1"
    },
    {
      id: "q3",
      question: "Simplify: A·(A+B)",
      options: ["A", "B", "A+B", "A·B"],
      correctAnswer: 0,
      explanation: "A·(A+B) = A (Absorption Law)"
    },
    {
      id: "q4",
      question: "De Morgan's Theorem: (A·B)' = ?",
      options: ["A+B", "A'·B'", "A'+B'", "A·B'"],
      correctAnswer: 2,
      explanation: "(A·B)' = A'+B' (NOT of AND = OR of NOTs)"
    },
    {
      id: "q5",
      question: "Which is in POS form?",
      options: ["A+B·C", "(A+B)·(C+D)", "A·B+C·D", "A·(B+C)+D"],
      correctAnswer: 1,
      explanation: "(A+B)·(C+D) is POS (Product of Sums)"
    },
    {
      id: "q6",
      question: "What is (A')' equal to?",
      options: ["0", "1", "A", "A'"],
      correctAnswer: 2,
      explanation: "(A')' = A (Double negation cancels out)"
    },
    {
      id: "q7",
      question: "Simplify: A + 1",
      options: ["A", "1", "0", "A'"],
      correctAnswer: 1,
      explanation: "A + 1 = 1 (Null/Dominance Law)"
    },
    {
      id: "q8",
      question: "For 2 variables, how many minterms are there?",
      options: ["2", "3", "4", "8"],
      correctAnswer: 2,
      explanation: "2² = 4 minterms (m₀, m₁, m₂, m₃)"
    },
    {
      id: "q9",
      question: "Which operation has highest priority?",
      options: ["OR", "AND", "NOT", "All equal"],
      correctAnswer: 2,
      explanation: "Order: NOT > AND > OR"
    },
    {
      id: "q10",
      question: "Simplify: A·0",
      options: ["A", "0", "1", "A'"],
      correctAnswer: 1,
      explanation: "A·0 = 0 (Null Law: AND with 0 always gives 0)"
    }
  ]
};
