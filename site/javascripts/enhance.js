/* Progressive enhancement for MkDocs Material */

;(function () {
  const raf = window.requestAnimationFrame || function (fn) { return setTimeout(fn, 16) }

  function setSectionThemeFromPath() {
    try {
      const path = location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '')
      const parts = path.split('/').filter(Boolean)
      const section = parts[0] || 'home'

      // Map certain docs sections to themed accents
      const map = new Map([
        ['project', 'project'],
        ['wet-lab', 'wet-lab'],
        ['human-practices', 'human-practices'],
        ['team', 'team'],
        ['documentation', 'documentation'],
      ])
      const themed = map.get(section)
      if (themed) {
        document.documentElement.setAttribute('data-section', themed)
      } else if (path === '' || path === '/') { // homepage
        document.documentElement.removeAttribute('data-section')
      }
    } catch (_) {}
  }

  function initScrollProgress() {
    let bar = document.getElementById('scroll-progress')
    if (!bar) {
      bar = document.createElement('div')
      bar.id = 'scroll-progress'
      document.body.appendChild(bar)
    }
    function update() {
      const el = document.scrollingElement || document.documentElement
      const max = el.scrollHeight - el.clientHeight
      const p = max > 0 ? (el.scrollTop / max) * 100 : 0
      bar.style.width = p + '%'
    }
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
  }

  function initRevealOnScroll() {
    const elements = Array.from(document.querySelectorAll('.reveal, .feature-card, .profile-card'))
    if (elements.length === 0) { return }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        }
      })
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 })
    elements.forEach((el) => io.observe(el))
  }

  function initTiltOnCards() {
    const cards = document.querySelectorAll('.feature-card, .profile-card')
    cards.forEach((card) => {
      card.classList.add('tilt')
      const bound = { w: 0, h: 0 }
      function updateBound() { const r = card.getBoundingClientRect(); bound.w = r.width; bound.h = r.height }
      updateBound()
      window.addEventListener('resize', updateBound)
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect()
        const x = e.clientX - r.left
        const y = e.clientY - r.top
        const rx = ((y / bound.h) - 0.5) * -6
        const ry = ((x / bound.w) - 0.5) * 8
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`
        card.style.transition = 'transform 80ms ease-out'
      })
      card.addEventListener('mouseleave', () => {
        card.style.transform = ''
        card.style.transition = 'transform 250ms ease'
      })
    })
  }

  function initButtonCursorGlow() {
    document.addEventListener('pointermove', (e) => {
      if (!(e.target instanceof HTMLElement)) { return }
      const btn = e.target.closest('.button')
      if (!btn) { return }
      const r = btn.getBoundingClientRect()
      const mx = ((e.clientX - r.left) / r.width) * 100
      const my = ((e.clientY - r.top) / r.height) * 100
      btn.style.setProperty('--mx', mx + '%')
      btn.style.setProperty('--my', my + '%')
    })
  }

  // Transform team members plain markdown into cards when possible
  function enhanceTeamPage() {
    const isTeam = location.pathname.includes('/team/members')
    if (!isTeam) { return }
    const article = document.querySelector('article')
    if (!article) { return }

    // Parse headings and images to create grouped cards
    const groups = []
    let current = null
    Array.from(article.children).forEach((node) => {
      if (node.tagName === 'H1' || node.tagName === 'H2') {
        current = { title: node.textContent.trim(), members: [] }
        groups.push(current)
      } else if (node.tagName === 'H3') {
        const name = node.textContent.trim()
        // next elements: paragraph (quote) and image
        let quote = ''
        let img = null
        let next = node.nextElementSibling
        for (let i = 0; i < 4 && next; i++) {
          if (next.tagName === 'P') {
            const maybeImg = next.querySelector('img')
            if (maybeImg) { img = maybeImg.getAttribute('src') }
            else if (!quote) { quote = next.textContent.trim() }
          }
          next = next.nextElementSibling
        }
        if (current) { current.members.push({ name, quote, img }) }
      }
    })

    if (groups.length === 0) { return }

    // Build new layout
    const frag = document.createDocumentFragment()
    groups.forEach((g) => {
      const title = document.createElement('h2')
      title.className = 'profile-group-title reveal'
      title.textContent = g.title
      frag.appendChild(title)

      const grid = document.createElement('div')
      grid.className = 'profile-grid'
      g.members.forEach((m) => {
        const card = document.createElement('div')
        card.className = 'profile-card reveal'
        const img = document.createElement('img')
        img.src = m.img || ''
        img.alt = m.name
        const meta = document.createElement('div')
        const h3 = document.createElement('h3')
        h3.textContent = m.name
        const p = document.createElement('p')
        p.textContent = m.quote
        meta.appendChild(h3)
        if (m.quote) { meta.appendChild(p) }
        card.appendChild(img)
        card.appendChild(meta)
        grid.appendChild(card)
      })
      frag.appendChild(grid)
    })

    // Replace article content
    article.innerHTML = ''
    article.appendChild(frag)
  }

  function onReady() {
    setSectionThemeFromPath()
    enhanceTeamPage()
    autoRevealContentBlocks()
    initScrollProgress()
    initRevealOnScroll()
    initTiltOnCards()
    initButtonCursorGlow()
  }

  // MkDocs Material emits events for page changes (instant navigation)
  const nav = window.document$ || { subscribe: (fn) => document.addEventListener('DOMContentLoaded', fn) }
  nav.subscribe(function () { raf(onReady) })
})()



// Add a soft 'reveal' class to common content blocks for nicer entrance
function autoRevealContentBlocks() {
  try {
    const article = document.querySelector('article')
    if (!article) { return }
    const selectors = [
      'h2', 'h3', 'p', 'ul', 'ol', 'table', '.admonition', 'img'
    ]
    const nodes = article.querySelectorAll(selectors.join(','))
    nodes.forEach((node) => {
      if (node.closest('.hero') || node.closest('.features')) { return }
      node.classList.add('reveal')
    })
  } catch (_) {}
}

