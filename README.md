⭐⭐⭐ Most Important Information ⭐⭐⭐
For installing node_modules folder with react and react-dom
Use this command ===> npm install react react-dom

Namaste React 🚀

⭐Parcel Package features⭐
( Read Documentation Of Parcel : https://parceljs.org/docs/ )
( Read Documentation Of Babel : https://babeljs.io/ )

- Dev Build features
- Providing Local Server
- HMR - Hot Module Replacement ( Auto Refreshing webpage )
- Uses File watching algorithm ( Written in C++ )
- Caching Of Data ( For faster building execution )
- Image Optimisation For faster loading
- Minification of file
- Bundling of file ( Cleaning the code )
- Compression & Optimization of file done for Production
- Error handling in best way for better accuracy

⭐List and keys⭐
Read documentation : https://legacy.reactjs.org/docs/lists-and-keys.html

⭐TWO TYPES OF import / export in react⭐

1. Default import / export done like this

step 1 -> export default Component/variable/data; ( This can done only once )
step 2 -> import Component/variable/data from "path";

2. Named import / export done like this

step 1 -> export let/const Component/variable; ( This can done many times in one file)
step 2 -> import { Component/variable/data } from "path";

⭐React Hooks Functions⭐ ( Normal JS utility Functions written by Facebook Engineers)

1.  useState()
    This useState hooks when local state variable data updates. React re-renders the component and UI gets updated with reconcilation cycle which follows diff algorithm for optimized render cycle of component

2.  useEffect() and many more
     1st case :- When there is NO any Dependency array exist in useEffect hooks then it will going to execute everytime whenever component of that hook will going to re-render
     E.g.
    useEffect(()=>{
    console.log("Use Effect called")
    }) 

         2nd case :- When there is EMPTY Dependency array exist in useEffect hooks then it will going to execute on INITIAL RENDER of Component whenever component of that hook will going to do first render of that component it will going to execute this hook call back function only once after the render of its own component at first
         E.g.
        useEffect(()=>{
        	console.log("Use Effect called")
        },[])        

         3rd case :- When there is [loginBtn] Dependency array exist in useEffect hooks then it will going to execute callback func only when there is Updation of variable loginBtn of that Component. So, indirectly it depends on the variable updation for the execution of callback func which is in useEffect hook

        useEffect(()=>{
        	console.log("Use Effect called")
        },[loginBtn])


⭐Read Documentation : Reconcilation Algorithm ( React Fiber Architecture )⭐
Documentation Link : https://github.com/acdlite/react-fiber-architecture
