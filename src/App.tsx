import { CssBaseline, Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostsPage from "./pages/PostsPage";
import PostDetailPage from "./pages/PostDetailPage";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/post" element={<PostsPage />} />
          <Route path="/dados/:id" element={<PostDetailPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
