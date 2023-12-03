import { Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/Button";

function App() {
  return (
    <>
      <div className="flex flex-col items-center gap-y-2 justify-center py-4">
        <h1 className="text-center text-3xl font-medium">React starter kit</h1>
        <Button>Go to hell</Button>
      </div>

      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    </>
  );
}

export default App;
