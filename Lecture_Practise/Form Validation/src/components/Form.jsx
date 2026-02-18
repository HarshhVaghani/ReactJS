import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phoneno: "",
    email: "",
    password: "",
  });

  const [error, setErorr] = useState({});

  // handle input change

  const handleChange = (e) => {
    const { firstname, lastname, phoneno, email, password } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // validation for all inputs

  const validate = () => {
    const newError = {};

    // firstname
    if (!formData.firstname.trim()) {
      newError.firstname = "firstname is required!!";
    } else if (formData.firstname.length < 3) {
      newError.firstname = "Name must be at least 3 charcters!!";
    }

    // lastname

    if (!formData.lastname.trim()) {
      newError.lastname = "lastname is required!!";
    } else if (formData.lastname.length < 3) {
      newError.lastname = "Name must be at least 3 charcters!!";
    }

    // phoneno

    if (!formData.phoneno.trim()) {
      newError.phoneno = "phoneno is required!!";
    } else if (!/^\+?[1-9][0-9]{7,14}$/.test(formData.phoneno)) {
      newError.phoneno = "Enter valid phone number!";
    }

    //

    if (!formData.email.trim()) {
      newError.email = "email is required!!";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newError.email = "Enter valid email!";
    }

    // password

    if (!formData.password.trim()) {
      newError.password = "password is required!!";
    } else if (
      !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        formData.password,
      )
    ) {
      newError.password = "Enter valid password!";
    }

    setErorr(newError);

    return Object.keys(newError).length === 0; // true
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Submitted: ", formData);
    } else {
      console.log("Validation failed!");
    }
  };

  return (
    <div className="center">
      <h1 className="heading">Form element in ReactJS</h1>
      <div className="flex items-center h-screen">
        <form className="mx-auto bg-slate-400 p-5" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required=""
                onChange={handleChange}
              />
              {/* error */}
              {
                
              }
              <label
                htmlFor="firstname"
                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required=""
                onChange={handleChange}
              />
              <label
                htmlFor="lastname"
                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phoneno"
                id="phone"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required=""
                onChange={handleChange}
              />
              <label
                htmlFor="phone"
                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Phone number
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="floatingemail"
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required=""
              onChange={handleChange}
            />
            <label
              htmlFor="floating_email"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required=""
              onChange={handleChange}
            />
            <label
              htmlFor="floating_password"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none bg-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
