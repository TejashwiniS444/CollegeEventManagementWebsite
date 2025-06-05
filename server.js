// app.js (or server.js)

// Existing code to serve events
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

// In-memory storage for registrations
let registrations = []; // Store all registered users in memory

// Route to handle user registration (POST)
app.post("/api/register", (req, res) => {
    console.log("User Registered:", req.body);
    registrations.push(req.body); // Save registration
    res.json({ status: "Registered successfully" });
});

// Route to get all registrations (GET)
app.get("/api/registrations", (req, res) => {
    res.json(registrations); // Send all registered users
});
