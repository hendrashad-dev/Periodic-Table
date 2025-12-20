const elements = [
    {
        numberAtoms: 1, 
        name: "Hydrogen",
        symbol: "H",
        categoryInTable: "nonmetal",
        columon: 1,
        row: 1
    },
    
]

const periodicTable = document.getElementById("periodic-table")

function createPeriodicTable(elements) {

    elements.forEach(element => {
        let cardElement = document.createElement('div');
        cardElement.className = "element-card" + " cat-" + element.categoryInTable

        cardElement.innerHTML = `
        <span class="element-number">${element.numberAtoms}</span>
        <span class="element-symbol">${element.symbol}</span>
        <span class="element-name">${element.name}</span>
        `;

        periodicTable.appendChild(cardElement)
    });
}

createPeriodicTable(elements)