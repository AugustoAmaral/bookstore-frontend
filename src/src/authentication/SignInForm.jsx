import React from "react";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import { Formik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { Button } from "@material-ui/core";

const styles = theme => ({
  formControl: {
    marginTop: theme.spacing.unit * 2
  },
  submit: {
    marginTop: theme.spacing.unit * 3
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
        <Button
          className={classes.submit}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          {t("sign_in")}
        </Button>
      </form>
    );
  }
);

const SignInForm = props => {
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
        props.formState.set("username", values.username);
        props.formState.set("password", values.password);
        props.onSubmit();
        setSubmitting(false);
      }}
      render={formikProps => <Form {...formikProps} id={props.id} />}
    />
  );
};

export default SignInForm;