import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.loginFormWrapper}>
      <div>
        <h1 className={css.loginHeader}>Login Form</h1>
        <form className={css.form} onSubmit={handleSubmit} autoComplete="on">
          <label className={css.label}>
            Email
            <input className={css.loginInput} type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <input className={css.loginInput} type="password" name="password" />
          </label>
          <button className={css.loginBtn} type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
