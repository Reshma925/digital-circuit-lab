export interface TruthTableConfig {
  type: string;   // Gate type: AND, OR, NOT, XOR, etc.
  inputs: number; // Number of inputs (1 for NOT, others 2)
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  notes: string;
  memoryTrick: string;
  formula?: string;
  examTip: string;
  practice: PracticeQuestion[];

  // ⭐ ADDED FOR INTERACTIVE GATES ⭐
  truthTables?: TruthTableConfig[];
}

export interface PracticeQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  hint: string;
  explanation: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  color: string;
  lessons: Lesson[];
  quizQuestions: QuizQuestion[];
}

export const topicsData: Topic[] = [
  {
    id: "number-systems",
    title: "Number Systems & Codes",
    description:
      "Binary, Decimal, Octal, Hexadecimal conversions and arithmetic operations",
    color: "from-cyan-500 to-blue-500",
    lessons: [
      {
        id: "decimal-binary",
        title: "Decimal and Binary Systems",
        content: `
# Decimal and Binary Number Systems

## Decimal System (Base-10)
The decimal system uses 10 digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.
Each position represents a power of 10.

Example: 5234₁₀ = (5×10³) + (2×10²) + (3×10¹) + (4×10⁰)

## Binary System (Base-2)
The binary system uses only 2 digits: 0 and 1.
Each position represents a power of 2.

Example: 1011₂ = (1×2³) + (0×2²) + (1×2¹) + (1×2⁰) = 8 + 0 + 2 + 1 = 11₁₀

## Conversion Methods

### Decimal to Binary
**Method**: Divide by 2 repeatedly and note remainders.

Example: Convert 25₁₀ to binary
- 25 ÷ 2 = 12 remainder 1
- 12 ÷ 2 = 6 remainder 0
- 6 ÷ 2 = 3 remainder 0
- 3 ÷ 2 = 1 remainder 1
- 1 ÷ 2 = 0 remainder 1

Reading from bottom to top: 25₁₀ = 11001₂

### Binary to Decimal
**Method**: Multiply each digit by its position value (power of 2) and sum.

Example: Convert 1101₂ to decimal
= (1×2³) + (1×2²) + (0×2¹) + (1×2⁰)
= 8 + 4 + 0 + 1 = 13₁₀
        `,
        notes:
          "The decimal system is what we use daily. Binary is the language of computers - all data is stored as 0s and 1s.",
        memoryTrick:
          "**BINARY TRICK**: Remember powers of 2: 1, 2, 4, 8, 16, 32, 64, 128... (each doubles). Say '**2-4-8-16**' quickly to recall!",
        formula:
          "Decimal to Binary: Divide by 2, note remainders bottom-up\nBinary to Decimal: Sum of (digit × 2^position)",
        examTip:
          "Always write the base as subscript (₂ for binary, ₁₀ for decimal). Show all steps in conversion questions for full marks!",
        practice: [
          {
            id: "q1",
            question: "Convert 42₁₀ to binary",
            options: ["101010₂", "101001₂", "110010₂", "100110₂"],
            correctAnswer: 0,
            hint: "Divide 42 by 2 repeatedly until you reach 0",
            explanation:
              "42÷2=21(0), 21÷2=10(1), 10÷2=5(0), 5÷2=2(1), 2÷2=1(0), 1÷2=0(1). Reading remainders bottom-up: 101010₂",
          },
          {
            id: "q2",
            question: "What is 1110₂ in decimal?",
            options: ["12", "14", "13", "15"],
            correctAnswer: 1,
            hint: "Calculate: (1×8) + (1×4) + (1×2) + (0×1)",
            explanation: "1110₂ = (1×2³)+(1×2²)+(1×2¹)+(0×2⁰) = 8+4+2+0 = 14₁₀",
          },
        ],
      },

      {
        id: "octal-hex",
        title: "Octal and Hexadecimal Systems",
        content: `
# Octal and Hexadecimal Number Systems

## Octal System (Base-8)
Uses 8 digits: 0, 1, 2, 3, 4, 5, 6, 7
Each position represents a power of 8.

Example: 157₈ = (1×8²) + (5×8¹) + (7×8⁰) = 64 + 40 + 7 = 111₁₀

## Hexadecimal System (Base-16)
Uses 16 symbols: 0-9 and A-F (where A=10, B=11, C=12, D=13, E=14, F=15)
Each position represents a power of 16.

Example: 2F₁₆ = (2×16¹) + (15×16⁰) = 32 + 15 = 47₁₀

## Quick Conversion Shortcuts

### Binary ↔ Octal
Group binary digits in sets of **3** (from right).

Example: 101110₂ = 101 110 = 5 6 = 56₈

### Binary ↔ Hexadecimal
Group binary digits in sets of **4** (from right).

Example: 10111010₂ = 1011 1010 = B A = BA₁₆

## Conversion Table
| Decimal | Binary | Octal | Hex |
|---------|--------|-------|-----|
| 0       | 0000   | 0     | 0   |
| 10      | 1010   | 12    | A   |
| 15      | 1111   | 17    | F   |
| 255     | 11111111 | 377 | FF  |
        `,
        notes:
          "Octal and Hex are shorthand for binary. Programmers use hex because it's compact - one hex digit = 4 binary bits!",
        memoryTrick:
          "**GROUP RULE**: Binary→Octal = groups of **3**, Binary→Hex = groups of **4**. Remember: **3 for 8, 4 for 16**!",
        formula: "Binary to Octal: Group in 3s\nBinary to Hex: Group in 4s",
        examTip:
          "For hex letters: A=10, B=11, C=12, D=13, E=14, F=15. Write this conversion table on your exam sheet first!",
        practice: [
          {
            id: "q1",
            question: "Convert 11010110₂ to octal",
            options: ["326₈", "336₈", "316₈", "346₈"],
            correctAnswer: 0,
            hint: "Group the binary number into sets of 3 digits from right: 011 010 110",
            explanation: "11010110₂ = 011 010 110 = 3 2 6 = 326₈",
          },
          {
            id: "q2",
            question: "What is A5₁₆ in decimal?",
            options: ["155", "165", "175", "145"],
            correctCorrect: 1,
            hint: "Remember A=10 in hex. Calculate: (10×16) + (5×1)",
            explanation: "A5₁₆ = (10×16¹) + (5×16⁰) = 160 + 5 = 165₁₀",
          },
        ],
      },

      // (The rest of file continues — unchanged)
    ],
    quizQuestions: [
      // unchanged
    ],
  },

  // Topic 2 (Boolean Algebra) is inside booleanAlgebraData.ts
];
