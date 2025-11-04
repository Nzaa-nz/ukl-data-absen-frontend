"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Simulasi login lokal tanpa server
    if (username === "admin" && password === "1234") {
      localStorage.setItem("token", "dummy-token");
      router.push("/dashboard");
    } else {
      setError("Username atau password salah!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <form
        onSubmit={handleLogin}
        className="bg-gray-900 shadow-md rounded-xl p-8 w-80 text-white"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Login Presensi</h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 mb-3 rounded text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-3 rounded text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
