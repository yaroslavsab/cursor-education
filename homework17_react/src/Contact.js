import { useState } from 'react';




export default function Contact() {
  const contactss = [
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
  const [contacts, setContacts] = useState(contactss);
  const [inputText, setInputText] = useState("");
  const [maleCheckbox, setMaleCheckbox] = useState(false);
  const [femaleCheckbox, setFemaleCheckbox] = useState(false);

  const contactItems = contacts.filter(contact => {
    const isMatchingText = inputText === "" ||
      contact.firstName.toLowerCase().includes(inputText.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(inputText.toLowerCase()) ||
      contact.phone.includes(inputText);

    const isMatchingGender = (maleCheckbox && contact.gender === "male") ||
      (femaleCheckbox && contact.gender === "female") ||
      (!maleCheckbox && !femaleCheckbox);

    return isMatchingText && isMatchingGender;
  }).map((contact) => {
    return (<li key={contact.phone}>
      {contact.firstName + " "}
      {contact.lastName}<br />
      {contact.phone}<br />
    </li>)
  })

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const handleCheckboxChange = (gender) => {
    if (gender === 'male') {
      setMaleCheckbox(!maleCheckbox);
    } else if (gender === 'female') {
      setFemaleCheckbox(!femaleCheckbox);
    }
  };



  return (
    <div className="contact">
      <input onChange={handleChange} type='text' placeholder='Пошук' value={inputText} />
      <label>
        <input type="checkbox" checked={maleCheckbox} onChange={() => handleCheckboxChange('male')} />
        Чоловік
      </label>
      <label>
        <input type="checkbox" checked={femaleCheckbox} onChange={() => handleCheckboxChange('female')} />
        Жінка
      </label>
      <ul>{contactItems}</ul>
    </div>
  );
}
