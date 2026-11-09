export default {
  "code": "maths",
  "name": "Mathematics",
  "bookName": "NCERT Mathematics",
  "weightageMarks": 80,
  "chapters": [
    {
      "number": 8,
      "title": "Introduction to Trigonometry",
      "summary": "This chapter introduces trigonometry, the branch of mathematics that studies relationships between the angles and sides of a right triangle. It defines the six trigonometric ratios sin, cos, tan, cosec, sec and cot as fixed ratios of the sides, and derives their exact values for the standard angles 0, 30, 45, 60 and 90 degrees. It then establishes the three fundamental identities sin^2 A + cos^2 A = 1, 1 + tan^2 A = sec^2 A and 1 + cot^2 A = cosec^2 A, along with the ratios of complementary angles. The main skills are evaluating expressions from the standard table and proving identities step by step.",
      "weightageMarks": 8,
      "difficulty": "medium",
      "hotTopics": [
        "Trigonometric ratios of a right triangle",
        "Values of ratios for 0, 30, 45, 60, 90 degrees",
        "Trigonometric identities and their proofs",
        "Ratios of complementary angles",
        "Finding all ratios from one given ratio",
        "Evaluating expressions using the standard table"
      ],
      "sections": [
        {
          "heading": "Trigonometric Ratios: Definitions",
          "points": [
            "Trigonometry literally means measuring three angles; it deals with relationships between the angles and sides of triangles, and in this chapter only right triangles are used.",
            "In a right triangle ABC right angled at B, for the acute angle A the side opposite to A is called the perpendicular, the side next to A (other than the hypotenuse) is called the base, and AC, the side opposite the right angle, is the hypotenuse.",
            "The three primary ratios are sin A = perpendicular/hypotenuse, cos A = base/hypotenuse and tan A = perpendicular/base.",
            "The reciprocal ratios are cosec A = 1/sin A = hypotenuse/perpendicular, sec A = 1/cos A = hypotenuse/base and cot A = 1/tan A = base/perpendicular = cos A/sin A.",
            "The values of the ratios depend only on the angle, not on the size of the triangle, because all right triangles having the same acute angle are similar.",
            "sin A is a single symbol meaning sine of angle A; it never means sin multiplied by A.",
            "Mnemonic SOH CAH TOA: Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent."
          ],
          "keyTerms": [
            { "term": "Perpendicular", "meaning": "The side opposite the reference acute angle in a right triangle; also called the opposite side." },
            { "term": "Base", "meaning": "The side adjacent to the reference acute angle, other than the hypotenuse; also called the adjacent side." },
            { "term": "Hypotenuse", "meaning": "The longest side of a right triangle, opposite the right angle." },
            { "term": "Trigonometric ratios", "meaning": "The six fixed ratios sin, cos, tan, cosec, sec and cot of the sides of a right triangle for a given acute angle." }
          ],
          "trick": "SOH CAH TOA: Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent; reciprocals flip each ratio upside down.",
          "examPointer": "Defining the six ratios from a labelled right triangle and explaining why they are independent of the size of the triangle is a regular 2-3 marker."
        },
        {
          "heading": "Trigonometric Ratios of 0, 30, 45, 60 and 90 Degrees",
          "points": [
            "For 45 degrees take an isosceles right triangle with equal legs 1 unit; the hypotenuse is sqrt(2), so sin 45 = cos 45 = 1/sqrt(2) = sqrt(2)/2 and tan 45 = 1.",
            "For 30 and 60 degrees take an equilateral triangle of side 2 and drop an altitude; it splits into two right triangles with sides 1, sqrt(3) and 2.",
            "Exact values: sin 30 = 1/2, cos 30 = sqrt(3)/2, tan 30 = 1/sqrt(3); sin 60 = sqrt(3)/2, cos 60 = 1/2, tan 60 = sqrt(3).",
            "At the ends: sin 0 = 0, cos 0 = 1, tan 0 = 0; sin 90 = 1, cos 90 = 0, and tan 90 is not defined because cos 90 = 0 occurs in the denominator.",
            "Reciprocal examples: cosec 30 = 2, sec 60 = 2, cot 45 = 1, cosec 90 = 1, cot 90 = 0, sec 0 = 1.",
            "Memory trick: sin goes 0, 1/2, 1/sqrt(2), sqrt(3)/2, 1 for angles 0, 30, 45, 60, 90, which is sqrt(0)/2, sqrt(1)/2, sqrt(2)/2, sqrt(3)/2, sqrt(4)/2; cos is the same list read backwards and tan = sin/cos.",
            "In board answers write exact values like 1/2 and sqrt(3)/2, and rationalise 1/sqrt(2) to sqrt(2)/2 and 1/sqrt(3) to sqrt(3)/3 where a rationalised form is expected."
          ],
          "keyTerms": [
            { "term": "Standard angles", "meaning": "The angles 0, 30, 45, 60 and 90 degrees whose exact ratio values must be memorised." },
            { "term": "Reciprocal ratios", "meaning": "cosec, sec and cot, obtained by inverting sin, cos and tan respectively." },
            { "term": "Rationalisation", "meaning": "Removing a surd from the denominator, for example writing sqrt(3)/3 instead of 1/sqrt(3)." }
          ],
          "trick": "The sine table is sqrt(0), sqrt(1), sqrt(2), sqrt(3), sqrt(4) all over 2 as the angle walks from 0 to 90 degrees; cos is the same table in reverse.",
          "examPointer": "One evaluation question using this table appears in almost every paper; the values for 30, 45 and 60 degrees must be instant recall."
        },
        {
          "heading": "Trigonometric Identities",
          "points": [
            "An identity is an equation involving trigonometric ratios that is true for every value of the angle for which both sides are defined.",
            "First identity: sin^2 A + cos^2 A = 1. From Pythagoras, AB^2 + BC^2 = AC^2 in right triangle ABC; dividing throughout by AC^2 gives (BC/AC)^2 + (AB/AC)^2 = 1, that is sin^2 A + cos^2 A = 1.",
            "Second identity: 1 + tan^2 A = sec^2 A; divide the same Pythagoras statement by AB^2, the base squared. It holds for all A except 90 degrees, where tan and sec are not defined.",
            "Third identity: 1 + cot^2 A = cosec^2 A; divide the Pythagoras statement by BC^2, the perpendicular squared. It holds for all A except 0 degrees.",
            "Useful rearrangements: sin^2 A = 1 - cos^2 A, sec^2 A - tan^2 A = 1, cosec^2 A - cot^2 A = 1 and cosec^2 A - 1 = cot^2 A.",
            "Notation: sin^2 A means (sin A)^2; the square applies to the value of the ratio.",
            "To prove an identity, start from the more complicated side, convert everything into sin and cos, apply one of the three identities, and stop when both sides become the same expression."
          ],
          "keyTerms": [
            { "term": "Identity", "meaning": "An equation that holds for every admissible value of the angle, unlike an equation to be solved." },
            { "term": "Pythagoras theorem", "meaning": "In a right triangle, hypotenuse squared equals the sum of the squares of the other two sides; the source of all three identities." },
            { "term": "LHS and RHS", "meaning": "Left hand side and right hand side of the identity, which must be reduced to a common expression." }
          ],
          "trick": "One triangle, three identities: divide Pythagoras by hypotenuse^2 for the sin-cos pair, by base^2 for the tan-sec pair and by perpendicular^2 for the cot-cosec pair.",
          "examPointer": "Proving an identity is a guaranteed 3 marker; marks are given for converting to sin and cos and for naming the identity used at each step."
        },
        {
          "heading": "Ratios of Complementary Angles",
          "points": [
            "Two angles are complementary when their sum is 90 degrees; in every right triangle the two acute angles are complementary.",
            "Complement pairs: sin (90 - A) = cos A and cos (90 - A) = sin A; tan (90 - A) = cot A and cot (90 - A) = tan A; sec (90 - A) = cosec A and cosec (90 - A) = sec A.",
            "Reason: for the complementary angle (90 - A) in the same right triangle, the perpendicular and base swap roles, so each ratio changes to its partner ratio.",
            "Examples: sin 30 = cos 60, sin 25 = cos 65, tan 60 = cot 30, sec 48 = cosec 42.",
            "Quick evaluation: sin 20 cos 70 + cos 20 sin 70 = cos 70 cos 70 + sin 70 sin 70 = cos^2 70 + sin^2 70 = 1, after replacing sin 20 by cos 70 and cos 20 by sin 70.",
            "Product chains: in tan 1 x tan 2 x ... x tan 89, pair tan k with tan (90 - k) = cot k; each pair multiplies to 1, so the whole product is 1.",
            "Warning: sin (90 - A) is not sin 90 minus sin A; the bracket is part of the symbol, so convert the whole angle first."
          ],
          "keyTerms": [
            { "term": "Complementary angles", "meaning": "A pair of angles whose sum is 90 degrees." },
            { "term": "Cotangent", "meaning": "The reciprocal of tangent, cot A = cos A/sin A; partner of tan under complementing." },
            { "term": "Complement swap", "meaning": "The rule that subtracting an angle from 90 degrees swaps sin with cos, tan with cot and sec with cosec." }
          ],
          "trick": "Subtract from 90 and swap partners: sin-cos, tan-cot, sec-cosec change seats; nothing else changes.",
          "examPointer": "MCQs like evaluate tan 1 tan 2 ... tan 89, or find A when sin (A + 20) = cos (A - 10) (answer A = 40, since 2A + 10 = 90), are repeated year after year."
        },
        {
          "heading": "Worked Strategy: Finding Ratios and Proving Identities",
          "points": [
            "To find all ratios from one, sketch the triangle: if tan A = 3/4, take perpendicular 3 and base 4, so hypotenuse = sqrt(9 + 16) = 5; then sin A = 3/5, cos A = 4/5, cosec A = 5/3, sec A = 5/4 and cot A = 4/3.",
            "If sin A = 1/2 then A = 30 degrees, so tan A = 1/sqrt(3) and sec A = 2/sqrt(3) = 2 sqrt(3)/3; recognising the standard angle is often faster than drawing the triangle.",
            "To evaluate a mixed expression, substitute exact table values first and then simplify with a common denominator: 5 sin^2 30 + cos^2 45 - 4 tan^2 30 = 5/4 + 1/2 - 4/3 = (15 + 6 - 16)/12 = 5/12.",
            "In proofs, rewrite every ratio into sin and cos before anything else: sec A (1 - sin A)(sec A + tan A) = (1 - sin A)(1 + sin A)/cos^2 A = (1 - sin^2 A)/cos^2 A = cos^2 A/cos^2 A = 1.",
            "To prove X = Y when direct reduction stalls, show X - Y = 0, or reduce both sides separately to the same simplest expression.",
            "Keep surds till the last step and rationalise only at the end: write 1/sqrt(3) during working and sqrt(3)/3 in the final answer if needed.",
            "Check a proof by substituting A = 30 or 45 degrees numerically; if both sides give the same number, the algebra is almost surely correct."
          ],
          "keyTerms": [
            { "term": "Pythagorean triple", "meaning": "A set like 3, 4, 5 or 5, 12, 13 that forms the sides of a right triangle, used to read off ratios instantly." },
            { "term": "Rationalisation", "meaning": "Multiplying numerator and denominator by the conjugate surd to remove the surd from the denominator." },
            { "term": "Verification", "meaning": "Substituting a standard angle numerically to confirm an identity before submitting the proof." }
          ],
          "trick": "One ratio paints the whole triangle: pick perpendicular and base from the given ratio, get the hypotenuse by Pythagoras, then read off the other five ratios.",
          "examPointer": "Finding the remaining ratios from data like tan A = 3/4, and proving identities such as sec A (1 - sin A)(sec A + tan A) = 1, are standard 3-5 markers."
        },
        {
          "heading": "Common Mistakes and Exam Traps",
          "points": [
            "Swapping perpendicular and base when the reference angle changes; for angle B in the same triangle the roles of the two legs reverse.",
            "Writing tan 90 = infinity; the correct statement is that tan 90 is not defined, because cos 90 = 0 appears in the denominator.",
            "Expanding wrongly: (sin A + cos A)^2 = sin^2 A + cos^2 A + 2 sin A cos A = 1 + 2 sin A cos A, and not simply 1.",
            "Treating sin^2 A as sin A^2; sin^2 A always means the square of the value of sin A.",
            "Cancelling across addition: sin A/(sin A + cos A) does not equal 1/(1 + cos A) by cancelling sin A.",
            "Using the wrong special value, like tan 30 = sqrt(3) instead of 1/sqrt(3); the 30 and 60 degree values are mirror images of each other.",
            "Forgetting to state the identity used while proving, which costs method marks even when the final result is correct.",
            "Leaving answers as 1/sqrt(2) when the question expects rationalised exact values like sqrt(2)/2."
          ],
          "keyTerms": [
            { "term": "Not defined", "meaning": "The correct phrase for tan 90 degrees, where the denominator cos 90 is zero." },
            { "term": "Method marks", "meaning": "Marks awarded for the stated identity, substitution and simplification steps, not only the final answer." },
            { "term": "Conjugate surd", "meaning": "The companion surd used in rationalisation, for example (sqrt(3) + 1) for (sqrt(3) - 1)." }
          ],
          "trick": "Before finalising, run the 45 test: substitute A = 45 degrees on both sides; if the numbers agree, the identity survives.",
          "examPointer": "The classic traps are the (sin A + cos A)^2 expansion, tan 90 being not defined, and illegal cancelling inside fractions; each has caught even toppers."
        }
      ],
      "mcqs": [
        {
          "question": "The value of sin 30 + cos 60 is",
          "options": ["1/2", "1", "3/4", "0"],
          "answerIndex": 1,
          "explanation": "sin 30 = 1/2 and cos 60 = 1/2, so the sum is 1/2 + 1/2 = 1.",
          "difficulty": "easy"
        },
        {
          "question": "If tan A = 3/4, then sin A equals",
          "options": ["3/4", "4/5", "3/5", "5/4"],
          "answerIndex": 2,
          "explanation": "tan A = 3/4 gives perpendicular 3 and base 4, so hypotenuse = sqrt(9 + 16) = 5; sin A = 3/5.",
          "difficulty": "medium"
        },
        {
          "question": "The value of tan 45 is",
          "options": ["0", "1", "sqrt(3)", "1/sqrt(3)"],
          "answerIndex": 1,
          "explanation": "In an isosceles right triangle the legs are equal, so perpendicular/base = 1.",
          "difficulty": "easy",
          "pyq": "CBSE 2020"
        },
        {
          "question": "9 sec^2 A - 9 tan^2 A equals",
          "options": ["0", "1", "9", "8"],
          "answerIndex": 2,
          "explanation": "9 sec^2 A - 9 tan^2 A = 9(sec^2 A - tan^2 A) = 9 x 1 = 9, using sec^2 A - tan^2 A = 1.",
          "difficulty": "easy"
        },
        {
          "question": "If sin A = cos A, then the value of A is",
          "options": ["30 degrees", "45 degrees", "60 degrees", "90 degrees"],
          "answerIndex": 1,
          "explanation": "sin A = cos A means tan A = 1, and tan 45 = 1, so A = 45 degrees.",
          "difficulty": "easy",
          "pyq": "CBSE 2023"
        },
        {
          "question": "The value of 2 tan^2 45 + cos^2 30 - sin^2 60 is",
          "options": ["0", "1", "2", "11/4"],
          "answerIndex": 2,
          "explanation": "2 tan^2 45 = 2; cos 30 = sqrt(3)/2 and sin 60 = sqrt(3)/2 are equal, so their squares cancel; total = 2.",
          "difficulty": "medium"
        },
        {
          "question": "sin (90 - A) is equal to",
          "options": ["cos A", "sin A", "tan A", "cosec A"],
          "answerIndex": 0,
          "explanation": "The complement of an angle swaps sin with cos, so sin (90 - A) = cos A.",
          "difficulty": "easy"
        },
        {
          "question": "The value of cosec^2 61 - cot^2 61 is",
          "options": ["0", "1", "2", "cosec 61"],
          "answerIndex": 1,
          "explanation": "The identity cosec^2 A - cot^2 A = 1 holds for every angle, so the value is 1.",
          "difficulty": "medium"
        },
        {
          "question": "If sec A = 13/5, then tan A equals",
          "options": ["12/5", "13/12", "5/12", "12/13"],
          "answerIndex": 0,
          "explanation": "sec A = 13/5 gives cos A = 5/13 and sin A = sqrt(1 - 25/169) = 12/13; tan A = sin A/cos A = 12/5.",
          "difficulty": "medium",
          "pyq": "CBSE 2019"
        },
        {
          "question": "The value of tan 60 / cot 30 is",
          "options": ["1", "0", "sqrt(3)", "3"],
          "answerIndex": 0,
          "explanation": "tan 60 = sqrt(3) and cot 30 = tan 60 = sqrt(3), so the quotient is 1.",
          "difficulty": "easy"
        },
        {
          "question": "The value of sin 60 cos 30 + cos 60 sin 30 is",
          "options": ["1/2", "sqrt(3)/2", "1", "2"],
          "answerIndex": 2,
          "explanation": "The expression equals sin (60 + 30) = sin 90 = 1; directly it is (sqrt(3)/2)(sqrt(3)/2) + (1/2)(1/2) = 3/4 + 1/4 = 1.",
          "difficulty": "medium"
        },
        {
          "question": "If sin (A + B) = 1 and sin (A - B) = 1/2, where 0 degrees < B < A < 90 degrees, then A and B are",
          "options": ["A = 60 degrees, B = 30 degrees", "A = 45 degrees, B = 15 degrees", "A = 30 degrees, B = 60 degrees", "A = 90 degrees, B = 30 degrees"],
          "answerIndex": 0,
          "explanation": "sin (A + B) = 1 gives A + B = 90 and sin (A - B) = 1/2 gives A - B = 30; solving, A = 60 and B = 30.",
          "difficulty": "hard",
          "pyq": "CBSE 2020"
        }
      ],
      "boardQuestions": [
        {
          "question": "Prove that tan^2 A divided by (1 + tan^2 A) equals sin^2 A.",
          "marks": 3,
          "type": "SA",
          "probability": "very-high",
          "answer": "1) Take LHS = tan^2 A/(1 + tan^2 A). 2) Apply the identity 1 + tan^2 A = sec^2 A in the denominator: LHS = tan^2 A/sec^2 A. 3) Write both ratios in terms of sin and cos: tan^2 A/sec^2 A = (sin^2 A/cos^2 A) divided by (1/cos^2 A) = (sin^2 A/cos^2 A) x cos^2 A = sin^2 A = RHS. 4) Numerical check with A = 30: tan^2 30 = 1/3, so LHS = (1/3)/(4/3) = 1/4, and sin^2 30 = (1/2)^2 = 1/4. 5) Both sides agree, hence tan^2 A/(1 + tan^2 A) = sin^2 A for every admissible value of A."
        },
        {
          "question": "Evaluate: 5 sin^2 30 + cos^2 45 - 4 tan^2 30.",
          "marks": 2,
          "type": "SA",
          "probability": "high",
          "answer": "1) Substitute the standard values: sin 30 = 1/2, cos 45 = 1/sqrt(2), tan 30 = 1/sqrt(3). 2) 5 sin^2 30 = 5 x (1/2)^2 = 5/4. 3) cos^2 45 = (1/sqrt(2))^2 = 1/2. 4) 4 tan^2 30 = 4 x (1/sqrt(3))^2 = 4/3. 5) The expression = 5/4 + 1/2 - 4/3; with common denominator 12 this is 15/12 + 6/12 - 16/12 = 5/12. 6) Hence the value of the expression is 5/12."
        },
        {
          "question": "Prove that (sin A + cosec A)^2 + (cos A + sec A)^2 = 7 + tan^2 A + cot^2 A.",
          "marks": 5,
          "type": "LA",
          "probability": "very-high",
          "answer": "1) Expand the first square: (sin A + cosec A)^2 = sin^2 A + cosec^2 A + 2 sin A cosec A = sin^2 A + cosec^2 A + 2, since sin A cosec A = 1. 2) Expand the second square: (cos A + sec A)^2 = cos^2 A + sec^2 A + 2 cos A sec A = cos^2 A + sec^2 A + 2, since cos A sec A = 1. 3) Add the two results: sin^2 A + cos^2 A + cosec^2 A + sec^2 A + 4 = 1 + cosec^2 A + sec^2 A + 4, using sin^2 A + cos^2 A = 1. 4) Use cosec^2 A = 1 + cot^2 A and sec^2 A = 1 + tan^2 A: the sum = 1 + (1 + cot^2 A) + (1 + tan^2 A) + 4 = 7 + tan^2 A + cot^2 A = RHS. 5) Numerical check at A = 45: LHS = 2 x (1/sqrt(2) + sqrt(2))^2 = 2 x 4.5 = 9 and RHS = 7 + 1 + 1 = 9. Hence proved."
        },
        {
          "question": "If tan (A + B) = sqrt(3) and tan (A - B) = 1/sqrt(3), where 0 degrees < A + B <= 90 degrees and A > B, find the values of A and B.",
          "marks": 5,
          "type": "LA",
          "probability": "high",
          "answer": "1) From the standard table, tan 60 = sqrt(3), so A + B = 60 degrees, because A + B lies between 0 and 90 degrees. 2) Also tan 30 = 1/sqrt(3), so A - B = 30 degrees, since A > B makes A - B positive. 3) Adding the two equations: 2A = 90, so A = 45 degrees. 4) Subtracting the second from the first: 2B = 30, so B = 15 degrees. 5) Check: A + B = 60 and A - B = 30, as required. 6) The same method works whenever the sines are given: if sin (A + B) = 1 and sin (A - B) = 1/2, then A + B = 90 and A - B = 30, giving A = 60 and B = 30; the key step is always to read the special angle from the table first and then solve the pair of linear equations."
        },
        {
          "question": "Read the source and answer the questions: A fire brigade ladder of length 15 m is placed against a tall wall. The ladder makes an angle of 60 degrees with the level ground, and its upper end just reaches a window. (a) How high above the ground is the window? (b) How far is the foot of the ladder from the wall? (c) If the ladder were placed at 45 degrees instead, up to what height would it reach? (Use sqrt(3) = 1.732)",
          "marks": 4,
          "type": "CASE",
          "probability": "high",
          "answer": "1) Model: the ladder is the hypotenuse of a right triangle with length 15 m, the wall is the perpendicular and the ground is the base, with the angle 60 degrees at the foot. 2) (a) Height of the window = 15 x sin 60 = 15 x sqrt(3)/2 = 15 x 1.732/2 = 12.99 m. 3) (b) Distance of the foot of the ladder from the wall = 15 x cos 60 = 15 x 1/2 = 7.5 m. 4) (c) At 45 degrees the height reached = 15 x sin 45 = 15 x sqrt(2)/2 = 15 x 0.7071 = 10.61 m approximately. 5) Conclusion: the ladder length never changes; only sin and cos of the angle decide how the fixed 15 m splits between wall height and ground distance, so a steeper ladder climbs higher but stands closer."
        },
        {
          "question": "Read the source and answer the questions: For barrier-free access, a school builds a wheelchair ramp whose angle of elevation is 30 degrees and whose horizontal base on the ground is 6 m. (a) What rise does the ramp provide at the door? (b) What is the actual length of the ramp surface? (c) If the same rise were achieved with a steeper 45 degree ramp, what would its base length be? (Use sqrt(3) = 1.732)",
          "marks": 5,
          "type": "CASE",
          "probability": "medium",
          "answer": "1) Model: right triangle with the 30 degree angle at the ground end, base = 6 m, unknown height h and ramp length L as hypotenuse. 2) (a) tan 30 = h/6, so h = 6 x 1/sqrt(3) = 6/sqrt(3) = 2 sqrt(3) = 2 x 1.732 = 3.46 m. 3) (b) cos 30 = 6/L, so L = 6 x 2/sqrt(3) = 12/sqrt(3) = 4 sqrt(3) = 4 x 1.732 = 6.93 m. 4) (c) With the same rise h = 3.46 m and angle 45 degrees, tan 45 = h/base = 1, so the base = 3.46 m, equal to the rise itself. 5) Conclusion: reducing the angle makes the ramp gentler but longer; a 45 degree ramp needs a base equal to its rise, while the 30 degree ramp needs a base sqrt(3) times longer than its rise."
        }
      ]
    },
    {
      "number": 9,
      "title": "Some Applications of Trigonometry",
      "summary": "This chapter applies trigonometry to real life through heights and distances. It defines the angle of elevation and the angle of depression, and shows how a single right triangle converts a measured angle and a known distance into an unknown height or distance. Standard models include towers, poles and shadows, ladders and wires, two observation points, and one object standing on top of another. Answers are computed using the exact values for 30, 45 and 60 degrees together with sqrt(3) = 1.732.",
      "weightageMarks": 4,
      "difficulty": "medium",
      "hotTopics": [
        "Angle of elevation and angle of depression",
        "Height of a tower using tan 30, 45 and 60",
        "Shadow and sun's altitude problems",
        "Two observation points problems",
        "Ladder, wire and string problems",
        "Object on a pedestal or flagstaff on a tower"
      ],
      "sections": [
        {
          "heading": "Heights and Distances: Line of Sight, Elevation and Depression",
          "points": [
            "To see an object, the ray from the observer's eye to the object is called the line of sight.",
            "The horizontal level is the line through the observer's eye parallel to the ground.",
            "When the object is above the horizontal level, the angle between the line of sight and the horizontal is the angle of elevation; the observer looks up.",
            "When the object is below the horizontal level, as for a boat seen from a cliff, the angle between the line of sight and the horizontal is the angle of depression; the observer looks down.",
            "Elevation and depression come in pairs: the angle of elevation of the top of a tower from a point A equals the angle of depression of A from the top, since the two horizontal lines are parallel and the angles are alternate interior angles.",
            "In every problem the observer's eye is taken as a point, the tower or pole is vertical and the ground is horizontal, so the figure is a right triangle.",
            "Heights are measured from ground level unless the height of the observer's eye is separately given, in which case the eye height must be added or subtracted."
          ],
          "keyTerms": [
            { "term": "Line of sight", "meaning": "The straight ray from the observer's eye to the object being viewed." },
            { "term": "Angle of elevation", "meaning": "The angle between the line of sight and the horizontal when the object is above eye level." },
            { "term": "Angle of depression", "meaning": "The angle between the line of sight and the horizontal when the object is below eye level." },
            { "term": "Horizontal level", "meaning": "The line through the eye parallel to the ground, from which both angles are measured." }
          ],
          "trick": "Elevation means the eye climbs E-up the Eiffel; depression means looking Down from a cliff. Elevation at you = depression at the top.",
          "examPointer": "Stating that elevation and depression are equal alternate angles, and drawing the correct right triangle, are the 1-2 marks most students lose in this chapter."
        },
        {
          "heading": "Choosing the Right Ratio and Using the Table",
          "points": [
            "tan is the workhorse: tan angle = height/distance; use it when the ground distance and the vertical height are the involved sides.",
            "sin and cos appear when a slant length is involved: a rope, ladder, wire, string or ramp is the hypotenuse; sin angle = height/hypotenuse and cos angle = distance/hypotenuse.",
            "Keep the three magic values ready: tan 30 = 1/sqrt(3), tan 45 = 1, tan 60 = sqrt(3); also sin 30 = 1/2, sin 45 = 1/sqrt(2), sin 60 = sqrt(3)/2.",
            "Height from distance: h = d x tan angle; distance from height: d = h/tan angle = h x cot angle.",
            "Shadow facts: if the shadow equals the height, the sun's altitude is 45 degrees; if the shadow is sqrt(3) times the height, it is 30 degrees; if the shadow is height/sqrt(3), it is 60 degrees.",
            "In depression problems, drop the horizontal from the eye and transfer the depression angle into the ground triangle using alternate interior angles.",
            "Keep everything in surd form until the last step, then substitute sqrt(3) = 1.732 or sqrt(2) = 1.414 only if a decimal answer is demanded."
          ],
          "keyTerms": [
            { "term": "Slant length", "meaning": "The hypotenuse of the height-and-distance triangle: ladder, wire, string or ramp." },
            { "term": "Sun's altitude", "meaning": "The angle of elevation of the sun above the horizon, which fixes the shadow-to-height ratio." },
            { "term": "Surd form", "meaning": "Exact form like 20 sqrt(3), kept until the final conversion using sqrt(3) = 1.732." }
          ],
          "trick": "TAN for TALL (height from ground distance), SIN for SLANT (rope, wire, ladder, string).",
          "examPointer": "MCQs on shadow-angle pairs (45 degrees when shadow equals height, 30 degrees when shadow is sqrt(3) times height) and on choosing tan versus sin are repeated every year."
        },
        {
          "heading": "Standard Models: Single Tower, Shadow, Two Positions, Object on Object",
          "points": [
            "Single-angle model: observer at C sees the top of tower AB at elevation theta; then h = d tan theta and d = h/tan theta; example: d = 30 m and theta = 60 gives h = 30 sqrt(3) = 51.96 m.",
            "Shadow model: the sun's rays make the altitude angle with the ground; shadow s and height h satisfy tan theta = h/s.",
            "Two-position model: from point P the elevation is 60 degrees; after walking 20 m straight away to Q it is 30 degrees. If d is the first distance: h = d sqrt(3) = (d + 20)/sqrt(3), so 3d = d + 20, giving d = 10 and h = 10 sqrt(3) = 17.32 m.",
            "Object-on-object model: a statue on a pedestal or a flagstaff on a tower; the upper angle gives the combined height and the lower angle gives the bottom object, then subtract.",
            "Building-and-tower model: from the top of a building, the elevation of a taller tower's top and the depression of its foot give two equations that share the same horizontal distance.",
            "Cliff-and-boat model: angles of depression from the cliff top to two positions of a boat fix how far the boat has travelled; heights convert through cot angles.",
            "Every model reduces to one or two right triangles sharing a side; label the shared side with the same letter in both triangles."
          ],
          "keyTerms": [
            { "term": "Two-position problem", "meaning": "A problem where the elevation of the same object is measured from two different points along the same line." },
            { "term": "Shared side", "meaning": "The common horizontal distance or height appearing in both triangles of a two-triangle problem." },
            { "term": "Cotangent relation", "meaning": "Using cot angle = distance/height to write distances in terms of the height in depression problems." }
          ],
          "trick": "Two positions, two tans, one shared height: write h = d tan(first) = (d + walk) tan(second) and solve the pair of equations.",
          "examPointer": "The walk-away problem (60 and 30 degrees, 20 m apart, answer 10 sqrt(3) m = 17.32 m) and the statue-on-pedestal problem are repeat board questions."
        },
        {
          "heading": "Worked Strategy: Five Steps for Any Height-and-Distance Problem",
          "points": [
            "Step 1, draw: make a neat right triangle, mark the observer, the object and the angle of elevation or depression; a correct diagram earns a mark by itself.",
            "Step 2, name: call the unknown h or d and mark every known length with its number and unit.",
            "Step 3, choose: pick the ratio connecting the knowns with the unknown; with ground distance and height use tan, with a rope or ladder use sin or cos.",
            "Step 4, solve: write the equation and simplify in surd form; example: with eye height 1.5 m and elevation 45 degrees at 28.5 m from a chimney, chimney height = 1.5 + 28.5 x tan 45 = 1.5 + 28.5 = 30 m.",
            "Step 5, answer: substitute sqrt(3) = 1.732 if decimals are asked, attach units and state the final answer in words.",
            "For two-triangle problems, first solve for the shared distance, then transfer it into the second triangle.",
            "Sanity check: from the same point, a bigger elevation angle must give a taller height (tan 60 > tan 45 > tan 30); if your numbers disagree, recheck the diagram."
          ],
          "keyTerms": [
            { "term": "Modelling", "meaning": "Converting the word description into a labelled right triangle with knowns and unknowns." },
            { "term": "Surd form", "meaning": "Exact answer style such as 7(1 + sqrt(3)) kept until the final decimal conversion." },
            { "term": "Eye-level correction", "meaning": "Adding the observer's eye height or subtracting it before applying the trigonometric ratio." }
          ],
          "trick": "DN-RSA: Draw the triangle, Name the unknown, pick the Ratio, Solve in surds, Answer with units.",
          "examPointer": "Marks are split as diagram, equation, simplification and final answer with units; skipping any stage visibly reduces the score."
        },
        {
          "heading": "Using sqrt(3) = 1.732 and Presenting Final Answers",
          "points": [
            "CBSE papers state sqrt(3) = 1.732 (and sometimes sqrt(2) = 1.414); use the given value, not a calculator value.",
            "Convert only at the end: 20 sqrt(3) = 20 x 1.732 = 34.64 m; 50 sqrt(3) = 50 x 1.732 = 86.6 m; 10 sqrt(3) = 17.32 m.",
            "To handle 1/sqrt(3), rationalise: 1/sqrt(3) = sqrt(3)/3 = 1.732/3 = 0.577 approximately.",
            "Example: h = 30/sqrt(3) = 30 x 1.732/3 = 17.32 m; another: p = 1.46/(sqrt(3) - 1) = 1.46(sqrt(3) + 1)/2 = 0.73 x 2.732 = 1.99 m, about 2 m.",
            "Round only once, at the final answer, usually to two decimal places; write 34.64 m rather than 34.6 m unless one decimal place is demanded.",
            "Exact surd answers like 20 sqrt(3) m are fully acceptable; the decimal form is needed only when the question says correct to given places or supplies the surd value.",
            "Always attach units: heights and distances in m, angles in degrees; a bare number 17.32 earns no full credit."
          ],
          "keyTerms": [
            { "term": "Rationalisation", "meaning": "Multiplying by the conjugate surd to simplify expressions like 1/(sqrt(3) - 1)." },
            { "term": "Approximation", "meaning": "Replacing sqrt(3) by the given value 1.732 at the final step only." },
            { "term": "Rounding", "meaning": "Trimming the decimal answer to the demanded number of places, done exactly once." }
          ],
          "trick": "Surd till the end, decimal at the end: multiply by 1.732 only in the last line and never round intermediate steps.",
          "examPointer": "Questions explicitly say use sqrt(3) = 1.732; an answer like 20 sqrt(3) should then be finished as 34.64 m to show the conversion."
        },
        {
          "heading": "Common Mistakes and Exam Traps",
          "points": [
            "Measuring the angle at the wrong vertex: the elevation angle sits at the observer on the ground, not at the top of the tower.",
            "Inverting the ratio: tan 30 = h/d, so h = d/sqrt(3); writing h = d x sqrt(3) is a double error, since tan 30 = 1/sqrt(3), not sqrt(3).",
            "Ignoring the observer's height: when the eye is 1.5 m above the ground, the triangle height is the object height minus 1.5.",
            "Confusing the two angles in a two-position problem; the larger angle (60 degrees) belongs to the nearer point.",
            "Leaving the answer in surds when the question demands a decimal answer using sqrt(3) = 1.732.",
            "Assuming depression angles are measured from the vertical; they are measured from the horizontal.",
            "Swapping elevation and depression across different points; the equality holds only along the same pair of parallel horizontals.",
            "Solving without drawing any figure: most wrong answers in this chapter come from working in the air instead of labelling a triangle."
          ],
          "keyTerms": [
            { "term": "Reference angle", "meaning": "The angle at the observer's position inside the right triangle; all ratios are taken with respect to it." },
            { "term": "Eye-level correction", "meaning": "The adjustment for observer height before writing the ratio for the object's top." },
            { "term": "Horizontal line", "meaning": "The base line from which both elevation and depression are measured." }
          ],
          "trick": "Bigger angle, nearer point: 60 degrees hugs the tower and 30 degrees is the far view; if your diagram says otherwise, you flipped the figure.",
          "examPointer": "The 1.5 m observer correction and the tan 30 = 1/sqrt(3) inversion are the two traps CBSE loves; verify both before writing the final answer."
        }
      ],
      "mcqs": [
        {
          "question": "If the height of a tower and the distance of the point of observation from its foot are both h, then the angle of elevation of the top of the tower is",
          "options": ["30 degrees", "45 degrees", "60 degrees", "90 degrees"],
          "answerIndex": 1,
          "explanation": "tan angle = h/h = 1 = tan 45, so the angle of elevation is 45 degrees.",
          "difficulty": "easy",
          "pyq": "CBSE 2020"
        },
        {
          "question": "When the length of the shadow of a pole is sqrt(3) times the height of the pole, the angle of elevation of the sun is",
          "options": ["30 degrees", "45 degrees", "60 degrees", "75 degrees"],
          "answerIndex": 0,
          "explanation": "tan angle = h/(h sqrt(3)) = 1/sqrt(3) = tan 30, so the sun's altitude is 30 degrees.",
          "difficulty": "medium"
        },
        {
          "question": "The angle of elevation of the top of a tower from a point on the ground, which is 30 m away from the foot of a 30 sqrt(3) m high tower, is",
          "options": ["30 degrees", "45 degrees", "60 degrees", "90 degrees"],
          "answerIndex": 2,
          "explanation": "tan angle = 30 sqrt(3)/30 = sqrt(3) = tan 60, so the angle is 60 degrees.",
          "difficulty": "easy"
        },
        {
          "question": "From a point on the ground 30 m away from the foot of a tower, the angle of elevation of the top is 60 degrees. The height of the tower is",
          "options": ["30 m", "10 sqrt(3) m", "30 sqrt(3) m", "60 m"],
          "answerIndex": 2,
          "explanation": "h = 30 tan 60 = 30 sqrt(3) = 30 x 1.732 = 51.96 m.",
          "difficulty": "medium"
        },
        {
          "question": "The angle of depression of a car parked on the road from the top of a 60 m high tower is 30 degrees. The distance of the car from the base of the tower is",
          "options": ["60 m", "20 sqrt(3) m", "60 sqrt(3) m", "120 m"],
          "answerIndex": 2,
          "explanation": "tan 30 = 60/d, so d = 60/tan 30 = 60 sqrt(3) = 103.92 m approximately.",
          "difficulty": "medium"
        },
        {
          "question": "As an observer walks towards the foot of a tower, the angle of elevation of its top",
          "options": ["Increases", "Decreases", "Remains the same", "Becomes zero"],
          "answerIndex": 0,
          "explanation": "As the distance d decreases with the height h fixed, tan angle = h/d increases, so the elevation angle increases.",
          "difficulty": "easy",
          "pyq": "CBSE 2023"
        },
        {
          "question": "From a point on the ground the angle of elevation of the top of a tower is 60 degrees. On walking 20 m away from the tower, the angle becomes 30 degrees. The height of the tower is",
          "options": ["10 m", "17.32 m", "34.64 m", "20 m"],
          "answerIndex": 1,
          "explanation": "h = d tan 60 = (d + 20) tan 30 gives 3d = d + 20, so d = 10 and h = 10 sqrt(3) = 17.32 m.",
          "difficulty": "hard",
          "pyq": "CBSE 2019"
        },
        {
          "question": "The angle of elevation of the top of a tower from a point A on the ground equals the angle of depression of A from the top of the tower because the two angles form a pair of",
          "options": ["Vertically opposite angles", "Corresponding angles", "Alternate interior angles", "Co-interior angles"],
          "answerIndex": 2,
          "explanation": "The horizontal through the eye and the horizontal through the top are parallel, and the line of sight is a transversal, so the angles are alternate interior angles.",
          "difficulty": "easy"
        },
        {
          "question": "A kite is flying at a height of 100 m above the ground. The string attached to the kite is temporarily tied to a point on the ground and makes 60 degrees with the ground. Assuming the string is straight and taut, its length is",
          "options": ["100 m", "100 sqrt(3) m", "200/sqrt(3) m", "50 m"],
          "answerIndex": 2,
          "explanation": "L sin 60 = 100, so L = 100/(sqrt(3)/2) = 200/sqrt(3) = 200 x 1.732/3 = 115.47 m approximately.",
          "difficulty": "medium"
        },
        {
          "question": "The tops of two poles of heights 8 m and 20 m are joined by a wire. If the wire makes an angle of 30 degrees with the horizontal, the length of the wire is",
          "options": ["24 m", "12 m", "12 sqrt(3) m", "36 m"],
          "answerIndex": 0,
          "explanation": "The vertical gap between the tops is 20 - 8 = 12 m; 12 = L sin 30 = L/2, so L = 24 m.",
          "difficulty": "medium"
        },
        {
          "question": "In the right triangle formed by the observer, the foot of a tower and the top of the tower, the ratio used to find the height of the tower when the ground distance and the angle of elevation are known is",
          "options": ["Sine", "Cosine", "Tangent", "Secant"],
          "answerIndex": 2,
          "explanation": "Height and ground distance are the perpendicular and base, so tan angle = height/distance is the correct ratio.",
          "difficulty": "easy"
        },
        {
          "question": "An observer 1.5 m tall is 28.5 m away from a chimney 30 m high. The angle of elevation of the top of the chimney from her eyes is",
          "options": ["30 degrees", "45 degrees", "60 degrees", "75 degrees"],
          "answerIndex": 1,
          "explanation": "Height above eye level = 30 - 1.5 = 28.5 m; tan angle = 28.5/28.5 = 1 = tan 45, so the angle is 45 degrees.",
          "difficulty": "medium",
          "pyq": "CBSE 2020"
        }
      ],
      "boardQuestions": [
        {
          "question": "The shadow of a tower standing on level ground is found to be 40 m longer when the sun's altitude is 30 degrees than when it is 60 degrees. Find the height of the tower. (Use sqrt(3) = 1.732)",
          "marks": 3,
          "type": "SA",
          "probability": "very-high",
          "answer": "1) Let h be the height of the tower and x the shorter shadow, when the altitude is 60 degrees. 2) At 60 degrees: h = x tan 60 = x sqrt(3). 3) At 30 degrees the shadow is x + 40: h = (x + 40) tan 30 = (x + 40)/sqrt(3). 4) Equating: x sqrt(3) = (x + 40)/sqrt(3), so 3x = x + 40, giving x = 20 m. 5) Height h = 20 sqrt(3) = 20 x 1.732 = 34.64 m. 6) Check: the longer shadow is 60 m and 60 tan 30 = 60/1.732 = 34.64 m, matching the tower height."
        },
        {
          "question": "A pole 6 m high casts a shadow 2 sqrt(3) m long on the ground. Find the angle of elevation of the sun.",
          "marks": 2,
          "type": "SA",
          "probability": "high",
          "answer": "1) In the right triangle formed by the pole, its shadow and the sun's ray, tan theta = height/shadow = 6/(2 sqrt(3)). 2) Simplify: 6/(2 sqrt(3)) = 3/sqrt(3) = sqrt(3). 3) Since tan theta = sqrt(3) and tan 60 = sqrt(3), the angle of elevation is theta = 60 degrees. 4) Reasonableness: the shadow is much shorter than the pole, so the sun must be high in the sky, which agrees with the large elevation angle of 60 degrees."
        },
        {
          "question": "From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60 degrees and the angle of depression of the foot of the tower is 45 degrees. Find the height of the tower. (Use sqrt(3) = 1.732)",
          "marks": 5,
          "type": "LA",
          "probability": "very-high",
          "answer": "1) Let the building be AB = 7 m and the tower CE = h, with the observer at A, the top of the building. 2) The angle of depression of the foot C is 45 degrees, and by alternate angles the elevation of C from the horizontal through A is also 45 degrees, so the horizontal distance d between the building and the tower satisfies tan 45 = 7/d, giving d = 7 m. 3) The angle of elevation of the top E from A is 60 degrees, so the part of the tower above eye level = d tan 60 = 7 sqrt(3) m. 4) Height of the tower h = 7 + 7 sqrt(3) = 7(1 + 1.732) = 7 x 2.732 = 19.12 m. 5) Check: the 45 degree depression fixes the distance at 7 m, and the extra height 12.12 m over the building is 7 tan 60, consistent throughout."
        },
        {
          "question": "A statue 1.46 m tall stands on the top of a pedestal. From a point on the ground, the angle of elevation of the top of the statue is 60 degrees and the angle of elevation of the top of the pedestal is 45 degrees. Find the height of the pedestal. (Use sqrt(3) = 1.732)",
          "marks": 5,
          "type": "LA",
          "probability": "high",
          "answer": "1) Let the pedestal height be p and the observation distance d. 2) For the top of the pedestal: tan 45 = p/d = 1, so d = p. 3) For the top of the statue: tan 60 = (p + 1.46)/d, so p + 1.46 = d sqrt(3) = p sqrt(3). 4) Solve: 1.46 = p(sqrt(3) - 1), so p = 1.46/(sqrt(3) - 1). 5) Rationalise: p = 1.46(sqrt(3) + 1)/((sqrt(3) - 1)(sqrt(3) + 1)) = 1.46(2.732)/2 = 0.73 x 2.732 = 1.99 m approximately. 6) Hence the pedestal is about 2 m high; note how the 45 degree angle made the distance equal to the pedestal height and simplified the whole solution."
        },
        {
          "question": "Read the source and answer the questions: Two poles of equal heights stand on opposite sides of a road which is 80 m wide. From a point on the road between them, the angles of elevation of the tops of the poles are 60 degrees and 30 degrees. (a) Find the distance of the point from the first pole. (b) Find the height of the poles. (c) How far is the point from the second pole? (Use sqrt(3) = 1.732)",
          "marks": 4,
          "type": "CASE",
          "probability": "high",
          "answer": "1) Let the point be at distance x from the first pole, so its distance from the second is 80 - x; let the common height be h. 2) For the first pole: h = x tan 60 = x sqrt(3). 3) For the second pole: h = (80 - x) tan 30 = (80 - x)/sqrt(3). 4) Equating and multiplying by sqrt(3): 3x = 80 - x, so x = 20 m. 5) Height h = 20 sqrt(3) = 20 x 1.732 = 34.64 m. 6) Distance from the second pole = 80 - 20 = 60 m; check: 60 tan 30 = 60/1.732 = 34.64 m, the same height, confirming the answer."
        },
        {
          "question": "Read the source and answer the questions: A man standing on the top of a cliff observes a boat approaching the base. Initially the angle of depression of the boat is 30 degrees. The boat sails straight towards the cliff and after 12 minutes the angle of depression becomes 60 degrees. (a) If the cliff is h m high, express the two distances of the boat from the base in terms of h. (b) Show that the distance covered in 12 minutes is twice the remaining distance. (c) How much more time will the boat take to reach the base?",
          "marks": 5,
          "type": "CASE",
          "probability": "medium",
          "answer": "1) First position: depression 30 degrees gives distance d1 = h cot 30 = h sqrt(3). 2) Second position: depression 60 degrees gives d2 = h cot 60 = h/sqrt(3). 3) Distance covered in 12 minutes = d1 - d2 = h sqrt(3) - h/sqrt(3) = (3h - h)/sqrt(3) = 2h/sqrt(3). 4) Remaining distance = d2 = h/sqrt(3), which is exactly half the distance already covered. 5) Since the boat moves at constant speed, the remaining time = 12/2 = 6 minutes. 6) Total time from the first sighting to the base = 12 + 6 = 18 minutes; the key step is converting each depression angle into a cotangent in the same right triangle with the shared height h."
        }
      ]
    },
    {
      "number": 10,
      "title": "Circles",
      "summary": "This chapter studies the tangent, the line that touches a circle at exactly one point. It proves that the tangent at any point is perpendicular to the radius through the point of contact, and that the two tangents drawn from an external point have equal lengths. These theorems, combined with Pythagoras and congruence, solve problems on tangent lengths, angles between tangents and radii, chords of concentric circles and quadrilaterals circumscribing a circle. The number of tangents from points inside, on and outside the circle is also established.",
      "weightageMarks": 8,
      "difficulty": "easy",
      "hotTopics": [
        "Tangent, secant and point of contact",
        "Tangent perpendicular to radius theorem",
        "Tangents from an external point are equal",
        "Angle between tangents and angle at the centre",
        "Chord of concentric circles tangent to the inner circle",
        "Quadrilateral circumscribing a circle"
      ],
      "sections": [
        {
          "heading": "Tangent to a Circle: Definitions and Counting",
          "points": [
            "A secant is a line that intersects a circle at two distinct points; a tangent is a line that meets the circle at exactly one point, called the point of contact.",
            "The tangent is the limiting position of a secant when its two intersection points move closer and merge into one.",
            "There is only one tangent at a given point of the circle, and it lies in the plane of the circle.",
            "From a point inside the circle no tangent can be drawn; from a point on the circle exactly one tangent can be drawn; from a point outside exactly two tangents can be drawn.",
            "The word tangent comes from the Latin tangere, to touch; a wheel rolling on a road touches the road at exactly one point at every instant.",
            "Common tangents: two circles touching externally have 3 common tangents, intersecting circles have 2, circles touching internally have 1, and separate (non-overlapping) circles have 4.",
            "The tangent touches but never cuts the circle; however far it is extended on either side, it never enters the circle."
          ],
          "keyTerms": [
            { "term": "Tangent", "meaning": "A line that meets a circle at exactly one point." },
            { "term": "Secant", "meaning": "A line that intersects a circle at two distinct points." },
            { "term": "Point of contact", "meaning": "The single common point of a tangent and the circle." },
            { "term": "Common tangent", "meaning": "A line tangent to two circles at the same time." }
          ],
          "trick": "Tangent Touches Once, Secant Slices Twice. Point inside: 0 tangents; on the circle: 1; outside: 2.",
          "examPointer": "How many tangents can be drawn from a point inside, on or outside a circle is a favourite 1-marker, and the tangent-secant distinction supports many assertion-reason questions."
        },
        {
          "heading": "Theorem: Tangent is Perpendicular to the Radius",
          "points": [
            "Statement: the tangent at any point of a circle is perpendicular to the radius through the point of contact.",
            "Proof idea: let XY be the tangent at P and O the centre. Take any point Q on XY other than P; since Q lies outside the circle, OQ is longer than the radius OP.",
            "As Q moves along the tangent, OQ keeps changing, but the least distance from O to the line XY is OP; the shortest segment from a point to a line is the perpendicular, so OP is perpendicular to XY.",
            "Therefore angle OPT = 90 degrees in every tangent configuration, where T is any point on the tangent line.",
            "Converse: the line drawn through the end point of a radius, perpendicular to it, is a tangent to the circle.",
            "Application: every tangent numerical begins by joining the centre to the point of contact and marking the right angle.",
            "Example: with centre O, tangent from external point Q touching at P, OP = 5 cm and OQ = 13 cm; in right triangle OPQ, PQ = sqrt(169 - 25) = sqrt(144) = 12 cm."
          ],
          "keyTerms": [
            { "term": "Perpendicular radius", "meaning": "The radius drawn to the point of contact, which makes 90 degrees with the tangent." },
            { "term": "Shortest distance", "meaning": "The perpendicular segment from a point to a line is the shortest of all segments from the point to the line." },
            { "term": "Converse", "meaning": "The line through the end of a radius perpendicular to it is a tangent to the circle." }
          ],
          "trick": "Radius meets its tangent at 90, always: the first construction in every tangent problem is joining the centre to the contact point.",
          "examPointer": "The shortest-distance proof of this theorem is a standard 3-marker, and the right angle it creates powers every tangent numerical."
        },
        {
          "heading": "Tangents from an External Point",
          "points": [
            "Statement: the lengths of tangents drawn from an external point to a circle are equal.",
            "Proof: let TP and TQ be tangents from T touching the circle at P and Q; join OP, OQ and OT.",
            "In triangles OPT and OQT: OP = OQ (radii), OT is common, and angle OPT = angle OQT = 90 degrees, so the triangles are congruent by RHS.",
            "Hence TP = TQ by CPCT, and also angle OTP = angle OTQ and angle TOP = angle TOQ; so the centre O lies on the bisector of angle PTQ.",
            "Quadrilateral OPTQ has right angles at P and Q, so angle POQ + angle PTQ = 180 degrees; the two angles are supplementary.",
            "Numerical: if angle PTQ = 80 degrees then angle POQ = 100 degrees; if angle PTQ = 60 degrees then TP = TQ with included angle 60 makes triangle PTQ equilateral.",
            "Tangent length formula: from a point at distance d from the centre, tangent length = sqrt(d^2 - r^2); example: d = 25 and r = 7 gives tangent length 24, since 7, 24, 25 is a Pythagorean triple."
          ],
          "keyTerms": [
            { "term": "RHS congruence", "meaning": "Right angle, Hypotenuse, Side: the congruence criterion used for the two tangent triangles." },
            { "term": "CPCT", "meaning": "Corresponding Parts of Congruent Triangles, the reason TP = TQ after congruence." },
            { "term": "Supplementary angles", "meaning": "Angle POQ and angle PTQ add to 180 degrees in quadrilateral OPTQ." },
            { "term": "Circumscribed figure", "meaning": "A polygon whose sides all touch a circle, so the circle is inscribed in it." }
          ],
          "trick": "Tangents from one outside point are twins: equal lengths, the centre sits on the angle bisector, and angle at centre + angle between tangents = 180 degrees.",
          "examPointer": "Proving TP = TQ, finding angle POQ from angle PTQ, and AB + CD = BC + DA for a circumscribing quadrilateral are the three most repeated board items of this chapter."
        },
        {
          "heading": "Standard Results and Formulas",
          "points": [
            "Tangent length from an external point: t = sqrt(d^2 - r^2), from Pythagoras in the right triangle formed by the centre, the contact point and the external point.",
            "Chord of the larger of two concentric circles that touches the smaller: length = 2 sqrt(R^2 - r^2); example: R = 5 and r = 3 gives 2 x 4 = 8 cm.",
            "Angle relation: angle between the two tangents + angle between the two radii = 180 degrees, that is angle PTQ + angle POQ = 180 degrees.",
            "Distance between centres: circles touching externally have centre distance r1 + r2; circles touching internally have centre distance r1 - r2.",
            "For any quadrilateral circumscribing a circle, sums of opposite sides are equal: AB + CD = BC + DA.",
            "A circle can have at most 2 parallel tangents, drawn at the two ends of a diameter.",
            "In right triangle OPT with angle TOP = theta at the centre: OT = r/cos theta and TP = r tan theta; example: r = 6 and theta = 30 degrees gives TP = 6 tan 30 = 6/sqrt(3) = 2 sqrt(3) = 3.46 cm and OT = 6/cos 30 = 12/sqrt(3) = 4 sqrt(3) = 6.93 cm."
          ],
          "keyTerms": [
            { "term": "Concentric circles", "meaning": "Circles with the same centre but different radii." },
            { "term": "Pythagoras application", "meaning": "Using hypotenuse squared = sum of leg squares inside the radius-tangent right triangle." },
            { "term": "Parallel tangents", "meaning": "The maximum of two tangents on opposite sides of a diameter." }
          ],
          "trick": "Remember 2 sqrt(R^2 - r^2): the full chord is twice the half-chord obtained from Pythagoras.",
          "examPointer": "The concentric-circle chord (radii 5 cm and 3 cm giving 8 cm) and tangent-length Pythagoras with the 5, 12, 13 family are asked again and again."
        },
        {
          "heading": "Worked Strategy: Solving Tangent Problems",
          "points": [
            "Step 1: draw the circle, mark the centre O, the contact points and all given lengths; join O to each contact point and mark the right angles.",
            "Step 2: mark the twins; equal tangent lengths from each external point get the same letter, turning the problem into a small algebra exercise.",
            "Step 3: hunt for right triangles; radius-tangent pairs give Pythagoras, and two equal tangents give congruent triangles.",
            "Worked example: PQ is a tangent at P with OP = 5 and OQ = 13; right triangle OPQ gives PQ = sqrt(169 - 25) = sqrt(144) = 12.",
            "Worked example: PT and TQ are tangents with angle PTQ = 60 degrees; TP = TQ and included angle 60 make triangle PTQ equilateral, so each tangent equals the chord PQ and angle POQ = 120 degrees.",
            "For concentric circles, join O to an end of the chord touching the inner circle: the radius to the touch point is perpendicular to the chord, so half-chord = sqrt(R^2 - r^2).",
            "Finish with the exact value and approximate only if asked; keep units (cm or m) throughout."
          ],
          "keyTerms": [
            { "term": "Right triangle", "meaning": "The triangle formed by the centre, the contact point and any point of the tangent." },
            { "term": "Congruent triangles", "meaning": "The pair OPT and OQT produced by two tangents from one external point." },
            { "term": "Half-chord", "meaning": "Half the chord of the larger circle, found from sqrt(R^2 - r^2) in concentric circle problems." }
          ],
          "trick": "Tangents, Radii, Right angle, Pythagoras: TRRP is the fixed drill for every tangent numerical.",
          "examPointer": "Method marks come from the joined radius and the stated right angle; a bare computed length without the supporting triangle earns only part credit."
        },
        {
          "heading": "Common Mistakes and Exam Traps",
          "points": [
            "Using angle PTQ = angle POQ; they are supplementary, so if one is 110 degrees the other is 70 degrees.",
            "Forgetting the right-angle mark between radius and tangent while writing the theorem proof; without it the congruence or Pythagoras step is unjustified.",
            "Drawing tangents from a point inside the circle, which is impossible, or claiming three tangents from an outside point.",
            "In concentric-circle problems, using the diameter 10 instead of the radius 5 in Pythagoras and getting a wrong chord length.",
            "Naming the congruence criterion SAS when it is actually RHS; quote the criterion correctly for full marks.",
            "Mixing up externally and internally touching circles: external contact means centre distance = sum of radii, internal contact means difference.",
            "Assuming tangent segments from different external points are equal; only the pair from one point is equal.",
            "Skipping the CPCT statement: after congruence, write which parts are equal and why before using them."
          ],
          "keyTerms": [
            { "term": "Supplementary", "meaning": "Two angles adding to 180 degrees, as angle PTQ and angle POQ do." },
            { "term": "RHS criterion", "meaning": "Right angle-Hypotenuse-Side congruence, correct for the tangent triangles." },
            { "term": "Externally touching", "meaning": "Circles meeting at one point with centre distance equal to the sum of radii." }
          ],
          "trick": "Before answering, ask: from how many points am I drawing tangents? Equal twins exist only within one external point.",
          "examPointer": "Examiners report the supplementary-angle slip and the RHS/SAS mix-up as the most common errors; write a reason line for every equal length."
        }
      ],
      "mcqs": [
        {
          "question": "The maximum number of tangents that can be drawn to a circle from a point outside it is",
          "options": ["0", "1", "2", "infinite"],
          "answerIndex": 2,
          "explanation": "From an external point exactly two tangents can be drawn, one touching on each side of the circle.",
          "difficulty": "easy"
        },
        {
          "question": "The number of tangents that can be drawn from a point lying inside a circle is",
          "options": ["0", "1", "2", "infinite"],
          "answerIndex": 0,
          "explanation": "Every line through an interior point cuts the circle at two points, so no tangent exists from an inside point.",
          "difficulty": "easy"
        },
        {
          "question": "The tangent at any point of a circle is ___ to the radius through the point of contact.",
          "options": ["Parallel", "Perpendicular", "Equal", "Inclined at 60 degrees"],
          "answerIndex": 1,
          "explanation": "The tangent-radius theorem gives angle 90 degrees, so the tangent is perpendicular to the radius.",
          "difficulty": "easy"
        },
        {
          "question": "TP and TQ are tangents to a circle with centre O from an external point T. If angle POQ = 110 degrees, then angle PTQ equals",
          "options": ["55 degrees", "70 degrees", "90 degrees", "110 degrees"],
          "answerIndex": 1,
          "explanation": "The angles are supplementary: angle PTQ = 180 - 110 = 70 degrees.",
          "difficulty": "medium"
        },
        {
          "question": "Two concentric circles are of radii 5 cm and 3 cm. The length of the chord of the larger circle which touches the smaller circle is",
          "options": ["4 cm", "6 cm", "8 cm", "10 cm"],
          "answerIndex": 2,
          "explanation": "Length = 2 sqrt(R^2 - r^2) = 2 sqrt(25 - 9) = 2 x 4 = 8 cm.",
          "difficulty": "medium",
          "pyq": "CBSE 2020"
        },
        {
          "question": "O is the centre of a circle, PQ is a tangent at P, OP = 5 cm and OQ = 13 cm. The length PQ equals",
          "options": ["8 cm", "12 cm", "18 cm", "sqrt(194) cm"],
          "answerIndex": 1,
          "explanation": "PQ^2 = OQ^2 - OP^2 = 169 - 25 = 144, so PQ = 12 cm.",
          "difficulty": "medium"
        },
        {
          "question": "A tangent PQ at a point P of a circle of radius 6 cm meets a line through the centre O at a point Q so that OQ = 10 cm. The length PQ is",
          "options": ["8 cm", "10 cm", "6 cm", "12 cm"],
          "answerIndex": 0,
          "explanation": "PQ^2 = 10^2 - 6^2 = 100 - 36 = 64, so PQ = 8 cm.",
          "difficulty": "medium",
          "pyq": "CBSE 2019"
        },
        {
          "question": "From an external point Q, the length of the tangent PQ to a circle of radius 7 cm is 24 cm. The distance OQ from the centre is",
          "options": ["24 cm", "25 cm", "26 cm", "31 cm"],
          "answerIndex": 1,
          "explanation": "OQ^2 = OP^2 + PQ^2 = 49 + 576 = 625, so OQ = 25 cm.",
          "difficulty": "medium"
        },
        {
          "question": "When two circles touch each other externally, the number of their common tangents is",
          "options": ["1", "2", "3", "4"],
          "answerIndex": 2,
          "explanation": "Externally touching circles have two direct common tangents and one tangent at the touching point, so 3 in all.",
          "difficulty": "medium"
        },
        {
          "question": "ABCD is a quadrilateral circumscribing a circle. If AB = 6 cm, BC = 7 cm and CD = 4 cm, then AD equals",
          "options": ["3 cm", "5 cm", "9 cm", "10 cm"],
          "answerIndex": 0,
          "explanation": "Opposite sides of a circumscribing quadrilateral satisfy AB + CD = BC + DA, so DA = 6 + 4 - 7 = 3 cm.",
          "difficulty": "medium",
          "pyq": "CBSE 2023"
        },
        {
          "question": "The common point of a tangent to a circle and the circle itself is called the",
          "options": ["Centre", "Point of contact", "Chord", "Diameter"],
          "answerIndex": 1,
          "explanation": "The tangent meets the circle at exactly one point, called the point of contact.",
          "difficulty": "easy"
        },
        {
          "question": "At the most, a circle can have ___ parallel tangents.",
          "options": ["1", "2", "3", "infinite"],
          "answerIndex": 1,
          "explanation": "Two parallel tangents exist at the two ends of a diameter; a third parallel line cannot touch the circle.",
          "difficulty": "easy",
          "pyq": "CBSE 2020"
        }
      ],
      "boardQuestions": [
        {
          "question": "Prove that the lengths of tangents drawn from an external point to a circle are equal.",
          "marks": 3,
          "type": "SA",
          "probability": "very-high",
          "answer": "1) Let TP and TQ be two tangents drawn from an external point T to a circle with centre O, touching it at P and Q. 2) Join OP, OQ and OT. 3) Since OP and OQ are radii, OP = OQ. 4) The tangent at P is perpendicular to radius OP and the tangent at Q is perpendicular to radius OQ, so angle OPT = angle OQT = 90 degrees. 5) In triangles OPT and OQT: OP = OQ (radii), OT = OT (common) and angle OPT = angle OQT = 90 degrees, so the triangles are congruent by RHS. 6) Therefore TP = TQ by CPCT, and additionally angle OTP = angle OTQ, so OT also bisects angle PTQ. 7) Hence the lengths of the two tangents drawn from any external point to a circle are equal."
        },
        {
          "question": "Two concentric circles are of radii 5 cm and 3 cm. Find the length of the chord of the larger circle which touches the smaller circle.",
          "marks": 2,
          "type": "SA",
          "probability": "high",
          "answer": "1) Let the chord AB of the larger circle touch the smaller circle at M; join OM and OA. 2) AB is a tangent to the smaller circle at M, so OM is perpendicular to AB and OM = 3 cm. 3) The perpendicular from the centre to a chord bisects it, so M is the midpoint of AB and AM = AB/2. 4) In right triangle OMA: OA = 5 cm (radius of the larger circle) and OM = 3 cm, so AM = sqrt(25 - 9) = sqrt(16) = 4 cm. 5) Therefore AB = 2 x 4 = 8 cm. 6) Quick check with the formula 2 sqrt(R^2 - r^2) = 2 sqrt(25 - 9) = 8 cm."
        },
        {
          "question": "Prove that the tangent at any point of a circle is perpendicular to the radius through the point of contact.",
          "marks": 5,
          "type": "LA",
          "probability": "very-high",
          "answer": "1) Let XY be the tangent to a circle with centre O at the point of contact P; join OP. 2) Take any point Q on the line XY other than P. 3) Since Q lies on the tangent outside the circle, Q is an external point and OQ is greater than the radius OP; that is, OQ > OP for every such Q. 4) Thus, among all segments joining O to the line XY, the segment OP is the shortest. 5) The shortest segment from a point to a line is the perpendicular from that point to the line. 6) Therefore OP must be perpendicular to XY, that is, the radius through the point of contact is perpendicular to the tangent at P. 7) The converse also follows: the line through the end of a radius, drawn perpendicular to it, is a tangent, because every other point of that line lies farther from the centre than the radius and hence outside the circle."
        },
        {
          "question": "PQ is a chord of length 8 cm of a circle of radius 5 cm. The tangents at P and Q intersect at a point T. Find the length TP.",
          "marks": 5,
          "type": "LA",
          "probability": "high",
          "answer": "1) Let O be the centre and M the midpoint of chord PQ, so PM = MQ = 4 cm. 2) Join OM; the perpendicular from the centre to a chord bisects it, so OM is perpendicular to PQ and OM = sqrt(5^2 - 4^2) = sqrt(25 - 16) = 3 cm. 3) The tangents TP and TQ from T are equal, so T lies on the perpendicular bisector of PQ; hence O, M and T are collinear and OT = TM + 3. 4) In right triangle TPM: TP^2 = PM^2 + TM^2 = 16 + TM^2. 5) In right triangle OPT: OT^2 = OP^2 + TP^2 = 25 + TP^2. 6) Substituting OT = TM + 3: (TM + 3)^2 = 25 + 16 + TM^2, so TM^2 + 6TM + 9 = 41 + TM^2, giving 6TM = 32 and TM = 16/3 cm. 7) Then TP^2 = 16 + (16/3)^2 = 16 + 256/9 = 400/9, so TP = 20/3 = 6.67 cm approximately."
        },
        {
          "question": "Read the source and answer the questions: A circle touches all four sides of quadrilateral ABCD with AB = 8 cm, BC = 10 cm and CD = 7 cm. (a) What is such a circle called? (b) Prove that AB + CD = BC + DA. (c) Find DA and the perimeter of ABCD.",
          "marks": 4,
          "type": "CASE",
          "probability": "high",
          "answer": "1) The circle touching all four sides from inside is called the incircle, and ABCD is a quadrilateral circumscribing the circle. 2) From vertex A, the two tangent segments to the circle along AB and AD are equal; similarly the pairs of tangent segments from B, C and D are equal. 3) Write AB = w + x, BC = x + y, CD = y + z, DA = z + w, where w, x, y, z are the tangent lengths from A, B, C, D respectively. 4) Adding: AB + CD = w + x + y + z and BC + DA = x + y + z + w, hence AB + CD = BC + DA. 5) Substituting: 8 + 7 = 10 + DA, so DA = 5 cm. 6) Perimeter = 8 + 10 + 7 + 5 = 30 cm."
        },
        {
          "question": "Read the source and answer the questions: From an external point T, tangents TP and TQ are drawn to a circle of radius 6 cm with centre O, and angle PTQ = 60 degrees. (a) Find angle POQ. (b) Why does OT bisect angle PTQ? (c) Find OT and TP. (Use sqrt(3) = 1.732)",
          "marks": 5,
          "type": "CASE",
          "probability": "medium",
          "answer": "1) The radii to the contact points are perpendicular to the tangents, so angle OPT = angle OQT = 90 degrees. 2) In quadrilateral OPTQ the angles sum to 360 degrees, so angle POQ = 360 - 90 - 90 - 60 = 120 degrees. 3) Triangles OPT and OQT are congruent by RHS (OP = OQ radii, OT common, right angles equal), so angle OTP = angle OTQ = 30 degrees; hence OT bisects angle PTQ. 4) In right triangle OPT, angle P = 90 and angle T = 30, so sin 30 = OP/OT = 6/OT, giving OT = 6/(1/2) = 12 cm. 5) Also tan 30 = OP/TP = 6/TP = 1/sqrt(3), so TP = 6 sqrt(3) = 6 x 1.732 = 10.39 cm. 6) Check: the sides opposite 30, 60 and 90 degrees in this triangle are 6, 6 sqrt(3) and 12, matching the ratio 1 : sqrt(3) : 2 of a 30-60-90 triangle."
        }
      ]
    },
    {
      "number": 11,
      "title": "Areas Related to Circles",
      "summary": "This chapter computes areas and lengths connected with circles. It revises circumference and area, then develops the area of a sector as (theta/360) x pi r^2 and the length of an arc as (theta/360) x 2 pi r. The area of a segment is obtained by subtracting the triangle formed by the two radii from the sector area, and shaded regions are found by adding or subtracting known plane figures. Applications include wheel revolutions, clock hands, grazing animals and designs inside circles.",
      "weightageMarks": 5,
      "difficulty": "medium",
      "hotTopics": [
        "Circumference and area of a circle",
        "Area of a sector",
        "Length of an arc and perimeter of a sector",
        "Area of minor and major segments",
        "Wheel revolutions and clock problems",
        "Areas of combinations of plane figures"
      ],
      "sections": [
        {
          "heading": "Circumference and Area of a Circle",
          "points": [
            "The perimeter of a circle is its circumference: C = 2 pi r = pi d, where d = 2r is the diameter.",
            "Area of a circle: A = pi r^2; when the diameter is given, A = pi d^2/4.",
            "pi is the constant ratio C/d for every circle, approximately 22/7 or 3.1416; use 22/7 when the radius is a multiple of 7 and 3.14 when decimals are given.",
            "Examples: r = 7 gives C = 2 x (22/7) x 7 = 44 cm and A = (22/7) x 49 = 154 cm^2; d = 42 gives A = (22/7) x 21 x 21 = 1386 cm^2.",
            "To find r from C: r = C/(2 pi); example: C = 44 cm gives r = 7 cm and then A = 154 cm^2.",
            "The distance covered by a wheel in one revolution equals its circumference; number of revolutions = total distance / circumference.",
            "Example: a wheel of diameter 70 cm has C = 2 x (22/7) x 35 = 220 cm, so in 220 m = 22000 cm it makes 22000/220 = 100 revolutions."
          ],
          "keyTerms": [
            { "term": "Circumference", "meaning": "The perimeter of a circle, C = 2 pi r." },
            { "term": "Area", "meaning": "The region enclosed by the circle, A = pi r^2." },
            { "term": "Revolution", "meaning": "One complete turn of a wheel, covering a distance equal to the circumference." }
          ],
          "trick": "C = 2 pi r keeps the 2; A = pi r^2 keeps the square. Revolution distance is always the circumference, never the area.",
          "examPointer": "Finding the area from a given circumference and counting wheel revolutions are standard 2-3 markers; both need the radius, not the diameter, inside the formula."
        },
        {
          "heading": "Sector of a Circle: Area and Arc Length",
          "points": [
            "A sector is the region between two radii and the arc joining their ends, like a slice of pizza; theta is the central angle at the centre.",
            "Area of sector = (theta/360) x pi r^2; the whole circle corresponds to theta = 360 degrees.",
            "Length of arc = (theta/360) x 2 pi r; the arc is the same fraction theta/360 of the circumference.",
            "Perimeter of a sector = length of arc + 2r, since the two straight radii bound the slice.",
            "Simplify the fraction first: theta = 90 gives 1/4 of the circle, 180 gives 1/2, 60 gives 1/6 and 120 gives 1/3.",
            "Example: r = 21, theta = 60, pi = 22/7: area = (1/6) x (22/7) x 441 = 231 cm^2 and arc = (1/6) x 2 x (22/7) x 21 = 22 cm.",
            "Example: r = 7, theta = 90: area = (1/4) x (22/7) x 49 = 38.5 cm^2, arc = (1/4) x 44 = 11 cm and perimeter = 11 + 14 = 25 cm."
          ],
          "keyTerms": [
            { "term": "Sector", "meaning": "The region bounded by two radii and the arc between them." },
            { "term": "Arc", "meaning": "A part of the circumference of the circle." },
            { "term": "Central angle", "meaning": "The angle theta between the two radii at the centre." },
            { "term": "Quadrant", "meaning": "A sector with central angle 90 degrees, one quarter of the circle." }
          ],
          "trick": "Fraction first: write theta/360, cancel with 360, then multiply by pi r^2 for area or 2 pi r for arc.",
          "examPointer": "Sector area with 60 or 90 degrees and radius a multiple of 7 (answers like 231 or 38.5) appears in boards almost every alternate year."
        },
        {
          "heading": "Segment of a Circle",
          "points": [
            "A chord divides the circle into a minor segment (the smaller part) and a major segment (the larger part).",
            "Area of minor segment = area of the corresponding sector - area of the triangle formed by the two radii and the chord.",
            "For theta = 90 degrees the triangle is right angled with legs r and r, so its area = (1/2) x r x r = r^2/2.",
            "For theta = 60 degrees the triangle is equilateral with side r, so its area = (sqrt(3)/4) r^2, using sqrt(3) = 1.732.",
            "For theta = 120 degrees the triangle has area (1/2) r^2 sin 120 = (sqrt(3)/4) r^2 as well.",
            "Area of major segment = pi r^2 - area of minor segment.",
            "Example: r = 14, theta = 90, pi = 22/7: sector = (1/4) x (22/7) x 196 = 154 cm^2, triangle = 196/2 = 98 cm^2, minor segment = 154 - 98 = 56 cm^2 and major segment = 616 - 56 = 560 cm^2."
          ],
          "keyTerms": [
            { "term": "Segment", "meaning": "The region between a chord and the arc it subtends." },
            { "term": "Chord", "meaning": "A line segment joining two points on the circle." },
            { "term": "Minor and major segment", "meaning": "The smaller and larger regions into which a chord divides the circle." }
          ],
          "trick": "SEGMENT = SECTOR minus TRIANGLE. Never subtract the triangle from the whole circle; subtract it from the sector.",
          "examPointer": "The 90 degree chord problem (sector 154, triangle 98, segment 56 for r = 14) is a classic 3-5 marker; state all three areas separately for full credit."
        },
        {
          "heading": "Areas of Combinations of Plane Figures",
          "points": [
            "Shaded-region problems combine circles, squares, triangles and quadrants; identify every piece before writing any formula.",
            "Circle inscribed in a square of side a has radius a/2; area between them = a^2 - (pi/4) a^2; example: a = 14 gives 196 - 154 = 42 cm^2.",
            "Quadrants cut from corners: four quadrants of radius r together make one full circle of area pi r^2; subtract this from the square's area.",
            "Ring (annulus) between two concentric circles: area = pi(R^2 - r^2); example: R = 10, r = 6, pi = 3.14 gives 3.14 x 64 = 200.96 cm^2.",
            "Animal tied at a corner of a field grazes a quadrant: area = (90/360) x pi r^2 = pi r^2/4; tied at the middle of a side it grazes a semicircle, pi r^2/2.",
            "Design problems (brooches, table covers, flower beds): add the non-overlapping parts or subtract the removed parts, labelling every radius and side in the figure.",
            "Clock problems: the minute hand sweeps 360 degrees in 60 minutes, that is 6 degrees per minute; the swept area is a sector with radius equal to the hand length."
          ],
          "keyTerms": [
            { "term": "Quadrant", "meaning": "One quarter of a circle, a sector of 90 degrees." },
            { "term": "Annulus (ring)", "meaning": "The region between two concentric circles, area pi(R^2 - r^2)." },
            { "term": "Inscribed circle", "meaning": "A circle touching all sides of a polygon from inside, with radius half the side of the square." },
            { "term": "Shaded region", "meaning": "The target region obtained by adding or subtracting standard plane figures." }
          ],
          "trick": "SHADED = WHOLE minus REMOVED (or the sum of disjoint pieces). Count quadrants: four quarters = one full circle.",
          "examPointer": "A circle inside a square of side 14 cm (answer 42 cm^2) and the goat tied at a corner are the two most repeated shaded-area questions."
        },
        {
          "heading": "Worked Strategy for Area Problems",
          "points": [
            "Step 1: draw and label the figure with every radius, side and angle marked; identify the required region as an addition or subtraction of standard shapes.",
            "Step 2: write each formula symbolically before substituting numbers; examiners award marks for the formula line itself.",
            "Step 3: choose pi wisely: 22/7 when radii are multiples of 7, and 3.14 when the question says so or works with decimals.",
            "Worked example: sector angle 30 and r = 6: area = (30/360) x pi x 36 = 3 pi; with pi = 3.14 the area = 9.42 cm^2.",
            "Worked example: a minute hand 10 cm long from 4:00 to 4:30 sweeps 180 degrees: area = (1/2) x 3.14 x 100 = 157 cm^2 and tip distance = (1/2) x 2 x 3.14 x 10 = 31.4 cm.",
            "Step 4: attach correct units at every stage: lengths in cm or m and areas in cm^2 or m^2.",
            "Step 5: sanity-check the size: a segment must be smaller than its sector, and a shaded region smaller than the whole figure."
          ],
          "keyTerms": [
            { "term": "Formula line", "meaning": "Writing the symbolic formula before substitution, which earns explicit method marks." },
            { "term": "Unit conversion", "meaning": "Changing m to cm (or reverse) before computing revolutions and areas." },
            { "term": "Sanity check", "meaning": "A quick comparison ensuring the computed region is smaller than its container figure." }
          ],
          "trick": "Write the formula, then fill numbers, then cancel the fraction theta/360; three tidy lines beat one messy calculation.",
          "examPointer": "Answers without units, or mixing pi = 22/7 with pi = 3.14 in the same question, lose marks even when the arithmetic is right."
        },
        {
          "heading": "Common Mistakes and Exam Traps",
          "points": [
            "Using pi r^2 for an arc length or 2 pi r for an area; area is in square units while arc length is in linear units.",
            "Substituting the diameter where the radius is needed: the area of a circle of diameter 20 cm is pi x 10 x 10 = 314 cm^2, not pi x 400.",
            "Forgetting to subtract the triangle when finding a segment area, which wrongly gives the sector instead.",
            "Perimeter of a sector: omitting or subtracting the two radii; the correct formula is arc + 2r.",
            "Mixing pi = 22/7 and pi = 3.14 in one question, or using 22/7 with a radius not divisible by 7 and inviting awkward fractions.",
            "Clock errors: the minute hand moves 6 degrees per minute (not per hour), so in 5 minutes it sweeps 30 degrees.",
            "In grazing problems, using the full circle instead of the fraction fixed by the corner: a square corner allows only a quarter circle.",
            "Reporting areas without square units, or rounding too early; round only the final answer."
          ],
          "keyTerms": [
            { "term": "Linear vs square units", "meaning": "Arcs and perimeters use cm or m; sectors, segments and shaded regions use cm^2 or m^2." },
            { "term": "Fraction of circle", "meaning": "The factor theta/360 that scales both area and circumference formulas." },
            { "term": "Rounding", "meaning": "Trimming only the final decimal answer to the demanded accuracy." }
          ],
          "trick": "Ask three questions: is it length or area, is r the radius or half the diameter, and which fraction theta/360 of the circle am I holding?",
          "examPointer": "The diameter-radius substitution trap and the segment-minus-triangle slip are the two most heavily penalised errors in this chapter."
        }
      ],
      "mcqs": [
        {
          "question": "The circumference of a circle of radius 7 cm is (pi = 22/7)",
          "options": ["22 cm", "44 cm", "49 cm", "154 cm"],
          "answerIndex": 1,
          "explanation": "C = 2 pi r = 2 x (22/7) x 7 = 44 cm.",
          "difficulty": "easy"
        },
        {
          "question": "The area of a circle of diameter 20 cm is (pi = 3.14)",
          "options": ["314 cm^2", "628 cm^2", "62.8 cm^2", "1256 cm^2"],
          "answerIndex": 0,
          "explanation": "Radius = 10 cm, so area = pi r^2 = 3.14 x 100 = 314 cm^2.",
          "difficulty": "easy",
          "pyq": "CBSE 2020"
        },
        {
          "question": "The area of a sector of a circle of radius 7 cm with central angle 90 degrees is (pi = 22/7)",
          "options": ["19.25 cm^2", "38.5 cm^2", "77 cm^2", "154 cm^2"],
          "answerIndex": 1,
          "explanation": "Area = (90/360) x (22/7) x 49 = (1/4) x 154 = 38.5 cm^2.",
          "difficulty": "easy"
        },
        {
          "question": "The length of the arc of a sector of radius 21 cm and angle 60 degrees is (pi = 22/7)",
          "options": ["231 cm", "44 cm", "22 cm", "11 cm"],
          "answerIndex": 2,
          "explanation": "Arc = (60/360) x 2 x (22/7) x 21 = (1/6) x 132 = 22 cm.",
          "difficulty": "easy"
        },
        {
          "question": "The diameter of the wheel of a cart is 70 cm. To travel 220 m, the wheel makes (pi = 22/7)",
          "options": ["10 revolutions", "50 revolutions", "100 revolutions", "200 revolutions"],
          "answerIndex": 2,
          "explanation": "Circumference = 2 x (22/7) x 35 = 220 cm; revolutions = 22000/220 = 100.",
          "difficulty": "medium",
          "pyq": "CBSE 2019"
        },
        {
          "question": "The area of a sector of angle theta in a circle of radius r is",
          "options": ["(theta/180) x 2 pi r", "(theta/360) x pi r^2", "(theta/360) x 2 pi r", "2 pi r^2"],
          "answerIndex": 1,
          "explanation": "A sector is the fraction theta/360 of the circle, so its area = (theta/360) x pi r^2.",
          "difficulty": "easy"
        },
        {
          "question": "The radius of a circle whose circumference and area are numerically equal is",
          "options": ["1 unit", "2 units", "4 units", "pi units"],
          "answerIndex": 1,
          "explanation": "2 pi r = pi r^2 gives r = 2, since r is not zero.",
          "difficulty": "medium",
          "pyq": "CBSE 2023"
        },
        {
          "question": "The perimeter of a sector of a circle of radius 7 cm with central angle 90 degrees is (pi = 22/7)",
          "options": ["11 cm", "18 cm", "25 cm", "39 cm"],
          "answerIndex": 2,
          "explanation": "Arc = (1/4) x 44 = 11 cm and perimeter = arc + 2r = 11 + 14 = 25 cm.",
          "difficulty": "medium"
        },
        {
          "question": "A minute hand of a clock is 14 cm long. The area swept by it in 5 minutes is (pi = 22/7)",
          "options": ["25.67 cm^2", "51.33 cm^2", "77 cm^2", "154 cm^2"],
          "answerIndex": 1,
          "explanation": "In 5 minutes the hand sweeps 30 degrees; area = (30/360) x (22/7) x 196 = 616/12 = 51.33 cm^2.",
          "difficulty": "medium"
        },
        {
          "question": "A chord subtends a right angle at the centre of a circle of radius 14 cm. The area of the minor segment is (pi = 22/7)",
          "options": ["98 cm^2", "154 cm^2", "56 cm^2", "252 cm^2"],
          "answerIndex": 2,
          "explanation": "Sector = (1/4) x 616 = 154 and triangle = (1/2) x 14 x 14 = 98, so minor segment = 154 - 98 = 56 cm^2.",
          "difficulty": "medium"
        },
        {
          "question": "The area of a ring whose outer and inner radii are 10 cm and 6 cm is (pi = 3.14)",
          "options": ["64 cm^2", "125.6 cm^2", "200.96 cm^2", "78.5 cm^2"],
          "answerIndex": 2,
          "explanation": "Area = pi(R^2 - r^2) = 3.14 x (100 - 36) = 3.14 x 64 = 200.96 cm^2.",
          "difficulty": "medium"
        },
        {
          "question": "A goat is tied to a corner of a square field of side 15 m with a rope 7 m long. The area of the field it can graze is (pi = 22/7)",
          "options": ["154 m^2", "38.5 m^2", "77 m^2", "19.25 m^2"],
          "answerIndex": 1,
          "explanation": "A corner allows only a quadrant: area = (1/4) x (22/7) x 49 = 154/4 = 38.5 m^2.",
          "difficulty": "medium",
          "pyq": "CBSE 2020"
        }
      ],
      "boardQuestions": [
        {
          "question": "Find the area of a sector of a circle of radius 21 cm and central angle 60 degrees. Also find the length of its arc and the perimeter of the sector. (pi = 22/7)",
          "marks": 3,
          "type": "SA",
          "probability": "very-high",
          "answer": "1) Fraction of the circle = 60/360 = 1/6. 2) Area of sector = (1/6) x pi r^2 = (1/6) x (22/7) x 21 x 21 = (1/6) x 1386 = 231 cm^2. 3) Length of arc = (1/6) x 2 pi r = (1/6) x 2 x (22/7) x 21 = (1/6) x 132 = 22 cm. 4) Perimeter of sector = arc + 2r = 22 + 42 = 64 cm. 5) Check: 231 x 6 = 1386, the full circle area, confirming the one-sixth fraction."
        },
        {
          "question": "The circumference of a circle is 44 cm. Find its area. (pi = 22/7)",
          "marks": 2,
          "type": "SA",
          "probability": "high",
          "answer": "1) Use C = 2 pi r: 44 = 2 x (22/7) x r = (44/7) r. 2) Hence r = 44 x 7/44 = 7 cm. 3) Area = pi r^2 = (22/7) x 7 x 7 = 22 x 7 = 154 cm^2. 4) Check: with r = 7 the circumference is 2 x (22/7) x 7 = 44 cm, as given. 5) Note the order: the radius must be recovered from the circumference first; substituting 44 directly into pi r^2 would be wrong because 44 is the perimeter, not the radius."
        },
        {
          "question": "A chord of a circle of radius 14 cm subtends a right angle at the centre. Find the areas of (i) the minor segment and (ii) the major segment. (pi = 22/7)",
          "marks": 5,
          "type": "LA",
          "probability": "very-high",
          "answer": "1) Fraction of the circle for 90 degrees = 90/360 = 1/4. 2) Area of minor sector = (1/4) x (22/7) x 14 x 14 = (1/4) x 616 = 154 cm^2. 3) The triangle formed by the two radii and the chord is right angled with legs 14 cm and 14 cm, so its area = (1/2) x 14 x 14 = 98 cm^2. 4) Area of minor segment = 154 - 98 = 56 cm^2. 5) Area of the whole circle = (22/7) x 196 = 616 cm^2, so area of major segment = 616 - 56 = 560 cm^2. 6) Check: 56 + 560 = 616, the total area, so the two segments partition the circle correctly."
        },
        {
          "question": "From each corner of a square card of side 4 cm, a quadrant of a circle of radius 1 cm is cut out, and a circle of diameter 2 cm is also cut from the centre. Find the area of the remaining portion of the card. (pi = 3.14)",
          "marks": 5,
          "type": "LA",
          "probability": "high",
          "answer": "1) Area of the square card = 4 x 4 = 16 cm^2. 2) The four quadrants at the four corners, each of radius 1 cm, together make one full circle of radius 1 cm: total area removed = pi x 1 x 1 = 3.14 cm^2. 3) The circle cut from the centre has diameter 2 cm, so radius 1 cm: area = 3.14 cm^2. 4) Total area removed = 3.14 + 3.14 = 6.28 cm^2. 5) Remaining area = 16 - 6.28 = 9.72 cm^2. 6) Note how four quarters collapse into one circle; computing them as four separate sectors invites errors, while a single pi r^2 is enough."
        },
        {
          "question": "Read the source and answer the questions: A horse is tethered to a peg at one corner of a square grass field of side 15 m by a rope of length 7 m. (a) What area of the field can the horse graze? (b) If the rope is lengthened to 10.5 m, what area becomes grazable? (c) How much extra grass area does the horse gain? (pi = 22/7)",
          "marks": 4,
          "type": "CASE",
          "probability": "high",
          "answer": "1) The peg at a corner allows the rope to sweep only a quadrant (90 degrees) of a circle. 2) (a) Area grazed = (90/360) x pi r^2 = (1/4) x (22/7) x 7 x 7 = (1/4) x 154 = 38.5 m^2. 3) (b) With rope 10.5 m: area = (1/4) x (22/7) x 10.5 x 10.5 = (1/4) x (22/7) x 110.25 = (1/4) x 346.5 = 86.625 m^2. 4) (c) Extra area gained = 86.625 - 38.5 = 48.125 m^2. 5) The field side 15 m exceeds both rope lengths, so the circular sweep is never cut off by the boundary; if the rope were longer than 15 m, the quarter-circle argument would need modification."
        },
        {
          "question": "Read the source and answer the questions: The minute hand of a circular clock is 12 cm long. (a) Through what angle does the minute hand turn in 25 minutes? (b) Find the area swept by the minute hand in 25 minutes. (c) Find the distance travelled by the tip of the minute hand in 25 minutes. (pi = 3.14)",
          "marks": 5,
          "type": "CASE",
          "probability": "medium",
          "answer": "1) The minute hand completes 360 degrees in 60 minutes, so in 25 minutes it turns (25/60) x 360 = 150 degrees. 2) The swept region is a sector of radius 12 cm and angle 150 degrees; the fraction = 150/360 = 5/12. 3) Area swept = (5/12) x pi x 12 x 12 = (5/12) x 3.14 x 144 = 5 x 3.14 x 12 = 188.4 cm^2. 4) Distance travelled by the tip = length of arc = (5/12) x 2 x 3.14 x 12 = 5 x 3.14 x 2 = 31.4 cm. 5) Notice the area uses pi r^2 while the tip's path uses 2 pi r; confusing the two is the classic error in clock problems."
        }
      ]
    }
  ]
};
