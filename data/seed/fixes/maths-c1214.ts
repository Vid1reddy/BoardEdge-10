// Hand-written fix seed for NCERT Class 10 Mathematics chapters 12-14 (Surface Areas and Volumes, Statistics, Probability). Format-compatible with data/seed/gen files.
export default {
  "code": "maths",
  "name": "Mathematics",
  "bookName": "Mathematics (NCERT Class 10)",
  "weightageMarks": 80,
  "chapters": [
    {
      "number": 12,
      "title": "Surface Areas and Volumes",
      "summary": "Every board paper asks at least one question that joins two or three solids into a single figure, and this chapter trains you to read such figures, to add only the visible surface areas, and to add volumes with no subtraction at all. It recaps the cylinder, cone, hemisphere and sphere formulas, then handles conversion of solids by melting and recasting, where volume is conserved and everything reduces to one equation. The frustum of a cone gets a full treatment: slant height l = sqrt(h^2 + (R - r)^2), curved surface area pi (R + r) l, total surface area with the two end circles, and volume (1/3) pi h (R^2 + r^2 + Rr). Application questions on tents, toys, capsules, buckets, wells and cost calculations are classified into repeatable frames, and the closing sections list the traps that lose marks every year: hidden joint faces, height versus slant height, diameter versus radius and mixed units. Practise the table of formulas daily; this chapter is pure marks once the figure is read correctly.",
      "weightageMarks": 8,
      "difficulty": "medium",
      "hotTopics": [
        "Surface area of a combination of solids",
        "Volume of a combination of solids",
        "Conversion of solids by melting and recasting",
        "Frustum of a cone: slant height, CSA, TSA and volume",
        "Tents, toys, capsules and buckets: application problems"
      ],
      "sections": [
        {
          "heading": "Combination of Solids: Reading the Figure",
          "para": "Board questions rarely draw the composite solid; they describe it in words, so the first skill is translating a sentence into a labelled sketch. The standard characters are few: a circus tent is a cone fixed on top of a cylinder, a toy is a cone mounted on a hemisphere, a capsule or sweet is a cylinder with hemispherical ends, a bucket is a frustum, and a bird bath is a cylinder with a hemispherical depression cut into its top. In every case the two solids share a common radius at the joint, and the circular faces that touch each other become internal; they are hidden and contribute nothing to the surface area. Before touching a formula, redraw the figure as separate solids, mark the shared radius on each part, and list the visible surfaces in words. Decide early whether the question is about area, with words like cloth, paint or sheet, or about volume, with words like water, capacity or air, because that single decision controls everything that follows.",
          "points": [
            "Exam figures are built from at most two or three standard solids joined face to face along a common circle.",
            "A circus tent is a cone fixed on top of a cylinder, and both parts share the same radius.",
            "A toy is usually a cone mounted on a hemisphere, while a capsule or sweet is a cylinder with hemispherical ends.",
            "Faces where two solids meet become internal and are never painted, covered or counted.",
            "Mark the common radius first; most wrong answers begin with mismatched radii at the joint.",
            "Redraw the figure as separate solids and list every visible surface in words before writing any formula.",
            "Verbs decide the operation: cloth, paint or sheet means surface area, while water, capacity or air means volume."
          ],
          "keyTerms": [
            { "term": "Composite solid", "meaning": "A figure made by joining two or more basic solids so that they share a common face or radius." },
            { "term": "Hidden face", "meaning": "A surface covered where two solids join; it contributes nothing to the surface area of the combination." },
            { "term": "Common radius", "meaning": "The single radius shared at the joint of two solids; the first value to mark in any combination figure." }
          ],
          "trick": "Dismantle before you calculate: cone + cylinder = tent, cone + hemisphere = toy, cylinder + 2 hemispheres = capsule. The joint face is always invisible.",
          "examPointer": "Two and three-mark questions describe the figure in words; practise converting each description into a labelled sketch with the shared radius marked before solving."
        },
        {
          "heading": "Surface Area of a Combination of Solids",
          "para": "The governing rule is: add only the surfaces you could actually touch. Recap the single-solid formulas first. A cylinder has curved area 2 pi r h and total area 2 pi r (h + r) when both ends are closed. A cone has curved area pi r l with slant height l = sqrt(h^2 + r^2), and its base circle pi r^2 is added only when it is exposed. A hemisphere has curved area 2 pi r^2 and total area 3 pi r^2; a full sphere has surface area 4 pi r^2. For a tent, a cone standing on a cylinder, the shared circle is hidden, so the cloth area is pi r l + 2 pi r h, with the floor circle added only if the question demands a closed bin. For a toy, a cone on a hemisphere of the same radius, the visible area is pi r l + 2 pi r^2. A wooden article made by scooping a hemisphere from each end of a solid cylinder has area 2 pi r h + 4 pi r^2, because the scooping replaces two flat circles with two curved caps. Never add the full TSAs of the parts; that double counts the hidden joint.",
          "points": [
            "The surface area of a combination is the sum of the areas of only the visible surfaces.",
            "Cylinder: CSA = 2 pi r h; with one end closed add pi r^2; with both ends closed TSA = 2 pi r (h + r).",
            "Cone: CSA = pi r l with slant height l = sqrt(h^2 + r^2); add the base pi r^2 only if it is exposed.",
            "Hemisphere: CSA = 2 pi r^2 and TSA = 3 pi r^2, while a full sphere has surface area 4 pi r^2.",
            "Cone on cylinder (tent): area = pi r l + 2 pi r h, because the join circle is hidden.",
            "Cone on hemisphere (toy): area = pi r l + 2 pi r^2 with the same radius r throughout.",
            "Cylinder with a hemisphere scooped from each end: area = 2 pi r h + 4 pi r^2, since flat ends become curved caps."
          ],
          "keyTerms": [
            { "term": "Curved surface area (CSA)", "meaning": "The area of only the curved part of a solid, excluding any flat circular faces." },
            { "term": "Total surface area (TSA)", "meaning": "The CSA plus the area of every flat face that is actually exposed on the outside." },
            { "term": "Slant height", "meaning": "l = sqrt(h^2 + r^2), the distance from the apex of a cone to any point on its rim." }
          ],
          "trick": "At every join, one pi r^2 dies: cone on cylinder counts pi r l + 2 pi r h, hemisphere on cylinder counts 2 pi r^2 + 2 pi r h. Never use the full TSA of both parts.",
          "examPointer": "Painting, canvas and metal-sheet questions are surface-area questions; audit every line of your addition against the sketch, since one forgotten hidden circle ruins the total."
        },
        {
          "heading": "Volume of a Combination of Solids",
          "para": "Volume behaves more kindly than area: the volume of a solid built by joining parts is exactly the sum of the volumes of the parts, and nothing is subtracted, because the shared face has zero volume. So the rule for the volume of combination of solids is pure addition. The basic stock is: cylinder pi r^2 h, cone (1/3) pi r^2 h, hemisphere (2/3) pi r^3, sphere (4/3) pi r^3. A toy of cone on hemisphere with common radius r has volume (1/3) pi r^2 h + (2/3) pi r^3. A capsule, a cylinder with two hemispherical ends, has volume pi r^2 h + (4/3) pi r^3, the two caps combining into one full sphere. If a conical cavity is hollowed out of a cylinder of the same base and height, the remaining solid is the cylinder minus the cone, the one situation where subtraction appears, since material is genuinely removed. Watch units throughout: 1 litre = 1000 cm^3 and 1 m^3 = 1000000 cm^3, so a 10 cm cube holds exactly one litre.",
          "points": [
            "Volumes add: the volume of a combination equals the sum of the volumes of its parts.",
            "Nothing is subtracted for a join, because the shared face has no volume; subtraction appears only when material is removed, as in a hollowed cavity.",
            "Stock formulas: cylinder pi r^2 h, cone (1/3) pi r^2 h, hemisphere (2/3) pi r^3 and sphere (4/3) pi r^3.",
            "Toy of cone on hemisphere with common radius r: V = (1/3) pi r^2 h + (2/3) pi r^3.",
            "Capsule of cylinder with two hemispherical ends: V = pi r^2 h + (4/3) pi r^3, the caps forming one full sphere.",
            "A cone inside a cylinder of the same base and height occupies exactly one third, so the leftover solid is two thirds.",
            "Convert before comparing: 1 litre = 1000 cm^3 and 1 m^3 = 1000000 cm^3."
          ],
          "keyTerms": [
            { "term": "Additivity of volume", "meaning": "The principle that the volume of a joined solid is the sum of the volumes of its parts." },
            { "term": "Capacity", "meaning": "The volume of the interior of a vessel, usually reported in litres or cubic centimetres." },
            { "term": "Cubic unit", "meaning": "The unit of volume such as cm^3 or m^3; one cubic centimetre fills a cube of side 1 cm." }
          ],
          "trick": "Cone is one third of its cylinder and hemisphere is two thirds of its sphere: the twins (1/3) and (2/3) run this entire chapter.",
          "examPointer": "Water, milk, juice and air-space questions are volume questions; the conversion 1 litre = 1000 cm^3 is itself a favourite one-marker."
        },
        {
          "heading": "Conversion of Solids: Melting and Recasting",
          "para": "Melting, recasting, digging and drawing all change the shape of a material without changing its volume, assuming no wastage, so every such problem reduces to one equation: volume before = volume after. A metallic sphere of radius R melted into a cylinder of radius r and height H satisfies (4/3) pi R^3 = pi r^2 H. A cone of base radius r and height h recast into a sphere satisfies (1/3) pi r^2 h = (4/3) pi R^3. One big sphere of radius R split into n identical small spheres of radius r gives n = (R/r)^3, since volume grows as the cube of the radius. Drawing metal into a wire keeps pi a^2 L constant, where a is the radius of the wire, so a fixed volume stretches into a longer, thinner cylinder and length = volume / (pi a^2). Convert every length to one unit before equating, cancel pi immediately, and express the count of pieces as the total volume divided by the volume of one piece.",
          "points": [
            "Melting changes shape but not volume, so the single governing equation is: volume before = volume after.",
            "A sphere of radius R melted into a cylinder of radius r and height H satisfies (4/3) pi R^3 = pi r^2 H.",
            "A cone melted into a sphere satisfies (1/3) pi r^2 h = (4/3) pi R^3.",
            "One large sphere recast into n small spheres of radius r gives n = (R/r)^3, because volume scales as the cube of the radius.",
            "Drawing metal into a wire keeps pi a^2 L constant, so length = volume / (pi a^2) for a wire of radius a.",
            "Convert all lengths to the same unit before equating any two volumes.",
            "In counting questions, the number of pieces equals the total volume divided by the volume of one piece."
          ],
          "keyTerms": [
            { "term": "Recasting", "meaning": "Pouring melted material into a new mould to form a different solid having the same volume." },
            { "term": "Conservation of volume", "meaning": "The rule that melting and recasting preserve the total volume of the material." },
            { "term": "Wire drawing", "meaning": "Stretching metal into a thin cylinder; the volume stays fixed while the length grows and the radius shrinks." }
          ],
          "trick": "Melt = equate volumes. Counting small pieces? Divide the radii and cube: n = (R/r)^3. Wire? Length = volume divided by cross-section area.",
          "examPointer": "A three-mark melting question expects one clear conservation sentence plus one volume equation; write the sentence to bank the method mark even if arithmetic slips later."
        },
        {
          "heading": "The Frustum of a Cone: Definition and Properties",
          "para": "Slice a right circular cone with a plane parallel to its base and remove the small cone on top: the remaining solid is the frustum of a cone. It has two parallel circular faces, a larger bottom face of radius R and a smaller top face of radius r, joined by a curved wall. The height h is the perpendicular distance between the two faces, and it is not the slant height: the slant height l is measured along the wall and satisfies l = sqrt(h^2 + (R - r)^2), because h, the difference (R - r) and l form a right triangle. The discarded top cone and the original cone are similar, so their radii and heights are in one ratio; this single fact generates every frustum formula. Familiar frustums surround you: buckets, drinking glasses, funnels, lampshades and flower pots. In exam sketches, label R at the bottom, r at the top and h as the vertical gap, and find l before attempting any area or volume calculation.",
          "points": [
            "A frustum is the solid left when a cone is cut by a plane parallel to its base and the top cone is removed.",
            "R denotes the radius of the larger bottom circular end and r the radius of the smaller top end.",
            "The height h is the perpendicular distance between the two parallel circular faces, not a distance along the wall.",
            "The slant height is l = sqrt(h^2 + (R - r)^2), coming from the right triangle formed by h and (R - r).",
            "The removed top cone and the original cone are similar, so their radii and heights are in the same ratio.",
            "Everyday frustums include buckets, glasses, funnels, lampshades and flower pots.",
            "In bucket problems the vessel is usually open at the top, so the top circle is not part of the surface area."
          ],
          "keyTerms": [
            { "term": "Frustum", "meaning": "The part of a cone that remains after the top is cut off by a plane parallel to the base." },
            { "term": "Larger radius (R)", "meaning": "The radius of the bottom circular face of the frustum." },
            { "term": "Smaller radius (r)", "meaning": "The radius of the top circular face of the frustum." }
          ],
          "trick": "Frustum triangle: h and (R - r) sit at right angles, so l = sqrt(h^2 + (R - r)^2). Big cone minus small cone explains every frustum formula.",
          "examPointer": "Questions give any three of R, r, h, l and ask for the fourth; find l first because both frustum area formulas and the sketch need it."
        },
        {
          "heading": "Frustum: Surface Area Formulas",
          "para": "Unrolled flat, the curved wall of a frustum is a ring-like sector, and its area simplifies to CSA = pi (R + r) l: add the two radii, multiply by the slant height and by pi. Adding the flat faces gives the total surface area TSA = pi (R + r) l + pi R^2 + pi r^2 when both circular ends are closed. Bucket questions usually describe an open vessel: an open-top bucket is made from the curved wall plus the bottom circle only, that is pi (R + r) l + pi R^2, while a funnel with no base uses the CSA alone. If a bucket is painted inside and outside, double the curved area to 2 x pi (R + r) l. Read the wording with care: the phrase sheet required to make the bucket asks for exactly the real faces of the object, while the area to be painted follows the painting instruction given. Cost questions finish with cost = rate x area after every length has been converted to metres.",
          "points": [
            "Curved (lateral) surface area of a frustum: CSA = pi (R + r) l.",
            "Total surface area with both ends closed: TSA = pi (R + r) l + pi R^2 + pi r^2.",
            "An open bucket needs the CSA plus the base circle only: area = pi (R + r) l + pi R^2.",
            "A vessel with neither base nor lid, like a funnel, uses the CSA alone.",
            "Painting a bucket inside and outside doubles the curved area to 2 x pi (R + r) l.",
            "Decide from the wording whether to add the base: making a bucket includes its base, painting follows the stated surfaces.",
            "Cost questions: total cost = rate per square metre x area, with all lengths first converted to metres."
          ],
          "keyTerms": [
            { "term": "Lateral surface", "meaning": "The curved wall of the frustum running between the two circular ends." },
            { "term": "Open vessel", "meaning": "A container without a top lid, so the top circle pi r^2 is excluded from the area." },
            { "term": "Rate of painting", "meaning": "The cost per square metre or per square centimetre used to convert an area into a cost." }
          ],
          "trick": "Add the radii, stretch the slant: CSA = pi (R + r) l. Open top means drop the pi r^2 term; the base circle pi R^2 stays.",
          "examPointer": "The classic three-marker is the cost of the plastic or metal sheet for an open bucket: one mark for CSA, one for the base circle, one for the cost."
        },
        {
          "heading": "Frustum: Volume Formula",
          "para": "The volume of a frustum is V = (1/3) pi h (R^2 + r^2 + Rr). To see where it comes from, imagine the full cone of base radius R and height H from which the frustum was cut. The volume of the frustum is the full cone minus the small top cone of radius r and height H - h. Because the two cones are similar, r/R = (H - h)/H; substituting this into the difference (1/3) pi H R^2 - (1/3) pi (H - h) r^2 and simplifying collapses everything into the neat symmetric formula. Symmetry means it does not matter which end you call R and which r. For capacity questions, compute V in cm^3 and divide by 1000 to report the answer in litres. As a sanity check, since the product Rr lies between r^2 and R^2, the frustum volume always lies between the volumes of the two extreme cones, which is a fast way to catch substitution slips in the exam hall.",
          "points": [
            "Volume of a frustum: V = (1/3) pi h (R^2 + r^2 + Rr).",
            "Derivation idea: subtract the smaller top cone from the full large cone, then use similar triangles to eliminate the unknown full height.",
            "By similarity of the two cones, r/R = (H - h)/H, and substituting this converts the difference of cone volumes into the standard formula.",
            "The formula is symmetric in R and r, so it does not matter which circular end is called the top.",
            "Bucket capacity: compute V in cm^3, then divide by 1000 to express it in litres.",
            "Since Rr lies between r^2 and R^2, the frustum volume lies between the volumes of the two extreme cones.",
            "Milk, water and grain questions on a bucket or a tumbler are direct applications of this one formula."
          ],
          "keyTerms": [
            { "term": "Frustum volume", "meaning": "V = (1/3) pi h (R^2 + r^2 + Rr) for end radii R and r and height h." },
            { "term": "Capacity in litres", "meaning": "Litres = volume in cm^3 divided by 1000, for any vessel." },
            { "term": "Similar cones", "meaning": "The removed top cone and the whole cone have radii and heights in the same ratio." }
          ],
          "trick": "Say it as square, square, product: V = (1/3) pi h (R^2 + r^2 + Rr). Swapping R and r changes nothing, so a wrong label cannot hurt you.",
          "examPointer": "Five-mark questions chain frustum volume with a capacity or cost step; write the formula, substitute with units, then convert to litres as a separate displayed step."
        },
        {
          "heading": "Real-Life Application Problems",
          "para": "Applications fall into a small set of verbs. Cloth, canvas, sheet, metal, paint and whitewash are surface-area words: a tent needs the CSA of its cone plus the CSA of its cylinder, and a bucket needs its frustum CSA plus a base circle if it has one. Water, milk, oil, grain, air, capacity and the phrase how much it holds are volume words: the capacity of a barrel or drum comes from the volume formula of its shape, converted to litres by dividing the cm^3 value by 1000. Cost is always the final step: cost = rate x area for coverings and cost = rate x volume for filling. Painting inside and outside doubles the area. A tarpaulin spread under a tent adds the circle pi r^2 to the cloth. Keep the unit of the rate in view, whether per m^2 or per litre, and match it to your units before multiplying, and round only once, at the very end of the solution.",
          "points": [
            "Canvas for a tent: add the CSA of the conical top and the CSA of the cylindrical wall.",
            "Water held by a vessel: compute the volume and convert cm^3 to litres by dividing by 1000.",
            "Painting or whitewashing: use surface area, and double it when both inside and outside are painted.",
            "Cost questions: cost = rate x area for cloth, paint or sheet, and cost = rate x volume for filling goods.",
            "Capacity of a barrel, drum or bucket: apply the volume formula of the matching solid, then convert to litres.",
            "A tarpaulin or floor covering under a tent adds the base circle pi r^2 to the cloth needed.",
            "Round off only at the end, and keep the unit of the rate, per m^2 or per litre, in view throughout."
          ],
          "keyTerms": [
            { "term": "Canvas", "meaning": "The cloth covering a tent; its area equals the visible curved surface area of the tent." },
            { "term": "Capacity", "meaning": "The interior volume of a container, expressed in litres or cubic metres." },
            { "term": "Rate", "meaning": "The cost per unit area or per unit volume quoted in the question." }
          ],
          "trick": "Verb test: PAINT, COVER, STITCH need area; FILL, HOLD, POUR need volume. Cost always comes last: rate x area or rate x volume.",
          "examPointer": "Application questions award method marks for choosing the right formula; one written line such as we need surface area because the cloth covers surfaces secures them."
        },
        {
          "heading": "Common Errors and Exam Traps",
          "para": "Marks in this chapter are lost in predictable places, so audit your work against this list. First, confusing TSA with CSA: adding a base circle that the question excluded, or forgetting one that it required. Second, ignoring hidden faces: the circle where a cone meets a cylinder, or a hemisphere meets a cylinder, is internal and must never be counted. Third, wrong slant height: using h where l = sqrt(h^2 + r^2) is needed, or building the frustum triangle with (R + r) instead of (R - r). Fourth, using the diameter as the radius; always halve it first. Fifth, unit slips: mixing cm and m inside one equation, or quoting a cost with the area in cm^2 while the rate is per m^2. Sixth, careless pi handling: use 22/7 when the radii are multiples of 7, otherwise 3.14 or the value the question specifies, and never round in the middle of a calculation. Finally, write the unit and the demanded rounding on the answer line, since an unlabelled, unrounded number loses the last mark.",
          "points": [
            "Adding the full TSA of both parts is the classic error; every hidden joint face must be dropped.",
            "Using h where the slant height l is required, in cone and frustum formulas, is the second most common slip.",
            "Halve the diameter before using any formula; substituting the diameter as the radius is a guaranteed wrong answer.",
            "Mixing cm and m in one equation ruins the result; convert everything to the unit of the given rate first.",
            "Use pi = 22/7 when radii are multiples of 7, otherwise use 3.14 or the value specified in the question.",
            "Round only in the final step, and follow the demanded precision such as correct to two decimal places.",
            "Write the unit, cm^2, m^3 or litres, with the final answer; an unlabelled number loses the last mark."
          ],
          "keyTerms": [
            { "term": "Hidden face", "meaning": "The circular join of two solids, which must not be counted in any surface area." },
            { "term": "Unit consistency", "meaning": "Keeping every length in one unit before substituting into the formulas." },
            { "term": "Rounding", "meaning": "Adjusting the final numeric answer to the precision the question demands, and only then." }
          ],
          "trick": "Five ticks before the answer: radius halved, slant used, hidden face dropped, units matched, unit written. Each tick rescues a mark.",
          "examPointer": "Examiners deliberately plant diameters and mixed units; the topper's reflex is to halve and convert first, then substitute into the formulas."
        },
        {
          "heading": "Exam Strategy: 12 High-Frequency Problem Types",
          "para": "Twelve question frames cover almost every problem ever set from this chapter. One: tent, a cone on a cylinder, with a canvas cost. Two: toy, a cone on a hemisphere, for area or volume. Three: capsule or sweet shaped as a cylinder with two hemispherical ends. Four: wooden article made by scooping a hemisphere from each end of a cylinder. Five: scooped block, a hemispherical depression or conical cavity cut from a cuboid or cylinder. Six: bucket, a frustum open at the top, with a sheet-cost question. Seven: bucket capacity in litres. Eight: melting and recasting between sphere, cone and cylinder. Nine: metal drawn into a wire of fixed volume. Ten: a solid submerged in a cylinder full of water, asking for the water left. Eleven: ratios of volumes of solids sharing a base and height, the classic answer being 1 : 2 : 3. Twelve: one-mark formula recall and assertion-reason items. Learn the opening move of each frame from the points below and the exam becomes recognition, not invention.",
          "points": [
            "Tent frame: compute the slant height first, add pi r l + 2 pi r h, then multiply by the rate; never include the floor.",
            "Toy frame: keep one radius throughout and state the cone height as total height minus hemisphere radius before using l = sqrt(h^2 + r^2).",
            "Capsule or sweet frame: shorten the cylinder by twice the radius, then add one full sphere's volume for the two caps.",
            "Scooped frame (wooden article, bird bath, conical cavity): replace removed flat faces with curved walls and subtract removed volume.",
            "Bucket frame: find l = sqrt(h^2 + (R - r)^2) once; the sheet area adds the base circle, while capacity uses only R, r and h.",
            "Melting and wire frames: equate volumes in one equation, cancel pi at once, and cube the radius ratio when counting small pieces.",
            "Submerged-solid frame: water left = volume of the full cylinder minus the volume of the solid, both computed with the same value of pi.",
            "Recall and ratio frames: memorise the ratio 1 : 2 : 3 for cone, hemisphere and cylinder on equal bases and equal height, and all stock formulas verbatim."
          ],
          "keyTerms": [
            { "term": "Problem type", "meaning": "A recognised frame of question whose opening steps are standard and reusable." },
            { "term": "Method mark", "meaning": "The mark awarded for choosing the correct formula and setup, independent of the final number." },
            { "term": "Two-step chain", "meaning": "A long question chaining area with cost, or volume with litres, where each step earns separate marks." }
          ],
          "trick": "Name the frame in one word - tent, toy, capsule, scoop, bucket, melt, wire, dip, ratio, recall - and the formula chain appears with it. The ratio 1 : 2 : 3 wins every proportion item.",
          "examPointer": "Long questions usually chain two frames, such as bucket capacity plus cost, or melting plus a count of pieces; split the solution into named steps so each frame earns its own marks."
        }
      ],
      "mcqs": [
        { "question": "The curved surface area of a right circular cylinder of radius r and height h is:", "options": ["pi r h", "2 pi r h", "2 pi r (h + r)", "pi r^2 h"], "answerIndex": 1, "explanation": "A cylinder unrolls into a rectangle of width equal to the circumference 2 pi r and height h, so its curved area is 2 pi r h; 2 pi r (h + r) is the total surface area.", "difficulty": "easy" },
        { "question": "The slant height of a right circular cone with base radius r and height h is:", "options": ["h + r", "sqrt(h^2 + r^2)", "sqrt(h^2 - r^2)", "sqrt(h r)"], "answerIndex": 1, "explanation": "The radius, the vertical height and the slant height form a right triangle inside the cone, so by the Pythagoras theorem l = sqrt(h^2 + r^2).", "difficulty": "easy" },
        { "question": "The volume of a sphere of radius r is:", "options": ["(4/3) pi r^3", "(2/3) pi r^3", "4 pi r^2", "(1/3) pi r^2 h"], "answerIndex": 0, "explanation": "A sphere of radius r has volume (4/3) pi r^3; 4 pi r^2 is its surface area and (2/3) pi r^3 is the volume of only half the sphere, that is, a hemisphere.", "difficulty": "easy" },
        { "question": "The total surface area of a solid hemisphere of radius r is:", "options": ["2 pi r^2", "3 pi r^2", "4 pi r^2", "pi r^2"], "answerIndex": 1, "explanation": "A solid hemisphere shows both its curved half-sphere of area 2 pi r^2 and its flat circular base of area pi r^2, giving a total of 3 pi r^2.", "difficulty": "easy", "pyq": "CBSE 2019" },
        { "question": "A toy is a cone of radius r and height h mounted on a hemisphere of radius r. Its volume is:", "options": ["(1/3) pi r^2 h + (2/3) pi r^3", "(1/3) pi r^2 h + (4/3) pi r^3", "pi r^2 h + (2/3) pi r^3", "(1/3) pi r^2 h - (2/3) pi r^3"], "answerIndex": 0, "explanation": "Volumes add with no subtraction: the cone contributes (1/3) pi r^2 h and the hemisphere (2/3) pi r^3, while the shared circular face has no volume at all.", "difficulty": "medium" },
        { "question": "The volume of a frustum of a cone with end radii R and r and height h is:", "options": ["(1/3) pi h (R^2 + r^2 + Rr)", "(1/3) pi h (R - r)", "pi h (R^2 + r^2)", "(1/3) pi h (R + r) l"], "answerIndex": 0, "explanation": "Subtracting the removed top cone from the full cone and simplifying with similar triangles gives V = (1/3) pi h (R^2 + r^2 + Rr); the last option wrongly mixes an area term with a volume.", "difficulty": "medium", "pyq": "CBSE 2020" },
        { "question": "The slant height of a frustum with height h and end radii R and r is:", "options": ["sqrt(h^2 + (R - r)^2)", "sqrt(h^2 + (R + r)^2)", "h + (R - r)", "sqrt(h^2 + R r)"], "answerIndex": 0, "explanation": "The height, the difference of the radii (R - r) and the slant height form a right triangle, so l = sqrt(h^2 + (R - r)^2); using (R + r) here is the standard trap.", "difficulty": "medium" },
        { "question": "The curved surface area of a frustum with end radii R and r and slant height l is:", "options": ["pi (R + r) l", "pi (R - r) l", "pi R r l", "2 pi (R + r) l"], "answerIndex": 0, "explanation": "Unrolled flat, the curved wall is the difference of two sectors, which simplifies to pi (R + r) l; remember to add the two radii, not subtract them.", "difficulty": "medium" },
        { "question": "A solid metallic sphere of radius 2 cm is melted and recast into smaller spheres of radius 1 cm. The number of small spheres formed is:", "options": ["2", "4", "8", "16"], "answerIndex": 2, "explanation": "Melting conserves total volume, and volume scales as the cube of the radius, so the count is (2/1)^3 = 8; adding radii instead of cubing them gives the wrong answer 2.", "difficulty": "medium" },
        { "question": "One litre equals:", "options": ["100 cm^3", "1000 cm^3", "10000 cm^3", "1 m^3"], "answerIndex": 1, "explanation": "The capacity conversions to remember are 1 litre = 1000 cm^3 and 1 m^3 = 1000000 cm^3 = 1000 litres; a 10 cm cube holds exactly one litre.", "difficulty": "easy" },
        { "question": "A cone, a hemisphere and a cylinder stand on equal bases and have the same height. The ratio of their volumes is:", "options": ["1 : 2 : 3", "1 : 3 : 2", "3 : 2 : 1", "1 : 1 : 1"], "answerIndex": 0, "explanation": "With common radius r and common height r, the volumes are (1/3) pi r^3, (2/3) pi r^3 and pi r^3, so the ratio is 1 : 2 : 3 after multiplying by 3.", "difficulty": "medium", "pyq": "CBSE 2019" },
        { "question": "A bucket in the shape of a frustum is open at the top. The area of metal sheet used to make it is:", "options": ["pi (R + r) l", "pi (R + r) l + pi R^2", "pi (R + r) l + pi r^2", "pi (R + r) l + pi R^2 + pi r^2"], "answerIndex": 1, "explanation": "An open-top bucket needs its curved wall pi (R + r) l plus the base circle of the larger end pi R^2; the top circle pi r^2 is absent because the bucket is open.", "difficulty": "medium" },
        { "question": "The curved surface area of a cone with radius 7 cm and height 24 cm is (pi = 22/7):", "options": ["550 cm^2", "528 cm^2", "704 cm^2", "1100 cm^2"], "answerIndex": 0, "explanation": "The slant height is l = sqrt(49 + 576) = sqrt(625) = 25 cm, so CSA = (22/7) x 7 x 25 = 550 cm^2; the 7-24-25 right triangle is worth memorising.", "difficulty": "medium" },
        { "question": "A wooden article is made by scooping out a hemisphere from each end of a solid cylinder. Its total surface area is:", "options": ["2 pi r h + 2 pi r^2", "2 pi r h + 4 pi r^2", "2 pi r h", "pi r h + 4 pi r^2"], "answerIndex": 1, "explanation": "The two flat circular ends are scooped away and replaced by curved hemispherical surfaces of area 2 pi r^2 each, so the total becomes 2 pi r h + 4 pi r^2.", "difficulty": "medium", "pyq": "CBSE 2023" },
        { "question": "When a solid is melted and recast into another shape, the quantity that remains unchanged is its:", "options": ["surface area", "volume", "height", "slant height"], "answerIndex": 1, "explanation": "Melting redistributes the same material, so the volume is conserved; the surface area generally changes, which is why areas can never be equated in such problems.", "difficulty": "easy" },
        { "question": "A tent is a cone standing on a cylinder of the same radius. The quantity of canvas needed to make it equals:", "options": ["CSA of cone + CSA of cylinder", "TSA of cone + TSA of cylinder", "CSA of cone only", "volume of cone + volume of cylinder"], "answerIndex": 0, "explanation": "Only visible cloth counts: the conical top pi r l and the cylindrical wall 2 pi r h; the circular join and the ground-level base need no canvas.", "difficulty": "medium" }
      ],
      "boardQuestions": [
        { "question": "Write the formulas for the curved surface area and the total surface area of a frustum of a cone, explaining every symbol used.", "marks": 1, "type": "short", "probability": "high", "answer": "For a frustum with larger end radius R, smaller end radius r and slant height l, the curved (lateral) surface area is CSA = pi (R + r) l. Here l is the slant height given by l = sqrt(h^2 + (R - r)^2), where h is the perpendicular height between the two parallel circular ends. If both circular ends are closed, the total surface area is TSA = pi (R + r) l + pi R^2 + pi r^2, that is, the curved wall plus the bottom circle pi R^2 plus the top circle pi r^2. For an open vessel such as a bucket, the top circle is omitted, so the sheet area is pi (R + r) l + pi R^2. The value of pi is taken as 22/7 or 3.14 according to the direction in the question." },
        { "question": "A toy is in the form of a cone of radius 3.5 cm mounted on a hemisphere of the same radius. The total height of the toy is 15.5 cm. Find its total surface area. (pi = 22/7)", "marks": 2, "type": "short", "probability": "high", "answer": "The hemisphere has radius 3.5 cm, so it occupies 3.5 cm of the total height, leaving the cone height h = 15.5 - 3.5 = 12 cm. First find the slant height: l = sqrt(h^2 + r^2) = sqrt(144 + 12.25) = sqrt(156.25) = 12.5 cm. The visible surfaces are the curved cone and the curved hemisphere, since the circle where they meet is hidden. Area of the cone = pi r l = (22/7) x 3.5 x 12.5 = 137.5 cm^2. Area of the hemisphere = 2 pi r^2 = 2 x (22/7) x 3.5 x 3.5 = 77 cm^2. Total surface area of the toy = 137.5 + 77 = 214.5 cm^2." },
        { "question": "A cone, a hemisphere and a cylinder stand on equal bases and have the same height. Show that the ratio of their volumes is 1 : 2 : 3.", "marks": 2, "type": "short", "probability": "high", "answer": "Let the common base radius be r. Since the solids have the same height and the height of a hemisphere equals its radius, the common height is r. Volume of the cone = (1/3) pi r^2 h = (1/3) pi r^3. Volume of the hemisphere = (2/3) pi r^3. Volume of the cylinder = pi r^2 h = pi r^3. Taking the common factor pi r^3, the ratio is 1/3 : 2/3 : 1, and multiplying all three terms by 3 gives the ratio 1 : 2 : 3. This one ratio answers many one-mark and two-mark items, provided you first show clearly that the common height equals the radius r." },
        { "question": "A tent is in the shape of a cylinder surmounted by a conical top. The cylinder has base radius 3 m and height 4 m, and the cone has the same radius with height 4 m. Find the area of canvas required for the tent and the volume of air inside it. (pi = 22/7)", "marks": 3, "type": "long", "probability": "high", "answer": "Here r = 3 m, cylinder height 4 m and cone height 4 m. Slant height of the cone: l = sqrt(4^2 + 3^2) = sqrt(16 + 9) = 5 m. The canvas covers only visible surfaces, the cylindrical wall plus the conical top. CSA of cylinder = 2 pi r h = 2 x (22/7) x 3 x 4 = 528/7, about 75.43 m^2. CSA of cone = pi r l = (22/7) x 3 x 5 = 330/7, about 47.14 m^2. Total canvas = 75.43 + 47.14 = 122.57 m^2, exactly 39 pi m^2; the circular join and the floor are excluded. Volume of air = volume of cylinder + volume of cone = pi r^2 h + (1/3) pi r^2 h = (22/7) x 9 x 4 + (1/3) x (22/7) x 9 x 4 = 113.14 + 37.71 = 150.86 m^3, exactly 48 pi m^3." },
        { "question": "Solid metallic spheres of radii 6 cm, 8 cm and 10 cm are melted and recast into a single solid sphere. Find the diameter of the new sphere.", "marks": 3, "type": "long", "probability": "high", "answer": "Melting conserves total volume, so the volume of the big sphere equals the sum of the three volumes. Using V = (4/3) pi r^3, the sum of volumes is (4/3) pi (6^3 + 8^3 + 10^3) = (4/3) pi (216 + 512 + 1000) = (4/3) pi x 1728. Let the new sphere have radius R. Then (4/3) pi R^3 = (4/3) pi x 1728, so R^3 = 1728, giving R = 12 cm. Hence the diameter of the new sphere is 24 cm. Notice the shortcut: the common factor (4/3) pi cancels, leaving R^3 = 6^3 + 8^3 + 10^3, so the cubes of the radii add; the radii themselves never add." },
        { "question": "A solid right circular cone of height 24 cm and base radius 6 cm is melted and recast into a sphere. Find the radius of the sphere and name the principle used.", "marks": 3, "type": "long", "probability": "medium", "answer": "Principle: when a solid is melted and recast, its volume remains the same. Volume of the cone = (1/3) pi r^2 h = (1/3) x pi x 36 x 24 = 288 pi cm^3. Let the sphere have radius R. Its volume is (4/3) pi R^3. Equating: (4/3) pi R^3 = 288 pi. Cancel pi and multiply both sides by 3/4: R^3 = 288 x 3/4 = 216, so R = cube root of 216 = 6 cm. The sphere therefore has radius 6 cm, here equal to the base radius of the cone. In every melting question, state the conservation of volume first, then equate the two volume expressions, cancelling pi and constant factors early to keep the arithmetic light." },
        { "question": "A medicine capsule is in the shape of a cylinder of diameter 5 mm with two hemispheres stuck to each of its ends. The total length of the capsule is 14 mm. Find its approximate volume.", "marks": 3, "type": "long", "probability": "medium", "answer": "The diameter is 5 mm, so the radius of the cylinder and of each hemisphere is r = 2.5 mm. Each hemisphere contributes its radius to the length, so the cylindrical part has length 14 - 2 x 2.5 = 9 mm. Volume of the cylinder = pi r^2 h = pi x 6.25 x 9 = 56.25 pi mm^3. The two hemispheres together form one full sphere of radius 2.5 mm, with volume (4/3) pi r^3 = (4/3) pi x 15.625 = 20.83 pi mm^3. Total volume = 56.25 pi + 20.83 pi = 77.08 pi, which is about 77.08 x 3.1416 = 242.2 mm^3, that is approximately 0.242 cm^3. The two key steps are halving the diameter first and shortening the cylinder by twice the radius before applying pi r^2 h." },
        { "question": "A well of diameter 3 m is dug 14 m deep. The earth taken out is spread evenly all around the well to form a circular embankment 4 m wide. Find the height of the embankment.", "marks": 3, "type": "long", "probability": "medium", "answer": "The volume of earth dug out equals the volume of the cylindrical well: pi x 1.5^2 x 14 = pi x 2.25 x 14 = 31.5 pi m^3. This earth forms a hollow circular ring around the well, with inner radius 1.5 m and outer radius 1.5 + 4 = 5.5 m. Area of the ring = pi (5.5^2 - 1.5^2) = pi (30.25 - 2.25) = 28 pi m^2. If the embankment has height H, its volume is 28 pi x H. Equating the volumes of earth: 28 pi H = 31.5 pi, so H = 31.5/28 = 1.125 m. The embankment is therefore 1.125 m high. This is a conversion-of-solid problem: the shape changes but the volume of earth does not." },
        { "question": "A bucket is in the form of a frustum of a cone with the radii of its circular ends 14 cm and 7 cm and its height 24 cm. Find (i) the area of the metal sheet used to make the open bucket and (ii) its capacity in litres.", "marks": 5, "type": "long", "probability": "high", "answer": "Here R = 14 cm, r = 7 cm and h = 24 cm. Slant height l = sqrt(h^2 + (R - r)^2) = sqrt(576 + 49) = sqrt(625) = 25 cm. (i) The bucket is open at the top, so the sheet covers the curved wall plus the bottom circle. CSA = pi (R + r) l = (22/7) x 21 x 25 = 1650 cm^2. Base circle = pi R^2 = (22/7) x 196 = 616 cm^2. Total sheet = 1650 + 616 = 2266 cm^2. (ii) Capacity = (1/3) pi h (R^2 + r^2 + Rr) = (1/3) x (22/7) x 24 x (196 + 49 + 98) = (1/3) x (22/7) x 24 x 343. Since 24/3 = 8 and 343/7 = 49, the capacity = 22 x 8 x 49 = 8624 cm^3. Dividing by 1000, the bucket holds 8.624 litres. Both parts use the same l, so compute the slant height first and reuse it." },
        { "question": "A solid consisting of a right circular cone of height 120 cm and radius 60 cm standing on a hemisphere of radius 60 cm is placed upright in a right circular cylinder full of water, with radius 60 cm and height 180 cm, such that it touches the bottom. Find the volume of water left in the cylinder. (pi = 3.14)", "marks": 5, "type": "long", "probability": "high", "answer": "Volume of the solid = volume of cone + volume of hemisphere = (1/3) pi x 3600 x 120 + (2/3) pi x 216000 = 144000 pi + 144000 pi = 288000 pi cm^3. Volume of the full cylinder = pi x 3600 x 180 = 648000 pi cm^3. The solid pushes out its own volume of water, so the water left = 648000 pi - 288000 pi = 360000 pi cm^3. Using pi = 3.14: 360000 x 3.14 = 1130400 cm^3, which is 1.1304 m^3, approximately 1.13 m^3, since 1 m^3 = 1000000 cm^3. The structure of the solution is cylinder minus submerged solid, and both volumes must be computed with the same value of pi throughout." },
        { "question": "A vessel is in the form of an inverted cone of height 8 cm and radius 5 cm, filled to the brim with water. Spherical lead shots of radius 0.5 cm are dropped into the vessel, and one fourth of the water flows out. Find the number of lead shots dropped in.", "marks": 5, "type": "long", "probability": "medium", "answer": "Volume of the conical vessel = (1/3) pi r^2 h = (1/3) x pi x 25 x 8 = (200/3) pi cm^3. Water that overflows equals one fourth of this: (1/4) x (200/3) pi = (50/3) pi cm^3. Each lead shot is a sphere of radius 0.5 cm with volume (4/3) pi (0.5)^3 = (4/3) pi x 0.125 = (1/6) pi cm^3. Number of shots = overflow volume divided by the volume of one shot = (50/3) pi / ((1/6) pi) = (50/3) x 6 = 100. So 100 lead shots were dropped in. The method: compute the vessel volume, take the stated fraction as the displaced water, divide by the volume of one sphere, and let pi cancel throughout." }
      ]
    },
    {
      "number": 13,
      "title": "Statistics",
      "summary": "Statistics is a marks-scoring chapter once its four formulas are in place. This chapter builds grouped data tables from scratch: class intervals, frequencies, class marks, uniform class size and the conversion of discontinuous classes to continuous ones. It then gives the three routes to the mean, direct, assumed mean and step deviation, with guidance on when each is fastest, followed by the mode formula built on the modal class and its two neighbouring frequencies, and the median formula built on the cumulative frequency column and the n/2 rule. The empirical relation 3 median = mode + 2 mean links all three averages, and the ogive turns median-finding into a graph: plot the less than and more than cumulative frequencies and read the median at the intersection. The chapter closes with a decision tree for choosing the right method, the standard errors to avoid, such as using class marks instead of limits, and the case-study patterns of the current board paper.",
      "weightageMarks": 8,
      "difficulty": "medium",
      "hotTopics": [
        "Mean by direct, assumed mean and step deviation methods",
        "Mode of grouped data and the modal class formula",
        "Median of grouped data using cumulative frequency",
        "Empirical relation: 3 median = mode + 2 mean",
        "Ogives: less than and more than cumulative frequency curves"
      ],
      "sections": [
        {
          "heading": "Grouped Data: Classes, Frequencies and Class Marks",
          "para": "A grouped frequency distribution chops the data range into class intervals such as 20-30 and records how many observations fall into each class; that count is the frequency fi of the class. Each class is represented in mean calculations by its class mark, the midpoint x = (lower limit + upper limit)/2, so the class 20-30 stands for x = 25. The class size h is the upper limit minus the lower limit, and keeping h uniform across the table is what makes the step deviation method possible. Continuous classes like 20-30 and 30-40 touch at their boundaries, while discontinuous or inclusive classes like 20-29 and 30-39 leave gaps; convert the latter to continuous form by subtracting half the gap from every lower limit and adding half the gap to every upper limit, so 20-29 becomes 19.5-29.5. After conversion, a value exactly on a boundary belongs to the class that begins there. Board tables typically use five to ten classes with small whole-number frequencies.",
          "points": [
            "Grouped data sorts raw values into class intervals, and the number of observations in a class is its frequency fi.",
            "The class mark is the midpoint: x = (lower limit + upper limit)/2, taken to represent the whole class.",
            "The class size h is the difference upper limit minus lower limit, and it should stay uniform for easy methods.",
            "Continuous classes like 20-30, 30-40 have no gaps, while discontinuous classes like 20-29, 30-39 do.",
            "Convert discontinuous classes by subtracting half the gap from every lower limit and adding half to every upper limit, so 20-29 becomes 19.5-29.5.",
            "After conversion, a value exactly on a boundary belongs to the class that starts at that boundary.",
            "Board questions usually present five to ten classes with small whole-number frequencies."
          ],
          "keyTerms": [
            { "term": "Class interval", "meaning": "A range such as 20-30 into which the data values are grouped." },
            { "term": "Frequency (fi)", "meaning": "The number of observations falling in a given class interval." },
            { "term": "Class mark (xi)", "meaning": "The midpoint of a class, (lower + upper)/2, representing all values of that class." }
          ],
          "trick": "Class mark = average of the two limits. Discontinuous to continuous: shift by half the gap, so 20-29 becomes 19.5-29.5.",
          "examPointer": "One-markers ask for a class mark or for converting given classes to continuous form; show the half-gap shift explicitly to earn the step."
        },
        {
          "heading": "Mean of Grouped Data: Direct Method",
          "para": "The direct method is the definition made concrete: mean = (sum of fi xi) / (sum of fi), where xi is the class mark and fi the frequency of each class, and sum fi = n is the total number of observations. Build a four-column table: class, class mark xi, frequency fi, and the product fi xi; the mean is the total of the last column divided by the total of the third. A quick example in words: if the class marks are 10, 30 and 50 with frequencies 5, 8 and 2, then sum fi xi = 50 + 240 + 100 = 390 and n = 15, so the mean is 390/15 = 26. The modelling assumption is that every observation in a class equals its class mark, which is reasonable when the classes are narrow. Use the direct method whenever the marks and frequencies are small, because it involves the least machinery and therefore the fewest places to slip.",
          "points": [
            "Direct method: mean = (sum of fi xi) / (sum of fi).",
            "Build the columns class mark xi, frequency fi and product fi xi, then total each.",
            "The total frequency n = sum fi is the number of observations in the data.",
            "Worked check: class marks 10, 30, 50 with frequencies 5, 8, 2 give sum fi xi = 390 and n = 15, so mean = 26.",
            "Every observation is treated as if it equals its class mark; that is the modelling assumption.",
            "The direct method is safest when the class marks and frequencies are small numbers.",
            "Keep fractions until the last step and cancel before multiplying to save time."
          ],
          "keyTerms": [
            { "term": "Direct method", "meaning": "Computing the mean as sum fi xi / sum fi using the class marks." },
            { "term": "Total frequency (n)", "meaning": "The sum of all class frequencies, equal to the number of observations." },
            { "term": "Weighted product (fi xi)", "meaning": "The contribution of a class to the numerator of the mean." }
          ],
          "trick": "Direct = Double column: xi first, then fi xi. Mean = total of the products divided by the total of the frequencies.",
          "examPointer": "Even when step deviation is asked later, a correct direct-method table earns marks; practise the four-column format until it is automatic."
        },
        {
          "heading": "Mean: Assumed Mean Method",
          "para": "When the class marks are large, say 3400, 3500 and 3600, direct multiplication gets heavy, so shift the origin: pick any convenient class mark a, ideally one near the middle of the table, and write each deviation as ui = xi - a. The deviations are small, often symmetric about zero, and may be negative. The mean is then a + (sum of fi ui) / (sum of fi): start from a and correct it by the weighted average deviation. Using the earlier data with a = 30: the deviations are -20, 0 and 20, the weighted sum is -60, and the mean is 30 - 60/15 = 26, exactly matching the direct method, as it must. This change of origin never alters the mean; it only shrinks the arithmetic. Guard the signs carefully: one flipped minus sign moves the correction term to the wrong side of a and wrecks the answer while looking perfectly tidy.",
          "points": [
            "Choose the assumed mean a as a class mark near the centre of the table.",
            "Compute the deviations ui = xi - a, which are usually small and often negative.",
            "Mean = a + (sum of fi ui) / (sum of fi).",
            "Same data with a = 30: deviations -20, 0, 20 give sum fi ui = -60, so mean = 30 - 60/15 = 26, matching the direct method.",
            "The method only shifts the origin; it never changes the value of the mean.",
            "Keep the signs of ui carefully, because a sign error flips the correction term.",
            "Prefer a class mark that makes many deviations round numbers like 10, 20 or 30."
          ],
          "keyTerms": [
            { "term": "Assumed mean (a)", "meaning": "An arbitrarily chosen class mark used as the reference point for deviations." },
            { "term": "Deviation (ui)", "meaning": "ui = xi - a, the signed distance of a class mark from the assumed mean." },
            { "term": "Change of origin", "meaning": "Shifting the measurements to a new zero at a without altering the true mean." }
          ],
          "trick": "Start at a, then walk by the mean deviation: mean = a + sum fi ui / sum fi. Negative deviations pull the mean below a.",
          "examPointer": "If your assumed-mean answer disagrees with a direct-method check, inspect the signs of ui first; the correction term sum fi ui / sum fi is where errors hide."
        },
        {
          "heading": "Mean: Step Deviation Method",
          "para": "If every class has the same width h, the deviations can be shrunk further by dividing by the class size: ui = (xi - a)/h. The ui values then come out as tiny integers, typically -2, -1, 0, 1 and 2, and the whole calculation becomes a matter of small products. The mean is a + h x (sum of fi ui) / (sum of fi): shrink, sum, and stretch back by multiplying by h at the end. On the earlier data with a = 30 and h = 20, the ui are -1, 0 and 1 with weighted sum -3, so the mean is 30 + 20 x (-3/15) = 26 once again. Choose a as the class mark of the central or most frequent class to minimise the deviations. The method collapses when class sizes are unequal, because a single h then does not describe all classes; fall back to the assumed mean or the direct method in that situation.",
          "points": [
            "Step deviation divides each deviation by the common class size: ui = (xi - a)/h.",
            "Mean = a + h x (sum of fi ui) / (sum of fi).",
            "Use this method only when every class has the same width h.",
            "Same data with a = 30 and h = 20: ui = -1, 0, 1 with sum fi ui = -3, so mean = 30 + 20 x (-3/15) = 26.",
            "The method converts big products into single-digit integers, cutting both time and errors.",
            "Choose a as the class mark of the middle or the most frequent class for the smallest deviations.",
            "If the class sizes are unequal, use the assumed mean or direct method instead."
          ],
          "keyTerms": [
            { "term": "Step deviation (ui)", "meaning": "ui = (xi - a)/h, the deviation measured in units of the class size." },
            { "term": "Class size (h)", "meaning": "The uniform width of every class interval in the table." },
            { "term": "Scaling factor", "meaning": "The multiplier h that converts step deviations back into real units at the end." }
          ],
          "trick": "Shrink, sum, stretch: divide the deviations by h, total them, then multiply by h once at the end in mean = a + h x sum fi ui / sum fi.",
          "examPointer": "The formula mean = a + h x sum fi ui / sum fi is the most quoted line of the chapter; forgetting the final multiplication by h is the classic error."
        },
        {
          "heading": "Mode of Grouped Data",
          "para": "The mode of grouped data is estimated from the three frequencies around the peak. The modal class is the class with the highest frequency; call its lower limit l, its frequency f1, the frequency of the class before it f0, the frequency of the class after it f2, and the class size h. Then mode = l + ((f1 - f0)/(2 f1 - f0 - f2)) x h. The fraction measures how far the peak leans: a larger f2, a heavier right neighbour, pushes the mode further above l, while a larger f0 pulls it down. Example: modal class 15-25 with f0 = 4, f1 = 8 and f2 = 4 gives mode = 15 + ((8 - 4)/(16 - 8)) x 10 = 15 + 5 = 20, exactly the midpoint because the two neighbours are equal. If the modal class is the first class of the table, take f0 = 0; if it is the last, take f2 = 0. The denominator must be positive, and well-set board data guarantees this.",
          "points": [
            "The modal class is the class interval with the highest frequency.",
            "Mode = l + ((f1 - f0)/(2 f1 - f0 - f2)) x h.",
            "Here l is the lower limit of the modal class, f1 its frequency, f0 and f2 the frequencies of the neighbouring classes, and h the class size.",
            "Example: modal class 15-25 with f0 = 4, f1 = 8, f2 = 4 gives mode = 15 + (4/8) x 10 = 20.",
            "If the modal class is the first class of the table, take f0 = 0; if it is the last, take f2 = 0.",
            "The formula slides the mode from l towards the heavier neighbour: a bigger f2 pushes the mode further up.",
            "The denominator 2 f1 - f0 - f2 must not be zero, and board data is always chosen to keep it positive."
          ],
          "keyTerms": [
            { "term": "Modal class", "meaning": "The class with the largest frequency, inside which the mode is assumed to lie." },
            { "term": "f0, f1, f2", "meaning": "The frequencies of the class before the modal class, the modal class itself, and the class after it." },
            { "term": "Mode", "meaning": "The most frequent value of the data, estimated by the formula for grouped data." }
          ],
          "trick": "Line up f0, f1, f2 and read the formula as a lean: mode = l + (left gap / both gaps) x h. Equal neighbours put the mode at the midpoint.",
          "examPointer": "Write all five ingredients l, f0, f1, f2, h on one line before substituting; marking schemes award these as separate steps."
        },
        {
          "heading": "Median of Grouped Data",
          "para": "The median of grouped data is found by locating the middle observation and interpolating inside its class. Build the less-than cumulative frequency column by adding the frequencies from the top, and compute n = sum of fi. Find n/2; grouped data uses n/2, not the (n + 1)/2 of ungrouped lists, and the rule is the same whether n is even or odd. The median class is the first class whose cumulative frequency reaches or exceeds n/2. Then median = l + ((n/2 - cf)/f) x h, where l is the lower limit of the median class, cf the cumulative frequency of the preceding class, f the frequency of the median class and h its width. Example: median class 20-30 with cf = 12, f = 16 and n/2 = 16 gives median = 20 + ((16 - 12)/16) x 10 = 22.5. Sanity-check that n/2 - cf lies between 0 and f; otherwise you picked the wrong class.",
          "points": [
            "The median divides the data into two equal halves, and for grouped data it is located through the cumulative frequency column.",
            "Compute n = sum fi and locate n/2, not (n + 1)/2, in the cumulative frequency column.",
            "The median class is the first class whose cumulative frequency reaches or exceeds n/2.",
            "Median = l + ((n/2 - cf)/f) x h, with l, cf, f and h taken from the median class and the one before it.",
            "Example: median class 20-30 with cf = 12, f = 16 and n/2 = 16 gives median = 20 + (4/16) x 10 = 22.5.",
            "The rule is identical for even and odd totals, since grouped data always uses n/2.",
            "Verify that n/2 - cf is non-negative and smaller than f; otherwise the chosen class is wrong."
          ],
          "keyTerms": [
            { "term": "Cumulative frequency (cf)", "meaning": "The running total of frequencies up to and including a class." },
            { "term": "Median class", "meaning": "The class containing the n/2-th observation, found from the cumulative frequency column." },
            { "term": "Median", "meaning": "The value splitting the data into halves, computed by the interpolation formula." }
          ],
          "trick": "n/2 finds the class; the formula finds the spot inside it: median = l + (n/2 - cf)/f x h. Grouped data never uses (n + 1)/2.",
          "examPointer": "Construct the less-than cumulative frequency table neatly; it earns marks by itself and is reused for the ogive and for locating the median class."
        },
        {
          "heading": "Empirical Relationship: Mean, Median, Mode",
          "para": "For single-peaked, moderately skewed data the three averages are locked by the empirical relation 3 x median = mode + 2 x mean. It rearranges to mode = 3 median - 2 mean, to median = (mode + 2 mean)/3 and to mean = (3 median - mode)/2, so knowing any two averages produces the third without touching the frequency table. Example: if the mean is 15 and the median is 16, the mode is 3 x 16 - 2 x 15 = 48 - 30 = 18. The relation is approximate; it comes from long experience with many distributions rather than from a theorem, and it can fail for oddly shaped data, but board questions stay inside its range of validity. Typical uses are a two-mark item asking for the mode given the mean and median, or a case study that supplies the mode and mean and asks you to estimate the median. Quote the relation in symbols before substituting numbers; that single line carries the method mark.",
          "points": [
            "The empirical relation is 3 x median = mode + 2 x mean.",
            "Rearranged: mode = 3 median - 2 mean.",
            "Rearranged: median = (mode + 2 mean)/3 and mean = (3 median - mode)/2.",
            "Example: mean = 15 and median = 16 give mode = 48 - 30 = 18.",
            "The relation is approximate and works best for single-peaked, moderately skewed data.",
            "Exams use it to produce the third average when two are given, avoiding a full recomputation.",
            "State the relation in symbols before substituting; that line usually carries the method mark."
          ],
          "keyTerms": [
            { "term": "Empirical relation", "meaning": "The approximate link 3 median = mode + 2 mean among the three averages." },
            { "term": "Skewness", "meaning": "The asymmetry of a distribution; the relation applies to mildly skewed data." },
            { "term": "Unimodal", "meaning": "Having a single peak, the situation in which the empirical formula works best." }
          ],
          "trick": "Thrice the middle minus twice the balance: mode = 3 median - 2 mean. Quote it first, then substitute the numbers.",
          "examPointer": "A favourite two-marker: mean 15 and median 16, find the mode; answer mode = 3 x 16 - 2 x 15 = 18, with the relation quoted before the substitution."
        },
        {
          "heading": "Cumulative Frequency Curves (Ogives)",
          "para": "An ogive is the graph of a cumulative frequency distribution. For the less than ogive, convert the table to less-than cumulative frequencies and plot each point as (upper class limit, cf); the curve starts low on the left and rises to n at the largest upper limit. For the more than ogive, plot (lower class limit, more-than cf); it starts at n on the left and falls to zero on the right. Draw both on the same axes with equal, clearly marked scales, joining the points with a smooth freehand curve rather than rigid straight segments. The two ogives intersect exactly once, and the x-coordinate of that intersection is the median; drop a dotted perpendicular to the x-axis and read the value off. With a single less-than ogive, find n/2 on the y-axis, move horizontally to the curve, and then vertically down to read the median. Plot at class limits, never at class marks, which is the most common graph error in this chapter.",
          "points": [
            "An ogive is the graph of a cumulative frequency distribution, rising for the less than type and falling for the more than type.",
            "Less than ogive: plot each point as (upper class limit, less-than cumulative frequency) and join with a smooth rising curve.",
            "More than ogive: plot (lower class limit, more-than cumulative frequency) and join with a smooth falling curve.",
            "The less than ogive starts near zero on the left and rises to n at the largest upper limit.",
            "Drawn on the same axes, the two ogives intersect at the point whose x-coordinate is the median.",
            "From a single less than ogive, locate n/2 on the y-axis, move horizontally to the curve, then drop vertically to read the median.",
            "Use equal scales on both axes and smooth freehand curves; joining points with stiff straight lines loses presentation marks."
          ],
          "keyTerms": [
            { "term": "Ogive", "meaning": "The cumulative frequency curve of a grouped frequency distribution." },
            { "term": "Less than series", "meaning": "Cumulative frequencies counting all observations below each upper class limit." },
            { "term": "More than series", "meaning": "Cumulative frequencies counting all observations above each lower class limit." }
          ],
          "trick": "Less than rises, more than falls, and the x-coordinate where they cross is the median. Plot at class limits, not class marks.",
          "examPointer": "Graph questions say draw both ogives and find the median; label the intersection and drop dotted perpendiculars to both axes for full credit."
        },
        {
          "heading": "Exam Strategy: Choosing the Right Method",
          "para": "Pick the method by asking three questions. Is the class size uniform and the numbers heavy? Then use step deviation; if the classes are ragged or the numbers small, use the direct or assumed mean method. What exactly is asked? Mode means find the modal class and apply the f0, f1, f2 formula; median means build the cumulative frequency table and interpolate with n/2; a link between the averages means quote 3 median = mode + 2 mean. Is a graph demanded? Then draw ogives, not a histogram or a frequency polygon. The standard errors to police are: using class marks instead of class limits for the median and mode, using (n + 1)/2 instead of n/2, dropping the final multiplier h in the step deviation formula, and reading f0 and f2 from the wrong side of the modal class. The current paper pattern typically places one objective item, one two or three-mark computation and one five-mark or case-study question from this chapter.",
          "points": [
            "Uniform class size with heavy numbers: use step deviation; otherwise use the direct or assumed mean method.",
            "Asked for the mode: find the modal class first, then apply the f0, f1, f2 formula.",
            "Asked for the median: build the cumulative frequency table, find n/2, then interpolate.",
            "Asked for a graph or for the median graphically: draw the ogives, not a histogram.",
            "Given two of mean, median, mode and asked for the third: quote 3 median = mode + 2 mean.",
            "Frequent errors: class marks instead of limits for median and mode, (n + 1)/2 instead of n/2, and dropping the final x h.",
            "Typical pattern: one objective item, one two or three-mark computation, and one five-mark or case-study question from this chapter."
          ],
          "keyTerms": [
            { "term": "Decision tree", "meaning": "A fixed order of questions to yourself that selects the fastest correct method." },
            { "term": "Interpolation", "meaning": "Estimating a value inside a class using the median or mode formula." },
            { "term": "Case study", "meaning": "A paragraph-based question embedding a frequency table, common in the current paper pattern." }
          ],
          "trick": "Three questions in ten seconds: is h uniform, what exactly is asked, is a graph demanded? The answers choose the formula for you.",
          "examPointer": "In case studies one frequency is often written as x with the mean or median given; set up the equation from the formula and solve for x before anything else."
        }
      ],
      "mcqs": [
        { "question": "The class mark of the class interval 20-30 is:", "options": ["20", "25", "30", "50"], "answerIndex": 1, "explanation": "The class mark is the midpoint (20 + 30)/2 = 25, and it represents every observation of the class in mean calculations.", "difficulty": "easy" },
        { "question": "In the direct method, the mean of grouped data equals:", "options": ["sum fi xi / sum fi", "sum fi / sum xi", "a + sum fi ui / sum fi", "l + ((n/2 - cf)/f) x h"], "answerIndex": 0, "explanation": "Multiply each class mark xi by its frequency fi, add the products and divide by the total frequency sum fi; the other options are the step deviation and median formulas.", "difficulty": "easy" },
        { "question": "In the assumed mean method, the deviation ui of a class mark xi is:", "options": ["xi - a", "xi + a", "(xi - a)/h", "a - xi"], "answerIndex": 0, "explanation": "The deviation is the signed difference ui = xi - a from the chosen assumed mean a; dividing further by h turns it into a step deviation.", "difficulty": "easy" },
        { "question": "The mean by the step deviation method is:", "options": ["a + h x sum fi ui / sum fi", "a + sum fi ui / sum fi", "h x sum fi ui / sum fi", "a - h x sum fi ui / sum fi"], "answerIndex": 0, "explanation": "Step deviations ui = (xi - a)/h are in class-size units, so the mean is a plus h times their weighted average: a + h x sum fi ui / sum fi.", "difficulty": "medium" },
        { "question": "The mode of grouped data is given by:", "options": ["l + ((f1 - f0)/(2 f1 - f0 - f2)) x h", "l + ((n/2 - cf)/f) x h", "(f1 - f0) x h", "sum fi xi / sum fi"], "answerIndex": 0, "explanation": "The mode formula uses the modal class lower limit l, its frequency f1, the neighbouring frequencies f0 and f2, and the class size h; option 1 is the median formula.", "difficulty": "medium" },
        { "question": "The modal class of a frequency distribution is the class with the:", "options": ["largest frequency", "largest class mark", "smallest frequency", "largest class size"], "answerIndex": 0, "explanation": "The modal class is simply the interval whose frequency is highest; the mode is then located inside it by the formula.", "difficulty": "easy" },
        { "question": "For the median of grouped data, the median class is the class whose cumulative frequency:", "options": ["first reaches or exceeds n/2", "is the smallest", "equals n", "first exceeds 2n"], "answerIndex": 0, "explanation": "Find n/2 from the total frequency; the first class whose less-than cumulative frequency reaches n/2 is the median class.", "difficulty": "medium" },
        { "question": "The median of grouped data is:", "options": ["l + ((n/2 - cf)/f) x h", "l + ((f1 - f0)/(2 f1 - f0 - f2)) x h", "sum fi xi / sum fi", "n/2 x h"], "answerIndex": 0, "explanation": "Inside the median class, interpolate from its lower limit l using the preceding cumulative frequency cf, the class frequency f and the width h.", "difficulty": "medium", "pyq": "CBSE 2020" },
        { "question": "The empirical relationship among the three averages is:", "options": ["3 median = mode + 2 mean", "2 median = mode + 3 mean", "median = mode + mean", "3 mean = median + 2 mode"], "answerIndex": 0, "explanation": "For moderately skewed data, 3 x median = mode + 2 x mean, which rearranges to mode = 3 median - 2 mean.", "difficulty": "easy" },
        { "question": "If the mean of a distribution is 15 and its median is 16, its mode is:", "options": ["14", "18", "17", "20"], "answerIndex": 1, "explanation": "Using the empirical relation, mode = 3 x median - 2 x mean = 48 - 30 = 18.", "difficulty": "easy", "pyq": "CBSE 2019" },
        { "question": "The point of intersection of the less than and more than ogives gives the:", "options": ["mean", "mode", "median", "range"], "answerIndex": 2, "explanation": "Both ogives pass through the point whose x-coordinate is the value below and above which half the observations lie, which is exactly the median.", "difficulty": "easy" },
        { "question": "A less than ogive is drawn by plotting points of the form:", "options": ["(upper class limit, cumulative frequency)", "(class mark, frequency)", "(lower class limit, frequency)", "(upper class limit, frequency)"], "answerIndex": 0, "explanation": "Cumulative frequencies count everything up to the upper limit, so each point uses the upper limit as the x-value and the less-than cf as the y-value.", "difficulty": "medium" },
        { "question": "The discontinuous classes 10-19 and 20-29 become, after conversion to continuous classes:", "options": ["9.5-19.5 and 19.5-29.5", "10-20 and 20-30", "9-20 and 19-30", "10.5-19.5 and 20.5-29.5"], "answerIndex": 0, "explanation": "The gap between successive classes is 1, so subtract 0.5 from every lower limit and add 0.5 to every upper limit.", "difficulty": "medium" },
        { "question": "The step deviation method cannot be applied directly when:", "options": ["the class sizes are unequal", "the frequencies are large", "the data is continuous", "the mean is negative"], "answerIndex": 0, "explanation": "Dividing by a single h is valid only when every class has the same width; otherwise switch to the assumed mean or direct method.", "difficulty": "medium" },
        { "question": "If sum fi xi = 300 and sum fi = 12, the mean is:", "options": ["25", "288", "36", "312"], "answerIndex": 0, "explanation": "Mean = sum fi xi / sum fi = 300/12 = 25, straight from the direct method definition.", "difficulty": "easy" },
        { "question": "While finding the median of grouped data, the position used is:", "options": ["n/2", "(n + 1)/2", "n", "(n - 1)/2"], "answerIndex": 0, "explanation": "Grouped data always uses n/2 to locate the median class; the (n + 1)/2 rule belongs to ungrouped lists.", "difficulty": "easy" },
        { "question": "If the modal class is the very first class of a frequency table, then in the mode formula f0 is taken as:", "options": ["0", "1", "the largest frequency of the table", "equal to f2"], "answerIndex": 0, "explanation": "There is no class before the first class, so its frequency f0 is taken as 0; similarly f2 = 0 when the modal class is the last one.", "difficulty": "medium" }
      ],
      "boardQuestions": [
        { "question": "Find the mean of the following distribution by the step deviation method: classes 0-10, 10-20, 20-30, 30-40, 40-50 with frequencies 5, 8, 15, 6, 6.", "marks": 3, "type": "long", "probability": "high", "answer": "The class marks are 5, 15, 25, 35, 45 and the total frequency is n = 40. Choose the assumed mean a = 25, the middle class mark, and class size h = 10. The step deviations ui = (xi - a)/h are -2, -1, 0, 1, 2. The products fi ui are -10, -8, 0, 6 and 12, so sum fi ui = -10 - 8 + 0 + 6 + 12 = 0. Mean = a + h x (sum fi ui / sum fi) = 25 + 10 x (0/40) = 25. Because the weighted deviations cancel exactly, the mean is exactly the assumed mean here. Always present the table with xi, fi, ui and fi ui columns, since the marking scheme awards separate steps for the table, the formula and the final value." },
        { "question": "For the distribution with classes 0-20, 20-40, 40-60, 60-80, 80-100 and frequencies 10, 14, 20, 10, 6, find the mean, the median and the mode.", "marks": 5, "type": "long", "probability": "high", "answer": "Mean by step deviation: class marks are 10, 30, 50, 70, 90; choose a = 50 and h = 20, giving ui = -2, -1, 0, 1, 2 and sum fi ui = -20 - 14 + 0 + 10 + 12 = -12 with n = 60. Mean = 50 + 20 x (-12/60) = 50 - 4 = 46. Median: the cumulative frequencies are 10, 24, 44, 54, 60, and n/2 = 30 first reaches 44 in the class 40-60, so l = 40, cf = 24, f = 20, h = 20. Median = 40 + ((30 - 24)/20) x 20 = 40 + 6 = 46. Mode: the highest frequency 20 lies in the class 40-60, so f1 = 20, f0 = 14, f2 = 10. Mode = 40 + ((20 - 14)/(2 x 20 - 14 - 10)) x 20 = 40 + (6/16) x 20 = 47.5. The three values 46, 46 and 47.5 are close together, exactly as the empirical relation predicts for mildly skewed data." },
        { "question": "The mean of a distribution is 23 and its median is 25. Find its mode using the empirical relation.", "marks": 2, "type": "short", "probability": "high", "answer": "The empirical relation states 3 x median = mode + 2 x mean. Substituting: 3 x 25 = mode + 2 x 23, so 75 = mode + 46, giving mode = 29. Equivalently, use the rearranged form mode = 3 median - 2 mean = 3 x 25 - 2 x 23 = 75 - 46 = 29. State the relation in symbols first, then substitute, and present the answer clearly; the method mark is for quoting the relation correctly, not for the arithmetic alone." },
        { "question": "The monthly expenditure of families (in rupees) is grouped as: 1000-1500 with frequency 12, 1500-2000 with frequency 30, 2000-2500 with frequency 12, 2500-3000 with frequency 8, and 3000-3500 with frequency 3. Find the mode of the expenditure.", "marks": 3, "type": "long", "probability": "high", "answer": "The highest frequency 30 belongs to the class 1500-2000, which is the modal class. Here l = 1500, f1 = 30, f0 = 12 for the class before, and f2 = 12 for the class after, with class size h = 500. Mode = l + ((f1 - f0)/(2 f1 - f0 - f2)) x h = 1500 + ((30 - 12)/(60 - 12 - 12)) x 500 = 1500 + (18/36) x 500 = 1500 + 250 = 1750 rupees. Because the two neighbouring frequencies are equal, the mode lands exactly at the midpoint of the modal class. Write out l, f0, f1, f2 and h separately before substituting; that is where the marks sit." },
        { "question": "Draw the less than ogive and the more than ogive for the distribution: marks 0-10, 10-20, 20-30, 30-40, 40-50 with frequencies 4, 8, 16, 8, 4, and find the median from the graph.", "marks": 5, "type": "long", "probability": "high", "answer": "Less than cumulative frequencies: below 10 is 4, below 20 is 12, below 30 is 28, below 40 is 36, below 50 is 40. Plot the points (0, 0), (10, 4), (20, 12), (30, 28), (40, 36) and (50, 40), joined by a smooth rising curve for the less than ogive. More than cumulative frequencies: above 0 is 40, above 10 is 36, above 20 is 28, above 30 is 12, above 40 is 4, above 50 is 0. Plot (0, 40), (10, 36), (20, 28), (30, 12), (40, 4) and (50, 0) for the falling more than ogive. The two curves intersect at the point whose x-coordinate is 25; drop dotted perpendiculars to both axes and read the median as 25 marks. Check by formula: n/2 = 20, median class 20-30 with cf = 12, f = 16 and h = 10 gives median = 20 + ((20 - 12)/16) x 10 = 25, matching the graph." },
        { "question": "The class marks of a distribution are 47, 52, 57, 62 and 67. Find the class intervals of the distribution.", "marks": 2, "type": "short", "probability": "medium", "answer": "Successive class marks differ by 5, so the class size h = 5. Each class extends half a class size on either side of its class mark: the lower limit is class mark - h/2 and the upper limit is class mark + h/2. Therefore the intervals are 44.5-49.5, 49.5-54.5, 54.5-59.5, 59.5-64.5 and 64.5-69.5. Each upper limit equals the next lower limit, confirming that the classes are continuous. This reverse construction, intervals from class marks, is a standard two-mark test of whether you know that the class mark is the exact midpoint of its class." },
        { "question": "The mean of the following frequency distribution is 50, but the frequencies f1 and f2 are missing: classes 0-20, 20-40, 40-60, 60-80, 80-100 with frequencies 17, f1, 32, f2, 19, and the total frequency is 120. Find f1 and f2.", "marks": 5, "type": "long", "probability": "high", "answer": "The class marks are 10, 30, 50, 70, 90. From the total: 17 + f1 + 32 + f2 + 19 = 120, so f1 + f2 = 52. For the mean, sum fi xi = 17 x 10 + 30 f1 + 32 x 50 + 70 f2 + 19 x 90 = 170 + 30 f1 + 1600 + 70 f2 + 1710 = 3480 + 30 f1 + 70 f2. Since the mean is 50: 3480 + 30 f1 + 70 f2 = 50 x 120 = 6000, so 30 f1 + 70 f2 = 2520, that is 3 f1 + 7 f2 = 252. Substitute f1 = 52 - f2: 3(52 - f2) + 7 f2 = 252 gives 156 + 4 f2 = 252, so f2 = 24 and f1 = 28. Check: the frequencies 17, 28, 32, 24, 19 add to 120, and the weighted sum reproduces the mean exactly 50." },
        { "question": "The mean of the following data is 8: values 3, 5, 7, 9, 11, 13 with frequencies 6, 8, 15, p, 8, 4. Find the value of p.", "marks": 2, "type": "short", "probability": "medium", "answer": "Compute sum fi xi = 3 x 6 + 5 x 8 + 7 x 15 + 9 p + 11 x 8 + 13 x 4 = 18 + 40 + 105 + 9 p + 88 + 52 = 303 + 9 p. The total frequency is n = 6 + 8 + 15 + p + 8 + 4 = 41 + p. Since the mean is 8: (303 + 9 p)/(41 + p) = 8, so 303 + 9 p = 328 + 8 p, which gives p = 25. Substitute back to verify: sum fi xi = 303 + 225 = 528 and n = 66, and 528/66 = 8 exactly. Setting up the single linear equation from the definition of the mean is the entire solution; the unknown frequency p appears once on each side." },
        { "question": "Daily wages (in rupees) are grouped as: 100-200 with frequency 8, 200-300 with frequency 12, 300-400 with frequency 20, 400-500 with frequency 15, and 500-600 with frequency 5. Find the mean daily wage by the step deviation method, the median wage, and identify the modal class.", "marks": 5, "type": "long", "probability": "medium", "answer": "The class marks are 150, 250, 350, 450, 550 with total frequency n = 60. Take a = 350 and h = 100, giving step deviations -2, -1, 0, 1, 2 and products fi ui = -16, -12, 0, 15, 10, so sum fi ui = -3. Mean = a + h x (sum fi ui / sum fi) = 350 + 100 x (-3/60) = 350 - 5 = 345 rupees. For the median, the cumulative frequencies are 8, 20, 40, 55, 60; n/2 = 30 first reaches 40 in the class 300-400, so l = 300, cf = 20, f = 20, h = 100. Median = 300 + ((30 - 20)/20) x 100 = 300 + 50 = 350 rupees. The modal class is 300-400, since its frequency 20 is the largest. One combined table serves the mean, the median and the modal class, so build it carefully once." },
        { "question": "The median of the following data is 275: classes 0-100, 100-200, 200-300, 300-400, 400-500, 500-600 with frequencies 5, x, 10, 12, 8, 5. Find the value of x.", "marks": 3, "type": "long", "probability": "medium", "answer": "The total frequency is n = 5 + x + 10 + 12 + 8 + 5 = 40 + x, so n/2 = 20 + x/2. Since the median 275 lies between 200 and 300, the median class is 200-300 with lower limit l = 200, preceding cumulative frequency cf = 5 + x, class frequency f = 10 and h = 100. Apply the formula: 275 = 200 + ((n/2 - (5 + x))/10) x 100. Simplify: 75 = 10 x (20 + x/2 - 5 - x) = 10 x (15 - x/2). Hence 15 - x/2 = 7.5, so x/2 = 7.5 and x = 15. Check: with x = 15, n = 55, n/2 = 27.5, and the cumulative frequencies are 5, 20, 30, 42, 50, 55, so the median class is indeed 200-300 and the median works out to 275. Always verify the assumed median class after finding the unknown." },
        { "question": "Write the formula for the median of grouped data and name every symbol appearing in it.", "marks": 1, "type": "short", "probability": "high", "answer": "Median = l + ((n/2 - cf)/f) x h. Here l is the lower limit of the median class, n is the total frequency (the sum of all fi), n/2 locates the median position, cf is the cumulative frequency of the class immediately preceding the median class, f is the frequency of the median class itself, and h is the class size. The median class is the first class whose cumulative frequency is at least n/2. The formula interpolates inside that class: it adds to l the fraction (n/2 - cf)/f of the class width h, sliding from the lower limit towards the position of the middle observation." }
      ]
    },
    {
      "number": 14,
      "title": "Probability",
      "summary": "Probability becomes a scoring chapter the moment counting becomes systematic. This chapter separates experimental (empirical) probability from theoretical probability, which rests on equally likely outcomes, and then works through the four classic setups: coins, dice, playing cards and bags of balls. It states the master formula P(E) = favourable outcomes / total outcomes, the range 0 <= P(E) <= 1, the fact that the probabilities of all elementary events sum to 1, and the complement rule P(E) + P(E') = 1 that solves every at-least-one question in one line. Sample spaces are listed for one, two and three coins, for one and two dice with the sum counts 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 across totals 2 to 12, for the 52-card deck with its 12 face cards and 4 aces, and for bags used with and without replacement. A final strategy section lists the standard question frames and the counting mistakes to avoid.",
      "weightageMarks": 6,
      "difficulty": "easy",
      "hotTopics": [
        "P(E) = favourable outcomes / total outcomes",
        "Sample spaces of coins, dice and a 52-card deck",
        "Sure, impossible and complementary events",
        "At least one questions via the complement rule",
        "Balls in a bag: with and without replacement"
      ],
      "sections": [
        {
          "heading": "Probability: From Experiments to Theory",
          "para": "Probability began as a theory of gambling: seventeenth-century thinkers analysing dice games noticed that long-run frequencies settle into stable patterns. From this came two notions. Experimental or empirical probability is computed from an actual experiment: P(E) = (number of trials in which E occurred) / (total number of trials). It is honest but unstable; toss a coin ten times and heads may come up seven times. Theoretical or classical probability instead assumes that all outcomes of the experiment are equally likely, as with a fair coin, an unbiased die or a well-shuffled deck, and computes probabilities by counting outcomes alone. The bridge between them is the law of large numbers in spirit: as the number of trials grows very large, the experimental probability approaches the theoretical one. In exam questions, a table of trials or frequencies signals the empirical formula, while any phrasing like a fair die is thrown once signals the theoretical count of outcomes.",
          "points": [
            "Experimental (empirical) probability uses actual trials: favourable trials divided by total trials.",
            "Theoretical (classical) probability assumes equally likely outcomes and needs no experiment.",
            "As the number of trials grows very large, the experimental probability gets closer to the theoretical probability.",
            "The theory works only when outcomes are equally likely, as with a fair coin or an unbiased die.",
            "Probability theory grew out of seventeenth-century questions about games of chance with dice.",
            "Small samples can differ sharply from theory; a fair coin tossed ten times may show seven heads.",
            "If a question gives numbers of trials, use the empirical formula; otherwise count the equally likely outcomes."
          ],
          "keyTerms": [
            { "term": "Experimental probability", "meaning": "The ratio of the number of trials in which an event occurred to the total number of trials." },
            { "term": "Theoretical probability", "meaning": "The ratio of favourable outcomes to total outcomes, assuming equally likely results." },
            { "term": "Equally likely", "meaning": "Outcomes having the same chance of occurring, such as the six faces of a fair die." }
          ],
          "trick": "The experiment counts trials, the theory counts outcomes. Fair coin, unbiased die, well-shuffled deck: theory applies.",
          "examPointer": "A table of trials or frequencies signals the empirical formula P = favourable trials / total trials; pure setup questions want favourable outcomes / total outcomes."
        },
        {
          "heading": "Sample Space and Events",
          "para": "A random experiment is a process with a known set of possible outcomes of which exactly one occurs on each trial, but which one cannot be predicted: tossing a coin, rolling a die, drawing a card, picking a ball from a bag. The sample space S is the set of all possible outcomes. An event is any subset of S; for a die, an even number is the subset {2, 4, 6}. An elementary event contains exactly one outcome, while compound events contain several. Standard sample spaces to know cold: one coin {H, T}; one die {1, 2, 3, 4, 5, 6}; two coins tossed together {HH, HT, TH, TT}, where HT and TH are distinct outcomes; the deck of 52 cards; and a bag of coloured balls where each individual ball is one outcome. Writing the sample space in a fixed, systematic order before answering anything is the single best habit in this chapter.",
          "points": [
            "A random experiment has several possible outcomes, but which one occurs cannot be predicted in advance.",
            "The sample space S is the set of all possible outcomes of the experiment.",
            "An event is any subset of the sample space; getting a head is the event {H}.",
            "One coin gives S = {H, T}, and one die gives S = {1, 2, 3, 4, 5, 6}.",
            "Two coins tossed together give S = {HH, HT, TH, TT} with four equally likely outcomes.",
            "An elementary event contains exactly one outcome, and in the equally likely case each has probability 1 divided by the size of S.",
            "For a bag of balls, each individual ball is one outcome, so same-coloured balls multiply the favourable count."
          ],
          "keyTerms": [
            { "term": "Random experiment", "meaning": "A trial whose result is not fixed in advance but whose possible outcomes are known." },
            { "term": "Sample space (S)", "meaning": "The set of all possible outcomes of a random experiment." },
            { "term": "Event", "meaning": "A subset of the sample space; a collection of outcomes that we care about." }
          ],
          "trick": "Fix an order for S: HT and TH are twins but distinct. For three coins list HHH to TTT in dictionary order and never miss an outcome.",
          "examPointer": "The first line of every answer must be the written sample space; questions say a die is thrown once or two coins are tossed simultaneously precisely to test this."
        },
        {
          "heading": "The Probability Formula P(E) = favourable/total",
          "para": "The theoretical probability of an event E is P(E) = (number of outcomes favourable to E) / (total number of equally likely outcomes). Two structural facts follow. First, every probability lies in the closed range 0 <= P(E) <= 1: a value of 0 means the event never occurs, and a value of 1 means it always does. Second, the probabilities of all the elementary events of an experiment add up to exactly 1, because together they cover the whole sample space. Quick illustrations on a die: P(even) = 3/6 = 1/2, P(prime) = 3/6 = 1/2 since 2, 3 and 5 are prime, and P(number greater than 4) = 2/6 = 1/3. Answers should be left as fully reduced fractions; decimals or percentages are used only when the question asks for them. A probability of 1/2 describes an event as likely as not; it does not mean half certain.",
          "points": [
            "Theoretical probability: P(E) = (number of outcomes favourable to E) / (total number of equally likely outcomes).",
            "For every event, 0 <= P(E) <= 1.",
            "The probabilities of all the elementary events of an experiment add up to exactly 1.",
            "If P(E) = p, then the chance that E does not happen is 1 - p.",
            "On a die: P(even) = 3/6 = 1/2 and P(prime) = 3/6 = 1/2, since 2, 3 and 5 are the primes.",
            "Leave answers as fully reduced fractions unless the question demands a decimal or a percentage.",
            "A probability of 1/2 means the event is as likely to happen as not, nothing more."
          ],
          "keyTerms": [
            { "term": "Favourable outcomes", "meaning": "The outcomes of the sample space in which the event E occurs." },
            { "term": "P(E)", "meaning": "The probability of event E, a number between 0 and 1 inclusive." },
            { "term": "Elementary event", "meaning": "A one-outcome event; over all elementary events the probabilities sum to 1." }
          ],
          "trick": "P = want / all. If your probability comes out negative or above 1, recount the sample space before anything else.",
          "examPointer": "Objective questions often ask for the range of probability or the sum of elementary probabilities; answer with 0 <= P(E) <= 1 and the number 1 respectively."
        },
        {
          "heading": "Sure and Impossible Events; Complementary Events",
          "para": "Two events anchor the scale. A sure event, also called a certain event, contains the entire sample space, such as a number from 1 to 6 appearing on a die, and has P = 1. An impossible event contains no outcome, such as an 8 appearing on an ordinary die, and has P = 0. Between them sits every real event. The complement of an event E, written E', is the event that E does not happen, and together E and E' fill the sample space, so P(E) + P(E') = 1, giving P(E') = 1 - P(E). This one line solves every at-least-one question cheaply: P(at least one head with two coins) = 1 - P(no head) = 1 - 1/4 = 3/4, and with two dice P(at least one six) = 1 - P(no six) = 1 - 25/36 = 11/36. Whenever the question says at least, not, none or neither, think complement first and count the smaller, opposite event.",
          "points": [
            "A sure event contains the whole sample space and has probability 1.",
            "An impossible event contains no outcome and has probability 0.",
            "The complement E' of an event E is the event that E does not occur.",
            "Complementary events satisfy P(E) + P(E') = 1, so P(E') = 1 - P(E).",
            "At-least-one questions are easiest through the complement: P(at least one head) = 1 - P(no head).",
            "Example: with two coins, P(at least one head) = 1 - 1/4 = 3/4.",
            "Complement questions save counting: with two dice, at least one six needs only the 25 outcomes with no six."
          ],
          "keyTerms": [
            { "term": "Sure event", "meaning": "An event that must happen on every trial; its probability is 1." },
            { "term": "Impossible event", "meaning": "An event that cannot happen; its probability is 0." },
            { "term": "Complementary event (E')", "meaning": "The event that E does not occur, with P(E') = 1 - P(E)." }
          ],
          "trick": "AT LEAST = 1 minus NONE. Count the none-case, subtract from 1, and the answer arrives in one line.",
          "examPointer": "When the wording says not E or at least one, full credit is given for the complement route if you state P(E') = 1 - P(E) explicitly before substituting."
        },
        {
          "heading": "Probability with Coins",
          "para": "Coins are the cleanest sample spaces. One coin: S = {H, T} and P(head) = P(tail) = 1/2. Two coins tossed together: S = {HH, HT, TH, TT} has four equally likely outcomes, so P(two heads) = 1/4, P(exactly one head) = 2/4 = 1/2, P(at least one head) = 3/4 and P(no head) = 1/4. The pairs HT and TH are different outcomes because the two coins are distinguishable; merging them into a single one-head case is the classic error that turns 1/2 into a wrong 1/4. Three coins: the sample space has 2 x 2 x 2 = 8 outcomes running from HHH to TTT; P(at least one head) = 7/8, P(exactly two heads) = 3/8, P(at least two heads) = 4/8 = 1/2, and P(all three alike) = 2/8 = 1/4. List the outcomes in dictionary order, HHH, HHT, HTH, HTT, THH, THT, TTH, TTT, and count the cases straight off the list.",
          "points": [
            "One coin: S = {H, T}, with P(head) = P(tail) = 1/2.",
            "Two coins: S = {HH, HT, TH, TT}; the middle two outcomes are different, so the sample space has four members.",
            "Two coins: P(exactly one head) = 2/4 = 1/2 and P(at least one head) = 3/4.",
            "Three coins give 2 x 2 x 2 = 8 outcomes, which should be listed systematically to avoid missing any.",
            "Three coins: P(at least one head) = 7/8, P(exactly two heads) = 3/8 and P(at least two heads) = 4/8 = 1/2.",
            "P(all three alike) = P(HHH) + P(TTT) = 2/8 = 1/4.",
            "At-least questions with coins go through the complement: 1 minus P(all tails)."
          ],
          "keyTerms": [
            { "term": "Simultaneous toss", "meaning": "Two or more coins tossed together; the outcomes are ordered pairs like HT and TH." },
            { "term": "Exactly k heads", "meaning": "The event of obtaining a precise number of heads among the tosses." },
            { "term": "At least k heads", "meaning": "The event of obtaining k or more heads, usually solved through the complement." }
          ],
          "trick": "n coins give 2^n outcomes: 2, then 4, then 8. Exactly one head with two coins is 2/4, not 1/4, because HT and TH both count.",
          "examPointer": "Losing the outcome TH in a two-coin question costs every following part; always write all four outcomes, then count heads case by case."
        },
        {
          "heading": "Probability with Dice",
          "para": "One die: six faces, each with probability 1/6. Two dice rolled together: the outcomes are ordered pairs (first die, second die), giving 6 x 6 = 36 equally likely results, and (1,2) is different from (2,1). The number of pairs producing each sum forms the memorable pattern 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 for sums 2 through 12: the sum 7 leads with six ways, so P(sum 7) = 6/36 = 1/6, while sums 2 and 12 occur in exactly one way each. Doubles such as (3,3) account for six outcomes, so P(double) = 6/36 = 1/6. At least one six is the complement of no six, which has 5 x 5 = 25 outcomes, so P = 1 - 25/36 = 11/36. Product questions: both odd gives 3 x 3 = 9 outcomes, so P(product even) = 1 - 9/36 = 27/36 = 3/4. Sketching the 6 by 6 grid in rough work settles every such question in seconds.",
          "points": [
            "One die: S = {1, 2, 3, 4, 5, 6} with each face having probability 1/6.",
            "Two dice: 6 x 6 = 36 ordered pairs, all equally likely.",
            "The sum 7 occurs in six ways, more than any other total, so P(sum 7) = 6/36 = 1/6.",
            "Sums 2 and 12 occur in exactly one way each: (1,1) and (6,6).",
            "Doubles (both dice equal) occur in six ways, so P(double) = 6/36 = 1/6.",
            "P(at least one six) = 1 - P(no six) = 1 - 25/36 = 11/36.",
            "P(product even) = 1 - P(both odd) = 1 - 9/36 = 27/36 = 3/4."
          ],
          "keyTerms": [
            { "term": "Ordered pair", "meaning": "A two-dice outcome written as (first die, second die); (1,2) and (2,1) are different outcomes." },
            { "term": "Doubles", "meaning": "Outcomes like (3,3) in which both dice show the same number." },
            { "term": "Sum distribution", "meaning": "The list of how many ordered pairs produce each total from 2 to 12." }
          ],
          "trick": "Memorise the sum counts 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 for totals 2 to 12; seven is the king with six ways.",
          "examPointer": "Two-dice questions deserve the quick 6 by 6 grid in rough work; most wrong answers come from dropping pairs like (2,5) alongside (5,2)."
        },
        {
          "heading": "Probability with Playing Cards",
          "para": "A standard deck has 52 cards in four suits, hearts and diamonds red, spades and clubs black, each suit holding thirteen cards: A, 2 to 10, J, Q, K. Face cards are the jacks, queens and kings: three per suit, twelve per deck; aces are four and are not face cards; honour cards are usually taken as the aces plus the face cards, sixteen in all; each colour holds 26 cards. Core probabilities: P(any one rank) = 4/52 = 1/13, P(heart) = 13/52 = 1/4, P(face card) = 12/52 = 3/13, P(red face card) = 6/52 = 3/26, P(king of red colour) = 2/52 = 1/26, and P(not a face card) = 1 - 3/13 = 10/13. If a question removes or loses one card first, the deck becomes 51 cards and every count must be recomputed from the reduced deck. Always note that the deck is well shuffled; that phrase is exactly what makes all 52 outcomes equally likely.",
          "points": [
            "A deck has 52 cards in four suits of thirteen cards each: A, 2 to 10, J, Q, K.",
            "Hearts and diamonds are red, spades and clubs are black, with 26 cards of each colour.",
            "Face cards are the twelve jacks, queens and kings; the four aces are separate and not face cards.",
            "Honour cards are usually counted as aces plus face cards, giving sixteen.",
            "P(king) = 4/52 = 1/13, P(heart) = 13/52 = 1/4, P(red face card) = 6/52 = 3/26.",
            "Not a face card uses the complement: 1 - 12/52 = 40/52 = 10/13.",
            "If one card is lost or removed, recount everything from a deck of 51 cards."
          ],
          "keyTerms": [
            { "term": "Well-shuffled deck", "meaning": "All 52 cards thoroughly mixed so that every card is equally likely to be drawn." },
            { "term": "Face card", "meaning": "A jack, queen or king; three per suit, twelve per deck." },
            { "term": "Ace", "meaning": "The card marked A; four in a deck, ranked separately and not counted as a face card." }
          ],
          "trick": "Deck skeleton: 52 = 26 red + 26 black; 13 per suit = 9 numbers + 3 faces + 1 ace; face 12, ace 4, honour 16.",
          "examPointer": "Cards give quick one and two-markers; reduce fractions such as 12/52 to 3/13, and remember aces are not face cards when counting the 12."
        },
        {
          "heading": "Probability with Balls, Marbles and Bags",
          "para": "Bag questions are counting in disguise. If a bag holds r red, b black and g green balls, the total number of equally likely outcomes is r + b + g, and P(red) = r/(r + b + g); individual balls of the same colour are distinct outcomes, but for a colour event we simply count the balls of that colour. The phrase drawn at random states that every ball has the same chance. With replacement, the ball goes back before the next draw, so every draw has identical probabilities. Without replacement, the ball stays out, so the next draw has one fewer ball in total and possibly one fewer of a colour; both the numerator and the denominator then change, and Class 10 questions flag this situation explicitly in words. If two bags are emptied into one, first add the contents colour-wise and work from the merged totals. Complements are often quicker: P(not red) = 1 - P(red).",
          "points": [
            "For a bag with r red, b black and g green balls, the total number of outcomes is r + b + g.",
            "P(red) = r/(r + b + g); same-coloured balls are distinct outcomes but are counted together for a colour event.",
            "Drawn at random means every ball in the bag has the same chance of being picked.",
            "With replacement, the ball is returned before the next draw, so the probabilities stay unchanged.",
            "Without replacement, the ball is kept out, so the next draw works with a smaller total and shifted colour counts.",
            "Two bags combined: first add the contents colour-wise, then compute probabilities from the merged totals.",
            "Read whether the event is a colour, the complement of a colour, or one specific ball."
          ],
          "keyTerms": [
            { "term": "Draw at random", "meaning": "Selecting a ball so that every ball in the bag has the same chance." },
            { "term": "With replacement", "meaning": "The drawn ball is returned before the next draw, keeping all probabilities unchanged." },
            { "term": "Without replacement", "meaning": "The drawn ball is kept out, so the next draw is made from a smaller set." }
          ],
          "trick": "Bag rule: colour on top, total on bottom. Not red? Use 1 - P(red). Replacement removed? Shrink the total by one and recount the colour.",
          "examPointer": "When a ball is not replaced, write the reduced total explicitly, for example 8 balls become 7, so the examiner sees the adjustment the next probability uses."
        },
        {
          "heading": "Exam Strategy: Probability Question Patterns",
          "para": "Probability questions come in six frames: definition items on the range, the sum of elementary probabilities, and sure and impossible events; coin tosses with one, two or three coins; dice, covering one-die properties, two-dice sums, doubles and products; cards, with a single draw from 52; bags, with one draw, replacement twists and merged bags; and empirical probability from a trial table, now often wrapped in a case study. A fixed routine wins them all: write the sample space systematically, count the favourable outcomes by listing rather than guessing, reduce the fraction, and then check 0 <= P <= 1 as a self-audit. The counting traps are known: dropping TH among the coin outcomes, forgetting that (2,5) and (5,2) are distinct, counting aces as face cards, and double counting inside or-events. In the current paper the chapter typically contributes a few objective marks plus one two or three-mark question, sometimes inside a case study that reuses earlier totals across its parts.",
          "points": [
            "Write the sample space first, in a systematic order, and count it carefully.",
            "Identify the favourable outcomes of the event by listing, never by guessing.",
            "Reduce every probability fraction to its lowest terms before writing the final answer.",
            "Sanity-check the result: it must satisfy 0 <= P(E) <= 1.",
            "The words at least, not and neither signal the complement method.",
            "Avoid double counting: (1,2) and (2,1) are different outcomes, and so are HT and TH.",
            "Typical paper weight: a few objective items plus one two or three-mark question, sometimes inside a case study."
          ],
          "keyTerms": [
            { "term": "Systematic listing", "meaning": "Writing the outcomes in a fixed pattern, such as dictionary order or a 6 by 6 grid, so none are missed or repeated." },
            { "term": "Sanity check", "meaning": "Verifying that 0 <= P(E) <= 1 before finalising the answer." },
            { "term": "Assertion-reason", "meaning": "An objective format testing whether both a statement about probability and its reason are understood." }
          ],
          "trick": "Three-step script: sample space, favourable count, reduced fraction, then the check 0 <= P <= 1. Never skip the first step in your answer sheet.",
          "examPointer": "Case studies stack a direct part and a complement part that reuse the same totals; answer part one carefully because part two inherits its numbers."
        }
      ],
      "mcqs": [
        { "question": "The probability of an event E always satisfies:", "options": ["0 <= P(E) <= 1", "-1 <= P(E) <= 1", "0 < P(E) < 1", "P(E) > 0"], "answerIndex": 0, "explanation": "Probability lies between 0 and 1 inclusive: 0 belongs to an impossible event and 1 to a sure event, and negative values are impossible.", "difficulty": "easy" },
        { "question": "The sum of the probabilities of all the elementary events of an experiment is:", "options": ["0", "0.5", "1", "dependent on the experiment"], "answerIndex": 2, "explanation": "The elementary events together cover the whole sample space, so their probabilities must account for certainty and add up to exactly 1.", "difficulty": "easy" },
        { "question": "The probability of a sure event is:", "options": ["0", "0.5", "1", "100"], "answerIndex": 2, "explanation": "A sure event occurs on every trial, so all outcomes are favourable and P = total/total = 1; probabilities never exceed 1.", "difficulty": "easy" },
        { "question": "If P(E) = 0.05, then P(E') equals:", "options": ["0.95", "0.05", "1.05", "0.5"], "answerIndex": 0, "explanation": "Complementary events satisfy P(E) + P(E') = 1, so P(E') = 1 - 0.05 = 0.95.", "difficulty": "easy" },
        { "question": "Two coins are tossed simultaneously. The probability of getting exactly one head is:", "options": ["1/4", "1/2", "3/4", "1"], "answerIndex": 1, "explanation": "S = {HH, HT, TH, TT}; exactly one head occurs in HT and TH, giving 2/4 = 1/2. Forgetting TH produces the classic wrong answer 1/4.", "difficulty": "easy" },
        { "question": "Three coins are tossed together. The probability of getting at least one head is:", "options": ["1/8", "3/8", "7/8", "1/2"], "answerIndex": 2, "explanation": "The only outcome with no head is TTT, so by the complement P = 1 - 1/8 = 7/8.", "difficulty": "medium" },
        { "question": "Two dice are thrown. The total number of outcomes is:", "options": ["6", "12", "36", "64"], "answerIndex": 2, "explanation": "Each die shows six possibilities independently, so 6 x 6 = 36 ordered pairs, with (1,2) and (2,1) counted as distinct.", "difficulty": "easy" },
        { "question": "Two dice are thrown. The probability of getting a sum of 7 is:", "options": ["1/6", "7/36", "1/9", "5/36"], "answerIndex": 0, "explanation": "The sum 7 occurs in six ways: (1,6), (2,5), (3,4), (4,3), (5,2) and (6,1), so P = 6/36 = 1/6, the largest of any total.", "difficulty": "medium" },
        { "question": "Two dice are thrown. The probability that both show the same number (a double) is:", "options": ["1/6", "1/36", "1/12", "1/9"], "answerIndex": 0, "explanation": "The doubles (1,1) through (6,6) are six outcomes out of 36, so P = 6/36 = 1/6.", "difficulty": "medium" },
        { "question": "A card is drawn from a well-shuffled deck of 52 cards. The probability that it is a face card is:", "options": ["3/13", "1/13", "1/4", "3/26"], "answerIndex": 0, "explanation": "There are twelve face cards (J, Q, K in four suits), so P = 12/52 = 3/13; aces are not face cards.", "difficulty": "easy" },
        { "question": "A card is drawn from a deck of 52. The probability of drawing an ace is:", "options": ["1/13", "1/52", "1/4", "4/13"], "answerIndex": 0, "explanation": "There are four aces among 52 cards, so P = 4/52 = 1/13, the same value as the probability of any single rank.", "difficulty": "easy" },
        { "question": "The probability of drawing a king of red colour from a deck of 52 cards is:", "options": ["1/26", "1/13", "1/52", "1/2"], "answerIndex": 0, "explanation": "Only the king of hearts and the king of diamonds are red, so 2 favourable among 52 gives P = 2/52 = 1/26.", "difficulty": "medium" },
        { "question": "A bag contains 5 red and 3 black balls. One ball is drawn at random. P(red) is:", "options": ["3/8", "5/8", "5/3", "1/2"], "answerIndex": 1, "explanation": "The bag holds 8 equally likely balls, of which 5 are red, so P(red) = 5/8 and P(black) = 3/8.", "difficulty": "easy" },
        { "question": "A die was rolled 60 times and the number 4 appeared 15 times. The experimental probability of getting 4 is:", "options": ["1/6", "1/4", "1/2", "3/4"], "answerIndex": 1, "explanation": "Experimental probability = trials in which 4 appeared / total trials = 15/60 = 1/4, which need not equal the theoretical 1/6 in a short run.", "difficulty": "medium" },
        { "question": "A die is thrown once. The probability of getting a prime number is:", "options": ["1/6", "1/3", "1/2", "2/3"], "answerIndex": 2, "explanation": "The primes on a die are 2, 3 and 5, three of the six equally likely faces, so P = 3/6 = 1/2.", "difficulty": "easy" },
        { "question": "An event is assigned the probability 1.2. This means:", "options": ["it is a sure event", "the event is impossible", "the statement is wrong, since probability cannot exceed 1", "the event occurs 1.2 times per trial"], "answerIndex": 2, "explanation": "Probability is bounded above by 1, so 1.2 is invalid; a value above 1 always signals a counting mistake in the sample space.", "difficulty": "easy" },
        { "question": "If a ball is drawn from a bag and not replaced, the probability on the next draw changes because:", "options": ["the total number of balls has decreased", "one colour disappears completely", "the event becomes impossible", "probabilities always increase"], "answerIndex": 0, "explanation": "Without replacement the denominator shrinks by one and the favourable count may also drop, so the second draw's probabilities must be recomputed.", "difficulty": "medium" }
      ],
      "boardQuestions": [
        { "question": "Two dice are thrown together. Find the probability that the sum of the numbers is 8, and the probability that the sum is not 8.", "marks": 2, "type": "short", "probability": "high", "answer": "Two dice give 6 x 6 = 36 equally likely ordered pairs, from (1,1) to (6,6). The pairs with sum 8 are (2,6), (3,5), (4,4), (5,3) and (6,2), five of them, so P(sum 8) = 5/36. The event sum is not 8 is the complement, so P(not 8) = 1 - 5/36 = 31/36. Drawing a quick 6 by 6 grid and circling the cells that add to 8 prevents missing pairs such as (5,3), which is a different outcome from (3,5)." },
        { "question": "One card is drawn from a well-shuffled deck of 52 cards. Find the probability that it is (i) a king of red colour, (ii) a face card, (iii) a red face card.", "marks": 3, "type": "short", "probability": "high", "answer": "The deck has 52 equally likely cards. (i) The red kings are the king of hearts and the king of diamonds only, so P = 2/52 = 1/26. (ii) The face cards are the jacks, queens and kings of the four suits, 3 x 4 = 12 cards, so P = 12/52 = 3/13. (iii) The red face cards belong to hearts and diamonds, 3 ranks x 2 suits = 6 cards, so P = 6/52 = 3/26. Reduce every fraction fully, and remember that aces are not face cards; the commonest error in card questions is counting 16 or 13 face cards instead of 12." },
        { "question": "A bag contains 3 red and 5 black balls. A ball is drawn at random from the bag. Find the probability that the ball is (i) red, (ii) black, (iii) red or black.", "marks": 3, "type": "short", "probability": "high", "answer": "The bag holds 3 + 5 = 8 balls, each equally likely to be drawn. (i) P(red) = 3/8. (ii) P(black) = 5/8. (iii) The event red or black happens for every ball in the bag, so it is a sure event with probability 8/8 = 1. Note that the answers in (i) and (ii) add to exactly 1, because red and black here are complementary events covering the whole sample space; this sum-to-one check catches most counting slips instantly." },
        { "question": "A die was rolled 200 times and the faces 1 to 6 appeared with frequencies 25, 30, 38, 22, 40 and 45 respectively. Find the experimental probability of getting (i) the face 1, (ii) the face 6, (iii) an even number.", "marks": 3, "type": "short", "probability": "medium", "answer": "Experimental probability = trials in which the event occurred / total trials, and the given frequencies total 25 + 30 + 38 + 22 + 40 + 45 = 200. (i) P(1) = 25/200 = 1/8. (ii) P(6) = 45/200 = 9/40. (iii) The even numbers are 2, 4 and 6 with frequencies 30, 22 and 45, so P(even) = (30 + 22 + 45)/200 = 97/200. These values differ from the theoretical probabilities of 1/6 and 1/2 because 200 trials is a small sample; with very many trials the experimental values move closer to the theoretical ones." },
        { "question": "Two dice are rolled together. Find the probability of getting (i) a sum of 8, (ii) a double (both dice showing the same number), (iii) a sum divisible by 3.", "marks": 5, "type": "long", "probability": "high", "answer": "There are 36 equally likely ordered pairs. (i) Sum 8: (2,6), (3,5), (4,4), (5,3), (6,2), five pairs, so P = 5/36. (ii) Doubles: (1,1), (2,2), (3,3), (4,4), (5,5), (6,6), six pairs, so P = 6/36 = 1/6. (iii) Sums divisible by 3 are 3, 6, 9 and 12; the numbers of pairs are 2, 5, 4 and 1 respectively, totalling 12, so P = 12/36 = 1/3. The full sum table 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 for totals 2 to 12 answers every such part instantly; memorise it rather than recounting each time." },
        { "question": "Three coins are tossed simultaneously. Find the probability of getting (i) at least two heads, (ii) at most two heads.", "marks": 2, "type": "short", "probability": "high", "answer": "The sample space has 2^3 = 8 outcomes: HHH, HHT, HTH, THH, HTT, THT, TTH, TTT. (i) At least two heads: HHH, HHT, HTH and THH, four outcomes, so P = 4/8 = 1/2. (ii) At most two heads means two or fewer, that is every outcome except HHH, seven outcomes, so P = 7/8; equivalently by the complement, 1 - P(HHH) = 1 - 1/8 = 7/8. Note the direction words: at least counts upward from two, while at most counts downward to zero, and misreading them flips the answer." },
        { "question": "Bag A contains 2 red and 3 black balls, and bag B contains 4 red and 1 black ball. The contents of the two bags are emptied into a single bag, and one ball is drawn at random from it. Find the probability that the ball is (i) red, (ii) black, (iii) not red.", "marks": 3, "type": "short", "probability": "medium", "answer": "First merge the contents: the combined bag holds 2 + 4 = 6 red and 3 + 1 = 4 black balls, ten in all, each equally likely. (i) P(red) = 6/10 = 3/5. (ii) P(black) = 4/10 = 2/5. (iii) Not red means black here, so P(not red) = 4/10 = 2/5, identical to part (ii) because the bag holds only two colours. The habit to build is to compute the new totals before any probability: combining bags changes both the numerator and the denominator, and using one bag's totals for the merged experiment is a common error." },
        { "question": "Two dice are thrown together. Find the probability that (i) the sum is at least 10, (ii) the sum is a prime number, (iii) the product of the two numbers is a perfect square.", "marks": 5, "type": "long", "probability": "medium", "answer": "There are 36 ordered outcomes. (i) Sums of at least 10: sum 10 in 3 ways, sum 11 in 2 ways, sum 12 in 1 way, six pairs in all, so P = 6/36 = 1/6. (ii) Prime sums are 2, 3, 5, 7 and 11, occurring in 1, 2, 4, 6 and 2 ways respectively, a total of 15 pairs, so P = 15/36 = 5/12. (iii) The product is a perfect square for (1,1), (2,2), (3,3), (4,4), (5,5), (6,6), and also (1,4) and (4,1) whose product is 4, giving eight pairs, so P = 8/36 = 2/9. Part (iii) rewards systematic row-by-row listing; guessing mentally usually misses (1,4) and (4,1)." },
        { "question": "If P(E) = 0.37, find P(E'). Can P(E) take the value 1.4 for some event? Give a reason for your answer.", "marks": 2, "type": "short", "probability": "high", "answer": "Complementary events satisfy P(E) + P(E') = 1, so P(E') = 1 - 0.37 = 0.63. The value P(E) = 1.4 is impossible: probability always lies between 0 and 1 inclusive, where 0 marks an impossible event and 1 a sure event. A probability of 1.4 would mean the event occurs in more than every trial, which is logically absurd; such a figure signals an error in counting the sample space. Quote the inequality 0 <= P(E) <= 1 as the reason, since that is exactly what the marking scheme looks for." },
        { "question": "A die is thrown once. Find the probability of getting (i) a prime number, (ii) a number lying between 2 and 6, (iii) an odd number.", "marks": 3, "type": "short", "probability": "high", "answer": "The sample space is {1, 2, 3, 4, 5, 6} with six equally likely outcomes. (i) The primes are 2, 3 and 5, so P = 3/6 = 1/2. (ii) The numbers lying strictly between 2 and 6 are 3, 4 and 5, so P = 3/6 = 1/2. (iii) The odd numbers are 1, 3 and 5, so P = 3/6 = 1/2. All three events happen to share the same probability, but they are different events; note that in board questions the phrase between 2 and 6 means strictly between, so 2 and 6 themselves are not counted." },
        { "question": "Define an elementary event with one example, and state the sum of the probabilities of all the elementary events of an experiment.", "marks": 1, "type": "short", "probability": "medium", "answer": "An elementary event is an event consisting of exactly one outcome of the sample space. For example, when a die is thrown, getting a 4 is an elementary event, while getting an even number is not, since it contains the three outcomes 2, 4 and 6. For a die, the six elementary events each have probability 1/6, and their sum is 6 x 1/6 = 1. In general, the probabilities of all the elementary events of an experiment add up to exactly 1, a fact used constantly to check every probability calculation." }
      ]
    }
  ]
}
