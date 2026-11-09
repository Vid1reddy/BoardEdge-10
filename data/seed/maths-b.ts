export default {
  "code": "maths",
  "name": "Mathematics",
  "bookName": "NCERT Mathematics",
  "weightageMarks": 80,
  "chapters": [
    {
      "number": 5,
      "title": "Arithmetic Progressions",
      "summary": "This chapter introduces arithmetic progressions, lists of numbers in which each term after the first is obtained by adding a fixed common difference to the preceding term. It develops the nth term formula a_n = a + (n-1)d and the sum formula S_n = n/2 (2a + (n-1)d), and shows how to find any term, the number of terms, or the sum. It then applies these formulas to real-life situations such as salary increments, weekly savings, cash prizes and stacked logs. The chapter builds the foundation for the study of sequences and series in higher classes.",
      "weightageMarks": 5,
      "difficulty": "medium",
      "hotTopics": [
        "Identifying an AP and finding the common difference",
        "nth term formula a_n = a + (n-1)d",
        "Sum formulas S_n = n/2 (2a + (n-1)d) and S_n = n/2 (a + l)",
        "Relation a_n = S_n - S_(n-1)",
        "Word problems: prizes, savings, salary increments, stacked logs",
        "Counting numbers divisible by a given integer between two limits"
      ],
      "sections": [
        {
          "heading": "Sequences and the Definition of an AP",
          "points": [
            "A sequence is an ordered list of numbers that follows a definite pattern, and each number in it is called a term; the terms are written a1, a2, a3, ... and the nth term is a_n.",
            "An arithmetic progression (AP) is a list of numbers in which each term is obtained by adding a fixed number to the preceding term, except the first term.",
            "This fixed number is called the common difference d, given by d = a_k - a_(k-1) for any k; it can be positive, negative or zero.",
            "Examples: 2, 7, 12, 17 is an AP with d = 5; 100, 90, 80 is an AP with d = -10; 3.5, 3.5, 3.5 is an AP with d = 0.",
            "To test whether a given list is an AP, check that a2 - a1 = a3 - a2 = a4 - a3 and so on; all the consecutive differences must be equal.",
            "Lists like 1, 4, 9, 16 (perfect squares) or 2, 4, 8, 16 (powers of 2) are not APs because the differences 3, 5, 7 or 2, 4, 8 are not constant.",
            "APs model real situations: a fixed monthly salary increment, savings growing by a fixed amount every week, and rows of seats or logs changing by a fixed number."
          ],
          "keyTerms": [
            { "term": "Sequence", "meaning": "An ordered list of numbers formed according to a definite rule or pattern." },
            { "term": "Arithmetic Progression (AP)", "meaning": "A sequence in which each term after the first is obtained by adding a fixed constant to the previous term." },
            { "term": "Common difference", "meaning": "The fixed number d added at each step of an AP, computed as a_k - a_(k-1); it may be positive, negative or zero." },
            { "term": "Finite and infinite AP", "meaning": "An AP with a fixed number of terms and a last term, versus one that continues indefinitely." }
          ],
          "trick": "AP = Always Preceding Plus d: before calling any list an AP, test a2 - a1 = a3 - a2; one unequal gap disqualifies it.",
          "examPointer": "Identifying an AP and finding d (remember d = 0 and negative d are allowed) is a frequent 1-2 mark question in boards."
        },
        {
          "heading": "The nth Term of an AP",
          "points": [
            "The general AP with first term a and common difference d is a, a + d, a + 2d, a + 3d, ...",
            "The nth term (general term) is a_n = a + (n-1)d, because only n-1 additions of d are needed to reach the nth term from the first.",
            "Worked example: the 10th term of 2, 7, 12, ... is a_10 = 2 + 9(5) = 47.",
            "The nth term from the end of a finite AP with last term l is l - (n-1)d, since we count backwards with the same step d.",
            "To find which term of an AP equals a given value, solve a + (n-1)d = value for n; n must be a positive integer, otherwise the value is not a term of the AP.",
            "If a_n is given by a formula in n, the terms form an AP exactly when a_n is linear in n, and the coefficient of n is the common difference; for example a_n = 6n + 2 gives d = 6.",
            "Three consecutive terms of an AP can be written as a - d, a, a + d, where a is the middle term; this symmetric representation simplifies many problems."
          ],
          "keyTerms": [
            { "term": "General term (a_n)", "meaning": "The formula a_n = a + (n-1)d giving any term of an AP from its first term and common difference." },
            { "term": "Last term (l)", "meaning": "The final term of a finite AP, equal to a + (n-1)d when there are n terms." },
            { "term": "nth term from the end", "meaning": "Counting backwards from the last term, it equals l - (n-1)d for an AP with last term l." }
          ],
          "trick": "Count JUMPS, not terms: from a1 to a10 there are 9 jumps of size d, so a_10 = a + 9d.",
          "examPointer": "Finding a stated term, finding n for a given term, and nth term from the end are standard 2-3 markers; always check that n comes out a natural number."
        },
        {
          "heading": "Sum of the First n Terms of an AP",
          "points": [
            "The sum of the first n terms is S_n = n/2 (2a + (n-1)d); when the last term l = a_n is known, this becomes S_n = n/2 (a + l).",
            "Idea behind the formula (Gauss): write the sum forwards and backwards, add term by term, and each pair gives (a + l), so n/2 copies give S_n = n/2 (a + l).",
            "Classic check: 1 + 2 + ... + 100 = 100/2 (1 + 100) = 5050.",
            "The sum of the first 20 natural numbers is 20/2 (1 + 20) = 210.",
            "For n greater than 1, the nth term is the difference of consecutive sums: a_n = S_n - S_(n-1), and the first term is simply a = S_1.",
            "If S_n is a quadratic expression in n, then a_n = S_n - S_(n-1) comes out linear in n, confirming that the terms form an AP.",
            "To find how many terms give a required sum, put S_n equal to that value and solve for n; reject any non-positive or non-integer root.",
            "Example: for the AP 10, 6, 2, ... the sum of 16 terms is S_16 = 16/2 (20 + 15(-4)) = 8(20 - 60) = -320, showing that sums of APs can be negative."
          ],
          "keyTerms": [
            { "term": "S_n", "meaning": "The sum of the first n terms of an AP, given by S_n = n/2 (2a + (n-1)d) or S_n = n/2 (a + l)." },
            { "term": "a_n = S_n - S_(n-1)", "meaning": "Relation giving the nth term as the difference of the sums of n and n-1 terms, valid for n greater than 1." },
            { "term": "l", "meaning": "The last term of a finite AP, equal to a + (n-1)d when the AP has n terms." }
          ],
          "trick": "Pair from the ENDS: S_n = n/2 (first + last). If the last term is unknown use the 2a + (n-1)d version, and remember a = S_1 when only S_n is given.",
          "examPointer": "Sum word problems (prizes, savings, log stacks, rows of seats) are the most common 3-5 markers of this chapter, and a_n = S_n - S_(n-1) is a repeated 2 marker."
        },
        {
          "heading": "Standard Results and Properties of APs",
          "points": [
            "Theorem 5.1 of NCERT: in the AP a, a + d, a + 2d, ..., the nth term is a_n = a + (n-1)d, proved by observing that exactly one d is added at each of the n-1 steps.",
            "If a constant k is added to or subtracted from every term of an AP, the resulting list is also an AP with the same common difference.",
            "If every term of an AP is multiplied by a constant k, the result is an AP with common difference kd.",
            "The term-by-term sum or difference of two APs with the same number of terms is again an AP.",
            "In any AP, terms equidistant from the two ends have a constant sum: a_k + a_(n+1-k) = a + l for every k; for example a_1 + a_n = a_2 + a_(n-1).",
            "To choose k terms of an AP with a known middle value, write them symmetrically: 3 terms as a - d, a, a + d and 4 terms as a - 3d, a - d, a + d, a + 3d.",
            "These symmetric choices reduce equations instantly: the sum of 3 such terms is 3a and the sum of 4 such terms is 4a, giving a at once."
          ],
          "keyTerms": [
            { "term": "Symmetric representation", "meaning": "Writing consecutive AP terms around a middle term as a - d, a, a + d so that their sum is known immediately." },
            { "term": "End-sum property", "meaning": "In an AP, a_k + a_(n+1-k) is the same for all k, equal to the sum of the first and last terms." },
            { "term": "Linear transformation", "meaning": "Adding a constant to every term keeps d unchanged; multiplying every term by k changes d to kd." }
          ],
          "trick": "Middle-term magic: for 3 terms write a - d, a, a + d; their sum is 3a instantly. For 4 terms use the wider spacing a - 3d, a - d, a + d, a + 3d.",
          "examPointer": "Questions like the sum of the 4th and 8th terms become 2a + 10d at once; spotting such reductions saves crucial minutes in 3-5 markers."
        },
        {
          "heading": "Worked Strategy for Board Problems",
          "points": [
            "Step 1: read the problem and translate every condition into AP language; the 5th term is 20 means a + 4d = 20.",
            "Step 2: convert each condition into an equation in a and d; the sum of the first 10 terms is 120 means 10/2 (2a + 9d) = 120, that is 5(2a + 9d) = 120.",
            "Step 3: solve the two linear equations simultaneously to get a and d, then answer whatever is asked: a particular term, the value of n, or S_n.",
            "Counting problems: integers divisible by k between two limits form the AP first, first + k, ..., last, and the count is n = (last - first)/k + 1.",
            "Money problems: take the first prize or the first weekly saving as a and the decrease or increase as d, then apply a_n or S_n as the question demands.",
            "Sanity check: answers must be realistic; a non-integer n or a negative term where a positive one is expected means the setup is wrong.",
            "Always verify by computing the first two or three terms from your values of a and d and matching them with the given conditions."
          ],
          "keyTerms": [
            { "term": "Translation into equations", "meaning": "Converting each sentence of a word problem into a linear equation in a and d." },
            { "term": "Simultaneous equations", "meaning": "The usual pair of equations in a and d that arises from the two conditions of a 5-mark problem." },
            { "term": "Verification", "meaning": "Recomputing the first few terms to confirm that the found a and d satisfy all given conditions." }
          ],
          "trick": "Never guess terms one by one: convert each sentence to an equation in a and d first, solve the pair, and only then list the terms.",
          "examPointer": "A typical 5-mark word problem hides exactly two conditions; writing both as equations in a and d and showing the elimination steps secures most of the marks."
        },
        {
          "heading": "Common Mistakes and Exam Traps",
          "points": [
            "Using a + nd instead of a + (n-1)d is the most common error; the 10th term needs 9 jumps, not 10.",
            "Confusing S_n with a_n: the first term is a = S_1, not S_1 - S_0, and a_n = S_n - S_(n-1) is valid only for n greater than 1.",
            "Taking d = a2/a1 instead of d = a2 - a1; the common difference is a difference, never a ratio.",
            "Sign slips with negative d: the 30th term of 10, 7, 4, ... is 10 + 29(-3) = -77, not 77.",
            "In which-term questions, forgetting to check that n is a natural number; a fractional or negative n means the value is not a term of the AP.",
            "Discarding feasible roots wrongly in stack problems: both n = 16 and n = 25 may satisfy the quadratic, but only the n whose terms stay positive is acceptable.",
            "Losing step marks by not writing the formula before substitution, and forgetting units or a final statement in word problems."
          ],
          "keyTerms": [
            { "term": "Off-by-one error", "meaning": "Using n instead of n - 1 in a_n = a + (n-1)d, which shifts every answer by one common difference." },
            { "term": "Feasible root", "meaning": "The value of n that is a positive integer and keeps every term of the AP meaningful." },
            { "term": "Step marking", "meaning": "CBSE awards marks for formulas and intermediate steps, so a wrong final answer with correct working still earns most marks." }
          ],
          "trick": "Say the mantra before every substitution: nth term = first term + (n minus 1) jumps. Nine jumps for the 10th term, twenty-nine for the 30th.",
          "examPointer": "Examiners look explicitly for the written formula before substitution; a missing a_n or S_n formula usually costs a full mark even with correct arithmetic."
        }
      ],
      "mcqs": [
        {
          "question": "The 10th term of the AP 2, 7, 12, 17, ... is",
          "options": ["45", "47", "52", "57"],
          "answerIndex": 1,
          "explanation": "Here a = 2 and d = 5, so a_10 = a + 9d = 2 + 45 = 47.",
          "difficulty": "easy"
        },
        {
          "question": "The 30th term of the AP 10, 7, 4, ... is",
          "options": ["97", "77", "-77", "-80"],
          "answerIndex": 2,
          "explanation": "With d = -3, a_30 = 10 + 29(-3) = 10 - 87 = -77.",
          "difficulty": "medium",
          "pyq": "CBSE 2020"
        },
        {
          "question": "Which of the following lists of numbers forms an AP?",
          "options": ["1, 4, 9, 16", "2, 4, 8, 16", "1.4, 2.4, 3.4, 4.4", "1, 3, 6, 10"],
          "answerIndex": 2,
          "explanation": "The differences in 1.4, 2.4, 3.4, 4.4 are all 1.0; the other lists have unequal gaps (3, 5, 7; 2, 4, 8; 2, 3, 4).",
          "difficulty": "easy"
        },
        {
          "question": "The 11th term from the end of the AP 10, 7, 4, ..., -62 is",
          "options": ["-32", "-35", "-29", "-38"],
          "answerIndex": 0,
          "explanation": "The nth term from the end is l - (n-1)d = -62 - 10(-3) = -62 + 30 = -32.",
          "difficulty": "medium"
        },
        {
          "question": "Which term of the AP 21, 18, 15, ... is zero?",
          "options": ["7th", "8th", "9th", "10th"],
          "answerIndex": 1,
          "explanation": "21 + (n-1)(-3) = 0 gives (n-1) = 7, so n = 8; the 8th term is zero.",
          "difficulty": "medium",
          "pyq": "CBSE 2020"
        },
        {
          "question": "The sum of the first 20 natural numbers is",
          "options": ["180", "200", "210", "220"],
          "answerIndex": 2,
          "explanation": "Using S_n = n/2 (a + l) with a = 1 and l = 20: S = 20/2 (21) = 210.",
          "difficulty": "easy"
        },
        {
          "question": "If S_n = 3n^2 + 5n denotes the sum of n terms of an AP, its common difference is",
          "options": ["3", "5", "6", "8"],
          "answerIndex": 2,
          "explanation": "a_n = S_n - S_(n-1) = 6n + 2, which is linear in n with coefficient 6, so d = 6.",
          "difficulty": "hard"
        },
        {
          "question": "How many two-digit numbers are divisible by 3?",
          "options": ["28", "29", "30", "31"],
          "answerIndex": 2,
          "explanation": "They form the AP 12, 15, ..., 99 with d = 3; n = (99 - 12)/3 + 1 = 30.",
          "difficulty": "medium"
        },
        {
          "question": "In an AP, if a = 3.5, d = 0 and n = 101, then a_n is",
          "options": ["0", "3.5", "103.5", "353.5"],
          "answerIndex": 1,
          "explanation": "When d = 0 every term equals the first term, so a_101 = 3.5.",
          "difficulty": "easy"
        },
        {
          "question": "If 7 times the 7th term of an AP is equal to 11 times its 11th term, then the 18th term of the AP is",
          "options": ["0", "7", "11", "18"],
          "answerIndex": 0,
          "explanation": "7(a + 6d) = 11(a + 10d) simplifies to 4a + 68d = 0, that is a + 17d = 0, and a_18 = a + 17d = 0.",
          "difficulty": "hard",
          "pyq": "CBSE 2019"
        },
        {
          "question": "The sum of the first 16 terms of the AP 10, 6, 2, ... is",
          "options": ["-320", "-160", "160", "320"],
          "answerIndex": 0,
          "explanation": "S_16 = 16/2 (2(10) + 15(-4)) = 8(20 - 60) = -320.",
          "difficulty": "medium"
        },
        {
          "question": "The common difference of an AP in which a_18 - a_14 = 32 is",
          "options": ["4", "8", "16", "32"],
          "answerIndex": 1,
          "explanation": "a_18 - a_14 = (a + 17d) - (a + 13d) = 4d = 32, so d = 8.",
          "difficulty": "medium",
          "pyq": "CBSE 2017"
        }
      ],
      "boardQuestions": [
        {
          "question": "Which term of the AP 3, 8, 13, 18, ... is 78?",
          "marks": 2,
          "type": "SA",
          "probability": "very-high",
          "answer": "1) For the AP 3, 8, 13, 18, ..., the first term is a = 3 and the common difference is d = 8 - 3 = 5. 2) Let 78 be the nth term, so a + (n-1)d = 78. 3) Substituting: 3 + (n-1)(5) = 78, which gives (n-1)(5) = 75, so n - 1 = 15 and n = 16. 4) Verification: a_16 = 3 + 15(5) = 3 + 75 = 78, which is correct. 5) Hence 78 is the 16th term of the given AP."
        },
        {
          "question": "Find how many integers between 200 and 500 are divisible by 8.",
          "marks": 3,
          "type": "SA",
          "probability": "high",
          "answer": "1) The integers between 200 and 500 that are divisible by 8 form the AP 208, 216, 224, ..., 496, because 200 itself is excluded and 208 is the first multiple of 8 after 200, while 496 is the last multiple of 8 before 500. 2) Here a = 208, d = 8 and the last term is 496. 3) Using a_n = a + (n-1)d: 208 + (n-1)(8) = 496, so (n-1)(8) = 288, giving n - 1 = 36 and n = 37. 4) Verification: the average term is (208 + 496)/2 = 352, and the sum is 37 x 352 = 13024, which matches S_n = 37/2 (208 + 496) = 13024. 5) Therefore 37 integers between 200 and 500 are divisible by 8."
        },
        {
          "question": "The sum of the 4th and 8th terms of an AP is 24 and the sum of the 6th and 10th terms is 44. Find the first three terms of the AP.",
          "marks": 5,
          "type": "LA",
          "probability": "very-high",
          "answer": "1) Let the first term be a and the common difference be d. 2) a_4 + a_8 = (a + 3d) + (a + 7d) = 2a + 10d = 24, so dividing by 2 gives a + 5d = 12. 3) a_6 + a_10 = (a + 5d) + (a + 9d) = 2a + 14d = 44, so a + 7d = 22. 4) Subtracting the first equation from the second: 2d = 10, so d = 5. 5) Substituting d = 5 in a + 5d = 12 gives a = 12 - 25 = -13. 6) The first three terms are a = -13, a + d = -8 and a + 2d = -3. 7) Check: a_4 = -13 + 15 = 2 and a_8 = -13 + 35 = 22, and 2 + 22 = 24 as given; also a_6 = -13 + 25 = 12 and a_10 = -13 + 45 = 32, and 12 + 32 = 44 as given. Hence the AP is -13, -8, -3, 2, ..."
        },
        {
          "question": "A sum of Rs 700 is to be used to give seven cash prizes to students of a school for their overall academic performance. If each prize is Rs 20 less than its preceding prize, find the value of each of the seven prizes.",
          "marks": 5,
          "type": "LA",
          "probability": "high",
          "answer": "1) Let the first prize be Rs a; then the prizes form the AP a, a - 20, a - 40, ..., a - 120 with common difference d = -20 and n = 7. 2) Using S_n = n/2 (2a + (n-1)d): S_7 = 7/2 (2a + 6(-20)) = 700. 3) This gives 7/2 (2a - 120) = 700, so 7(2a - 120) = 1400, hence 2a - 120 = 200 and 2a = 320, giving a = 160. 4) The seven prizes are therefore Rs 160, 140, 120, 100, 80, 60 and 40. 5) Verification: 160 + 140 + 120 + 100 + 80 + 60 + 40 = 700, and each prize is exactly Rs 20 less than the previous one, so both conditions of the problem are satisfied."
        },
        {
          "question": "Read the source and answer the questions: A transport company stacks wooden logs in rows, one above the other. The bottom row contains 20 logs, the next row contains 19 logs, the next contains 18 logs, and so on, each row having one log less than the row below it. One particular stack contains exactly 200 logs. (a) Write the AP formed by the numbers of logs in the rows and the condition on its sum. (b) How many rows does the stack have? (c) How many logs are there in the top row?",
          "marks": 5,
          "type": "CASE",
          "probability": "high",
          "answer": "(a) The numbers of logs row by row form the AP 20, 19, 18, 17, ... with a = 20 and d = -1; the condition is S_n = 200, that is n/2 (2(20) + (n-1)(-1)) = 200. (b) Simplifying: n/2 (40 - n + 1) = 200, so n(41 - n) = 400, which gives n^2 - 41n + 400 = 0. Factoring: (n - 16)(n - 25) = 0, so n = 16 or n = 25. For n = 25, the 25th row would contain 20 + 24(-1) = -4 logs, which is impossible, so n = 25 is rejected. Hence the stack has 16 rows. (c) The top (16th) row contains 20 + 15(-1) = 5 logs. Check: S_16 = 16/2 (20 + 5) = 8 x 25 = 200, matching the given total."
        },
        {
          "question": "Read the source and answer the questions: Ramkali saved Rs 5 in the first week of a year and then increased her weekly savings by Rs 1.75 every week. After the nth week, her weekly savings became Rs 20.75. (a) Write the AP formed by her weekly savings. (b) Find the value of n. (c) Find her total savings in these n weeks.",
          "marks": 4,
          "type": "CASE",
          "probability": "medium",
          "answer": "(a) Her weekly savings form the AP 5, 6.75, 8.50, 10.25, ... with first term a = 5 and common difference d = 1.75. (b) Using a_n = a + (n-1)d: 5 + (n-1)(1.75) = 20.75, so (n-1)(1.75) = 15.75, giving n - 1 = 9 and n = 10; thus in the 10th week her weekly saving is Rs 20.75. (c) Her total savings in these 10 weeks are S_10 = 10/2 (a + a_10) = 5(5 + 20.75) = 5 x 25.75 = Rs 128.75. Check: the 10 terms run from 5 to 20.75 in equal steps of 1.75, and their average is (5 + 20.75)/2 = 12.875, so the sum is 10 x 12.875 = 128.75, confirming the answer."
        }
      ]
    },
    {
      "number": 6,
      "title": "Triangles",
      "summary": "This chapter develops the idea of similar figures and the precise conditions under which two triangles are similar. It states and proves the Basic Proportionality Theorem (Thales theorem) along with its converse, and presents the AA, SSS and SAS criteria for similarity of triangles. It proves that the ratio of the areas of two similar triangles equals the ratio of the squares of their corresponding sides, and concludes with the Pythagoras theorem and its converse proved using similarity. These results are applied to find unknown lengths and to solve ladder, pole and shadow problems.",
      "weightageMarks": 8,
      "difficulty": "medium",
      "hotTopics": [
        "Basic Proportionality Theorem (Thales) and its converse",
        "Similarity criteria: AA, SSS and SAS",
        "Ratio of areas of similar triangles equals the square of the side ratio",
        "Pythagoras theorem a^2 + b^2 = c^2 and its similarity proof",
        "Converse of Pythagoras and right-angle checks",
        "Ladder, pole and shadow problems using similar right triangles"
      ],
      "sections": [
        {
          "heading": "Similar Figures and the Definition of Similar Triangles",
          "points": [
            "Two figures having the same shape but not necessarily the same size are called similar figures; congruent figures are similar figures whose corresponding sides are actually equal.",
            "All circles, all squares and all equilateral triangles are similar to one another, whatever their sizes.",
            "Two polygons of the same number of sides are similar if (i) their corresponding angles are equal and (ii) their corresponding sides are in the same ratio, that is proportional.",
            "For example, two rectangles are similar only when the ratio of length to breadth is the same for both; equal angles alone are not enough for quadrilaterals.",
            "Two triangles are similar if their corresponding angles are equal and their corresponding sides are proportional; the symbol ~ is used, as in triangle ABC ~ triangle DEF.",
            "The order of letters matters: triangle ABC ~ triangle DEF means A corresponds to D, B to E and C to F, so AB/DE = BC/EF = CA/FD.",
            "For triangles the two conditions are not independent: if the corresponding angles are equal, the sides are automatically proportional, which is why a single angle-angle test suffices."
          ],
          "keyTerms": [
            { "term": "Similar figures", "meaning": "Figures with the same shape, possibly different sizes, whose corresponding measurements are proportional." },
            { "term": "Congruent figures", "meaning": "Figures identical in both shape and size; congruence is similarity with ratio 1." },
            { "term": "Corresponding sides", "meaning": "Sides that face equal angles in two similar triangles; their ratios are all equal." },
            { "term": "Similarity symbol (~)", "meaning": "Notation showing which vertices of two triangles correspond, written in matching order." }
          ],
          "trick": "CONGRUENT means clones (same shape, same size); SIMILAR means same shape, scaled size. Polygons need both angle equality and side proportion, but for triangles angles alone decide.",
          "examPointer": "Stating the two conditions for similarity of polygons and the meaning of triangle ABC ~ triangle DEF is a repeated 1-2 mark theory question."
        },
        {
          "heading": "Basic Proportionality Theorem (Thales Theorem) and its Converse",
          "points": [
            "Statement (BPT): if a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.",
            "In triangle ABC, if DE || BC with D on AB and E on AC, then AD/DB = AE/EC; equivalently AD/AB = AE/AC and DB/AB = EC/AC.",
            "Proof sketch: join BE and CD, and draw EN perpendicular to AB and DM perpendicular to AC; triangles BDE and CDE stand on the same base DE between the same parallels DE and BC, so ar(BDE) = ar(CDE); comparing ar(ADE) with each gives AD/DB = AE/EC.",
            "Converse statement: if a line divides any two sides of a triangle in the same ratio, then the line is parallel to the third side.",
            "Proof idea of the converse: draw through D a line DE' parallel to BC; BPT gives AD/DB = AE'/E'C, and the given ratio forces E' to coincide with E, so DE || BC.",
            "Corollary (intercept theorem): if three or more parallel lines are cut by two transversals, the parallel lines divide the transversals in the same ratio.",
            "Numerical use: in triangle ABC with DE || BC, AD = 2.4 cm, DB = 3.6 cm and AE = 3.2 cm gives EC from 2.4/3.6 = 3.2/EC, so EC = 4.8 cm.",
            "Midpoint link: the line through the midpoint of one side of a triangle, parallel to another side, bisects the third side; this midpoint theorem is a direct consequence of BPT."
          ],
          "keyTerms": [
            { "term": "Basic Proportionality Theorem", "meaning": "Thales theorem: a line parallel to one side of a triangle divides the other two sides in the same ratio." },
            { "term": "Converse of BPT", "meaning": "If a line cuts two sides of a triangle in the same ratio, it is parallel to the third side." },
            { "term": "Intercept theorem", "meaning": "Parallel lines cut off proportional segments on any two transversals." }
          ],
          "trick": "PARALLEL makes RATIOS EQUAL: DE || BC forces AD/DB = AE/EC. Never cross it as AD/DB = EC/AE.",
          "examPointer": "The proof of BPT using equal areas of triangles on the same base is one of the officially listed board proofs, and numerical 2-3 markers on AD/DB = AE/EC appear almost every year."
        },
        {
          "heading": "Criteria for Similarity of Triangles: AA, SSS and SAS",
          "points": [
            "AA (angle-angle) criterion: if two angles of one triangle are respectively equal to two angles of another triangle, the triangles are similar; the third pair of angles is then automatically equal by the angle sum property.",
            "SSS (side-side-side) criterion: if the corresponding sides of two triangles are in the same ratio, then the triangles are similar.",
            "SAS (side-angle-side) criterion: if one angle of a triangle is equal to one angle of another triangle and the sides including these angles are proportional, the triangles are similar.",
            "AA in action: in shadow problems the sun's rays make equal angles with the ground, so the triangles formed by a pole and its shadow, and by a stick and its shadow, are similar by AA.",
            "SSS in action: compute all three ratios AB/DE, BC/EF, AC/DF; if all equal k, the triangles are similar with scale factor k.",
            "SAS in action: the equal angle must be the angle INCLUDED between the two sides whose ratios are taken; using a non-included angle makes the test invalid.",
            "Once similarity is established, every pair of corresponding lengths (sides, medians, altitudes, angle bisectors and perimeters) is in the same ratio k.",
            "Typical configuration: two triangles on the same base or sharing an angle, with a parallel line creating equal alternate or corresponding angles, give similarity by AA."
          ],
          "keyTerms": [
            { "term": "AA criterion", "meaning": "Two pairs of equal corresponding angles make two triangles similar." },
            { "term": "SSS criterion", "meaning": "Three pairs of proportional corresponding sides make two triangles similar." },
            { "term": "SAS criterion", "meaning": "One pair of equal angles included between two pairs of proportional sides makes two triangles similar." },
            { "term": "Scale factor (k)", "meaning": "The common ratio of corresponding lengths of two similar figures." }
          ],
          "trick": "AA = two ANGLES agree; SSS = three SIDES in step; SAS = a real SANDWICH, the equal angle must sit between the two ratio sides.",
          "examPointer": "The criteria are stated with justification in the CBSE 2025-26 syllabus, not proved; the full proofs reserved for boards are BPT, the areas theorem and Pythagoras."
        },
        {
          "heading": "Areas of Similar Triangles",
          "points": [
            "Theorem: the ratio of the areas of two similar triangles is equal to the ratio of the squares of their corresponding sides.",
            "Formally, if triangle ABC ~ triangle DEF, then ar(ABC)/ar(DEF) = (AB/DE)^2 = (BC/EF)^2 = (AC/DF)^2.",
            "Proof sketch: draw altitudes AM to BC in triangle ABC and DN to EF in triangle DEF; right triangles ABM and DEN are similar by AA, so AM/DN = AB/DE; then ar(ABC)/ar(DEF) = (1/2 * BC * AM)/(1/2 * EF * DN) = (BC/EF) * (AB/DE) = (AB/DE)^2.",
            "Reason in words: when every length of a figure is scaled by k, the area scales by k^2 because two perpendicular dimensions are each multiplied by k.",
            "Numerical: if the sides of two similar triangles are in the ratio 4:9, their areas are in the ratio 16:81; conversely, areas in the ratio 25:36 give sides in the ratio 5:6.",
            "Related ratio: the perimeters of similar triangles are in the ratio k itself, not k^2, because perimeter is a length.",
            "The same linearity holds for altitudes, medians and angle bisectors: they scale by k, while areas scale by k^2.",
            "Mini-example: triangle ABC ~ triangle DEF with BC = 3 cm and EF = 5 cm gives ar(ABC)/ar(DEF) = (3/5)^2 = 9/25."
          ],
          "keyTerms": [
            { "term": "Areas theorem", "meaning": "The ratio of areas of two similar triangles equals the ratio of the squares of any pair of corresponding sides." },
            { "term": "Square scaling", "meaning": "Lengths scale by k while areas scale by k^2 under uniform enlargement." },
            { "term": "Perimeter ratio", "meaning": "The ratio of perimeters of similar triangles equals the side ratio k." }
          ],
          "trick": "Sides go k, AREAS go k^2: doubling every side multiplies the area by 4. To convert an area ratio back to a side ratio, take the square root.",
          "examPointer": "The proof of the areas theorem using two altitudes and AA is an official board proof, and quick numericals like sides 4:9 giving areas 16:81 are repeated 1-2 markers."
        },
        {
          "heading": "Pythagoras Theorem and its Converse",
          "points": [
            "Statement: in a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides; if the right angle is at B in triangle ABC, then AC^2 = AB^2 + BC^2, often written as a^2 + b^2 = c^2 where c is the hypotenuse.",
            "Official proof via similarity: in right triangle ABC with the right angle at B, drop BD perpendicular to the hypotenuse AC.",
            "Triangles ADB and ABC share angle A and both contain a right angle, so triangle ADB ~ triangle ABC by AA, giving AD/AB = AB/AC, hence AB^2 = AD * AC.",
            "Triangles BDC and BAC share angle C and both contain a right angle, so triangle BDC ~ triangle BAC by AA, giving BC/AC = DC/BC, hence BC^2 = DC * AC.",
            "Adding the two results: AB^2 + BC^2 = AC(AD + DC) = AC * AC = AC^2, which proves the theorem.",
            "Converse: if in a triangle the square of one side equals the sum of the squares of the other two sides, the angle opposite the first side is a right angle; for example 6, 8, 10 form a right triangle since 36 + 64 = 100.",
            "Standard Pythagorean triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25, 9-40-41, and all multiples such as 6-8-10, 9-12-15 and 10-24-26.",
            "Applications: a 25 m ladder with its foot 7 m from a wall reaches sqrt(625 - 49) = 24 m high, and poles of heights 6 m and 11 m with feet 12 m apart have tops 13 m apart because sqrt(12^2 + 5^2) = 13."
          ],
          "keyTerms": [
            { "term": "Pythagoras theorem", "meaning": "In a right triangle, a^2 + b^2 = c^2, where c is the hypotenuse and a, b are the other two sides." },
            { "term": "Hypotenuse", "meaning": "The longest side of a right triangle, lying opposite the right angle." },
            { "term": "Pythagorean triple", "meaning": "Three positive integers a, b, c satisfying a^2 + b^2 = c^2, such as 3, 4, 5." },
            { "term": "Converse of Pythagoras", "meaning": "If a^2 + b^2 = c^2 holds for the sides of a triangle, the angle opposite side c is a right angle." }
          ],
          "trick": "Spot the SQUARE side: test the two smaller squares against the biggest (36 + 64 = 100 for 6-8-10). The triples 3-4-5 and 5-12-13 solve most ladder and pole numericals.",
          "examPointer": "The similarity proof of Pythagoras is a favourite 5-marker; converse-based checks and ladder or pole numericals of 2-3 marks appear regularly, often inside case studies."
        },
        {
          "heading": "Worked Strategy and Common Mistakes",
          "points": [
            "Strategy: before writing any ratio, mark the equal angles and parallel lines on the figure and state the similarity in the correct vertex order, for example triangle ADE ~ triangle ABC.",
            "Strategy: name the criterion used (AA, SSS or SAS) explicitly; the marking scheme allots a step for the criterion and a separate step for the ratio statement.",
            "Common mistake: crossing the BPT ratio as AD/DB = EC/AE; the correct forms are AD/DB = AE/EC and AD/AB = AE/AC.",
            "Common mistake: using the side ratio k for areas; areas need k^2, and converting an area ratio back to a side ratio requires a square root.",
            "Common mistake: applying a^2 + b^2 = c^2 without identifying the hypotenuse; the largest side must stand alone on one side of the equation.",
            "Common mistake: assuming any two isosceles or right triangles are similar; only equilateral triangles are similar by shape alone, and right triangles need a shared acute angle or a proportional side pair.",
            "Strategy: in converse-Pythagoras answers, always state which angle is 90 degrees, namely the angle opposite the largest side, and verify with exact squares.",
            "Strategy: for an unknown length, set up the smallest pair of triangles containing it, prove their similarity, and read off a single ratio equation."
          ],
          "keyTerms": [
            { "term": "Vertex order", "meaning": "Writing the similarity statement with corresponding vertices in matching positions so ratios can be read off safely." },
            { "term": "Cross-ratio error", "meaning": "Writing AD/DB = EC/AE instead of AD/DB = AE/EC, the most common BPT error." },
            { "term": "Hypotenuse check", "meaning": "Confirming that the largest side is treated as c before applying a^2 + b^2 = c^2." }
          ],
          "trick": "Write the similarity sentence FIRST (triangle PQR ~ triangle XYZ), then read the ratio letters in the same positions; this kills every crossed-ratio error.",
          "examPointer": "The most penalised errors are crossed BPT ratios and a missing criterion statement; write a phrase like By AA similarity before every ratio equation to bank step marks."
        }
      ],
      "mcqs": [
        {
          "question": "Which of the following pairs of figures is always similar?",
          "options": ["Any two isosceles triangles", "Any two equilateral triangles", "Any two rectangles", "Any two rhombuses"],
          "answerIndex": 1,
          "explanation": "All equilateral triangles have angles 60, 60, 60 and proportional sides; isosceles triangles, rectangles and rhombuses can have different angles or side ratios.",
          "difficulty": "easy"
        },
        {
          "question": "The Basic Proportionality Theorem is also known as",
          "options": ["Pythagoras theorem", "Thales theorem", "The midpoint theorem", "Euclid's division lemma"],
          "answerIndex": 1,
          "explanation": "The BPT, attributed to Thales, states that a line parallel to one side of a triangle divides the other two sides in the same ratio.",
          "difficulty": "easy"
        },
        {
          "question": "In triangle ABC, DE || BC with D on AB and E on AC. If AD = 2.4 cm, DB = 3.6 cm and AE = 3.2 cm, then EC equals",
          "options": ["2.8 cm", "4.8 cm", "4.0 cm", "5.2 cm"],
          "answerIndex": 1,
          "explanation": "By BPT, AD/DB = AE/EC gives 2.4/3.6 = 3.2/EC, so EC = (3.2 * 3.6)/2.4 = 4.8 cm.",
          "difficulty": "medium"
        },
        {
          "question": "The sides of two similar triangles are in the ratio 4:9. The ratio of their areas is",
          "options": ["4:9", "2:3", "16:81", "8:18"],
          "answerIndex": 2,
          "explanation": "Areas scale as the square of the side ratio, so the area ratio is 4^2 : 9^2 = 16:81.",
          "difficulty": "medium",
          "pyq": "CBSE 2020"
        },
        {
          "question": "A ladder 25 m long reaches a window 20 m above the ground. The distance of the foot of the ladder from the wall is",
          "options": ["5 m", "10 m", "15 m", "20 m"],
          "answerIndex": 2,
          "explanation": "By Pythagoras, the base distance is sqrt(25^2 - 20^2) = sqrt(625 - 400) = sqrt225 = 15 m.",
          "difficulty": "medium",
          "pyq": "CBSE 2019"
        },
        {
          "question": "In triangles ABC and DEF, AB/DE = BC/EF = CA/FD. The two triangles are similar by the",
          "options": ["AA criterion", "SAS criterion", "SSS criterion", "RHS criterion"],
          "answerIndex": 2,
          "explanation": "All three pairs of corresponding sides are proportional, which is exactly the SSS similarity criterion.",
          "difficulty": "easy"
        },
        {
          "question": "The triangle formed by joining the midpoints of the sides of a given triangle is similar to the original triangle, with all its sides in the ratio",
          "options": ["1:3", "1:2", "2:3", "1:4"],
          "answerIndex": 1,
          "explanation": "By the midpoint theorem, each side of the smaller triangle is half the parallel side of the original, so the scale factor is 1:2.",
          "difficulty": "medium"
        },
        {
          "question": "In triangle ABC, points D on AB and E on AC satisfy DE || BC. If AD = x cm, DB = (x - 2) cm, AE = (x + 2) cm and EC = (x - 1) cm, then x equals",
          "options": ["2", "3", "4", "6"],
          "answerIndex": 2,
          "explanation": "BPT gives x/(x-2) = (x+2)/(x-1), so x(x - 1) = (x - 2)(x + 2), that is x^2 - x = x^2 - 4, hence x = 4.",
          "difficulty": "hard"
        },
        {
          "question": "A man walks 12 m due east and then 5 m due north. His distance from the starting point is",
          "options": ["17 m", "13 m", "sqrt119 m", "7 m"],
          "answerIndex": 1,
          "explanation": "The two legs are perpendicular, so the distance is sqrt(12^2 + 5^2) = sqrt(144 + 25) = 13 m by Pythagoras.",
          "difficulty": "easy",
          "pyq": "CBSE 2022"
        },
        {
          "question": "If triangle ABC ~ triangle DEF with AB = 4 cm, DE = 6 cm, EF = 9 cm and DF = 12 cm, then BC equals",
          "options": ["5 cm", "6 cm", "7.5 cm", "8 cm"],
          "answerIndex": 1,
          "explanation": "The scale factor is AB/DE = 4/6 = 2/3, so BC = (2/3) * EF = (2/3) * 9 = 6 cm.",
          "difficulty": "medium"
        },
        {
          "question": "It is given that triangle ABC ~ triangle PQR and BC/QR = 1/3. Then ar(ABC)/ar(PQR) equals",
          "options": ["1:3", "1:6", "1:9", "1:4"],
          "answerIndex": 2,
          "explanation": "The ratio of areas of similar triangles is the square of the ratio of corresponding sides, (1/3)^2 = 1/9.",
          "difficulty": "medium"
        },
        {
          "question": "Which of the following sets of side lengths forms a right-angled triangle?",
          "options": ["4 cm, 5 cm, 6 cm", "7 cm, 8 cm, 9 cm", "9 cm, 12 cm, 15 cm", "5 cm, 7 cm, 9 cm"],
          "answerIndex": 2,
          "explanation": "9^2 + 12^2 = 81 + 144 = 225 = 15^2, so 9-12-15 (the 3-4-5 triple multiplied by 3) is right angled; the other sets fail the check.",
          "difficulty": "easy",
          "pyq": "CBSE 2023"
        }
      ],
      "boardQuestions": [
        {
          "question": "In triangle ABC, D and E are points on the sides AB and AC respectively such that DE || BC. If AD = 8 cm, AB = 12 cm and AE = 6 cm, find AC.",
          "marks": 2,
          "type": "SA",
          "probability": "very-high",
          "answer": "1) Since DE || BC, the Basic Proportionality Theorem gives AD/AB = AE/AC. 2) Substituting the given lengths: 8/12 = 6/AC, so AC = (6 * 12)/8 = 9 cm. 3) Now DB = AB - AD = 12 - 8 = 4 cm, and by BPT we also have AD/DB = AE/EC, so 8/4 = 6/EC, giving EC = 3 cm. 4) Check: AC = AE + EC = 6 + 3 = 9 cm, which agrees with the first method. 5) Hence AC = 9 cm, with AD/AB = AE/AC = 2/3 throughout."
        },
        {
          "question": "Using the converse of the Pythagoras theorem, determine whether the triangle with sides 8 cm, 15 cm and 17 cm is right angled. If it is, state which angle is the right angle.",
          "marks": 3,
          "type": "SA",
          "probability": "high",
          "answer": "1) The longest side is 17 cm; a right angle, if any, must lie opposite it. 2) Compute the squares: 8^2 = 64, 15^2 = 225 and 17^2 = 289. 3) Since 64 + 225 = 289, the square of the longest side equals the sum of the squares of the other two sides. 4) By the converse of the Pythagoras theorem, the triangle is right angled, with the right angle between the sides of 8 cm and 15 cm, opposite the side of 17 cm. 5) Note that 8-15-17 is a standard Pythagorean triple, which confirms the result."
        },
        {
          "question": "Prove the Basic Proportionality Theorem: If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.",
          "marks": 5,
          "type": "LA",
          "probability": "very-high",
          "answer": "1) Given: triangle ABC in which DE || BC, with D on AB and E on AC, D and E distinct points. To prove: AD/DB = AE/EC. 2) Construction: join BE and CD; draw EN perpendicular to AB (meeting AB produced if necessary) and DM perpendicular to AC. 3) Triangles BDE and CDE stand on the same base DE and lie between the same parallels DE and BC, so ar(BDE) = ar(CDE). 4) Triangles ADE and BDE have the same height EN on bases AD and DB, so ar(ADE)/ar(BDE) = (1/2 * AD * EN)/(1/2 * DB * EN) = AD/DB. 5) Similarly, ar(ADE)/ar(CDE) = (1/2 * AE * DM)/(1/2 * EC * DM) = AE/EC. 6) Since ar(BDE) = ar(CDE), dividing ar(ADE) by these equal areas gives AD/DB = AE/EC. Hence a line parallel to one side of a triangle divides the other two sides in the same ratio."
        },
        {
          "question": "Prove the Pythagoras theorem: In a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides.",
          "marks": 5,
          "type": "LA",
          "probability": "high",
          "answer": "1) Given: right triangle ABC with the right angle at B, so AC is the hypotenuse. To prove: AC^2 = AB^2 + BC^2. 2) Construction: draw BD perpendicular to AC, meeting AC at D. 3) Triangles ADB and ABC share angle A, and angle ADB = angle ABC = 90 degrees, so triangle ADB ~ triangle ABC by the AA criterion. 4) Corresponding sides of similar triangles give AD/AB = AB/AC, hence AB^2 = AD * AC. 5) Triangles BDC and BAC share angle C, and angle BDC = angle ABC = 90 degrees, so triangle BDC ~ triangle BAC by the AA criterion. 6) Corresponding sides give BC/AC = DC/BC, hence BC^2 = DC * AC. 7) Adding the two results: AB^2 + BC^2 = AD * AC + DC * AC = AC(AD + DC) = AC * AC = AC^2, since AD + DC = AC. Hence the square of the hypotenuse equals the sum of the squares of the other two sides."
        },
        {
          "question": "Read the source and answer the questions: During a fire drill, a fire brigade places a 25 m long ladder with its foot 7 m away from the base of a vertical wall, and the top of the ladder just reaches a window. In the next round, the foot of the ladder is pulled 8 m farther away from the wall. (a) How high above the ground does the ladder reach in the first position? (b) How high does it reach after being pulled back? (c) By how many metres does the top of the ladder slide down the wall?",
          "marks": 5,
          "type": "CASE",
          "probability": "high",
          "answer": "(a) The ladder, the wall and the ground form a right triangle with hypotenuse 25 m and base 7 m. Height reached = sqrt(25^2 - 7^2) = sqrt(625 - 49) = sqrt576 = 24 m. (b) After being pulled back, the foot is 7 + 8 = 15 m from the wall. Height reached = sqrt(625 - 15^2) = sqrt(625 - 225) = sqrt400 = 20 m. (c) The top slides down from 24 m to 20 m, that is by 4 m. (d) Note that the ladder length is unchanged in both cases; only the base and the height of the right triangle change, which is why the Pythagoras theorem must be applied separately to each position of the ladder."
        },
        {
          "question": "Read the source and answer the questions: In a park, two vertical poles of heights 6 m and 11 m stand on level ground. The distance between the feet of the two poles is 12 m. A straight wire is stretched tightly from the top of the shorter pole to the top of the taller pole. (a) Name the theorem used to find the length of the wire and identify the right triangle involved. (b) Find the length of the wire. (c) If the poles were 5 m and 10 m high instead, with the same 12 m gap, would the length of the wire change? Give a reason.",
          "marks": 4,
          "type": "CASE",
          "probability": "medium",
          "answer": "(a) The Pythagoras theorem is used. Drawing a horizontal line through the top of the shorter pole, the difference in heights 11 - 6 = 5 m is one leg of a right triangle, the distance 12 m between the poles is the other leg, and the wire is the hypotenuse. (b) Length of wire = sqrt(12^2 + 5^2) = sqrt(144 + 25) = sqrt169 = 13 m. (c) No change: the new difference of heights is 10 - 5 = 5 m, the same as before, so the wire again spans a right triangle of legs 12 m and 5 m and its length is again 13 m; only the difference of the heights enters the calculation, not the absolute heights."
        }
      ]
    },
    {
      "number": 7,
      "title": "Coordinate Geometry",
      "summary": "This chapter revises the Cartesian plane and the graphs of linear equations, then develops the distance formula from the Pythagoras theorem. It introduces the section formula for the internal division of a line segment, the midpoint formula and the points of trisection. These tools are used to find distances, division ratios and unknown vertices, and to classify triangles and quadrilaterals from the coordinates of their vertices. Since the coordinate formula for the area of a triangle is not part of the 2025-26 syllabus, all classification is done through distances and the section formula.",
      "weightageMarks": 6,
      "difficulty": "easy",
      "hotTopics": [
        "Distance formula and distance of a point from the origin",
        "Derivation of the distance formula from Pythagoras",
        "Section formula for internal division",
        "Midpoint formula and points of trisection",
        "Classifying triangles and quadrilaterals from their vertices",
        "Ratio in which an axis divides a line segment"
      ],
      "sections": [
        {
          "heading": "The Cartesian Plane: A Quick Recap",
          "points": [
            "The plane is divided by two perpendicular number lines, the x-axis and the y-axis, meeting at the origin O(0, 0); every point is named by an ordered pair (x, y).",
            "The x-coordinate is called the abscissa and the y-coordinate the ordinate; the signs decide the quadrant: I (+, +), II (-, +), III (-, -), IV (+, -).",
            "Every point on the x-axis has ordinate 0, every point on the y-axis has abscissa 0, and the origin is (0, 0).",
            "The perpendicular distance of a point (x, y) from the x-axis is |y| and from the y-axis is |x|.",
            "The graph of every linear equation ax + by + c = 0 is a straight line, obtained by plotting two or more solution points and joining them.",
            "Accurate reading and quick plotting of coordinates is the working base of every question in this chapter, so practise well-labelled rough diagrams."
          ],
          "keyTerms": [
            { "term": "Abscissa", "meaning": "The x-coordinate of a point, its signed perpendicular distance from the y-axis." },
            { "term": "Ordinate", "meaning": "The y-coordinate of a point, its signed perpendicular distance from the x-axis." },
            { "term": "Quadrant", "meaning": "One of the four regions into which the two axes divide the plane, numbered anticlockwise I to IV." },
            { "term": "Graph of a linear equation", "meaning": "The straight line formed by all points (x, y) satisfying ax + by + c = 0." }
          ],
          "trick": "Walk then climb: x is the horizontal walk, y the vertical climb. The distance from the x-axis is the height |y|, and from the y-axis the sideways gap |x|.",
          "examPointer": "Quadrant identification and the distances of a point from the two axes are easy 1-mark MCQs; these marks should never be lost."
        },
        {
          "heading": "The Distance Formula",
          "points": [
            "For points A(x1, y1) and B(x2, y2), distance = sqrt((x2-x1)^2 + (y2-y1)^2); the order of subtraction does not matter because of the squaring.",
            "Derivation: through A draw a horizontal line and through B a vertical line meeting at C(x2, y1); then AC = |x2 - x1|, BC = |y2 - y1| and angle C is 90 degrees.",
            "Pythagoras on right triangle ACB gives AB^2 = (x2-x1)^2 + (y2-y1)^2, and taking the square root gives the distance formula.",
            "The distance of a point P(x, y) from the origin is sqrt(x^2 + y^2); for example the distance of (-6, 8) from the origin is sqrt(36 + 64) = 10 units.",
            "Worked example: the distance between A(0, 6) and B(8, 0) is sqrt((8-0)^2 + (0-6)^2) = sqrt(64 + 36) = 10 units.",
            "Distance calculations classify figures: compute all four sides and both diagonals to identify a square, rectangle, rhombus, parallelogram or trapezium.",
            "For a triangle, compare the three sides: all equal means equilateral, two equal means isosceles, and two squared sides adding to the third squared means a right angle.",
            "Collinear points A, B, C satisfy AB + BC = AC with B lying between A and C; find all three distances and test the largest against the sum of the other two."
          ],
          "keyTerms": [
            { "term": "Distance formula", "meaning": "sqrt((x2-x1)^2 + (y2-y1)^2), the length of the segment joining (x1, y1) and (x2, y2)." },
            { "term": "Distance from the origin", "meaning": "For a point (x, y), it equals sqrt(x^2 + y^2)." },
            { "term": "Collinear points", "meaning": "Points on the same straight line, tested by checking AB + BC = AC for a suitable ordering." }
          ],
          "trick": "SQUARE the GAP: (x2 - x1)^2 + (y2 - y1)^2. Big minus small inside each bracket, squares added, root taken last; compare squared distances to classify figures without rounding.",
          "examPointer": "Classifying a quadrilateral from its four vertices is a standard 3-5 marker; state both the side results and the diagonal results before naming the figure."
        },
        {
          "heading": "Section Formula, Midpoint and Trisection",
          "points": [
            "If P divides the segment joining A(x1, y1) and B(x2, y2) internally in the ratio m1 : m2, then P = ((m1x2 + m2x1)/(m1 + m2), (m1y2 + m2y1)/(m1 + m2)).",
            "The weight m1 multiplies the far end x2 because m1 counts the opposite piece AP; remember the pairing m1 with B and m2 with A.",
            "Midpoint formula: M = ((x1 + x2)/2, (y1 + y2)/2), the special case m1 = m2 = 1 of the section formula.",
            "Trisection: the two points dividing AB in the ratios 1:2 and 2:1 come from applying the section formula twice; for A(2, -2) and B(-7, 4) they are (-1, 0) and (-4, 2).",
            "Centroid shortcut: the centroid of a triangle with vertices (x1, y1), (x2, y2), (x3, y3) is ((x1 + x2 + x3)/3, (y1 + y2 + y3)/3), the meeting point of the medians.",
            "Unknown ratio trick: write the ratio as k : 1, set the given point equal to the section formula expression, and solve for k; a positive k confirms internal division.",
            "Axis division: a point of the x-axis has y = 0, so m1y2 + m2y1 = 0 gives the ratio in which the x-axis divides the segment; the equation x = 0 handles the y-axis similarly."
          ],
          "keyTerms": [
            { "term": "Section formula", "meaning": "Coordinates of the point dividing a segment internally in a given ratio m1 : m2." },
            { "term": "Midpoint", "meaning": "The point ((x1 + x2)/2, (y1 + y2)/2) that divides a segment in the ratio 1:1." },
            { "term": "Point of trisection", "meaning": "Either of the two points cutting a segment into three equal parts, dividing it in the ratios 1:2 and 2:1." },
            { "term": "Centroid", "meaning": "The common point of the medians of a triangle, whose coordinates are the averages of the vertex coordinates." }
          ],
          "trick": "m1 hugs the FAR end: in ((m1x2 + m2x1)/(m1 + m2)) the weight m1 pairs with B. For an unknown ratio always write k : 1 to get one equation in one unknown.",
          "examPointer": "Finding the ratio in which an axis divides a segment, and the coordinates of trisection points, are repeated 2-3 markers; show the substitution into the formula explicitly for full marks."
        },
        {
          "heading": "Key Results: Diagonals, Circles and Deleted Topics",
          "points": [
            "Diagonal test: a quadrilateral is a parallelogram if and only if the midpoints of its diagonals coincide, that is the vertices in order satisfy A + C = B + D coordinate-wise.",
            "Refinement: a parallelogram with equal diagonals is a rectangle, one with all four sides equal is a rhombus, and one with equal sides as well as equal diagonals is a square.",
            "For vertices taken in order, compare adjacent sides too: a parallelogram with equal adjacent sides is a rhombus, since opposite sides are automatically equal.",
            "Circle facts: the midpoint of a diameter is the centre, so if one end of a diameter is (3, 4) and the centre is the origin, the other end is (-3, -4); every point of a circle is equidistant from the centre.",
            "Equidistant points: the locus of points equidistant from A and B is the perpendicular bisector of AB; to find a particular point, equate the squared distances and simplify.",
            "Example: points on the x-axis equidistant from (2, -5) and (-2, 9) satisfy (x-2)^2 + 25 = (x+2)^2 + 81, which gives x = -7, so the point is (-7, 0).",
            "Syllabus note: the coordinate formula for the area of a triangle, 1/2 |x1(y2 - y3) + x2(y3 - y1) + x3(y1 - y2)|, is deleted for CBSE 2025-26; classify figures using distances and the section formula instead."
          ],
          "keyTerms": [
            { "term": "Diagonal midpoint test", "meaning": "A quadrilateral is a parallelogram exactly when its diagonals bisect each other, checked by equal midpoints." },
            { "term": "Perpendicular bisector", "meaning": "The line of all points equidistant from the two ends of a segment." },
            { "term": "Deleted topic", "meaning": "Content removed from the CBSE syllabus for 2025-26, such as the coordinate area formula of a triangle." }
          ],
          "trick": "DIAGONALS decide the family: equal midpoints of AC and BD means parallelogram; add equal diagonals for rectangle; add equal sides for rhombus; both together give a square.",
          "examPointer": "Old papers sometimes solve quadrilateral questions through the coordinate area formula, which is removed in 2025-26; retrain such solutions with distances and the section formula to stay syllabus-true."
        },
        {
          "heading": "Worked Strategy for Board Problems",
          "points": [
            "Strategy: plot a rough sketch of the given points first; a 30-second sketch prevents pairing the wrong vertices for the rest of the question.",
            "Choose the tool by question type: distances for shapes and collinearity, the section formula for ratios and midpoints, and equated squared distances for equidistant points.",
            "For parallelogram unknowns, equate the diagonal midpoints at once: with vertices A, B, C, D in order, A + C = B + D gives two linear equations.",
            "For show-that questions on triangle types, compute the three sides, quote the exact squared values, and only then name the type with its defining reason.",
            "Keep computations in squared form while comparing; take square roots only in the final answer to avoid rounding errors.",
            "Present every solution in three steps: write the formula, substitute with brackets, simplify; this matches the CBSE step-marking scheme."
          ],
          "keyTerms": [
            { "term": "Tool choice", "meaning": "Selecting distance formula, section formula or equidistance method according to what the question asks." },
            { "term": "Squared comparison", "meaning": "Comparing squared distances during classification and taking roots only at the end." },
            { "term": "Step presentation", "meaning": "Writing formula, substitution and simplification as separate visible steps to earn step marks." }
          ],
          "trick": "PLAN: Plot, List the formula, Apply it, Name the conclusion. The final sentence must echo the definition, for example all four sides equal, so PQRS is a rhombus.",
          "examPointer": "Examiners award the method mark for the written formula and correct substitution; even with an arithmetic slip, clear three-step working retains most of the marks."
        },
        {
          "heading": "Common Mistakes and Exam Traps",
          "points": [
            "Subtracting squares instead of squaring the difference: sqrt(x2^2 - x1^2) is wrong; the formula needs (x2 - x1)^2 + (y2 - y1)^2.",
            "Pairing the ratio weights wrongly in the section formula: when AP : PB = m1 : m2, the weight m1 multiplies the coordinates of the far end B, not of A.",
            "Confusing ratio order: a division ratio of 2:3 means AP : PB = 2:3; reversing it places the point on the wrong side of the midpoint.",
            "Forgetting the plus or minus when a point on an axis is at a given distance; both (0, 5) and (0, -5) are 5 units from the x-axis.",
            "Assuming the diagonals of every parallelogram are equal; only rectangles, squares and isosceles trapeziums have equal diagonals.",
            "Sign slips while substituting negative coordinates: keep brackets around each difference so that minus signs survive the squaring.",
            "Using the deleted coordinate area formula for classification in 2025-26; present distance-based or section-formula-based arguments so the method matches the current syllabus."
          ],
          "keyTerms": [
            { "term": "Sign discipline", "meaning": "Using brackets for every coordinate difference so negative values are handled correctly." },
            { "term": "Ratio order", "meaning": "Keeping AP : PB in the exact order stated by the question when applying the section formula." },
            { "term": "Syllabus-correct method", "meaning": "Avoiding deleted formulas and solving with distance or section formula methods as per CBSE 2025-26." }
          ],
          "trick": "Chant it once per question: square the gap, add the squares, root at the end. Brackets around every difference keep negative coordinates safe.",
          "examPointer": "Most lost marks in this chapter are sign and ratio-order slips; re-substitute your answer into the section formula or distance formula as a 10-second check."
        }
      ],
      "mcqs": [
        {
          "question": "The distance of the point (-6, 8) from the origin is",
          "options": ["6 units", "8 units", "10 units", "14 units"],
          "answerIndex": 2,
          "explanation": "Distance from the origin = sqrt((-6)^2 + 8^2) = sqrt(36 + 64) = sqrt100 = 10 units.",
          "difficulty": "easy",
          "pyq": "CBSE 2020"
        },
        {
          "question": "The distance between the points A(0, 6) and B(8, 0) is",
          "options": ["6 units", "8 units", "10 units", "14 units"],
          "answerIndex": 2,
          "explanation": "sqrt((8-0)^2 + (0-6)^2) = sqrt(64 + 36) = sqrt100 = 10 units.",
          "difficulty": "easy"
        },
        {
          "question": "The midpoint of the line segment joining the points (-3, 4) and (5, -2) is",
          "options": ["(1, 1)", "(2, 2)", "(1, 3)", "(4, 1)"],
          "answerIndex": 0,
          "explanation": "Midpoint = ((-3 + 5)/2, (4 + (-2))/2) = (1, 1).",
          "difficulty": "easy"
        },
        {
          "question": "The distance of the point P(2, 3) from the x-axis is",
          "options": ["2 units", "3 units", "sqrt13 units", "5 units"],
          "answerIndex": 1,
          "explanation": "The perpendicular distance from the x-axis equals the absolute value of the ordinate, |3| = 3 units.",
          "difficulty": "easy"
        },
        {
          "question": "The point on the x-axis equidistant from the points (2, -5) and (-2, 9) is",
          "options": ["(-7, 0)", "(7, 0)", "(-4, 0)", "(0, 0)"],
          "answerIndex": 0,
          "explanation": "(x-2)^2 + 25 = (x+2)^2 + 81 simplifies to -8x = 56, so x = -7 and the point is (-7, 0).",
          "difficulty": "hard",
          "pyq": "CBSE 2023"
        },
        {
          "question": "The ratio in which the x-axis divides the line segment joining (5, 3) and (-3, -2) is",
          "options": ["2:3", "3:2", "3:5", "5:3"],
          "answerIndex": 1,
          "explanation": "Setting the y-coordinate of the division point to zero: m1(-2) + m2(3) = 0 gives m1 : m2 = 3 : 2.",
          "difficulty": "medium"
        },
        {
          "question": "If A(1, 2), B(4, y), C(x, 6) and D(3, 5) are the vertices of a parallelogram taken in order, then",
          "options": ["x = 6, y = 3", "x = 3, y = 6", "x = 5, y = 4", "x = 4, y = 5"],
          "answerIndex": 0,
          "explanation": "Diagonals of a parallelogram bisect each other, so (1 + x)/2 = (4 + 3)/2 gives x = 6, and (2 + 6)/2 = (y + 5)/2 gives y = 3.",
          "difficulty": "hard",
          "pyq": "CBSE 2019"
        },
        {
          "question": "The points (1, 7), (4, 2) and (-1, -1) are the vertices of a triangle that is",
          "options": ["equilateral", "isosceles and right angled", "right angled but not isosceles", "obtuse angled"],
          "answerIndex": 1,
          "explanation": "Squared sides are (4-1)^2 + (2-7)^2 = 34, (4+1)^2 + (2+1)^2 = 34 and (1+1)^2 + (7+1)^2 = 68; since 34 + 34 = 68, the triangle is isosceles and right angled.",
          "difficulty": "hard"
        },
        {
          "question": "The coordinates of the point which divides the line segment joining (-1, 7) and (4, -3) internally in the ratio 2:3 are",
          "options": ["(1, 3)", "(2, 3)", "(1, -3)", "(3, 1)"],
          "answerIndex": 0,
          "explanation": "x = (2(4) + 3(-1))/5 = 1 and y = (2(-3) + 3(7))/5 = 3, so the point is (1, 3).",
          "difficulty": "medium",
          "pyq": "CBSE 2022"
        },
        {
          "question": "If one end of a diameter of a circle with centre at the origin is (3, 4), then the other end is",
          "options": ["(-3, 4)", "(3, -4)", "(-3, -4)", "(0, 0)"],
          "answerIndex": 2,
          "explanation": "The centre is the midpoint of a diameter, so the other end is (-3, -4), the reflection of (3, 4) in the origin.",
          "difficulty": "easy"
        },
        {
          "question": "The points (-4, 0), (4, 0) and (0, 3) are the vertices of a triangle that is",
          "options": ["equilateral", "isosceles", "scalene", "right angled"],
          "answerIndex": 1,
          "explanation": "The base is 8 units and the two slant sides are each sqrt(16 + 9) = 5 units, so the triangle is isosceles.",
          "difficulty": "medium"
        },
        {
          "question": "If A(6, 1), B(8, 2), C(9, 4) and D(p, 3) are the vertices of a parallelogram taken in order, then p equals",
          "options": ["5", "6", "7", "9"],
          "answerIndex": 2,
          "explanation": "Equating the midpoints of the diagonals AC and BD: 6 + 9 = 8 + p, so p = 7.",
          "difficulty": "medium"
        }
      ],
      "boardQuestions": [
        {
          "question": "Find the distance between the points A(3, -2) and B(-1, 1), and the distance of the point B from the origin.",
          "marks": 2,
          "type": "SA",
          "probability": "high",
          "answer": "1) Distance formula: AB = sqrt((x2-x1)^2 + (y2-y1)^2). 2) Substituting A(3, -2) and B(-1, 1): AB = sqrt((-1-3)^2 + (1-(-2))^2) = sqrt((-4)^2 + 3^2) = sqrt(16 + 9) = sqrt25 = 5 units. 3) The distance of B(-1, 1) from the origin is sqrt((-1)^2 + 1^2) = sqrt(1 + 1) = sqrt2 units. 4) Hence AB = 5 units and OB = sqrt2 units, obtained by squaring each coordinate gap separately and adding."
        },
        {
          "question": "Find the ratio in which the line segment joining the points A(1, -5) and B(-4, 5) is divided by the x-axis. Also find the coordinates of the point of division.",
          "marks": 3,
          "type": "SA",
          "probability": "high",
          "answer": "1) Let the x-axis divide AB at P in the ratio m1 : m2. Since P lies on the x-axis, its y-coordinate is 0. 2) Using the section formula for the y-coordinate: (m1(5) + m2(-5))/(m1 + m2) = 0, which gives 5m1 - 5m2 = 0, so m1 = m2. 3) Hence the required ratio is 1 : 1, that is the x-axis bisects the segment. 4) The x-coordinate of P is (m1(-4) + m2(1))/(m1 + m2) = (-4 + 1)/2 = -3/2. 5) Therefore the point of division is P(-3/2, 0). Check: the midpoint of A(1, -5) and B(-4, 5) is ((1 - 4)/2, (-5 + 5)/2) = (-3/2, 0), which matches."
        },
        {
          "question": "Determine the ratio in which the point P(-6, a) divides the join of A(-3, -1) and B(-8, 9). Also find the value of a.",
          "marks": 5,
          "type": "LA",
          "probability": "very-high",
          "answer": "1) Let P divide AB in the ratio k : 1. By the section formula, the x-coordinate of P is (k(-8) + 1(-3))/(k + 1). 2) Setting this equal to -6: (-8k - 3)/(k + 1) = -6, so -8k - 3 = -6k - 6, which gives 2k = 3 and k = 3/2. 3) Hence the ratio is 3 : 2. 4) For a: the y-coordinate is (k(9) + 1(-1))/(k + 1) = ((3/2)(9) - 1)/(3/2 + 1) = (27/2 - 1)/(5/2) = (25/2)/(5/2) = 5. So a = 5. 5) Verification with ratio 3 : 2: x = (3(-8) + 2(-3))/5 = (-24 - 6)/5 = -6 and y = (3(9) + 2(-1))/5 = (27 - 2)/5 = 5, which matches P(-6, 5) exactly."
        },
        {
          "question": "The two opposite vertices of a square are (-1, 2) and (3, 2). Find the coordinates of the other two vertices.",
          "marks": 5,
          "type": "LA",
          "probability": "high",
          "answer": "1) Let the given opposite vertices be A(-1, 2) and C(3, 2), so AC is a diagonal of the square. 2) Diagonal length AC = sqrt((3-(-1))^2 + (2-2)^2) = sqrt16 = 4 units. 3) The diagonals of a square are equal and bisect each other at right angles, so the centre is the midpoint of AC, namely O(((-1) + 3)/2, (2 + 2)/2) = (1, 2). 4) AC is horizontal, so the other diagonal BD is vertical through O, and each half-diagonal is 2 units. Hence B and D lie on the line x = 1 at distance 2 from O: B(1, 2 + 2) = (1, 4) and D(1, 2 - 2) = (1, 0). 5) Verification: AB = sqrt((1+1)^2 + (4-2)^2) = sqrt8 and BC = sqrt((3-1)^2 + (2-4)^2) = sqrt8, so all sides are equal, and BD = 4 = AC. Thus (-1, 2), (1, 4), (3, 2), (1, 0) in order indeed form a square."
        },
        {
          "question": "Read the source and answer the questions: On the map of a school garden, 1 unit represents 1 metre. The main gate is at G(2, 3) and the greenhouse is at H(10, 9). A water tap T is to be installed exactly halfway between the gate and the greenhouse, and a new rose bed R is planned at the point that divides GH internally in the ratio 1:3 from the gate. (a) Find the coordinates of the water tap T. (b) Find the distance GH between the gate and the greenhouse. (c) Find the coordinates of the rose bed R.",
          "marks": 4,
          "type": "CASE",
          "probability": "medium",
          "answer": "(a) T is the midpoint of G(2, 3) and H(10, 9): T = ((2 + 10)/2, (3 + 9)/2) = (6, 6). (b) GH = sqrt((10-2)^2 + (9-3)^2) = sqrt(64 + 36) = sqrt100 = 10 m. (c) R divides GH in the ratio 1:3 from G, so R = ((1(10) + 3(2))/(1 + 3), (1(9) + 3(3))/(1 + 3)) = ((10 + 6)/4, (9 + 9)/4) = (4, 4.5). Check: GR = sqrt((4-2)^2 + (4.5-3)^2) = sqrt(4 + 2.25) = sqrt6.25 = 2.5 m, which is exactly one-fourth of GH = 10 m, as required by a 1:3 division."
        },
        {
          "question": "Read the source and answer the questions: On a town map with 1 unit = 10 m, a rectangular park has corners A(0, 6), B(8, 6), C(8, 0) and D(0, 0). Two walking paths run along the diagonals AC and BD, and a lamp post stands where the diagonals meet. (a) Show, using the distance formula, that both diagonals are equal. (b) Find the coordinates of the lamp post. (c) Find the actual distance, in metres, from the lamp post to the corner A. (d) Which quadrilateral property guarantees that the diagonals of this park bisect each other?",
          "marks": 5,
          "type": "CASE",
          "probability": "high",
          "answer": "(a) AC = sqrt((8-0)^2 + (0-6)^2) = sqrt(64 + 36) = sqrt100 = 10 units and BD = sqrt((0-8)^2 + (0-6)^2) = sqrt(64 + 36) = 10 units, so the two diagonals are equal. (b) The lamp post is at the common midpoint of the diagonals: midpoint of AC = ((0 + 8)/2, (6 + 0)/2) = (4, 3), and midpoint of BD = ((8 + 0)/2, (6 + 0)/2) = (4, 3), so the lamp post is at (4, 3). (c) LA = sqrt((4-0)^2 + (3-6)^2) = sqrt(16 + 9) = 5 units; since 1 unit = 10 m, the actual distance is 50 m. (d) The property is that the diagonals of every parallelogram bisect each other; here AB and DC are both horizontal with length 8 units and AD and BC are both vertical with length 6 units, so ABCD is a parallelogram, and being a rectangle it also has equal diagonals."
        }
      ]
    }
  ]
}
