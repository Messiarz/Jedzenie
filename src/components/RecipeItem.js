import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const RecipeItem = ({ recipe, onSelect }) => (
  <Card 
    onClick={() => onSelect(recipe)} 
    sx={{ 
      cursor: 'not-allowed', 
      border: '3px solid green',
      padding: '10px',
      borderRadius: '5px' 
    }}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        alt={recipe.recipe.label}
        height="170"
        image={recipe.recipe.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {recipe.recipe.label}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default RecipeItem;
