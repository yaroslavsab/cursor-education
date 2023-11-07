import { useState } from 'react';




export default function Contact() {
  const contacts = [
    {
      firstName: "Барней",
      lastName: "Стинсовський",
      phone: "+380956319521",
      gender: "male"
    },
    {
      firstName: "Робін",
      lastName: "Щербатська",
      phone: "+380931460123",
      gender: "female"
    },
    {
      firstName: "Анонімний",
      lastName: "Анонімус",
      phone: "+380666666666"
    },
    {
      firstName: "Лілія",
      lastName: "Олдровна",
      phone: "+380504691254",
      gender: "female"
    },
    {
      firstName: "Маршен",
      lastName: "Еріксонян",
      phone: "+380739452223",
      gender: "male"
    },
    {
      firstName: "Теодор",
      lastName: "Мотсбес",
      phone: "+380956319531",
      gender: "male"
    },
  ];
  const [inputText, setInputText] = useState("");

  const contactItems = contacts.filter(contact => {
    if (inputText === "") {
      return contact;
    } else if (contact.firstName.toLowerCase().includes(inputText.toLowerCase()) || contact.lastName.toLowerCase().includes(inputText.toLowerCase()) || contact.phone.includes(inputText.toLowerCase())) {
      return contact;
    }
  }).map((contact) => {
    return (<li key={contact.phone}>
      {contact.firstName + " "}
      {contact.lastName}<br />
      {contact.phone}<br />
    </li>)
  })

  const handleChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };



  return (
    <div className="contact">
      <input onChange={handleChange} type='text' placeholder='Пошук' value={inputText} />
      <ul>{contactItems}</ul>
    </div>
  );
}
