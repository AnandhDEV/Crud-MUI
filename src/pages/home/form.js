import { Grid, TextField } from "@mui/material";

let formKeys = [
  { name: "firstName", label: "First name" },
  { name: "lastName", label: "Last name" },
  { name: "email", label: "Email" },
  { name: "phone", label: "Phone" },
  { name: "city", label: "City" },
  { name: "state", label: "State" },
  { name: "country", label: "Country" },
  { name: "postalcode", label: "Postal Code" },
  { name: "address", label: "Address", width: 12 },
];

function ContactForm({
  formValues,
  setformValues,
  isError,
  touched,
  setTouched,
}) {
  const handleChange = (e) => {
    setformValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  return (
    <div>
      <Grid container rowSpacing={3} columnSpacing={10}>
        {formKeys.map((item, index) => (
          <Grid item md={item.width ?? 6} key={index}>
            <TextField
              required
              onBlur={handleBlur}
              error={(isError || touched[item.name]) && !formValues[item.name]}
              helperText={
                (isError || touched[item.name]) &&
                !formValues[item.name] &&
                "Required"
              }
              id="standard-basic"
              name={item.name}
              value={formValues[item.name] ?? ""}
              variant="standard"
              label={item.label}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ContactForm;
