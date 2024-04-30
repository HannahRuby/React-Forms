import React, { useState } from "react";

// export default function myForm() {
//   const [name, setName] = useState(""); //state value

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   // handle form input field value being changed by user
//   function handleInputChange(event) {
//     setName(event.target.value);
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name</label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         value={name}
//         onChange={handleInputChange}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// console.log("input change");

export default function MyForm() {
  // form values with initial values
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    country: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", formValues);
  }
  function handleInputChange(event) {
    setFormValues({
      ...formValues, // the spread operator will add all existing values
      [event.target.name]: event.target.value, // then we add the new value using the form field "name" attribute and the value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
      />
      <label htmlFor="country">Country</label>
      <input
        type="country"
        id="country"
        name="country"
        value={formValues.country}
        onChange={handleInputChange}
      />
      <p>Current value is: {formValues.name}</p>
      <p>Current value is: {formValues.email}</p>
      <p>Current value is: {formValues.country}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
