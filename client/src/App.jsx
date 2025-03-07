import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllToDoPage from "./pages/AllToDoPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/all-todo' element={<AllToDoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
