import {Link, withRouter} from 'react-router-dom'

import {FaSearch} from 'react-icons/fa'
import {GoThreeBars} from 'react-icons/go'
import {AiFillCloseCircle} from 'react-icons/ai'
import Cookies from 'js-cookie'
import SearchContext from '../Context/SearchContext'
import './index.css'

const Header = props => (
  <SearchContext.Consumer>
    {value => {
      const {
        searchInput,
        click,
        onChangeSearchInput,
        setSearchInput,
        onMoreOptionsState,
        searchBox,
        searchValue,
        closeHeaderButtonIn,
      } = value

      const onLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const closeHeaderButton = () => {
        closeHeaderButtonIn()
      }

      const onMoreOptions = () => {
        onMoreOptionsState()
      }

      const ChangeSearchInput = event => {
        onChangeSearchInput(event.target.value)
      }

      const onsetSearchInput = () => {
        setSearchInput()
      }

      const searchContainerView = () => {
        searchBox()
      }

      const searchBoxContainer = () => (
        <div className="input-container">
          <input
            className="search-input"
            type="search"
            placeholder="Search Caption"
            onChange={ChangeSearchInput}
            value={searchInput}
          />
          <button
            className="button-s"
            // eslint-disable-next-line react/no-unknown-property
            testId="searchIcon"
            type="button"
            onClick={onsetSearchInput}
          >
            <FaSearch className="search-icon" />
          </button>
        </div>
      )

      const onMoreOptionELe = () => (
        <div className="options-container">
          <ul className="header-links">
            <li className="link-tag">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <button
              className="search-option"
              type="button"
              onClick={searchContainerView}
            >
              Search
            </button>
            <li className="link-tag">
              <Link to="/my-profile" className="link">
                Profile
              </Link>
            </li>
          </ul>
          <button className="logout-button" type="button" onClick={onLogout}>
            Logout
          </button>
          <button
            className="close-button"
            type="button"
            onClick={closeHeaderButton}
          >
            <AiFillCloseCircle className="close-button" />
          </button>
        </div>
      )

      return (
        <div className="shadow">
          <nav className="nav-header-container">
            <div className="img-name">
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/ddfb221hl/image/upload/v1674914916/samples/inistaClone/Standard_Collection_8loginimage2_v7k2hz.png"
                  alt="website logo"
                  className="header-image"
                />
              </Link>
              <h1 className="heading">Insta Share</h1>
            </div>
            <div className="right-side-container">
              <div className="input-container">
                <input
                  className="search-input"
                  type="search"
                  placeholder="Search Caption"
                  onChange={ChangeSearchInput}
                  value={searchInput}
                />
                <button
                  className="button-search"
                  // eslint-disable-next-line react/no-unknown-property
                  testId="searchIcon"
                  type="button"
                  onClick={onsetSearchInput}
                >
                  <FaSearch className="search-icon" />
                </button>
              </div>
              <ul className="header-links">
                <li className="link-tag">
                  <Link to="/" className="link">
                    Home
                  </Link>
                </li>
                <li className="link-tag">
                  <Link to="/my-profile" className="link">
                    Profile
                  </Link>
                </li>
              </ul>
              <button
                className="logout-button"
                type="button"
                onClick={onLogout}
              >
                Logout
              </button>
            </div>
            <div className="medium-view">
              <button
                className="medium-button"
                type="button"
                onClick={onMoreOptions}
              >
                <GoThreeBars className="more-menu-img" />
              </button>
            </div>
          </nav>
          {click && onMoreOptionELe()}
          {searchValue && searchBoxContainer()}
        </div>
      )
    }}
  </SearchContext.Consumer>
)

export default withRouter(Header)
