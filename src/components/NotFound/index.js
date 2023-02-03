import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://res.cloudinary.com/ddfb221hl/image/upload/v1675051207/samples/inistaClone/erroring_2error_ivmyjr.png"
      alt="page not found"
      className="not-found-page"
    />
    <h1 className="not-found-heading">Page Not Found</h1>
    <p className="not-found-description">
      we are sorry, the page you requested could not be found
    </p>
    <p className="not-found-description">Please go back to the homepage</p>
    <Link to="/" className="link">
      <button className="btn" type="button">
        Home Page
      </button>
    </Link>
  </div>
)

export default NotFound
