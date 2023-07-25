var productNameInput =document.getElementById('productNameInput')
var productPriceInput=document.getElementById('productPriceInput')
var productCategoInput=document.getElementById('productCategoInput')
var productDescInput=document.getElementById('productDescInput')


// console.log(productNameInput,productPriceInput,productCategoInput,productDescInput)
var productContainer=[]
if (localStorage.getItem('today')!=null){
      productContainer=JSON.parse(localStorage.getItem('today'));
      displayProducts();
}
// function checkInput(term){

//             if(validationProductName().includes(term))
//             {
//                   input.classList.add()
//             }

// }
// addBtn.onclick= function(){
//       if(addBtn.innerHTML == 'add proudct'){
   
//      addProudct();
     
//       }
//       else{
//          updateProudct();
//       }
   
//       displayProducts();
//       clearForm();
//    }
function addProduct(){
      if(validationProductName()&&validationProductPrice()&&validationProductCategory()&&validationProductDesc()){
            var product={
                  name:productNameInput.value,
                  price:productPriceInput.value,
                  category:productCategoInput.value,
                  description:productDescInput.value
               }
               if(document.getElementById('addBtn').innerHTML!='Update Product'){
                  productContainer.push(product)
               }
               else{
                  productContainer[temp]=product;
                  document.getElementById('addBtn').innerHTML='Add product'
               }
               console.log(productContainer)
               localStorage.setItem('today',JSON.stringify(productContainer))
               displayProducts()
               clearForm()
            
      }
      else{
            alert('please enter right input')
      }

}
function clearForm(){
      productNameInput.value="";
      productPriceInput.value="";
      productCategoInput.value="";
      productDescInput.value="";

}

function displayProducts(){
      var cartona=``;
      for (var i = 0; i < productContainer.length; i++) {
            cartona+=`<tr>
            <td>${i+1}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].description}</td>
            <td><button class="btn btn-outline-warning btn-sm"onclick="UpdateProduct(${i})">Update</button></td>
            <td><button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(${i})">Delete</button></td>
            
            </tr>`
            
      }
      document.getElementById('tableBody').innerHTML=cartona
}
function deleteProduct(index){
      productContainer.splice(index,1);
      localStorage.setItem('today',JSON.stringify(productContainer));
      displayProducts();

}
function search(term){
      console.log(term)
      var cartona=``;
      for (var i = 0; i < productContainer.length; i++) {
            // console.log(productContainer[i].name.includes(term));
            if(productContainer[i].name.toLowerCase().includes(term.toLowerCase()))
            {
                  cartona+=`<tr>
                  <td>${i+1}</td>
                  <td>${productContainer[i].name}</td>
                  <td>${productContainer[i].price}</td>
                  <td>${productContainer[i].category}</td>
                  <td>${productContainer[i].description}</td>
                  <td><button class="btn btn-outline-warning btn-sm">Update</button></td>
                  <td><button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(${i})">Delete</button></td>
                  
                  </tr>`
            }
      }
      document.getElementById('tableBody').innerHTML=cartona

}

function UpdateProduct(index){
      // alert(index)
      productNameInput.value=productContainer[index].name;
      productPriceInput.value=productContainer[index].price;
      productCategoInput.value=productContainer[index].category;
      productDescInput.value=productContainer[index].description;
      document.getElementById('addBtn').innerHTML='Update Product'
      temp=index;
      
}
// var regx=/^[A-Z][A-Za-z]{3,8}$/
// console.log(regx.test('Ahmed'))
// var regx=/^([1-9][0-9]{2}|1000)$/
// var regx=/^(mobile|tv|anyDevice)$/
// var regx=/^.{0,500}$/
function validationProductName(){
      var regx=/^[A-Z][A-Za-z]{3,8}$/
      if(regx.test(productNameInput.value)){
            return true;
      }
      else{
            return false;
      }
}
function validationProductPrice(){
      var regx=/^([1-9][0-9]{2}|1000)$/
      if(regx.test(productPriceInput.value)){
            return true;
      }
      else{
            return false;
      }
}
function validationProductCategory(){
      var regx=/^(mobile|tv|device)$/
      if(regx.test(productCategoInput.value)){
            return true;
      }
      else{
            return false;
      }
}
function validationProductDesc(){
      var regx=/^.{0,500}$/
      if(regx.test(productDescInput.value)){
            return true;
      }
      else{
            return false;
      }
}