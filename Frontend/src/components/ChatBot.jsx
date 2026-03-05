import { useState } from "react";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm Jasmeet's assistant." }
  ]);

  const askBot = (topic) => {
    let response = "";
    if (topic === "price") response = "The book is ₹2,499.";
    if (topic === "delivery") response = "Delivery in 5-7 days.";
    if (topic === "refund") response = "7-day return policy.";

    setMessages([...messages,
      { sender: "user", text: topic },
      { sender: "bot", text: response }
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5">
      {open && (
        <div className="bg-white w-72 rounded-xl shadow-xl p-4 mb-3">
          {messages.map((msg, i) => (
            <p key={i} className={msg.sender === "user" ? "text-right" : ""}>
              {msg.text}
            </p>
          ))}
          <div className="flex gap-2 mt-3">
            <button onClick={() => askBot("price")}>Price?</button>
            <button onClick={() => askBot("delivery")}>Delivery?</button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="bg-yellow-400 w-14 h-14 rounded-full"
      >
        💬
      </button>
    </div>
  );
}

export default ChatBot;
