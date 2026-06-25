import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [role, setRole] =
    useState("User");

  const navigate =
    useNavigate();

  const registerUser =
    async () => {
     if (!name || !email || !password) {
  alert("All fields are required");
  return;
}

if (!email.includes("@")) {
  alert("Enter a valid email");
  return;
}

if (password.length < 6) {
  alert("Password must be at least 6 characters");
  return;
}
      try {

        await axios.post(
          "http://localhost:5000/api/auth/register",
          {
            name,
            email,
            password,
            role
          }
        );

        alert(
          "Registration Successful"
        );

        navigate("/");

      } catch (error) {

        alert(
          error.response?.data?.message ||
          "Registration Failed"
        );

      }

    };

  return (

    <div
      style={{
        textAlign:"center",
        marginTop:"50px"
      }}
    >

      <h2>
        Register
      </h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e)=>
          setName(
            e.target.value
          )
        }
      />

      <br /><br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e)=>
          setEmail(
            e.target.value
          )
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>
          setPassword(
            e.target.value
          )
        }
      />

      <br /><br />

      <select
        value={role}
        onChange={(e)=>
          setRole(
            e.target.value
          )
        }
      >
        <option>
          User
        </option>

        <option>
          Admin
        </option>

      </select>

      <br /><br />

      <button
        onClick={registerUser}
      >
        Register
      </button>

      <p>

        Already have an account?

        <Link to="/">
          Login
        </Link>

      </p>

    </div>

  );
}

export default Register;