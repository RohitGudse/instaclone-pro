export default function ProtectedRoute({ children }) {
  const isAuth = true;

  return isAuth ? children : <h1>Please Login</h1>;
}