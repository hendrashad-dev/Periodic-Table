const elements = [
    {
        numberAtoms: 1, 
        name: "Hydrogen",
        symbol: "H",
        categoryInTable: "nonmetal",
        AtomicMass: 1.0078,
        description: "Hydrogen is a chemical element; it has the symbol H and atomic number 1. It is the lightest and most abundant chemical element in the universe, constituting about 75% of all normal matter",
        columon: 1,
        row: 1,
    },
    {
        numberAtoms: 2, 
        name: "Helium",
        symbol: "He",
        categoryInTable: "noble-gases",
        AtomicMass: 4.0026,
        description: "Helium is a chemical element; it has symbol He and atomic number 2. It is a colorless, odorless, non-toxic.",
        columon: 18,
        row: 1
    },
    {
        numberAtoms: 3, 
        name: "Lithium",
        symbol: "Li",
        categoryInTable: "alkali-metals",
        AtomicMass: 6.9410 ,
        description: "Lithium is a chemical element; it has symbol Li and atomic number 3. It is a soft, silvery-white alkali metal.",
        columon: 1,
        row: 2
    },
    {
        numberAtoms: 4, 
        name: "Beryllium",
        symbol: "Be",
        categoryInTable: "alkaline-earth-metals",
        AtomicMass: 9.0122,
        description: "Beryllium is a chemical element; it has symbol Be and atomic number 4. It is a steel-gray, hard, strong, lightweight ",
        columon: 2,
        row: 2
    },
    {
        numberAtoms: 5, 
        name: "Boron",
        symbol: "B",
        categoryInTable: "metalloids",
        AtomicMass: 10.811,
        description: "Boron is a chemical element; it has symbol B and atomic number 5. In its crystalline form it is a brittle, dark.",
        columon: 13,
        row: 2
    },
    {
        numberAtoms: 6, 
        name: "Carbon",
        symbol: "C",
        categoryInTable: "nonmetal",
        AtomicMass: 12.011,
        description: "Carbon is a chemical element; it has symbol C and atomic number 6. It is nonmetallic and tetravalent—meaning that its atoms are able to form up to four covalent bonds due to its valence shell exhibiting 4 electrons. It belongs to group 14 of the periodic table. Carbon makes up about 0.025 percent of Earth's crust",
        columon: 14,
        row: 2
    },
    {
        numberAtoms: 7, 
        name: "Nitrogen",
        symbol: "N",
        categoryInTable: "nonmetal",
        AtomicMass: 14.007,
        description: "Nitrogen is a chemical element; it has symbol N and atomic number 7. Nitrogen is a nonmetal and the lightest member",
        columon: 15,
        row: 2
    },
    {
        numberAtoms: 8, 
        name: "Oxygen",
        symbol: "O",
        categoryInTable: "nonmetal",
        AtomicMass: 15.999,
        description: "Oxygen is a chemical element; it has the symbol O and its atomic number is 8. It is a member of the chalcogen group in the periodic table",
        columon: 16,
        row: 2
    },
    {
        numberAtoms: 9, 
        name: "Fluorine",
        symbol: "F",
        categoryInTable: "nonmetal",
        AtomicMass: 18.998,
        description: "Fluorine is a chemical element; it has symbol F and atomic number 9. It is the lightest halogen and exists at standard conditions as pale yellow diatomic gas",
        columon: 17,
        row: 2
    },
    {
        numberAtoms: 10, 
        name: "Neon",
        symbol: "Ne",
        categoryInTable: "noble-gases",
        AtomicMass: 20.180,
        description: "Neon is a chemical element; it has symbol Ne and atomic number 10. It is the second noble gas in the periodic table. Neon is a colorless, odorless, inert monatomic gas under standard conditions, with approximately two-thirds the density of air",
        columon: 18,
        row: 2
    },
    {
        numberAtoms: 11, 
        name: "Sodium",
        symbol: "Na",
        categoryInTable: "alkali-metals",
        AtomicMass: 22.990,
        description: "Sodium is a chemical element; it has symbol Na and atomic number 11. It is a soft, silvery-white, highly reactive metal. Sodium is an alkali metal, being in group 1 of the periodic table",
        columon: 1,
        row: 3
    },
    {
        numberAtoms: 12, 
        name: "Magnesium",
        symbol: "Mg",
        categoryInTable: "alkaline-earth-metals",
        AtomicMass: 24.305,
        description: "Magnesium is a chemical element; it has symbol Mg and atomic number 12. It is a shiny gray metal having a low density, low melting point and high chemical reactivity.",
        columon: 2,
        row: 3
    },

    {
        numberAtoms: 13, 
        name: "Aluminium",
        symbol: "Al",
        categoryInTable: "post-transition-metals",
        AtomicMass: 26.982,
        description: "Aluminium is a chemical element; it has symbol Al and atomic number 13. Aluminium has a density lower than those of other common metals, at approximately one-third that of steel.",
        columon: 13,
        row: 3
    },
    {
        numberAtoms: 14, 
        name: "Silicon",
        symbol: "Si",
        categoryInTable: "metalloids",
        AtomicMass: 28.085,
        description: "Silicon is a chemical element; it has symbol Si and atomic number 14. It is a hard, brittle crystalline solid with a blue-grey metallic luster, and is a tetravalent metalloid and semiconductor.",
        columon: 14,
        row: 3
    },

    {
        numberAtoms: 15, 
        name: "Phosphorus",
        symbol: "P",
        categoryInTable: "nonmetal",
        AtomicMass: 30.974,
        description: "Phosphorus is a chemical element; it has symbol P and atomic number 15. Elemental phosphorus exists in two major forms, white phosphorus and red phosphorus, but because it is highly reactive, phosphorus is never found as a free element on Earth.",
        columon: 15,
        row: 3
    },
    
    {
        numberAtoms: 16, 
        name: "Sulfur",
        symbol: "S",
        categoryInTable: "nonmetal",
        AtomicMass: 32.06,
        description: "Sulfur is a chemical element; it has symbol S and atomic number 16. It is abundant, multivalent and nonmetallic. Under normal conditions, sulfur atoms form cyclic octatomic molecules with a chemical formula S8.",
        columon: 16,
        row: 3
    },
    {
        numberAtoms: 17, 
        name: "Chlorine",
        symbol: "Cl",
        categoryInTable: "nonmetal",
        AtomicMass: 35.45,
        description: "Chlorine is a chemical element; it has symbol Cl and atomic number 17. The second-lightest of the halogens, it appears between fluorine and bromine in the periodic table and its properties are mostly intermediate between them.",
        columon: 17,
        row: 3
    },
    {
        numberAtoms: 18, 
        name: "Argon",
        symbol: "Ar",
        categoryInTable: "noble-gases",
        AtomicMass: 39.948,
        description: "Argon is a chemical element; it has symbol Ar and atomic number 18. It is in group 18 of the periodic table and is a noble gas. Argon is the third-most abundant gas in Earth's atmosphere, at 0.934%.",
        columon: 18,
        row: 3
    },
    {
        numberAtoms: 19, 
        name: "Potassium",
        symbol: "K",
        categoryInTable: "alkali-metals",
        AtomicMass: 39.098,
        description: "Potassium is a chemical element; it has symbol K and atomic number 19. It is a silvery-white metal that is soft enough to be cut with a knife with little force.",
        columon: 1,
        row: 4
    },
    {
        numberAtoms: 20, 
        name: "Calcium",
        symbol: "Ca",
        categoryInTable: "alkaline-earth-metals",
        AtomicMass: 40.078,
        description: "Calcium is a chemical element; it has symbol Ca and atomic number 20. As an alkaline earth metal, calcium is a reactive metal that forms a dark oxide-nitride layer when exposed to air.",
        columon: 2,
        row: 4
    },
    {
        numberAtoms: 21, 
        name: "Scandium",
        symbol: "Sc",
        categoryInTable: "transition-metals",
        AtomicMass: 44.956,
        description: "Scandium is a chemical element; it has symbol Sc and atomic number 21. A silvery-white metallic d-block element, it has historically been classified as a rare-earth element, together with yttrium and the lanthanides.",
        columon: 3,
        row: 4
    },

    {
        numberAtoms: 22, 
        name: "Titanium",
        symbol: "Ti",
        categoryInTable: "transition-metals",
        AtomicMass: 47.867,
        description: "Titanium is a chemical element; it has symbol Ti and atomic number 22. Found in nature only as an oxide, it can be reduced to produce a lustrous transition metal with a silver color, low density, and high strength.",
        columon: 4,
        row: 4
    },

    {
        numberAtoms: 23, 
        name: "Vanadium",
        symbol: "V",
        categoryInTable: "transition-metals",
        AtomicMass: 50.942,
        description: "Vanadium is a chemical element; it has symbol V and atomic number 23. It is a hard, silvery-grey, malleable transition metal. The elemental metal is rarely found in nature, but once isolated artificially, the formation of an oxide layer somewhat stabilizes the free metal against further oxidation.",
        columon: 5,
        row: 4
    },
    
    {
        numberAtoms: 24, 
        name: "Chromium",
        symbol: "Cr",
        categoryInTable: "transition-metals",
        AtomicMass: 51.996,
        description: "Chromium is a chemical element; it has symbol Cr and atomic number 24. It is the first element in group 6. It is a steely-grey, lustrous, hard, and brittle transition metal.",
        columon: 6,
        row: 4
    },
    {
        numberAtoms: 25, 
        name: "Manganese",
        symbol: "Mn",
        categoryInTable: "transition-metals",
        AtomicMass: 54.938,
        description: "Manganese is a chemical element; it has symbol Mn and atomic number 25. It is a hard, brittle, silvery metal, often found in nature in combination with iron and in many minerals.",
        columon: 7,
        row: 4
    },
    {
        numberAtoms: 26, 
        name: "Iron",
        symbol: "Fe",
        categoryInTable: "transition-metals",
        AtomicMass: 55.845,
        description: "Iron is a chemical element; it has symbol Fe and atomic number 26. It is a metal that belongs to the first transition series and group 8 of the periodic table. It is, by mass, the most common element on Earth, right in front of oxygen.",
        columon: 8,
        row: 4
    },
    
    {
        numberAtoms: 27, 
        name: "Cobalt",
        symbol: "Co",
        categoryInTable: "transition-metals",
        AtomicMass: 58.933,
        description: "Cobalt is a chemical element; it has symbol Co and atomic number 27. As with iron, cobalt is found in the Earth's crust only in chemically combined form, save for small deposits found in alloys of natural meteoric iron.",
        columon: 9,
        row: 4
    },
    
    {
        numberAtoms: 28, 
        name: "Nickel",
        symbol: "Ni",
        categoryInTable: "transition-metals",
        AtomicMass: 58.693,
        description: "Nickel is a chemical element; it has symbol Ni and atomic number 28. It is a silvery-white lustrous metal with a slight golden tinge. Nickel belongs to the transition metals and is hard and ductile.",
        columon: 10,
        row: 4
    },

    {
        numberAtoms: 29, 
        name: "Copper",
        symbol: "Cu",
        categoryInTable: "transition-metals",
        AtomicMass: 63.546,
        description: "Copper is a chemical element; it has symbol Cu and atomic number 29. It is a soft, malleable, and ductile metal with very high thermal and electrical conductivity. A freshly exposed surface of pure copper has a pinkish-orange color.",
        columon: 11,
        row: 4
    },

    {
        numberAtoms: 30, 
        name: "Zinc",
        symbol: "Zn",
        categoryInTable: "transition-metals",
        AtomicMass: 65.38,
        description: "Zinc is a chemical element; it has symbol Zn and atomic number 30. Zinc is a slightly brittle metal at room temperature and has a shiny-greyish appearance when oxidation is removed.",
        columon: 12,
        row: 4
    },

    {
        numberAtoms: 31, 
        name: "Gallium",
        symbol: "Ga",
        categoryInTable: "post-transition-metals",
        AtomicMass: 69.723,
        description: "Gallium is a chemical element; it has symbol Ga and atomic number 31. Elemental gallium is a soft, silvery metal at standard temperature and pressure; however in its liquid state it becomes silvery white.",
        columon: 13,
        row: 4
    },

    {
        numberAtoms: 32, 
        name: "Germanium",
        symbol: "Ge",
        categoryInTable: "metalloids",
        AtomicMass: 72.630,
        description: "Germanium is a chemical element; it has symbol Ge and atomic number 32. It is a lustrous, hard-brittle, grayish-white metalloid in the carbon group, chemically similar to its group neighbors silicon and tin.",
        columon: 14,
        row: 4
    },
    
    {
        numberAtoms: 33, 
        name: "Arsenic",
        symbol: "As",
        categoryInTable: "metalloids",
        AtomicMass: 74.922,
        description: "Arsenic is a chemical element; it has symbol As and atomic number 33. Arsenic occurs in many minerals, usually in combination with sulfur and metals, but also as a pure elemental crystal.",
        columon: 15,
        row: 4
    },

    {
        numberAtoms: 34, 
        name: "Selenium",
        symbol: "Se",
        categoryInTable: "nonmetal",
        AtomicMass: 78.971,
        description: "Selenium is a chemical element; it has symbol Se and atomic number 34. It is a nonmetal with properties that are intermediate between the elements above and below in the periodic table, sulfur and tellurium, and also has similarities to arsenic.",
        columon: 16,
        row: 4
    },
    
    {
        numberAtoms: 35, 
        name: "Bromine",
        symbol: "Br",
        categoryInTable: "nonmetal",
        AtomicMass: 79.904,
        description: "Bromine is a chemical element; it has symbol Br and atomic number 35. It is the third-lightest halogen, and is a fuming red-brown liquid at room temperature that evaporates readily to form a similarly colored gas.",
        columon: 17,
        row: 4
    },

    {
        numberAtoms: 36, 
        name: "Krypton",
        symbol: "Kr",
        categoryInTable: "noble-gases",
        AtomicMass: 83.798,
        description: "Krypton is a chemical element; it has symbol Kr and atomic number 36. It is a colorless, odorless, tasteless noble gas that occurs in trace amounts in the atmosphere and is often used with other rare gases in fluorescent lamps.",
        columon: 18,
        row: 4
    },

    {
        numberAtoms: 37, 
        name: "Rubidium",
        symbol: "Rb",
        categoryInTable: "alkali-metals",
        AtomicMass: 85.468,
        description: "Rubidium is a chemical element; it has symbol Rb and atomic number 37. Rubidium is a very soft, whitish-grey metallic element of the alkali metal group.",
        columon: 1,
        row: 5
    },

    {
        numberAtoms: 38, 
        name: "Strontium",
        symbol: "Sr",
        categoryInTable: "alkaline-earth-metals",
        AtomicMass: 87.62,
        description: "Strontium is a chemical element; it has symbol Sr and atomic number 38. An alkaline earth metal, strontium is a soft silver-white yellowish metallic element that is highly chemically reactive.",
        columon: 2,
        row: 5
    },

    {
        numberAtoms: 39, 
        name: "Yttrium",
        symbol: "Y",
        categoryInTable: "transition-metals",
        AtomicMass: 88.906,
        description: "Yttrium is a chemical element; it has symbol Y and atomic number 39. It is a silvery-metallic transition metal chemically similar to the lanthanides and has often been classified as a 'rare-earth element'.",
        columon: 3,
        row: 5
    },

    {
        numberAtoms: 40, 
        name: "Zirconium",
        symbol: "Zr",
        categoryInTable: "transition-metals",
        AtomicMass: 91.224,
        description: "Zirconium is a chemical element; it has symbol Zr and atomic number 40. The name zirconium is taken from the name of the mineral zircon, the most important source of zirconium.",
        columon: 4,
        row: 5
    },

    {
        numberAtoms: 41, 
        name: "Niobium",
        symbol: "Nb",
        categoryInTable: "transition-metals",
        AtomicMass: 92.906,
        description: "Niobium is a chemical element; it has symbol Nb and atomic number 41. It is a light grey, crystalline, and ductile transition metal. Pure niobium has a Mohs hardness rating similar to pure titanium, and it has similar ductility to iron.",
        columon: 5,
        row: 5
    },

    {
        numberAtoms: 42, 
        name: "Molybdenum",
        symbol: "Mo",
        categoryInTable: "transition-metals",
        AtomicMass: 95.950,
        description: "Molybdenum is a chemical element; it has symbol Mo and atomic number 42. The name is derived from Ancient Greek μόλυβδος mólybdos, meaning lead, since its ores were sometimes confused with those of lead.",
        columon: 6,
        row: 5
    },
    {
        numberAtoms: 43, 
        name: "Technetium",
        symbol: "Tc",
        categoryInTable: "transition-metals",
        AtomicMass: 98,
        description: "Technetium is a chemical element; it has symbol Tc and atomic number 43. It is the lightest element whose isotopes are all radioactive. Technetium and promethium are the only radioactive elements whose neighbours in the sense of atomic number are both stable.",
        columon: 7,
        row: 5
    },
    {
        numberAtoms: 44, 
        name: "Ruthenium",
        symbol: "Ru",
        categoryInTable: "transition-metals",
        AtomicMass: 101.07,
        description: "Ruthenium is a chemical element; it has symbol Ru and atomic number 44. It is a rare transition metal belonging to the platinum group of the periodic table. Like the other metals of the platinum group, ruthenium is unreactive to most chemicals.",
        columon: 8,
        row: 5
    },

    {
        numberAtoms: 45, 
        name: "Rhodium",
        symbol: "Rh",
        categoryInTable: "transition-metals",
        AtomicMass: 102.91,
        description: "Rhodium is a chemical element; it has symbol Rh and atomic number 45. It is a very rare, silvery-white, hard, corrosion-resistant transition metal. It is a noble metal and a member of the platinum group. It has only one naturally occurring isotope, which is ¹⁰³Rh.",
        columon: 9,
        row: 5
    },
    {
        numberAtoms: 46, 
        name: "Palladium",
        symbol: "Pd",
        categoryInTable: "transition-metals",
        AtomicMass: 106.42,
        description: "Palladium is a chemical element; it has the symbol Pd and atomic number 46. It is a rare and lustrous silvery-white metal discovered in 1802 by the English chemist William Hyde Wollaston.",
        columon: 10,
        row: 5
    },
    {
        numberAtoms: 47, 
        name: "Silver",
        symbol: "Ag",
        categoryInTable: "transition-metals",
        AtomicMass: 107.87,
        description: "Silver is a chemical element; it has symbol Ag and atomic number 47. A soft, whitish-gray, lustrous transition metal, it exhibits the highest electrical conductivity, thermal conductivity, and reflectivity of any metal.",
        columon: 11,
        row: 5
    },
    {
        numberAtoms: 48, 
        name: "Cadmium",
        symbol: "Cd",
        categoryInTable: "transition-metals",
        AtomicMass: 112.41,
        description: "Cadmium is a chemical element; it has symbol Cd and atomic number 48. This soft, silvery-white metal is chemically similar to the two other stable metals in group 12, zinc and mercury.",
        columon: 12,
        row: 5
    },
    {
        numberAtoms: 49, 
        name: "Indium",
        symbol: "In",
        categoryInTable: "post-transition-metals",
        AtomicMass: 114.82,
        description: "Indium is a chemical element; it has symbol In and atomic number 49. It is a silvery-white post-transition metal and one of the softest elements. Chemically, indium is similar to gallium and thallium, and its properties are largely intermediate between the two.",
        columon: 13,
        row: 5
    },
    {
        numberAtoms: 50, 
        name: "Tin",
        symbol: "Sn",
        categoryInTable: "post-transition-metals",
        AtomicMass: 118.71,
        description: "Tin is a chemical element; it has the symbol Sn and atomic number 50. A metallic-gray metal, tin is soft enough to be cut with little force, and a bar of tin can be bent by hand with little effort. When bent, a bar of tin makes a sound, the so-called 'tin cry', as a result of twinning in tin crystals.",
        columon: 14,
        row: 5
    },{
        numberAtoms: 51, 
        name: "Antimony",
        symbol: "Sb",
        categoryInTable: "metalloids",
        AtomicMass: 121.76,
        description: "Antimony is a chemical element; it has symbol Sb and atomic number 51. A lustrous gray metalloid, it is found in nature mainly as the sulfide mineral stibnite. Antimony compounds have been known since antiquity and were powdered for use as medicine and cosmetics, often known by the Arabic name kohl.",
        columon: 15,
        row: 5
    },
    {
        numberAtoms: 52, 
        name: "Tellurium",
        symbol: "Te",
        categoryInTable: "metalloids",
        AtomicMass: 127.60,
        description: "Tellurium is a chemical element; it has symbol Te and atomic number 52. It is a brittle, mildly toxic, rare, silver-white metalloid. Tellurium is chemically related to selenium and sulfur, all three of which are chalcogens. It is occasionally found in native form as elemental crystals.",
        columon: 16,
        row: 5
    },
    {
        numberAtoms: 53, 
        name: "Iodine",
        symbol: "I",
        categoryInTable: "diatomic-nonmetals",
        AtomicMass: 126.90,
        description: "Iodine is a chemical element; it has symbol I and atomic number 53. The heaviest of the stable halogens, it exists as a semi-lustrous, non-metallic solid at standard conditions that melts to form a deep violet liquid at 114 °C, and boils to a violet gas at 184 °C.",
        columon: 17,
        row: 5
    },
    {
        numberAtoms: 54, 
        name: "Xenon",
        symbol: "Xe",
        categoryInTable: "noble-gases",
        AtomicMass: 131.29,
        description: "Xenon is a chemical element; it has symbol Xe and atomic number 54. It is a colorless, dense, odorless noble gas found in Earth's atmosphere in trace amounts. Although generally unreactive, it can undergo a few chemical reactions such as the formation of xenon hexafluoroplatinate, the first noble gas compound to be synthesized.",
        columon: 18,
        row: 5
    },
    {
        numberAtoms: 55, 
        name: "Caesium",
        symbol: "Cs",
        categoryInTable: "alkali-metals",
        AtomicMass: 132.91,
        description: "Caesium is a chemical element; it has symbol Cs and atomic number 55. It is a soft, silvery-golden alkali metal with a melting point of 28.5 °C, which makes it one of only five elemental metals that are liquid at or near room temperature.",
        columon: 1,
        row: 6
    },
    {
        numberAtoms: 56, 
        name: "Barium",
        symbol: "Ba",
        categoryInTable: "alkaline-earth-metals",
        AtomicMass: 137.33,
        description: "Barium is a chemical element; it has symbol Ba and atomic number 56. It is the fifth element in group 2 and is a soft, silvery alkaline earth metal. Because of its high chemical reactivity, barium is never found in nature as a free element.",
        columon: 2,
        row: 6
    },
    {
        numberAtoms: 57, 
        name: "Lanthanum",
        symbol: "La",
        categoryInTable: "lanthanides",
        AtomicMass: 138.91,
        description: "Lanthanum is a chemical element; it has symbol La and atomic number 57. It is a soft, ductile, silvery-white metal that tarnishes slowly when exposed to air. It is the eponym of the lanthanide series, a group of 15 similar elements between lanthanum and lutetium in the periodic table.",
        columon: 3,
        row: 6
    },
    {
        numberAtoms: 58, 
        name: "Cerium",
        symbol: "Ce",
        categoryInTable: "lanthanides",
        AtomicMass: 140.12,
        description: "Cerium is a chemical element; it has symbol Ce and atomic number 58. Cerium is a soft, ductile, and silvery-white metal that tarnishes when exposed to air, and it is soft enough to be cut with a steel kitchen knife. Cerium is the second element in the lanthanide series.",
        columon: 4,
        row: 9
    },
    {
        numberAtoms: 59, 
        name: "Praseodymium",
        symbol: "Pr",
        categoryInTable: "lanthanides",
        AtomicMass: 140.91,
        description: "Praseodymium is a chemical element; it has symbol Pr and atomic number 59. It is the third member of the lanthanide series and is considered to be one of the rare-earth metals. It is a soft, silvery, malleable and ductile metal, valued for its magnetic, electrical, chemical, and optical properties.",
        columon: 5,
        row: 9
    },
    {
        numberAtoms: 60, 
        name: "Neodymium",
        symbol: "Nd",
        categoryInTable: "lanthanides",
        AtomicMass: 144.24,
        description: "Neodymium is a chemical element; it has symbol Nd and atomic number 60. It is the fourth member of the lanthanide series and is considered to be one of the rare-earth metals. It is a hard, slightly malleable, silvery metal that quickly tarnishes in air and moisture.",
        columon: 6,
        row: 9
    },
    
    {
        numberAtoms: 61, 
        name: "Promethium",
        symbol: "Pm",
        categoryInTable: "lanthanides",
        AtomicMass: 145,
        description: "Promethium is a chemical element; it has symbol Pm and atomic number 61. All of its isotopes are radioactive; it is extremely rare, with only about 500–600 grams naturally occurring in Earth's crust at any given time. Promethium is one of only two radioactive elements that are followed by stable elements.",
        columon: 7,
        row: 9
    },
    {
        numberAtoms: 62, 
        name: "Samarium",
        symbol: "Sm",
        categoryInTable: "lanthanides",
        AtomicMass: 150.36,
        description: "Samarium is a chemical element; it has symbol Sm and atomic number 62. It is a moderately hard silvery metal that slowly oxidizes in air. Being a typical member of the lanthanide series, samarium usually has the oxidation state +3.",
        columon: 8,
        row: 9
    },
    {
        numberAtoms: 63, 
        name: "Europium",
        symbol: "Eu",
        categoryInTable: "lanthanides",
        AtomicMass: 151.96,
        description: "Europium is a chemical element; it has symbol Eu and atomic number 63. It is a silvery-white metal of the lanthanide series that reacts readily with air to form a dark oxide coating. Europium is the most chemically reactive, least dense, and softest of the lanthanides. It is soft enough to be cut with a knife.",
        columon: 9,
        row: 9
    },
    {
        numberAtoms: 64, 
        name: "Gadolinium",
        symbol: "Gd",
        categoryInTable: "lanthanides",
        AtomicMass: 157.25,
        description: "Gadolinium is a chemical element; it has symbol Gd and atomic number 64. It is a silvery-white metal when oxidation is removed. Gadolinium is a malleable and ductile rare-earth element. It reacts with atmospheric oxygen or moisture slowly to form a black oxide coating.",
        columon: 10,
        row: 9
    },
    {
        numberAtoms: 65, 
        name: "Terbium",
        symbol: "Tb",
        categoryInTable: "lanthanides",
        AtomicMass: 158.93,
        description: "Terbium is a chemical element; it has symbol Tb and atomic number 65. It is a silvery-white, rare earth metal that is malleable and ductile. The ninth member of the lanthanide series, terbium is a fairly electropositive metal that reacts with water, evolving hydrogen gas.",
        columon: 11,
        row: 9
    },
    {
        numberAtoms: 66, 
        name: "Dysprosium",
        symbol: "Dy",
        categoryInTable: "lanthanides",
        AtomicMass: 162.50,
        description: "Dysprosium is a chemical element; it has symbol Dy and atomic number 66. It is a rare-earth element in the lanthanide series with a metallic silver luster. Dysprosium is never found in nature as a free element, though, like other lanthanides, it is found in various minerals, such as xenotime.",
        columon: 12,
        row: 9
    },
    {
        numberAtoms: 67, 
        name: "Holmium",
        symbol: "Ho",
        categoryInTable: "lanthanides",
        AtomicMass: 164.93,
        description: "Holmium is a chemical element; it has symbol Ho and atomic number 67. It is a rare-earth element and the eleventh member of the lanthanide series of elements. It is a relatively soft, silvery, fairly corrosion-resistant and malleable metal.",
        columon: 13,
        row: 9
    },
    {
        numberAtoms: 68, 
        name: "Erbium",
        symbol: "Er",
        categoryInTable: "lanthanides",
        AtomicMass: 167.26,
        description: "Erbium is a chemical element; it has symbol Er and atomic number 68. A silvery-white solid metal when artificially isolated, natural erbium is always found in chemical combination with other elements. It is a lanthanide, a rare earth element, originally found in the gadolinite mine in Ytterby, Sweden.",
        columon: 14,
        row: 9
    },
    {
        numberAtoms: 69, 
        name: "Thulium",
        symbol: "Tm",
        categoryInTable: "lanthanides",
        AtomicMass: 168.93,
        description: "Thulium is a chemical element; it has symbol Tm and atomic number 69. It is the thirteenth and third-to-last element in the lanthanide series. Like other lanthanides, the most common oxidation state is +3, seen in its oxide, halides and other compounds; because it occurs so late in the series, however, the +2 oxidation state is also stable.",
        columon: 15,
        row: 9
    },
    {
        numberAtoms: 70, 
        name: "Ytterbium",
        symbol: "Yb",
        categoryInTable: "lanthanides",
        AtomicMass: 173.05,
        description: "Ytterbium is a chemical element; it has symbol Yb and atomic number 70. It is the fourteenth and penultimate element in the lanthanide series, which is the basis of the relative stability of its +2 oxidation state. However, like the other lanthanides, its most common oxidation state is +3.",
        columon: 16,
        row: 9
    },
    {
        numberAtoms: 71, 
        name: "Lutetium",
        symbol: "Lu",
        categoryInTable: "lanthanides",
        AtomicMass: 174.97,
        description: "Lutetium is a chemical element; it has symbol Lu and atomic number 71. It is a silvery white metal, which resists corrosion in dry air, but not in moist air. Lutetium is the last element in the lanthanide series, and it is traditionally counted among the rare earths.",
        columon: 17,
        row: 9
    },
    {
        numberAtoms: 72, 
        name: "Hafnium",
        symbol: "Hf",
        categoryInTable: "transition-metals",
        AtomicMass: 178.49,
        description: "Hafnium is a chemical element; it has symbol Hf and atomic number 72. A lustrous, silvery gray, tetravalent transition metal, hafnium chemically resembles zirconium and is found in many zirconium minerals. Its existence was predicted by Dmitri Mendeleev in 1869, though it was not identified until 1923.",
        columon: 4,
        row: 6
    },
    {
        numberAtoms: 73, 
        name: "Tantalum",
        symbol: "Ta",
        categoryInTable: "transition-metals",
        AtomicMass: 180.95,
        description: "Tantalum is a chemical element; it has symbol Ta and atomic number 73. Previously known as tantalium, it is named after Tantalus, a figure in Greek mythology. Tantalum is a rare, hard, blue-gray, lustrous transition metal that is highly corrosion-resistant.",
        columon: 5,
        row: 6
    },
    {
        numberAtoms: 74, 
        name: "Tungsten",
        symbol: "W",
        categoryInTable: "transition-metals",
        AtomicMass: 183.84,
        description: "Tungsten, also known as wolfram, is a chemical element; it has symbol W and atomic number 74. Tungsten is a rare metal found naturally on Earth almost exclusively as compounds with other elements. It was identified as a new element in 1781 and first isolated as a metal in 1783.",
        columon: 6,
        row: 6
    },
    {
        numberAtoms: 75, 
        name: "Rhenium",
        symbol: "Re",
        categoryInTable: "transition-metals",
        AtomicMass: 186.21,
        description: "Rhenium is a chemical element; it has symbol Re and atomic number 75. It is a silvery-gray, heavy, third-row transition metal in group 7 of the periodic table. With an estimated average concentration of 1 part per billion, rhenium is one of the rarest elements in the Earth's crust.",
        columon: 7,
        row: 6
    },
    {
        numberAtoms: 76, 
        name: "Osmium",
        symbol: "Os",
        categoryInTable: "transition-metals",
        AtomicMass: 190.23,
        description: "Osmium is a chemical element; it has symbol Os and atomic number 76. It is a hard, brittle, bluish-white transition metal in the platinum group that is found as a trace element in alloys, mostly in platinum ores. Osmium has the highest density of any stable element.",
        columon: 8,
        row: 6
    },
    {
        numberAtoms: 77, 
        name: "Iridium",
        symbol: "Ir",
        categoryInTable: "transition-metals",
        AtomicMass: 192.22,
        description: "Iridium is a chemical element; it has symbol Ir and atomic number 77. This very hard, brittle, silvery-white transition metal of the platinum group is considered the second-densest naturally occurring metal, with a density of 22.56 g/cm³ as defined by experimental X-ray crystallography.",
        columon: 9,
        row: 6
    },
    {
        numberAtoms: 78, 
        name: "Platinum",
        symbol: "Pt",
        categoryInTable: "transition-metals",
        AtomicMass: 195.08,
        description: "Platinum is a chemical element; it has symbol Pt and atomic number 78. It is a dense, malleable, ductile, highly unreactive, precious, silverish-white transition metal. Its name originates from Spanish platina, a diminutive of plata 'silver'.",
        columon: 10,
        row: 6
    },
    {
        numberAtoms: 79, 
        name: "Gold",
        symbol: "Au",
        categoryInTable: "transition-metals",
        AtomicMass: 196.97,
        description: "Gold is a chemical element; it has chemical symbol Au and atomic number 79. In its pure form, it is a bright-metallic-yellow, dense, soft, malleable, and ductile metal. Chemically, gold is a transition metal, a group 11 element, and one of the noble metals.",
        columon: 11,
        row: 6
    },
    {
        numberAtoms: 80, 
        name: "Mercury",
        symbol: "Hg",
        categoryInTable: "transition-metals",
        AtomicMass: 200.59,
        description: "Mercury is a chemical element; it has symbol Hg and atomic number 80. It is commonly known as quicksilver and was formerly named hydrargyrum. A heavy, silvery d-block element, mercury is the only metallic element that is known to be liquid at standard temperature and pressure.",
        columon: 12,
        row: 6
    },
    {
        numberAtoms: 81, 
        name: "Thallium",
        symbol: "Tl",
        categoryInTable: "post-transition-metals",
        AtomicMass: 204.38,
        description: "Thallium is a chemical element; it has symbol Tl and atomic number 81. It is a silvery-white post-transition metal that is not found free in nature. When isolated, thallium resembles tin, but discolors when exposed to air.",
        columon: 13,
        row: 6
    },
    {
        numberAtoms: 82, 
        name: "Lead",
        symbol: "Pb",
        categoryInTable: "post-transition-metals",
        AtomicMass: 207.2,
        description: "Lead is a chemical element with the symbol Pb and atomic number 82. It is a heavy metal, denser than most common materials. Lead is soft, malleable, and has a relatively low melting point. When freshly cut, it appears shiny gray with a bluish tint, but tarnishes to dull gray on exposure to air.",
        columon: 14,
        row: 6
    },
    {
        numberAtoms: 83, 
        name: "Bismuth",
        symbol: "Bi",
        categoryInTable: "post-transition-metals",
        AtomicMass: 208.98,
        description: "Bismuth is a chemical element; it has symbol Bi and atomic number 83. It is a post-transition metal and one of the pnictogens, with chemical properties resembling its lighter group 15 siblings arsenic and antimony. Elemental bismuth occurs naturally, and its sulfide and oxide forms are important commercial ores.",
        columon: 15,
        row: 6
    },
    {
        numberAtoms: 84, 
        name: "Polonium",
        symbol: "Po",
        categoryInTable: "post-transition-metals",
        AtomicMass: 209,
        description: "Polonium is a chemical element; it has symbol Po and atomic number 84. A rare and highly radioactive metal with no stable isotopes, polonium is chemically similar to selenium and tellurium, though its metallic character resembles that of its horizontal neighbors in the periodic table: thallium, lead, and bismuth.",
        columon: 16,
        row: 6
    },
    {
        numberAtoms: 85, 
        name: "Astatine",
        symbol: "At",
        categoryInTable: "metalloids",
        AtomicMass: 210,
        description: "Astatine is a chemical element; it has symbol At and atomic number 85. It is the rarest naturally occurring element in the Earth's crust, occurring only as the decay product of various heavier elements. All of astatine's isotopes are short-lived; the most stable is astatine-210, with a half-life of 8.1 hours.",
        columon: 17,
        row: 6
    },
    {
        numberAtoms: 86, 
        name: "Radon",
        symbol: "Rn",
        categoryInTable: "noble-gases",
        AtomicMass: 222,
        description: "Radon is a chemical element; it has symbol Rn and atomic number 86. It is a radioactive, colorless, odorless, tasteless noble gas. It occurs naturally in minute quantities as an intermediate step in the normal radioactive decay chains through which thorium and uranium slowly decay into lead and various other short-lived radioactive elements.",
        columon: 18,
        row: 6
    },
    {
        numberAtoms: 87, 
        name: "Francium",
        symbol: "Fr",
        categoryInTable: "alkali-metals",
        AtomicMass: 223,
        description: "Francium is a chemical element; it has symbol Fr and atomic number 87. It is extremely radioactive; its most stable isotope, francium-223, has a half-life of only 22 minutes. It is the second most electropositive element, behind only caesium, and is the second rarest naturally occurring element.",
        columon: 1,
        row: 7
    },{
        numberAtoms: 88, 
        name: "Radium",
        symbol: "Ra",
        categoryInTable: "alkaline-earth-metals",
        AtomicMass: 226,
        description: "Radium is a chemical element; it has symbol Ra and atomic number 88. It is the sixth element in group 2 of the periodic table, also known as the alkaline earth metals. Pure radium is silvery-white, but it readily reacts with nitrogen on exposure to air, forming a black surface layer of radium nitride.",
        columon: 2,
        row: 7
    },
    {
        numberAtoms: 89, 
        name: "Actinium",
        symbol: "Ac",
        categoryInTable: "actinides",
        AtomicMass: 227,
        description: "Actinium is a chemical element; it has symbol Ac and atomic number 89. It was first isolated by French chemist André-Louis Debierne in 1899. Friedrich Oskar Giesel independently isolated it in 1902. Actinium gave the name to the actinide series, a group of 15 similar elements between actinium and lawrencium.",
        columon: 3,
        row: 7
    },
    {
        numberAtoms: 90, 
        name: "Thorium",
        symbol: "Th",
        categoryInTable: "actinides",
        AtomicMass: 232.04,
        description: "Thorium is a chemical element; it has symbol Th and atomic number 90. A silver-white metal that tarnishes black when exposed to air, thorium is weakly radioactive: all its known isotopes are unstable. Thorium-232 has a half-life of 14.05 billion years, or about the age of the universe.",
        columon: 4,
        row: 10
    },
    {
        numberAtoms: 91, 
        name: "Protactinium",
        symbol: "Pa",
        categoryInTable: "actinides",
        AtomicMass: 231.04,
        description: "Protactinium is a chemical element; it has symbol Pa and atomic number 91. It is a dense, silvery-gray actinide metal which readily reacts with oxygen, water vapor and inorganic acids. It forms various chemical compounds in which protactinium is usually present in the oxidation state +5.",
        columon: 5,
        row: 10
    },
    {
        numberAtoms: 92, 
        name: "Uranium",
        symbol: "U",
        categoryInTable: "actinides",
        AtomicMass: 238.03,
        description: "Uranium is a chemical element; it has symbol U and atomic number 92. It is a silvery-grey metal in the actinide series of the periodic table. A uranium atom has 92 protons and 92 electrons, of which 6 are valence electrons. Uranium is weakly radioactive because all isotopes of uranium are unstable.",
        columon: 6,
        row: 10
    },
    {
        numberAtoms: 93, 
        name: "Neptunium",
        symbol: "Np",
        categoryInTable: "actinides",
        AtomicMass: 237,
        description: "Neptunium is a chemical element; it has symbol Np and atomic number 93. A radioactive actinide metal, neptunium is the first transuranic element. Its position in the periodic table just after uranium, named after the planet Uranus, led to it being named after Neptune, the next planet in the solar system.",
        columon: 7,
        row: 10
    },
    {
        numberAtoms: 94, 
        name: "Plutonium",
        symbol: "Pu",
        categoryInTable: "actinides",
        AtomicMass: 244,
        description: "Plutonium is a radioactive chemical element; it has symbol Pu and atomic number 94. It is an actinide metal of silvery-gray appearance that tarnishes when exposed to air, and forms a dull coating when oxidized. The element normally exhibits six allotropes and four oxidation states.",
        columon: 8,
        row: 10
    },{
        numberAtoms: 95, 
        name: "Americium",
        symbol: "Am",
        categoryInTable: "actinides",
        AtomicMass: 243,
        description: "Americium is a radioactive chemical element with the symbol Am and atomic number 95. It is a transuranic member of the actinide series, in the periodic table located under the lanthanide element europium, and thus by analogy was named after the Americas.",
        columon: 9,
        row: 10
    },
    {
        numberAtoms: 96, 
        name: "Curium",
        symbol: "Cm",
        categoryInTable: "actinides",
        AtomicMass: 247,
        description: "Curium is a transuranic radioactive chemical element with the symbol Cm and atomic number 96. This element of the actinide series was named after Marie and Pierre Curie, both known for their research on radioactivity.",
        columon: 10,
        row: 10
    },
    {
        numberAtoms: 97, 
        name: "Berkelium",
        symbol: "Bk",
        categoryInTable: "actinides",
        AtomicMass: 247,
        description: "Berkelium is a transuranic radioactive chemical element with the symbol Bk and atomic number 97. It is a member of the actinide and transuranium element series. It is named after the city of Berkeley, California, the location of the University of California Radiation Laboratory where it was discovered.",
        columon: 11,
        row: 10
    },
    {
        numberAtoms: 98, 
        name: "Californium",
        symbol: "Cf",
        categoryInTable: "actinides",
        AtomicMass: 251,
        description: "Californium is a radioactive chemical element with the symbol Cf and atomic number 98. The element was first synthesized in 1950 at the University of California Radiation Laboratory in Berkeley, by bombarding curium with alpha particles.",
        columon: 12,
        row: 10
    },
    {
        numberAtoms: 99, 
        name: "Einsteinium",
        symbol: "Es",
        categoryInTable: "actinides",
        AtomicMass: 252,
        description: "Einsteinium is a synthetic element with the symbol Es and atomic number 99. Einsteinium is a member of the actinide series and is the seventh transuranic element. It was named in honor of Albert Einstein.",
        columon: 13,
        row: 10
    },
    {
        numberAtoms: 100, 
        name: "Fermium",
        symbol: "Fm",
        categoryInTable: "actinides",
        AtomicMass: 257,
        description: "Fermium is a synthetic element with the symbol Fm and atomic number 100. It is an actinide and the heaviest element that can be formed by neutron bombardment of lighter elements, and hence the last element that can be prepared in macroscopic quantities, although pure fermium metal has not yet been prepared.",
        columon: 14,
        row: 10
    },
    {
        numberAtoms: 101, 
        name: "Mendelevium",
        symbol: "Md",
        categoryInTable: "actinides",
        AtomicMass: 258,
        description: "Mendelevium is a synthetic element with the symbol Md and atomic number 101. A metallic radioactive transuranic element in the actinide series, it is the first element that currently cannot be produced in macroscopic quantities through neutron bombardment of lighter elements.",
        columon: 15,
        row: 10
    },
    {
        numberAtoms: 102, 
        name: "Nobelium",
        symbol: "No",
        categoryInTable: "actinides",
        AtomicMass: 259,
        description: "Nobelium is a synthetic chemical element with the symbol No and atomic number 102. It is named in honor of Alfred Nobel, the inventor of dynamite and benefactor of science. A radioactive metal, it is the tenth transuranic element and is the penultimate member of the actinide series.",
        columon: 16,
        row: 10
    },
    {
        numberAtoms: 103, 
        name: "Lawrencium",
        symbol: "Lr",
        categoryInTable: "actinides",
        AtomicMass: 266,
        description: "Lawrencium is a synthetic chemical element with the symbol Lr and atomic number 103. It is named in honor of Ernest Lawrence, inventor of the cyclotron, a device that was used to discover many artificial radioactive elements.",
        columon: 17,
        row: 10
    },
    {
        numberAtoms: 104, 
        name: "Rutherfordium",
        symbol: "Rf",
        categoryInTable: "transition-metals",
        AtomicMass: 267,
        description: "Rutherfordium is a synthetic chemical element with the symbol Rf and atomic number 104, named after physicist Ernest Rutherford. It is a highly radioactive element; the most stable known isotope is rutherfordium-267, which has a half-life of approximately 48 minutes.",
        columon: 4,
        row: 7
    },
    {
        numberAtoms: 105, 
        name: "Dubnium",
        symbol: "Db",
        categoryInTable: "transition-metals",
        AtomicMass: 268,
        description: "Dubnium is a synthetic chemical element with the symbol Db and atomic number 105. Dubnium is highly radioactive: the most stable known isotope, dubnium-268, has a half-life of about 28 hours. Dubnium does not occur naturally on Earth and is produced artificially.",
        columon: 5,
        row: 7
    },{
        numberAtoms: 106, 
        name: "Seaborgium",
        symbol: "Sg",
        categoryInTable: "transition-metals",
        AtomicMass: 269,
        description: "Seaborgium is a synthetic chemical element with the symbol Sg and atomic number 106. It is named after the American nuclear chemist Glenn T. Seaborg. As a synthetic element, it can be created in a laboratory but is not found in nature. It is also highly radioactive.",
        columon: 6,
        row: 7
    },
    {
        numberAtoms: 107, 
        name: "Bohrium",
        symbol: "Bh",
        categoryInTable: "transition-metals",
        AtomicMass: 270,
        description: "Bohrium is a synthetic chemical element with the symbol Bh and atomic number 107. It is named after the Danish physicist Niels Bohr. It is a highly radioactive element that does not occur naturally; its most stable known isotope has a half-life of approximately 61 seconds.",
        columon: 7,
        row: 7
    },
    {
        numberAtoms: 108, 
        name: "Hassium",
        symbol: "Hs",
        categoryInTable: "transition-metals",
        AtomicMass: 269,
        description: "Hassium is a synthetic chemical element with the symbol Hs and atomic number 108. Hassium is highly radioactive; its most stable known isotopes have half-lives of approximately ten seconds. It is a transactinide element, and a member of the 7th period and group 8 of the periodic table.",
        columon: 8,
        row: 7
    },
    {
        numberAtoms: 109, 
        name: "Meitnerium",
        symbol: "Mt",
        categoryInTable: "unknown-properties",
        AtomicMass: 278,
        description: "Meitnerium is a synthetic chemical element with the symbol Mt and atomic number 109. It is an extremely radioactive synthetic element. The most stable known isotope, meitnerium-278, has a half-life of 4.5 seconds. It is named after the Austrian-Swedish physicist Lise Meitner.",
        columon: 9,
        row: 7
    },
    {
        numberAtoms: 110, 
        name: "Darmstadtium",
        symbol: "Ds",
        categoryInTable: "unknown-properties",
        AtomicMass: 281,
        description: "Darmstadtium is a chemical element with the symbol Ds and atomic number 110. It is an extremely radioactive synthetic element. The most stable known isotope, darmstadtium-281, has a half-life of approximately 14 seconds. It was first synthesized in 1994 near the city of Darmstadt, Germany.",
        columon: 10,
        row: 7
    },
    
    {
        numberAtoms: 111, 
        name: "Roentgenium",
        symbol: "Rg",
        categoryInTable: "unknown-properties",
        AtomicMass: 282,
        description: "Roentgenium is a chemical element with the symbol Rg and atomic number 111. It is an extremely radioactive synthetic element that can be created in a laboratory but is not found in nature. It is named after the physicist Wilhelm Röntgen, the discoverer of X-rays.",
        columon: 11,
        row: 7
    },
    {
        numberAtoms: 112, 
        name: "Copernicium",
        symbol: "Cn",
        categoryInTable: "transition-metals",
        AtomicMass: 285,
        description: "Copernicium is a chemical element with the symbol Cn and atomic number 112. Its isotopes are extremely radioactive and have only been created in a laboratory. The most stable known isotope, copernicium-285, has a half-life of approximately 28 seconds.",
        columon: 12,
        row: 7
    },
    {
        numberAtoms: 113, 
        name: "Nihonium",
        symbol: "Nh",
        categoryInTable: "unknown-properties",
        AtomicMass: 286,
        description: "Nihonium is a synthetic chemical element with the symbol Nh and atomic number 113. It is extremely radioactive; its most stable known isotope, nihonium-286, has a half-life of 9.5 seconds. Nihonium was first reported to have been created in 2003 by a joint team of Russian and American scientists.",
        columon: 13,
        row: 7
    },
    {
        numberAtoms: 114, 
        name: "Flerovium",
        symbol: "Fl",
        categoryInTable: "unknown-properties",
        AtomicMass: 289,
        description: "Flerovium is a superheavy synthetic chemical element with the symbol Fl and atomic number 114. It is an extremely radioactive element. The element is named after the Flerov Laboratory of Nuclear Reactions of the Joint Institute for Nuclear Research in Dubna, Russia.",
        columon: 14,
        row: 7
    },
    {
        numberAtoms: 115, 
        name: "Moscovium",
        symbol: "Mc",
        categoryInTable: "unknown-properties",
        AtomicMass: 290,
        description: "Moscovium is a synthetic chemical element with the symbol Mc and atomic number 115. It was first synthesized in 2003 by a joint team of Russian and American scientists at the Joint Institute for Nuclear Research in Dubna, Russia. It is an extremely radioactive element.",
        columon: 15,
        row: 7
    },
    {
        numberAtoms: 116, 
        name: "Livermorium",
        symbol: "Lv",
        categoryInTable: "unknown-properties",
        AtomicMass: 293,
        description: "Livermorium is a synthetic chemical element with the symbol Lv and atomic number 116. It is an extremely radioactive element that has only been created in a laboratory and has not been observed in nature. The element is named after the Lawrence Livermore National Laboratory in the United States.",
        columon: 16,
        row: 7
    },
    {
        numberAtoms: 117, 
        name: "Tennessine",
        symbol: "Ts",
        categoryInTable: "unknown-properties",
        AtomicMass: 294,
        description: "Tennessine is a synthetic chemical element with the symbol Ts and atomic number 117. It is the second-heaviest known element and the penultimate element of the 7th period of the periodic table. The discovery of tennessine was officially announced in Dubna, Russia, in 2010.",
        columon: 17,
        row: 7
    },
    {
        numberAtoms: 118, 
        name: "Oganesson",
        symbol: "Og",
        categoryInTable: "unknown-properties",
        AtomicMass: 294,
        description: "Oganesson is a synthetic chemical element with the symbol Og and atomic number 118. It was first synthesized in 2002 at the Joint Institute for Nuclear Research in Dubna, Russia. Oganesson has the highest atomic number and highest atomic mass of all known elements.",
        columon: 18,
        row: 7
    },
    
]
 
