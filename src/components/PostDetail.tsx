import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Typography, Paper, Box, Chip, Stack } from "@mui/material";
import type { Post, User } from "../types/Post";

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await axios.get<Post>(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPost(postResponse.data);

        const userResponse = await axios.get<User>(
          `https://jsonplaceholder.typicode.com/users/${postResponse.data.userId}`
        );
        setUser(userResponse.data);
      } catch (err) {
        setError("Erro ao carregar dados");
        console.error("Error:", err);
      }
    };

    fetchData();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!post || !user) return null; // Retorna vazio enquanto carrega

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {post.body}
      </Typography>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>
          Autor do Post
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" mb={2}>
          <Chip label={`ID: ${user.id}`} />
          <Typography variant="subtitle1">
            <strong>Nome:</strong> {user.name}
          </Typography>
        </Stack>
        <Typography variant="body2">
          <strong>Username:</strong> {user.username}
        </Typography>
        <Typography variant="body2">
          <strong>Email:</strong> {user.email}
        </Typography>
        <Typography variant="body2">
          <strong>Telefone:</strong> {user.phone}
        </Typography>
        <Typography variant="body2">
          <strong>Website:</strong> {user.website}
        </Typography>
      </Box>
    </Paper>
  );
};

export default PostDetail;
