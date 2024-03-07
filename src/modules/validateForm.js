export const validateName = (name, setName, validatedNameRef) => {
  if (!name.val) {
    setName({
      ...name,
      isError: true,
      errorMsg: "Please input your name",
    });
    validatedNameRef.current = false;
    return;
  }
  setName({
    ...name,
    isError: false,
    errorMsg: "",
  });
  validatedNameRef.current = true;
};

export const validateEmail = (email, setEmail, validatedEmailRef) => {
  if (!email.val) {
    setEmail({
      ...email,
      isError: true,
      errorMsg: "Please input your email",
    })
    validatedEmailRef.current = false;
    return;
  }
  const reg = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  if (!reg.test(email.val)) {
    setEmail({
      ...email,
      isError: true,
      errorMsg: "Invalid email",
    });
    validatedEmailRef.current = false;
    return;
  }
  setEmail({
    ...email,
    isError: false,
    errorMsg: "",
  });
  validatedEmailRef.current = true;
};

export  const validatePhone = (phoneNum, setPhoneNum, validatedPhoneRef) => {
  if (!phoneNum.val) {
    setPhoneNum({
      ...phoneNum,
      isError: true,
      errorMsg: "Please input your phone number",
    });
    validatedPhoneRef.current = false;
    return;
  }
  const reg = /^\d{11}$/;
  if (!reg.test(phoneNum.val)) {
    setPhoneNum({
      ...phoneNum,
      isError: true,
      errorMsg: "Invalid phone number",
    });
    console.log("Invalid phone num", reg.test(phoneNum.val));
    validatedPhoneRef.current = false;
    return;
  }
  setPhoneNum({
    ...phoneNum,
    isError: false,
    errorMsg: "",
  });
  validatedPhoneRef.current = true;
};

export const validatePassword = (password, setPassword, validatedPassRef) => {
  if (!password.val) {
    setPassword({
      ...password,
      isError: true,
      errorMsg: "Please input your password",
    });
        validatedPassRef.current = false;

    return;
  }
  if (password.val.length < 6) {
    setPassword({
      ...password,
      isError: true,
      errorMsg: "Password should be more than 6 characters",
    });
    validatedPassRef.current = false;
    return;
  }
  setPassword({
    ...password,
    isError: false,
    errorMsg: "",
  });
  validatedPassRef.current = true;
};
