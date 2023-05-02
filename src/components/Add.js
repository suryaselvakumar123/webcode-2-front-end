import * as yup from "yup";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

const movieValidationSchema = yup.object({
  id: yup.number().min(0, "Id mandatory").required("Required!!"),
  name: yup.string().min(4, "Enter movie name").required("Required!!"),
  poster: yup.string().min(4, "Enter Poster Link").required(" Required!!"),
  rating: yup
    .number()
    .min(0, "Provide Rating")
    .max(100)
    .required("Required!!"),
  trailer: yup.string().min(4, "Enter Trailer Link").required("Required!!"),
  summary: yup
    .string()
    .min(4, "Enter the summary for the movie")
    .required("Required!!"),
});

export default function Add({ movie, setMovie }) {
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      poster: "",
      rating: "",
      trailer: "",
      summary: "",
    },
    validationSchema: movieValidationSchema,
    onSubmit: (newMovie) => {
      setMovie([...movie, newMovie]);
      navigate("/adminboard");
    },
  });

  const navigate = useNavigate();

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ marginLeft: "100px", marginTop: "50px" }}
      className="add-user-form"
    >
      <h1
        style={{
          color: "green",
          fontWeight: "bolder",
          fontFamily: "cursive",
        }}
      >
        Fill the below details to add Movie✨
      </h1>
      <br />
      <TextField
        id="id"
        name="id"
        label="Id"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.id}
        style={{ width: "800px" }}
      />
      <br />
      <br />
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        style={{ width: "800px" }}
      />
      {formik.touched.name && formik.errors.name ? (
        <div style={{ color: "red" }}>{formik.errors.name}</div>
      ) : null}
      <br />
      <TextField
        id="poster"
        name="poster"
        label="Poster"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.poster}
        style={{ width: "800px" }}
      />
      {formik.touched.poster && formik.errors.poster ? (
        <div style={{ color: "red" }}>{formik.errors.poster}</div>
      ) : null}
      <br />
      <TextField
        id="rating"
        name="rating"
        label="Rating"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.rating}
        style={{ width: "800px" }}
      />
      {formik.touched.rating && formik.errors.rating ? (
        <div style={{ color: "red" }}>{formik.errors.rating}</div>
      ) : null}
      <br />
      <TextField
        id="trailer"
        name="trailer"
        label="Trailer"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.trailer}
        style={{ width: "800px" }}
      />
      {formik.touched.trailer && formik.errors.trailer ? (
        <div style={{ color: "red" }}>{formik.errors.trailer}</div>
      ) : null}
      <br />
      <TextField
        id="summary"
        name="summary"
        label="Summary"
        variant="outlined"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.summary}
        style={{ width: "800px" }}
      />
      {formik.touched.summary && formik.errors.summary ? (
        <div style={{ color: "red" }}>{formik.errors.summary}</div>
      ) : null}
      <br />
      <br />
      <Button
        variant="contained"
        type="submit"
        style={{
          backgroundColor: "green",
          color: "white",
          marginRight: "10px",
        }}
      >
        Add Movie
      </Button>
      <Button
        variant="contained"
        onClick={() => navigate("/adminboard")}
        startIcon={<ArrowBackIosIcon />}
        style={{ backgroundColor: "red", color: "white" }}
      >
        Go Back
      </Button>
    </form>
  );
}
