# Sample React 18 app with automatic batching 

React 18 includes automatic batching, which means that state updates are grouped compared with v17 where not all updated were grouped (eg. state updates inside promises). [View React 17 example](https://github.com/loringabriel/react-17-batching)

```javascript
function App() {
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  
  console.log("Rendered => Total Renders: ", renderCount);

  const handleOnClickAsync = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
      setCount(count + 1);
      setLoading(false);
    });
  };
  return <button onClick={handleOnClickAsync}>Click me</button>
}
```

![CleanShot 2022-04-04 at 15 02 41](https://user-images.githubusercontent.com/28633412/161540006-8563ea56-6ffb-4465-afbe-8718db659595.gif)



