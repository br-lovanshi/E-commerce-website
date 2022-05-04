
var mensArr=[
    {
    image:"https://m.media-amazon.com/images/I/617HP+5wgWL._AC_UL320_.jpg",
    title:"Pause",
    desc:"Men Cotton Long Sleeves Shrug",
    price:"359",
    pricestrike:"1499",
    discount:"-76%",
     },
    {
        image:"https://m.media-amazon.com/images/I/51mP0GQRo+L._AC_UL320_.jpg",
        title:"JUBINATION",
        desc:"Men Wool Sleeveless Sweater Pack Of 1",
        price: "799",
        pricestrike:"1499",
        discount:"-47%",
    }];

mensArr.forEach(function(elem){

    var box=document.createElement("div");

    var Mimage=document.createElement("img")
    Mimage.src=elem.image

    var p1=document.createElement("h1");
    p1.innerText=elem.title

    var p2=document.createElement("p");
    p2.innerText=elem.desc

    var p3=document.createElement("h1");
    p3.innerText=elem.price

   

    box.append(Mimage,p1,p2,p3)
    document.querySelector("#bigbox").append(box);

    
})
