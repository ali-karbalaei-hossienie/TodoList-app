import "./TodoFooter.css";

const TodoFooter = ({ Todos }) => {
  return (
    <footer className="footer">
      <div>
        <span>{Todos.length} </span>کل
      </div>
      <div>
        <span>{Todos.filter((todo) => todo.isComplete).length} </span>
        انجام شده ها
      </div>
      <div>
        <span>{Todos.filter((todo) => !todo.isComplete).length} </span>
        انجام نشده ها
      </div>
    </footer>
  );
};

export default TodoFooter;
