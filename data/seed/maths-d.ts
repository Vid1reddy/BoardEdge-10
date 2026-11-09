export default {
  "code": "maths",
  "name": "Mathematics",
  "bookName": "NCERT Mathematics",
  "weightageMarks": 80,
  "chapters": [
    {
      "number": 12,
      "title": "Surface Areas and Volumes",
      "summary": "This chapter extends mensuration to solids such as cylinders, cones, spheres, hemispheres and frustums, and shows how their surface areas and volumes are calculated. It explains how to handle solids formed by combining or removing basic shapes, like a capsule, a toy on a round base or an ice cream cone. It also covers melting and recasting, where the volume of the material stays constant while the shape changes. Real-life situations such as the capacity of vessels, cost of painting canvas and water displaced by a submerged object are modelled using these formulas.",
      "weightageMarks": 8,
      "difficulty": "medium",
      "hotTopics": [
        "Surface areas of cylinder, cone, sphere and hemisphere",
        "Volumes of basic solids with pi = 22/7",
        "Combination of solids: cone plus hemisphere, cylinder plus hemispheres",
        "Melting, recasting and volume conservation",
        "Frustum of a cone: volume, slant height and capacity",
        "Cost of painting versus capacity problems"
      ],
      "sections": [
        {
          "heading": "Solids and Their Surface Areas",
          "points": [
            "A solid is a three-dimensional figure occupying space; its surface area is the total area of all surfaces enclosing it, measured in square units.",
            "A cuboid has six rectangular faces; its total surface area is 2(lb + bh + hl) and its lateral surface area is 2h(l + b).",
            "A cube is a cuboid with all edges equal; its total surface area is 6a^2 and its lateral surface area is 4a^2.",
            "A right circular cylinder has curved surface area 2 pi r h, and total surface area 2 pi r h + 2 pi r^2 = 2 pi r (h + r).",
            "A right circular cone has slant height l = sqrt(r^2 + h^2); its curved surface area is pi r l and its total surface area is pi r l + pi r^2 = pi r (l + r).",
            "A sphere of radius r has curved surface 4 pi r^2, which is also its total surface area.",
            "A solid hemisphere has curved surface 2 pi r^2; its total surface area includes the flat circular face, so TSA = 2 pi r^2 + pi r^2 = 3 pi r^2.",
            "A hollow hemisphere (bowl) open at the top needs only the curved surface 2 pi r^2 when one metal surface is considered."
          ],
          "keyTerms": [
            { "term": "Surface area", "meaning": "Total area of all surfaces of a solid, measured in square units such as cm^2 or m^2." },
            { "term": "Slant height", "meaning": "Distance from the apex of a cone to any point on the rim of its base, l = sqrt(r^2 + h^2)." },
            { "term": "Hemisphere", "meaning": "Half of a sphere; solid version has TSA 3 pi r^2, curved part alone is 2 pi r^2." },
            { "term": "Total versus curved surface", "meaning": "TSA counts every face including flat bases; CSA or LSA counts only the curved or lateral part." }
          ],
          "trick": "Half a ball costs THREE pi r SQUARED: a hemisphere TSA = 3 pi r^2 because the bowl adds one extra pi r^2 lid to the 2 pi r^2 dome.",
          "examPointer": "Choosing between CSA and TSA decides full or half marks; read whether the vessel is closed, open or hollow before writing the formula."
        },
        {
          "heading": "Volumes of Basic Solids",
          "points": [
            "Volume is the space occupied by a solid, measured in cubic units; for hollow vessels the capacity is the internal volume.",
            "Volume of a cuboid = l x b x h and volume of a cube = a^3.",
            "Volume of a cylinder = pi r^2 h; volume of a cone = (1/3) pi r^2 h, exactly one third of the cylinder on the same base with the same height.",
            "Volume of a sphere = (4/3) pi r^3; volume of a solid hemisphere = (2/3) pi r^3.",
            "Take pi = 22/7 unless stated otherwise; note that (22/7) x 7 = 22 and (22/7) x 49 = 154, so most board numbers come out clean.",
            "If the radius of a cone or cylinder is doubled with height unchanged, the volume becomes 4 times because volume depends on r^2; if both radius and height double, the volume becomes 8 times.",
            "1 litre = 1000 cm^3 and 1 m^3 = 1000 litres; convert carefully in capacity questions.",
            "Volume of a frustum of a cone = (1/3) pi h (r1^2 + r2^2 + r1 r2), where r1 and r2 are the radii of the two circular ends."
          ],
          "keyTerms": [
            { "term": "Volume", "meaning": "Space occupied by a solid, measured in cubic units such as cm^3 or m^3." },
            { "term": "Capacity", "meaning": "Internal volume of a hollow container, usually expressed in litres or millilitres." },
            { "term": "Litre", "meaning": "Unit of capacity with 1 litre = 1000 cm^3 and 1 m^3 = 1000 litres." },
            { "term": "Frustum", "meaning": "Portion of a cone left after cutting it with a plane parallel to the base, like a bucket." }
          ],
          "trick": "Cone, hemisphere and cylinder on the same base with the same height hold volumes in ratio 1 : 2 : 3 - the Ice-Cream-Cup rule.",
          "examPointer": "The 1 : 2 : 3 ratio of cone : hemisphere : cylinder is a repeated MCQ, and the conversion 1 m^3 = 1000 litres is tested inside case studies."
        },
        {
          "heading": "Combination of Solids",
          "points": [
            "Many objects are made by joining or removing basic solids: a capsule is a cylinder with two hemispherical ends, a toy can be a cone on a hemisphere, and an ice cream cone has a hemispherical scoop on a cone.",
            "When solids are joined, their VOLUMES simply add: total volume = sum of the volumes of the parts.",
            "For the surface area of a combination, count only the surfaces actually exposed; hidden circular faces, such as where a cone meets a hemisphere, are not counted.",
            "For a cone standing on a hemisphere of the same radius, exposed area = CSA of cone (pi r l) + CSA of hemisphere (2 pi r^2).",
            "For a capsule with cylinder radius r, cylinder length h and two hemispherical caps, exposed area = 2 pi r h + 4 pi r^2.",
            "If the total height of such a toy is given, subtract the common radius to get the height of the cone part, then find l using l = sqrt(r^2 + h^2).",
            "Always draw a rough labelled figure before writing formulas; most case studies give the total height and expect you to split it into parts."
          ],
          "keyTerms": [
            { "term": "Combination of solids", "meaning": "A solid formed by joining two or more basic solids, whose volume is the sum of the parts." },
            { "term": "Exposed surface", "meaning": "Outer surface visible from outside; hidden faces at the joints are excluded from area calculations." },
            { "term": "Composite solid", "meaning": "An object like a capsule, tent or toy built from cylinders, cones, spheres or hemispheres." },
            { "term": "Common radius", "meaning": "Equal radius shared by two joined solids, used to relate their heights and slant heights." }
          ],
          "trick": "ADD the volumes, SUBTRACT the hiding: volumes never hide, but surface areas lose the faces glued together.",
          "examPointer": "Cost of painting or canvas applies to exposed surface area, while capacity or milk filling applies to volume; mixing these two loses easy marks."
        },
        {
          "heading": "Melting, Recasting and Water Displacement",
          "points": [
            "When a solid is melted and recast into another shape, its total volume remains the same; equate the old and new volumes to find new dimensions.",
            "Classic example: spheres of radii 6, 8 and 10 cm melted into one big sphere satisfy (4/3) pi R^3 = (4/3) pi (6^3 + 8^3 + 10^3) = (4/3) pi (1728), so R^3 = 1728 and R = 12 cm.",
            "When a solid is dropped into water in a cylindrical vessel, the volume of water displaced equals the volume of the solid: pi r^2 (rise in level) = volume of solid.",
            "A wire drawn by melting a sphere or cylinder keeps volume constant: pi R_wire^2 x length = original volume; the wire is treated as a long thin cylinder.",
            "Number of smaller balls obtained from one big sphere = volume of big sphere divided by volume of one small sphere.",
            "Check units first: convert all lengths to the same unit before equating volumes.",
            "Cubic equations like R^3 = 1728 are solved by prime factorisation: 1728 = 2^6 x 3^3 = (2^2 x 3)^3 = 12^3."
          ],
          "keyTerms": [
            { "term": "Recasting", "meaning": "Melting a solid and pouring it into a mould to form a new shape without loss of material." },
            { "term": "Volume conservation", "meaning": "The principle that melting and recasting changes shape but not total volume." },
            { "term": "Water displacement", "meaning": "Rise in water level when a solid is submerged; displaced volume equals the volume of the solid." },
            { "term": "Wire problem", "meaning": "Melting a solid into a cylindrical wire, solved by equating pi r^2 l with the original volume." }
          ],
          "trick": "MELT means EQUAL volumes: old volume = new volume, always, whatever the shapes on either side.",
          "examPointer": "Melting three spheres of radii 6, 8, 10 cm into one (answer R = 12 cm) and water-rise questions are standard 3-5 markers; show the equating step explicitly."
        },
        {
          "heading": "Frustum of a Cone",
          "points": [
            "A frustum is the part of a cone left after cutting it by a plane parallel to the base; buckets, drinking glasses and lampshades are frustums.",
            "If r1 is the radius of the lower end, r2 the radius of the upper end, h the height and l the slant height, then l = sqrt(h^2 + (r2 - r1)^2).",
            "Volume of frustum = (1/3) pi h (r1^2 + r2^2 + r1 r2).",
            "Curved surface area of frustum = pi (r1 + r2) l; total surface area of a closed frustum = pi (r1 + r2) l + pi r1^2 + pi r2^2.",
            "For an open bucket, the metal sheet needed is only the CSA plus the area of the circular bottom (pi r1^2); there is no top lid.",
            "Capacity of the bucket = volume of the frustum, converted to litres by dividing by 1000.",
            "The formulas are symmetric in r1 and r2, so swapping the two radii does not change the result; keep them consistent within one question."
          ],
          "keyTerms": [
            { "term": "Frustum", "meaning": "Truncated cone obtained by slicing parallel to the base; both end faces are circles of different radii." },
            { "term": "Slant height of frustum", "meaning": "l = sqrt(h^2 + (r2 - r1)^2), the slanted edge distance between the rims." },
            { "term": "Capacity", "meaning": "Volume of liquid the frustum vessel can hold, reported in litres after dividing cm^3 by 1000." },
            { "term": "Open vessel", "meaning": "A container like a bucket with no lid, needing CSA plus base area for material but full volume for capacity." }
          ],
          "trick": "Frustum volume = (1/3) pi h (r1 SQUARED + r2 SQUARED + r1 r2 PRODUCT): two squares then a handshake.",
          "examPointer": "Bucket and glass problems combining frustum volume with cost per litre are common case studies; remember to divide cm^3 by 1000 for litres before multiplying by rate."
        },
        {
          "heading": "Common Mistakes and Exam Strategy",
          "points": [
            "Using 3 pi r^2 where 2 pi r^2 is needed (or vice versa) for hemispheres: 3 pi r^2 is the TSA of a solid hemisphere, 2 pi r^2 is only the curved part.",
            "Counting the hidden circular base when a cone and hemisphere are joined; the coincident faces cancel out and must not be painted.",
            "Writing the height h where the slant height l is needed; compute l = sqrt(r^2 + h^2) unless the slant height is directly given.",
            "Forgetting the 1/3 factor in the volume of a cone and in the volume of a frustum.",
            "Mixing radius and diameter: if the diameter is 14 cm, the radius is 7 cm; a large share of errors come from squaring the diameter directly.",
            "Delaying the use of pi = 22/7 turns clean numbers into messy decimals; substitute 22/7 as early as possible and cancel with multiples of 7.",
            "Answering in the wrong unit (cm^2 for an area question or cm^3 for a volume question) or omitting units costs the final mark.",
            "Strategy: write the formula first, substitute values next, then compute - formula and substitution carry marks even if arithmetic slips."
          ],
          "keyTerms": [
            { "term": "Curved versus total", "meaning": "Deciding which surface the question asks for before writing any formula." },
            { "term": "Hidden surface", "meaning": "A face at the joint of two solids that is not part of the exposed area." },
            { "term": "Unit conversion", "meaning": "Changing litres to cm^3 or metres to centimetres so every quantity is in one system." },
            { "term": "Formula-first strategy", "meaning": "Writing the formula, then substitution, then calculation to secure step marks." }
          ],
          "trick": "D-H-A-S check: Diameter halve it, slant not height, Area not volume, Square units not cubic.",
          "examPointer": "Examiners deliberately give diameter instead of radius and open instead of closed vessels; underline these words in the question paper before solving."
        }
      ],
      "mcqs": [
        {
          "question": "The total surface area of a solid hemisphere of radius r is",
          "options": ["2 pi r^2", "3 pi r^2", "4 pi r^2", "pi r^2"],
          "answerIndex": 1,
          "explanation": "A solid hemisphere has curved surface 2 pi r^2 plus the flat circular face pi r^2, giving TSA = 3 pi r^2.",
          "difficulty": "easy",
          "pyq": "CBSE 2020"
        },
        {
          "question": "The slant height of a cone with base radius 6 cm and height 8 cm is",
          "options": ["8 cm", "10 cm", "12 cm", "14 cm"],
          "answerIndex": 1,
          "explanation": "l = sqrt(r^2 + h^2) = sqrt(36 + 64) = sqrt(100) = 10 cm.",
          "difficulty": "easy"
        },
        {
          "question": "The volume of a sphere of radius 3 cm is",
          "options": ["12 pi cm^3", "27 pi cm^3", "36 pi cm^3", "108 pi cm^3"],
          "answerIndex": 2,
          "explanation": "Volume = (4/3) pi r^3 = (4/3) pi x 27 = 36 pi cm^3.",
          "difficulty": "easy"
        },
        {
          "question": "The ratio of the volumes of two spheres whose radii are in the ratio 1 : 2 is",
          "options": ["1 : 2", "1 : 4", "1 : 8", "2 : 1"],
          "answerIndex": 2,
          "explanation": "Volume of a sphere depends on r^3, so the ratio of volumes is 1^3 : 2^3 = 1 : 8.",
          "difficulty": "medium"
        },
        {
          "question": "If the radius of a cone is doubled while its height remains the same, its volume becomes",
          "options": ["2 times", "3 times", "4 times", "8 times"],
          "answerIndex": 2,
          "explanation": "V = (1/3) pi r^2 h depends on r^2, so doubling the radius multiplies the volume by 4.",
          "difficulty": "easy"
        },
        {
          "question": "The curved surface area of a cylinder of radius r and height h is",
          "options": ["2 pi r h", "pi r l", "4 pi r^2", "pi r^2 h"],
          "answerIndex": 0,
          "explanation": "A cylinder unrolls into a rectangle of length 2 pi r and width h, so CSA = 2 pi r h.",
          "difficulty": "easy"
        },
        {
          "question": "A cone, a hemisphere and a cylinder stand on equal bases and have the same height. The ratio of their volumes is",
          "options": ["1 : 2 : 3", "1 : 3 : 2", "2 : 1 : 3", "3 : 2 : 1"],
          "answerIndex": 0,
          "explanation": "With height equal to the radius, the volumes are (1/3) pi r^3, (2/3) pi r^3 and pi r^3, that is 1 : 2 : 3.",
          "difficulty": "medium",
          "pyq": "CBSE 2019"
        },
        {
          "question": "The volume of a frustum of a cone of height h with end radii r1 and r2 is",
          "options": ["(1/3) pi h (r1 + r2)", "(1/3) pi h (r1^2 + r2^2 + r1 r2)", "pi h (r1^2 + r2^2)", "(1/3) pi h (r1 + r2)^2"],
          "answerIndex": 1,
          "explanation": "The frustum volume is (1/3) pi h (r1^2 + r2^2 + r1 r2): the two squared radii plus their product, all times height and pi over 3.",
          "difficulty": "medium"
        },
        {
          "question": "A solid sphere is fully submerged in a cylindrical vessel containing water, and the water level rises. The volume of water displaced equals",
          "options": ["the volume of the sphere", "the total surface area of the sphere", "half the volume of the sphere", "twice the volume of the sphere"],
          "answerIndex": 0,
          "explanation": "A submerged solid pushes out water equal to its own volume; the rise pi r^2 x h equals the volume of the sphere.",
          "difficulty": "easy"
        },
        {
          "question": "The capacity of a hemispherical bowl of radius r, filled to the brim, is",
          "options": ["(2/3) pi r^3", "(4/3) pi r^3", "2 pi r^2", "(1/3) pi r^3"],
          "answerIndex": 0,
          "explanation": "The volume of a hemisphere is (2/3) pi r^3, which is exactly the capacity of the bowl.",
          "difficulty": "easy",
          "pyq": "CBSE 2023"
        },
        {
          "question": "If the radius of a cylinder is doubled and its height is halved, its volume becomes",
          "options": ["the same", "double", "half", "four times"],
          "answerIndex": 1,
          "explanation": "New volume = pi (2r)^2 (h/2) = 2 pi r^2 h, which is double the original volume pi r^2 h.",
          "difficulty": "medium"
        },
        {
          "question": "The volume of a cone of radius 7 cm and height 24 cm is",
          "options": ["1232 cm^3", "1848 cm^3", "616 cm^3", "2464 cm^3"],
          "answerIndex": 0,
          "explanation": "V = (1/3) x (22/7) x 49 x 24 = (1/3) x 22 x 7 x 24 = 3696/3 = 1232 cm^3.",
          "difficulty": "medium",
          "pyq": "CBSE 2022"
        }
      ],
      "boardQuestions": [
        {
          "question": "The radius of a conical tent is 7 m and its height is 24 m. Find the slant height of the tent and the cost of the canvas required to make the tent at the rate of Rs 50 per m^2.",
          "marks": 3,
          "type": "SA",
          "probability": "very-high",
          "answer": "1) The slant height of the cone is l = sqrt(r^2 + h^2) = sqrt(7^2 + 24^2) = sqrt(49 + 576) = sqrt(625) = 25 m. 2) A tent has no floor, so the canvas required equals only the curved surface area of the cone: CSA = pi r l = (22/7) x 7 x 25 = 550 m^2. 3) Cost of canvas = area x rate = 550 x 50 = Rs 27500. 4) Note that only the curved surface is taken; using the total surface area would wrongly add the circular floor of radius 7 m and give an incorrect, higher cost."
        },
        {
          "question": "Find the total surface area of a solid hemisphere of radius 10.5 cm.",
          "marks": 2,
          "type": "SA",
          "probability": "high",
          "answer": "1) For a solid hemisphere of radius r, the total surface area includes the curved dome plus the flat circular base: TSA = 2 pi r^2 + pi r^2 = 3 pi r^2. 2) Substituting r = 10.5 cm: TSA = 3 x (22/7) x 10.5 x 10.5. 3) Since (22/7) x 10.5 = 33, TSA = 3 x 33 x 10.5 = 99 x 10.5 = 1039.5 cm^2. 4) If only the curved portion were asked, for example for a dome, the answer would be 2 pi r^2 = 693 cm^2, so always state which surface the question needs."
        },
        {
          "question": "A wooden toy is in the shape of a right circular cone mounted on a hemisphere of the same radius. The radius of the hemisphere is 3.5 cm and the total height of the toy is 15.5 cm. Find the total surface area of the toy and the cost of painting it all over at the rate of Rs 10 per 100 cm^2.",
          "marks": 5,
          "type": "LA",
          "probability": "very-high",
          "answer": "1) The toy is a cone standing on a hemisphere of common radius r = 3.5 cm; the total height is 15.5 cm, so the height of the cone = 15.5 - 3.5 = 12 cm. 2) Slant height l = sqrt(r^2 + h^2) = sqrt(3.5^2 + 12^2) = sqrt(12.25 + 144) = sqrt(156.25) = 12.5 cm. 3) The circular face where the cone meets the hemisphere is hidden, so painted area = CSA of cone + CSA of hemisphere = pi r l + 2 pi r^2 = (22/7) x 3.5 x 12.5 + 2 x (22/7) x 3.5 x 3.5 = 137.5 + 77 = 214.5 cm^2. 4) Cost of painting at Rs 10 per 100 cm^2 = (214.5/100) x 10 = Rs 21.45. 5) Adding the base area pi r^2 here would be wrong because that face is glued to the hemisphere."
        },
        {
          "question": "Metallic spheres of radii 6 cm, 8 cm and 10 cm respectively are melted to form a single solid sphere. Find the radius and the diameter of the resulting sphere.",
          "marks": 5,
          "type": "LA",
          "probability": "high",
          "answer": "1) On melting, the total volume is conserved: volume of the big sphere = sum of the volumes of the three small spheres. 2) So (4/3) pi R^3 = (4/3) pi (6^3 + 8^3 + 10^3) = (4/3) pi (216 + 512 + 1000) = (4/3) pi (1728). 3) Hence R^3 = 1728. Prime factorisation gives 1728 = 2^6 x 3^3 = (2^2 x 3)^3 = 12^3, so R = 12 cm. 4) Diameter of the new sphere = 2R = 24 cm. 5) As an extra check, the surface area of the new sphere would be 4 pi R^2 = 4 x (22/7) x 144 = 12672/7, which is about 1810.3 cm^2, and the volume method can be verified by noting 216 + 512 + 1000 = 1728 exactly."
        },
        {
          "question": "Read the source and answer the questions: An ice cream seller fills a conical cone of radius 5 cm and height 10 cm completely with ice cream and places a hemispherical scoop of ice cream of radius 5 cm on its top. (a) Name the solids whose combination forms this ice cream. (b) Find the volume of ice cream inside the cone. (c) Find the total volume of ice cream.",
          "marks": 4,
          "type": "CASE",
          "probability": "high",
          "answer": "(a) The ice cream is a combination of a right circular cone of radius 5 cm and height 10 cm with a hemisphere of radius 5 cm placed on its circular face. (b) Volume of the cone part = (1/3) pi r^2 h = (1/3) x (22/7) x 25 x 10 = (250/3) x (22/7) = 5500/21 = 261.9 cm^3 approximately. (c) Volume of the hemispherical scoop = (2/3) pi r^3 = (2/3) x (22/7) x 125 = (250/3) x (22/7) = 5500/21 = 261.9 cm^3 approximately. Total volume = 261.9 + 261.9 = 523.8 cm^3, exactly (500/3) x (22/7) = 11000/21 cm^3. Interestingly both parts are equal here because (1/3) r^2 h = (1/3)(25)(10) = 250/3 equals (2/3) r^3 = (2/3)(125) = 250/3."
        },
        {
          "question": "Read the source and answer the questions: A dairy farmer uses a metal bucket in the form of a frustum of a cone. The radii of its lower and upper ends are 5 cm and 10 cm respectively and its height is 21 cm. (a) Write the formula for the volume of a frustum. (b) Find the capacity of the bucket in litres. (c) Find the cost of the milk it can hold at Rs 40 per litre.",
          "marks": 5,
          "type": "CASE",
          "probability": "medium",
          "answer": "(a) Volume of frustum = (1/3) pi h (r1^2 + r2^2 + r1 r2), where r1 and r2 are the radii of the two ends and h is the height. (b) Here r1 = 5 cm, r2 = 10 cm, h = 21 cm: volume = (1/3) x (22/7) x 21 x (25 + 100 + 50) = (1/3) x (22/7) x 21 x 175. Simplify (1/3) x 21 = 7 and (22/7) x 7 = 22, so volume = 22 x 175 = 3850 cm^3. Since 1 litre = 1000 cm^3, capacity = 3850/1000 = 3.85 litres. (c) Cost of milk = 3.85 x 40 = Rs 154. Remember the frustum formula uses the sum of the squares of the radii plus their product, not the square of their sum."
        }
      ]
    },
    {
      "number": 13,
      "title": "Statistics",
      "summary": "This chapter deals with the statistics of grouped data, where large sets of numbers are organised into class intervals with frequencies. It develops the three measures of central tendency - mean, mode and median - and gives efficient shortcut methods for computing each from a frequency table. Cumulative frequency tables and ogives are used to locate the median graphically. The chapter ends with the empirical relation connecting the three measures and with the interpretation of these measures for real data such as marks, wages and plant heights.",
      "weightageMarks": 8,
      "difficulty": "medium",
      "hotTopics": [
        "Mean by direct, assumed mean and step deviation methods",
        "Mode of grouped data using the modal class formula",
        "Median of grouped data with cumulative frequencies",
        "Less than and more than ogives",
        "Missing frequency problems given the median",
        "Empirical relation: 3 median = mode + 2 mean"
      ],
      "sections": [
        {
          "heading": "Grouped Data: Basic Definitions",
          "points": [
            "Statistics is the science of collecting, organising, analysing and interpreting numerical data.",
            "When the number of observations is large, data is grouped into class intervals such as 10-20, 20-30 with a frequency for each class, forming a grouped frequency distribution.",
            "Class size or class width h is the difference of two consecutive lower limits; for classes 10-20 and 20-30, h = 10.",
            "Class mark x_i = (lower limit + upper limit)/2; for the class 10-20 the class mark is 15, and it represents the whole class in mean calculations.",
            "Cumulative frequency of a class is the sum of the frequencies of all classes up to and including that class; the cumulative frequency of the last class equals the total frequency N.",
            "In exclusive form the classes are 10-20, 20-30 so an observation like 20 belongs to 20-30; in inclusive form 10-19, 20-29 the limits need adjustment before applying the formulas.",
            "The three measures of central tendency - mean, mode and median - describe a typical value of the data, and the right measure depends on the situation."
          ],
          "keyTerms": [
            { "term": "Class interval", "meaning": "A range such as 20-30 into which observations are grouped in a frequency table." },
            { "term": "Class mark", "meaning": "Midpoint of a class, (lower limit + upper limit)/2, used as the representative x value of the class." },
            { "term": "Frequency", "meaning": "Number of observations falling in a particular class interval." },
            { "term": "Cumulative frequency", "meaning": "Running total of frequencies up to a class; the last one equals the total N." }
          ],
          "trick": "Class mark = MIDDLE of the class: add the two limits and halve the sum.",
          "examPointer": "Writing the definition of class mark and cumulative frequency in one line each is a 2-mark warm-up; the fact that the last cumulative frequency equals N is a frequent MCQ."
        },
        {
          "heading": "Mean of Grouped Data: Three Methods",
          "points": [
            "Direct method: mean = sum(f_i x_i)/sum(f_i), where x_i are the class marks and f_i the frequencies.",
            "Assumed mean method: mean = a + sum(f_i d_i)/sum(f_i), with d_i = x_i - a; choose a as the class mark of a middle class to keep numbers small.",
            "Step deviation method: mean = a + h x sum(f_i u_i)/sum(f_i), where u_i = (x_i - a)/h; this turns deviations into small integers and is fastest when all class sizes are equal.",
            "Example: for classes 0-50, 50-100, 100-150 with frequencies 7, 10, 15, the class marks are 25, 75, 125; with a = 125 and h = 50 the u values are -2, -1, 0.",
            "The total sum sum(f_i) = N is the number of observations and appears in the denominator of every mean formula.",
            "The mean uses every observation, so it is affected by extreme values; for salary data a few very large salaries pull the mean upward.",
            "In board answers, show the columns x_i, f_i, f_i x_i (or d_i or u_i) and their totals; the table itself earns method marks."
          ],
          "keyTerms": [
            { "term": "Assumed mean", "meaning": "A chosen convenient class mark a from which deviations are measured to simplify calculation." },
            { "term": "Step deviation", "meaning": "u_i = (x_i - a)/h, the deviation divided by class size, used in the quickest mean method." },
            { "term": "Deviation d_i", "meaning": "Difference x_i - a between a class mark and the assumed mean." },
            { "term": "Class size h", "meaning": "Width of each class interval, which multiplies the mean of u values in the step deviation formula." }
          ],
          "trick": "Mean by step deviation = ASSUMED plus ADJUSTED: a + h x (sum f u / sum f); never forget the h at the end.",
          "examPointer": "Boards often specify the step deviation method, so label the u_i = (x_i - a)/h column clearly; omitting the factor h is the classic error that changes the answer."
        },
        {
          "heading": "Mode of Grouped Data",
          "points": [
            "The mode is the most frequently occurring value; for grouped data it is computed from the modal class, the class with the highest frequency.",
            "Mode = l + ((f1 - f0)/(2 f1 - f0 - f2)) x h, where l is the lower limit of the modal class, f1 its frequency, f0 the frequency of the preceding class, f2 of the succeeding class, and h the class size.",
            "Worked example: for frequencies 4, 9, 15, 6, 3 on classes 0-10 to 40-50, the modal class is 20-30; mode = 20 + ((15 - 9)/(2 x 15 - 9 - 6)) x 10 = 20 + (6/15) x 10 = 20 + 4 = 24.",
            "The mode always lies inside the modal class because the fraction (f1 - f0)/(2 f1 - f0 - f2) is between 0 and 1 when f1 is the maximum frequency.",
            "If two classes tie for the maximum frequency, examine both; pick the one where neighbouring frequencies are smaller, which pushes the correction term up.",
            "For ungrouped data, the mode is simply the observation that appears most often, found by direct counting or a tally table.",
            "Mode is the best measure for data like shoe sizes or most demanded shirt sizes, where the commonest value matters more than the average."
          ],
          "keyTerms": [
            { "term": "Mode", "meaning": "The most frequent value of the data; for grouped data, estimated by the modal class formula." },
            { "term": "Modal class", "meaning": "Class interval with the highest frequency; it contains the mode." },
            { "term": "f1, f0, f2", "meaning": "Frequency of the modal class, of the class before it, and of the class after it." },
            { "term": "Class size h", "meaning": "Width of the modal class used to scale the correction term inside it." }
          ],
          "trick": "MODE = l + (f1 MINUS f0) over (TWICE f1 MINUS both neighbours) times h.",
          "examPointer": "Identifying the modal class correctly is half the work; a favourite 3-marker gives a table and asks only for the mode, so write l, f0, f1, f2, h explicitly before substituting."
        },
        {
          "heading": "Median of Grouped Data and Cumulative Frequency",
          "points": [
            "The median is the middle observation; for grouped data it is found from cumulative frequencies, not from the raw class marks.",
            "Build the cumulative frequency column, then compute N/2 where N is the total frequency.",
            "The median class is the class whose cumulative frequency is the first to be greater than or equal to N/2.",
            "Median = l + ((N/2 - cf)/f) x h, where l is the lower limit of the median class, cf the cumulative frequency of the class preceding it, f the frequency of the median class and h the class size.",
            "Worked example: with frequencies 4, 6, 10 on classes 0-10, 10-20, 20-30, the cumulative frequencies are 4, 10, 20; if N = 40 then N/2 = 20, so the median class is 20-30 with cf = 10 and f = 10; median = 20 + ((20 - 10)/10) x 10 = 30.",
            "The median depends only on the position of observations, so extreme values do not disturb it.",
            "For raw data with n observations arranged in order, the median is the average of the (n/2)-th and (n/2 + 1)-th values when n is even."
          ],
          "keyTerms": [
            { "term": "Median", "meaning": "Middle value of arranged data; for grouped data, estimated using the cumulative frequency table." },
            { "term": "Median class", "meaning": "Class whose cumulative frequency first reaches or crosses N/2." },
            { "term": "cf (preceding)", "meaning": "Cumulative frequency of the class just before the median class, subtracted from N/2 in the formula." },
            { "term": "Position measure", "meaning": "A measure like the median determined by the order of data rather than the values themselves." }
          ],
          "trick": "Median = l + (N/2 MINUS cf before) over f, times h: walk from the lower limit by the fraction of the class still needed.",
          "examPointer": "A wrong cf-before is the most common mistake in 5-mark median questions; always underline that cf means cumulative frequency of the PRECEDING class."
        },
        {
          "heading": "Ogive and Graphical Location of Median",
          "points": [
            "An ogive is a free-hand smooth curve drawn for cumulative frequency against class boundaries.",
            "Less than ogive: plot the upper class limits against the less-than cumulative frequencies, starting with the point at the lower limit of the first class with cumulative frequency 0.",
            "More than ogive: plot the lower class limits against the more-than cumulative frequencies; this curve falls from left to right.",
            "When both ogives are drawn on the same axes, the x-coordinate of their point of intersection is the median of the data.",
            "From a single less than ogive, mark N/2 on the y-axis, draw a horizontal line to meet the curve, and drop a perpendicular to the x-axis; its foot gives the median.",
            "Worked mini-example: less than 10: 6, less than 20: 15, less than 30: 25, less than 40: 33, less than 50: 40; here N = 40, N/2 = 20, which first crosses in class 20-30, giving median = 25.",
            "Ogives also let you read how many observations lie above or below any value, for example the number of students scoring at least 40 marks."
          ],
          "keyTerms": [
            { "term": "Ogive", "meaning": "Curve of cumulative frequency plotted against class boundaries." },
            { "term": "Less than series", "meaning": "Cumulative frequencies of observations below each upper class limit." },
            { "term": "More than series", "meaning": "Cumulative frequencies of observations above each lower class limit." },
            { "term": "Graphical median", "meaning": "Median read from the ogive: the x-coordinate where cumulative frequency equals N/2 or the ogives intersect." }
          ],
          "trick": "LESS than ogive climbs with UPPER limits, MORE than ogive falls with LOWER limits, and where they CROSS is the median.",
          "examPointer": "Case studies give a less-than table and ask for conversion to a frequency distribution plus the median; converting less than 20: 15 into the frequency 9 must be shown as a subtraction step."
        },
        {
          "heading": "Common Mistakes and the Empirical Relation",
          "points": [
            "The empirical relation is 3 median = mode + 2 mean; equivalently mode = 3 median - 2 mean and median = (mode + 2 mean)/3, and it holds approximately for moderately skewed data.",
            "Worked use: if mean = 26 and median = 27, then mode = 3 x 27 - 2 x 26 = 81 - 52 = 29.",
            "In the median formula, cf must be the cumulative frequency of the class PRECEDING the median class, not of the median class itself.",
            "In the mode formula, f1 belongs to the modal class; swapping f0 and f2 flips the sign of the correction term.",
            "The median class is chosen by the cumulative frequency first exceeding N/2; picking the class by limits alone is wrong for grouped data.",
            "Class marks must be computed from the actual limits; using lower limits as x_i gives a wrong mean in the direct method.",
            "Always verify that sum f_i = N at the bottom of the table; one wrong frequency spoils the mean, mode and median together.",
            "Present the working table neatly with columns for x_i, f_i and the product or deviation column; method marks are awarded for a correct table even if the final division slips."
          ],
          "keyTerms": [
            { "term": "Empirical relation", "meaning": "Approximate link 3 median = mode + 2 mean connecting the three averages of a moderately skewed distribution." },
            { "term": "Skewed distribution", "meaning": "An asymmetric distribution in which mean, median and mode differ noticeably." },
            { "term": "Preceding class", "meaning": "The class immediately before the median class, whose cumulative frequency enters the median formula." },
            { "term": "Verification", "meaning": "Final check that all frequencies add to N and that median and mode lie inside their classes." }
          ],
          "trick": "THREE MEDians equal MODE plus TWO MEANs: 3 median = mode + 2 mean.",
          "examPointer": "The empirical relation is a guaranteed MCQ or 1-2 marker; also expect a case study that gives the median and hides one frequency, asking you to work backwards."
        }
      ],
      "mcqs": [
        {
          "question": "The class mark of the class interval 40 - 60 is",
          "options": ["40", "50", "60", "55"],
          "answerIndex": 1,
          "explanation": "Class mark = (40 + 60)/2 = 50.",
          "difficulty": "easy"
        },
        {
          "question": "In the step deviation method, if the assumed mean is a = 25 and the class size is h = 10, the u value for the class mark x = 55 is",
          "options": ["2", "3", "30", "80"],
          "answerIndex": 1,
          "explanation": "u = (x - a)/h = (55 - 25)/10 = 30/10 = 3.",
          "difficulty": "medium",
          "pyq": "CBSE 2018"
        },
        {
          "question": "In the formula Mode = l + ((f1 - f0)/(2 f1 - f0 - f2)) x h, f1 denotes",
          "options": ["the frequency of the class preceding the modal class", "the frequency of the modal class", "the frequency of the class succeeding the modal class", "the total frequency"],
          "answerIndex": 1,
          "explanation": "f1 is the frequency of the modal class, while f0 and f2 are the frequencies of the classes before and after it.",
          "difficulty": "easy"
        },
        {
          "question": "For a grouped distribution with total frequency N = 100, the median class is the class whose cumulative frequency first becomes at least",
          "options": ["25", "50", "75", "100"],
          "answerIndex": 1,
          "explanation": "The median occupies the position N/2 = 50, so the median class is where the cumulative frequency first reaches 50.",
          "difficulty": "easy"
        },
        {
          "question": "If the mean of a distribution is 26 and its median is 27, then its mode by the empirical relation is",
          "options": ["25", "27", "29", "53"],
          "answerIndex": 2,
          "explanation": "Mode = 3 median - 2 mean = 3 x 27 - 2 x 26 = 81 - 52 = 29.",
          "difficulty": "medium",
          "pyq": "CBSE 2020"
        },
        {
          "question": "The cumulative frequency of the last class of a grouped frequency distribution equals",
          "options": ["the class size", "the total frequency N", "the class mark", "always 100"],
          "answerIndex": 1,
          "explanation": "Cumulative frequencies accumulate all frequencies, so the final cumulative frequency is the total number of observations N.",
          "difficulty": "easy"
        },
        {
          "question": "Which measure of central tendency is most affected by extreme values?",
          "options": ["Mode", "Median", "Mean", "All equally"],
          "answerIndex": 2,
          "explanation": "The mean uses every observation, so a few very large or very small values pull it strongly; the median and mode are positional and stay stable.",
          "difficulty": "easy",
          "pyq": "CBSE 2019"
        },
        {
          "question": "A less than ogive is drawn by plotting",
          "options": ["class marks against frequencies", "upper class limits against less than cumulative frequencies", "lower class limits against frequencies", "class marks against class sizes"],
          "answerIndex": 1,
          "explanation": "The less than series accumulates frequencies up to each upper class limit, so the less than ogive rises through points (upper limit, cumulative frequency).",
          "difficulty": "medium"
        },
        {
          "question": "In the formula Median = l + ((N/2 - cf)/f) x h, cf represents",
          "options": ["the frequency of the median class", "the cumulative frequency of the class preceding the median class", "the cumulative frequency of the median class", "the total frequency"],
          "answerIndex": 1,
          "explanation": "cf is the cumulative frequency just before the median class; f is the frequency of the median class itself and h its class size.",
          "difficulty": "medium",
          "pyq": "CBSE 2023"
        },
        {
          "question": "The mode of the distribution with classes 0-10, 10-20, 20-30, 30-40, 40-50 and frequencies 4, 9, 15, 6, 3 is",
          "options": ["21.5", "24", "25", "26.5"],
          "answerIndex": 1,
          "explanation": "Modal class 20-30: mode = 20 + ((15 - 9)/(2 x 15 - 9 - 6)) x 10 = 20 + (6/15) x 10 = 20 + 4 = 24.",
          "difficulty": "medium"
        },
        {
          "question": "While finding the mean by the direct method, the expression sum(f_i x_i) means",
          "options": ["the sum of the frequencies", "the sum of the products of class marks and frequencies", "the sum of the class marks", "the sum of the upper limits"],
          "answerIndex": 1,
          "explanation": "Each class mark x_i is multiplied by its frequency f_i, and these products are added before dividing by sum(f_i).",
          "difficulty": "easy"
        },
        {
          "question": "For classes 10-20, 20-30, 30-40, 40-50, 50-60 with frequencies 2, 3, 5, 2, 3, the median is",
          "options": ["30", "32.5", "35", "37.5"],
          "answerIndex": 2,
          "explanation": "N = 15, N/2 = 7.5; cumulative frequencies are 2, 5, 10, 12, 15, so the median class is 30-40: median = 30 + ((7.5 - 5)/5) x 10 = 30 + 5 = 35.",
          "difficulty": "hard"
        }
      ],
      "boardQuestions": [
        {
          "question": "Find the mean of the following frequency distribution: Class: 0-10, 10-20, 20-30, 30-40, 40-50; Frequency: 5, 8, 12, 7, 8.",
          "marks": 3,
          "type": "SA",
          "probability": "very-high",
          "answer": "1) Class marks x_i: for the classes 0-10, 10-20, 20-30, 30-40, 40-50 the class marks are 5, 15, 25, 35, 45. 2) Multiply each class mark by its frequency: 5 x 5 = 25, 15 x 8 = 120, 25 x 12 = 300, 35 x 7 = 245, 45 x 8 = 360. 3) Sum of frequencies N = 5 + 8 + 12 + 7 + 8 = 40. 4) Sum of f_i x_i = 25 + 120 + 300 + 245 + 360 = 1050. 5) Mean = sum(f_i x_i)/sum(f_i) = 1050/40 = 26.25. 6) Cross-check by the assumed mean method with a = 25: deviations are -20, -10, 0, 10, 20, the weighted sum sum(f_i d_i) = -100 - 80 + 0 + 70 + 160 = 50, so mean = 25 + 50/40 = 25 + 1.25 = 26.25, the same value."
        },
        {
          "question": "Find the mode of the following frequency distribution: Class: 0-10, 10-20, 20-30, 30-40, 40-50; Frequency: 4, 9, 15, 6, 3.",
          "marks": 3,
          "type": "SA",
          "probability": "high",
          "answer": "1) The maximum frequency is 15 in the class 20-30, so the modal class is 20-30 with l = 20, h = 10, f1 = 15, f0 = 9 for the class 10-20 and f2 = 6 for the class 30-40. 2) Mode = l + ((f1 - f0)/(2 f1 - f0 - f2)) x h = 20 + ((15 - 9)/(2 x 15 - 9 - 6)) x 10. 3) Simplify: 15 - 9 = 6 and 30 - 15 = 15, so the fraction is 6/15 = 0.4. 4) Mode = 20 + 0.4 x 10 = 20 + 4 = 24. 5) Confirm that the fraction lies between 0 and 1; here 0.4 is valid, so the mode 24 lies inside the modal class 20-30, exactly as it must."
        },
        {
          "question": "Find the mean of the following distribution using the step deviation method: Class: 0-50, 50-100, 100-150, 150-200, 200-250, 250-300; Frequency: 7, 10, 15, 8, 6, 4.",
          "marks": 5,
          "type": "LA",
          "probability": "high",
          "answer": "1) Class marks: 25, 75, 125, 175, 225, 275; total frequency N = 7 + 10 + 15 + 8 + 6 + 4 = 50. 2) Choose assumed mean a = 125, the class mark of 100-150, and class size h = 50. 3) Step deviations u_i = (x_i - a)/h are -2, -1, 0, 1, 2, 3. 4) Multiply by the frequencies: f_i u_i = -14, -10, 0, 8, 12, 12, so sum(f_i u_i) = -24 + 32 = 8. 5) Mean = a + h x (sum f_i u_i / N) = 125 + 50 x (8/50) = 125 + 8 = 133. 6) The step deviation method keeps every number small; forgetting the factor h at the end would give a wrong mean of about 125.16, so state the formula mean = a + h x (sum f u / sum f) before substituting."
        },
        {
          "question": "For the following frequency distribution, find the median and the mode: Class: 0-10, 10-20, 20-30, 30-40, 40-50, 50-60; Frequency: 4, 6, 10, 8, 7, 5.",
          "marks": 5,
          "type": "LA",
          "probability": "very-high",
          "answer": "1) Cumulative frequencies: 4, 10, 20, 28, 35, 40, so N = 40 and N/2 = 20. 2) The first cumulative frequency reaching 20 is that of class 20-30, so the median class is 20-30 with l = 20, cf = 10, f = 10 and h = 10. 3) Median = l + ((N/2 - cf)/f) x h = 20 + ((20 - 10)/10) x 10 = 20 + 10 = 30. 4) For the mode, the highest frequency 10 lies in class 20-30, so f1 = 10, f0 = 6, f2 = 8: mode = 20 + ((10 - 6)/(2 x 10 - 6 - 8)) x 10 = 20 + (4/6) x 10 = 20 + 6.67 = 26.67 approximately. 5) Consistency check: both the median 30 and the mode 26.67 lie inside the class 20-30, which is exactly what the formulas guarantee."
        },
        {
          "question": "Read the source and answer the questions: The median of the following frequency distribution is 28.5. Class: 0-10, 10-20, 20-30, 30-40, 40-50, 50-60; Frequency: 5, x, 20, 15, 7, 5. (a) Write the total frequency in terms of x. (b) Identify the median class. (c) Find the value of x.",
          "marks": 4,
          "type": "CASE",
          "probability": "high",
          "answer": "(a) Total frequency N = 5 + x + 20 + 15 + 7 + 5 = 52 + x, so N/2 = 26 + x/2. (b) Since the median 28.5 lies between 20 and 30, the median class is 20-30 with l = 20, f = 20, h = 10, and the cumulative frequency of the preceding classes is cf = 5 + x. (c) Apply the formula: 28.5 = 20 + ((N/2 - cf)/20) x 10 = 20 + ((26 + x/2 - 5 - x)/20) x 10. So 8.5 = ((21 - x/2)/20) x 10 = (21 - x/2)/2, which gives 17 = 21 - x/2, hence x/2 = 4 and x = 8. Verification: N = 60, N/2 = 30, cf before the median class = 5 + 8 = 13, median = 20 + ((30 - 13)/20) x 10 = 20 + 8.5 = 28.5, as required."
        },
        {
          "question": "Read the source and answer the questions: The less than cumulative frequency distribution of marks of 40 students is: Marks less than 10: 6; less than 20: 15; less than 30: 25; less than 40: 33; less than 50: 40. (a) Convert it into a class-wise frequency distribution. (b) Find the median marks. (c) How would the median be read from the less than ogive?",
          "marks": 4,
          "type": "CASE",
          "probability": "medium",
          "answer": "(a) Subtracting successive cumulative frequencies gives the class frequencies: 0-10: 6, 10-20: 15 - 6 = 9, 20-30: 25 - 15 = 10, 30-40: 33 - 25 = 8, 40-50: 40 - 33 = 7; the total is N = 40. (b) N/2 = 20; the cumulative frequency first reaches 20 in the class 20-30 (cf = 25), so the median class is 20-30 with l = 20, cf before = 15, f = 10 and h = 10. Median = 20 + ((20 - 15)/10) x 10 = 20 + 5 = 25. (c) Graphically, mark N/2 = 20 on the y-axis of the less than ogive, draw a horizontal line to meet the curve and drop a perpendicular to the x-axis; it meets the axis at 25, confirming the median marks as 25."
        }
      ]
    },
    {
      "number": 14,
      "title": "Probability",
      "summary": "This chapter introduces the theoretical or classical concept of probability as a numerical measure of the chance that an event occurs. It defines random experiment, outcome, sample space and event, and builds the formula P(E) = favourable outcomes / total outcomes for equally likely outcomes. Standard experiments with coins, dice and a well-shuffled deck of 52 cards are analysed by listing their sample spaces and counting favourable outcomes. The chapter also establishes the properties 0 <= P(E) <= 1 and P(E) + P(not E) = 1, and applies them to games and daily-life situations.",
      "weightageMarks": 6,
      "difficulty": "easy",
      "hotTopics": [
        "Theoretical probability P(E) = favourable outcomes / total outcomes",
        "Complementary events P(E) + P(not E) = 1",
        "Probability with a deck of 52 cards",
        "Probability with two dice: sums, doublets and products",
        "Coin tossing and sample spaces",
        "Sure events, impossible events and the range 0 <= P(E) <= 1"
      ],
      "sections": [
        {
          "heading": "Basic Concepts: Experiment, Outcome, Event, Sample Space",
          "points": [
            "A random experiment is an action whose result cannot be predicted with certainty, such as tossing a coin, throwing a die or drawing a card.",
            "Each result of the experiment is called an outcome; the set of all possible outcomes is the sample space of the experiment.",
            "An event is any subset of the sample space, a collection of outcomes we are interested in, such as getting a head or drawing an ace.",
            "Sample spaces to memorise: one coin gives {H, T} with 2 outcomes; two coins give {HH, HT, TH, TT} with 4 outcomes; one die gives {1, 2, 3, 4, 5, 6} with 6 outcomes; two dice give 6 x 6 = 36 ordered outcomes.",
            "Outcomes are equally likely when each has the same chance of occurring, as with a fair coin, a fair die or a well-shuffled deck.",
            "Favourable outcomes are the outcomes that make the event happen; counting them correctly is the central skill of this chapter.",
            "For two dice, outcomes are ordered pairs: (3, 5) and (5, 3) are different outcomes, which is why the total is 36 and not 21."
          ],
          "keyTerms": [
            { "term": "Random experiment", "meaning": "An action with a well-defined set of possible results whose actual result cannot be predicted in advance." },
            { "term": "Sample space", "meaning": "The set of all possible outcomes of an experiment." },
            { "term": "Event", "meaning": "A subset of the sample space; a collection of outcomes whose occurrence we study." },
            { "term": "Equally likely outcomes", "meaning": "Outcomes that have the same chance of occurring, required for the theoretical probability formula." }
          ],
          "trick": "Sample space sizes: coins 2 and 4, die 6, two dice 36, cards 52 - memorise these five numbers and half the chapter is done.",
          "examPointer": "Writing the full sample space for two dice or two coins is often a graded step in case studies; use a 6 by 6 grid for two dice so no outcome is missed."
        },
        {
          "heading": "Theoretical Probability and Its Properties",
          "points": [
            "Theoretical probability of an event E is P(E) = favourable outcomes / total outcomes, valid when all outcomes are equally likely.",
            "Range: 0 <= P(E) <= 1; a probability can never be negative and never exceed 1.",
            "P(sure event) = 1, for example getting a number less than 7 on a die; P(impossible event) = 0, for example getting an 8 on a die.",
            "Complementary event not E: P(E) + P(not E) = 1, so P(not E) = 1 - P(E).",
            "The sum of the probabilities of all elementary events of an experiment is 1; for a die, P(1) + P(2) + ... + P(6) = 6/6 = 1.",
            "Example: P(even number on a die) = 3/6 = 1/2, and P(not an even number) = 1 - 1/2 = 1/2.",
            "If P(E) = 0.35, then P(not E) = 0.65; decimals are perfectly valid probability answers.",
            "Empirical or experimental probability computed from real trials approaches the theoretical probability as the number of trials becomes very large."
          ],
          "keyTerms": [
            { "term": "Theoretical probability", "meaning": "P(E) = favourable outcomes / total outcomes for equally likely outcomes." },
            { "term": "Sure event", "meaning": "An event that must happen; its probability is 1." },
            { "term": "Impossible event", "meaning": "An event with no favourable outcomes; its probability is 0." },
            { "term": "Complementary event", "meaning": "The event not E containing every outcome outside E, with P(E) + P(not E) = 1." }
          ],
          "trick": "P(E) = WANTED over TOTAL, always between ZERO and ONE; NOT E takes the leftover 1 - P(E).",
          "examPointer": "Stating 0 <= P(E) <= 1 and P(E) + P(not E) = 1 with a one-line justification is the most repeated 1-2 marker of this chapter."
        },
        {
          "heading": "Probability with a Deck of 52 Cards",
          "points": [
            "A deck has 52 cards in 4 suits: hearts and diamonds are red (26 cards), spades and clubs are black (26 cards).",
            "Each suit has 13 cards: one ace, the numbers 2 to 10, and three face cards - jack, queen and king.",
            "Face cards total 3 x 4 = 12; aces are 4 in number and are NOT face cards.",
            "Standard results: P(ace) = 4/52 = 1/13; P(spade) = 13/52 = 1/4; P(face card) = 12/52 = 3/13; P(king of red colour) = 2/52 = 1/26.",
            "For neither a heart nor a red king: excluded cards are 13 hearts plus the king of diamonds (the king of hearts is already inside the hearts), so P = (52 - 14)/52 = 38/52 = 19/26.",
            "Number cards from 2 to 10 are 9 per suit, 36 in all, so P(number card) = 36/52 = 9/13.",
            "Honour cards (ace, jack, queen, king) are 4 per suit, 16 in all, so P(honour card) = 16/52 = 4/13."
          ],
          "keyTerms": [
            { "term": "Suit", "meaning": "One of the four groups of 13 cards: hearts, diamonds, spades, clubs; two suits are red and two black." },
            { "term": "Face card", "meaning": "Jack, queen or king; 12 in a deck of 52. An ace is not a face card." },
            { "term": "Honour card", "meaning": "Ace, king, queen or jack; 16 in a deck of 52." },
            { "term": "Well-shuffled deck", "meaning": "A deck mixed thoroughly so that every card is equally likely to be drawn." }
          ],
          "trick": "Deck map: 52 = 26 red + 26 black; each suit 13 = 1 ace + 9 numbers + 3 faces.",
          "examPointer": "Card questions assume a well-shuffled deck; state the favourable count first, then divide by 52 and cancel to lowest terms for full credit."
        },
        {
          "heading": "Probability with Dice and Coins",
          "points": [
            "One die: P(prime) = P(2, 3, 5) = 3/6 = 1/2; P(even) = 3/6 = 1/2; P(number greater than 4) = 2/6 = 1/3; P(number between 2 and 6) = P(3, 4, 5) = 1/2.",
            "One die: P(square number) = P(1, 4) = 2/6 = 1/3; P(number less than 7) = 6/6 = 1, a sure event.",
            "Two coins: sample space {HH, HT, TH, TT}; P(two heads) = 1/4, P(exactly one head) = 2/4 = 1/2, P(at least one head) = 3/4.",
            "Three coins: 8 outcomes; P(exactly two heads) = 3/8 and P(at least one head) = 7/8.",
            "Two dice: 36 outcomes; the sum counts are 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 for sums 2 to 12, so P(sum 7) = 6/36 = 1/6 is the maximum.",
            "Two dice: P(doublet) = 6/36 = 1/6; P(sum 9) = 4/36 = 1/9; P(sum at least 10) = 6/36 = 1/6; P(product odd) = 9/36 = 1/4.",
            "For at least one type questions use the complement: with two dice, P(at least one six) = 1 - 25/36 = 11/36, since 25 outcomes show no six."
          ],
          "keyTerms": [
            { "term": "Doublet", "meaning": "Both dice showing the same number, for example (4, 4); there are 6 doublets among 36 outcomes." },
            { "term": "At least one", "meaning": "One or more occurrences; usually computed as 1 minus the probability of none." },
            { "term": "Exactly one", "meaning": "Precisely one occurrence and no more, counted directly from the sample space." },
            { "term": "Ordered outcome", "meaning": "A pair like (3, 5) where the order of the dice matters, making the two-dice total 36." }
          ],
          "trick": "Two-dice sum counts climb 1, 2, 3, 4, 5, 6 and then descend symmetrically: SEVEN is the king with 6 ways.",
          "examPointer": "Two-dice answers must show the total 36 explicitly; for at least questions, writing 1 minus the complement is faster and safer than listing many outcomes."
        },
        {
          "heading": "Missing Probability and Daily-Life Applications",
          "points": [
            "If P(E) is given, then P(not E) = 1 - P(E) immediately: P(E) = 0.05 gives P(not E) = 0.95.",
            "In a bag of balls, P(red) = number of red balls / total balls; with 4 red and 6 black balls, P(red) = 2/5, P(black) = 3/5, and P(not black) = P(red) = 2/5.",
            "For events like the ball being neither red nor black, first check whether other colours exist; if the bag holds only two colours, the probability is 0.",
            "Missing count problems: if P(red) = 1/3 and the bag has 15 balls, then red balls = 15 x 1/3 = 5; multiply the probability by the total to recover the count.",
            "Quality-control style questions: a lot of 20 bulbs containing 4 defective ones gives P(defective) = 4/20 = 1/5 and P(good) = 4/5.",
            "Statements like the probability of rain today is 0.35 imply P(no rain) = 0.65; all such events must still obey the probability rules.",
            "Games: an event with probability 1/2 makes a two-outcome game fair; unequal probabilities make it biased, and the bias is justified numerically."
          ],
          "keyTerms": [
            { "term": "Complement rule", "meaning": "P(not E) = 1 - P(E), used to find a missing probability or an at least probability." },
            { "term": "Favourable count", "meaning": "Number of outcomes making the event true, obtained by multiplying probability by total when counts are hidden." },
            { "term": "Defective items", "meaning": "Faulty members of a lot, a standard context for probability questions with P(defective) = defective / total." },
            { "term": "Fair game", "meaning": "A game where each player has equal probability of winning, typically 1/2." }
          ],
          "trick": "Given P(E)? SUBTRACT from 1. Need a count? MULTIPLY probability by total.",
          "examPointer": "Case studies on bags, bulbs and games ask whether a game is fair; answer with both probabilities and an explicit comparison, not with numbers alone."
        },
        {
          "heading": "Common Mistakes and Exam Strategy",
          "points": [
            "Adding probabilities of overlapping events incorrectly; at Class 10 level, always count favourable outcomes directly instead of combining event probabilities.",
            "Using 21 outcomes for two dice by treating (3, 5) and (5, 3) as the same; the correct total is 36 ordered outcomes.",
            "Forgetting that an ace is not a face card, so there are 12 face cards, not 16.",
            "Writing probabilities greater than 1 or negative; finish with the sanity check 0 <= P(E) <= 1.",
            "Confusing at least one head (3/4 for two coins) with exactly one head (1/2) and two heads (1/4).",
            "Not reducing fractions to lowest terms: 4/52 must finally be written as 1/13 for full credit.",
            "Guessing P(not E) by some multiplication; the only correct relation is P(not E) = 1 - P(E).",
            "Strategy: define the sample space, state the total outcomes, count the favourable outcomes, then apply P(E) = favourable/total with cancellation shown."
          ],
          "keyTerms": [
            { "term": "Lowest terms", "meaning": "Final fraction with numerator and denominator having no common factor, like 1/13 for 4/52." },
            { "term": "Sanity check", "meaning": "Confirming the answer lies between 0 and 1 before finalising." },
            { "term": "Ordered outcomes", "meaning": "Distinct outcomes that differ in order, such as (2, 6) and (6, 2) for two dice." },
            { "term": "Direct counting", "meaning": "Listing or counting favourable outcomes from the sample space instead of using advanced rules." }
          ],
          "trick": "S-T-C-P: Space, Total, Count, Probability - four short lines earn full method marks.",
          "examPointer": "Examiners award marks for the stated sample space and favourable count; jumping straight to the final fraction risks losing half the marks even when the number is right."
        }
      ],
      "mcqs": [
        {
          "question": "For any event E, P(E) + P(not E) equals",
          "options": ["0", "1/2", "1", "2"],
          "answerIndex": 2,
          "explanation": "E and not E together cover the whole sample space, so their probabilities add up to 1.",
          "difficulty": "easy"
        },
        {
          "question": "The probability of an impossible event is",
          "options": ["0", "1", "1/2", "-1"],
          "answerIndex": 0,
          "explanation": "An impossible event has no favourable outcomes, so P = 0/total = 0.",
          "difficulty": "easy"
        },
        {
          "question": "Which of the following cannot be the probability of an event?",
          "options": ["0", "0.75", "1.5", "1"],
          "answerIndex": 2,
          "explanation": "Probability always satisfies 0 <= P(E) <= 1, so 1.5 is impossible.",
          "difficulty": "easy",
          "pyq": "CBSE 2020"
        },
        {
          "question": "A die is thrown once. The probability of getting a prime number is",
          "options": ["1/3", "1/2", "2/3", "5/6"],
          "answerIndex": 1,
          "explanation": "The primes on a die are 2, 3 and 5, so P = 3/6 = 1/2.",
          "difficulty": "easy"
        },
        {
          "question": "Two coins are tossed together. The probability of getting exactly one head is",
          "options": ["1/4", "1/2", "3/4", "1"],
          "answerIndex": 1,
          "explanation": "The sample space is {HH, HT, TH, TT}; exactly one head occurs in HT and TH, so P = 2/4 = 1/2.",
          "difficulty": "easy"
        },
        {
          "question": "One card is drawn from a well-shuffled deck of 52 cards. The probability that it is a face card is",
          "options": ["3/13", "1/13", "1/4", "4/13"],
          "answerIndex": 0,
          "explanation": "There are 12 face cards, 3 in each suit, so P = 12/52 = 3/13.",
          "difficulty": "medium",
          "pyq": "CBSE 2023"
        },
        {
          "question": "One card is drawn from a deck of 52 cards. The probability that it is not an ace is",
          "options": ["1/13", "4/13", "9/13", "12/13"],
          "answerIndex": 3,
          "explanation": "P(ace) = 4/52 = 1/13, so P(not an ace) = 1 - 1/13 = 12/13 by the complement rule.",
          "difficulty": "medium"
        },
        {
          "question": "Two dice are thrown together. The probability that the sum of the numbers on the two faces is 13 is",
          "options": ["0", "1/36", "1/12", "1/6"],
          "answerIndex": 0,
          "explanation": "The maximum sum with two dice is 12, so this event is impossible and P = 0.",
          "difficulty": "medium"
        },
        {
          "question": "If P(E) = 0.35, then P(not E) is",
          "options": ["0.35", "0.65", "0.5", "1.35"],
          "answerIndex": 1,
          "explanation": "P(not E) = 1 - P(E) = 1 - 0.35 = 0.65.",
          "difficulty": "easy",
          "pyq": "CBSE 2019"
        },
        {
          "question": "The sum of the probabilities of all the elementary events of an experiment is",
          "options": ["0", "1/2", "1", "depends on the experiment"],
          "answerIndex": 2,
          "explanation": "The elementary events partition the sample space, so their probabilities add up to exactly 1.",
          "difficulty": "easy"
        },
        {
          "question": "A bag contains 3 red and 5 black balls. A ball is drawn at random. The probability that it is red is",
          "options": ["3/5", "5/8", "3/8", "1/2"],
          "answerIndex": 2,
          "explanation": "Total balls = 8 and favourable = 3, so P(red) = 3/8.",
          "difficulty": "easy"
        },
        {
          "question": "A die is thrown once. The probability of getting a number lying between 2 and 6 is",
          "options": ["1/3", "1/2", "2/3", "5/6"],
          "answerIndex": 1,
          "explanation": "Numbers between 2 and 6 are 3, 4 and 5, so P = 3/6 = 1/2.",
          "difficulty": "medium",
          "pyq": "CBSE 2024"
        }
      ],
      "boardQuestions": [
        {
          "question": "One card is drawn at random from a well-shuffled deck of 52 playing cards. Find the probability that the card is (i) an ace, (ii) a king of red colour.",
          "marks": 2,
          "type": "SA",
          "probability": "very-high",
          "answer": "1) Total possible outcomes = 52, since the deck is well shuffled and every card is equally likely to be drawn. 2) Aces: there is one ace in each of the 4 suits, so favourable outcomes = 4 and P(ace) = 4/52 = 1/13. 3) Kings of red colour: the king of hearts and the king of diamonds, so favourable outcomes = 2 and P(red king) = 2/52 = 1/26. 4) Both answers are proper fractions between 0 and 1, consistent with 0 <= P(E) <= 1; and if needed, P(not an ace) = 1 - 1/13 = 12/13 by the complement rule."
        },
        {
          "question": "A bag contains 4 red and 6 black balls. One ball is drawn at random from the bag. Find the probability that the ball drawn is (i) red, (ii) black, (iii) not black.",
          "marks": 3,
          "type": "SA",
          "probability": "high",
          "answer": "1) Total balls = 4 + 6 = 10, and every ball is equally likely to be drawn. 2) P(red) = 4/10 = 2/5 = 0.4. 3) P(black) = 6/10 = 3/5 = 0.6. 4) P(not black) = 1 - P(black) = 1 - 3/5 = 2/5, which equals P(red) because the bag contains only red and black balls, so the ball being not black is the same as it being red. 5) Check: P(red) + P(black) = 2/5 + 3/5 = 1, as these two events exhaust the whole sample space. Writing the answers as decimals 0.4 and 0.6 is equally acceptable."
        },
        {
          "question": "One card is drawn at random from a well-shuffled deck of 52 cards. Find the probability that the card is (i) a face card, (ii) a spade, (iii) neither a heart nor a red king.",
          "marks": 5,
          "type": "LA",
          "probability": "very-high",
          "answer": "1) Total outcomes = 52, all equally likely. 2) Face cards: jack, queen and king in each of 4 suits give 12 cards, so P(face card) = 12/52 = 3/13. 3) Spades: one complete suit of 13 cards, so P(spade) = 13/52 = 1/4. 4) Neither a heart nor a red king: the hearts number 13, and among the two red kings the king of hearts is already counted, so only the king of diamonds is extra; excluded cards = 13 + 1 = 14. 5) Favourable cards = 52 - 14 = 38, so P = 38/52 = 19/26. Equivalently P = 1 - 14/52 = 1 - 7/26 = 19/26. Remember that aces are not face cards, so no ace is excluded in any part of this question."
        },
        {
          "question": "Two dice are thrown together. Find the probability that (i) the sum of the numbers on the two faces is 9, (ii) the two numbers form a doublet, (iii) the sum of the numbers is at least 10.",
          "marks": 5,
          "type": "LA",
          "probability": "high",
          "answer": "1) Two dice thrown together give 6 x 6 = 36 equally likely ordered outcomes. 2) Sum 9: the outcomes are (3, 6), (4, 5), (5, 4), (6, 3) - 4 outcomes, so P(sum 9) = 4/36 = 1/9. 3) Doublets: (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6) - 6 outcomes, so P(doublet) = 6/36 = 1/6. 4) Sum at least 10: for sum 10, (4, 6), (5, 5), (6, 4); for sum 11, (5, 6), (6, 5); for sum 12, (6, 6) - total 6 outcomes, so P = 6/36 = 1/6. 5) A useful check: the sum counts rise 1, 2, 3, 4, 5, 6 and then fall symmetrically, with 7 the most likely sum at 6/36 = 1/6; every fraction above must lie between 0 and 1."
        },
        {
          "question": "Read the source and answer the questions: A and B play a game using a single fair die. A rolls the die once and wins if it shows 6, while B wins if it shows any other number. (a) Find P(A wins). (b) Find P(B wins). (c) Is the game fair? Justify your answer. (d) Suggest one change in the winning rules that would make the game fair.",
          "marks": 4,
          "type": "CASE",
          "probability": "high",
          "answer": "(a) The sample space is {1, 2, 3, 4, 5, 6} with 6 equally likely outcomes. A wins only on 6, so P(A wins) = 1/6. (b) B wins on 1, 2, 3, 4 or 5, so P(B wins) = 5/6. (c) The game is not fair: a fair game requires equal winning probabilities, but 5/6 is five times 1/6, so B is heavily favoured. (d) One fair change: let A win on the even numbers {2, 4, 6} and B win on the odd numbers {1, 3, 5}; then each player has probability 3/6 = 1/2. This shows that fairness comes from dividing the sample space into equal parts, not from taking equal turns."
        },
        {
          "question": "Read the source and answer the questions: A family has two children. Assume each child is equally likely to be a boy or a girl, and the gender of each child is independent of the other. (a) List the sample space. (b) Find the probability that both children are girls. (c) Find the probability of exactly one girl. (d) Find the probability of at least one girl.",
          "marks": 5,
          "type": "CASE",
          "probability": "medium",
          "answer": "(a) Sample space: {BB, BG, GB, GG}, four equally likely outcomes, where B stands for boy and G for girl; BG and GB are different because birth order matters. (b) P(both girls) = P(GG) = 1/4. (c) P(exactly one girl) = P(BG or GB) = 2/4 = 1/2. (d) P(at least one girl) = P(BG, GB, GG) = 3/4; equivalently, by the complement rule, 1 - P(no girl) = 1 - P(BB) = 1 - 1/4 = 3/4. Also P(no girl) = P(BB) = 1/4. As a final check, the four elementary outcomes each carry probability 1/4 and together sum to 1, satisfying the rule that the sum of probabilities of all elementary events is 1."
        }
      ]
    }
  ]
}
