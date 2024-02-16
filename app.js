// 1. შეუცვალეთ დივს ბექრაუნდი წითლიდან მწვანეზე , მწვანიდან წითელზე

function changeColorToggle() {
  const button = document.createElement("button");
  const div = document.querySelector("#div");

  button.textContent = "click me";
  document.body.appendChild(div);
  document.body.appendChild(button);

  button.addEventListener("click", () => {
    div.classList.toggle("divs");
  });
}
changeColorToggle();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. შექმენით მასივი ფერებით დივის კლიკზე უნდა უცვალოს ამ დივს ფერები,
// ფერები უნდა აიღოს მასივიდიან

function multColors() {
  let colors = ["red", "green", "blue", "yellow"];
  const div = document.querySelector("#divs");
  const button = document.createElement("button");
  let indexColor = 0;
  document.body.appendChild(button);
  button.textContent = "change colors";
  button.addEventListener("click", () => {
    div.style.backgroundColor = colors[indexColor];
    indexColor++;
    if (indexColor === colors.length) {
      indexColor = 0;
    }
  });
}
multColors();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3.
// უნდა შექმნათ ფუნქცია რომელიც პარამეტრად მიიღებს მასივს და შეამოწმებს,
// თუ მასივში არის უარყოფითი ციფრი დალოგეთ "მაფია" თუ არარის დალოგეთ
// "არარის"

let array1 = [1, 2, 3, 4];

function checkNum(a) {
  let checkSymbol = 0;
  a.forEach((item) => {
    if (item < 0) {
      checkSymbol = "-";
    }
  });
  if (checkSymbol === "-") {
    return "მაფია";
  } else {
    return "არარის";
  }
}
console.log(checkNum(array1));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. გაფილტრეთ პროდუქტები კატეგორიის მიხედვით , Filter მეთოდით

function filterMan() {
    const products = [
        { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 10 },
        { id: 2, name: "Headphones", category: "Electronics", price: 200, stock: 15 },
        { id: 3, name: "Coffee Maker", category: "Appliances", price: 100, stock: 5 },
        { id: 4, name: "Blender", category: "Appliances", price: 150, stock: 8 },
        { id: 5, name: "Smartphone", category: "Electronics", price: 500, stock: 20 },
        { id: 6, name: "Book", category: "Literature", price: 20, stock: 100 },
      ];

      const fileredAppliances = products.filter(item => item.category === 'Appliances')
      const fileredElectronics = products.filter(item => item.category === 'Electronics')
      const fileredLiterature = products.filter(item => item.category === 'Literature')
      let filterArr = []
      filterArr.push(fileredAppliances,fileredElectronics,fileredLiterature)
      console.log(filterArr);
}
filterMan()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5. იპოვეთ ყველაზე იაფრი პროდუქტი , Reduce მეთოდით

function cheapest() {
    const products = [
        { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 10 },
        { id: 2, name: "Headphones", category: "Electronics", price: 200, stock: 15 },
        { id: 3, name: "Coffee Maker", category: "Appliances", price: 100, stock: 5 },
        { id: 4, name: "Blender", category: "Appliances", price: 150, stock: 8 },
        { id: 5, name: "Smartphone", category: "Electronics", price: 500, stock: 20 },
        { id: 6, name: "Book", category: "Literature", price: 20, stock: 100 },
      ];
}
cheapest()
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6.

// დაასორტირეთ პროდუქტები ფასის მიხედვით

function sortPrices() {
    const products = [
        { id: 1, name: "Laptop", category: "Electronics", price: 1000, stock: 10 },
        { id: 2, name: "Headphones", category: "Electronics", price: 200, stock: 15 },
        { id: 3, name: "Coffee Maker", category: "Appliances", price: 100, stock: 5 },
        { id: 4, name: "Blender", category: "Appliances", price: 150, stock: 8 },
        { id: 5, name: "Smartphone", category: "Electronics", price: 500, stock: 20 },
        { id: 6, name: "Book", category: "Literature", price: 20, stock: 100 },
      ];

    const result = products.sort((a,b) => {
       return a.price - b.price
    })
    console.log(result);
}
sortPrices()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7

// წამოიღეთ დეითა ეიპიაიდან კონკრეტულად (Id, Title, Price)

function getData() {
    fetch('https://fakestoreapi.com/products')
    .then(data => data.json())
    .then(data => {
        console.log(data);
    })
    .catch(
        console.log("err")
    )
}
getData()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


