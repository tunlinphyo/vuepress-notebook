class CircleSelected extends HTMLElement {
  connectedCallback() {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'button')
    if (!this.hasAttribute('aria-haspopup')) this.setAttribute('aria-haspopup', 'listbox')
    if (this.tabIndex < 0) this.tabIndex = 0
  }
}

class CircleOption extends HTMLElement {
  connectedCallback() {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'option')
    if (!this.hasAttribute('value')) {
      const value = this.textContent.trim()
      if (value) this.setAttribute('value', value)
    }
    this.inert = true
    if (this.tabIndex < 0) this.tabIndex = 0

    const select = this.closest('circle-select')
    if (select) select.syncSelection()
  }

  get selected() {
    return this.hasAttribute('selected')
  }

  set selected(selected) {
    this.toggleAttribute('selected', !!selected)
  }

  get value() {
    return this.getAttribute('value') || this.textContent.trim()
  }

  set value(value) {
    if (value == null || value === '') {
      this.removeAttribute('value')
      return
    }

    this.setAttribute('value', value)
  }
}

class CircleSelect extends HTMLElement {
  static formAssociated = true

  static get observedAttributes() {
    return ['disabled', 'name', 'open', 'value']
  }

  constructor() {
    super()
    this.internals = this.attachInternals()
    this.handleClick = this.handleClick.bind(this)
    this.handleKeydown = this.handleKeydown.bind(this)
    this.defaultValue = ''
    this.formDisabled = false
    this.hasDefaultValue = false
    this.isSyncingValue = false
    this.observer = new MutationObserver(() => this.syncSelection())
  }

