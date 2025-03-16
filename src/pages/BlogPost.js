import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2"; // Correct import for Grid2
import BlogCard from "../components/BlogCard"; // Ensure this component exists

const blogPosts = [
    { id: 1, title: "First Post", content: "This is the first news post." },
    { id: 2, title: "Second Post", content: "Another exciting update!" },
    { id: 3, title: "Third Post", content: "Something interesting happened." },
    { id: 4, title: "Fourth Post", content: "More news for you!" },
];

const BlogPost = () => {
    return (
        <Container maxWidth="md" sx={{ position: "relative", py: 4 }}>
            {/* Page Title */}
            <Box sx={{ textAlign: "center", mb: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Události
                </Typography>
            </Box>

            {/* Vertical timeline line */}
            <Box
                sx={{
                    position: "absolute",
                    top: "120px", // Start below title
                    left: "50%",
                    width: "2px",
                    height: "calc(100% - 120px)", // Avoid title overlap
                    backgroundColor: "#ccc",
                    transform: "translateX(-50%)",
                }}
            />

            {/* Timeline Grid */}
            <Grid2 container spacing={4}>
                {blogPosts.map((post, index) => (
                    <Grid2
                        key={post.id}
                        size={{ xs: 12 }}  // Full-width on all screen sizes
                        sx={{
                            display: "flex",
                            justifyContent: index % 2 === 0 ? "flex-start" : "flex-end", // Alternating direction
                            alignItems: "center",
                            position: "relative", // Ensures the timeline line is relative to each post
                        }}
                    >
                        <BlogCard title={post.title} content={post.content} />
                    </Grid2>
                ))}
            </Grid2>


        </Container>
    );
};

export default BlogPost;
