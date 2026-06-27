
// const element = React.createElement("h1",{id:"title"},"HEllo Diya");

// const element2 = React.createElement("div",null,
//     React.createElement("h1",null,"HEllo"),
//     React.createElement("h2",null,"Hi"));
//its not a good approach to write this line react.creatElement everytime we need to add new element so ...


//JSX introduced i.e Javascript XML: Look alike HTML, allows to write html in js.

// const element =<h1 id="title">HEllo diya </h1>;
// Abhi yeh allow toh krega html likhna but create nhii hoga for that babel introduced..
//babel : JSX->React.createElement(), cdn lgao babel ka

// const element2 = <div>
//     <h1>HI</h1>
//     <h2>Hello</h2>
// </div>






// applying bracket is a good practice
// const element2 = (<div> 
//     <h1>HI</h1>
//     <h2>Hello</h2>
// </div>)






//REACT COMPONENT:

// function App(name){
//     return(
//         <h1>HEllo {name}</h1>
//     )
// }

// const a= App("Diya");



//text/element: js ke expression aap iske ander likh skte ha
//number, string, null, undefined,true, fase, array, object(error dega)
// const element = <h1>Hello{"Diya"}</h1>



const ab = {backgroundColor:"orange", color:"white"}
const element = <h1 id="title" className="first" style={ab}>Hello Diya Joshi</h1>


function App(props){
    return(
        <h1>Hello. {props.name}{props.age}</h1>
    )
}

// {
//  name: Diya,
//  age:22
//}


const element = <App name="Diya" age={22}></App> //wrapping up these into object called props,,, seems like tag name Element.create("App") App function
//ko call krna ha

const root = ReactDOM.createRoot(document.getElementById("root"));
// Root.render(element2);
root.render(element);
//App()
//<App></App>