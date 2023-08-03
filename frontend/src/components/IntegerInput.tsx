import {InputAdornment, TextField} from "@mui/material";
import React, {useState} from "react";
import useLocalStorageState from "use-local-storage";

interface IntegerInputProps {
  maxQuantity: number
  productName: string
}

export const IntegerInput = ((props: IntegerInputProps) => {
  const {maxQuantity, productName} = props
  const [inputError, setInputError] = useState(false);
  const [cart, setCart] = useLocalStorageState('cart', {})
  const [value, setValue] = useState(cart[productName]);

  const handleInput = (event) => {
    const inputValue = event.target.value
    let intValue = parseInt(inputValue)
    if(inputValue === '') {
      setValue('')
      setInputError(true)
      intValue = 0
    }
    else if (!intValue || intValue < 1 || intValue > maxQuantity) {
      setInputError(true)
      intValue = NaN
    } else {
      setInputError(false)
      setValue(intValue)
    }

    setCart((prevCart) => {
      return {
        ...prevCart,
        [productName]: isNaN(intValue) ? value : intValue
      }
    })
  }

  const handleRemoveProduct = (): void => {
    setCart((prevCart) => {
      const updatedCart = {...prevCart}
      delete updatedCart[productName]
      return updatedCart
    })
  }

  return (
    <div>
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
      <button type="submit" onClick={handleRemoveProduct}>Delete</button>
    </div>
  )
})