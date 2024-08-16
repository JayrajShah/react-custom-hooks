# React Custom Hooks

Make your react flow easy

## useDebug

Logs to console only when there's a search parameter _*debug=true*_.

No dependencies used.

```javascript
import useDebug from "./useDebug";

const Home = () => {
  const logger = useDebug();

  useEffect(() => {
    // Some API called

    // Only logs when 'debug=true' in search parameters
    // http://localhost:5173/?debug=true#/home
    // http://localhost:5173/home?debug=true
    logger("api called", { message: "api works" });
  }, [logger]);

  return <p>This is home page</p>;
};
```

## Author

[@JayrajShah](https://github.com/JayrajShah)
