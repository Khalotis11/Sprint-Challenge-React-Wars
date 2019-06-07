# Answers

1.  What is React JS and what problems does it try and solve?

 - React JS is a JavaScript libary created by Facebook. It's a tool for building UIs that can      accept and react to data. It's meant to be a flexible library and UIs are made up of smaller    "components" rendered onto a virtual DOM. The virtual DOM is meant to make DOM manipulation     less error prone and increase performance by only re-rendering what has changed.

2.  What does it mean to _think_ in react?

 - When you think in React you are thinking in components. You break your project into smaller     pieces and look for places where you can make re-usable components. 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/    Presentational component.

  - A class component can be stateless or stateful. Stateful means it can hold data and           methods. This data can be passed down to child components through props. They use class       syntax.

  - Functional components are stateless and use function syntax. They can't hold data in state   like a class component can but they can accept 'props' allowing you to pass data from parent  components to child functional components.

4.  Describe state.

  - State is a way a class component can hold data. A class can hold a variable called 'state'   where data is stored. State is immutable but can be changed and manipulated with setState.   When state is changed the part of your page using that state will automatically re-render.

5.  Describe props.

   - props can be passed into a functional component to allow it to get data from a parent component or make it re-usable. When you call props in your functional component you'll need to define props where you render that component but this means components can be re-used since you can define props every place you decide to render that component.
