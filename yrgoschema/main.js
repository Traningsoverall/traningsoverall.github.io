console.log("alive");
let yrgourl = "https://web.skola24.se/timetable/timetable-viewer/studiumyrgo.skola24.se/Yrgo%20L%C3%A4rdomsgatan/";

let schemadiv = document.getElementById("schema");
schemadiv.innerHTML='<object id="schemaloader" type="text/html" data="'+yrgourl+'" ></object>';

// console.log(document.getElementsByTagName('input'));
document.getElementById("schemaloader").onload = (event) => { 
    // console.log(document.getElementsByTagName('input'));
    console.log("LOADED");
}

// fetch(yrgourl)
//   .then(res => res.text())
//   .then(html => {
//     const parser = new DOMParser();
//     const htmlDoc = parser.parseFromString(html, "text/html");
//     // console.log(htmlDoc);
//     // console.log(htmlDoc.querySelector('nova-widget'));
//     let novaWidget = htmlDoc.querySelector('nova-widget');
//     console.log(novaWidget);
//     novaWidget.onload=() => {console.log("widhet loaded")};
//     //[placeholder="Klass"]'))
//   })


// fetch(yrgourl)
//   .then((response) => response.text())
//   .then((text) => new DOMParser().parseFromString(text, "text/html"))
//   .then((dom) => {
    

//     console.log(dom.querySelector('input[placeholder="Klass"]'));
	

//   dom.getElementById("test"))
//   .then((test) => {
    // console.log(dom.getElementsByName("input"));
    //Do something with test.
//   });