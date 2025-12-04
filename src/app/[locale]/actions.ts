"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
import { checkBotId } from "botid/server";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  businessName: z.string().optional(),
  email: z.email("Invalid email address").min(1, "Email is required"),
  phone: z.string().optional(),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export default async function handleContactForm(
  data: z.infer<typeof formSchema>
): Promise<{ success: boolean; errors?: Record<string, string[]> }> {
  const verification = await checkBotId();

  if (verification.isBot) {
    return { success: false, errors: { bot: ["Bot submission detected"] } };
  }

  const validatedData = formSchema.safeParse(data);

  if (!validatedData.success) {
    console.log(
      "Validation errors:",
      validatedData.error.flatten().fieldErrors
    );
    return {
      success: false,
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_SENDER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    }
  });

  await transporter.sendMail({
    from: "Contactform Nomeon <" + process.env.SMTP_SENDER + ">",
    to: "stijn@nomeon.nl",
    subject: `${validatedData.data.name} via contactform`,
    text: `Name: ${validatedData.data.name}
Business Name: ${validatedData.data.businessName || "N/A"}
Email: ${validatedData.data.email}
Phone: ${validatedData.data.phone || "N/A"}
Message:
${validatedData.data.message}
`,
  });

  transporter.close();

  return { success: true };
}
