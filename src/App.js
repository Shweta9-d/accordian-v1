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
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AcccordianItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={el.title}
          num={i}
          key={i}
        >
          {el.text}
        </AcccordianItem>
      ))}
      <AcccordianItem
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Test 1"
        num={22}
        key="test 1"
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break uo UI into components</li>
          <li>Make components reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </AcccordianItem>
    </div>
  );
}

function AcccordianItem({ num, title, text, isOpen, setIsOpen, children }) {
  const open = num === isOpen;

  const handleToggle = () => {
    setIsOpen(open ? null : num);
  };
  return (
    <div className={`item ${open ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {open && <div className="content-box">{children}</div>}
    </div>
  );
}
