// import { Helmet } from 'react-helmet';
import { LoginForm } from '../../components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <div>
      {/* <Helmet> */}
      <title>Login</title>
      {/* </Helmet> */}
      <LoginForm />
    </div>
  );
}

// MY OLD LOGINPAGE
// export const LoginPage = () => {
//   return (
//     <div>
//       <form>
//         <label>
//           Email
//           <input type="email" name="email" />
//         </label>
//         <label>
//           Password
//           <input type="password" name="password" />
//         </label>
//         <button type="submit"> Log In</button>
//       </form>
//     </div>
//   );
// };
