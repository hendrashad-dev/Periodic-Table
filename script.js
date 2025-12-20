const elements = [
    {
        numberAtoms: 1, 
        name: "Hydrogen",
        symbol: "H",
        categoryInTable: "nonmetal",
        columon: 1,
        row: 1
    },
    {
        numberAtoms: 1, 
        name: "Hydrogen",
        symbol: "H",
        categoryInTable: "nonmetal",
        columon: 7,
        row: 3
    },
    {
        numberAtoms: 1, 
        name: "Hydrogen",
        symbol: "H",
        categoryInTable: "nonmetal",
        columon: 15,
        row: 2
    },
    {
        numberAtoms: 5, 
        name: "example",
        symbol: "E",
        categoryInTable: "nonmetal",
        columon: 32,
        row: 2
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
