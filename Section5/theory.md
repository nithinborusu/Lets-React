
## Theory 


## The Theory that i have learned in this section

## Q: What is the difference between `Named export`, `Default export`, and `* as export`?

- Named export - In named export, the function is exported as:
```
export <function>;
```
- and imported as:
```
import { <function> } from '..'; 
```
The function is exported inside {} to other modules.

-`Default`export: In default export the function is exported as:
```
export default <function>
```
and imported as:
```
import <function> from '...'
```
`* as export: *` as export is used to import the whole module as a component and access the components inside the module.

for example: We have a module ABC.js and some components inide of it and a file named XYZ.js where we want to import the components.
ABC.js:
```
export const Comp1 = () => {...}
export const Comp2 = () => {...}
export const Comp3 = () => {...}
```
in XYZ.js we'll import then as
```
import * as  Module from 'ABC.js'
```
Now we can use them JSX as:
```
<Module.Comp1 />
<Module.Comp2 />
<Module.Comp3 />
```
## Q:What is the importance of config.js file?
A:`config.js` file is used for the hard coded values used in our application. We can use it import a configuration in side any component without having to copy it over and over again.

## Q: What are React Hooks?
A:React Hooks are basically JavaScript functions which are provided by React. Hooks have some special capabilities that are useful for the development. like managing state, memory etc.

## Q:Why do we need useState Hook?
A: useState hook is used to maintain the state in our React application. It keeps track of the state changes. When a component is re-rendered it changes the state of our component.
