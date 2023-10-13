import { useTheme } from "@mui/material/styles";
import { Grid, TextField, useMediaQuery } from "@mui/material";
import { formKeys } from "../../utils/constants";

function ContactForm({
  formValues,
  setformValues,
  isError,
  touched,
  setTouched,
}) {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (e) => {
    setformValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  return (
    <div>
      <Grid container rowSpacing={3} columnSpacing={isMdDown ? 2 : 10}>
        {formKeys.map((item, index) => (
          <Grid
            item
            md={item.width ?? 6}
            sm={item.width ?? 6}
            xs={item.width ?? 6}
            key={index}
          >
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
