let quantityTag=document.getElementById('display-quantity');   
 let currentQuantity = +quantityTag.innerText;                   
 const adder = document.getElementById('add');                   
 const remover = document.getElementById('remove');                
 adder.addEventListener('click',()=>{quantityControl('add')});     
 remover.addEventListener('click', ()=>{quantityControl('minus')});    
 
const hamburger= document.getElementById('hambars');  
const dropMenu= document.getElementById('drop-menu');
const closeHamburger=document.getElementById('hamclose');
const pictureList = document.getElementsByClassName('product-image');
const numberOfPictures = pictureList.length;   
const movePixLeft = document.getElementById('left');   
const movePixRight = document.getElementById('right');
const imageParentDiv = document.getElementById('imageOwnDiv');
const productName = document.getElementById('product-name') 
const productPrice = document.getElementById('price');      
const colorDescription = document.getElementById('color-name');
const colorBtn1 = document.getElementById('color1');    
const colorBtn2 = document.getElementById('color2');  
const bagQuantity = document.getElementById('quantity-top');


var sizeInfo = "";
let OnDisplayNow = "";
let movementTracker = 0;        
let noOfItems=0;

movePixLeft.addEventListener('click',()=>{changePicture('L')}); 
movePixRight.addEventListener('click',()=>{changePicture('R')});



if(OnDisplayNow===""){
pictureList[movementTracker].style.display='block';
OnDisplayNow = "green";
}
else if(OnDisplayNow==="green"){loadBluePolka();pictureList[movementTracker].style.display='block';
}
else{loadRedPolka();pictureList[movementTracker].style.display='block';
}



BluePolka={                                                     
    banner: "polka dots summer dress",
    images:['images/blue_polka_dots_with_redbelt.jpg' , 'images/blue_polka_dots.jpg'],
    price:"50",
    className:"product-image",
    productInfo: "Color: blue",
    color:	"#0000FF"
}
RedPolka={                                                      
    banner: "polka dots summer dress",
    images: ['images/pink_polka_dots_without_belts.jpg', 'images/red_polka_dots.png'],
    price:"50",
    className:"product-image",
    productInfo:"color:red",
    color:	"#FF0000"
}
let loadBluePolka=()=>{                                        
   
    deleteCurrentImages("product-image");
    for(let i=BluePolka.images.length; i>=0;i--){
    let newImage=document.createElement("img");
    newImage.src=BluePolka.images[i];
    newImage.className=BluePolka.className;
    imageParentDiv.insertBefore(newImage,pictureList[0])
    }
    pictureList[movementTracker].style.display='block';
    productName.innerHTML = BluePolka.banner;
    productPrice.innerHTML = BluePolka.price;
    colorDescription.innerHTML = BluePolka.productInfo;
    OnDisplayNow = "green";
}

let loadRedPolka=()=>{                                     
    console.log('blue');
    deleteCurrentImages("product-image");
    for(let i=RedPolka.images.length-1; i>=0;i--){
    let newImage=document.createElement("img");
    newImage.src=RedPolka.images[i];
    newImage.className=BluePolka.className;
    console.log(newImage);
    imageParentDiv.insertBefore(newImage,pictureList[0])
    }
    pictureList[movementTracker].style.display='block';
    productName.innerHTML = RedPolka.banner;
    productPrice.innerHTML = RedPolka.price;
    colorDescription.innerHTML = RedPolka.productInfo;
    OnDisplayNow = "blue";
}

colorBtn1.addEventListener("click",(e)=>{  loadBluePolka();}); 
colorBtn2.addEventListener("click",(e)=>{ loadRedPolka();});

let deleteCurrentImages=(imageClassName)=>{
    const elements = document.getElementsByClassName(imageClassName);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
      
    }
}

const hamburgerOpen=()=>{           
    
    dropMenu.style.display='block';
    hamburger.style.display = 'none';
    closeHamburger.style.display='block'
}
const hamburgerClose=()=>{         
    dropMenu.style.display='none';
    hamburger.style.display = 'block';
    closeHamburger.style.display='none';
}
hamburger.addEventListener('click', (e)=>{hamburgerOpen()});        
closeHamburger.addEventListener('click', (e)=>{hamburgerClose()});


const changePicture=(shiftWhere)=>{              

    let picturesInObject;

    if(shiftWhere==='L'){
       movementTracker--;
       if(movementTracker<0){movementTracker=numberOfPictures-1;}
       else if (movementTracker>=numberOfPictures){ movementTracker=0;}
    }
    else if(shiftWhere==='R'){
        movementTracker++;
        if(movementTracker<0){movementTracker=numberOfPictures-1;}
        else if (movementTracker>=numberOfPictures){ movementTracker=0;}
     }
    Array.from(pictureList).forEach((picture) => {    
        console.log(picture);
        console.log(movementTracker);
        picture.style.display = "none";
    });
    Array.from(pictureList)[movementTracker].style.display='block';

}

const sizehandler=()=>{
    document.querySelectorAll('div.size').forEach(element => {  
        element.addEventListener('click', (e)=>{
           document.querySelectorAll('div.size').forEach(element=>{ element.style.border='none'});
           e.target.style.border='solid 1px blue'
           sizeInfo= e.target.innerText
        })
    });
}
sizehandler();


