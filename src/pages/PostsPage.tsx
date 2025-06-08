import PostList from "../components/PostList";
import { Typography, Box } from "@mui/material";

const PostsPage = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Lista de Posts
      </Typography>
      <PostList />
    </Box>
  );
};

export default PostsPage;
