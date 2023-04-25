import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ItemCard = ({ item }) => {
  return (
    <Card sx={{ width: 345, height: 420 }}>
      <CardMedia sx={{ height: 250 }} image={item.img} title={item.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="primary">
          <span> $ {item.price} </span>
        </Typography>
      </CardContent>

      <CardActions
        style={{
          height: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        }}
      >
        <Link to={`/item/${item.id}`}>
          <Button variant="contained" size="small" color="success">
            Ver
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
