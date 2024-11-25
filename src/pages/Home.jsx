// from react router dom
import { Link } from "react-router-dom"

// from react icons
import { FaPlay } from "react-icons/fa";

function Home() {
  return (
    <div className="h-full flex items-center justify-center">
      <Link to="/categories">
        <FaPlay />
      </Link>
    </div>
  )
}

export default Home