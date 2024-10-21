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
  const [curOpen, setOpen] = useState(null);

  return faqs.map((item) => (
    <AccordionItem
      text={item.text}
      title={item.title}
      num={faqs.indexOf(item) + 1}
      handleClick={setOpen}
      curOpen={curOpen}
    />
  ));
}

function AccordionItem({ num, title, text, curOpen, handleClick }) {
  return (
    <div
      className={`item ${curOpen === num ? "open" : ""}`}
      onClick={() => handleClick(num)}
    >
      <p className="number">{num < 9 ? `0${num}` : `${num}`}</p>
      <h2>{title}</h2>
      <p className="icon">{curOpen === num ? <>-</> : <>+</>}</p>
      {curOpen === num ? <div className="content-box">{text}</div> : <></>}
    </div>
  );
}
