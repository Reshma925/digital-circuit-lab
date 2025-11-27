export interface Lesson {
  id: string;
  title: string;
  content: string;
  notes: string;
  memoryTrick: string;
  formula?: string;
  examTip: string;
  practice: PracticeQuestion[];
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
    description: "Binary, Decimal, Octal, Hexadecimal conversions and arithmetic operations",
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
        notes: "The decimal system is what we use daily. Binary is the language of computers - all data is stored as 0s and 1s.",
        memoryTrick: "**BINARY TRICK**: Remember powers of 2: 1, 2, 4, 8, 16, 32, 64, 128... (each doubles). Say '**2-4-8-16**' quickly to recall!",
        formula: "Decimal to Binary: Divide by 2, note remainders bottom-up\nBinary to Decimal: Sum of (digit × 2^position)",
        examTip: "Always write the base as subscript (₂ for binary, ₁₀ for decimal). Show all steps in conversion questions for full marks!",
        practice: [
          {
            id: "q1",
            question: "Convert 42₁₀ to binary",
            options: ["101010₂", "101001₂", "110010₂", "100110₂"],
            correctAnswer: 0,
            hint: "Divide 42 by 2 repeatedly until you reach 0",
            explanation: "42÷2=21(0), 21÷2=10(1), 10÷2=5(0), 5÷2=2(1), 2÷2=1(0), 1÷2=0(1). Reading remainders bottom-up: 101010₂"
          },
          {
            id: "q2",
            question: "What is 1110₂ in decimal?",
            options: ["12", "14", "13", "15"],
            correctAnswer: 1,
            hint: "Calculate: (1×8) + (1×4) + (1×2) + (0×1)",
            explanation: "1110₂ = (1×2³)+(1×2²)+(1×2¹)+(0×2⁰) = 8+4+2+0 = 14₁₀"
          }
        ]
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
        notes: "Octal and Hex are shorthand for binary. Programmers use hex because it's compact - one hex digit = 4 binary bits!",
        memoryTrick: "**GROUP RULE**: Binary→Octal = groups of **3**, Binary→Hex = groups of **4**. Remember: **3 for 8, 4 for 16**!",
        formula: "Binary to Octal: Group in 3s\nBinary to Hex: Group in 4s",
        examTip: "For hex letters: A=10, B=11, C=12, D=13, E=14, F=15. Write this conversion table on your exam sheet first!",
        practice: [
          {
            id: "q1",
            question: "Convert 11010110₂ to octal",
            options: ["326₈", "336₈", "316₈", "346₈"],
            correctAnswer: 0,
            hint: "Group the binary number into sets of 3 digits from right: 011 010 110",
            explanation: "11010110₂ = 011 010 110 = 3 2 6 = 326₈"
          },
          {
            id: "q2",
            question: "What is A5₁₆ in decimal?",
            options: ["155", "165", "175", "145"],
            correctAnswer: 1,
            hint: "Remember A=10 in hex. Calculate: (10×16) + (5×1)",
            explanation: "A5₁₆ = (10×16¹) + (5×16⁰) = 160 + 5 = 165₁₀"
          }
        ]
      },
      {
        id: "binary-arithmetic",
        title: "Binary Addition & Subtraction",
        content: `
# Binary Arithmetic Operations

## Binary Addition Rules
- 0 + 0 = 0
- 0 + 1 = 1
- 1 + 0 = 1
- 1 + 1 = 10 (write 0, carry 1)
- 1 + 1 + 1 (with carry) = 11 (write 1, carry 1)

### Example: Add 1011₂ + 1101₂
\`\`\`
   1 1 1  (carries)
   1 0 1 1
 + 1 1 0 1
-----------
 1 1 0 0 0₂
\`\`\`
Answer: 11000₂ (24 in decimal)

## Binary Subtraction Rules
- 0 - 0 = 0
- 1 - 0 = 1
- 1 - 1 = 0
- 0 - 1 = 1 (borrow 1 from left)

### Example: Subtract 1101₂ - 1001₂
\`\`\`
   1 1 0 1
 - 1 0 0 1
-----------
   0 1 0 0₂
\`\`\`
Answer: 100₂ (4 in decimal)

## Important Points
- Always align numbers by their rightmost digit (LSB)
- Work from right to left, just like decimal arithmetic
- **Carry**: When sum ≥ 2, carry forward
- **Borrow**: When subtracting larger from smaller digit
        `,
        notes: "Binary addition is like decimal addition, but you carry when you reach 2 (not 10). Think of it as counting with only two fingers!",
        memoryTrick: "**1+1 TRICK**: Say '**One Plus One is TWO-Zero**' (10 in binary). The rhyme helps remember the carry!",
        formula: "Binary Addition: Same as decimal, but carry at 2\nBinary Subtraction: Borrow from left when needed",
        examTip: "Show your work! Write carries above and borrows below. Check your answer by converting to decimal.",
        practice: [
          {
            id: "q1",
            question: "What is 1010₂ + 0111₂?",
            options: ["10001₂", "10010₂", "10000₂", "10011₂"],
            correctAnswer: 0,
            hint: "Add from right: 0+1=1, 1+1=10 (carry 1), 0+1+carry=10 (carry 1), 1+0+carry=10",
            explanation: "1010₂ + 0111₂ = 10001₂. Verify: 10₁₀ + 7₁₀ = 17₁₀ = 10001₂"
          },
          {
            id: "q2",
            question: "Calculate 1100₂ - 0101₂",
            options: ["0111₂", "0110₂", "1001₂", "1000₂"],
            correctAnswer: 0,
            hint: "Subtract from right: 0-1 (borrow), 0-0, 1-1, 1-0",
            explanation: "1100₂ - 0101₂ = 0111₂. Verify: 12₁₀ - 5₁₀ = 7₁₀ = 0111₂"
          }
        ]
      },
      {
        id: "complements",
        title: "1's and 2's Complement",
        content: `
# 1's Complement and 2's Complement

## 1's Complement
**Definition**: Flip all bits (0→1, 1→0)

Example: Find 1's complement of 1011₂
- Original: 1011
- 1's complement: 0100

**Use**: Represents negative numbers in binary.

## 2's Complement
**Definition**: 1's complement + 1

Example: Find 2's complement of 1011₂
- 1's complement: 0100
- Add 1: 0100 + 1 = 0101
- 2's complement: 0101

## Why 2's Complement?
- **Widely used** to represent negative numbers
- Simplifies subtraction (A - B = A + 2's complement of B)
- No separate subtraction circuit needed in computers!

## Subtraction Using 2's Complement

### Example: 9 - 4 in binary (using 4 bits)
1. 9₁₀ = 1001₂
2. 4₁₀ = 0100₂
3. 2's complement of 0100 = 1011 + 1 = 1100
4. Add: 1001 + 1100 = 10101
5. Discard overflow (leftmost 1): **0101₂ = 5₁₀** ✓

## Signed Magnitude
- **MSB (leftmost bit)** represents sign: 0 = positive, 1 = negative
- Remaining bits represent magnitude
- Example: 1101 = -5 (if 4-bit signed magnitude)
        `,
        notes: "2's complement is THE method computers use for negative numbers. The beauty: you add instead of subtract!",
        memoryTrick: "**2's TRICK**: '**Flip and add ONE**' - First flip all bits (1's comp), then add 1 (2's comp). Simple!",
        formula: "1's complement: Flip all bits\n2's complement: 1's complement + 1",
        examTip: "For subtraction, always use 2's complement method. Show: original → 1's comp → add 1 → add to first number → discard carry.",
        practice: [
          {
            id: "q1",
            question: "What is the 2's complement of 0110₂?",
            options: ["1001₂", "1010₂", "1011₂", "1000₂"],
            correctAnswer: 1,
            hint: "First find 1's complement (flip bits), then add 1",
            explanation: "1's comp of 0110 = 1001. Add 1: 1001 + 1 = 1010₂"
          },
          {
            id: "q2",
            question: "Using 2's complement, calculate 7 - 3 (in 4-bit binary)",
            options: ["0100₂", "0011₂", "0101₂", "0010₂"],
            correctAnswer: 0,
            hint: "7=0111, 3=0011. Find 2's comp of 3, then add to 7",
            explanation: "7=0111₂, 2's comp of 3: 0011→1100→1101. Add: 0111+1101=10100. Discard carry: 0100₂ = 4₁₀"
          }
        ]
      },
      {
        id: "bcd-gray",
        title: "BCD and Gray Codes",
        content: `
# BCD and Gray Codes

## BCD (Binary Coded Decimal)
**Definition**: Each decimal digit is represented by 4 binary bits.

### BCD Encoding Table
| Decimal | BCD Code |
|---------|----------|
| 0       | 0000     |
| 1       | 0001     |
| 2       | 0010     |
| 3       | 0011     |
| 4       | 0100     |
| 5       | 0101     |
| 6       | 0110     |
| 7       | 0111     |
| 8       | 1000     |
| 9       | 1001     |

### Example: 95₁₀ in BCD
- 9 → 1001
- 5 → 0101
- Result: **1001 0101**BCD

**Note**: BCD uses only 0-9 (1010-1111 are invalid in BCD)

## Gray Code
**Definition**: Only ONE bit changes between consecutive numbers.

### Binary vs Gray Code
| Decimal | Binary | Gray |
|---------|--------|------|
| 0       | 0000   | 0000 |
| 1       | 0001   | 0001 |
| 2       | 0010   | 0011 |
| 3       | 0011   | 0010 |
| 4       | 0100   | 0110 |
| 5       | 0101   | 0111 |

**Advantage**: Reduces errors in mechanical/optical sensors (rotary encoders).

## Binary to Gray Conversion
1. Keep the MSB (leftmost bit) same
2. XOR each bit with the bit to its left

### Example: 1011₂ → Gray
- MSB: **1** (keep)
- 1 XOR 0 = **1**
- 0 XOR 1 = **1**
- 1 XOR 1 = **0**
- Result: **1110**Gray

## Gray to Binary Conversion
1. Keep MSB same
2. XOR Gray bit with previous Binary result

### Example: 1110Gray → Binary
- MSB: **1** (keep)
- 1 XOR 1 = **0**
- 1 XOR 0 = **1**
- 0 XOR 1 = **1**
- Result: **1011₂**
        `,
        notes: "BCD is used in digital clocks and calculators. Gray code prevents glitches in rotating devices - only 1 bit flips at a time!",
        memoryTrick: "**BCD**: '**4 bits per digit**' - remember it rhymes!\n**GRAY CODE**: Think '**One at a time**' - only one bit changes!",
        formula: "Binary→Gray: Keep MSB, then XOR each adjacent pair\nGray→Binary: Keep MSB, then XOR accumulated",
        examTip: "In BCD, treat each decimal digit separately. In Gray code conversion, write XOR operations clearly for marks!",
        practice: [
          {
            id: "q1",
            question: "What is 47₁₀ in BCD?",
            options: ["0100 0111", "0100 1000", "0101 0111", "0011 0111"],
            correctAnswer: 0,
            hint: "Convert each decimal digit separately: 4→0100, 7→0111",
            explanation: "47₁₀ in BCD: 4=0100, 7=0111. Answer: 0100 0111BCD"
          },
          {
            id: "q2",
            question: "Convert binary 1101₂ to Gray code",
            options: ["1011", "1001", "1010", "1111"],
            correctAnswer: 0,
            hint: "Keep MSB(1), then: 1⊕1=0, 1⊕0=1, 0⊕1=1",
            explanation: "1101₂→Gray: MSB=1, 1⊕1=0, 1⊕0=1, 0⊕1=1. Result: 1011Gray"
          }
        ]
      }
    ],
    quizQuestions: [
      {
        id: "q1",
        question: "What is 63₁₀ in binary?",
        options: ["111111₂", "111110₂", "111011₂", "101111₂"],
        correctAnswer: 0,
        explanation: "63₁₀ = 111111₂ (2⁶-1 = 64-1 = 63)"
      },
      {
        id: "q2",
        question: "Convert 101110₂ to octal",
        options: ["56₈", "46₈", "66₈", "36₈"],
        correctAnswer: 0,
        explanation: "Group in 3s: 101 110 = 5 6 = 56₈"
      },
      {
        id: "q3",
        question: "What is the 2's complement of 10110₂?",
        options: ["01010₂", "01001₂", "01011₂", "01100₂"],
        correctAnswer: 0,
        explanation: "1's comp: 01001, add 1: 01010₂"
      },
      {
        id: "q4",
        question: "Which number system uses A-F?",
        options: ["Binary", "Octal", "Hexadecimal", "Decimal"],
        correctAnswer: 2,
        explanation: "Hexadecimal (base-16) uses 0-9 and A-F"
      },
      {
        id: "q5",
        question: "What is 1010₂ + 1101₂?",
        options: ["10111₂", "11011₂", "10011₂", "11000₂"],
        correctAnswer: 0,
        explanation: "Add with carries: 1010 + 1101 = 10111₂ (10+13=23)"
      },
      {
        id: "q6",
        question: "In BCD, how many bits represent one decimal digit?",
        options: ["2", "4", "8", "16"],
        correctAnswer: 1,
        explanation: "BCD uses 4 bits per decimal digit"
      },
      {
        id: "q7",
        question: "What is special about Gray code?",
        options: ["Uses 3 bits", "Only 1 bit changes at a time", "Can't represent zero", "Only for negative numbers"],
        correctAnswer: 1,
        explanation: "Gray code changes only one bit between consecutive numbers"
      },
      {
        id: "q8",
        question: "Convert F₁₆ to decimal",
        options: ["10", "15", "16", "14"],
        correctAnswer: 1,
        explanation: "F in hexadecimal = 15₁₀"
      },
      {
        id: "q9",
        question: "What is 89₁₀ in BCD?",
        options: ["1000 1001", "1001 1000", "1000 1000", "1001 1001"],
        correctAnswer: 0,
        explanation: "8=1000, 9=1001, so 89BCD = 1000 1001"
      },
      {
        id: "q10",
        question: "Which is NOT a valid octal digit?",
        options: ["7", "8", "6", "5"],
        correctAnswer: 1,
        explanation: "Octal uses 0-7 only, 8 is not valid"
      }
    ]
  },
  // Topic 2: Boolean Algebra will be added in next file
];
