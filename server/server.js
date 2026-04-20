const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// TEMP storage
let transactions = [];
let piggyBank = 0;

// test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// add transaction
app.post("/add", (req, res) => {
  const { type, amount, category } = req.body;

  const newTransaction = {
    id: Date.now(),
    type,
    amount: Number(amount),
    category
  };

  transactions.push(newTransaction);

  res.json({ message: "Transaction added", data: newTransaction });
});

// get all transactions
app.get("/transactions", (req, res) => {
  res.json(transactions);
});

// calculate balance (EXCLUDES piggybank from transactions but subtracts it)
app.get("/balance", (req, res) => {
  let balance = 0;

  transactions.forEach(t => {
    if (t.type === "income") {
      balance += t.amount;
    } else if (t.type === "expense") {
      balance -= t.amount;
    }
  });

  // subtract savings
  balance -= piggyBank;

  res.json({ balance });
});

// piggybank (NO transaction entry)
app.post("/piggybank", (req, res) => {
  const amount = Number(req.body.amount);

  if (!amount || amount <= 0) {
    return res.json({ message: "Invalid amount" });
  }

  let balance = 0;

  transactions.forEach(t => {
    if (t.type === "income") balance += t.amount;
    else if (t.type === "expense") balance -= t.amount;
  });

  const available = balance - piggyBank;

  if (amount > available) {
    return res.json({ message: "Not enough available balance" });
  }

  piggyBank += amount;

  res.json({
    message: "Saved to piggybank",
    piggyBank
  });
});

// view piggybank
app.get("/piggybank", (req, res) => {
  res.json({ piggyBank });
});

// category summary (for pie chart)
app.get("/category-summary", (req, res) => {
  const summary = {};

  transactions.forEach(t => {
    if (!summary[t.category]) {
      summary[t.category] = 0;
    }
    summary[t.category] += t.amount;
  });

  res.json(summary);
});

// insights
app.get("/insights", (req, res) => {
  let totalExpense = 0;

  transactions.forEach(t => {
    if (t.type === "expense") {
      totalExpense += t.amount;
    }
  });

  const totalTransactions = transactions.length;
  const avg = totalTransactions === 0 ? 0 : totalExpense / totalTransactions;

  res.json({
    totalTransactions,
    totalExpense,
    averageExpense: avg
  });
});

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});