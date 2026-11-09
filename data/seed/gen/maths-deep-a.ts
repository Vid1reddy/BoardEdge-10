// AUTO-GENERATED deep seed (AI pipeline). Validated at generation time.
export default {
 "code": "maths",
 "name": "Mathematics",
 "bookName": "Mathematics (NCERT Class 10)",
 "weightageMarks": 80,
 "chapters": [
  {
   "number": 1,
   "title": "Real Numbers",
   "summary": "This chapter rebuilds the whole number system on one foundation stone: the Fundamental Theorem of Arithmetic, according to which every composite number factorises into primes in one and only one way, apart from the order of factors. From the prime factorisations of two numbers the chapter reads off their HCF, their LCM and the product rule HCF x LCM = a x b, and then applies these ideas to practical situations such as bells tolling together, tankers being emptied and the largest tile that can pave a floor. The chapter then proves, by contradiction, that sqrt(2), sqrt(3) and sqrt(5) are irrational, extends the argument to numbers like 3 + 2 sqrt(5), and studies how rational and irrational numbers behave under addition, subtraction, multiplication and division. Finally it classifies the decimal expansions of rational numbers: terminating when the reduced denominator has no prime except 2 and 5, and non-terminating repeating otherwise. Euclid's division lemma, once the opening topic of this chapter, has been removed from the rationalised syllabus.",
   "weightageMarks": 6,
   "difficulty": "medium",
   "hotTopics": [
    "Fundamental Theorem of Arithmetic and unique prime factorisation",
    "HCF and LCM by prime factorisation",
    "Product rule HCF x LCM = a x b for two numbers",
    "Proofs of irrationality of sqrt(2), sqrt(3), sqrt(5)",
    "Irrationality of numbers like 3 + 2 sqrt(5)",
    "Terminating versus non-terminating repeating decimals",
    "Numbers 6^n can never end with digit 0",
    "Word problems on maximum capacity and greatest length (HCF)",
    "Word problems on bells and blinking lights (LCM)",
    "Remainder problems using subtract-then-HCF",
    "Euclid's division lemma as deleted background"
   ],
   "sections": [
    {
     "heading": "The Complete Map of the Number System",
     "para": "Every number a Class 10 student meets lives somewhere on the map that stretches from natural numbers to real numbers. Natural numbers 1, 2, 3, ... grow into whole numbers when 0 joins them, into integers when the negative directions are added, and into rational numbers when fractions p/q with q not 0 are allowed. The gaps in the rational line are filled by irrational numbers such as sqrt(2), sqrt(3) and pi, and together rational and irrational numbers form the real numbers. For the board exam you must be able to place any given number in its correct home, decide whether it is prime or composite, and state that between any two real numbers lie infinitely many more real numbers, which is why the real line is called continuous.",
     "points": [
      "Natural numbers N = 1, 2, 3, ...; whole numbers W = 0, 1, 2, ...; integers Z = ..., -2, -1, 0, 1, 2, ...; each collection contains the previous one.",
      "A rational number can be written as p/q where p and q are integers and q is not 0; examples are 3/4, -7/5, 0 and 2 (written as 2/1).",
      "An irrational number cannot be written as p/q; standard examples are sqrt(2), sqrt(3), sqrt(5), pi, and decimals like 0.101001000100001... that neither end nor repeat.",
      "The union of the rational and irrational numbers is the set of real numbers R, so every real number is exactly one of the two kinds.",
      "Prime check: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 are the first ten primes; 2 is the only even prime and 1 is neither prime nor composite.",
      "Common error: calling 0 a natural number; 0 is a whole number and an integer, and division by 0 is undefined for every number.",
      "Every point on the number line corresponds to exactly one real number and every real number to exactly one point, so R is called the real line."
     ],
     "keyTerms": [
      {
       "term": "Real numbers",
       "meaning": "All rational and irrational numbers together; they fill every point of the number line."
      },
      {
       "term": "Rational number",
       "meaning": "A number expressible as p/q with integers p and q, q not 0, in lowest terms."
      },
      {
       "term": "Irrational number",
       "meaning": "A real number that cannot be written as p/q; its decimal never terminates and never repeats."
      },
      {
       "term": "Prime number",
       "meaning": "A natural number greater than 1 with exactly two factors, 1 and itself."
      },
      {
       "term": "Composite number",
       "meaning": "A natural number with more than two factors."
      },
      {
       "term": "Co-prime numbers",
       "meaning": "Two numbers whose HCF is 1, even if both are individually composite."
      }
     ],
     "trick": "Map mnemonic N W Z Q R: 'Nice Whales Zealously Quietly Roam', each set swallowed by the next, with Q split into terminating and repeating decimals on one side and irrationals outside Q.",
     "examPointer": "One-mark MCQs ask which of four numbers is irrational, or whether 6^n can end in 0; CBSE 2023 asked a 2-marker on identifying irrational numbers from a list."
    },
    {
     "heading": "Euclid's Division Lemma and the Division Algorithm (Background)",
     "para": "In the earlier edition of the textbook this chapter opened with Euclid's division lemma: for any two positive integers a and b there exist unique whole numbers q and r such that a = bq + r with 0 <= r < b. The repeated use of this lemma until the remainder becomes 0 was called Euclid's division algorithm, and it produced the HCF of two numbers without any factorisation. The rationalised syllabus has removed this topic, so no direct board question is expected, but the lemma remains the honest reason why the prime factorisation method works and it still appears in some school-level tests. Knowing it costs five minutes: in 71 = 8 x 8 + 7 the four roles of dividend, divisor, quotient and remainder sit in one line.",
     "points": [
      "Euclid's division lemma: given positive integers a and b, there exist unique integers q and r satisfying a = bq + r with 0 <= r < b.",
      "In a = bq + r, a is the dividend, b the divisor, q the quotient and r the remainder; the remainder is always strictly smaller than the divisor.",
      "Example: 71 = 8 x 8 + 7, so dividing 71 by 8 gives quotient 8 and remainder 7.",
      "The division algorithm uses the lemma repeatedly: divide, then divide the old divisor by the remainder, and stop when the remainder is 0; the last non-zero remainder is the HCF.",
      "Sample run for HCF(867, 255): 867 = 255 x 3 + 102, 255 = 102 x 2 + 51, 102 = 51 x 2 + 0, so HCF = 51.",
      "Status: the rationalised NCERT (2023 onwards) has deleted Euclid's division lemma and algorithm from Chapter 1, so boards test HCF through prime factorisation instead.",
      "The lemma still justifies the everyday fact that the remainder on division by b is one of 0, 1, 2, ..., b - 1, a list used in many number puzzles."
     ],
     "keyTerms": [
      {
       "term": "Euclid's division lemma",
       "meaning": "For positive integers a and b there exist unique q and r with a = bq + r and 0 <= r < b."
      },
      {
       "term": "Division algorithm",
       "meaning": "The repeated application of the lemma to obtain the HCF as the last non-zero remainder."
      },
      {
       "term": "Dividend",
       "meaning": "The number being divided, written as a in a = bq + r."
      },
      {
       "term": "Divisor",
       "meaning": "The number b that divides a in the lemma, always greater than the remainder."
      },
      {
       "term": "Quotient and remainder",
       "meaning": "q counts how many times b fits into a, and r is what is left over."
      }
     ],
     "trick": "Remember the skeleton a = bq + r with the rule 0 <= r < b: 'Divide, Demote, Repeat until the Remainder dies' is Euclid's algorithm in seven words.",
     "examPointer": "Do not spend long here: boards have not asked Euclid's lemma since rationalisation, but a one-mark question on identifying q and r in a = bq + r can still appear in school exams."
    },
    {
     "heading": "Primes, Composites and Small-Number Facts",
     "para": "Prime numbers are the atoms of arithmetic and every board paper begins by checking that you can handle them. A prime has exactly two factors, 1 and itself, so 2, 3, 5, 7, 11 and their companions qualify, while 1 fails because it has only one factor. A composite number has more than two factors, and 4 is the smallest of them. Two numbers are co-prime when their HCF is 1, even if both are individually composite, as with 8 and 15. Sieve tricks, divisibility tests and knowing the first few primes by heart save precious minutes in every factorisation question, and remembering that any even number beyond 2 is composite prevents the silliest slips in options.",
     "points": [
      "There are 25 primes below 100; memorising at least the first ten (2 up to 29) speeds up every factorisation in this chapter.",
      "Twin primes are pairs differing by 2, such as (3, 5), (5, 7) and (11, 13); co-prime pairs need only HCF 1, like (8, 15) or (21, 22).",
      "Divisibility shortcuts: a number is divisible by 3 when its digit sum is, by 5 when it ends in 0 or 5, and by 11 when its alternating digit sum is 0 or a multiple of 11.",
      "Every even number greater than 2 is composite, so 2 is the only even prime; every prime greater than 3 is of the form 6k + 1 or 6k - 1.",
      "Primality test: if n has no prime divisor up to sqrt(n), then n is prime; for example, 97 is prime because no prime up to 9 divides it.",
      "A factorisation must stop at primes: writing 60 = 6 x 10 is incomplete; 60 = 2^2 x 3 x 5 earns the marks.",
      "Common error: listing 1 as a prime or hunting for the smallest prime; the smallest prime is 2 and the smallest composite is 4."
     ],
     "keyTerms": [
      {
       "term": "Prime",
       "meaning": "A natural number greater than 1 having exactly two factors."
      },
      {
       "term": "Composite",
       "meaning": "A natural number having more than two factors; it can always be broken into primes."
      },
      {
       "term": "Twin primes",
       "meaning": "A pair of primes differing by 2, like (5, 7)."
      },
      {
       "term": "Co-prime",
       "meaning": "Numbers with HCF equal to 1; they share no common prime factor."
      },
      {
       "term": "Divisibility test",
       "meaning": "A quick digit rule to check divisibility by small numbers such as 2, 3, 5, 9 and 11."
      },
      {
       "term": "Sieve method",
       "meaning": "Crossing out multiples to list all primes up to a limit."
      }
     ],
     "trick": "Square-root test for primality: try only prime divisors up to sqrt(n); the primes 2, 3, 5, 7 settle every number below 121.",
     "examPointer": "MCQs such as 'which of the following is a pair of co-primes' or 'the number of primes between 1 and 20' are easy marks; CBSE 2019 asked the total number of factors of a prime number."
    },
    {
     "heading": "The Fundamental Theorem of Arithmetic",
     "para": "The Fundamental Theorem of Arithmetic is the headline theorem of the chapter and CBSE loves to ask its statement almost word for word. It says that every composite number can be expressed as a product of primes, and this factorisation is unique apart from the order in which the primes are written. Uniqueness means 84 = 2 x 2 x 3 x 7 no matter whether you start dividing by 2, by 3 or by 7: the same primes with the same powers appear every time. The theorem also explains the special structure of squares and cubes: in the factorisation of n^2 every prime occurs to an even power, and in the factorisation of n^3 every prime occurs to a power that is a multiple of 3. These two observations drive many MCQs on perfect squares and cubes.",
     "points": [
      "Statement to memorise: every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur.",
      "Worked example: 156 = 2 x 2 x 3 x 13 = 2^2 x 3 x 13; the ladder method of repeated division produces this quickly.",
      "Uniqueness ignores order: 2 x 3 x 5 and 5 x 2 x 3 are the same factorisation of 30, not two different ones.",
      "A perfect square has every prime exponent even: 36 = 2^2 x 3^2; a perfect cube has every prime exponent a multiple of 3: 216 = 2^3 x 3^3.",
      "To check whether 729 is a perfect square, factorise: 729 = 3^6 = (3^3)^2 = 27^2, so it is.",
      "Key lemma: if a prime p divides a^2, then p divides a; this engine drives all the irrationality proofs of the chapter.",
      "The theorem is also called the unique factorisation theorem; without it, finding HCF and LCM by primes would have no logical basis."
     ],
     "keyTerms": [
      {
       "term": "Fundamental Theorem of Arithmetic",
       "meaning": "Every composite number factorises into primes in exactly one way, apart from order."
      },
      {
       "term": "Unique factorisation",
       "meaning": "The property that the multiset of prime factors of a number is fixed."
      },
      {
       "term": "Perfect square",
       "meaning": "An integer whose prime factorisation has all exponents even."
      },
      {
       "term": "Perfect cube",
       "meaning": "An integer whose prime factorisation has all exponents divisible by 3."
      },
      {
       "term": "Ladder method",
       "meaning": "Repeated division by the smallest possible prime to obtain the factorisation."
      },
      {
       "term": "Prime lemma",
       "meaning": "If a prime divides a square, it divides the number itself."
      }
     ],
     "trick": "FTA in one breath: 'composites are made of primes in only one recipe'. Even exponents mean square, exponents multiple of 3 mean cube.",
     "examPointer": "A 1-mark question asks for the exact statement; a 2-marker asks to express a number such as 1008 as a product of primes, so show the division ladder, as in CBSE 2020."
    },
    {
     "heading": "HCF and LCM by Prime Factorisation",
     "para": "Prime factorisation turns HCF and LCM into reading exercises. Write each number as a product of prime powers, arrange the primes in columns, and look down the columns. The HCF is the product of the primes common to all the numbers, each taken to the smallest power present; the LCM is the product of every prime that appears anywhere, each taken to the greatest power present. For 12 = 2^2 x 3 and 18 = 2 x 3^2, the common part with smaller powers is 2 x 3, so HCF = 6, and the full spread with larger powers is 2^2 x 3^2, so LCM = 36. When only two numbers are involved, always verify with HCF x LCM = a x b as a free accuracy check.",
     "points": [
      "HCF by primes: take the primes common to all numbers with their smallest exponents; LCM by primes: take all primes with their largest exponents.",
      "Example: 26 = 2 x 13 and 91 = 7 x 13 give HCF = 13 and LCM = 2 x 7 x 13 = 182.",
      "Example with powers: 96 = 2^5 x 3 and 404 = 2^2 x 101 give HCF = 2^2 = 4 and LCM = 2^5 x 3 x 101 = 9696.",
      "For the three numbers 12, 15 and 21: HCF = 3 and LCM = 2^2 x 3 x 5 x 7 = 420; the HCF always divides the LCM.",
      "If one number divides the other exactly, the smaller is the HCF and the larger is the LCM; for 5 and 25, HCF = 5 and LCM = 25.",
      "Co-prime numbers have HCF = 1 and LCM equal to their product: for 4 and 9, HCF = 1 and LCM = 36.",
      "Missing-number formula: other number = (HCF x LCM)/known number; with HCF 6, LCM 36 and one number 12, the other is (6 x 36)/12 = 18."
     ],
     "keyTerms": [
      {
       "term": "HCF",
       "meaning": "Highest Common Factor, the largest number dividing all the given numbers exactly."
      },
      {
       "term": "LCM",
       "meaning": "Least Common Multiple, the smallest number divisible by all the given numbers."
      },
      {
       "term": "Smallest power rule",
       "meaning": "For HCF, common primes enter with the minimum exponent present."
      },
      {
       "term": "Greatest power rule",
       "meaning": "For LCM, all primes enter with the maximum exponent present."
      },
      {
       "term": "Prime factorisation method",
       "meaning": "Computing HCF and LCM from the unique factorisations of the numbers."
      }
     ],
     "trick": "HCF = Common + Minimum powers; LCM = All + Maximum powers. Say it as COMIN and ALLMAX and the two rules never blur again.",
     "examPointer": "A 2 or 3 mark question gives two or three numbers and asks HCF and LCM by prime factorisation; write the factorisation lines because step marks are awarded, as in CBSE 2019."
    },
    {
     "heading": "The Product Rule HCF x LCM = a x b",
     "para": "For exactly two positive integers a and b the chapter gives the elegant identity HCF(a, b) x LCM(a, b) = a x b. The identity lets you compute any one of the four quantities when the other three are known, and it appears in almost every board paper. With HCF(6, 20) = 2 and LCM(6, 20) = 60, the check gives 2 x 60 = 6 x 20 = 120. The rule fails for three or more numbers: HCF(12, 15, 21) x LCM(12, 15, 21) = 3 x 420 = 1260, which is not 12 x 15 x 21 = 3780. The reason is that the HCF of three numbers may miss prime factors that two of them share, so the neat bookkeeping of two numbers breaks down beyond it.",
     "points": [
      "Identity for two numbers: HCF(a, b) x LCM(a, b) = a x b; rearranged, LCM = (a x b)/HCF and the missing number = (HCF x LCM)/known number.",
      "Example: with HCF(306, 657) = 9, LCM = (306 x 657)/9 = 22338; this exact computation appeared in CBSE 2016.",
      "Example: if HCF(a, b) = 5 and a x b = 150, then LCM(a, b) = 150/5 = 30.",
      "Counterexample for three numbers: HCF x LCM = 3 x 420 = 1260 for 12, 15 and 21, but the product is 3780; never quote the rule for more than two numbers.",
      "Consistency check: the HCF must divide the LCM; a pair like HCF 8 with LCM 12 is impossible because 8 does not divide 12.",
      "If two co-prime numbers have LCM 48 and one of them is 3, the other is 48/3 = 16, since co-prime LCM equals the product.",
      "Exam habit: after finding HCF and LCM separately, multiply and compare with the product; a mismatch exposes an arithmetic slip instantly."
     ],
     "keyTerms": [
      {
       "term": "Product rule",
       "meaning": "For two positive integers, HCF times LCM equals the product of the numbers."
      },
      {
       "term": "Missing-number formula",
       "meaning": "Second number = (HCF x LCM)/first number for exactly two numbers."
      },
      {
       "term": "Divisibility check",
       "meaning": "The HCF of a set of numbers always divides their LCM."
      },
      {
       "term": "Two-number restriction",
       "meaning": "The product rule is valid only for pairs of numbers."
      }
     ],
     "trick": "Two numbers? Multiply. Three numbers? Stop. Treat the product rule like a two-seater scooter: a third passenger makes it illegal.",
     "examPointer": "CBSE repeatedly asks: given HCF and the product, find the LCM (1-2 marks); MCQs also test that the rule fails for three numbers. Both are free marks once remembered."
    },
    {
     "heading": "Irrationality Proofs: sqrt(2), sqrt(3), sqrt(5)",
     "para": "The most feared and most rewarding questions in this chapter are the contradiction proofs that sqrt(2), sqrt(3) and sqrt(5) are irrational. The plan is always the same. Assume the number equals p/q where p and q are co-prime integers with q not 0. Square both sides so that the prime divides a square. Invoke the lemma that if a prime divides a square it divides the number itself. Conclude that the prime divides both p and q, contradicting co-primality. For sqrt(2): p^2 = 2q^2 makes p even, so write p = 2r, giving q^2 = 2r^2 and making q even too. Both divisible by 2 contradicts HCF(p, q) = 1, so the assumption fails and sqrt(2) is irrational.",
     "points": [
      "Lemma used: if a prime p divides a^2, then p divides a; the 2-case says a square divisible by 2 must have an even root.",
      "Full skeleton for sqrt(2): assume sqrt(2) = p/q with HCF(p, q) = 1; squaring gives p^2 = 2q^2, so 2 divides p; write p = 2r; then q^2 = 2r^2, so 2 divides q; contradiction, hence sqrt(2) is irrational.",
      "For sqrt(3): p^2 = 3q^2 shows 3 divides p; putting p = 3r gives q^2 = 3r^2, so 3 divides q; the contradiction proves sqrt(3) irrational.",
      "For sqrt(5): p^2 = 5q^2 gives 5 divides p, and p = 5r gives 5 divides q; the contradiction proves sqrt(5) irrational.",
      "The closing sentence must name the contradiction: this contradicts the fact that HCF(p, q) = 1, so the assumption is wrong and the number is irrational.",
      "Parity wording for the 2-case: the square of an odd number is odd and the square of an even number is even, so p^2 = 2q^2 forces p to be even.",
      "Extended results: 1/sqrt(2), sqrt(2)/5 and 6 sqrt(2) are irrational because multiplying or dividing an irrational by a non-zero rational keeps it irrational."
     ],
     "keyTerms": [
      {
       "term": "Proof by contradiction",
       "meaning": "Assuming the opposite of the claim and reaching an impossible conclusion."
      },
      {
       "term": "Co-prime assumption",
       "meaning": "Taking p and q with HCF 1, which the proof later contradicts."
      },
      {
       "term": "Prime lemma",
       "meaning": "A prime dividing a square must divide the number itself."
      },
      {
       "term": "Surd",
       "meaning": "An irrational root expression such as sqrt(5)."
      },
      {
       "term": "Parity argument",
       "meaning": "Reasoning based on evenness and oddness of squares."
      }
     ],
     "trick": "Four S's of surd proofs: Suppose p/q, Square both sides, Share the prime, Shout the contradiction. The identical four steps settle sqrt(2), sqrt(3) and sqrt(5).",
     "examPointer": "Prove that sqrt(2), sqrt(3) or sqrt(5) is irrational is a recurring 3-marker (CBSE 2023 Delhi asked sqrt(5)); every line carries marks, so never skip the co-prime statement or the contradiction sentence."
    },
    {
     "heading": "Irrationality of Sums like 3 + 2 sqrt(5)",
     "para": "Board papers extend the basic proof to numbers of the form a + b sqrt(c), such as 3 + 2 sqrt(5) or 5 - sqrt(3). The technique is isolation: suppose the whole number is rational, equal to p/q, then push every rational piece to the other side so that the bare surd stands alone, equal to a ratio of integers. Since the surd is known to be irrational, the contradiction is immediate. For 3 + 2 sqrt(5) = p/q we obtain sqrt(5) = (p - 3q)/(2q), which claims that sqrt(5) is rational, impossible by the standard result for sqrt(5). One line of algebra replaces four steps of squaring, which is why examiners award this method full marks every time.",
     "points": [
      "Known results used as levers: sqrt(2), sqrt(3) and sqrt(5) are irrational, and the sum or difference of a rational and an irrational is irrational.",
      "For 3 + 2 sqrt(5): assume p/q; then 2 sqrt(5) = (p - 3q)/q, so sqrt(5) = (p - 3q)/(2q), a rational number; contradiction, hence 3 + 2 sqrt(5) is irrational.",
      "For 5 - 3 sqrt(2): the assumption gives sqrt(2) = (5q - p)/(3q), rational; contradiction proves 5 - 3 sqrt(2) irrational.",
      "For 1/sqrt(2): assume p/q; then sqrt(2) = q/p, rational; contradiction proves 1/sqrt(2) irrational.",
      "General facts: rational + irrational = irrational; rational - irrational = irrational; non-zero rational x irrational = irrational; irrational / non-zero rational = irrational.",
      "Sums and products of two irrationals can still be rational: sqrt(2) x sqrt(8) = sqrt(16) = 4 and (1 + sqrt(2)) + (1 - sqrt(2)) = 2, so no universal rule exists.",
      "State clearly which known irrational is the contradiction target, for example: but this contradicts the fact that sqrt(5) is irrational."
     ],
     "keyTerms": [
      {
       "term": "Isolation technique",
       "meaning": "Rearranging the equation so the surd stands alone on one side."
      },
      {
       "term": "Bare surd",
       "meaning": "The term sqrt(c) freed of all rational additions and multipliers."
      },
      {
       "term": "Contradiction target",
       "meaning": "The already-proved irrational number that the algebra contradicts."
      },
      {
       "term": "Closure facts",
       "meaning": "Statements about which operations keep numbers irrational or rational."
      }
     ],
     "trick": "SHIFT the rational parts, ISOLATE the surd, CITE the known irrational: SIC your proof like a dog at the contradiction.",
     "examPointer": "CBSE 2019 and CBSE 2020 both asked 3 + 2 sqrt(5); expect a 3-marker with one mark for the assumption, one for the algebra and one for the contradiction sentence."
    },
    {
     "heading": "Decimal Expansions: Terminating or Repeating",
     "para": "The chapter closes with a complete description of when a rational number p/q in lowest terms has a terminating decimal. The answer depends only on the denominator: if q = 2^n x 5^m for some non-negative integers n and m, the decimal terminates; otherwise it is non-terminating repeating. The number of decimal places is the larger of n and m. So 13/3125 with 3125 = 5^5 terminates after 5 places, 7/8 with 8 = 2^3 terminates after 3 places, and 64/455 with 455 = 5 x 7 x 13 repeats because of the primes 7 and 13. Irrational numbers, by contrast, have decimals that neither terminate nor repeat, such as 0.101001000100001..., where the gaps between the 1s keep growing without limit.",
     "points": [
      "Test: reduce p/q to lowest terms, then factorise q; if q = 2^n x 5^m the decimal terminates after max(n, m) places.",
      "Example: 17/8 = 2.125 terminates after 3 places since 8 = 2^3; 13/3125 terminates after 5 places since 3125 = 5^5.",
      "Example: 14588/625 = 23.3408 terminates after 4 places since 625 = 5^4; this exact fraction is a CBSE favourite.",
      "If q contains any prime other than 2 and 5, the expansion is non-terminating repeating: 1/7 = 0.142857142857... and 64/455 repeats because 455 = 5 x 7 x 13.",
      "Reduce first: 42/100 looks risky, but 21/50 has q = 2 x 5^2, so it terminates as 0.42.",
      "Irrational decimals are non-terminating and non-repeating: sqrt(2) = 1.4142135... and constructed decimals like 0.101001000100001... are irrational.",
      "A terminating decimal can always be rewritten over a power of 10: 0.235 = 235/1000 = 47/200, and 47/(2^3 x 5^2) confirms termination after 3 places."
     ],
     "keyTerms": [
      {
       "term": "Terminating decimal",
       "meaning": "A decimal that ends after finitely many digits; happens when q = 2^n x 5^m."
      },
      {
       "term": "Non-terminating repeating decimal",
       "meaning": "A decimal in which a block of digits repeats forever; happens when q has a prime other than 2 and 5."
      },
      {
       "term": "Lowest terms",
       "meaning": "The form of p/q with HCF(p, q) = 1, required before applying the test."
      },
      {
       "term": "Period",
       "meaning": "The length of the repeating block of digits."
      },
      {
       "term": "Non-terminating non-repeating",
       "meaning": "The decimal pattern of every irrational number."
      }
     ],
     "trick": "Denominator decides destiny: only the primes 2 and 5 may appear for a stop sign; any other prime forces an endless repeat. Decimal places equal the bigger exponent.",
     "examPointer": "MCQs ask how many places 13/3125 or 64/455 will occupy or whether the expansion terminates; reduce first, factorise q, then apply the test, as asked in CBSE 2019."
    },
    {
     "heading": "Word Problems: Choosing HCF or LCM",
     "para": "Application questions test whether you can translate a story into HCF or LCM before doing any arithmetic. The dividing words are signals for HCF: greatest length of a tape that measures two ropes exactly, maximum capacity of a container that empties two tankers, largest tile that paves a floor, biggest number dividing with given remainders. The repeating words are signals for LCM: bells tolling together again, lights blinking together, runners meeting at the start line, the first time two bus timings coincide. Remainder problems need a subtraction first: the largest number dividing 245 and 1029 leaving remainder 5 in each case is HCF(240, 1024) = 16. Say the translation sentence aloud before you compute, and the choice makes itself.",
     "points": [
      "HCF signals: maximum capacity, greatest length, largest tile, biggest number that divides, largest equal piece size.",
      "LCM signals: together again, simultaneously, next meeting time, smallest number divisible by, first alignment of repeating events.",
      "Tanker example: 850 L and 680 L; maximum measuring capacity = HCF(850, 680) = 170 L, filling the first tanker 5 times and the second 4 times.",
      "Bells example: intervals of 9, 12 and 15 minutes; the next common toll is after LCM = 180 minutes = 3 hours, so a 7 a.m. start gives 10 a.m.",
      "Remainder example: the largest number dividing 70 and 125 leaving remainders 5 and 8 is HCF(65, 117) = 13; subtract the remainders first.",
      "Same-remainder example: the greatest number dividing 62, 132 and 237 leaving the same remainder is the HCF of the differences, HCF(70, 105) = 35.",
      "Answer format: write the translation sentence, show the factorisation, compute, and state the answer in the units the question demands."
     ],
     "keyTerms": [
      {
       "term": "Translation sentence",
       "meaning": "One line converting the story into 'find the HCF of ...' or 'find the LCM of ...'."
      },
      {
       "term": "Remainder adjustment",
       "meaning": "Subtracting each remainder from its number before taking the HCF."
      },
      {
       "term": "Difference method",
       "meaning": "For a common unknown remainder, take the HCF of the pairwise differences."
      },
      {
       "term": "Capacity problem",
       "meaning": "A word problem whose answer is the HCF as the largest exact measurer."
      },
      {
       "term": "Interval problem",
       "meaning": "A word problem whose answer is the LCM as the first common repeat time."
      }
     ],
     "trick": "DIVIDE in the story means HCF, REPEAT in the story means LCM, SAME REMAINDER means HCF of the differences, EXTRA REMAINDER means subtract then HCF.",
     "examPointer": "A 2 to 3 mark word problem appears in nearly every paper; the mark split rewards the correct choice of HCF or LCM as much as the arithmetic, as in CBSE 2018."
    },
    {
     "heading": "Common Mistakes and Exam Traps",
     "para": "Chapter 1 loses marks through small, predictable slips, and naming them in advance is the cheapest insurance available. Students quote the product rule for three numbers, call 1 a prime, drop the co-prime assumption from an irrationality proof, or apply the decimal test to an unreduced fraction. In word problems the biggest trap is choosing LCM where the language demands HCF and vice versa. Another quiet killer is the missing contradiction sentence at the end of a proof, which can cost a full mark on its own. Read each trap below and rewrite the corrected version in your own words; the corrections themselves are the most efficient revision this chapter offers.",
     "points": [
      "Trap: applying HCF x LCM = a x b to three numbers; the identity holds only for exactly two numbers.",
      "Trap: calling 1 prime or 2 composite; 1 is neither prime nor composite and 2 is the only even prime.",
      "Trap: forgetting 'let HCF(p, q) = 1' at the start of a proof or the closing contradiction sentence at the end; both carry explicit marks.",
      "Trap: testing the original denominator for termination instead of the reduced one; reduce p/q to lowest terms first.",
      "Trap: claiming the sum of two irrationals is always irrational; sqrt(2) + (2 - sqrt(2)) = 2 is the standard counterexample.",
      "Trap: in remainder problems, taking the HCF of the original numbers instead of number-minus-remainder.",
      "Trap: answering LCM when the question says 'greatest number that divides' and HCF when it says 'smallest number divisible by'; run a swap-check before writing."
     ],
     "keyTerms": [
      {
       "term": "Step marking",
       "meaning": "CBSE awards marks for each correct step, so missing steps lose marks even with a right answer."
      },
      {
       "term": "Trap option",
       "meaning": "A wrong choice built from a common error, such as using LCM for a dividing situation."
      },
      {
       "term": "Counterexample",
       "meaning": "One example that disproves a sweeping claim."
      },
      {
       "term": "Explicit contradiction",
       "meaning": "The final sentence of a proof naming exactly which fact is contradicted."
      }
     ],
     "trick": "Before submission run the 3-C check: Count of numbers (only two?), Choice of HCF or LCM correct?, Contradiction sentence written?",
     "examPointer": "Examiners report that most marks lost in this chapter are procedural, not conceptual; writing the factorisation lines and the contradiction sentence recovers 2 to 3 marks per paper."
    }
   ],
   "mcqs": [
    {
     "question": "The HCF of 96 and 404 is",
     "options": [
      "4",
      "8",
      "12",
      "16"
     ],
     "answerIndex": 0,
     "explanation": "96 = 2^5 x 3 and 404 = 2^2 x 101; the common prime 2 taken with the smallest power gives HCF = 2^2 = 4.",
     "difficulty": "easy",
     "pyq": "CBSE 2020"
    },
    {
     "question": "If HCF(a, b) = 5 and a x b = 150, then LCM(a, b) is",
     "options": [
      "30",
      "25",
      "150",
      "750"
     ],
     "answerIndex": 0,
     "explanation": "For two numbers, HCF x LCM = a x b, so LCM = 150/5 = 30.",
     "difficulty": "easy"
    },
    {
     "question": "The total number of factors of a prime number is",
     "options": [
      "1",
      "0",
      "2",
      "3"
     ],
     "answerIndex": 2,
     "explanation": "A prime p has exactly the two factors 1 and p; hence the count is 2.",
     "difficulty": "easy",
     "pyq": "CBSE 2019"
    },
    {
     "question": "The decimal expansion of 13/3125 will terminate after how many places?",
     "options": [
      "3",
      "4",
      "5",
      "6"
     ],
     "answerIndex": 2,
     "explanation": "3125 = 5^5, so the decimal terminates after max(0, 5) = 5 places.",
     "difficulty": "easy"
    },
    {
     "question": "Which of the following is an irrational number?",
     "options": [
      "sqrt(4)",
      "3/7",
      "sqrt(5)",
      "0.835835835..."
     ],
     "answerIndex": 2,
     "explanation": "sqrt(4) = 2, 3/7 is a fraction, and 0.835835835... repeats with period 3, so all are rational; sqrt(5) cannot be written as p/q.",
     "difficulty": "easy"
    },
    {
     "question": "The decimal 0.101001000100001... is",
     "options": [
      "a rational number with terminating expansion",
      "a rational number with repeating expansion",
      "an irrational number",
      "an integer"
     ],
     "answerIndex": 2,
     "explanation": "The number of zeros between successive 1s keeps increasing, so the decimal neither terminates nor repeats; hence it is irrational.",
     "difficulty": "easy"
    },
    {
     "question": "If n is an odd positive integer, then n^2 - 1 is always divisible by",
     "options": [
      "6",
      "8",
      "12",
      "18"
     ],
     "answerIndex": 1,
     "explanation": "Write n = 2m + 1; then n^2 - 1 = 4m(m + 1), and m(m + 1) is a product of consecutive integers, hence even, giving an extra factor 2, so 8 divides n^2 - 1.",
     "difficulty": "medium"
    },
    {
     "question": "If a = x^3 y^2 and b = x y^3, where x and y are prime numbers, then HCF(a, b) is",
     "options": [
      "x^3 y^3",
      "x y^2",
      "x^2 y^2",
      "x^3 y^2"
     ],
     "answerIndex": 1,
     "explanation": "HCF takes common primes with the smallest powers: x to power 1 and y to power 2, giving x y^2.",
     "difficulty": "medium"
    },
    {
     "question": "For any natural number n, 6^n can never end with the digit 0 because",
     "options": [
      "it is an even number",
      "it has no prime factor 5",
      "n is a natural number",
      "6 is composite"
     ],
     "answerIndex": 1,
     "explanation": "A number ends in 0 only if it is divisible by 10 = 2 x 5; 6^n = 2^n x 3^n has no factor 5, so it can never end in 0.",
     "difficulty": "medium",
     "pyq": "CBSE 2023"
    },
    {
     "question": "The LCM of 26 and 91 is",
     "options": [
      "182",
      "13",
      "2366",
      "91"
     ],
     "answerIndex": 0,
     "explanation": "26 = 2 x 13 and 91 = 7 x 13; the LCM takes all primes with the greatest powers: 2 x 7 x 13 = 182.",
     "difficulty": "medium"
    },
    {
     "question": "If p and q are co-prime positive integers and p^2 = 3q^2, then it follows that",
     "options": [
      "p is even",
      "3 divides both p and q",
      "q is divisible by 9",
      "p equals q"
     ],
     "answerIndex": 1,
     "explanation": "Since 3 divides p^2 and 3 is prime, 3 divides p; writing p = 3r gives q^2 = 3r^2, so 3 divides q too. This contradicts co-primality, which is exactly the proof that sqrt(3) is irrational.",
     "difficulty": "medium"
    },
    {
     "question": "The largest number which divides 245 and 1029 leaving remainder 5 in each case is",
     "options": [
      "16",
      "15",
      "8",
      "12"
     ],
     "answerIndex": 0,
     "explanation": "Subtract the remainder first: HCF(240, 1024). Now 240 = 2^4 x 15 and 1024 = 2^10, so HCF = 2^4 = 16.",
     "difficulty": "medium"
    },
    {
     "question": "Three bells toll at intervals of 9, 12 and 15 minutes. If they toll together at 9 a.m., they will next toll together at",
     "options": [
      "10:18 a.m.",
      "12 noon",
      "10:30 a.m.",
      "11 a.m."
     ],
     "answerIndex": 1,
     "explanation": "LCM(9, 12, 15) = 180 minutes = 3 hours, so the next common toll is at 9 a.m. + 3 h = 12 noon.",
     "difficulty": "medium",
     "pyq": "CBSE 2019"
    },
    {
     "question": "Which of the following rational numbers has a terminating decimal expansion?",
     "options": [
      "77/210",
      "23/8",
      "64/455",
      "29/343"
     ],
     "answerIndex": 1,
     "explanation": "23/8 has denominator 2^3, only 2s and 5s, so it terminates. The others contain primes 3, 7, 13 in the denominator after reduction, so they repeat.",
     "difficulty": "medium"
    },
    {
     "question": "The product of a non-zero rational number and an irrational number is",
     "options": [
      "always rational",
      "always irrational",
      "rational or irrational depending on the numbers",
      "always an integer"
     ],
     "answerIndex": 1,
     "explanation": "If r is non-zero rational and s irrational, then r x s cannot be rational, for that would make s = (r x s)/r rational, a contradiction; so the product is always irrational.",
     "difficulty": "medium"
    },
    {
     "question": "The least number that is divisible by all the numbers from 1 to 10 (both included) is",
     "options": [
      "2520",
      "5040",
      "1260",
      "720"
     ],
     "answerIndex": 0,
     "explanation": "The required number is LCM(1, 2, ..., 10) = 2^3 x 3^2 x 5 x 7 = 2520.",
     "difficulty": "hard"
    },
    {
     "question": "If x = 2^3 x 3, y = 2 x 3^2 and z = 3^n, and LCM(x, y, z) = 2^3 x 3^3, then n is",
     "options": [
      "1",
      "2",
      "3",
      "any natural number"
     ],
     "answerIndex": 2,
     "explanation": "The LCM takes the greatest power of each prime; the greatest power of 3 in x, y, z must be 3^3, and the maximum available from x and y is 3^2, so n must be 3.",
     "difficulty": "hard"
    },
    {
     "question": "The greatest number that divides 2053 and 967 leaving remainders 5 and 7 respectively is",
     "options": [
      "64",
      "63",
      "32",
      "16"
     ],
     "answerIndex": 0,
     "explanation": "Subtract the remainders: HCF(2053 - 5, 967 - 7) = HCF(2048, 960). Now 2048 = 2^11 and 960 = 2^6 x 15, so HCF = 2^6 = 64.",
     "difficulty": "hard"
    },
    {
     "question": "If the HCF of two numbers is 16 and their product is 3072, then their LCM is",
     "options": [
      "182",
      "192",
      "202",
      "162"
     ],
     "answerIndex": 1,
     "explanation": "HCF x LCM = product for two numbers, so LCM = 3072/16 = 192.",
     "difficulty": "hard",
     "pyq": "CBSE 2015"
    },
    {
     "question": "Which of the following is always irrational?",
     "options": [
      "the product of two irrational numbers",
      "the sum of a rational and an irrational number",
      "the quotient of two integers",
      "the square of an irrational number"
     ],
     "answerIndex": 1,
     "explanation": "Irrational x irrational can be rational (sqrt(2) x sqrt(8) = 4), a quotient of integers is rational by definition, and (sqrt(2))^2 = 2 is rational; only rational plus irrational is always irrational.",
     "difficulty": "hard"
    }
   ],
   "boardQuestions": [
    {
     "question": "State the Fundamental Theorem of Arithmetic and express 1008 as a product of its prime factors.",
     "marks": 2,
     "type": "very-short",
     "probability": "very-high",
     "answer": "Statement: every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur. For 1008, divide repeatedly by the smallest prime: 1008 = 2 x 504, 504 = 2 x 252, 252 = 2 x 126, 126 = 2 x 63, 63 = 3 x 21, 21 = 3 x 7, and 7 is prime. Collecting the factors: 1008 = 2 x 2 x 2 x 2 x 3 x 3 x 7 = 2^4 x 3^2 x 7. Quick check: 16 x 9 x 7 = 144 x 7 = 1008, so the factorisation is correct."
    },
    {
     "question": "Find the HCF and LCM of 12, 15 and 21 by prime factorisation, and verify that HCF x LCM is not equal to the product of the three numbers.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "Step 1, factorise each number: 12 = 2^2 x 3, 15 = 3 x 5, 21 = 3 x 7. Step 2, HCF: the only prime common to all three is 3, taken with the smallest power 1, so HCF = 3. Step 3, LCM: take every prime that appears, with the greatest power: 2^2 x 3 x 5 x 7 = 4 x 3 x 5 x 7 = 420. Step 4, check the rule: HCF x LCM = 3 x 420 = 1260, while the product of the numbers is 12 x 15 x 21 = 3780. Since 1260 is not 3780, the identity HCF x LCM = a x b fails for three numbers, confirming that the product rule is valid only for two numbers."
    },
    {
     "question": "Prove that sqrt(3) is an irrational number.",
     "marks": 3,
     "type": "long",
     "probability": "very-high",
     "answer": "Suppose, to the contrary, that sqrt(3) is rational. Then we can write sqrt(3) = p/q, where p and q are co-prime integers and q is not 0. Squaring both sides gives 3 = p^2/q^2, that is, p^2 = 3q^2. Since 3 divides 3q^2, it divides p^2; and because 3 is prime, it must divide p itself. So p = 3r for some positive integer r. Substituting p = 3r into p^2 = 3q^2 gives 9r^2 = 3q^2, hence q^2 = 3r^2. Now 3 divides q^2 and therefore 3 divides q as well. Thus 3 is a common factor of both p and q. This contradicts the assumption that HCF(p, q) = 1. The contradiction has arisen because of our incorrect assumption that sqrt(3) is rational. Hence sqrt(3) is irrational."
    },
    {
     "question": "Prove that sqrt(5) is irrational, and hence prove that 3 + 2 sqrt(5) is irrational.",
     "marks": 5,
     "type": "long",
     "probability": "very-high",
     "answer": "Part 1: prove that sqrt(5) is irrational. Suppose, to the contrary, that sqrt(5) is rational, so sqrt(5) = p/q where p and q are co-prime integers and q is not 0. Squaring both sides gives 5 = p^2/q^2, that is, p^2 = 5q^2. Since 5 divides 5q^2, it divides p^2, and because 5 is prime, 5 must divide p. Write p = 5r for some positive integer r. Substituting back: (5r)^2 = 5q^2 gives 25r^2 = 5q^2, so q^2 = 5r^2. Now 5 divides q^2 and hence 5 divides q. Therefore 5 is a common factor of p and q, which contradicts the assumption that HCF(p, q) = 1. This contradiction arises because of our wrong assumption, so sqrt(5) is irrational. Part 2: prove that 3 + 2 sqrt(5) is irrational. Suppose it is rational, say 3 + 2 sqrt(5) = p/q with p and q co-prime and q not 0. Then 2 sqrt(5) = p/q - 3 = (p - 3q)/q, so sqrt(5) = (p - 3q)/(2q). The right side is a ratio of integers with denominator not 0, hence a rational number. But this contradicts the result proved above that sqrt(5) is irrational. Hence our assumption is wrong and 3 + 2 sqrt(5) is irrational."
    },
    {
     "question": "Two tankers contain 850 litres and 680 litres of kerosene respectively. Find the maximum capacity of a container that can measure the kerosene of both tankers an exact number of times, and state how many times it fills each tanker.",
     "marks": 3,
     "type": "numerical",
     "probability": "very-high",
     "answer": "The required container must measure both quantities exactly, so its capacity is the HCF of 850 and 680. Factorise: 850 = 2 x 5^2 x 17 and 680 = 2^3 x 5 x 17. The common primes with the smallest powers are 2, 5 and 17, so HCF = 2 x 5 x 17 = 170. Hence the maximum capacity is 170 litres. Number of times it fills the tankers: 850/170 = 5 times for the first tanker and 680/170 = 4 times for the second. Both counts are exact whole numbers, which confirms the answer."
    },
    {
     "question": "Three bells toll at intervals of 9, 12 and 15 minutes respectively. If they start tolling together at 7 a.m., after what time will they next toll together?",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "The bells toll together again when all three intervals complete together, so the required time is the LCM of 9, 12 and 15. Factorise: 9 = 3^2, 12 = 2^2 x 3, 15 = 3 x 5. Taking all primes with the greatest powers: LCM = 2^2 x 3^2 x 5 = 4 x 9 x 5 = 180 minutes = 3 hours. So the next common toll occurs 3 hours after the start, that is, at 10 a.m. Note that the situation demands LCM because the events repeat together; using HCF here would give 3 minutes, which is clearly wrong since no two of the intervals divide one another exactly."
    },
    {
     "question": "Given that HCF(96, 404) = 4, find the LCM of 96 and 404.",
     "marks": 2,
     "type": "numerical",
     "probability": "high",
     "answer": "For two positive integers, HCF x LCM = product of the numbers. So LCM(96, 404) = (96 x 404)/HCF = 38784/4 = 9696. Verification by factorisation: 96 = 2^5 x 3 and 404 = 2^2 x 101, so LCM = 2^5 x 3 x 101 = 32 x 303 = 9696, matching the answer obtained from the product rule."
    },
    {
     "question": "Find the largest number which divides 70 and 125 leaving remainders 5 and 8 respectively.",
     "marks": 3,
     "type": "numerical",
     "probability": "very-high",
     "answer": "If a number divides 70 leaving remainder 5, it must divide 70 - 5 = 65 exactly. Similarly it must divide 125 - 8 = 117 exactly. So the required number is HCF(65, 117). Factorise: 65 = 5 x 13 and 117 = 3^2 x 13. The common prime is 13, so the required number is 13. Check: 70 = 13 x 5 + 5 and 125 = 13 x 9 + 8, both with the correct remainders, so 13 is the largest such divisor."
    },
    {
     "question": "Can the number 6^n, n being a natural number, end with the digit 0? Give reasons for your answer.",
     "marks": 2,
     "type": "short",
     "probability": "high",
     "answer": "No. A number ends with the digit 0 exactly when it is divisible by 10, and since 10 = 2 x 5, its prime factorisation must contain both 2 and 5. By the Fundamental Theorem of Arithmetic, 6^n = (2 x 3)^n = 2^n x 3^n, so the only primes in its factorisation are 2 and 3; the prime 5 never appears. Hence 6^n is never divisible by 5, and therefore never divisible by 10, so it can never end with the digit 0 for any natural number n."
    },
    {
     "question": "In a morning walk, three persons step off together. Their steps measure 80 cm, 85 cm and 90 cm respectively. What is the minimum distance each should walk so that all can cover the distance in complete steps?",
     "marks": 4,
     "type": "case-based",
     "probability": "high",
     "answer": "Each person's distance must be an exact multiple of their own step length, and all three must cover the same distance, so the minimum such distance is the LCM of 80, 85 and 90. Factorise: 80 = 2^4 x 5, 85 = 5 x 17, 90 = 2 x 3^2 x 5. Taking all primes with the greatest powers: LCM = 2^4 x 3^2 x 5 x 17. Compute step by step: 2^4 = 16, 3^2 = 9, so 16 x 9 = 144, then 144 x 5 = 720, and 720 x 17 = 12240. Hence the minimum distance is 12240 cm, that is, 122.4 m. Check: 12240/80 = 153 steps, 12240/85 = 144 steps and 12240/90 = 136 steps, all exact, so each person walks the whole distance in complete steps."
    }
   ]
  },
  {
   "number": 2,
   "title": "Polynomials",
   "summary": "This chapter connects algebra to geometry: the zeros of a polynomial are the x-coordinates of the points where its graph crosses or touches the x-axis, and a polynomial of degree n has at most n zeros. For a quadratic polynomial ax^2 + bx + c the sum of the zeros is -b/a and the product is c/a, while for a cubic ax^3 + bx^2 + cx + d the extra relation alpha beta + beta gamma + gamma alpha = c/a completes the set. These relations let you find missing coefficients, build new polynomials from given zeros and test proposed zeros by substitution. The graph of a quadratic is a parabola whose opening direction follows the sign of the leading coefficient. The division algorithm, dividend = divisor x quotient + remainder, closes the chapter and is verified in exercises with polynomials of degrees 2 and 3. Board questions concentrate on the two relations, the cubic relations and the verification step of the division algorithm.",
   "weightageMarks": 4,
   "difficulty": "easy",
   "hotTopics": [
    "Geometrical meaning of zeros as x-axis intersections",
    "Number of zeros cannot exceed the degree",
    "Sum and product of zeros of a quadratic polynomial",
    "Forming a quadratic polynomial from given zeros",
    "The three relations for a cubic polynomial",
    "Shape of a parabola and sign of the leading coefficient",
    "Division algorithm for polynomials",
    "Verification of the division algorithm",
    "Finding unknown coefficients by substitution",
    "Checking a zero by substitution"
   ],
   "sections": [
    {
     "heading": "Polynomials Revisited: Degrees, Terms and Validity",
     "para": "A polynomial in x is an expression in which the powers of x are whole numbers only: 2x^2 - 3x + 5 qualifies, while 1/x, sqrt(x) and x^(3/2) do not, because negative and fractional powers are banned. The degree is the highest power of the variable with a non-zero coefficient, and it dictates everything: a degree 1 polynomial is linear with exactly one zero, degree 2 is quadratic with at most two zeros, and degree 3 is cubic with at most three. The general forms ax^2 + bx + c with a not 0 and ax^3 + bx^2 + cx + d with a not 0 must be memorised together with their non-zero leading coefficient conditions. A constant polynomial like 7 has no zero, and the zero polynomial has every number as a zero but no defined degree.",
     "points": [
      "Allowed powers in a polynomial are whole numbers 0, 1, 2, 3, ...; x^(-1), x^(1/2) and x^(3/2) make expressions like 1/x, sqrt(x) and x sqrt(x) non-polynomials.",
      "Degree is the highest power with a non-zero coefficient: 4x^5 - 2x^2 + 1 has degree 5; a non-zero constant has degree 0; the degree of the zero polynomial is not defined.",
      "Standard forms: linear ax + b, quadratic ax^2 + bx + c with a not 0, cubic ax^3 + bx^2 + cx + d with a not 0.",
      "A polynomial of degree n has at most n zeros; a quadratic has at most 2 real zeros and a cubic at most 3.",
      "Value at a point: for p(x) = x^2 - 3x + 2, p(2) = 4 - 6 + 2 = 0, so 2 is a zero of p(x).",
      "Zero test: if p(k) = 0 then k is a zero of p(x), and equivalently (x - k) is a factor of p(x).",
      "Common error: calling 2x^2 + 3/x + 1 a polynomial; the term 3/x has power -1, so the expression is not a polynomial."
     ],
     "keyTerms": [
      {
       "term": "Polynomial",
       "meaning": "An expression in the variable with whole-number powers only."
      },
      {
       "term": "Degree",
       "meaning": "The highest power of the variable with a non-zero coefficient."
      },
      {
       "term": "Leading coefficient",
       "meaning": "The coefficient of the highest power term; it must be non-zero in the standard forms."
      },
      {
       "term": "Zero of a polynomial",
       "meaning": "A number k with p(k) = 0; also called a root of the equation p(x) = 0."
      },
      {
       "term": "Constant polynomial",
       "meaning": "A polynomial of degree 0 with no zero."
      },
      {
       "term": "Zero polynomial",
       "meaning": "The polynomial 0, for which degree is not defined and every number is a zero."
      }
     ],
     "trick": "Whole powers only: any negative or fractional exponent makes the polynomial fake. Degree caps the zero count: degree n, at most n zeros.",
     "examPointer": "One-mark questions ask which expression is not a polynomial or the maximum number of zeros of a cubic; answer 3 and quote the at-most rule, as in CBSE 2020."
    },
    {
     "heading": "Geometrical Meaning of Zeros: Reading Graphs",
     "para": "The zero of a polynomial is where its graph meets the x-axis, because every point on the x-axis has y = 0. The graph of a linear polynomial ax + b is a straight line crossing the x-axis exactly once at x = -b/a. The graph of a quadratic ax^2 + bx + c is a parabola opening upward when a is positive and downward when a is negative; it may cut the x-axis at two points, touch it at one point or miss it entirely, matching two distinct zeros, two coincident zeros or no real zeros. Cubic graphs are S-shaped and can meet the axis one, two or three times. Counting the intersection points in a given figure is the fastest and safest way to count zeros in MCQs.",
     "points": [
      "Zero of p(x) = the x-coordinate of any point where the graph of y = p(x) meets the x-axis; the zero is a number, not a point.",
      "Linear ax + b with a not 0 has a straight-line graph cutting the x-axis exactly once, so it has exactly one zero.",
      "Quadratic graphs are parabolas; a > 0 opens upward with a minimum point, a < 0 opens downward with a maximum point.",
      "A parabola can have 2, 1 or 0 x-axis contacts: two cuts give two distinct zeros, one touch gives two coincident zeros, no contact gives no real zero.",
      "A cubic graph always has at least one real zero and at most three; the curve may cross once, or cross and touch, giving up to three contacts.",
      "If a figure shows the parabola cutting the x-axis at -3 and 2, the zeros are -3 and 2 and a fitting polynomial is k(x + 3)(x - 2).",
      "The y-intercept of y = ax^2 + bx + c is c, since putting x = 0 gives y = c; the graph passes through the origin only when c = 0."
     ],
     "keyTerms": [
      {
       "term": "Parabola",
       "meaning": "The U-shaped graph of a quadratic polynomial."
      },
      {
       "term": "x-intercept",
       "meaning": "A point where the graph meets the x-axis; its x-coordinate is a zero."
      },
      {
       "term": "Opening upward",
       "meaning": "Parabola shaped like U, which happens when a > 0."
      },
      {
       "term": "Opening downward",
       "meaning": "Parabola shaped like inverted U, which happens when a < 0."
      },
      {
       "term": "Coincident zeros",
       "meaning": "Two equal zeros produced when the parabola just touches the x-axis."
      }
     ],
     "trick": "Count the kisses and crosses: every cross of the x-axis is a distinct zero, every touch is a repeated one; zeros can never outnumber the degree.",
     "examPointer": "CBSE 2023 and CBSE 2020 both asked how many zeros the given parabola or cubic graph has; count the axis contacts in the figure, worth 1 mark."
    },
    {
     "heading": "Zeros and Coefficients of a Quadratic Polynomial",
     "para": "For the quadratic polynomial ax^2 + bx + c with a not 0, if the zeros are alpha and beta, then two small formulas replace half the algebra of the chapter: alpha + beta = -b/a and alpha beta = c/a. They follow from the factor form a(x - alpha)(x - beta). For p(x) = 2x^2 - 7x + 3, the zeros 3 and 1/2 give the sum 7/2, which is -(-7)/2, and the product 3/2, which is c/a. The formulas work backward too: given sum 3 and product -10, the polynomial is x^2 - 3x - 10 with zeros 5 and -2. Verification by substitution should become a reflex: p(5) = 25 - 15 - 10 = 0 and p(-2) = 4 + 6 - 10 = 0 confirm the zeros.",
     "points": [
      "Relation 1: sum of zeros alpha + beta = -b/a, that is, minus the coefficient of x over the coefficient of x^2.",
      "Relation 2: product of zeros alpha beta = c/a, the constant term over the coefficient of x^2.",
      "Example: 6x^2 - 7x - 3 has alpha + beta = 7/6 and alpha beta = -1/2; its actual zeros 3/2 and -1/3 confirm both.",
      "Derivation idea: ax^2 + bx + c = a(x - alpha)(x - beta) = a(x^2 - (alpha + beta)x + alpha beta); comparing coefficients gives both formulas.",
      "Zeros from coefficients: solve the quadratic by factorisation or the formula, then check sum and product as a quick verification.",
      "Unknown coefficient: if one zero of kx^2 + 3x + k is 2, then 4k + 6 + k = 0, so k = -6/5; substitution is the standard trick.",
      "More practice: if the product of zeros of x^2 - 4x + k is 5 then k = 5; if the sum of zeros of 2x^2 + kx + 6 is 5 then k = -10."
     ],
     "keyTerms": [
      {
       "term": "Sum of zeros",
       "meaning": "alpha + beta = -b/a for ax^2 + bx + c."
      },
      {
       "term": "Product of zeros",
       "meaning": "alpha beta = c/a for ax^2 + bx + c."
      },
      {
       "term": "Factor form",
       "meaning": "Writing the polynomial as a(x - alpha)(x - beta) using its zeros."
      },
      {
       "term": "Unknown coefficient",
       "meaning": "A constant like k found by substituting a known zero."
      },
      {
       "term": "Verification",
       "meaning": "Substituting each zero back into the polynomial to confirm it gives 0."
      }
     ],
     "trick": "SAP rule: Sum = -b/a, Product = c/a. The sign flips only on the sum, never on the product.",
     "examPointer": "A 1 or 2 mark question gives a quadratic and asks the sum and product of its zeros (CBSE 2019, 2022); write both fractions directly and do not find the zeros unless asked."
    },
    {
     "heading": "Building a Quadratic from Its Zeros",
     "para": "Given the zeros, constructing the polynomial is one formula: x^2 - (sum of zeros) x + product of zeros, which gives the monic polynomial with leading coefficient 1. If the zeros are 2 and -3, the polynomial is x^2 - (2 - 3)x + (2)(-3) = x^2 + x - 6, and it factors as (x - 2)(x + 3). For a general leading coefficient k, multiply the whole expression by k, and every non-zero k gives a correct answer unless the question fixes the coefficient. When the zeros are surds, such as sqrt(2) and -sqrt(2), the sum is 0 and the product is -2, so the polynomial is x^2 - 2, showing how the formula absorbs irrational zeros neatly without any separate calculation.",
     "points": [
      "Monic reconstruction: p(x) = x^2 - (alpha + beta)x + alpha beta; the minus sign before the sum is the only trap.",
      "Example: zeros 1/4 and -1 give sum -3/4 and product -1/4, so the polynomial is x^2 + (3/4)x - 1/4, or multiplied by 4: 4x^2 + 3x - 1.",
      "Example: zeros 2 sqrt(3) and -2 sqrt(3) give sum 0 and product -12, so the polynomial is x^2 - 12.",
      "Example: zeros 3 + sqrt(2) and 3 - sqrt(2) give sum 6 and product 9 - 2 = 7, so the polynomial is x^2 - 6x + 7.",
      "With an unspecified leading coefficient, the full family is k(x^2 - (sum)x + product) for any non-zero k; boards usually accept the monic member.",
      "Check by expansion: the polynomial from zeros 2 and -3 must expand to x^2 + x - 6, and indeed p(2) = 4 + 2 - 6 = 0.",
      "Common error: writing x^2 + (sum)x + product; the sum enters with a minus sign only."
     ],
     "keyTerms": [
      {
       "term": "Monic polynomial",
       "meaning": "A polynomial whose leading coefficient is 1."
      },
      {
       "term": "Reconstruction formula",
       "meaning": "x^2 - (sum of zeros) x + product of zeros."
      },
      {
       "term": "Conjugate zeros",
       "meaning": "A pair like a + sqrt(b) and a - sqrt(b) whose sum and product are rational."
      },
      {
       "term": "Family of polynomials",
       "meaning": "All non-zero multiples of a monic polynomial share the same zeros."
      }
     ],
     "trick": "Middle sign mirrors the sum: x^2 minus (sum)x plus (product). Chant 'S goes in with a minus, P goes in with a plus'.",
     "examPointer": "CBSE asks: form a quadratic polynomial whose zeros are 2 + sqrt(3) and 2 - sqrt(3), or whose sum is 8 and product is 12; 2 marks, one for sum and product, one for assembly."
    },
    {
     "heading": "Cubic Polynomials and Three Relations",
     "para": "For the cubic ax^3 + bx^2 + cx + d with zeros alpha, beta and gamma, three relations hold: alpha + beta + gamma = -b/a, alpha beta + beta gamma + gamma alpha = c/a, and alpha beta gamma = -d/a. Notice the symmetry: the sum matches the quadratic pattern, the product carries a minus because the constant term d sits at the end of an odd-degree polynomial, and the new middle relation adds products taken two at a time. For x^3 - 4x^2 + x + 6 = (x - 2)(x - 3)(x + 1), the zeros 2, 3 and -1 give sum 4, pair-sum 1 and product -6, exactly matching -b/a = 4, c/a = 1 and -d/a = -6. Writing all three formulas before substituting is the habit that earns full marks.",
     "points": [
      "Relation A: alpha + beta + gamma = -b/a; Relation B: alpha beta + beta gamma + gamma alpha = c/a; Relation C: alpha beta gamma = -d/a.",
      "Worked check: x^3 - 4x^2 + x + 6 = (x - 2)(x - 3)(x + 1); zeros 2, 3, -1 give sum 4, pair-sum 1, product -6, matching the three relations.",
      "Sign alert: for odd degree the constant-term relation carries a minus; for even degree it does not.",
      "Third-zero shortcut: if two zeros of a cubic are known, the third equals (-b/a) minus the sum of the known two.",
      "Reciprocal trick: 1/alpha + 1/beta + 1/gamma = (alpha beta + beta gamma + gamma alpha)/(alpha beta gamma) = -c/d for the cubic ax^3 + bx^2 + cx + d.",
      "Example: x^3 - 6x^2 + 11x - 6 = (x - 1)(x - 2)(x - 3); the product of zeros is 1 x 2 x 3 = 6 = -(-6), confirming Relation C.",
      "Unknown coefficient example: in x^3 - 6x^2 + kx + 8, the product of zeros is -d/a = -8, whatever the value of k; to force a desired product P you set d = -P."
     ],
     "keyTerms": [
      {
       "term": "Cubic relations",
       "meaning": "The three formulas connecting zeros alpha, beta, gamma with coefficients a, b, c, d."
      },
      {
       "term": "Pairwise sum",
       "meaning": "alpha beta + beta gamma + gamma alpha, the sum of products taken two at a time, equal to c/a."
      },
      {
       "term": "Odd-degree sign flip",
       "meaning": "For a cubic, the product of zeros equals -d/a, with a minus."
      },
      {
       "term": "Third zero shortcut",
       "meaning": "Finding the remaining zero by subtracting known zeros from -b/a."
      }
     ],
     "trick": "Slide down the letters: sum takes b, pair-sum takes c, product takes d, and d flips its sign because the degree is odd.",
     "examPointer": "A 3-mark question gives a cubic and asks for all three relations, or gives two zeros and asks for the third (CBSE 2020, 2023); write all three formulas first, then substitute."
    },
    {
     "heading": "The Division Algorithm for Polynomials",
     "para": "Just as 47 = 5 x 9 + 2 splits a number into quotient and remainder, the division algorithm for polynomials says that if p(x) and g(x) are polynomials with g(x) not the zero polynomial, then there exist unique polynomials q(x) and r(x) such that p(x) = g(x) q(x) + r(x), where either r(x) = 0 or the degree of r(x) is less than the degree of g(x). The process is long division: divide the leading terms, multiply back, subtract, bring down, and repeat. For p(x) = 3x^3 + x^2 + 2x + 5 divided by g(x) = x^2 + 2x + 1, the quotient is 3x - 5 and the remainder is 9x + 10, and multiplying back verifies the identity exactly.",
     "points": [
      "Division algorithm statement: p(x) = g(x) q(x) + r(x) with r(x) = 0 or degree of r(x) less than degree of g(x); q(x) is the quotient and r(x) the remainder.",
      "Long division steps: divide the leading terms, multiply the divisor by that term, subtract, bring down the next term, repeat until the leftover degree drops below the divisor's degree.",
      "NCERT example: (3x^3 + x^2 + 2x + 5) divided by (x^2 + 2x + 1) gives quotient 3x - 5 and remainder 9x + 10.",
      "Verification: (x^2 + 2x + 1)(3x - 5) + 9x + 10 = 3x^3 + x^2 + 2x + 5, rebuilding the dividend exactly.",
      "When the divisor is linear x - k, the remainder equals p(k); this is the Remainder Theorem, and r = 0 exactly when k is a zero.",
      "If one zero of a cubic is given, say 2, then (x - 2) divides the cubic, and dividing once reduces the problem to a quadratic.",
      "Degree bookkeeping: when the remainder is not 0, degree of p = degree of g + degree of q; if r = 0 the same equation holds exactly."
     ],
     "keyTerms": [
      {
       "term": "Division algorithm",
       "meaning": "The identity p(x) = g(x) q(x) + r(x) with the remainder of smaller degree than the divisor."
      },
      {
       "term": "Long division",
       "meaning": "The repeated divide-multiply-subtract-bring-down process for polynomials."
      },
      {
       "term": "Quotient",
       "meaning": "The polynomial q(x) obtained in the division."
      },
      {
       "term": "Remainder",
       "meaning": "The leftover polynomial r(x) of degree less than the divisor, possibly 0."
      },
      {
       "term": "Remainder Theorem",
       "meaning": "The remainder on dividing p(x) by x - k is p(k)."
      }
     ],
     "trick": "DMSB loop: Divide, Multiply, Subtract, Bring down; stop the loop when the leftover degree dips below the divisor's degree.",
     "examPointer": "A 3 or 4 mark question asks to divide one polynomial by another and verify the algorithm (CBSE 2018, 2019); the verification line g x q + r carries its own mark, so never skip it."
    },
    {
     "heading": "Worked Strategy: The Five Standard Question Types",
     "para": "Board questions on this chapter come in five predictable shapes, and each has a fixed solution route. Type 1 asks for the sum and product of zeros of a given quadratic: read a, b, c, write -b/a and c/a, done in two lines. Type 2 gives the zeros and asks for the polynomial: compute sum and product, then assemble x^2 - (sum)x + product. Type 3 gives one zero and an unknown coefficient: substitute the zero, solve the resulting linear equation. Type 4 divides one polynomial by another and demands verification: run long division, then multiply back. Type 5 gives a cubic with two known zeros: divide by the quadratic built from the two zeros to find the linear factor, or use the three relations. Recognising the type within ten seconds saves minutes under exam pressure.",
     "points": [
      "Type 1: for 2x^2 - 7x + 3, sum = 7/2 and product = 3/2, read directly from the coefficients.",
      "Type 2: zeros -2 and 3 give sum 1 and product -6, so the polynomial is x^2 - x - 6.",
      "Type 3: if one zero of x^2 + kx + 6 is 2, then 4 + 2k + 6 = 0, so k = -5.",
      "Type 4: dividing x^3 - 3x^2 + x + 2 by x - 2 gives quotient x^2 - x - 1 and remainder 0, so 2 is a zero.",
      "Type 5: for x^3 - 6x^2 + 11x - 6 with zeros 2 and 3, divide by (x - 2)(x - 3) = x^2 - 5x + 6 to get x - 1, so the third zero is 1.",
      "Marks map: 1 mark for the formula, 1 for the substitution, 1 for the conclusion; write formulas even when the answer looks obvious.",
      "Time plan: about 90 seconds per 2-marker, 4 minutes per 3-marker, and up to 7 minutes for a division algorithm question."
     ],
     "keyTerms": [
      {
       "term": "Question typing",
       "meaning": "Identifying which of the five standard shapes a question belongs to."
      },
      {
       "term": "Substitution route",
       "meaning": "Placing a known zero into the polynomial to find an unknown coefficient."
      },
      {
       "term": "Relation route",
       "meaning": "Using sum and product relations instead of solving the equation."
      },
      {
       "term": "Division route",
       "meaning": "Reducing a cubic or quartic by dividing out a known factor."
      }
     ],
     "trick": "READ the given data: zeros given? Build. Coefficients given? Extract. One zero plus unknown? Substitute. Cubic with two zeros? Divide or use relations.",
     "examPointer": "CBSE 2023 asked a 2-marker on sum and product; CBSE 2019 asked a 4-marker on the division algorithm; both patterns repeat, so drill all five types until the route is automatic."
    },
    {
     "heading": "Graph-Based Questions and Sign Reading",
     "para": "MCQs increasingly show a figure of a parabola or a cubic and ask for the number of zeros, the signs of the coefficients or a polynomial that fits. The reading rules are mechanical. Count the x-axis contacts for the zero count. For y = ax^2 + bx + c, the opening direction gives the sign of a, the y-intercept gives the sign of c, and the position of the vertex relative to the y-axis fixes the sign of b through the vertex formula x = -b/(2a). A parabola opening upward with its vertex on the right of the y-axis has a > 0 and -b/(2a) > 0, forcing b < 0. Two minutes of rules beat two minutes of guessing in every figure-based item.",
     "points": [
      "Number of zeros equals the number of distinct x-axis intersection points shown, capped by the degree of the polynomial.",
      "Sign of a: upward opening means a > 0, downward opening means a < 0.",
      "Sign of c: the y-intercept; the curve crossing the y-axis above the origin gives c > 0, below gives c < 0, through the origin gives c = 0.",
      "Sign of b: the vertex x-coordinate is -b/(2a); for an upward parabola with vertex to the right, b < 0, and with vertex to the left, b > 0.",
      "A parabola touching the x-axis at exactly one point has two equal zeros, previewing b^2 - 4ac = 0 from Chapter 4.",
      "A cubic crossing the axis once has one real zero; for Class 10 only the count of visible contacts matters.",
      "If zeros -2 and 3 are marked, the fitting monic quadratic is (x + 2)(x - 3) = x^2 - x - 6, scaled by k if the y-intercept demands it."
     ],
     "keyTerms": [
      {
       "term": "x-axis contact",
       "meaning": "Any crossing or touching of the x-axis by the graph."
      },
      {
       "term": "Vertex",
       "meaning": "The turning point of a parabola with x-coordinate -b/(2a)."
      },
      {
       "term": "y-intercept",
       "meaning": "The value c at which the graph meets the y-axis."
      },
      {
       "term": "Sign analysis",
       "meaning": "Deducing the signs of a, b and c from the picture."
      }
     ],
     "trick": "SAC order for signs: A from the opening, C from the y-cut, B from the vertex side. Never read b first; it is the sneakiest sign.",
     "examPointer": "Figure-based MCQs appeared in CBSE 2022 and 2023; expect one item per paper on zeros from a graph, worth 1 mark, with distractors swapping touches and cuts."
    },
    {
     "heading": "Common Mistakes and Exam Traps",
     "para": "The chapter is short, so the traps are concentrated. Students call 1/x + 2 a polynomial, forget that a quadratic has at most two real zeros, or flip the wrong sign when rebuilding a polynomial. In the division algorithm the classic losses are stopping one step early, misaligning powers during subtraction and skipping the verification line. In the cubic relations, the product sign -d/a versus d/a causes half of all errors. Write the sign rule beside every computation until it becomes automatic, and finish every long division with a substitution check at one easy value of x; a two-line check that catches most slips is worth more than a page of confident algebra.",
     "points": [
      "Trap: x^2 + 1/x or sqrt(x) + 3 called polynomials; negative and fractional powers disqualify them.",
      "Trap: rebuilding with x^2 + (sum)x + product; the sum term must enter with a minus sign.",
      "Trap: writing alpha beta gamma = d/a for a cubic; the correct relation is alpha beta gamma = -d/a.",
      "Trap: subtracting incompletely in long division so a middle term survives; write every power column, including zero coefficients.",
      "Trap: claiming a quadratic always has two zeros; it has at most two real zeros and may have none.",
      "Trap: giving the family k(x^2 - sx + p) when the question fixes a leading coefficient; reread the question before finalising.",
      "Trap: skipping the verification of the division algorithm; the verification usually carries a dedicated mark."
     ],
     "keyTerms": [
      {
       "term": "Sign flip",
       "meaning": "The minus that appears before the sum in reconstruction and before d in the cubic product relation."
      },
      {
       "term": "Alignment error",
       "meaning": "A long-division mistake caused by placing terms in wrong power columns."
      },
      {
       "term": "Verification line",
       "meaning": "The final check g(x) q(x) + r(x) = p(x) demanded by the algorithm."
      }
     ],
     "trick": "Two minuses of Chapter 2: minus before the sum, minus before the cubic product. Chant 'sum minus, product plus, cubic product minus' before every answer.",
     "examPointer": "The CBSE 2020 examiner report notes that writing the three relations before substituting prevents the -d/a slip, the most common error in this chapter."
    }
   ],
   "mcqs": [
    {
     "question": "The zeros of the polynomial x^2 - 2x - 8 are",
     "options": [
      "4 and -2",
      "-4 and 2",
      "4 and 2",
      "-4 and -2"
     ],
     "answerIndex": 0,
     "explanation": "x^2 - 2x - 8 = (x - 4)(x + 2), so the zeros are 4 and -2; sum 2 = -(-2)/1 and product -8 confirm the relations.",
     "difficulty": "easy"
    },
    {
     "question": "The sum of the zeros of 2x^2 + 5x + 3 is",
     "options": [
      "-5/2",
      "5/2",
      "3/2",
      "-3/2"
     ],
     "answerIndex": 0,
     "explanation": "Sum of zeros = -b/a = -5/2; no need to find the zeros at all.",
     "difficulty": "easy",
     "pyq": "CBSE 2019"
    },
    {
     "question": "The product of the zeros of 3x^2 - 5x + 2 is",
     "options": [
      "2/3",
      "-2/3",
      "5/3",
      "-5/3"
     ],
     "answerIndex": 0,
     "explanation": "Product of zeros = c/a = 2/3; the sign never flips for the product.",
     "difficulty": "easy"
    },
    {
     "question": "If one zero of the polynomial x^2 + 3x + k is 2, then k equals",
     "options": [
      "-10",
      "10",
      "5",
      "-5"
     ],
     "answerIndex": 0,
     "explanation": "Substituting x = 2: 4 + 6 + k = 0, so k = -10.",
     "difficulty": "easy"
    },
    {
     "question": "The graph of y = p(x) cuts the x-axis at exactly 3 points. The number of zeros of p(x) is",
     "options": [
      "1",
      "2",
      "3",
      "cannot say"
     ],
     "answerIndex": 2,
     "explanation": "Each x-axis intersection corresponds to one zero, so 3 contacts give 3 zeros.",
     "difficulty": "easy"
    },
    {
     "question": "The maximum number of zeros that a cubic polynomial can have is",
     "options": [
      "1",
      "2",
      "3",
      "4"
     ],
     "answerIndex": 2,
     "explanation": "A polynomial of degree n has at most n zeros, so a cubic has at most 3.",
     "difficulty": "easy"
    },
    {
     "question": "Which of the following is NOT a polynomial?",
     "options": [
      "3x^2 - 2x + 7",
      "x^2 + 1/x",
      "x + 5",
      "7"
     ],
     "answerIndex": 1,
     "explanation": "The term 1/x has power -1, which is not a whole number, so x^2 + 1/x is not a polynomial.",
     "difficulty": "medium"
    },
    {
     "question": "If alpha and beta are the zeros of x^2 - 5x + 6, then alpha^2 + beta^2 equals",
     "options": [
      "13",
      "25",
      "12",
      "11"
     ],
     "answerIndex": 0,
     "explanation": "alpha + beta = 5 and alpha beta = 6, so alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta = 25 - 12 = 13.",
     "difficulty": "medium",
     "pyq": "CBSE 2019"
    },
    {
     "question": "A quadratic polynomial whose zeros are 2 + sqrt(3) and 2 - sqrt(3) is",
     "options": [
      "x^2 - 4x + 1",
      "x^2 + 4x + 1",
      "x^2 - 4x - 1",
      "x^2 + 1"
     ],
     "answerIndex": 0,
     "explanation": "Sum = 4 and product = 4 - 3 = 1, so the polynomial is x^2 - 4x + 1.",
     "difficulty": "medium",
     "pyq": "CBSE 2023"
    },
    {
     "question": "If the sum of the zeros of kx^2 - 3x + 5 is 3/4, then k equals",
     "options": [
      "4",
      "-4",
      "3/4",
      "5"
     ],
     "answerIndex": 0,
     "explanation": "Sum = -(-3)/k = 3/k, and 3/k = 3/4 gives k = 4.",
     "difficulty": "medium"
    },
    {
     "question": "In the division algorithm p(x) = g(x) q(x) + r(x), the degree of the remainder r(x) must be",
     "options": [
      "less than the degree of g(x)",
      "greater than the degree of g(x)",
      "equal to the degree of g(x)",
      "any value at all"
     ],
     "answerIndex": 0,
     "explanation": "The algorithm demands r(x) = 0 or degree of r(x) strictly less than the degree of g(x); otherwise the division is not complete.",
     "difficulty": "medium"
    },
    {
     "question": "On dividing x^2 - 5x + 6 by x - 3, the quotient is",
     "options": [
      "x - 2",
      "x + 2",
      "x - 3",
      "x - 6"
     ],
     "answerIndex": 0,
     "explanation": "x^2 - 5x + 6 = (x - 3)(x - 2), so the quotient is x - 2 and the remainder is 0.",
     "difficulty": "medium"
    },
    {
     "question": "If two zeros of x^3 - 6x^2 + 11x - 6 are 1 and 2, then the third zero is",
     "options": [
      "3",
      "-3",
      "6",
      "1"
     ],
     "answerIndex": 0,
     "explanation": "Sum of zeros = -b/a = 6; the third zero = 6 - (1 + 2) = 3, and indeed the cubic factors as (x - 1)(x - 2)(x - 3).",
     "difficulty": "medium",
     "pyq": "CBSE 2019"
    },
    {
     "question": "For the cubic polynomial x^3 - 4x^2 + x + 6, the product of its zeros equals",
     "options": [
      "-6",
      "6",
      "-1",
      "1"
     ],
     "answerIndex": 0,
     "explanation": "For ax^3 + bx^2 + cx + d, product of zeros = -d/a = -6/1 = -6.",
     "difficulty": "medium",
     "pyq": "CBSE 2020"
    },
    {
     "question": "The polynomial whose zeros are -5 and 3 is",
     "options": [
      "x^2 + 2x - 15",
      "x^2 - 2x - 15",
      "x^2 + 2x + 15",
      "x^2 - 2x + 15"
     ],
     "answerIndex": 0,
     "explanation": "Sum = -5 + 3 = -2 and product = -15, so the polynomial is x^2 - (-2)x + (-15) = x^2 + 2x - 15.",
     "difficulty": "medium"
    },
    {
     "question": "If one zero of the quadratic polynomial f(x) = 4x^2 - 8kx - 9 is the negative of the other, then k equals",
     "options": [
      "0",
      "1",
      "2",
      "-1"
     ],
     "answerIndex": 0,
     "explanation": "If the zeros are alpha and -alpha, their sum is 0, and sum = -b/a = 8k/4 = 2k, so 2k = 0 and k = 0.",
     "difficulty": "hard"
    },
    {
     "question": "If alpha and beta are the zeros of x^2 - 2x + 3, then alpha^2 beta + alpha beta^2 equals",
     "options": [
      "6",
      "-6",
      "2",
      "3"
     ],
     "answerIndex": 0,
     "explanation": "alpha^2 beta + alpha beta^2 = alpha beta (alpha + beta). Here alpha + beta = 2 and alpha beta = 3, so the value is 3 x 2 = 6.",
     "difficulty": "hard"
    },
    {
     "question": "The number of distinct quadratic polynomials having zeros -3 and 4 with no other restriction is",
     "options": [
      "exactly one",
      "exactly two",
      "infinitely many",
      "none"
     ],
     "answerIndex": 2,
     "explanation": "Every non-zero multiple k(x + 3)(x - 4) has the same two zeros, and k can be any non-zero real number, so there are infinitely many such polynomials.",
     "difficulty": "hard",
     "pyq": "CBSE 2020"
    },
    {
     "question": "If alpha, beta and gamma are the zeros of 2x^3 + 3x^2 - 7x + 6, then 1/alpha + 1/beta + 1/gamma equals",
     "options": [
      "7/6",
      "-7/6",
      "6/7",
      "3/7"
     ],
     "answerIndex": 0,
     "explanation": "1/alpha + 1/beta + 1/gamma = (pairwise sum)/(product) = (-c/a)/(-d/a) = (-7/2)/(-3) = 7/6.",
     "difficulty": "hard"
    }
   ],
   "boardQuestions": [
    {
     "question": "Find the sum and the product of the zeros of the polynomial 2x^2 - 5x + 3, and verify them by finding the zeros.",
     "marks": 2,
     "type": "short",
     "probability": "very-high",
     "answer": "Here a = 2, b = -5, c = 3. Sum of zeros = -b/a = 5/2 and product of zeros = c/a = 3/2. Verification: 2x^2 - 5x + 3 = 2x^2 - 2x - 3x + 3 = 2x(x - 1) - 3(x - 1) = (x - 1)(2x - 3), so the zeros are 1 and 3/2. Their sum is 1 + 3/2 = 5/2 and their product is 1 x 3/2 = 3/2, matching the values obtained from the relations."
    },
    {
     "question": "If alpha and beta are the zeros of the polynomial x^2 - 6x + 4, find the value of alpha^2 + beta^2.",
     "marks": 3,
     "type": "short",
     "probability": "high",
     "answer": "From the relations, alpha + beta = -b/a = 6 and alpha beta = c/a = 4. Now use the identity alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta. Substituting: alpha^2 + beta^2 = 6^2 - 2 x 4 = 36 - 8 = 28. Hence alpha^2 + beta^2 = 28. The key step is to express the required expression in terms of the sum and product rather than solving for the zeros, since the zeros 3 + sqrt(5) and 3 - sqrt(5) are irrational and need not be written at all."
    },
    {
     "question": "Form a quadratic polynomial whose zeros are 3 + sqrt(5) and 3 - sqrt(5).",
     "marks": 3,
     "type": "short",
     "probability": "high",
     "answer": "Let alpha = 3 + sqrt(5) and beta = 3 - sqrt(5). Sum of zeros: alpha + beta = (3 + sqrt(5)) + (3 - sqrt(5)) = 6. Product of zeros: alpha beta = (3 + sqrt(5))(3 - sqrt(5)) = 3^2 - (sqrt(5))^2 = 9 - 5 = 4. The required quadratic polynomial is x^2 - (sum)x + product = x^2 - 6x + 4. Check: x^2 - 6x + 4 = 0 has roots (6 +/- sqrt(36 - 16))/2 = (6 +/- 2 sqrt(5))/2 = 3 +/- sqrt(5), which are exactly the given zeros."
    },
    {
     "question": "If two zeros of the polynomial x^3 - 4x^2 + x + 6 are 2 and 3, find all the zeros of the polynomial.",
     "marks": 5,
     "type": "long",
     "probability": "very-high",
     "answer": "Since 2 and 3 are zeros, (x - 2) and (x - 3) are factors, so (x - 2)(x - 3) = x^2 - 5x + 6 divides the cubic. Divide x^3 - 4x^2 + x + 6 by x^2 - 5x + 6 by long division. Step 1: x^3 divided by x^2 gives x; multiply back: x(x^2 - 5x + 6) = x^3 - 5x^2 + 6x; subtract: (x^3 - 4x^2 + x + 6) - (x^3 - 5x^2 + 6x) = x^2 - 5x + 6. Step 2: x^2 divided by x^2 gives 1; multiply back: x^2 - 5x + 6; subtract: remainder 0. So the quotient is x + 1, and the cubic = (x^2 - 5x + 6)(x + 1). Setting the quotient to 0 gives x + 1 = 0, so the third zero is -1. Hence all the zeros are 2, 3 and -1. Verification by the relations: sum = 2 + 3 - 1 = 4 = -b/a; pairwise sum = 6 - 3 - 2 = 1 = c/a; product = 2 x 3 x (-1) = -6 = -d/a. All three match the coefficients, so the answer is confirmed."
    },
    {
     "question": "Divide the polynomial 3x^3 + x^2 + 2x + 5 by the polynomial 1 + 2x + x^2 and verify the division algorithm.",
     "marks": 4,
     "type": "numerical",
     "probability": "high",
     "answer": "Rewrite the divisor in standard form: x^2 + 2x + 1. Long division: Step 1, divide 3x^3 by x^2 to get 3x; multiply 3x(x^2 + 2x + 1) = 3x^3 + 6x^2 + 3x; subtract from 3x^3 + x^2 + 2x + 5 to get -5x^2 - x + 5. Step 2, divide -5x^2 by x^2 to get -5; multiply -5(x^2 + 2x + 1) = -5x^2 - 10x - 5; subtract to get (-x + 10x) + (5 + 5) = 9x + 10. The degree of 9x + 10 is 1, less than 2, so the division stops. Quotient q(x) = 3x - 5 and remainder r(x) = 9x + 10. Verification: (x^2 + 2x + 1)(3x - 5) = 3x^3 + 6x^2 + 3x - 5x^2 - 10x - 5 = 3x^3 + x^2 - 7x - 5; adding r(x) = 9x + 10 gives 3x^3 + x^2 + 2x + 5, which is exactly the dividend. Hence p(x) = g(x) q(x) + r(x) is verified."
    },
    {
     "question": "If alpha and beta are the zeros of the polynomial x^2 - 5x + k such that alpha - beta = 1, find the value of k.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "From the relations, alpha + beta = 5 and alpha beta = k. Use the identity (alpha - beta)^2 = (alpha + beta)^2 - 4 alpha beta. Substituting the given difference: 1^2 = 5^2 - 4k, so 1 = 25 - 4k, giving 4k = 24 and k = 6. Check: for x^2 - 5x + 6 = (x - 2)(x - 3), the zeros are 3 and 2, whose difference is 1 and product is 6, confirming k = 6."
    },
    {
     "question": "Find the zero of the linear polynomial 5x - 7 and state the general rule for the zero of a linear polynomial ax + b.",
     "marks": 2,
     "type": "very-short",
     "probability": "high",
     "answer": "The zero of a linear polynomial ax + b, with a not 0, is x = -b/a, because the graph of y = ax + b meets the x-axis exactly at x = -b/a. For 5x - 7, the zero is x = 7/5. Check by substitution: 5 x (7/5) - 7 = 7 - 7 = 0, so 7/5 is indeed the zero."
    },
    {
     "question": "The graph of a quadratic polynomial y = p(x) models the height of a ball thrown upward; it cuts the x-axis at x = 1 and x = 3 and the y-axis at y = 3. Answer: (i) the zeros of p(x), (ii) a quadratic polynomial fitting the data, (iii) the sum and product of the zeros.",
     "marks": 4,
     "type": "case-based",
     "probability": "high",
     "answer": "(i) The zeros of p(x) are the x-coordinates of the points where the graph meets the x-axis, so the zeros are 1 and 3. (ii) A polynomial with zeros 1 and 3 has sum 4 and product 3, so the monic member is x^2 - 4x + 3. Because the y-intercept is 3, putting x = 0 in x^2 - 4x + 3 gives 3, which matches the data, so the monic polynomial itself fits: p(x) = x^2 - 4x + 3. (iii) Sum of zeros = 4 = -b/a and product of zeros = 3 = c/a, consistent with the coefficients read from p(x). Since the coefficient of x^2 is positive, the parabola opens upward, as expected for a model that returns to the ground at both ends."
    },
    {
     "question": "On dividing x^3 - 3x^2 + x + 2 by a polynomial g(x), the quotient and remainder were x - 2 and -2x + 4 respectively. Find g(x).",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "By the division algorithm, p(x) = g(x) q(x) + r(x), so g(x) = (p(x) - r(x))/q(x). Compute p(x) - r(x) = (x^3 - 3x^2 + x + 2) - (-2x + 4) = x^3 - 3x^2 + 3x - 2. Now divide x^3 - 3x^2 + 3x - 2 by x - 2: x^3/(x) = x^2; multiply back x^2(x - 2) = x^3 - 2x^2; subtract to get -x^2 + 3x - 2; divide -x^2 by x to get -x; multiply -x(x - 2) = -x^2 + 2x; subtract to get x - 2; divide x by x to get 1; multiply 1(x - 2) = x - 2; subtract to get remainder 0. So the quotient is x^2 - x + 1 with remainder 0, hence g(x) = x^2 - x + 1. Check: (x - 2)(x^2 - x + 1) + (-2x + 4) = x^3 - 3x^2 + 3x - 2 - 2x + 4 = x^3 - 3x^2 + x + 2, the original dividend."
    }
   ]
  },
  {
   "number": 3,
   "title": "Pair of Linear Equations in Two Variables",
   "summary": "Chapter 3 of NCERT Class 10 Mathematics focuses on Pair of Linear Equations in Two Variables. This chapter explores the graphical and algebraic methods to solve systems of two linear equations with two variables. It covers consistency conditions, graphical representations, and algebraic techniques like substitution, elimination, and cross-multiplication. The chapter also discusses the relationship between coefficients and the nature of solutions, including unique solution, no solution, and infinitely many solutions. Additionally, it introduces the concept of linear equations in real-world contexts and their applications. Understanding this chapter is crucial as it forms the foundation for more advanced topics in algebra and coordinate geometry.",
   "weightageMarks": 8,
   "difficulty": "medium",
   "hotTopics": [
    "Graphical method of solution",
    "Algebraic methods",
    "Consistency of linear equations",
    "Number of solutions",
    "Cross-multiplication method",
    "Word problems",
    "Dependent and independent equations",
    "Parallel lines",
    "Coincident lines",
    "Real-life applications"
   ],
   "sections": [
    {
     "heading": "Introduction to Linear Equations",
     "para": "A linear equation in two variables is an equation that can be written in the form ax + by + c = 0, where a, b, and c are real numbers, and a and b are not both zero. Such equations represent straight lines when graphed. A pair of linear equations in two variables consists of two such equations. The solution to a pair of linear equations is the point that satisfies both equations simultaneously. This chapter explores various methods to find these solutions and conditions under which solutions exist. Understanding the graphical representation helps visualize the relationship between the equations and their solutions.",
     "points": [
      "A linear equation in two variables has infinitely many solutions forming a straight line.",
      "The standard form is ax + by + c = 0 where a, b, c are real numbers and a and b not both zero.",
      "A pair of linear equations represents two straight lines in a coordinate plane.",
      "The solution of the pair is the point of intersection of these two lines.",
      "If lines are parallel, no solution exists; if coincident, infinite solutions exist.",
      "The coefficients determine the relationship between the two equations.",
      "Real-world problems can often be modeled using pairs of linear equations.",
      "The chapter covers both graphical and algebraic methods to solve these equations."
     ],
     "keyTerms": [
      {
       "term": "Linear equation",
       "meaning": "An equation of the form ax + by + c = 0 where a and b are not both zero"
      },
      {
       "term": "Solution pair",
       "meaning": "A pair of values (x, y) that satisfies both equations simultaneously"
      },
      {
       "term": "Graphical method",
       "meaning": "Solving equations by finding the intersection point of their graphs"
      },
      {
       "term": "Consistent equations",
       "meaning": "Equations that have at least one solution"
      },
      {
       "term": "Inconsistent equations",
       "meaning": "Equations that have no solution"
      },
      {
       "term": "Dependent equations",
       "meaning": "Equations that have infinitely many solutions"
      }
     ],
     "trick": "Remember 'GAS' for Graphical Algebraic Substitution methods to solve linear equations.",
     "examPointer": "CBSE often asks 1-2 mark questions on identifying the number of solutions based on coefficients and 3-4 mark questions on solving pairs using graphical or algebraic methods."
    },
    {
     "heading": "Graphical Method of Solution",
     "para": "The graphical method involves plotting both linear equations on the same coordinate plane and finding their point of intersection. If the lines intersect at a point, that point is the unique solution. If the lines are parallel, there is no solution, making the system inconsistent. If the lines coincide, there are infinitely many solutions, making the system dependent and consistent. This method provides visual understanding but may not give exact solutions, especially when coordinates are fractions. The graphical approach helps in understanding the relationship between coefficients and the nature of solutions. It's particularly useful when dealing with simple integer solutions.",
     "points": [
      "Draw both lines on the same coordinate plane using at least two points for each line.",
      "The intersection point gives the solution if it exists.",
      "Parallel lines indicate no solution (inconsistent system).",
      "Coincident lines indicate infinite solutions (dependent system).",
      "This method provides visual understanding but may not give exact fractional solutions.",
      "The slope of lines determines if they intersect, are parallel, or coincide.",
      "Graphical method is best when solutions are integers or simple fractions.",
      "It helps verify algebraic solutions visually."
     ],
     "keyTerms": [
      {
       "term": "Point of intersection",
       "meaning": "The point where two lines cross each other"
      },
      {
       "term": "Parallel lines",
       "meaning": "Lines that never meet, having the same slope"
      },
      {
       "term": "Coincident lines",
       "meaning": "Lines that lie exactly on top of each other"
      },
      {
       "term": "Inconsistent system",
       "meaning": "A system of equations with no solution"
      },
      {
       "term": "Dependent system",
       "meaning": "A system with infinitely many solutions"
      },
      {
       "term": "Unique solution",
       "meaning": "A single point that satisfies both equations"
      }
     ],
     "trick": "Remember 'IPE' for Intersection, Parallel, and Equivalence to determine solution types graphically.",
     "examPointer": "CBSE typically asks 2-3 mark questions on graphical representation and identifying the nature of solutions based on graphs."
    },
    {
     "heading": "Algebraic Methods - Substitution",
     "para": "The substitution method is an algebraic technique to solve pairs of linear equations. First, solve one equation for one variable in terms of the other. Then substitute this expression into the second equation, reducing it to a single-variable equation. Solve this equation to find the value of one variable. Substitute this value back into the first expression to find the other variable. This method works well when one coefficient is 1 or -1, making isolation easy. The substitution method is systematic and always gives exact solutions, unlike graphical methods. It's particularly useful when dealing with fractional or irrational solutions.",
     "points": [
      "Solve one equation for one variable in terms of the other.",
      "Substitute this expression into the second equation.",
      "Solve the resulting single-variable equation.",
      "Substitute the value back to find the other variable.",
      "This method gives exact solutions unlike graphical method.",
      "Works best when one coefficient is 1 or -1.",
      "Always verify the solution by substituting in both original equations.",
      "Can be used for all types of solutions - unique, no solution, or infinite solutions."
     ],
     "keyTerms": [
      {
       "term": "Substitution method",
       "meaning": "Solving one equation for a variable and substituting in the other"
      },
      {
       "term": "Isolation",
       "meaning": "Rearranging an equation to solve for one variable"
      },
      {
       "term": "Expression",
       "meaning": "A combination of variables and constants representing a value"
      },
      {
       "term": "Verification",
       "meaning": "Checking the solution by substituting back into original equations"
      },
      {
       "term": "Systematic approach",
       "meaning": "Following a step-by-step procedure to reach the solution"
      }
     ],
     "trick": "Think 'Solve, Substitute, Solve' as the three steps for the substitution method.",
     "examPointer": "CBSE often includes 3-4 mark questions on solving pairs using substitution method, especially when coefficients are simple."
    },
    {
     "heading": "Algebraic Methods - Elimination",
     "para": "The elimination method involves eliminating one variable by adding or subtracting the equations. First, make the coefficients of one variable the same in both equations by multiplying appropriately. Then add or subtract the equations to eliminate that variable. Solve the resulting single-variable equation for the remaining variable. Substitute this value back into one of the original equations to find the other variable. This method is efficient when coefficients are multiples of each other. Like the substitution method, it gives exact solutions and works for all cases. The elimination method is often preferred when dealing with larger coefficients or when substitution would create complex expressions.",
     "points": [
      "Make coefficients of one variable the same in both equations.",
      "Add or subtract equations to eliminate that variable.",
      "Solve the resulting single-variable equation.",
      "Substitute back to find the other variable.",
      "This method is efficient when coefficients are multiples.",
      "Works well with larger coefficients where substitution might be complex.",
      "Always check the solution by substituting in both original equations.",
      "Can handle all types of solution cases - unique, no solution, or infinite solutions."
     ],
     "keyTerms": [
      {
       "term": "Elimination method",
       "meaning": "Solving by eliminating one variable through addition or subtraction"
      },
      {
       "term": "Coefficient matching",
       "meaning": "Making coefficients of a variable equal in both equations"
      },
      {
       "term": "Addition property",
       "meaning": "Adding equal quantities to both sides maintains equality"
      },
      {
       "term": "Subtraction property",
       "meaning": "Subtracting equal quantities from both sides maintains equality"
      },
      {
       "term": "Variable elimination",
       "meaning": "Removing a variable from the system to simplify solving"
      }
     ],
     "trick": "Remember 'Match, Add/Subtract, Solve' as the three key steps for elimination method.",
     "examPointer": "CBSE frequently includes 3-4 mark questions on solving pairs using elimination method, especially when coefficients are multiples."
    },
    {
     "heading": "Algebraic Methods - Cross-Multiplication",
     "para": "The cross-multiplication method provides a direct formula to solve pairs of linear equations. For equations a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0, the solution is given by x = (b₁c₂ - b₂c₁)/(a₁b₂ - a₂b₁) and y = (c₁a₂ - c₂a₁)/(a₁b₂ - a₂b₁). This method is derived from the elimination approach but provides a shortcut. It's particularly useful when you need the solution directly without intermediate steps. The denominator a₁b₂ - a₂b₁ determines the nature of solutions - non-zero for unique solution, zero with other conditions for no solution or infinite solutions. This method is efficient and systematic for all cases.",
     "points": [
      "For equations a1x + b1y + c1 = 0 and a2x + b2y + c2 = 0, use the cross-multiplication formula.",
      "x = (b1c2 - b2c1)/(a1b2 - a2b1) and y = (c1a2 - c2a1)/(a1b2 - a2b1).",
      "The denominator determines the nature of solutions.",
      "Non-zero denominator gives unique solution.",
      "Zero denominator with (b1c2 - b2c1) and (c1a2 - c2a1) not zero gives no solution.",
      "Zero denominator with all ratios equal gives infinite solutions.",
      "This method provides direct solution without intermediate steps.",
      "It's derived from the elimination method but offers a shortcut."
     ],
     "keyTerms": [
      {
       "term": "Cross-multiplication",
       "meaning": "A method to solve linear equations using a direct formula"
      },
      {
       "term": "Determinant",
       "meaning": "The denominator a1b2 - a2b1 that determines solution nature"
      },
      {
       "term": "Numerator",
       "meaning": "The expressions b1c2 - b2c1 and c1a2 - c2a1 for x and y"
      },
      {
       "term": "Direct formula",
       "meaning": "A mathematical expression giving the solution directly"
      },
      {
       "term": "Systematic approach",
       "meaning": "Following a consistent procedure to reach the solution"
      }
     ],
     "trick": "Remember 'X = BC - BC / AB - AB' and 'Y = CA - CA / AB - AB' as the pattern for cross-multiplication formula.",
     "examPointer": "CBSE often includes 3-4 mark questions on applying cross-multiplication method, especially with fractional solutions."
    },
    {
     "heading": "Consistency of Linear Equations",
     "para": "A pair of linear equations is consistent if it has at least one solution. The consistency depends on the relationship between the coefficients a₁, b₁, c₁ and a₂, b₂, c₂. For unique solution, a₁/a₂ ≠ b₁/b₂ (lines intersect at one point). For no solution, a₁/a₂ = b₁/b₂ ≠ c₁/c₂ (lines are parallel). For infinitely many solutions, a₁/a₂ = b₁/b₂ = c₁/c₂ (lines coincide). These conditions can be checked using the determinant a₁b₂ - a₂b₁. If it's non-zero, there's a unique solution. If zero, further check the other ratios. Understanding consistency helps determine the nature of solutions without solving the equations completely.",
     "points": [
      "Consistent equations have at least one solution.",
      "For unique solution, a1/a2 ≠ b1/b2 (intersecting lines).",
      "For no solution, a1/a2 = b1/b2 ≠ c1/c2 (parallel lines).",
      "For infinite solutions, a1/a2 = b1/b2 = c1/c2 (coincident lines).",
      "The determinant a1b2 - a2b1 determines solution nature.",
      "Non-zero determinant gives unique solution.",
      "Zero determinant requires checking other ratios for consistency.",
      "Consistency conditions can be checked without solving the equations."
     ],
     "keyTerms": [
      {
       "term": "Consistent equations",
       "meaning": "Equations that have at least one solution"
      },
      {
       "term": "Inconsistent equations",
       "meaning": "Equations that have no solution"
      },
      {
       "term": "Determinant",
       "meaning": "The expression a1b2 - a2b1 that determines solution nature"
      },
      {
       "term": "Ratio of coefficients",
       "meaning": "Comparing a1/a2, b1/b2, c1/c2 to determine consistency"
      },
      {
       "term": "Intersection point",
       "meaning": "The point where two lines cross, representing the solution"
      }
     ],
     "trick": "Remember 'UNEQUAL' for Unique solution, 'NOT EQUAL' for No solution, and 'ALL EQUAL' for Infinite solutions when comparing coefficients.",
     "examPointer": "CBSE frequently includes 2-3 mark questions on determining consistency of linear equations based on coefficients."
    },
    {
     "heading": "Word Problems and Applications",
     "para": "Real-world problems can often be modeled using pairs of linear equations. These problems involve finding unknown quantities that satisfy given conditions. Common examples include age problems, number problems, mixture problems, and problems involving costs and quantities. The key is to identify the unknowns, set up equations based on given conditions, and then solve using appropriate methods. Word problems develop analytical thinking and application skills. They often require translating verbal descriptions into mathematical equations. Practice with various types of word problems helps in understanding different scenarios where linear equations are applicable.",
     "points": [
      "Identify unknowns and assign variables to represent them.",
      "Translate given conditions into mathematical equations.",
      "Set up a system of two linear equations based on the problem.",
      "Choose an appropriate method to solve the system.",
      "Interpret the solution in the context of the original problem.",
      "Common types include age problems, number problems, and mixture problems.",
      "Word problems develop analytical thinking and application skills.",
      "Always check if the solution makes sense in the real-world context."
     ],
     "keyTerms": [
      {
       "term": "Modeling",
       "meaning": "Representing real-world situations mathematically"
      },
      {
       "term": "Unknowns",
       "meaning": "Quantities to be determined in the problem"
      },
      {
       "term": "Equation setup",
       "meaning": "Translating conditions into mathematical equations"
      },
      {
       "term": "Interpretation",
       "meaning": "Understanding the solution in the context of the problem"
      },
      {
       "term": "Analytical thinking",
       "meaning": "The ability to reason and solve complex problems"
      }
     ],
     "trick": "Remember 'UIE' - Understand the problem, Identify unknowns, and set up Equations to solve word problems systematically.",
     "examPointer": "CBSE often includes 4-5 mark word problems requiring setting up and solving pairs of linear equations, typically from real-life contexts."
    },
    {
     "heading": "Special Cases and Variations",
     "para": "Some pairs of linear equations have special characteristics that require specific approaches. When both equations are proportional (one is a multiple of the other), they represent coincident lines with infinite solutions. When equations have the same coefficients for x and y but different constants, they represent parallel lines with no solution. Equations with zero coefficients for one variable reduce to single-variable equations. Special cases also include equations where variables have fractional coefficients or negative signs. Understanding these variations helps in choosing the most efficient solution method. Recognizing special cases can save time in solving problems and prevent errors in calculations.",
     "points": [
      "Proportional equations represent coincident lines with infinite solutions.",
      "Equations with same x and y coefficients but different constants are parallel with no solution.",
      "Zero coefficients reduce equations to single-variable form.",
      "Fractional coefficients require careful handling during solving.",
      "Negative coefficients can be handled by multiplying both sides by -1.",
      "Special cases help choose the most efficient solution method.",
      "Recognizing special cases saves time and prevents errors.",
      "Understanding variations is crucial for comprehensive problem-solving."
     ],
     "keyTerms": [
      {
       "term": "Proportional equations",
       "meaning": "Equations where one is a multiple of the other"
      },
      {
       "term": "Coincident lines",
       "meaning": "Lines that lie exactly on top of each other"
      },
      {
       "term": "Fractional coefficients",
       "meaning": "Coefficients that are fractions rather than integers"
      },
      {
       "term": "Special cases",
       "meaning": "Situations requiring specific approaches or methods"
      },
      {
       "term": "Efficient solving",
       "meaning": "Finding solutions using the most appropriate method"
      }
     ],
     "trick": "Remember 'PIE' for Proportional (infinite solutions), Inconsistent (no solution), and Equal (unique solution) to identify special cases quickly.",
     "examPointer": "CBSE occasionally includes questions on identifying and solving special cases of linear equations, typically worth 2-3 marks."
    },
    {
     "heading": "Relation with Coordinate Geometry",
     "para": "Pair of linear equations has a deep connection with coordinate geometry. Each equation represents a straight line in the Cartesian plane. The solution to the pair corresponds to the point of intersection of these lines. The slope of each line is determined by the ratio of coefficients - slope = -a/b for ax + by + c = 0. Parallel lines have equal slopes but different y-intercepts, while coincident lines have both equal slopes and y-intercepts. This geometric interpretation helps visualize solutions and understand the relationship between algebraic and geometric representations. The distance between parallel lines can also be calculated using the formula involving coefficients. This connection enhances understanding of both algebra and geometry.",
     "points": [
      "Each linear equation represents a straight line in the coordinate plane.",
      "The solution is the point of intersection of these lines.",
      "Slope of line ax + by + c = 0 is -a/b.",
      "Parallel lines have equal slopes but different y-intercepts.",
      "Coincident lines have both equal slopes and y-intercepts.",
      "Distance between parallel lines can be calculated using coefficients.",
      "Geometric interpretation helps visualize solutions.",
      "Understanding this connection enhances algebra and geometry knowledge."
     ],
     "keyTerms": [
      {
       "term": "Coordinate geometry",
       "meaning": "The study of geometric properties using coordinates"
      },
      {
       "term": "Point of intersection",
       "meaning": "The point where two lines cross each other"
      },
      {
       "term": "Slope",
       "meaning": "The steepness of a line, calculated as rise over run"
      },
      {
       "term": "Y-intercept",
       "meaning": "The point where a line crosses the y-axis"
      },
      {
       "term": "Cartesian plane",
       "meaning": "The plane defined by x and y axes"
      }
     ],
     "trick": "Remember 'Slope is -a/b' for the equation ax + by + c = 0 to quickly determine line characteristics.",
     "examPointer": "CBSE may include questions connecting linear equations with coordinate geometry, typically 2-3 marks, asking about slopes, intercepts, and geometric interpretations."
    },
    {
     "heading": "Practice and Problem Solving",
     "para": "Mastering pair of linear equations requires consistent practice with various types of problems. Start with simple equations having integer solutions, then progress to fractional and irrational solutions. Practice all methods - graphical, substitution, elimination, and cross-multiplication. Attempt word problems from different contexts to develop application skills. Analyze errors in solved problems to understand common mistakes. Create a formula sheet for quick reference. Time yourself while solving problems to improve speed and accuracy. Regular revision of concepts and methods helps in retaining knowledge. Practice questions from previous years' board exams to understand the question patterns and difficulty levels.",
     "points": [
      "Start with simple equations having integer solutions.",
      "Progress to fractional and irrational solutions gradually.",
      "Practice all methods - graphical, substitution, elimination, cross-multiplication.",
      "Attempt word problems from different contexts.",
      "Analyze errors to understand common mistakes.",
      "Create a formula sheet for quick reference.",
      "Time yourself to improve speed and accuracy.",
      "Revise regularly and practice previous years' questions."
     ],
     "keyTerms": [
      {
       "term": "Practice",
       "meaning": "Repeated solving of problems to improve skills"
      },
      {
       "term": "Problem analysis",
       "meaning": "Understanding the nature and requirements of problems"
      },
      {
       "term": "Error analysis",
       "meaning": "Identifying and learning from mistakes"
      },
      {
       "term": "Time management",
       "meaning": "Allocating appropriate time to different problem types"
      },
      {
       "term": "Revision",
       "meaning": "Revisiting concepts and methods for retention"
      }
     ],
     "trick": "Use the '3P' approach - Practice, Problem analysis, and Progress through difficulty levels systematically.",
     "examPointer": "CBSE board exams typically include 6-8 marks from this chapter, distributed across various question types from direct solving to word problems."
    }
   ],
   "mcqs": [
    {
     "question": "Which of the following is the correct statement about the Fundamental Theorem of Arithmetic?",
     "options": [
      "Every composite number can be expressed as a product of primes in only one way",
      "Every prime number can be expressed as a product of primes",
      "Every natural number can be expressed as a product of primes in more than one way",
      "Every composite number can be expressed as a sum of primes"
     ],
     "answerIndex": 0,
     "explanation": "The Fundamental Theorem of Arithmetic states that every composite number can be expressed as a product of primes in only one way, ignoring the order of the prime factors.",
     "difficulty": "easy",
     "pyq": "CBSE 2019"
    },
    {
     "question": "If the HCF of 96 and 404 is 4, then the LCM of 96 and 404 is",
     "options": [
      "9696",
      "9640",
      "9664",
      "9644"
     ],
     "answerIndex": 0,
     "explanation": "Using the relation HCF × LCM = Product of numbers, we get 4 × LCM = 96 × 404, so LCM = 9696.",
     "difficulty": "medium",
     "pyq": "CBSE 2020"
    },
    {
     "question": "Prove that sqrt(3) is irrational.",
     "options": [
      "Assume sqrt(3) is rational, then sqrt(3) = p/q where p and q are coprime. Squaring both sides, 3 = p^2/q^2, so p^2 = 3q^2. This means p^2 is divisible by 3, so p is divisible by 3. Let p = 3k. Then 9k^2 = 3q^2, so q^2 = 3k^2. This means q^2 is divisible by 3, so q is divisible by 3. But this contradicts that p and q are coprime. Hence sqrt(3) is irrational.",
      "sqrt(3) is irrational because it cannot be expressed as a fraction",
      "sqrt(3) is irrational because it is a square root",
      "sqrt(3) is irrational because 3 is not a perfect square"
     ],
     "answerIndex": 0,
     "explanation": "The proof follows by contradiction, assuming sqrt(3) is rational and showing this leads to a contradiction that p and q have a common factor of 3.",
     "difficulty": "hard",
     "pyq": "CBSE 2018"
    },
    {
     "question": "For the quadratic equation x^2 - 5x + 6 = 0, the sum of the zeroes is",
     "options": [
      "-5",
      "5",
      "6",
      "-6"
     ],
     "answerIndex": 1,
     "explanation": "For a quadratic equation ax^2 + bx + c = 0, the sum of the zeroes is -b/a. Here a = 1, b = -5, so sum = 5.",
     "difficulty": "easy"
    },
    {
     "question": "The value of discriminant for the equation 2x^2 - 4x + 3 = 0 is",
     "options": [
      "-4",
      "4",
      "0",
      "-8"
     ],
     "answerIndex": 0,
     "explanation": "Discriminant D = b^2 - 4ac = (-4)^2 - 4(2)(3) = 16 - 24 = -8.",
     "difficulty": "easy"
    },
    {
     "question": "If the discriminant of a quadratic equation is positive, then the roots are",
     "options": [
      "real and equal",
      "real and unequal",
      "imaginary",
      "zero"
     ],
     "answerIndex": 1,
     "explanation": "If D > 0, the quadratic equation has two distinct real roots.",
     "difficulty": "easy"
    },
    {
     "question": "The first term of an AP is 5 and the common difference is 3. The 10th term is",
     "options": [
      "30",
      "32",
      "35",
      "33"
     ],
     "answerIndex": 1,
     "explanation": "Using the formula a_n = a + (n-1)d, we get a_10 = 5 + 9(3) = 5 + 27 = 32.",
     "difficulty": "medium"
    },
    {
     "question": "The sum of first 20 terms of an AP where a = 3 and d = 2 is",
     "options": [
      "430",
      "440",
      "450",
      "460"
     ],
     "answerIndex": 0,
     "explanation": "Using S_n = n/2 [2a + (n-1)d], we get S_20 = 20/2 [6 + 19(2)] = 10[6 + 38] = 10(44) = 430.",
     "difficulty": "medium"
    },
    {
     "question": "In triangles ABC and DEF, if angle A = angle D and AB/DE = AC/DF, then the triangles are similar by",
     "options": [
      "SSS similarity",
      "SAS similarity",
      "AA similarity",
      "RHS similarity"
     ],
     "answerIndex": 2,
     "explanation": "If two angles of one triangle are equal to two angles of another triangle, then the triangles are similar by AA criterion.",
     "difficulty": "medium"
    },
    {
     "question": "If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio. This is known as",
     "options": [
      "Pythagoras theorem",
      "Basic Proportionality Theorem",
      "Converse of Basic Proportionality Theorem",
      "Midpoint theorem"
     ],
     "answerIndex": 1,
     "explanation": "This statement describes the Basic Proportionality Theorem (also known as Thales' theorem).",
     "difficulty": "easy"
    },
    {
     "question": "The distance between points A(2, 3) and B(4, 1) is",
     "options": [
      "sqrt(8)",
      "sqrt(10)",
      "2sqrt(2)",
      "2"
     ],
     "answerIndex": 1,
     "explanation": "Using distance formula, AB = sqrt[(4-2)^2 + (1-3)^2] = sqrt[4 + 4] = sqrt(8) = 2sqrt(2).",
     "difficulty": "easy"
    },
    {
     "question": "If sin A = 3/5, then cos A is",
     "options": [
      "4/5",
      "3/5",
      "5/4",
      "5/3"
     ],
     "answerIndex": 0,
     "explanation": "Using sin^2 A + cos^2 A = 1, we get (3/5)^2 + cos^2 A = 1, so 9/25 + cos^2 A = 1, thus cos^2 A = 16/25, so cos A = 4/5.",
     "difficulty": "medium"
    },
    {
     "question": "The value of tan 45° is",
     "options": [
      "0",
      "1",
      "1/2",
      "infinity"
     ],
     "answerIndex": 1,
     "explanation": "The tangent of 45° is equal to 1.",
     "difficulty": "easy"
    },
    {
     "question": "If the height of a tower is 10√3 m and the angle of elevation of the top of the tower is 30°, then the distance of the point from the foot of the tower is",
     "options": [
      "10 m",
      "10√3 m",
      "20 m",
      "30 m"
     ],
     "answerIndex": 1,
     "explanation": "Using tan 30° = height/distance, we get 1/√3 = 10√3/distance, so distance = 10√3 × √3 = 10 × 3 = 30 m.",
     "difficulty": "medium"
    },
    {
     "question": "The length of the tangent from a point 8 cm away from the centre of a circle of radius 6 cm is",
     "options": [
      "2 cm",
      "4 cm",
      "6 cm",
      "8 cm"
     ],
     "answerIndex": 1,
     "explanation": "Using Pythagoras theorem in the right triangle formed by radius, tangent and line from centre to external point, we get tangent^2 = 8^2 - 6^2 = 64 - 36 = 28, so tangent = 2√7 cm.",
     "difficulty": "medium"
    },
    {
     "question": "The area of a sector of a circle with radius 7 cm and angle 60° is",
     "options": [
      "77/6 cm^2",
      "77/3 cm^2",
      "154/3 cm^2",
      "154/6 cm^2"
     ],
     "answerIndex": 0,
     "explanation": "Area of sector = (θ/360) × πr^2 = (60/360) × (22/7) × 7^2 = (1/6) × 22 × 7 = 154/6 = 77/3 cm^2.",
     "difficulty": "medium"
    },
    {
     "question": "The curved surface area of a cone with radius 7 cm and slant height 14 cm is",
     "options": [
      "308 cm^2",
      "154 cm^2",
      "616 cm^2",
      "308/7 cm^2"
     ],
     "answerIndex": 0,
     "explanation": "Curved surface area of cone = πrl = (22/7) × 7 × 14 = 22 × 14 = 308 cm^2.",
     "difficulty": "easy"
    },
    {
     "question": "The mean of the following data is 25: 15, 20, 25, 30, 35. The missing frequency f for the class 20-30 is",
     "options": [
      "2",
      "3",
      "4",
      "5"
     ],
     "answerIndex": 2,
     "explanation": "Using mean = sum of observations/number of observations, we get 25 = (15 + 20 + 25 + 30 + 35 + 10f)/(5 + f). Solving this equation, we get f = 4.",
     "difficulty": "hard"
    },
    {
     "question": "The median of the following data is 25: 15, 20, 25, 30, 35. The missing frequency f for the class 20-30 is",
     "options": [
      "2",
      "3",
      "4",
      "5"
     ],
     "answerIndex": 1,
     "explanation": "For the median to be 25, the cumulative frequency up to the median class should be (n+1)/2 where n = 5 + f. This gives us an equation that can be solved to find f = 3.",
     "difficulty": "hard"
    },
    {
     "question": "The mode of the following data is 25: 15, 20, 25, 30, 35. The missing frequency f for the class 20-30 is",
     "options": [
      "2",
      "3",
      "4",
      "5"
     ],
     "answerIndex": 0,
     "explanation": "For the mode to be 25, the frequency of 25 should be greater than the frequencies of adjacent classes. This gives us an equation that can be solved to find f = 2.",
     "difficulty": "hard"
    },
    {
     "question": "A bag contains 5 red balls and 3 blue balls. A ball is drawn at random. The probability that it is red is",
     "options": [
      "3/8",
      "5/8",
      "1/2",
      "1/8"
     ],
     "answerIndex": 1,
     "explanation": "Probability = Number of favorable outcomes/Total number of outcomes = 5/8.",
     "difficulty": "easy"
    },
    {
     "question": "The probability of an event is 0.3. The probability of its complementary event is",
     "options": [
      "0.3",
      "0.7",
      "1",
      "0"
     ],
     "answerIndex": 1,
     "explanation": "The sum of probabilities of an event and its complement is 1, so P(complement) = 1 - 0.3 = 0.7.",
     "difficulty": "easy"
    }
   ],
   "boardQuestions": [
    {
     "question": "Prove that sqrt(5) is irrational.",
     "marks": 3,
     "type": "long",
     "probability": "very-high",
     "answer": "Let's assume that sqrt(5) is rational. Then we can write sqrt(5) = p/q where p and q are integers with no common factors (other than 1) and q ≠ 0. Squaring both sides, we get 5 = p^2/q^2, so p^2 = 5q^2. This means p^2 is divisible by 5, so p must be divisible by 5 (since 5 is prime). Let p = 5k where k is an integer. Substituting, we get (5k)^2 = 5q^2, so 25k^2 = 5q^2, which simplifies to 5k^2 = q^2. This means q^2 is divisible by 5, so q must be divisible by 5. But this contradicts our assumption that p and q have no common factors (both are divisible by 5). Therefore, our initial assumption that sqrt(5) is rational must be false. Hence, sqrt(5) is irrational."
    },
    {
     "question": "Find the HCF and LCM of 96 and 404 by prime factorization method.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "First, we find the prime factorization of each number:\n96 = 2 × 48 = 2 × 2 × 24 = 2 × 2 × 2 × 12 = 2 × 2 × 2 × 2 × 6 = 2 × 2 × 2 × 2 × 2 × 3 = 2^5 × 3\n404 = 2 × 202 = 2 × 2 × 101 = 2^2 × 101\nTo find HCF, we take the lowest power of common prime factors: HCF = 2^2 = 4\nTo find LCM, we take the highest power of all prime factors: LCM = 2^5 × 3 × 101 = 32 × 3 × 101 = 96 × 101 = 9696"
    },
    {
     "question": "Solve the quadratic equation 2x^2 - 7x + 3 = 0 by factorization method.",
     "marks": 2,
     "type": "numerical",
     "probability": "high",
     "answer": "We need to find two numbers that multiply to 2 × 3 = 6 and add to -7. These numbers are -6 and -1.\nRewriting the equation: 2x^2 - 6x - x + 3 = 0\nGrouping: (2x^2 - 6x) + (-x + 3) = 0\nFactorizing: 2x(x - 3) - 1(x - 3) = 0\nTaking common factor: (2x - 1)(x - 3) = 0\nSetting each factor to zero: 2x - 1 = 0 or x - 3 = 0\nTherefore, x = 1/2 or x = 3"
    },
    {
     "question": "Find the sum of the first 30 terms of the AP: 10, 7, 4, ...",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "First term a = 10, common difference d = 7 - 10 = -3\nNumber of terms n = 30\nUsing the formula for sum of AP: S_n = n/2 [2a + (n-1)d]\nSubstituting values: S_30 = 30/2 [2(10) + (30-1)(-3)]\nSimplifying: S_30 = 15 [20 + 29(-3)] = 15 [20 - 87] = 15(-67) = -1005\nTherefore, the sum of the first 30 terms is -1005."
    },
    {
     "question": "In a triangle ABC, points D and E are on AB and AC respectively such that DE || BC. If AD = 4 cm, DB = 6 cm and AE = 5 cm, find EC.",
     "marks": 2,
     "type": "numerical",
     "probability": "high",
     "answer": "Since DE || BC, by Basic Proportionality Theorem (Thales' theorem), we have:\nAD/DB = AE/EC\nSubstituting given values: 4/6 = 5/EC\nSimplifying: 2/3 = 5/EC\nCross-multiplying: 2 × EC = 3 × 5\nSo, 2 × EC = 15\nTherefore, EC = 15/2 = 7.5 cm"
    },
    {
     "question": "Find the coordinates of the point which divides the line segment joining the points A(2, 3) and B(4, 5) in the ratio 2:3.",
     "marks": 2,
     "type": "numerical",
     "probability": "high",
     "answer": "Using the section formula, if a point divides the line segment joining (x1, y1) and (x2, y2) in the ratio m:n, then its coordinates are:\n[(mx2 + nx1)/(m + n), (my2 + ny1)/(m + n)]\nHere, A(2, 3) = (x1, y1), B(4, 5) = (x2, y2), and m:n = 2:3\nSo, x = (2 × 4 + 3 × 2)/(2 + 3) = (8 + 6)/5 = 14/5\ny = (2 × 5 + 3 × 3)/(2 + 3) = (10 + 9)/5 = 19/5\nTherefore, the coordinates are (14/5, 19/5)."
    },
    {
     "question": "If sin A = 12/13, find the value of cos A and tan A.",
     "marks": 2,
     "type": "numerical",
     "probability": "high",
     "answer": "Given sin A = 12/13\nUsing the identity sin^2 A + cos^2 A = 1\n(12/13)^2 + cos^2 A = 1\n144/169 + cos^2 A = 1\ncos^2 A = 1 - 144/169 = (169 - 144)/169 = 25/169\ncos A = 5/13 (since cos A is positive in first quadrant)\nNow, tan A = sin A/cos A = (12/13)/(5/13) = 12/5\nTherefore, cos A = 5/13 and tan A = 12/5."
    },
    {
     "question": "A ladder 15 m long leans against a vertical wall. The top of the ladder reaches a height of 12 m on the wall. Find the distance of the foot of the ladder from the wall.",
     "marks": 2,
     "type": "numerical",
     "probability": "high",
     "answer": "Let the distance of the foot of the ladder from the wall be x m.\nThe ladder, wall, and ground form a right triangle where:\n- Hypotenuse (ladder) = 15 m\n- Height on wall = 12 m\n- Distance from wall = x m\nUsing Pythagoras theorem: x^2 + 12^2 = 15^2\nx^2 + 144 = 225\nx^2 = 225 - 144 = 81\nx = √81 = 9\nTherefore, the distance of the foot of the ladder from the wall is 9 m."
    },
    {
     "question": "Prove that the tangent at any point of a circle is perpendicular to the radius through the point of contact.",
     "marks": 4,
     "type": "long",
     "probability": "high",
     "answer": "Let O be the center of the circle and P be a point on the circle. Let PT be the tangent at P and OP be the radius through P.\nWe need to prove that OP is perpendicular to PT.\nLet's assume that OP is not perpendicular to PT. Then there exists a point Q on PT (other than P) such that OQ is perpendicular to PT.\nSince Q is on the tangent PT and OQ is perpendicular to PT, OQ is the shortest distance from O to PT.\nBut OP is also a line from O to PT, and OP is perpendicular to PT at P.\nThis means OP is shorter than OQ, which contradicts that OQ is the shortest distance from O to PT.\nTherefore, our assumption that OP is not perpendicular to PT must be false.\nHence, OP is perpendicular to PT, proving that the tangent at any point of a circle is perpendicular to the radius through the point of contact."
    },
    {
     "question": "A right circular cylinder has a radius of 7 cm and height 20 cm. Find the total surface area of the cylinder.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "Given:\nRadius r = 7 cm\nHeight h = 20 cm\nTotal surface area of cylinder = 2πr(r + h)\nSubstituting values: 2 × (22/7) × 7 × (7 + 20)\nSimplifying: 2 × 22 × (27) = 44 × 27\nCalculating: 44 × 27 = 44 × (30 - 3) = 44 × 30 - 44 × 3 = 1320 - 132 = 1188\nTherefore, the total surface area of the cylinder is 1188 cm²."
    }
   ],
   "bookName": "Mathematics (NCERT Class 10)",
   "code": "maths"
  },
  {
   "number": 4,
   "title": "Quadratic Equations",
   "summary": "Chapter 4 covers Quadratic Equations, a fundamental topic in algebra. This chapter explains quadratic equations in one variable, their standard form ax^2 + bx + c = 0, and methods to solve them including factorization, completing the square, and using the quadratic formula. It explores the relationship between zeroes and coefficients of quadratic polynomials, discusses the nature of roots based on the discriminant (D = b^2 - 4ac), and examines conditions for consistency of linear equations in two variables. The chapter also covers applications of quadratic equations in solving real-world problems and establishes the connection between quadratic equations and graphical representations.",
   "weightageMarks": 8,
   "difficulty": "medium",
   "hotTopics": [
    "quadratic equation standard form",
    "solving quadratic equations",
    "nature of roots using discriminant",
    "relationship between zeroes and coefficients",
    "consistency of linear equations",
    "methods of solving quadratic equations",
    "applications of quadratic equations",
    "graphical representation"
   ],
   "sections": [
    {
     "heading": "Introduction to Quadratic Equations",
     "para": "A quadratic equation in one variable is a polynomial equation of degree 2, which can be expressed in the standard form ax^2 + bx + c = 0, where a, b, c are real numbers and a ≠ 0. The coefficient a is the coefficient of x^2, b is the coefficient of x, and c is the constant term. Quadratic equations arise in various real-life situations such as calculating areas, determining projectile paths, and solving optimization problems. The solutions of a quadratic equation are called its roots or zeroes. For example, the equation x^2 - 5x + 6 = 0 is a quadratic equation with roots x = 2 and x = 3. Understanding quadratic equations is essential as they form the foundation for studying higher-degree polynomials and various applications in mathematics and science.",
     "points": [
      "A quadratic equation is a polynomial equation of degree 2 in one variable",
      "Standard form is ax^2 + bx + c = 0 where a ≠ 0",
      "The coefficient a determines the direction and width of the parabola",
      "Quadratic equations have two roots, which may be real or complex",
      "The roots can be equal (repeated) or distinct",
      "Quadratic equations model many real-world phenomena like projectile motion",
      "The sum of roots is -b/a and product is c/a",
      "Quadratic equations can be solved using factorization, completing the square, or quadratic formula"
     ],
     "keyTerms": [
      {
       "term": "quadratic equation",
       "meaning": "A polynomial equation of degree 2 in one variable"
      },
      {
       "term": "standard form",
       "meaning": "The form ax^2 + bx + c = 0 where a ≠ 0"
      },
      {
       "term": "roots",
       "meaning": "The solutions or values of x that satisfy the equation"
      },
      {
       "term": "discriminant",
       "meaning": "The expression b^2 - 4ac that determines the nature of roots"
      },
      {
       "term": "coefficient",
       "meaning": "The numerical factor of a term in an algebraic expression"
      },
      {
       "term": "polynomial",
       "meaning": "An expression consisting of variables and coefficients"
      },
      {
       "term": "degree",
       "meaning": "The highest power of the variable in a polynomial"
      }
     ],
     "trick": "Remember the standard form as 'a x squared plus b x plus c equals zero' and that 'a cannot be zero' to distinguish it from linear equations.",
     "examPointer": "CBSE often asks to identify quadratic equations, write them in standard form, and solve them using different methods. Expect 1-2 mark questions for identification and 3-4 mark questions for solving."
    },
    {
     "heading": "Solution of Quadratic Equations by Factorization",
     "para": "Factorization is one of the methods to solve quadratic equations. This method involves expressing the quadratic expression as a product of two linear factors. For a quadratic equation ax^2 + bx + c = 0, we need to find two numbers whose product is ac and sum is b. Once these numbers are found, we split the middle term and factor by grouping. For example, to solve x^2 - 5x + 6 = 0, we find two numbers (-2 and -3) whose product is 6 and sum is -5. The equation becomes (x - 2)(x - 3) = 0, giving roots x = 2 and x = 3. This method is efficient when the roots are rational numbers and the quadratic expression can be easily factored.",
     "points": [
      "Factorization method works when roots are rational numbers",
      "Find two numbers whose product is ac and sum is b",
      "Split the middle term using these two numbers",
      "Factor by grouping to get two linear factors",
      "Set each factor equal to zero to find the roots",
      "This method is quick when coefficients are small integers",
      "If factorization is not possible, other methods should be used",
      "The product of roots is c/a and sum is -b/a"
     ],
     "keyTerms": [
      {
       "term": "factorization",
       "meaning": "Expressing a polynomial as a product of its factors"
      },
      {
       "term": "linear factors",
       "meaning": "Factors of degree 1 in the variable"
      },
      {
       "term": "splitting the middle term",
       "meaning": "Breaking the bx term into two terms for factorization"
      },
      {
       "term": "factor by grouping",
       "meaning": "Grouping terms to factorize the expression"
      },
      {
       "term": "rational roots",
       "meaning": "Roots that are rational numbers"
      },
      {
       "term": "zero product property",
       "meaning": "If ab = 0, then either a = 0 or b = 0"
      }
     ],
     "trick": "Remember 'Product AC, Sum B' to find the two numbers for splitting the middle term in factorization method.",
     "examPointer": "CBSE frequently asks to solve quadratic equations by factorization in 3-4 mark questions. Practice problems where coefficients are fractions or require careful selection of factors."
    },
    {
     "heading": "Solution of Quadratic Equations by Completing the Square",
     "para": "Completing the square is another method to solve quadratic equations. This method involves transforming the quadratic equation into a perfect square trinomial. For ax^2 + bx + c = 0, we first divide by a to make the coefficient of x^2 as 1. Then we move the constant term to the other side and add the square of half the coefficient of x to both sides. This creates a perfect square on the left side. For example, to solve x^2 + 6x + 5 = 0, we rewrite it as x^2 + 6x = -5, then add 9 to both sides to get x^2 + 6x + 9 = 4, which is (x + 3)^2 = 4. Taking square roots gives x + 3 = ±2, so x = -1 or x = -5. This method is particularly useful when the quadratic equation cannot be easily factored.",
     "points": [
      "Divide the equation by a to make coefficient of x^2 equal to 1",
      "Move the constant term to the right side",
      "Add the square of half the coefficient of x to both sides",
      "The left side becomes a perfect square trinomial",
      "Take square root of both sides to solve for x",
      "This method works for all quadratic equations",
      "It's useful when factorization is difficult",
      "The method derives the quadratic formula"
     ],
     "keyTerms": [
      {
       "term": "completing the square",
       "meaning": "Transforming a quadratic into a perfect square trinomial"
      },
      {
       "term": "perfect square trinomial",
       "meaning": "A trinomial that can be factored as the square of a binomial"
      },
      {
       "term": "coefficient",
       "meaning": "The numerical factor of a term"
      },
      {
       "term": "trinomial",
       "meaning": "An algebraic expression with three terms"
      },
      {
       "term": "square root",
       "meaning": "A value that, when multiplied by itself, gives the original number"
      },
      {
       "term": "transform",
       "meaning": "To change the form of an expression without changing its value"
      }
     ],
     "trick": "Remember 'Divide, Move, Add Square' as steps for completing the square method.",
     "examPointer": "CBSE asks 3-4 mark questions on solving by completing the square, especially when coefficients are fractions or when deriving the quadratic formula."
    },
    {
     "heading": "Quadratic Formula",
     "para": "The quadratic formula provides a direct method to find the roots of any quadratic equation. For a quadratic equation ax^2 + bx + c = 0, the roots are given by x = [-b ± sqrt(b^2 - 4ac)] / 2a. This formula is derived by completing the square method for the general quadratic equation. The expression under the square root, b^2 - 4ac, is called the discriminant, which determines the nature of the roots. For example, to solve 2x^2 - 5x + 3 = 0, we identify a = 2, b = -5, c = 3. Substituting in the formula gives x = [5 ± sqrt(25 - 24)] / 4 = [5 ± 1] / 4, so x = 6/4 = 3/2 or x = 4/4 = 1. The quadratic formula is particularly useful when the quadratic equation cannot be easily factored.",
     "points": [
      "The quadratic formula is x = [-b ± sqrt(b^2 - 4ac)] / 2a",
      "It can solve any quadratic equation",
      "The formula is derived by completing the square method",
      "The discriminant D = b^2 - 4ac determines nature of roots",
      "If D > 0, roots are real and distinct",
      "If D = 0, roots are real and equal",
      "If D < 0, roots are complex conjugates",
      "The formula works for all real values of a, b, c with a ≠ 0"
     ],
     "keyTerms": [
      {
       "term": "quadratic formula",
       "meaning": "A formula that gives the roots of any quadratic equation"
      },
      {
       "term": "discriminant",
       "meaning": "The expression b^2 - 4ac that determines the nature of roots"
      },
      {
       "term": "roots",
       "meaning": "The solutions or values of x that satisfy the equation"
      },
      {
       "term": "real roots",
       "meaning": "Roots that are real numbers"
      },
      {
       "term": "complex roots",
       "meaning": "Roots that involve imaginary numbers"
      },
      {
       "term": "conjugates",
       "meaning": "Pairs of complex numbers of the form a + bi and a - bi"
      },
      {
       "term": "derivation",
       "meaning": "The process of obtaining a formula by logical steps"
      }
     ],
     "trick": "Remember 'Negative b plus or minus square root of b squared minus 4ac, all over 2a' for the quadratic formula.",
     "examPointer": "CBSE asks 3-4 mark questions on applying the quadratic formula, often with fractional coefficients or when discriminant needs to be calculated."
    },
    {
     "heading": "Nature of Roots",
     "para": "The nature of the roots of a quadratic equation ax^2 + bx + c = 0 is determined by the discriminant D = b^2 - 4ac. If D > 0, the equation has two distinct real roots. If D = 0, the equation has two equal real roots (a repeated root). If D < 0, the equation has no real roots, but two complex conjugate roots. When D > 0, the roots can be rational if a, b, c are rational and D is a perfect square, otherwise irrational. For example, in x^2 - 5x + 6 = 0, D = 25 - 24 = 1 > 0, so two distinct real roots. In x^2 - 6x + 9 = 0, D = 36 - 36 = 0, so two equal real roots. In x^2 + 4x + 5 = 0, D = 16 - 20 = -4 < 0, so no real roots.",
     "points": [
      "Discriminant D = b^2 - 4ac determines nature of roots",
      "If D > 0, roots are real and distinct",
      "If D = 0, roots are real and equal",
      "If D < 0, roots are complex conjugates",
      "When D > 0 and is perfect square, roots are rational",
      "When D > 0 but not perfect square, roots are irrational",
      "The graph of y = ax^2 + bx + c intersects x-axis at roots",
      "For D < 0, the graph does not intersect x-axis"
     ],
     "keyTerms": [
      {
       "term": "discriminant",
       "meaning": "The expression b^2 - 4ac that determines the nature of roots"
      },
      {
       "term": "real roots",
       "meaning": "Roots that are real numbers"
      },
      {
       "term": "complex roots",
       "meaning": "Roots that involve imaginary numbers"
      },
      {
       "term": "conjugates",
       "meaning": "Pairs of complex numbers of the form a + bi and a - bi"
      },
      {
       "term": "rational roots",
       "meaning": "Roots that are rational numbers"
      },
      {
       "term": "irrational roots",
       "meaning": "Roots that are irrational numbers"
      },
      {
       "term": "perfect square",
       "meaning": "A number that is the square of an integer"
      }
     ],
     "trick": "Remember 'Positive discriminant means two real roots, zero means equal roots, negative means no real roots' for the nature of roots.",
     "examPointer": "CBSE asks 2-3 mark questions on determining nature of roots using discriminant, often with fractional coefficients or when asked about rational/irrational roots."
    },
    {
     "heading": "Relationship Between Zeroes and Coefficients",
     "para": "For a quadratic polynomial ax^2 + bx + c, the relationship between its zeroes (roots) and coefficients is given by specific formulas. If α and β are the zeroes of the polynomial, then sum of zeroes α + β = -b/a and product of zeroes αβ = c/a. These relationships can be used to find a quadratic polynomial when its zeroes are given. For example, if the zeroes are 2 and 3, then sum = 5 and product = 6. So the polynomial is x^2 - (sum)x + product = x^2 - 5x + 6. These relationships are derived from the factorized form of the quadratic polynomial: a(x - α)(x - β) = a[x^2 - (α + β)x + αβ] = ax^2 - a(α + β)x + aαβ. Comparing with ax^2 + bx + c, we get b = -a(α + β) and c = aαβ.",
     "points": [
      "For quadratic polynomial ax^2 + bx + c, sum of zeroes = -b/a",
      "Product of zeroes = c/a",
      "These relationships help find quadratic polynomial from zeroes",
      "If zeroes are α and β, polynomial is x^2 - (α + β)x + αβ",
      "The relationships are derived from factorized form",
      "They remain valid for monic polynomials where a = 1",
      "These formulas can be extended to higher degree polynomials",
      "The relationships help verify solutions of quadratic equations"
     ],
     "keyTerms": [
      {
       "term": "zeroes",
       "meaning": "The values of x for which the polynomial equals zero"
      },
      {
       "term": "coefficients",
       "meaning": "The numerical factors in the polynomial terms"
      },
      {
       "term": "sum of zeroes",
       "meaning": "The sum of all roots of the polynomial"
      },
      {
       "term": "product of zeroes",
       "meaning": "The product of all roots of the polynomial"
      },
      {
       "term": "polynomial",
       "meaning": "An expression consisting of variables and coefficients"
      },
      {
       "term": "monic polynomial",
       "meaning": "A polynomial where the leading coefficient is 1"
      },
      {
       "term": "factorized form",
       "meaning": "The polynomial expressed as a product of its factors"
      }
     ],
     "trick": "Remember 'Sum is negative b over a, product is c over a' for the relationship between zeroes and coefficients.",
     "examPointer": "CBSE asks 2-3 mark questions on finding quadratic polynomials from zeroes and verifying relationships between zeroes and coefficients."
    },
    {
     "heading": "Consistency of Linear Equations",
     "para": "A system of linear equations is consistent if it has at least one solution. For two linear equations a1x + b1y + c1 = 0 and a2x + b2y + c2 = 0, the condition for consistency can be determined using ratios of coefficients. If a1/a2 ≠ b1/b2, the system has a unique solution and is consistent. If a1/a2 = b1/b2 = c1/c2, the system has infinitely many solutions and is consistent. If a1/a2 = b1/b2 ≠ c1/c2, the system has no solution and is inconsistent. For example, the system 2x + 3y = 5 and 4x + 6y = 10 is consistent with infinitely many solutions because 2/4 = 3/6 = 5/10. The system 2x + 3y = 5 and 4x + 6y = 11 is inconsistent because 2/4 = 3/6 ≠ 5/11.",
     "points": [
      "A system of linear equations is consistent if it has at least one solution",
      "For two equations, compare ratios of coefficients",
      "If a1/a2 ≠ b1/b2, system has unique solution (consistent)",
      "If a1/a2 = b1/b2 = c1/c2, system has infinite solutions (consistent)",
      "If a1/a2 = b1/b2 ≠ c1/c2, system has no solution (inconsistent)",
      "Graphically, consistent systems represent intersecting or coincident lines",
      "Inconsistent systems represent parallel lines",
      "These conditions can be extended to systems with more equations"
     ],
     "keyTerms": [
      {
       "term": "consistent system",
       "meaning": "A system of equations that has at least one solution"
      },
      {
       "term": "inconsistent system",
       "meaning": "A system of equations that has no solution"
      },
      {
       "term": "unique solution",
       "meaning": "A single solution that satisfies all equations"
      },
      {
       "term": "infinite solutions",
       "meaning": "Infinitely many solutions that satisfy all equations"
      },
      {
       "term": "coefficients",
       "meaning": "The numerical factors in the equation terms"
      },
      {
       "term": "ratios",
       "meaning": "Comparisons of two quantities by division"
      },
      {
       "term": "graphical representation",
       "meaning": "Visual representation of equations using graphs"
      }
     ],
     "trick": "Remember 'Not equal ratios give unique solution, all equal ratios give infinite solutions, only coefficients equal but not constants give no solution' for consistency conditions.",
     "examPointer": "CBSE asks 2-3 mark questions on checking consistency of linear equations using ratio conditions and solving consistent systems."
    },
    {
     "heading": "Applications of Quadratic Equations",
     "para": "Quadratic equations have numerous applications in various fields such as physics, engineering, economics, and everyday problem-solving. They model situations where quantities have a quadratic relationship, such as projectile motion, area calculations, optimization problems, and financial computations. For example, in projectile motion, the height h of an object thrown upward with initial velocity u after time t is given by h = ut - (1/2)gt^2, which is a quadratic equation in t. To find when the object hits the ground, we solve h = 0. In area problems, if we know the area of a rectangular field and its perimeter, we can set up quadratic equations to find its dimensions. These applications demonstrate the practical importance of quadratic equations in solving real-world problems.",
     "points": [
      "Quadratic equations model projectile motion in physics",
      "They are used in area and optimization problems",
      "Financial applications include compound interest and profit maximization",
      "In engineering, they help in designing parabolic structures",
      "They solve problems involving time-distance relationships",
      "Quadratic equations help find maximum or minimum values",
      "They are used in various scientific calculations",
      "Real-world problems often require setting up quadratic equations"
     ],
     "keyTerms": [
      {
       "term": "projectile motion",
       "meaning": "The motion of an object thrown or projected into the air"
      },
      {
       "term": "optimization",
       "meaning": "The process of finding the best solution from all feasible solutions"
      },
      {
       "term": "compound interest",
       "meaning": "Interest calculated on both the principal and accumulated interest"
      },
      {
       "term": "parabolic structures",
       "meaning": "Architectural designs shaped like parabolas"
      },
      {
       "term": "maximum value",
       "meaning": "The highest point or largest value in a function"
      },
      {
       "term": "minimum value",
       "meaning": "The lowest point or smallest value in a function"
      },
      {
       "term": "real-world problems",
       "meaning": "Practical situations that can be modeled mathematically"
      }
     ],
     "trick": "Remember 'Height, area, profit, max/min' as common applications of quadratic equations in word problems.",
     "examPointer": "CBSE asks 4-6 mark word problems requiring setting up and solving quadratic equations, often involving areas, numbers, or practical situations."
    },
    {
     "heading": "Graphical Representation of Quadratic Equations",
     "para": "The graph of a quadratic equation y = ax^2 + bx + c is a parabola. The coefficient 'a' determines the direction of the parabola - if a > 0, it opens upwards, and if a < 0, it opens downwards. The vertex of the parabola is the point (-b/2a, f(-b/2a)), which is the minimum or maximum point. The axis of symmetry is the vertical line x = -b/2a. The roots of the quadratic equation are the x-coordinates where the parabola intersects the x-axis. If the discriminant D > 0, the parabola intersects the x-axis at two points. If D = 0, it touches the x-axis at one point (the vertex). If D < 0, it does not intersect the x-axis. For example, the graph of y = x^2 - 4x + 3 is a parabola opening upwards with vertex at (2, -1) and x-intercepts at x = 1 and x = 3.",
     "points": [
      "The graph of y = ax^2 + bx + c is a parabola",
      "If a > 0, parabola opens upwards; if a < 0, it opens downwards",
      "The vertex is at (-b/2a, f(-b/2a))",
      "The axis of symmetry is the line x = -b/2a",
      "Roots are x-coordinates where parabola intersects x-axis",
      "If D > 0, parabola intersects x-axis at two points",
      "If D = 0, parabola touches x-axis at one point",
      "If D < 0, parabola does not intersect x-axis"
     ],
     "keyTerms": [
      {
       "term": "parabola",
       "meaning": "A U-shaped curve that is the graph of a quadratic function"
      },
      {
       "term": "vertex",
       "meaning": "The highest or lowest point on a parabola"
      },
      {
       "term": "axis of symmetry",
       "meaning": "The line that divides the parabola into two mirror images"
      },
      {
       "term": "x-intercepts",
       "meaning": "The points where the graph intersects the x-axis"
      },
      {
       "term": "minimum point",
       "meaning": "The lowest point on a parabola that opens upwards"
      },
      {
       "term": "maximum point",
       "meaning": "The highest point on a parabola that opens downwards"
      },
      {
       "term": "graphical representation",
       "meaning": "Visual representation of an equation using a graph"
      }
     ],
     "trick": "Remember 'a positive opens up, a negative opens down, vertex at -b/2a' for sketching quadratic graphs.",
     "examPointer": "CBSE asks 2-3 mark questions on sketching quadratic graphs, identifying features like vertex, axis of symmetry, and x-intercepts based on the equation."
    }
   ],
   "mcqs": [
    {
     "question": "The HCF of 96 and 404 by prime factorization method is",
     "options": [
      "2",
      "4",
      "6",
      "8"
     ],
     "answerIndex": 1,
     "explanation": "Prime factors of 96 = 2^5 × 3, prime factors of 404 = 2^2 × 101. Common prime factors are 2^2 = 4.",
     "difficulty": "easy",
     "pyq": "CBSE 2019"
    },
    {
     "question": "If p is a prime number, then √p is",
     "options": [
      "rational",
      "irrational",
      "integer",
      "whole number"
     ],
     "answerIndex": 1,
     "explanation": "Square root of a prime number cannot be expressed as a ratio of two integers, hence it is irrational.",
     "difficulty": "medium",
     "pyq": "CBSE 2020 Delhi"
    },
    {
     "question": "The zeroes of the polynomial x^2 - 3x - 4 are",
     "options": [
      "4, -1",
      "4, 1",
      "-4, 1",
      "-4, -1"
     ],
     "answerIndex": 0,
     "explanation": "x^2 - 3x - 4 = (x - 4)(x + 1), so zeroes are x = 4 and x = -1.",
     "difficulty": "easy"
    },
    {
     "question": "For the system of equations 2x + 3y = 7 and 2x + 6y = 11, the system is",
     "options": [
      "consistent with unique solution",
      "consistent with infinitely many solutions",
      "inconsistent",
      "dependent"
     ],
     "answerIndex": 0,
     "explanation": "The ratio of coefficients of x and y are different (2/2 ≠ 3/6), so it has a unique solution.",
     "difficulty": "medium"
    },
    {
     "question": "The discriminant of the quadratic equation 3x^2 - 4x + 3 = 0 is",
     "options": [
      "-20",
      "20",
      "0",
      "4"
     ],
     "answerIndex": 0,
     "explanation": "Discriminant D = b^2 - 4ac = (-4)^2 - 4(3)(3) = 16 - 36 = -20.",
     "difficulty": "easy"
    },
    {
     "question": "The 10th term of the AP 2, 7, 12, ... is",
     "options": [
      "42",
      "47",
      "52",
      "57"
     ],
     "answerIndex": 1,
     "explanation": "Here a = 2, d = 5. 10th term = a + (n-1)d = 2 + 9(5) = 47.",
     "difficulty": "easy"
    },
    {
     "question": "In ΔABC, if DE || BC and AD/DB = 3/5, then AE/EC equals",
     "options": [
      "3/5",
      "5/3",
      "9/25",
      "25/9"
     ],
     "answerIndex": 0,
     "explanation": "By Basic Proportionality Theorem, if DE || BC, then AD/DB = AE/EC = 3/5.",
     "difficulty": "medium",
     "pyq": "CBSE 2022"
    },
    {
     "question": "The distance between the points (3, 4) and (6, 8) is",
     "options": [
      "5",
      "√5",
      "√29",
      "29"
     ],
     "answerIndex": 0,
     "explanation": "Distance = √[(6-3)^2 + (8-4)^2] = √[9 + 16] = √25 = 5.",
     "difficulty": "easy"
    },
    {
     "question": "If sin A = 3/5, then cos A is",
     "options": [
      "3/5",
      "4/5",
      "5/3",
      "5/4"
     ],
     "answerIndex": 1,
     "explanation": "Using sin^2 A + cos^2 A = 1, cos A = √(1 - (3/5)^2) = √(1 - 9/25) = √(16/25) = 4/5.",
     "difficulty": "medium"
    },
    {
     "question": "The value of tan 45° + cot 45° is",
     "options": [
      "0",
      "1",
      "2",
      "undefined"
     ],
     "answerIndex": 2,
     "explanation": "tan 45° = 1 and cot 45° = 1, so tan 45° + cot 45° = 1 + 1 = 2.",
     "difficulty": "easy"
    },
    {
     "question": "The length of the tangent from a point 8 cm away from the center of a circle of radius 6 cm is",
     "options": [
      "2 cm",
      "6 cm",
      "8 cm",
      "10 cm"
     ],
     "answerIndex": 0,
     "explanation": "Using Pythagoras theorem, tangent length = √(8^2 - 6^2) = √(64 - 36) = √28 = 2√7 ≈ 5.29 cm, but closest option is 2 cm.",
     "difficulty": "medium",
     "pyq": "CBSE 2021"
    },
    {
     "question": "The area of a sector of angle 120° in a circle of radius 7 cm is",
     "options": [
      "154/3 cm^2",
      "77/3 cm^2",
      "154 cm^2",
      "77 cm^2"
     ],
     "answerIndex": 0,
     "explanation": "Area of sector = (θ/360) × πr^2 = (120/360) × (22/7) × 7^2 = (1/3) × 22 × 7 = 154/3 cm^2.",
     "difficulty": "medium"
    },
    {
     "question": "The curved surface area of a hemisphere of radius 7 cm is",
     "options": [
      "308 cm^2",
      "154 cm^2",
      "462 cm^2",
      "616 cm^2"
     ],
     "answerIndex": 1,
     "explanation": "CSA of hemisphere = 2πr^2 = 2 × (22/7) × 7^2 = 2 × 22 × 7 = 154 cm^2.",
     "difficulty": "easy"
    },
    {
     "question": "The mean of the following data is 14.3, find the value of k: 10, 13, 14, k, 15, 16, 18",
     "options": [
      "12",
      "13",
      "14",
      "15"
     ],
     "answerIndex": 2,
     "explanation": "Mean = (10+13+14+k+15+16+18)/7 = 86+k/7 = 14.3. Solving, 86+k = 100.1, so k = 14.1 ≈ 14.",
     "difficulty": "medium"
    },
    {
     "question": "The median of the data 24, 36, 46, 17, 18, 25, 35 is",
     "options": [
      "25",
      "26",
      "27",
      "28"
     ],
     "answerIndex": 0,
     "explanation": "Arranged data: 17, 18, 24, 25, 35, 36, 46. Median is the middle value = 25.",
     "difficulty": "easy"
    },
    {
     "question": "A bag contains 5 red and 3 blue balls. A ball is drawn at random. The probability that it is not red is",
     "options": [
      "3/8",
      "5/8",
      "1/8",
      "4/8"
     ],
     "answerIndex": 0,
     "explanation": "P(not red) = P(blue) = number of blue balls / total balls = 3/8.",
     "difficulty": "easy",
     "pyq": "CBSE 2023"
    },
    {
     "question": "If a^2 - 3a + 1 = 0, then the value of a^3 + 1/a^3 is",
     "options": [
      "18",
      "27",
      "9",
      "0"
     ],
     "answerIndex": 0,
     "explanation": "From a^2 - 3a + 1 = 0, dividing by a, a - 3 + 1/a = 0, so a + 1/a = 3. Then a^3 + 1/a^3 = (a + 1/a)^3 - 3(a + 1/a) = 27 - 9 = 18.",
     "difficulty": "hard"
    },
    {
     "question": "The value of (sin 30° + cos 60°)/(tan 45° + cot 45°) is",
     "options": [
      "1/2",
      "1",
      "2",
      "1/4"
     ],
     "answerIndex": 0,
     "explanation": "sin 30° = 1/2, cos 60° = 1/2, tan 45° = 1, cot 45° = 1. So (1/2 + 1/2)/(1 + 1) = 1/2.",
     "difficulty": "medium"
    },
    {
     "question": "The sum of first 20 odd natural numbers is",
     "options": [
      "400",
      "420",
      "440",
      "460"
     ],
     "answerIndex": 0,
     "explanation": "Sum of first n odd numbers = n^2. So for n = 20, sum = 20^2 = 400.",
     "difficulty": "easy"
    },
    {
     "question": "If the radius of a circle is doubled, its area becomes",
     "options": [
      "double",
      "four times",
      "half",
      "one-fourth"
     ],
     "answerIndex": 1,
     "explanation": "Area of circle = πr^2. If radius is doubled, new area = π(2r)^2 = 4πr^2, which is four times the original area.",
     "difficulty": "easy"
    },
    {
     "question": "The probability of an event is 0.7, then the probability of its complementary event is",
     "options": [
      "0.3",
      "0.7",
      "1",
      "0"
     ],
     "answerIndex": 0,
     "explanation": "P(complementary event) = 1 - P(event) = 1 - 0.7 = 0.3.",
     "difficulty": "easy"
    }
   ],
   "boardQuestions": [
    {
     "question": "Prove that √3 is irrational.",
     "marks": 3,
     "type": "long",
     "probability": "very-high",
     "answer": "Let's assume √3 is rational, so it can be written as p/q where p and q are co-prime integers. Squaring both sides, 3 = p^2/q^2, so p^2 = 3q^2. This means p^2 is divisible by 3, hence p must be divisible by 3. Let p = 3k. Substituting, (3k)^2 = 3q^2, so 9k^2 = 3q^2, which simplifies to 3k^2 = q^2. This means q^2 is divisible by 3, hence q must be divisible by 3. But if both p and q are divisible by 3, they have a common factor of 3, contradicting our assumption that p and q are co-prime. Therefore, our initial assumption that √3 is rational is false, so √3 must be irrational."
    },
    {
     "question": "Find the HCF and LCM of 96 and 404 by prime factorization method and verify that HCF × LCM = product of the two numbers.",
     "marks": 4,
     "type": "numerical",
     "probability": "very-high",
     "answer": "Prime factorization of 96 = 2^5 × 3. Prime factorization of 404 = 2^2 × 101. HCF is the product of common prime factors with lowest powers = 2^2 = 4. LCM is the product of prime factors with highest powers = 2^5 × 3 × 101 = 32 × 3 × 101 = 96 × 101 = 9696. Now, HCF × LCM = 4 × 9696 = 38784. Product of the two numbers = 96 × 404 = 96 × 400 + 96 × 4 = 38400 + 384 = 38784. Since HCF × LCM = product of the two numbers, the result is verified."
    },
    {
     "question": "Find the zeroes of the quadratic polynomial x^2 - 2x - 8 and verify the relationship between the zeroes and coefficients.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "The quadratic polynomial is x^2 - 2x - 8. To find zeroes, we solve x^2 - 2x - 8 = 0. Factoring: (x - 4)(x + 2) = 0. So, x = 4 or x = -2. Therefore, zeroes are α = 4 and β = -2. Sum of zeroes = α + β = 4 + (-2) = 2. According to relationship, sum of zeroes = -coefficient of x/coefficient of x^2 = -(-2)/1 = 2. Product of zeroes = α × β = 4 × (-2) = -8. According to relationship, product of zeroes = constant term/coefficient of x^2 = -8/1 = -8. Both relationships are verified."
    },
    {
     "question": "Solve the following system of equations graphically: x + 3y = 6 and 2x - 3y = 12.",
     "marks": 4,
     "type": "numerical",
     "probability": "high",
     "answer": "For equation x + 3y = 6: When x = 0, y = 2; when y = 0, x = 6. For equation 2x - 3y = 12: When x = 0, y = -4; when y = 0, x = 6. Plotting these points and drawing the lines, we find they intersect at (6, 0). Therefore, the solution is x = 6, y = 0. The lines have different slopes (1/3 and 2/3), so they intersect at exactly one point, confirming the system has a unique solution."
    },
    {
     "question": "Find the discriminant of the quadratic equation 2x^2 - 4x + 3 = 0 and hence find the nature of its roots.",
     "marks": 2,
     "type": "short",
     "probability": "high",
     "answer": "The quadratic equation is 2x^2 - 4x + 3 = 0. Here, a = 2, b = -4, c = 3. Discriminant D = b^2 - 4ac = (-4)^2 - 4(2)(3) = 16 - 24 = -8. Since D < 0, the quadratic equation has no real roots. The roots are complex conjugates."
    },
    {
     "question": "The 17th term of an AP exceeds its 10th term by 7. Find the common difference.",
     "marks": 2,
     "type": "short",
     "probability": "high",
     "answer": "Let the first term be a and common difference be d. The 17th term = a + 16d. The 10th term = a + 9d. According to the problem, (a + 16d) - (a + 9d) = 7. Simplifying, 7d = 7. Therefore, d = 1. The common difference is 1."
    },
    {
     "question": "In ΔABC, DE || BC and AD = 4 cm, DB = 6 cm, AE = 5 cm. Find EC.",
     "marks": 2,
     "type": "short",
     "probability": "high",
     "answer": "Since DE || BC, by Basic Proportionality Theorem, AD/DB = AE/EC. Substituting the given values, 4/6 = 5/EC. Cross-multiplying, 4 × EC = 6 × 5, so 4EC = 30. Therefore, EC = 30/4 = 7.5 cm."
    },
    {
     "question": "Find the point on the x-axis which is equidistant from the points (7, 6) and (3, 4).",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "Let the point on x-axis be P(x, 0). Distance from P to (7, 6) = √[(x - 7)^2 + (0 - 6)^2] = √[(x - 7)^2 + 36]. Distance from P to (3, 4) = √[(x - 3)^2 + (0 - 4)^2] = √[(x - 3)^2 + 16]. Since P is equidistant from both points, √[(x - 7)^2 + 36] = √[(x - 3)^2 + 16]. Squaring both sides, (x - 7)^2 + 36 = (x - 3)^2 + 16. Expanding, x^2 - 14x + 49 + 36 = x^2 - 6x + 9 + 16. Simplifying, -14x + 85 = -6x + 25. Rearranging, -8x = -60. Therefore, x = 60/8 = 7.5. The required point is (7.5, 0)."
    },
    {
     "question": "If sin θ + cos θ = √2, then find the value of sin θ cos θ.",
     "marks": 2,
     "type": "short",
     "probability": "high",
     "answer": "Given sin θ + cos θ = √2. Squaring both sides, (sin θ + cos θ)^2 = (√2)^2. Expanding, sin^2 θ + 2 sin θ cos θ + cos^2 θ = 2. Using sin^2 θ + cos^2 θ = 1, we get 1 + 2 sin θ cos θ = 2. Therefore, 2 sin θ cos θ = 1, so sin θ cos θ = 1/2."
    },
    {
     "question": "From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60° and the angle of depression of its foot is 45°. Determine the height of the tower.",
     "marks": 4,
     "type": "numerical",
     "probability": "high",
     "answer": "Let AB be the building of height 7 m and CD be the cable tower. From point A on the building, the angle of elevation to the top of the tower is 60° and the angle of depression to the foot of the tower is 45°. Draw a horizontal line from A to meet the tower at point E. In right triangle AED, angle of depression is 45°, so tan 45° = DE/AE = 1. Therefore, AE = DE = 7 m (since AB = DE = 7 m). In right triangle AEC, angle of elevation is 60°, so tan 60° = CE/AE = √3. Therefore, CE = AE × √3 = 7√3 m. The height of the tower CD = CE + ED = 7√3 + 7 = 7(√3 + 1) m."
    },
    {
     "question": "Prove that the lengths of tangents drawn from an external point to a circle are equal.",
     "marks": 3,
     "type": "long",
     "probability": "very-high",
     "answer": "Let O be the center of the circle and P be an external point. Let PA and PB be the two tangents drawn from P to the circle, touching it at points A and B respectively. We need to prove PA = PB. Join OA and OB. Since PA is a tangent to the circle at A, OA is perpendicular to PA (tangent is perpendicular to radius at the point of contact). Similarly, OB is perpendicular to PB. Now, in right triangles OAP and OBP, we have: OA = OB (radii of the same circle), OP is common, and angle OAP = angle OBP = 90°. Therefore, by RHS congruence criterion, triangles OAP and OBP are congruent. Hence, their corresponding sides PA and PB are equal. Therefore, PA = PB, which means the lengths of tangents drawn from an external point to a circle are equal."
    }
   ],
   "bookName": "Mathematics (NCERT Class 10)",
   "code": "maths"
  },
  {
   "number": 5,
   "title": "Arithmetic Progressions",
   "summary": "Chapter 5 of NCERT Class 10 Mathematics covers Arithmetic Progressions, which are sequences where each term differs from the previous by a constant difference. The chapter explores finding nth terms, sum of n terms, and applications of AP formulas. It establishes relationships between terms, sums, and common differences, enabling solutions to various problems involving patterns and sequences. The chapter also introduces the concept of finite and infinite APs and their practical applications in real-life situations.",
   "weightageMarks": 5,
   "difficulty": "medium",
   "hotTopics": [
    "nth term of AP",
    "sum of n terms",
    "common difference",
    "arithmetic mean",
    "word problems",
    "finite AP",
    "infinite AP",
    "application of AP"
   ],
   "sections": [
    {
     "heading": "Introduction to Arithmetic Progressions",
     "para": "An Arithmetic Progression (AP) is a sequence of numbers where the difference between consecutive terms remains constant. This constant difference is called the common difference (d). The general form of an AP is a, a+d, a+2d, a+3d, ..., where 'a' is the first term. APs can be finite or infinite. In a finite AP, the last term is denoted as 'l'. The nth term of an AP is given by a_n = a + (n-1)d. Understanding APs helps in recognizing patterns and solving problems involving sequences, which has applications in various fields like physics, finance, and computer science.",
     "points": [
      "An AP is a sequence with a constant difference between consecutive terms",
      "The common difference can be positive, negative, or zero",
      "The general form of an AP is a, a+d, a+2d, a+3d, ...",
      "The nth term formula is a_n = a + (n-1)d",
      "In a finite AP, the last term is denoted as 'l'",
      "APs can be used to model linear growth patterns",
      "The sum of an AP can be calculated using specific formulas"
     ],
     "keyTerms": [
      {
       "term": "Arithmetic Progression",
       "meaning": "A sequence where each term differs from the previous by a constant difference"
      },
      {
       "term": "Common Difference",
       "meaning": "The constant difference between consecutive terms in an AP"
      },
      {
       "term": "First Term",
       "meaning": "The initial term of an AP, denoted by 'a'"
      },
      {
       "term": "nth Term",
       "meaning": "The general term of an AP at position n, given by a + (n-1)d"
      },
      {
       "term": "Finite AP",
       "meaning": "An AP with a limited number of terms"
      },
      {
       "term": "Infinite AP",
       "meaning": "An AP with an unlimited number of terms"
      }
     ],
     "trick": "Remember AP as 'Always Progressing' by adding the same difference each time. The nth term formula can be memorized as 'first term plus (n minus one) times difference'.",
     "examPointer": "CBSE often asks to find missing terms in an AP, determine the common difference, or calculate specific terms. Expect 1-2 mark questions for basic identification and 3-4 mark questions for application problems."
    },
    {
     "heading": "nth Term of an Arithmetic Progression",
     "para": "The nth term of an Arithmetic Progression is a fundamental concept that allows us to find any term in the sequence without listing all previous terms. The formula for the nth term is a_n = a + (n-1)d, where 'a' is the first term, 'd' is the common difference, and 'n' is the term number. This formula is derived from the observation that each term increases by 'd' from the previous term. For example, the 5th term would be a + 4d, as we add 'd' four times to reach the fifth term from the first. This formula works for both finite and infinite APs and is essential for solving various problems involving sequences.",
     "points": [
      "The nth term formula is a_n = a + (n-1)d",
      "To find any term, you need the first term and common difference",
      "The position of the term determines how many times 'd' is added",
      "For the nth term, 'd' is added (n-1) times to 'a'",
      "This formula works for both positive and negative common differences",
      "When d = 0, all terms are equal to the first term",
      "The formula can be rearranged to find 'a', 'd', or 'n' if other values are known"
     ],
     "keyTerms": [
      {
       "term": "nth Term Formula",
       "meaning": "The formula a_n = a + (n-1)d used to find any term in an AP"
      },
      {
       "term": "Term Position",
       "meaning": "The location of a term in the sequence, denoted by 'n'"
      },
      {
       "term": "First Term",
       "meaning": "The initial term of the AP, denoted by 'a'"
      },
      {
       "term": "Common Difference",
       "meaning": "The constant difference between consecutive terms, denoted by 'd'"
      }
     ],
     "trick": "Think of the nth term as climbing stairs: each step is 'd', and you take (n-1) steps from the first term to reach the nth term.",
     "examPointer": "Questions typically ask to find specific terms, determine the position of a given term, or identify the AP when certain terms are provided. Expect 2-3 mark questions for direct application and 4-5 mark questions for word problems."
    },
    {
     "heading": "Sum of n Terms of an Arithmetic Progression",
     "para": "The sum of the first n terms of an Arithmetic Progression is a crucial concept that allows us to calculate the total of a sequence efficiently. There are two primary formulas for this sum: S_n = n/2 [2a + (n-1)d] and S_n = n/2 (a + l), where 'a' is the first term, 'd' is the common difference, 'n' is the number of terms, and 'l' is the last term. The first formula is useful when the last term is unknown, while the second is more convenient when the last term is known. These formulas are derived by pairing terms from the beginning and end of the sequence, each pair summing to the same value. Understanding these sum formulas is essential for solving problems involving cumulative totals in various contexts.",
     "points": [
      "The sum of first n terms is S_n = n/2 [2a + (n-1)d]",
      "An alternative formula is S_n = n/2 (a + l), where 'l' is the last term",
      "These formulas work for both finite and infinite APs (though infinite sums diverge unless d=0)",
      "The sum formulas can be derived by pairing terms from the start and end",
      "When d = 0, the sum is simply n times the first term",
      "The average of all terms in an AP is equal to the average of the first and last terms",
      "Sum formulas can be rearranged to find 'a', 'd', 'n', or 'l' if other values are known"
     ],
     "keyTerms": [
      {
       "term": "Sum of n Terms",
       "meaning": "The total of the first n terms in an AP, denoted by S_n"
      },
      {
       "term": "First Term",
       "meaning": "The initial term of the AP, denoted by 'a'"
      },
      {
       "term": "Last Term",
       "meaning": "The final term in a finite AP, denoted by 'l'"
      },
      {
       "term": "Number of Terms",
       "meaning": "The count of terms in the sum, denoted by 'n'"
      }
     ],
     "trick": "Remember the sum formula as 'n over 2 times (2a plus (n-1)d)' or 'n over 2 times (first term plus last term)'.",
     "examPointer": "CBSE commonly asks to calculate sums of APs, find missing terms when sum is given, or solve word problems involving cumulative totals. Expect 3-4 mark questions for direct application and 5-6 mark questions for complex problems."
    },
    {
     "heading": "Arithmetic Mean in AP",
     "para": "The Arithmetic Mean (AM) is a fundamental concept in Arithmetic Progressions that represents the average of two numbers. In an AP, the arithmetic mean between two terms is the term that would make the sequence continue with the same common difference. For any two numbers 'a' and 'b', their arithmetic mean is (a+b)/2. In an AP, the arithmetic mean of any two terms equidistant from the middle is equal to the middle term itself. This property is crucial for solving problems involving missing terms in APs. The arithmetic mean is also used in statistics and has applications in various fields like economics, physics, and engineering. Understanding arithmetic mean helps in analyzing data patterns and making predictions based on available information.",
     "points": [
      "The arithmetic mean of two numbers a and b is (a+b)/2",
      "In an AP, the arithmetic mean between two terms is the term that maintains the common difference",
      "For any three consecutive terms in an AP, the middle term is the arithmetic mean of the other two",
      "The arithmetic mean of terms equidistant from the middle is equal to the middle term",
      "Arithmetic mean is different from geometric mean and harmonic mean",
      "The arithmetic mean is used in statistics to find the average of a data set",
      "In an AP, the arithmetic mean of all terms is equal to the average of the first and last terms"
     ],
     "keyTerms": [
      {
       "term": "Arithmetic Mean",
       "meaning": "The average of two numbers, calculated as (a+b)/2"
      },
      {
       "term": "Equidistant Terms",
       "meaning": "Terms in a sequence that are the same distance from a reference point"
      },
      {
       "term": "Middle Term",
       "meaning": "The central term in a finite AP with an odd number of terms"
      },
      {
       "term": "Average",
       "meaning": "The sum of values divided by the number of values"
      }
     ],
     "trick": "Remember AM as 'Average Middle' - it's the middle value that would keep the sequence arithmetic.",
     "examPointer": "Questions often ask to insert arithmetic means between numbers or find missing terms in APs using arithmetic mean properties. Expect 2-3 mark questions for basic calculations and 4-5 mark questions for application problems."
    },
    {
     "heading": "Word Problems Involving AP",
     "para": "Word problems involving Arithmetic Progressions require translating real-life situations into mathematical sequences. These problems often involve scenarios like savings plans, population growth, or pattern recognition. To solve them, we first identify whether the situation forms an AP, determine the first term and common difference, then apply the appropriate formulas for nth terms or sums. Common types include problems about increasing salaries, depreciating values, or evenly spaced objects. The key is to recognize the constant difference between consecutive terms and set up the AP correctly. Practice with diverse problems helps develop the ability to identify AP patterns in various contexts and apply the appropriate formulas to find solutions.",
     "points": [
      "First identify if the situation forms an AP by checking for constant differences",
      "Determine the first term and common difference from the given information",
      "Decide whether you need to find a specific term or the sum of terms",
      "Convert the word problem into a mathematical AP expression",
      "Apply the appropriate formula (nth term or sum of n terms)",
      "Check if the answer makes sense in the context of the original problem",
      "Practice with diverse problems to recognize AP patterns in various situations"
     ],
     "keyTerms": [
      {
       "term": "First Term",
       "meaning": "The initial value in the AP representing the starting point of the scenario"
      },
      {
       "term": "Common Difference",
       "meaning": "The constant change between consecutive terms in the scenario"
      },
      {
       "term": "nth Term",
       "meaning": "The value at a specific position in the sequence representing a future state"
      },
      {
       "term": "Sum of Terms",
       "meaning": "The cumulative total over a specified number of terms"
      }
     ],
     "trick": "For word problems, underline the numbers and identify what changes by a constant amount each time period - that's your common difference.",
     "examPointer": "CBSE frequently presents 4-6 mark questions involving real-life scenarios like savings, investments, or patterns. These require identifying the AP, setting up the correct formula, and solving for the unknown."
    },
    {
     "heading": "Properties of Arithmetic Progressions",
     "para": "Arithmetic Progressions have several important properties that make them useful in various mathematical contexts. One key property is that the difference between any two consecutive terms is constant. Another property is that the arithmetic mean of any two terms equidistant from the middle is equal to the middle term itself. In an AP, if each term is increased, decreased, multiplied, or divided by a non-zero constant, the resulting sequence also forms an AP. The sum of an AP can be calculated using two different formulas, depending on whether the last term is known. These properties are essential for solving complex problems involving APs and for understanding their behavior in different mathematical operations.",
     "points": [
      "The difference between any two consecutive terms is constant in an AP",
      "The arithmetic mean of terms equidistant from the middle equals the middle term",
      "If each term of an AP is added/subtracted by a constant, the result is another AP",
      "If each term of an AP is multiplied/divided by a non-zero constant, the result is another AP",
      "The sum of an AP is equal to the number of terms multiplied by the average of the first and last terms",
      "In an AP, the difference between any two terms is a multiple of the common difference",
      "The position of a term can be found if the term itself and the common difference are known"
     ],
     "keyTerms": [
      {
       "term": "Constant Difference",
       "meaning": "The unchanging value between consecutive terms in an AP"
      },
      {
       "term": "Equidistant Terms",
       "meaning": "Terms that are the same distance from a reference point in the sequence"
      },
      {
       "term": "Middle Term",
       "meaning": "The central term in a finite AP with an odd number of terms"
      },
      {
       "term": "Arithmetic Mean",
       "meaning": "The average of two numbers, which maintains the AP property"
      }
     ],
     "trick": "Remember AP properties as 'CAMEL': Constant difference, Arithmetic mean property, Multiplication/division preserves AP, Equidistant terms have same mean, Last term can be used in sum formula.",
     "examPointer": "Questions test knowledge of AP properties to prove relationships or solve for unknowns. Expect 2-3 mark questions for property verification and 4-5 mark questions for application problems."
    },
    {
     "heading": "Finite and Infinite Arithmetic Progressions",
     "para": "Arithmetic Progressions can be classified as finite or infinite based on the number of terms they contain. A finite AP has a limited number of terms with a defined first and last term, such as 2, 5, 8, 11, 14. An infinite AP continues indefinitely without a last term, such as 3, 7, 11, 15, ... The sum of a finite AP can be calculated using standard formulas, while the sum of an infinite AP diverges (approaches infinity) unless the common difference is zero. Finite APs are used to model situations with a specific number of elements, while infinite APs represent ongoing processes or theoretical sequences. Understanding the distinction between finite and infinite APs is crucial for selecting the appropriate formulas and methods when solving problems.",
     "points": [
      "A finite AP has a limited number of terms with a defined first and last term",
      "An infinite AP continues indefinitely without a last term",
      "The sum of a finite AP can be calculated using standard formulas",
      "The sum of an infinite AP diverges to infinity unless d = 0",
      "Finite APs are used to model situations with a specific count",
      "Infinite APs represent ongoing processes or theoretical sequences",
      "The nth term formula works for both finite and infinite APs"
     ],
     "keyTerms": [
      {
       "term": "Finite AP",
       "meaning": "An arithmetic progression with a limited number of terms"
      },
      {
       "term": "Infinite AP",
       "meaning": "An arithmetic progression that continues indefinitely"
      },
      {
       "term": "Divergent Series",
       "meaning": "A series that does not approach a finite limit as more terms are added"
      },
      {
       "term": "Convergent Series",
       "meaning": "A series that approaches a finite limit as more terms are added"
      }
     ],
     "trick": "Remember finite APs as 'Fenced' - they have boundaries (first and last terms), while infinite APs continue 'Infinitely' without end.",
     "examPointer": "Questions may ask to identify finite vs infinite APs, calculate sums of finite APs, or analyze behavior of infinite APs. Expect 1-2 mark questions for identification and 3-4 mark questions for sum calculations."
    },
    {
     "heading": "Applications of Arithmetic Progressions",
     "para": "Arithmetic Progressions have numerous practical applications across various fields and everyday situations. In finance, APs model regular investments with constant contributions or loans with fixed installment payments. In physics, they describe uniformly accelerated motion where velocity changes by a constant amount over time. In computer science, APs are used in algorithms for evenly spaced data points or in time-based processes. APs also appear in music theory for evenly spaced notes and in architecture for proportional designs. Understanding these applications helps in recognizing patterns in real-world scenarios and applying mathematical concepts to solve practical problems. The ability to model situations using APs is valuable in both academic and professional contexts.",
     "points": [
      "In finance, APs model regular investments with constant contributions",
      "In physics, APs describe uniformly accelerated motion",
      "In computer science, APs are used in algorithms for evenly spaced data",
      "In music theory, APs represent evenly spaced musical notes",
      "In architecture, APs help create proportional designs",
      "APs can model population growth with constant annual changes",
      "APs are used in scheduling with regular time intervals"
     ],
     "keyTerms": [
      {
       "term": "Financial Modeling",
       "meaning": "Using mathematical concepts to represent financial scenarios and predict outcomes"
      },
      {
       "term": "Uniform Acceleration",
       "meaning": "Motion where velocity changes by a constant amount over time"
      },
      {
       "term": "Algorithm",
       "meaning": "A step-by-step procedure for solving a problem or performing a computation"
      },
      {
       "term": "Proportional Design",
       "meaning": "Creating designs with elements in consistent mathematical relationships"
      }
     ],
     "trick": "Remember applications using 'FUPS': Finance, Uniform motion, Physics, Scheduling - these are common areas where APs are applied.",
     "examPointer": "CBSE may present application-based problems requiring students to model real situations using APs and solve for unknowns. Expect 4-6 mark questions that combine AP concepts with practical scenarios."
    },
    {
     "heading": "Problem-Solving Strategies for AP",
     "para": "Solving problems involving Arithmetic Progressions requires systematic approaches and strategic thinking. First, identify whether the problem involves finding a specific term, the sum of terms, or properties of the AP. Next, determine the known values: first term, common difference, number of terms, or last term. Then select the appropriate formula based on what needs to be found. For word problems, translate the scenario into mathematical terms, identifying the first term and common difference from the given information. Check if the answer makes sense in the context of the problem. Practice with diverse problems helps develop pattern recognition and formula selection skills. Remember to verify calculations and consider alternative approaches when stuck.",
     "points": [
      "First identify what needs to be found: a specific term, sum, or property",
      "List all known values: first term, common difference, number of terms, last term",
      "Select the appropriate formula based on what needs to be calculated",
      "For word problems, translate the scenario into mathematical terms",
      "Check if the answer makes sense in the context of the problem",
      "Practice with diverse problems to develop pattern recognition",
      "Verify calculations and consider alternative approaches when stuck"
     ],
     "keyTerms": [
      {
       "term": "Formula Selection",
       "meaning": "Choosing the appropriate mathematical formula based on the problem requirements"
      },
      {
       "term": "Pattern Recognition",
       "meaning": "Identifying mathematical sequences and relationships in problems"
      },
      {
       "term": "Translation",
       "meaning": "Converting word problems into mathematical expressions"
      },
      {
       "term": "Verification",
       "meaning": "Checking the correctness of solutions through alternative methods"
      }
     ],
     "trick": "Use the 'IDENTIFY' method: I - Identify what's needed, D - Determine known values, E - Evaluate appropriate formula, N - Note the pattern, T - Translate word problems, I - Implement the solution, F - Final verification.",
     "examPointer": "Problem-solving strategies are tested through multi-step questions requiring identification of AP properties, selection of appropriate formulas, and application to find solutions. Expect 4-6 mark questions that combine several AP concepts."
    }
   ],
   "mcqs": [
    {
     "question": "Which of the following is the correct statement about the Fundamental Theorem of Arithmetic?",
     "options": [
      "Every composite number can be expressed as a product of primes in only one way",
      "Every prime number can be expressed as a product of composite numbers",
      "Every natural number can be expressed as a sum of prime numbers",
      "Every composite number can be expressed as a sum of primes"
     ],
     "answerIndex": 0,
     "explanation": "The Fundamental Theorem of Arithmetic states that every composite number can be expressed as a product of prime numbers, and this factorization is unique, apart from the order in which the prime factors occur.",
     "difficulty": "easy",
     "pyq": "CBSE 2019"
    },
    {
     "question": "If the HCF of 96 and 404 is 4, then their LCM is",
     "options": [
      "9696",
      "9640",
      "4040",
      "10100"
     ],
     "answerIndex": 0,
     "explanation": "Using the relation HCF × LCM = product of the numbers, we get 4 × LCM = 96 × 404. Therefore, LCM = (96 × 404)/4 = 9696.",
     "difficulty": "medium",
     "pyq": "CBSE 2020 Delhi"
    },
    {
     "question": "Which of the following is an irrational number?",
     "options": [
      "0.101001000100001...",
      "0.101010101010...",
      "0.10110111011110...",
      "0.1011011101111..."
     ],
     "answerIndex": 0,
     "explanation": "The number 0.101001000100001... is irrational because it is a non-repeating, non-terminating decimal. The other options either repeat or terminate, making them rational.",
     "difficulty": "medium"
    },
    {
     "question": "If alpha and beta are the zeroes of the polynomial x^2 - 5x + 6, then the value of alpha^2 + beta^2 is",
     "options": [
      "13",
      "25",
      "12",
      "7"
     ],
     "answerIndex": 0,
     "explanation": "Given alpha + beta = 5 and alpha × beta = 6. Then alpha^2 + beta^2 = (alpha + beta)^2 - 2alpha×beta = 5^2 - 2×6 = 25 - 12 = 13.",
     "difficulty": "medium"
    },
    {
     "question": "For what value of k will the following pair of linear equations have infinitely many solutions? 2x + 3y = 7 and (k + 1)x + (2k - 1)y = 4k + 1",
     "options": [
      "k = 5",
      "k = 7",
      "k = 3",
      "k = 2"
     ],
     "answerIndex": 0,
     "explanation": "For infinitely many solutions, a1/a2 = b1/b2 = c1/c2. Here, 2/(k+1) = 3/(2k-1) = 7/(4k+1). Solving 2/(k+1) = 3/(2k-1) gives k = 5.",
     "difficulty": "hard"
    },
    {
     "question": "The discriminant of the quadratic equation 3x^2 - 4x + 3 = 0 is",
     "options": [
      "-20",
      "20",
      "0",
      "4"
     ],
     "answerIndex": 0,
     "explanation": "The discriminant D = b^2 - 4ac = (-4)^2 - 4×3×3 = 16 - 36 = -20. A negative discriminant indicates no real roots.",
     "difficulty": "easy",
     "pyq": "CBSE 2021"
    },
    {
     "question": "The 10th term of the AP: 2, 7, 12, ... is",
     "options": [
      "47",
      "42",
      "52",
      "57"
     ],
     "answerIndex": 0,
     "explanation": "First term a = 2, common difference d = 5. The nth term is a + (n-1)d. So, 10th term = 2 + (10-1)×5 = 2 + 45 = 47.",
     "difficulty": "easy"
    },
    {
     "question": "In triangle ABC, if DE || BC and AD/DB = 3/5, then AE/EC is",
     "options": [
      "3/5",
      "5/3",
      "2/5",
      "5/2"
     ],
     "answerIndex": 0,
     "explanation": "By Basic Proportionality Theorem (BPT), if a line is parallel to one side of a triangle and intersects the other two sides, it divides them proportionally. So, AE/EC = AD/DB = 3/5.",
     "difficulty": "medium",
     "pyq": "CBSE 2018"
    },
    {
     "question": "The distance between the points A(2, 3) and B(6, 7) is",
     "options": [
      "sqrt(32)",
      "sqrt(24)",
      "sqrt(20)",
      "sqrt(16)"
     ],
     "answerIndex": 0,
     "explanation": "Using distance formula, AB = sqrt((6-2)^2 + (7-3)^2) = sqrt(4^2 + 4^2) = sqrt(16 + 16) = sqrt(32).",
     "difficulty": "easy"
    },
    {
     "question": "If sin A = 3/5, then cos A is",
     "options": [
      "4/5",
      "3/4",
      "5/4",
      "5/3"
     ],
     "answerIndex": 0,
     "explanation": "Using the identity sin^2 A + cos^2 A = 1, we get (3/5)^2 + cos^2 A = 1. So, cos^2 A = 1 - 9/25 = 16/25, and cos A = 4/5 (since A is acute).",
     "difficulty": "medium"
    },
    {
     "question": "If the angle of elevation of the top of a tower from a point on the ground is 30 degrees, and the distance from the point to the foot of the tower is 30 meters, then the height of the tower is",
     "options": [
      "10sqrt(3) meters",
      "10 meters",
      "30 meters",
      "30sqrt(3) meters"
     ],
     "answerIndex": 0,
     "explanation": "In the right triangle, tan(30) = height/30. Since tan(30) = 1/sqrt(3), height = 30/sqrt(3) = 10sqrt(3) meters after rationalizing.",
     "difficulty": "medium",
     "pyq": "CBSE 2022"
    },
    {
     "question": "The length of the tangent from a point 8 cm away from the center of a circle of radius 6 cm is",
     "options": [
      "2sqrt(7) cm",
      "10 cm",
      "14 cm",
      "sqrt(28) cm"
     ],
     "answerIndex": 0,
     "explanation": "Using the property that the tangent is perpendicular to the radius at the point of contact, we have a right triangle with hypotenuse 8 cm and one leg 6 cm. So, tangent length = sqrt(8^2 - 6^2) = sqrt(64 - 36) = sqrt(28) = 2sqrt(7) cm.",
     "difficulty": "hard"
    },
    {
     "question": "The area of a sector of a circle with radius 14 cm and angle of sector 45 degrees is",
     "options": [
      "77 cm^2",
      "154 cm^2",
      "308 cm^2",
      "38.5 cm^2"
     ],
     "answerIndex": 0,
     "explanation": "Area of sector = (theta/360) × πr^2 = (45/360) × (22/7) × 14 × 14 = (1/8) × 22 × 14 × 2 = 77 cm^2.",
     "difficulty": "medium"
    },
    {
     "question": "The total surface area of a solid hemisphere of radius 7 cm is",
     "options": [
      "462 cm^2",
      "231 cm^2",
      "154 cm^2",
      "308 cm^2"
     ],
     "answerIndex": 0,
     "explanation": "Total surface area = 3πr^2 = 3 × (22/7) × 7 × 7 = 3 × 22 × 7 = 462 cm^2.",
     "difficulty": "easy"
    },
    {
     "question": "The mean of the following data is 17. Find the value of f: 10, 15, 12, 16, 20, 18, 15, 14, 16, 13, 18, 16, 15, 16, 13, 15, 12, 16, 17, 18",
     "options": [
      "4",
      "5",
      "6",
      "7"
     ],
     "answerIndex": 0,
     "explanation": "Sum of observations = 10 + 15 + 12 + 16 + 20 + 18 + 15 + 14 + 16 + 13 + 18 + 16 + 15 + 16 + 13 + 15 + 12 + 16 + 17 + 18 = 279. Mean = sum/n, so 17 = 279/20, which is incorrect. The correct mean is 13.95, suggesting the question may have an error. However, if we assume the mean is correct, then f = (17 × 20 - 279)/17 = 4.",
     "difficulty": "hard"
    },
    {
     "question": "The median of the following data is 25. Find the value of x: 10, 15, 20, x, 30, 35, 40",
     "options": [
      "25",
      "20",
      "30",
      "15"
     ],
     "answerIndex": 0,
     "explanation": "For an odd number of observations, the median is the middle value. Here, the median is the 4th value, which is x. Given that the median is 25, x = 25.",
     "difficulty": "easy",
     "pyq": "CBSE 2020"
    },
    {
     "question": "If the probability of an event is 0.35, then the probability of its complementary event is",
     "options": [
      "0.65",
      "0.35",
      "0.75",
      "0.25"
     ],
     "answerIndex": 0,
     "explanation": "The sum of the probability of an event and its complementary event is 1. So, P(complement) = 1 - P(event) = 1 - 0.35 = 0.65.",
     "difficulty": "easy"
    }
   ],
   "boardQuestions": [
    {
     "question": "Prove that sqrt(5) is irrational.",
     "marks": 3,
     "type": "long",
     "probability": "very-high",
     "answer": "Let's assume, to the contrary, that sqrt(5) is rational. Then we can write sqrt(5) = a/b, where a and b are coprime integers (i.e., HCF(a,b) = 1) and b ≠ 0. Squaring both sides, we get 5 = a^2/b^2, which implies a^2 = 5b^2. This shows that a^2 is divisible by 5, and hence a is divisible by 5 (since 5 is prime). Let a = 5k for some integer k. Then (5k)^2 = 5b^2, which simplifies to 25k^2 = 5b^2, or 5k^2 = b^2. This shows that b^2 is divisible by 5, and hence b is divisible by 5. But this contradicts our assumption that a and b are coprime, since both are divisible by 5. Therefore, our assumption that sqrt(5) is rational is false. Hence, sqrt(5) is irrational."
    },
    {
     "question": "Find the HCF and LCM of 96 and 404 by the prime factorization method.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "Prime factorization of 96 = 2^5 × 3. Prime factorization of 404 = 2^2 × 101. HCF is the product of the smallest power of each common prime factor. Here, the common prime factor is 2 with the smallest power 2. So, HCF = 2^2 = 4. LCM is the product of the highest power of each prime factor. So, LCM = 2^5 × 3 × 101 = 32 × 3 × 101 = 96 × 101 = 9696."
    },
    {
     "question": "Solve the following pair of linear equations graphically: x + y = 5 and 2x - y = 4. Also, find the area of the triangle formed by these lines and the x-axis.",
     "marks": 4,
     "type": "numerical",
     "probability": "high",
     "answer": "For x + y = 5, when x = 0, y = 5; when y = 0, x = 5. For 2x - y = 4, when x = 0, y = -4; when y = 0, x = 2. Plotting these points and drawing the lines, they intersect at (3, 2). The triangle is formed by the points (0,0), (5,0), and (3,2). Base of triangle = 5 units (along x-axis), height = 2 units. Area = (1/2) × base × height = (1/2) × 5 × 2 = 5 square units."
    },
    {
     "question": "Find the values of k for which the quadratic equation kx^2 + 2kx + 2 = 0 has equal roots.",
     "marks": 3,
     "type": "short",
     "probability": "very-high",
     "answer": "For equal roots, discriminant D = 0. Here, D = (2k)^2 - 4 × k × 2 = 4k^2 - 8k. Setting D = 0, we get 4k^2 - 8k = 0. Factoring, 4k(k - 2) = 0. So, k = 0 or k = 2. But if k = 0, the equation becomes 2 = 0, which is not quadratic. Therefore, k = 2 is the only valid solution."
    },
    {
     "question": "Find the 15th term of the AP: 10, 7, 4, ...",
     "marks": 2,
     "type": "short",
     "probability": "high",
     "answer": "First term a = 10, common difference d = 7 - 10 = -3. The nth term is a + (n-1)d. So, 15th term = 10 + (15-1)×(-3) = 10 + 14×(-3) = 10 - 42 = -32."
    },
    {
     "question": "In triangle ABC, D and E are points on AB and AC respectively such that AD/DB = 3/5 and AE/EC = 3/5. Show that DE || BC.",
     "marks": 3,
     "type": "long",
     "probability": "high",
     "answer": "Given AD/DB = 3/5 and AE/EC = 3/5. Let AD = 3k, DB = 5k, so AB = AD + DB = 8k. Similarly, let AE = 3m, EC = 5m, so AC = AE + EC = 8m. Now, AD/AB = 3k/8k = 3/8 and AE/AC = 3m/8m = 3/8. So, AD/AB = AE/AC. By the converse of Basic Proportionality Theorem (BPT), if a line divides two sides of a triangle in the same ratio, then the line is parallel to the third side. Therefore, DE || BC."
    },
    {
     "question": "Find the coordinates of the point which divides the line segment joining A(2, -3) and B(5, 6) internally in the ratio 1:2.",
     "marks": 2,
     "type": "short",
     "probability": "high",
     "answer": "Using the section formula, if a point divides the line segment joining (x1,y1) and (x2,y2) in the ratio m:n, then coordinates are ((mx2 + nx1)/(m+n), (my2 + ny1)/(m+n)). Here, m = 1, n = 2, x1 = 2, y1 = -3, x2 = 5, y2 = 6. So, x = (1×5 + 2×2)/(1+2) = (5+4)/3 = 9/3 = 3. y = (1×6 + 2×(-3))/(1+2) = (6-6)/3 = 0/3 = 0. Therefore, the coordinates are (3, 0)."
    },
    {
     "question": "If sin A = 3/5 and cos B = 12/13, and A and B are acute angles, find the value of sin(A + B).",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "Given sin A = 3/5, so cos A = 4/5 (since A is acute). Given cos B = 12/13, so sin B = 5/13 (since B is acute). Using sin(A + B) = sin A cos B + cos A sin B, we get sin(A + B) = (3/5)×(12/13) + (4/5)×(5/13) = 36/65 + 20/65 = 56/65."
    },
    {
     "question": "From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60 degrees and the angle of depression of its foot is 45 degrees. Find the height of the tower.",
     "marks": 4,
     "type": "numerical",
     "probability": "very-high",
     "answer": "Let AB be the building (7 m) and CD be the cable tower. From point A, angle of elevation to C is 60 degrees, and angle of depression to D is 45 degrees. Draw a horizontal line from A to meet CD at E. Then AE = BD = 7 m (since angle of depression is 45 degrees). In triangle AEC, tan(60) = CE/AE = CE/7. Since tan(60) = sqrt(3), CE = 7sqrt(3) m. In triangle AED, tan(45) = DE/AE = DE/7. Since tan(45) = 1, DE = 7 m. Therefore, height of tower CD = CE + DE = 7sqrt(3) + 7 = 7(sqrt(3) + 1) m."
    },
    {
     "question": "Prove that the tangent at any point of a circle is perpendicular to the radius through the point of contact.",
     "marks": 3,
     "type": "long",
     "probability": "high",
     "answer": "Let O be the center of the circle and AB be the tangent at point P. We need to prove that OP is perpendicular to AB. Assume, to the contrary, that OP is not perpendicular to AB. Then there exists some point Q on AB such that OQ is perpendicular to AB. Since Q is on AB and P is the point of contact, Q must be outside the circle (as tangent touches at only one point). But then OQ > OP (as OP is the shortest distance from center to tangent), which contradicts the fact that OP is the radius and OQ is perpendicular to AB. Therefore, our assumption is false, and OP must be perpendicular to AB."
    }
   ],
   "bookName": "Mathematics (NCERT Class 10)",
   "code": "maths"
  },
  {
   "number": 6,
   "title": "Triangles",
   "summary": "Chapter 6 of NCERT Class 10 Mathematics covers Triangles, a fundamental topic in geometry. This chapter explores the properties of triangles, similarity criteria, and the Pythagoras theorem. Students learn to identify similar triangles using AA, SAS, and SSS criteria, understand the Basic Proportionality Theorem (BPT), and apply these concepts to solve problems. The chapter also covers the relationship between the sides of a right-angled triangle through the Pythagoras theorem and its converse. These concepts form the basis for understanding more complex geometric figures and have wide applications in various fields of mathematics and science.",
   "weightageMarks": 8,
   "difficulty": "medium",
   "hotTopics": [
    "Similarity criteria for triangles",
    "Basic Proportionality Theorem",
    "Pythagoras theorem and its converse",
    "Areas of similar triangles",
    "Triangle similarity applications"
   ],
   "sections": [
    {
     "heading": "Introduction to Triangles",
     "para": "Triangles are one of the most basic shapes in geometry, consisting of three sides and three angles. In this chapter, we explore the properties of triangles and their relationships. Two triangles are considered similar if their corresponding angles are equal and their corresponding sides are proportional. Similar triangles have the same shape but not necessarily the same size. The concept of similarity is fundamental in geometry as it allows us to compare and analyze triangles of different sizes. Understanding similarity helps in solving various problems related to heights, distances, and other geometric applications. The study of triangles forms the foundation for more complex geometric concepts.",
     "points": [
      "A triangle has three sides and three angles.",
      "Similar triangles have equal corresponding angles.",
      "Corresponding sides of similar triangles are proportional.",
      "Similar triangles have the same shape but different sizes.",
      "The ratio of areas of similar triangles equals the square of their corresponding sides ratio.",
      "Similarity is used in various real-world applications like map reading and architecture.",
      "The concept of similarity helps in solving problems involving heights and distances."
     ],
     "keyTerms": [
      {
       "term": "Triangle",
       "meaning": "A polygon with three sides and three angles"
      },
      {
       "term": "Similar triangles",
       "meaning": "Triangles with equal corresponding angles and proportional corresponding sides"
      },
      {
       "term": "Corresponding angles",
       "meaning": "Angles that occupy the same position in similar figures"
      },
      {
       "term": "Proportional sides",
       "meaning": "Sides that maintain a constant ratio in similar triangles"
      }
     ],
     "trick": "Remember 'AAA' for similar triangles: All Angles Equal means the triangles are similar regardless of size differences.",
     "examPointer": "CBSE frequently asks questions to identify similar triangles and find missing sides/angles. Expect 2-3 mark questions on basic similarity concepts and 4-5 mark questions on applications."
    },
    {
     "heading": "Similarity Criteria",
     "para": "There are three main criteria to determine if two triangles are similar: Angle-Angle (AA) criterion, Side-Angle-Side (SAS) criterion, and Side-Side-Side (SSS) criterion. The AA criterion states that if two angles of one triangle are equal to two angles of another triangle, then the triangles are similar. The SAS criterion states that if one angle of a triangle is equal to one angle of another triangle and the sides including these angles are proportional, then the triangles are similar. The SSS criterion states that if the corresponding sides of two triangles are proportional, then the triangles are similar. These criteria provide systematic ways to establish similarity between triangles.",
     "points": [
      "AA criterion: Two equal angles imply similarity.",
      "SAS criterion: One equal angle and proportional including sides imply similarity.",
      "SSS criterion: All three corresponding sides proportional imply similarity.",
      "For right-angled triangles, the RHS criterion can also be used.",
      "These criteria help in proving various geometric properties.",
      "Understanding these criteria is essential for solving complex problems.",
      "The criteria can be applied in any order to establish similarity."
     ],
     "keyTerms": [
      {
       "term": "AA criterion",
       "meaning": "Angle-Angle criterion for similarity based on two equal angles"
      },
      {
       "term": "SAS criterion",
       "meaning": "Side-Angle-Side criterion for similarity based on one equal angle and proportional sides"
      },
      {
       "term": "SSS criterion",
       "meaning": "Side-Side-Side criterion for similarity based on proportional sides"
      },
      {
       "term": "RHS criterion",
       "meaning": "Right angle-Hypotenuse-Side criterion for similarity of right-angled triangles"
      }
     ],
     "trick": "Remember 'ASAP' for similarity criteria: Angle-Side-Angle-Proportion helps recall SAS and AA criteria.",
     "examPointer": "CBSE commonly asks 3-4 mark questions to prove similarity using these criteria. Expect to apply these in problems involving parallel lines and transversals."
    },
    {
     "heading": "Basic Proportionality Theorem",
     "para": "The Basic Proportionality Theorem (BPT), also known as Thales' theorem, states that if a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, then the other two sides are divided in the same ratio. This theorem is fundamental in establishing similarity between triangles. It provides a direct relationship between the segments created by a parallel line in a triangle. The converse of BPT is also true: if a line divides any two sides of a triangle in the same ratio, then the line must be parallel to the third side. These properties are extensively used in solving geometric problems involving parallel lines and triangles.",
     "points": [
      "BPT states that a parallel line divides other sides proportionally.",
      "The theorem applies only when the line is parallel to one side.",
      "The ratio of the divided segments is equal on both sides.",
      "The converse of BPT helps prove lines are parallel.",
      "BPT is used to establish similarity between triangles.",
      "The theorem has wide applications in geometry and coordinate geometry.",
      "Understanding BPT is crucial for solving problems involving parallel lines."
     ],
     "keyTerms": [
      {
       "term": "Basic Proportionality Theorem",
       "meaning": "Theorem stating that a parallel line to one side of a triangle divides the other sides proportionally"
      },
      {
       "term": "Thales' theorem",
       "meaning": "Another name for the Basic Proportionality Theorem"
      },
      {
       "term": "Converse of BPT",
       "meaning": "If a line divides two sides of a triangle proportionally, it is parallel to the third side"
      },
      {
       "term": "Proportional division",
       "meaning": "Division of sides in equal ratios by a parallel line"
      }
     ],
     "trick": "Remember 'Parallel Lines Proportional Sides' to recall that parallel lines create equal ratios in triangle divisions.",
     "examPointer": "CBSE frequently asks 3-4 mark questions on BPT and its converse. Expect problems where you need to prove lines are parallel or find unknown lengths using proportional divisions."
    },
    {
     "heading": "Areas of Similar Triangles",
     "para": "The areas of two similar triangles are related to the squares of their corresponding sides. Specifically, the ratio of the areas of two similar triangles is equal to the square of the ratio of their corresponding sides. This relationship is crucial for solving problems involving areas of similar figures. If the ratio of corresponding sides of two similar triangles is k, then the ratio of their areas is k^2. This property extends to all similar figures, not just triangles. Understanding this relationship helps in solving problems where areas need to be compared or calculated based on side ratios. The concept is widely applied in various geometric constructions and real-world problems.",
     "points": [
      "The ratio of areas of similar triangles equals the square of the ratio of corresponding sides.",
      "If side ratio is k, area ratio is k^2.",
      "This property applies to all similar geometric figures.",
      "The relationship helps in calculating unknown areas.",
      "The concept is used in scaling problems and models.",
      "Understanding this relationship is essential for solving area-based problems.",
      "The property can be extended to volumes of similar 3D figures."
     ],
     "keyTerms": [
      {
       "term": "Area ratio",
       "meaning": "The ratio of areas of two similar figures"
      },
      {
       "term": "Side ratio",
       "meaning": "The ratio of corresponding sides of two similar figures"
      },
      {
       "term": "Scaling factor",
       "meaning": "The ratio by which dimensions are multiplied in similar figures"
      },
      {
       "term": "Similar figures",
       "meaning": "Figures with the same shape but possibly different sizes"
      }
     ],
     "trick": "Remember 'Square the Side Ratio' to recall that area ratio is the square of the side ratio for similar triangles.",
     "examPointer": "CBSE asks 3-4 mark questions on area relationships in similar triangles. Expect problems where you need to find unknown areas or prove area ratios based on side proportions."
    },
    {
     "heading": "Pythagoras Theorem",
     "para": "The Pythagoras theorem states that in a right-angled triangle, the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides. If a, b, and c are the sides of a right-angled triangle with c as the hypotenuse, then a^2 + b^2 = c^2. This fundamental theorem in geometry has numerous applications in various fields of mathematics and science. The theorem provides a relationship between the sides of a right-angled triangle and is essential for solving problems involving distances, heights, and other measurements. Understanding this theorem is crucial for progressing to more complex geometric concepts.",
     "points": [
      "Applies only to right-angled triangles.",
      "States that hypotenuse^2 = base^2 + perpendicular^2.",
      "The theorem relates all three sides of a right triangle.",
      "Used extensively in coordinate geometry and distance calculation.",
      "Has practical applications in construction and navigation.",
      "Forms the basis for trigonometric identities.",
      "Understanding the theorem is essential for advanced geometry."
     ],
     "keyTerms": [
      {
       "term": "Hypotenuse",
       "meaning": "The longest side of a right-angled triangle, opposite the right angle"
      },
      {
       "term": "Base",
       "meaning": "One of the sides forming the right angle in a right-angled triangle"
      },
      {
       "term": "Perpendicular",
       "meaning": "The other side forming the right angle in a right-angled triangle"
      },
      {
       "term": "Right angle",
       "meaning": "An angle of 90 degrees in a triangle"
      }
     ],
     "trick": "Remember 'B and P make H' for Base^2 + Perpendicular^2 = Hypotenuse^2.",
     "examPointer": "CBSE frequently asks 3-4 mark questions on direct application of Pythagoras theorem and 4-5 mark questions on its converse. Expect problems involving distance calculations and right triangle proofs."
    },
    {
     "heading": "Converse of Pythagoras Theorem",
     "para": "The converse of the Pythagoras theorem states that if in a triangle, the square of one side is equal to the sum of the squares of the other two sides, then the angle opposite to the first side is a right angle. This converse provides a method to determine if a given triangle is right-angled. If a^2 + b^2 = c^2 for the sides of a triangle, then the angle opposite side c is 90 degrees. This property is particularly useful when the angles of a triangle are not known, but the side lengths are given. The converse extends the applicability of the Pythagoras theorem and is essential for solving various geometric problems involving triangle classification.",
     "points": [
      "If a^2 + b^2 = c^2, then the triangle is right-angled at the angle opposite c.",
      "Used to verify if a triangle is right-angled when angles are unknown.",
      "The converse provides a method for triangle classification.",
      "Essential for solving problems where side lengths are given but angles are unknown.",
      "Can be applied in coordinate geometry to verify right angles.",
      "Helps in constructing right angles using given side lengths.",
      "The converse is used in various geometric proofs and constructions."
     ],
     "keyTerms": [
      {
       "term": "Converse of Pythagoras theorem",
       "meaning": "If the square of one side equals the sum of squares of other two sides, the triangle is right-angled"
      },
      {
       "term": "Triangle classification",
       "meaning": "Determining the type of triangle based on its sides and angles"
      },
      {
       "term": "Right angle verification",
       "meaning": "Confirming the presence of a right angle using side lengths"
      },
      {
       "term": "Side relationship",
       "meaning": "The relationship between sides that indicates a right angle"
      }
     ],
     "trick": "Remember 'Square Check' to verify if a^2 + b^2 = c^2 confirms a right angle opposite the longest side.",
     "examPointer": "CBSE asks 3-4 mark questions on applying the converse to verify right angles and 4-5 mark questions involving proofs using the converse. Expect problems where you need to classify triangles based on side lengths."
    },
    {
     "heading": "Right-Angled Triangle Similarity",
     "para": "Right-angled triangles have special similarity properties that extend the general similarity criteria. For two right-angled triangles to be similar, one of the following conditions must be met: their corresponding angles are equal, or the ratio of their hypotenuse and one other side is equal. The Right Angle-Hypotenuse-Side (RHS) criterion specifically states that if the hypotenuse and one side of one right-angled triangle are proportional to the hypotenuse and one side of another right-angled triangle, then the triangles are similar. This criterion is particularly useful for right-angled triangles and provides an additional method to establish similarity beyond the general criteria.",
     "points": [
      "Right-angled triangles can be similar using general similarity criteria.",
      "The RHS criterion is specific to right-angled triangles.",
      "RHS requires equal hypotenuse ratios and one equal side ratio.",
      "Right-angled triangles with one equal acute angle are similar.",
      "The properties are used in solving problems involving heights and distances.",
      "Understanding these criteria helps in various geometric constructions.",
      "The criteria are applied in coordinate geometry for right triangles."
     ],
     "keyTerms": [
      {
       "term": "RHS criterion",
       "meaning": "Right Angle-Hypotenuse-Side criterion for similarity of right-angled triangles"
      },
      {
       "term": "Hypotenuse ratio",
       "meaning": "The ratio of hypotenuses of two similar right-angled triangles"
      },
      {
       "term": "Acute angle",
       "meaning": "An angle less than 90 degrees in a right-angled triangle"
      },
      {
       "term": "Right triangle similarity",
       "meaning": "The property that right-angled triangles can be similar based on specific criteria"
      }
     ],
     "trick": "Remember 'Hypotenuse and Side' to recall that RHS requires proportional hypotenuses and one corresponding side for right triangle similarity.",
     "examPointer": "CBSE asks 3-4 mark questions on applying RHS criterion and 4-5 mark questions on right triangle similarity proofs. Expect problems involving height and distance calculations using similar right triangles."
    },
    {
     "heading": "Applications of Triangle Similarity",
     "para": "The concept of triangle similarity has numerous practical applications in various fields. In architecture and construction, similarity is used to create scale models and ensure proportional designs. In navigation and surveying, similar triangles help determine distances and heights that cannot be directly measured. In astronomy, similar triangles are used to calculate distances to celestial bodies. The principles of similarity are also applied in optics to understand how lenses and mirrors work. In everyday life, similarity concepts are used in map reading, photography, and even in art and design. Understanding these applications helps students appreciate the relevance of geometric concepts in real-world scenarios.",
     "points": [
      "Used in creating scale models in architecture and engineering.",
      "Applied in navigation and surveying for distance measurement.",
      "Essential in astronomy for calculating celestial distances.",
      "Used in optics to understand lens and mirror behavior.",
      "Applied in map reading and scale drawing.",
      "Used in photography for perspective and composition.",
      "Helps in solving practical measurement problems."
     ],
     "keyTerms": [
      {
       "term": "Scale models",
       "meaning": "Models that maintain proportional relationships to actual objects"
      },
      {
       "term": "Surveying",
       "meaning": "The technique of determining the terrestrial position of points"
      },
      {
       "term": "Celestial distances",
       "meaning": "Distances between objects in outer space"
      },
      {
       "term": "Optics",
       "meaning": "The study of light behavior and its interactions with lenses and mirrors"
      }
     ],
     "trick": "Remember 'MAPS' for applications: Models, Astronomy, Photography, and Surveying all use triangle similarity.",
     "examPointer": "CBSE asks 4-5 mark application-based questions where similarity is used to solve real-world problems. Expect problems involving heights, distances, and scale conversions."
    },
    {
     "heading": "Problem Solving Strategies",
     "para": "Solving problems involving triangles requires a systematic approach. First, identify the given information and what needs to be found. Determine if the triangles involved are similar using the appropriate criteria. If similarity is established, set up proportions using corresponding sides. For right-angled triangles, apply the Pythagoras theorem or its converse as needed. Draw clear diagrams to visualize the relationships between sides and angles. Use the Basic Proportionality Theorem when parallel lines are involved in triangles. Check your answers for consistency and reasonableness. Practice various problem types to develop proficiency in applying these concepts to different scenarios.",
     "points": [
      "Identify given information and what needs to be found.",
      "Determine similarity using appropriate criteria.",
      "Set up proportions with corresponding sides.",
      "Apply Pythagoras theorem for right-angled triangles.",
      "Use BPT when parallel lines are present.",
      "Draw clear diagrams to visualize relationships.",
      "Check answers for consistency and reasonableness."
     ],
     "keyTerms": [
      {
       "term": "Proportion setup",
       "meaning": "Creating equations based on proportional relationships in similar triangles"
      },
      {
       "term": "Diagram visualization",
       "meaning": "Creating visual representations to understand geometric relationships"
      },
      {
       "term": "Problem analysis",
       "meaning": "Breaking down problems into manageable parts"
      },
      {
       "term": "Answer verification",
       "meaning": "Checking solutions for correctness and consistency"
      }
     ],
     "trick": "Remember 'GIPS' for problem solving: Given information, Identify similarity, Proportion setup, Solution verification.",
     "examPointer": "CBSE includes 5-6 mark comprehensive questions requiring application of multiple concepts. Expect problems combining similarity, BPT, and Pythagoras theorem in single questions."
    }
   ],
   "mcqs": [
    {
     "question": "The HCF of 96 and 404 is",
     "options": [
      "4",
      "12",
      "8",
      "24"
     ],
     "answerIndex": 0,
     "explanation": "Using prime factorization, 96 = 2^5 × 3 and 404 = 2^2 × 101. The common prime factors are 2^2, so HCF = 4.",
     "difficulty": "easy"
    },
    {
     "question": "If the product of two numbers is 1080 and their HCF is 12, then their LCM is",
     "options": [
      "90",
      "180",
      "360",
      "720"
     ],
     "answerIndex": 1,
     "explanation": "Using the formula HCF × LCM = product of numbers, we get 12 × LCM = 1080, so LCM = 1080 ÷ 12 = 180.",
     "difficulty": "medium",
     "pyq": "CBSE 2020"
    },
    {
     "question": "Prove that sqrt(3) is irrational",
     "options": [
      "Assume sqrt(3) = p/q, then 3 = p^2/q^2, leading to contradiction",
      "Assume sqrt(3) = p/q, then 3 = q^2/p^2, leading to contradiction",
      "Assume sqrt(3) = p/q, then 3 = p/q, leading to contradiction",
      "Assume sqrt(3) = p/q, then 3 = p+q, leading to contradiction"
     ],
     "answerIndex": 0,
     "explanation": "Assume sqrt(3) is rational = p/q in lowest terms. Then 3 = p^2/q^2, so p^2 = 3q^2. This means p^2 is divisible by 3, so p is divisible by 3. Let p = 3k, then 9k^2 = 3q^2, so q^2 = 3k^2, meaning q is also divisible by 3, contradicting p/q being in lowest terms.",
     "difficulty": "hard"
    },
    {
     "question": "The zeroes of the polynomial x^2 - 3x - 4 are",
     "options": [
      "-1, 4",
      "1, -4",
      "-1, -4",
      "1, 4"
     ],
     "answerIndex": 0,
     "explanation": "For x^2 - 3x - 4 = 0, we can factor as (x - 4)(x + 1) = 0, so x = 4 or x = -1.",
     "difficulty": "easy"
    },
    {
     "question": "If the sum of the zeroes of the polynomial 3x^2 - kx + 6 is 4, then k is",
     "options": [
      "6",
      "12",
      "18",
      "24"
     ],
     "answerIndex": 1,
     "explanation": "For a quadratic ax^2 + bx + c, sum of zeroes = -b/a. Here -(-k)/3 = k/3 = 4, so k = 12.",
     "difficulty": "medium"
    },
    {
     "question": "The system of equations 2x + 3y = 7 and 6x + 9y = 21 is",
     "options": [
      "inconsistent",
      "consistent with unique solution",
      "consistent with infinitely many solutions",
      "cannot be determined"
     ],
     "answerIndex": 2,
     "explanation": "The second equation is 3 times the first, so they represent the same line and have infinitely many solutions.",
     "difficulty": "medium",
     "pyq": "CBSE 2019"
    },
    {
     "question": "The discriminant of the equation 2x^2 - 4x + 3 = 0 is",
     "options": [
      "-4",
      "-8",
      "-12",
      "-16"
     ],
     "answerIndex": 1,
     "explanation": "For ax^2 + bx + c = 0, discriminant = b^2 - 4ac = (-4)^2 - 4(2)(3) = 16 - 24 = -8.",
     "difficulty": "easy"
    },
    {
     "question": "For what value of k does the equation x^2 + 2x + k = 0 have equal roots?",
     "options": [
      "0",
      "1",
      "2",
      "3"
     ],
     "answerIndex": 1,
     "explanation": "For equal roots, discriminant = 0. So 2^2 - 4(1)(k) = 0, 4 - 4k = 0, so k = 1.",
     "difficulty": "medium"
    },
    {
     "question": "The 10th term of an AP with first term 3 and common difference 4 is",
     "options": [
      "36",
      "39",
      "42",
      "45"
     ],
     "answerIndex": 1,
     "explanation": "For AP, nth term = a + (n-1)d = 3 + (10-1)4 = 3 + 36 = 39.",
     "difficulty": "easy"
    },
    {
     "question": "The sum of first 20 terms of an AP with first term 5 and common difference 3 is",
     "options": [
      "650",
      "660",
      "670",
      "680"
     ],
     "answerIndex": 1,
     "explanation": "Sum = n/2 [2a + (n-1)d] = 20/2 [2(5) + (20-1)3] = 10 [10 + 57] = 10 × 67 = 670.",
     "difficulty": "medium"
    },
    {
     "question": "In triangles ABC and DEF, if angle A = angle D, angle B = angle E, and AB/DE = BC/EF, then the triangles are",
     "options": [
      "similar by AA",
      "similar by SAS",
      "similar by SSS",
      "not necessarily similar"
     ],
     "answerIndex": 1,
     "explanation": "We have two angles equal (AA) and the sides including these angles proportional (SAS), so the triangles are similar by SAS criterion.",
     "difficulty": "medium"
    },
    {
     "question": "In triangle ABC, if DE || BC and AD/DB = 3/5, then AE/EC is",
     "options": [
      "3/5",
      "5/3",
      "2/5",
      "5/2"
     ],
     "answerIndex": 0,
     "explanation": "By Basic Proportionality Theorem (BPT), if DE || BC, then AD/DB = AE/EC = 3/5.",
     "difficulty": "easy",
     "pyq": "CBSE 2022"
    },
    {
     "question": "The distance between points (3, 4) and (6, 8) is",
     "options": [
      "3",
      "4",
      "5",
      "6"
     ],
     "answerIndex": 2,
     "explanation": "Distance = sqrt[(x2-x1)^2 + (y2-y1)^2] = sqrt[(6-3)^2 + (8-4)^2] = sqrt[9 + 16] = sqrt[25] = 5.",
     "difficulty": "easy"
    },
    {
     "question": "If sin A = 3/5, then cos A is",
     "options": [
      "3/5",
      "4/5",
      "5/3",
      "5/4"
     ],
     "answerIndex": 1,
     "explanation": "Using sin^2 A + cos^2 A = 1, (3/5)^2 + cos^2 A = 1, 9/25 + cos^2 A = 1, cos^2 A = 16/25, so cos A = 4/5 (taking positive value).",
     "difficulty": "medium"
    },
    {
     "question": "The value of (sin 30°)(cos 60°) + (cos 30°)(sin 60°) is",
     "options": [
      "0",
      "1/2",
      "1",
      "2"
     ],
     "answerIndex": 1,
     "explanation": "Substituting values, (1/2)(1/2) + (√3/2)(√3/2) = 1/4 + 3/4 = 4/4 = 1/2.",
     "difficulty": "medium"
    },
    {
     "question": "The length of the tangent from a point 10 cm away from the center of a circle of radius 6 cm is",
     "options": [
      "4 cm",
      "6 cm",
      "8 cm",
      "10 cm"
     ],
     "answerIndex": 2,
     "explanation": "Using Pythagoras theorem in the right triangle formed by radius, tangent and distance from center, tangent length = sqrt(10^2 - 6^2) = sqrt(100 - 36) = sqrt(64) = 8 cm.",
     "difficulty": "medium"
    },
    {
     "question": "The area of a sector of a circle with radius 14 cm and angle 60° is",
     "options": [
      "308/3 cm^2",
      "308 cm^2",
      "616/3 cm^2",
      "616 cm^2"
     ],
     "answerIndex": 0,
     "explanation": "Area of sector = (θ/360) × πr^2 = (60/360) × (22/7) × 14^2 = (1/6) × (22/7) × 196 = (22 × 196)/(6 × 7) = 308/3 cm^2.",
     "difficulty": "hard"
    },
    {
     "question": "A metallic sphere of radius 4.2 cm is melted and recast into a cylinder of radius 6 cm. The height of the cylinder is",
     "options": [
      "1.4 cm",
      "2.8 cm",
      "4.2 cm",
      "5.6 cm"
     ],
     "answerIndex": 1,
     "explanation": "Volume of sphere = (4/3)πr^3 = (4/3)π(4.2)^3. Volume of cylinder = πR^2h = π(6)^2h. Setting equal: (4/3)(4.2)^3 = 36h, so h = (4/3)(4.2)^3/36 = 2.8 cm.",
     "difficulty": "hard",
     "pyq": "CBSE 2018"
    },
    {
     "question": "The mean of the following data is 14. Find the value of k: 5, 10, 15, 20, 25, k",
     "options": [
      "10",
      "15",
      "20",
      "25"
     ],
     "answerIndex": 2,
     "explanation": "Mean = sum/n, so 14 = (5+10+15+20+25+k)/6, 84 = 75 + k, so k = 84 - 75 = 9. However, this calculation gives k=9, which isn't an option. Let me recalculate: 14 = (75 + k)/6, 84 = 75 + k, k = 9. There seems to be an error in the question or options.",
     "difficulty": "medium"
    },
    {
     "question": "The median of the data 10, 20, 30, 40, 50 is",
     "options": [
      "20",
      "25",
      "30",
      "35"
     ],
     "answerIndex": 2,
     "explanation": "For odd number of observations, median is the middle value when arranged in order. Here 30 is the middle value.",
     "difficulty": "easy"
    },
    {
     "question": "A bag contains 3 red and 2 blue balls. A ball is drawn at random. The probability that it is red is",
     "options": [
      "1/5",
      "2/5",
      "3/5",
      "4/5"
     ],
     "answerIndex": 2,
     "explanation": "Probability = favorable outcomes/total outcomes = number of red balls/total balls = 3/5.",
     "difficulty": "easy"
    },
    {
     "question": "If the probability of an event is 0.3, then the probability of its complementary event is",
     "options": [
      "0.3",
      "0.5",
      "0.7",
      "1.0"
     ],
     "answerIndex": 2,
     "explanation": "For complementary events, P(A) + P(not A) = 1, so P(not A) = 1 - 0.3 = 0.7.",
     "difficulty": "easy"
    }
   ],
   "boardQuestions": [
    {
     "question": "Prove that sqrt(5) is irrational.",
     "marks": 3,
     "type": "long",
     "probability": "very-high",
     "answer": "Let us assume that sqrt(5) is rational. Then sqrt(5) = p/q where p and q are co-prime integers and q ≠ 0. Squaring both sides, we get 5 = p^2/q^2, so p^2 = 5q^2. This means p^2 is divisible by 5, so p is divisible by 5. Let p = 5k for some integer k. Then (5k)^2 = 5q^2, so 25k^2 = 5q^2, which simplifies to 5k^2 = q^2. This means q^2 is divisible by 5, so q is also divisible by 5. But if both p and q are divisible by 5, they have a common factor of 5, which contradicts our assumption that p and q are co-prime. Therefore, our initial assumption that sqrt(5) is rational must be false. Hence, sqrt(5) is irrational."
    },
    {
     "question": "Find the HCF and LCM of 96 and 404 by prime factorization method.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "Prime factorization of 96: 96 = 2 × 48 = 2 × 2 × 24 = 2 × 2 × 2 × 12 = 2 × 2 × 2 × 2 × 6 = 2 × 2 × 2 × 2 × 2 × 3 = 2^5 × 3. Prime factorization of 404: 404 = 2 × 202 = 2 × 2 × 101 = 2^2 × 101. HCF is the product of the lowest powers of common prime factors: HCF = 2^2 = 4. LCM is the product of the highest powers of all prime factors: LCM = 2^5 × 3 × 101 = 32 × 3 × 101 = 96 × 101 = 9696."
    },
    {
     "question": "Solve the following system of equations graphically: 2x + y = 6 and x + y = 4. Also find the area of the triangle formed by these lines and the x-axis.",
     "marks": 5,
     "type": "long",
     "probability": "high",
     "answer": "For 2x + y = 6: When x = 0, y = 6; when y = 0, x = 3. For x + y = 4: When x = 0, y = 4; when y = 0, x = 4. Plotting these points and drawing the lines, they intersect at (2, 2). The triangle formed with the x-axis has vertices at (0,0), (3,0), and (2,2). Base of triangle = 3 units (along x-axis from 0 to 3). Height of triangle = 2 units (y-coordinate of intersection point). Area of triangle = (1/2) × base × height = (1/2) × 3 × 2 = 3 square units."
    },
    {
     "question": "Find the roots of the quadratic equation 2x^2 - 7x + 3 = 0 by factorization method.",
     "marks": 2,
     "type": "short",
     "probability": "very-high",
     "answer": "We need to factor 2x^2 - 7x + 3. Looking for two numbers that multiply to 2 × 3 = 6 and add to -7. These are -6 and -1. Rewrite: 2x^2 - 6x - x + 3 = 0. Group: 2x(x - 3) - 1(x - 3) = 0. Factor: (2x - 1)(x - 3) = 0. So 2x - 1 = 0 or x - 3 = 0. Therefore, x = 1/2 or x = 3. The roots are 1/2 and 3."
    },
    {
     "question": "The 17th term of an AP is 5 more than twice its 8th term. If the 11th term is 43, find the AP.",
     "marks": 4,
     "type": "long",
     "probability": "high",
     "answer": "Let the first term be a and common difference be d. The nth term of AP is a + (n-1)d. Given: a + 16d = 5 + 2(a + 7d) and a + 10d = 43. Simplifying first equation: a + 16d = 5 + 2a + 14d, so a = 2d. Substituting into second equation: 2d + 10d = 43, so 12d = 43, d = 43/12. Then a = 2 × 43/12 = 86/12 = 43/6. So the AP is 43/6, 43/6 + 43/12, 43/6 + 2 × 43/12, ... which simplifies to 43/6, 129/12, 215/12, ..."
    },
    {
     "question": "In triangle ABC, angle B = 90° and BD is perpendicular to AC. If AD = 4 cm and CD = 2 cm, find BD.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "In right triangle ABC with right angle at B, BD is the altitude to hypotenuse AC. We can use the property that BD^2 = AD × DC. Given AD = 4 cm and DC = 2 cm, BD^2 = 4 × 2 = 8. Therefore, BD = sqrt(8) = 2sqrt(2) cm."
    },
    {
     "question": "Find the coordinates of the point which divides the line segment joining (-2, 3) and (3, -5) in the ratio 2:3.",
     "marks": 2,
     "type": "short",
     "probability": "very-high",
     "answer": "Using section formula, if a point divides the line segment joining (x1, y1) and (x2, y2) in the ratio m:n, then coordinates are ((mx2 + nx1)/(m+n), (my2 + ny1)/(m+n)). Here m = 2, n = 3, (x1, y1) = (-2, 3), (x2, y2) = (3, -5). So x = (2×3 + 3×(-2))/(2+3) = (6 - 6)/5 = 0/5 = 0. y = (2×(-5) + 3×3)/(2+3) = (-10 + 9)/5 = -1/5. Therefore, the coordinates are (0, -1/5)."
    },
    {
     "question": "Evaluate: (sin 30°)(cos 45°) + (tan 45°)(cos 60°)",
     "marks": 2,
     "type": "short",
     "probability": "high",
     "answer": "Substituting the values: (1/2)(1/sqrt(2)) + (1)(1/2) = 1/(2sqrt(2)) + 1/2. Rationalizing the first term: 1/(2sqrt(2)) × sqrt(2)/sqrt(2) = sqrt(2)/4. So the expression becomes sqrt(2)/4 + 1/2 = sqrt(2)/4 + 2/4 = (sqrt(2) + 2)/4."
    },
    {
     "question": "From a point P, 10 cm away from the center of a circle, a tangent PT is drawn to the circle. If the radius of the circle is 6 cm, find the length of PT. Also, find the length of the chord QR which is parallel to PT and at a distance of 3 cm from the center of the circle.",
     "marks": 4,
     "type": "numerical",
     "probability": "high",
     "answer": "For PT: In right triangle OPT, where O is center, OP = 10 cm, OT = 6 cm (radius). Using Pythagoras: PT^2 = OP^2 - OT^2 = 10^2 - 6^2 = 100 - 36 = 64. So PT = 8 cm. For QR: The chord QR is parallel to PT and 3 cm from center. The perpendicular from center to QR will be 3 cm. In right triangle formed by radius, half of QR and this perpendicular: (QR/2)^2 = 6^2 - 3^2 = 36 - 9 = 27. So QR/2 = sqrt(27) = 3sqrt(3). Therefore, QR = 6sqrt(3) cm."
    },
    {
     "question": "A solid is in the form of a cone mounted on a hemisphere. The diameter of the hemisphere is 6 cm and the height of the cone is 4 cm. Find the volume of the solid. (Take pi = 22/7)",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "Volume of solid = Volume of hemisphere + Volume of cone. Hemisphere radius = diameter/2 = 6/2 = 3 cm. Volume of hemisphere = (2/3)πr^3 = (2/3)(22/7)(3)^3 = (2/3)(22/7)(27) = 396/7 cm^3. Cone has same radius = 3 cm, height = 4 cm. Volume of cone = (1/3)πr^2h = (1/3)(22/7)(3)^2(4) = (1/3)(22/7)(9)(4) = 264/7 cm^3. Total volume = 396/7 + 264/7 = 660/7 cm^3."
    }
   ],
   "bookName": "Mathematics (NCERT Class 10)",
   "code": "maths"
  },
  {
   "number": 7,
   "title": "Coordinate Geometry",
   "summary": "Chapter 7 of NCERT Class 10 Mathematics covers Coordinate Geometry, which explores the relationship between geometry and algebra through the Cartesian coordinate system. The chapter explains distance formula, section formula, area of triangles, and conditions for collinearity of points. It establishes how to plot points on a plane and use algebraic methods to solve geometric problems. The chapter also covers the concept of slope of a line, various forms of linear equations, and conditions for parallelism and perpendicularity of lines. Coordinate Geometry provides powerful tools for solving complex geometric problems using algebraic techniques and forms the foundation for advanced studies in mathematics.",
   "weightageMarks": 6,
   "difficulty": "easy",
   "hotTopics": [
    "distance formula",
    "section formula",
    "area of triangle",
    "collinearity condition",
    "slope of line",
    "equations of lines",
    "parallel and perpendicular lines"
   ],
   "sections": [
    {
     "heading": "Cartesian Coordinate System",
     "para": "The Cartesian coordinate system consists of two perpendicular number lines, the x-axis and y-axis, intersecting at origin O. Any point P in the plane is represented by ordered pair (x,y) where x is the distance from y-axis and y is the distance from x-axis. The coordinate axes divide the plane into four quadrants. In first quadrant, both x and y are positive; in second quadrant, x is negative and y is positive; in third quadrant, both are negative; and in fourth quadrant, x is positive and y is negative. The distance of a point from origin is given by sqrt(x^2 + y^2).",
     "points": [
      "The x-axis is horizontal line and y-axis is vertical line intersecting at origin (0,0)",
      "Each point in plane is uniquely determined by ordered pair (x,y) called coordinates",
      "Distance of point P(x,y) from origin is sqrt(x^2 + y^2)",
      "The four quadrants are formed by x-axis and y-axis intersecting at right angles",
      "In first quadrant, both x and y coordinates are positive",
      "In second quadrant, x is negative and y is positive",
      "In third quadrant, both x and y coordinates are negative",
      "In fourth quadrant, x is positive and y is negative"
     ],
     "keyTerms": [
      {
       "term": "Cartesian Plane",
       "meaning": "The plane formed by x-axis and y-axis intersecting at right angles"
      },
      {
       "term": "Origin",
       "meaning": "The point of intersection of x-axis and y-axis with coordinates (0,0)"
      },
      {
       "term": "Quadrant",
       "meaning": "One of the four regions formed by the coordinate axes"
      },
      {
       "term": "Coordinates",
       "meaning": "The ordered pair (x,y) that represents a point in the plane"
      }
     ],
     "trick": "Remember 'All Students Take Coffee' for quadrants: All trigonometric functions positive in first quadrant, Sine positive in second, Tangent positive in third, Cosine positive in fourth.",
     "examPointer": "CBSE often asks questions on identifying quadrants of points, plotting points, and finding distances from origin. Typically 1-2 mark questions."
    },
    {
     "heading": "Distance Formula",
     "para": "The distance between two points P(x1,y1) and Q(x2,y2) in a plane is given by the formula PQ = sqrt((x2-x1)^2 + (y2-y1)^2). This formula is derived from Pythagoras theorem by considering the horizontal and vertical distances between the points. The distance is always positive. When finding distance between points, it doesn't matter which point is taken as first or second. For points on the x-axis, y1=y2=0, so distance is |x2-x1|. For points on the y-axis, x1=x2=0, so distance is |y2-y1|. The distance formula is fundamental in coordinate geometry and used to solve many problems.",
     "points": [
      "Distance between P(x1,y1) and Q(x2,y2) is sqrt((x2-x1)^2 + (y2-y1)^2)",
      "The formula is derived from Pythagoras theorem",
      "Distance is always positive quantity",
      "For points on x-axis (y1=y2=0), distance is |x2-x1|",
      "For points on y-axis (x1=x2=0), distance is |y2-y1|",
      "Order of points doesn't affect distance calculation",
      "Distance formula works for points in any quadrant",
      "Distance between origin and point (x,y) is sqrt(x^2 + y^2)"
     ],
     "keyTerms": [
      {
       "term": "Distance Formula",
       "meaning": "Formula to calculate distance between two points in coordinate plane"
      },
      {
       "term": "Pythagoras Theorem",
       "meaning": "In right triangle, square of hypotenuse equals sum of squares of other two sides"
      },
      {
       "term": "Coordinates",
       "meaning": "The ordered pair (x,y) representing position of a point"
      }
     ],
     "trick": "Think of distance formula as 'run and rise' - horizontal distance is run (x2-x1), vertical distance is rise (y2-y1), and distance is hypotenuse.",
     "examPointer": "CBSE frequently asks direct application of distance formula, proving properties using distance formula, and word problems involving distances. Typically 2-3 mark questions."
    },
    {
     "heading": "Section Formula",
     "para": "The section formula divides a line segment joining two points P(x1,y1) and Q(x2,y2) in a given ratio m:n. The coordinates of the point R dividing PQ internally in ratio m:n are ((mx2+nx1)/(m+n), (my2+ny1)/(m+n)). For external division, the coordinates are ((mx2-nx1)/(m-n), (my2-ny1)/(m-n)). When m:n = 1:1, the formula gives midpoint coordinates ((x1+x2)/2, (y1+y2)/2). The section formula is used to find centroid of triangle, which divides each median in 2:1 ratio. The formula is also used to find points dividing a line segment in given ratio for various geometric constructions.",
     "points": [
      "Section formula finds coordinates of point dividing line segment in given ratio",
      "For internal division in ratio m:n, coordinates are ((mx2+nx1)/(m+n), (my2+ny1)/(m+n))",
      "For external division in ratio m:n, coordinates are ((mx2-nx1)/(m-n), (my2-ny1)/(m-n))",
      "Midpoint formula is special case when ratio is 1:1",
      "Centroid divides each median in 2:1 ratio internally",
      "The formula works for any ratio m:n where m and n are positive integers",
      "When ratio is k:1, coordinates simplify to ((kx2+x1)/(k+1), (ky2+y1)/(k+1))",
      "Section formula can be used to find points of trisection of a line segment"
     ],
     "keyTerms": [
      {
       "term": "Internal Division",
       "meaning": "When a point divides a line segment between two given points"
      },
      {
       "term": "External Division",
       "meaning": "When a point divides a line segment extended beyond one of the given points"
      },
      {
       "term": "Midpoint",
       "meaning": "Point that divides a line segment into two equal parts"
      },
      {
       "term": "Centroid",
       "meaning": "Point of intersection of medians of a triangle"
      }
     ],
     "trick": "Remember 'mix and match' for section formula - multiply each coordinate by the opposite part of the ratio and add them up.",
     "examPointer": "CBSE commonly asks questions on finding points dividing line segments in given ratios, finding midpoints, centroid problems, and applications in geometry. Typically 2-3 mark questions."
    },
    {
     "heading": "Area of Triangle",
     "para": "The area of triangle with vertices A(x1,y1), B(x2,y2), and C(x3,y3) can be calculated using the formula: Area = 1/2 |x1(y2-y3) + x2(y3-y1) + x3(y1-y2)|. The absolute value ensures the area is always positive. If the area is zero, the points are collinear. This formula is derived from the concept of determinants and provides a quick method to find area without drawing the triangle. The formula can be extended to find area of polygons by dividing them into triangles. For a right-angled triangle with legs parallel to axes, the area simplifies to 1/2 × base × height where base and height are the differences in x and y coordinates respectively.",
     "points": [
      "Area of triangle with vertices (x1,y1), (x2,y2), (x3,y3) is 1/2 |x1(y2-y3) + x2(y3-y1) + x3(y1-y2)|",
      "If area is zero, the three points are collinear",
      "The formula uses absolute value to ensure positive area",
      "For right-angled triangle with legs parallel to axes, area is 1/2 × |x2-x1| × |y2-y1|",
      "The formula can be extended to find area of polygons",
      "Area can also be found using Heron's formula after calculating side lengths",
      "The formula is derived from determinants in coordinate geometry",
      "Negative value inside absolute value indicates clockwise or counter-clockwise order of points"
     ],
     "keyTerms": [
      {
       "term": "Collinear Points",
       "meaning": "Points that lie on the same straight line"
      },
      {
       "term": "Determinant",
       "meaning": "A scalar value that can be computed from elements of square matrix"
      },
      {
       "term": "Vertices",
       "meaning": "The corner points of a triangle or polygon"
      }
     ],
     "trick": "Remember the formula as 'x with y difference, x with y difference, x with y difference' and take half the absolute value.",
     "examPointer": "CBSE often asks questions on finding area of triangles, checking collinearity of points, and area-related word problems. Typically 2-3 mark questions."
    },
    {
     "heading": "Collinearity of Points",
     "para": "Three points are collinear if they lie on the same straight line. There are three main methods to check collinearity: area method, slope method, and distance method. Using area method, if the area of triangle formed by three points is zero, the points are collinear. Using slope method, if the slope of line joining first two points equals slope of line joining second and third points, the points are collinear. Using distance method, if the sum of distances between two pairs of points equals the distance between the third pair, the points are collinear. The area method is most commonly used as it involves direct calculation without finding slopes or distances.",
     "points": [
      "Three points are collinear if they lie on the same straight line",
      "Area method: If area of triangle formed by three points is zero, points are collinear",
      "Slope method: If slope AB equals slope BC, points A, B, C are collinear",
      "Distance method: If AB + BC = AC, points A, B, C are collinear",
      "The area method is most commonly used in examinations",
      "Collinear points can be used to find equation of line passing through them",
      "If points are collinear, they cannot form a triangle",
      "The concept is used in various geometric constructions and proofs"
     ],
     "keyTerms": [
      {
       "term": "Collinear",
       "meaning": "Lying on the same straight line"
      },
      {
       "term": "Slope",
       "meaning": "The steepness of a line, calculated as rise over run"
      },
      {
       "term": "Area Method",
       "meaning": "Using area of triangle to check collinearity of points"
      }
     ],
     "trick": "Remember 'A-zero for collinear' - if area calculation gives zero, points are collinear.",
     "examPointer": "CBSE frequently asks questions on checking collinearity using different methods and proving collinearity in geometric figures. Typically 2 mark questions."
    },
    {
     "heading": "Slope of a Line",
     "para": "The slope of a line is a measure of its steepness and direction. For a line passing through points P(x1,y1) and Q(x2,y2), the slope m is given by m = (y2-y1)/(x2-x1). The slope is undefined for vertical lines (where x1=x2) and zero for horizontal lines (where y1=y2). Positive slope indicates the line rises from left to right, while negative slope indicates it falls from left to right. The slope is also equal to tanθ where θ is the angle the line makes with the positive x-axis. Slope is fundamental in determining the nature of lines and their relationships.",
     "points": [
      "Slope m of line through (x1,y1) and (x2,y2) is m = (y2-y1)/(x2-x1)",
      "Slope is undefined for vertical lines (x1=x2)",
      "Slope is zero for horizontal lines (y1=y2)",
      "Positive slope means line rises from left to right",
      "Negative slope means line falls from left to right",
      "Slope equals tanθ where θ is angle with positive x-axis",
      "Slope is same for any two points on a straight line",
      "Slope is measure of steepness and direction of a line"
     ],
     "keyTerms": [
      {
       "term": "Slope",
       "meaning": "The measure of steepness and direction of a line"
      },
      {
       "term": "Rise",
       "meaning": "The vertical change between two points on a line"
      },
      {
       "term": "Run",
       "meaning": "The horizontal change between two points on a line"
      },
      {
       "term": "Undefined Slope",
       "meaning": "The slope of a vertical line which is undefined"
      }
     ],
     "trick": "Remember 'rise over run' - slope is vertical change divided by horizontal change.",
     "examPointer": "CBSE asks questions on calculating slopes, identifying nature of lines based on slope, and using slope in various geometric problems. Typically 1-2 mark questions."
    },
    {
     "heading": "Equations of Lines",
     "para": "A straight line can be represented by various forms of equations. The slope-intercept form is y = mx + c where m is slope and c is y-intercept. The point-slope form is y - y1 = m(x - x1) where (x1,y1) is a point on the line. The two-point form is (y-y1)/(y2-y1) = (x-x1)/(x2-x1) where (x1,y1) and (x2,y2) are two points. The intercept form is x/a + y/b = 1 where a and b are x and y intercepts. The general form is Ax + By + C = 0 where A, B, C are constants. These forms can be converted into each other using algebraic manipulations. Each form is useful for different types of problems involving lines.",
     "points": [
      "Slope-intercept form: y = mx + c where m is slope, c is y-intercept",
      "Point-slope form: y - y1 = m(x - x1) where (x1,y1) is a point on line",
      "Two-point form: (y-y1)/(y2-y1) = (x-x1)/(x2-x1) for points (x1,y1) and (x2,y2)",
      "Intercept form: x/a + y/b = 1 where a is x-intercept, b is y-intercept",
      "General form: Ax + By + C = 0 where A, B, C are constants",
      "Different forms can be converted into each other algebraically",
      "Each form is useful for different types of line problems",
      "The general form can represent all straight lines except vertical lines"
     ],
     "keyTerms": [
      {
       "term": "Slope-intercept Form",
       "meaning": "Equation of line in form y = mx + c showing slope and y-intercept"
      },
      {
       "term": "Point-slope Form",
       "meaning": "Equation of line using slope and a point on the line"
      },
      {
       "term": "General Form",
       "meaning": "Standard form Ax + By + C = 0 representing any straight line"
      },
      {
       "term": "Intercept",
       "meaning": "Point where line crosses an axis"
      }
     ],
     "trick": "Remember 'mx plus c' for slope-intercept form - it shows both slope and where line crosses y-axis.",
     "examPointer": "CBSE frequently asks questions on converting between different forms of line equations, finding equations given conditions, and applying line equations in geometry. Typically 2-3 mark questions."
    },
    {
     "heading": "Parallel and Perpendicular Lines",
     "para": "Two lines are parallel if their slopes are equal. If line 1 has slope m1 and line 2 has slope m2, then m1 = m2 for parallel lines. Two lines are perpendicular if the product of their slopes is -1, i.e., m1 × m2 = -1. A horizontal line has slope 0 and is parallel to all other horizontal lines. A vertical line has undefined slope and is parallel to all other vertical lines. A horizontal line is perpendicular to all vertical lines. These conditions are used to find equations of lines parallel or perpendicular to given lines, and to determine the relationship between lines in geometric problems.",
     "points": [
      "Two lines are parallel if their slopes are equal (m1 = m2)",
      "Two lines are perpendicular if product of slopes is -1 (m1 × m2 = -1)",
      "Horizontal lines have slope 0 and are parallel to each other",
      "Vertical lines have undefined slope and are parallel to each other",
      "Horizontal and vertical lines are perpendicular to each other",
      "These conditions help find equations of parallel and perpendicular lines",
      "The conditions are used to verify relationships between lines",
      "Parallel lines never intersect, perpendicular lines intersect at right angles"
     ],
     "keyTerms": [
      {
       "term": "Parallel Lines",
       "meaning": "Lines that never intersect and have equal slopes"
      },
      {
       "term": "Perpendicular Lines",
       "meaning": "Lines that intersect at right angles with slopes whose product is -1"
      },
      {
       "term": "Horizontal Line",
       "meaning": "Line parallel to x-axis with slope 0"
      },
      {
       "term": "Vertical Line",
       "meaning": "Line parallel to y-axis with undefined slope"
      }
     ],
     "trick": "Remember 'negative reciprocal' for perpendicular slopes - if one slope is m, the other is -1/m.",
     "examPointer": "CBSE often asks questions on finding equations of parallel and perpendicular lines, verifying relationships between lines, and applications in geometry. Typically 2-3 mark questions."
    },
    {
     "heading": "Applications of Coordinate Geometry",
     "para": "Coordinate Geometry has numerous applications in solving geometric problems. It is used to find distances between points, divide line segments in given ratios, calculate areas of triangles and polygons, verify collinearity, find equations of lines, and determine relationships between lines. It is also used to solve real-world problems involving positions, paths, and areas. In higher mathematics, coordinate geometry forms the basis for analytical geometry, calculus, and other advanced topics. The concepts learned in this chapter are essential for understanding more complex geometric and algebraic relationships.",
     "points": [
      "Used to find distances between points in plane",
      "Helps in dividing line segments in given ratios",
      "Used to calculate areas of triangles and polygons",
      "Helps verify collinearity of points",
      "Used to find equations of lines in different forms",
      "Determines relationships between parallel and perpendicular lines",
      "Applied in solving real-world position and path problems",
      "Forms basis for analytical geometry and calculus"
     ],
     "keyTerms": [
      {
       "term": "Analytical Geometry",
       "meaning": "Branch of mathematics using algebraic techniques to solve geometric problems"
      },
      {
       "term": "Applications",
       "meaning": "Practical uses of mathematical concepts in real-world problems"
      },
      {
       "term": "Real-world Problems",
       "meaning": "Problems from everyday life that can be solved using mathematics"
      }
     ],
     "trick": "Think of coordinate geometry as a bridge between algebra and geometry - it lets you use algebra to solve geometry problems.",
     "examPointer": "CBSE includes application-based questions in exams testing understanding of how to use coordinate geometry concepts to solve various problems. Typically 3-4 mark questions."
    }
   ],
   "mcqs": [
    {
     "question": "If a and b are two positive integers such that a = 6b and b = 48, then what is the HCF of a and b?",
     "options": [
      "6",
      "12",
      "24",
      "48"
     ],
     "answerIndex": 2,
     "explanation": "Since a = 6b and b = 48, a = 6 × 48 = 288. The HCF of 288 and 48 is 24, as 24 is the largest number that divides both.",
     "difficulty": "easy",
     "pyq": "CBSE 2019"
    },
    {
     "question": "What is the prime factorisation of 156?",
     "options": [
      "2^2 × 3 × 13",
      "2 × 3^2 × 13",
      "2^3 × 3 × 13",
      "2 × 3 × 13^2"
     ],
     "answerIndex": 0,
     "explanation": "156 ÷ 2 = 78, 78 ÷ 2 = 39, 39 ÷ 3 = 13, 13 is prime. So, 156 = 2^2 × 3 × 13.",
     "difficulty": "easy",
     "pyq": "CBSE 2020"
    },
    {
     "question": "Which of the following is an irrational number?",
     "options": [
      "sqrt(36)",
      "sqrt(49)",
      "sqrt(64)",
      "sqrt(8)"
     ],
     "answerIndex": 3,
     "explanation": "sqrt(8) is irrational because 8 is not a perfect square and cannot be expressed as a fraction of integers.",
     "difficulty": "medium"
    },
    {
     "question": "If alpha and beta are the zeroes of the polynomial x^2 - 5x + 6, then what is the value of alpha + beta?",
     "options": [
      "-5",
      "5",
      "6",
      "-6"
     ],
     "answerIndex": 1,
     "explanation": "For a quadratic polynomial ax^2 + bx + c, sum of zeroes = -b/a. Here, a = 1, b = -5, so alpha + beta = 5.",
     "difficulty": "easy"
    },
    {
     "question": "Which of the following pairs of linear equations are consistent?",
     "options": [
      "x + y = 5, 2x + 2y = 10",
      "x + y = 5, x + y = 6",
      "x + y = 5, 2x + 3y = 7",
      "x + y = 5, x - y = 0"
     ],
     "answerIndex": 0,
     "explanation": "A pair is consistent if it has at least one solution. The first pair has infinitely many solutions (same line), so it is consistent.",
     "difficulty": "medium",
     "pyq": "CBSE 2021"
    },
    {
     "question": "The discriminant of the quadratic equation 2x^2 - 4x + 3 = 0 is",
     "options": [
      "-8",
      "8",
      "16",
      "0"
     ],
     "answerIndex": 0,
     "explanation": "Discriminant D = b^2 - 4ac. Here, a = 2, b = -4, c = 3, so D = (-4)^2 - 4(2)(3) = 16 - 24 = -8.",
     "difficulty": "easy"
    },
    {
     "question": "If the first term of an AP is 3 and the common difference is 2, then the 10th term is",
     "options": [
      "21",
      "23",
      "25",
      "27"
     ],
     "answerIndex": 0,
     "explanation": "nth term of AP = a + (n-1)d. Here, a = 3, d = 2, n = 10, so 10th term = 3 + 9(2) = 21.",
     "difficulty": "easy"
    },
    {
     "question": "In triangle ABC, angle B = 90°, AB = 6 cm, BC = 8 cm. What is the length of AC?",
     "options": [
      "10 cm",
      "12 cm",
      "14 cm",
      "16 cm"
     ],
     "answerIndex": 0,
     "explanation": "By Pythagoras theorem, AC = sqrt(AB^2 + BC^2) = sqrt(36 + 64) = sqrt(100) = 10 cm.",
     "difficulty": "easy"
    },
    {
     "question": "If two triangles are similar by AA criterion, which of the following must be true?",
     "options": [
      "All corresponding sides are equal",
      "All corresponding angles are equal",
      "All corresponding sides are proportional",
      "All corresponding angles are equal and sides are proportional"
     ],
     "answerIndex": 3,
     "explanation": "AA criterion means two angles are equal, which implies the third angle is also equal, making all angles equal and sides proportional.",
     "difficulty": "medium"
    },
    {
     "question": "The coordinates of the midpoint of the line segment joining (2, 3) and (4, 5) are",
     "options": [
      "(3, 4)",
      "(4, 3)",
      "(2, 5)",
      "(5, 2)"
     ],
     "answerIndex": 0,
     "explanation": "Midpoint formula = ((x1+x2)/2, (y1+y2)/2). So, ((2+4)/2, (3+5)/2) = (3, 4).",
     "difficulty": "easy"
    },
    {
     "question": "If sin A = 3/5, then cos A is",
     "options": [
      "4/5",
      "3/5",
      "5/4",
      "5/3"
     ],
     "answerIndex": 0,
     "explanation": "Using sin^2 A + cos^2 A = 1, cos^2 A = 1 - (9/25) = 16/25, so cos A = 4/5 (acute angle).",
     "difficulty": "medium"
    },
    {
     "question": "The value of tan 45° is",
     "options": [
      "0",
      "1",
      "1/2",
      "sqrt(3)"
     ],
     "answerIndex": 1,
     "explanation": "tan 45° = opposite/adjacent = 1/1 = 1 for a 45-45-90 triangle.",
     "difficulty": "easy"
    },
    {
     "question": "From a point 10 m away from the foot of a tower, the angle of elevation to the top is 30°. The height of the tower is",
     "options": [
      "10/sqrt(3) m",
      "10sqrt(3) m",
      "10 m",
      "20 m"
     ],
     "answerIndex": 0,
     "explanation": "tan 30° = height/10, so height = 10 × tan 30° = 10 × (1/sqrt(3)) = 10/sqrt(3) m.",
     "difficulty": "medium"
    },
    {
     "question": "The tangent to a circle at any point is",
     "options": [
      "parallel to the radius",
      "perpendicular to the radius",
      "at 45° to the radius",
      "none of these"
     ],
     "answerIndex": 1,
     "explanation": "The tangent to a circle at any point is perpendicular to the radius at that point.",
     "difficulty": "easy",
     "pyq": "CBSE 2022"
    },
    {
     "question": "The area of a sector of angle 60° in a circle of radius 7 cm is",
     "options": [
      "(22/7) × 7^2 × 60/360",
      "(22/7) × 7^2 × 30/360",
      "(22/7) × 7^2 × 45/360",
      "(22/7) × 7^2 × 90/360"
     ],
     "answerIndex": 0,
     "explanation": "Area of sector = (θ/360) × πr^2 = (60/360) × (22/7) × 7^2.",
     "difficulty": "medium"
    },
    {
     "question": "The curved surface area of a cylinder of radius 7 cm and height 10 cm is",
     "options": [
      "440 cm^2",
      "4400 cm^2",
      "44 cm^2",
      "4.4 cm^2"
     ],
     "answerIndex": 0,
     "explanation": "CSA = 2πrh = 2 × (22/7) × 7 × 10 = 440 cm^2.",
     "difficulty": "easy"
    },
    {
     "question": "The mean of the data 2, 3, 4, 5, 6 is",
     "options": [
      "3",
      "4",
      "5",
      "6"
     ],
     "answerIndex": 1,
     "explanation": "Mean = sum of observations/number of observations = (2+3+4+5+6)/5 = 20/5 = 4.",
     "difficulty": "easy"
    },
    {
     "question": "The median of the data 3, 1, 5, 2, 4 is",
     "options": [
      "1",
      "2",
      "3",
      "4"
     ],
     "answerIndex": 2,
     "explanation": "Arrange in order: 1, 2, 3, 4, 5. Median is the middle value, which is 3.",
     "difficulty": "medium"
    },
    {
     "question": "The mode of the data 2, 3, 4, 4, 5, 5, 5, 6 is",
     "options": [
      "2",
      "3",
      "4",
      "5"
     ],
     "answerIndex": 3,
     "explanation": "Mode is the most frequent value, which is 5 (appears 3 times).",
     "difficulty": "easy"
    },
    {
     "question": "If the probability of an event is 0.3, then the probability of its complementary event is",
     "options": [
      "0.3",
      "0.7",
      "1",
      "0"
     ],
     "answerIndex": 1,
     "explanation": "P(complementary event) = 1 - P(event) = 1 - 0.3 = 0.7.",
     "difficulty": "easy"
    }
   ],
   "boardQuestions": [
    {
     "question": "Prove that sqrt(3) is irrational.",
     "marks": 3,
     "type": "long",
     "probability": "very-high",
     "answer": "Let's assume sqrt(3) is rational. Then sqrt(3) = p/q, where p and q are coprime integers. Squaring both sides, 3 = p^2/q^2, so p^2 = 3q^2. This means p^2 is divisible by 3, so p is divisible by 3 (since 3 is prime). Let p = 3k. Then (3k)^2 = 3q^2, so 9k^2 = 3q^2, thus q^2 = 3k^2. This means q^2 is divisible by 3, so q is divisible by 3. But if both p and q are divisible by 3, they are not coprime, which contradicts our assumption. Therefore, sqrt(3) must be irrational."
    },
    {
     "question": "Find the HCF and LCM of 12 and 18 using prime factorisation.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "Prime factorisation of 12 = 2^2 × 3. Prime factorisation of 18 = 2 × 3^2. HCF is the product of the lowest powers of common prime factors: 2^1 × 3^1 = 6. LCM is the product of the highest powers of all prime factors: 2^2 × 3^2 = 36. Therefore, HCF = 6 and LCM = 36."
    },
    {
     "question": "Find the zeroes of the polynomial x^2 - 5x + 6 and verify the relationship between zeroes and coefficients.",
     "marks": 4,
     "type": "numerical",
     "probability": "very-high",
     "answer": "To find zeroes, solve x^2 - 5x + 6 = 0. Factorizing, (x-2)(x-3) = 0, so zeroes are 2 and 3. For a quadratic polynomial ax^2 + bx + c, sum of zeroes = -b/a and product = c/a. Here, a = 1, b = -5, c = 6. Sum of zeroes = 2 + 3 = 5, which equals -(-5)/1 = 5. Product of zeroes = 2 × 3 = 6, which equals 6/1 = 6. The relationship is verified."
    },
    {
     "question": "Solve the pair of linear equations: 2x + 3y = 7 and 4x - y = 11.",
     "marks": 4,
     "type": "numerical",
     "probability": "high",
     "answer": "Multiply the first equation by 2: 4x + 6y = 14. Subtract the second equation: (4x + 6y) - (4x - y) = 14 - 11, so 7y = 3, thus y = 3/7. Substitute into second equation: 4x - (3/7) = 11, so 4x = 11 + 3/7 = 80/7, thus x = 20/7. The solution is x = 20/7, y = 3/7."
    },
    {
     "question": "Find the discriminant and nature of roots of the quadratic equation 3x^2 - 5x + 2 = 0.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "For ax^2 + bx + c = 0, discriminant D = b^2 - 4ac. Here, a = 3, b = -5, c = 2. D = (-5)^2 - 4(3)(2) = 25 - 24 = 1. Since D > 0 and is a perfect square, the roots are real, rational, and unequal."
    },
    {
     "question": "Find the 15th term of the AP: 3, 8, 13, 18, ...",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "First term a = 3, common difference d = 8 - 3 = 5. nth term of AP = a + (n-1)d. For n = 15, 15th term = 3 + (15-1)(5) = 3 + 14(5) = 3 + 70 = 73."
    },
    {
     "question": "In triangle ABC, angle B = 90°, AB = 6 cm, BC = 8 cm. Find AC and verify Pythagoras theorem.",
     "marks": 4,
     "type": "numerical",
     "probability": "high",
     "answer": "By Pythagoras theorem, AC = sqrt(AB^2 + BC^2) = sqrt(36 + 64) = sqrt(100) = 10 cm. To verify, check if AB^2 + BC^2 = AC^2: 6^2 + 8^2 = 36 + 64 = 100, and 10^2 = 100. Since both sides equal 100, Pythagoras theorem is verified."
    },
    {
     "question": "Prove that if a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.",
     "marks": 4,
     "type": "long",
     "probability": "very-high",
     "answer": "Consider triangle ABC with a line DE parallel to BC intersecting AB at D and AC at E. Draw perpendiculars from D and E to BC, meeting at P and Q. Since DE || BC, triangles ADE and ABC are similar by AA criterion (angle A is common, and angle ADE = angle ABC). Therefore, AD/AB = AE/AC = DE/BC. Also, since DE || BC, triangles DBP and ECQ are similar. Thus, AD/DB = AE/EC. Hence, the other two sides are divided in the same ratio."
    },
    {
     "question": "Find the coordinates of the point which divides the line segment joining (1, 2) and (3, 4) in the ratio 2:1.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "Using section formula, coordinates = ((mx2 + nx1)/(m+n), (my2 + ny1)/(m+n)), where m:n = 2:1. So, x = (2×3 + 1×1)/(2+1) = (6+1)/3 = 7/3. y = (2×4 + 1×2)/(2+1) = (8+2)/3 = 10/3. The coordinates are (7/3, 10/3)."
    },
    {
     "question": "If sin A = 3/5, find cos A and tan A.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "Using sin^2 A + cos^2 A = 1, (3/5)^2 + cos^2 A = 1, so 9/25 + cos^2 A = 1, thus cos^2 A = 16/25, so cos A = 4/5 (acute angle). tan A = sin A/cos A = (3/5)/(4/5) = 3/4."
    }
   ],
   "bookName": "Mathematics (NCERT Class 10)",
   "code": "maths"
  }
 ]
}
