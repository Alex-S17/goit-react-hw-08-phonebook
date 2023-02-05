import { useAuth } from '../../hooks/useAuth';

export default function HomePage() {
  const { isLoggedIn, user } = useAuth();
  return (
    <div>
      <h1>Welcome to our PhoneBook service!</h1>
      {!isLoggedIn ? (
        <div>
          <p>Please log In to start</p>
          <p>If you have no account yet you need to register first</p>
        </div>
      ) : (
        <p>Now you are logged in as {user.name}</p>
      )}
    </div>
  );
}
