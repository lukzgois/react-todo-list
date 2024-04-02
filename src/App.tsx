import "./index.css";
import Header from "./components/atoms/Header";
import TodoAdd from "./components/molecules/TodoAdd";

function App() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="w-[640px] mx-auto pt-4 px-2">
        <Header className="mb-4 text-center">Tasks</Header>

        <TodoAdd />
      </div>
    </div>
  );
}

export default App;
