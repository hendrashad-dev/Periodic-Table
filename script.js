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
    },
    
]

const periodicTable = document.getElementById("periodic-table")

function createPeriodicTable(elements) {

    elements.forEach(element => {
        let cardElement = document.createElement('div');
        cardElement.className = "element-card" + " cat-" + element.categoryInTable

        cardElement.style.gridColumn = element.columon
        cardElement.style.gridRow = element.row

        cardElement.style.backgroundColor = `var(--cat-${element.categoryInTable})`

        cardElement.innerHTML = `
        <span class="element-number">${element.numberAtoms}</span>
        <span class="element-symbol">${element.symbol}</span>
        <span class="element-name">${element.name}</span>
        `;

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
