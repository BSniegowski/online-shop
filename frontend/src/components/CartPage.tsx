import useLocalStorageState from 'use-local-storage'
import {Box, Button, List, ListItem} from "@mui/material";
import {useEffect, useState} from "react";
import {IntegerInput} from "./IntegerInput.tsx";

export const CartPage = () => {
  const [cart, ] = useLocalStorageState('cart', {'test': 1})
  const [stock, setStock] = useState([{}])

  useEffect(() => {
    fetch('http://localhost:8000/api/stock')
      .then(response => response.json())
      .then(data => {
        setStock(data);
      })
      .catch(error => console.error('Error fetching entries:', error));
  }, []);


  return (
    <div>
      <Box>
        <List>
          {stock.map(product => {
            const cartQuantity = cart[product.type]
            return Number.isInteger(cartQuantity) ? (
              <ListItem key={product.type}>
                <p>{product.type}: </p>
                <IntegerInput maxQuantity={product.quantity} productName={product.type}/>
              </ListItem>
            ) : null
          })}
        </List>
        <Button type="submit" variant="contained" href="http://localhost:3000/deliveryAndPaymentMethod">Dostawa i płatność</Button>
      </Box>
    </div>
  )
}