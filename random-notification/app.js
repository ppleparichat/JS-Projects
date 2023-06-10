const btn = document.querySelector('.btn')
const container = document.querySelector('.container')

const message = ["Morning Monday",
"Morning Tuesday",
"Morning Wednesday",
"Morning Thursday",
"Morning Friday",
"Morning Saturday",
"Morning Sunday",
]

btn.addEventListener("click", () => createNotification())

function createNotification() {
    const notificationDiv = document.createElement("div")
    notificationDiv.classList.add("notification")
    notificationDiv.innerText = randomMessage()
    container.appendChild(notificationDiv)
    setTimeout(() => {
        notificationDiv.remove()
    },3000)
}

function randomMessage() {
    return message[Math.floor(Math.random() * message.length)]
}
