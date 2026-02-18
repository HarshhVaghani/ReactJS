import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

const Formik3 = () => {

  const initialValues = {
    firstname: "",
    lastname: "",
    phoneno: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    phoneno: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div className="center">
      <h1 className="heading">Form element in ReactJS</h1>
      <div className="flex items-center h-screen">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          <Form
            className="mx-auto bg-slate-400 p-5"
          >
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="firstname"
                  className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  First name
                </label>
                <ErrorMessage name="firstname" component={"div"} />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="lastname"
                  className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Last name
                </label>
                <ErrorMessage name="lastname" />
              </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <div className="relative z-0 w-full mb-5 group">
                <Field
                  type="tel"
                  name="phoneno"
                  id="phone"
                  className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="phone"
                  className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Phone number
                </label>
                <ErrorMessage name="phoneno" />
              </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <Field
                type="email"
                name="email"
                id="floatingemail"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_email"
                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Email address
              </label>
              <ErrorMessage name="email" />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <Field
                type="password"
                name="password"
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_password"
                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Password
              </label>
              <ErrorMessage name="password"/>
            </div>
            <button
              type="submit"
              className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none bg-blue-500"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Formik3;
