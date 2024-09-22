import { useState } from "react";
import SideBar from "./Components/SideBar";

function Settings() {
  // State to track the active section
  const [activeSection, setActiveSection] = useState("General");

  // States for input fields
  const [username, setUsername] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [enable2FA, setEnable2FA] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [integrateGoogle, setIntegrateGoogle] = useState(false);
  const [integrateGithub, setIntegrateGithub] = useState(false);
  const [supportEmail, setSupportEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [backupDirectory, setBackupDirectory] = useState("/content/backup");
  const [enableExperimentalFeatures, setEnableExperimentalFeatures] =
    useState(false);

  const handleSave = () => {
    // Handle save logic
    console.log({
      username,
      emailId,
      password,
      enable2FA,
      recoveryEmail,
      integrateGoogle,
      integrateGithub,
      supportEmail,
      feedback,
      organizationName,
      backupDirectory,
      enableExperimentalFeatures,
    });
  };

  return (
    <>
      <div className="">
        <div className="flex">
          <div className="w-16 fixed h-full">
            <SideBar />
          </div>
          <div className="flex-1 ml-16">
            <div className="p-8 bg-gray-50 h-screen">
              <div className="flex space-x-4">
                {/* Sidebar */}
                <div className="w-1/4 bg-white p-4 shadow-md rounded">
                  <ul className="space-y-4">
                    <li
                      className={`text-xl font-semibold text-gray-700 cursor-pointer ${
                        activeSection === "General"
                          ? "text-black"
                          : "text-gray-500"
                      }`}
                      onClick={() => setActiveSection("General")}
                    >
                      General
                    </li>
                    <li
                      className={`cursor-pointer ${
                        activeSection === "Security"
                          ? "text-black"
                          : "text-gray-500"
                      }`}
                      onClick={() => setActiveSection("Security")}
                    >
                      Security
                    </li>
                    <li
                      className={`cursor-pointer ${
                        activeSection === "Integrations"
                          ? "text-black"
                          : "text-gray-500"
                      }`}
                      onClick={() => setActiveSection("Integrations")}
                    >
                      Integrations
                    </li>
                    <li
                      className={`cursor-pointer ${
                        activeSection === "Support"
                          ? "text-black"
                          : "text-gray-500"
                      }`}
                      onClick={() => setActiveSection("Support")}
                    >
                      Support
                    </li>
                    <li
                      className={`cursor-pointer ${
                        activeSection === "Organizations"
                          ? "text-black"
                          : "text-gray-500"
                      }`}
                      onClick={() => setActiveSection("Organizations")}
                    >
                      Organizations
                    </li>
                    <li
                      className={`cursor-pointer ${
                        activeSection === "Advanced"
                          ? "text-black"
                          : "text-gray-500"
                      }`}
                      onClick={() => setActiveSection("Advanced")}
                    >
                      Advanced
                    </li>
                  </ul>
                </div>

                {/* Dynamic Content */}
                <div className="w-3/4 space-y-8">
                  {activeSection === "General" && (
                    <div className="bg-white p-6 rounded shadow-md">
                      <h2 className="text-xl font-semibold text-gray-700">
                        General
                      </h2>
                      <p className="text-gray-500">
                        Manage basic account settings.
                      </p>

                      {/* Username Field */}
                      <div className="mt-4">
                        <label className="block text-gray-700">Username</label>
                        <input
                          type="text"
                          placeholder="Enter username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
                        />
                      </div>

                      {/* Email ID Field */}
                      <div className="mt-4">
                        <label className="block text-gray-700">Email ID</label>
                        <input
                          type="email"
                          placeholder="Enter email"
                          value={emailId}
                          onChange={(e) => setEmailId(e.target.value)}
                          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
                        />
                      </div>

                      {/* Password Field */}
                      <div className="mt-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                          type="password"
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
                        />
                      </div>

                      <button
                        onClick={handleSave}
                        className="mt-4 bg-black text-white px-4 py-2 rounded"
                      >
                        Save
                      </button>
                    </div>
                  )}

                  {activeSection === "Security" && (
                    <div className="bg-white p-6 rounded shadow-md">
                      <h2 className="text-xl font-semibold text-gray-700">
                        Security
                      </h2>
                      <p className="text-gray-500">
                        Security options for your account.
                      </p>

                      {/* Enable 2FA */}
                      <div className="mt-4">
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            checked={enable2FA}
                            onChange={() => setEnable2FA(!enable2FA)}
                            className="form-checkbox text-blue-600"
                          />
                          <span className="ml-2 text-gray-500">
                            Enable Two-Factor Authentication (2FA)
                          </span>
                        </label>
                      </div>

                      {/* Password Recovery Email */}
                      <div className="mt-4">
                        <label className="block text-gray-700">
                          Password Recovery Email
                        </label>
                        <input
                          type="email"
                          placeholder="Recovery email"
                          value={recoveryEmail}
                          onChange={(e) => setRecoveryEmail(e.target.value)}
                          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
                        />
                      </div>

                      <button
                        onClick={handleSave}
                        className="mt-4 bg-black text-white px-4 py-2 rounded"
                      >
                        Save
                      </button>
                    </div>
                  )}

                  {activeSection === "Integrations" && (
                    <div className="bg-white p-6 rounded shadow-md">
                      <h2 className="text-xl font-semibold text-gray-700">
                        Integrations
                      </h2>
                      <p className="text-gray-500">
                        Manage integrations with third-party services.
                      </p>

                      {/* Google Integration */}
                      <div className="mt-4">
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            checked={integrateGoogle}
                            onChange={() =>
                              setIntegrateGoogle(!integrateGoogle)
                            }
                            className="form-checkbox text-blue-600"
                          />
                          <span className="ml-2 text-gray-500">
                            Integrate with Google
                          </span>
                        </label>
                      </div>

                      {/* GitHub Integration */}
                      <div className="mt-4">
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            checked={integrateGithub}
                            onChange={() =>
                              setIntegrateGithub(!integrateGithub)
                            }
                            className="form-checkbox text-blue-600"
                          />
                          <span className="ml-2 text-gray-500">
                            Integrate with GitHub
                          </span>
                        </label>
                      </div>

                      <button
                        onClick={handleSave}
                        className="mt-4 bg-black text-white px-4 py-2 rounded"
                      >
                        Save
                      </button>
                    </div>
                  )}

                  {activeSection === "Support" && (
                    <div className="bg-white p-6 rounded shadow-md">
                      <h2 className="text-xl font-semibold text-gray-700">
                        Support
                      </h2>
                      <p className="text-gray-500">
                        Need help? Contact us or provide feedback.
                      </p>

                      {/* Contact Email */}
                      <div className="mt-4">
                        <label className="block text-gray-700">
                          Contact Email
                        </label>
                        <input
                          type="email"
                          placeholder="support@example.com"
                          value={supportEmail}
                          onChange={(e) => setSupportEmail(e.target.value)}
                          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
                        />
                      </div>

                      {/* Feedback */}
                      <div className="mt-4">
                        <label className="block text-gray-700">Feedback</label>
                        <textarea
                          placeholder="Enter your feedback"
                          value={feedback}
                          onChange={(e) => setFeedback(e.target.value)}
                          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
                        />
                      </div>

                      <button
                        onClick={handleSave}
                        className="mt-4 bg-black text-white px-4 py-2 rounded"
                      >
                        Save
                      </button>
                    </div>
                  )}

                  {activeSection === "Organizations" && (
                    <div className="bg-white p-6 rounded shadow-md">
                      <h2 className="text-xl font-semibold text-gray-700">
                        Organizations
                      </h2>
                      <p className="text-gray-500">
                        Manage organization settings.
                      </p>

                      {/* Organization Name */}
                      <div className="mt-4">
                        <label className="block text-gray-700">
                          Organization Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter organization name"
                          value={organizationName}
                          onChange={(e) => setOrganizationName(e.target.value)}
                          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
                        />
                      </div>

                      <button
                        onClick={handleSave}
                        className="mt-4 bg-black text-white px-4 py-2 rounded"
                      >
                        Save
                      </button>
                    </div>
                  )}

                  {activeSection === "Advanced" && (
                    <div className="bg-white p-6 rounded shadow-md">
                      <h2 className="text-xl font-semibold text-gray-700">
                        Advanced
                      </h2>
                      <p className="text-gray-500">
                        Advanced configurations and settings.
                      </p>

                      {/* Backup Directory */}
                      <div className="mt-4">
                        <label className="block text-gray-700">
                          Backup Directory
                        </label>
                        <input
                          type="text"
                          placeholder="/content/backup"
                          value={backupDirectory}
                          onChange={(e) => setBackupDirectory(e.target.value)}
                          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
                        />
                      </div>

                      {/* Experimental Features */}
                      <div className="mt-4">
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            checked={enableExperimentalFeatures}
                            onChange={() =>
                              setEnableExperimentalFeatures(
                                !enableExperimentalFeatures
                              )
                            }
                            className="form-checkbox text-blue-600"
                          />
                          <span className="ml-2 text-gray-500">
                            Enable Experimental Features
                          </span>
                        </label>
                      </div>

                      <button
                        onClick={handleSave}
                        className="mt-4 bg-black text-white px-4 py-2 rounded"
                      >
                        Save
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