function quantityControl(operator){          
    if (operator==='minus' && currentQuantity>1) {
        console.log('minus clicked')
        currentQuantity--;
       quantityTag.innerHTML=currentQuantity;
    }
    else if(operator === 'add' && currentQuantity<10){
        currentQuantity++;
        quantityTag.innerHTML=currentQuantity; 
    }   
}


function couponCodeGenerator(){   
    let couponCodeSaverArray = [];
    let hexRef = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','0'];
    for(let i = 0; i < 5; i++){
        let thisIndex = Math.floor((Math.random() * 15) + 1);
        couponCodeSaverArray.push(hexRef[thisIndex]);
    }
    return couponCodeSaverArray.join("");
}


function generateOrderNumber(){          
    let orderNumberArray = [];
    let Ref1 = ['A','B','C','D','E','F'];
    let Ref2 = ['0',1,2,3,4,5,6,7,8,9]
    for(let i = 0; i < 3; i++){
        let thisIndex = Math.floor((Math.random() * 2) + 1);
        orderNumberArray.push(Ref1[thisIndex]);
    }
    for(let i = 0; i < 5; i++){
        let thisIndex = Math.floor((Math.random() * 3) + 1);
        orderNumberArray.push(Ref2[thisIndex]);
    }
    return orderNumberArray.join("");
}




document.getElementById('add-to-bag').addEventListener('click',(e)=>{ orderHandler(); })

function orderHandler(){
    
    if (!localStorage.getItem("new_order")){
        const newOrderNumber= generateOrderNumber();
        const coupon= couponCodeGenerator();
        let thisUnitPrice = +productPrice.innerText.match(/\d+/g,'')
        let thisQuantity = +quantityTag.innerHTML;
       
        let thisSubTotal= +thisUnitPrice * thisQuantity;
        let thisDiscount = thisSubTotal/2;
       
        new_order={
            order_number: newOrderNumber,
            discount_coupon: coupon,
            counter:1,
            subTotal: +thisSubTotal ,
            discounted: thisDiscount,
            item1:{product_name: productName.innerText,
                  product_unit_price:productPrice.innerText,
                  product_color: colorDescription.innerText,
                  quantity:quantityTag.innerText,
                  size:sizeInfo,
                  urlOfImage:imageLink(),
                 }
        }
        localStorage.setItem("new_order", JSON.stringify(new_order));
        let retrieveQuantity = new_order.item1.quantity;
        bagQuantity.innerText=retrieveQuantity;

    }
    else {
        let jsonString=localStorage.getItem("new_order");
        let new_order = JSON.parse(jsonString);
        new_order.counter = +new_order.counter + 1;
        console.log(new_order.counter + 'add');
        let serial='item'+ new_order.counter.toString();
       
        new_order[serial]={product_name: productName.innerText,
                          product_unit_price:productPrice.innerText,
                          product_color: colorDescription.innerText,
                          urlOfImage:imageLink(),
                          size:sizeInfo,
                          quantity:quantityTag.innerText, } 
             new_order.subTotal= cartSubTotal(new_order);
             console.log(new_order);
             new_order.discounted = cartSubTotal(new_order)/2         
            localStorage.clear();
            localStorage.setItem("new_order", JSON.stringify(new_order));        
            newQuantity = +bagQuantity.innerText + (+new_order[serial].quantity);
            bagQuantity.innerText=newQuantity;
            popUpHandler(new_order);
            console.log(new_order);
    }



    function imageLink(){             
        let theUrl;
        if(OnDisplayNow==='green'){
            theUrl=BluePolka.images[1];
        }
        else{
            theUrl=RedPolka.images[1];
        }
        return theUrl;
    }

    
   
       
}


let cartSubTotal=(new_order)=>{   
        
        console.log(new_order);
        let subTotal=0;
         let quantitySoFar=new_order.counter;
         console.log(quantitySoFar+'quan')

        let objName = 'item';
        for(let i=1; i <= +quantitySoFar; i++ ){
            let thisObjName= objName + quantitySoFar;
            let price=+new_order[thisObjName].product_unit_price.match(/\d+/g)*(+new_order[thisObjName].quantity);
            console.log(i);
           
            subTotal=subTotal+(price); 
            
        }
        console.log(subTotal)
      
        return subTotal;       
}







const mediaQuery = '(min-width: 700px)';                    
const mediaQueryList = window.matchMedia(mediaQuery);

mediaQueryList.addEventListener('change', event => {
    console.log(window.innerWidth);
  if (event.matches) {
    const style = document.getElementById('mainstyle');
    style.setAttribute('href','responsive.css');
  } else {
    const style = document.getElementById('mainstyle');
    style.setAttribute('href','style.css');  
  }
})



function popUpHandler(new_order){                  
    let pop = document.getElementById('pop_up');
        let index = new_order.counter;
        let base = 'item'+ index;
        document.getElementById('sumItemName').innerText = new_order[base].product_name;
        document.getElementById('unit_price').innerText = new_order[base].product_unit_price;
        document.getElementById('sumColor').innerText = new_order[base].product_color;
        document.getElementById('sumQty').innerText = new_order[base].quantity;
        orderCost = +new_order[base].quantity * (+new_order[base].product_unit_price.match(/\d+/g,''));
        document.getElementById('sCost').innerText = orderCost;
        document.getElementById('s_Total').innerText = new_order.subTotal;
        document.getElementById('imagesum').src = new_order[base].urlOfImage;
        console.log(new_order.urlOfImage)

        pop.style.display="block";


}

function popClose(){
    document.getElementById('pop_up').style.display = ('none');
}
