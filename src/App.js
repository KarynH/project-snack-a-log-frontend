import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/snacks" element={<Index />} />
            <Route path="/snacks/new" element={<New />} />
            <Route path="/snacks/:id" element={<Show />} />
            <Route path="/snacks/:id/edit" element={<Edit />} />
          </Routes>
          <footer className="photo-credits"><a href="https://www.freepik.com/free-photo/top-view-citrus-fruits-as-pineapple-kiwi-orange-tangerine-slices-kumquat-with-bread-slices-tray-jam-bowl-around-trivet-black-background_26173705.htm#query=food%20black%20background&position=4&from_view=keyword">Image by stockking</a> on Freepik</footer>

        </main>
      </Router>
    </div>
  );
}

export default App;
