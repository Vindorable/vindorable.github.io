import React from "react";
import { Button, FormHelperText, Stack, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
  subject: yup
    .string("Enter your subject.")
    .required("Subject is required."),
  message: yup
    .string("Enter your message.")
    .min(5, "Message is too short.")
    .required("Message is required."),
});


// ---------------------------------------------------------

const Contact = () => {
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Stack
        p={2}
        sx={{
          width: "100vw",
          maxWidth: "100%", // This is very Important else there will be the 100vw scrollbar issue.
          flexGrow: 1,
          height: "100%",
          overflowY: "scroll",
        }}
      >
        <Stack
          direction={"row"}
          sx={{ width: "100%" }}
          justifyContent={"space-evenly"}
        >
          <Stack
            spacing={1}
            p={3}
            sx={{
              backgroundColor: theme.palette.background.paper,
              boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
              width: {
                xs: "auto", // 0px
                md: "80%",  // 900px
                lg: "60%",  // 1200px
              },
            }}
          >
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
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}


// ---------------------------------------------------------

export default Contact;