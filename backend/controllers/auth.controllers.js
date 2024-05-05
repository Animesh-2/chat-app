export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
  } catch (error) {}
};

export const login = (req, res) => {
  console.log("LoginUser");
  res.send("LoginUser");
};

export const logout = (req, res) => {
  console.log("LogoutUser");
  res.send("LogoutUser");
};
