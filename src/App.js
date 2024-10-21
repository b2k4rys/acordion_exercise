import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div className="accordion">
      <Accordion />
    </div>
  );
}

function Accordion() {
  return faqs.map((item) => (
    <AccordionItem
      text={item.text}
      title={item.title}
      num={faqs.indexOf(item) + 1}
    />
  ));
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => setOpen((val) => !val)}
    >
      <p className="number">{num < 9 ? `0${num}` : `${num}`}</p>
      <h2>{title}</h2>
      <p className="icon">{isOpen ? <>-</> : <>+</>}</p>
      {isOpen ? <div className="content-box">{text}</div> : <></>}
    </div>
  );
}
