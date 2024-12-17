import { useState } from "react";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [emailid, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      emailid,
      password,
    };

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        // console.log("User registered:", result);
        alert("User registered successfully!");
      } else {
        console.error("Signup failed:", result.message);
        alert(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-5">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Sign up
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Create an account or{" "}
          <Link to={"/signin"} className="text-purple-600 hover:underline">
            sign in
          </Link>
          .
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="emailid"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={emailid}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4 relative">
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
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="marketingConsent"
              checked={marketingConsent}
              onChange={(e) => setMarketingConsent(e.target.checked)}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label
              htmlFor="marketingConsent"
              className="ml-2 text-sm text-gray-600"
            >
              I do not want to receive emails with advertising, news,
              suggestions or marketing promotions.
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition"
          >
            Sign up
          </button>
        </form>
        <p className="mt-4 text-xs text-center text-gray-500">
          By signing up to create an account, you are accepting our{" "}
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

export default SignUpForm;
