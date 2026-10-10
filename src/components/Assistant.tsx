import { useState } from "react";
import { Bot, Send, Sparkles, X } from "lucide-react";
import { products } from "../data/catalog.ts";

export function Assistant() {
  const [open, setOpen] = useState(false),
    [input, setInput] = useState(""),
    [messages, setMessages] = useState([
      {
        from: "assistant",
        text: "Welcome to AGRONEX. I can help with product information, dealer enquiries and contact details.",
      },
    ]);
  const respond = (raw) => {
    const q = raw.trim();
    if (!q) return;
    const lower = q.toLowerCase();
    let answer =
      "I can help with product information, dealer enquiries, and how to contact or find AGRONEX. For crop-specific treatment advice, please consult a qualified local agricultural professional and follow the product label.";
    const product = products.find((item) =>
      lower.includes(item.name.toLowerCase()),
    );

    switch (true) {
      case /dealer|distribut|partner|business/.test(lower):
        answer =
          "We welcome enquiries from agricultural retailers and distribution partners. Share your business and service area through the dealer application form.";
        break;
      case /address|location|map|visit|where/.test(lower):
        answer =
          "AGRONEX is at Plot No. 2937, Village: DTR, LGD Code: 32753, Sirsa, Haryana 125076. Use the map link on our Contact page to open directions.";
        break;
      case /contact|phone|call|whatsapp|reach/.test(lower):
        answer =
          "Call AGRONEX at +91 77340 76003, or submit the enquiry form and continue through WhatsApp.";
        break;
      case /dose|spray|apply|safe|mix|recommend|treat/.test(lower):
        answer =
          "Please follow the approved product label and local agricultural guidance for application and safety. I can show product information, but cannot provide crop diagnosis or treatment recommendations.";
        break;
      case Boolean(product):
        answer = `${product!.name} formulation: ${product!.formula}. Suitable crops: ${product!.crops}. Target: ${product!.target}. View full product details on the Products page and always follow the product label.`;
        break;
      case /product|crop|portfolio|range|catalogue|catalog/.test(lower):
        answer =
          "AGRONEX offers insecticides, fungicides, herbicides and crop growth solutions. Browse the Products page and select an item to see its formulation, crops, targets and pack sizes.";
        break;
    }
    setMessages((items) => [
      ...items,
      { from: "user", text: q },
      { from: "assistant", text: answer },
    ]);
    setInput("");
  };
  return (
    <div className="assistant-widget">
      <button
        className="assistant-launcher"
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={
          open ? "Close AGRONEX AI Assistant" : "Open AGRONEX AI Assistant"
        }
      >
        {open ? <X size={20} /> : <Bot size={20} />}
        <span>{open ? "Close" : "Ask AGRONEX AI"}</span>
      </button>
      {open && (
        <section className="assistant-panel" aria-label="AGRONEX AI Assistant">
          <header>
            <span className="assistant-avatar">
              <Sparkles size={19} />
            </span>
            <div>
              <strong>AGRONEX AI Assistant</strong>
              <small>Quick help for products and enquiries</small>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
            >
              <X size={17} />
            </button>
          </header>
          <div className="assistant-messages" aria-live="polite">
            {messages.map((m, i) => (
              <p key={i} className={`assistant-message ${m.from}`}>
                {m.text}
              </p>
            ))}
          </div>
          <div className="assistant-prompts">
            <button
              type="button"
              onClick={() => respond("How can I become a dealer?")}
            >
              Dealer enquiry
            </button>
            <button
              type="button"
              onClick={() => respond("Where is AGRONEX located?")}
            >
              Location
            </button>
            <button
              type="button"
              onClick={() => respond("How do I find product details?")}
            >
              Products
            </button>
          </div>
          <form
            className="assistant-input"
            onSubmit={(e) => {
              e.preventDefault();
              respond(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Ask AGRONEX AI a question"
              placeholder="Ask a question…"
            />
            <button type="submit" aria-label="Send question">
              <Send size={17} />
            </button>
          </form>
          <small className="assistant-note">
            For product use, follow the label and local guidance.
          </small>
        </section>
      )}
    </div>
  );
}
