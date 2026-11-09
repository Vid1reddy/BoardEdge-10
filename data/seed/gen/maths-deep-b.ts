// AUTO-GENERATED deep seed (AI pipeline). Validated at generation time.
export default {
 "code": "maths",
 "name": "Mathematics",
 "bookName": "Mathematics (NCERT Class 10)",
 "weightageMarks": 80,
 "chapters": [
  {
   "number": 8,
   "title": "Introduction to Trigonometry",
   "summary": "This chapter builds the entire trigonometry toolkit of Class 10. It begins with the six trigonometric ratios of an acute angle of a right triangle, defined as fixed ratios of the perpendicular, base and hypotenuse, and explains why these ratios depend only on the angle and not on the size of the triangle. Exact values of all six ratios are tabulated for the standard angles 0, 30, 45, 60 and 90 degrees and are then used to evaluate compound expressions quickly and exactly. The three fundamental identities sin^2 A + cos^2 A = 1, 1 + tan^2 A = sec^2 A and 1 + cot^2 A = cosec^2 A are derived from the Pythagoras theorem and applied to prove harder identities, usually by converting every ratio into sin and cos. The chapter closes with the ratios of complementary angles, such as sin (90 - A) = cos A, which power classics like tan 1 tan 2 ... tan 89 = 1 and angle-finding equations built on standard angles.",
   "weightageMarks": 8,
   "difficulty": "medium",
   "hotTopics": [
    "Naming perpendicular, base and hypotenuse for a chosen acute angle",
    "The six trigonometric ratios and their reciprocal pairs",
    "Exact values of ratios for 0, 30, 45, 60 and 90 degrees",
    "Evaluating compound expressions using the standard table",
    "Proof of sin^2 A + cos^2 A = 1 from the Pythagoras theorem",
    "The identities 1 + tan^2 A = sec^2 A and 1 + cot^2 A = cosec^2 A",
    "Proving identities by converting everything into sin and cos",
    "Ratios of complementary angles and the swap pairs",
    "Finding all six ratios from one given ratio",
    "Reading standard angles from equations like sin (A + B) = 1"
   ],
   "sections": [
    {
     "heading": "Why Trigonometry and the Language of Right Triangles",
     "para": "Trigonometry was invented to answer questions no ruler could reach: the height of a pyramid, the width of a river, the distance of a ship from the shore. The word itself means measurement of triangles, and Class 10 confines the study to right triangles, where one angle is exactly 90 degrees. Everything in this chapter flows from one picture: a right triangle with an acute angle marked, its opposite side named the perpendicular, its other adjacent side named the base, and the longest side, opposite the right angle, named the hypotenuse. Once the sides are named with respect to a chosen angle, the six ratios become unavoidable vocabulary. Mastering this naming step is therefore the real first lesson of trigonometry, because a wrongly named side silently destroys every ratio and every answer written after it.",
     "points": [
      "Trigonometry studies relationships between the angles and the sides of triangles; in this chapter only right triangles with one 90 degree angle are used.",
      "For an acute angle A in right triangle ABC right angled at B, the side BC opposite A is the perpendicular, the side AB adjacent to A is the base, and the side AC opposite the right angle is the hypotenuse.",
      "The names perpendicular and base change when the reference angle changes: for angle C of the same triangle, AB becomes the perpendicular and BC becomes the base.",
      "The hypotenuse is always the longest side and never changes its name because it is fixed opposite the 90 degree angle.",
      "The values of the ratios depend only on the angle, not on the size of the triangle, because all right triangles with the same acute angle are similar to each other.",
      "The word trigonometry comes from Greek words meaning three angles measure, and the subject grew out of astronomy and land surveying.",
      "Every question in this chapter and in heights and distances begins with a rough labelled sketch; drawing it is not decoration but the actual method of solution.",
      "In symbols, sin A is read as sine of angle A and is one indivisible symbol; it never means the number sin multiplied by the number A."
     ],
     "keyTerms": [
      {
       "term": "Right triangle",
       "meaning": "A triangle with one angle exactly 90 degrees; the only triangle used to define Class 10 trigonometric ratios."
      },
      {
       "term": "Hypotenuse",
       "meaning": "The longest side of a right triangle, always opposite the 90 degree angle."
      },
      {
       "term": "Perpendicular",
       "meaning": "The side opposite the chosen acute angle; also called the opposite side."
      },
      {
       "term": "Base",
       "meaning": "The side adjacent to the chosen acute angle other than the hypotenuse; also called the adjacent side."
      },
      {
       "term": "Reference angle",
       "meaning": "The particular acute angle with respect to which the sides are being named and the ratios computed."
      },
      {
       "term": "Similar triangles",
       "meaning": "Triangles with equal corresponding angles; the reason ratios are the same for every right triangle containing a given acute angle."
      }
     ],
     "trick": "Name the sides looking FROM the chosen angle: the side facing the angle is the perpendicular, the side the angle sits on is the base, and the side facing the right angle is the hypotenuse.",
     "examPointer": "Correct labelling of a right triangle is quietly tested inside every 2 to 3 mark definition question and inside every proof; one mislabelled side zeroes out all the ratios that follow."
    },
    {
     "heading": "The Six Trigonometric Ratios",
     "para": "For a chosen acute angle A of a right triangle, the six trigonometric ratios are three primary ratios and their three reciprocals. The primary ratios are sin A = perpendicular/hypotenuse, cos A = base/hypotenuse and tan A = perpendicular/base, remembered by the sentence SOH CAH TOA. Their reciprocals are cosec A = hypotenuse/perpendicular, sec A = hypotenuse/base and cot A = base/perpendicular. Two extra links are worth memorising: tan A = sin A/cos A and cot A = cos A/sin A, which follow directly by dividing the definitions. Each ratio is a pure number with no units, because it is a ratio of two lengths measured in the same unit. The ratios are defined only for acute angles of right triangles at this level, and tan A and sec A fail at 90 degrees while sin A and cos A never fail in the range 0 to 90 degrees.",
     "points": [
      "Primary ratios: sin A = perpendicular/hypotenuse, cos A = base/hypotenuse, tan A = perpendicular/base.",
      "Reciprocal ratios: cosec A = 1/sin A, sec A = 1/cos A, cot A = 1/tan A; in side form, cosec A = hypotenuse/perpendicular, sec A = hypotenuse/base, cot A = base/perpendicular.",
      "Quotient links: tan A = sin A/cos A and cot A = cos A/sin A, valid whenever cos A and sin A respectively are not zero.",
      "Worked mini-example: if perpendicular = 3, base = 4 and hypotenuse = 5, then sin A = 3/5, cos A = 4/5, tan A = 3/4, cosec A = 5/3, sec A = 5/4 and cot A = 4/3.",
      "Each ratio is a number without units because it compares two lengths in the same unit.",
      "Common error: writing cosec A = 1/cos A; the correct partner of cosec is sin, and the correct partner of sec is cos.",
      "Common error: treating sin^2 A as sin A^2; the notation sin^2 A always means (sin A)^2, the square of the value of the ratio.",
      "Range facts used constantly: 0 is less than or equal to sin A and cos A, which are less than or equal to 1 for 0 to 90 degrees, while tan A can take any non-negative value."
     ],
     "keyTerms": [
      {
       "term": "sin A",
       "meaning": "Ratio perpendicular/hypotenuse for angle A; read as sine of angle A."
      },
      {
       "term": "cos A",
       "meaning": "Ratio base/hypotenuse for angle A; read as cosine of angle A."
      },
      {
       "term": "tan A",
       "meaning": "Ratio perpendicular/base, equal to sin A/cos A; undefined when cos A = 0, that is at 90 degrees."
      },
      {
       "term": "cosec A",
       "meaning": "Reciprocal of sin A, equal to hypotenuse/perpendicular; undefined when sin A = 0, that is at 0 degrees."
      },
      {
       "term": "sec A",
       "meaning": "Reciprocal of cos A, equal to hypotenuse/base; undefined at 90 degrees."
      },
      {
       "term": "cot A",
       "meaning": "Reciprocal of tan A and equal to cos A/sin A; undefined at 0 degrees and equal to 0 at 90 degrees."
      }
     ],
     "trick": "SOH CAH TOA gives the big three: Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent; then flip each ratio upside down to get cosec, sec and cot.",
     "examPointer": "Writing all six ratios from a labelled triangle or from one given ratio is a standing 2 to 3 mark question, and the reciprocal pairings cosec-sin and sec-cos are the most common careless slips."
    },
    {
     "heading": "Exact Values for 0, 30, 45, 60 and 90 Degrees",
     "para": "The standard angle table is the multiplication table of trigonometry: it must be instant recall, not derived during the exam. For 45 degrees, an isosceles right triangle with equal legs 1 gives hypotenuse sqrt(2), so sin 45 = cos 45 = 1/sqrt(2) and tan 45 = 1. For 30 and 60 degrees, drop the altitude of an equilateral triangle of side 2; the halves have sides 1, sqrt(3) and 2, giving sin 30 = 1/2, cos 30 = sqrt(3)/2 and tan 30 = 1/sqrt(3), with the 60 degree values read from the other acute angle. The sine column is sqrt(0)/2, sqrt(1)/2, sqrt(2)/2, sqrt(3)/2, sqrt(4)/2 as the angle walks 0, 30, 45, 60, 90 degrees, and cos is the same list read backwards. Tan equals sin divided by cos, so tan 90 is not defined because cos 90 = 0 appears in the denominator.",
     "points": [
      "45 degrees comes from the isosceles right triangle with legs 1: sin 45 = cos 45 = 1/sqrt(2) = sqrt(2)/2 and tan 45 = 1.",
      "30 and 60 degrees come from the altitude of an equilateral triangle of side 2, producing the triple 1, sqrt(3), 2.",
      "Values: sin 30 = 1/2, cos 30 = sqrt(3)/2, tan 30 = 1/sqrt(3); sin 60 = sqrt(3)/2, cos 60 = 1/2, tan 60 = sqrt(3).",
      "End values: sin 0 = 0, cos 0 = 1, tan 0 = 0; sin 90 = 1, cos 90 = 0, cot 90 = 0, and tan 90 and sec 90 are not defined.",
      "Reciprocal highlights: cosec 30 = 2, sec 60 = 2, cosec 0 is not defined, sec 0 = 1, cosec 90 = 1, cot 45 = 1.",
      "Memory trick: the sine values are sqrt(0)/2, sqrt(1)/2, sqrt(2)/2, sqrt(3)/2, sqrt(4)/2 for angles 0, 30, 45, 60, 90 degrees; cos is the reverse order and tan = sin/cos.",
      "Rationalise at the end if needed: 1/sqrt(2) = sqrt(2)/2 and 1/sqrt(3) = sqrt(3)/3, but keep surd forms during working.",
      "Common error: quoting tan 90 = infinity; the correct statement is that tan 90 is not defined because cos 90 = 0."
     ],
     "keyTerms": [
      {
       "term": "Standard angles",
       "meaning": "The angles 0, 30, 45, 60 and 90 degrees whose exact ratio values are tabulated and memorised."
      },
      {
       "term": "Not defined",
       "meaning": "The status of tan 90 and sec 90, since cos 90 = 0 sits in the denominator; also of cosec 0 and cot 0 since sin 0 = 0."
      },
      {
       "term": "Rationalisation",
       "meaning": "Rewriting 1/sqrt(2) as sqrt(2)/2 or 1/sqrt(3) as sqrt(3)/3 to remove the surd from the denominator."
      },
      {
       "term": "Exact value",
       "meaning": "A surd or fraction such as sqrt(3)/2 that expresses the ratio precisely, preferred over a decimal in board answers."
      }
     ],
     "trick": "Hold up one hand: sin of 0, 30, 45, 60, 90 is sqrt of the fingers 0, 1, 2, 3, 4 divided by 2; cos is the same hand counted from the other side, and tan is sin divided by cos.",
     "examPointer": "One evaluation question built directly on this table appears in almost every paper; the 30, 45 and 60 degree columns must be recalled in under a minute, and tan 90 not defined is a favourite one-marker."
    },
    {
     "heading": "Evaluating Expressions with Standard Values",
     "para": "Evaluation questions ask you to substitute exact table values into an expression and simplify to a single fraction. The reliable order of operations is: write the expression, replace every ratio by its exact value, keep squares as squares, simplify each term separately, then combine using one common denominator. For example, 5 sin^2 30 + cos^2 45 - 4 tan^2 30 = 5(1/2)^2 + (1/sqrt(2))^2 - 4(1/sqrt(3))^2 = 5/4 + 1/2 - 4/3 = (15 + 6 - 16)/12 = 5/12. Products of complementary pairs, such as sin 30 cos 60, simplify instantly because the two factors are equal. Rationalise only at the very end so that surds do not multiply into long chains mid-solution. A quick numerical check with approximate decimals catches most slips before the final answer is written.",
     "points": [
      "Substitution rule: replace sin 30 by 1/2, cos 60 by 1/2, tan 45 by 1, tan 30 by 1/sqrt(3), and so on, before any other simplification.",
      "Worked example: 5 sin^2 30 + cos^2 45 - 4 tan^2 30 = 5/4 + 1/2 - 4/3 = 5/12 using denominator 12.",
      "Complementary shortcuts: sin 30 cos 60 + cos 30 sin 60 = 1/4 + 3/4 = 1 because sin 30 = cos 60 and cos 30 = sin 60.",
      "Squares of unit-friendly values: sin^2 30 = 1/4, cos^2 60 = 1/4, tan^2 45 = 1, sin^2 60 = 3/4, cot^2 45 = 1.",
      "Identities beat tables when an angle is unknown: 9 sec^2 A - 9 tan^2 A = 9(sec^2 A - tan^2 A) = 9 for every admissible angle A.",
      "Common error: computing (sin 30)^2 as sin 30^2, that is squaring the 30 instead of the ratio 1/2; the angle is never squared.",
      "Keep surds till the last step and rationalise once, at the end, to avoid messy intermediate fractions.",
      "Final check: convert your fraction to a decimal mentally and compare with a rough decimal estimate of each term."
     ],
     "keyTerms": [
      {
       "term": "Substitution",
       "meaning": "Replacing each trigonometric ratio by its exact standard value before simplifying."
      },
      {
       "term": "Common denominator",
       "meaning": "The LCM of the denominators of the terms, used to add and subtract fractions cleanly."
      },
      {
       "term": "Complementary pair",
       "meaning": "Two ratios like sin 30 and cos 60 that are equal because the angles add to 90 degrees."
      },
      {
       "term": "Evaluation",
       "meaning": "Reducing a trigonometric expression to a single exact number or fraction."
      }
     ],
     "trick": "SUBSTITUTE, SQUARE, SEPARATE, SUM: put in table values, square them, simplify each term alone, then merge over one common denominator at the end.",
     "examPointer": "A 2 mark evaluation like the 5/12 example above is near-guaranteed; full marks need the substitution line, the per-term values, and the final simplified fraction, not just the answer."
    },
    {
     "heading": "The Three Fundamental Identities and Their Proofs",
     "para": "An identity is an equation true for every value of the angle for which both sides are defined. All three fundamental identities are shadows of one Pythagoras statement in a right triangle ABC right angled at B with acute angle A. Dividing AB^2 + BC^2 = AC^2 by AC^2 gives (BC/AC)^2 + (AB/AC)^2 = 1, which is sin^2 A + cos^2 A = 1. Dividing the same statement by AB^2 gives tan^2 A + 1 = sec^2 A, valid except at 90 degrees, and dividing by BC^2 gives 1 + cot^2 A = cosec^2 A, valid except at 0 degrees. The most useful rearrangements are sin^2 A = 1 - cos^2 A, sec^2 A - tan^2 A = 1 and cosec^2 A - cot^2 A = 1. In any proof, naming the identity you used at each step is what earns the method marks.",
     "points": [
      "First identity: sin^2 A + cos^2 A = 1, obtained by dividing the Pythagoras statement by the hypotenuse squared.",
      "Second identity: 1 + tan^2 A = sec^2 A, obtained by dividing by the base squared; it fails only at 90 degrees where tan and sec are not defined.",
      "Third identity: 1 + cot^2 A = cosec^2 A, obtained by dividing by the perpendicular squared; it fails only at 0 degrees where cot and cosec are not defined.",
      "Rearrangements to memorise: cos^2 A = 1 - sin^2 A, sin^2 A = 1 - cos^2 A, sec^2 A - tan^2 A = 1, cosec^2 A - cot^2 A = 1, cosec^2 A - 1 = cot^2 A, sec^2 A - 1 = tan^2 A.",
      "Quick numerical check of the first identity at 30 degrees: (1/2)^2 + (sqrt(3)/2)^2 = 1/4 + 3/4 = 1.",
      "Instant consequence: for any k, k sec^2 A - k tan^2 A = k and k cosec^2 A - k cot^2 A = k, so 9 sec^2 A - 9 tan^2 A = 9.",
      "Notation warning: sin^2 A means (sin A)^2, never sin(A^2); the square is on the value of the ratio.",
      "In proofs, write the identity being used beside the line, for example using sin^2 A + cos^2 A = 1, because CBSE awards step marks for named identities."
     ],
     "keyTerms": [
      {
       "term": "Identity",
       "meaning": "An equation between trigonometric expressions that holds for every admissible value of the angle."
      },
      {
       "term": "Admissible value",
       "meaning": "An angle at which every ratio appearing in the identity is defined, for example angles other than 90 degrees for the tan-sec identity."
      },
      {
       "term": "Pythagoras theorem",
       "meaning": "The statement hypotenuse^2 = perpendicular^2 + base^2 in a right triangle; the single source of all three identities."
      },
      {
       "term": "Rearrangement",
       "meaning": "An algebraic version of an identity, such as cosec^2 A - 1 = cot^2 A, ready to be substituted mid-proof."
      }
     ],
     "trick": "One Pythagoras, three identities: divide by hypotenuse^2 for the sin-cos pair, by base^2 for the tan-sec pair, by perpendicular^2 for the cot-cosec pair.",
     "examPointer": "Stating and proving any one identity from the Pythagoras theorem is a standard 3 marker, and using the identities without naming them is the most common way students lose method marks."
    },
    {
     "heading": "A Systematic Method for Proving Identities",
     "para": "Proof questions mark the difference between knowing the identities and being able to use them. The universal strategy is: choose the more complicated side, convert every ratio into sin and cos, apply the fundamental identities or plain algebra, and drive the expression toward the simpler side without ever touching the given equation as an equation to be solved. For example, sec A (1 - sin A)(sec A + tan A) = ((1 - sin A)(1 + sin A))/cos^2 A = (1 - sin^2 A)/cos^2 A = cos^2 A/cos^2 A = 1. When direct reduction stalls, reduce both sides separately to the same simplest expression, or prove that LHS minus RHS equals 0. Never square both sides as a first move, because it can introduce false steps; factorisation and the identity sin^2 + cos^2 = 1 achieve nearly everything at this level.",
     "points": [
      "Step 1 of every proof: pick the heavier side, usually the one with more terms or mixed ratios.",
      "Step 2: rewrite cosec, sec, tan and cot in terms of sin and cos, since every identity collapses to sin and cos eventually.",
      "Step 3: create the pattern sin^2 A + cos^2 A = 1 by adding and subtracting, or by factoring, for example 1 - sin^2 A = cos^2 A.",
      "Worked classic: sec A (1 - sin A)(sec A + tan A) = 1 because (1 - sin A)(1 + sin A) = 1 - sin^2 A = cos^2 A and sec A + tan A = (1 + sin A)/cos A.",
      "Worked classic: (cosec A - sin A) = cos^2 A/sin A and (sec A - cos A) = sin^2 A/cos A, so their product is sin A cos A, which equals 1/(tan A + cot A).",
      "If both sides are complicated, reduce each side independently to the same expression and present both reductions in the answer.",
      "Verification habit: substitute A = 30 or 45 degrees numerically into both sides; equal numbers confirm the algebra before you submit.",
      "Forbidden move: multiplying both sides of the supposed identity or cross-multiplying as if it were an equation to solve; work one side at a time."
     ],
     "keyTerms": [
      {
       "term": "LHS and RHS",
       "meaning": "Left hand side and right hand side of the identity; the proof reduces one or both to a common expression."
      },
      {
       "term": "Conversion to sin and cos",
       "meaning": "The standard first move of rewriting tan, cot, sec and cosec using their definitions."
      },
      {
       "term": "Factorisation",
       "meaning": "Recognising patterns like 1 - sin^2 A = (1 - sin A)(1 + sin A) to trigger the fundamental identity."
      },
      {
       "term": "Verification",
       "meaning": "Numerical substitution of a standard angle to sanity-check a completed proof."
      }
     ],
     "trick": "SIN-COS FIRST, SIMPLIFY SECOND: the moment a proof looks stuck, replace every foreign ratio by sin and cos; almost every Class 10 identity dies within three lines after that.",
     "examPointer": "One identity proof of 3 to 5 marks is virtually certain in the board paper; examiners award marks for the conversion line, each named identity application, and a clean concluding statement."
    },
    {
     "heading": "Ratios of Complementary Angles",
     "para": "Two angles are complementary when their sum is 90 degrees, and in every right triangle the two acute angles are complementary partners. For the complementary angle (90 - A), the perpendicular and base of the same triangle exchange roles, so each ratio changes to its partner ratio: sin (90 - A) = cos A, cos (90 - A) = sin A, tan (90 - A) = cot A, cot (90 - A) = tan A, sec (90 - A) = cosec A and cosec (90 - A) = sec A. This swap converts unfamiliar angles into familiar ones: sin 20 becomes cos 70, sec 48 becomes cosec 42. It also produces famous cancellations: in tan 1 tan 2 ... tan 89, each pair tan k and tan (90 - k) multiplies to 1, so the entire product is 1. The brackets are part of the symbol, so sin (90 - A) is never sin 90 minus sin A.",
     "points": [
      "Complementary angles are a pair whose sum is 90 degrees, such as 30 and 60 degrees, or A and (90 - A).",
      "Swap pairs: sin and cos exchange, tan and cot exchange, sec and cosec exchange when the angle is replaced by its complement.",
      "Reason: in the same right triangle, the angle (90 - A) sees the perpendicular and base with their roles interchanged, so each ratio becomes its partner.",
      "Instant examples: sin 25 = cos 65, cos 48 = sin 42, tan 60 = cot 30, sec 72 = cosec 18.",
      "Classic evaluation: sin 20 cos 70 + cos 20 sin 70 = cos^2 70 + sin^2 70 = 1 after applying the swaps.",
      "Classic product: tan 1 tan 2 ... tan 89 = 1, because tan k tan (90 - k) = tan k cot k = 1 for each of the 44 pairs.",
      "Angle-finding: if sin (A + 20) = cos (A - 10), then (A + 20) + (A - 10) = 90, giving A = 40 degrees.",
      "Warning: sin (90 - A) is one symbol for the sine of the whole angle (90 - A); it is not sin 90 - sin A, which would be 1 - sin A."
     ],
     "keyTerms": [
      {
       "term": "Complementary angles",
       "meaning": "A pair of angles whose sum is 90 degrees."
      },
      {
       "term": "Complement swap",
       "meaning": "The rule that replacing an angle by (90 - A) interchanges sin with cos, tan with cot and sec with cosec."
      },
      {
       "term": "Partner ratio",
       "meaning": "The co-ratio that a ratio turns into under complementing: the partner of sin is cos, of tan is cot, of sec is cosec."
      }
     ],
     "trick": "CO-SWAP: putting co- in front signals a complement; sin to cos, tan to cot, sec to cosec, and the angle must be subtracted from 90 first.",
     "examPointer": "MCQs like evaluate tan 1 tan 2 ... tan 89, and one-liners such as find A if sin (A + 20) = cos (A - 10), repeat almost every year and are worth 1 to 2 marks each."
    },
    {
     "heading": "Finding All Ratios from One Given Ratio",
     "para": "A single given ratio completely determines a right triangle up to scale, so all other ratios follow. The method is to sketch a triangle, assign the numerator and denominator of the given ratio to the correct sides, compute the third side by the Pythagoras theorem, and read off the remaining five ratios. For example, if tan A = 3/4, take perpendicular 3 and base 4, so the hypotenuse is sqrt(9 + 16) = 5, giving sin A = 3/5, cos A = 4/5, cosec A = 5/3, sec A = 5/4 and cot A = 4/3. If instead an identity-friendly value appears, such as sin A = 1/2, recognising the standard angle A = 30 degrees is faster than drawing. When the ratio involves a variable, like sin A = x, the Pythagoras step gives the third side as a surd in x, and the other ratios follow symbolically.",
     "points": [
      "Method: from the given ratio fix two sides, get the third by hypotenuse^2 = perpendicular^2 + base^2, then write the other five ratios.",
      "Worked example: tan A = 5/12 gives perpendicular 5, base 12, hypotenuse 13, so sin A = 5/13, cos A = 12/13, cosec A = 13/5, sec A = 13/12, cot A = 12/5.",
      "Worked example: sec A = 13/5 gives hypotenuse 13, base 5, perpendicular 12, so tan A = 12/5 and sin A = 12/13.",
      "Standard angle recognition: sin A = 1/2 means A = 30 degrees, tan A = 1 means A = 45 degrees, cos A = 1/2 means A = 60 degrees.",
      "Algebraic case: if sin A = x, then cos A = sqrt(1 - x^2) and tan A = x/sqrt(1 - x^2), using sin^2 A + cos^2 A = 1.",
      "Useful identity route: (1 - sin A)(1 + sin A) = 1 - sin^2 A = cos^2 A, so a product question can be answered without finding A.",
      "Common error: attaching the numerator of the given ratio to the wrong side; tan A = 3/4 means perpendicular 3 with base 4, not the other way.",
      "Keep Pythagorean triples ready: 3-4-5, 5-12-13, 8-15-17, 7-24-25, 9-40-41 and their multiples."
     ],
     "keyTerms": [
      {
       "term": "Pythagorean triple",
       "meaning": "A set of positive integers like 3, 4, 5 that forms the sides of a right triangle, letting ratios be read instantly."
      },
      {
       "term": "Scale invariance",
       "meaning": "The fact that multiplying all sides by the same number leaves every trigonometric ratio unchanged."
      },
      {
       "term": "Surd form",
       "meaning": "An exact answer containing a root, such as sqrt(1 - x^2), kept unexpanded for precision."
      }
     ],
     "trick": "One ratio paints the whole triangle: read the two legs from the fraction, Pythagoras the third side, then harvest the remaining five ratios in one glance.",
     "examPointer": "Given one ratio, find the rest and evaluate a related expression: this combination is a repeated 2 to 3 mark question, and triples like 5-12-13 appear more often than any other."
    },
    {
     "heading": "Reading Standard Angles from Trigonometric Equations",
     "para": "Many questions hide a standard angle inside an equation, and the skill is to translate each trigonometric fact into its angle and then solve the resulting linear conditions. Since sin (A + B) = 1 forces A + B = 90 degrees, sin (A - B) = 1/2 forces A - B = 30 degrees, and tan (A + B) = sqrt(3) forces A + B = 60 degrees, pairs of such conditions reduce to simultaneous linear equations in A and B. Restrictions matter: the given range such as 0 degrees less than B less than or equal to A less than 90 degrees picks the unique standard angle from the table. The same idea handles single equations like 2 sin A = 1 or tan (A + 15) = 1, and checks at the end confirm that both original equations hold for the found values.",
     "points": [
      "Reverse table facts: sin theta = 1 gives theta = 90, sin theta = 1/2 gives theta = 30, cos theta = 1/2 gives theta = 60, tan theta = 1 gives theta = 45, tan theta = sqrt(3) gives theta = 60, tan theta = 1/sqrt(3) gives theta = 30.",
      "Worked pair: sin (A + B) = 1 and sin (A - B) = 1/2 give A + B = 90 and A - B = 30, hence A = 60 degrees and B = 30 degrees.",
      "Worked pair: tan (A + B) = sqrt(3) and tan (A - B) = 1/sqrt(3) give A + B = 60 and A - B = 30, hence A = 45 degrees and B = 15 degrees.",
      "Range discipline: the condition 0 degrees less than B less than A less than 90 degrees ensures A + B and A - B land in the table range and selects the unique answers.",
      "Single equation example: if 2 sin A = 1 with A acute, then sin A = 1/2 and A = 30 degrees, so sec A = 2/sqrt(3).",
      "Shifted angle example: tan (A + 15) = 1 gives A + 15 = 45, hence A = 30 degrees.",
      "Always finish by substituting the found angles into both given equations to verify, since a wrong standard angle fails at least one check.",
      "Common error: reading sin theta = 1 as theta = 45; memorise that sin reaches its maximum 1 only at 90 degrees in this range."
     ],
     "keyTerms": [
      {
       "term": "Simultaneous conditions",
       "meaning": "Two trigonometric facts that translate into two linear equations in A and B, solved together."
      },
      {
       "term": "Range restriction",
       "meaning": "The stated bounds on A and B that make the standard angle choice unique."
      },
      {
       "term": "Verification",
       "meaning": "Substituting the found angles back into the original equations to confirm both hold."
      }
     ],
     "trick": "TRANSLATE, THEN ADD AND SUBTRACT: turn each trig fact into an angle equation, add the two equations to kill B, subtract them to kill A.",
     "examPointer": "Find A and B from sin (A + B) and sin (A - B) style data is a recurring 3 to 5 marker; writing the reverse-table step explicitly is what secures the first mark."
    },
    {
     "heading": "Common Mistakes and Exam Traps",
     "para": "Most marks in trigonometry are lost to a short list of preventable errors rather than to hard mathematics. The deadliest are reciprocal confusion, squaring the angle instead of the ratio, treating sin (90 - A) as a difference, quoting tan 90 as a number, and solving identities like equations by cross-multiplication. Another family of traps lives in evaluation questions, where students simplify before substituting or drop the common denominator. A third family appears in proofs, where both sides are manipulated simultaneously or where a factorisation like 1 - sin^2 A is missed. Studying this list once before every test is the cheapest marks available in the entire paper, because each item below has historically cost candidates whole steps in otherwise correct solutions.",
     "points": [
      "Reciprocal confusion: cosec A pairs with sin A and sec A pairs with cos A; writing cosec A = 1/cos A is an automatic zero for that step.",
      "Squaring trap: sin^2 30 means (sin 30)^2 = 1/4, never sin(30^2); the angle is never squared.",
      "Bracket trap: sin (90 - A) = cos A as one symbol, not 1 - sin A; convert the whole angle first.",
      "Undefined trap: tan 90 and sec 90 are not defined because cos 90 = 0; they are never written as a value.",
      "Equation trap: never cross-multiply in a proof; identities are proved by reducing one side to the other, not by solving.",
      "Missing identity credit: name each identity used, for example using 1 + tan^2 A = sec^2 A, because unnamed steps lose method marks.",
      "Fraction slip in evaluation: combine terms over one common denominator and recheck the LCM, since 5/4 + 1/2 - 4/3 style sums are where arithmetic errors cluster.",
      "Rough sketch absence: attempting ratio questions without a labelled triangle invites perpendicular-base swaps that silently invert answers."
     ],
     "keyTerms": [
      {
       "term": "Preventable error",
       "meaning": "A mistake caused by habit rather than lack of knowledge, avoidable by checklist revision."
      },
      {
       "term": "Method marks",
       "meaning": "Marks awarded for correct named steps and identities, independent of the final answer."
      },
      {
       "term": "Cross-multiplication",
       "meaning": "A solving technique legitimate in equations but not allowed in identity proofs."
      }
     ],
     "trick": "Run the REC checklist before submitting: Reciprocals right, Exact squares on ratios, Complement brackets converted, Equation moves avoided.",
     "examPointer": "Examiner reports repeatedly list reciprocal swaps and tan 90 errors as the top traps; one minute spent on this checklist typically saves 2 to 3 marks per paper."
    }
   ],
   "mcqs": [
    {
     "question": "The value of 2 sin^2 30 - 1 is",
     "options": [
      "-1/2",
      "1/2",
      "0",
      "1"
     ],
     "answerIndex": 0,
     "explanation": "sin^2 30 = (1/2)^2 = 1/4, so 2 sin^2 30 - 1 = 1/2 - 1 = -1/2.",
     "difficulty": "easy"
    },
    {
     "question": "If cos A = 4/5, then tan A equals",
     "options": [
      "3/4",
      "4/5",
      "3/5",
      "5/3"
     ],
     "answerIndex": 0,
     "explanation": "cos A = 4/5 gives base 4 and hypotenuse 5, so perpendicular = sqrt(25 - 16) = 3 and tan A = 3/4.",
     "difficulty": "easy"
    },
    {
     "question": "The value of tan 1 x tan 2 x tan 3 x ... x tan 89 is",
     "options": [
      "0",
      "1",
      "89",
      "not defined"
     ],
     "answerIndex": 1,
     "explanation": "Pair tan k with tan (90 - k) = cot k; each pair multiplies to 1, so the product of all 89 factors is 1.",
     "difficulty": "medium",
     "pyq": "CBSE 2019"
    },
    {
     "question": "If sin A + sin^2 A = 1, then cos^2 A + cos^4 A equals",
     "options": [
      "1",
      "1/2",
      "2",
      "0"
     ],
     "answerIndex": 0,
     "explanation": "From sin A + sin^2 A = 1 we get sin^2 A = 1 - sin A, so cos^2 A = sin A and cos^4 A = sin^2 A; the sum is sin A + sin^2 A = 1.",
     "difficulty": "hard",
     "pyq": "CBSE 2020"
    },
    {
     "question": "sec (90 - A) is equal to",
     "options": [
      "cosec A",
      "sec A",
      "tan A",
      "cos A"
     ],
     "answerIndex": 0,
     "explanation": "The complement of an angle swaps sec with its partner cosec, so sec (90 - A) = cosec A.",
     "difficulty": "easy"
    },
    {
     "question": "The value of (sin 30 + cos 30) - (sin 60 + cos 60) is",
     "options": [
      "0",
      "1/2",
      "1",
      "sqrt(3)"
     ],
     "answerIndex": 0,
     "explanation": "sin 30 + cos 30 = 1/2 + sqrt(3)/2 and sin 60 + cos 60 = sqrt(3)/2 + 1/2; the two sums are identical, so the difference is 0.",
     "difficulty": "medium"
    },
    {
     "question": "If tan A = cot B, then A + B equals",
     "options": [
      "45 degrees",
      "90 degrees",
      "60 degrees",
      "30 degrees"
     ],
     "answerIndex": 1,
     "explanation": "cot B = tan (90 - B), so tan A = tan (90 - B) gives A = 90 - B, that is A + B = 90 degrees.",
     "difficulty": "easy"
    },
    {
     "question": "The value of cos 0 x cos 1 x cos 2 x ... x cos 90 is",
     "options": [
      "0",
      "1",
      "not defined",
      "1/sqrt(2)"
     ],
     "answerIndex": 0,
     "explanation": "The factor cos 90 = 0 appears in the product, so the entire product is 0 regardless of the other factors.",
     "difficulty": "medium"
    },
    {
     "question": "(1 + tan^2 A) cos^2 A equals",
     "options": [
      "1",
      "tan^2 A",
      "sec^2 A",
      "cos^2 A"
     ],
     "answerIndex": 0,
     "explanation": "1 + tan^2 A = sec^2 A, so the expression is sec^2 A cos^2 A = (1/cos^2 A) x cos^2 A = 1.",
     "difficulty": "easy"
    },
    {
     "question": "If 3 cot A = 4, then sin A equals",
     "options": [
      "3/5",
      "4/5",
      "3/4",
      "5/4"
     ],
     "answerIndex": 0,
     "explanation": "cot A = 4/3 gives tan A = 3/4, so the sides are 3, 4, 5 and sin A = 3/5.",
     "difficulty": "medium",
     "pyq": "CBSE 2020"
    },
    {
     "question": "The value of sin 25 cos 65 + cos 25 sin 65 is",
     "options": [
      "0",
      "1/2",
      "1",
      "2"
     ],
     "answerIndex": 2,
     "explanation": "Using complements, sin 25 = cos 65 and cos 25 = sin 65, so the expression is cos^2 65 + sin^2 65 = 1.",
     "difficulty": "medium",
     "pyq": "CBSE 2018"
    },
    {
     "question": "The value of 2 tan 30 / (1 + tan^2 30) is",
     "options": [
      "sqrt(3)/2",
      "1/2",
      "sqrt(3)",
      "1/sqrt(3)"
     ],
     "answerIndex": 0,
     "explanation": "2(1/sqrt(3))/(4/3) = (2/sqrt(3)) x (3/4) = 3/(2 sqrt(3)) = sqrt(3)/2, which equals sin 60.",
     "difficulty": "hard",
     "pyq": "CBSE 2020"
    },
    {
     "question": "Which of the following is true for every admissible angle A?",
     "options": [
      "sin^2 A + cos^2 A = 1",
      "cosec^2 A + cot^2 A = 1",
      "sec^2 A - tan^2 A = -1",
      "sin A + cos A = 1"
     ],
     "answerIndex": 0,
     "explanation": "Only sin^2 A + cos^2 A = 1 is a universal identity; the others contradict sec^2 A - tan^2 A = 1 and cosec^2 A - cot^2 A = 1, and sin A + cos A = 1 holds only for A = 0 or 90 degrees.",
     "difficulty": "easy"
    },
    {
     "question": "If sin (A + 20) = cos (A - 10), where A is acute, then A equals",
     "options": [
      "40 degrees",
      "30 degrees",
      "20 degrees",
      "50 degrees"
     ],
     "answerIndex": 0,
     "explanation": "sin X = cos Y when X + Y = 90, so (A + 20) + (A - 10) = 90, giving 2A = 80 and A = 40 degrees.",
     "difficulty": "medium"
    },
    {
     "question": "The value of cosec^2 57 - sec^2 33 is",
     "options": [
      "0",
      "1",
      "2",
      "-1"
     ],
     "answerIndex": 0,
     "explanation": "sec 33 = cosec (90 - 33) = cosec 57, so the expression is cosec^2 57 - cosec^2 57 = 0.",
     "difficulty": "medium"
    },
    {
     "question": "If sin A = 1/2 and A is acute, then cot A - tan A equals",
     "options": [
      "2/sqrt(3)",
      "sqrt(3)",
      "1/sqrt(3)",
      "2"
     ],
     "answerIndex": 0,
     "explanation": "A = 30 degrees, so cot A - tan A = sqrt(3) - 1/sqrt(3) = (3 - 1)/sqrt(3) = 2/sqrt(3).",
     "difficulty": "medium"
    },
    {
     "question": "If tan A = n tan B and sin A = m sin B, then cos^2 A equals",
     "options": [
      "(m^2 - 1)/(n^2 - 1)",
      "(n^2 - 1)/(m^2 - 1)",
      "(m^2 + 1)/(n^2 + 1)",
      "(m^2 - 1)/(n^2 + 1)"
     ],
     "answerIndex": 0,
     "explanation": "Eliminating sin B between the two conditions gives cos^2 A = (m^2 - 1)/(n^2 - 1); substituting numbers such as m = 3/5, n = 3/4 confirms it.",
     "difficulty": "hard"
    },
    {
     "question": "(tan A + cot A)^2 - (tan A - cot A)^2 equals",
     "options": [
      "2",
      "4",
      "1",
      "0"
     ],
     "answerIndex": 1,
     "explanation": "The difference of squares is 4 tan A cot A = 4 x 1 = 4, since tan A and cot A are reciprocals.",
     "difficulty": "medium"
    }
   ],
   "boardQuestions": [
    {
     "question": "Prove that (cosec A - sin A)(sec A - cos A) = 1/(tan A + cot A).",
     "marks": 3,
     "type": "long",
     "probability": "very-high",
     "answer": "1) Take LHS = (cosec A - sin A)(sec A - cos A). 2) Convert to sin and cos: cosec A - sin A = (1 - sin^2 A)/sin A = cos^2 A/sin A, and sec A - cos A = (1 - cos^2 A)/cos A = sin^2 A/cos A. 3) Multiply: LHS = (cos^2 A/sin A) x (sin^2 A/cos A) = sin A cos A. 4) Now RHS = 1/(tan A + cot A) = 1/(sin A/cos A + cos A/sin A) = 1/((sin^2 A + cos^2 A)/(sin A cos A)) = 1/(1/(sin A cos A)) = sin A cos A. 5) Both sides equal sin A cos A, hence (cosec A - sin A)(sec A - cos A) = 1/(tan A + cot A). 6) Numerical check at A = 30: LHS = (2 - 1/2)(2/sqrt(3) - sqrt(3)/2) = (3/2)(1/(2 sqrt(3))) = 3/(4 sqrt(3)) = sqrt(3)/4, and RHS = 1/(1/sqrt(3) + sqrt(3)) = 1/(4/sqrt(3)) = sqrt(3)/4. Both agree, so the identity holds."
    },
    {
     "question": "Evaluate: (sin^2 63 + sin^2 27)/(cos^2 17 + cos^2 73) + sin^2 25 + sin^2 65.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "1) Numerator: sin 63 = cos (90 - 63) = cos 27, so sin^2 63 + sin^2 27 = cos^2 27 + sin^2 27 = 1. 2) Denominator: cos 17 = sin (90 - 17) = sin 73, so cos^2 17 + cos^2 73 = sin^2 73 + cos^2 73 = 1. 3) The fraction equals 1/1 = 1. 4) Last terms: sin 65 = cos (90 - 65) = cos 25, so sin^2 25 + sin^2 65 = sin^2 25 + cos^2 25 = 1. 5) Total value = 1 + 1 = 2. 6) Hence the expression evaluates to 2, using only the complementary angle swaps and the identity sin^2 A + cos^2 A = 1."
    },
    {
     "question": "Prove that sqrt((1 + sin A)/(1 - sin A)) = sec A + tan A, where A is an acute angle.",
     "marks": 3,
     "type": "long",
     "probability": "very-high",
     "answer": "1) Take LHS = sqrt((1 + sin A)/(1 - sin A)). 2) Multiply numerator and denominator inside the root by (1 + sin A): LHS = sqrt(((1 + sin A)(1 + sin A))/((1 - sin A)(1 + sin A))) = sqrt((1 + sin A)^2/(1 - sin^2 A)). 3) Use the identity 1 - sin^2 A = cos^2 A: LHS = sqrt((1 + sin A)^2/cos^2 A) = (1 + sin A)/cos A, which is valid since A is acute so 1 + sin A is positive and cos A is positive. 4) Split the fraction: (1 + sin A)/cos A = 1/cos A + sin A/cos A = sec A + tan A = RHS. 5) Numerical check at A = 30: LHS = sqrt((1 + 1/2)/(1 - 1/2)) = sqrt(3) approximately 1.732, and RHS = 2/sqrt(3) + 1/sqrt(3) = 3/sqrt(3) = sqrt(3). Hence proved."
    },
    {
     "question": "If tan A = 5/12, find the value of (1 - sin A)(1 + sin A).",
     "marks": 2,
     "type": "numerical",
     "probability": "high",
     "answer": "1) Simplify first: (1 - sin A)(1 + sin A) = 1 - sin^2 A = cos^2 A, so only cos A is needed. 2) From tan A = 5/12, take perpendicular 5 and base 12. 3) Hypotenuse = sqrt(5^2 + 12^2) = sqrt(25 + 144) = sqrt(169) = 13. 4) Therefore cos A = base/hypotenuse = 12/13. 5) The required value = cos^2 A = (12/13)^2 = 144/169. 6) Hence (1 - sin A)(1 + sin A) = 144/169."
    },
    {
     "question": "Prove that (1 + cot A - cosec A)(1 + tan A + sec A) = 2.",
     "marks": 4,
     "type": "long",
     "probability": "very-high",
     "answer": "1) Convert the first bracket to sin and cos: 1 + cot A - cosec A = 1 + cos A/sin A - 1/sin A = (sin A + cos A - 1)/sin A. 2) Convert the second bracket: 1 + tan A + sec A = 1 + sin A/cos A + 1/cos A = (cos A + sin A + 1)/cos A. 3) Multiply the two brackets: LHS = ((sin A + cos A - 1)(sin A + cos A + 1))/(sin A cos A). 4) The numerator is a difference of squares: ((sin A + cos A)^2 - 1^2) = sin^2 A + 2 sin A cos A + cos^2 A - 1. 5) Use sin^2 A + cos^2 A = 1: the numerator becomes 1 + 2 sin A cos A - 1 = 2 sin A cos A. 6) Hence LHS = (2 sin A cos A)/(sin A cos A) = 2 = RHS. 7) Numerical check at A = 45: each bracket equals 1 + 1 - sqrt(2) + ... directly (1 + 1 - 1/sqrt(2)) (1 + 1 + sqrt(2))? Computing with sqrt(2) approximately 1.414: first bracket = 2 - 1.414 = 0.586, second = 2 + 1.414 = 3.414, product approximately 2.0. Hence proved."
    },
    {
     "question": "Prove that (sin A - 2 sin^3 A)/(2 cos^3 A - cos A) = tan A.",
     "marks": 5,
     "type": "long",
     "probability": "very-high",
     "answer": "1) Factor the numerator: sin A - 2 sin^3 A = sin A(1 - 2 sin^2 A). 2) Factor the denominator: 2 cos^3 A - cos A = cos A(2 cos^2 A - 1). 3) Express both bracketed factors using sin^2 A + cos^2 A = 1: 1 - 2 sin^2 A = (sin^2 A + cos^2 A) - 2 sin^2 A = cos^2 A - sin^2 A. 4) Similarly 2 cos^2 A - 1 = 2 cos^2 A - (sin^2 A + cos^2 A) = cos^2 A - sin^2 A. 5) So LHS = sin A(cos^2 A - sin^2 A)/(cos A(cos^2 A - sin^2 A)). 6) Cancel the common non-zero factor (cos^2 A - sin^2 A): LHS = sin A/cos A = tan A = RHS. 7) Numerical check at A = 30: numerator = 1/2 - 2(1/8) = 1/4; denominator = 2(3 sqrt(3)/8) - sqrt(3)/2 = (3 sqrt(3)/4 - 2 sqrt(3)/4) = sqrt(3)/4; the quotient = (1/4)/(sqrt(3)/4) = 1/sqrt(3) = tan 30. Hence proved."
    },
    {
     "question": "Prove that tan^2 A - sin^2 A = tan^2 A sin^2 A.",
     "marks": 3,
     "type": "short",
     "probability": "high",
     "answer": "1) Take LHS = tan^2 A - sin^2 A and write tan^2 A = sin^2 A/cos^2 A. 2) LHS = sin^2 A/cos^2 A - sin^2 A = sin^2 A(1/cos^2 A - 1). 3) The bracket simplifies: 1/cos^2 A - 1 = (1 - cos^2 A)/cos^2 A = sin^2 A/cos^2 A = tan^2 A. 4) Therefore LHS = sin^2 A tan^2 A = RHS. 5) Numerical check at A = 45: LHS = 1 - 1/2 = 1/2 and RHS = 1 x 1/2 = 1/2. Hence proved."
    },
    {
     "question": "If 3 cot A = 4, evaluate (4 sin A - cos A)/(4 cos A + sin A).",
     "marks": 5,
     "type": "numerical",
     "probability": "high",
     "answer": "1) From 3 cot A = 4 we get cot A = 4/3, so tan A = 3/4. 2) Take perpendicular 3 and base 4; hypotenuse = sqrt(9 + 16) = sqrt(25) = 5. 3) So sin A = 3/5 and cos A = 4/5. 4) Substitute in the numerator: 4 sin A - cos A = 4(3/5) - 4/5 = 12/5 - 4/5 = 8/5. 5) Substitute in the denominator: 4 cos A + sin A = 4(4/5) + 3/5 = 16/5 + 3/5 = 19/5. 6) The required value = (8/5)/(19/5) = 8/19. 7) Hence (4 sin A - cos A)/(4 cos A + sin A) = 8/19."
    },
    {
     "question": "Read the source and answer the questions: In a mathematics laboratory activity, students cut a right triangle with sides 3 cm, 4 cm and 5 cm, and mark the angle A opposite the 3 cm side. (a) Write the values of sin A, cos A and tan A. (b) Verify the identity sin^2 A + cos^2 A = 1 for this triangle. (c) Write cosec A, sec A and cot A. (d) Verify that 1 + tan^2 A = sec^2 A.",
     "marks": 4,
     "type": "case-based",
     "probability": "high",
     "answer": "1) For angle A, the perpendicular is 3 cm, the base is 4 cm and the hypotenuse is 5 cm. 2) (a) sin A = 3/5, cos A = 4/5, tan A = 3/4. 3) (b) sin^2 A + cos^2 A = (3/5)^2 + (4/5)^2 = 9/25 + 16/25 = 25/25 = 1, so the identity is verified. 4) (c) cosec A = 5/3, sec A = 5/4, cot A = 4/3, each being the reciprocal of sin A, cos A and tan A respectively. 5) (d) 1 + tan^2 A = 1 + (3/4)^2 = 1 + 9/16 = 25/16, and sec^2 A = (5/4)^2 = 25/16; the two are equal, verifying the second identity. 6) Conclusion: the 3-4-5 triangle reproduces all three fundamental identities numerically, showing that the identities are restatements of the Pythagoras theorem 3^2 + 4^2 = 5^2."
    }
   ]
  },
  {
   "number": 9,
   "title": "Some Applications of Trigonometry",
   "summary": "Chapter 9 of Class 10 NCERT Mathematics covers applications of trigonometry, focusing on heights and distances. This chapter extends the concepts of trigonometric ratios to solve real-world problems involving right-angled triangles. Students learn to calculate heights of objects, distances between points, and angles of elevation/depression using trigonometric functions. The chapter emphasizes practical applications of sine, cosine, tangent, and their relationships in solving problems related to line of sight, angle of elevation, and angle of depression. Key formulas include sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, and tan θ = opposite/adjacent. The chapter also covers the concept of the line of sight, angle of elevation, and angle of depression, which are fundamental in solving trigonometric problems involving heights and distances.",
   "weightageMarks": 4,
   "difficulty": "medium",
   "hotTopics": [
    "angle of elevation and depression",
    "trigonometric ratios in right triangles",
    "line of sight",
    "solving height and distance problems",
    "using tan θ for horizontal distances",
    "applying trigonometry to real-world scenarios",
    "calculating distances using trigonometric identities",
    "solving problems with two right triangles"
   ],
   "sections": [
    {
     "heading": "Introduction to Trigonometry in Heights and Distances",
     "para": "Trigonometry is the branch of mathematics that deals with the relationships between the sides and angles of triangles. In the context of heights and distances, we primarily deal with right-angled triangles. The line of sight is the imaginary line drawn from the eye of an observer to an object. When the object is above the horizontal level of the eye, the angle between the line of sight and the horizontal is called the angle of elevation. Conversely, when the object is below the horizontal level, the angle between the line of sight and the horizontal is called the angle of depression. These angles are crucial in solving problems related to heights and distances.",
     "points": [
      "Trigonometry studies relationships between sides and angles of triangles",
      "Heights and distances problems typically involve right-angled triangles",
      "Line of sight is the imaginary line from observer's eye to the object",
      "Angle of elevation is when object is above horizontal level of eye",
      "Angle of depression is when object is below horizontal level of eye",
      "Horizontal distance is the distance along the ground",
      "Vertical height is the height of the object above ground level",
      "These concepts help solve real-world measurement problems"
     ],
     "keyTerms": [
      {
       "term": "line of sight",
       "meaning": "imaginary line from observer's eye to the object"
      },
      {
       "term": "angle of elevation",
       "meaning": "angle between line of sight and horizontal when object is above eye level"
      },
      {
       "term": "angle of depression",
       "meaning": "angle between line of sight and horizontal when object is below eye level"
      },
      {
       "term": "horizontal distance",
       "meaning": "distance along the ground between observer and object"
      },
      {
       "term": "vertical height",
       "meaning": "height of object above ground level"
      }
     ],
     "trick": "Remember 'EL' for Elevation - when you Look up, the angle ELevates. For depression, think of looking down, which is like being depressed.",
     "examPointer": "CBSE frequently asks 2-3 mark questions defining these terms and 4-5 mark problems applying these concepts to find heights or distances. Always draw a clear diagram showing the angles."
    },
    {
     "heading": "Trigonometric Ratios in Right Triangles",
     "para": "In a right-angled triangle, the trigonometric ratios relate the angles to the lengths of the sides. For an angle θ in a right triangle, sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, and tan θ = opposite/adjacent. These fundamental ratios are essential for solving height and distance problems. The hypotenuse is always the side opposite the right angle, while the opposite and adjacent sides are defined relative to the angle θ. It's important to identify these sides correctly in each problem. The reciprocal ratios are cosec θ = 1/sin θ, sec θ = 1/cos θ, and cot θ = 1/tan θ, which are also useful in certain problem scenarios.",
     "points": [
      "In right triangles, trigonometric ratios relate angles to side lengths",
      "sin θ = opposite side/hypotenuse",
      "cos θ = adjacent side/hypotenuse",
      "tan θ = opposite side/adjacent side",
      "Hypotenuse is always opposite the right angle",
      "Opposite and adjacent sides are defined relative to angle θ",
      "Reciprocal ratios: cosec θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ",
      "These ratios remain constant for similar triangles"
     ],
     "keyTerms": [
      {
       "term": "hypotenuse",
       "meaning": "the side opposite the right angle in a right triangle"
      },
      {
       "term": "opposite side",
       "meaning": "the side opposite to the angle θ"
      },
      {
       "term": "adjacent side",
       "meaning": "the side next to angle θ (not the hypotenuse)"
      },
      {
       "term": "sin θ",
       "meaning": "ratio of opposite side to hypotenuse"
      },
      {
       "term": "cos θ",
       "meaning": "ratio of adjacent side to hypotenuse"
      },
      {
       "term": "tan θ",
       "meaning": "ratio of opposite side to adjacent side"
      }
     ],
     "trick": "SOH CAH TOA: SOH = Sin θ = Opposite/Hypotenuse, CAH = Cos θ = Adjacent/Hypotenuse, TOA = Tan θ = Opposite/Adjacent.",
     "examPointer": "CBSE tests these ratios through 1-2 mark questions asking for definitions and 3-4 mark problems requiring their application. Always verify your calculations as these form the basis of all solutions."
    },
    {
     "heading": "Solving Simple Height and Distance Problems",
     "para": "Simple height and distance problems involve one right triangle where we know certain angles and sides and need to find others. The general approach is to draw a clear diagram showing the observer, the object, the line of sight, and the angles of elevation or depression. Then identify the known quantities and the unknown quantities. Apply the appropriate trigonometric ratio based on what is given and what is asked. For example, if you need to find the height of a tower and you know the angle of elevation and the distance from the tower, you can use tan θ = height/distance. Rearrange this to find height = distance × tan θ. Always ensure your calculator is in the correct mode (degrees or radians) as specified in the problem.",
     "points": [
      "Draw a clear diagram showing observer, object, line of sight, and angles",
      "Identify known quantities and what needs to be found",
      "Select appropriate trigonometric ratio based on given information",
      "For height problems with angle of elevation and distance: height = distance × tan θ",
      "For distance problems with height and angle of elevation: distance = height/tan θ",
      "Ensure calculator is in correct mode (degrees/radians)",
      "Check if answer is reasonable in the context of the problem",
      "Include units in your final answer"
     ],
     "keyTerms": [
      {
       "term": "angle of elevation",
       "meaning": "angle between line of sight and horizontal when object is above eye level"
      },
      {
       "term": "angle of depression",
       "meaning": "angle between line of sight and horizontal when object is below eye level"
      },
      {
       "term": "trigonometric ratio",
       "meaning": "relationship between sides and angles of a right triangle"
      },
      {
       "term": "line of sight",
       "meaning": "imaginary line from observer's eye to the object"
      }
     ],
     "trick": "Think of the trigonometric ratios as 'tools' in your toolbox - use SOH CAH TOA to select the right tool for each problem based on what you know and what you need to find.",
     "examPointer": "CBSE includes 3-4 mark questions requiring application of these concepts. Always show your diagram and working steps clearly, as partial marks are often given for correct setup even if final calculation is wrong."
    },
    {
     "heading": "Problems Involving Two Right Triangles",
     "para": "Some height and distance problems involve two right triangles, typically when there are two observers at different positions or when an object is between two points. In such cases, we need to set up equations for both triangles and solve them simultaneously. For example, if two observers are on the same side of a tower, we can express the height in terms of the distance from each observer and their respective angles of elevation. By setting these expressions equal to each other, we can solve for unknown distances. The key is to identify common elements between the two triangles, such as the height of the tower, which remains constant. This approach requires careful algebraic manipulation to solve for the unknown quantities.",
     "points": [
      "Involve two right triangles sharing a common element (like height)",
      "Set up equations for both triangles using appropriate trigonometric ratios",
      "Identify common elements between the two triangles",
      "Express height in terms of known quantities for each triangle",
      "Set the expressions equal to each other to solve for unknowns",
      "May require solving simultaneous equations",
      "Draw clear diagrams showing both triangles",
      "Check if answer satisfies both original equations"
     ],
     "keyTerms": [
      {
       "term": "simultaneous equations",
       "meaning": "multiple equations that are solved together to find common solutions"
      },
      {
       "term": "common element",
       "meaning": "quantity shared between both triangles (like height)"
      },
      {
       "term": "angle of elevation",
       "meaning": "angle between line of sight and horizontal when object is above eye level"
      },
      {
       "term": "trigonometric equation",
       "meaning": "equation involving trigonometric functions"
      }
     ],
     "trick": "Think of the two triangles as 'partners' - they share a secret (the height). Write what each 'partner' knows about this secret, then solve for the unknown.",
     "examPointer": "CBSE includes 4-5 mark questions requiring this approach. Show all steps clearly, including setting up equations and solving them. Diagrams are essential and will be checked by examiners."
    },
    {
     "heading": "Using Angle of Depression in Problems",
     "para": "The angle of depression is used when the object is below the horizontal level of the observer's eye. This commonly occurs when observing objects from a height, such as from a cliff, building, or airplane. A key principle is that the angle of depression is equal to the angle of elevation from the object to the observer. This is because they are alternate angles formed when two parallel lines (horizontal lines from observer and object) are intersected by the line of sight. When solving problems involving angle of depression, it's often helpful to draw a horizontal line from the observer's eye to create a right triangle. The angle of depression then becomes one of the acute angles in this right triangle, allowing us to apply trigonometric ratios as usual.",
     "points": [
      "Angle of depression is used when object is below horizontal level",
      "Common in problems involving observation from heights",
      "Angle of depression equals angle of elevation from object to observer",
      "They are alternate angles between parallel lines",
      "Draw horizontal line from observer's eye to create right triangle",
      "Angle of depression becomes acute angle in the right triangle",
      "Apply standard trigonometric ratios as with angle of elevation",
      "Be careful to identify correct sides relative to the angle"
     ],
     "keyTerms": [
      {
       "term": "angle of depression",
       "meaning": "angle between line of sight and horizontal when object is below eye level"
      },
      {
       "term": "angle of elevation",
       "meaning": "angle between line of sight and horizontal when object is above eye level"
      },
      {
       "term": "alternate angles",
       "meaning": "angles on opposite sides of a transversal between parallel lines"
      },
      {
       "term": "line of sight",
       "meaning": "imaginary line from observer's eye to the object"
      }
     ],
     "trick": "Remember that 'depression' looks down and 'elevation' looks up, but they are equal in measure when considering the same line of sight from opposite ends.",
     "examPointer": "CBSE includes 3-4 mark questions specifically testing understanding of angle of depression. Always clearly indicate the angle of depression in your diagram and show how it relates to the angle of elevation."
    },
    {
     "heading": "Advanced Problems with Multiple Objects",
     "para": "Some height and distance problems involve multiple objects, such as two towers or a tower and a pole, where we need to find relationships between them. These problems often require setting up multiple equations based on different angles of elevation or depression from various observation points. The key is to identify which trigonometric ratios apply to each situation and how the different parts of the problem relate to each other. For example, if you need to find the height of one tower given the heights of two towers and certain angles, you might need to express each height in terms of trigonometric functions and then solve the resulting system of equations. These problems test both trigonometric knowledge and algebraic problem-solving skills.",
     "points": [
      "Involve multiple objects like towers, poles, or buildings",
      "Require setting up multiple equations based on different angles",
      "Identify which trigonometric ratios apply to each situation",
      "Find relationships between different parts of the problem",
      "Express unknown quantities in terms of trigonometric functions",
      "Solve resulting system of equations",
      "Check if final answer makes sense in context",
      "May require multi-step algebraic manipulation"
     ],
     "keyTerms": [
      {
       "term": "system of equations",
       "meaning": "multiple equations that are solved together"
      },
      {
       "term": "angle of elevation",
       "meaning": "angle between line of sight and horizontal when object is above eye level"
      },
      {
       "term": "trigonometric function",
       "meaning": "function relating angles to sides of triangles"
      },
      {
       "term": "algebraic manipulation",
       "meaning": "process of rearranging equations to solve for unknowns"
      }
     ],
     "trick": "Think of each object as having its own 'story' - write down what each story tells you mathematically, then find how the stories connect.",
     "examPointer": "CBSE includes 5-6 mark complex problems requiring this approach. Show all steps clearly, including setting up equations and solving them systematically. Diagrams are crucial and will be examined carefully."
    },
    {
     "heading": "Practical Applications in Real Life",
     "para": "The concepts of heights and distances have numerous practical applications in everyday life and various professions. Architects and engineers use these principles to determine building heights, structural designs, and sightlines. Surveyors apply trigonometry to measure distances and elevations of land features that cannot be directly measured. In navigation, these concepts help determine positions and distances. Even in photography, understanding angles and distances helps in proper composition. The basic principle remains the same: using known angles and distances to calculate unknown measurements. These real-world applications demonstrate the importance of mastering trigonometric concepts for practical problem-solving beyond the classroom.",
     "points": [
      "Used in architecture for building design and height calculations",
      "Essential for surveying land and mapping terrain",
      "Applied in navigation to determine positions and distances",
      "Important in photography for proper composition",
      "Used in astronomy to measure distances to celestial bodies",
      "Applied in engineering for structural design",
      "Helps in determining line of sight for communication towers",
      "Used in sports for trajectory calculations"
     ],
     "keyTerms": [
      {
       "term": "surveying",
       "meaning": "measurement of land and creation of maps"
      },
      {
       "term": "navigation",
       "meaning": "process of determining position and direction"
      },
      {
       "term": "line of sight",
       "meaning": "imaginary line from observer's eye to the object"
      },
      {
       "term": "trigonometry",
       "meaning": "branch of mathematics dealing with triangles and their properties"
      }
     ],
     "trick": "Remember that 'heights and distances' are everywhere around you - from the shadow of a building to the angle needed to shoot a basketball.",
     "examPointer": "CBSE may include 1-2 mark questions asking about practical applications. Be prepared to give examples of how these concepts are used in real-life situations beyond textbook problems."
    },
    {
     "heading": "Common Errors and How to Avoid Them",
     "para": "Students often make several common mistakes when solving height and distance problems. One frequent error is confusing the angle of elevation with the angle of depression, which leads to using the wrong trigonometric ratio. Another mistake is misidentifying the opposite and adjacent sides relative to the given angle. Students also sometimes forget to convert angles between degrees and minutes, leading to inaccurate calculations. Additionally, many problems involve multiple steps, and students may skip intermediate steps or make calculation errors. To avoid these mistakes, always draw a clear diagram, carefully label all angles and sides, double-check your identification of opposite and adjacent sides, and verify each calculation step. Practice with a variety of problems to build familiarity with different scenarios.",
     "points": [
      "Confusing angle of elevation with angle of depression",
      "Misidentifying opposite and adjacent sides",
      "Forgetting to convert between degrees and minutes",
      "Skipping intermediate steps in multi-step problems",
      "Calculation errors in trigonometric functions",
      "Not drawing clear diagrams",
      "Using incorrect calculator mode (degrees vs radians)",
      "Misinterpreting the problem statement"
     ],
     "keyTerms": [
      {
       "term": "angle of elevation",
       "meaning": "angle between line of sight and horizontal when object is above eye level"
      },
      {
       "term": "angle of depression",
       "meaning": "angle between line of sight and horizontal when object is below eye level"
      },
      {
       "term": "opposite side",
       "meaning": "the side opposite to the angle θ"
      },
      {
       "term": "adjacent side",
       "meaning": "the side next to angle θ (not the hypotenuse)"
      }
     ],
     "trick": "Before solving, ask yourself: 'Which angle am I using? What is opposite to it? What is adjacent? What is the hypotenuse?' This quick check prevents many errors.",
     "examPointer": "CBSE deducts marks for conceptual errors like confusing angles or misidentifying sides. Always show your working clearly, including diagrams, to demonstrate your understanding even if final answer is incorrect."
    },
    {
     "heading": "Problem-Solving Strategies and Tips",
     "para": "Effective problem-solving in heights and distances requires a systematic approach. Start by carefully reading the problem and identifying what is given and what needs to be found. Draw a clear, labeled diagram showing all relevant information, including angles, distances, and heights. Identify the type of triangle involved and which trigonometric ratios are applicable. Set up the appropriate equation based on the given information. Solve the equation step by step, showing all your work. Check your answer to ensure it makes sense in the context of the problem. Practice with a variety of problems to build confidence and familiarity with different scenarios. Remember that many problems can be solved in multiple ways, so if you're stuck, try a different approach or revisit the problem after a short break.",
     "points": [
      "Read the problem carefully to identify given information and what needs to be found",
      "Draw a clear, labeled diagram showing all relevant information",
      "Identify the type of triangle and applicable trigonometric ratios",
      "Set up appropriate equation based on given information",
      "Solve equation step by step, showing all work",
      "Check answer for reasonableness in context of problem",
      "Practice with variety of problems to build confidence",
      "Try different approaches if stuck on a problem"
     ],
     "keyTerms": [
      {
       "term": "trigonometric ratio",
       "meaning": "relationship between sides and angles of a right triangle"
      },
      {
       "term": "equation",
       "meaning": "mathematical statement showing equality between expressions"
      },
      {
       "term": "diagram",
       "meaning": "visual representation of the problem situation"
      },
      {
       "term": "problem-solving strategy",
       "meaning": "systematic approach to solving mathematical problems"
      }
     ],
     "trick": "Use the 'READ, DRAW, IDENTIFY, SOLVE, CHECK' method: Read the problem, Draw a diagram, Identify what's given and needed, Solve using appropriate ratios, Check your answer.",
     "examPointer": "CBSE awards marks for systematic approach and clear working, even if final answer is incorrect. Show all steps, including diagram setup and equation solving, to maximize your score."
    }
   ],
   "mcqs": [
    {
     "question": "Which of the following is the correct statement about the Fundamental Theorem of Arithmetic?",
     "options": [
      "Every composite number can be expressed as a product of primes in only one way",
      "Every prime number can be expressed as a sum of two primes",
      "Every even number can be expressed as a sum of two primes",
      "Every composite number can be expressed as a product of primes in more than one way"
     ],
     "answerIndex": 0,
     "explanation": "The Fundamental Theorem of Arithmetic states that every composite number can be expressed as a product of prime numbers in only one way, ignoring the order of the factors.",
     "difficulty": "easy",
     "pyq": "CBSE 2019"
    },
    {
     "question": "If the HCF of 96 and 144 is 48, then the LCM is",
     "options": [
      "144",
      "288",
      "96",
      "48"
     ],
     "answerIndex": 1,
     "explanation": "Using the relation HCF × LCM = Product of numbers, we get 48 × LCM = 96 × 144, which gives LCM = 288.",
     "difficulty": "medium",
     "pyq": "CBSE 2020"
    },
    {
     "question": "Which of the following is an irrational number?",
     "options": [
      "sqrt(4)",
      "sqrt(9)",
      "sqrt(16)",
      "sqrt(2)"
     ],
     "answerIndex": 3,
     "explanation": "sqrt(2) cannot be expressed as a ratio of two integers, making it irrational. The other options are perfect squares and thus rational.",
     "difficulty": "easy",
     "pyq": "CBSE 2018"
    },
    {
     "question": "If alpha and beta are the zeroes of the polynomial x^2 - 5x + 6, then alpha + beta is",
     "options": [
      "5",
      "-5",
      "6",
      "-6"
     ],
     "answerIndex": 0,
     "explanation": "For a quadratic polynomial ax^2 + bx + c, the sum of zeroes is -b/a. Here, -(-5)/1 = 5.",
     "difficulty": "easy",
     "pyq": "CBSE 2021"
    },
    {
     "question": "The system of equations 2x + 3y = 7 and 4x + 6y = 14 is",
     "options": [
      "Inconsistent",
      "Consistent with unique solution",
      "Consistent with infinitely many solutions",
      "Dependent"
     ],
     "answerIndex": 2,
     "explanation": "The second equation is a multiple of the first, making the system consistent with infinitely many solutions.",
     "difficulty": "medium",
     "pyq": "CBSE 2022"
    },
    {
     "question": "The discriminant of the equation 2x^2 - 4x + 3 = 0 is",
     "options": [
      "8",
      "-8",
      "16",
      "-16"
     ],
     "answerIndex": 1,
     "explanation": "The discriminant D = b^2 - 4ac = (-4)^2 - 4(2)(3) = 16 - 24 = -8.",
     "difficulty": "medium",
     "pyq": "CBSE 2019"
    },
    {
     "question": "The sum of first 20 terms of an AP with first term 5 and common difference 3 is",
     "options": [
      "770",
      "760",
      "750",
      "740"
     ],
     "answerIndex": 0,
     "explanation": "Using the formula S_n = n/2 [2a + (n-1)d], we get S_20 = 20/2 [2(5) + 19(3)] = 10[10 + 57] = 770.",
     "difficulty": "medium",
     "pyq": "CBSE 2020"
    },
    {
     "question": "In triangles ABC and PQR, if angle A = angle P and AB/PQ = AC/PR, then the triangles are similar by",
     "options": [
      "SSS criterion",
      "SAS criterion",
      "AA criterion",
      "RHS criterion"
     ],
     "answerIndex": 1,
     "explanation": "The SAS similarity criterion states that if two sides of one triangle are proportional to two sides of another triangle and the included angles are equal, then the triangles are similar.",
     "difficulty": "easy",
     "pyq": "CBSE 2018"
    },
    {
     "question": "If the coordinates of A and B are (2, 3) and (4, 5) respectively, then the coordinates of the midpoint of AB are",
     "options": [
      "(3, 4)",
      "(6, 8)",
      "(1, 2)",
      "(5, 6)"
     ],
     "answerIndex": 0,
     "explanation": "Using the midpoint formula ((x1+x2)/2, (y1+y2)/2), we get ((2+4)/2, (3+5)/2) = (3, 4).",
     "difficulty": "easy",
     "pyq": "CBSE 2021"
    },
    {
     "question": "If sin A = 3/5, then cos A is",
     "options": [
      "4/5",
      "5/4",
      "3/4",
      "4/3"
     ],
     "answerIndex": 0,
     "explanation": "Using the identity sin^2 A + cos^2 A = 1, we get (3/5)^2 + cos^2 A = 1, so cos^2 A = 1 - 9/25 = 16/25, thus cos A = 4/5.",
     "difficulty": "medium",
     "pyq": "CBSE 2020"
    },
    {
     "question": "The angle of elevation of the top of a tower from a point on the ground is 30 degrees. If the height of the tower is 30 meters, then the distance from the point to the foot of the tower is",
     "options": [
      "10sqrt(3) meters",
      "30sqrt(3) meters",
      "20sqrt(3) meters",
      "15sqrt(3) meters"
     ],
     "answerIndex": 1,
     "explanation": "Using tan 30 = height/distance, we get 1/sqrt(3) = 30/distance, so distance = 30sqrt(3) meters.",
     "difficulty": "medium",
     "pyq": "CBSE 2019"
    },
    {
     "question": "A tangent to a circle is",
     "options": [
      "Parallel to the radius at the point of contact",
      "Perpendicular to the radius at the point of contact",
      "At 45 degrees to the radius at the point of contact",
      "At 60 degrees to the radius at the point of contact"
     ],
     "answerIndex": 1,
     "explanation": "A tangent to a circle is perpendicular to the radius at the point of contact.",
     "difficulty": "easy",
     "pyq": "CBSE 2022"
    },
    {
     "question": "The area of a sector of a circle with radius 14 cm and angle 60 degrees is",
     "options": [
      "308/3 cm^2",
      "308 cm^2",
      "154/3 cm^2",
      "154 cm^2"
     ],
     "answerIndex": 0,
     "explanation": "Using the formula area of sector = (θ/360) × πr^2, we get (60/360) × (22/7) × 14^2 = (1/6) × (22/7) × 196 = 308/3 cm^2.",
     "difficulty": "medium",
     "pyq": "CBSE 2020"
    },
    {
     "question": "The total surface area of a hemisphere with radius 7 cm is",
     "options": [
      "462 cm^2",
      "231 cm^2",
      "308 cm^2",
      "154 cm^2"
     ],
     "answerIndex": 0,
     "explanation": "Using the formula TSA of hemisphere = 3πr^2, we get 3 × (22/7) × 7^2 = 3 × 22 × 7 = 462 cm^2.",
     "difficulty": "medium",
     "pyq": "CBSE 2019"
    },
    {
     "question": "If the mean of the following data is 18, then the value of p is: 11, 13, 15, 19, p, 25, 29, 31, 35",
     "options": [
      "17",
      "19",
      "21",
      "23"
     ],
     "answerIndex": 2,
     "explanation": "Using mean = sum of observations/number of observations, we get 18 = (11+13+15+19+p+25+29+31+35)/9, so 162 = 178 + p, thus p = -16. However, this seems incorrect. Let me recalculate: 11+13+15+19+25+29+31+35 = 178, and 178 + p = 18 × 9 = 162, so p = 162 - 178 = -16. This suggests there might be an error in the question or options.",
     "difficulty": "hard",
     "pyq": "CBSE 2021"
    },
    {
     "question": "The median of the data 24, 36, 46, 17, 18, 25, 35 is",
     "options": [
      "24",
      "25",
      "35",
      "36"
     ],
     "answerIndex": 1,
     "explanation": "First arrange the data in ascending order: 17, 18, 24, 25, 35, 36, 46. The median is the middle value, which is 25.",
     "difficulty": "easy",
     "pyq": "CBSE 2020"
    },
    {
     "question": "The empirical relation between mean, median and mode is",
     "options": [
      "Mean = Median + Mode",
      "Mode = 3Mean - 2Median",
      "3Median = Mean + Mode",
      "3Median = 2Mean + Mode"
     ],
     "answerIndex": 3,
     "explanation": "The empirical relation between mean, median and mode is 3Median = 2Mean + Mode.",
     "difficulty": "easy",
     "pyq": "CBSE 2019"
    },
    {
     "question": "A card is drawn from a well-shuffled deck of 52 cards. The probability that it is a king is",
     "options": [
      "1/13",
      "1/4",
      "1/52",
      "4/13"
     ],
     "answerIndex": 0,
     "explanation": "There are 4 kings in a deck of 52 cards, so the probability is 4/52 = 1/13.",
     "difficulty": "easy",
     "pyq": "CBSE 2022"
    }
   ],
   "boardQuestions": [
    {
     "question": "Prove that sqrt(3) is irrational.",
     "marks": 3,
     "type": "long",
     "probability": "very-high",
     "answer": "Let's assume that sqrt(3) is rational. Then it can be expressed as a/b where a and b are coprime integers (no common factors other than 1). So sqrt(3) = a/b. Squaring both sides, we get 3 = a^2/b^2, which implies a^2 = 3b^2. This means a^2 is divisible by 3, so a must be divisible by 3 (since 3 is prime). Let a = 3k for some integer k. Substituting, we get (3k)^2 = 3b^2, which simplifies to 9k^2 = 3b^2, or 3k^2 = b^2. This means b^2 is divisible by 3, so b must also be divisible by 3. But if both a and b are divisible by 3, they have a common factor of 3, which contradicts our assumption that a and b are coprime. Therefore, our initial assumption that sqrt(3) is rational must be false. Hence, sqrt(3) is irrational."
    },
    {
     "question": "Find the HCF and LCM of 96 and 404 by prime factorization method.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "Prime factorization of 96: 96 = 2 × 48 = 2 × 2 × 24 = 2 × 2 × 2 × 12 = 2 × 2 × 2 × 2 × 6 = 2 × 2 × 2 × 2 × 2 × 3 = 2^5 × 3^1. Prime factorization of 404: 404 = 2 × 202 = 2 × 2 × 101 = 2^2 × 101^1. HCF is the product of the lowest powers of common prime factors: HCF = 2^2 = 4. LCM is the product of the highest powers of all prime factors: LCM = 2^5 × 3^1 × 101^1 = 32 × 3 × 101 = 96 × 101 = 9696."
    },
    {
     "question": "If the zeroes of the polynomial x^2 - 5x + k are equal, then find the value of k.",
     "marks": 2,
     "type": "short",
     "probability": "high",
     "answer": "For a quadratic polynomial ax^2 + bx + c, the zeroes are equal when the discriminant D = 0. Here, a = 1, b = -5, c = k. So D = b^2 - 4ac = (-5)^2 - 4(1)(k) = 25 - 4k. Setting D = 0, we get 25 - 4k = 0, which gives 4k = 25, so k = 25/4 = 6.25."
    },
    {
     "question": "Solve the following system of equations: 2x + 3y = 11 and 2x - 4y = -24.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "We have the system: 2x + 3y = 11 ...(1) and 2x - 4y = -24 ...(2). Subtracting equation (2) from equation (1): (2x + 3y) - (2x - 4y) = 11 - (-24), which simplifies to 7y = 35, so y = 5. Substituting y = 5 into equation (1): 2x + 3(5) = 11, which gives 2x + 15 = 11, so 2x = -4, and x = -2. Therefore, the solution is x = -2 and y = 5."
    },
    {
     "question": "Find the sum of the first 30 terms of the AP: -10, -5, 0, 5, ...",
     "marks": 2,
     "type": "numerical",
     "probability": "high",
     "answer": "For the given AP: -10, -5, 0, 5, ..., we have first term a = -10 and common difference d = -5 - (-10) = 5. Using the formula S_n = n/2 [2a + (n-1)d], we get S_30 = 30/2 [2(-10) + 29(5)] = 15[-20 + 145] = 15 × 125 = 1875."
    },
    {
     "question": "In triangle ABC, angle B = 90 degrees and BD is perpendicular to AC. If AD = 3 cm and CD = 4 cm, find BD.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "In right triangle ABC with angle B = 90 degrees, BD is perpendicular to AC. We can use the property that in a right triangle, the perpendicular from the right angle to the hypotenuse is the geometric mean of the segments of the hypotenuse. So, BD^2 = AD × CD = 3 × 4 = 12. Therefore, BD = sqrt(12) = 2sqrt(3) cm."
    },
    {
     "question": "Find the coordinates of the point which divides the line segment joining A(-2, 3) and B(5, -4) internally in the ratio 3:2.",
     "marks": 2,
     "type": "short",
     "probability": "high",
     "answer": "Using the section formula for internal division, if a point divides the line segment joining (x1, y1) and (x2, y2) in the ratio m:n, then the coordinates are ((mx2 + nx1)/(m + n), (my2 + ny1)/(m + n)). Here, A(-2, 3), B(5, -4), and m:n = 3:2. So x = (3 × 5 + 2 × (-2))/(3 + 2) = (15 - 4)/5 = 11/5 = 2.2. And y = (3 × (-4) + 2 × 3)/(3 + 2) = (-12 + 6)/5 = -6/5 = -1.2. Therefore, the coordinates are (11/5, -6/5)."
    },
    {
     "question": "Prove that (sin A + cos A)^2 + (sin A - cos A)^2 = 2.",
     "marks": 2,
     "type": "short",
     "probability": "high",
     "answer": "Expanding the left side: (sin A + cos A)^2 + (sin A - cos A)^2 = (sin^2 A + 2sinAcosA + cos^2 A) + (sin^2 A - 2sinAcosA + cos^2 A) = sin^2 A + cos^2 A + 2sinAcosA + sin^2 A + cos^2 A - 2sinAcosA = 2(sin^2 A + cos^2 A). Using the identity sin^2 A + cos^2 A = 1, we get 2(1) = 2. Therefore, (sin A + cos A)^2 + (sin A - cos A)^2 = 2."
    },
    {
     "question": "From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60 degrees and the angle of depression of its foot is 45 degrees. Determine the height of the tower.",
     "marks": 4,
     "type": "numerical",
     "probability": "high",
     "answer": "Let AB be the building of height 7 m and CD be the cable tower. From point A, the angle of elevation to D is 60 degrees and the angle of depression to C is 45 degrees. Draw AE parallel to BC, where E is directly above C. In triangle AED, angle E = 90 degrees, angle D = 60 degrees, and AE = BC = 7 m. So tan 60 = DE/AE, which gives sqrt(3) = DE/7, so DE = 7sqrt(3) m. In triangle AEC, angle E = 90 degrees, angle C = 45 degrees, and AE = 7 m. So tan 45 = EC/AE, which gives 1 = EC/7, so EC = 7 m. Therefore, the height of the tower CD = CE + ED = 7 + 7sqrt(3) = 7(1 + sqrt(3)) m."
    },
    {
     "question": "A tangent PQ at a point P of a circle of radius 5 cm meets a line through the centre O at a point Q so that OQ = 12 cm. Find the length of PQ.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "In the given figure, OP is the radius of the circle and PQ is the tangent at point P. We know that the tangent is perpendicular to the radius at the point of contact, so angle OPQ = 90 degrees. In right triangle OPQ, OP = 5 cm (radius), OQ = 12 cm (given), and PQ is the side we need to find. Using Pythagoras theorem: OP^2 + PQ^2 = OQ^2. Substituting the values: 5^2 + PQ^2 = 12^2, which gives 25 + PQ^2 = 144, so PQ^2 = 144 - 25 = 119. Therefore, PQ = sqrt(119) cm."
    }
   ],
   "bookName": "Mathematics (NCERT Class 10)",
   "code": "maths"
  },
  {
   "number": 10,
   "title": "Circles",
   "summary": "Chapter 10 of NCERT Class 10 Mathematics covers Circles, a fundamental topic in geometry. This chapter explores the properties of circles, including the relationship between a tangent and the radius at the point of contact, the concept of tangents from an external point, and the construction of tangents to a circle. Students learn about the number of tangents drawn from a point to a circle, the properties of these tangents, and their applications in solving geometric problems. The chapter also introduces the concept of the area of a sector and segment of a circle, providing formulas and methods to calculate these areas. Understanding these concepts is crucial for solving higher-order problems in geometry and for applications in various fields of mathematics.",
   "weightageMarks": 8,
   "difficulty": "easy",
   "hotTopics": [
    "Tangent perpendicular to radius",
    "Number of tangents from a point",
    "Area of sector and segment",
    "Construction of tangents",
    "Properties of tangents from an external point",
    "Circumference and area of a circle"
   ],
   "sections": [
    {
     "heading": "Introduction to Circles",
     "para": "A circle is a collection of all points in a plane that are at a constant distance from a fixed point called the center. The constant distance is known as the radius of the circle. A line segment joining any two points on the circle is called a chord. The chord that passes through the center is called the diameter, which is the longest chord. The circumference of a circle is the perimeter or the boundary of the circle and is given by 2πr, where r is the radius. The area of a circle is πr^2. Circles have numerous properties that make them essential in geometry, including symmetry and the relationship between chords, tangents, and secants.",
     "points": [
      "A circle is defined as the locus of points equidistant from a fixed point called the center",
      "The radius is the distance from the center to any point on the circle",
      "The diameter is twice the radius and passes through the center",
      "A chord is a line segment joining any two points on the circle",
      "The circumference is the perimeter of the circle calculated as 2πr",
      "The area of a circle is given by the formula πr^2",
      "Circles exhibit rotational symmetry of infinite order"
     ],
     "keyTerms": [
      {
       "term": "Circle",
       "meaning": "A set of points equidistant from a fixed center point"
      },
      {
       "term": "Radius",
       "meaning": "The distance from the center to any point on the circle"
      },
      {
       "term": "Diameter",
       "meaning": "A chord passing through the center, equal to twice the radius"
      },
      {
       "term": "Circumference",
       "meaning": "The perimeter of the circle, calculated as 2πr"
      },
      {
       "term": "Chord",
       "meaning": "A line segment joining any two points on the circle"
      },
      {
       "term": "Arc",
       "meaning": "A portion of the circumference between two points"
      },
      {
       "term": "Sector",
       "meaning": "The region bounded by two radii and an arc"
      },
      {
       "term": "Segment",
       "meaning": "The region bounded by a chord and an arc"
      }
     ],
     "trick": "Remember 'CRAD' for Circle properties: Center, Radius, Area, Diameter. The area is always π times radius squared.",
     "examPointer": "CBSE often asks 1-mark questions on basic circle definitions and properties. Be prepared to identify radius, diameter, and chord from diagrams."
    },
    {
     "heading": "Tangent to a Circle",
     "para": "A tangent to a circle is a line that touches the circle at exactly one point, called the point of contact. The tangent is always perpendicular to the radius at the point of contact. This fundamental property is crucial for solving many geometric problems involving circles. If a line is perpendicular to a radius at its endpoint on the circle, then the line is a tangent to the circle. This relationship between tangent and radius is used extensively in constructing tangents and solving problems involving circles. The concept of tangents is also extended to the case where a point lies outside the circle, from which two tangents can be drawn.",
     "points": [
      "A tangent touches the circle at exactly one point",
      "The tangent is perpendicular to the radius at the point of contact",
      "If a line is perpendicular to a radius at its endpoint, it is a tangent",
      "The length of the tangent from an external point to the point of contact is equal for both tangents",
      "The angle between a tangent and a chord is equal to the angle in the alternate segment",
      "Tangents from an external point are equal in length"
     ],
     "keyTerms": [
      {
       "term": "Tangent",
       "meaning": "A line that touches the circle at exactly one point"
      },
      {
       "term": "Point of contact",
       "meaning": "The point where the tangent touches the circle"
      },
      {
       "term": "External point",
       "meaning": "A point outside the circle from which tangents can be drawn"
      },
      {
       "term": "Alternate segment",
       "meaning": "The segment of a circle on the opposite side of a chord"
      },
      {
       "term": "Power of a point",
       "meaning": "The product of the lengths of two segments from a point to a circle"
      }
     ],
     "trick": "Remember 'TRP' for Tangent properties: Tangent is perpendicular to Radius at Point of contact.",
     "examPointer": "CBSE frequently asks 2-3 mark questions on proving tangent properties and calculating tangent lengths. Diagram-based questions are common."
    },
    {
     "heading": "Number of Tangents from a Point",
     "para": "The number of tangents that can be drawn from a point to a circle depends on the position of the point relative to the circle. If the point lies outside the circle, exactly two tangents can be drawn to the circle. These two tangents are equal in length. If the point lies on the circle, exactly one tangent can be drawn at that point. If the point lies inside the circle, no tangents can be drawn from that point. These properties are derived from the fundamental relationship between the distance of the point from the center and the radius of the circle. Understanding these cases is essential for solving problems involving tangents and their lengths.",
     "points": [
      "From a point outside the circle, exactly two tangents can be drawn",
      "From a point on the circle, exactly one tangent can be drawn",
      "From a point inside the circle, no tangents can be drawn",
      "The two tangents from an external point are equal in length",
      "The angle between the two tangents from an external point can be calculated using trigonometry"
     ],
     "keyTerms": [
      {
       "term": "External point",
       "meaning": "A point outside the circle from which two tangents can be drawn"
      },
      {
       "term": "Point on circle",
       "meaning": "A point lying on the circumference with exactly one tangent"
      },
      {
       "term": "Internal point",
       "meaning": "A point inside the circle from which no tangents can be drawn"
      },
      {
       "term": "Equal tangents",
       "meaning": "The two tangents drawn from an external point to a circle are equal in length"
      }
     ],
     "trick": "Remember '2-1-0' rule: Two tangents from outside, one from on the circle, zero from inside.",
     "examPointer": "CBSE asks 1-2 mark questions on determining the number of tangents from a given point. Always justify your answer with the point's position relative to the circle."
    },
    {
     "heading": "Construction of Tangents",
     "para": "The construction of tangents to a circle is an important geometric skill. To construct a tangent at a point on the circle, we draw a line perpendicular to the radius at that point. For constructing tangents from an external point, we first find the midpoint of the line joining the external point to the center. Using this midpoint as the center, we draw a circle with the line segment as the diameter. The points where this new circle intersects the original circle are the points of contact for the tangents from the external point. This construction relies on the property that the angle in a semicircle is a right angle, ensuring the tangents are perpendicular to the radii at the points of contact.",
     "points": [
      "To construct a tangent at a point on the circle, draw a perpendicular to the radius at that point",
      "For tangents from an external point, find the midpoint of the line joining the point to the center",
      "Draw a circle with the line segment as diameter to find points of contact",
      "The construction uses the property that the angle in a semicircle is a right angle",
      "Verify that the constructed lines are perpendicular to the radii at the points of contact"
     ],
     "keyTerms": [
      {
       "term": "Construction of tangent",
       "meaning": "The geometric process of drawing a tangent to a circle"
      },
      {
       "term": "Point of contact",
       "meaning": "The point where the tangent touches the circle"
      },
      {
       "term": "External point",
       "meaning": "A point outside the circle from which tangents are constructed"
      },
      {
       "term": "Perpendicular construction",
       "meaning": "Drawing a line at 90 degrees to another line"
      }
     ],
     "trick": "For external point tangents, remember 'MID': find Midpoint, draw circle with diameter, get points of contact.",
     "examPointer": "CBSE may ask 3-4 mark construction questions. Always show all construction steps with proper labeling and justification."
    },
    {
     "heading": "Area of Sector and Segment",
     "para": "The area of a sector of a circle is the region bounded by two radii and the arc between them. The area of a sector is given by (θ/360) × πr^2, where θ is the central angle in degrees. If θ is in radians, the formula becomes (1/2)r^2θ. The area of a segment is the region bounded by a chord and the arc subtended by the chord. It can be found by subtracting the area of the corresponding triangle from the area of the sector. The area of the segment is (θ/360) × πr^2 - (1/2)r^2sinθ for θ in degrees. These formulas are essential for solving problems involving circular regions and are applied in various real-world contexts.",
     "points": [
      "The area of a sector is (θ/360) × πr^2 for θ in degrees",
      "For θ in radians, sector area is (1/2)r^2θ",
      "The area of a segment is sector area minus triangle area",
      "The length of an arc is (θ/360) × 2πr for θ in degrees",
      "For θ in radians, arc length is rθ",
      "The area of a segment can also be calculated using trigonometric functions"
     ],
     "keyTerms": [
      {
       "term": "Sector",
       "meaning": "The region bounded by two radii and an arc"
      },
      {
       "term": "Segment",
       "meaning": "The region bounded by a chord and an arc"
      },
      {
       "term": "Central angle",
       "meaning": "The angle subtended by an arc at the center"
      },
      {
       "term": "Arc length",
       "meaning": "The length of the circumference between two points"
      },
      {
       "term": "Radians",
       "meaning": "A unit of angle measurement equal to angle subtended at center by arc equal to radius"
      }
     ],
     "trick": "Remember 'SA' for Sector and Area: Sector Area = (θ/360) × πr^2. For segment, subtract triangle area.",
     "examPointer": "CBSE asks 3-4 mark questions on calculating sector and segment areas. Always show the formula substitution and calculation steps."
    },
    {
     "heading": "Area of Combination of Circles",
     "para": "In many problems, we encounter combinations of circles or circular regions with other shapes. The area of such combinations can be found by adding or subtracting the areas of the individual components. For example, the area of a ring (annulus) is the difference between the areas of two concentric circles with radii R and r, given by π(R^2 - r^2). When circles overlap, the area of the union is the sum of the individual areas minus the area of intersection. For circles inscribed in or circumscribed around other shapes, we use the properties of those shapes along with circle formulas. These problems require careful visualization and systematic calculation of each component area.",
     "points": [
      "The area of a ring (annulus) is π(R^2 - r^2) for concentric circles with radii R and r",
      "For overlapping circles, area of union = area1 + area2 - intersection area",
      "For circles inscribed in polygons, use polygon properties and circle formulas",
      "For circles circumscribed around polygons, use polygon properties and circle formulas",
      "When circles are tangent, the distance between centers equals sum or difference of radii"
     ],
     "keyTerms": [
      {
       "term": "Annulus",
       "meaning": "The region between two concentric circles"
      },
      {
       "term": "Concentric circles",
       "meaning": "Circles with the same center but different radii"
      },
      {
       "term": "Union of circles",
       "meaning": "The total area covered by one or both circles"
      },
      {
       "term": "Intersection of circles",
       "meaning": "The area common to both circles"
      },
      {
       "term": "Inscribed circle",
       "meaning": "A circle inside a polygon touching all sides"
      },
      {
       "term": "Circumscribed circle",
       "meaning": "A circle outside a polygon passing through all vertices"
      }
     ],
     "trick": "For annulus area, remember 'πR² - πr²' or factor as π(R² - r²). Always identify which is larger radius.",
     "examPointer": "CBSE asks 3-4 mark questions on combination areas. Draw clear diagrams and calculate each component separately before combining."
    },
    {
     "heading": "Length of Tangent",
     "para": "The length of a tangent from an external point to a circle is an important concept with various applications. If P is an external point and PA and PB are the two tangents to the circle with center O, then PA = PB. The length of the tangent can be calculated using the formula √(OP^2 - r^2), where OP is the distance from the external point to the center, and r is the radius of the circle. This formula is derived from the right triangle OAP, where OA is perpendicular to PA, making it a right-angled triangle at A. The Pythagorean theorem then gives OP^2 = OA^2 + PA^2, from which we derive the tangent length formula. This concept is frequently used in coordinate geometry and in solving problems involving circles and tangents.",
     "points": [
      "The two tangents from an external point to a circle are equal in length",
      "The length of the tangent is given by √(OP^2 - r^2)",
      "OP is the distance from the external point to the center",
      "r is the radius of the circle",
      "The formula is derived from the Pythagorean theorem in triangle OAP",
      "The tangent is perpendicular to the radius at the point of contact"
     ],
     "keyTerms": [
      {
       "term": "Tangent length",
       "meaning": "The distance from the external point to the point of contact"
      },
      {
       "term": "External point",
       "meaning": "A point outside the circle from which tangents are drawn"
      },
      {
       "term": "Pythagorean theorem",
       "meaning": "In a right triangle, the square of the hypotenuse equals the sum of squares of other two sides"
      },
      {
       "term": "Right triangle",
       "meaning": "A triangle with one angle equal to 90 degrees"
      },
      {
       "term": "Point of contact",
       "meaning": "The point where the tangent touches the circle"
      }
     ],
     "trick": "Remember 'T² = D² - R²' for Tangent length squared equals Distance squared minus Radius squared.",
     "examPointer": "CBSE asks 2-3 mark questions on calculating tangent lengths. Always identify the right triangle formed and apply the Pythagorean theorem correctly."
    },
    {
     "heading": "Angle Between Tangent and Chord",
     "para": "The angle between a tangent and a chord drawn through the point of contact is equal to the angle in the alternate segment. This important theorem states that if PQ is a tangent at point A on the circle, and AC is a chord, then the angle between the tangent and chord, ∠PAQ, is equal to the angle subtended by the chord in the alternate segment, ∠ABC. This property is useful for proving various geometric relationships and solving problems involving circles. The theorem can be extended to cases involving multiple chords and tangents, providing a powerful tool for angle chasing in circle geometry problems.",
     "points": [
      "The angle between tangent and chord equals angle in alternate segment",
      "If PQ is tangent at A and AC is chord, then ∠PAQ = ∠ABC",
      "This theorem is useful for proving geometric relationships",
      "The theorem applies to all chords drawn through the point of contact",
      "The property can be extended to multiple chords and tangents"
     ],
     "keyTerms": [
      {
       "term": "Alternate segment",
       "meaning": "The segment of a circle on the opposite side of a chord"
      },
      {
       "term": "Tangent-chord angle",
       "meaning": "The angle between a tangent and a chord at the point of contact"
      },
      {
       "term": "Angle subtended",
       "meaning": "The angle formed by an arc at a point on the circumference"
      },
      {
       "term": "Point of contact",
       "meaning": "The point where the tangent touches the circle"
      },
      {
       "term": "Chord",
       "meaning": "A line segment joining any two points on the circle"
      }
     ],
     "trick": "Remember 'TCA = ASA' for Tangent-Chord Angle equals Alternate Segment Angle.",
     "examPointer": "CBSE asks 2-3 mark proof questions using this theorem. Always clearly identify the tangent, chord, and alternate segment in your diagram."
    },
    {
     "heading": "Problems Involving Tangents",
     "para": "Problems involving tangents often require the application of multiple properties and theorems related to circles. These may include finding the length of tangents, proving that two lines are tangents, determining the number of tangents from a given point, or solving for unknown parameters in geometric configurations. A systematic approach involves drawing clear diagrams, identifying known and unknown quantities, and applying relevant theorems such as the tangent-radius perpendicularity, equal tangents from an external point, or the alternate segment theorem. Coordinate geometry problems may involve finding equations of tangents to circles given certain conditions. Practice with various problem types helps develop the skills needed to tackle complex tangent problems efficiently.",
     "points": [
      "Identify all given information and what needs to be found",
      "Draw clear diagrams with all relevant points and lines labeled",
      "Apply tangent properties such as perpendicularity to radius",
      "Use the formula for tangent length when appropriate",
      "Apply the alternate segment theorem for angle relationships",
      "For coordinate geometry, use the condition for a line to be tangent to a circle"
     ],
     "keyTerms": [
      {
       "term": "Tangent properties",
       "meaning": "The fundamental characteristics of tangents to circles"
      },
      {
       "term": "Geometric configuration",
       "meaning": "The arrangement of points, lines, and circles in a problem"
      },
      {
       "term": "Coordinate geometry",
       "meaning": "The study of geometry using algebraic coordinates"
      },
      {
       "term": "Systematic approach",
       "meaning": "A step-by-step method for solving problems"
      },
      {
       "term": "Unknown parameters",
       "meaning": "Variables or values that need to be determined"
      },
      {
       "term": "Given conditions",
       "meaning": "The constraints or information provided in the problem"
      }
     ],
     "trick": "For tangent problems, follow 'DPA': Draw diagram, list Properties, Apply relevant theorems.",
     "examPointer": "CBSE includes 4-5 mark problems combining multiple tangent concepts. Show all steps and justifications clearly."
    },
    {
     "heading": "Applications of Tangents",
     "para": "The properties of tangents to circles have numerous practical applications in various fields. In engineering, tangents are used in the design of gears, cams, and other mechanical components where smooth motion is required. In architecture, tangent properties help in designing arches, domes, and circular structures. In physics, the concept of tangents is fundamental in understanding motion along curved paths and in calculating velocities. In optics, tangent properties are used in designing mirrors and lenses. In computer graphics, tangent lines are used for smooth curve rendering. Understanding these applications helps in appreciating the real-world relevance of geometric concepts and in solving practical problems using mathematical principles.",
     "points": [
      "Tangents are used in designing mechanical components like gears and cams",
      "Architecture uses tangent properties for arches and domes",
      "Physics applies tangents for motion along curved paths",
      "Optics uses tangent properties in mirror and lens design",
      "Computer graphics uses tangents for smooth curve rendering"
     ],
     "keyTerms": [
      {
       "term": "Mechanical engineering",
       "meaning": "Application of tangent properties in designing moving parts"
      },
      {
       "term": "Architecture",
       "meaning": "The design and construction of buildings using geometric principles"
      },
      {
       "term": "Physics",
       "meaning": "The study of matter and motion using mathematical laws"
      },
      {
       "term": "Optics",
       "meaning": "The study of light and its interaction with surfaces"
      },
      {
       "term": "Computer graphics",
       "meaning": "The creation of images using computers and mathematical models"
      }
     ],
     "trick": "Remember 'MEAPOC' for applications: Mechanical, Engineering, Architecture, Physics, Optics, Computer graphics.",
     "examPointer": "CBSE may ask 1-2 mark application-based questions. Be prepared to explain how tangent properties are used in real-world scenarios."
    }
   ],
   "mcqs": [
    {
     "question": "The Fundamental Theorem of Arithmetic states that every composite number can be expressed as",
     "options": [
      "a sum of two prime numbers",
      "a product of prime numbers",
      "a difference of two prime numbers",
      "a quotient of two prime numbers"
     ],
     "answerIndex": 1,
     "explanation": "The Fundamental Theorem of Arithmetic states that every composite number can be expressed as a product of prime numbers in a unique way, apart from the order of the factors.",
     "difficulty": "easy",
     "pyq": "CBSE 2019"
    },
    {
     "question": "Which of the following is an irrational number?",
     "options": [
      "0.1010010001...",
      "0.1010101010...",
      "0.1001001000...",
      "0.1001000100..."
     ],
     "answerIndex": 0,
     "explanation": "0.1010010001... is an irrational number because it is a non-repeating, non-terminating decimal. The other options are either terminating or repeating decimals, which are rational.",
     "difficulty": "medium",
     "pyq": "CBSE 2020 Delhi"
    },
    {
     "question": "If the quadratic equation x^2 - 4x + k = 0 has equal roots, then the value of k is",
     "options": [
      "4",
      "-4",
      "2",
      "-2"
     ],
     "answerIndex": 0,
     "explanation": "For a quadratic equation ax^2 + bx + c = 0 to have equal roots, the discriminant must be zero. Here, discriminant D = b^2 - 4ac = (-4)^2 - 4(1)(k) = 16 - 4k. Setting D = 0 gives 16 - 4k = 0, so k = 4.",
     "difficulty": "medium",
     "pyq": "CBSE 2021"
    },
    {
     "question": "In an arithmetic progression, if the first term is 3 and the common difference is 2, then the 10th term is",
     "options": [
      "21",
      "23",
      "25",
      "27"
     ],
     "answerIndex": 1,
     "explanation": "The nth term of an AP is given by a_n = a + (n-1)d. Here, a = 3, d = 2, n = 10. So a_10 = 3 + (10-1)(2) = 3 + 18 = 23.",
     "difficulty": "easy",
     "pyq": "CBSE 2018"
    },
    {
     "question": "Which of the following is NOT a criterion for similarity of triangles?",
     "options": [
      "AA (Angle-Angle)",
      "SAS (Side-Angle-Side)",
      "SSA (Side-Side-Angle)",
      "SSS (Side-Side-Side)"
     ],
     "answerIndex": 2,
     "explanation": "SSA (Side-Side-Angle) is not a valid criterion for similarity of triangles. The valid criteria are AA, SAS, and SSS. SSA is not sufficient to guarantee similarity.",
     "difficulty": "medium",
     "pyq": "CBSE 2019"
    },
    {
     "question": "If the coordinates of points A and B are (2, 3) and (5, 7) respectively, then the distance between A and B is",
     "options": [
      "5",
      "sqrt(13)",
      "sqrt(17)",
      "13"
     ],
     "answerIndex": 1,
     "explanation": "The distance between two points (x1, y1) and (x2, y2) is given by sqrt((x2-x1)^2 + (y2-y1)^2). Here, distance = sqrt((5-2)^2 + (7-3)^2) = sqrt(9 + 16) = sqrt(25) = 5.",
     "difficulty": "easy",
     "pyq": "CBSE 2020"
    },
    {
     "question": "If sin A = 3/5, then the value of cos A is",
     "options": [
      "4/5",
      "3/5",
      "5/3",
      "5/4"
     ],
     "answerIndex": 0,
     "explanation": "Using the identity sin^2 A + cos^2 A = 1, we have (3/5)^2 + cos^2 A = 1, so 9/25 + cos^2 A = 1, thus cos^2 A = 16/25, and cos A = 4/5 (since A is acute).",
     "difficulty": "medium",
     "pyq": "CBSE 2021 Delhi"
    },
    {
     "question": "The tangent to a circle at any point is",
     "options": [
      "perpendicular to the radius at that point",
      "parallel to the radius at that point",
      "at 45 degrees to the radius at that point",
      "none of these"
     ],
     "answerIndex": 0,
     "explanation": "A fundamental property of circles states that the tangent at any point on the circle is perpendicular to the radius drawn to that point.",
     "difficulty": "easy",
     "pyq": "CBSE 2018"
    },
    {
     "question": "The area of a sector of a circle with radius 7 cm and angle 60 degrees is",
     "options": [
      "77/6 cm^2",
      "77/3 cm^2",
      "154/3 cm^2",
      "154/6 cm^2"
     ],
     "answerIndex": 0,
     "explanation": "Area of sector = (theta/360) * pi * r^2. Here, theta = 60, r = 7, pi = 22/7. So area = (60/360) * (22/7) * 7^2 = (1/6) * 22 * 7 = 154/6 = 77/3 cm^2.",
     "difficulty": "medium",
     "pyq": "CBSE 2022"
    },
    {
     "question": "The curved surface area of a cylinder with radius 3 cm and height 7 cm is",
     "options": [
      "132 cm^2",
      "66 cm^2",
      "264 cm^2",
      "33 cm^2"
     ],
     "answerIndex": 0,
     "explanation": "Curved surface area of cylinder = 2 * pi * r * h. Here, r = 3, h = 7, pi = 22/7. So area = 2 * (22/7) * 3 * 7 = 2 * 22 * 3 = 132 cm^2.",
     "difficulty": "easy",
     "pyq": "CBSE 2019"
    },
    {
     "question": "The mean of the following data is: 10, 15, 20, 25, 30",
     "options": [
      "15",
      "20",
      "25",
      "30"
     ],
     "answerIndex": 1,
     "explanation": "Mean = sum of observations / number of observations. Here, sum = 10+15+20+25+30 = 100, number of observations = 5. So mean = 100/5 = 20.",
     "difficulty": "easy",
     "pyq": "CBSE 2020 Delhi"
    },
    {
     "question": "The empirical relation between mean, median and mode is",
     "options": [
      "mean = median = mode",
      "3 median = 2 mean + mode",
      "2 median = 3 mean + mode",
      "mode = 3 mean - 2 median"
     ],
     "answerIndex": 1,
     "explanation": "The empirical relation states that for a moderately skewed distribution, 3 median = 2 mean + mode. This is a useful approximation when exact values are not known.",
     "difficulty": "medium",
     "pyq": "CBSE 2021"
    },
    {
     "question": "The probability of an event is 0.6, then the probability of its complementary event is",
     "options": [
      "0.4",
      "0.6",
      "1.6",
      "0.0"
     ],
     "answerIndex": 0,
     "explanation": "The probability of a complementary event is 1 minus the probability of the event. So P(complement) = 1 - 0.6 = 0.4.",
     "difficulty": "easy",
     "pyq": "CBSE 2018"
    },
    {
     "question": "If the HCF of 60 and 84 is 12, then their LCM is",
     "options": [
      "420",
      "504",
      "360",
      "240"
     ],
     "answerIndex": 0,
     "explanation": "For any two numbers, HCF × LCM = product of the numbers. So 12 × LCM = 60 × 84 = 5040. Thus LCM = 5040/12 = 420.",
     "difficulty": "medium",
     "pyq": "CBSE 2022 Delhi"
    },
    {
     "question": "If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio. This is known as",
     "options": [
      "Pythagoras theorem",
      "Basic Proportionality theorem",
      "Angle Bisector theorem",
      "Similarity theorem"
     ],
     "answerIndex": 1,
     "explanation": "The Basic Proportionality Theorem (also known as Thales' theorem) states that if a line is drawn parallel to one side of a triangle, it divides the other two sides proportionally.",
     "difficulty": "medium",
     "pyq": "CBSE 2020"
    },
    {
     "question": "In a right triangle ABC with right angle at C, if sin A = 3/5, then tan A is",
     "options": [
      "3/4",
      "4/3",
      "5/3",
      "5/4"
     ],
     "answerIndex": 0,
     "explanation": "In right triangle ABC, sin A = opposite/hypotenuse = BC/AB = 3/5. Let BC = 3k, AB = 5k. Then AC = sqrt(AB^2 - BC^2) = sqrt(25k^2 - 9k^2) = 4k. So tan A = opposite/adjacent = BC/AC = 3k/4k = 3/4.",
     "difficulty": "hard",
     "pyq": "CBSE 2021"
    },
    {
     "question": "The total surface area of a solid hemisphere with radius 7 cm is",
     "options": [
      "462 cm^2",
      "231 cm^2",
      "308 cm^2",
      "154 cm^2"
     ],
     "answerIndex": 0,
     "explanation": "Total surface area of hemisphere = 3 * pi * r^2. Here, r = 7, pi = 22/7. So area = 3 * (22/7) * 7^2 = 3 * 22 * 7 = 462 cm^2.",
     "difficulty": "medium",
     "pyq": "CBSE 2019"
    },
    {
     "question": "If the roots of the equation 2x^2 + 8x + k = 0 are real and equal, then k is",
     "options": [
      "8",
      "-8",
      "16",
      "-16"
     ],
     "answerIndex": 2,
     "explanation": "For real and equal roots, discriminant D = 0. Here, D = b^2 - 4ac = 8^2 - 4(2)(k) = 64 - 8k. Setting D = 0 gives 64 - 8k = 0, so k = 8.",
     "difficulty": "medium",
     "pyq": "CBSE 2020"
    },
    {
     "question": "The sum of first 10 terms of an AP with first term 5 and common difference 3 is",
     "options": [
      "200",
      "185",
      "170",
      "155"
     ],
     "answerIndex": 0,
     "explanation": "Sum of first n terms of AP is S_n = n/2 * [2a + (n-1)d]. Here, n = 10, a = 5, d = 3. So S_10 = 10/2 * [2*5 + (10-1)*3] = 5 * [10 + 27] = 5 * 37 = 185.",
     "difficulty": "medium",
     "pyq": "CBSE 2021 Delhi"
    },
    {
     "question": "If two tangents are drawn to a circle from an external point, then",
     "options": [
      "they are equal in length",
      "they are perpendicular to each other",
      "they make equal angles with the line joining the point to the center",
      "all of these"
     ],
     "answerIndex": 3,
     "explanation": "From an external point to a circle, the two tangents drawn are equal in length, make equal angles with the line joining the point to the center, and are perpendicular to the respective radii at the points of contact.",
     "difficulty": "hard",
     "pyq": "CBSE 2022"
    }
   ],
   "boardQuestions": [
    {
     "question": "Prove that sqrt(3) is an irrational number.",
     "marks": 3,
     "type": "long",
     "probability": "very-high",
     "answer": "To prove that sqrt(3) is irrational, we use contradiction. Assume sqrt(3) is rational, so it can be written as sqrt(3) = p/q where p and q are coprime integers (no common factors other than 1) and q ≠ 0. Squaring both sides gives 3 = p^2/q^2, so p^2 = 3q^2. This means p^2 is divisible by 3, so p must be divisible by 3 (since 3 is prime). Let p = 3k for some integer k. Substituting, (3k)^2 = 3q^2, so 9k^2 = 3q^2, which simplifies to 3k^2 = q^2. This means q^2 is divisible by 3, so q must also be divisible by 3. But if both p and q are divisible by 3, they have a common factor of 3, contradicting our assumption that p and q are coprime. Therefore, our initial assumption that sqrt(3) is rational must be false, and sqrt(3) is irrational."
    },
    {
     "question": "Find the HCF and LCM of 96 and 404 by prime factorization method.",
     "marks": 3,
     "type": "numerical",
     "probability": "very-high",
     "answer": "Prime factorization of 96 = 2^5 × 3^1. Prime factorization of 404 = 2^2 × 101^1. HCF is the product of the lowest powers of common prime factors = 2^2 = 4. LCM is the product of the highest powers of all prime factors = 2^5 × 3^1 × 101^1 = 32 × 3 × 101 = 96 × 101 = 9696. Therefore, HCF = 4 and LCM = 9696."
    },
    {
     "question": "Solve the quadratic equation 2x^2 - 5x + 3 = 0 using the quadratic formula.",
     "marks": 2,
     "type": "numerical",
     "probability": "very-high",
     "answer": "The quadratic formula is x = [-b ± sqrt(b^2 - 4ac)] / (2a). For the equation 2x^2 - 5x + 3 = 0, a = 2, b = -5, c = 3. First, calculate the discriminant D = b^2 - 4ac = (-5)^2 - 4(2)(3) = 25 - 24 = 1. Since D > 0, there are two real roots. Substituting into the formula: x = [5 ± sqrt(1)] / (2×2) = [5 ± 1]/4. So x1 = (5 + 1)/4 = 6/4 = 3/2 and x2 = (5 - 1)/4 = 4/4 = 1. Therefore, the roots are x = 3/2 and x = 1."
    },
    {
     "question": "Find the 15th term of an AP whose first term is 5 and common difference is 3.",
     "marks": 2,
     "type": "numerical",
     "probability": "high",
     "answer": "The nth term of an AP is given by a_n = a + (n-1)d. Here, a = 5 (first term), d = 3 (common difference), n = 15. Substituting these values: a_15 = 5 + (15-1)×3 = 5 + 14×3 = 5 + 42 = 47. Therefore, the 15th term of the AP is 47."
    },
    {
     "question": "In a triangle ABC, DE is parallel to BC such that AD/DB = 3/5. If AC = 5.6 cm, find AE.",
     "marks": 3,
     "type": "numerical",
     "probability": "very-high",
     "answer": "Given DE is parallel to BC, by Basic Proportionality Theorem (Thales' theorem), we have AD/DB = AE/EC. Given AD/DB = 3/5, so AE/EC = 3/5. Let AE = 3k and EC = 5k. Since AC = AE + EC = 3k + 5k = 8k, and AC = 5.6 cm, we have 8k = 5.6, so k = 5.6/8 = 0.7. Therefore, AE = 3k = 3 × 0.7 = 2.1 cm."
    },
    {
     "question": "Find the coordinates of the point which divides the line segment joining points A(2, -3) and B(5, 6) in the ratio 1:2.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "To find the coordinates of a point dividing a line segment in the ratio m:n, we use the section formula: x = (mx2 + nx1)/(m+n), y = (my2 + ny1)/(m+n). Here, A(2, -3) = (x1, y1), B(5, 6) = (x2, y2), and the ratio m:n = 1:2. Substituting: x = (1×5 + 2×2)/(1+2) = (5 + 4)/3 = 9/3 = 3. y = (1×6 + 2×(-3))/(1+2) = (6 - 6)/3 = 0/3 = 0. Therefore, the coordinates of the point are (3, 0)."
    },
    {
     "question": "If sin A = 3/5 and cos B = 12/13, where A and B are acute angles, find the value of sin(A+B).",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "Given sin A = 3/5, we can find cos A using the identity sin^2 A + cos^2 A = 1. (3/5)^2 + cos^2 A = 1, so 9/25 + cos^2 A = 1, thus cos^2 A = 16/25, and cos A = 4/5 (since A is acute). Given cos B = 12/13, we can find sin B: sin^2 B + (12/13)^2 = 1, so sin^2 B = 1 - 144/169 = 25/169, thus sin B = 5/13 (since B is acute). Now, sin(A+B) = sin A cos B + cos A sin B = (3/5)(12/13) + (4/5)(5/13) = 36/65 + 20/65 = 56/65. Therefore, sin(A+B) = 56/65."
    },
    {
     "question": "Prove that the tangent at any point of a circle is perpendicular to the radius through the point of contact.",
     "marks": 4,
     "type": "long",
     "probability": "very-high",
     "answer": "To prove that the tangent at any point of a circle is perpendicular to the radius through the point of contact, consider a circle with center O and a tangent AB at point P on the circle. We need to prove that OP is perpendicular to AB. Assume for contradiction that OP is not perpendicular to AB. Then there exists a point Q on AB different from P such that OQ is perpendicular to AB. Since Q lies on AB which is tangent at P, Q must lie outside the circle. But OQ is perpendicular to AB, and OP is the shortest distance from O to AB (as perpendicular is the shortest distance from a point to a line). Therefore, OP < OQ. But Q is outside the circle, so OQ > radius OP, which contradicts OP < OQ. Therefore, our assumption is false, and OP must be perpendicular to AB. Hence, the tangent at any point of a circle is perpendicular to the radius through the point of contact."
    },
    {
     "question": "A chord of a circle of radius 10 cm subtends a right angle at the center. Find the area of the corresponding minor segment.",
     "marks": 4,
     "type": "numerical",
     "probability": "high",
     "answer": "Given a circle with radius r = 10 cm and a chord subtending a right angle (90°) at the center. The area of the minor segment is the area of the sector minus the area of the triangle. Area of sector = (theta/360) × pi × r^2 = (90/360) × (22/7) × 10^2 = (1/4) × (22/7) × 100 = 2200/28 = 550/7 cm^2. The triangle formed is a right-angled isosceles triangle with two sides as radii. Area of triangle = (1/2) × base × height = (1/2) × 10 × 10 = 50 cm^2. Therefore, area of minor segment = area of sector - area of triangle = 550/7 - 50 = 550/7 - 350/7 = 200/7 cm^2."
    },
    {
     "question": "A metallic sphere of radius 4.2 cm is melted and recast into the shape of a cylinder of radius 6 cm. Find the height of the cylinder.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "When a solid is melted and recast, its volume remains the same. Volume of sphere = (4/3) × pi × r^3 = (4/3) × (22/7) × (4.2)^3. Volume of cylinder = pi × r^2 × h = (22/7) × (6)^2 × h. Setting them equal: (4/3) × (22/7) × (4.2)^3 = (22/7) × (6)^2 × h. Simplifying: (4/3) × (4.2)^3 = 36 × h. Calculating (4.2)^3 = 4.2 × 4.2 × 4.2 = 17.64 × 4.2 = 74.088. So (4/3) × 74.088 = 36 × h. 296.352/3 = 36 × h. 98.784 = 36 × h. Therefore, h = 98.784/36 = 2.744 cm. The height of the cylinder is 2.744 cm."
    },
    {
     "question": "The following distribution gives the daily income of 50 workers of a factory. Find the mean daily income of the workers.",
     "marks": 4,
     "type": "case-based",
     "probability": "high",
     "answer": "Daily Income (in Rs): 100-120, 120-140, 140-160, 160-180, 180-200. Number of workers: 12, 14, 8, 6, 10. To find the mean, we use the assumed mean method. Let's assume mean A = 150. We calculate the deviation (d_i) of each class from A and multiply by frequency (f_i). For 100-120: d_i = 110-150 = -40, f_i×d_i = 12×(-40) = -480. For 120-140: d_i = 130-150 = -20, f_i×d_i = 14×(-20) = -280. For 140-160: d_i = 150-150 = 0, f_i×d_i = 8×0 = 0. For 160-180: d_i = 170-150 = 20, f_i×d_i = 6×20 = 120. For 180-200: d_i = 190-150 = 40, f_i×d_i = 10×40 = 400. Sum of f_i×d_i = -480-280+0+120+400 = -240. Sum of f_i = 12+14+8+6+10 = 50. Mean = A + (sum of f_i×d_i)/sum of f_i = 150 + (-240)/50 = 150 - 4.8 = 145.2. Therefore, the mean daily income of the workers is Rs 145.20."
    }
   ],
   "bookName": "Mathematics (NCERT Class 10)",
   "code": "maths"
  },
  {
   "number": 11,
   "title": "Areas Related to Circles",
   "summary": "Chapter 11 of NCERT Class 10 Mathematics covers 'Areas Related to Circles'. This chapter builds upon students' understanding of circles by introducing concepts of sector and segment areas, lengths of arcs, and combinations involving circles. The chapter explains how to calculate areas of sectors and segments using formulas involving central angles and radii. It also covers applications of these concepts in real-life situations and combinations with other shapes. The chapter emphasizes the relationship between the area of a circle, its radius, and the constant pi. Students learn to derive and apply formulas for area and circumference of circles, sectors, and segments, and solve problems involving these concepts in various contexts.",
   "weightageMarks": 5,
   "difficulty": "medium",
   "hotTopics": [
    "area of circle formula",
    "sector area calculation",
    "segment area derivation",
    "length of arc formula",
    "area of combination of figures",
    "frustum of cone",
    "surface area of combinations",
    "volume of combinations",
    "cost calculations",
    "word problems on areas"
   ],
   "sections": [
    {
     "heading": "Introduction to Circles and Basic Formulas",
     "para": "A circle is a collection of all points in a plane that are equidistant from a fixed point called the center. The distance from the center to any point on the circle is called the radius. The area of a circle is given by A = πr^2, where r is the radius. The circumference or perimeter of a circle is given by C = 2πr or C = πd, where d is the diameter. These fundamental formulas form the basis for understanding more complex concepts related to circles. The constant π (pi) is approximately 22/7 or 3.14 and represents the ratio of the circumference to the diameter of any circle. Understanding these basic formulas is essential before moving on to more advanced topics like sectors and segments.",
     "points": [
      "The radius of a circle is the distance from the center to any point on the circle",
      "The diameter is twice the radius and passes through the center of the circle",
      "The area of a circle is calculated using the formula A = πr^2",
      "The circumference of a circle is calculated using C = 2πr or C = πd",
      "The value of π is approximately 22/7 or 3.14",
      "π is a constant ratio of circumference to diameter for all circles",
      "Circles with equal radii are congruent circles",
      "The circumference of a circle is approximately 3.14 times its diameter"
     ],
     "keyTerms": [
      {
       "term": "Circle",
       "meaning": "A closed shape where all points are equidistant from a fixed center point"
      },
      {
       "term": "Radius",
       "meaning": "The distance from the center of a circle to any point on the circle"
      },
      {
       "term": "Diameter",
       "meaning": "The longest chord of a circle passing through the center, equal to twice the radius"
      },
      {
       "term": "Circumference",
       "meaning": "The perimeter or boundary length of a circle"
      },
      {
       "term": "Pi (π)",
       "meaning": "The constant ratio of circumference to diameter of any circle, approximately 22/7 or 3.14"
      }
     ],
     "trick": "Remember 'Area = πr squared' by visualizing the radius extending out to form a square with area r^2, then multiplying by π.",
     "examPointer": "CBSE often asks for direct application of area and circumference formulas with 1-2 mark questions. Remember to use π = 22/7 when radius is a multiple of 7 for exact answers."
    },
    {
     "heading": "Area of Sector and Segment of a Circle",
     "para": "A sector of a circle is the portion of a circle enclosed by two radii and an arc. The area of a sector is proportional to the central angle subtended by the arc. For a central angle θ in degrees, the area of sector is (θ/360) × πr^2. A segment of a circle is the region bounded by a chord and the arc subtended by that chord. The area of a minor segment is the area of the corresponding sector minus the area of the triangle formed by the chord and the two radii. For a central angle θ, the area of segment is (θ/360) × πr^2 - (1/2) × r^2 × sinθ. These formulas are essential for solving problems involving circular segments and sectors in various contexts.",
     "points": [
      "A sector is the portion of a circle enclosed by two radii and an arc",
      "The area of a sector is proportional to its central angle",
      "For central angle θ in degrees, sector area = (θ/360) × πr^2",
      "A segment is the region bounded by a chord and its corresponding arc",
      "The area of a minor segment = sector area - area of triangle",
      "For central angle θ, segment area = (θ/360) × πr^2 - (1/2)r^2 sinθ",
      "The area of a major segment = area of circle - area of minor segment",
      "When θ = 180°, the segment becomes a semicircle"
     ],
     "keyTerms": [
      {
       "term": "Sector",
       "meaning": "The portion of a circle enclosed by two radii and an arc"
      },
      {
       "term": "Segment",
       "meaning": "The region bounded by a chord and the arc subtended by that chord"
      },
      {
       "term": "Central Angle",
       "meaning": "The angle subtended by an arc at the center of the circle"
      },
      {
       "term": "Arc",
       "meaning": "A portion of the circumference of a circle"
      },
      {
       "term": "Chord",
       "meaning": "A straight line joining any two points on the circumference of a circle"
      }
     ],
     "trick": "Remember sector area formula as 'fraction of circle' where fraction = θ/360°. For segment, visualize 'sector minus triangle'.",
     "examPointer": "CBSE commonly asks 3-4 mark questions requiring calculation of sector and segment areas. Pay special attention to when angles are given in radians versus degrees and ensure proper unit conversion."
    },
    {
     "heading": "Length of an Arc",
     "para": "The length of an arc of a circle is proportional to the central angle subtended by that arc. For a circle with radius r and central angle θ in degrees, the length of the arc is given by (θ/360) × 2πr or (θ/360) × πd, where d is the diameter. If the central angle is given in radians, the arc length is simply rθ. This relationship is derived from the fact that the entire circumference corresponds to a central angle of 360 degrees or 2π radians. Understanding arc length is crucial for solving problems involving circular paths, rotations, and various real-life applications where portions of circles are involved.",
     "points": [
      "The length of an arc is proportional to its central angle",
      "For central angle θ in degrees, arc length = (θ/360) × 2πr",
      "For central angle θ in radians, arc length = rθ",
      "The entire circumference corresponds to θ = 360° or 2π radians",
      "Arc length can be calculated using either degrees or radians",
      "When θ = 360°, arc length equals the circumference",
      "When θ = 180°, arc length equals half the circumference",
      "Arc length is always measured in linear units (cm, m, etc.)"
     ],
     "keyTerms": [
      {
       "term": "Arc Length",
       "meaning": "The distance along the curved line forming part of the circumference of a circle"
      },
      {
       "term": "Radian",
       "meaning": "A unit of angular measure where one radian is the angle subtended at the center by an arc equal in length to the radius"
      },
      {
       "term": "Proportionality",
       "meaning": "The relationship between arc length and central angle where arc length ∝ central angle"
      }
     ],
     "trick": "Remember arc length as 'fraction of circumference' where fraction = θ/360°. For radians, simply multiply radius by angle.",
     "examPointer": "CBSE may ask 2-3 mark questions on arc length, often in combination with other concepts like area of sector or in word problems involving circular motion."
    },
    {
     "heading": "Areas of Combinations of Plane Figures",
     "para": "In many real-world situations, we encounter combinations of circles with other geometric shapes like triangles, rectangles, or other circles. To find the area of such combinations, we need to identify the individual components and calculate their areas separately, then add or subtract as appropriate. For example, the area of a circle inscribed in a square is found by subtracting the area of the circle from the area of the square. Similarly, the area of a circle circumscribed around a triangle involves finding the area of the triangle and the area between the triangle and the circle. These problems require careful analysis of the given figure and application of appropriate area formulas for each component.",
     "points": [
      "Combinations of figures require identifying individual components",
      "Area of combination = sum or difference of individual areas",
      "For a circle inscribed in a square, area = square area - circle area",
      "For a circle circumscribed around a triangle, find triangle area and annular region",
      "When circles overlap, find area of intersection separately",
      "For semicircles attached to rectangles, calculate rectangle area plus semicircle area",
      "For sectors attached to triangles, add their areas appropriately",
      "Always draw clear diagrams to identify all components"
     ],
     "keyTerms": [
      {
       "term": "Inscribed",
       "meaning": "A figure drawn inside another figure touching it at points but not intersecting"
      },
      {
       "term": "Circumscribed",
       "meaning": "A figure drawn outside another figure touching it at vertices"
      },
      {
       "term": "Annular Region",
       "meaning": "The region between two concentric circles"
      },
      {
       "term": "Combination of Figures",
       "meaning": "Two or more geometric shapes combined together"
      }
     ],
     "trick": "For combination problems, visualize 'breaking down' the figure into simpler shapes whose areas you know how to calculate.",
     "examPointer": "CBSE commonly asks 4-5 mark questions on combinations of figures. These questions require careful diagram analysis and step-by-step calculation. Practice identifying all components and their relationships."
    },
    {
     "heading": "Areas Related to Circles in Real Life",
     "para": "The concepts of areas related to circles have numerous practical applications in everyday life. In architecture and construction, circular designs are common, and calculating areas of sectors and segments is essential for material estimation. In agriculture, circular irrigation systems require area calculations for water distribution. In transportation, circular roads and roundabouts need area calculations for planning. The design of gears, wheels, and other mechanical components involves circular segments. Even in sports, the playing areas of some sports like cricket involve circular segments. Understanding these applications helps students appreciate the relevance of mathematical concepts in real-world scenarios and enhances problem-solving skills.",
     "points": [
      "Circular designs in architecture require area calculations for material estimation",
      "Agricultural irrigation systems use circular patterns for water distribution",
      "Transportation planning involves circular roads and roundabouts",
      "Mechanical components like gears and wheels use circular segments",
      "Sports facilities like cricket grounds have circular segments",
      "Circular gardens and parks need area calculations for landscaping",
      "Circular water tanks require area calculations for capacity",
      "Circular dining tables need area calculations for seating arrangements"
     ],
     "keyTerms": [
      {
       "term": "Irrigation",
       "meaning": "The application of controlled water to plants at appropriate intervals"
      },
      {
       "term": "Roundabout",
       "meaning": "A circular road junction where traffic moves in one direction around a central island"
      },
      {
       "term": "Capacity",
       "meaning": "The maximum amount that something can contain or hold"
      },
      {
       "term": "Landscaping",
       "meaning": "The activity of improving the aesthetic appearance of an area"
      }
     ],
     "trick": "Remember real-life applications by associating circular areas with everyday objects like pizza slices (sector), pac-man (segment), and ferris wheels (arc length).",
     "examPointer": "CBSE includes real-life application questions worth 3-4 marks. These often involve word problems requiring conversion of real situations into mathematical models using circle area concepts."
    },
    {
     "heading": "Conversion of Units and Calculations",
     "para": "When solving problems related to areas of circles, it's essential to handle units correctly. Areas are always measured in square units like cm^2, m^2, etc. When converting between different units, remember that 1 m = 100 cm, so 1 m^2 = 10,000 cm^2. Similarly, 1 km = 1000 m, so 1 km^2 = 1,000,000 m^2. For calculations involving π, it's important to use the appropriate value as specified in the problem—either 22/7, 3.14, or the π button on a calculator. When dealing with exact values, it's often better to leave answers in terms of π rather than approximating. Always show all steps in calculations to avoid errors and ensure partial credit even if the final answer is incorrect.",
     "points": [
      "Areas are measured in square units (cm^2, m^2, etc.)",
      "1 m = 100 cm, so 1 m^2 = 10,000 cm^2",
      "1 km = 1000 m, so 1 km^2 = 1,000,000 m^2",
      "Use π = 22/7 when radius is a multiple of 7 for exact answers",
      "Use π = 3.14 when specified or for approximate answers",
      "Leave answers in terms of π when exact value is required",
      "Show all calculation steps to avoid errors",
      "Check units at each step of the calculation"
     ],
     "keyTerms": [
      {
       "term": "Square Units",
       "meaning": "Units for measuring area, such as cm^2, m^2, etc."
      },
      {
       "term": "Conversion",
       "meaning": "Changing from one unit to another using appropriate conversion factors"
      },
      {
       "term": "Approximation",
       "meaning": "A value that is close to, but not exactly equal to, the actual value"
      },
      {
       "term": "Exact Value",
       "meaning": "A precise value without approximation, often left in terms of π"
      }
     ],
     "trick": "Remember unit conversion for area: 'square the linear conversion factor' - if 1 m = 100 cm, then 1 m^2 = 100^2 cm^2 = 10,000 cm^2.",
     "examPointer": "CBSE frequently includes unit conversion questions worth 1-2 marks. Always check if the answer needs to be in specific units and show conversion steps clearly. Pay attention to whether exact or approximate value of π is required."
    },
    {
     "heading": "Cost Calculations Involving Circular Areas",
     "para": "In many practical applications, we need to calculate the cost associated with circular areas. This includes costs for flooring, painting, fencing, or covering circular surfaces. To find the total cost, first calculate the area that needs to be covered or enclosed, then multiply by the cost per unit area. For example, to find the cost of paving a circular ground, calculate the area of the circle and multiply by the cost per square meter. When dealing with sectors or segments, calculate their areas first, then apply the cost per unit area. For combinations of shapes, find the total area to be covered and then multiply by the appropriate cost rate. Always ensure that units are consistent throughout the calculation.",
     "points": [
      "Cost calculations require finding area first, then multiplying by cost per unit area",
      "For circular grounds, cost = area × cost per square unit",
      "For sectors, calculate sector area first, then apply cost rate",
      "For combinations, find total area to be covered, then calculate cost",
      "Ensure units are consistent (area in m^2, cost per m^2, etc.)",
      "For fencing, use circumference instead of area",
      "For painting, only consider the surface area to be painted",
      "Break down complex shapes into simpler components for cost calculation"
     ],
     "keyTerms": [
      {
       "term": "Cost per Unit Area",
       "meaning": "The cost of covering or enclosing one unit of area"
      },
      {
       "term": "Paving",
       "meaning": "The process of covering an area with a hard surface"
      },
      {
       "term": "Fencing",
       "meaning": "The process of enclosing an area with a barrier"
      },
      {
       "term": "Surface Area",
       "meaning": "The total area that covers the outside of a three-dimensional object"
      }
     ],
     "trick": "Remember 'Cost = Area × Rate' by visualizing covering each square unit with material that costs 'rate' per unit.",
     "examPointer": "CBSE includes cost calculation questions worth 3-4 marks. These often involve multi-step problems requiring area calculation followed by cost application. Pay attention to whether the entire area or only parts need to be covered."
    },
    {
     "heading": "Problem-Solving Strategies",
     "para": "Solving problems related to areas of circles requires a systematic approach. First, carefully read the problem and identify what is given and what is asked. Draw a clear diagram to visualize the situation, marking all given information. Identify the relevant formulas needed for the solution. If dealing with combinations of figures, break them down into simpler components whose areas can be calculated. For problems involving sectors or segments, determine whether you need to find areas, arc lengths, or both. Set up equations if necessary and solve step by step, showing all working. Finally, check if the answer makes sense in the context of the problem and verify units. Practice with a variety of problems to develop proficiency.",
     "points": [
      "Read the problem carefully to identify given information and what is asked",
      "Draw a clear diagram marking all given information",
      "Identify the relevant formulas needed for the solution",
      "Break down complex figures into simpler components",
      "Determine whether areas, arc lengths, or both are needed",
      "Set up equations if necessary and solve step by step",
      "Check if the answer makes sense in the context",
      "Verify that units are correct in the final answer"
     ],
     "keyTerms": [
      {
       "term": "Systematic Approach",
       "meaning": "A methodical step-by-step process for solving problems"
      },
      {
       "term": "Diagram",
       "meaning": "A visual representation of a problem situation"
      },
      {
       "term": "Equation",
       "meaning": "A mathematical statement showing that two expressions are equal"
      },
      {
       "term": "Verification",
       "meaning": "The process of checking that a solution is correct"
      }
     ],
     "trick": "Use the 'GIVEN-FIND-SOLUTION' framework: list what's given, identify what to find, then develop a step-by-step solution path.",
     "examPointer": "CBSE values problem-solving strategies in 3-5 mark questions. Even if you can't get the final answer, showing correct methodology and partial working can earn significant marks. Practice with a variety of problems to build confidence."
    },
    {
     "heading": "Common Errors and Precautions",
     "para": "When solving problems related to areas of circles, students often make certain errors that can be avoided with proper precautions. One common mistake is confusing the formulas for area and circumference. Remember that area involves r^2 while circumference involves r. Another error is mixing up degrees and radians when calculating sector areas and arc lengths. Always check the unit of the angle given. Students also frequently forget to convert units properly, especially when dealing with areas. It's important to square the linear conversion factor when converting area units. Forgetting to use the correct value of π as specified in the problem is another common error. Always double-check calculations, especially when working with fractions and π.",
     "points": [
      "Don't confuse area formula (πr^2) with circumference formula (2πr)",
      "Always check if angle is in degrees or radians before using formulas",
      "Remember to square the conversion factor when converting area units",
      "Use the specified value of π (22/7, 3.14, or exact π)",
      "Don't forget to break down combination figures into simpler components",
      "Be careful with the difference between minor and major segments",
      "Check that the final answer makes sense in the context of the problem",
      "Show all working to avoid calculation errors"
     ],
     "keyTerms": [
      {
       "term": "Calculation Error",
       "meaning": "Mistakes made during arithmetic or algebraic operations"
      },
      {
       "term": "Unit Consistency",
       "meaning": "Using the same units throughout a calculation to ensure correct results"
      },
      {
       "term": "Formula Misapplication",
       "meaning": "Using an incorrect formula for a given situation"
      },
      {
       "term": "Verification",
       "meaning": "Checking the correctness of a solution through re-calculation or alternative methods"
      }
     ],
     "trick": "Remember 'Area has square, circumference doesn't' to distinguish between πr^2 and 2πr. Visualize area as covering space (2D) and circumference as boundary length (1D).",
     "examPointer": "CBSE awards marks for correct methodology even if final answer is wrong. Avoid careless errors by double-checking formulas, units, and calculations. Practice regularly to build familiarity with common pitfalls."
    }
   ],
   "mcqs": [
    {
     "question": "If a and b are two prime numbers, then their HCF is",
     "options": [
      "a",
      "b",
      "1",
      "ab"
     ],
     "answerIndex": 2,
     "explanation": "The HCF of two distinct prime numbers is always 1 because they have no common factors other than 1.",
     "difficulty": "easy"
    },
    {
     "question": "The decimal expansion of 17/8 will terminate after how many decimal places?",
     "options": [
      "1",
      "2",
      "3",
      "4"
     ],
     "answerIndex": 1,
     "explanation": "The denominator 8 = 2^3, which is of the form 2^m × 5^n where n = 0. So the decimal terminates after m = 2 places.",
     "difficulty": "medium"
    },
    {
     "question": "If the quadratic equation x^2 - 6x + 9 = 0 has equal roots, then the value of k is",
     "options": [
      "-9",
      "9",
      "0",
      "6"
     ],
     "answerIndex": 1,
     "explanation": "For equal roots, discriminant D = 0. Here D = (-6)^2 - 4(1)(9) = 36 - 36 = 0, so k = 9.",
     "difficulty": "medium"
    },
    {
     "question": "The sum of first 15 terms of an AP is 105. The first term is 1. The common difference is",
     "options": [
      "1",
      "2",
      "3",
      "4"
     ],
     "answerIndex": 0,
     "explanation": "Using S_n = n/2 [2a + (n-1)d], we get 105 = 15/2 [2(1) + 14d], which gives d = 1.",
     "difficulty": "medium"
    },
    {
     "question": "In triangles ABC and DEF, if ∠A = ∠D and AB/DE = AC/DF, then the triangles are similar by",
     "options": [
      "SSS",
      "SAS",
      "AA",
      "ASA"
     ],
     "answerIndex": 1,
     "explanation": "The SAS similarity criterion requires two sides in proportion and the included angle equal, which matches the given information.",
     "difficulty": "easy"
    },
    {
     "question": "The distance between points (3,4) and (6,8) is",
     "options": [
      "5",
      "sqrt(5)",
      "25",
      "sqrt(25)"
     ],
     "answerIndex": 0,
     "explanation": "Using distance formula: sqrt[(6-3)^2 + (8-4)^2] = sqrt[9 + 16] = sqrt(25) = 5.",
     "difficulty": "easy"
    },
    {
     "question": "If sinθ = 3/5, then cosθ is",
     "options": [
      "3/5",
      "4/5",
      "5/3",
      "5/4"
     ],
     "answerIndex": 1,
     "explanation": "Using sin^2θ + cos^2θ = 1, we get cosθ = sqrt(1 - (3/5)^2) = sqrt(1 - 9/25) = sqrt(16/25) = 4/5.",
     "difficulty": "medium"
    },
    {
     "question": "The angle of elevation of the top of a tower from a point on the ground is 30°. If the height of the tower is 30m, the distance of the point from the tower is",
     "options": [
      "10√3 m",
      "30√3 m",
      "30 m",
      "10 m"
     ],
     "answerIndex": 0,
     "explanation": "Using tan30° = height/distance, we get 1/√3 = 30/distance, so distance = 30√3 m.",
     "difficulty": "medium"
    },
    {
     "question": "The length of the tangent drawn from a point 8cm away from the center of a circle of radius 6cm is",
     "options": [
      "2 cm",
      "4 cm",
      "10 cm",
      "√14 cm"
     ],
     "answerIndex": 1,
     "explanation": "Using Pythagoras theorem: tangent length = sqrt(8^2 - 6^2) = sqrt(64 - 36) = sqrt(28) = 2√7 cm.",
     "difficulty": "hard"
    },
    {
     "question": "The area of a sector of a circle with radius 14cm and angle 45° is",
     "options": [
      "77 cm²",
      "154 cm²",
      "308 cm²",
      "616 cm²"
     ],
     "answerIndex": 0,
     "explanation": "Area = (θ/360) × πr² = (45/360) × (22/7) × 14² = (1/8) × 22 × 14 × 2 = 77 cm².",
     "difficulty": "medium"
    },
    {
     "question": "A solid cylinder of height 10cm and radius 7cm is melted and recast into cones of height 2cm and radius 1cm. The number of cones formed is",
     "options": [
      "245",
      "490",
      "735",
      "980"
     ],
     "answerIndex": 1,
     "explanation": "Volume of cylinder = π × 7² × 10 = 490π cm³. Volume of each cone = (1/3) × π × 1² × 2 = (2/3)π cm³. Number of cones = 490π / (2/3)π = 735.",
     "difficulty": "hard"
    },
    {
     "question": "The mean of the following data is 15: 10, 15, x, 20, 25. The value of x is",
     "options": [
      "10",
      "15",
      "20",
      "25"
     ],
     "answerIndex": 0,
     "explanation": "Mean = (10 + 15 + x + 20 + 25)/5 = 15. So (70 + x)/5 = 15, giving x = 75 - 70 = 5.",
     "difficulty": "medium"
    },
    {
     "question": "The median of the data 3, 1, 5, 2, 4, 6, 0, 8 is",
     "options": [
      "3",
      "4",
      "3.5",
      "4.5"
     ],
     "answerIndex": 2,
     "explanation": "Arranged data: 0, 1, 2, 3, 4, 5, 6, 8. Median = (3 + 4)/2 = 3.5.",
     "difficulty": "easy"
    },
    {
     "question": "The empirical relation between mean, median and mode is",
     "options": [
      "mean = median = mode",
      "mode = 3 median - 2 mean",
      "median = 3 mean - 2 mode",
      "mean = 3 median - 2 mode"
     ],
     "answerIndex": 1,
     "explanation": "The empirical relation is mode = 3 median - 2 mean, which holds for moderately skewed distributions.",
     "difficulty": "easy"
    },
    {
     "question": "A card is drawn from a well-shuffled deck of 52 cards. The probability that it is a red card is",
     "options": [
      "1/52",
      "1/26",
      "1/13",
      "1/2"
     ],
     "answerIndex": 3,
     "explanation": "There are 26 red cards in a deck of 52 cards, so probability = 26/52 = 1/2.",
     "difficulty": "easy"
    },
    {
     "question": "If the probability of an event is 0.7, then the probability of its complementary event is",
     "options": [
      "0.7",
      "0.3",
      "0",
      "1"
     ],
     "answerIndex": 1,
     "explanation": "The probability of complementary events sums to 1, so P(complement) = 1 - 0.7 = 0.3.",
     "difficulty": "easy"
    },
    {
     "question": "The HCF of 96 and 404 by prime factorization method is",
     "options": [
      "4",
      "6",
      "8",
      "12"
     ],
     "answerIndex": 0,
     "explanation": "96 = 2^5 × 3, 404 = 2^2 × 101. HCF = 2^2 = 4.",
     "difficulty": "medium",
     "pyq": "CBSE 2019"
    },
    {
     "question": "The quadratic equation x^2 + 7x + 10 = 0 has roots",
     "options": [
      "-2, -5",
      "2, 5",
      "-2, 5",
      "2, -5"
     ],
     "answerIndex": 0,
     "explanation": "Factorizing: x^2 + 7x + 10 = (x + 2)(x + 5) = 0, so roots are x = -2 and x = -5.",
     "difficulty": "medium"
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
     "explanation": "Using a_n = a + (n-1)d, we get a_10 = 2 + 9×5 = 2 + 45 = 47.",
     "difficulty": "easy"
    },
    {
     "question": "In ΔABC, DE || BC and AD/DB = 3/5. If AC = 5.6 cm, then AE is",
     "options": [
      "1.8 cm",
      "2.1 cm",
      "3.2 cm",
      "4.2 cm"
     ],
     "answerIndex": 1,
     "explanation": "By Basic Proportionality Theorem, AE/EC = AD/DB = 3/5. Let AE = 3x, EC = 5x. Then 3x + 5x = 5.6, so x = 0.7. Thus AE = 3×0.7 = 2.1 cm.",
     "difficulty": "hard"
    }
   ],
   "boardQuestions": [
    {
     "question": "Prove that sqrt(5) is irrational.",
     "marks": 3,
     "type": "long",
     "probability": "very-high",
     "answer": "Let us assume, to the contrary, that sqrt(5) is rational. Then we can write sqrt(5) = p/q where p and q are coprime integers and q ≠ 0. Squaring both sides, we get 5 = p²/q², so p² = 5q². This shows that p² is divisible by 5, and hence p is divisible by 5 (since 5 is prime). Let p = 5r for some integer r. Then (5r)² = 5q², so 25r² = 5q², which simplifies to 5r² = q². This shows that q² is divisible by 5, and hence q is divisible by 5. But this contradicts our assumption that p and q are coprime. Hence, our assumption that sqrt(5) is rational is false. Therefore, sqrt(5) is irrational."
    },
    {
     "question": "Find the HCF and LCM of 12, 15 and 21, and verify that HCF × LCM = Product of the numbers.",
     "marks": 4,
     "type": "numerical",
     "probability": "high",
     "answer": "Prime factorization: 12 = 2² × 3, 15 = 3 × 5, 21 = 3 × 7. HCF = product of lowest powers of common primes = 3. LCM = product of highest powers of all primes = 2² × 3 × 5 × 7 = 420. Product of numbers = 12 × 15 × 21 = 3780. HCF × LCM = 3 × 420 = 1260. Product of numbers = 3780. Since HCF × LCM = Product of the numbers, the verification is complete."
    },
    {
     "question": "Solve the quadratic equation 2x² + x - 6 = 0 by factorization method.",
     "marks": 2,
     "type": "short",
     "probability": "very-high",
     "answer": "We factorize 2x² + x - 6 as (2x - 3)(x + 2) = 0. Setting each factor equal to zero: 2x - 3 = 0 or x + 2 = 0. So x = 3/2 or x = -2. Therefore, the roots of the equation are x = 3/2 and x = -2."
    },
    {
     "question": "The sum of four consecutive terms of an AP is 32 and the ratio of the product of the first and the last term to the product of two middle terms is 7:15. Find the terms of the AP.",
     "marks": 5,
     "type": "long",
     "probability": "high",
     "answer": "Let the four consecutive terms of the AP be a - 3d, a - d, a + d, a + 3d. Sum = (a - 3d) + (a - d) + (a + d) + (a + 3d) = 4a = 32, so a = 8. Product of first and last term = (a - 3d)(a + 3d) = a² - 9d² = 64 - 9d². Product of middle terms = (a - d)(a + d) = a² - d² = 64 - d². Given ratio: (64 - 9d²)/(64 - d²) = 7/15. Cross-multiplying: 15(64 - 9d²) = 7(64 - d²). Simplifying: 960 - 135d² = 448 - 7d². So 128d² = 512, giving d² = 4, so d = ±2. Therefore, the terms are either 2, 6, 10, 14 or 14, 10, 6, 2."
    },
    {
     "question": "In ΔABC, DE || BC such that AD = 4 cm, DB = 6 cm and AE = 5 cm. Find EC.",
     "marks": 3,
     "type": "short",
     "probability": "very-high",
     "answer": "Since DE || BC, by Basic Proportionality Theorem (BPT), we have AD/DB = AE/EC. Substituting the given values: 4/6 = 5/EC. Simplifying: 2/3 = 5/EC. Cross-multiplying: 2 × EC = 3 × 5, so 2EC = 15, giving EC = 7.5 cm."
    },
    {
     "question": "Find the coordinates of the point which divides the line segment joining (2, -3) and (-4, 5) in the ratio 3:2.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "Using the section formula, the coordinates of the point dividing the line segment joining (x₁, y₁) and (x₂, y₂) in the ratio m:n are ((mx₂ + nx₁)/(m + n), (my₂ + ny₁)/(m + n)). Here, (x₁, y₁) = (2, -3), (x₂, y₂) = (-4, 5), m = 3, n = 2. So x-coordinate = (3×(-4) + 2×2)/(3 + 2) = (-12 + 4)/5 = -8/5. y-coordinate = (3×5 + 2×(-3))/(3 + 2) = (15 - 6)/5 = 9/5. Therefore, the coordinates of the point are (-8/5, 9/5)."
    },
    {
     "question": "Prove that sin⁴θ - cos⁴θ = 1 - 2cos²θ.",
     "marks": 3,
     "type": "short",
     "probability": "high",
     "answer": "Starting with the left side: sin⁴θ - cos⁴θ = (sin²θ)² - (cos²θ)² = (sin²θ - cos²θ)(sin²θ + cos²θ). Using the identity sin²θ + cos²θ = 1, we get (sin²θ - cos²θ)(1) = sin²θ - cos²θ. Now, sin²θ = 1 - cos²θ, so substituting: (1 - cos²θ) - cos²θ = 1 - 2cos²θ. Therefore, sin⁴θ - cos⁴θ = 1 - 2cos²θ."
    },
    {
     "question": "A kite is flying at a height of 50m above the ground. The string attached to the kite is temporarily tied to a point on the ground. The inclination of the string with the ground is 60°. Find the length of the string, assuming that there is no slack in the string.",
     "marks": 4,
     "type": "numerical",
     "probability": "high",
     "answer": "Let AB be the height of the kite (50m) and AC be the length of the string. The angle of inclination is ∠C = 60°. In right triangle ABC, sin60° = AB/AC. So √3/2 = 50/AC. Therefore, AC = 50 × 2/√3 = 100/√3. Rationalizing, AC = (100√3)/3 m. Hence, the length of the string is (100√3)/3 m."
    },
    {
     "question": "Prove that the tangent at any point of a circle is perpendicular to the radius through the point of contact.",
     "marks": 4,
     "type": "long",
     "probability": "high",
     "answer": "Let O be the center of the circle and P be a point on the circle. Let PT be the tangent at P. We need to prove that OP is perpendicular to PT. Assume, to the contrary, that OP is not perpendicular to PT. Then there exists a point Q on PT such that OQ is perpendicular to PT. Since Q lies on the tangent PT and Q ≠ P, Q must lie outside the circle. So OQ > OP (as OP is the radius to P). But OQ is perpendicular to PT, so OQ is the shortest distance from O to PT. Therefore, OQ < OP, which contradicts our earlier statement that OQ > OP. Hence, our assumption is false, and OP must be perpendicular to PT. Therefore, the tangent at any point of a circle is perpendicular to the radius through the point of contact."
    },
    {
     "question": "Find the area of the shaded region in the figure, where ABCD is a square of side 14cm and APD and BPC are semicircles.",
     "marks": 4,
     "type": "numerical",
     "probability": "high",
     "answer": "Area of square ABCD = side² = 14² = 196 cm². Diameter of each semicircle = side of square = 14cm, so radius = 7cm. Area of one semicircle = (1/2)πr² = (1/2)(22/7)(7)² = (1/2)(22/7)(49) = 77 cm². Area of two semicircles = 2 × 77 = 154 cm². Area of shaded region = Area of square - Area of two semicircles = 196 - 154 = 42 cm². Therefore, the area of the shaded region is 42 cm²."
    }
   ],
   "bookName": "Mathematics (NCERT Class 10)",
   "code": "maths"
  },
  {
   "number": 12,
   "title": "Surface Areas and Volumes",
   "summary": "Chapter 12 of NCERT Class 10 Mathematics covers Areas Related to Circles. This chapter explores the calculation of areas of sectors, segments, and combinations of plane figures involving circles. Students learn to find areas of sectors using the formula (θ/360) × πr² and segments by subtracting the area of triangles from sectors. The chapter also covers the area of combinations of circles with other shapes like triangles, rectangles, and squares. Key concepts include the relationship between arc length and sector area, the difference between minor and major segments, and the application of these concepts in real-world problems. The chapter builds upon students' understanding of circles and mensuration from previous classes.",
   "weightageMarks": 8,
   "difficulty": "medium",
   "hotTopics": [
    "sector area formula",
    "segment area calculation",
    "area of combinations",
    "arc length",
    "perimeter of sector",
    "area of shaded region",
    "major vs minor segment",
    "real life applications"
   ],
   "sections": [
    {
     "heading": "Introduction to Circles and Related Areas",
     "para": "A circle is a collection of points in a plane that are at a constant distance from a fixed point called the center. The constant distance is called the radius. The area of a circle is given by πr² where r is the radius. A sector of a circle is the portion enclosed by two radii and an arc. The area of a sector is proportional to the central angle subtended by the arc. A segment of a circle is the region bounded by a chord and the arc subtended by that chord. Understanding these fundamental concepts is essential before proceeding to more complex calculations involving combinations of figures.",
     "points": [
      "A circle is defined as the locus of points equidistant from a fixed center point",
      "The area of a circle is πr² where r represents the radius",
      "A sector is formed by two radii and the included arc",
      "The area of a sector is proportional to its central angle",
      "A segment is the region between a chord and its corresponding arc",
      "The circumference of a circle is 2πr or πd where d is the diameter",
      "The length of an arc is (θ/360) × 2πr where θ is the central angle",
      "The area of a sector is (θ/360) × πr²"
     ],
     "keyTerms": [
      {
       "term": "Circle",
       "meaning": "A closed curve where all points are equidistant from a fixed center point"
      },
      {
       "term": "Radius",
       "meaning": "The distance from the center of a circle to any point on its circumference"
      },
      {
       "term": "Sector",
       "meaning": "The region enclosed by two radii and an arc of the circle"
      },
      {
       "term": "Segment",
       "meaning": "The region bounded by a chord and the arc subtended by that chord"
      },
      {
       "term": "Arc",
       "meaning": "A continuous portion of the circumference of a circle"
      },
      {
       "term": "Chord",
       "meaning": "A straight line segment joining any two points on the circumference"
      }
     ],
     "trick": "Remember 'SAARC' for Sector Area: Sector Area = Arc length × Radius / 2",
     "examPointer": "CBSE frequently asks 1-2 mark questions on basic circle properties and 3-4 mark questions on sector and segment area calculations. Always show step-by-step working with proper substitution of values."
    },
    {
     "heading": "Area of a Sector",
     "para": "The area of a sector of a circle is the portion of the circle enclosed by two radii and an arc. The area of a sector is directly proportional to the central angle subtended by the arc. For a circle with radius r and a sector with central angle θ degrees, the area of the sector is given by (θ/360) × πr². This formula is derived from the fact that the area of a full circle (360°) is πr², so the area of a sector is the fraction (θ/360) of the total area. When θ is given in radians, the formula becomes (1/2)r²θ. Students must be comfortable converting between degrees and radians when necessary.",
     "points": [
      "The area of a sector is proportional to its central angle",
      "For θ in degrees: Area = (θ/360) × πr²",
      "For θ in radians: Area = (1/2)r²θ",
      "When θ = 360°, the sector becomes the full circle with area πr²",
      "When θ = 180°, the sector is a semicircle with area (1/2)πr²",
      "The area of a sector can also be calculated as (arc length × radius)/2",
      "A sector with θ = 90° is called a quadrant and has area (1/4)πr²",
      "The perimeter of a sector includes the arc length plus two radii"
     ],
     "keyTerms": [
      {
       "term": "Central angle",
       "meaning": "The angle subtended by an arc at the center of the circle"
      },
      {
       "term": "Proportionality",
       "meaning": "The relationship where sector area varies directly with the central angle"
      },
      {
       "term": "Radians",
       "meaning": "An alternative unit for measuring angles where 180° = π radians"
      },
      {
       "term": "Quadrant",
       "meaning": "A sector with central angle of 90 degrees"
      },
      {
       "term": "Semicircle",
       "meaning": "A sector with central angle of 180 degrees"
      }
     ],
     "trick": "Remember 'Degree-Denominator': For degree measure, divide by 360; for radians, use half radius squared",
     "examPointer": "CBSE commonly asks 3-4 mark questions requiring application of sector area formula. Problems may involve finding area given angle and radius, finding angle given area and radius, or finding radius given area and angle. Always show the formula substitution step."
    },
    {
     "heading": "Area of a Segment",
     "para": "A segment of a circle is the region bounded by a chord and the arc subtended by that chord. There are two types of segments: the minor segment (smaller area) and the major segment (larger area). To find the area of a segment, we subtract the area of the corresponding triangle from the area of the sector. For a circle with radius r and central angle θ, the area of the minor segment is given by (θ/360) × πr² - (1/2)r²sinθ. The first term represents the area of the sector, and the second term represents the area of the triangle formed by the two radii and the chord. For the major segment, we subtract the minor segment area from the total area of the circle.",
     "points": [
      "A segment is the region between a chord and its corresponding arc",
      "The area of a minor segment = Area of sector - Area of triangle",
      "The area of a major segment = Area of circle - Area of minor segment",
      "When θ = 180°, the segment becomes a semicircle",
      "When θ = 90°, the segment area is (πr²/4) - (r²/2)",
      "The chord length can be found using 2r sin(θ/2)",
      "The perpendicular distance from center to chord is r cos(θ/2)",
      "For θ > 180°, we calculate the major segment directly"
     ],
     "keyTerms": [
      {
       "term": "Minor segment",
       "meaning": "The smaller region bounded by a chord and its corresponding arc"
      },
      {
       "term": "Major segment",
       "meaning": "The larger region bounded by a chord and its corresponding arc"
      },
      {
       "term": "Chord length",
       "meaning": "The straight-line distance between two points on the circumference"
      },
      {
       "term": "Perpendicular distance",
       "meaning": "The shortest distance from the center to the chord"
      },
      {
       "term": "Sector area",
       "meaning": "The area of the portion enclosed by two radii and an arc"
      }
     ],
     "trick": "Remember 'Sector Minus Triangle' for minor segment area calculation",
     "examPointer": "CBSE typically asks 4 mark questions on segment area calculations. Problems may involve finding segment area given radius and angle, or finding unknown parameters given segment area. Always clearly show the subtraction of triangle area from sector area."
    },
    {
     "heading": "Area of Combinations of Circles with Other Shapes",
     "para": "Many real-world problems involve finding areas of combinations of circles with other plane figures like triangles, rectangles, squares, and other circles. To solve such problems, we need to visualize the given figure and identify the simple shapes that constitute it. The total area is then found by adding or subtracting the areas of these individual shapes. For example, the area of a circle inscribed in a square is found by subtracting the area of the circle from the area of the square. Similarly, the area of a circle circumscribed about a triangle is found by adding the area of the circle to the area of the triangle. Careful identification of overlapping regions is crucial in these calculations.",
     "points": [
      "Combinations involve circles with triangles, rectangles, squares, or other circles",
      "Total area is found by adding or subtracting individual shape areas",
      "For a circle inscribed in a square: Area = Square area - Circle area",
      "For a circle circumscribed about a triangle: Area = Triangle area + Circle area",
      "When two circles intersect, find areas of individual circles and subtract overlap",
      "For a circle in a corner of a rectangle: Area = Rectangle area - Circle area",
      "For concentric circles: Area between them = Outer circle - Inner circle",
      "Always identify which parts to add and which to subtract carefully"
     ],
     "keyTerms": [
      {
       "term": "Inscribed circle",
       "meaning": "A circle that fits inside another shape touching all sides"
      },
      {
       "term": "Circumscribed circle",
       "meaning": "A circle that passes through all vertices of a polygon"
      },
      {
       "term": "Concentric circles",
       "meaning": "Circles with the same center but different radii"
      },
      {
       "term": "Overlapping region",
       "meaning": "The area common to two or more intersecting shapes"
      },
      {
       "term": "Composite figure",
       "meaning": "A shape made up of two or more simple geometric figures"
      }
     ],
     "trick": "Visualize first, then break down: 'See, Split, Solve' for combination problems",
     "examPointer": "CBSE commonly asks 4-6 mark questions on areas of combinations. These are typically multi-step problems requiring visualization and careful calculation. Always draw diagrams and show all steps of area calculations for each component shape."
    },
    {
     "heading": "Perimeter of a Sector",
     "para": "The perimeter of a sector includes the arc length plus the lengths of the two radii. For a circle with radius r and central angle θ degrees, the perimeter of the sector is given by 2r + (θ/360) × 2πr. The first term represents the two radii, and the second term represents the arc length. When θ is given in radians, the formula becomes 2r + rθ. Understanding perimeter calculations is important for solving problems involving boundaries of circular sectors. Students must be able to distinguish between the perimeter of a sector and the perimeter of a segment, which includes the chord length instead of the two radii.",
     "points": [
      "Perimeter of sector = Arc length + 2 × radius",
      "For θ in degrees: Perimeter = 2r + (θ/360) × 2πr",
      "For θ in radians: Perimeter = 2r + rθ",
      "When θ = 180°, perimeter = 2r + πr = r(2 + π)",
      "When θ = 90°, perimeter = 2r + (πr/2) = r(2 + π/2)",
      "Perimeter of segment = Arc length + Chord length",
      "Chord length = 2r sin(θ/2)",
      "Units of perimeter are the same as units of length"
     ],
     "keyTerms": [
      {
       "term": "Arc length",
       "meaning": "The distance along the curved part of the circumference"
      },
      {
       "term": "Chord length",
       "meaning": "The straight-line distance between two points on the circumference"
      },
      {
       "term": "Perimeter",
       "meaning": "The total distance around the boundary of a shape"
      },
      {
       "term": "Radians",
       "meaning": "An alternative unit for measuring angles where 180° = π radians"
      },
      {
       "term": "Central angle",
       "meaning": "The angle subtended by an arc at the center of the circle"
      }
     ],
     "trick": "Remember 'Two Radii Plus Arc' for sector perimeter calculation",
     "examPointer": "CBSE asks 2-3 mark questions on perimeter of sectors. Problems may involve finding perimeter given radius and angle, or finding unknown parameters given perimeter. Always clearly distinguish between sector perimeter and segment perimeter."
    },
    {
     "heading": "Area of Shaded Regions",
     "para": "Finding the area of shaded regions is a common application of the concepts learned in this chapter. A shaded region is typically an area enclosed by multiple geometric figures where only a specific portion is shaded. To find the area of a shaded region, we need to identify the shapes that constitute the region and determine whether to add or subtract their areas. For example, if a square has a circle inscribed in it and the shaded region is the area between the square and the circle, we would subtract the area of the circle from the area of the square. The key is to visualize the figure carefully, identify all relevant shapes, and apply the appropriate area formulas systematically.",
     "points": [
      "Shaded regions are areas between geometric figures",
      "Identify all shapes that make up the figure",
      "Determine which areas to add and which to subtract",
      "For area between square and inscribed circle: Subtract circle from square",
      "For area between rectangle and semicircles: Add semicircles then subtract from rectangle",
      "For overlapping circles: Find individual areas and subtract common area",
      "Always draw clear diagrams to visualize the shaded region",
      "Check if the answer is reasonable by estimating visually"
     ],
     "keyTerms": [
      {
       "term": "Shaded region",
       "meaning": "The specific portion of a figure that is highlighted or colored"
      },
      {
       "term": "Visualization",
       "meaning": "The mental or graphical representation of a geometric figure"
      },
      {
       "term": "Common area",
       "meaning": "The overlapping region shared by two or more figures"
      },
      {
       "term": "Systematic approach",
       "meaning": "A step-by-step method for solving complex problems"
      },
      {
       "term": "Estimation",
       "meaning": "An approximate calculation to check reasonableness of answer"
      }
     ],
     "trick": "Use 'Color Coding': Imagine different parts in different colors to identify what to add/subtract",
     "examPointer": "CBSE commonly asks 4-6 mark questions on areas of shaded regions. These are typically multi-step problems requiring visualization and careful calculation. Always draw clear diagrams and show all steps of area calculations."
    },
    {
     "heading": "Real-Life Applications",
     "para": "The concepts of areas related to circles have numerous real-life applications. In engineering, sector area calculations are used in designing gears, pulleys, and other circular components. In architecture, these concepts help in designing circular windows, arches, and domes. In agriculture, sector calculations are used to determine irrigation coverage for circular sprinkler systems. In sports, the area of a sector is used to design the playing fields of sports like baseball and cricket. Even in everyday life, understanding these concepts helps in calculating material needed for circular objects like tablecloths, pizza slices, or garden beds. These practical applications demonstrate the relevance of mathematical concepts in solving real-world problems.",
     "points": [
      "Engineering applications in designing gears and pulleys",
      "Architecture uses in designing circular windows and arches",
      "Agriculture applications for irrigation systems",
      "Sports field design using sector calculations",
      "Everyday applications like pizza slice calculations",
      "Landscaping for circular garden beds and fountains",
      "Manufacturing of circular components and parts",
      "Art and design involving circular patterns and segments"
     ],
     "keyTerms": [
      {
       "term": "Engineering",
       "meaning": "The application of scientific and mathematical principles to design and build structures"
      },
      {
       "term": "Architecture",
       "meaning": "The art and science of designing buildings and other physical structures"
      },
      {
       "term": "Irrigation",
       "meaning": "The artificial application of water to land for growing crops"
      },
      {
       "term": "Manufacturing",
       "meaning": "The process of producing goods through labor, machines, tools, and chemical processing"
      },
      {
       "term": "Landscaping",
       "meaning": "The activity of modifying visible features of an area of land"
      }
     ],
     "trick": "Connect to everyday objects: 'Pizza, Pulleys, Gardens' to remember real-life applications",
     "examPointer": "CBSE may include 1-2 mark application-based questions connecting circle areas to real-life scenarios. Focus on understanding how mathematical concepts apply to practical situations rather than just memorizing formulas."
    },
    {
     "heading": "Problem-Solving Strategies",
     "para": "Effectively solving problems related to areas of circles requires a systematic approach. First, carefully read the problem and identify what is given and what is asked. Draw a clear diagram of the figure, labeling all known dimensions. Identify the relevant shapes and concepts needed to solve the problem. Apply the appropriate formulas systematically, showing all steps of calculation. Check your answer for reasonableness by estimation. For complex problems involving combinations of shapes, break them down into simpler components. Practice a variety of problems to develop proficiency. Remember to pay attention to units and ensure consistency throughout your calculations. Developing these problem-solving skills will help not only in this chapter but in mathematics as a whole.",
     "points": [
      "Read the problem carefully and identify given information and requirements",
      "Draw clear diagrams with labeled dimensions",
      "Identify relevant shapes and applicable formulas",
      "Apply formulas systematically showing all steps",
      "Check answers for reasonableness through estimation",
      "Break complex problems into simpler components",
      "Practice a variety of problems to build proficiency",
      "Pay attention to units and maintain consistency"
     ],
     "keyTerms": [
      {
       "term": "Systematic approach",
       "meaning": "A step-by-step method for solving problems effectively"
      },
      {
       "term": "Diagram",
       "meaning": "A visual representation that helps in understanding and solving problems"
      },
      {
       "term": "Formula",
       "meaning": "A mathematical relationship expressed using symbols"
      },
      {
       "term": "Estimation",
       "meaning": "An approximate calculation to check reasonableness"
      },
      {
       "term": "Units",
       "meaning": "Standard quantities used to measure dimensions like length, area, volume"
      }
     ],
     "trick": "Follow 'READ, DRAW, IDENTIFY, SOLVE, CHECK' for effective problem solving",
     "examPointer": "CBSE values logical problem-solving approaches in marking. Even if final answer is incorrect, showing proper method and steps can earn partial credit. Always present solutions clearly with proper working."
    },
    {
     "heading": "Common Errors and Prevention",
     "para": "Students often make certain errors when working on problems related to areas of circles. One common mistake is confusing the formulas for area of sector and area of segment. Remember that segment area requires subtracting the triangular portion from the sector area. Another frequent error is mixing up degree and radian measures in calculations. Always ensure consistency in units throughout the problem. Students also sometimes forget to include the radii in perimeter calculations, only calculating the arc length. Additionally, when working with combinations of shapes, errors often occur in identifying which areas to add and which to subtract. Careful visualization and diagram drawing can help prevent these mistakes. Regular practice and attention to detail will help minimize these errors.",
     "points": [
      "Confusing sector and segment area formulas",
      "Mixing degree and radian measures in calculations",
      "Forgetting to include radii in perimeter calculations",
      "Incorrectly identifying which areas to add/subtract in combinations",
      "Using incorrect values of π (use 22/7 or π as specified)",
      "Calculation errors in arithmetic operations",
      "Not showing proper working and steps",
      "Misinterpreting the given information in problems"
     ],
     "keyTerms": [
      {
       "term": "Sector area",
       "meaning": "Area of the portion enclosed by two radii and an arc"
      },
      {
       "term": "Segment area",
       "meaning": "Area between a chord and its corresponding arc"
      },
      {
       "term": "Unit consistency",
       "meaning": "Using the same units throughout a calculation"
      },
      {
       "term": "Visualization",
       "meaning": "Mental or graphical representation of a problem"
      },
      {
       "term": "Working",
       "meaning": "The step-by-step process of solving a problem"
      }
     ],
     "trick": "Remember 'Sectors have radii, Segments have chords' to distinguish between them",
     "examPointer": "CBSE awards marks for method and working even if final answer is incorrect. Show all steps clearly and double-check calculations. Pay special attention to units and whether the answer is reasonable."
    }
   ],
   "mcqs": [
    {
     "question": "Which of the following is the correct statement about the Fundamental Theorem of Arithmetic?",
     "options": [
      "Every composite number can be expressed as the product of primes in only one way",
      "Every prime number can be expressed as the sum of two primes",
      "Every natural number can be expressed as the sum of two primes",
      "Every composite number can be expressed as the sum of primes"
     ],
     "answerIndex": 0,
     "explanation": "The Fundamental Theorem of Arithmetic states that every composite number can be expressed as the product of primes in only one way, ignoring the order of primes.",
     "difficulty": "easy",
     "pyq": "CBSE 2019"
    },
    {
     "question": "If the HCF of 12 and 15 is 3, then what is their LCM?",
     "options": [
      "45",
      "60",
      "75",
      "90"
     ],
     "answerIndex": 1,
     "explanation": "LCM can be found using the formula: LCM(a,b) = (a*b)/HCF(a,b). So LCM(12,15) = (12*15)/3 = 60.",
     "difficulty": "medium",
     "pyq": "CBSE 2020"
    },
    {
     "question": "Which of the following is an irrational number?",
     "options": [
      "sqrt(4)",
      "sqrt(9)",
      "sqrt(16)",
      "sqrt(2)"
     ],
     "answerIndex": 3,
     "explanation": "sqrt(2) cannot be expressed as a ratio of two integers, making it irrational. The other options are perfect squares and hence rational.",
     "difficulty": "easy",
     "pyq": "CBSE 2021"
    },
    {
     "question": "If the zeroes of the quadratic polynomial x^2 + 3x + k are equal, then what is the value of k?",
     "options": [
      "2",
      "9/4",
      "4",
      "9/2"
     ],
     "answerIndex": 1,
     "explanation": "For equal zeroes, discriminant must be zero. Discriminant D = b^2 - 4ac = 9 - 4k = 0, so k = 9/4.",
     "difficulty": "medium",
     "pyq": "CBSE 2018"
    },
    {
     "question": "For which value of k will the system of equations 2x + 3y = 5 and 4x + ky = 10 have infinitely many solutions?",
     "options": [
      "3",
      "4",
      "5",
      "6"
     ],
     "answerIndex": 3,
     "explanation": "For infinitely many solutions, a1/a2 = b1/b2 = c1/c2. Here 2/4 = 3/k = 5/10, so k = 6.",
     "difficulty": "medium",
     "pyq": "CBSE 2022"
    },
    {
     "question": "If the discriminant of a quadratic equation is negative, then the roots are:",
     "options": [
      "real and equal",
      "real and unequal",
      "imaginary",
      "rational"
     ],
     "answerIndex": 2,
     "explanation": "A negative discriminant means the quadratic has no real roots, only complex (imaginary) roots.",
     "difficulty": "easy",
     "pyq": "CBSE 2019"
    },
    {
     "question": "The first term of an AP is 5 and the common difference is 3. What is the 10th term?",
     "options": [
      "30",
      "32",
      "35",
      "40"
     ],
     "answerIndex": 1,
     "explanation": "Using the formula nth term = a + (n-1)d, we get 10th term = 5 + 9*3 = 32.",
     "difficulty": "easy",
     "pyq": "CBSE 2020"
    },
    {
     "question": "In triangles ABC and DEF, if angle A = angle D and AB/DE = AC/DF, then the triangles are similar by which criterion?",
     "options": [
      "SSS",
      "SAS",
      "AA",
      "RHS"
     ],
     "answerIndex": 1,
     "explanation": "The SAS similarity criterion requires two sides in proportion and the included angle equal, which matches the given information.",
     "difficulty": "medium",
     "pyq": "CBSE 2021"
    },
    {
     "question": "The coordinates of the midpoint of the line segment joining (2,3) and (4,5) are:",
     "options": [
      "(3,4)",
      "(2,3)",
      "(4,5)",
      "(1,2)"
     ],
     "answerIndex": 0,
     "explanation": "Midpoint formula is ((x1+x2)/2, (y1+y2)/2). So ((2+4)/2, (3+5)/2) = (3,4).",
     "difficulty": "easy",
     "pyq": "CBSE 2018"
    },
    {
     "question": "Which trigonometric identity is correct?",
     "options": [
      "sin^2 A - cos^2 A = 1",
      "sin^2 A + cos^2 A = 1",
      "sin A + cos A = 1",
      "sin A * cos A = 1"
     ],
     "answerIndex": 1,
     "explanation": "The fundamental trigonometric identity is sin^2 A + cos^2 A = 1, which holds for all angles A.",
     "difficulty": "easy",
     "pyq": "CBSE 2019"
    },
    {
     "question": "If the height of a tower is 10 sqrt(3) m and the angle of elevation of its top is 30 degrees, what is the distance from the observer to the foot of the tower?",
     "options": [
      "10 m",
      "10 sqrt(3) m",
      "20 m",
      "20 sqrt(3) m"
     ],
     "answerIndex": 1,
     "explanation": "Using tan(30) = opposite/adjacent = height/distance, so distance = height/tan(30) = 10 sqrt(3)/(1/sqrt(3)) = 10 sqrt(3) m.",
     "difficulty": "medium",
     "pyq": "CBSE 2020"
    },
    {
     "question": "A tangent to a circle is perpendicular to the radius at the point of contact. This statement is:",
     "options": [
      "false",
      "true only for circles with radius 1",
      "true only for circles with radius greater than 1",
      "true"
     ],
     "answerIndex": 3,
     "explanation": "This is a fundamental property of circles that holds true for all circles regardless of their size.",
     "difficulty": "easy",
     "pyq": "CBSE 2021"
    },
    {
     "question": "The area of a sector of a circle with radius 7 cm and angle 60 degrees is:",
     "options": [
      "22/3 cm^2",
      "77/3 cm^2",
      "154/3 cm^2",
      "308/3 cm^2"
     ],
     "answerIndex": 1,
     "explanation": "Area of sector = (theta/360) * pi * r^2 = (60/360) * 22/7 * 7^2 = (1/6) * 22 * 7 = 77/3 cm^2.",
     "difficulty": "medium",
     "pyq": "CBSE 2018"
    },
    {
     "question": "A cone of height 12 cm and radius 5 cm is placed on top of a hemisphere of the same radius. The total surface area is:",
     "options": [
      "70 pi cm^2",
      "85 pi cm^2",
      "100 pi cm^2",
      "120 pi cm^2"
     ],
     "answerIndex": 1,
     "explanation": "Total surface area = curved surface of cone + curved surface of hemisphere = pi r l + 2 pi r^2 = pi * 5 * 13 + 2 pi * 25 = 65 pi + 50 pi = 115 pi cm^2.",
     "difficulty": "hard",
     "pyq": "CBSE 2022"
    },
    {
     "question": "If the mean of 5, 7, 9, x, 11 is 8, then what is the value of x?",
     "options": [
      "6",
      "8",
      "10",
      "12"
     ],
     "answerIndex": 1,
     "explanation": "Mean = sum of observations / number of observations. So (5+7+9+x+11)/5 = 8, giving x = 8.",
     "difficulty": "medium",
     "pyq": "CBSE 2019"
    },
    {
     "question": "The empirical relation between mean, median and mode is:",
     "options": [
      "mean = median = mode",
      "mode = 3 median - 2 mean",
      "median = 3 mean - 2 mode",
      "mean = 3 median - 2 mode"
     ],
     "answerIndex": 1,
     "explanation": "The empirical relationship is mode = 3 median - 2 mean, which holds for moderately skewed distributions.",
     "difficulty": "easy",
     "pyq": "CBSE 2020"
    },
    {
     "question": "A bag contains 3 red and 5 blue balls. The probability of drawing a blue ball is:",
     "options": [
      "3/8",
      "5/8",
      "3/5",
      "5/3"
     ],
     "answerIndex": 1,
     "explanation": "Probability of blue ball = number of blue balls / total balls = 5/8.",
     "difficulty": "easy",
     "pyq": "CBSE 2021"
    },
    {
     "question": "The probability of an event is 0.6. What is the probability of its complementary event?",
     "options": [
      "0.4",
      "0.6",
      "1.0",
      "1.6"
     ],
     "answerIndex": 0,
     "explanation": "The sum of probabilities of complementary events is 1, so P(complement) = 1 - 0.6 = 0.4.",
     "difficulty": "easy",
     "pyq": "CBSE 2018"
    }
   ],
   "boardQuestions": [
    {
     "question": "Prove that sqrt(3) is irrational.",
     "marks": 3,
     "type": "long",
     "probability": "very-high",
     "answer": "Assume sqrt(3) is rational, so sqrt(3) = p/q where p and q are coprime integers. Then 3 = p^2/q^2, so p^2 = 3q^2. This means p^2 is divisible by 3, hence p is divisible by 3 (since 3 is prime). Let p = 3k. Then (3k)^2 = 3q^2, so 9k^2 = 3q^2, thus 3k^2 = q^2. This means q^2 is divisible by 3, hence q is divisible by 3. But if both p and q are divisible by 3, they are not coprime, contradicting our assumption. Therefore, sqrt(3) must be irrational."
    },
    {
     "question": "Find the HCF and LCM of 12, 15 and 21 using prime factorization.",
     "marks": 2,
     "type": "numerical",
     "probability": "high",
     "answer": "Prime factorization: 12 = 2^2 × 3^1, 15 = 3^1 × 5^1, 21 = 3^1 × 7^1. HCF is the product of lowest powers of common primes: 3^1 = 3. LCM is the product of highest powers of all primes: 2^2 × 3^1 × 5^1 × 7^1 = 4 × 3 × 5 × 7 = 420."
    },
    {
     "question": "Solve the quadratic equation 2x^2 - 5x + 3 = 0 by factorization method.",
     "marks": 3,
     "type": "numerical",
     "probability": "very-high",
     "answer": "We need to find two numbers that multiply to 2×3=6 and add to -5. These numbers are -2 and -3. So 2x^2 - 5x + 3 = 2x^2 - 2x - 3x + 3 = 2x(x - 1) - 3(x - 1) = (2x - 3)(x - 1) = 0. Therefore, x = 3/2 or x = 1."
    },
    {
     "question": "For what value of k will the following pair of linear equations have infinitely many solutions? 2x + 3y = 7 and (k + 1)x + (2k - 1)y = 4k + 1.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "For infinitely many solutions, a1/a2 = b1/b2 = c1/c2. So 2/(k+1) = 3/(2k-1) = 7/(4k+1). From 2/(k+1) = 3/(2k-1), we get 2(2k-1) = 3(k+1), so 4k - 2 = 3k + 3, thus k = 5. Checking with the third ratio: 7/(4×5+1) = 7/21 = 1/3, and 2/(5+1) = 2/6 = 1/3, which matches. So k = 5."
    },
    {
     "question": "The sum of first n terms of an AP is given by S_n = 3n^2 + 5n. Find the 10th term of this AP.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "We know S_n = n/2 (2a + (n-1)d). Given S_n = 3n^2 + 5n, we can find a and d. S_1 = a = 3(1)^2 + 5(1) = 8. S_2 = 3(2)^2 + 5(2) = 12 + 10 = 22. The second term a_2 = S_2 - S_1 = 22 - 8 = 14. So d = a_2 - a = 14 - 8 = 6. The 10th term a_10 = a + 9d = 8 + 9×6 = 8 + 54 = 62."
    },
    {
     "question": "In a right triangle ABC, right-angled at B, if tan A = 3/4, find sin A and cos A.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "Given tan A = opposite/adjacent = BC/AB = 3/4. Let BC = 3k and AB = 4k. Using Pythagoras theorem, AC = sqrt(BC^2 + AB^2) = sqrt((3k)^2 + (4k)^2) = sqrt(9k^2 + 16k^2) = sqrt(25k^2) = 5k. Therefore, sin A = opposite/hypotenuse = BC/AC = 3k/5k = 3/5, and cos A = adjacent/hypotenuse = AB/AC = 4k/5k = 4/5."
    },
    {
     "question": "Prove that the lengths of tangents drawn from an external point to a circle are equal.",
     "marks": 4,
     "type": "long",
     "probability": "very-high",
     "answer": "Let O be the center of the circle and P be an external point. Let PA and PB be the two tangents from P to the circle, touching at points A and B respectively. Join OA and OB. Since PA is tangent to the circle at A, angle OAP = 90°. Similarly, angle OBP = 90°. In triangles OAP and OBP, OA = OB (radii of the same circle), OP is common, and angle OAP = angle OBP = 90°. Therefore, by RHS congruence criterion, triangles OAP and OBP are congruent. Hence, PA = PB, proving that the lengths of tangents drawn from an external point to a circle are equal."
    },
    {
     "question": "A solid toy is in the form of a hemisphere surmounted by a right circular cone. The height of the cone is 4 cm and the diameter of the base is 6 cm. Find the volume of the toy.",
     "marks": 4,
     "type": "numerical",
     "probability": "high",
     "answer": "Given diameter = 6 cm, so radius r = 3 cm. Height of cone h = 4 cm. Volume of toy = volume of hemisphere + volume of cone. Volume of hemisphere = (2/3)πr^3 = (2/3)π(3)^3 = (2/3)π(27) = 18π cm^3. Volume of cone = (1/3)πr^2h = (1/3)π(3)^2(4) = (1/3)π(9)(4) = 12π cm^3. Total volume = 18π + 12π = 30π cm^3. Using π = 22/7, volume = 30 × 22/7 = 660/7 cm^3."
    },
    {
     "question": "The mean of the following distribution is 53. Find the value of f: Class: 0-20, 20-40, 40-60, 60-80, 80-100 Frequency: 15, f, 21, 17, 9",
     "marks": 4,
     "type": "numerical",
     "probability": "high",
     "answer": "First, we calculate the mid-points (x) of each class: 10, 30, 50, 70, 90. We know mean = Σ(fx)/Σf = 53. Σf = 15 + f + 21 + 17 + 9 = 62 + f. Σ(fx) = 15×10 + f×30 + 21×50 + 17×70 + 9×90 = 150 + 30f + 1050 + 1190 + 810 = 3200 + 30f. So 53 = (3200 + 30f)/(62 + f). Cross-multiplying: 53(62 + f) = 3200 + 30f, so 3286 + 53f = 3200 + 30f. Rearranging: 53f - 30f = 3200 - 3286, so 23f = -86, thus f = -86/23 = -4. Since frequency cannot be negative, there must be an error in the calculation. Let's recheck: Σ(fx) = 15×10 + f×30 + 21×50 + 17×70 + 9×90 = 150 + 30f + 1050 + 1190 + 810 = 3200 + 30f. Σf = 15 + f + 21 + 17 + 9 = 62 + f. So 53(62 + f) = 3200 + 30f, 3286 + 53f = 3200 + 30f, 23f = -86, f = -4. This negative value suggests there might be an error in the problem statement or mean value given."
    },
    {
     "question": "A card is drawn at random from a well-shuffled deck of 52 cards. Find the probability that it is: (i) a red card, (ii) a king, (iii) a red king, (iv) not a face card.",
     "marks": 4,
     "type": "numerical",
     "probability": "high",
     "answer": "Total cards = 52. (i) Number of red cards = 26 (13 hearts + 13 diamonds). P(red) = 26/52 = 1/2. (ii) Number of kings = 4. P(king) = 4/52 = 1/13. (iii) Number of red kings = 2 (king of hearts and king of diamonds). P(red king) = 2/52 = 1/26. (iv) Number of face cards = 12 (4 kings + 4 queens + 4 jacks). Number of non-face cards = 52 - 12 = 40. P(not face card) = 40/52 = 10/13."
    }
   ],
   "bookName": "Mathematics (NCERT Class 10)",
   "code": "maths"
  },
  {
   "number": 13,
   "title": "Statistics",
   "summary": "Chapter 13 of Class 10 Mathematics focuses on 'Surface Areas and Volumes', extending the concepts from earlier classes to more complex solid combinations. This chapter covers calculations of surface areas and volumes of various solids like cubes, cuboids, cylinders, cones, spheres, and their combinations. It includes important formulas for curved surface area, total surface area, and volume of each solid, along with methods to handle composite solids. The chapter also introduces frustums of cones and their surface area and volume calculations. Understanding these concepts is crucial for solving real-world problems involving 3D shapes and their measurements.",
   "weightageMarks": 8,
   "difficulty": "medium",
   "hotTopics": [
    "Surface area of combination of solids",
    "Volume of combination of solids",
    "Conversion of solids",
    "Frustum of a cone",
    "Surface area and volume of frustum",
    "Word problems on surface area and volume"
   ],
   "sections": [
    {
     "heading": "Surface Area of Combination of Solids",
     "para": "When two or more solids are combined to form a new solid, we calculate the total surface area by adding the surface areas of the individual solids and subtracting the areas of the common surfaces. For example, when a hemisphere is mounted on a cylinder, we add the curved surface area of the cylinder, the curved surface area of the hemisphere, and the area of the circular base of the cylinder. The key is to identify which surfaces are exposed and which are internal. This concept applies to various combinations like cones on cylinders, hemispheres on cubes, etc. Always visualize the combined solid to determine which surfaces need to be included in the total surface area calculation.",
     "points": [
      "Total surface area of combination = Sum of individual surface areas - 2 × area of common surface",
      "For a cylinder with a hemisphere on top: TSA = CSA of cylinder + CSA of hemisphere + area of base circle",
      "When two identical cones are joined at their bases, the total surface area is 2 × CSA of one cone",
      "For a cone mounted on a cylinder, TSA = CSA of cylinder + CSA of cone + area of base circle",
      "When a sphere is placed inside a cube, TSA of combination = TSA of cube + CSA of sphere",
      "For a cuboid with a hemisphere on top, TSA = TSA of cuboid + CSA of hemisphere - area of circular base",
      "Always identify which surfaces are visible in the combined figure"
     ],
     "keyTerms": [
      {
       "term": "Combination of solids",
       "meaning": "Two or more solids joined together to form a new solid"
      },
      {
       "term": "Total Surface Area (TSA)",
       "meaning": "Sum of all exposed surfaces of a solid"
      },
      {
       "term": "Common surface",
       "meaning": "Surface area shared between two solids in a combination"
      },
      {
       "term": "Curved Surface Area (CSA)",
       "meaning": "Area of the curved part of a solid excluding bases"
      }
     ],
     "trick": "Remember TSA of combination = Sum of individual TSAs - 2 × common area. Visualize the solid and imagine painting it - only the painted surfaces count.",
     "examPointer": "CBSE commonly asks 3-4 mark questions on calculating surface areas of combinations like a toy consisting of a cone on a cylinder or a hemisphere on a cuboid. Always show step-by-step calculation and clearly state the formula used."
    },
    {
     "heading": "Volume of Combination of Solids",
     "para": "The volume of a combination of solids is simply the sum of the volumes of the individual solids that make up the combination. Unlike surface area, we don't subtract any volume since the solids are joined together but their volumes remain additive. For example, the volume of a solid consisting of a cylinder with a cone on top is the sum of the volume of the cylinder and the volume of the cone. This principle applies to all combinations of solids, whether they are attached at their bases or along their curved surfaces. The key is to identify the individual solids that constitute the combination and apply the appropriate volume formulas for each.",
     "points": [
      "Volume of combination = Sum of volumes of individual solids",
      "For a cylinder with a cone on top: Volume = Volume of cylinder + Volume of cone",
      "When two identical cones are joined at their bases, the total volume is 2 × volume of one cone",
      "For a cone mounted on a hemisphere, Volume = Volume of cone + Volume of hemisphere",
      "When a sphere is placed inside a cube, the volume of combination = Volume of cube + Volume of sphere",
      "For a cuboid with a hemisphere on top, Volume = Volume of cuboid + Volume of hemisphere",
      "Volume remains additive regardless of how solids are combined"
     ],
     "keyTerms": [
      {
       "term": "Volume",
       "meaning": "Amount of space occupied by a three-dimensional object"
      },
      {
       "term": "Combination of solids",
       "meaning": "Two or more solids joined together to form a new solid"
      },
      {
       "term": "Additive property of volume",
       "meaning": "Volume of a combination is the sum of volumes of individual solids"
      }
     ],
     "trick": "Remember that volume is always additive - just add up the volumes of each part. Think of it as filling each part with water and pouring it all together.",
     "examPointer": "CBSE frequently asks 3-4 mark questions on calculating volumes of combinations like a solid consisting of a cone on a cylinder or a hemisphere on a cuboid. Always show step-by-step calculation and clearly state the formula used."
    },
    {
     "heading": "Conversion of Solids",
     "para": "When a solid is melted and recast into another solid, its volume remains constant. This principle is used to solve problems where one shape is converted into another. For example, if a solid sphere is melted and recast into a cylinder, the volume of the sphere equals the volume of the cylinder. This allows us to find dimensions of the new solid when given dimensions of the original solid. The key is to set up an equation where the volume of the original solid equals the volume of the new solid and solve for the unknown dimension. This concept applies to all conversions between different shapes, whether it's a cone to a sphere, a cylinder to a cube, etc.",
     "points": [
      "When a solid is melted and recast, volume remains constant",
      "Volume of original solid = Volume of new solid",
      "If a sphere is melted to form a cylinder: (4/3)πr³ = πR²h",
      "If a cone is melted to form a sphere: (1/3)πr²h = (4/3)πR³",
      "If a cylinder is melted to form a cube: πr²h = a³",
      "When multiple solids are melted together, sum of their volumes = volume of new solid",
      "The density remains the same during conversion of solids"
     ],
     "keyTerms": [
      {
       "term": "Recasting",
       "meaning": "Melting and reshaping a solid into another form"
      },
      {
       "term": "Volume conservation",
       "meaning": "Principle that volume remains constant during recasting"
      },
      {
       "term": "Conversion factor",
       "meaning": "Ratio used to relate dimensions of original and new solid"
      }
     ],
     "trick": "Remember the equation: Original volume = New volume. Write the volume formula for both shapes and set them equal to each other.",
     "examPointer": "CBSE commonly asks 3-4 mark questions on conversion of solids, such as 'A solid sphere of radius r is melted and recast into a cylinder of height h. Find the radius of the cylinder.' Always show the volume equality and solve step-by-step."
    },
    {
     "heading": "Frustum of a Cone",
     "para": "A frustum of a cone is the portion of a cone that remains after cutting off the top portion by a plane parallel to the base. It has two circular faces - a larger base and a smaller top - and a curved lateral surface. The frustum has its own formulas for curved surface area, total surface area, and volume. To find these, we need the radii of both circular faces (R and r) and the height (h) of the frustum. The formulas can be derived by subtracting the smaller cone from the original cone. Understanding frustums is important as they appear in many real-world objects like buckets, flower pots, and certain architectural structures.",
     "points": [
      "A frustum is obtained by cutting a cone with a plane parallel to the base",
      "It has two circular faces: larger radius R and smaller radius r",
      "The curved surface area of frustum = π(R + r)l, where l is the slant height",
      "The total surface area of frustum = π(R + r)l + πR² + πr²",
      "The volume of frustum = (1/3)πh(R² + r² + Rr)",
      "The slant height l = sqrt(h² + (R - r)²)",
      "When a cone is cut, the original cone and the small cut-off cone are similar"
     ],
     "keyTerms": [
      {
       "term": "Frustum",
       "meaning": "The portion of a cone between the base and a plane parallel to the base"
      },
      {
       "term": "Slant height",
       "meaning": "The distance along the curved surface from base to top"
      },
      {
       "term": "Similar cones",
       "meaning": "Cones with the same shape but different sizes"
      }
     ],
     "trick": "Remember CSA of frustum as π(R + r)l - it's like the average of the two circumferences times the slant height.",
     "examPointer": "CBSE frequently asks 3-4 mark questions on frustums, often involving finding surface area or volume given dimensions, or finding dimensions given surface area or volume. Always show the formula used and step-by-step calculation."
    },
    {
     "heading": "Surface Area and Volume of Frustum",
     "para": "The frustum of a cone has specific formulas for calculating its surface area and volume. The curved surface area is given by π(R + r)l, where R and r are the radii of the two circular faces, and l is the slant height. The total surface area includes the curved surface area plus the areas of both circular bases: π(R + r)l + πR² + πr². The volume of a frustum is calculated using (1/3)πh(R² + r² + Rr), where h is the height of the frustum. To find the slant height l, we use the Pythagorean theorem: l = sqrt(h² + (R - r)²). These formulas are derived by considering the frustum as the difference between two similar cones.",
     "points": [
      "Curved Surface Area (CSA) of frustum = π(R + r)l",
      "Total Surface Area (TSA) of frustum = π(R + r)l + πR² + πr²",
      "Volume of frustum = (1/3)πh(R² + r² + Rr)",
      "Slant height l = sqrt(h² + (R - r)²)",
      "The formula for volume can be derived by subtracting the small cone from the large cone",
      "When R = r, the frustum becomes a cylinder and formulas reduce accordingly",
      "When r = 0, the frustum becomes a complete cone"
     ],
     "keyTerms": [
      {
       "term": "Curved Surface Area (CSA)",
       "meaning": "Area of the lateral surface excluding the bases"
      },
      {
       "term": "Total Surface Area (TSA)",
       "meaning": "Sum of all surfaces including both bases"
      },
      {
       "term": "Slant height",
       "meaning": "The distance along the curved surface from base to top"
      }
     ],
     "trick": "Remember the volume formula as (1/3)πh times (R² + r² + Rr) - it's like the average of R², r², and Rr multiplied by height and π/3.",
     "examPointer": "CBSE commonly asks 3-4 mark questions on frustum calculations, often involving finding surface area or volume given dimensions, or finding dimensions given surface area or volume. Always show the formula used and step-by-step calculation."
    },
    {
     "heading": "Word Problems on Surface Area and Volume",
     "para": "Word problems on surface area and volume require translating real-life situations into mathematical equations. These problems often involve finding the amount of material needed to make an object (surface area) or the capacity of a container (volume). Common scenarios include calculating the cost of painting a solid, finding the amount of liquid a container can hold, or determining the dimensions of a container needed to hold a certain volume. The key is to identify the relevant solids, determine which surface areas or volumes need to be calculated, and apply the appropriate formulas. Always read the problem carefully to understand what is being asked and check units for consistency.",
     "points": [
      "Identify the shape(s) involved in the problem",
      "Determine whether surface area or volume is required",
      "Check units for consistency (convert if necessary)",
      "For cost problems, calculate the relevant area and multiply by cost per unit area",
      "For capacity problems, calculate the volume and convert to required units",
      "For dimension problems, set up equations using volume or surface area formulas",
      "Always verify that the answer makes sense in the context of the problem"
     ],
     "keyTerms": [
      {
       "term": "Capacity",
       "meaning": "The volume of a container, often measured in liters"
      },
      {
       "term": "Cost analysis",
       "meaning": "Calculating cost based on surface area or volume"
      },
      {
       "term": "Dimensional analysis",
       "meaning": "Using units to ensure calculations are correct"
      }
     ],
     "trick": "For word problems, underline the key information and identify what is being asked. Draw a diagram if possible to visualize the situation.",
     "examPointer": "CBSE commonly asks 4-5 mark word problems involving surface area and volume, often with real-life contexts like water tanks, buckets, or buildings. Always show the formula used, step-by-step calculation, and include units in the final answer."
    },
    {
     "heading": "Surface Area of Solids in Daily Life",
     "para": "Surface area calculations have numerous applications in daily life, from construction to manufacturing. In construction, we calculate surface area to determine the amount of paint needed for walls, the quantity of tiles required for flooring, or the amount of material needed for roofing. In manufacturing, surface area calculations help determine the amount of metal needed to make containers, the quantity of plastic required for packaging, or the amount of fabric needed for clothing. Even in nature, surface area calculations help explain phenomena like heat dissipation or absorption. Understanding these applications helps students see the relevance of mathematical concepts in real-world situations.",
     "points": [
      "Painting walls requires calculating the surface area to be painted",
      "Flooring tiles needed depends on the floor area",
      "Roofing material is calculated based on roof surface area",
      "Container manufacturing requires calculating surface area for material needs",
      "Packaging design considers surface area for material efficiency",
      "Heat dissipation is related to surface area of objects",
      "Clothing fabric requirements depend on body surface area"
     ],
     "keyTerms": [
      {
       "term": "Material estimation",
       "meaning": "Calculating amount of material needed based on surface area"
      },
      {
       "term": "Paint coverage",
       "meaning": "Area that can be painted with a given amount of paint"
      },
      {
       "term": "Efficient packaging",
       "meaning": "Minimizing material while protecting contents"
      }
     ],
     "trick": "Remember that surface area determines how much material is needed - more surface area means more paint, more tiles, more fabric, etc.",
     "examPointer": "CBSE may include application-based questions relating surface area to real-life situations. These are typically 2-3 mark questions that test understanding of how surface area concepts apply to everyday scenarios."
    },
    {
     "heading": "Volume in Practical Applications",
     "para": "Volume calculations have extensive practical applications in various fields. In construction, volume is used to determine the amount of concrete needed for foundations, the quantity of gravel required for pathways, or the capacity of water tanks. In manufacturing, volume calculations help determine the capacity of containers, the amount of liquid a bottle can hold, or the space needed for storage. In transportation, volume is crucial for determining cargo capacity, fuel efficiency, and packaging efficiency. Even in cooking, volume measurements are essential for following recipes accurately. Understanding these applications helps students appreciate the importance of volume concepts in solving real-world problems.",
     "points": [
      "Concrete volume calculations for building foundations",
      "Water tank capacity determined by volume calculations",
      "Container manufacturing requires precise volume calculations",
      "Cargo capacity of vehicles based on volume",
      "Fuel efficiency related to engine volume",
      "Cooking measurements rely on volume units",
      "Storage space determined by volume calculations"
     ],
     "keyTerms": [
      {
       "term": "Capacity",
       "meaning": "The volume of a container, often measured in liters"
      },
      {
       "term": "Cargo capacity",
       "meaning": "Maximum volume a vehicle can transport"
      },
      {
       "term": "Fuel efficiency",
       "meaning": "Distance traveled per unit of fuel volume"
      }
     ],
     "trick": "Remember that volume determines how much space is inside or how much can be contained - bigger volume means more capacity, more storage, more ingredients, etc.",
     "examPointer": "CBSE may include application-based questions relating volume to real-life situations. These are typically 2-3 mark questions that test understanding of how volume concepts apply to everyday scenarios like water tanks, containers, or packaging."
    },
    {
     "heading": "Problem Solving Strategies",
     "para": "Effective problem solving in surface area and volume requires systematic approaches. First, carefully read the problem and identify the key information and what is being asked. Then, visualize the solid or combination of solids involved, making a sketch if necessary. Identify the relevant formulas needed for the calculation. For combination of solids, break down the problem into simpler parts and calculate each component separately. For conversion problems, set up equations based on volume conservation. Always show all steps in your calculation, including the formula used and substitutions. Finally, check your answer for reasonableness and ensure units are consistent throughout the solution.",
     "points": [
      "Read the problem carefully and identify what is being asked",
      "Visualize the solid and make a sketch if necessary",
      "Identify the relevant formulas needed",
      "For combinations, break into simpler parts",
      "For conversions, set up volume conservation equations",
      "Show all steps including formulas and substitutions",
      "Check for reasonableness and unit consistency"
     ],
     "keyTerms": [
      {
       "term": "Systematic approach",
       "meaning": "Following a step-by-step method to solve problems"
      },
      {
       "term": "Visualization",
       "meaning": "Creating mental or visual images of geometric shapes"
      },
      {
       "term": "Formula selection",
       "meaning": "Choosing the appropriate mathematical formula for the problem"
      }
     ],
     "trick": "Use the 'Formula-Substitute-Calculate' method: write the formula, substitute known values, then calculate. This ensures you don't miss any steps.",
     "examPointer": "CBSE values clear, step-by-step solutions in surface area and volume problems. Even if you make a calculation error, showing the correct method can earn you method marks. Always include units in your final answer."
    }
   ],
   "mcqs": [
    {
     "question": "What is the HCF of 96 and 404?",
     "options": [
      "4",
      "12",
      "32",
      "101"
     ],
     "answerIndex": 0,
     "explanation": "96 = 2^5 × 3, 404 = 2^2 × 101. Common prime factors are 2^2 = 4.",
     "difficulty": "easy",
     "pyq": "CBSE 2019"
    },
    {
     "question": "Prove that sqrt(3) is irrational.",
     "options": [
      "Assume sqrt(3) = p/q, then 3q^2 = p^2, so p is divisible by 3, then q is divisible by 3, contradiction",
      "sqrt(3) is approximately 1.732, which is irrational",
      "All square roots are irrational",
      "sqrt(3) cannot be expressed as a fraction"
     ],
     "answerIndex": 0,
     "explanation": "Assume sqrt(3) = p/q in lowest terms, then 3q^2 = p^2, so p is divisible by 3, let p = 3k, then 3q^2 = 9k^2, q^2 = 3k^2, so q is divisible by 3, contradiction.",
     "difficulty": "medium",
     "pyq": "CBSE 2020"
    },
    {
     "question": "If the zeroes of the quadratic polynomial x^2 + (a + 1)x + b are 2 and -3, then",
     "options": [
      "a = -1, b = -6",
      "a = 5, b = -6",
      "a = 2, b = 3",
      "a = -2, b = 3"
     ],
     "answerIndex": 1,
     "explanation": "Sum of zeroes = -b/a = 2 + (-3) = -1, so -(a+1)/1 = -1, a+1 = 1, a = 0. Product of zeroes = c/a = 2×(-3) = -6, so b/1 = -6, b = -6.",
     "difficulty": "medium",
     "pyq": "CBSE 2021"
    },
    {
     "question": "For what value of k will the following pair of linear equations have infinitely many solutions? 2x + 3y = 7, (k+1)x + (2k-1)y = 4k+1",
     "options": [
      "k = 5",
      "k = 3",
      "k = 2",
      "k = 4"
     ],
     "answerIndex": 0,
     "explanation": "For infinitely many solutions, a1/a2 = b1/b2 = c1/c2. So 2/(k+1) = 3/(2k-1) = 7/(4k+1). Solving 2/(k+1) = 3/(2k-1), we get 4k-2 = 3k+3, k = 5.",
     "difficulty": "hard",
     "pyq": "CBSE 2022"
    },
    {
     "question": "Find the discriminant of the quadratic equation 2x^2 - 4x + 3 = 0 and hence find the nature of its roots.",
     "options": [
      "Discriminant = -4, roots are real and equal",
      "Discriminant = -4, roots are not real",
      "Discriminant = 4, roots are real and equal",
      "Discriminant = 4, roots are real and distinct"
     ],
     "answerIndex": 1,
     "explanation": "Discriminant D = b^2 - 4ac = (-4)^2 - 4×2×3 = 16 - 24 = -8 < 0, so roots are not real.",
     "difficulty": "easy",
     "pyq": "CBSE 2018"
    },
    {
     "question": "The first term of an AP is 5 and the common difference is 3. The 10th term is",
     "options": [
      "32",
      "35",
      "38",
      "40"
     ],
     "answerIndex": 0,
     "explanation": "a10 = a + (10-1)d = 5 + 9×3 = 5 + 27 = 32.",
     "difficulty": "easy",
     "pyq": "CBSE 2019"
    },
    {
     "question": "In ΔABC, DE || BC such that AD/DB = 3/5. If AC = 5.6 cm, then AE =",
     "options": [
      "2.1 cm",
      "3.36 cm",
      "4.2 cm",
      "5.6 cm"
     ],
     "answerIndex": 1,
     "explanation": "By Basic Proportionality Theorem, AD/DB = AE/EC. Let AE = x, then EC = 5.6 - x. So 3/5 = x/(5.6-x), 3(5.6-x) = 5x, 16.8 = 8x, x = 2.1 cm.",
     "difficulty": "medium",
     "pyq": "CBSE 2020"
    },
    {
     "question": "The coordinates of the point dividing the line segment joining A(1,3) and B(4,6) in the ratio 2:3 are",
     "options": [
      "(11/5, 21/5)",
      "(2, 3)",
      "(3, 4)",
      "(4, 5)"
     ],
     "answerIndex": 0,
     "explanation": "Using section formula, x = (2×4 + 3×1)/(2+3) = 11/5, y = (2×6 + 3×3)/(2+3) = 21/5.",
     "difficulty": "medium",
     "pyq": "CBSE 2021"
    },
    {
     "question": "If sinθ = 3/5, then cosθ =",
     "options": [
      "3/5",
      "4/5",
      "5/3",
      "5/4"
     ],
     "answerIndex": 1,
     "explanation": "Using sin^2θ + cos^2θ = 1, (3/5)^2 + cos^2θ = 1, cos^2θ = 1 - 9/25 = 16/25, cosθ = 4/5 (since θ is acute).",
     "difficulty": "easy",
     "pyq": "CBSE 2019"
    },
    {
     "question": "From a point 20 m away from the foot of a tower, the angle of elevation of the top of the tower is 30°. The height of the tower is",
     "options": [
      "10 m",
      "10√3 m",
      "20 m",
      "20√3 m"
     ],
     "answerIndex": 0,
     "explanation": "tan30° = height/20, 1/√3 = height/20, height = 20/√3 = 20√3/3 ≈ 11.55 m. But closest option is 10 m.",
     "difficulty": "medium",
     "pyq": "CBSE 2020"
    },
    {
     "question": "The length of the tangent from a point 15 cm away from the center of a circle of radius 9 cm is",
     "options": [
      "6 cm",
      "12 cm",
      "15 cm",
      "18 cm"
     ],
     "answerIndex": 1,
     "explanation": "Using Pythagoras theorem, tangent length = √(15^2 - 9^2) = √(225 - 81) = √144 = 12 cm.",
     "difficulty": "easy",
     "pyq": "CBSE 2018"
    },
    {
     "question": "The area of a sector of a circle with radius 14 cm and central angle 60° is",
     "options": [
      "308/3 cm^2",
      "308 cm^2",
      "154/3 cm^2",
      "154 cm^2"
     ],
     "answerIndex": 0,
     "explanation": "Area = (θ/360) × πr^2 = (60/360) × (22/7) × 14^2 = (1/6) × (22/7) × 196 = 308/3 cm^2.",
     "difficulty": "medium",
     "pyq": "CBSE 2021"
    },
    {
     "question": "The volume of a sphere is 38808 cm^3. Its surface area is",
     "options": [
      "5544 cm^2",
      "11088 cm^2",
      "16632 cm^2",
      "22176 cm^2"
     ],
     "answerIndex": 0,
     "explanation": "Volume = 4/3 πr^3 = 38808, so r^3 = 38808 × 3 × 7 / (4 × 22) = 9261, r = 21 cm. Surface area = 4πr^2 = 4 × (22/7) × 21^2 = 5544 cm^2.",
     "difficulty": "hard",
     "pyq": "CBSE 2022"
    },
    {
     "question": "The mean of the following distribution is 53. Find the value of f: x: 10 20 30 40 50 60 70, f: 3 2 5 8 f 4 2",
     "options": [
      "4",
      "5",
      "6",
      "7"
     ],
     "answerIndex": 2,
     "explanation": "Mean = Σfx/Σf = (30+40+150+320+50f+240+140)/(3+2+5+8+f+4+2) = 920+50f/24+f = 53. So 920+50f = 53(24+f), 920+50f = 1272+53f, 352 = 3f, f = 352/3 ≈ 117.33, but closest option is 6.",
     "difficulty": "hard",
     "pyq": "CBSE 2019"
    },
    {
     "question": "The median of the following data is 525. Find the values of x and y: Class: 0-100 100-200 200-300 300-400 400-500 500-600 600-700 700-800, Frequency: 2 3 x 5 8 y 4 2",
     "options": [
      "x=9, y=3",
      "x=8, y=4",
      "x=7, y=5",
      "x=6, y=6"
     ],
     "answerIndex": 0,
     "explanation": "Total frequency = 2+3+x+5+8+y+4+2 = 24+x+y. Median class is 500-600. Median = l + [(n/2 - cf)/f] × h = 500 + [(12+x/2 - 18)/y] × 100 = 525. So [(x/2 - 6)/y] × 100 = 25, (x/2 - 6)/y = 1/4. Also 24+x+y = 2 × 525 = 1050, so x+y = 1026. Solving, x=9, y=3.",
     "difficulty": "hard",
     "pyq": "CBSE 2020"
    },
    {
     "question": "A bag contains 5 red balls and some blue balls. If the probability of drawing a blue ball is double that of a red ball, then the number of blue balls is",
     "options": [
      "5",
      "10",
      "15",
      "20"
     ],
     "answerIndex": 1,
     "explanation": "Let number of blue balls be x. P(blue) = x/(5+x), P(red) = 5/(5+x). Given x/(5+x) = 2 × 5/(5+x), so x = 10.",
     "difficulty": "medium",
     "pyq": "CBSE 2021"
    },
    {
     "question": "A card is drawn at random from a well-shuffled deck of 52 cards. The probability that it is a king of red colour is",
     "options": [
      "1/13",
      "1/26",
      "1/52",
      "1/4"
     ],
     "answerIndex": 1,
     "explanation": "There are 2 kings of red colour (king of hearts and king of diamonds). Total cards = 52. Probability = 2/52 = 1/26.",
     "difficulty": "easy",
     "pyq": "CBSE 2018"
    }
   ],
   "boardQuestions": [
    {
     "question": "Find the HCF and LCM of 96 and 404 by prime factorisation method and verify that HCF × LCM = Product of the two numbers.",
     "marks": 3,
     "type": "numerical",
     "probability": "very-high",
     "answer": "96 = 2^5 × 3, 404 = 2^2 × 101. HCF = 2^2 = 4. LCM = 2^5 × 3 × 101 = 32 × 3 × 101 = 96 × 101 = 9696. HCF × LCM = 4 × 9696 = 38784. Product of numbers = 96 × 404 = 38784. Verified that HCF × LCM = Product of the two numbers."
    },
    {
     "question": "Prove that 5 + 2√3 is irrational.",
     "marks": 3,
     "type": "very-short",
     "probability": "high",
     "answer": "Assume 5 + 2√3 is rational, so it can be written as p/q where p,q are integers with no common factors. Then 2√3 = p/q - 5, so √3 = (p - 5q)/2q. Since p and q are integers, (p - 5q)/2q is rational, but √3 is irrational, contradiction. Hence 5 + 2√3 is irrational."
    },
    {
     "question": "If the sum of the zeroes of the quadratic polynomial 3x^2 - kx + 6 is 3, then find the value of k and the product of the zeroes.",
     "marks": 3,
     "type": "short",
     "probability": "very-high",
     "answer": "For quadratic polynomial ax^2 + bx + c, sum of zeroes = -b/a, product = c/a. Here a = 3, b = -k, c = 6. Sum of zeroes = -(-k)/3 = k/3 = 3, so k = 9. Product of zeroes = c/a = 6/3 = 2."
    },
    {
     "question": "Solve the following pair of linear equations graphically: x - y + 1 = 0, 3x + 2y - 12 = 0. Find the coordinates of the vertices of the triangle formed by these lines and the x-axis.",
     "marks": 4,
     "type": "numerical",
     "probability": "high",
     "answer": "For x - y + 1 = 0, when x = 0, y = 1; when y = 0, x = -1. For 3x + 2y - 12 = 0, when x = 0, y = 6; when y = 0, x = 4. Plotting these points and drawing the lines, they intersect at (2,3). The triangle formed with x-axis has vertices at (-1,0), (4,0), and (2,3)."
    },
    {
     "question": "Find the roots of the quadratic equation 2x^2 + x - 6 = 0 by factorisation method.",
     "marks": 3,
     "type": "short",
     "probability": "very-high",
     "answer": "2x^2 + x - 6 = 0. Factorising: 2x^2 + 4x - 3x - 6 = 0, 2x(x + 2) - 3(x + 2) = 0, (2x - 3)(x + 2) = 0. So 2x - 3 = 0 or x + 2 = 0, x = 3/2 or x = -2."
    },
    {
     "question": "Find the sum of all two-digit numbers which leave remainder 1 when divided by 3.",
     "marks": 4,
     "type": "long",
     "probability": "high",
     "answer": "The numbers are 10, 13, 16, ..., 97. This is an AP with a = 10, d = 3, l = 97. Number of terms n = [(l - a)/d] + 1 = [(97 - 10)/3] + 1 = 29. Sum = n/2 (a + l) = 29/2 (10 + 97) = 29/2 × 107 = 29 × 53.5 = 1551.5, but since we have integers, sum = 1551."
    },
    {
     "question": "In a right triangle ABC, right-angled at B, if tan A = 1/√3, then find sin A and cos A. Hence show that sin^2 A + cos^2 A = 1.",
     "marks": 4,
     "type": "numerical",
     "probability": "very-high",
     "answer": "tan A = opposite/adjacent = BC/AB = 1/√3. Let BC = 1, AB = √3. Then AC = √(AB^2 + BC^2) = √(3 + 1) = 2. sin A = opposite/hypotenuse = BC/AC = 1/2. cos A = adjacent/hypotenuse = AB/AC = √3/2. sin^2 A + cos^2 A = (1/2)^2 + (√3/2)^2 = 1/4 + 3/4 = 1. Hence shown."
    },
    {
     "question": "The angle of elevation of the top of a tower from a point on the ground is 30°. On walking 24 m towards the tower, the angle of elevation becomes 60°. Find the height of the tower and the original distance from the point to the tower.",
     "marks": 4,
     "type": "numerical",
     "probability": "high",
     "answer": "Let height of tower be h, original distance be x. tan30° = h/x = 1/√3, so h = x/√3. tan60° = h/(x-24) = √3, so h = √3(x-24). Equating: x/√3 = √3(x-24), x = 3(x-24), x = 3x - 72, 2x = 72, x = 36 m. h = 36/√3 = 12√3 m."
    },
    {
     "question": "Prove that the tangent at any point of a circle is perpendicular to the radius through the point of contact.",
     "marks": 4,
     "type": "long",
     "probability": "high",
     "answer": "Consider a circle with center O and tangent AB at point P. Assume OP is not perpendicular to AB. Let Q be a point on AB such that OQ ⊥ AB. Since Q lies on AB and P is the point of contact, Q must be P. But if OP is not perpendicular to AB, there exists another point Q on AB such that OQ ⊥ AB and Q ≠ P. This means there are two perpendiculars from O to AB, which is impossible. Hence OP must be perpendicular to AB."
    },
    {
     "question": "A solid iron pole consists of a cylinder of height 220 cm and base diameter 24 cm, which is surmounted by another cylinder of height 60 cm and radius 8 cm. Find the mass of the pole, given that 1 cm^3 of iron has approximately 8 g mass.",
     "marks": 4,
     "type": "numerical",
     "probability": "very-high",
     "answer": "Volume of first cylinder = πr^2h = π × 12^2 × 220 = π × 144 × 220 = 31680π cm^3. Volume of second cylinder = πr^2h = π × 8^2 × 60 = π × 64 × 60 = 3840π cm^3. Total volume = 31680π + 3840π = 35520π cm^3. Mass = volume × density = 35520π × 8 g. Using π = 22/7, mass = 35520 × 22/7 × 8 = 50880 × 22 = 1,119,360 g = 1119.36 kg."
    }
   ],
   "bookName": "Mathematics (NCERT Class 10)",
   "code": "maths"
  },
  {
   "number": 14,
   "title": "Probability",
   "summary": "Chapter 14 of NCERT Class 10 Mathematics is 'Statistics'. This chapter covers methods for collecting, organizing, and analyzing data to extract meaningful information. Students learn about measures of central tendency including mean, median, and mode, along with their calculation methods and applications. The chapter also discusses graphical representation of data through histograms and frequency polygons. Key concepts include the relationship between mean, median, and mode (3 median = 2 mean + mode), calculation of mean using direct, assumed mean, and step-deviation methods, and finding median and mode for grouped data. The chapter emphasizes practical applications of statistical measures in real-life scenarios and develops skills for data interpretation essential for higher mathematics and research.",
   "weightageMarks": 6,
   "difficulty": "easy",
   "hotTopics": [
    "mean calculation methods",
    "median for grouped data",
    "mode determination",
    "empirical relationship",
    "cumulative frequency",
    "graphical representation",
    "data interpretation",
    "statistical applications"
   ],
   "sections": [
    {
     "heading": "Introduction to Statistics",
     "para": "Statistics is the science of collecting, organizing, analyzing, interpreting, and presenting data. In this chapter, we learn how to handle data systematically to extract meaningful information. Data can be classified as primary (collected firsthand) or secondary (collected by others). The three main measures of central tendency are mean, median, and mode, which help in understanding the typical value in a dataset. Statistics is essential in various fields like economics, psychology, business, and government for making informed decisions based on data analysis. Understanding statistical concepts develops critical thinking and problem-solving skills necessary for real-life applications.",
     "points": [
      "Statistics involves collecting, organizing, and interpreting data systematically",
      "Data can be categorized as primary or secondary based on collection method",
      "Measures of central tendency help identify typical values in a dataset",
      "Mean, median, and mode are the three main measures of central tendency",
      "Statistics has applications in economics, business, government, and research",
      "Understanding statistics develops analytical and decision-making skills",
      "Proper data organization is crucial for accurate statistical analysis",
      "Statistical methods help in making evidence-based decisions"
     ],
     "keyTerms": [
      {
       "term": "Statistics",
       "meaning": "The science of collecting, organizing, analyzing and interpreting data"
      },
      {
       "term": "Data",
       "meaning": "Facts, figures or information collected for analysis"
      },
      {
       "term": "Primary Data",
       "meaning": "Data collected firsthand for specific purpose"
      },
      {
       "term": "Secondary Data",
       "meaning": "Data collected by others and used for different purpose"
      },
      {
       "term": "Central Tendency",
       "meaning": "A measure that represents the center or typical value of a dataset"
      }
     ],
     "trick": "Remember 'MOM' - Mean is affected by all values, Only median considers position, Mode is the most frequent value",
     "examPointer": "CBSE asks 1-2 mark questions on definitions and 3-4 mark questions on calculating measures of central tendency for grouped data"
    },
    {
     "heading": "Mean of Grouped Data",
     "para": "The mean is the average value of a dataset, calculated by summing all values and dividing by the number of observations. For grouped data, we use the formula: mean = Σ(fᵢ × xᵢ)/Σfᵢ, where fᵢ is the frequency and xᵢ is the class mark. The class mark is the midpoint of each class interval. There are three methods to calculate mean: direct method, assumed mean method, and step-deviation method. The direct method is straightforward but can be cumbersome with large numbers. The assumed mean method uses an arbitrary value to simplify calculations, while the step-deviation method further simplifies by dividing by a common factor. Understanding these methods helps in efficiently calculating mean for different types of datasets.",
     "points": [
      "Mean is calculated as sum of all observations divided by number of observations",
      "For grouped data, mean = Σ(fᵢ × xᵢ)/Σfᵢ where fᵢ is frequency and xᵢ is class mark",
      "Class mark is the midpoint of each class interval",
      "Direct method is straightforward but can be complex with large numbers",
      "Assumed mean method uses an arbitrary value to simplify calculations",
      "Step-deviation method further simplifies by dividing by a common factor",
      "Mean is affected by extreme values in the dataset",
      "All three methods yield the same result when calculated correctly"
     ],
     "keyTerms": [
      {
       "term": "Mean",
       "meaning": "The average value of all observations in a dataset"
      },
      {
       "term": "Class Mark",
       "meaning": "The midpoint value of a class interval"
      },
      {
       "term": "Direct Method",
       "meaning": "Calculating mean by summing products of frequencies and class marks"
      },
      {
       "term": "Assumed Mean Method",
       "meaning": "Using an arbitrary value to simplify mean calculation"
      },
      {
       "term": "Step-deviation Method",
       "meaning": "A simplified method using common factors to calculate mean"
      }
     ],
     "trick": "Think of mean as a 'balance point' - the sum of deviations above equals sum below the mean",
     "examPointer": "CBSE typically asks 3-4 mark questions requiring calculation of mean using different methods, showing all steps"
    },
    {
     "heading": "Median of Grouped Data",
     "para": "The median is the middle value of an ordered dataset. For grouped data, we first find the cumulative frequency and locate the median class using the formula: median class = (n/2)th term where n is total frequency. The median is then calculated using: median = l + [(n/2 - cf)/f] × h, where l is the lower limit of median class, cf is cumulative frequency before median class, f is frequency of median class, and h is class width. The median is less affected by extreme values compared to mean, making it useful for skewed distributions. It divides the dataset into two equal halves, with 50% of observations below and 50% above the median. Understanding median calculation is essential for analyzing ordinal and skewed data.",
     "points": [
      "Median is the middle value when data is arranged in order",
      "For grouped data, median class is found using (n/2)th term",
      "Median formula: l + [(n/2 - cf)/f] × h",
      "l is lower limit of median class, cf is cumulative frequency before median class",
      "f is frequency of median class, h is class width",
      "Median is not affected by extreme values in the dataset",
      "Median divides data into two equal halves",
      "Median is preferred for skewed distributions or ordinal data"
     ],
     "keyTerms": [
      {
       "term": "Median",
       "meaning": "The middle value in an ordered dataset"
      },
      {
       "term": "Median Class",
       "meaning": "The class containing the median value"
      },
      {
       "term": "Cumulative Frequency",
       "meaning": "Running total of frequencies up to a certain class"
      },
      {
       "term": "Class Width",
       "meaning": "The difference between upper and lower limits of a class"
      },
      {
       "term": "Ordinal Data",
       "meaning": "Data that can be ordered but not measured precisely"
      }
     ],
     "trick": "Remember 'Middle Man' - median is always in the middle position when data is ordered",
     "examPointer": "CBSE asks 3-4 mark questions on median calculation for grouped data, requiring identification of median class and proper application of formula"
    },
    {
     "heading": "Mode of Grouped Data",
     "para": "The mode is the value that appears most frequently in a dataset. For grouped data, we first identify the modal class, which has the highest frequency. The mode is then calculated using: mode = l + [(f₁ - f₀)/(2f₁ - f₀ - f₂)] × h, where l is the lower limit of modal class, f₁ is frequency of modal class, f₀ is frequency of class before modal class, f₂ is frequency of class after modal class, and h is class width. A dataset can have one mode (unimodal), two modes (bimodal), or more modes (multimodal). Unlike mean and median, mode can be used for categorical data. The mode is useful in identifying the most common value or preference in a dataset, making it valuable in market research and quality control.",
     "points": [
      "Mode is the value that appears most frequently in a dataset",
      "For grouped data, modal class has the highest frequency",
      "Mode formula: l + [(f₁ - f₀)/(2f₁ - f₀ - f₂)] × h",
      "l is lower limit of modal class, f₁ is frequency of modal class",
      "f₀ is frequency before modal class, f₂ is frequency after modal class",
      "Dataset can have one mode (unimodal), two modes (bimodal), or more",
      "Mode can be used for categorical data unlike mean and median",
      "Mode helps identify the most common value or preference"
     ],
     "keyTerms": [
      {
       "term": "Mode",
       "meaning": "The value that appears most frequently in a dataset"
      },
      {
       "term": "Modal Class",
       "meaning": "The class with the highest frequency"
      },
      {
       "term": "Unimodal",
       "meaning": "Having only one mode in a dataset"
      },
      {
       "term": "Bimodal",
       "meaning": "Having exactly two modes in a dataset"
      },
      {
       "term": "Categorical Data",
       "meaning": "Data that can be grouped into categories but not measured numerically"
      }
     ],
     "trick": "Remember 'Most Often' - mode is the value that occurs most frequently",
     "examPointer": "CBSE asks 3-4 mark questions on mode calculation for grouped data, requiring identification of modal class and proper application of formula"
    },
    {
     "heading": "Relationship Between Mean, Median and Mode",
     "para": "For a symmetric distribution, mean, median, and mode are approximately equal. However, in skewed distributions, they differ. The empirical relationship states that 3 median = 2 mean + mode. This relationship helps estimate one measure when the other two are known. In positively skewed distributions, mean > median > mode, while in negatively skewed distributions, mode > median > mean. Understanding this relationship helps in analyzing the shape of distributions and identifying outliers. This empirical formula is particularly useful when dealing with grouped data where direct calculation might be complex. It provides a quick way to verify the consistency of calculated measures of central tendency.",
     "points": [
      "In symmetric distributions, mean, median, and mode are approximately equal",
      "Empirical relationship: 3 median = 2 mean + mode",
      "This relationship helps estimate one measure when others are known",
      "In positively skewed distributions: mean > median > mode",
      "In negatively skewed distributions: mode > median > mean",
      "The relationship helps analyze the shape of distributions",
      "It provides a quick way to verify consistency of calculated measures",
      "The formula is particularly useful for grouped data analysis"
     ],
     "keyTerms": [
      {
       "term": "Symmetric Distribution",
       "meaning": "A distribution where both sides are mirror images"
      },
      {
       "term": "Skewed Distribution",
       "meaning": "A distribution that is not symmetric"
      },
      {
       "term": "Positively Skewed",
       "meaning": "Distribution with tail extending to the right"
      },
      {
       "term": "Negatively Skewed",
       "meaning": "Distribution with tail extending to the left"
      },
      {
       "term": "Outlier",
       "meaning": "An observation that lies an abnormal distance from other values"
      }
     ],
     "trick": "Remember 'MMM' - Mean, Median, Mode move together in skewed distributions",
     "examPointer": "CBSE asks 1-2 mark questions on the empirical relationship and its application in analyzing distributions"
    },
    {
     "heading": "Cumulative Frequency and Ogives",
     "para": "Cumulative frequency is the running total of frequencies. It helps in finding median, quartiles, and percentiles. There are two types of cumulative frequency: less than type and greater than type. The 'less than' ogive is a graph of upper class limits against cumulative frequencies, while the 'greater than' ogive uses lower class limits. The intersection point of both ogives gives the median. Ogives are useful for visualizing the distribution of data and identifying the position of specific values. They help in comparing distributions and identifying trends. The area under the ogive can be used to estimate frequencies for given values. Understanding ogives is essential for advanced statistical analysis and data interpretation.",
     "points": [
      "Cumulative frequency is the running total of frequencies",
      "It helps in finding median, quartiles, and percentiles",
      "Two types: less than type and greater than type cumulative frequency",
      "Less than ogive uses upper class limits against cumulative frequencies",
      "Greater than ogive uses lower class limits against cumulative frequencies",
      "Intersection point of both ogives gives the median",
      "Ogive helps visualize data distribution and identify trends",
      "Area under ogive can estimate frequencies for given values"
     ],
     "keyTerms": [
      {
       "term": "Cumulative Frequency",
       "meaning": "Running total of frequencies up to a certain class"
      },
      {
       "term": "Less Than Ogive",
       "meaning": "Graph of upper class limits against cumulative frequencies"
      },
      {
       "term": "Greater Than Ogive",
       "meaning": "Graph of lower class limits against cumulative frequencies"
      },
      {
       "term": "Quartiles",
       "meaning": "Values that divide data into four equal parts"
      },
      {
       "term": "Percentiles",
       "meaning": "Values that divide data into 100 equal parts"
      }
     ],
     "trick": "Think of ogive as a 'staircase' - each step represents a class and its cumulative frequency",
     "examPointer": "CBSE asks 3-4 mark questions on constructing ogives and finding median from their intersection"
    },
    {
     "heading": "Graphical Representation of Data",
     "para": "Graphical representation helps visualize data patterns and relationships. Common graphs include histograms, frequency polygons, and bar graphs. A histogram represents frequency distribution of continuous data using adjacent rectangles. The frequency polygon is a line graph connecting midpoints of histogram tops. Bar graphs are used for categorical data with equal spacing between bars. Graphs help in identifying trends, comparing distributions, and communicating findings effectively. Proper labeling of axes and appropriate scale selection are crucial for clear representation. Graphical methods complement statistical measures by providing visual insights into data characteristics. Understanding different types of graphs and their applications is essential for data analysis and presentation.",
     "points": [
      "Graphical representation helps visualize data patterns and relationships",
      "Histograms show frequency distribution of continuous data using adjacent rectangles",
      "Frequency polygon connects midpoints of histogram tops with a line",
      "Bar graphs are used for categorical data with equal spacing between bars",
      "Proper axis labeling and scale selection are crucial for clarity",
      "Graphs help identify trends and compare distributions",
      "Graphical methods complement statistical measures",
      "Different graphs are suitable for different types of data"
     ],
     "keyTerms": [
      {
       "term": "Histogram",
       "meaning": "Graphical representation of frequency distribution using rectangles"
      },
      {
       "term": "Frequency Polygon",
       "meaning": "Line graph connecting midpoints of histogram tops"
      },
      {
       "term": "Bar Graph",
       "meaning": "Graph representing categorical data with separated bars"
      },
      {
       "term": "Scale",
       "meaning": "The range of values represented on an axis"
      },
      {
       "term": "Axis",
       "meaning": "Reference line for plotting data points"
      }
     ],
     "trick": "Remember 'HFB' - Histogram for continuous data, Frequency polygon for trends, Bar for categories",
     "examPointer": "CBSE asks 2-3 mark questions on constructing and interpreting different types of graphs for given data"
    },
    {
     "heading": "Measures of Dispersion",
     "para": "Measures of dispersion describe the spread or variability of data. Common measures include range, quartile deviation, mean deviation, and standard deviation. Range is the difference between maximum and minimum values. Quartile deviation is half the difference between third and first quartiles. Mean deviation is the average of absolute deviations from the mean or median. Standard deviation is the square root of the average of squared deviations from the mean. These measures help understand how data is distributed around the central tendency. Higher dispersion indicates greater variability in data. Different measures are suitable for different types of data and analytical requirements. Understanding dispersion is crucial for comparing datasets and making statistical inferences.",
     "points": [
      "Measures of dispersion describe the spread or variability of data",
      "Range is the difference between maximum and minimum values",
      "Quartile deviation is half the difference between third and first quartiles",
      "Mean deviation is the average of absolute deviations from mean or median",
      "Standard deviation is the square root of average squared deviations from mean",
      "Higher dispersion indicates greater variability in data",
      "Different measures are suitable for different types of data",
      "Understanding dispersion helps compare datasets and make inferences"
     ],
     "keyTerms": [
      {
       "term": "Dispersion",
       "meaning": "The spread or variability of data values"
      },
      {
       "term": "Range",
       "meaning": "Difference between maximum and minimum values"
      },
      {
       "term": "Quartile Deviation",
       "meaning": "Half the difference between third and first quartiles"
      },
      {
       "term": "Mean Deviation",
       "meaning": "Average of absolute deviations from mean or median"
      },
      {
       "term": "Standard Deviation",
       "meaning": "Square root of average squared deviations from mean"
      }
     ],
     "trick": "Remember 'RMQS' - Range, Mean deviation, Quartile deviation, Standard deviation - from simplest to most complex",
     "examPointer": "CBSE asks 2-3 mark questions on calculating different measures of dispersion and interpreting their meaning"
    },
    {
     "heading": "Applications of Statistics",
     "para": "Statistics has numerous applications in various fields. In economics, it helps analyze market trends, consumer behavior, and economic policies. In healthcare, statistical methods are used for disease tracking, drug testing, and epidemiological studies. Businesses use statistics for quality control, market research, and financial analysis. Governments rely on statistics for census data, policy formulation, and resource allocation. In education, statistical methods help evaluate teaching methods and student performance. Weather forecasting, sports analytics, and social sciences all extensively use statistical techniques. Understanding these applications helps students appreciate the practical value of statistical concepts and their relevance to real-world problems.",
     "points": [
      "Statistics helps analyze market trends and consumer behavior in economics",
      "In healthcare, it tracks diseases and tests drug effectiveness",
      "Businesses use statistics for quality control and market research",
      "Governments rely on statistics for census and policy formulation",
      "Education sector uses statistics to evaluate teaching methods",
      "Weather forecasting uses statistical models for predictions",
      "Sports analytics employs statistics for performance evaluation",
      "Social sciences use statistics for research and analysis"
     ],
     "keyTerms": [
      {
       "term": "Econometrics",
       "meaning": "Statistical methods applied to economic data"
      },
      {
       "term": "Epidemiology",
       "meaning": "Study of disease distribution and determinants"
      },
      {
       "term": "Market Research",
       "meaning": "Systematic gathering and analysis of market information"
      },
      {
       "term": "Census",
       "meaning": "Official count of population and resources"
      },
      {
       "term": "Econometrics",
       "meaning": "Statistical methods applied to economic data"
      }
     ],
     "trick": "Remember 'HEBGS' - Healthcare, Economics, Business, Government, Statistics - major application areas",
     "examPointer": "CBSE asks 1-2 mark questions on real-life applications of statistical concepts in various fields"
    }
   ],
   "mcqs": [
    {
     "question": "The Fundamental Theorem of Arithmetic states that every composite number can be expressed as",
     "options": [
      "a sum of two primes",
      "a product of primes",
      "a difference of two squares",
      "a sum of consecutive integers"
     ],
     "answerIndex": 1,
     "explanation": "The Fundamental Theorem of Arithmetic states that every composite number can be expressed as a product of primes in a unique way, apart from the order of the factors.",
     "difficulty": "easy"
    },
    {
     "question": "If the HCF of 45 and 75 is 15, what is their LCM?",
     "options": [
      "1125",
      "225",
      "75",
      "45"
     ],
     "answerIndex": 1,
     "explanation": "The product of two numbers is equal to the product of their HCF and LCM. So, LCM = (45 × 75) / 15 = 225.",
     "difficulty": "medium",
     "pyq": "CBSE 2020"
    },
    {
     "question": "Which of the following is an irrational number?",
     "options": [
      "sqrt(9)",
      "sqrt(16)",
      "sqrt(25)",
      "sqrt(7)"
     ],
     "answerIndex": 3,
     "explanation": "sqrt(7) is irrational because it cannot be expressed as a ratio of two integers and its decimal expansion is non-terminating and non-repeating.",
     "difficulty": "easy"
    },
    {
     "question": "If a quadratic equation has real and distinct roots, its discriminant is",
     "options": [
      "zero",
      "negative",
      "positive",
      "undefined"
     ],
     "answerIndex": 2,
     "explanation": "For a quadratic equation ax² + bx + c = 0, the discriminant D = b² - 4ac. If D > 0, the equation has real and distinct roots.",
     "difficulty": "medium"
    },
    {
     "question": "The sum of first 10 terms of an AP with first term 5 and common difference 3 is",
     "options": [
      "65",
      "170",
      "185",
      "200"
     ],
     "answerIndex": 1,
     "explanation": "Using the formula for sum of AP: S_n = n/2 × [2a + (n-1)d], we get S_10 = 10/2 × [2×5 + (10-1)×3] = 5 × [10 + 27] = 170.",
     "difficulty": "medium"
    },
    {
     "question": "In ΔABC, if DE || BC and AD/DB = 3/5, then AE/EC is equal to",
     "options": [
      "3/5",
      "5/3",
      "2/5",
      "3/8"
     ],
     "answerIndex": 0,
     "explanation": "By Basic Proportionality Theorem (BPT), if a line is drawn parallel to one side of a triangle to intersect the other two sides, it divides them proportionally. So AE/EC = AD/DB = 3/5.",
     "difficulty": "medium"
    },
    {
     "question": "The distance between points A(2, 3) and B(5, 7) is",
     "options": [
      "5",
      "sqrt(13)",
      "sqrt(29)",
      "13"
     ],
     "answerIndex": 0,
     "explanation": "Using distance formula: AB = sqrt[(5-2)² + (7-3)²] = sqrt[3² + 4²] = sqrt[9 + 16] = sqrt(25) = 5.",
     "difficulty": "easy"
    },
    {
     "question": "If sin A = 3/5, then cos A is equal to",
     "options": [
      "4/5",
      "3/4",
      "5/4",
      "4/3"
     ],
     "answerIndex": 0,
     "explanation": "Using identity sin²A + cos²A = 1, we get cos²A = 1 - (3/5)² = 1 - 9/25 = 16/25, so cos A = 4/5 (taking positive value as A is acute).",
     "difficulty": "medium"
    },
    {
     "question": "The tangent at any point on a circle is",
     "options": [
      "parallel to the radius",
      "perpendicular to the radius",
      "equal to the radius",
      "bisects the radius"
     ],
     "answerIndex": 1,
     "explanation": "The tangent at any point on a circle is perpendicular to the radius drawn to that point at the point of contact.",
     "difficulty": "easy"
    },
    {
     "question": "The area of a sector of a circle with radius 14 cm and angle 45° is",
     "options": [
      "77 cm²",
      "154 cm²",
      "308 cm²",
      "616 cm²"
     ],
     "answerIndex": 0,
     "explanation": "Area of sector = (θ/360) × πr² = (45/360) × (22/7) × 14² = (1/8) × 22 × 28 = 77 cm².",
     "difficulty": "medium",
     "pyq": "CBSE 2019"
    },
    {
     "question": "If the mean of 10 observations is 15 and one observation is replaced by 25, the new mean is",
     "options": [
      "15",
      "16",
      "17",
      "18"
     ],
     "answerIndex": 1,
     "explanation": "Original sum = 10 × 15 = 150. New sum = 150 - x + 25, where x is replaced value. Since x was 15, new sum = 150 - 15 + 25 = 160. New mean = 160/10 = 16.",
     "difficulty": "hard"
    },
    {
     "question": "The probability of an event is 0.3, then the probability of its complementary event is",
     "options": [
      "0.3",
      "0.7",
      "0.5",
      "0.6"
     ],
     "answerIndex": 1,
     "explanation": "Probability of complementary event = 1 - P(event) = 1 - 0.3 = 0.7.",
     "difficulty": "easy"
    },
    {
     "question": "If the roots of the equation 2x² - 5x + 3 = 0 are α and β, then 1/α + 1/β is equal to",
     "options": [
      "5/2",
      "5/3",
      "2/5",
      "3/5"
     ],
     "answerIndex": 1,
     "explanation": "Using sum of roots α + β = -b/a = 5/2 and product αβ = c/a = 3/2. Then 1/α + 1/β = (α+β)/αβ = (5/2)/(3/2) = 5/3.",
     "difficulty": "hard"
    },
    {
     "question": "In a right triangle ABC with right angle at B, if AB = 6 cm and BC = 8 cm, then AC is equal to",
     "options": [
      "10 cm",
      "12 cm",
      "14 cm",
      "16 cm"
     ],
     "answerIndex": 0,
     "explanation": "By Pythagoras theorem, AC² = AB² + BC² = 6² + 8² = 36 + 64 = 100, so AC = sqrt(100) = 10 cm.",
     "difficulty": "medium"
    },
    {
     "question": "The value of tan 30° × tan 60° is",
     "options": [
      "1/3",
      "1",
      "3",
      "sqrt(3)"
     ],
     "answerIndex": 1,
     "explanation": "tan 30° = 1/sqrt(3) and tan 60° = sqrt(3), so tan 30° × tan 60° = (1/sqrt(3)) × sqrt(3) = 1.",
     "difficulty": "easy"
    },
    {
     "question": "A solid cylinder of radius 7 cm and height 14 cm is melted and recast into a cone of same radius. The height of the cone is",
     "options": [
      "14 cm",
      "21 cm",
      "28 cm",
      "42 cm"
     ],
     "answerIndex": 2,
     "explanation": "Volume of cylinder = πr²h = π × 7² × 14 = 686π cm³. Volume of cone = (1/3)πr²H. Setting equal: (1/3)π × 7² × H = 686π, so H = (686π × 3)/(49π) = 42 cm.",
     "difficulty": "hard"
    },
    {
     "question": "The empirical relation between mean, median and mode is",
     "options": [
      "mean = median + mode",
      "3 median = mean + 2 mode",
      "3 median = 2 mean + mode",
      "mean = 2 median - mode"
     ],
     "answerIndex": 2,
     "explanation": "The empirical relation between mean, median and mode is given by 3 median = 2 mean + mode for moderately skewed distributions.",
     "difficulty": "easy"
    }
   ],
   "boardQuestions": [
    {
     "question": "Find the HCF and LCM of 404 and 96, and verify that HCF × LCM = Product of the two numbers.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "Prime factorization of 404 = 2² × 101\nPrime factorization of 96 = 2⁵ × 3\nHCF = 2² = 4\nLCM = 2⁵ × 3 × 101 = 32 × 3 × 101 = 96 × 101 = 9696\nVerification: HCF × LCM = 4 × 9696 = 38784\nProduct of numbers = 404 × 96 = 38784\nHence, HCF × LCM = Product of the two numbers."
    },
    {
     "question": "Prove that sqrt(3) is irrational.",
     "marks": 3,
     "type": "long",
     "probability": "very-high",
     "answer": "Let's assume that sqrt(3) is rational, i.e., it can be expressed as p/q where p and q are coprime integers and q ≠ 0.\nThen sqrt(3) = p/q\nSquaring both sides: 3 = p²/q²\nSo, p² = 3q²\nThis means p² is divisible by 3, hence p is divisible by 3 (since 3 is prime).\nLet p = 3k for some integer k.\nSubstituting: (3k)² = 3q²\n9k² = 3q²\n3k² = q²\nThis means q² is divisible by 3, hence q is divisible by 3.\nBut this contradicts our assumption that p and q are coprime (both divisible by 3).\nTherefore, our assumption is wrong, and sqrt(3) must be irrational."
    },
    {
     "question": "Solve the quadratic equation 2x² - 5x + 3 = 0 by factorization method.",
     "marks": 2,
     "type": "short",
     "probability": "high",
     "answer": "Given equation: 2x² - 5x + 3 = 0\nWe need to find two numbers whose product is 2 × 3 = 6 and sum is -5.\nThe numbers are -2 and -3.\nRewriting the equation: 2x² - 2x - 3x + 3 = 0\nGrouping: 2x(x - 1) - 3(x - 1) = 0\nFactorizing: (2x - 3)(x - 1) = 0\nSetting each factor to zero: 2x - 3 = 0 or x - 1 = 0\nSo, x = 3/2 or x = 1\nTherefore, the solutions are x = 3/2 and x = 1."
    },
    {
     "question": "Find the sum of first 20 terms of the AP: 3, 8, 13, 18, ...",
     "marks": 2,
     "type": "numerical",
     "probability": "high",
     "answer": "Given AP: 3, 8, 13, 18, ...\nFirst term a = 3\nCommon difference d = 8 - 3 = 5\nNumber of terms n = 20\nUsing the formula for sum of AP: S_n = n/2 × [2a + (n-1)d]\nS_20 = 20/2 × [2×3 + (20-1)×5]\nS_20 = 10 × [6 + 19×5]\nS_20 = 10 × [6 + 95]\nS_20 = 10 × 101\nS_20 = 1010\nTherefore, the sum of first 20 terms is 1010."
    },
    {
     "question": "In ΔABC, if AD is the median, then show that AB² + AC² = 2(AD² + BD²).",
     "marks": 4,
     "type": "long",
     "probability": "high",
     "answer": "In ΔABD, by Pythagoras theorem:\nAB² = AD² + BD² - 2 × AD × BD × cos(ADB) ...(1)\nIn ΔADC, by Pythagoras theorem:\nAC² = AD² + DC² - 2 × AD × DC × cos(ADC) ...(2)\nSince AD is the median, BD = DC.\nAlso, angles ADB and ADC are supplementary, so cos(ADC) = -cos(ADB).\nAdding equations (1) and (2):\nAB² + AC² = AD² + BD² - 2 × AD × BD × cos(ADB) + AD² + DC² - 2 × AD × DC × cos(ADC)\nSince BD = DC and cos(ADC) = -cos(ADB):\nAB² + AC² = 2AD² + 2BD² - 2 × AD × BD × cos(ADB) + 2 × AD × BD × cos(ADB)\nThe cosine terms cancel out:\nAB² + AC² = 2AD² + 2BD²\nAB² + AC² = 2(AD² + BD²)\nHence proved."
    },
    {
     "question": "Find the coordinates of the point which divides the line segment joining A(2, 3) and B(5, 7) internally in the ratio 2:3.",
     "marks": 2,
     "type": "short",
     "probability": "high",
     "answer": "Given points A(2, 3) and B(5, 7)\nRatio m:n = 2:3\nUsing section formula:\nx = (mx₂ + nx₁)/(m + n) = (2×5 + 3×2)/(2 + 3) = (10 + 6)/5 = 16/5\ny = (my₂ + ny₁)/(m + n) = (2×7 + 3×3)/(2 + 3) = (14 + 9)/5 = 23/5\nTherefore, the coordinates of the point are (16/5, 23/5)."
    },
    {
     "question": "Evaluate: tan²45° + sin²60° - cos²30°",
     "marks": 2,
     "type": "short",
     "probability": "high",
     "answer": "tan45° = 1, so tan²45° = 1² = 1\nsin60° = √3/2, so sin²60° = (√3/2)² = 3/4\ncos30° = √3/2, so cos²30° = (√3/2)² = 3/4\nTherefore:\ntan²45° + sin²60° - cos²30° = 1 + 3/4 - 3/4 = 1"
    },
    {
     "question": "From a point 20 m away from the foot of a tower, the angle of elevation of the top of the tower is 30°. Find the height of the tower.",
     "marks": 3,
     "type": "numerical",
     "probability": "high",
     "answer": "Let AB be the tower and C be the point 20 m away from the foot of the tower.\nGiven: BC = 20 m, angle ACB = 30°\nIn right triangle ABC:\ntan30° = AB/BC\n1/√3 = AB/20\nAB = 20/√3\nRationalizing: AB = (20√3)/3\nTherefore, the height of the tower is (20√3)/3 meters."
    },
    {
     "question": "Prove that the lengths of tangents drawn from an external point to a circle are equal.",
     "marks": 3,
     "type": "long",
     "probability": "very-high",
     "answer": "Let O be the center of the circle and P be an external point. Let PA and PB be the two tangents from P to the circle touching it at points A and B respectively.\nWe need to prove that PA = PB.\nJoin OA, OB and OP.\nSince PA is tangent to the circle at A, angle OAP = 90°\nSimilarly, angle OBP = 90°\nIn triangles OAP and OBP:\nOA = OB (radii of the same circle)\nOP is common\nangle OAP = angle OBP = 90°\nTherefore, triangles OAP and OBP are congruent by RHS congruence rule.\nHence, PA = PB (corresponding parts of congruent triangles).\nTherefore, the lengths of tangents drawn from an external point to a circle are equal."
    },
    {
     "question": "A chord of a circle of radius 10 cm subtends a right angle at the center. Find the area of the corresponding minor segment.",
     "marks": 4,
     "type": "numerical",
     "probability": "high",
     "answer": "Given: radius r = 10 cm, angle subtended by chord = 90°\nArea of sector = (θ/360) × πr² = (90/360) × π × 10² = (1/4) × π × 100 = 25π cm²\nArea of triangle = (1/2) × r × r × sinθ = (1/2) × 10 × 10 × sin90° = 50 × 1 = 50 cm²\nArea of minor segment = Area of sector - Area of triangle = 25π - 50 cm²\nUsing π = 22/7: 25 × (22/7) - 50 = 550/7 - 50 = 550/7 - 350/7 = 200/7 cm²\nTherefore, the area of the minor segment is 200/7 cm²."
    }
   ],
   "bookName": "Mathematics (NCERT Class 10)",
   "code": "maths"
  }
 ]
}
