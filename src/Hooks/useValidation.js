import { useEffect, useState } from "react";

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState("");
  const [minLengthError, setMinLengthError] = useState("");
  const [maxLengthError, setMaxLengthError] = useState("");
  const [isEmail, setEmail] = useState("");
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          if (value) {
            setEmpty("");
          } else {
            setEmpty("Поле не может быть пустым");
          }
          break;
        case "minLength":
          if (value.length < validations[validation]) {
            setMinLengthError("Мало символов");
          } else {
            setMinLengthError("");
          }
          break;
        case "maxLength":
          if (value.length > validations[validation]) {
            setMaxLengthError("Много символов");
          } else {
            setMaxLengthError("");
          }
          break;
        case "isEmail":
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          re.test(String(value).toLowerCase())
            ? setEmail("")
            : setEmail("Введите корректный емайл");
          break;
        default:
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || maxLengthError || minLengthError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, maxLengthError, minLengthError, isEmail]);

  return { isEmpty, maxLengthError, minLengthError, isEmail, inputValid };
};
