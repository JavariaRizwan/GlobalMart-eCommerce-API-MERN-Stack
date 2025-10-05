const User = require("../schemas/user-schema");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");

// Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists!");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).send("User registered successfully!");
  } catch (error) {
    res.status(500).send(`Error registering user: ${error.message}`);
  }
};

// Login User
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send("User not found!");

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send("Invalid credentials!");

    const token=await jwt.sign({
        id:user._id, email: user.email, password:user.password
    },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN || '7d'
        }
    )


    res.status(200).json({message: "Login successful!", token});
  } catch (error) {
    res.status(500).send(`Error logging in user: ${error.message}`);
  }
};

module.exports = { registerUser, login };
