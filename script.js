// Fetch the element data from the JSON file
fetch('elements.json')
  .then(response => response.json())
  .then(elements => {
    const tableContainer = document.getElementById('periodic-table');

    // Loop through the elements and create HTML elements for the table
    elements.forEach(element => {
      const elementDiv = document.createElement('div');
      elementDiv.classList.add('element');
      elementDiv.dataset.number = element.number;
      elementDiv.dataset.symbol = element.symbol;
      elementDiv.dataset.name = element.name;
      elementDiv.dataset.atomicMass = element.atomic_mass;
      elementDiv.dataset.category = element.category.replace(" ", "_");
      
      // Create the structure for each element inside the square
      elementDiv.innerHTML = `
        <div class="element-number">${element.number}</div>
        <div class="element-symbol">${element.symbol}</div>
        <div class="element-name">${element.name}</div>
        <div class="${element.category.replace(" ", "_")}"></div>
        <div class="element-atomic-mass">${element.atomic_mass.toFixed(2)}</div>
      `;
      
      // Add the element to the table
      tableContainer.appendChild(elementDiv);

      
    });
  });
