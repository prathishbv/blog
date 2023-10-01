import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import Category from "./components/Category";
import Layout from "./hocs/Layout";

function App() {
  
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/category/:id" element={<Category />} exact/>
            <Route path='/blog/:id' element={<BlogDetail/>} exact />
            {/* <Route exact path='/blog/:id' component={BlogDetail} /> */}
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;