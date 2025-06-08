import PostDetail from "../components/PostDetail";
import { Typography, Box } from "@mui/material";

const PostDetailPage = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Detalhes do Post
      </Typography>
      <PostDetail />
    </Box>
  );
};

export default PostDetailPage;
