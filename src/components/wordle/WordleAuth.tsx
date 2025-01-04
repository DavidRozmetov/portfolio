import { SetStateAction, useEffect, useState } from "react";
import { Password } from "./Password";
import { toast } from "react-toastify";

interface Passwords {
  password: string | undefined;
  setPassword: React.Dispatch<SetStateAction<string | undefined>>;
}
export const WordleAuth = (props: Passwords) => {
  const password = props.password;
  const setPassword = props.setPassword;

  return (
    <div className="wordle-auth-container">
      <Password password={password} setPassword={setPassword} />
    </div>
  );
};
