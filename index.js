const { Auth, LoginCredentials } = require("two-step-auth");
  
async function login(emailId) {
  try {
    const res = await Auth(emailId, "Company Name");
    console.log(res);
    console.log(res.mail);
    console.log(res.OTP);
    console.log(res.success);
  } catch (error) {
    console.log(error.LoginCredentials);
  }
}

LoginCredentials.mailID = "email"; 

LoginCredentials.password = "password"; 
LoginCredentials.use = true;

  
login("enterloginemail");