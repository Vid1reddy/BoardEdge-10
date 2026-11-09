// HAND-WRITTEN fix seed for Science chapters 8, 9, 11, 12, 13 (NCERT Class 10, CBSE 2026 syllabus). Format-compatible with data/seed/gen files.
export default {
  "code": "science",
  "name": "Science",
  "bookName": "Science (NCERT Class 10)",
  "weightageMarks": 80,
  "chapters": [
    {
      "number": 8,
      "title": "Heredity",
      "summary": "This chapter explains how traits pass from parents to offspring and why no two individuals are identical. It distinguishes heredity from variation, shows why acquired traits like trained muscles or a giraffe's stretched neck die with the body while germ-cell DNA passes traits on, and then works through Gregor Mendel's pea-plant experiments: monohybrid crosses giving an all-tall F1 and a 3:1 phenotypic with 1 TT : 2 Tt : 1 tt genotypic F2 ratio, the law of dominance and the law of segregation, and the dihybrid cross whose 9:3:3:1 ratio establishes independent assortment. It connects genes to DNA, proteins and enzymes (the plant-height hormone example), describes chromosomes - 23 pairs in humans with one set from each parent - and derives the XX-XY pattern of sex determination, proving that the father's sperm decides a child's sex. It closes with how variations accumulate across generations under selection pressure, the bridge to evolution. Expect Punnett-square numericals, ratio questions and assertion-reason items every year.",
      "weightageMarks": 5,
      "difficulty": "medium",
      "hotTopics": [
        "Mendel's monohybrid cross and the 3:1 ratio",
        "Dihybrid cross and the 9:3:3:1 ratio",
        "Laws of dominance and segregation",
        "Sex determination (XX-XY pattern) in humans",
        "Acquired versus inherited traits and variation"
      ],
      "sections": [
        {
          "heading": "Heredity and Variation: The Basics",
          "para": "Heredity is the transmission of characters or traits from parents to their offspring through genes present in the reproductive cells, which is why children resemble their families; variation is the set of differences that appear between parents and offspring and among siblings of the same parents. No two brothers or sisters are exactly alike because sexual reproduction mixes and reshuffles genes every time a new individual is formed. Variation is not a defect but a survival tool: when conditions change suddenly, individuals carrying suitable variants live on while others perish - NCERT's example is heat-tolerant bacteria surviving an abrupt rise in temperature that kills the rest of the colony. Traits are of two kinds. Acquired traits, such as learning to cycle, building muscle or a wrestler's physique, develop during one lifetime and affect only body cells, so they cannot be inherited. Inherited traits, such as eye colour or blood group, are carried in the DNA of germ cells and pass to children. The giraffe argument makes the difference vivid: a giraffe stretching for high leaves lengthens its own neck only, and such acquired elongation is not inherited, whereas naturally longer-necked genetic variants can be selected generation after generation.",
          "points": [
            "Heredity is the transmission of traits from parents to offspring through genes in the germ cells.",
            "Variation means differences between parents and offspring and among siblings; sexual reproduction creates fresh gene combinations each generation.",
            "Variants suited to a changed environment survive; heat-tolerant bacteria outlive the rest of the colony during a sudden heat wave.",
            "Acquired traits such as learnt skills or trained muscles change only body cells, so they are not inherited.",
            "Cutting the tails of mice for many generations still produces tailed offspring, proving body changes do not reach germ cell DNA.",
            "The giraffe's stretched neck is an acquired change that dies with the individual; only inherited genetic variants for longer necks can pass on.",
            "Inherited traits like eye colour and blood group travel through egg and sperm because their DNA is copied into the next generation."
          ],
          "keyTerms": [
            { "term": "Heredity", "meaning": "Transmission of traits from parents to offspring through genes in the germ cells." },
            { "term": "Variation", "meaning": "Differences in traits between parents and offspring and among individuals of the same species." },
            { "term": "Acquired trait", "meaning": "A change developed during an individual's lifetime in body cells only; it is not inherited." },
            { "term": "Inherited trait", "meaning": "A trait carried by germ cell DNA (egg and sperm) and passed to the next generation." }
          ],
          "trick": "One question decides everything: did the change touch germ cell DNA? Yes - inherited; No - acquired, and it dies with the body.",
          "examPointer": "A 2-marker often asks why acquired traits are not inherited; answer with the germ cell DNA logic plus the giraffe or the mice-tail experiment."
        },
        {
          "heading": "Mendel's Experiments: The Design",
          "para": "Gregor Johann Mendel, an Austrian monk who experimented in his monastery garden in the mid-nineteenth century, is called the father of genetics because his breeding experiments on the garden pea, Pisum sativum, uncovered the rules of inheritance long before anyone had seen a gene. He chose the pea for solid practical reasons: it is naturally self-pollinating, so pure lines were easy to keep and cross-pollination could be done manually under his control; it has a short life cycle and produces many seeds, so he could raise and count hundreds of offspring quickly; and it shows several pairs of clearly contrasting visible traits, such as tall versus dwarf plants, round versus wrinkled seeds and yellow versus green seeds. Mendel first built true-breeding lines - plants that, on self-pollination for generations, always produced offspring with the same form of a trait. He then artificially crossed plants showing the two contrasting forms; this parental or P generation produced the first filial or F1 generation, and self-pollination of the F1 gave the second filial or F2 generation. A cross that follows one pair of contrasting traits is a monohybrid cross, and Mendel's habit of counting large numbers of progeny made his ratios statistically reliable.",
          "points": [
            "Gregor Mendel, an Austrian monk, discovered the rules of inheritance by breeding garden pea plants in his monastery garden.",
            "Pea is self-pollinating, so true-breeding lines were easy to maintain and artificial cross-pollination was easy to perform.",
            "The pea has a short life cycle and yields many seeds, allowing large progenies to be raised and counted quickly.",
            "The plant offers clear contrasting pairs: tall or dwarf, round or wrinkled seeds, yellow or green seeds, and more.",
            "True-breeding lines were obtained by self-pollination until every generation showed exactly the same trait.",
            "Crossing the two contrasting forms gave the P to F1 generations, and self-pollinating the F1 produced the F2 generation.",
            "A monohybrid cross tracks one pair of contrasting traits; Mendel counted large numbers so the ratios were trustworthy."
          ],
          "keyTerms": [
            { "term": "True-breeding line", "meaning": "A line that, on self-pollination for several generations, always gives offspring with the same form of a trait." },
            { "term": "Monohybrid cross", "meaning": "A cross between plants differing in one pair of contrasting traits." },
            { "term": "F1 generation", "meaning": "The first filial generation, the immediate offspring of the parental (P) cross." },
            { "term": "F2 generation", "meaning": "The offspring produced by self-pollinating the F1 plants; it reveals the hidden ratios." },
            { "term": "Self-pollination", "meaning": "Transfer of pollen from a flower to its own stigma, keeping a line pure unless crossed artificially." }
          ],
          "trick": "Pea won on 'S-L-C': Self-pollinating, Large progeny, Contrasting traits - and Mendel counted, he never guessed.",
          "examPointer": "A frequent 2-marker asks why Mendel chose pea plants; write self-pollination, many contrasting character pairs, short life cycle with large seed numbers."
        },
        {
          "heading": "Monohybrid Cross: The 3:1 Ratio",
          "para": "In his classic monohybrid cross, Mendel crossed a pure tall pea plant (TT) with a pure dwarf plant (tt). Every single plant of the F1 generation grew tall, so tallness behaved as the dominant trait and dwarfness as the recessive one; dwarfness seemed to disappear altogether. When the F1 tall plants were self-pollinated, the F2 generation showed both forms again in a fixed pattern of about three tall to one dwarf, written 3:1. The reappearance of dwarf plants carried the big lesson: the recessive factor had not been destroyed or blended away in the F1 - it had simply stayed hidden, and it resurfaced when two F1 plants happened to contribute their recessive factors together. In genotype terms, each F1 plant is Tt, a heterozygote that looks tall. Self-pollinating Tt with Tt gives four equally likely combinations - TT, Tt, Tt and tt - so the F2 genotypic ratio is 1 TT : 2 Tt : 1 tt. Because both TT and Tt plants look tall, the phenotypic ratio becomes 3 tall : 1 dwarf. The gap between what genes an organism carries (genotype) and what actually shows in its body (phenotype) is the heart of this chapter.",
          "points": [
            "Crossing pure tall (TT) with pure dwarf (tt) gives an F1 in which every plant is tall with genotype Tt.",
            "Self-pollination of the F1 gives an F2 phenotypic ratio of 3 tall : 1 dwarf.",
            "The dwarf trait reappears in F2, proving the recessive factor was hidden in the F1, not destroyed or blended.",
            "The F2 genotypic ratio is 1 TT : 2 Tt : 1 tt, which differs from the 3:1 phenotypic ratio.",
            "Genotype is the genetic make-up (TT, Tt or tt); phenotype is the visible trait (tall or dwarf).",
            "TT and Tt plants look identical because T dominates t; only the homozygous tt shows dwarfness.",
            "A Punnett square with gametes T and t from each F1 parent lays out all four equally likely F2 combinations."
          ],
          "keyTerms": [
            { "term": "Dominant trait", "meaning": "The form of a trait that expresses itself in the F1 hybrid and masks its partner (T over t)." },
            { "term": "Recessive trait", "meaning": "The masked form of a trait that reappears in the F2 only in the homozygous state (tt)." },
            { "term": "Genotype", "meaning": "The genetic constitution of an organism for a trait, such as TT, Tt or tt." },
            { "term": "Phenotype", "meaning": "The observable expression of a trait, such as tall or dwarf." },
            { "term": "Punnett square", "meaning": "A grid of gamete combinations used to predict the genotypes and ratios of offspring." }
          ],
          "trick": "F2 says 3:1 for looks but 1:2:1 for genes - 'looks lie, genes do not'.",
          "examPointer": "Cross questions ask for the Punnett square of Tt x Tt plus both ratios; always state the genotypic ratio separately even if only the phenotype is asked."
        },
        {
          "heading": "Rules of Inheritance: Dominance and Segregation",
          "para": "From thousands of carefully counted plants, Mendel framed two rules that still anchor genetics. The law of dominance says that when two contrasting factors of a trait meet in a hybrid, only one - the dominant factor - expresses itself in the F1, while the other, the recessive factor, remains masked; it can surface again in later generations when it occurs in a pair. The law of segregation, also called the law of purity of gametes, says that the two members of a gene pair separate cleanly from each other during gamete formation, and each gamete receives just one of them; the two factors never contaminate each other, which is exactly why a hidden dwarf trait could return intact two generations later. The mechanism is structural: genes sit in pairs in every cell, one copy on the chromosome inherited from the mother and one on the matching chromosome from the father, and the alternative forms of the same gene are called alleles. Crucially, traits do not blend - the F1 of tall and dwarf was fully tall, not medium height - showing that hereditary information passes as discrete particles that meet, act and part again.",
          "points": [
            "Law of dominance: in a pair of contrasting alleles only the dominant one expresses itself in the F1 hybrid.",
            "The recessive allele stays hidden in heterozygotes like Tt but reappears in the F2 when paired as tt.",
            "Law of segregation: the two alleles of a pair separate during gamete formation and each gamete receives only one.",
            "Gametes are always pure for a trait, which is why a trait can skip a generation and return unchanged.",
            "Genes exist in pairs in ordinary cells: one copy comes on the mother's chromosome, one on the father's.",
            "Alleles are alternative forms of the same gene, such as T for tallness and t for dwarfness, sitting at the same position.",
            "Traits do not blend: the F1 was tall, not of medium height, proving inheritance is particulate."
          ],
          "keyTerms": [
            { "term": "Law of dominance", "meaning": "In a hybrid, one allele of a contrasting pair (the dominant) is expressed while the other stays hidden." },
            { "term": "Law of segregation", "meaning": "Allele pairs separate during gamete formation so that each gamete carries only one allele; gametes are pure." },
            { "term": "Allele", "meaning": "One of the alternative forms of a gene occupying the same position on a pair of homologous chromosomes." },
            { "term": "Purity of gametes", "meaning": "The fact that each gamete carries one clean, unblended allele of each gene pair." }
          ],
          "trick": "Segregation = 'Separate and Stay pure': gametes carry one allele each, which is exactly why dwarfs can come back.",
          "examPointer": "State both laws in Mendel's own logic: dominance explains the uniform tall F1; segregation explains the 3:1 ratio and the return of the recessive trait."
        },
        {
          "heading": "Dihybrid Cross: The 9:3:3:1 Ratio",
          "para": "Mendel then took two traits at once in his famous dihybrid cross: pure round and yellow seeds (RRYY) crossed with pure wrinkled and green seeds (rryy). Every F1 seed was round and yellow (RrYy), showing that roundness dominates wrinkles and yellowness dominates green. When F1 plants self-pollinated, the F2 generation displayed four phenotypes in the ratio 9 round-yellow : 3 round-green : 3 wrinkled-yellow : 1 wrinkled-green, out of 16 equally likely allele combinations. Alongside the two parental combinations appeared two brand-new ones - round-green and wrinkled-yellow - that neither parent had shown. The new combinations were the clue: the gene for seed shape and the gene for seed colour had assorted independently during gamete formation, so a seed could inherit roundness with either green or yellow just as easily. This is the law of independent assortment: alleles of different genes separate independently of one another when gametes form. The 9:3:3:1 ratio is precisely (3:1) x (3:1), the two monohybrid ratios multiplied together, which is the mathematical signature of independence. A 4 x 4 Punnett square using gametes RY, Ry, rY and ry lays out all sixteen F2 boxes.",
          "points": [
            "A dihybrid cross follows two pairs of contrasting traits together, such as seed shape and seed colour in pea.",
            "Crossing pure round-yellow (RRYY) with wrinkled-green (rryy) gives F1 seeds that are all round and yellow (RrYy).",
            "Self-pollinating the F1 gives an F2 phenotypic ratio of 9 round-yellow : 3 round-green : 3 wrinkled-yellow : 1 wrinkled-green.",
            "Two new combinations, round-green and wrinkled-yellow, appear in F2 although neither parent showed them.",
            "The new combinations prove independent assortment: alleles of different traits are inherited independently during gamete formation.",
            "The 9:3:3:1 ratio equals (3:1) x (3:1), showing two independent monohybrid ratios operating side by side.",
            "A 4 x 4 Punnett square with gametes RY, Ry, rY and ry displays all sixteen equally likely F2 combinations."
          ],
          "keyTerms": [
            { "term": "Dihybrid cross", "meaning": "A cross between organisms differing in two pairs of contrasting traits, such as seed shape and colour." },
            { "term": "Independent assortment", "meaning": "The independent separation of allele pairs of different genes during gamete formation, producing new trait combinations." },
            { "term": "9:3:3:1 ratio", "meaning": "The F2 phenotypic ratio of a dihybrid cross: 9 both dominant, 3 and 3 single dominant, 1 both recessive." }
          ],
          "trick": "Multiply to remember: (3:1) x (3:1) = 9:3:3:1 - the dihybrid ratio is just two monohybrids multiplied.",
          "examPointer": "Examiners love 'what do the new combinations in F2 prove?'; answer that genes for different traits assort independently during gamete formation."
        },
        {
          "heading": "How Traits Get Expressed: Genes, DNA and Proteins",
          "para": "How does a gene actually make a plant tall? The answer runs through cellular chemistry. A gene is a specific segment of DNA on a chromosome that carries the information for making one particular protein, often an enzyme. Each enzyme controls one step of a biochemical process, so the complete set of proteins a body can manufacture decides its traits. NCERT's plant height example works like this: the height of a pea plant depends on the amount of a growth hormone it produces, and making that hormone requires an enzyme; if the gene works efficiently, plenty of enzyme and hormone are made and the plant grows tall; if the gene is an inefficient variant, less enzyme forms, hormone production drops and the plant remains dwarf. Traits therefore travel as chemical instructions, not as ready-made body parts. This DNA is packaged into chromosomes, thread-like structures in the nucleus, and humans carry 23 pairs (46 chromosomes): one complete set of 23 comes from the mother through the egg and one set of 23 from the father through the sperm. Of these, 22 pairs are autosomes, the same in males and females, while the 23rd pair is the sex chromosomes: XX in females and XY in males.",
          "points": [
            "A gene is a segment of DNA on a chromosome that codes for one specific protein or enzyme.",
            "Enzymes control individual biochemical steps, so the set of proteins a body can make decides its traits.",
            "Plant height depends on the amount of a growth hormone made with the help of an enzyme coded by a gene.",
            "An efficient gene makes abundant enzyme and hormone, giving a tall plant; an inefficient variant gives less hormone and a dwarf plant.",
            "Chromosomes are DNA-protein threads in the nucleus on which genes sit at fixed positions.",
            "Humans have 23 pairs (46) of chromosomes: one set of 23 from the mother and one set of 23 from the father.",
            "Of the 23 pairs, 22 are autosomes present in both sexes and one is the sex chromosome pair: XX in females, XY in males."
          ],
          "keyTerms": [
            { "term": "Gene", "meaning": "A specific segment of DNA on a chromosome that codes for a particular protein or enzyme." },
            { "term": "Enzyme", "meaning": "A protein that controls one biochemical step of body chemistry, linking genes to traits." },
            { "term": "Chromosome", "meaning": "A thread-like structure in the nucleus made of DNA and protein, carrying the genes." },
            { "term": "Autosome", "meaning": "Any of the 22 chromosome pairs that are the same in human males and females." }
          ],
          "trick": "Follow the chain: DNA makes protein, protein (enzyme) drives a step of body chemistry, and that step builds the trait - height is enzyme, hormone, growth.",
          "examPointer": "A 3-marker may ask how genes control the expression of traits; answer with the DNA-protein-enzyme pathway and the plant height hormone example."
        },
        {
          "heading": "Sex Determination in Humans",
          "para": "Human sex determination rests entirely on the 23rd chromosome pair, the sex chromosomes. A human female has two X chromosomes (XX), so every egg she produces carries one X chromosome - the mother can pass on only an X. A human male has one X and one Y (XY), so his sperm are of two equal kinds: half carry an X and half carry a Y. If an X-carrying sperm fertilises the egg, the zygote is XX and the child is a girl; if a Y-carrying sperm fertilises it, the zygote is XY and the child is a boy. Every conception is therefore an independent event with a 50:50 chance of either sex, like a fair coin toss - earlier children make no difference to the next one. It follows that the father's gamete, not the mother's, biologically determines the sex of a child, because the mother always contributes an X and has no other option. Society's habit of blaming mothers for bearing daughters is thus completely wrong in scientific terms, a point NCERT makes explicitly.",
          "points": [
            "The 23rd chromosome pair is the pair of sex chromosomes: XX in human females and XY in human males.",
            "All eggs carry one X chromosome, so the mother always contributes an X to the child.",
            "Sperm are of two kinds in equal numbers: half carry an X chromosome and half carry a Y.",
            "An X-bearing sperm gives an XX zygote (girl); a Y-bearing sperm gives an XY zygote (boy).",
            "Each pregnancy is a fresh independent event with a 50:50 chance of a boy or a girl.",
            "The father's sperm determine the sex of the child, so blaming mothers for daughters is scientifically wrong."
          ],
          "keyTerms": [
            { "term": "Sex chromosomes", "meaning": "The 23rd chromosome pair, XX in females and XY in males, which decides the sex of a child." },
            { "term": "XX-XY pattern", "meaning": "The human sex determination mechanism: eggs carry X only, sperm carry X or Y." },
            { "term": "Zygote", "meaning": "The single cell formed by fusion of egg and sperm; XX zygotes become girls, XY zygotes become boys." }
          ],
          "trick": "The mother is an X-only supplier; the father is the coin-tosser whose X or Y sperm decide - daughters are never the mother's doing.",
          "examPointer": "Assertion-reason and 3-markers test who determines sex and why; draw the XX by XY cross, show the X and Y sperm, and add that each conception is independent at 50:50."
        },
        {
          "heading": "Accumulation of Variation and Evolution Link",
          "para": "Inheritance is not a photocopying process; every generation reshuffles the deck and adds a few new cards. During gamete formation, segregation and independent assortment recombine the parental alleles, and occasional small errors while DNA is copied add genuinely new variations. Each child therefore carries some variants that neither parent displayed, and passes the mixture onward, so variations keep accumulating over the generations. Most variations are tiny and neutral, but they stop being neutral when the environment changes: a selection pressure - a challenge such as heat, drought, a new pesticide or a predator - lets individuals with helpful variants survive and reproduce more successfully, so their alleles become common while unsuitable ones decline. NCERT's heat-tolerant bacteria illustrate the idea in miniature. Repeated over vast stretches of time, this sorting of inherited variations can change populations so much that entirely new forms of life emerge; heredity plus variation is thus the raw material of evolution. For CBSE 2026 only this connecting idea is retained - the full evolution chapter is out of the syllabus - so hold on to the chain: variation arises, is inherited, accumulates, and is shaped by selection.",
          "points": [
            "Segregation, independent assortment and small DNA copying errors generate new variations in every generation.",
            "Only variations present in germ cell DNA are inherited; changes limited to body cells are not.",
            "Selected variations accumulate generation after generation, so populations slowly drift away from their ancestors.",
            "A selection pressure is any environmental challenge that allows some variants to survive and reproduce better than others.",
            "Individuals with helpful variants leave more offspring, so their alleles spread through the population.",
            "Accumulated inherited variation over long periods is the raw material on which evolution acts."
          ],
          "keyTerms": [
            { "term": "Selection pressure", "meaning": "An environmental challenge (heat, drought, pesticide, predator) that lets better-suited variants survive and multiply." },
            { "term": "Accumulation of variation", "meaning": "The passing and adding of inherited differences generation after generation." },
            { "term": "Germ cell DNA", "meaning": "The DNA of egg and sperm; only changes written here can be inherited by offspring." }
          ],
          "trick": "V-I-A-S: Variation arises, is Inherited, Accumulates, is Selected - four words that compress the whole section.",
          "examPointer": "A 2 or 3-marker may ask how heredity links with evolution; answer with accumulation of inherited variations and selection under environmental pressure."
        },
        {
          "heading": "Exam Strategy: Heredity Problems and Ratios",
          "para": "Genetics is among the most scoring areas of the paper if your working is systematic. Write the parental genotypes first (TT x tt, or RRYY x rryy), then the gametes each parent forms, then the F1 genotype and phenotype, then the F1 gametes and the Punnett square that builds the F2. Always state both ratios as demanded: the phenotypic ratio (3:1 or 9:3:3:1) and the genotypic ratio (1 TT : 2 Tt : 1 tt); most lost marks come from giving 3:1 when the genotypic 1:2:1 was wanted. Label every generation as P, F1 and F2, because unlabelled crosses forfeit presentation marks. In sex-determination questions, draw XX crossed with XY, show the X-bearing and Y-bearing sperm, and close with the line that the father's sperm determines the sex. Keep the core definitions - heredity, variation, allele, dominant, recessive, monohybrid, dihybrid, genotype, phenotype - ready word-perfect for 1-markers. Finally, remember that Mendel's ratios are ideal results from very large counts, that real data only approximate them, and that the F1 of a monohybrid cross is always uniform and always heterozygous.",
          "points": [
            "Set out every cross in order: parent genotypes, gametes, F1 result, F1 gametes, and the Punnett square for F2.",
            "State the phenotypic ratio (3:1, 9:3:3:1) and the genotypic ratio (1 TT : 2 Tt : 1 tt) separately as the question asks.",
            "Label the generations P, F1 and F2 clearly to earn presentation marks.",
            "In sex determination, show the XX by XY cross and conclude that the father's sperm decide the child's sex.",
            "Learn the definitions of heredity, variation, allele, dominant, recessive, genotype, phenotype, monohybrid and dihybrid verbatim.",
            "Never write that traits blend; the F1 is uniformly tall and the recessive trait reappears unchanged in the F2.",
            "Treat the ratios as ideal counts from very large samples; real data only approximate them."
          ],
          "keyTerms": [
            { "term": "Punnett square", "meaning": "The grid method for laying out gamete combinations and reading off offspring ratios." },
            { "term": "Genotypic ratio", "meaning": "The ratio of genetic types in offspring, such as 1 TT : 2 Tt : 1 tt in a monohybrid F2." },
            { "term": "Phenotypic ratio", "meaning": "The ratio of visible forms, such as 3 tall : 1 dwarf or 9:3:3:1 in a dihybrid F2." }
          ],
          "trick": "Write 'GENO' and 'PHENO' as two boxes on your rough sheet - every genetics question secretly asks which box you filled.",
          "examPointer": "Typical frames: draw a cross and give the F2 ratio, explain why the dwarf trait reappeared, and assertion-reason on genotype versus phenotype - rehearse all three."
        }
      ],
      "mcqs": [
        { "question": "Gregor Mendel carried out his breeding experiments on:", "options": ["Garden pea (Pisum sativum)", "Maize", "Sunflower", "Wheat"], "answerIndex": 0, "explanation": "Mendel worked in his monastery garden on the garden pea, Pisum sativum, whose contrasting traits and self-pollination made controlled crosses possible.", "difficulty": "easy", "pyq": "CBSE 2019" },
        { "question": "Which set of reasons explains Mendel's choice of the pea plant?", "options": ["It is self-pollinating with clearly contrasting traits and a short life cycle", "It reproduces only by vegetative propagation", "It has the largest genome among plants", "It cannot be cross-pollinated artificially"], "answerIndex": 0, "explanation": "Pea is naturally self-pollinating (easy true-breeding lines), shows pairs of contrasting characters and produces many seeds quickly - ideal for counting ratios.", "difficulty": "medium" },
        { "question": "A cross between a pure tall (TT) and a pure dwarf (tt) pea plant gives an F1 generation that is:", "options": ["All dwarf", "All tall with genotype Tt", "Half tall and half dwarf", "All tall with genotype TT"], "answerIndex": 1, "explanation": "Every F1 plant receives T from one parent and t from the other, so all are heterozygous Tt and, since T is dominant, all look tall.", "difficulty": "easy" },
        { "question": "The phenotypic ratio of the F2 generation in a monohybrid cross is:", "options": ["1:2:1", "3:1", "9:3:3:1", "1:1"], "answerIndex": 1, "explanation": "Self-pollinating Tt x Tt gives three tall (TT, Tt, Tt) to one dwarf (tt), a phenotypic ratio of 3:1; 1:2:1 is the genotypic ratio.", "difficulty": "easy", "pyq": "CBSE 2020" },
        { "question": "The genotypic ratio of the F2 generation of a monohybrid cross is:", "options": ["3:1", "9:3:3:1", "1 TT : 2 Tt : 1 tt", "2:1:1"], "answerIndex": 2, "explanation": "The Punnett square of Tt x Tt yields one TT, two Tt and one tt; because TT and Tt look alike, the phenotypic ratio differs (3:1).", "difficulty": "medium" },
        { "question": "The reappearance of dwarf plants in the F2 generation proves that:", "options": ["Traits blend in the F1", "The recessive trait was hidden, not destroyed, in the F1", "F1 plants were homozygous", "The environment changed the trait"], "answerIndex": 1, "explanation": "The dwarf factor persisted unexpressed in the heterozygous F1; segregation brought two t alleles together again in the F2, restoring dwarfness.", "difficulty": "medium" },
        { "question": "Crossing pure round-yellow with pure wrinkled-green pea seeds gives an F2 ratio of:", "options": ["3:1", "1:2:1", "9:3:3:1", "1:1:1:1"], "answerIndex": 2, "explanation": "The dihybrid cross RrYy x RrYy yields 9 round-yellow, 3 round-green, 3 wrinkled-yellow and 1 wrinkled-green out of 16 combinations.", "difficulty": "easy", "pyq": "CBSE 2023" },
        { "question": "The appearance of round-green and wrinkled-yellow seeds in F2 establishes:", "options": ["Law of dominance", "Law of segregation only", "Independent assortment of gene pairs", "Incomplete dominance"], "answerIndex": 2, "explanation": "New trait combinations show that alleles of different genes assort independently during gamete formation, the basis of the law of independent assortment.", "difficulty": "medium" },
        { "question": "The 9:3:3:1 dihybrid ratio can be obtained by multiplying:", "options": ["(3:1) x (3:1)", "(1:2:1) x (1:2:1)", "(9:1) x (1:1)", "(2:1) x (3:1)"], "answerIndex": 0, "explanation": "Two independent monohybrid ratios multiplied give 9:3:3:1, showing that the two traits are inherited independently of each other.", "difficulty": "medium" },
        { "question": "How many pairs of chromosomes are present in a human cell?", "options": ["22", "23", "46", "48"], "answerIndex": 1, "explanation": "Humans carry 23 pairs (46 chromosomes): 22 pairs of autosomes plus one pair of sex chromosomes, with one set of 23 inherited from each parent.", "difficulty": "easy" },
        { "question": "The sex chromosomes of a human male are:", "options": ["XX", "XY", "YY", "XO"], "answerIndex": 1, "explanation": "A human male has one X and one Y chromosome; the Y-bearing sperm make the embryo develop as a male.", "difficulty": "easy" },
        { "question": "Biologically, the sex of a child is determined by:", "options": ["The mother's egg", "The father's sperm", "Both parents equally", "The mother's nutrition"], "answerIndex": 1, "explanation": "All eggs carry X; sperm carry either X or Y, so whether the child is XX or XY depends on which sperm fertilises the egg - the father's contribution.", "difficulty": "easy", "pyq": "CBSE 2022" },
        { "question": "The chance of a couple's next child being a boy is:", "options": ["25 percent", "50 percent", "75 percent", "100 percent"], "answerIndex": 1, "explanation": "Half the father's sperm carry X and half carry Y, so every conception is an independent event with a 50:50 probability.", "difficulty": "easy" },
        { "question": "Which of the following is an acquired trait?", "options": ["Blood group", "Eye colour", "Learning to cycle", "Sex of the child"], "answerIndex": 2, "explanation": "Learning to cycle changes only body cells and skills, not germ cell DNA, so it cannot be inherited; blood group and eye colour are genetic.", "difficulty": "easy" },
        { "question": "A gene is best defined as:", "options": ["A whole chromosome", "A segment of DNA coding for a protein", "Any protein in the cell", "A type of hormone"], "answerIndex": 1, "explanation": "A gene is a specific portion of DNA on a chromosome that carries the information for making a particular protein or enzyme.", "difficulty": "easy" },
        { "question": "Plant height in pea is controlled through:", "options": ["Direct growth of bones", "An enzyme that makes a growth hormone", "Water stored in stems", "The number of leaves"], "answerIndex": 1, "explanation": "The gene for the hormone-making enzyme works efficiently in tall plants, producing more hormone and growth; the inefficient allele yields less hormone and dwarfness.", "difficulty": "medium" },
        { "question": "Alleles are:", "options": ["Two copies of different genes", "Alternative forms of the same gene", "Sex hormones", "Sections of RNA only"], "answerIndex": 1, "explanation": "Alleles are the different forms of one gene, such as T (tall) and t (dwarf), occupying the same position on a pair of homologous chromosomes.", "difficulty": "medium" },
        { "question": "How many pairs of contrasting characters in pea did Mendel study?", "options": ["Five", "Six", "Seven", "Nine"], "answerIndex": 2, "explanation": "Mendel studied seven pairs of contrasting traits in pea, including tall or dwarf, round or wrinkled seeds and yellow or green seeds.", "difficulty": "medium" }
      ],
      "boardQuestions": [
        { "question": "Describe Mendel's monohybrid cross with the help of a Punnett square and state the F2 ratios. What do the results prove?", "marks": 5, "type": "long", "probability": "high", "answer": "Mendel crossed a pure tall pea plant (TT) with a pure dwarf plant (tt). Every F1 offspring was tall with genotype Tt, showing that tallness is dominant and dwarfness recessive; the recessive factor did not blend or vanish. On self-pollination of the F1 plants, each produced gametes T and t in equal numbers, and the Punnett square of Tt x Tt gave four equally likely combinations: TT, Tt, Tt and tt. Thus the F2 genotypic ratio is 1 TT : 2 Tt : 1 tt, while the phenotypic ratio is 3 tall : 1 dwarf, because TT and Tt plants are both tall. The dwarf trait reappearing in F2 proved that recessive traits remain hidden in heterozygotes and re-emerge when two recessive alleles meet. This led Mendel to the law of dominance (one factor masks the other in the hybrid) and the law of segregation (the two factors separate at gamete formation, so each gamete is pure for the trait)." },
        { "question": "Explain Mendel's dihybrid cross. What does the appearance of new combinations in the F2 generation establish?", "marks": 5, "type": "long", "probability": "high", "answer": "Mendel crossed pure round-yellow pea seeds (RRYY) with pure wrinkled-green seeds (rryy). The entire F1 was round-yellow (RrYy), showing double dominance. On self-pollination, each F1 plant formed four kinds of gametes - RY, Ry, rY and ry - in equal numbers, and the 4 x 4 Punnett square gave sixteen combinations: 9 round-yellow, 3 round-green, 3 wrinkled-yellow and 1 wrinkled-green, the 9:3:3:1 ratio. Two of these, round-green and wrinkled-yellow, were brand-new combinations that neither parent displayed. Their appearance proved that the alleles of the two genes had separated and recombined independently during gamete formation: seed shape did not drag seed colour along with it. This established the law of independent assortment - when two pairs of traits are combined in a hybrid, the segregation of one pair is independent of the other pair. The ratio also equals (3:1) x (3:1), the product of two monohybrid ratios, which is the mathematical proof that the two traits behave independently." },
        { "question": "State Mendel's law of dominance and law of segregation.", "marks": 3, "type": "short", "probability": "high", "answer": "Law of dominance: when two contrasting factors of a trait come together in a hybrid, only the dominant factor expresses itself in the F1 generation while the recessive factor remains hidden; for example, crossing pure tall with pure dwarf pea gives all tall F1 plants. The recessive trait is not lost and reappears in the F2 when two recessive alleles meet. Law of segregation (law of purity of gametes): the two alleles of each gene pair separate from each other during gamete formation, so every gamete receives only one allele and gametes are always pure for a trait; this explains both the 3:1 F2 phenotypic ratio and the 1:2:1 genotypic ratio, and why a hidden trait can return unchanged after a generation." },
        { "question": "How is the sex of a child determined in humans? Why is it wrong to blame a mother for the sex of her child?", "marks": 3, "type": "short", "probability": "high", "answer": "In humans the 23rd chromosome pair is the sex chromosome pair: females are XX and males are XY. The mother's eggs always carry one X chromosome, while the father's sperm are of two kinds - half carrying X and half carrying Y. If an X-bearing sperm fertilises the egg, the child is XX, a girl; if a Y-bearing sperm does so, the child is XY, a boy. Since the mother can contribute only an X, the type of sperm that fertilises the egg alone decides the sex, so the father biologically determines the sex of the child. Every conception is an independent event with a 50:50 chance, and blaming a mother for bearing daughters has no scientific basis whatsoever." },
        { "question": "Differentiate between acquired and inherited traits with one example of each.", "marks": 2, "type": "short", "probability": "medium", "answer": "Acquired traits develop during an individual's lifetime and affect only the body cells, so they cannot pass to the next generation - examples are learning to cycle, building muscle, or a cut tail in mice, which keeps appearing in offspring even after many generations of cutting. Inherited traits are carried by the DNA of germ cells (egg and sperm) and are transmitted to children, such as eye colour, blood group or free and attached earlobes. The test is simple: if a change does not alter the DNA of germ cells, it dies with the individual." },
        { "question": "Why did Mendel select the garden pea plant for his experiments on inheritance?", "marks": 2, "type": "short", "probability": "high", "answer": "Mendel selected the garden pea because it is naturally self-pollinating, which made it easy to maintain pure true-breeding lines and to perform artificial cross-pollination by hand; because it has a short life cycle and produces a large number of seeds, allowing many offspring to be raised and counted in a short time; and because it shows several pairs of clearly contrasting visible traits, such as tall or dwarf, round or wrinkled seeds, and yellow or green seeds, which made the results easy to observe and classify." },
        { "question": "How do genes control the expression of traits? Explain with the example of plant height.", "marks": 3, "type": "short", "probability": "medium", "answer": "A gene is a segment of DNA that carries the code for making a particular protein, usually an enzyme, and enzymes control the steps of body chemistry, so genes control traits through proteins. For example, plant height depends on the amount of a growth hormone, and an enzyme is needed to make that hormone. If the gene for the enzyme works efficiently, much enzyme and hormone are produced and the plant grows tall; if the gene is an inefficient variant, little enzyme forms, hormone production falls and the plant stays dwarf. Thus the two alleles of the height gene produce different amounts of the same enzyme, and the trait - tall or dwarf - follows from the difference in hormone output." },
        { "question": "What is variation? Explain how variations arise and how their accumulation over generations links heredity with evolution.", "marks": 5, "type": "long", "probability": "medium", "answer": "Variation is the occurrence of differences among individuals of the same species - between parents and offspring and among siblings. It arises because sexual reproduction mixes genes (segregation and independent assortment during gamete formation) and because DNA copying occasionally makes small errors; only variations in germ cell DNA are inherited. Variations accumulate over generations: each generation passes its mix of alleles onward and adds new ones. Most variations are neutral, but when a selection pressure such as heat, drought, a pesticide or a predator appears, they become decisive - individuals with helpful variants survive and reproduce more, so their alleles become common while harmful ones are weeded out, as when heat-tolerant bacteria alone survive a sudden temperature rise. Repeated over thousands of generations, this accumulation and selection of inherited variation can change populations so much that new species arise. Heredity therefore supplies the raw material of evolution, and variation supplies its direction under selection - the precise link this chapter builds to the process of evolution." },
        { "question": "Define heredity and variation. Why do siblings of the same parents differ from one another?", "marks": 2, "type": "short", "probability": "high", "answer": "Heredity is the transmission of traits or characters from parents to their offspring through genes carried in the germ cells; it explains family resemblance. Variation is the difference in traits shown by individuals of the same species, including differences between parents and offspring. Siblings of the same parents differ because sexual reproduction reshuffles the parental genes during gamete formation (segregation and independent assortment) and adds fresh DNA-copying changes, so every child receives a unique combination of alleles and hence shows a unique set of traits." },
        { "question": "Two pea plants heterozygous for both seed shape and seed colour are crossed. Work out the results and state which laws of Mendel the cross illustrates.", "marks": 6, "type": "long", "probability": "medium", "answer": "Crossing two plants heterozygous for both seed shape and seed colour means RrYy x RrYy. Each parent forms four kinds of gametes - RY, Ry, rY and ry - in equal proportions, because the allele pairs R/r and Y/y segregate and assort independently. The 4 x 4 Punnett square gives sixteen equally likely F2 genotypes that collapse into four phenotypes: 9 with round-yellow seeds (containing at least one R and one Y), 3 with round-green (R with yy), 3 with wrinkled-yellow (rr with Y) and 1 with wrinkled-green (rryy), the 9:3:3:1 ratio. From the monohybrid crosses Mendel drew the law of dominance (one allele masks the other in the hybrid) and the law of segregation (alleles of a pair separate so gametes are pure), and from this dihybrid cross he drew the law of independent assortment: the segregation of one gene pair is independent of the other, which is why two traits can combine in new ways unseen in the parents. The whole result is again the product of two monohybrid ratios, (3:1) x (3:1)." }
      ]
    },
    {
      "number": 9,
      "title": "Light - Reflection and Refraction",
      "summary": "Worth roughly eight marks, this chapter builds the complete ray-optics toolkit. It covers the laws of reflection and plane mirror images; spherical mirror vocabulary (pole, centre of curvature, R = 2f, principal focus, focal length, aperture); the six object-position cases of the concave mirror with their uses in torches, headlights, shaving and solar devices; the always virtual, erect, diminished image of convex mirrors and why they serve as rear-view mirrors; the New Cartesian sign convention with the mirror formula 1/v + 1/u = 1/f and magnification m = -v/u; refraction, Snell's law and refractive index n = c/v; passage through a glass slab with lateral displacement; lenses - optical centre, two foci, ray rules and image formation by convex and concave lenses; the lens formula 1/v - 1/u = 1/f with m = v/u; and the power of a lens P = 1/f in dioptres, including combinations of thin lenses. Worked numerical logic and a ray-diagram checklist run through every section, because this chapter is the board exam's favourite source of numericals and diagram questions.",
      "weightageMarks": 8,
      "difficulty": "hard",
      "hotTopics": [
        "Mirror formula numericals with sign convention",
        "Ray diagrams for concave mirrors and lenses",
        "Refraction, Snell's law and refractive index",
        "Image formation by convex and concave lenses",
        "Power of a lens and dioptres"
      ],
      "sections": [
        {
          "heading": "Reflection of Light: Laws and Plane Mirrors",
          "para": "Reflection is the bouncing back of light when it strikes a polished surface and returns into the same medium. The two laws of reflection govern the process: first, the angle of incidence equals the angle of reflection, both measured from the normal (the perpendicular to the surface at the point of incidence); second, the incident ray, the reflected ray and the normal all lie in the same plane. A plane mirror applies these laws everywhere on its surface and forms an image with five fixed properties: it is virtual (rays only appear to meet behind the mirror), erect, laterally inverted (left and right are interchanged, so writing looks reversed), of the same size as the object, and as far behind the mirror as the object is in front. Reflection differs by surface: regular reflection from smooth surfaces (a mirror, still water) sends parallel rays out parallel and produces images, while diffuse or irregular reflection from rough surfaces (paper, walls, cloth) scatters light in all directions, producing no image but making the objects themselves visible from every angle.",
          "points": [
            "The first law of reflection: the angle of incidence equals the angle of reflection, both measured from the normal.",
            "The second law: the incident ray, the reflected ray and the normal to the surface all lie in the same plane at the point of incidence.",
            "A plane mirror forms a virtual, erect image that is laterally inverted - left and right are interchanged.",
            "The image in a plane mirror is the same size as the object and lies exactly as far behind the mirror as the object is in front.",
            "Regular reflection from smooth surfaces sends parallel rays out parallel and forms images.",
            "Diffuse (irregular) reflection from rough surfaces scatters light in all directions, so objects are visible without images being formed."
          ],
          "keyTerms": [
            { "term": "Normal", "meaning": "The perpendicular drawn to the reflecting surface at the point of incidence; angles are measured from it." },
            { "term": "Angle of incidence", "meaning": "The angle between the incident ray and the normal; in reflection it equals the angle of reflection." },
            { "term": "Laterally inverted", "meaning": "The left-right reversal seen in a plane mirror image, as when writing looks mirror-reversed." },
            { "term": "Diffuse reflection", "meaning": "Scattering of light in many directions by a rough surface, which makes objects visible without forming images." }
          ],
          "trick": "Plane mirror image = 'VERSiS': Virtual, Erect, Reversed left-right, Same size, Same distance.",
          "examPointer": "One-markers ask the two laws and the nature of a plane mirror image; remember lateral inversion swaps left and right, never top and bottom."
        },
        {
          "heading": "Spherical Mirrors: Terms and Types",
          "para": "A spherical mirror is a mirror whose reflecting surface is a part of a hollow sphere of glass. Two types exist: a concave mirror, whose reflecting surface is curved inwards towards the centre of the sphere (like the inside of a spoon), and a convex mirror, whose reflecting surface bulges outwards. The vocabulary is fixed and examinable. The pole (P) is the centre point of the mirror's reflecting surface. The centre of curvature (C) is the centre of the sphere of which the mirror is a part; the line joining C and P extended is the principal axis. The radius of curvature (R) is the distance PC. The principal focus (F) of a concave mirror is the point on the axis where rays parallel to the axis actually meet after reflection, so its focus is real; in a convex mirror, parallel rays appear to come from a point behind the mirror, so its focus is virtual. The focal length (f) is the distance between the pole and the principal focus, and for both mirrors f = R/2, that is R = 2f. The aperture is the diameter of the reflecting surface; the relation R = 2f holds for mirrors of small aperture.",
          "points": [
            "A concave mirror has its reflecting surface curved inwards; a convex mirror's reflecting surface bulges outwards.",
            "The pole (P) is the central point of the reflecting surface of the mirror.",
            "The centre of curvature (C) is the centre of the sphere of which the mirror forms a part; the radius of curvature R is the distance PC.",
            "The principal axis is the straight line passing through the pole and the centre of curvature.",
            "The principal focus (F) is where rays parallel to the axis meet after reflection (concave, real) or appear to diverge from (convex, virtual).",
            "The focal length f is the distance PF, and for spherical mirrors of small aperture R = 2f.",
            "The aperture is the diameter of the reflecting surface of the mirror."
          ],
          "keyTerms": [
            { "term": "Pole", "meaning": "The central point of the reflecting surface of a spherical mirror, taken as the origin for distances." },
            { "term": "Centre of curvature", "meaning": "The centre of the sphere of which the mirror is a part; distance PC is the radius of curvature R." },
            { "term": "Principal focus", "meaning": "The point where rays parallel to the principal axis converge (concave) or appear to diverge from (convex)." },
            { "term": "Focal length", "meaning": "The distance between the pole and the principal focus; related to the radius by R = 2f." },
            { "term": "Aperture", "meaning": "The diameter of the reflecting surface of the mirror." }
          ],
          "trick": "R = 2f always: the focus sits exactly halfway to the centre of curvature - 'C is double F'.",
          "examPointer": "Definitions of pole, focus, focal length and aperture are quoted verbatim in 1 and 2-markers; be ready to state R = 2f with a labelled description."
        },
        {
          "heading": "Image Formation by Concave Mirrors",
          "para": "The concave mirror is a converging mirror, and its image changes dramatically with object position - six cases to master. With the object at infinity, the image forms at the focus F: real, inverted and highly diminished to a point. Beyond C, the image forms between F and C: real, inverted and diminished. At C, the image forms at C itself: real, inverted and exactly the same size. Between C and F, the image forms beyond C: real, inverted and magnified. At F, the reflected rays emerge parallel and the image forms at infinity: real, inverted and highly enlarged. Between P and F, the reflected rays diverge and appear to meet behind the mirror: the image is virtual, erect and magnified - this last case powers the shaving mirror and the dentist's mirror. The uses follow directly from the cases: torches, searchlights and vehicle headlights place the bulb near F so reflected rays travel as a nearly parallel beam; solar furnaces and solar cookers converge sunlight at F to generate heat; dentists use the between-P-and-F magnified erect image; and large telescopes gather starlight with huge concave mirrors.",
          "points": [
            "Object at infinity: image at F, real, inverted, point-sized (highly diminished).",
            "Object beyond C: image between F and C, real, inverted, diminished.",
            "Object at C: image at C, real, inverted, same size as the object.",
            "Object between C and F: image beyond C, real, inverted, magnified.",
            "Object at F: image at infinity - reflected rays leave parallel, image highly enlarged.",
            "Object between P and F: image behind the mirror, virtual, erect, magnified (shaving and dentist mirrors).",
            "Uses: torches and headlights (bulb near F for a parallel beam), solar furnaces and cookers, shaving mirrors, dentists' mirrors."
          ],
          "keyTerms": [
            { "term": "Real image", "meaning": "An image formed by actual intersection of reflected rays; it can be caught on a screen and is inverted." },
            { "term": "Virtual image", "meaning": "An image formed where rays only appear to meet; it cannot be caught on a screen and is erect." },
            { "term": "Converging mirror", "meaning": "The concave mirror, which brings parallel rays to a real focus in front of it." }
          ],
          "trick": "Six stations on a rail: infinity, beyond C, at C, between C and F, at F, between P and F - the image marches from F to infinity, then pops behind the mirror enlarged.",
          "examPointer": "The 5-marker on image formation by a concave mirror expects all six cases with object position, image position and nature stated for each."
        },
        {
          "heading": "Convex Mirrors and Their Uses",
          "para": "A convex mirror is a diverging mirror: parallel rays falling on it spread out after reflection as if they came from a point F behind the mirror, its virtual principal focus. Whatever the position of the object, the image is always virtual, erect and diminished, and it always lies between the pole P and the focus F behind the mirror; as the object comes closer, the image grows slightly but never reaches the object's size. The great advantages are practical. Because the outward-curving surface catches light arriving from a wide angle, a convex mirror offers a much wider field of view than a plane mirror of the same size, and its images, though small, are always erect and therefore instantly readable. That is why it is the standard rear-view mirror in vehicles, letting drivers watch a broad stretch of traffic behind, and why it is fixed at blind road corners and used for security viewing. Convex mirrors also serve as reflectors near street lights to spread illumination over a larger area. The trade-off is the diminished size and the slight distortion of distance judgement, which drivers must learn to discount.",
          "points": [
            "A convex mirror diverges parallel rays so they appear to come from its virtual focus behind the mirror.",
            "Whatever the object position, the image is always virtual, erect and diminished.",
            "The image always forms between the pole P and the focus F behind the mirror.",
            "The outward curve gathers light from a large area, giving a much wider field of view than a plane mirror.",
            "Rear-view mirrors in vehicles are convex: erect images of wide traffic behind, though diminished in size.",
            "Convex mirrors also spread light from street lamps and are used for security viewing at blind spots."
          ],
          "keyTerms": [
            { "term": "Diverging mirror", "meaning": "The convex mirror, which spreads parallel rays outward as if from a virtual focus behind it." },
            { "term": "Field of view", "meaning": "The extent of the scene visible in a mirror; convex mirrors maximise it for their size." },
            { "term": "Rear-view mirror", "meaning": "The convex mirror fitted in vehicles so drivers can watch traffic behind over a wide angle." }
          ],
          "trick": "Convex = the 'CAREFUL' mirror: always Virtual, Erect, Small (V-E-S) - but it sees the most.",
          "examPointer": "A favourite 2-marker: why are convex mirrors used as rear-view mirrors? Give both reasons - wider field of view and always erect, diminished images."
        },
        {
          "heading": "Sign Convention and Mirror Formula",
          "para": "For calculations, optics needs an agreed bookkeeping system: the New Cartesian sign convention. The pole of the mirror (or optical centre of a lens) is the origin, the principal axis is the x-axis, and the object is always placed to the left, so light travels left to right. Distances are measured from the pole: distances to the left of the mirror, measured against the direction of the incident light, are negative, and distances to the right are positive; heights above the principal axis are positive and heights below it are negative. Consequences to memorise: the object distance u is always negative for a real object; the focal length of a concave mirror is negative and that of a convex mirror positive; a real image has negative v, a virtual image positive v. The mirror formula 1/v + 1/u = 1/f applies to every spherical mirror, and the magnification m = h'/h = -v/u tells the story: negative m means a real, inverted image; positive m means a virtual, erect image. Worked logic: for u = -20 cm and a concave mirror of f = -10 cm, 1/v = 1/f - 1/u gives 1/v = -1/10 + 1/20 = -1/20, so v = -20 cm and m = -v/u = -1: the image is 20 cm in front, real, inverted and the same size - the object was at C.",
          "points": [
            "The pole is the origin, the principal axis the x-axis, and the object is always placed to the left of the mirror.",
            "Distances measured from the pole: to the left (against incident light) negative, to the right positive; heights above the axis positive, below negative.",
            "For real objects u is negative; concave mirrors have negative f, convex mirrors positive f; real images have negative v, virtual positive v.",
            "The mirror formula 1/v + 1/u = 1/f holds for all spherical mirrors in every position case.",
            "Magnification m = h'/h = -v/u: negative m means real and inverted, positive m means virtual and erect.",
            "Example: u = -20 cm, f = -10 cm gives 1/v = -1/20, so v = -20 cm; m = -1 - real, inverted, same size (object at C).",
            "State the nature of the image at the end of every numerical - the sign of v decides real or virtual, the sign of m decides erect or inverted."
          ],
          "keyTerms": [
            { "term": "New Cartesian sign convention", "meaning": "The sign rules for mirrors and lenses: pole as origin, left negative, right positive, heights above axis positive." },
            { "term": "Mirror formula", "meaning": "1/v + 1/u = 1/f, relating image distance, object distance and focal length for all spherical mirrors." },
            { "term": "Magnification", "meaning": "m = h'/h = -v/u for mirrors; its sign and size give the image's orientation and magnification." }
          ],
          "trick": "Everything real lives on the negative side: real object u, concave f, real image v - all negative; m negative means inverted.",
          "examPointer": "Numericals must show the sign convention explicitly: write u and f with signs, solve 1/v + 1/u = 1/f, compute m = -v/u, then declare the image's nature."
        },
        {
          "heading": "Refraction of Light: Laws and Refractive Index",
          "para": "Refraction is the change in the direction of light when it passes obliquely from one transparent medium into another, caused by the change in its speed: light travels about 3 x 10^8 m/s in vacuum but slower in glass or water. Everyday proof: a pencil standing in a glass of water looks broken at the surface, a coin at the bottom of a bucket appears raised and comes into view as water is poured in, and the bottom of a swimming pool looks shallower than it is. The laws of refraction: (i) the incident ray, the refracted ray and the normal at the point of incidence all lie in the same plane; (ii) the ratio of the sine of the angle of incidence to the sine of the angle of refraction is a constant for a given pair of media and a given colour - sin i / sin r = constant, Snell's law. The refractive index measures this bending: n = c/v, the ratio of the speed of light in vacuum to its speed in the medium - water 1.33, glass 1.5, diamond 2.42. Note that optical density (higher n, slower light) is different from mass density. Light entering a denser medium bends towards the normal; entering a rarer medium, away from it. The relative refractive index of medium 2 with respect to medium 1 is n21 = n2/n1 = v1/v2.",
          "points": [
            "Refraction occurs because light changes speed when it passes obliquely between media of different optical density.",
            "First law of refraction: the incident ray, the refracted ray and the normal all lie in the same plane.",
            "Second law (Snell's law): sin i / sin r = constant for a given pair of media and colour of light.",
            "Refractive index n = c/v: speed of light in vacuum divided by speed in the medium; water 1.33, glass 1.5, diamond 2.42.",
            "Optically denser means higher refractive index and slower light - it is not the same as mass density.",
            "Light bends towards the normal entering a denser medium and away from the normal entering a rarer medium.",
            "The raised coin and the bent pencil are everyday effects of refraction on passing from water into air.",
            "Relative refractive index: n21 = n2/n1 = v1/v2, the ratio of the speeds of light in the two media."
          ],
          "keyTerms": [
            { "term": "Refraction", "meaning": "The bending of light when it passes obliquely from one transparent medium to another due to change of speed." },
            { "term": "Snell's law", "meaning": "sin i / sin r = constant for a given pair of media and colour of light." },
            { "term": "Refractive index", "meaning": "n = c/v, the ratio of the speed of light in vacuum to its speed in the medium; it measures the optical denseness." },
            { "term": "Optically denser medium", "meaning": "A medium with higher refractive index in which light travels more slowly; distinct from mass density." }
          ],
          "trick": "Dense medium = slow lane = bend TOWARDS the normal; rarer = fast lane = bend AWAY. And n = c/v is always greater than 1.",
          "examPointer": "Expect a Snell's law numerical and the classic coin question; quote n = c/v with values for water, glass and diamond to finish the answer crisply."
        },
        {
          "heading": "Refraction Through a Glass Slab",
          "para": "Send a ray obliquely through a thick rectangular glass slab and watch the bookkeeping of refraction. At the first surface (air to glass, denser), the ray bends towards the normal; inside the glass it travels in a straight line; at the second surface (glass to air, rarer), it bends away from the normal by the same angular measure. The two bendings cancel in direction, so the emergent ray is exactly parallel to the incident ray. But the ray inside the glass travelled along a shifted path, so the emergent ray is displaced sideways by a perpendicular distance called the lateral displacement. Its size grows with the thickness of the slab, the angle of incidence and the refractive index of the glass, and it is zero for normal incidence. This is why a page seen through a thick glass block looks raised and shifted but not distorted, and why a straight stick viewed through a slab seems snapped sideways at the edges. The slab experiment is the standard demonstration that refraction can change a ray's path without changing its ultimate direction.",
          "points": [
            "Entering the glass (denser), the ray bends towards the normal; leaving into air (rarer), it bends away from the normal.",
            "The two refractions cancel in direction, so the emergent ray is parallel to the incident ray.",
            "The sideways shift between the incident and emergent rays is called the lateral displacement.",
            "Lateral displacement increases with slab thickness, angle of incidence and refractive index, and is zero at normal incidence.",
            "Objects seen through a thick slab appear raised and shifted but not distorted.",
            "The glass slab shows that refraction can displace a ray without changing its final direction."
          ],
          "keyTerms": [
            { "term": "Emergent ray", "meaning": "The ray that leaves the second face of the slab; it is parallel to the incident ray." },
            { "term": "Lateral displacement", "meaning": "The perpendicular distance between the incident ray's original path and the emergent ray." },
            { "term": "Rectangular glass slab", "meaning": "A thick parallel-sided block used to demonstrate refraction at two faces with zero net bending." }
          ],
          "trick": "Slab rule: 'in, out, parallel - plus a sidestep'. Bending towards the normal on entry is undone on exit.",
          "examPointer": "A 3-marker asks for the ray path through a slab with angle of incidence, refraction and emergence marked, plus the definition of lateral displacement."
        },
        {
          "heading": "Spherical Lenses: Convex and Concave",
          "para": "A lens is a transparent material bounded by two surfaces, at least one of which is curved. A convex lens is thicker in the middle and converges parallel rays to a real focus; a concave lens is thinner in the middle and diverges rays as if from a virtual focus. Each lens has an optical centre O through which rays pass undeviated, and two principal foci F1 and F2 equidistant on either side, giving one focal length f. Three standard rays do all diagram work: a ray parallel to the principal axis passes through the focus after refraction (convex) or appears to come from the focus (concave); a ray through the optical centre goes straight on; a ray through the focus of a convex lens emerges parallel to the axis. Convex lens images follow the F-2F ladder: object at infinity gives a point image at F; beyond 2F gives a real, inverted, diminished image between F2 and 2F2; at 2F gives a same-size image at 2F2; between F1 and 2F1 gives a magnified image beyond 2F2; at F1 gives an image at infinity; between F1 and O gives a virtual, erect, magnified image on the same side - the magnifying glass. A concave lens gives, for every object position, a virtual, erect, diminished image between the optical centre and the focus on the object's side.",
          "points": [
            "A convex lens is thicker in the middle and converges rays; a concave lens is thinner in the middle and diverges rays.",
            "The optical centre O is the central point through which rays pass without deviation.",
            "Each lens has two principal foci F1 and F2 at equal distances from O, one focal length f either side.",
            "Standard rays: a parallel ray goes through the focus; a ray through O goes straight; a ray through F emerges parallel (convex).",
            "Convex: object beyond 2F gives a diminished image between F2 and 2F2; at 2F gives same size at 2F2; between F1 and 2F1 gives magnified beyond 2F2.",
            "Convex: object at F1 gives an image at infinity; between F1 and O gives a virtual, erect, magnified image (magnifying glass).",
            "A concave lens always forms a virtual, erect, diminished image between O and F on the same side as the object."
          ],
          "keyTerms": [
            { "term": "Optical centre", "meaning": "The central point of a lens through which light passes without deviation." },
            { "term": "Converging lens", "meaning": "A convex lens, thicker at the middle, which brings parallel rays to a real focus." },
            { "term": "Diverging lens", "meaning": "A concave lens, thinner at the middle, which spreads rays as if from a virtual focus." },
            { "term": "Principal focus of a lens", "meaning": "The point where rays parallel to the axis converge (convex) or appear to diverge from (concave)." }
          ],
          "trick": "Swap C for 2F when moving from mirrors to lenses; concave lens answers are one line - virtual, erect, diminished, between O and F.",
          "examPointer": "Ray diagrams demand the three standard rays with arrowheads and labels; for the convex lens, memorise all six object positions in order."
        },
        {
          "heading": "Lens Formula and Magnification",
          "para": "The lens formula is 1/v - 1/u = 1/f, connecting image distance v, object distance u and focal length f; it works for both convex and concave lenses once signs are fixed. The sign convention parallels mirrors: distances are measured from the optical centre; the object on the left, so u is negative; focal length is positive for a convex (converging) lens and negative for a concave (diverging) lens; v is positive for a real image formed on the opposite side, negative for a virtual image on the object's side. Magnification is m = v/u = h'/h: a positive m means an erect, virtual image; a negative m means an inverted, real image; the size of m tells whether the image is enlarged or diminished. Worked logic: an object at u = -30 cm before a convex lens of f = +10 cm gives 1/v = 1/f + 1/u = 1/10 - 1/30 = 2/30 = 1/15, so v = +15 cm, and m = v/u = 15/(-30) = -0.5: the image is 15 cm behind the lens, real, inverted and half the object's height. Note the mirror-lens flip carefully: mirrors use 1/v + 1/u = 1/f with m = -v/u, lenses use 1/v - 1/u = 1/f with m = v/u.",
          "points": [
            "The lens formula is 1/v - 1/u = 1/f, valid for both convex and concave lenses with proper signs.",
            "Signs for lenses: u is negative (object on the left); f is positive for convex and negative for concave; v is positive for real images.",
            "Magnification m = v/u = h'/h; positive m means erect and virtual, negative m means inverted and real.",
            "The magnitude of m gives the size change: m greater than 1 magnified, m less than 1 diminished.",
            "Example: u = -30 cm, f = +10 cm gives 1/v = 1/15, so v = +15 cm; m = -0.5 - real, inverted, half-size.",
            "Mirror versus lens: 1/v + 1/u = 1/f with m = -v/u for mirrors; 1/v - 1/u = 1/f with m = v/u for lenses.",
            "Convert heights by h' = m x h and always state the image nature from the signs of v and m."
          ],
          "keyTerms": [
            { "term": "Lens formula", "meaning": "1/v - 1/u = 1/f, relating image distance, object distance and focal length for thin lenses." },
            { "term": "Magnification (lens)", "meaning": "m = v/u = h'/h; positive means erect and virtual, negative means inverted and real." },
            { "term": "Sign convention for lenses", "meaning": "Distances from the optical centre; u negative, convex f positive, concave f negative, real v positive." }
          ],
          "trick": "Mirror adds u, lens subtracts: 1/v + 1/u = 1/f for mirrors but 1/v - 1/u = 1/f for lenses; magnification flips too (-v/u versus v/u).",
          "examPointer": "Lens numericals are near-certain: fix signs first, apply 1/v - 1/u = 1/f, then m = v/u, and finish by stating real or virtual, erect or inverted, and size."
        },
        {
          "heading": "Power of a Lens and Exam Strategy",
          "para": "The power of a lens measures how strongly it converges or diverges light: the power of lens P is defined as P = 1/f when the focal length f is expressed in metres. Its SI unit is the dioptre (D): one dioptre is the power of a lens of focal length one metre. A convex (converging) lens has positive power; a concave (diverging) lens has negative power - a lens of f = -50 cm has P = -2 D. For thin lenses placed in contact, the powers simply add: P = P1 + P2; for example, lenses of +5 D and -2 D in contact behave as a single +3 D converging lens with f = 1/3 m, about 33 cm. Numericals strategy for the whole chapter: convert centimetres to metres before computing power; fix the sign convention before touching the formula; solve for v first, then m, then h' if a height is given; and close every answer by stating the nature of the image. Ray-diagram checklist: draw the principal axis, mark F and 2F (or C) symmetric on both sides, label O or P, draw two standard rays with arrowheads, show virtual rays and images as dashed lines, and label the final image with an arrow.",
          "points": [
            "The power of lens P = 1/f with f in metres; its SI unit is the dioptre (D).",
            "One dioptre is the power of a lens whose focal length is one metre.",
            "Convex lenses have positive power (converging); concave lenses have negative power (diverging).",
            "Thin lenses in contact add powers: P = P1 + P2; +5 D and -2 D together give +3 D, f = 1/3 m, about 33 cm.",
            "Convert cm to m before using P = 1/f; a 25 cm lens has power 4 D, not 0.04 D.",
            "In numericals, find v first, then m = v/u, then image height h' = m x h, and state the image nature.",
            "Ray-diagram checklist: axis, F and 2F marked, two standard rays with arrowheads, dashed lines for virtual rays and images, labelled result."
          ],
          "keyTerms": [
            { "term": "Power of lens", "meaning": "P = 1/f with f in metres; it measures the converging or diverging ability of the lens." },
            { "term": "Dioptre", "meaning": "The SI unit of lens power: the power of a lens of focal length one metre." },
            { "term": "Combination of lenses", "meaning": "Thin lenses in contact behave as one lens whose power is the sum P = P1 + P2." }
          ],
          "trick": "Power lives in metres: divide centimetres by 100 first; convex earns plus D, concave minus D, and touching lenses simply add.",
          "examPointer": "One-marker: define dioptre. Two-marker: combined power of two lenses in contact. Trap: using cm in P = 1/f; always convert to metres first."
        }
      ],
      "mcqs": [
        { "question": "According to the laws of reflection, the angle of incidence is:", "options": ["Greater than the angle of reflection", "Equal to the angle of reflection", "Less than the angle of reflection", "Twice the angle of reflection"], "answerIndex": 1, "explanation": "The first law states the angle of incidence equals the angle of reflection, both measured from the normal; the incident ray, reflected ray and normal lie in one plane.", "difficulty": "easy" },
        { "question": "The image formed by a plane mirror is:", "options": ["Real, inverted, same size", "Virtual, erect, laterally inverted", "Virtual, inverted, magnified", "Real, erect, diminished"], "answerIndex": 1, "explanation": "A plane mirror always forms a virtual, erect image of the same size, located as far behind the mirror as the object is in front; left and right are interchanged.", "difficulty": "easy" },
        { "question": "For a spherical mirror, the radius of curvature R and focal length f are related by:", "options": ["R = f/2", "R = f", "R = 2f", "R = 4f"], "answerIndex": 2, "explanation": "The principal focus lies midway between the pole and the centre of curvature, so f = R/2 or R = 2f for both concave and convex mirrors.", "difficulty": "easy", "pyq": "CBSE 2019" },
        { "question": "An object placed at the centre of curvature of a concave mirror forms an image that is:", "options": ["At infinity and virtual", "At C, real, inverted and same size", "Between F and C and erect", "Behind the mirror and magnified"], "answerIndex": 1, "explanation": "With the object at C, the reflected rays meet at C itself: the image is real, inverted and of the same size as the object.", "difficulty": "medium" },
        { "question": "When an object is placed between the pole and focus of a concave mirror, the image is:", "options": ["Real and inverted", "Virtual, erect and magnified", "Real and diminished", "Formed at the focus"], "answerIndex": 1, "explanation": "Reflected rays diverge and appear to meet behind the mirror, giving a virtual, erect, enlarged image - the principle of the shaving mirror.", "difficulty": "medium" },
        { "question": "A dentist uses a small concave mirror because it:", "options": ["Always forms a diminished image", "Forms an erect, magnified image of a close object", "Absorbs excess light", "Forms a real image behind the mirror"], "answerIndex": 1, "explanation": "Held close, the tooth lies between the pole and focus, so the concave mirror gives an erect, enlarged image that lets the dentist see the tooth clearly.", "difficulty": "easy" },
        { "question": "Convex mirrors are preferred as rear-view mirrors in vehicles because they:", "options": ["Form magnified real images", "Give a wider field of view with erect, diminished images", "Focus sunlight onto the driver", "Always form images at the focus"], "answerIndex": 1, "explanation": "The outward-curved surface collects light from a large area behind, and the image is always virtual, erect and diminished, so the driver sees more traffic at once.", "difficulty": "easy", "pyq": "CBSE 2020" },
        { "question": "The magnification produced by a convex mirror is always:", "options": ["Positive and less than 1", "Negative and less than 1", "Positive and greater than 1", "Exactly zero"], "answerIndex": 0, "explanation": "The convex mirror image is erect (positive m) and diminished (m smaller than 1), located between the pole and focus behind the mirror.", "difficulty": "medium" },
        { "question": "The mirror formula relating object distance u, image distance v and focal length f is:", "options": ["1/v - 1/u = 1/f", "1/v + 1/u = 1/f", "v + u = f", "1/v + 1/f = 1/u"], "answerIndex": 1, "explanation": "For all spherical mirrors, 1/v + 1/u = 1/f, with distances taken in the New Cartesian sign convention from the pole.", "difficulty": "easy" },
        { "question": "In the sign convention, the focal length of a concave mirror is:", "options": ["Positive", "Negative", "Zero", "Sometimes positive, sometimes negative"], "answerIndex": 1, "explanation": "A concave mirror converges parallel rays in front of it, on the negative side of the pole, so its focal length and real image distances are negative.", "difficulty": "medium" },
        { "question": "Snell's law of refraction states that:", "options": ["i + r = 90 degrees", "sin i / sin r = constant", "i = r", "sin i x sin r = 1"], "answerIndex": 1, "explanation": "For a given pair of media and colour of light, the ratio of the sine of the angle of incidence to that of refraction is constant; that constant is the relative refractive index.", "difficulty": "easy" },
        { "question": "The refractive index of diamond is 2.42. The speed of light in diamond is about:", "options": ["3 x 10^8 m/s", "2.42 x 10^8 m/s", "1.24 x 10^8 m/s", "4.84 x 10^8 m/s"], "answerIndex": 2, "explanation": "n = c/v, so v = c/n = (3 x 10^8)/2.42, which is about 1.24 x 10^8 m/s - the lowest speed among common transparent materials.", "difficulty": "medium" },
        { "question": "A coin at the bottom of a water tank appears raised because:", "options": ["Light speeds up in water", "Rays from the coin bend away from the normal on leaving water", "Water absorbs light", "The coin expands in water"], "answerIndex": 1, "explanation": "Light from the coin travels from a denser to a rarer medium and bends away from the normal; the raised apparent position is where the diverging rays seem to meet.", "difficulty": "medium" },
        { "question": "After passing through a rectangular glass slab, the emergent ray is:", "options": ["Perpendicular to the incident ray", "Parallel to the incident ray but laterally displaced", "Reversed in direction", "Absorbed by the slab"], "answerIndex": 1, "explanation": "The ray bends towards the normal entering glass and away from it on leaving, so it emerges parallel to the incident ray with a sideways shift called lateral displacement.", "difficulty": "easy" },
        { "question": "A magnifying glass is a:", "options": ["Concave lens used beyond its focus", "Convex lens used with the object between the lens and its focus", "Concave mirror", "Convex lens used beyond 2F"], "answerIndex": 1, "explanation": "With the object between the optical centre and F, a convex lens forms a virtual, erect, magnified image on the same side - the working of a simple magnifier.", "difficulty": "easy" },
        { "question": "A concave lens always forms an image that is:", "options": ["Real, inverted, magnified", "Virtual, erect, diminished", "Real, erect, same size", "Virtual, inverted, magnified"], "answerIndex": 1, "explanation": "Rays diverge after a concave lens and appear to come from the focus on the object's side, so the image is always virtual, erect and smaller than the object.", "difficulty": "easy" },
        { "question": "The lens formula is:", "options": ["1/v + 1/u = 1/f", "1/v - 1/u = 1/f", "v x u = f", "1/v + 1/f = 1/u"], "answerIndex": 1, "explanation": "NCERT uses 1/v - 1/u = 1/f for lenses; the sign convention then decides whether v is positive (real image) or negative (virtual image).", "difficulty": "easy" },
        { "question": "Two thin lenses of powers +5 D and -2 D are placed in contact. The focal length of the combination is:", "options": ["+0.33 m (converging)", "-0.33 m (diverging)", "+3 m", "+7 m"], "answerIndex": 0, "explanation": "P = P1 + P2 = +3 D, so f = 1/P = 1/3 m, about 33 cm; the positive sign shows the combination converges light.", "difficulty": "medium" }
      ],
      "boardQuestions": [
        { "question": "State the two laws of reflection of light. How does regular reflection differ from diffuse reflection?", "marks": 2, "type": "short", "probability": "high", "answer": "The laws of reflection are: (i) the angle of incidence is equal to the angle of reflection, both angles being measured from the normal to the reflecting surface at the point of incidence; and (ii) the incident ray, the reflected ray and the normal to the surface at the point of incidence all lie in the same plane. These laws hold for every reflecting surface, plane or curved, smooth or rough. In regular reflection from a smooth surface, all parallel incident rays remain parallel after reflection and an image is formed; in diffuse reflection from a rough surface, the laws still apply at every microscopic point, but the varying surface directions scatter the reflected rays so no image forms and only the objects themselves become visible." },
        { "question": "Draw labelled ray diagrams to show the image formed by a concave mirror when the object is placed (a) beyond C, (b) at C, (c) between C and F, (d) at F, (e) between P and F, and (f) at infinity. State the nature of the image in each case and give two uses of the concave mirror.", "marks": 5, "type": "long", "probability": "high", "answer": "Take the six object positions in order with F midway between P and C since R = 2f. (1) Object at infinity: rays arrive parallel to the axis and meet at F; the image is real, inverted and point-sized - used in solar devices to concentrate light. (2) Object beyond C: the image forms between F and C; it is real, inverted and diminished. (3) Object at C: the image forms at C; real, inverted and of the same size. (4) Object between C and F: the image forms beyond C; real, inverted and magnified. (5) Object at F: reflected rays leave parallel; the image is at infinity, real, inverted and highly enlarged. (6) Object between P and F: reflected rays diverge and appear to meet behind the mirror; the image is virtual, erect and magnified - the case used in shaving mirrors and dentists' mirrors. Uses: torches, searchlights and vehicle headlights place the bulb near F to throw a parallel beam, and solar furnaces converge sunlight at F to produce heat. The pattern to remember: as the object slides from infinity towards F, the image slides from F outwards past C, growing from a point to same-size to magnified; crossing inside F flips the image behind the mirror, erect and enlarged." },
        { "question": "An object 4 cm high is placed at a distance of 30 cm from a concave mirror of focal length 10 cm. Find the position, nature and size of the image.", "marks": 5, "type": "long", "probability": "high", "answer": "Given: object height h = +4 cm, object distance u = -30 cm, concave mirror focal length f = -10 cm (the focal length of a concave mirror is negative). Mirror formula: 1/v + 1/u = 1/f, so 1/v = 1/f - 1/u = (-1/10) - (-1/30) = -1/10 + 1/30 = (-3 + 1)/30 = -2/30 = -1/15. Hence v = -15 cm: the image lies 15 cm in front of the mirror, on the same side as the object, so it is real. Magnification m = -v/u = -(-15)/(-30) = -0.5. The negative sign shows the image is inverted. Image height h' = m x h = -0.5 x 4 = -2 cm: the image is 2 cm high, inverted and half the object's size. Conclusion: a real, inverted, diminished image at 15 cm from the mirror - consistent with the rule that an object beyond C forms a diminished image between F and C." },
        { "question": "Write the New Cartesian sign convention for spherical mirrors and state the signs of u, f and v for concave and convex mirrors.", "marks": 3, "type": "short", "probability": "high", "answer": "The New Cartesian sign convention: (i) the pole of the mirror is taken as the origin and the principal axis as the x-axis; (ii) the object is always placed to the left, so incident light travels from left to right; (iii) all distances are measured from the pole; (iv) distances measured to the right (along the incident light) are positive and to the left are negative; (v) heights above the principal axis are positive and heights below it are negative. Hence for a real object u is negative; the focal length of a concave mirror is negative while that of a convex mirror is positive; a real image has negative v (in front of the mirror) while a virtual image has positive v (behind the mirror). Inverted image heights are negative and erect heights positive." },
        { "question": "State the laws of refraction of light. Define the refractive index of a medium and give its values for water, glass and diamond.", "marks": 3, "type": "short", "probability": "high", "answer": "Law 1: the incident ray, the refracted ray and the normal to the interface at the point of incidence all lie in the same plane. Law 2 (Snell's law): for a given pair of media and a given colour of light, the ratio of the sine of the angle of incidence to the sine of the angle of refraction is constant, sin i / sin r = constant. This constant is the relative refractive index of the second medium with respect to the first. The absolute refractive index of a medium is defined as n = c/v, the ratio of the speed of light in vacuum to its speed in the medium; for water n = 1.33, for ordinary glass n = 1.5 and for diamond n = 2.42. Because light slows in an optically denser medium, a ray entering glass from air bends towards the normal and a ray entering air from glass bends away from the normal." },
        { "question": "Describe with a diagram the path of a ray of light through a rectangular glass slab. Define lateral displacement and state the factors on which it depends.", "marks": 5, "type": "long", "probability": "medium", "answer": "A ray incident obliquely at the first face of a rectangular glass slab travels in air along AB making an angle of incidence i with the normal; on entering the optically denser glass it slows and bends towards the normal, making the angle of refraction r; it then travels straight through the glass along BC. At the second face the ray passes from a denser to a rarer medium and bends away from the normal by the same measure, emerging along CD at an angle of emergence equal to i. Because the two refractions are equal and opposite in direction, the emergent ray CD is parallel to the incident ray AB. However, the ray inside the slab travelled along a displaced path, so the emergent ray is shifted sideways by a perpendicular distance called the lateral displacement. Lateral displacement grows with the thickness of the slab, the angle of incidence and the refractive index of the glass, and it becomes zero for normal incidence. Practical confirmation: a page viewed through a thick glass block appears raised and shifted but not distorted." },
        { "question": "Describe, with ray diagrams, the image formed by a convex lens when the object is (a) beyond 2F1, (b) at 2F1, (c) between F1 and 2F1, (d) at F1, (e) between F1 and the optical centre, and state what image a concave lens always forms.", "marks": 5, "type": "long", "probability": "high", "answer": "Three rays build every lens diagram: a ray parallel to the principal axis refracts through the principal focus (convex) or appears to diverge from it (concave); a ray through the optical centre passes undeviated; a ray through the focus of a convex lens emerges parallel to the axis. Convex lens cases: object beyond 2F1 gives a real, inverted, diminished image between F2 and 2F2; at 2F1 gives a real, inverted, same-size image at 2F2; between F1 and 2F1 gives a real, inverted, magnified image beyond 2F2; at F1 the refracted rays leave parallel, so the image forms at infinity; between F1 and the optical centre gives a virtual, erect, magnified image on the same side - the magnifying glass. The concave lens, whatever the object position, gives a virtual, erect and diminished image lying between the optical centre and the focus on the object's side; that is why its image can never be caught on a screen." },
        { "question": "An object 4 cm high is placed 30 cm from a convex lens of focal length 10 cm. Find the position, nature and size of the image.", "marks": 5, "type": "long", "probability": "high", "answer": "Given: u = -30 cm (object on the left), convex lens f = +10 cm, object height h = +4 cm. Lens formula: 1/v - 1/u = 1/f, so 1/v = 1/f + 1/u = 1/10 + (-1/30) = 1/10 - 1/30 = (3 - 1)/30 = 2/30 = 1/15. Hence v = +15 cm: the image forms 15 cm behind the lens on the opposite side, and the positive sign shows it is real. Magnification m = v/u = 15/(-30) = -0.5: negative, so the image is inverted, and its magnitude 0.5 shows it is diminished. Image height h' = m x h = -0.5 x 4 = -2 cm, a 2 cm inverted image. Conclusion: a real, inverted, half-size image 15 cm from the lens - matching the rule that an object beyond 2F forms a diminished image between F and 2F on the other side." },
        { "question": "Define the power of a lens and its SI unit. Two thin lenses of powers +5 D and -2 D are placed in contact. Find the power and focal length of the combination.", "marks": 3, "type": "short", "probability": "medium", "answer": "Power of a lens is the degree to which it converges or diverges light, defined as P = 1/f with the focal length in metres; its SI unit is the dioptre (D), the power of a lens of focal length one metre. Convex lenses have positive power and concave lenses negative power. For thin lenses in contact the powers add: P = P1 + P2. Example: lenses of power +5 D and -2 D placed together have net power P = +5 - 2 = +3 D, so the combination behaves as a converging lens of focal length f = 1/P = 1/3 m, about 33.3 cm. Remember to convert focal lengths from cm to m before calculating power." },
        { "question": "Why are convex mirrors used as rear-view mirrors in vehicles?", "marks": 2, "type": "short", "probability": "high", "answer": "Convex mirrors are used as rear-view mirrors for two reasons. First, because the reflecting surface bulges outwards, a convex mirror gathers light from a much wider spread of directions, giving the driver a wider field of view of the traffic behind than a plane mirror of the same size could. Second, whatever the position of the vehicles behind, the image formed by a convex mirror is always virtual, erect and diminished, so it is upright and easy to interpret at a glance even though it is smaller than the objects. The slight shrinkage in size is a small price for the large coverage, which is why convex mirrors are also placed at blind road bends and shop entrances." },
        { "question": "Define the principal focus of a concave mirror and of a convex mirror. State the full sign convention for spherical mirrors, and find the image when (a) an object stands 30 cm before a concave mirror of f = 10 cm, and (b) an object stands 30 cm before a convex lens of f = 10 cm.", "marks": 6, "type": "long", "probability": "medium", "answer": "(a) Principal focus of a concave mirror: the point F on the principal axis where rays parallel to the axis actually meet after reflection - a real focus. Of a convex mirror: the point behind the mirror from which parallel rays appear to diverge - a virtual focus. In both mirrors f = R/2. (b) Sign convention summary: distances from the pole (or optical centre); left negative, right positive; heights above the axis positive, below negative; concave mirror f negative, convex positive; mirror formula 1/v + 1/u = 1/f with m = -v/u, and lens formula 1/v - 1/u = 1/f with m = v/u. (c) Numerical one: object 30 cm before a concave mirror of f = 10 cm: u = -30, f = -10, 1/v = -1/10 + 1/30 = -1/15, so v = -15 cm and m = -0.5 - real, inverted, half-size, 15 cm in front. (d) Numerical two: object 30 cm before a convex lens of f = 10 cm: 1/v = 1/10 - 1/30 = 1/15, so v = +15 cm and m = -0.5 - real, inverted, half-size, 15 cm behind the lens. The two cases together show the sign bookkeeping that decides every optics answer." }
      ]
    },
    {
      "number": 11,
      "title": "Electricity",
      "summary": "Worth about eight marks, this chapter runs from charge to bills. It defines electric current I = Q/t with the ampere and coulomb, potential difference V = W/Q with the volt, and the measuring instruments (ammeter in series, voltmeter in parallel). Ohm's law V = IR at constant temperature is verified by the straight-line V-I graph. Resistance is built from R = rho l/A with resistivity in ohm-metre, material classes from conductors to insulators, and the special role of alloys like nichrome in heating devices. Series circuits share one current and add resistances (Rs = R1 + R2), parallel circuits share one voltage and add reciprocals (1/Rp = 1/R1 + 1/R2), which is why homes are wired in parallel. The heating effect gives Joule's law H = I^2 R t, behind heaters, irons, toasters, filament bulbs and fuses. Electric power P = VI = I^2 R = V^2/R in watts and kilowatts meets the commercial kilowatt-hour, 1 kWh = 3.6 x 10^6 J, for bill problems. The closing section trains circuit simplification, unit conversion and the classic numerical traps.",
      "weightageMarks": 8,
      "difficulty": "medium",
      "hotTopics": [
        "Ohm's law and V-I graphs",
        "Series and parallel resistance numericals",
        "Resistivity and factors affecting resistance",
        "Joule's law of heating and the fuse",
        "Electric power and kWh bill problems"
      ],
      "sections": [
        {
          "heading": "Electric Current and Circuit",
          "para": "An electric circuit is a continuous closed path through which charges can flow, from one terminal of a cell or battery through connecting wires and appliances back to the other terminal. Electric current is the rate of flow of electric charge through a cross-section of the conductor: I = Q/t. Charge is measured in coulomb (C), and one coulomb is the charge carried by roughly 6.25 x 10^18 electrons, since a single electron carries 1.6 x 10^-19 C. The SI unit of current is the ampere (A): a current of one ampere flows when one coulomb of charge passes a section of the conductor in one second, so 1 A = 1 C/s; smaller units are the milliampere (1 mA = 10^-3 A) and microampere. In a metal wire the moving charges are free electrons, which drift from the negative towards the positive terminal; by convention, however, the direction of electric current is taken opposite to the flow of electrons, from the positive terminal to the negative one through the external circuit. An ammeter measures current and is connected in series so the whole current passes through it; it has very low resistance so it does not disturb the circuit. An open (broken) circuit carries no current; a closed one does.",
          "points": [
            "An electric circuit is a closed conducting path; current flows only when the circuit is complete.",
            "Electric current is the rate of flow of charge: I = Q/t.",
            "Charge is measured in coulomb; one coulomb corresponds to about 6.25 x 10^18 electrons.",
            "One ampere is one coulomb of charge flowing through a conductor's cross-section per second (1 A = 1 C/s).",
            "Conventional current flows from the positive to the negative terminal outside the source, opposite to the electron flow.",
            "An ammeter is connected in series and has very low resistance so the circuit current is unchanged.",
            "A closed circuit carries current; an open (incomplete or switched-off) circuit carries none."
          ],
          "keyTerms": [
            { "term": "Electric current", "meaning": "The rate of flow of electric charge through a cross-section of a conductor, I = Q/t." },
            { "term": "Coulomb", "meaning": "The SI unit of charge, equal to the charge on about 6.25 x 10^18 electrons." },
            { "term": "Ampere", "meaning": "The SI unit of current: one coulomb of charge flowing per second." },
            { "term": "Ammeter", "meaning": "A low-resistance instrument connected in series to measure the circuit current." }
          ],
          "trick": "Memorise Q = It and the flip: conventional current runs positive to negative outside the cell, opposite to electron drift.",
          "examPointer": "One-markers define the ampere and count charge using Q = It; a classic slip is forgetting to convert minutes into seconds before substituting t."
        },
        {
          "heading": "Electric Potential and Potential Difference",
          "para": "Charges do not flow on their own, just as water does not flow on a flat rooftop: a difference in level is needed. The electric potential difference between two points is the work done in moving a unit positive charge from one point to the other: V = W/Q. Its SI unit is the volt (V): a potential difference of one volt exists between two points if one joule of work moves one coulomb of charge between them, so 1 V = 1 J/C. A cell or battery maintains this difference across its terminals by converting chemical energy into electrical energy - it acts like a pump that lifts charges to a higher potential and lets the circuit's electric field push them around. A voltmeter measures the potential difference across a component and is therefore connected in parallel with it; a voltmeter has very high resistance so that it draws a negligible current and does not change the very difference it measures. In circuit diagrams the long line of a cell is its positive terminal and the short thick line the negative; a battery is several cells joined in series end to end.",
          "points": [
            "Potential difference V = W/Q: the work done in moving a unit charge between two points.",
            "One volt is one joule of work per coulomb of charge (1 V = 1 J/C).",
            "A cell or battery acts as a charge pump, converting chemical energy into electrical energy to maintain the potential difference.",
            "Charges flow from higher potential to lower potential through an external circuit, just as water flows down a slope.",
            "A voltmeter is connected in parallel across the component whose potential difference is to be measured.",
            "A voltmeter has very high resistance so it draws negligible current and does not disturb the circuit."
          ],
          "keyTerms": [
            { "term": "Potential difference", "meaning": "Work done per unit charge in moving a charge between two points, V = W/Q." },
            { "term": "Volt", "meaning": "The SI unit of potential difference: one joule of work per coulomb of charge." },
            { "term": "Voltmeter", "meaning": "A high-resistance instrument connected in parallel to measure the potential difference across a component." },
            { "term": "Battery", "meaning": "A combination of cells that converts chemical energy into electrical energy to maintain current flow." }
          ],
          "trick": "V = W/Q reads 'work per charge'; the voltmeter, like a polite observer, sits in parallel and takes almost no current.",
          "examPointer": "Define the volt exactly (1 J per 1 C) and be ready to explain why the voltmeter is in parallel while the ammeter is in series - a recurring 2-marker."
        },
        {
          "heading": "Ohm's Law",
          "para": "Ohm's law states that, at constant temperature, the current flowing through a metallic conductor is directly proportional to the potential difference across its ends: V is proportional to I, which is written V = IR. The constant R is the resistance of the conductor; its SI unit is the ohm, and one ohm is the resistance of a conductor through which a potential difference of one volt drives a current of one ampere (1 ohm = 1 V/A). Experimentally, connect a wire of the chosen material to a battery through an ammeter, a rheostat and a key, with a voltmeter across the wire; adjust the rheostat to change the current, and record matching pairs of V and I. Plotting V against I gives a straight line through the origin, whose slope equals R - a beautiful verification. The law holds only at constant temperature: as current flows the wire warms, and the resistance of a metal rises with temperature, so a heated wire's V-I curve bends away from the straight line. The physical conditions of the conductor therefore decide whether Ohm's law applies.",
          "points": [
            "Ohm's law: at constant temperature, V is proportional to I, written V = IR.",
            "R, the resistance, is measured in ohm; 1 ohm = 1 volt per ampere.",
            "Experimental check: vary the current with a rheostat, record pairs of V and I, and plot V against I.",
            "The V-I graph of a metallic conductor at constant temperature is a straight line through the origin whose slope equals R.",
            "Ohm's law fails when the temperature changes, because the resistance of a metal increases as it heats up.",
            "Components that do not obey Ohm's law show curved V-I graphs instead of straight lines."
          ],
          "keyTerms": [
            { "term": "Ohm's law", "meaning": "At constant temperature, the current through a conductor is proportional to the potential difference across it: V = IR." },
            { "term": "Resistance", "meaning": "The opposition a conductor offers to current flow; R = V/I, measured in ohm." },
            { "term": "Ohm", "meaning": "The SI unit of resistance: one volt per ampere." },
            { "term": "Rheostat", "meaning": "A variable resistance used to change the current in a circuit while verifying Ohm's law." }
          ],
          "trick": "V = IR hides in a triangle with V on top; the V-I line through the origin has slope R - 'slope speaks resistance'.",
          "examPointer": "State Ohm's law with 'at constant temperature' - omitting the condition costs the mark; sketch the straight-line graph and identify its slope as R."
        },
        {
          "heading": "Resistance and Resistivity",
          "para": "Experiment shows that the resistance of a conductor depends on three things: its length, its cross-sectional area and its material. Resistance is directly proportional to length l (a longer road offers more obstruction) and inversely proportional to area A (a wider road lets more traffic through), giving R = rho l / A, where rho is the resistivity of the material. Resistivity is measured in ohm-metre; it is a property of the material (and its temperature), not of the wire's size. Metals and their alloys have very low resistivities, around 10^-8 ohm-m, making them conductors; rubber, glass and plastics have resistivities of the order of 10^14 to 10^18 ohm-m, making them insulators used for covering wires and handles. Alloys such as nichrome are chosen for heating elements because their resistivity is much higher than that of pure metals, they produce large heat for the same current, and they do not oxidise (burn) readily at high temperatures. Temperature matters too: the resistance of a pure metal increases with temperature, while that of an alloy changes only slightly. Copper, with its low resistivity, is used for connecting wires and domestic wiring.",
          "points": [
            "Resistance is proportional to length and inversely proportional to cross-sectional area: R = rho l / A.",
            "Resistivity rho, in ohm-metre, depends only on the material and its temperature, not on the wire's dimensions.",
            "Metals have very low resistivities (about 10^-8 ohm-m) and are conductors; rubber, glass and plastics are insulators with enormous resistivities.",
            "Nichrome and other alloys have much higher resistivity than pure metals, so they heat strongly for the same current.",
            "Alloys do not oxidise readily at high temperature, so heating elements made of them last long.",
            "The resistance of a pure metal increases with temperature; alloy resistances change very little.",
            "Copper and aluminium, with low resistivity, are used for electrical transmission and connecting wires."
          ],
          "keyTerms": [
            { "term": "Resistivity", "meaning": "The resistance of a conductor of unit length and unit cross-sectional area; a property of the material, in ohm-metre." },
            { "term": "Ohm-metre", "meaning": "The SI unit of resistivity, obtained from rho = R A / l." },
            { "term": "Nichrome", "meaning": "An alloy of high resistivity that does not oxidise easily at red heat, used for heating elements." },
            { "term": "Insulator", "meaning": "A material of extremely high resistivity (rubber, glass, plastic) that blocks current flow." }
          ],
          "trick": "R = rho l/A: 'long and thin resists more' - length multiplies, area divides; rho belongs to the material alone.",
          "examPointer": "Numericals on R = rho l/A are standard; doubling l doubles R, doubling A halves R, and the unit of resistivity is ohm-metre - state it."
        },
        {
          "heading": "Resistors in Series",
          "para": "Join resistors end to end so the same current must pass through each of them in turn: that is a series combination. There is only one path, so the current I is identical through every resistor, while the total potential difference divides among them: V = V1 + V2 + V3. Applying V = IR to each part, the total resistance of the combination is Rs = R1 + R2 + R3, and so on for more resistors. The equivalent resistance is always larger than the largest individual resistance - adding resistors in series only makes it harder for current to flow. Worked example: resistors of 1, 2 and 3 ohm in series give Rs = 6 ohm; on a 6 V battery the current is I = V/Rs = 1 A, and the potential differences are V1 = 1 V, V2 = 2 V and V3 = 3 V, adding to the supply 6 V. Series circuits have serious drawbacks as domestic wiring: if one component breaks or one bulb fuses, the entire path breaks and everything stops; every appliance receives only a share of the full voltage; and no device can be switched independently of the others.",
          "points": [
            "In a series circuit there is one path, so the same current passes through every resistor.",
            "The total potential difference divides across the resistors: V = V1 + V2 + V3.",
            "Combining V = IR with the voltage sum gives Rs = R1 + R2 + R3 for series resistors.",
            "The equivalent series resistance is larger than the largest individual resistance.",
            "Example: 1, 2 and 3 ohm in series give 6 ohm; with 6 V the current is 1 A and the voltages split as 1, 2 and 3 V.",
            "Drawbacks: one broken component stops the whole circuit, appliances get only a share of the voltage, and devices cannot be switched independently."
          ],
          "keyTerms": [
            { "term": "Series combination", "meaning": "Resistors joined end to end carrying the same current, with voltages adding across them." },
            { "term": "Equivalent resistance", "meaning": "The single resistance that could replace a combination without changing the current: Rs = R1 + R2 + R3 in series." },
            { "term": "Voltage division", "meaning": "In series, the supply voltage divides across resistors in proportion to their resistances." }
          ],
          "trick": "Series is one road: same traffic (current) everywhere, and the voltage splits in proportion to each resistance.",
          "examPointer": "Derive Rs = R1 + R2 + R3 step by step from V = V1 + V2 + V3 and V = IR; examiners award marks for each algebraic line."
        },
        {
          "heading": "Resistors in Parallel",
          "para": "Connect resistors between the same two points so the current can split into branches: that is a parallel combination. Every branch experiences the same potential difference V - the full supply voltage - while the total current divides: I = I1 + I2 + I3. Dividing each branch current by V and using I = V/R gives the combining rule 1/Rp = 1/R1 + 1/R2 + 1/R3: reciprocals add, so the equivalent resistance is smaller than the smallest individual resistor. Worked example: 1, 2 and 3 ohm in parallel give 1/Rp = 1 + 1/2 + 1/3 = 11/6, so Rp = 6/11 ohm, about 0.55 ohm. Domestic wiring is parallel for three solid reasons: each appliance receives the full 220 V it is rated for; each has its own switch, so it can be operated independently; and if one appliance fails or is switched off, the others keep working - the circuit is never wholly broken. The trade-off is that adding appliances draws more total current from the supply, which is why running many heavy appliances on one socket is dangerous overloading.",
          "points": [
            "In a parallel circuit all branches share the same potential difference V.",
            "The total current divides among the branches: I = I1 + I2 + I3.",
            "The combining rule is 1/Rp = 1/R1 + 1/R2 + 1/R3, so reciprocals add.",
            "The equivalent parallel resistance is smaller than the smallest branch resistance.",
            "Example: 1, 2 and 3 ohm in parallel give Rp = 6/11 ohm, about 0.55 ohm.",
            "Home wiring is parallel: each appliance gets the full 220 V, has independent switching, and one failure does not stop the others."
          ],
          "keyTerms": [
            { "term": "Parallel combination", "meaning": "Resistors connected between the same two points, sharing the same voltage with currents dividing." },
            { "term": "Branch current", "meaning": "The current in one parallel path; the sum of all branch currents equals the main current." },
            { "term": "Reciprocal rule", "meaning": "For parallel resistors, reciprocals add: 1/Rp = 1/R1 + 1/R2 + 1/R3." }
          ],
          "trick": "Parallel is many lifts to the same floor: one voltage for all, currents add, and Rp ends up smaller than the smallest resistor.",
          "examPointer": "Expect 'why is domestic wiring parallel?' plus a numerical on 1/Rp; show the reciprocal step clearly or the calculation mark is lost."
        },
        {
          "heading": "Heating Effect of Electric Current",
          "para": "When an electric current passes through a purely resistive conductor, the chemical energy of the source is converted entirely into heat: the battery maintains a current I for time t, the charge Q = It loses potential energy VQ in the resistor, and the work done W = VIt appears as heat. Substituting V = IR gives Joule's law of heating: H = I^2 R t. Heat produced is proportional to the square of the current, to the resistance and to the time - doubling the current quadruples the heat, which is why overloaded wires overheat dangerously. Applications are everywhere. The heating elements of electric heaters, irons and toasters use high-resistivity nichrome that neither melts nor oxidises at red heat. The filament of a bulb is a thin tungsten wire of high resistance and very high melting point, heated white-hot by I^2 R heating to emit light, sealed in a gas to slow evaporation. The fuse is a deliberate application in reverse: a short length of thin wire of an alloy with a low melting point, connected in series with the live wire, melts when the current exceeds its rating and breaks the circuit, protecting appliances and wiring from damage by overloading or short-circuits.",
          "points": [
            "In a purely resistive circuit the energy spent W = VIt appears entirely as heat in the resistor.",
            "Substituting V = IR gives Joule's law of heating: H = I^2 R t.",
            "Heat is proportional to the square of the current, to the resistance and to the time of flow.",
            "Heaters, irons and toasters use nichrome elements: high resistivity and no easy oxidation at high temperature.",
            "A bulb filament is thin tungsten with high resistance and a very high melting point, glowing white-hot in an inert atmosphere.",
            "A fuse is a thin wire of low-melting alloy in series with the live wire; excess current melts it and breaks the circuit.",
            "The fuse protects against overloading and short-circuits by sacrificing itself first."
          ],
          "keyTerms": [
            { "term": "Joule's law of heating", "meaning": "H = I^2 R t: heat produced is proportional to the square of current, resistance and time." },
            { "term": "Filament", "meaning": "The thin tungsten wire of a bulb that glows white-hot; tungsten has a very high melting point." },
            { "term": "Fuse", "meaning": "A low-melting alloy wire in series with the live wire that melts on excess current and breaks the circuit." },
            { "term": "Tungsten", "meaning": "The metal used for bulb filaments because of its very high melting point and high resistivity." }
          ],
          "trick": "H = I^2 R t: 'squared current heats hardest' - double the current and the heat becomes four times.",
          "examPointer": "Derive H = I^2 R t from W = VIt and V = IR, then name applications (heater, bulb filament, fuse) - a standard 5-marker pattern."
        },
        {
          "heading": "Electric Power and the Kilowatt-hour",
          "para": "Electric power is the rate at which electrical energy is consumed or delivered: P = W/t = VI. Substituting V = IR in turn gives two more forms: P = I^2 R and P = V^2/R - choose whichever fits the data given. The SI unit is the watt (W), equal to one joule per second; larger units are the kilowatt (1 kW = 1000 W). Appliances carry a rating plate, for example 220 V, 100 W: at a supply of 220 V the bulb consumes 100 W, drawing a current I = P/V = 0.45 A, and its hot resistance is R = V^2/P = 484 ohm. The commercial unit of electrical energy is the kilowatt-hour (kWh), the energy consumed by a 1 kW appliance running for one hour: 1 kWh = 1000 W x 3600 s = 3.6 x 10^6 J; on bills it is simply called one unit. Example: four 100 W bulbs burning 5 hours a day for 30 days consume 4 x 100 x 5 x 30 = 60,000 Wh = 60 kWh; at Rs 6 per unit the cost is Rs 360. Bills, ratings and conversions are guaranteed numerical territory in the paper.",
          "points": [
            "Electric power is the rate of energy consumption: P = W/t = VI.",
            "Using V = IR gives the alternate forms P = I^2 R and P = V^2/R - pick the form matching the known quantities.",
            "The SI unit of power is the watt (joule per second); 1 kW = 1000 W.",
            "A 220 V, 100 W bulb draws I = P/V = 0.45 A and has hot resistance R = V^2/P = 484 ohm.",
            "The commercial energy unit is the kilowatt-hour: 1 kWh = 3.6 x 10^6 J, called one unit on bills.",
            "Example: four 100 W bulbs for 5 hours daily over 30 days use 60 kWh, costing Rs 360 at Rs 6 per unit.",
            "Bills are computed as energy = power (kW) x hours, summed and multiplied by the rate per unit."
          ],
          "keyTerms": [
            { "term": "Electric power", "meaning": "The rate of consuming electrical energy, P = VI = I^2 R = V^2/R." },
            { "term": "Kilowatt-hour", "meaning": "The commercial unit of energy: 1 kWh = 3.6 x 10^6 J, sold as one unit on electricity bills." },
            { "term": "Watt", "meaning": "The SI unit of power: one joule per second; 1 kW = 1000 W." },
            { "term": "Rating plate", "meaning": "The P and V values printed on an appliance (like 220 V, 100 W) from which I and R are calculated." }
          ],
          "trick": "Units = kW x hours; 1 kWh = 3.6 million joules. The meter counts units, physics counts joules - convert before comparing.",
          "examPointer": "Learn P = VI = I^2 R = V^2/R and choose the right form; bill questions need power in kW, hours, then multiply by the per-unit rate."
        },
        {
          "heading": "Exam Strategy: Numericals and Circuit Analysis",
          "para": "Mixed circuit numericals reward a fixed routine. Step one: identify series islands and parallel islands; collapse the parallel parts into one equivalent resistance using 1/Rp, then combine the series chain with Rs, redrawing the circuit at each step. Step two: find the total current from the battery using I = V/Rtotal. Step three: work backwards - the voltage across a parallel block, then branch currents, then individual drops V = IR. Sanity-check every answer: a parallel equivalent must come out smaller than the smallest branch, a series total larger than the largest element, and all branch currents must add back to the main current. Convert units before substituting: mA to A (divide by 1000), minutes to seconds (multiply by 60), centimetres to metres, and kW to W. Typical CBSE types: V-I graph slope questions, resistivity wires being stretched or doubled, equivalent resistance of mixed circuits, heat produced H = I^2 R t, cost of running appliances, and bulb ratings. Common traps: using mA as A, forgetting that resistance depends on temperature, mixing up Rs and 1/Rp, and misreading 220 V, 100 W ratings.",
          "points": [
            "Simplify in layers: merge parallel islands first with 1/Rp, then the series chain with Rs, redrawing as you go.",
            "Find the main current I = V/Rtotal, then distribute voltages and currents backwards through the circuit.",
            "Sanity checks: Rp is smaller than the smallest branch; Rs is larger than the largest element; branch currents add to the total.",
            "Convert units first: mA to A, minutes to seconds, cm to m, kW to W.",
            "Classic question types: graph slope, stretched-wire resistivity, mixed circuits, heating H = I^2 R t, electricity bills, bulb ratings.",
            "Traps: reading mA as A, using the wrong power form for the given data, and forgetting the temperature condition in Ohm's law.",
            "In heating questions keep t in seconds, or your joules will be wrong by a factor of sixty."
          ],
          "keyTerms": [
            { "term": "Circuit simplification", "meaning": "Step-by-step replacement of resistor groups by equivalents until one total resistance remains." },
            { "term": "Unit conversion", "meaning": "Changing mA to A, minutes to seconds, cm to m and kW to W before substituting into formulas." },
            { "term": "Equivalent resistance", "meaning": "The single resistance representing a whole network, found by combining series and parallel parts." }
          ],
          "trick": "Simplify parallel islands first, series chains second; then sanity-check with 'Rp smallest, Rs largest' before writing the final answer.",
          "examPointer": "CBSE numericals mix circuits and bills; practise converting mA to A and minutes to seconds before substituting into H = I^2 R t or P = VI."
        }
      ],
      "mcqs": [
        { "question": "Electric current is defined as:", "options": ["Work done per unit charge", "The rate of flow of electric charge", "The force on a charge", "Energy per unit charge"], "answerIndex": 1, "explanation": "Current I = Q/t, the amount of charge crossing a section of the conductor per second; its SI unit is the ampere.", "difficulty": "easy" },
        { "question": "The SI unit of electric charge is:", "options": ["Ampere", "Volt", "Coulomb", "Ohm"], "answerIndex": 2, "explanation": "Charge is measured in coulomb (C); one coulomb corresponds to about 6.25 x 10^18 electrons, since each electron carries 1.6 x 10^-19 C.", "difficulty": "easy" },
        { "question": "One ampere equals:", "options": ["1 joule per coulomb", "1 coulomb per second", "1 volt per ohm squared", "1 watt per volt"], "answerIndex": 1, "explanation": "The ampere is defined as the flow of one coulomb of charge through a section of a conductor in one second (1 A = 1 C/s).", "difficulty": "easy", "pyq": "CBSE 2019" },
        { "question": "How much charge flows when a current of 0.5 A is drawn for 10 minutes?", "options": ["5 C", "30 C", "300 C", "3000 C"], "answerIndex": 2, "explanation": "Q = It = 0.5 x 600 = 300 C; remember to convert 10 minutes into 600 seconds before substituting.", "difficulty": "medium" },
        { "question": "An ammeter is always connected in:", "options": ["Parallel with the circuit", "Series with the circuit", "Either way", "Across the battery only"], "answerIndex": 1, "explanation": "The ammeter must carry the full circuit current, so it is joined in series and made with very low resistance.", "difficulty": "easy" },
        { "question": "Potential difference between two points is:", "options": ["Work done per unit charge in moving between them", "Charge per unit time", "Force per unit charge", "Power per unit area"], "answerIndex": 0, "explanation": "V = W/Q: the potential difference is the work done in moving a unit charge from one point to the other; 1 V = 1 J/C.", "difficulty": "easy" },
        { "question": "A voltmeter is connected in:", "options": ["Series in the circuit", "Parallel across the component", "Series with the ammeter", "The earth wire"], "answerIndex": 1, "explanation": "A voltmeter measures the potential difference across a component, so it is connected in parallel and has very high resistance so it draws negligible current.", "difficulty": "easy" },
        { "question": "Ohm's law holds good when:", "options": ["The current is very large", "The temperature remains constant", "The wire is very long", "The battery is alternating"], "answerIndex": 1, "explanation": "V is proportional to I only at constant physical conditions, especially constant temperature; heating a metal wire raises its resistance and bends the V-I line.", "difficulty": "easy", "pyq": "CBSE 2020" },
        { "question": "The slope of the V-I graph of a metallic conductor at constant temperature gives:", "options": ["Power", "Resistivity", "Resistance", "Charge"], "answerIndex": 2, "explanation": "Since V = IR, plotting V against I gives a straight line through the origin whose slope V/I is the resistance R.", "difficulty": "medium" },
        { "question": "The SI unit of resistivity is:", "options": ["Ohm", "Ohm per metre", "Ohm-metre", "Ohm per square metre"], "answerIndex": 2, "explanation": "From R = rho l/A, rho = R A/l, so the unit of resistivity is ohm times metre (ohm-m); it depends only on the material and temperature.", "difficulty": "easy" },
        { "question": "Nichrome is used for heating elements because it:", "options": ["Has very low resistivity", "Has high resistivity and does not oxidise readily at high temperature", "Melts easily at low temperature", "Is a good insulator"], "answerIndex": 1, "explanation": "Nichrome's high resistivity produces strong heating (H = I^2 R t), and it neither burns nor oxidises quickly at red heat, lasting for years.", "difficulty": "medium" },
        { "question": "Three resistors of 1 ohm, 2 ohm and 3 ohm are joined in series. The equivalent resistance is:", "options": ["0.55 ohm", "1.8 ohm", "6 ohm", "11/6 ohm"], "answerIndex": 2, "explanation": "In series, Rs = R1 + R2 + R3 = 1 + 2 + 3 = 6 ohm, which is larger than the largest single resistance.", "difficulty": "easy" },
        { "question": "The same three resistors (1, 2 and 3 ohm) in parallel give an equivalent resistance of about:", "options": ["6 ohm", "0.55 ohm", "1.83 ohm", "2 ohm"], "answerIndex": 1, "explanation": "1/Rp = 1 + 1/2 + 1/3 = 11/6, so Rp = 6/11 ohm, about 0.55 ohm - smaller than the smallest resistor.", "difficulty": "medium" },
        { "question": "Domestic appliances are connected in parallel because:", "options": ["It saves wire only", "Each gets the full supply voltage and can be switched independently", "The fuse works better in parallel", "The current becomes zero"], "answerIndex": 1, "explanation": "Parallel wiring gives every appliance the same 220 V, lets each have its own switch, and keeps the others working when one fails.", "difficulty": "easy" },
        { "question": "Joule's law of heating is expressed as:", "options": ["H = IRt", "H = I^2 R t", "H = V I t squared", "H = I R squared t"], "answerIndex": 1, "explanation": "From W = VIt and V = IR, the heat produced is H = I^2 R t - proportional to the square of the current, the resistance and the time.", "difficulty": "easy", "pyq": "CBSE 2022" },
        { "question": "The filament of an electric bulb is made of tungsten because tungsten:", "options": ["Is a good conductor of heat", "Has a high melting point and emits light at high temperature", "Is the cheapest metal", "Has very low resistivity"], "answerIndex": 1, "explanation": "The filament must reach white-hot temperatures without melting, so tungsten's very high melting point makes it ideal; it is sealed in a gas to slow evaporation.", "difficulty": "medium" },
        { "question": "A fuse wire is characterised by:", "options": ["High melting point and thick cross-section", "Low melting point, connected in series with the live wire", "Infinite resistance", "Connection in parallel"], "answerIndex": 1, "explanation": "The fuse is a short thin wire of an alloy with a low melting point; excess current heats and melts it, breaking the circuit before damage occurs.", "difficulty": "easy" },
        { "question": "One kilowatt-hour equals:", "options": ["3.6 x 10^6 J", "3.6 x 10^3 J", "1000 J", "1 J"], "answerIndex": 0, "explanation": "1 kWh = 1000 W x 3600 s = 3.6 x 10^6 joules; it is the commercial unit of electrical energy, also called one unit on the bill.", "difficulty": "easy" }
      ],
      "boardQuestions": [
        { "question": "Define electric current and its SI unit. How much charge flows through a wire in 2 minutes when a current of 0.75 A flows through it?", "marks": 2, "type": "short", "probability": "high", "answer": "Electric current is the rate of flow of electric charge through a cross-section of a conductor: I = Q/t. Its SI unit is the ampere: a current of one ampere flows when one coulomb of charge passes through the cross-section in one second. Here Q = It = 0.75 x 120 = 90 C. Remember to convert 2 minutes into 120 seconds before substituting, since the second is the SI unit of time; the charge is therefore 90 coulomb." },
        { "question": "State Ohm's law. Describe an activity to verify it, and explain the V-I graph obtained.", "marks": 5, "type": "long", "probability": "high", "answer": "Ohm's law: at constant temperature, the current through a metallic conductor is directly proportional to the potential difference across its ends, V proportional to I, written V = IR, where R is the resistance in ohm (1 ohm = 1 V/A). Verification: connect the test wire to a battery through an ammeter, a key and a variable resistance (rheostat), with a voltmeter connected in parallel across the wire. Close the key, note the current I and the potential difference V; change the rheostat setting to alter the current and record four or five pairs of readings. Plot V (y-axis) against I (x-axis): the points lie on a straight line through the origin, and its slope V/I gives the resistance R, verifying the law. The temperature must stay constant - the current is kept small and the key opened between readings - because a metal's resistance rises as it warms, which would bend the graph away from a straight line." },
        { "question": "On what factors does the resistance of a conductor depend? Define resistivity and state its SI unit.", "marks": 3, "type": "short", "probability": "high", "answer": "The resistance of a conductor depends on its length l (directly - double the length, double the resistance), on its cross-sectional area A (inversely - double the area, halve the resistance) and on the material of the conductor, expressed through its resistivity rho: R = rho l / A. Resistivity is the resistance of a conductor of unit length and unit cross-sectional area; its SI unit is the ohm-metre. It is a characteristic property of the material and changes with temperature. Metals and alloys have very low resistivity (conductors); rubber, glass and plastics have extremely high resistivity (insulators), which is why they are used as covering materials on wires." },
        { "question": "Why is nichrome used in heating appliances while copper is used for connecting wires?", "marks": 2, "type": "short", "probability": "medium", "answer": "Nichrome is used for heating elements because its resistivity is much higher than that of pure metals, so it produces a large amount of heat (H = I^2 R t) for the same current, and because it does not oxidise or burn readily even at high operating temperatures, so the element lasts long. Copper is used for connecting wires because its resistivity is extremely low, so hardly any electrical energy is wasted as heat in the wires themselves and nearly the whole supply voltage reaches the appliance." },
        { "question": "Derive the expressions for equivalent resistance of resistors in series and in parallel, and calculate both equivalents for resistors of 1 ohm, 2 ohm and 3 ohm.", "marks": 5, "type": "long", "probability": "high", "answer": "Series: the same current flows through every resistor and the potential difference divides, V = V1 + V2 + V3; substituting V = IR gives IRs = IR1 + IR2 + IR3, hence Rs = R1 + R2 + R3, an equivalent larger than the largest resistor. Parallel: every branch has the same potential difference and the currents add, I = I1 + I2 + I3; substituting I = V/R gives V/Rp = V/R1 + V/R2 + V/R3, hence 1/Rp = 1/R1 + 1/R2 + 1/R3, an equivalent smaller than the smallest branch. Worked numbers for resistors of 1, 2 and 3 ohm: in series Rs = 1 + 2 + 3 = 6 ohm, so on a 6 V battery the current is 1 A and the drops are 1 V, 2 V and 3 V; in parallel 1/Rp = 1 + 1/2 + 1/3 = 11/6, so Rp = 6/11 ohm, about 0.55 ohm. Homes are wired in parallel so every appliance receives the full 220 V, each can be switched independently, and one failed device does not stop the rest." },
        { "question": "Derive Joule's law of heating and give three applications of the heating effect of electric current.", "marks": 3, "type": "short", "probability": "high", "answer": "A current I flowing for time t carries charge Q = It through a potential difference V, so the source does work W = VIt. In a purely resistive conductor this energy converts fully into heat. Substituting V = IR gives H = I^2 R t - Joule's law of heating: the heat produced is proportional to the square of the current, to the resistance and to the time. Applications: (1) the heating elements of electric heaters, irons and toasters use high-resistivity nichrome; (2) the tungsten filament of an electric bulb glows white-hot by I^2 R heating; (3) the fuse - a low-melting alloy wire in series with the live wire - melts on excess current and breaks the circuit before damage occurs." },
        { "question": "An electric bulb is rated 220 V, 100 W. Find the current it draws, its hot resistance, and the cost of running five such bulbs 5 hours a day for 30 days at Rs 6 per kWh.", "marks": 5, "type": "long", "probability": "high", "answer": "For a bulb rated 220 V, 100 W: (a) current drawn I = P/V = 100/220 = 0.45 A approximately. (b) Hot resistance R = V^2/P = (220 x 220)/100 = 484 ohm (equivalently R = V/I = 220/0.45). (c) Cost of running five such bulbs 5 hours a day for 30 days at Rs 6 per kWh: energy per day = 5 bulbs x 100 W x 5 h = 2500 Wh = 2.5 kWh; for 30 days = 75 kWh; cost = 75 x 6 = Rs 450. The method: convert power to kW (or work in Wh and divide by 1000), multiply by hours and days to get units (kWh), then multiply by the rate per unit." },
        { "question": "What is the kilowatt-hour? Express it in joules and calculate the monthly cost of running a 2 kW heater 3 hours daily at Rs 8 per unit.", "marks": 3, "type": "short", "probability": "medium", "answer": "The kilowatt-hour (kWh) is the commercial unit of electrical energy: it is the energy consumed when an appliance of power one kilowatt runs for one hour. Since 1 kW = 1000 W and 1 hour = 3600 s, 1 kWh = 1000 x 3600 = 3.6 x 10^6 joules. Electricity meters count energy in kWh, sold as 'units' on the bill. Example: a 2 kW heater running 3 hours daily consumes 2 x 3 = 6 kWh (6 units) per day, 180 units in a 30-day month; at Rs 8 per unit the monthly cost is 180 x 8 = Rs 1440." },
        { "question": "What is a fuse? Why is it connected in series with the live wire, and what dangers does it guard against?", "marks": 2, "type": "short", "probability": "high", "answer": "A fuse is a short length of thin wire made of an alloy with a low melting point, connected in series with the live wire of a circuit. If the current exceeds the fuse's rated value - due to overloading (too many appliances drawing current together) or a short-circuit (live and neutral touching through damaged insulation) - the I^2 R heating melts the fuse wire and the circuit breaks, protecting the wiring and appliances from damage or fire. It is placed in the live wire so that, once blown, the appliance is completely disconnected from the high-potential supply and cannot deliver a shock." },
        { "question": "Explain with reasons: (a) why the ammeter is in series and the voltmeter in parallel; (b) why resistances add in series; (c) why domestic wiring is done in parallel; (d) two precautions to avoid overloading.", "marks": 6, "type": "long", "probability": "medium", "answer": "(a) The ammeter is connected in series because the entire circuit current must pass through it; it has very low resistance so it does not reduce the current it measures. The voltmeter is connected in parallel across the component because it must sense the potential difference between the component's two ends; it has very high resistance so it draws negligible current. (b) In series the same current passes through each resistor and the voltages add (V = V1 + V2 + V3); substituting V = IR gives Rs = R1 + R2 + R3, so series resistances simply add and the equivalent exceeds the largest element. (c) Domestic wiring is parallel because every appliance then receives the full 220 V, each appliance has an independent switch, and one switched-off or failed appliance does not break the supply to the others. (d) Overloading is avoided by not connecting many high-power appliances to a single socket and by using fuses, MCBs and wiring of the proper rating; keeping the total current demand below the wiring's safe carrying capacity prevents the overheating that causes fires." }
      ]
    },
    {
      "number": 12,
      "title": "Magnetic Effects of Electric Current",
      "summary": "From Oersted's deflected compass to the domestic fuse, this chapter maps how electricity and magnetism interweave. It defines the magnetic field and its field lines (emerging from N, entering S, continuous closed curves that never intersect, denser where the field is stronger); the right-hand thumb rule for the concentric circular field of a straight current-carrying conductor; the reinforced field at the centre of a circular loop; and the solenoid, uniform inside and bar-magnet-like outside, whose soft-iron core makes the electromagnet. Fleming's left-hand rule predicts the force on a current-carrying conductor in a magnetic field - the principle of the electric motor, built from armature coil, magnets, split-ring commutator and brushes, with the current reversed every half rotation. Electromagnetic induction - current from relative motion between coil and magnet, detected by a galvanometer - follows Fleming's right-hand rule and powers AC and DC generators, with India's mains at 50 Hz and 220 V. The chapter closes on domestic wiring: live, neutral and earth wires, parallel circuits, fuses in the live wire, and protection against overloading and short-circuits.",
      "weightageMarks": 7,
      "difficulty": "medium",
      "hotTopics": [
        "Magnetic field lines and their properties",
        "Right-hand thumb rule and solenoids",
        "Fleming's left-hand rule and the electric motor",
        "Electromagnetic induction and Fleming's right-hand rule",
        "Domestic circuits: fuse, earthing and safety"
      ],
      "sections": [
        {
          "heading": "Magnetism Basics and Compass Needle",
          "para": "A magnet attracts iron and a few other materials, and every magnet has two poles, north and south; like poles repel each other and unlike poles attract. A compass needle is itself a small pivoted magnet that settles along the direction of the local magnetic field - in practice, roughly towards the geographic north, because the Earth itself behaves like a giant magnet with a magnetic pole near the geographic north. The region around a magnet within which its influence - the force on another magnet or on iron - can be detected is called its magnetic field. In 1820 Hans Christian Oersted observed that a compass needle placed near a current-carrying wire deflects, and that the deflection reverses when the current reverses: an electric current produces a magnetic field around it. This single observation welded electricity to magnetism and opened the door to every device in this chapter - from electromagnets to generators and motors.",
          "points": [
            "Every magnet has two poles; like poles repel and unlike poles attract.",
            "A compass needle is a small free-pivoted magnet that aligns with the magnetic field at its place.",
            "The Earth behaves like a huge magnet, which is why a compass roughly points geographic north.",
            "The magnetic field is the region around a magnet where its force on iron or another magnet can be detected.",
            "Oersted (1820) showed that a current-carrying wire deflects a nearby compass needle - current produces a magnetic field.",
            "Reversing the current reverses the needle's deflection, proving the field's direction follows the current."
          ],
          "keyTerms": [
            { "term": "Magnetic field", "meaning": "The region around a magnet (or current) where its magnetic force can be detected." },
            { "term": "Compass needle", "meaning": "A small pivoted magnet that aligns along the local magnetic field, used to detect fields." },
            { "term": "Poles", "meaning": "The two ends of a magnet where its strength is greatest; like poles repel, unlike attract." },
            { "term": "Oersted's experiment", "meaning": "The 1820 observation that a current-carrying wire deflects a compass, linking current to magnetism." }
          ],
          "trick": "'Like poles Divorce, unlike Marry' - and Oersted's wobbling compass was the first clue that current makes magnetism.",
          "examPointer": "One-markers test pole properties and the meaning of magnetic field; keep Oersted's observation ready as the electricity-magnetism link."
        },
        {
          "heading": "Magnetic Field Lines: Properties",
          "para": "Magnetic field lines are imaginary curves drawn so that the tangent at any point gives the direction of the magnetic field there, and the arrow shows which way a north pole would be pushed. Their fixed properties: (i) outside a magnet the lines run from the north pole to the south pole; (ii) inside the magnet they run from the south pole back to the north, so every line is a continuous closed curve; (iii) two field lines never intersect, because a crossing point would have to give the field two directions at once, which is impossible; (iv) the lines are crowded where the field is strong and spread out where it is weak, so closeness of lines measures field strength; (v) the field is strongest at the poles, where the lines are densest. In diagrams, draw the arrows N to S outside, S to N inside, with obvious crowding at the poles. These conventions let a single sketch communicate the direction, strength and shape of the field all at once.",
          "points": [
            "Field lines emerge from the north pole and enter the south pole outside the magnet.",
            "Inside the magnet the lines run from south to north, making each line a continuous closed curve.",
            "The tangent to a field line at a point gives the direction of the magnetic field there.",
            "Two field lines never intersect, since one point cannot have two field directions.",
            "The relative closeness (crowding) of lines indicates the strength of the field - crowded means strong.",
            "The field is strongest at the poles, where the lines are most crowded."
          ],
          "keyTerms": [
            { "term": "Magnetic field lines", "meaning": "Imaginary curves whose tangent at any point gives the magnetic field's direction there." },
            { "term": "Closed curve", "meaning": "The property that field lines run N to S outside and S to N inside, forming continuous loops." },
            { "term": "Field strength", "meaning": "Represented by the crowding of field lines: the closer the lines, the stronger the field." }
          ],
          "trick": "Never-crossing is the exam classic: one point, one tangent, one direction - that is why field lines cannot intersect.",
          "examPointer": "Sketch a bar magnet's lines with arrows N to S outside and note the pole crowding; be ready to explain the never-intersect rule in one line."
        },
        {
          "heading": "Magnetic Field of a Straight Current-Carrying Conductor",
          "para": "Pass a current through a long straight copper wire held vertical, and place compass needles on a cardboard plane around it: every needle points tangentially to a circle centred on the wire. The magnetic field of a straight current-carrying conductor therefore consists of concentric circles around the wire, lying in planes perpendicular to it. The right-hand thumb rule gives the direction: grip the wire with the right hand so the thumb points along the current; the curled fingers show the direction of the field circles. Reversing the current reverses every circle's direction. The strength of the field grows with the current in the wire and falls steadily as we move away from it - the circles become bigger and the field weaker with distance. The deflection of a compass placed nearby therefore increases with current and decreases with distance, a quick experimental check of both factors at once.",
          "points": [
            "The field around a straight current-carrying conductor consists of concentric circles centred on the wire.",
            "The circles lie in planes perpendicular to the wire; a compass placed anywhere points along the circle's tangent.",
            "Right-hand thumb rule: thumb along the current, curled fingers give the field direction around the wire.",
            "Reversing the current reverses the direction of the field circles.",
            "The field strength increases with the current flowing in the wire.",
            "The field strength decreases as the distance from the wire increases."
          ],
          "keyTerms": [
            { "term": "Right-hand thumb rule", "meaning": "Thumb along the current, curled right-hand fingers along the circular magnetic field around a straight wire." },
            { "term": "Concentric circles", "meaning": "The pattern of magnetic field lines around a straight current-carrying conductor." },
            { "term": "Current-carrying conductor", "meaning": "A wire through which current flows, surrounded by its own magnetic field." }
          ],
          "trick": "Hold the wire and the field is in your grip: thumb = current, curled fingers = field circles.",
          "examPointer": "A 3-marker pairs the concentric-circle pattern with the right-hand thumb rule and the two factors (current, distance) affecting field strength."
        },
        {
          "heading": "Magnetic Field of a Circular Loop",
          "para": "Bend the wire into a circular loop and the story improves: near each segment of the wire the field lines are circles, but at the centre of the loop the contributions of every segment arrive in the same direction, so the lines crowd together and become almost straight and parallel to the axis - a strong, nearly uniform field at the centre. The loop behaves like a short bar magnet: one face acts as the north pole and the other as the south pole, their identity fixed by the direction of the current through the right-hand thumb rule. Increasing the current strengthens the field at the centre; so does adding turns - a coil of n turns multiplies the field roughly n times, because the fields of all the turns add up at the common centre. This is the direct ancestor of the solenoid: many turns of wire stacked coaxially to build a strong field from a modest current.",
          "points": [
            "Near the wire of a circular loop the field lines are circles, as around a straight conductor.",
            "At the centre of the loop the fields of all segments point the same way and add, so the field there is strong.",
            "At the centre the lines become nearly straight and parallel to the loop's axis.",
            "The loop acts like a short bar magnet with one face north and the other south, decided by the current direction.",
            "The field at the centre increases with the current in the loop.",
            "A coil of many turns multiplies the field, since each turn's field adds at the common centre."
          ],
          "keyTerms": [
            { "term": "Circular loop", "meaning": "A wire bent into a circle; its field is strongest and nearly uniform at the centre." },
            { "term": "Number of turns", "meaning": "The count of loops in a coil; the centre field is roughly proportional to it." },
            { "term": "Face of the loop", "meaning": "One flat side of the loop acting as north or south pole depending on the current direction." }
          ],
          "trick": "Every turn stacks its field at the centre: more turns, more current, stronger centre - a loop is a bar magnet in disguise.",
          "examPointer": "Questions ask why the field is strongest at a loop's centre and how it changes with turns; answer 'the fields of all turns add in the same direction'."
        },
        {
          "heading": "The Solenoid and Electromagnets",
          "para": "Coil a long insulated wire into many close circular turns and you have a solenoid. Its field is remarkable: outside, the pattern of lines is just like a bar magnet's, with one end acting as the north pole and the other as the south; inside, the field lines are straight, parallel and equally spaced, meaning the field inside a solenoid is uniform along its axis. Wind the solenoid around a soft iron core and you have an electromagnet: the iron, itself magnetised by the solenoid's field, multiplies the field strength enormously, but only while current flows - switch the current off and the soft iron loses nearly all its magnetism. The field can be strengthened by increasing the current, increasing the number of turns, or inserting the soft iron core. Electromagnets differ from permanent magnets in being switchable and adjustable in strength, and they are hugely practical: cranes at scrap yards lift and drop heavy iron loads on demand, electric bells use a make-and-break electromagnet, and hospital machines such as MRI scanners rely on powerful electromagnets. Permanent magnets, by contrast, keep their magnetism without any supply.",
          "points": [
            "A solenoid is a long coil of many closely wound circular turns of insulated wire.",
            "Outside a solenoid the field pattern matches a bar magnet: one end north, the other south.",
            "Inside a solenoid the field lines are straight, parallel and equally spaced - the field is uniform along the axis.",
            "A solenoid with a soft iron core is an electromagnet; the core magnifies the field while current flows.",
            "Field strength increases with current, with the number of turns, and with a soft iron core inside.",
            "Electromagnets can be switched on and off and their strength adjusted; permanent magnets keep their magnetism without current.",
            "Uses: scrap-yard cranes, electric bells, and powerful medical machines such as MRI scanners."
          ],
          "keyTerms": [
            { "term": "Solenoid", "meaning": "A long coil of wire with many circular turns, producing a uniform field inside and a bar-magnet-like field outside." },
            { "term": "Electromagnet", "meaning": "A solenoid with a soft iron core, magnetised only while current flows through the coil." },
            { "term": "Soft iron core", "meaning": "The iron bar inside a solenoid that multiplies the field and loses magnetism when the current stops." },
            { "term": "Uniform magnetic field", "meaning": "A field with the same strength and direction everywhere - found inside a solenoid." }
          ],
          "trick": "A solenoid is a 'bar magnet on demand': current on - magnet; current off - plain wire with a quiet iron core.",
          "examPointer": "Learn the solenoid's field pattern (uniform inside, bar-magnet outside), the three strength factors, and two electromagnet uses with reasons."
        },
        {
          "heading": "Force on a Current-Carrying Conductor in a Magnetic Field",
          "para": "Place a current-carrying conductor across a magnetic field and it experiences a force - the discovery behind every electric motor. The force is largest when the current flows perpendicular to the field, and it acts in a direction perpendicular to both the field and the current. Fleming's left-hand rule fixes the direction: stretch the thumb, forefinger and middle finger of the left hand mutually perpendicular; the forefinger points along the magnetic field, the middle finger along the current in the conductor, and the thumb then gives the direction of the force or motion. Reversing the current reverses the force; reversing the field also reverses it; reversing both leaves the force unchanged. The magnitude of the force grows with the current, with the magnetic field strength and with the length of conductor inside the field. This motor principle - current plus field producing motion - is the working principle of the electric motor, the device explored in the next section.",
          "points": [
            "A conductor carrying current in a magnetic field experiences a force perpendicular to both the current and the field.",
            "The force is maximum when the current is perpendicular to the magnetic field.",
            "Fleming's left-hand rule: forefinger = field, middle finger = current, thumb = force (motion).",
            "Reversing only the current reverses the force; reversing only the field also reverses it.",
            "The force increases with the current, with the magnetic field strength, and with the length of the conductor inside the field.",
            "This motor principle converts electrical energy into mechanical energy and underlies the electric motor."
          ],
          "keyTerms": [
            { "term": "Fleming's left-hand rule", "meaning": "Thumb, forefinger and middle finger of the left hand give motion, field and current respectively." },
            { "term": "Motor principle", "meaning": "A current-carrying conductor in a magnetic field experiences a force - the basis of motors." },
            { "term": "Magnetic force", "meaning": "The push on a current-carrying conductor in a field, perpendicular to both current and field." }
          ],
          "trick": "Left hand = 'F-C-M': Forefinger Field, seCond finger Current, thuMb Motion - the left hand launches motors.",
          "examPointer": "Assertion-reason items test which finger means what and what reverses the force; close answers with 'this is the principle of the electric motor'."
        },
        {
          "heading": "The Electric Motor",
          "para": "An electric motor converts electrical energy into mechanical energy by the motor principle. Construction: a rectangular coil ABCD of insulated copper wire - the armature - is wound on a soft iron core and mounted on an axle between the poles of a strong magnet; the coil's two ends are joined to a split-ring commutator (two halves of a copper ring insulated from each other), against which two carbon brushes press, connecting the coil to a battery. Working: current enters along one brush, flows through the coil, and Fleming's left-hand rule gives an upward force on one side and a downward force on the other, so the couple rotates the coil. After half a rotation, the split ring's gap faces the brushes and each half-ring connects to the opposite brush: the current in the coil reverses direction. The reversal is essential - without it the coil would oscillate and stop - because it keeps the force on each side pushing in the same rotational sense, producing continuous rotation. Motors of this kind, scaled and refined, drive fans, mixers, washing machines, water pumps and electric vehicles.",
          "points": [
            "A motor converts electrical energy into mechanical energy using the force on a current-carrying coil in a magnetic field.",
            "Main parts: armature coil (on a soft iron core), strong magnet poles, split-ring commutator, carbon brushes and a battery.",
            "Forces on the two sides of the coil are equal and opposite, forming a couple that rotates the coil.",
            "The split-ring commutator reverses the current in the coil after every half rotation.",
            "Current reversal keeps the force sense unchanged, so the coil keeps rotating in one direction.",
            "Without the commutator the coil would rotate half a turn and come to rest.",
            "Applications: fans, mixers and grinders, washing machines, water pumps and electric vehicles."
          ],
          "keyTerms": [
            { "term": "Armature", "meaning": "The rectangular coil of insulated copper wire (on a soft iron core) that rotates in the motor's field." },
            { "term": "Split-ring commutator", "meaning": "Two insulated half-rings that reverse the current in the coil every half rotation." },
            { "term": "Brushes", "meaning": "Carbon contacts pressed against the commutator to feed current into the rotating coil." },
            { "term": "Couple", "meaning": "The pair of equal and opposite forces on the coil's sides that produces rotation." }
          ],
          "trick": "The commutator is the current traffic-police: every half turn it swaps the connections so the coil never stops spinning the same way.",
          "examPointer": "The 5-marker asks construction and working; name every part, explain why the current must reverse every half rotation, and end with uses."
        },
        {
          "heading": "Electromagnetic Induction and Fleming's Right-Hand Rule",
          "para": "Motors turn current into motion; the reverse trick also works. Move a bar magnet into a coil of wire connected to a sensitive galvanometer and the needle deflects: a current has been produced without any battery. Hold the magnet still and the needle returns to zero; withdraw the magnet and the needle deflects the other way. The same happens if the coil moves while the magnet rests. Generating current by the relative motion between a coil and a magnet is called electromagnetic induction, and the current so produced is the induced current. The direction of the induced current is given by Fleming's right-hand rule: stretch the thumb, forefinger and middle finger of the right hand mutually perpendicular - the thumb points along the motion of the conductor, the forefinger along the magnetic field, and the middle finger gives the direction of the induced current. A galvanometer, being sensitive to tiny currents and their direction, is the standard detector in these experiments; reversing the motion reverses the induced current.",
          "points": [
            "Relative motion between a magnet and a coil induces a current in the coil - electromagnetic induction.",
            "No motion, no induction: a stationary magnet and coil produce no deflection in the galvanometer.",
            "Reversing the direction of motion reverses the direction of the induced current.",
            "Fleming's right-hand rule: thumb = motion of the conductor, forefinger = field, middle finger = induced current.",
            "A galvanometer detects small induced currents and shows their direction.",
            "The same effect occurs whether the magnet moves or the coil moves - only relative motion matters."
          ],
          "keyTerms": [
            { "term": "Electromagnetic induction", "meaning": "The production of an induced current by relative motion between a coil and a magnet." },
            { "term": "Induced current", "meaning": "The current generated in a closed coil by changing magnetic conditions, without a battery." },
            { "term": "Galvanometer", "meaning": "A sensitive instrument that detects small currents and indicates their direction." },
            { "term": "Fleming's right-hand rule", "meaning": "Thumb = motion, forefinger = field, middle finger = induced current - the generator rule." }
          ],
          "trick": "Left hand launches motors (current to motion), right hand harvests generators (motion to current) - the hands swap the arrow's direction.",
          "examPointer": "Define electromagnetic induction exactly as the production of induced current by relative motion between coil and magnet, and pair each hand rule with its device."
        },
        {
          "heading": "Electric Generator: AC and DC",
          "para": "An electric generator converts mechanical energy into electrical energy using electromagnetic induction. Construction: a rectangular coil wound on a core rotates on an axle between the poles of a magnet; its ends connect to two rings R1 and R2 (slip rings) mounted on the axle, against which brushes B1 and B2 press, carrying the output to an external circuit. Working: as the coil rotates, its sides cut the field in opposite directions alternately, so an induced current flows one way during the first half rotation and the opposite way during the second - the output is alternating current (AC), whose direction reverses periodically. In India the AC supply frequency is 50 Hz, meaning 50 full cycles per second and a reversal every hundredth of a second. A DC generator is the same machine with one change: the slip rings are replaced by a split-ring commutator, which reverses the connection to the external circuit at each half turn so that the output current always flows one way (though it pulses in magnitude). AC comes from generators at power stations and runs our homes at 220 V; DC comes from cells, batteries and solar panels.",
          "points": [
            "A generator converts mechanical energy into electrical energy by electromagnetic induction.",
            "The rotating coil's sides alternately cut the magnetic field in opposite directions, inducing a current that reverses every half rotation.",
            "The AC generator uses two full slip rings, so the output alternates in direction - alternating current.",
            "The DC generator replaces the slip rings with a split-ring commutator, so the output flows in one direction.",
            "In India, AC mains has a frequency of 50 Hz: 50 cycles per second, reversing every 1/100 second.",
            "AC is produced at power stations; DC comes from cells, batteries and solar panels."
          ],
          "keyTerms": [
            { "term": "AC generator", "meaning": "A generator with slip rings whose output current alternates in direction." },
            { "term": "DC generator", "meaning": "A generator with a split-ring commutator whose output flows in one direction only." },
            { "term": "Slip rings", "meaning": "The two full rings that connect the rotating coil to the brushes without changing the connections." },
            { "term": "Frequency (50 Hz)", "meaning": "The number of AC cycles per second in Indian mains; the current reverses every 1/100 s." }
          ],
          "trick": "Rings tell the family: FULL rings give AC, SPLIT rings give DC - 'split stops the flip'.",
          "examPointer": "A 5-marker asks the AC generator's construction and working plus the DC difference; mention 50 Hz and 220 V for Indian mains and what the commutator changes."
        },
        {
          "heading": "Domestic Electric Circuits and Safety",
          "para": "Power reaches homes through two supply wires - the live wire at 220 V and the neutral wire at zero potential - so the potential difference of the live wire relative to neutral is 220 V. In the Indian convention the live wire has red (or brown) insulation, the neutral black (or light blue), and the third, the earth wire, green: it is connected to the metal bodies of appliances and to a deep-buried earth plate. All household circuits are wired in parallel so every appliance receives the full 220 V, runs on its own switch, and one fault does not darken the house. Safety devices: the fuse - a low-melting alloy wire in series with the live wire - melts when the current exceeds its rating, breaking the circuit; the earth wire provides a low-resistance path for leakage current, so a person touching a faulty appliance's metal body is not shocked - the current prefers the earth path. Overloading means drawing more current than the wiring's safe limit by running too many appliances together; a short-circuit is the accidental direct contact of live and neutral through damaged insulation, when resistance falls and the current spikes. Both are handled by fuses and MCBs. Precautions: never touch switches with wet hands, use properly rated plugs and ISI-marked fittings, and earth all heavy appliances.",
          "points": [
            "The live wire (red or brown) carries the supply at 220 V; the neutral (black or light blue) is at zero potential; the potential difference is 220 V.",
            "The earth wire (green) connects appliance metal bodies to a buried plate, giving leakage current a safe path and preventing shocks.",
            "Household circuits are in parallel: full 220 V to each appliance, independent switches, and failures isolated.",
            "The fuse is a low-melting alloy wire in series with the live wire; excess current melts it and breaks the circuit.",
            "Overloading is drawing current beyond the wiring's safe capacity by running too many appliances together.",
            "A short-circuit is direct live-neutral contact through damaged insulation, making the resistance nearly zero and the current dangerously high.",
            "Precautions: dry hands near switches, correctly rated fuses and plugs, ISI-marked fittings, and earthing of heavy appliances."
          ],
          "keyTerms": [
            { "term": "Live wire", "meaning": "The red or brown supply wire at 220 V relative to neutral; the fuse sits in it." },
            { "term": "Earth wire", "meaning": "The green wire connecting appliance bodies to the ground, protecting users from shocks." },
            { "term": "Overloading", "meaning": "Drawing more current than the wiring's safe limit by running too many appliances together." },
            { "term": "Short-circuit", "meaning": "Accidental live-neutral contact through damaged insulation, causing a sudden huge current." }
          ],
          "trick": "'Live at 220, neutral at zero, earth for safety' - and the fuse always sits in the live wire so blowing it kills the supply.",
          "examPointer": "A 5-marker on domestic wiring needs wire colours, the parallel-connection reason, fuse position in the live wire, and the overloading versus short-circuit distinction."
        }
      ],
      "mcqs": [
        { "question": "A current-carrying wire placed near a compass makes the needle deflect. This observation was made by:", "options": ["Newton", "Oersted", "Faraday", "Fleming"], "answerIndex": 1, "explanation": "Hans Christian Oersted showed in 1820 that an electric current produces a magnetic field around it, linking electricity and magnetism.", "difficulty": "easy" },
        { "question": "Two magnetic field lines can never intersect because:", "options": ["They repel each other", "The field would then have two directions at one point, which is impossible", "They are made of iron", "They exist only at the poles"], "answerIndex": 1, "explanation": "The tangent to a field line gives the direction of the field; two lines crossing would give two directions at the same point, which cannot happen.", "difficulty": "easy", "pyq": "CBSE 2019" },
        { "question": "Outside a bar magnet, magnetic field lines travel:", "options": ["From the S pole to the N pole", "From the N pole to the S pole", "Radially outward everywhere", "In straight parallel lines"], "answerIndex": 1, "explanation": "By convention, field lines emerge from the north pole and enter the south pole outside the magnet; inside, they run from S to N, forming continuous closed curves.", "difficulty": "easy" },
        { "question": "The magnetic field inside a long current-carrying solenoid is:", "options": ["Zero", "Uniform and parallel to the axis", "Circular around the axis", "Strongest at the walls"], "answerIndex": 1, "explanation": "Inside a solenoid the field lines are straight, parallel and equally spaced, showing a uniform field along the axis.", "difficulty": "easy" },
        { "question": "The right-hand thumb rule relates:", "options": ["Thumb to force, fingers to current", "Thumb to the current direction, curled fingers to the field direction", "Thumb to induced current", "Fingers to force"], "answerIndex": 1, "explanation": "Wrap the right hand around the wire with the thumb pointing along the current; the curled fingers show the direction of the circular magnetic field.", "difficulty": "easy" },
        { "question": "The magnetic field produced by a current-carrying straight wire:", "options": ["Decreases as we move away from the wire", "Increases with distance", "Is the same everywhere", "Depends only on the wire's thickness"], "answerIndex": 0, "explanation": "The field consists of concentric circles whose strength falls with distance from the wire and rises with the current.", "difficulty": "easy" },
        { "question": "The field at the centre of a circular current loop can be strengthened by:", "options": ["Increasing the current or the number of turns", "Removing the battery", "Unwinding the loop into a straight wire", "Reversing the current twice"], "answerIndex": 0, "explanation": "Every turn adds its field in the same direction at the centre, so more turns or more current means a stronger field.", "difficulty": "medium" },
        { "question": "An electromagnet is usually made by:", "options": ["Winding a coil around a soft iron core", "Using a wooden core", "Heating a bar magnet", "Using copper wire alone"], "answerIndex": 0, "explanation": "A solenoid wound on a soft iron core becomes a strong magnet while current flows; the core loses its magnetism when the current stops.", "difficulty": "easy" },
        { "question": "In Fleming's left-hand rule, the middle finger points in the direction of:", "options": ["The magnetic field", "The motion of the conductor", "The electric current", "The force"], "answerIndex": 2, "explanation": "Stretch thumb, forefinger and middle finger of the left hand mutually perpendicular: forefinger = field, middle finger = current, thumb = force or motion.", "difficulty": "medium", "pyq": "CBSE 2020" },
        { "question": "The force on a current-carrying conductor in a magnetic field is largest when:", "options": ["The conductor is parallel to the field", "The conductor is perpendicular to the field", "The current is zero", "The field is uniform"], "answerIndex": 1, "explanation": "The force is maximum when current and field are perpendicular; it reverses if either the current or the field is reversed.", "difficulty": "medium" },
        { "question": "The function of a split-ring commutator in a DC motor is to:", "options": ["Increase the magnetic field", "Reverse the current in the coil every half rotation", "Reduce friction at the axle", "Supply the current"], "answerIndex": 1, "explanation": "Reversing the current each half rotation keeps the force on the coil sides in the same rotational sense, so the coil keeps spinning in one direction.", "difficulty": "medium" },
        { "question": "Electromagnetic induction means:", "options": ["Making a magnet stronger", "Producing induced current by relative motion between a coil and a magnet", "Heating a wire by current", "Storing charge in a cell"], "answerIndex": 1, "explanation": "Whenever a coil and a magnet move relative to each other, a potential difference is induced and a current flows in the closed circuit.", "difficulty": "easy" },
        { "question": "The device used to detect small induced currents is the:", "options": ["Ammeter", "Voltmeter", "Galvanometer", "Rheostat"], "answerIndex": 2, "explanation": "A galvanometer is a sensitive instrument that shows the presence of a small current and the direction in which it flows.", "difficulty": "easy" },
        { "question": "Fleming's right-hand rule gives the direction of:", "options": ["The force on a conductor", "The induced current", "Magnetic field lines", "The current in a battery"], "answerIndex": 1, "explanation": "For generators: thumb = motion of the conductor, forefinger = field, middle finger = induced current - the mirror-image rule of the motor rule.", "difficulty": "medium" },
        { "question": "The frequency of AC mains in India is:", "options": ["50 Hz", "60 Hz", "100 Hz", "220 Hz"], "answerIndex": 0, "explanation": "Indian household supply alternates at 50 Hz, so the current reverses direction every 1/100 of a second.", "difficulty": "easy" },
        { "question": "A DC generator differs from an AC generator in using:", "options": ["A stronger magnet", "A split-ring commutator instead of two full slip rings", "No coil", "No brushes"], "answerIndex": 1, "explanation": "The split-ring commutator reverses the connection every half rotation, so the output current keeps one direction instead of alternating.", "difficulty": "medium" },
        { "question": "In the Indian convention, the earth wire of domestic wiring has insulation of the colour:", "options": ["Red", "Black", "Green", "Brown"], "answerIndex": 2, "explanation": "The earth wire has green insulation and connects appliance metal bodies to the ground, providing shock safety through a low-resistance leakage path.", "difficulty": "easy" },
        { "question": "A short-circuit occurs when:", "options": ["Too many appliances run together", "The live wire touches the neutral wire directly", "The fuse is too thick", "The earth wire breaks"], "answerIndex": 1, "explanation": "Damaged insulation lets live and neutral touch, the resistance drops almost to zero, the current spikes, and the fuse must melt to cut the supply.", "difficulty": "easy" }
      ],
      "boardQuestions": [
        { "question": "State the properties of magnetic poles and define the magnetic field of a magnet.", "marks": 2, "type": "short", "probability": "high", "answer": "Every magnet, whatever its shape, has two poles - north and south; breaking a magnet only produces smaller magnets, each with both poles, so isolated poles do not exist. Like poles repel each other and unlike poles attract. The magnetic field of a magnet is the region surrounding it within which its force can be detected - on pieces of iron, on other magnets, or on a compass needle; within this region a compass needle deflects and iron filings align along curves called magnetic field lines." },
        { "question": "What are magnetic field lines? List their properties and explain why two field lines never cross each other.", "marks": 5, "type": "long", "probability": "high", "answer": "Magnetic field lines are the imaginary curves along which a free north pole would move in a magnetic field; the tangent at any point gives the field's direction there. Their properties: (1) outside the magnet, the lines emerge from the north pole and curve around to enter the south pole; (2) inside the magnet they run from the south pole to the north pole, so each line is a continuous closed curve; (3) two field lines never intersect, because a crossing point would have to give the field two directions at once - the compass needle there could not point two ways - which is impossible; (4) the relative closeness of the lines represents the strength of the field, crowded lines meaning a strong field; (5) the field is strongest at the poles, where the lines are most crowded, which is why iron filings cluster there. These properties let a single diagram show the direction, strength and shape of a field simultaneously." },
        { "question": "Describe the magnetic field due to a current in a straight conductor and state the rule that gives its direction. Mention two factors on which the field depends.", "marks": 3, "type": "short", "probability": "high", "answer": "The magnetic field due to a straight current-carrying conductor consists of concentric circles centred on the wire and lying in planes perpendicular to it; a compass placed anywhere around the wire settles along the tangent to such a circle. The direction of the field is given by the right-hand thumb rule: grip the wire with the right hand so that the thumb points along the current, and the curled fingers show the direction of the field circles; reversing the current reverses the circles. The strength of the field increases with the current in the wire and decreases as the distance from the wire increases." },
        { "question": "Explain the magnetic field due to a current-carrying circular loop. Why is the field strongest at the centre, and how does it change with the number of turns?", "marks": 3, "type": "short", "probability": "medium", "answer": "For a circular current-carrying loop, the field lines near the wire are circles, as around a straight conductor, but at the centre of the loop the contributions of all segments of the wire point in the same direction and add up; the lines there become nearly straight and parallel to the axis, so the field is strongest at the centre. The loop behaves like a short bar magnet with one face acting as north and the other as south, decided by the direction of current. The field at the centre increases with the current and with the number of turns - a coil of n turns gives roughly n times the field of a single turn, since every turn's field adds at the common centre." },
        { "question": "What is a solenoid? Draw a description of its field pattern, explain how an electromagnet is made from it, and give two uses of electromagnets.", "marks": 5, "type": "long", "probability": "high", "answer": "A solenoid is a long coil of insulated wire wound in many close circular turns. Its field pattern is that of a bar magnet: outside, lines leave one end (north) and curve around to enter the other (south); inside, the lines are straight, parallel and equally spaced, showing that the field inside a solenoid is uniform along its axis. Putting a soft iron core inside converts it into an electromagnet: the core is magnetised by the solenoid's field and multiplies its strength, but loses its magnetism when the current stops. The field can be strengthened by increasing the current, increasing the number of turns, or inserting the soft iron core. Unlike permanent magnets, which retain magnetism without any supply, electromagnets can be switched on and off and their strength adjusted, making them ideal for scrap-yard cranes that lift and release iron loads, electric bells, and medical machines such as MRI scanners." },
        { "question": "State Fleming's left-hand rule. When is the force on a current-carrying conductor in a magnetic field maximum, and on what factors does it depend?", "marks": 3, "type": "short", "probability": "high", "answer": "Fleming's left-hand rule: stretch the thumb, the forefinger and the middle finger of the left hand so that they are mutually perpendicular; if the forefinger points along the magnetic field and the middle finger along the current in the conductor, then the thumb points in the direction of the force on the conductor - the direction of motion. The force on a current-carrying conductor in a magnetic field is maximum when the current flows perpendicular to the field, and it acts perpendicular to both the current and the field. It reverses if the current alone or the field alone is reversed, and its magnitude increases with the current, with the field strength and with the length of conductor inside the field. This rule gives the working principle of the electric motor." },
        { "question": "Describe the construction and working of an electric motor. Why is a split-ring commutator essential, and where are such motors used?", "marks": 5, "type": "long", "probability": "high", "answer": "An electric motor converts electrical energy into mechanical energy. Construction: a rectangular coil of insulated copper wire (the armature, wound on a soft iron core) is mounted on an axle between the poles of a strong magnet; the two ends of the coil are connected to a split-ring commutator - two halves of a copper ring insulated from each other - against which two carbon brushes press, linking the coil to a battery. Working: current flowing through the coil experiences, by Fleming's left-hand rule, an upward force on one side and a downward force on the other; these equal and opposite forces form a couple that rotates the coil. After every half rotation the split ring reverses the current in the coil, so the direction of the force on each side stays consistent with rotation in the same sense; without this reversal the coil would stop after half a turn. Motors of this design, scaled up, run fans, mixers, washing machines, water pumps and electric vehicles." },
        { "question": "What is electromagnetic induction? Describe an activity to demonstrate it, and state the rule for finding the direction of the induced current.", "marks": 3, "type": "short", "probability": "high", "answer": "Electromagnetic induction is the production of an induced current in a coil whenever the coil and a magnet move relative to each other - the changing magnetic conditions generate a current while the motion lasts. Activity: connect a coil to a sensitive galvanometer and thrust a bar magnet into it - the needle deflects; hold the magnet stationary inside and the deflection vanishes; withdraw the magnet and the needle deflects in the opposite sense. The direction of the induced current is given by Fleming's right-hand rule: stretch the thumb, forefinger and middle finger of the right hand mutually perpendicular - thumb along the motion of the conductor, forefinger along the magnetic field, middle finger giving the direction of the induced current. This induction is the working principle of electric generators." },
        { "question": "Describe the construction and working of an AC generator. How does a DC generator differ from it? Distinguish AC from DC and give the mains values used in India.", "marks": 5, "type": "long", "probability": "medium", "answer": "An electric generator converts mechanical energy into electrical energy by electromagnetic induction. In the AC generator, a rectangular coil rotates on an axle between magnet poles; its ends connect to two full slip rings pressed by carbon brushes. As the coil turns, its sides alternately cut the field in opposite directions, so the induced current reverses direction every half rotation - the output is alternating current. In India the AC frequency is 50 Hz, so the current reverses every 1/100 second. The DC generator uses the same rotating coil but a split-ring commutator instead of slip rings: the commutator reverses the connection to the outside circuit at each half rotation, so the output current keeps a single direction (though its magnitude pulses). AC, which reverses direction periodically, is what power stations deliver and our homes use at 220 V; DC, which flows in one direction, comes from cells, batteries and solar panels." },
        { "question": "Draw a labelled description of a domestic electric circuit. Explain the roles of the live, neutral and earth wires, why circuits are in parallel, and how the fuse protects the house.", "marks": 5, "type": "long", "probability": "high", "answer": "Household supply reaches through the live wire at 220 V and the neutral wire at zero potential, giving 220 V across appliances; in the Indian colour code the live wire is red (or brown), the neutral black (or light blue) and the earth wire green. All domestic circuits are connected in parallel so that every appliance receives the full 220 V, each has an independent switch, and the failure of one does not affect the others. The fuse - a wire of low-melting alloy - is placed in series with the live wire: if the current exceeds its rating, I^2 R heating melts it and the circuit breaks. The earth wire connects the metal bodies of appliances to a buried plate; if a live wire's insulation fails and touches the body, the leakage current flows to the earth rather than through a person touching the appliance, preventing fatal shocks. Overloading (too many appliances drawing current beyond the wiring's capacity) and short-circuit (live touching neutral through damaged insulation) are the two dangers that fuses and MCBs guard against." },
        { "question": "Distinguish between overloading and short-circuiting in domestic circuits. How can both be prevented?", "marks": 2, "type": "short", "probability": "medium", "answer": "Overloading occurs when too many appliances are connected to a single socket or circuit, so the total current drawn exceeds the safe current-carrying capacity of the house wiring; the wires overheat and may start a fire. A short-circuit occurs when the live wire and the neutral wire come into direct contact - for example through damaged insulation - so the resistance drops almost to zero and a very large current flows suddenly. Both situations are handled by fuses of proper rating and MCBs, which break the circuit the moment the current becomes excessive; overloading is also prevented by not running many heavy appliances together on one circuit." }
      ]
    },
    {
      "number": 13,
      "title": "Our Environment",
      "summary": "A four-mark chapter of concepts and consequences. It defines the ecosystem - biotic components (producers, consumers, decomposers) with abiotic factors - and contrasts natural and artificial ecosystems. Food chains trace energy from producers through herbivores to carnivores, interlacing into food webs; each step is a trophic level, and by the 10 percent law only about a tenth of the energy climbs to the next level, which is why chains stay 3-4 levels long and why pyramids of energy narrow upward. Non-biodegradable pesticides climb food chains too, by biomagnification, poisoning top consumers most. The ozone layer (O3 in the stratosphere) shields life from ultraviolet radiation, but CFCs from refrigerators, air conditioners and aerosols have depleted it, prompting the 1987 UNEP agreement to freeze CFC production. Waste management separates biodegradable from non-biodegradable refuse, composting and vermicomposting the former, recycling and careful e-waste handling the latter, guided by the 3Rs of reduce, reuse and recycle. The chapter closes with individual habits and the shared duty of sustainability.",
      "weightageMarks": 4,
      "difficulty": "easy",
      "hotTopics": [
        "Ecosystem and its components",
        "Food chains, food webs and trophic levels",
        "10 percent law of energy transfer",
        "Biomagnification in food chains",
        "Ozone layer and CFCs"
      ],
      "sections": [
        {
          "heading": "Ecosystem: Components and Types",
          "para": "An ecosystem is all the interacting organisms in an area together with their non-living physical surroundings, functioning as one unit - a pond, a forest, a grassland, an ocean, or a man-made crop field or aquarium. Its living (biotic) components fall into three working groups. Producers are the green plants and algae that capture sunlight and make food by photosynthesis; they alone bring new energy into the system. Consumers cannot make food: herbivores eat plants (primary consumers), carnivores eat herbivores (secondary consumers), larger carnivores eat smaller ones (tertiary), and omnivores eat both plants and animals. Decomposers - bacteria and fungi - break down the dead bodies and wastes of all these organisms into simple substances, returning nutrients to the soil and water for the producers to reuse. The non-living (abiotic) components - air, water, soil, sunlight and temperature - supply the raw materials and conditions everything depends on. In natural ecosystems (forests, ponds, lakes, oceans) these links develop on their own; in artificial ones (crop fields, gardens, aquariums) humans supply and manage much of the input, yet the same producer-consumer-decomposer loop still runs.",
          "points": [
            "An ecosystem is the interacting community of organisms plus their physical surroundings, functioning as a unit.",
            "Producers (green plants, algae) make food by photosynthesis and alone import energy into the ecosystem.",
            "Consumers include herbivores (primary), carnivores (secondary and tertiary) and omnivores.",
            "Decomposers (bacteria and fungi) break dead matter and wastes into simple nutrients that producers reuse.",
            "Abiotic components - air, water, soil, sunlight, temperature - provide materials and conditions for life.",
            "Natural ecosystems like forests and ponds self-sustain; artificial ones like crop fields and aquariums are human-managed."
          ],
          "keyTerms": [
            { "term": "Ecosystem", "meaning": "All interacting organisms in an area together with their physical surroundings, functioning as one unit." },
            { "term": "Producers", "meaning": "Green plants and algae that make food by photosynthesis and form the base of every ecosystem." },
            { "term": "Decomposers", "meaning": "Bacteria and fungi that break down dead matter into simple nutrients, recycling them to soil and water." },
            { "term": "Abiotic components", "meaning": "The non-living factors of an ecosystem: air, water, soil, sunlight and temperature." }
          ],
          "trick": "The loop: 'Make - Eat - Return'; producers make, consumers eat, decomposers return the nutrients to the soil.",
          "examPointer": "A 3-marker asks to classify biotic components with roles and give two natural and two artificial ecosystems - keep the pond and crop field handy as examples."
        },
        {
          "heading": "Food Chains and Food Webs",
          "para": "A food chain is the sequence of who eats whom in an ecosystem, drawn with arrows that point in the direction the energy and nutrients flow - from the organism being eaten to the eater. It always begins with a producer: grass -> deer -> lion on land, or algae -> small fish -> large fish in water. Producers form the first step, herbivores the second (primary consumers), small carnivores the third (secondary consumers) and large carnivores the fourth (tertiary consumers). Decomposers stand outside the straight line but feed at every level, decomposing dead bodies and waste and returning nutrients to the soil - without them the chain would choke on its own dead. In reality few animals eat just one thing, so many food chains interconnect: a hawk eats a snake from one chain and a mouse from another. This interlocking network is a food web, and its complexity stabilises the ecosystem - if one food source fails, a web-fed consumer switches to another. A common diagram error: arrows must show energy flowing to the eater, never back towards the eaten.",
          "points": [
            "A food chain shows the transfer of energy as one organism eats another, always starting with a producer.",
            "Arrows in a food chain point from the organism eaten to the eater, showing the direction of energy flow.",
            "Typical land chain: grass -> deer -> lion; typical aquatic chain: algae -> small fish -> large fish.",
            "Herbivores are primary consumers, small carnivores secondary, and large carnivores tertiary.",
            "Decomposers act on dead matter at every level and return nutrients to the soil and water.",
            "Interlinked food chains form a food web, which gives the ecosystem stability when one food source fails."
          ],
          "keyTerms": [
            { "term": "Food chain", "meaning": "A linear sequence of who eats whom, showing the flow of energy from producers to top carnivores." },
            { "term": "Food web", "meaning": "The network of interconnected food chains in an ecosystem, stabilising it against food shortages." },
            { "term": "Primary consumer", "meaning": "The herbivore that eats producers, occupying the second trophic level." },
            { "term": "Decomposers", "meaning": "Organisms that break down dead material at every level and recycle nutrients." }
          ],
          "trick": "Arrows point where the energy GOES - grass gives to deer, deer gives to lion; reversed arrows are the classic diagram error.",
          "examPointer": "Construct one terrestrial and one aquatic food chain and explain why decomposers matter at every level - a steady 3-marker pattern."
        },
        {
          "heading": "Trophic Levels and the 10 Percent Law",
          "para": "Each step in a food chain is a trophic level: producers form the first trophic level, herbivores the second, small carnivores the third, and large carnivores the fourth. Energy enters only at the first level, from sunlight via photosynthesis, and then flows upward - but wastefully. At every transfer, organisms use most of the energy they receive for their own life processes and lose much of it as heat to the surroundings; only about 10 percent of the energy of one trophic level is stored as body material and becomes available to the next. This is the 10 percent law of energy transfer. The arithmetic is stark: if plants capture 1000 J, herbivores receive about 100 J, small carnivores about 10 J, and top carnivores a mere 1 J. Because the energy shrinks this fast, a food chain rarely supports more than 3-4 trophic levels - there is simply too little energy left to feed another level. Plotting the energy available at each level against level number gives a pyramid of energy, always broad at the base and narrow at the top; it explains why producers vastly outnumber top predators.",
          "points": [
            "A trophic level is each step in a food chain: producers first, herbivores second, carnivores third and fourth.",
            "Energy enters the ecosystem only at the first trophic level, captured from sunlight by producers.",
            "At each transfer most energy is used in life processes and lost as heat; only about 10 percent passes to the next level.",
            "The 10 percent law: 1000 J at the producer level becomes about 100 J for herbivores, 10 J for small carnivores, 1 J for top carnivores.",
            "Because energy falls steeply, food chains rarely extend beyond 3-4 trophic levels.",
            "The pyramid of energy is always upright: broad at the producers, narrow at the top carnivores."
          ],
          "keyTerms": [
            { "term": "Trophic level", "meaning": "Each step of a food chain, counted from producers as the first level." },
            { "term": "10 percent law", "meaning": "Only about 10 percent of the energy of one trophic level is transferred to the next." },
            { "term": "Pyramid of energy", "meaning": "The graphical representation of energy at each trophic level, always upright and narrowing upward." },
            { "term": "Unidirectional flow", "meaning": "Energy moves one way through a food chain and never returns to the producers." }
          ],
          "trick": "Slide the decimal: 1000 -> 100 -> 10 -> 1 joule per level - each step keeps only a tenth, so top predators must be few.",
          "examPointer": "The classic 5-marker: draw a four-level energy pyramid starting from 1000 J and explain why food chains stay short - show the arithmetic."
        },
        {
          "heading": "Biomagnification and Toxins in Food Chains",
          "para": "Pesticides and similar chemicals pose a hidden threat: those that are non-biodegradable are neither excreted nor broken down, so they accumulate in the bodies of the organisms that absorb them. Sprayed on crops or washed into water bodies, a pesticide is first taken up by plankton and small organisms; small fish eating many plankton concentrate it further; large fish eating many small fish concentrate it more; and humans or fish-eating birds at the top of the chain receive the largest dose of all. This progressive rise in the concentration of a harmful chemical at successively higher trophic levels is called biomagnification. The top consumers therefore suffer most - disorders and organ damage in humans, reproductive failure in birds of prey - even though the water they ultimately drew from seemed only lightly contaminated. Since humans sit at or near the top of most food chains, biomagnification is a direct argument for restricting persistent pesticides and checking what we release into water.",
          "points": [
            "Non-biodegradable pesticides are neither excreted nor decomposed, so they accumulate in body tissues.",
            "Concentration of such toxins rises at each step of the food chain - this is biomagnification.",
            "Typical chain: pesticide in water -> plankton -> small fish -> large fish -> humans.",
            "Top consumers carry the highest toxin load because they eat many contaminated organisms below them.",
            "Humans, as top consumers, suffer the greatest accumulation - hence strict control of persistent pesticides.",
            "Biomagnification shows why what enters a pond or field eventually returns to our own plates."
          ],
          "keyTerms": [
            { "term": "Biomagnification", "meaning": "The increase in concentration of a harmful non-biodegradable chemical at successively higher trophic levels." },
            { "term": "Non-biodegradable pesticide", "meaning": "A persistent chemical that is neither decomposed nor excreted, so it accumulates in bodies." },
            { "term": "Top consumer", "meaning": "The organism at the highest trophic level, which suffers the greatest toxin accumulation." }
          ],
          "trick": "Toxins climb the ladder: each level eats many below it, so the dose multiplies upward - the top of the chain drinks the whole glass.",
          "examPointer": "Answer the standard question with the water -> plankton -> fish -> humans chain and the phrase 'concentration increases at each trophic level'."
        },
        {
          "heading": "Ozone Layer: Formation, Depletion and Protection",
          "para": "High in the stratosphere, sunlight splits ordinary oxygen molecules (O2), and the freed oxygen atoms join other O2 molecules to form ozone (O3), a molecule of three oxygen atoms. Aloft, ozone is a life-saver: the ozone layer absorbs most of the Sun's harmful ultraviolet (UV) radiation before it reaches the ground. (At ground level the same gas is a pollutant and poison - location decides its role.) Excess UV reaching the surface causes skin cancer and eye damage in humans and harms crops and tiny aquatic organisms. The layer came under threat from CFCs (chlorofluorocarbons) - chemicals once used universally in refrigerators, air conditioners and aerosol sprays - which drift up to the stratosphere and break ozone molecules apart faster than nature rebuilds them, thinning the shield most visibly over the poles. The response was global: in 1987 the United Nations Environment Programme (UNEP) succeeded in forging an agreement among member countries to freeze CFC production at 1986 levels. Safer substitutes replaced CFCs, and measurements since show the ozone layer slowly recovering - a rare environmental success story.",
          "points": [
            "Ozone (O3), a molecule of three oxygen atoms, concentrates in the stratosphere as the ozone layer.",
            "The ozone layer absorbs harmful ultraviolet radiation and protects living organisms on Earth.",
            "Excess UV causes skin cancer and eye damage in humans and damages crops and aquatic life.",
            "CFCs from refrigerators, air conditioners and aerosol sprays deplete ozone in the stratosphere.",
            "In 1987, UNEP forged an agreement among member countries to freeze CFC production at 1986 levels.",
            "Substitutes for CFCs were developed and the layer is now slowly recovering."
          ],
          "keyTerms": [
            { "term": "Ozone (O3)", "meaning": "A molecule of three oxygen atoms that forms the UV-absorbing layer in the stratosphere." },
            { "term": "UV radiation", "meaning": "Ultraviolet sunlight that damages skin, eyes and crops; mostly absorbed by the ozone layer." },
            { "term": "CFCs", "meaning": "Chlorofluorocarbons used in refrigerators, air conditioners and aerosols; they deplete ozone." },
            { "term": "UNEP 1987 agreement", "meaning": "The United Nations Environment Programme accord to freeze CFC production at 1986 levels." }
          ],
          "trick": "Ozone is 'good up high, harmful nearby': shield in the stratosphere, pollutant at street level; CFCs punch the hole.",
          "examPointer": "One and 2-markers ask the ozone formula (O3), its location (stratosphere), the CFC link and the 1987 UNEP freeze - keep all four facts ready."
        },
        {
          "heading": "Waste: Biodegradable and Non-biodegradable",
          "para": "Every household produces waste, and the first scientific question is whether decomposers can handle it. Biodegradable waste - vegetable peels, leftover food, paper, cotton cloth, wood, garden leaves - can be broken down by bacteria and fungi into simple, harmless substances that return to the soil. Non-biodegradable waste - polythene bags, plastics, glass bottles, metal cans, synthetic fibres - is not attacked by decomposers and persists for decades or centuries, piling up in dumps and waterways. This is why segregation at source into two streams is the first commandment of waste management: mixed waste cannot be composted and is hard to recycle. Plastics deserve special caution: they choke drains and worsen urban flooding; animals like cows die after swallowing bags; burning plastics releases poisonous fumes; and plastics slowly fragment into microplastics that now appear in water, soil and even food. The sane course is to reduce single-use plastics, reuse durable containers, and hand the rest to recycling.",
          "points": [
            "Biodegradable waste (food scraps, paper, cotton, leaves) is broken down by decomposers into harmless substances.",
            "Non-biodegradable waste (plastics, glass, metals, synthetics) is not decomposed and persists for very long periods.",
            "Segregation at source into biodegradable and non-biodegradable streams is the first step of waste management.",
            "Plastic bags choke drains and contribute to urban flooding.",
            "Animals such as cows die after swallowing plastic bags; burning plastics releases toxic fumes.",
            "Plastics fragment into microplastics that enter soil, water and food chains.",
            "Reduce single-use plastics, reuse durable containers, and send the rest for recycling."
          ],
          "keyTerms": [
            { "term": "Biodegradable waste", "meaning": "Waste that decomposers can break into harmless simple substances, like food scraps and paper." },
            { "term": "Non-biodegradable waste", "meaning": "Waste that is not decomposed naturally, like plastics, glass and metals, persisting for decades." },
            { "term": "Segregation", "meaning": "Separating waste at source into biodegradable and non-biodegradable streams." },
            { "term": "Microplastics", "meaning": "Tiny plastic fragments that enter soil and water and travel up food chains." }
          ],
          "trick": "Ask 'will the worms eat it?' - yes means biodegradable; a polythene bag outlives the hand that used it.",
          "examPointer": "Sorting lists are steady 2-markers; add one consequence each for plastics (choked drains, animal deaths, microplastics) for full marks."
        },
        {
          "heading": "Garbage Disposal Methods",
          "para": "Segregated garbage can then be handled by fit-for-purpose methods. Biodegradable waste goes to composting: household or community pits where microbes convert kitchen and garden waste into nutrient-rich manure over weeks. Vermicomposting speeds this up using earthworms, which eat the organic waste and excrete fine, fertile castings - among the best natural fertilisers. Non-biodegradable waste is sorted for recycling - paper, glass, metals and many plastics are reprocessed into new material, saving both resources and energy. What cannot be composted or recycled must be buried in engineered landfills, which consume land and can leak leachate, so landfill is the last resort, not the default. Burning garbage openly is not disposal at all - it pollutes the air with toxins. The 3Rs set the priority order: reduce consumption first, reuse items second (glass jars, cloth bags, refills), and recycle materials third. Electronic waste - old computers, phones, batteries, tube lights - contains toxic metals such as lead and mercury and must be handed to authorised e-waste recyclers, never mixed into regular garbage.",
          "points": [
            "Segregation at source into biodegradable and non-biodegradable waste precedes every disposal method.",
            "Composting converts biodegradable waste into manure in pits through microbial action.",
            "Vermicomposting uses earthworms to decompose organic waste into rich castings faster than ordinary composting.",
            "Recycling reprocesses paper, glass, metals and plastics into new materials, saving resources and energy.",
            "Landfills bury the inert remainder; they consume land and risk leachate, so they are the last resort.",
            "The 3Rs in order of preference: reduce, then reuse, then recycle.",
            "E-waste contains toxic metals and must go to authorised recyclers, never into ordinary bins."
          ],
          "keyTerms": [
            { "term": "Composting", "meaning": "Controlled microbial decomposition of biodegradable waste into manure in pits." },
            { "term": "Vermicomposting", "meaning": "Composting with earthworms, which convert organic waste into fertile castings." },
            { "term": "Recycling", "meaning": "Reprocessing used materials like paper, glass and metal into new products." },
            { "term": "E-waste", "meaning": "Discarded electronics containing toxic metals, meant only for authorised recyclers." }
          ],
          "trick": "'Reduce before Reuse before Recycle' - in that order; and earthworms are the cheapest compost engineers you can hire.",
          "examPointer": "A 3-marker on managing household garbage should name segregation, composting or vermicomposting, recycling, the 3Rs, and one line on e-waste handling."
        },
        {
          "heading": "Individual Role: Environment-friendly Habits",
          "para": "Environment repair is not only a government job; it is a sum of household habits. Carry cloth or jute bags so polythene never enters your shopping; save electricity by switching off idle lights and fans and choosing efficient bulbs, because most of our electricity still comes from burning fuels; save water by fixing leaks and using buckets instead of showers; refuse single-use disposables - cups, plates, cutlery, straws - in favour of washable or biodegradable alternatives; segregate kitchen waste at home into a compost bin; walk, cycle or use public transport for short trips; plant and protect trees, which clean air, hold soil and cool streets; and spread the habit - a student who segregates at home and explains why in class multiplies the effect. None of these steps is heroic; all of them, multiplied across millions of households, change what is demanded, what is dumped and what is breathed.",
          "points": [
            "Carry cloth or jute bags and refuse polythene for every purchase.",
            "Switch off unused lights and fans and prefer efficient bulbs to save electricity.",
            "Fix leaking taps and use buckets rather than showers to save water.",
            "Avoid single-use disposables like plastic cups, plates, straws and cutlery.",
            "Segregate kitchen waste at home and compost the biodegradable part.",
            "Walk, cycle or use public transport for short distances and plant trees locally.",
            "Share the habits: awareness in family, class and community multiplies individual action."
          ],
          "keyTerms": [
            { "term": "Environment-friendly habits", "meaning": "Daily choices - cloth bags, saved electricity and water, composting - that reduce personal load on nature." },
            { "term": "Single-use plastic", "meaning": "Plastic items meant to be discarded after one use, a prime target for reduction." },
            { "term": "Community action", "meaning": "Collective local effort - drives, composting, awareness - that scales individual habits up." }
          ],
          "trick": "B.E.S.T: Bag (cloth), Electricity (switch off), Segregation (at home), Transport (walk, cycle, bus) - four habits, one planet.",
          "examPointer": "'What can you do as an individual?' questions want 3-4 concrete habits plus the closing line that individual actions scale into community impact."
        },
        {
          "heading": "Environmental Problems: A Broader View",
          "para": "Zoom out and the pattern is clear: air, water and soil pollution are not separate accidents but products of a high-consumption, throwaway lifestyle - fossil-fuelled transport and power, disposable packaging, unchecked chemical use. Pollution ignores boundaries: smoke from one city blankets a region; sewage in one river poisons the delta; pesticide runoff reaches fisheries kilometres away. Solutions therefore need both engines. Government policy sets the frame - emission standards, effluent treatment requirements, bans on hazardous chemicals, protected areas, municipal waste rules. Community action supplies the muscle - cleanliness drives, waste segregation at source, local tree planting, consumer pressure for refillable packaging. Neither works alone: laws without participation go unenforced, and goodwill without rules drifts. The organising idea is sustainability: meeting present needs without destroying the ability of future generations to meet theirs - using resources at a rate nature can replenish and disposing of wastes at a rate nature can absorb.",
          "points": [
            "Air, water and soil pollution arise chiefly from high-consumption, throwaway lifestyles.",
            "Pollution crosses boundaries - smoke, sewage and chemical runoff harm far-away regions and downstream communities.",
            "Government policy provides the frame: standards, treatment requirements, bans and waste rules.",
            "Community action provides the force: segregation drives, clean-ups, tree planting and consumer pressure.",
            "Policy without participation fails; goodwill without rules drifts - both engines are needed.",
            "Sustainability means meeting present needs without starving future generations of resources."
          ],
          "keyTerms": [
            { "term": "Sustainability", "meaning": "Using resources and disposing of waste at rates nature can absorb, so future generations inherit a liveable planet." },
            { "term": "Pollution", "meaning": "Contamination of air, water or soil by substances harmful to life, driven largely by modern lifestyles." },
            { "term": "Policy", "meaning": "Government rules and standards that frame environmental protection, from emission limits to waste rules." }
          ],
          "trick": "Two engines move the planet: government rules AND community habits - either alone sputters.",
          "examPointer": "Long answers on environmental management should end with sustainability: use resources no faster than nature can renew and absorb them."
        },
        {
          "heading": "Exam Strategy: Environment Key Terms",
          "para": "This chapter is vocabulary plus logic, so revision should be a checklist. Chain order: producer -> herbivore -> carnivore, with arrows pointing along the energy flow; trophic levels count from the producer as first. The 10 percent law with numbers: 1000 J -> 100 J -> 10 J -> 1 J, which also answers why food chains are short. Biomagnification chain: water -> plankton -> fish -> humans, concentration rising at each level. Ozone facts: O3, stratosphere, UV shield, CFCs the villain, 1987 UNEP freeze. Waste facts: biodegradable versus non-biodegradable sorting, composting and vermicomposting, recycling, the 3Rs, e-waste to authorised recyclers. Typical question frames: why are decomposers important, construct a food chain and identify trophic levels, how does energy flow and why is it unidirectional, what steps can students take to manage waste. In diagrams, label every level and keep every arrowhead honest; in one-line answers, quote the number (10 percent, 1987, 3-4 levels) rather than a vague adjective.",
          "points": [
            "Recall chain order and arrow direction: producer to herbivore to carnivore, arrows along energy flow.",
            "Keep the 10 percent law arithmetic ready: 1000 J -> 100 J -> 10 J -> 1 J, explaining why chains have 3-4 levels.",
            "Biomagnification chain: water -> plankton -> fish -> humans, with concentration rising at every level.",
            "Ozone bundle: O3, stratosphere, UV shield, CFC depletion, 1987 UNEP agreement.",
            "Waste bundle: biodegradable versus non-biodegradable, composting and vermicomposting, recycling, 3Rs, e-waste handling.",
            "Practise frames: role of decomposers, food chain construction, unidirectional energy flow, student steps for waste management.",
            "Quote exact numbers (10 percent, 1987, 3-4 levels) instead of vague words - precision earns the mark."
          ],
          "keyTerms": [
            { "term": "Energy pyramid", "meaning": "The upright diagram of energy shrinking across trophic levels - 1000 to 100 to 10 to 1 joule." },
            { "term": "Ozone shield", "meaning": "The stratospheric O3 layer that absorbs UV; depleted by CFCs, protected by the 1987 UNEP freeze." },
            { "term": "Waste hierarchy", "meaning": "The 3Rs in order: reduce first, reuse second, recycle third, landfill last." }
          ],
          "trick": "Ten-second recall: 'Producer - Eater - TenPercent - Toxin - Ozone - Sort' - the six beats of the chapter.",
          "examPointer": "Assertion-reason and MCQs bank on the 10 percent law and CFC-ozone facts; write the numbers to be unambiguous."
        }
      ],
      "mcqs": [
        { "question": "An ecosystem consists of:", "options": ["Only living organisms", "All organisms in an area together with their physical surroundings", "Only plants and animals of the same species", "Only water and soil"], "answerIndex": 1, "explanation": "An ecosystem is the interacting community of organisms plus the abiotic surroundings, functioning as one unit, like a pond or a forest.", "difficulty": "easy" },
        { "question": "In a pond ecosystem, the producers are:", "options": ["Fish", "Frogs", "Aquatic plants and algae", "Bacteria"], "answerIndex": 2, "explanation": "Green aquatic plants and algae trap sunlight to make food by photosynthesis, so they occupy the first trophic level as producers.", "difficulty": "easy" },
        { "question": "Decomposers are important because they:", "options": ["Make food from sunlight", "Break down dead matter and return nutrients to the soil", "Eat only living prey", "Produce oxygen"], "answerIndex": 1, "explanation": "Bacteria and fungi decompose dead organisms and waste into simple substances, replenishing soil nutrients and completing the nutrient cycle.", "difficulty": "easy" },
        { "question": "The first trophic level of any food chain is occupied by:", "options": ["Herbivores", "Carnivores", "Producers", "Decomposers"], "answerIndex": 2, "explanation": "Producers (green plants or algae) capture solar energy and form the base of every food chain; herbivores come second.", "difficulty": "easy" },
        { "question": "According to the 10 percent law, the energy transferred from one trophic level to the next is about:", "options": ["100 percent", "50 percent", "25 percent", "10 percent"], "answerIndex": 3, "explanation": "Only about 10 percent of the energy of one level reaches the next because most is lost as heat and used in life processes.", "difficulty": "easy" },
        { "question": "Energy flow in an ecosystem is:", "options": ["Cyclic like nutrients", "Unidirectional", "Reversible", "Equal at all levels"], "answerIndex": 1, "explanation": "Energy flows from producers to consumers and is finally lost as heat; it never returns to the Sun's stock, unlike nutrients which cycle.", "difficulty": "medium" },
        { "question": "Food chains rarely have more than 3-4 trophic levels because:", "options": ["Organisms refuse to eat", "The energy available falls sharply at each level", "Producers are absent", "Decomposers block the chain"], "answerIndex": 1, "explanation": "With only about 10 percent of energy passing on, too little remains after 3-4 transfers to support another level.", "difficulty": "medium" },
        { "question": "A network of interconnected food chains is called a:", "options": ["Energy pyramid", "Food web", "Trophic ladder", "Nutrient cycle"], "answerIndex": 1, "explanation": "Since most organisms eat several kinds of food, many food chains interlink into a food web, which stabilises the ecosystem.", "difficulty": "easy" },
        { "question": "Biomagnification refers to:", "options": ["Growth of biomass", "Increase in concentration of harmful chemicals at successively higher trophic levels", "Magnifying microorganisms", "Increase in food production"], "answerIndex": 1, "explanation": "Non-biodegradable toxins are not excreted, so each predator accumulates the doses of all it ate; concentration multiplies up the food chain.", "difficulty": "easy", "pyq": "CBSE 2020" },
        { "question": "In the chain water -> plankton -> small fish -> large fish -> humans, the highest pesticide concentration occurs in:", "options": ["Water", "Plankton", "Small fish", "Large fish and humans"], "answerIndex": 3, "explanation": "Being top consumers, large fish and the humans eating them accumulate the greatest toxin load by biomagnification.", "difficulty": "easy" },
        { "question": "An ozone molecule contains:", "options": ["Two oxygen atoms", "Three oxygen atoms", "One oxygen atom", "Four oxygen atoms"], "answerIndex": 1, "explanation": "Ozone (O3) has three oxygen atoms per molecule; it forms a protective layer in the stratosphere.", "difficulty": "easy" },
        { "question": "The ozone layer is found in the:", "options": ["Troposphere", "Stratosphere", "Mesosphere", "Lithosphere"], "answerIndex": 1, "explanation": "Ozone concentrates in the lower stratosphere, well above the clouds, where it absorbs harmful ultraviolet radiation.", "difficulty": "easy" },
        { "question": "The main chemicals blamed for ozone depletion are:", "options": ["CO2", "CFCs", "Methane", "Oxygen"], "answerIndex": 1, "explanation": "Chlorofluorocarbons released from refrigerators, air conditioners and aerosols rise to the stratosphere and break ozone molecules apart.", "difficulty": "easy" },
        { "question": "In 1987, UNEP forged an agreement among member countries to:", "options": ["Ban all industries", "Freeze CFC production at 1986 levels", "Plant one billion trees", "Stop ocean fishing"], "answerIndex": 1, "explanation": "The 1987 UNEP agreement committed nations to freeze CFC production at 1986 levels; substitutes followed and the layer is recovering.", "difficulty": "medium" },
        { "question": "Which of these is biodegradable?", "options": ["Polythene bag", "Glass bottle", "Vegetable peel", "Aluminium can"], "answerIndex": 2, "explanation": "Vegetable peels are broken down by decomposers into harmless substances; plastics, glass and metals persist for very long times.", "difficulty": "easy" },
        { "question": "Vermicomposting uses:", "options": ["Earthworms", "Cows", "Fish", "Frogs"], "answerIndex": 0, "explanation": "Earthworms hasten the breakdown of biodegradable waste into rich compost, a method called vermicomposting.", "difficulty": "easy" },
        { "question": "The best waste strategy in order is:", "options": ["Recycle, reduce, reuse", "Reduce, reuse, recycle", "Reuse, recycle, reduce", "Burn, bury, buy"], "answerIndex": 1, "explanation": "Reducing consumption is best, then reusing items, and recycling materials only when the first two fail - the 3Rs in order.", "difficulty": "easy" },
        { "question": "Old computers, batteries and phones should be:", "options": ["Burnt in the open", "Thrown in regular garbage", "Given to authorised e-waste recyclers", "Buried in gardens"], "answerIndex": 2, "explanation": "E-waste contains toxic metals like lead and mercury; only authorised recyclers should dismantle and recover it safely.", "difficulty": "medium" }
      ],
      "boardQuestions": [
        { "question": "Describe the components of an ecosystem with examples. Distinguish natural ecosystems from artificial ones.", "marks": 3, "type": "short", "probability": "high", "answer": "An ecosystem consists of all interacting organisms in an area together with their physical surroundings. Its biotic components are: producers (green plants and algae that make food by photosynthesis), consumers (herbivores that eat plants, carnivores that eat other animals, omnivores that eat both) and decomposers (bacteria and fungi that break down dead matter and return nutrients to the soil and water). Its abiotic components are air, water, soil, sunlight and temperature. Examples of natural ecosystems are forests, ponds, lakes and oceans; artificial or man-made ecosystems include crop fields, gardens and aquariums. All components are interlinked - producers need abiotic inputs, consumers need producers, and decomposers return nutrients to complete the cycle." },
        { "question": "What is a food chain? How does it differ from a food web? Why must the arrows in a food chain point in a fixed direction?", "marks": 3, "type": "short", "probability": "high", "answer": "A food chain is a single linear sequence showing the flow of energy from one organism to the next, always starting with a producer - for example grass -> deer -> lion, or algae -> small fish -> large fish. The arrows point from the organism eaten to the eater, showing the direction in which energy and nutrients travel. A food web is the network formed when many food chains interconnect, because most animals eat more than one kind of food; for instance, a hawk may appear in chains ending at snakes, mice and small birds. Food webs stabilise ecosystems: if one source of food becomes scarce, a consumer in a web can switch to another. Decomposers act at every level, recycling nutrients back to the soil for the producers to use again." },
        { "question": "What are trophic levels? Explain the 10 percent law of energy transfer, draw the pyramid of energy for a chain starting with 1000 J, and explain why food chains are limited in length.", "marks": 5, "type": "long", "probability": "high", "answer": "Organisms in a food chain are arranged as trophic levels: producers (green plants) first, herbivores second, small carnivores third and large carnivores fourth. Energy enters only at the first level through photosynthesis and then flows upward, unidirectionally. At each transfer, organisms use most energy for respiration and life processes and lose it as heat; only about 10 percent of the energy of one level is stored and passes to the next - the 10 percent law. If producers capture 1000 J, herbivores get about 100 J, small carnivores about 10 J and top carnivores only 1 J. Drawing these values as stacked bars gives a pyramid of energy, always upright, broad at the producer base and narrow at the top. Since 90 percent of energy is lost at every step, the energy remaining after three or four transfers is too small to support another level - which is why food chains rarely exceed 3-4 trophic levels and why top carnivores are always few in number." },
        { "question": "What is biomagnification? Explain with a suitable food chain why top consumers are affected the most.", "marks": 3, "type": "short", "probability": "high", "answer": "Biomagnification is the increase in the concentration of a harmful, non-biodegradable chemical at successively higher trophic levels of a food chain. Pesticides washed from fields into water are absorbed by plankton; small fish eating many plankton concentrate the pesticide further; large fish eating many small fish concentrate it still more; and humans or fish-eating birds at the top receive the highest dose. Since such chemicals are neither excreted nor decomposed, the amount in an organism reflects everything it ever ate. Top consumers therefore suffer the most - which is why humans, sitting at the top of most chains, must limit the use of persistent pesticides and prevent chemical runoff into water bodies." },
        { "question": "How is the ozone layer formed? How do CFCs deplete it, what are the effects of its depletion, and what steps have been taken to protect it?", "marks": 5, "type": "long", "probability": "high", "answer": "Ozone (O3), a molecule of three oxygen atoms, is formed high in the stratosphere when solar radiation splits O2 molecules and the free oxygen atoms combine with other O2 molecules. The ozone layer acts as a shield by absorbing most of the Sun's harmful ultraviolet radiation, which would otherwise cause skin cancer and eye damage in humans and damage crops and aquatic life. Depletion began when chlorofluorocarbons (CFCs), used in refrigerators, air conditioners and aerosol sprays, escaped into the atmosphere: in the stratosphere they break ozone molecules apart faster than sunlight can rebuild them, thinning the layer, most visibly over the polar regions. Protection came through international action: in 1987 the United Nations Environment Programme (UNEP) forged an agreement among member countries to freeze CFC production at 1986 levels. Safer substitutes were adopted, CFC use has fallen, and measurements show the ozone layer slowly recovering - proof that coordinated global policy can reverse environmental damage." },
        { "question": "Differentiate between biodegradable and non-biodegradable wastes with examples. Why is segregation of waste at source essential?", "marks": 2, "type": "short", "probability": "high", "answer": "Biodegradable wastes are broken down into simple, harmless substances by the action of decomposers such as bacteria and fungi - examples include vegetable peels, leftover food, paper, cotton cloth and garden leaves. Non-biodegradable wastes are not decomposed by any natural agent and persist for decades or centuries - examples include polythene bags, plastics, glass bottles and metal cans. Segregation matters because biodegradable waste can be composted into manure, while non-biodegradable waste must be recycled or safely dumped; mixing the two spoils both options and burdens landfills." },
        { "question": "Suggest a plan for managing household garbage, including composting, recycling and e-waste handling.", "marks": 3, "type": "short", "probability": "medium", "answer": "Manage household garbage in this order: first segregate at source into biodegradable (food scraps, peels, paper, garden waste) and non-biodegradable (plastics, glass, metal, e-waste) streams; second, compost the biodegradable part in a pit or by vermicomposting with earthworms to obtain manure; third, send clean, dry non-biodegradable material - paper, glass, metal, rigid plastics - for recycling. Follow the 3Rs: reduce what you buy, reuse jars, bags and containers, and recycle what remains. Electronic waste contains toxic metals, so hand it to authorised e-waste recyclers instead of ordinary bins or open burning." },
        { "question": "What is vermicomposting? Why is it considered better than ordinary composting for household use?", "marks": 2, "type": "short", "probability": "medium", "answer": "Vermicomposting is the method of preparing compost with the help of earthworms. Earthworms eat biodegradable waste such as vegetable peels, leaves and crop residue and excrete it as fine, nutrient-rich castings, which serve as excellent natural manure for crops and gardens. The method is faster than ordinary pit composting, needs no chemicals, and disposes of household organic waste neatly; it can be practised in a small pit or even a large tub at home, making it an ideal student-level contribution to waste management." },
        { "question": "Suggest what individuals, communities and governments can each do to protect the environment, and explain why both policy and participation are necessary.", "marks": 3, "type": "short", "probability": "medium", "answer": "As individuals: carry cloth bags instead of polythene, save electricity and water at home, avoid single-use disposables, segregate kitchen waste and compost it, use public transport or cycle for short trips, and plant trees. Community action extends this: cleanliness drives, neighbourhood composting, and awareness campaigns in schools. Government policy sets the wider frame: emission and effluent standards, bans on hazardous chemicals like CFCs, municipal waste rules and public transport investment. Both levels are necessary because laws without participation go unenforced and goodwill without rules drifts; together they move a society towards sustainable living, meeting present needs without stealing from future generations." },
        { "question": "Describe a pond as a self-sustaining ecosystem: list its components, construct two food chains, explain the energy flow with the 10 percent law, and warn how biomagnification can reach humans through it.", "marks": 6, "type": "long", "probability": "medium", "answer": "A pond is a compact natural ecosystem. Abiotic components: water, dissolved oxygen and minerals, sunlight and temperature. Biotic components: producers - green algae and floating aquatic plants that photosynthesise; consumers - zooplankton and small fish (primary consumers) feeding on producers, large fish and frogs (secondary consumers) feeding on them, and top fish or birds (tertiary consumers); decomposers - bacteria and fungi that break down dead plants, animals and waste into nutrients. Two food chains: algae -> zooplankton -> small fish -> large fish; and aquatic plants -> small fish -> large fish. Energy flow: if the producers fix 1000 J, by the 10 percent law about 100 J reaches primary consumers, 10 J secondary and 1 J tertiary - energy flows upward, unidirectionally, shrinking at every step, which is why top predators in the pond are few. Management warnings: fertiliser and pesticide runoff from nearby fields enters the pond water and, being non-biodegradable, biomagnifies up the chains, so humans eating the fish receive the accumulated toxin; sewage or detergent inflow upsets the oxygen balance and kills fish. Protecting the pond therefore means controlling inflow, preserving the producers and letting decomposers recycle naturally - the ecosystem's balance depends on every component." }
      ]
    }
  ]
}
