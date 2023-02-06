import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.greetingWrapper}>
      <h1 className={css.greetingHeader}>
        Welcome to our PhoneBook application!
      </h1>
      <h2 className={css.greetingText}>
        Stop for a minute and take some rest,
        <br />
        looking at the contacts of your friends and familiar people...
      </h2>
    </div>
  );
}
