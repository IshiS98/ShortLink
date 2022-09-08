import "./error.css";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="container-error">
      <img src="/not-found.png" alt="Page not found" />
      <h1>Page not found</h1>
      <Link to="/">
        Back to home
      </Link>
    </div>
  )
}