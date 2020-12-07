import React from 'react';

import { Formik } from 'formik';

import TitleComponent from '../../components/Title';
import ButtonComponent from '../../components/Button';

import { Form, TextInputComponentWrapper } from './styles';

function Login() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validateOnChange={false}
      validateOnBlur={false}
      validate={() => null}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <TitleComponent title="Login" />

          <TextInputComponentWrapper
            labelText="E-mail:"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}

          <TextInputComponentWrapper
            labelText="Senha:"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}

          <ButtonComponent
            type="submit"
            disabled={isSubmitting}
            buttonText="Entrar"
          />
        </Form>
      )}
    </Formik>
  );
}

export default Login;
