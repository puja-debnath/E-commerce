// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async(resolve) =>{
    const response = await fetch("http://localhost:8080/products")
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchProductByFilter(filter) {
 // filter = {"category":["smartphone","laptops"]}
 //sort = {_sort:"price" _order:"desc"}
  //todo:on server it will support multi values
    let querystring = ''
    for(let key in filter){
      querystring += `${key} = ${filter[key]}&`
    }
    
  return new Promise(async(resolve) =>{
    const response = await fetch("http://localhost:8080/products?" + querystring)
    const data = await response.json()
    resolve({data})
  }
  );
}