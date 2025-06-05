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

let registrations = []; // Store all registered users in memory

app.post("/api/register", (req, res) => {
    console.log("User Registered:", req.body);
    registrations.push(req.body); // Save registration
    res.json({ status: "Registered successfully" });
});

app.get("/api/registrations", (req, res) => {
    res.json(registrations); // Send all registered users
});
