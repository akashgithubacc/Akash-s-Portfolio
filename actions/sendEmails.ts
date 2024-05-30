"use server";

import React from "react";
import { error } from "console";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend("re_5vYjy4J1_MjuJNKjEZUr8atAGaUN8jzuE");

export const sendEmail = async (FormData: FormData) => {
  const senderEmail = FormData.get("senderEmail");
  const message = FormData.get("message");

  //we did the "message feild too be required in use client, bt as we are calling this message again from .get() function, then its again not inferrring the type."
  //so we need to manually check the typpe of "message" and return error if its null or not string

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid Email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid Message",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["akashsinghnitrkl@gmail.com"],
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
