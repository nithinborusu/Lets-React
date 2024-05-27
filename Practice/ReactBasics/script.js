
const position = document.querySelector('.root'); //where
//what
const element =(
<div>
    <h1>Hi This is Nithin</h1>
    <p>fashion designer</p>

</div>
);
ReactDOM.render(element,position);

const secondPostion= document.querySelector('.second-root');

const header =(
    <header>
        Welcome To REact Js
    </header>
);

const main=(
    <main>
        <p>React is most javascript Library used to create User Interfaces </p>
        <p>It is developed by facebook in the year 2014</p>

    </main>
);

const footer=(
    <footer>
        Copyright by @Facebook 2023
    </footer>
);

const app =(
    <>
    {header} {main} {footer}
    </>
);
ReactDOM.render(app,secondPostion);

// Adding Styles to the website
const third = document.querySelector('.third-root');

const section = (
    <section style={{backgroundColor:"black",border:'2px solid red',color:"white",marginTop:"10px", padding:'30px'}}>
        <pra>
        This section is used to teach how to style in jsx
        In Jsx the css is added as key value pair style = (key:value)
        In Jsx CSS Properties should follow Camel Case.
        </pra>
    </section>
);

/// Store the Css properties inside an variable
const css ={
    border:"10px solid red",
    color:'black',
    fontSize:'20px',
    marginTop:'20px',
    padding:'5px 10px'
}

const heading =(
    <header style={css}>
    <h1 style={{color:'yellow',textAlign:'center',backgroundColor:"black",fontFamily:'Helvetica'}}>
        HELLO WELCOME TO REACT WEBSITE
    </h1>
    </header>
)

const info=(
  <section className='lorem' style={{margin:'10px 35%'}}> 
        <p>cdjcwjchuich cwkchwiuc cieciuch</p>
        <p>cdjcwjchuich cwkchwiuc cieciuch</p>
        <p>cdjcwjchuich cwkchwiuc cieciuch</p>
        <p>cdjcwjchuich cwkchwiuc cieciuch</p>
        <p>cdjcwjchuich cwkchwiuc cieciuch</p>
        <p>cdjcwjchuich cwkchwiuc cieciuch</p>

  </section>
)

const app2=(
    <div>
        {section} {heading} {info}
    </div>
)

ReactDOM.render(app2,third);