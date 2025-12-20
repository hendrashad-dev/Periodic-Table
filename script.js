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