import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path"; // To handle file paths
import { fileURLToPath } from "url"; // Only if you are using ES modules

dotenv.config();

// For ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const sendEmail = async (email, username) => {
 try{
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Theism Diagnostics" <customer.care@theism.co.in>`,
    to: email,
    subject: "Welcome to the Theism Healthcare Management System!",
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; background-color: #121212; padding: 40px; color: #ffffff;">
        <div style="max-width: 600px; margin: auto; background: #1e1e1e; border-radius: 12px; padding: 30px 40px; box-shadow: 0 0 20px rgba(0,0,0,0.3);">
            <!-- Embedded Logo Image -->
            <div style="text-align: center; margin-bottom: 25px;">
              <img src="cid:logo" alt="Theism Logo" style="width: 120px; height: auto;" />
            </div>

          <h1 style="text-align: center; color: #00e5ff; font-size: 30px; margin-bottom: 10px;">
            Hello, ${username}!
          </h1>
          
          <h3 style="text-align: center; color: #ce93d8; font-weight: 500;">
            Welcome to the <span style="color: #ff4081;">Theism Healthcare Management System</span> 🎯
          </h3>
          
          <p style="font-size: 16px; color: #ccc; text-align: center; margin-top: 20px;">
            We're thrilled to have you on board! 🎉<br />
            Your registration was <strong style="color: #00e676;">successfully completed</strong> ✅
          </p>
          
          <div style="margin: 30px 0; border-top: 1px dashed #555;"></div>
          
          <p style="font-size: 15px; color: #bbbbbb;">
            🔐 Now you can securely manage your healthcare records, book appointments, view your reports, and access all health test data using our powerful Healthcare Management System.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://theism.co.in/login" target="_blank" style="padding: 12px 30px; background: linear-gradient(to right, #00e5ff, #7c4dff); color: #fff; border-radius: 50px; text-decoration: none; font-size: 16px; font-weight: bold; box-shadow: 0 4px 20px rgba(0,0,0,0.4); transition: 0.3s;">
              🔐 Login Now
            </a>
          </div>
          
          <p style="font-size: 13px; color: #999; text-align: center; margin-top: 30px;">
            If this wasn't you, feel free to ignore this email or contact us immediately.
          </p>

          <div style="margin-top: 40px; text-align: center; font-size: 12px; color: #888;">
            🏠 <strong>Theism Health</strong><br/>
            3A/6, B.K. Paul Lane, Kolkata: 700030<br/>
            📞 <a href="tel:+918068196819" style="color: #00e5ff;">080 6819 6819</a><br/>
            📧 <a href="mailto:customer.care@theism.co.in" style="color: #00e5ff;">customer.care@theism.co.in</a><br/>
            🔗 <a href="https://theism.co.in/" target="_blank" style="color:hsl(172, 100%, 50%);">Website</a> | 
            <a href="https://www.instagram.com/theismhealth/" target="_blank" style="color:#c800ff;">Instagram</a> | 
            <a href="https://www.facebook.com/theismhealth" target="_blank" style="color:hsl(242, 100%, 50%);">Facebook</a>
          </div>
        </div>
      </div>
    `,
    attachments: [
      {
        filename: 'logo.png', // Name of the image
        path: path.join(__dirname, 'logo.png'), // Location of the logo in current directory
        cid: 'logo' // Content-ID, must match the "cid:" used in <img>
      }
    ],
  };

  // Send email
  const info = await transporter.sendMail(mailOptions);

  console.log("Email sent: " + info.response);
  return { success: true };
 }
 catch(error){
   console.error("Error sending email:", error.message);
   return { 
    success: false, 
    error: error.message 
  };
 }
};

// Usage Example:
// sendEmail("tanmoy587d@gmail.com", "Tanmay");
