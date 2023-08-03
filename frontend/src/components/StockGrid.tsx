import {useEffect, useState} from "react";
import {Button, Grid, Paper, Typography} from "@mui/material";

export const StockGrid = () => {

  const [productsList, setProductsList] = useState([{}]);

  useEffect(() => {
    fetch('http://localhost:8000/api/stock')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProductsList(data);
      })
      .catch(error => console.error('Error fetching entries:', error));
  }, [])

  return (
    <Grid container spacing={3}>
      {productsList.map((product) => (
        <Grid key={product.type} item xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={3} style={{padding: '1rem'}}>
            <Typography variant="h6">
              {product.type}
              <img
                src={`http://localhost:8000/images/stock/${product.type}.jpg`}
                style={{maxWidth: '100%', maxHeight: '100%'}}
                alt="..."
              />
              <Button variant="contained" href={`http://localhost:3000/stock/${product.type}`}>Dodaj do koszyka</Button>
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}