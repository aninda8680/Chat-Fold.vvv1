// src/pages/AuthPage.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Backend/AuthContext";
import { useNavigate } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

export default function AuthPage() {
  const { loginWithGoogle, loginWithEmail } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit } = useForm<FormData>();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      await loginWithEmail(data.email, data.password);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md bg-slate-900 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{isLogin ? "Sign In" : "Create Account"}</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full p-2 rounded bg-slate-800 border border-slate-700"
            required
          />
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full p-2 rounded bg-slate-800 border border-slate-700"
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 p-2 rounded font-semibold"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <button
          onClick={handleGoogle}
          className="mt-4 w-full bg-white text-black p-2 rounded font-semibold"
        >
          Continue with Google
        </button>

        <p className="text-sm mt-4 text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button className="text-red-400 underline" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
}
