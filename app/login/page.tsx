"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/Login.module.css";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.email || !form.password) {
      setError("Please fill out all the fields!!!");
      return;
    }

    if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(form.email)) {
      setError("Invalid email format!");
      return;
    }

    setError("");
    alert("Login successfully!!!");
    router.push("/");
  };

  return (
    <div className="wrapper">
      <div className="formContent">
        <h2>Login</h2>
        <form>
          <input className="input" type="text" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          <input className="input" type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
          {error && <p className="error">{error}</p>}
          <button type="button" className="button" onClick={handleSubmit}>Log In</button>
        </form>
      </div>
    </div>
  );
}
