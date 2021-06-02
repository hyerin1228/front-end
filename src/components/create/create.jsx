import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./create.module.css"; // eslint-disable-line no-unused-vars
import FieldArray from "./create_fieldArray";


const defaultValues = {
  test: [
    {
      name: "useFieldArray1",
      cardArray: [{ field1: "", field2: "" }]
    },
    {
      name: "useFieldArray2",
      cardArray: [{ field1: "", field2: "" }]
    }
  ]
};


function Create() {
  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    reset,
    setValue
  } = useForm({
    defaultValues
  });
  const onSubmit = (data) => console.log("data", data);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>카드 세트 만들기</h1>

      <FieldArray
        {...{ control, register, defaultValues, getValues, setValue, errors }}
      />

      <button type="button" onClick={() => reset(defaultValues)}>
        Reset
      </button>

      <input type="submit" value="세트 만들기" />
    </form>
  );
}

export default Create;