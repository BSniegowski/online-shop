import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField} from "@mui/material";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Podaj imię'),
  lastName: Yup.string()
    .required('Podaj nazwisko'),
  email: Yup.string().email('Nieprawidłowy email').required('Podaj email'),
  telephone: Yup.number().min(9).required('Podaj numer telefonu'),
  city: Yup.string().required('Podaj miejscowość'),
  street: Yup.string().required('Podaj ulicę'),
  houseNumber: Yup.string().required('Podaj numer domu/mieszkania'),
  postalCode: Yup.string()
    .matches(RegExp('^[0-9]{2}-[0-9]{3}$'), 'Nieprawidłowy kod pocztowy')
    .required('Podaj kod pocztowy'),
  postalCity: Yup.string().required('Podaj pocztę'),
});

const fieldNameToLabel = {
  firstName: 'Imię',
  lastName: 'Nazwisko',
  email: 'Email',
  telephone: 'Telefon',
  city: 'Miasto',
  street: 'Ulica',
  houseNumber: 'Numer domu/mieszkania',
  postalCode: 'Kod pocztowy',
  postalCity: 'Poczta',
}

export const DeliveryAndPaymentMethod = () => {
  console.log(Object.keys(SignupSchema.fields))
  return (
    <div>
      <Paper elevation={5}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Sposób dostawy</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="courier"
            name="radio-buttons-group"
          >
            <FormControlLabel value="courier" control={<Radio />} label="Kurier" />
            <FormControlLabel value="parcelLocker" control={<Radio />} label="Paczkomat" />
            <FormControlLabel value="selfPickup" control={<Radio />} label="Odbiór osobisty" />
          </RadioGroup>
        </FormControl>
      </Paper>
      <Paper elevation={5}>
        <Formik
          initialValues={{}}
          validationSchema={SignupSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({errors, touched}) => (
            <Form>
              {Object.keys(SignupSchema.fields).map(fieldName => (
                <Field
                  key={fieldName}
                  as={TextField}
                  name={fieldName}
                  label={fieldNameToLabel[fieldName]}
                  error={errors[fieldName] && touched[fieldName]}
                  helperText={errors[fieldName] && touched[fieldName] ? errors[fieldName] : null}
                />
              ))}
            </Form>
          )}
        </Formik>
      </Paper>
    </div>
  );
}