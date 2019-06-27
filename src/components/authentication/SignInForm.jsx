import React from "react";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

const styles = theme => ({
  formControl: {
    marginTop: theme.spacing(2)
  }
});

const Form = withStyles(styles)(
  ({
    values,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    classes,
    id,
    ...props
  }) => {
    const { t } = useTranslation();
    return (
      <form id={id} onSubmit={handleSubmit} noValidate>
        <TextField
          name="username"
          label={t("username")}
          variant="filled"
          value={values.username}
          helperText={errors.username}
          error={Boolean(errors.username)}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          className={classes.formControl}
          fullWidth
          required
          autoFocus
        />
        <TextField
          name="password"
          label={t("password")}
          variant="filled"
          value={values.password}
          helperText={errors.password}
          error={Boolean(errors.password)}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          className={classes.formControl}
          fullWidth
          required
          type="password"
        />
      </form>
    );
  }
);

const SignInForm = ({ signForm, onSubmit, id }) => {
  const { t } = useTranslation();
  return (
    <Formik
      initialValues={{
        username: "",
        password: ""
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required(
          t("pleaseFillTheField", { field: t("username") })
        ),
        password: Yup.string().required(
          t("pleaseFillTheField", { field: t("password") })
        )
      })}
      onSubmit={(values, { setSubmitting }) => {
        signForm.set("username", values.username);
        signForm.set("password", values.password);
        onSubmit();
        setSubmitting(false);
      }}
      render={formikProps => <Form {...formikProps} id={id} />}
    />
  );
};

export default SignInForm;
