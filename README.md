# Repo with all the concepts of React

# Build React app from scratch
 1. create and configure package.json using - npm init
 2. Install bundler (Parcel,Vite etc.)
 3. npm i react
 4. npm i react-dom
 5. import both React & ReactDOM in App.js
 6. For import and export specify that we are using module inside script tag - 
       <script type="module" src="./App.js"></script>
 7. create local server and run our app using - npx parcel index.html
 8. in package.json configure -> "scripts" : { "start": "parcel index.html" } 
       to simplify npx parcel index.html ---> npm start


# Parcel
- Dev build
- Local server
- HMR = Hot Module Replacement
- File watching algorithm - written in C++
- Caching - faster builds
- Image optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Diagnostics (Errors handling)
- Differential bundling - support older browsers
- HTTPs
- Tree shaking - remove unused code
- Code splitting
 refer parceljs.org documentation

 # Types of Exports/Imports
 1. Default exports (strictly one export) - 
        export default ComponentName
        import ComponentName from "filepath"
 2. Named exports (can be multiple exports)- 
        export const CONST_NAME
        import { CONST_NAME } from "filepath"

# Class Components Lifecycle
Whenever class component is called then the instance of that class is created
=> ComponentDidMount() is used to make API calls
Lifecycle of component is basically it's constructor() -> render() -> ComponentDidMount()
Mounting has 2 phases : 
       1. Render phase - constructor() -> render()
       2. Commit phase - React renders the DOM & then ComponentDidMount() is called
Ex : we have 2 childs in parent, then : 
1. Then the constructor of parent is executed
2. Then the render() of parent
3. the constructor of child1 is executed
4. Then the render() of child1
5. Child 2 constructor
6. Child 2 render
7. Child 1 ComponentDidMount()
8. Child 2 ComponentDidMount()
9. Parent ComponentDidMount(). 

here steps 1-6 are Render phase, 7-9 are Commit phase.
Refer - React lifecycle diagram for better understanding

# Redux Toolkit
1. Install @reduxjs/toolkit and react-redux
2. Build our store
3. Connect store to our app
4. Create Slice (cartSlice)
5. Dispatch (actions) with Reducers
6. Selector


# Testing (Developer)
1. Unit Testing
2. Integration Testing
3. End to End Testing - E2E Testing


# Setting up Testing in our App
- Install both React Testing Library and Jest
- To use Babel Install required dependencies of Jest
- Configure Babel using Babel.config.js
- Configure Parcel config file to disable default babel transpilation
- Configure Jest file - npx jest --init
- Install jsdom library
- Install @babel/preset-react & include it in babel config - to make JSX work in test cases