  connectedCallback() {
    this.addEventListener('click', this.handleClick)
    this.addEventListener('keydown', this.handleKeydown)
    this.observer.observe(this, { childList: true, subtree: true })
    this.syncSelection()
    if (!this.hasDefaultValue) {
      this.defaultValue = this.value
      this.hasDefaultValue = true
    }
    requestAnimationFrame(() => {
      if (this.isConnected) this.syncSelection()
    })
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleClick)
    this.removeEventListener('keydown', this.handleKeydown)
    this.observer.disconnect()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return
    if (!this.isConnected) return
    if (name === 'open') {
      this.syncInteractivity()
      this.syncFocus()
    }
    if (name === 'disabled' || name === 'name') {
      this.syncFormValue()
      this.syncInteractivity()
    }
    if ((name === 'name' || name === 'value') && !this.isSyncingValue) this.syncSelection()
  }

  get selectedElement() {
    return this.querySelector('circle-selected')
  }

  get options() {
    return [...this.querySelectorAll('circle-option')]
  }

  get isOpen() {
    return this.hasAttribute('open')
  }

  get isDisabled() {
    return this.formDisabled || this.hasAttribute('disabled')
  }

  get name() {
    return this.getAttribute('name') || ''
  }

  set name(name) {
    if (!name) {
      this.removeAttribute('name')
      return
    }

    this.setAttribute('name', name)
  }

  get disabled() {
    return this.hasAttribute('disabled')
  }

  set disabled(disabled) {
    this.toggleAttribute('disabled', !!disabled)
  }

  get value() {
    return this.getAttribute('value') || ''
  }

  set value(value) {
    if (value == null || value === '') {
      this.removeAttribute('value')
      return
    }

    this.setAttribute('value', value)
  }

  get form() {
    return this.internals.form
  }

  get labels() {
    return this.internals.labels
  }

  get type() {
    return 'select-one'
  }

  get validity() {
    return this.internals.validity
  }

  get validationMessage() {
    return this.internals.validationMessage
  }

  get willValidate() {
    return this.internals.willValidate
  }

  checkValidity() {
    return this.internals.checkValidity()
  }

  reportValidity() {
    return this.internals.reportValidity()
  }

  handleClick(event) {
    if (this.isDisabled) return

    const selected = event.target.closest('circle-selected')
    if (selected && this.contains(selected)) {
      this.toggleAttribute('open')
      return
    }

    const option = event.target.closest('circle-option')
    if (!option || !this.contains(option)) return
    this.selectOption(option)
  }

  handleKeydown(event) {
    if (this.isDisabled) return

    if (event.key === 'Tab' && this.isOpen) {
      const selected = this.selectedElement
      const options = this.options
      const lastOption = options[options.length - 1]
      const selectedTarget = event.target.closest('circle-selected')
      const optionTarget = event.target.closest('circle-option')

      if (selected && lastOption) {
        if (!event.shiftKey && optionTarget === lastOption) {
          event.preventDefault()
          selected.focus()
          return
        }

        if (event.shiftKey && selectedTarget === selected) {
          event.preventDefault()
          lastOption.focus()
          return
        }
      }
    }

    if (event.key !== 'Enter' && event.key !== ' ') return

    const selected = event.target.closest('circle-selected')
    if (selected && this.contains(selected)) {
      event.preventDefault()
      this.toggleAttribute('open')
      return
    }

    const option = event.target.closest('circle-option')
    if (!option || !this.contains(option)) return

    event.preventDefault()
    this.selectOption(option)
  }

  selectOption(option) {
    if (this.isDisabled) return

    const previousValue = this.value
    this.value = option.value
    this.removeAttribute('open')

    if (previousValue !== this.value) {
      this.dispatchEvent(new Event('change', { bubbles: true }))
    }
  }

  syncSelection() {
    const options = this.options
    const selected = this.selectedElement
    const currentValue = this.value
    const valueOption =
      currentValue
        ? options.find((option) => option.value === currentValue) ||
          this.querySelector(`circle-option[value="${CSS.escape(currentValue)}"]`)
        : null
    const selectedOption = valueOption || this.querySelector('circle-option[selected]') || null

    this.style.setProperty('--count', String(options.length))

    if (
      selectedOption &&
      selected &&
      (!selected.innerHTML.trim() || !!valueOption) &&
      selected.innerHTML !== selectedOption.innerHTML
    ) {
      selected.innerHTML = selectedOption.innerHTML
    }

    if (selectedOption && this.value !== selectedOption.value) {
      this.isSyncingValue = true
      this.value = selectedOption.value
      this.isSyncingValue = false
    }

    for (const [index, option] of options.entries()) {
      const isSelected = option === selectedOption
      option.style.setProperty('--index', String(index + 1))
      option.toggleAttribute('selected', isSelected)
      option.setAttribute('aria-selected', isSelected ? 'true' : 'false')
    }

    this.syncFormValue()
    this.syncInteractivity()
  }

  formDisabledCallback(disabled) {
    this.formDisabled = disabled
    this.syncFormValue()
    this.syncInteractivity()
  }

  formResetCallback() {
    this.isSyncingValue = true
    this.value = this.defaultValue
    this.isSyncingValue = false
    this.syncSelection()
  }

  formStateRestoreCallback(state) {
    this.isSyncingValue = true
    this.value = typeof state === 'string' ? state : ''
    this.isSyncingValue = false
    this.syncSelection()
  }

  syncFormValue() {
    const value = this.isDisabled ? null : this.value
    this.internals.setFormValue(value, value)
  }

  syncInteractivity() {
    const selected = this.selectedElement
    const isOpen = this.isOpen
    const isDisabled = this.isDisabled

    this.setAttribute('aria-disabled', isDisabled ? 'true' : 'false')

    if (selected) {
      selected.inert = isDisabled
      selected.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
    }

    for (const option of this.options) {
      option.inert = isDisabled || !isOpen
    }
  }

  syncFocus() {
    const target = this.isOpen
      ? this.querySelector('circle-option[selected]') || this.options[0]
      : this.selectedElement
    if (target) target.focus()
  }
}

if (!customElements.get('circle-selected')) {
  customElements.define('circle-selected', CircleSelected)
}

if (!customElements.get('circle-option')) {
  customElements.define('circle-option', CircleOption)
}

if (!customElements.get('circle-select')) {
  customElements.define('circle-select', CircleSelect)
}
