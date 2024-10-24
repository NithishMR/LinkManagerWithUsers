import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function SignInForm({ onUserLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const details = { email, password };

    try {
      const response = await fetch("http://localhost:5000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("User signed in:", result);
        alert("User signed in successfully!");
        onUserLogin(result.user); // Pass user details to App component
        navigate("/"); // Redirect to the Dashboard after signing in
      } else {
        console.error("Sign-in failed:", result.message);
        setErrorMessage(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Sign in
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Sign in to your account or{" "}
          <Link to={"/signup"} className="text-purple-600 hover:underline">
            sign up
          </Link>
          .
        </p>
        {errorMessage && (
          <div className="mb-4 text-red-600 text-center">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 text-sm text-gray-600"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-purple-600 hover:underline">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition"
          >
            Sign in
          </button>
        </form>
        <p className="mt-4 text-xs text-center text-gray-500">
          By signing in, you agree to our{" "}
          <a href="#" className="text-purple-600 hover:underline">
            terms of service
          </a>{" "}
          and{" "}
          <a href="#" className="text-purple-600 hover:underline">
            privacy policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default SignInForm;
