import { Link } from "react-router-dom";

const PageNotFound = () => (
  <div className="text-center my-5">
    <h1>The page with this address does not exist.</h1>
    <Link to="/">Go to Home Page</Link>
  </div>
)

export { PageNotFound };
