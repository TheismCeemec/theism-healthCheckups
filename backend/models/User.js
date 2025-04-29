import mongoose from "mongoose";

// Custom Validator for Mobile Number
const validateMobile = (value) => {
  // Custom logic: Here, we ensure the mobile number is a 10-digit number
  // and you can add more custom rules (e.g., not starting with certain digits).
  return /^[0-9]{10}$/.test(value);
};

// Custom Validator for Password (example: requires at least one number and one special character)
const validatePassword = (value) => {
  return /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/.test(value); // At least 6 chars, one digit, one special char
};

const UserSchema = new mongoose.Schema(
    {
        username: { 
            type: String, 
            required: [true, "Username is required"],  // Built-in validation with custom error message
            trim: true,
            minlength: [3, "Username must be at least 3 characters long"],  // Built-in validation for min length
            maxlength: [50, "Username cannot be longer than 50 characters"] // Built-in validation for max length
        },
        
        email: { 
           type: String, 
           trim: true,
           lowercase: true,
           unique: true, 
           required: [true, "Email is required"],
           match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email address"]
        },

        password: { 
          type: String, 
          required: [true, "Password is required"],  // Built-in validation
          minlength: [4, "Password must be at least 4 characters long"],  // Built-in validation
    // validate: {
    //     validator: function(value) {
    //         return /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/.test(value);
    //     },
    //     message: "Password must contain at least one number and one special character"
    // }            
        },
        
        mobile: { 
            type: String, 
            required: [true, "Mobile number is required"],  // Built-in validation
            unique: true,
            match: [/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"],  // Built-in validation
            validate: {  // Custom mobile validation
              validator: validateMobile,
              message: "Mobile number must be exactly 10 digits"
            }
        },
    },
    {
      timestamps: true,
      toJSON: {
        transform: function (doc, ret) {
          delete ret.__v;
          return ret;
        }
      },
      toObject: {
        transform: function (doc, ret) {
          delete ret.__v;
          return ret;
        }
      }
    }
);

export default mongoose.model("User", UserSchema);
