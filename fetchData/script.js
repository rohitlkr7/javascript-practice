

let fetchData= fetch('https://fakestoreapi.com/products')
   fetchData.then((Response) => Response.json())
   .then((product)=> {
    console.log(product.filter((item)=>item.category === "electronics"))
   
   });


   async function FetchData(){
    try {
        let response =await fetch('https://fakestoreapi.com/products');
        let product = await response.json();
        console.log(product)
    } catch (erro) {
        console.error("Error fetching data:", error);
    }

   }
   FetchData();