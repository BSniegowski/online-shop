import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, InputAdornment, TextField} from "@mui/material";
import useLocalStorageState from "use-local-storage";

export const ProductPage = () => {
  const {productName} = useParams();
  const [maxQuantity, setMaxQuantity] = useState<number>(1);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const [cart, setCart] = useLocalStorageState('cart', {'test': 2});
  const [value, setValue] = useState('1')
  const [inputError, setInputError] = useState(false)


  useEffect(() => {
    fetch(`http://localhost:8000/api/stock/${productName}`)
      .then(response => response.json())
      .then(data => {
        setMaxQuantity(data);
      })
      .catch(error => console.error('Error fetching entries:', error))
  }, [productName])


  const handleAddToCart = (): void => {
    const intValue = parseInt(value)
    if (!intValue) {
      setInputError(true)
      return
    }
    const currentQuantity = Number.isInteger(cart[productName]) ? cart[productName] : 0;
    setCart((prevCart) => ({
      ...prevCart,
      [productName]: currentQuantity + intValue,
    }))
    setAddedToCart(true)
  }

  const handleInput = (event) => {
    const value = event.target.value
    if(value === '') {
      setValue('')
    }
    const intValue = parseInt(value)
    if (intValue && intValue >= 1 && intValue <= maxQuantity) {
      setInputError(false)
      setValue(String(intValue))
    } else {
      setInputError(true)
    }
  }

  return (
    <div>
      <h1>{productName}</h1>
      <img
        src={`http://localhost:8000/images/stock/${productName}.jpg`}
        style={{maxWidth: '50%', maxHeight: '50%'}}
        alt="..."
      />
      <TextField
        label="Liczba sztuk"
        value={value}
        type="number"
        onChange={handleInput}
        InputProps={{
          endAdornment: <InputAdornment position="end">z {maxQuantity} sztuk</InputAdornment>,
        }}
        error={inputError}
        helperText={inputError ? `Podaj wartość między 1 a ${maxQuantity}` : ''}
      />
      <Button variant="contained" onClick={handleAddToCart}>Dodaj do koszyka</Button>
      <Dialog open={addedToCart}>
        <DialogTitle>Dodano do koszyka {productName} w ilości {parseInt(value)}</DialogTitle>
        <DialogContent>
          <img
            src={`http://localhost:8000/images/stock/${productName}.jpg`}
            style={{maxWidth: '50%', maxHeight: '50%'}}
            alt="..."
          />
          <DialogActions>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                setAddedToCart(false)
              }}
            >
              Kontynuuj zakupy
            </Button>
            <Button
              variant="contained"
              color="primary"
              href={`http://localhost:3000/cart`}
            >
              Przejdź do koszyka
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  )
}