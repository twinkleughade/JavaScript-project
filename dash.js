function add(){
    document.querySelector("#mainedit").style.display ="none";
    let a= document.querySelector("#main");
    a.style.display = "block";
}

async function fetch_data() {
    let res = await fetch("http://localhost:3000/product");
    let data = await res.json();
    
    let final_data = data.map ((t)=>`
    
        <tr id="tabledata">
            <td>${t.srnumber}</td>
            <td>${t.brandname}</td>
            <td>${t.productname}</td>
            <td>${t.price}</td>
            <td><i class="fa-solid fa-trash-can-arrow-up" onclick="mydelete('${t.id}')"></i><i class="fa-solid fa-pen-fancy" onclick="editdata('${t.id}')"></i>

        </tr>

    `).join(" ");
    document.getElementById("showdata").innerHTML = final_data;
}
fetch_data()

function newdata(){
    let data = {
        srnumber :document.getElementById("srnumber").value,
        brandname :document.getElementById("brand").value,
        productname :document.getElementById("product").value,
        price :document.getElementById("price").value,
    }
    fetch("http://localhost:3000/product",
        {
            method :'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        }
    )
    
    add()
}

function mydelete(id){
    fetch(`http://localhost:3000/product/${id}`, {
            method:'DELETE'
    })
    
}
async function editdata(id) {
  document.querySelector("#main").style.display = "none";
    document.querySelector("#mainedit").style.display = "block";
    let myupdata = await fetch(`http://localhost:3000/product/${id}`)
    let redata = await myupdata.json()

    let data =`
    <section>
      
              <h1>EDIT DATA</h1>
              <i class="fa-solid fa-x" onclick="displayclose1()"></i>
              <div action="" id="Signupform">
                <div>
                  <label for="srnumber">Sr.Number</label><br />
                  <input type="text" id="srnumber1" value="${redata.srnumber}" placeholder="enter sr.number here"/>
                  <br>
                </div>
                
                <div>
                  <label for="brand">Brand Name</label><br />
                <input type="text" id="brand1" value="${redata.brandname}" placeholder="enter brand here" /><br>
                <br />
                </div>
                
                <div>
                  <label for="product">Product Name</label><br />
                <input
                  type="text"
                  id="product1"
                  value="${redata.productname}"
                  placeholder="enter product name here"
                /> <br>
                </div>
                
                <div>
                  <label for="price">Price</label><br />
                <input type="text" id="price1" value="${redata.price}" placeholder="enter price here"/>
                <br><br>
                </div>
                
                
              </div>
              <div>
                <center><button onclick="changedata('${redata.id}')">CHANGE DATA</button></center>
              </div>
      
              
      
    </section>
            `
    document.querySelector("#mainedit").innerHTML = data;

}

function changedata(id){
        let fdata =
        {
            srnumber:document.getElementById('srnumber1').value,
            brandname:document.getElementById('brand1').value,
            productname:document.getElementById('product1').value,
            price:document.getElementById('price1').value
        }
        fetch(`http://localhost:3000/product/${id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(fdata)
        })
        
    
}

function displayclose(){
  document.querySelector("#main").style.display = "none";
}
function displayclose1(){
  document.querySelector("#mainedit").style.display = "none";
}

function dashshow(){
  document.querySelector("#about").style.display ="none";
  document.querySelector("#prodata").style.display="none";
  document.querySelector("#table").style.display = "block";
  let a=document.querySelector("#bardash");
  a.style.backgroundColor = "white";
  a.style.color = "rgba(48, 142, 104, 0.986)";
  
}
function prodis(){
    document.querySelector("#table").style.display ="none";
    let storename = localStorage.getItem("name");
    document.querySelector("#prodata").innerHTML = "Welcome"+" "+storename;
    let a=document.querySelector("#barprofile");
  a.style.backgroundColor = "white";
  a.style.color = "rgba(48, 142, 104, 0.986)";
}
function productdis(){
    document.querySelector("#btnadd").style.display = "block";
    document.querySelector("#table1").style.display ="none";
    let a=document.querySelector("#barproduct");
  a.style.backgroundColor = "white";
  a.style.color = "rgba(48, 142, 104, 0.986)";
    
}
function aboutdis(){
    document.querySelector("#prodata").style.display="none";
    document.querySelector("#table").style.display ="none";
    document.querySelector("#about").style.display ="block";
    let a=document.querySelector("#barabout");
  a.style.backgroundColor = "white";
  a.style.color = "rgba(48, 142, 104, 0.986)";
}
function helpdis(){
  document.querySelector("#about").style.display ="none";
  document.querySelector("#prodata").style.display="none";
  document.querySelector("#table").style.display ="none";
  document.querySelector("#help").style.display ="block";
  let a=document.querySelector("#barhelp");
  a.style.backgroundColor = "white";
  a.style.color = "rgba(48, 142, 104, 0.986)";
}