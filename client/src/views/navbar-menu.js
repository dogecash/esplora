import Snabbdom from 'snabbdom-pragma'
import { updateQuery } from '../util'

const items  = process.env.MENU_ITEMS && JSON.parse(process.env.MENU_ITEMS)
    , active = process.env.MENU_ACTIVE

const otherTheme = { dark: 'light', light: 'dark' }

export default ({ t, theme, page }) =>

  <ul className="navbar-nav">
    { items && Object.entries(items).map(([ name, url ]) =>
        <li className={`nav-item ${name == active ? 'active' : ''}`}>
          <a className="nav-link" href={url} rel="external">{t(name)}</a>
        </li>
    ) }
  </ul>
