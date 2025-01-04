import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { translation } from "../utils/translation";

export const ContactMeViaEmail = () => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const messageTextarea = form.current.querySelector(
        '[name="message"]'
      ) as HTMLTextAreaElement | null;
      const userNameInput = form.current.querySelector(
        '[name="user_name"]'
      ) as HTMLInputElement | null;
      const userEmailInput = form.current.querySelector(
        '[name="user_email"]'
      ) as HTMLInputElement | null;

      if (!messageTextarea || !userNameInput || !userEmailInput) {
        console.error("Could not find one or more required elements.");
        return; // Stop the function execution
      }

      if (!userNameInput.value.trim()) {
        userNameInput.style.border = "2px solid red";
        toast.error("Please enter your name.");
        return;
      } else {
        userNameInput.style.border = "none";
      }

      if (!userEmailInput.value.trim()) {
        userEmailInput.style.border = "2px solid red";
        toast.error("Please enter your email.");
        return;
      } else {
        userEmailInput.style.border = "none";
      }

      if (!messageTextarea.value.trim()) {
        messageTextarea.style.border = "2px solid red"; // Highlighting the textarea
        toast.error("Please enter your message.");
        return; // Stop the function execution
      } else {
        messageTextarea.style.border = "none"; // Reset the border style
      }

      emailjs
        .sendForm(
          "service_v0sfv5v",
          "template_twvpqhu",
          form.current,
          "QUM0EqjRVwbzq6EAc"
        )
        .then(
          (result) => {
            toast.success("Email sent!");
          },
          (error) => {
            toast.error(
              "Oops! Something went wrong! Please notify me via my other social media"
            );
          }
        );
    }
  };
  return (
    <div className="contact-via-email-container">
      <ToastContainer></ToastContainer>
      <h2>{translation.tr_send_me_an.en}</h2>

      <form ref={form} onSubmit={sendEmail} className="form-send-email">
        <div className="form-input">
          <div className="row-1">
            <label htmlFor="user_name" className="text-input">
              {translation.tr_name.en}
            </label>
            <input type="text" name="user_name" />
            <label htmlFor="user_email">{translation.tr_email.en}</label>
            <input type="email" name="user_email" className="text-input" />
          </div>

          <div className="row-2">
            <label htmlFor="message">{translation.tr_message.en}</label>
            <textarea name="message" id="message" cols={30} rows={10} />
          </div>
        </div>

        <input
          type="submit"
          value={translation.tr_send_email.en}
          className="send-email-button"
        />
      </form>
    </div>
  );
};
