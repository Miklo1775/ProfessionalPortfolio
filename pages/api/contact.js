const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}\r\n
  `;

  const data = {
    to: "constvictorequaltonull@gmail.com",
    from: "thelegendofvictor@gmail.com",
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };
  // console.log("BODY", body);

  await mail.send(data);
  res.status(200).json({ status: "OK" });
};
