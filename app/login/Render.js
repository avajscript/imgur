"use client";
import React from "react";
import styled from "styled-components";
import COLORS from "../../data/colors";
import { useForm } from "react-hook-form";
import { login, signup } from "@/lib/login";

const Cont = styled.div`
  form {
    margin: 80px auto;
    border: 1px solid black;
    width: 600px;
    padding: 32px;
  }
`;

const Render = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    signup(data);
  };

  return (
    <Cont colors={COLORS}>
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field">
          <label>
            <h5>Email *</h5>
            <input
              type="text"
              className="mar-bottom-8"
              name="email"
              {...register("email", {
                required: true,
                pattern: /^.+@.+\..+$/,
              })}
            />
          </label>
          {errors.email && (
            <p className="error">Email must be in the form john@gmail.com</p>
          )}
        </div>

        <div className="input-field">
          <label>
            <h5>Password *</h5>
            <input
              className="mar-bottom-8"
              name="password"
              type="password"
              {...register("password", { required: true, pattern: /^\S{8,}$/ })}
            />
          </label>
          {errors.password && (
            <p className="error">Password must be at least 8 characters</p>
          )}
        </div>

        <div className="input-field">
          <label>
            <h5>Confirm Password *</h5>
            <input
              type="password"
              name="passwordConfirm"
              className="mar-bottom-8"
              {...register("passwordConfirm", {
                required: true,
                validate: (value) =>
                  value === password || "The password do not match",
              })}
            />
          </label>
          {errors.passwordConfirm && (
            <p className="error">The password do not match</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </Cont>
  );
};

export default Render;
