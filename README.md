# 🧩 Checkpoint and Rollback Recovery Demonstration

A **visual simulation of database checkpoint and rollback recovery** built with **HTML, CSS, and JavaScript**.  
It demonstrates how a database management system uses **checkpoints** and **logs** to recover from a crash — without redoing all past transactions.

👉 **Live Demo:** [https://checkpoint-and-roll-back-recovery-d.vercel.app/](https://checkpoint-and-roll-back-recovery-d.vercel.app/)

---

## 🎯 Objective

To help students and learners understand how **checkpointing** helps speed up database recovery and minimize data loss after system failures.

The demo simulates:
- Starting transactions  
- Writing data items (X, Y)  
- Creating a checkpoint  
- Simulating a crash  
- Performing recovery (undoing uncommitted transactions)

---

## 🖥️ Features
✅ Start multiple transactions (T1, T2)  
✅ Simulate writes to variables  
✅ Create a checkpoint  
✅ Trigger a crash event  
✅ Perform recovery with rollback  
✅ Log viewer showing all system actions  
✅ Real-time display of database variable values  

---

## 🗂️ Project Structure
checkpoint-rollback-demo/
│
├── index.html # Main UI layout
├── style.css # Page styling
└── script.js # Logic for simulation

pgsql
Copy code

---

## ⚙️ How to Run Locally

### 1️⃣ Clone this repository
```bash
git clone https://github.com/yourusername/checkpoint-rollback-demo.git
cd checkpoint-rollback-demo
2️⃣ Run locally
Just open index.html in any web browser.
(No server required — all logic runs client-side.)

💡 How It Works
When you click Start T1 or Start T2, a transaction begins.

Write operations simulate changes to variables X and Y.

When you click Checkpoint, the system marks a recovery point in the log.

If a Crash occurs, the system halts but retains the log.

On Recover, it scans the log from the last checkpoint:

Commits completed transactions.

Rolls back incomplete transactions.

Updates the displayed database state.

This mirrors the logic of Write-Ahead Logging (WAL) in databases.

🧠 Educational Context
This project is often used in:

Database Management System (DBMS) labs

Operating Systems and Recovery Techniques demos

Computer Science learning modules

It provides an interactive visualization of what usually happens behind the scenes in real DBMS recovery processes.

🧰 Technologies Used
HTML5

CSS3

JavaScript (Vanilla JS)

📸 Demo Screenshot
(Add a screenshot here of your running app from Vercel)

🧑‍💻 Author
Your Name
🔗 GitHub Profile

📜 License
This project is licensed under the MIT License.

⭐ Tip
If you’re a student — try editing script.js to:

Add a third transaction (T3)

Log commits (COMMIT T1)

Highlight committed vs. uncommitted transactions in color
