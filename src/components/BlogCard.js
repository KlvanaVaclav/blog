import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const BlogCard = ({ title, content, image }) => {
    return (
        <Card sx={{ maxWidth: 400 }}>
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
                <Typography variant="body2">{content}</Typography>
            </CardContent>
        </Card>
    );
};

export default BlogCard;
