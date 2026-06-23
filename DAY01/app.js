// function createElement(tag, attributes, children) {

//     const element = document.createElement(tag);
//     element.textContent = children;

//        for (const key in attributes) {

//         if (key === 'style') {
//             Object.assign(element.style, attributes.style);
//         } else {
//             element[key] = attributes[key];
//         }

//     } 

//     return element;
// }

// const element1 = createElement("h1",{className:"element",id:"first",style:{fontsize:"30px",backgroundColor:"orange",color:"white"}},"Hello Diya Joshi")
// const element2 = createElement('h2',{className:"element",id:"second",style:{fontsize:"30px",backgroundColor:"blue",color:"yellow"}},"Diya you are best!!");
// const element1 = document.createElement('h1');

// element1.textContent = "Hello Diya Joshi";
// element1.className = 'element';
// element1.id='first';
// element1.style.fontSize='30px';
// element1.style.backgroundColor="orange";
// element1.style.color="white"; 

// const React ={
//  createElement: function(tag, attributes, children) {

//     const element = document.createElement(tag);
//     element.textContent = children;

//        for (const key in attributes) {

//         if (key === 'style') {
//             Object.assign(element.style, attributes.style);
//         } else {
//             element[key] = attributes[key];
//         }

//     } 

//     return element;
// }
// }
// const ReactDOM = {
//     render: function(child,parent){
//         parent.append(child);

//     }
// }
const element1 = React.createElement("h1",{className:"element",id:"first",style:{fontsize:"30px",backgroundColor:"orange",color:"white"}},"Hello Diya Joshi")
const element2 = React.createElement('h2',{className:"element",id:"second",style:{fontsize:"30px",backgroundColor:"blue",color:"yellow"}},"Diya you are best!!");

const root = document.getElementById('root');
// root.append(element1);
// root.append(element2);


ReactDOM.render(element1,root);
ReactDOM.render(element2,root);
