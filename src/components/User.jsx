import React, {useState, useEffect} from "react";


function User() {

  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    city: '',
    street: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // const newForm = JSON.stringify(form)
    console.log('Сохранено', form);
  };


  return (
    <>
    <h3>User Form</h3>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={form.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={form.username}
        onChange={handleInputChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="City"
        name="city"
        value={form.city}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Street"
        name="street"
        value={form.street}
        onChange={handleInputChange}
      />
      <button>Save</button>
      <button>Cancel</button>
    </form>
    </>
  );
}

export default User;


// function UserProfileForm({ user }) {
//   const [form, setForm] = useState({
//     name: '',
//     username: '',
//     email: '',
//     city: '',
//     street: '',
//   });
//   const handleNameChange = (e) => {
//     setForm({ ...form, name: e.target.value });
//   };

//   const handleEmailChange = (e) => {
//     setForm({ ...form, email: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Здесь вы можете отправить обновленные данные на сервер
//     console.log('Обновленные данные:', form);
//   };

//   return (
//     <div>
//       <h2>Измените свой профиль</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Имя пользователя:
//           <input
//             type="text"
//             value={form.name}
//             onChange={handleNameChange}
//           />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input
//             type="email"
//             value={form.email}
//             onChange={handleEmailChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Сохранить</button>
//         <button type="submit">Cancel</button>
//       </form>
//     </div>
//   );
// }

// export default UserProfileForm;
