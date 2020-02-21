# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

```
The main problem React solves is developing large projects that have dynamically changing data.  It makes DOM manipulation easier and helps control changing data.
```

1. What does it mean to think in react?

```
The way react is built helps you break your project into small reusable pieces (components).  Since data only goes from parents to children it also help data acquisition and manipulation to be done more logically.
```

1. Describe state.

```
State is the changeable data in the app.  State is set to the current values for the data, but all previous state values are also saved.  Since previous state is saved you are not allowed to manipulate the data, instead you make a copy of the data values and manipulate the copy so that the original state can remain the same.
```

1. Describe props.

```
Props are the properties of components.  They are the way data is passed from a parent component to a child component.
```

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

```
Side effects are things that affect something outside the scope of the executing function.  State and prop changes can be synced with a component with the react `useEffect` method.  The first parameter is a callback, the second is an array of state/props that are watched for changes so the effect knows when it should be triggered.
```
