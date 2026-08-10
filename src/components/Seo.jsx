import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { seo, SITE_URL, SITE_IMAGE } from '../data/seo'

function setMetaTag(attr, key, content) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setLinkTag(rel, href) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`)
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const entry = seo[pathname] || seo['/']
    const canonicalUrl = pathname === '/' ? `${SITE_URL}/` : `${SITE_URL}${pathname}`
    const imageUrl = `${SITE_URL}${SITE_IMAGE}`

    document.title = entry.title
    setMetaTag('name', 'description', entry.description)
    setLinkTag('canonical', canonicalUrl)

    setMetaTag('property', 'og:title', entry.title)
    setMetaTag('property', 'og:description', entry.description)
    setMetaTag('property', 'og:url', canonicalUrl)
    setMetaTag('property', 'og:type', 'website')
    setMetaTag('property', 'og:site_name', 'Asiye Green')
    setMetaTag('property', 'og:image', imageUrl)
    setMetaTag('property', 'og:locale', 'en_ZA')

    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', entry.title)
    setMetaTag('name', 'twitter:description', entry.description)
    setMetaTag('name', 'twitter:image', imageUrl)
  }, [pathname])

  return null
}

export default Seo
