// export const RegisterPage = () => {
//   return <p>This is RegisterPage</p>;
// };

// import { Helmet } from 'react-helmet';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

export const RegisterPage = () => {
  return (
    <div>
      {/* <Helmet>
        <title>Registration</title>
      </Helmet> */}
      <RegisterForm />
    </div>
  );
};
