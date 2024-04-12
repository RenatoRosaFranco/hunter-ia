import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits')
    .required('Required'),
  message: Yup.string()
    .min(20, 'Must be at least 20 characters')
    .required('Required'),
});

export default ContactSchema;