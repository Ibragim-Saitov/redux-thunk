import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPost } from "./Action";

function App() {

  const post = useSelector(state => state.post)

  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPost());
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {loading 
      ? "loading..."
      : post.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
}

export default App;
