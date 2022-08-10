import React from "react";
import { CustomModal } from "../../shared";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SubscribeSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  size: Yup.string().required("Size is required!"),
});

export default function SubscribeModal({ show, setShow }) {
  const data = [
    { action: "", name: "Select Size" },
    { action: "L", name: "L" },
    { action: "M", name: "M" },
    { action: "S", name: "S" },
  ];
  return (
    <CustomModal show={show} setShow={setShow} title="">
      <div className="subscribe-modal">
        <h4>JOIN THE WAITLIST</h4>
        <p>
          Please enter your email and we will let you know when your item
          becomes available.
        </p>

        <Formik
          initialValues={{
            email: "",
            size: "",
            check: false,
          }}
          validationSchema={SubscribeSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({
            errors,
            touched,
            values,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            setFieldValue,
          }) => (
            <Form>
              {/* <DropDown buttonText="Select Size" items={data}></DropDown> */}

              <p className="sub-heading padding-top">Size</p>

              <select
                name="size"
                value={values.size}
                onChange={handleChange}
                onBlur={handleBlur}
                // style={{ display: "block" }}
              >
                {data &&
                  data.length > 0 &&
                  data.map((item, index) => {
                    return (
                      <option value={item.action} label={item.name} key={index}>
                        {item.name}
                      </option>
                    );
                  })}
              </select>
              {errors.size && touched.size ? (
                <div className="error-text-color">{errors.size}</div>
              ) : null}
              <p className="sub-heading padding-top">Email</p>
              <div>
                <Field name="email" type="email" className="email" />
                {errors.email && touched.email ? (
                  <div className="error-text-color">{errors.email}</div>
                ) : null}
              </div>
              <div className="btn-wrapper">
                <button
                  type="submit"
                  //disabled={isSubmitting}
                  className="btn-submit"
                >
                  GET NOTIFIED
                </button>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="isCheck"
                  value={values.check}
                  onChange={() => setFieldValue("check", !values.check)}
                />
                <label className="form-check-label">
                  Subscribe to our newsletter
                </label>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </CustomModal>
  );
}
