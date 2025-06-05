// app.js
document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/events")
        .then(res => res.json())
        .then(data => {
            const eventList = document.getElementById("eventList");
            data.forEach(event => {
                const li = document.createElement("li");
                li.textContent = `${event.name} - ${event.date}`;
                eventList.appendChild(li);
            });
        });
});

