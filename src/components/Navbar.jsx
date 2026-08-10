import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Container from './Container'
import { navLinks } from '../data/content'
import { asiyeGreenLogo, asiyeGreenLogoMono } from '../assets/images'
import styles from './Navbar.module.css'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpenMenu(null)
    setOpen(false)
  }, [pathname])

  const transparent = pathname === '/' && !scrolled
  const activeLink = navLinks.find((link) => link.path === openMenu)

  function closeAll() {
    setOpen(false)
    setOpenMenu(null)
  }

  return (
    <header
      className={`${styles.nav} ${transparent ? styles.transparent : ''} ${openMenu ? styles.menuOpen : ''}`.trim()}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <Container>
        <div className={styles.inner}>
          <NavLink to="/" className={styles.logo} onClick={closeAll}>
            <img src={transparent && !openMenu ? asiyeGreenLogoMono : asiyeGreenLogo} alt="Asiye Green" />
          </NavLink>

          <nav className={`${styles.links} ${open ? styles.linksOpen : ''}`.trim()}>
            {navLinks.map((link) => (
              <div key={link.path} className={styles.navItem}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `${isActive ? styles.active : ''} ${openMenu === link.path ? styles.itemOpen : ''}`.trim()
                  }
                  onClick={() => (link.megamenu ? null : closeAll())}
                  onMouseEnter={() => setOpenMenu(link.megamenu ? link.path : null)}
                >
                  {link.label}
                  {link.megamenu && <FontAwesomeIcon icon={faChevronDown} className={styles.chevron} />}
                </NavLink>
              </div>
            ))}
          </nav>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.toggle}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <FontAwesomeIcon icon={open ? faXmark : faBars} />
            </button>
          </div>
        </div>
      </Container>

      <div className={`${styles.megapanel} ${openMenu ? styles.megapanelOpen : ''}`.trim()}>
        {activeLink?.megamenu && (
          <Container>
            <div className={styles.megaContent}>
              <div className={styles.megaCrumb}>
                {activeLink.label} <FontAwesomeIcon icon={faChevronRight} />
              </div>
              <div className={styles.megaColumns}>
                {activeLink.megamenu.columns.map((col) => (
                  <div key={col.title} className={styles.megaColumn}>
                    <div className={styles.megaColumnTitle}>{col.title}</div>
                    <ul className={styles.megaColumnList}>
                      {col.links.map((item) => (
                        <li key={item.label}>
                          <NavLink to={item.path} onClick={closeAll}>
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        )}
      </div>

      {openMenu && <div className={styles.backdrop} onClick={() => setOpenMenu(null)} />}
    </header>
  )
}

export default Navbar
