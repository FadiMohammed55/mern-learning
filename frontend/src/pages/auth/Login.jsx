import { useState } from "react";
import api from "../../api/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card w-96 bg-base-100 shadow-xl p-6"
    >
      <nav className="navbar bg-base-200">
        <a className="btn btn-ghost">Task Manager</a>
      </nav>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input input-bordered"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input input-bordered"
      />

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
}

export default Login;
