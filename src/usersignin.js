import React from "react";

import { useFormik } from "formik";
import { signInSchema } from "./schemas/signinschema";

 
    const initialValues = {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    };
    const UserSignIn = () => {
        const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        
        useFormik({
          initialValues,
          validationSchema: signInSchema,
          onSubmit: (values, action) => {
            console.log("🚀 ~ file: NewSignIn.js:17 ~ values", values);
            action.resetForm();
          },
        });
        



    return(
        <form onSubmit={handleSubmit}>
        <div className="container">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="name" name="name"  
          value={values.name} onChange={handleChange} onBlur={handleBlur}/>
          {errors.name && touched.name ? (<p className="form-error">{errors.name}</p>) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email" name="email"
           value={values.email} onChange={handleChange} onBlur={handleBlur}/>
           {errors.email && touched.email ? (<p className="form-error">{errors.email}</p>) : null}
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password" name="password"
           value={values.password} onChange={handleChange} onBlur={handleBlur}/>
           {errors.password && touched.password ? (<p className="form-error">{errors.password}</p>) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleConfirmPassword1" className="form-label">Confirm Password</label>
          <input type="confirmpassword" className="form-control" id="exampleConfirmPassword1" placeholder="confirm_password" name="confirm_password"  
          value={values.confirm_password} onChange={handleChange} onBlur={handleBlur}/>
          {errors.confirm_password && touched.confirm_password ? (<p className="form-error">{errors.confirm_password}</p>) : null}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    )
}
export default UserSignIn;
