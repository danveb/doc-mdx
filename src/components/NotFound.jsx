import { useRouteError } from "react-router-dom";
import "../styles/NotFound.css";

export default function NotFound() {
  const error = useRouteError();

  return (
    <div className="not__found container">
      <p className="text">404 | Sorry, <i>{error.statusText || error.message}</i></p>
    </div>
  )
}