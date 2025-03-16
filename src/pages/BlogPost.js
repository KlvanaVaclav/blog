import React, { useEffect } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { useAuth } from "../context/AuthContext"; // Import the useAuth hook
import { useBlog } from "../context/BlogContext"; // Import the useBlog hook
import BlogCard from "../components/BlogCard";

const BlogPost = () => {
    const { isLoggedIn } = useAuth(); // Access the logged-in state from context
    const { blogPosts, handleAddPost, handleDeletePost, handleUpdatePost } = useBlog(); // Access blogPosts and necessary functions from BlogContext

    // Fetch blog posts from context when component mounts (done in BlogContext)
    useEffect(() => {
        // You could add any logic if you want to perform something on component mount
    }, []);

    // Handler for adding a new post
    const handleAddNewPost = () => {
        const newPost = {
            id: Date.now(), // Use current timestamp as a unique ID
            title: "New Post", // Placeholder title
            content: "Content of the new post.", // Example content
        };

        handleAddPost(newPost); // Use context function to add the new post
    };

    // Handler for deleting a post
    const handleDelete = (id) => {
        handleDeletePost(id); // Call delete function from context
    };

    // Handler for updating a post
    const handleUpdate = (post) => {
        // Logic to update a post (could show a modal or form to edit post)
        const updatedPost = { ...post, title: "Updated title" }; // Example of an update
        handleUpdatePost(updatedPost); // Call update function from context
    };

    return (
        <Container maxWidth="md" sx={{ position: "relative", py: 4 }}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Události
                </Typography>
            </Box>

            <Box
                sx={{
                    position: "absolute",
                    top: "120px",
                    left: "50%",
                    width: "2px",
                    height: isLoggedIn
                        ? "calc(100% - 120px - 5em)" // Full height when logged in
                        : "calc(100% - 120px)", // Adjusted height when not logged in
                    backgroundColor: "#ccc",
                    transform: "translateX(-50%)",
                }}
            />

            <Grid2 container spacing={4}>
                {blogPosts.map((post, index) => (
                    <Grid2
                        key={post.id}
                        size={{ xs: 12 }}
                        sx={{
                            display: "flex",
                            justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                            alignItems: "center",
                            position: "relative",
                        }}
                    >
                        <BlogCard title={post.title} content={post.content}>
                            {isLoggedIn && (
                                <Box>
                                    {/* Buttons to edit and delete posts */}
                                    <Button onClick={() => handleUpdate(post)} sx={{ mr: 2 }}>
                                        Edit
                                    </Button>
                                    <Button onClick={() => handleDelete(post.id)} color="error">
                                        Delete
                                    </Button>
                                </Box>
                            )}
                        </BlogCard>
                    </Grid2>
                ))}
            </Grid2>

            {/* Show Add Post button only if the user is logged in */}
            {isLoggedIn && (
                <Box sx={{ textAlign: "center", mt: 4, marginTop: "3em" }}>
                    <Button variant="contained" onClick={handleAddNewPost}>
                        Add New Post
                    </Button>
                </Box>
            )}
        </Container>
    );
};

export default BlogPost;
