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
        columon: 17,
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
        columon: 12,
        row: 2
    },
    {
        numberAtoms: 6, 
        name: "Carbon",
        symbol: "C",
        categoryInTable: "nonmetal",
        AtomicMass: 12.011,
        description: "Carbon is a chemical element; it has symbol C and atomic number 6. It is nonmetallic and tetravalent—meaning that its atoms are able to form up to four covalent bonds due to its valence shell exhibiting 4 electrons. It belongs to group 14 of the periodic table. Carbon makes up about 0.025 percent of Earth's crust",
        columon: 13,
        row: 2
    },
    {
        numberAtoms: 7, 
        name: "Nitrogen",
        symbol: "N",
        categoryInTable: "nonmetal",
        AtomicMass: 14.007,
        description: "Nitrogen is a chemical element; it has symbol N and atomic number 7. Nitrogen is a nonmetal and the lightest member",
        columon: 14,
        row: 2
    },
    {
        numberAtoms: 8, 
        name: "Oxygen",
        symbol: "O",
        categoryInTable: "nonmetal",
        AtomicMass: 15.999,
        description: "Oxygen is a chemical element; it has the symbol O and its atomic number is 8. It is a member of the chalcogen group in the periodic table",
        columon: 15,
        row: 2
    },
    {
        numberAtoms: 9, 
        name: "Fluorine",
        symbol: "F",
        categoryInTable: "nonmetal",
        AtomicMass: 18.998,
        description: "Fluorine is a chemical element; it has symbol F and atomic number 9. It is the lightest halogen and exists at standard conditions as pale yellow diatomic gas",
        columon: 16,
        row: 2
    },
    {
        numberAtoms: 10, 
        name: "Neon",
        symbol: "Ne",
        categoryInTable: "noble-gases",
        AtomicMass: 20.180,
        description: "Neon is a chemical element; it has symbol Ne and atomic number 10. It is the second noble gas in the periodic table. Neon is a colorless, odorless, inert monatomic gas under standard conditions, with approximately two-thirds the density of air",
        columon: 17,
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
        description: "Neon is a chemical element; it has symbol Ne and atomic number 10. It is the second noble gas in the periodic table. Neon is a colorless, odorless, inert monatomic gas under standard conditions, with approximately two-thirds the density of air",
        columon: 2,
        row: 3
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
