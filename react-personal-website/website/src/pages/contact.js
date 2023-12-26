import React from "react";
import { Button, FormControlLabel, FormHelperText, MenuItem, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import BodyWrapper from "../components/body-wrapper";

import { useFormik } from "formik";
import * as yup from "yup";


// ---------------------------------------------------------

const validationSchema = yup.object({
  name: yup
    .string("Enter your name.")
    .required("Name is required."),
  email: yup
    .string("Enter your email.")
    .email("Enter a valid email.")
    .required("Email is required."),
  purpose: yup
    .string("Enter your purpose.")
    .required("Purpose is required."),
  mobileGame: yup
    .string().when("purpose", {
      is: (purpose) => (purpose === "Mobile Games"),
      then: () => yup
        .string("Select your game.")
        .required("Game selection is required."),
      otherwise: () => yup
        .string(),
    }),
  subject: yup
    .string("Enter your subject.")
    .required("Subject is required."),
  message: yup
    .string("Enter your message.")
    .min(5, "Message is too short.")
    .required("Message is required."),
});

const purposeOptions = [
  "General",
  "Mobile Games",
];

const mobileGames = [
  "Frankrit Eats Meat",
  "Shark-A-Boom",
  "Dino with a Gun",
];


// ---------------------------------------------------------

const Contact = () => {
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      purpose: "",
      mobileGame: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  function resetFormikFieldCondition(fieldName, compareOne, isNotCompareTwo) {
    if (compareOne !== isNotCompareTwo) {
      formik.setFieldValue(fieldName, "", false)
      formik.setFieldTouched(fieldName, false, false);
      formik.setFieldError(fieldName, false, false);
    }
  };

  return (
    <>
      <BodyWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="* Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />

            <TextField
              fullWidth
              id="email"
              name="email"
              label="* Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              fullWidth
              select
              id="purpose"
              name="purpose"
              label="* Purpose"
              value={formik.values.purpose}
              onChange={(e) => {
                formik.handleChange(e);
                resetFormikFieldCondition("mobileGame", formik.values.purpose, "Mobile Games");
              }}
              onBlur={(e) => {
                formik.handleBlur(e);
                resetFormikFieldCondition("mobileGame", formik.values.purpose, "Mobile Games");
              }}
              error={formik.touched.purpose && Boolean(formik.errors.purpose)}
              helperText={formik.touched.purpose && formik.errors.purpose}
            >
              {purposeOptions.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            {formik.values.purpose === "Mobile Games" &&
              <RadioGroup sx={{ px: "20px" }}>
                <Typography
                  variant="body2"
                  color={formik.touched["mobileGame"] && formik.errors["mobileGame"] && theme.palette.error.main}
                >
                  * Select the game:
                </Typography>
                {mobileGames.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    id="mobileGame"
                    name="mobileGame"
                    label={<Typography variant="body2">{option}</Typography>}
                    value={option}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.mobileGame && Boolean(formik.errors.mobileGame)}
                    helperText={formik.touched.mobileGame && formik.errors.mobileGame}
                    control={<Radio
                      sx={{
                        color: formik.touched["mobileGame"] && formik.errors["mobileGame"] && theme.palette.error.main
                      }}
                    />}
                    sx={{
                      color: formik.touched["mobileGame"] && formik.errors["mobileGame"] && theme.palette.error.main
                    }}
                  />
                ))}
                {formik.touched["mobileGame"] && formik.errors["mobileGame"] && (
                  <FormHelperText sx={{ color: theme.palette.error.main }} id="mobileGame">
                    {formik.errors["mobileGame"]}
                  </FormHelperText>
                )}
              </RadioGroup>
            }

            <TextField
              fullWidth
              id="subject"
              name="subject"
              label="* Subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.subject && Boolean(formik.errors.subject)}
              helperText={formik.touched.subject && formik.errors.subject}
            />

            <Stack spacing={0.75}>
              <Typography variant="body2">How can I help?</Typography>
              <FormHelperText id="message">Please do not include confidential or sensitive information in your message.</FormHelperText>
              <TextField
                fullWidth
                multiline
                id="message"
                name="message"
                label="* Message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </Stack>

            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </BodyWrapper>
    </>
  );
}


// ---------------------------------------------------------

export default Contact;