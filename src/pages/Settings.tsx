import React, { useState } from 'react';

export default function Settings() {
  const [theme, setTheme] = useState('light');
  const [languagePopup, setLanguagePopup] = useState(false);

  const handleLogout = () => {
    alert('You have been logged out successfully.');
    console.log('User logged out');
    // Redirect logic here
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        'Are you sure you want to delete your account? This action cannot be undone.'
      )
    ) {
      alert('Your account has been deleted.');
      console.log('Account deleted');
      // Add account deletion logic
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    alert(`Theme changed to ${newTheme}`);
    console.log(`Theme toggled to ${newTheme}`);
    // Add theme toggle logic here
  };

  const handleAccountDetails = () => {
    alert('Account Details: Name: John Doe, Email: johndoe@example.com');
    console.log('Fetching account details...');
  };

  const handleBankAccount = () => {
    alert('Bank account setup under process.');
    console.log('Opening bank account settings...');
  };

  const handleReferAndEarn = () => {
    alert('Share your referral code to earn rewards!');
    console.log('Refer and earn triggered');
    // Referral program logic
  };

  const handlePasswordManagement = () => {
    alert('Redirecting to Password Management...');
    console.log('Password Management accessed');
    // Password management logic
  };

  const handleLanguageChange = (lang) => {
    alert(`Language changed to: ${lang}`);
    console.log(`Language selected: ${lang}`);
    setLanguagePopup(false);
    // Implement language change logic
  };

  const handleNotificationSettings = () => {
    alert('Redirecting to Notification Settings...');
    console.log('Notification Settings accessed');
    // Notification settings logic
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <ul className="space-y-4">
          {/* Account Details */}
          <li>
            <button
              onClick={handleAccountDetails}
              className="w-full px-4 py-2 text-left text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 transition duration-200"
            >
              Account Details
            </button>
          </li>

          {/* Bank Account */}
          <li>
            <button
              onClick={handleBankAccount}
              className="w-full px-4 py-2 text-left text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 transition duration-200"
            >
              Bank Account
            </button>
          </li>

          {/* Change Theme */}
          <li>
            <button
              onClick={toggleTheme}
              className="w-full px-4 py-2 text-left text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 transition duration-200"
            >
              Change Theme (Current: {theme})
            </button>
          </li>

          {/* Refer and Earn */}
          <li>
            <button
              onClick={handleReferAndEarn}
              className="w-full px-4 py-2 text-left text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 transition duration-200"
            >
              Refer and Earn
            </button>
          </li>

          {/* Notifications */}
          <li>
            <button
              onClick={handleNotificationSettings}
              className="w-full px-4 py-2 text-left text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 transition duration-200"
            >
              Notification Settings
            </button>
          </li>

          {/* Password Management */}
          <li>
            <button
              onClick={handlePasswordManagement}
              className="w-full px-4 py-2 text-left text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 transition duration-200"
            >
              Password Management
            </button>
          </li>

          {/* Language Change */}
          <li>
            <div className="relative">
              <button
                onClick={() => setLanguagePopup(!languagePopup)}
                className="w-full px-4 py-2 text-left text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 transition duration-200"
              >
                Change Language
              </button>
              {languagePopup && (
                <div className="absolute top-12 left-0 bg-white border border-gray-300 rounded-lg shadow-lg p-4 space-y-2">
                  {['English', 'Spanish', 'French', 'German', 'Hindi'].map(
                    (lang) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className="block w-full text-left px-2 py-1 hover:bg-blue-50 rounded"
                      >
                        {lang}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </li>

          {/* Delete Account */}
          <li>
            <button
              onClick={handleDeleteAccount}
              className="w-full px-4 py-2 text-left text-red-600 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 transition duration-200"
            >
              Delete Account
            </button>
          </li>

          {/* Log Out */}
          <li>
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-left text-gray-800 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 transition duration-200"
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
