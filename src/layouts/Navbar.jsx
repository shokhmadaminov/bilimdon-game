// from react router dom
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-base-100 shadow-md">
      <div className="container navbar">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">Bilimdon</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
