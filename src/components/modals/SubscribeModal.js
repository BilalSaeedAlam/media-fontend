import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
// Components
import { CustomModal } from "../../shared";
import { useAppContext } from "../../contexts/appContext";
// Api's
import { addSubscriber } from "../../apis";

const SubscribeSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  size: Yup.string().required("Size is required!"),
});

export default function SubscribeModal({ show, setShow }) {
  const { dispatch } = useAppContext();
  const [loading, setLoading] = useState(false);
  const data = [
    { action: "", name: "Select Size" },
    { action: "L", name: "L" },
    { action: "M", name: "M" },
    { action: "S", name: "S" },
  ];
  return (
    <CustomModal show={show} setShow={setShow} title="" size="md">
      <div className="subscribe-modal">
        <h4>JOIN THE WAITLIST</h4>
        <p>
          Please enter your email and we will let you know when your item
          becomes available.
        </p>

        <Formik
          initialValues={{
            size: "",
            email: "",
            isSubscribe: false,
          }}
          validationSchema={SubscribeSchema}
          onSubmit={async (values) => {
            const payload = {
              email: values.email,
              size: values.size,
              isSubscribe: values.isSubscribe,
            };
            setLoading(true);
            const result = await addSubscriber(payload);
            if (result?.data?.data && result?.data?.is_success) {
              dispatch({ type: "USER_DATA", value: result?.data?.data });
              setLoading(false);
              setShow(false);
            } else {
              toast.error(result?.data?.message, { autoClose: 1000 });
              setLoading(false);
            }
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
              {/* Item Size */}
              <p className="sub-heading padding-top">Size</p>
              <select
                name="size"
                value={values.size}
                onChange={handleChange}
                onBlur={handleBlur}
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
              {/* Subscriber Email */}
              <p className="sub-heading padding-top">Email</p>
              <div>
                <Field name="email" type="email" className="email" />
                {errors.email && touched.email ? (
                  <div className="error-text-color">{errors.email}</div>
                ) : null}
              </div>
              {/* Subscribe Button */}
              <div className="btn-wrapper">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-submit"
                >
                  {!loading ? (
                    "GET NOTIFIED"
                  ) : (
                    <div
                      className="spinner-grow text-light"
                      role="status"
                    ></div>
                  )}
                </button>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="isCheck"
                  value={values.isSubscribe}
                  onChange={() =>
                    setFieldValue("isSubscribe", !values.isSubscribe)
                  }
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
