
import React from "react"
import ReactDOM from "react-dom/client"

// Jsx (transpiled before  it reaches js)-Handled by parcel -babel

// jsx=> Babel transpiler it React.createElement => Reactelement-Js Object => HTMLElement(render)

//React Element
// const heading = (<h1 className="head">
//     Namaste From jsx
//     </h1>
//     );

// const root = ReactDOM.createRoot(document.querySelector(".root"));
// root.render(heading);


//React component
//React Functional Component


const HeadingComponent1 =()=>{

    return <h1>namaste from functinal Component</h1>
}
//another way
// component composition
// Passing one component to another component is known as "Component Composition in React"
const HeadingComponent =()=> (
    <div className="container">
         <Title/> 
         <h1> namaste from functinal component </h1>
    </div>
   

);
const Title = ()=>(
    <h1>noicee hii</h1>
);
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<HeadingComponent/>);

// * Note: <Title /> (or) <Title></Title> are both treated as same in JSX

//* write  js in jsx

const name = "nithin";

const ele = <span>REact-</span>;
const title = (
    <h1>React Element</h1>
);
const Pack  =()=>{
    return (
        <div className="block">
            {name}
            <h2>{name}</h2>
            <br/>
            {20+4}
            <h1>{ele}js inside jsx</h1>
            {title}
        </div>
    );
};

const root2 = ReactDOM.createRoot(document.querySelector('.root2'));

// root2.render(<Pack></Pack>)
root2.render(Pack());
// * Note: JSX Element must have only one Parent Element
