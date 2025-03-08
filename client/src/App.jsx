import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllToDoPage from "./pages/AllToDoPage";
import EditToDoPage from "./pages/EditToDoPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/all-todo' element={<AllToDoPage />} />
          <Route exact path='/update-todo/:id' element={<EditToDoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
