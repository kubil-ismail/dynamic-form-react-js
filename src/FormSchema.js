import * as Yup from "yup";

// Initial Values input
export const initialValues = {
  email: "",
  password: "",
  address: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
};

// Validation Schema input
export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(5).required(),
  address: Yup.string().required(),
  address2: Yup.string(),
  state: Yup.string().required(),
  zip: Yup.string()
    .min(5)
    .matches(/^[0-9]+$/, "Zip only contains number")
    .required(),
});

// Form Input List
export const formInput = [
  {
    name: "email",
    label: "Email",
    placeholder: "Your email address...",
    type: "email",
    grid: 6,
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Your password account...",
    type: "password",
    grid: 6,
  },
  {
    name: "address",
    label: "Address",
    placeholder: "Your main address...",
    type: "text",
    grid: 12,
  },
  {
    name: "address2",
    label: "Address 2",
    placeholder: "Your secondary address...",
    type: "text",
    grid: 12,
  },
  {
    name: "city",
    label: "City",
    placeholder: "Your city...",
    type: "text",
    grid: 6,
  },
  {
    name: "state",
    label: "State",
    placeholder: "Your state...",
    type: "select",
    options: [
      { label: "Indonesia", value: "indonesia" },
      { label: "Other", value: "other" },
    ],
    grid: 4,
  },
  {
    name: "zip",
    label: "Zip",
    placeholder: "Your zip...",
    type: "text",
    grid: 2,
  },
];
