import styles from "./todoItem.module.css";
export default function TodoItems({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("delte button click for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    
    setTodos(todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    ));
    
  }
  const className = item.done ? styles.completed : " ";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>{" "}
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
