export const loadPost = () => {
    return (dispatch) => {
        dispatch({ type: "post/start"});
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
            dispatch({
                type: "post/item",
                payload: json,
            });
        });
    };
};