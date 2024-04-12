import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ContactSchema from "../../schemas/ContactSchema";
import './style.scss';

const ContactForm = () => {
  return(
    <Formik
    initialValues={{}}
    validationSchema={ContactSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 4000);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <Field type='text' name='text' placeholder="name" />
        <ErrorMessage name='name' component='div' />

        <Field type='email' name='email' placeholder='email' />
        <ErrorMessage name='email' component='div' />

        <Field type='text' name='phone' placeholder='phone' />
        <ErrorMessage name='phone' component="div" />

        <Field as="textarea" name="message" placeholder="Message" />
        <ErrorMessage name="message" component="div" />

        <button type="submit" disabled={isSubmitting}>
          Enviar Mensagem
        </button>
      </Form>
    )}
  </Formik>
  )
}

export default React.memo(ContactForm);