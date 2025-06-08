import { useState, useEffect } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, Divider, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { Post } from "../types/Post";
import React from "react";

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        setError("Erro ao carregar posts");
        setLoading(false);
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <List>
      {posts.map((post) => (
        <React.Fragment key={post.id}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={
                <Link
                  component={RouterLink}
                  to={`/dados/${post.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.title}
                </Link>
              }
              secondary={post.body}
            />
          </ListItem>
          <Divider component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

export default PostList;
