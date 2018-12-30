var nodemailer = require("nodemailer");

exports.home = async (req, res) => {
  res.render("page1");
};

exports.about = async (req, res) => {
  res.render("about");
};

exports.customers = async (req, res) => {
  res.render("customers");
};

exports.partners = async (req, res) => {
  res.render("partners");
};

exports.sendmail = async (req, res) => {
  const {
    radio,
    firstName,
    lastName,
    email,
    phone,
    company,
    enquiry
  } = req.body;
  // nodemailer Stuff
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "harry.dry@kikapay.com",
      pass: "DavidLuiz4"
    }
  });
  const mailOptions = {
    from: `${firstName} ${lastName}<harry.dry@kikapay.com>`, // sender address
    to: "harry.dry@kikapay.com", // list of receivers
    subject: "Website Enquiry", // Subject line
    html: `
      Website Enquiry from *${radio}*<br>
      Name: ${firstName} ${lastName} <br>
      Email: ${email} <br>
      Phone: ${phone} <br>
      Company: ${company} <br>
      Enquiry: ${enquiry}<br>
      Reply to ${email}
    `
  };
  transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.redirect("/");
};
