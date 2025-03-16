import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material"; // Removed the unused 'Button' import

const BlogCard = ({ title, content, image, children }) => {
    return (
        <Card sx={{ maxWidth: 400, marginBottom: 2 }}>
            {/* Render image only if provided */}
            {image && (
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt={title}
                    sx={{ objectFit: "cover" }}
                />
            )}
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" paragraph>
                    {content}
                </Typography>
                {/* Render children (buttons) if provided */}
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    {children}
                </Box>
            </CardContent>
        </Card>
    );
};

export default BlogCard;
