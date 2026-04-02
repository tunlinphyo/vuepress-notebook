const contacts = {
  github: {
    title: "GitHub",
    description:
      "Check out my modern Web APIs experiments: clean UI, smooth interactions.",
    url: "https://github.com/tunlinphyo",
    cta: "Visit GitHub Profile"
  },
  linkedin: {
    title: "LinkedIn",
    description:
      "Connect with me if you'd like to discuss opportunities or exchange ideas.",
    url: "https://www.linkedin.com/in/tunlinphyo",
    cta: "Connect on LinkedIn"
  },
  email: {
    title: "Email",
    description:
      "For collaborations or product questions, email is the fastest way to reach me.",
    url: "mailto:tunlinphyo.it@gmail.com",
    cta: "Send Me an Email"
  }
}

const content = document.getElementById("cardContent")
const panel = document.getElementById("detailPanel")
const closeButton = document.getElementById("closePanel")
const title = document.getElementById("detailTitle")
const description = document.getElementById("detailDescription")
const link = document.getElementById("detailLink")

document.querySelectorAll("[data-contact]").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.getAttribute("data-contact")
    const detail = key ? contacts[key] : null

    if (!detail) return

    title.textContent = detail.title
    description.textContent = detail.description
    link.textContent = detail.cta
    link.href = detail.url

    content.classList.add("is-dimmed")
    panel.classList.remove("is-hidden")
  })
})

closeButton.addEventListener("click", () => {
  panel.classList.add("is-hidden")
  content.classList.remove("is-dimmed")
})
