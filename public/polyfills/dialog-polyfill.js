const CLOSE_ATTR = 'data-closing'
const CLOSE_MS = 500

export function dialogPolyfill() {
  const dialog = document.getElementById('testimonial')

  dialog?.addEventListener('command', (event) => {
    const commandEvent = event
    if (commandEvent.command !== 'close') return

    event.preventDefault()
    closeWithAnimation(dialog)
  })

  dialog?.addEventListener('cancel', (event) => {
    event.preventDefault()
    closeWithAnimation(dialog)
  })
}

function closeWithAnimation(dialog) {
  if (!dialog.open) return
  if (dialog.hasAttribute(CLOSE_ATTR)) return

  dialog.setAttribute(CLOSE_ATTR, '')

  const done = () => {
    cleanup()
    dialog.removeAttribute(CLOSE_ATTR)
    if (dialog.open) dialog.close()
  }

  const onEnd = (e) => {
    if (e.target !== dialog) return
    done()
  }

  const cleanup = () => {
    dialog.removeEventListener('transitionend', onEnd)
    clearTimeout(timer)
  }

  dialog.addEventListener('transitionend', onEnd, { passive: true })

  const timer = window.setTimeout(done, CLOSE_MS + 80)
}

document.addEventListener('DOMContentLoaded', dialogPolyfill)
