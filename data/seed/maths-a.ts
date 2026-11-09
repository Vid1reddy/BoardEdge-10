export default {
  "code": "maths",
  "name": "Mathematics",
  "bookName": "NCERT Mathematics",
  "weightageMarks": 80,
  "chapters": [
    {
      "number": 1,
      "title": "Real Numbers",
      "summary": "This chapter develops the Fundamental Theorem of Arithmetic, which states that every composite number can be written as a product of primes in essentially one way. It shows how the HCF and LCM of two numbers are obtained from prime factorisations and how they are related to the product of the numbers. It revisits irrational numbers, proving that numbers like sqrt(2), sqrt(3) and sqrt(5) cannot be written in the form p/q, and classifies the decimal expansions of rational numbers as terminating or non-terminating repeating. Word problems on bells, tankers and stacks apply HCF and LCM to daily life.",
      "weightageMarks": 6,
      "difficulty": "medium",
      "hotTopics": [
        "Fundamental Theorem of Arithmetic and prime factorisation",
        "HCF and LCM by prime factorisation",
        "Relation HCF(a,b) x LCM(a,b) = a x b for two numbers",
        "Proofs of irrationality of sqrt(2), sqrt(3), sqrt(5)",
        "Decimal expansions: terminating and non-terminating repeating",
        "Word problems based on HCF and LCM"
      ],
      "sections": [
        {
          "heading": "Definitions: Primes, Composites and the Fundamental Theorem of Arithmetic",
          "points": [
            "A prime number is a natural number greater than 1 that has exactly two factors, 1 and itself; the smallest prime is 2, and 2 is the only even prime.",
            "A composite number is a natural number that has more than two factors; the smallest composite number is 4, and 1 is neither prime nor composite.",
            "Every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which the prime factors are written; this statement is the Fundamental Theorem of Arithmetic.",
            "For example, 84 = 2 x 2 x 3 x 7 = 2^2 x 3 x 7, and no other set of primes multiplies to give 84.",
            "To factorise, divide the number successively by the smallest prime that divides it and continue until the quotient is 1; for example, 156 = 2 x 2 x 3 x 13.",
            "HCF (Highest Common Factor) of two numbers is the largest number that divides both of them exactly, and LCM (Least Common Multiple) is the smallest number that is exactly divisible by both.",
            "In prime factorisation, HCF is the product of the common prime factors taken with the smallest powers, while LCM is the product of all prime factors taken with the greatest powers."
          ],
          "keyTerms": [
            { "term": "Fundamental Theorem of Arithmetic", "meaning": "Every composite number can be written as a product of primes, and this factorisation is unique except for the order of the factors." },
            { "term": "HCF", "meaning": "Highest Common Factor: the largest number that divides each of the given numbers exactly." },
            { "term": "LCM", "meaning": "Least Common Multiple: the smallest number that is a multiple of each of the given numbers." },
            { "term": "Composite number", "meaning": "A natural number with more than two factors, expressible as a unique product of primes." }
          ],
          "trick": "Prime factorisation is the FINGERPRINT of a number: no two composite numbers share the same prime factors. HCF takes COMMON primes with SMALL powers, LCM takes ALL primes with BIG powers.",
          "examPointer": "Finding HCF and LCM of two numbers by prime factorisation and verifying HCF x LCM = a x b is a standard 2-3 marker; 1 is neither prime nor composite is a repeated MCQ."
        },
        {
          "heading": "Formulas: HCF, LCM and the Product Rule",
          "points": [
            "For two positive integers a and b: HCF(a,b) x LCM(a,b) = a x b; for example, HCF(12,18) = 6 and LCM(12,18) = 36, and 6 x 36 = 12 x 18 = 216.",
            "The product rule holds only for TWO numbers; for three or more numbers, HCF x LCM is generally not equal to their product.",
            "Quick LCM formula for two numbers: LCM = (a x b) / HCF(a,b); for example, if HCF(26,91) = 13, then LCM = (26 x 91)/13 = 2366/13 = 182.",
            "If two numbers have no common prime factor, their HCF is 1 and their LCM is their product; such numbers are called co-prime; for example, 8 and 15 are co-prime with HCF 1 and LCM 120.",
            "For numbers given as powers of primes, say a = p^2 q and b = p q^3, HCF = p q and LCM = p^2 q^3.",
            "Numbers of the form 6^n can never end with the digit 0, because ending in 0 requires both 2 and 5 as prime factors, and 6^n = 2^n x 3^n never contains 5.",
            "Word problems: when events repeat together, use LCM; when a quantity must divide others exactly, use HCF."
          ],
          "keyTerms": [
            { "term": "Co-prime numbers", "meaning": "Two numbers whose HCF is 1; their LCM equals their product." },
            { "term": "Product rule", "meaning": "For two positive integers a and b, HCF(a,b) x LCM(a,b) = a x b." },
            { "term": "Prime divisor principle", "meaning": "If a prime p divides the product ab, then p divides a or p divides b; the basis of irrationality proofs." }
          ],
          "trick": "TOGETHER means LCM, DIVIDES means HCF. Bells ring together, lights blink together, footsteps fall in step again: all LCM. Maximum capacity, greatest length, largest number that divides: all HCF.",
          "examPointer": "Identifying whether a situation needs HCF or LCM decides the whole answer in word problems; mixing them up is the single most common loss of marks in this chapter."
        },
        {
          "heading": "Theorems and Proofs of Irrationality",
          "points": [
            "Theorem (Fundamental Theorem of Arithmetic): every composite number can be factorised as a product of primes, and this factorisation is unique, apart from the order of the factors.",
            "Theorem: if a prime p divides n^2, then p divides n, where n is a positive integer; for example, 5 divides 25 = 5^2, so 5 divides 5.",
            "Theorem: sqrt(2) is irrational. Proof idea: assume sqrt(2) = p/q with HCF(p,q) = 1; then p^2 = 2q^2, so 2 divides p^2 and hence 2 divides p; write p = 2r to get q^2 = 2r^2, so 2 divides q also, contradicting HCF(p,q) = 1.",
            "The same contradiction argument proves that sqrt(3), sqrt(5) and sqrt(p) for any prime p are irrational.",
            "Theorem: the sum or difference of a rational and an irrational number is irrational; for example, 5 + sqrt(3) and 5 - sqrt(3) are irrational.",
            "Theorem: the product and quotient of a non-zero rational number and an irrational number are irrational; for example, 3 x sqrt(2) and sqrt(2)/4 are irrational.",
            "The sum of two irrational numbers need not be irrational: sqrt(2) + (2 - sqrt(2)) = 2, which is rational; so no blanket statement can be made for irrational plus irrational."
          ],
          "keyTerms": [
            { "term": "Irrational number", "meaning": "A number that cannot be written in the form p/q, where p and q are integers and q is not 0; its decimal expansion is non-terminating non-repeating." },
            { "term": "Proof by contradiction", "meaning": "A technique that assumes the opposite of what is to be proved and arrives at an impossible conclusion." },
            { "term": "Rational number", "meaning": "A number expressible as p/q with integers p and q, q not 0, taken in lowest terms." }
          ],
          "trick": "Irrationality proofs follow the 4-step loop: ASSUME p/q in lowest terms, SQUARE to get p^2 = 2q^2, SHARE the prime (2 divides both p and q), SHOUT the contradiction with HCF(p,q) = 1.",
          "examPointer": "Prove that sqrt(2)/sqrt(3)/sqrt(5) is irrational, or prove that 3 + 2 sqrt(5) is irrational, are recurring 3 and 5 markers; always state at the start that p and q are co-prime."
        },
        {
          "heading": "Decimal Expansions of Rational Numbers",
          "points": [
            "Theorem: let x = p/q be a rational number in lowest terms. If q = 2^n x 5^m, that is, the prime factorisation of q contains only 2s and 5s, then x has a decimal expansion that terminates.",
            "If q = 2^n x 5^m, the decimal expansion terminates after max(n, m) places; for example, 7/8: q = 8 = 2^3, so 7/8 = 0.875 terminates after 3 places.",
            "13/3125: q = 3125 = 5^5, so the decimal expansion terminates after 5 places; 14588/625: q = 625 = 5^4, so it terminates after 4 places.",
            "If q is NOT of the form 2^n x 5^m, the decimal expansion is non-terminating repeating; for example, 1/7 = 0.142857 142857 ... repeats with period 6.",
            "An irrational number has a decimal expansion that is non-terminating non-repeating, such as sqrt(2) = 1.4142135... and pi = 3.1415926...; note that 22/7 is only an approximation of pi and is rational.",
            "A terminating decimal can be produced by multiplying and dividing by a suitable power of 10: 7/8 = 875/1000 = 0.875, and 3/5 = 6/10 = 0.6.",
            "The terminating test works only when the denominator has no prime other than 2 and 5; 1/15 has q = 3 x 5, so it repeats: 1/15 = 0.0666... with the digit 6 repeating."
          ],
          "keyTerms": [
            { "term": "Terminating decimal", "meaning": "A decimal expansion that ends after finitely many digits; occurs when q = 2^n x 5^m." },
            { "term": "Non-terminating repeating decimal", "meaning": "A decimal in which a block of digits repeats forever; occurs when q has a prime factor other than 2 and 5." },
            { "term": "Period", "meaning": "The length of the repeating block of digits in a non-terminating repeating decimal; for 1/7 the period is 6." }
          ],
          "trick": "Denominator decides destiny: only 2s and 5s TERMINATE, any other prime REPEATS forever. Count the bigger exponent: 2^3 x 5^2 terminates after 3 places.",
          "examPointer": "MCQs like how many decimal places 13/3125 or 14588/625 will terminate after are repeatedly asked; write the prime factorisation of the denominator first, then take max(n, m)."
        },
        {
          "heading": "Worked Strategy: Board-Style Solved Approach",
          "points": [
            "Type 1, HCF and LCM: for 26 and 91, write 26 = 2 x 13 and 91 = 7 x 13; the common prime with smallest power gives HCF = 13; all primes with greatest powers give LCM = 2 x 7 x 13 = 182; check 13 x 182 = 2366 = 26 x 91.",
            "Type 2, three numbers: for 12, 15 and 21, HCF = 3 while LCM = 2^2 x 3 x 5 x 7 = 420; note HCF x LCM = 1260 which is NOT 12 x 15 x 21 = 3780, showing the product rule fails for three numbers.",
            "Type 3, word problem with HCF: two tankers contain 850 L and 680 L; the maximum capacity of a container that measures both exactly is HCF(850,680) = 2 x 5 x 17 = 170 L, and it measures 5 and 4 times respectively.",
            "Type 4, word problem with LCM: bells toll at intervals of 9, 12 and 15 minutes; they toll together after every LCM(9,12,15) = 2^2 x 3^2 x 5 = 180 minutes = 3 hours.",
            "Type 5, remainder problems: the largest number dividing 70 and 125 leaving remainders 5 and 8 is HCF(70-5, 125-8) = HCF(65,117) = 13; first subtract the remainders, then take HCF.",
            "Type 6, irrationality: to prove 3 + 2 sqrt(5) irrational, assume it equals p/q; then sqrt(5) = (p - 3q)/(2q) is rational, a contradiction since sqrt(5) is irrational; the trick is isolating the irrational part on one side."
          ],
          "keyTerms": [
            { "term": "Prime-power form", "meaning": "Writing each number as powers of distinct primes so that common and uncommon factors can be read off directly." },
            { "term": "Remainder adjustment", "meaning": "In divide-and-remainder problems, subtract each remainder from its number before taking the HCF." },
            { "term": "Isolation of the surd", "meaning": "In irrationality proofs for a + b sqrt(c), move every rational term to the other side so the surd equals a rational number, giving the contradiction." }
          ],
          "trick": "For remainder questions remember SUBTRACT THEN HCF. For together questions LCM THEN ADD TIME. For irrationality with a rational partner, ISOLATE THE SURD.",
          "examPointer": "In 3-mark HCF/LCM questions, always show the prime factorisation lines; a final answer without working scores only the answer mark."
        },
        {
          "heading": "Common Mistakes and Exam Traps",
          "points": [
            "Applying HCF x LCM = a x b to THREE or more numbers; the rule is valid only for two numbers.",
            "Forgetting that 1 is neither prime nor composite, and that 2 is the only even prime; options listing 1 as a prime are deliberate traps.",
            "In irrationality proofs, omitting the line 'let HCF(p,q) = 1' or forgetting to show that q is also divisible by the prime; both steps are needed for full marks.",
            "Concluding that the sum of two irrational numbers is always irrational; sqrt(2) + (2 - sqrt(2)) = 2 is a counterexample.",
            "Taking HCF when the problem says 'together/again at the same time' (needs LCM) or LCM when it says 'maximum capacity/largest number dividing' (needs HCF).",
            "In decimal expansion questions, using the numerator or the original denominator without prime factorisation; reduce the fraction to lowest terms first, then factorise q.",
            "Treating 0.101001000100001... (non-repeating) or 22/7 (an approximation) as values of pi-related irrationals; only exact surds like sqrt(2) are the standard irrational examples."
          ],
          "keyTerms": [
            { "term": "Trap option", "meaning": "A wrong option built from a common error, such as taking LCM instead of HCF." },
            { "term": "Lowest terms first", "meaning": "Reducing p/q so that HCF(p,q) = 1 before applying the terminating-decimal test." },
            { "term": "Explicit contradiction sentence", "meaning": "The closing line of a contradiction proof stating which fact is contradicted and that the assumption is wrong." }
          ],
          "trick": "Before every HCF-LCM question ask TWO questions: how many numbers? (two only, product rule allowed) and what does the situation demand, dividing (HCF) or repeating (LCM)?",
          "examPointer": "Step-marking is strict in irrationality proofs; write the contradiction sentence explicitly: 'this contradicts the fact that HCF(p,q) = 1, so our assumption is wrong and sqrt(2) is irrational'."
        }
      ],
      "mcqs": [
        {
          "question": "The HCF of 96 and 404 is",
          "options": ["4", "8", "12", "16"],
          "answerIndex": 0,
          "explanation": "96 = 2^5 x 3 and 404 = 2^2 x 101; the common prime 2 with the smallest power gives HCF = 2^2 = 4.",
          "difficulty": "easy",
          "pyq": "CBSE 2020"
        },
        {
          "question": "If HCF(a, b) = 5 and a x b = 150, then LCM(a, b) is",
          "options": ["30", "25", "150", "750"],
          "answerIndex": 0,
          "explanation": "For two numbers, HCF x LCM = a x b, so LCM = 150/5 = 30.",
          "difficulty": "easy",
          "pyq": "CBSE 2023"
        },
        {
          "question": "The LCM of 6 and 20 is",
          "options": ["60", "120", "30", "90"],
          "answerIndex": 0,
          "explanation": "6 = 2 x 3 and 20 = 2^2 x 5, so LCM = 2^2 x 3 x 5 = 60.",
          "difficulty": "easy"
        },
        {
          "question": "The smallest composite number is",
          "options": ["1", "2", "4", "6"],
          "answerIndex": 2,
          "explanation": "1 is neither prime nor composite, 2 and 3 are prime, and 4 = 2 x 2 is the smallest composite number.",
          "difficulty": "easy"
        },
        {
          "question": "sqrt(2) is",
          "options": ["a rational number", "an irrational number", "an integer", "a whole number"],
          "answerIndex": 1,
          "explanation": "sqrt(2) cannot be written as p/q with co-prime integers p and q; its decimal expansion is non-terminating non-repeating.",
          "difficulty": "easy"
        },
        {
          "question": "The decimal expansion of 13/3125 will",
          "options": ["terminate after 3 decimal places", "terminate after 5 decimal places", "be non-terminating repeating", "terminate after 2 decimal places"],
          "answerIndex": 1,
          "explanation": "3125 = 5^5, so the expansion terminates after max(0, 5) = 5 decimal places.",
          "difficulty": "medium"
        },
        {
          "question": "The decimal expansion of 14588/625 will terminate after how many places of decimals?",
          "options": ["2", "3", "4", "5"],
          "answerIndex": 2,
          "explanation": "625 = 5^4, so the decimal expansion terminates after 4 places.",
          "difficulty": "medium",
          "pyq": "CBSE 2020"
        },
        {
          "question": "For any natural number n, 6^n ends with the digit 0",
          "options": ["when n is even", "when n is odd", "for no value of n", "for all values of n"],
          "answerIndex": 2,
          "explanation": "Ending in 0 requires factors 2 and 5; 6^n = 2^n x 3^n never contains the prime 5.",
          "difficulty": "medium"
        },
        {
          "question": "If HCF(306, 657) = 9, then LCM(306, 657) is",
          "options": ["22338", "22134", "21332", "20077"],
          "answerIndex": 0,
          "explanation": "LCM = (306 x 657)/9 = 201042/9 = 22338.",
          "difficulty": "medium"
        },
        {
          "question": "The product of a non-zero rational number and an irrational number is",
          "options": ["always rational", "always irrational", "rational or irrational", "always an integer"],
          "answerIndex": 1,
          "explanation": "A non-zero rational times an irrational is always irrational; for example, 3 x sqrt(2) = 3 sqrt(2) is irrational.",
          "difficulty": "medium"
        },
        {
          "question": "The largest number which divides 70 and 125 leaving remainders 5 and 8 respectively is",
          "options": ["13", "65", "875", "1750"],
          "answerIndex": 0,
          "explanation": "Subtract the remainders: 70 - 5 = 65 and 125 - 8 = 117; HCF(65, 117) = 13.",
          "difficulty": "medium",
          "pyq": "CBSE 2019"
        },
        {
          "question": "Three bells ring at intervals of 6, 8 and 12 minutes. If they ring together at 9:00 am, they will next ring together at",
          "options": ["9:12 am", "9:24 am", "9:36 am", "10:00 am"],
          "answerIndex": 1,
          "explanation": "LCM(6, 8, 12) = 24 minutes, so the next common ring is 24 minutes after 9:00 am, that is 9:24 am.",
          "difficulty": "medium"
        }
      ],
      "boardQuestions": [
        {
          "question": "Find the HCF and LCM of 26 and 91 by prime factorisation, and verify that HCF x LCM = product of the two numbers.",
          "marks": 2,
          "type": "SA",
          "probability": "high",
          "answer": "1) Prime factorise both numbers: 26 = 2 x 13 and 91 = 7 x 13. 2) HCF is the product of the common prime factors with the smallest powers: the only common prime is 13, so HCF(26, 91) = 13. 3) LCM is the product of all prime factors with the greatest powers: LCM = 2 x 7 x 13 = 182. 4) Verification: HCF x LCM = 13 x 182 = 2366, and the product of the numbers is 26 x 91 = 2366. 5) Since both products are equal, HCF(26, 91) x LCM(26, 91) = 26 x 91 stands verified."
        },
        {
          "question": "Check whether 6^n can end with the digit 0 for any natural number n. Justify your answer.",
          "marks": 3,
          "type": "SA",
          "probability": "very-high",
          "answer": "1) Every number ending with the digit 0 is divisible by 10, and 10 = 2 x 5, so any number ending in 0 must have both 2 and 5 in its prime factorisation. 2) Now 6^n = (2 x 3)^n = 2^n x 3^n. 3) By the Fundamental Theorem of Arithmetic, the prime factorisation of 6^n is unique and contains only the primes 2 and 3; the prime 5 never appears in it. 4) Since 5 is not a factor of 6^n for any natural number n, 6^n is never divisible by 10. 5) Hence 6^n cannot end with the digit 0 for any natural number n."
        },
        {
          "question": "Prove that sqrt(3) is an irrational number. Hence show that 2 + sqrt(3) is also irrational.",
          "marks": 5,
          "type": "LA",
          "probability": "very-high",
          "answer": "1) Let us assume, to the contrary, that sqrt(3) is rational, so sqrt(3) = p/q, where p and q are co-prime integers and q is not 0. 2) Squaring both sides: 3 = p^2/q^2, so p^2 = 3q^2. 3) This means 3 divides p^2, and since 3 is prime, 3 divides p; let p = 3c for some integer c. 4) Then p^2 = 9c^2, so 3q^2 = 9c^2, giving q^2 = 3c^2, which means 3 divides q as well. 5) Thus 3 is a common factor of p and q, contradicting that HCF(p,q) = 1; hence our assumption is wrong and sqrt(3) is irrational. 6) For the second part, assume 2 + sqrt(3) = p/q with co-prime integers p and q. Then sqrt(3) = (p - 2q)/q. Since p and q are integers, the right side is rational, contradicting the proved fact that sqrt(3) is irrational. Hence 2 + sqrt(3) is also irrational."
        },
        {
          "question": "Two tankers contain 850 litres and 680 litres of kerosene oil respectively. Find the maximum capacity of a container that can measure the kerosene oil of both the tankers when used an exact number of times. Also find how many times the container will measure the oil in each tanker.",
          "marks": 5,
          "type": "LA",
          "probability": "high",
          "answer": "1) The required capacity must divide both 850 and 680 exactly and must be the largest such number, so it is the HCF of 850 and 680. 2) Prime factorisation: 850 = 2 x 5 x 5 x 17 = 2 x 5^2 x 17, and 680 = 2 x 2 x 2 x 5 x 17 = 2^3 x 5 x 17. 3) The common primes with the smallest powers are 2, 5 and 17, so HCF(850, 680) = 2 x 5 x 17 = 170. 4) Hence the maximum capacity of the container is 170 litres. 5) The 850 litre tanker is emptied in 850/170 = 5 measurements and the 680 litre tanker in 680/170 = 4 measurements, both exact numbers of times, as required."
        },
        {
          "question": "Read the source and answer the questions: The traffic lights at three different road crossings change after every 48 seconds, 72 seconds and 108 seconds respectively. If all three change simultaneously at 7:00 am, the traffic engineer wants to plan the next manual check at the moment they change together again. (a) Which mathematical concept is needed here and why? (b) After how much time will the three lights change simultaneously again? (c) At what exact time will this happen?",
          "marks": 5,
          "type": "CASE",
          "probability": "high",
          "answer": "(a) Each light repeats its change after a fixed interval, and we need the earliest time that is a common multiple of 48, 72 and 108 seconds, so the LCM of the three intervals is required. (b) Prime factorisation: 48 = 2^4 x 3, 72 = 2^3 x 3^2 and 108 = 2^2 x 3^3. LCM = 2^4 x 3^3 = 16 x 27 = 432 seconds. Since 432 seconds = 7 minutes 12 seconds, the three lights change simultaneously again after 7 minutes 12 seconds. (c) Starting from 7:00:00 am and adding 7 minutes 12 seconds, the lights change together again at exactly 7:07:12 am."
        },
        {
          "question": "Read the source and answer the questions: A sweet seller has 420 kaju barfis and 130 badam barfis. She wants to stack them in such a way that each stack has the same number of sweets, no sweet is left over, and the stacks take up the least area of the tray. (a) How many barfis of each kind should be placed in one stack? (b) How many stacks of each kind will be formed? (c) Which concept did you use and why is it the right one?",
          "marks": 4,
          "type": "CASE",
          "probability": "medium",
          "answer": "(a) The number in each stack must divide both 420 and 130 exactly, and to take the least area the stacks should be as tall as possible, so we need the HCF of 420 and 130. Prime factorisation: 420 = 2^2 x 3 x 5 x 7 and 130 = 2 x 5 x 13, so HCF = 2 x 5 = 10. Each stack should contain 10 barfis. (b) Number of stacks of kaju barfi = 420/10 = 42, and number of stacks of badam barfi = 130/10 = 13. (c) The HCF is used because the stack size must be a common divisor of both quantities and the largest such divisor minimises the tray area; LCM would give a common multiple, which cannot divide the totals, so it is meaningless here."
        }
      ]
    },
    {
      "number": 2,
      "title": "Polynomials",
      "summary": "This chapter gives the geometrical meaning of the zeros of a polynomial as the x-coordinates of the points where its graph meets the x-axis. It establishes the relationship between the zeros and the coefficients of a quadratic polynomial, alpha + beta = -b/a and alpha x beta = c/a, and uses it to find unknown coefficients and to build new polynomials. It also discusses how the shape of the parabola y = ax^2 + bx + c depends on the sign of a and how many zeros a polynomial of a given degree can have.",
      "weightageMarks": 4,
      "difficulty": "easy",
      "hotTopics": [
        "Geometrical meaning of zeros of a polynomial",
        "Zeros of quadratic polynomials by factorisation",
        "Relationship between zeros and coefficients",
        "Forming a quadratic polynomial from given zeros",
        "Parabola: shape, opening and number of zeros",
        "Finding unknown coefficients using zero relationships"
      ],
      "sections": [
        {
          "heading": "Definitions: Polynomials, Degrees and Zeros",
          "points": [
            "A polynomial p(x) in one variable x is an algebraic expression in which the powers of x are whole numbers, for example p(x) = 2x^2 - 3x + 5; expressions like x + 1/x or sqrt(x) + 2 are NOT polynomials.",
            "The degree of a polynomial is the highest power of the variable with a non-zero coefficient; a polynomial of degree 1 is linear, degree 2 is quadratic and degree 3 is cubic.",
            "A real polynomial has all coefficients as real numbers; only real polynomials and real zeros are studied here.",
            "A zero of a polynomial p(x) is a value of x for which p(x) = 0; for example, x = 2 is a zero of p(x) = x^2 - 4 because p(2) = 0.",
            "A real number k is a zero of p(x) if and only if (x - k) is a factor of p(x).",
            "The zero of the linear polynomial ax + b is -b/a, which is exactly where its straight-line graph cuts the x-axis.",
            "A quadratic polynomial is of the form ax^2 + bx + c with a not 0, and a cubic polynomial is of the form ax^3 + bx^2 + cx + d with a not 0."
          ],
          "keyTerms": [
            { "term": "Polynomial", "meaning": "An expression in which the exponents of the variable are whole numbers and the coefficients are real." },
            { "term": "Zero of a polynomial", "meaning": "A real value k of x for which p(k) = 0; geometrically the x-coordinate of a point where the graph meets the x-axis." },
            { "term": "Degree", "meaning": "The highest power of the variable appearing with a non-zero coefficient." },
            { "term": "Quadratic polynomial", "meaning": "A polynomial of degree 2, written ax^2 + bx + c with a not 0." }
          ],
          "trick": "DEGREE decides the DIET: a polynomial of degree n can have at most n zeros. Linear eats 1, quadratic eats 2, cubic eats 3.",
          "examPointer": "Identifying which of the given expressions is not a polynomial, and counting zeros from a given graph, are the two easiest scoring MCQs of the paper."
        },
        {
          "heading": "Geometrical Meaning of Zeros and the Parabola",
          "points": [
            "Geometrically, the zeros of a polynomial p(x) are the x-coordinates of the points where the graph of y = p(x) intersects or touches the x-axis.",
            "The graph of a linear polynomial ax + b is a straight line that cuts the x-axis at exactly one point, so it has exactly one zero.",
            "The graph of a quadratic polynomial ax^2 + bx + c, a not 0, is a parabola opening upward like the letter U when a > 0 and opening downward when a < 0.",
            "A parabola can cut the x-axis at two points, touch it at one point or not meet it at all, so a quadratic polynomial has at most 2 zeros, that is, 2, 1 or 0 zeros.",
            "For y = x^2 - 3x - 4 = (x - 4)(x + 1), the parabola cuts the x-axis at (4, 0) and (-1, 0), so the zeros are 4 and -1.",
            "If the parabola just touches the x-axis, the two zeros are equal; if it lies wholly above or below the x-axis, there is no real zero.",
            "From any given graph, the number of zeros equals the number of distinct points where the graph meets the x-axis; three crossing points mean three zeros."
          ],
          "keyTerms": [
            { "term": "Parabola", "meaning": "The U-shaped or inverted U-shaped graph of a quadratic polynomial." },
            { "term": "Upward opening", "meaning": "When a > 0 the parabola opens upward and has a minimum point." },
            { "term": "Downward opening", "meaning": "When a < 0 the parabola opens downward and has a maximum point." }
          ],
          "trick": "A POSITIVE a makes the parabola SMILE (U), a NEGATIVE a makes it FROWN (inverted U). Every kiss on the x-axis is one zero in the pocket.",
          "examPointer": "Questions showing a graph of y = p(x) and asking the number of zeros appear in almost every board paper; count the distinct meeting points with the x-axis only, never the y-axis."
        },
        {
          "heading": "Formulas: Zeros and Coefficients of a Quadratic",
          "points": [
            "If alpha and beta are the zeros of the quadratic polynomial ax^2 + bx + c (a not 0), then alpha + beta = -b/a and alpha x beta = c/a.",
            "For p(x) = x^2 - 5x + 6 = (x - 2)(x - 3), the zeros are 2 and 3; check: sum = 5 = -(-5)/1 and product = 6 = 6/1.",
            "A quadratic polynomial whose zeros are alpha and beta is x^2 - (alpha + beta)x + alpha x beta, taking leading coefficient 1; for zeros 2 and -3 it is x^2 - (2 + (-3))x + (2)(-3) = x^2 + x - 6.",
            "With a general leading coefficient k, the polynomial is k[x^2 - (alpha + beta)x + alpha x beta].",
            "Useful combination 1: alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta.",
            "Useful combination 2: 1/alpha + 1/beta = (alpha + beta)/(alpha beta).",
            "Useful combination 3: alpha^3 + beta^3 = (alpha + beta)^3 - 3 alpha beta (alpha + beta)."
          ],
          "keyTerms": [
            { "term": "Sum of zeros", "meaning": "alpha + beta = -b/a, the negative of the coefficient of x divided by the coefficient of x^2." },
            { "term": "Product of zeros", "meaning": "alpha x beta = c/a, the constant term divided by the coefficient of x^2." },
            { "term": "Formation formula", "meaning": "x^2 - (sum of zeros)x + product of zeros builds a quadratic from its zeros." }
          ],
          "trick": "S.P.P. rule: Sum = -b/a, Product = c/a. To BUILD a quadratic, flip the signs: x^2 - Sx + P. The minus travels with the sum only.",
          "examPointer": "One question linking sum/product of zeros to an unknown k is almost guaranteed; write alpha + beta and alpha x beta separately before forming the equation in k to secure step marks."
        },
        {
          "heading": "Theorems and Key Statements",
          "points": [
            "Theorem: a polynomial of degree n has at most n zeros; hence a linear polynomial has exactly 1 zero, a quadratic has at most 2 and a cubic at most 3.",
            "Statement: k is a zero of p(x) if and only if p(k) = 0; this equivalence is the backbone of all verification questions.",
            "Statement: the zeros of p(x) = ax^2 + bx + c are exactly the values of x where the parabola y = ax^2 + bx + c meets the x-axis, because on the x-axis y = 0.",
            "The maximum number of zeros equals the degree, but the actual number can be less; for example, p(x) = x^2 + 1 never meets the x-axis and has no real zero.",
            "If both zeros of a quadratic are known, the polynomial is determined up to a non-zero constant multiple; for example, both (x - 1)(x - 3) and 2(x - 1)(x - 3) have zeros 1 and 3.",
            "Verification example: for p(x) = 2x^2 - 7x + 3 = (2x - 1)(x - 3), the zeros are 1/2 and 3; sum = 7/2 = -(-7)/2 and product = 3/2 = 3/2, confirming the formulas.",
            "A quadratic polynomial has two distinct zeros, two equal zeros or no real zero; these cases correspond to the parabola cutting, touching or missing the x-axis, and are examined through the discriminant in Chapter 4."
          ],
          "keyTerms": [
            { "term": "At most n zeros", "meaning": "The number of real zeros of a degree n polynomial never exceeds n." },
            { "term": "Verification", "meaning": "Substituting the found zeros into alpha + beta = -b/a and alpha beta = c/a to confirm correctness." },
            { "term": "Constant multiple", "meaning": "For the same two zeros, any non-zero multiplier k of the quadratic leaves the zeros unchanged." }
          ],
          "trick": "Verify in the order SUM, PRODUCT, MATCH. Writing all three lines of working earns the method mark even if an arithmetic slip occurs.",
          "examPointer": "Zero-counting from graphs and the at-most-n theorem are 1-mark favourites; count only x-axis meetings and state the theorem in words when asked."
        },
        {
          "heading": "Worked Strategy: Finding Zeros and Building Polynomials",
          "points": [
            "Step 1 for zeros: split the middle term; for 6x^2 - 7x - 3, find two numbers with product 6 x (-3) = -18 and sum -7, namely -9 and 2: 6x^2 - 9x + 2x - 3 = 3x(2x - 3) + 1(2x - 3) = (2x - 3)(3x + 1), zeros 3/2 and -1/3.",
            "Step 2: if splitting is not obvious, use the quadratic formula of Chapter 4: x = (-b +/- sqrt(b^2 - 4ac))/(2a).",
            "Building a polynomial from zeros: for zeros 3 and -1/2, sum = 5/2 and product = -3/2, so one polynomial is x^2 - (5/2)x - 3/2, or multiplying by 2, 2x^2 - 5x - 3.",
            "Finding an unknown coefficient: if one zero of p(x) = x^2 - 5x + k is 3, then the other zero is 5 - 3 = 2, so k = 3 x 2 = 6.",
            "Symmetric expressions: for zeros alpha, beta of 2x^2 - 5x + 3, alpha + beta = 5/2 and alpha beta = 3/2, so alpha^2 + beta^2 = (5/2)^2 - 2(3/2) = 25/4 - 3 = 13/4.",
            "Reciprocal zeros: for zeros of x^2 - 3x + 2 (zeros 1 and 2), the new zeros 1/alpha and 1/beta are 1 and 1/2, giving sum 3/2 and product 1/2, so the new polynomial is x^2 - (3/2)x + 1/2, that is, 2x^2 - 3x + 1.",
            "Graph-reading strategy: mark the x-axis intersections first, read the zeros directly, and if a point of the curve is given, use it to fix the leading coefficient."
          ],
          "keyTerms": [
            { "term": "Splitting the middle term", "meaning": "Writing bx as px + qx so that grouping yields two linear factors." },
            { "term": "Symmetric expression", "meaning": "An expression like alpha^2 + beta^2 that can be written using only alpha + beta and alpha beta." },
            { "term": "Reconstruction", "meaning": "Forming a new polynomial from the sum and product of the transformed zeros." }
          ],
          "trick": "New polynomial from OLD zeros: find S and P of the old zeros, CONVERT S and P for the new zeros, then write x^2 - Sx + P. Convert first, construct second.",
          "examPointer": "2-3 mark questions of the type 'find k if one zero is ...' or 'form a polynomial whose zeros are ...' are near certain; when the answer has fractions, present a cleared-denominator version as well."
        },
        {
          "heading": "Common Mistakes and Exam Traps",
          "points": [
            "Writing alpha + beta = b/a instead of -b/a; the missing minus sign is the most frequent single error in this chapter.",
            "Swapping the roles: taking product as -c/a or sum as c/a; remember the sum carries the minus, the product does not.",
            "Reading zeros from the y-axis intercept instead of the x-axis; zeros come from x-axis meetings only.",
            "Calling a parabola with a < 0 upward opening; the sign of a alone decides the opening, independent of the zeros.",
            "Ignoring the constant multiple: stating that the polynomial with zeros 2 and 3 must be x^2 - 5x + 6, when 2x^2 - 10x + 12 is equally correct; write 'one such polynomial is'.",
            "Forgetting the -2 alpha beta correction: (alpha + beta)^2 is NOT alpha^2 + beta^2.",
            "Treating x + 1/x or sqrt(x) as polynomials; negative and fractional powers of the variable disqualify an expression.",
            "Forgetting a not 0 in questions like 'for what value of k is kx^2 + 3x + 1 a quadratic polynomial'; the answer must exclude k = 0."
          ],
          "keyTerms": [
            { "term": "Sign trap", "meaning": "The minus in alpha + beta = -b/a, the commonest mark-loser of the chapter." },
            { "term": "Constant multiple freedom", "meaning": "Any non-zero scalar multiple of a quadratic has the same zeros." },
            { "term": "Not a polynomial", "meaning": "Expressions with negative or fractional powers of the variable, such as 1/x or sqrt(x)." }
          ],
          "trick": "SUM has the SIGN (minus), PRODUCT is PLAIN (c/a). Before finalising, substitute your zeros back into p(x); if p does not vanish, recheck.",
          "examPointer": "Examiners deliberately place b/a options in MCQs; underlining -b/a and c/a in rough work before computing the final value prevents this classic slip."
        }
      ],
      "mcqs": [
        {
          "question": "The graph of y = p(x) cuts the x-axis at three distinct points. The number of zeros of p(x) is",
          "options": ["0", "1", "2", "3"],
          "answerIndex": 3,
          "explanation": "Each x-axis meeting point gives one zero, so three distinct meeting points give 3 zeros.",
          "difficulty": "easy"
        },
        {
          "question": "The zeros of the polynomial x^2 - 2x - 8 are",
          "options": ["4 and -2", "-4 and 2", "4 and 2", "-4 and -2"],
          "answerIndex": 0,
          "explanation": "x^2 - 2x - 8 = (x - 4)(x + 2), so the zeros are 4 and -2.",
          "difficulty": "easy"
        },
        {
          "question": "If alpha and beta are the zeros of 2x^2 - 4x + 5, then alpha + beta is",
          "options": ["2", "-2", "5/2", "-5/2"],
          "answerIndex": 0,
          "explanation": "Sum of zeros = -b/a = -(-4)/2 = 2.",
          "difficulty": "medium",
          "pyq": "CBSE 2020"
        },
        {
          "question": "If alpha and beta are the zeros of 3x^2 - 5x + 2, then alpha x beta is",
          "options": ["2/3", "3/2", "-2/3", "5/3"],
          "answerIndex": 0,
          "explanation": "Product of zeros = c/a = 2/3.",
          "difficulty": "medium"
        },
        {
          "question": "A quadratic polynomial whose zeros are 2 and -3 is",
          "options": ["x^2 + x - 6", "x^2 - x + 6", "x^2 - x - 6", "x^2 + x + 6"],
          "answerIndex": 0,
          "explanation": "Sum = -1 and product = -6, so the polynomial is x^2 - (-1)x + (-6) = x^2 + x - 6.",
          "difficulty": "easy",
          "pyq": "CBSE 2020"
        },
        {
          "question": "The graph of y = ax^2 + bx + c opens downward when",
          "options": ["a > 0", "a < 0", "c < 0", "b < 0"],
          "answerIndex": 1,
          "explanation": "The sign of the leading coefficient a alone decides the opening; a < 0 gives a downward parabola.",
          "difficulty": "easy"
        },
        {
          "question": "A quadratic polynomial can have at most how many zeros?",
          "options": ["0", "1", "2", "3"],
          "answerIndex": 2,
          "explanation": "A polynomial of degree n has at most n zeros, so a quadratic (degree 2) has at most 2 zeros.",
          "difficulty": "easy"
        },
        {
          "question": "If one zero of the polynomial x^2 - 5x + k is 3, then k is",
          "options": ["6", "-6", "2", "3"],
          "answerIndex": 0,
          "explanation": "If one zero is 3, the other is 5 - 3 = 2 (sum = 5), so k = product = 3 x 2 = 6.",
          "difficulty": "medium"
        },
        {
          "question": "The zero of the linear polynomial ax + b is",
          "options": ["b/a", "-b/a", "a/b", "-a/b"],
          "answerIndex": 1,
          "explanation": "Solving ax + b = 0 gives x = -b/a, the single zero of the linear polynomial.",
          "difficulty": "easy"
        },
        {
          "question": "If alpha and beta are the zeros of x^2 - 5x + 6, then alpha^2 + beta^2 is",
          "options": ["13", "25", "12", "1"],
          "answerIndex": 0,
          "explanation": "alpha + beta = 5 and alpha beta = 6, so alpha^2 + beta^2 = 25 - 12 = 13.",
          "difficulty": "medium",
          "pyq": "CBSE 2019"
        },
        {
          "question": "The number of zeros of a polynomial p(x) whose graph does not meet the x-axis at all is",
          "options": ["0", "1", "2", "cannot be determined"],
          "answerIndex": 0,
          "explanation": "Zeros are x-coordinates of x-axis meeting points; no meeting point means no real zero.",
          "difficulty": "medium"
        },
        {
          "question": "If the zeros of the quadratic polynomial x^2 + (a+1)x + b are 2 and -3, then",
          "options": ["a = 0, b = -6", "a = 0, b = 6", "a = -1, b = -6", "a = 1, b = 6"],
          "answerIndex": 0,
          "explanation": "Sum = 2 + (-3) = -1 = -(a+1) gives a = 0, and product = -6 = b.",
          "difficulty": "hard",
          "pyq": "CBSE 2020"
        }
      ],
      "boardQuestions": [
        {
          "question": "Find the zeros of the quadratic polynomial x^2 - 2x - 8 and verify the relationship between the zeros and the coefficients.",
          "marks": 2,
          "type": "SA",
          "probability": "very-high",
          "answer": "1) Factorise: x^2 - 2x - 8 = x^2 - 4x + 2x - 8 = x(x - 4) + 2(x - 4) = (x - 4)(x + 2). 2) Putting each factor equal to zero gives the zeros alpha = 4 and beta = -2. 3) Here a = 1, b = -2, c = -8. Sum of zeros = 4 + (-2) = 2 and -b/a = -(-2)/1 = 2, so the sum condition holds. 4) Product of zeros = 4 x (-2) = -8 and c/a = -8/1 = -8, so the product condition holds. 5) Hence the zeros are 4 and -2 and the relationship between zeros and coefficients is verified."
        },
        {
          "question": "If alpha and beta are the zeros of the polynomial f(x) = 2x^2 + 5x + k such that alpha^2 + beta^2 + alpha beta = 21/4, find the value of k.",
          "marks": 3,
          "type": "SA",
          "probability": "high",
          "answer": "1) For f(x) = 2x^2 + 5x + k: alpha + beta = -5/2 and alpha beta = k/2. 2) Now alpha^2 + beta^2 + alpha beta = (alpha + beta)^2 - 2 alpha beta + alpha beta = (alpha + beta)^2 - alpha beta. 3) Substituting: (-5/2)^2 - k/2 = 25/4 - k/2. 4) Given 25/4 - k/2 = 21/4, so k/2 = 25/4 - 21/4 = 4/4 = 1. 5) Hence k = 2. Check: for 2x^2 + 5x + 2, the product of zeros is 2/2 = 1, and 25/4 - 1 = 21/4, as required."
        },
        {
          "question": "If the zeros of the polynomial x^2 + px + q are double in value to the zeros of 2x^2 - 5x - 3, find the values of p and q.",
          "marks": 5,
          "type": "LA",
          "probability": "high",
          "answer": "1) Factorise 2x^2 - 5x - 3 = 2x^2 - 6x + x - 3 = 2x(x - 3) + 1(x - 3) = (2x + 1)(x - 3), so its zeros are -1/2 and 3. 2) The zeros of x^2 + px + q are double these values, so they are 2 x (-1/2) = -1 and 2 x 3 = 6. 3) For x^2 + px + q, the sum of zeros equals -p: -p = (-1) + 6 = 5, so p = -5. 4) The product of zeros equals q: q = (-1) x 6 = -6. 5) Hence p = -5 and q = -6; the required polynomial is x^2 - 5x - 6, whose zeros -1 and 6 are indeed double of -1/2 and 3."
        },
        {
          "question": "If alpha and beta are the zeros of the polynomial f(x) = x^2 - 5x + 4, find the value of (i) alpha^2 + beta^2, (ii) 1/alpha + 1/beta, (iii) alpha^3 + beta^3.",
          "marks": 5,
          "type": "LA",
          "probability": "high",
          "answer": "1) For f(x) = x^2 - 5x + 4: alpha + beta = 5 and alpha beta = 4. 2) alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta = 25 - 8 = 17. 3) 1/alpha + 1/beta = (alpha + beta)/(alpha beta) = 5/4. 4) alpha^3 + beta^3 = (alpha + beta)^3 - 3 alpha beta (alpha + beta) = 125 - 3 x 4 x 5 = 125 - 60 = 65. 5) Verification: f(x) = (x - 1)(x - 4), so alpha = 1 and beta = 4; then 1 + 16 = 17, 1/1 + 1/4 = 5/4 and 1 + 64 = 65, matching all three results."
        },
        {
          "question": "Read the source and answer the questions: In a mathematics exhibition, a chart shows the graph of y = p(x), a parabola opening upward. It meets the x-axis at the points (-1, 0) and (2, 0), and it passes through the point (0, -2). (a) How many zeros does p(x) have and what are they? (b) Find a quadratic polynomial p(x) satisfying these conditions. (c) Verify the relationship between the zeros and the coefficients for your polynomial.",
          "marks": 4,
          "type": "CASE",
          "probability": "high",
          "answer": "(a) A quadratic meets the x-axis at most twice; here it meets at (-1, 0) and (2, 0), so p(x) has exactly two zeros, x = -1 and x = 2. (b) Since -1 and 2 are zeros, p(x) = a(x + 1)(x - 2) for some non-zero constant a. Using the point (0, -2): p(0) = a(1)(-2) = -2a = -2, so a = 1. Hence p(x) = (x + 1)(x - 2) = x^2 - x - 2. (c) Here a = 1, b = -1, c = -2. Sum of zeros = -1 + 2 = 1 = -(-1)/1 = -b/a, and product of zeros = (-1)(2) = -2 = c/a. Both relationships are verified."
        },
        {
          "question": "Read the source and answer the questions: A school is designing a rectangular herbal garden. The gardener models its usable area in square metres by A(x) = x^2 - 7x + 12, which factors as A(x) = (x - 3)(x - 4), the product of the two sides (x - 3) and (x - 4) in metres. (a) Find the values of x for which the modelled area becomes zero and explain what they mean. (b) For which values of x is the model valid and why? (c) If the school wants an area of 20 square metres, find the sides.",
          "marks": 4,
          "type": "CASE",
          "probability": "medium",
          "answer": "(a) A(x) = (x - 3)(x - 4) = 0 gives x = 3 or x = 4; these are the zeros of the quadratic, the boundary values at which one side of the garden becomes zero and the area vanishes. (b) Both sides (x - 3) and (x - 4) must be positive for a real garden, so x must be greater than 4; between 3 and 4 the product is negative, which no area can be. (c) Set x^2 - 7x + 12 = 20, so x^2 - 7x - 8 = 0, that is (x - 8)(x + 1) = 0, giving x = 8 or x = -1. Rejecting x = -1 as inadmissible, x = 8, so the sides are 8 - 3 = 5 m and 8 - 4 = 4 m, giving an area of 5 x 4 = 20 square metres."
        }
      ]
    },
    {
      "number": 3,
      "title": "Pair of Linear Equations in Two Variables",
      "summary": "This chapter studies a pair of linear equations in two variables and classifies the pair as consistent with a unique solution, consistent with infinitely many solutions, or inconsistent with no solution. Graphically the two lines may intersect, coincide or be parallel, and the ratio conditions on a1/a2, b1/b2 and c1/c2 decide which case occurs. The substitution and elimination methods are used to solve the pair algebraically, including pairs in 1/x and 1/y forms that are reducible to linear equations. The ideas are applied to word problems on ages, speeds, money, fractions and two-digit numbers.",
      "weightageMarks": 8,
      "difficulty": "medium",
      "hotTopics": [
        "Graphical method of solution and types of lines",
        "Consistency conditions using a1/a2, b1/b2, c1/c2",
        "Substitution method",
        "Elimination method",
        "Equations reducible to a linear pair",
        "Word problems: ages, speeds, money, two-digit numbers"
      ],
      "sections": [
        {
          "heading": "Definitions: Linear Pairs, Solutions and Consistency",
          "points": [
            "An equation of the form ax + by + c = 0, where a, b, c are real numbers and a and b are not both zero, is a linear equation in two variables; its graph is always a straight line.",
            "A pair of linear equations in two variables is a system of two such equations considered together, for example x + y = 5 and 2x - 3y = 4.",
            "A solution of the pair is an ordered pair (x, y) of values that satisfies BOTH equations simultaneously; for x + y = 5 and x - y = 1, the solution is (3, 2) since 3 + 2 = 5 and 3 - 2 = 1.",
            "A pair having at least one common solution is called consistent; a pair with no common solution is inconsistent.",
            "A consistent pair is called independent when it has exactly one solution, and dependent when the two equations represent the same line, so every point of the line is a solution.",
            "Geometrically, two lines in a plane either intersect at exactly one point (unique solution), coincide (infinitely many solutions) or are parallel (no solution).",
            "Real-life pictures: two crossing roads model intersecting lines with one common point, while railway tracks side by side model parallel lines with no common point."
          ],
          "keyTerms": [
            { "term": "Consistent pair", "meaning": "A pair of linear equations having at least one common solution." },
            { "term": "Inconsistent pair", "meaning": "A pair with no solution, whose graphs are parallel lines." },
            { "term": "Solution of a pair", "meaning": "An ordered pair (x, y) satisfying both equations at the same time." }
          ],
          "trick": "One point, many points or none: INTERSECT = 1 solution, COINCIDE = infinite, PARALLEL = zero. Only the first two are consistent.",
          "examPointer": "Classifying a given pair as consistent or inconsistent via ratios is a guaranteed 1-2 mark question; write all three ratios before concluding."
        },
        {
          "heading": "Formulas: Ratio Conditions and the Graphical Method",
          "points": [
            "For a1 x + b1 y + c1 = 0 and a2 x + b2 y + c2 = 0, compare the three ratios a1/a2, b1/b2 and c1/c2.",
            "If a1/a2 is not equal to b1/b2, the lines intersect and the pair has exactly one unique solution; the pair is consistent.",
            "If a1/a2 = b1/b2 = c1/c2, the lines coincide and the pair has infinitely many solutions; the pair is dependent and consistent.",
            "If a1/a2 = b1/b2 but not equal to c1/c2, the lines are parallel and the pair has no solution; the pair is inconsistent.",
            "Worked check 1: 2x + 3y - 9 = 0 and 4x + 6y - 18 = 0 give 2/4 = 3/6 = 9/18 = 1/2, so the lines are coincident with infinitely many solutions.",
            "Worked check 2: x + 2y - 4 = 0 and 2x + 4y - 12 = 0 give 1/2 = 2/4 but 4/12 = 1/3, so the lines are parallel with no solution.",
            "Graphical method steps: write each equation as y in terms of x, make a table of 2-3 points per line, plot both lines on the same axes, and read the intersection point.",
            "For x - y = 1 and x + y = 5, the lines pass through (0, -1), (1, 0) and (0, 5), (5, 0) respectively, and they cross at (3, 2), the unique solution."
          ],
          "keyTerms": [
            { "term": "Unique solution", "meaning": "Exactly one ordered pair satisfying both equations, obtained when a1/a2 is not equal to b1/b2." },
            { "term": "Coincident lines", "meaning": "Lines lying exactly on top of each other, giving infinitely many solutions." },
            { "term": "Parallel lines", "meaning": "Lines that never meet, giving no solution." }
          ],
          "trick": "Compare in ORDER a, b, c. All three EQUAL: SAME line, infinite solutions. a and b equal but c different: PARALLEL, none. a and b unequal: ONE point, unique.",
          "examPointer": "The k-value question, 'find k so that the pair has no solution / a unique solution / infinitely many solutions', is asked repeatedly; set up the ratio inequalities instead of guessing."
        },
        {
          "heading": "Algebraic Methods: Substitution and Elimination",
          "points": [
            "Substitution method: from one equation express one variable in terms of the other and substitute into the second equation; for y = 2x + 3 in 3x + 2y = 13: 3x + 2(2x + 3) = 13, so 7x = 7, x = 1 and y = 5.",
            "Elimination method: multiply one or both equations by suitable numbers to make the coefficients of one variable equal or opposite, then subtract or add; for 3x + 4y = 10 and x - 4y = -2, adding gives 4x = 8, so x = 2, and then 2 - 4y = -2 gives y = 1.",
            "When x-coefficients are already equal, eliminate at once: for 2x + 3y = 11 and 2x - 4y = -24, subtracting gives 7y = 35, so y = 5 and then x = -2.",
            "Always check the solution by putting (x, y) back into BOTH original equations; for (2, 1): 3(2) + 4(1) = 10 and 2 - 4(1) = -2, both correct.",
            "Equations reducible to linear form: for 5/(x-1) + 1/(y-2) = 2 and 6/(x-1) - 3/(y-2) = 1, put u = 1/(x-1) and v = 1/(y-2); solving 5u + v = 2 and 6u - 3v = 1 gives u = 1/3, v = 1/3, so x = 4 and y = 5.",
            "Choosing the method: elimination is fastest when coefficients are ready multiples, substitution suits equations already solved for one variable, and the graphical method is used only when the question demands a graph.",
            "Always reduce the equations to the standard form ax + by + c = 0 before comparing ratios or applying elimination, especially when an equation is given like 2x = 5 - 3y."
          ],
          "keyTerms": [
            { "term": "Substitution method", "meaning": "Expressing one variable from one equation and substituting it in the other to get a single-variable equation." },
            { "term": "Elimination method", "meaning": "Making the coefficients of one variable equal and adding or subtracting the equations to remove that variable." },
            { "term": "Reducible pair", "meaning": "A pair in 1/x, 1/y or similar forms that becomes linear after a suitable substitution." }
          ],
          "trick": "Substitute when ONE variable stands ALONE; eliminate when coefficients are ALMOST EQUAL. For 1/x and 1/y, RENAME them u and v, solve the linear pair, then convert back.",
          "examPointer": "3-mark questions almost always allow any method; the safe pattern is to state the method, show the transformed equation, give (x, y), and verify in one line to claim full marks."
        },
        {
          "heading": "Theorems and Key Statements: Conditions for Solvability",
          "points": [
            "Statement: the pair a1 x + b1 y + c1 = 0 and a2 x + b2 y + c2 = 0 has a unique solution if and only if a1/a2 is not equal to b1/b2.",
            "Statement: the pair has infinitely many solutions if and only if a1/a2 = b1/b2 = c1/c2.",
            "Statement: the pair has no solution if and only if a1/a2 = b1/b2 but not equal to c1/c2; such a pair is inconsistent.",
            "Worked application 1: for kx + 2y = 5 and 3x + y = 1 to have a unique solution, k/3 must not equal 2/1, so k can be any value except 6.",
            "Worked application 2: for x + 2y = 3 and 5x + ky = 15 to have infinitely many solutions, 1/5 = 2/k = 3/15 = 1/5, so k = 10.",
            "These conditions follow from the geometry of straight lines: equal slopes make lines parallel or coincident, and different slopes make them cross exactly once.",
            "The conditions work only after both equations are written in standard form with all terms on one side; signs of c matter, so move every term before comparing."
          ],
          "keyTerms": [
            { "term": "Condition for unique solution", "meaning": "a1/a2 not equal to b1/b2; the two lines have different slopes." },
            { "term": "Condition for infinite solutions", "meaning": "a1/a2 = b1/b2 = c1/c2; the two equations describe the same line." },
            { "term": "Condition for no solution", "meaning": "a1/a2 = b1/b2 but not equal to c1/c2; same slope, different intercepts." }
          ],
          "trick": "Unique when the a-ratio and b-ratio are UNEQUAL; INFINITE when all three are EQUAL; NONE when only c BREAKS the tie. Write the three fractions in one line to see the case instantly.",
          "examPointer": "State the condition as a complete sentence: 'since a1/a2 = b1/b2 but not equal to c1/c2, the pair has no solution'; condition-only answers lose the statement mark."
        },
        {
          "heading": "Worked Strategy: Translating Word Problems",
          "points": [
            "Age example: the father is six times as old as the son; taking the son as x years and the father as y years gives y = 6x, and four years later y + 4 = 4(x + 4); solving gives x = 6 and y = 36.",
            "Two-digit number: let the tens digit be x and the units digit y, so the number is 10x + y and the reversed number is 10y + x; a sum of 66 gives 11(x + y) = 66, so x + y = 6.",
            "Boat and stream: with boat speed u km/h in still water and stream speed v km/h, downstream speed is u + v and upstream speed is u - v; since time = distance/speed, each journey gives one equation after substituting p = 1/(u - v) and q = 1/(u + v).",
            "Cost problems: if 3 pens and 2 pencils cost Rs 80 and 5 pens and 4 pencils cost Rs 140, taking a pen as Rs x and a pencil as Rs y gives 3x + 2y = 80 and 5x + 4y = 140.",
            "Fraction problems: let the fraction be x/y; a condition like 'the fraction becomes 1/2 when 1 is added to the numerator' converts to the linear equation 2(x + 1) = y.",
            "General 5-step plan: name the unknowns x and y, write both equations in standard form, solve by ratios or elimination/substitution, interpret (x, y) back in the words of the question, and reject values that make no sense, like negative ages.",
            "Units discipline: keep every quantity in one unit throughout; convert minutes to hours or paise to rupees before forming equations, not after."
          ],
          "keyTerms": [
            { "term": "Modelling", "meaning": "Converting the words of a problem into one or two linear equations." },
            { "term": "Back-substitution into context", "meaning": "Reinterpreting the algebraic solution as ages, speeds, money or digits and checking it against the story." },
            { "term": "Reducible conditions", "meaning": "Situations involving reciprocals or combined speeds that need a substitution before the pair becomes linear." }
          ],
          "trick": "DIGITS: number = 10 x tens + units. AGES: add the same years to BOTH people. BOATS: down = u + v, up = u - v. Write the equations BEFORE doing any arithmetic.",
          "examPointer": "In 5-mark word problems, 2-3 marks are reserved for forming the equations correctly; even with a slip in solving, correctly formed equations with stated variables earn the method marks."
        },
        {
          "heading": "Common Mistakes and Exam Traps",
          "points": [
            "Concluding 'infinitely many solutions' from a1/a2 = b1/b2 alone without checking c1/c2; the pair 2x + 3y = 9 and 4x + 6y = 5 has equal first two ratios but NO solution.",
            "Comparing ratios before bringing both equations to standard form; an equation written as 3y = 6x + 12 must first become 6x - 3y + 12 = 0.",
            "Sign errors during elimination: subtracting when the signs demand addition; write the aligned columns of x, y and the constant before combining.",
            "Forgetting to convert back after substituting u = 1/x: answering 'u = 1/3' instead of x = 3 loses the final mark.",
            "Accepting negative or fractional answers in word problems, such as a negative age or a fraction of a person, without rejecting them with a reason.",
            "In two-digit number problems, treating the number as x + y instead of 10x + y, or forgetting that reversing the digits gives 10y + x.",
            "Upstream and downstream confusion: downstream speed is u + v (stream helps) and upstream is u - v (stream resists); swapping them reverses the equations.",
            "Graph plotting with different scales on the two axes, or not extending the lines far enough for them to visibly cross, leading to a wrong read-off."
          ],
          "keyTerms": [
            { "term": "Standard form first", "meaning": "ax + by + c = 0 with all terms on one side before any comparison or elimination." },
            { "term": "Reality check", "meaning": "Rejecting solutions that are impossible in context, with a one-line justification." },
            { "term": "Aligned columns", "meaning": "Writing like terms of the two equations in columns to avoid sign slips during elimination." }
          ],
          "trick": "RATIO RULE: never trust equal ratios until c is also compared. BACK-CONVERT: u and v answers must return to x and y before the final statement.",
          "examPointer": "MCQ options in k-questions always include trap pairs like k = 6 and k = -6; verify with the full ratio test rather than memory to pick the right one."
        }
      ],
      "mcqs": [
        {
          "question": "The pair of equations 2x + 3y = 5 and 4x + 6y = 15 has",
          "options": ["a unique solution", "exactly two solutions", "infinitely many solutions", "no solution"],
          "answerIndex": 3,
          "explanation": "a1/a2 = 2/4 = 1/2 and b1/b2 = 3/6 = 1/2, but c1/c2 = 5/15 = 1/3, so the lines are parallel and there is no solution.",
          "difficulty": "medium",
          "pyq": "CBSE 2020"
        },
        {
          "question": "If a1/a2 = b1/b2 but not equal to c1/c2, then the pair of linear equations has",
          "options": ["a unique solution", "infinitely many solutions", "no solution", "exactly two solutions"],
          "answerIndex": 2,
          "explanation": "Equal first two ratios with a different third ratio mean parallel lines, so the pair is inconsistent with no solution.",
          "difficulty": "easy"
        },
        {
          "question": "The value of k for which the system kx + 2y = 5 and 3x + y = 1 has a unique solution is",
          "options": ["any k except 6", "k = 6 only", "k = 3 only", "any k except 3"],
          "answerIndex": 0,
          "explanation": "A unique solution needs k/3 not equal to 2/1, that is, k not equal to 6.",
          "difficulty": "medium",
          "pyq": "CBSE 2019"
        },
        {
          "question": "The pair 2x + 3y - 9 = 0 and 4x + 6y - 18 = 0 represents lines which are",
          "options": ["intersecting at one point", "parallel", "coincident", "perpendicular"],
          "answerIndex": 2,
          "explanation": "2/4 = 3/6 = 9/18 = 1/2, so both equations describe the same line and every point is a solution.",
          "difficulty": "easy"
        },
        {
          "question": "The solution of the pair x + y = 5 and x - y = 1 is",
          "options": ["(3, 2)", "(2, 3)", "(1, 4)", "(4, 1)"],
          "answerIndex": 0,
          "explanation": "Adding gives 2x = 6, x = 3, and then y = 2; both equations check: 3 + 2 = 5 and 3 - 2 = 1.",
          "difficulty": "easy"
        },
        {
          "question": "The pair of equations 3x - 5y + 7 = 0 and 6x - 10y - 7 = 0 is",
          "options": ["consistent with a unique solution", "inconsistent", "dependent with infinite solutions", "equivalent"],
          "answerIndex": 1,
          "explanation": "3/6 = 5/10 = 1/2 but 7/(-7) = -1, so a1/a2 = b1/b2 not equal to c1/c2; the lines are parallel and the pair is inconsistent.",
          "difficulty": "medium"
        },
        {
          "question": "A father is six times as old as his son. Four years hence, he will be four times as old as his son. The present ages of the son and the father (in years) are respectively",
          "options": ["6 and 36", "8 and 48", "10 and 60", "5 and 30"],
          "answerIndex": 0,
          "explanation": "6x + 4 = 4(x + 4) gives 6x + 4 = 4x + 16, so 2x = 12 and x = 6; the son is 6 and the father is 36.",
          "difficulty": "hard"
        },
        {
          "question": "If 99x + 101y = 499 and 101x + 99y = 501, then x equals",
          "options": ["3", "2", "4", "5"],
          "answerIndex": 0,
          "explanation": "Adding gives 200(x + y) = 1000, so x + y = 5; subtracting gives 2x - 2y = 2, so x - y = 1; hence x = 3 and y = 2.",
          "difficulty": "hard",
          "pyq": "CBSE 2020"
        },
        {
          "question": "The value of k for which the pair kx + 3y = k - 3 and 12x + ky = k has no solution is",
          "options": ["6", "-6", "3", "-3"],
          "answerIndex": 1,
          "explanation": "No solution needs k/12 = 3/k and (k-3)/k not equal to 3/k; the first gives k^2 = 36 so k = 6 or -6, and the second rules out k = 6, leaving k = -6.",
          "difficulty": "hard",
          "pyq": "CBSE 2020"
        },
        {
          "question": "The point of intersection of the lines x - y = 0 and 2x + y = 9 is",
          "options": ["(3, 3)", "(3, 0)", "(0, 9)", "(9, 9)"],
          "answerIndex": 0,
          "explanation": "From x - y = 0, y = x; substituting in 2x + y = 9 gives 3x = 9, so x = 3 and y = 3.",
          "difficulty": "medium"
        },
        {
          "question": "Two lines are represented by x + 2y - 4 = 0 and 2x + 4y - 12 = 0. Geometrically, these lines are",
          "options": ["intersecting at one point", "coincident", "parallel", "perpendicular"],
          "answerIndex": 2,
          "explanation": "1/2 = 2/4 = 1/2 but 4/12 = 1/3, so a1/a2 = b1/b2 not equal to c1/c2; the lines are parallel.",
          "difficulty": "medium"
        },
        {
          "question": "For the pair x + 2y = 3 and 5x + ky = 15 to have infinitely many solutions, k equals",
          "options": ["10", "5", "2", "15"],
          "answerIndex": 0,
          "explanation": "All three ratios must be equal: 1/5 = 2/k = 3/15 = 1/5, so 2/k = 1/5 gives k = 10.",
          "difficulty": "medium"
        }
      ],
      "boardQuestions": [
        {
          "question": "By comparing the ratios a1/a2, b1/b2 and c1/c2, find whether the pair of equations 5x - 4y + 8 = 0 and 7x + 6y - 9 = 0 has a unique solution, no solution or infinitely many solutions.",
          "marks": 2,
          "type": "SA",
          "probability": "high",
          "answer": "1) Both equations are already in standard form a1 x + b1 y + c1 = 0: here a1 = 5, b1 = -4, c1 = 8 and a2 = 7, b2 = 6, c2 = -9. 2) Compare the ratios: a1/a2 = 5/7 and b1/b2 = -4/6 = -2/3. 3) Since 5/7 is not equal to -2/3, the condition a1/a2 not equal to b1/b2 holds, so the two lines have different slopes and must cross at exactly one point. 4) Hence the pair is consistent and has a unique solution; comparing c1/c2 is unnecessary once the first two ratios differ."
        },
        {
          "question": "Solve the pair of equations 2x + 3y = 11 and 2x - 4y = -24, and hence find the value of m for which y = mx + 3.",
          "marks": 3,
          "type": "SA",
          "probability": "very-high",
          "answer": "1) Subtract the second equation from the first: (2x + 3y) - (2x - 4y) = 11 - (-24), so 7y = 35, giving y = 5. 2) Substitute y = 5 in 2x + 3y = 11: 2x + 15 = 11, so 2x = -4 and x = -2. 3) The solution is x = -2, y = 5; check: 2(-2) - 4(5) = -4 - 20 = -24, correct. 4) Since y = mx + 3, put x = -2 and y = 5: 5 = -2m + 3, so -2m = 2 and m = -1."
        },
        {
          "question": "The sum of a two-digit number and the number obtained by interchanging its digits is 66. If the digits of the number differ by 2, find the number. How many such numbers are there?",
          "marks": 5,
          "type": "LA",
          "probability": "high",
          "answer": "1) Let the tens digit be x and the units digit be y, so the number is 10x + y and the number with interchanged digits is 10y + x. 2) Sum condition: (10x + y) + (10y + x) = 11x + 11y = 11(x + y) = 66, so x + y = 6. 3) The digits differ by 2, so x - y = 2 or y - x = 2. 4) Solving x + y = 6 with x - y = 2 gives x = 4 and y = 2, so the number is 42. 5) Solving x + y = 6 with y - x = 2 gives x = 2 and y = 4, so the number is 24. 6) Check: 42 + 24 = 66 and in each number the digits differ by 2. Hence there are exactly two such numbers, 42 and 24."
        },
        {
          "question": "A boat goes 30 km upstream and 44 km downstream in 10 hours. In 13 hours, it can go 40 km upstream and 55 km downstream. Determine the speed of the stream and that of the boat in still water.",
          "marks": 5,
          "type": "LA",
          "probability": "high",
          "answer": "1) Let the speed of the boat in still water be u km/h and the speed of the stream be v km/h; then the downstream speed is (u + v) and the upstream speed is (u - v). 2) Using time = distance/speed: 30/(u - v) + 44/(u + v) = 10 and 40/(u - v) + 55/(u + v) = 13. 3) Put 1/(u - v) = p and 1/(u + v) = q: 30p + 44q = 10 and 40p + 55q = 13. 4) Multiply the first by 4 and the second by 3: 120p + 176q = 40 and 120p + 165q = 39; subtracting gives 11q = 1, so q = 1/11, meaning u + v = 11. 5) From 30p + 44/11 = 10: 30p = 6, so p = 1/5, meaning u - v = 5. 6) Adding u + v = 11 and u - v = 5 gives 2u = 16, so u = 8, and then v = 3. The boat moves at 8 km/h in still water and the stream flows at 3 km/h; check: 30/5 + 44/11 = 6 + 4 = 10 hours."
        },
        {
          "question": "Read the source and answer the questions: During a school fair, Ravi buys 3 pens and 2 pencils for Rs 80, while his friend buys 5 pens and 4 pencils for Rs 140 from the same shop, all items having fixed prices. (a) Frame the pair of linear equations for the cost of a pen and a pencil. (b) Solve the pair by elimination to find each price. (c) How much will 4 pens and 6 pencils cost together?",
          "marks": 4,
          "type": "CASE",
          "probability": "high",
          "answer": "(a) Let a pen cost Rs x and a pencil cost Rs y: 3x + 2y = 80 and 5x + 4y = 140. (b) Multiply the first equation by 2: 6x + 4y = 160. Subtract the second equation: (6x + 4y) - (5x + 4y) = 160 - 140, so x = 20. Substitute in 3x + 2y = 80: 60 + 2y = 80, so y = 10. A pen costs Rs 20 and a pencil Rs 10; check: 5(20) + 4(10) = 100 + 40 = 140. (c) Cost of 4 pens and 6 pencils = 4(20) + 6(10) = 80 + 60 = Rs 140."
        },
        {
          "question": "Read the source and answer the questions: The monthly incomes of two persons are in the ratio 9:7 and their monthly expenditures are in the ratio 4:3. Each of them manages to save Rs 2000 every month. The family welfare officer wants to know their actual incomes. (a) Frame the equations taking the incomes as 9x and 7x. (b) Solve to find x and the expenditures. (c) State the monthly income of each person.",
          "marks": 5,
          "type": "CASE",
          "probability": "medium",
          "answer": "(a) Incomes are 9x and 7x. Since each saves Rs 2000, the expenditures are 9x - 2000 and 7x - 2000. The expenditure ratio 4:3 gives (9x - 2000)/(7x - 2000) = 4/3. (b) Cross multiplication: 3(9x - 2000) = 4(7x - 2000), so 27x - 6000 = 28x - 8000, which gives x = 2000. Expenditures: 9(2000) - 2000 = 16000 and 7(2000) - 2000 = 12000; indeed 16000:12000 = 4:3. (c) Monthly incomes are 9 x 2000 = Rs 18000 and 7 x 2000 = Rs 14000; each person saves 18000 - 16000 = Rs 2000 and 14000 - 12000 = Rs 2000, as required."
        }
      ]
    },
    {
      "number": 4,
      "title": "Quadratic Equations",
      "summary": "This chapter introduces the standard form ax^2 + bx + c = 0 of a quadratic equation and explains what it means for a number to be a root of the equation. Three methods of finding roots are developed: factorisation by splitting the middle term, completing the square, and the quadratic formula x = (-b +/- sqrt(b^2 - 4ac))/(2a). The discriminant D = b^2 - 4ac decides the nature of the roots: two distinct real roots when D > 0, two equal roots when D = 0 and no real roots when D < 0. The chapter closes with word problems on numbers, ages, areas and speeds, where the given situation must first be converted into a quadratic equation.",
      "weightageMarks": 8,
      "difficulty": "medium",
      "hotTopics": [
        "Standard form of a quadratic equation",
        "Roots by factorisation and splitting the middle term",
        "Quadratic formula and discriminant D = b^2 - 4ac",
        "Nature of roots: distinct, equal, no real roots",
        "Completing the square",
        "Word problems: numbers, ages, areas, speeds"
      ],
      "sections": [
        {
          "heading": "Definitions: Standard Form and Roots",
          "points": [
            "A quadratic equation in x is an equation of the form ax^2 + bx + c = 0, where a, b, c are real numbers and a is not 0; this is called the standard form.",
            "The condition a not 0 is essential: if a = 0, the x^2 term disappears and the equation becomes linear.",
            "A real number alpha is a root (or solution) of ax^2 + bx + c = 0 if substituting alpha makes the equation true, that is, a alpha^2 + b alpha + c = 0.",
            "Since the highest power of x is 2, a quadratic equation has at most two roots, and the two roots may be equal.",
            "To check whether an equation is quadratic, simplify it fully first; (x + 1)^2 = 2(x - 3) simplifies to x^2 + 7 = 0, which is quadratic, but (x - 2)^2 = x^2 + 4 simplifies to -4x = 0, which is linear.",
            "Any equation reducible to ax^2 + bx + c = 0 after simplification is quadratic; for example, x - 3/x = 2, multiplied throughout by x (x not 0), becomes x^2 - 2x - 3 = 0.",
            "Examples in standard form: 2x^2 + x - 300 = 0 with a = 2, b = 1, c = -300; x^2 - 49 = 0 with b = 0; 3x^2 - 5x = 0 with c = 0."
          ],
          "keyTerms": [
            { "term": "Standard form", "meaning": "ax^2 + bx + c = 0 with a not 0 and all terms collected on one side." },
            { "term": "Root", "meaning": "A value of x that satisfies the quadratic equation; also called a solution." },
            { "term": "Degree 2", "meaning": "The highest power of x in a quadratic equation, which is why it has at most two roots." }
          ],
          "trick": "SIMPLIFY FIRST, JUDGE LATER: many equations wear a quadratic costume but become linear after expansion. And a can never be 0, while b and c may be.",
          "examPointer": "Identifying which of the four given equations is truly quadratic is a repeated 1-mark MCQ; expand every product and cancel before deciding."
        },
        {
          "heading": "Formulas: The Three Methods of Finding Roots",
          "points": [
            "Factorisation: write ax^2 + bx + c = 0 as a product of two linear factors; for x^2 - 3x - 10 = 0: x^2 - 5x + 2x - 10 = (x - 5)(x + 2) = 0, so x = 5 or x = -2.",
            "Splitting the middle term needs two numbers whose product is a x c and whose sum is b; for 6x^2 + 7x - 3 = 0: product -18 and sum 7 gives 9 and -2: 6x^2 + 9x - 2x - 3 = (2x + 3)(3x - 1) = 0, so x = -3/2 or x = 1/3.",
            "Completing the square: make the coefficient of x^2 equal to 1 and add the square of half the coefficient of x; x^2 + 8x + 16 = (x + 4)^2 because (8/2)^2 = 16.",
            "Quadratic formula: x = (-b +/- sqrt(b^2 - 4ac))/(2a) gives both roots directly; for 2x^2 - 5x + 3 = 0, D = 25 - 24 = 1, so x = (5 +/- 1)/4, that is, x = 3/2 or x = 1.",
            "Discriminant formula: D = b^2 - 4ac decides the nature of the roots before any solving is done.",
            "Sum and product of roots: for ax^2 + bx + c = 0, the sum of roots is -b/a and the product is c/a, linking this chapter with polynomials.",
            "Equations reducible to quadratic: for x - 3/x = 2, multiply by x (x not 0) to get x^2 - 2x - 3 = 0 = (x - 3)(x + 1), so x = 3 or x = -1."
          ],
          "keyTerms": [
            { "term": "Quadratic formula", "meaning": "x = (-b +/- sqrt(b^2 - 4ac))/(2a), obtained by completing the square of the standard form." },
            { "term": "Splitting the middle term", "meaning": "Writing bx as a sum of two terms so that grouping yields two linear factors." },
            { "term": "Reducible equation", "meaning": "An equation in 1/x or similar forms that becomes quadratic after multiplying by a suitable power of x." }
          ],
          "trick": "Split when the numbers come easily, FORMULA when they do not, COMPLETE THE SQUARE only when asked to. Inside sqrt(b^2 - 4ac), the minus 4ac turns a negative c into a plus.",
          "examPointer": "Questions that specify the method, 'solve by completing the square' or 'using the quadratic formula', must be answered by that method; a correct answer by another method loses the method marks."
        },
        {
          "heading": "Theorem and Key Statements: Nature of Roots via the Discriminant",
          "points": [
            "Statement: the quadratic equation ax^2 + bx + c = 0 (a not 0) has (i) two distinct real roots if D = b^2 - 4ac > 0, (ii) two equal real roots if D = 0, and (iii) no real roots if D < 0.",
            "Worked check 1: 2x^2 - 4x + 3 = 0 has D = 16 - 24 = -8 < 0, so it has no real roots.",
            "Worked check 2: x^2 - 6x + 9 = 0 has D = 36 - 36 = 0, so the two roots are equal, both x = 3.",
            "Worked check 3: x^2 + 5x + 2 = 0 has D = 25 - 8 = 17 > 0, so it has two distinct real roots.",
            "Finding k: for kx^2 + 6x + 1 = 0 to have equal roots, D = 36 - 4k = 0 gives k = 9; for 2x^2 + kx + 3 = 0, D = k^2 - 24 = 0 gives k = +/- 2 sqrt(6).",
            "When D = 0, the single repeated root is x = -b/(2a); for x^2 - 6x + 9 = 0 this is 6/2 = 3.",
            "Real roots exist exactly when D is greater than or equal to 0; when D < 0, the equation simply has no real roots.",
            "Nature questions never ask for the roots themselves; they ask only to compare D with 0, so do not waste time solving the equation."
          ],
          "keyTerms": [
            { "term": "Discriminant", "meaning": "D = b^2 - 4ac, the expression under the square root in the quadratic formula." },
            { "term": "Equal roots", "meaning": "The case D = 0, where the parabola touches the x-axis and both roots equal -b/(2a)." },
            { "term": "No real roots", "meaning": "The case D < 0, where sqrt(D) is not a real number and the parabola misses the x-axis." }
          ],
          "trick": "D is the DESTINY dial: D POSITIVE = two different roots, D ZERO = twin roots, D NEGATIVE = none real. Compute D first; solve only if the question wants roots.",
          "examPointer": "1-2 mark nature-of-roots questions and 'find k for equal roots' are board regulars; always end with one explicit sentence linking the sign of D to the nature of the roots, as the conclusion carries a mark."
        },
        {
          "heading": "Worked Strategy: Completing the Square Step by Step",
          "points": [
            "Step 1: make the coefficient of x^2 equal to 1 by dividing the whole equation by a; 2x^2 - 7x + 3 = 0 becomes x^2 - (7/2)x + 3/2 = 0.",
            "Step 2: shift the constant to the right side: x^2 - (7/2)x = -3/2.",
            "Step 3: add the square of half the coefficient of x, (7/4)^2 = 49/16, to both sides: x^2 - (7/2)x + 49/16 = -3/2 + 49/16 = (-24 + 49)/16 = 25/16.",
            "Step 4: write the left side as a square: (x - 7/4)^2 = 25/16, so x - 7/4 = +/- 5/4, giving x = 3 or x = 1/2.",
            "Verification: 2(3)^2 - 7(3) + 3 = 18 - 21 + 3 = 0 and 2(1/2)^2 - 7(1/2) + 3 = 1/2 - 7/2 + 3 = 0; both roots check.",
            "Perfect-square spotting: keep fractions in simplest form, since (5/4)^2 = 25/16 and not 10/8; the added term is always (half the x-coefficient) squared.",
            "When the question says 'by completing the square', show all four steps; jumping straight to the formula defeats the purpose and loses marks."
          ],
          "keyTerms": [
            { "term": "Completing the square", "meaning": "Rewriting ax^2 + bx as a(x + b/2a)^2 minus a constant, the bridge to the quadratic formula." },
            { "term": "Half-coefficient square", "meaning": "The term (b/2a)^2 added to both sides to create a perfect square." },
            { "term": "Verification", "meaning": "Substituting each root into the original equation to confirm it gives 0." }
          ],
          "trick": "DIVIDE, SHIFT, HALF AND SQUARE, ROOT BOTH SIDES. The number you add is always (half the x-coefficient) squared, and it goes to BOTH sides.",
          "examPointer": "The completing-the-square derivation of the quadratic formula is a classic 3-4 mark question; reproduce the four steps with fractions kept exact, never decimal."
        },
        {
          "heading": "Worked Strategy: Word Problems into Quadratics",
          "points": [
            "Consecutive numbers: squares of two consecutive positive integers summing to 365: x^2 + (x + 1)^2 = 365, so 2x^2 + 2x - 364 = 0, that is x^2 + x - 182 = 0 = (x + 14)(x - 13), giving x = 13; the numbers are 13 and 14.",
            "Ages: Rohan's mother is 26 years older than Rohan; three years from now the product of their ages will be 360: (x + 3)(x + 29) = 360, so x^2 + 32x - 273 = 0; D = 1024 + 1092 = 2116 = 46^2, giving x = (-32 + 46)/2 = 7; Rohan is 7 years old.",
            "Area: a rectangular garden with breadth x and length x + 3 and area 40 sq m: x(x + 3) = 40, so x^2 + 3x - 40 = 0 = (x + 8)(x - 5), giving x = 5; the garden is 5 m by 8 m and the root -8 is rejected.",
            "Speed: a train covers 360 km; 5 km/h faster would save 1 hour: 360/x - 360/(x + 5) = 1 gives x^2 + 5x - 1800 = 0 = (x + 45)(x - 40), so x = 40 km/h.",
            "Numbers: the difference of squares of two numbers is 180 and the square of the smaller is 8 times the larger: y^2 - x^2 = 180 with x^2 = 8y gives y^2 - 8y - 180 = 0 = (y - 18)(y + 10), so y = 18 and x = 12.",
            "Always declare what x stands for, form the equation, solve, and then answer in words with units; an unsolved x with no statement loses presentation marks.",
            "Reject the algebraically valid but physically impossible root with one line of reason: negative lengths, negative ages, fractional persons or negative speeds."
          ],
          "keyTerms": [
            { "term": "Modelling equation", "meaning": "The quadratic formed directly from the conditions of the word problem." },
            { "term": "Admissible root", "meaning": "The root that survives the reality check of the context; the other root is discarded with a reason." },
            { "term": "Uniform speed", "meaning": "Constant speed assumed in speed problems so that time = distance/speed applies." }
          ],
          "trick": "TRANSLATE, SOLVE, REJECT, REPLY. Negative roots are almost always born to be rejected; the examiner waits for the sentence 'since length/age/speed cannot be negative, x = ... is rejected'.",
          "examPointer": "The 5-mark word problem is nearly always from trains, ages, areas or consecutive numbers; marks are split roughly 1 for variables, 2 for the equation, 1 for solving and 1 for the final interpreted answer."
        },
        {
          "heading": "Common Mistakes and Exam Traps",
          "points": [
            "Forgetting the plus-or-minus when square-rooting during completing the square; (x - 7/4)^2 = 25/16 gives TWO values of x, not one.",
            "Substituting b with its wrong sign in the quadratic formula; for x^2 - 5x + 6 = 0, the term -b equals +5, not -5.",
            "Computing D as b^2 + 4ac when c is negative; the formula is D = b^2 - 4ac always, so a negative c makes -4c positive.",
            "Saying 'roots do not exist' for D < 0; the precise statement is 'no REAL roots exist'.",
            "Keeping both roots in word problems without the rejection sentence; the rejection with reason carries a mark.",
            "Multiplying 1/x-type equations by x while forgetting to state that x is not 0.",
            "Unit errors: mixing km/h with km/min or metres with centimetres inside one equation.",
            "Arithmetic slips under the root, like reading 2116 as 2216; check that your sqrt(D) squared returns D before using it."
          ],
          "keyTerms": [
            { "term": "Plus-minus loss", "meaning": "Dropping one root by writing only the positive square root." },
            { "term": "No real roots", "meaning": "Correct wording for D < 0; the equation still has roots outside the real numbers, beyond this syllabus." },
            { "term": "Rejection sentence", "meaning": "The one-line reason for discarding an inadmissible root in a word problem." }
          ],
          "trick": "SIGNS inside D: b squared erases the sign of b, and minus 4ac flips the sign of c. Before answering a nature question, RECOMPUTE D once; most nature errors are D errors, not concept errors.",
          "examPointer": "Options in nature-of-roots MCQs are built from D sign errors; expand b^2 carefully for negative b and remember that -4ac turns positive when c is negative."
        }
      ],
      "mcqs": [
        {
          "question": "Which of the following is a quadratic equation?",
          "options": ["(x + 2)^2 = x^2 - 8", "(x + 1)(x - 2) = x + 5", "x^3 - x^2 + 2 = 0", "5x - 3 = 0"],
          "answerIndex": 1,
          "explanation": "(x + 1)(x - 2) = x + 5 simplifies to x^2 - 2x - 7 = 0, which is quadratic; the first becomes linear 4x = -12, the third is cubic and the fourth is linear.",
          "difficulty": "medium",
          "pyq": "CBSE 2020"
        },
        {
          "question": "The roots of the equation x^2 - 9 = 0 are",
          "options": ["3 only", "-3 only", "3 and -3", "9 and -9"],
          "answerIndex": 2,
          "explanation": "x^2 = 9 gives x = +/- 3, so both 3 and -3 are roots.",
          "difficulty": "easy"
        },
        {
          "question": "The discriminant of 2x^2 - 4x + 3 = 0 is",
          "options": ["-8", "8", "40", "-40"],
          "answerIndex": 0,
          "explanation": "D = b^2 - 4ac = (-4)^2 - 4(2)(3) = 16 - 24 = -8.",
          "difficulty": "easy"
        },
        {
          "question": "The equation 2x^2 - 4x + 3 = 0 has",
          "options": ["two distinct real roots", "two equal real roots", "no real roots", "more than two real roots"],
          "answerIndex": 2,
          "explanation": "D = 16 - 24 = -8 < 0, so the equation has no real roots.",
          "difficulty": "easy"
        },
        {
          "question": "For what value of k does kx^2 + 6x + 1 = 0 have equal roots?",
          "options": ["9", "-9", "6", "4"],
          "answerIndex": 0,
          "explanation": "Equal roots need D = 36 - 4k = 0, so k = 9 (with k not 0, which holds).",
          "difficulty": "medium",
          "pyq": "CBSE 2019"
        },
        {
          "question": "The roots of x^2 - 3x - 10 = 0 are",
          "options": ["5 and -2", "-5 and 2", "5 and 2", "-5 and -2"],
          "answerIndex": 0,
          "explanation": "x^2 - 3x - 10 = (x - 5)(x + 2) = 0, so the roots are 5 and -2.",
          "difficulty": "easy"
        },
        {
          "question": "The nature of the roots of x^2 - 6x + 9 = 0 is",
          "options": ["two distinct real roots", "two equal real roots", "no real roots", "one real and one non-real root"],
          "answerIndex": 1,
          "explanation": "D = 36 - 36 = 0, so both roots are equal (x = 3, twice).",
          "difficulty": "easy"
        },
        {
          "question": "The roots of 2x^2 - 5x + 3 = 0 are",
          "options": ["3/2 and 1", "2/3 and 1", "3/2 and 2", "-3/2 and -1"],
          "answerIndex": 0,
          "explanation": "D = 25 - 24 = 1, so x = (5 +/- 1)/4, giving x = 3/2 or x = 1.",
          "difficulty": "medium"
        },
        {
          "question": "The two positive consecutive integers whose squares add up to 365 are",
          "options": ["13 and 14", "12 and 15", "14 and 15", "10 and 17"],
          "answerIndex": 0,
          "explanation": "13^2 + 14^2 = 169 + 196 = 365; solving x^2 + (x + 1)^2 = 365 gives x = 13.",
          "difficulty": "medium",
          "pyq": "CBSE 2019"
        },
        {
          "question": "The altitude of a right triangle is 7 cm less than its base. If the hypotenuse is 13 cm, the base is",
          "options": ["12 cm", "5 cm", "10 cm", "15 cm"],
          "answerIndex": 0,
          "explanation": "b^2 + (b - 7)^2 = 169 gives b^2 - 7b - 60 = 0 = (b - 12)(b + 5), so the base is 12 cm and the altitude 5 cm (the 5-12-13 triangle).",
          "difficulty": "hard"
        },
        {
          "question": "What must be added to x^2 + 8x to make it a perfect square?",
          "options": ["16", "8", "64", "4"],
          "answerIndex": 0,
          "explanation": "Half of 8 is 4, and 4^2 = 16; indeed x^2 + 8x + 16 = (x + 4)^2.",
          "difficulty": "easy"
        },
        {
          "question": "The roots of 100x^2 - 20x + 1 = 0 are",
          "options": ["1/10 and 1/10", "1/10 and -1/10", "1/20 and 1/20", "10 and 1/10"],
          "answerIndex": 0,
          "explanation": "100x^2 - 20x + 1 = (10x - 1)^2 = 0, so both roots equal 1/10.",
          "difficulty": "medium",
          "pyq": "CBSE 2020"
        }
      ],
      "boardQuestions": [
        {
          "question": "Find the roots of the quadratic equation x^2 - 6x + 8 = 0 by factorisation.",
          "marks": 2,
          "type": "SA",
          "probability": "very-high",
          "answer": "1) Split the middle term: we need two numbers with product 8 and sum -6, namely -2 and -4. 2) x^2 - 6x + 8 = x^2 - 2x - 4x + 8 = x(x - 2) - 4(x - 2) = (x - 2)(x - 4). 3) So (x - 2)(x - 4) = 0, giving x = 2 or x = 4. 4) Check: 2^2 - 12 + 8 = 0 and 4^2 - 24 + 8 = 0, so both 2 and 4 are roots."
        },
        {
          "question": "Find the value(s) of k for which the equation kx(x - 2) + 6 = 0 has equal roots. Also find the roots for this value of k.",
          "marks": 3,
          "type": "SA",
          "probability": "high",
          "answer": "1) Expand: kx(x - 2) + 6 = 0 becomes kx^2 - 2kx + 6 = 0. 2) For equal roots the discriminant must be 0: D = (-2k)^2 - 4(k)(6) = 4k^2 - 24k = 4k(k - 6) = 0. 3) So k = 0 or k = 6; k = 0 is rejected because a quadratic equation needs a not 0. 4) Hence k = 6. 5) For k = 6: 6x^2 - 12x + 6 = 0; dividing by 6 gives x^2 - 2x + 1 = 0, that is (x - 1)^2 = 0, so the equal roots are x = 1 and x = 1."
        },
        {
          "question": "A train travels 360 km at a uniform speed. If the speed had been 5 km/h more, it would have taken 1 hour less for the same journey. Find the speed of the train.",
          "marks": 5,
          "type": "LA",
          "probability": "very-high",
          "answer": "1) Let the original uniform speed be x km/h; then the time taken is 360/x hours. 2) With speed (x + 5) km/h, the time is 360/(x + 5) hours, which is 1 hour less: 360/x - 360/(x + 5) = 1. 3) Multiplying by x(x + 5): 360(x + 5) - 360x = x(x + 5), so 1800 = x^2 + 5x, giving x^2 + 5x - 1800 = 0. 4) Factorise: x^2 + 45x - 40x - 1800 = x(x + 45) - 40(x + 45) = (x + 45)(x - 40) = 0, so x = -45 or x = 40. 5) Reject x = -45 since speed cannot be negative; hence the speed of the train is 40 km/h. 6) Check: 360/40 = 9 hours and 360/45 = 8 hours, and 9 - 8 = 1 hour, as stated."
        },
        {
          "question": "The difference of squares of two numbers is 180. The square of the smaller number is 8 times the larger number. Find the two numbers.",
          "marks": 5,
          "type": "LA",
          "probability": "high",
          "answer": "1) Let the larger number be y and the smaller number be x. 2) Difference of squares: y^2 - x^2 = 180. 3) The square of the smaller is 8 times the larger: x^2 = 8y. 4) Substituting: y^2 - 8y = 180, so y^2 - 8y - 180 = 0. 5) Factorise: y^2 - 18y + 10y - 180 = y(y - 18) + 10(y - 18) = (y - 18)(y + 10) = 0, so y = 18 or y = -10. 6) y = -10 is rejected because x^2 = 8y would then be negative, which is impossible for a real x. 7) For y = 18: x^2 = 8 x 18 = 144, so x = 12 taking the positive value. The two numbers are 18 and 12; check: 18^2 - 12^2 = 324 - 144 = 180 and 12^2 = 144 = 8 x 18."
        },
        {
          "question": "Read the source and answer the questions: A school plans a rectangular flower bed whose length is 3 metres more than its breadth x, and whose area must be 40 square metres. (a) Form the quadratic equation in x. (b) Solve it and give the dimensions. (c) One root of your equation has to be rejected; name it and give the reason.",
          "marks": 4,
          "type": "CASE",
          "probability": "very-high",
          "answer": "(a) Breadth = x m and length = (x + 3) m, so the area condition is x(x + 3) = 40, which gives x^2 + 3x - 40 = 0. (b) Factorise: x^2 + 8x - 5x - 40 = x(x + 8) - 5(x + 8) = (x + 8)(x - 5) = 0, so x = -8 or x = 5. Taking the admissible root x = 5, the breadth is 5 m and the length is 8 m; check: 5 x 8 = 40 square metres. (c) The root x = -8 must be rejected, because a breadth of -8 metres is meaningless; length and breadth are physical quantities and cannot be negative."
        },
        {
          "question": "Read the source and answer the questions: Rohan's mother is 26 years older than him. The product of their ages in years, 3 years from now, will be 360. Rohan wants to work out his present age from this information. (a) Taking Rohan's present age as x years, form the quadratic equation. (b) Solve the equation and find Rohan's present age. (c) Verify the answer and state why the other root is rejected.",
          "marks": 4,
          "type": "CASE",
          "probability": "high",
          "answer": "(a) Rohan's age now is x and his mother's age now is x + 26. Three years from now their ages are x + 3 and x + 29, and the product is 360: (x + 3)(x + 29) = 360, so x^2 + 32x + 87 = 360, giving x^2 + 32x - 273 = 0. (b) D = 32^2 - 4(1)(-273) = 1024 + 1092 = 2116 and sqrt(2116) = 46, so x = (-32 + 46)/2 = 7 or x = (-32 - 46)/2 = -39. Hence Rohan is 7 years old. (c) Verification: 3 years from now the ages are 10 and 36, and 10 x 36 = 360, which matches; the root x = -39 is rejected because age cannot be negative."
        }
      ]
    }
  ]
};
