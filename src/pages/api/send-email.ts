import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  console.log(req.body);

  const { name, email, message, contactingFor } = req.body;

  if (!name || !email || !message || !contactingFor) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mrumair775@gmail.com"!,
        pass: "yvyheekfyfpzcdfp"!,
      },
    });

    const mailOptions = {
      //   from: `"${name}" <${email}>`,
      to: "umair.codedeveloper@gmail.com"!,
      subject: `Are you available for ${contactingFor} role`,
      html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
    <h2 style="color: #10b981; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">📬 This is a Automated genrated email  you are reciving from your portfolio, someone try to contact you.<br /> Following are the details of the person how try to contact you</h2>

    <p style="margin: 10px 0;">
      <strong style="color: #333;">👤 Name:</strong>
      <span style="color: #555;">${name}</span>
    </p>

    <p style="margin: 10px 0;">
      <strong style="color: #333;">📧 Email:</strong>
      <span style="color: #555;">${email}</span>
    </p>

    <p style="margin: 10px 0;">
      <strong style="color: #333;">📄 Message:</strong><br />
      <span style="color: #555;">${message.replace(/\n/g, "<br>")}</span>
    </p>

    <hr style="margin: 20px 0;" />
    <p style="font-size: 12px; color: #999;">You received this message via your portfolio contact form.</p>
  </div>
`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ message: "Failed to send email." });
  }
}