const periodicTable = document.getElementById("periodic-table")

function createPeriodicTable(elements) {

    elements.forEach(element => {
        let cardElement = document.createElement('div');
        cardElement.className = "element-card" + " cat-" + element.categoryInTable

        cardElement.style.gridColumn = element.columon
        cardElement.style.gridRow = element.row

        cardElement.style.background = `var(--cat-${element.categoryInTable})`

        cardElement.innerHTML = `
        <span class="element-number">${element.numberAtoms}</span>
        <span class="element-symbol">${element.symbol}</span>
        <span class="element-name">${element.name}</span>
        `;

        cardElement.addEventListener('click', function opentheModal() {
            console.log('test')
            openModal(element)
        })

        periodicTable.appendChild(cardElement)

    });
}

createPeriodicTable(elements)


const searchInput = document.getElementById('searchInput')

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase()


    if (query === '') {

        document.querySelectorAll('.element-card').forEach(cardElement =>  {
             cardElement.style.opacity = '1'
            })
    
    } else {

        document.querySelectorAll('.element-card').forEach(card => {

            const name = card.querySelector('.element-name').textContent.toLowerCase()
            const symbol = card.querySelector('.element-symbol').textContent.toLowerCase()
            const num = card.querySelector('.element-number').textContent

            if (name.includes(query) || symbol.includes(query) || num.includes(query)) {
                card.style.opacity = '1'
                card.style.transform = 'scale(1.1)'
                card.style.zIndex = '5'
            } else {
                card.style.opacity = '0.1'
                card.style.transform = 'scale(1)'
                card.style.zIndex = '1'
            }
            
        });
    }
});

const modal = document.getElementById('elementModal')
const closeModalBtn = document.getElementById('closeModal')

const detailNumber = document.getElementById('detailNumber')
const detailSymbol = document.getElementById('detailSymbol')
const detailName = document.getElementById('detailName')
const detailCategory = document.getElementById('detailCategory')
const detailMass = document.getElementById('detailMass')
const detailDescription = document.getElementById('detailDescription')

function openModal(element) {
    detailNumber.textContent = element.numberAtoms
    detailSymbol.textContent = element.symbol
    detailName.textContent = element.name
    detailCategory.textContent = element.categoryInTable.replace('-', '')
    detailMass.textContent = element.AtomicMass
    detailDescription.textContent = element.description

    modal.classList.add('opened')

}

function closeModal() {
    modal.classList.remove('opened')
}


closeModalBtn.addEventListener('click', closeModal)

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal()
})