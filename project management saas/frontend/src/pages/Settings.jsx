import React from "react";
import {
  User,
  Bell,
  Lock,
  Palette,
  Settings as SettingsIcon,
  Shield,
  Save,
  Camera,
  Trash2,
} from "lucide-react";

const Settings = () => {
  return (
    <div className="h-screen bg-[#0b0b0b] text-white px-6 py-6 md:px-10 overflow-auto">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Settings
        </h1>

        <p className="text-sm text-gray-500 mt-2">
          Manage your account and Flowboard preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 max-w-6xl">

        {/* Settings Navigation */}
        <aside>
          <nav className="space-y-1">

            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#171717] text-white text-sm text-left">
              <User size={17} />
              Profile
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:text-white hover:bg-[#141414] transition text-sm text-left">
              <Bell size={17} />
              Notifications
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:text-white hover:bg-[#141414] transition text-sm text-left">
              <Lock size={17} />
              Security
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:text-white hover:bg-[#141414] transition text-sm text-left">
              <Palette size={17} />
              Appearance
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:text-white hover:bg-[#141414] transition text-sm text-left">
              <SettingsIcon size={17} />
              Preferences
            </button>

          </nav>
        </aside>

        {/* Main Settings */}
        <main className="space-y-6">

          {/* Profile */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-xl">

            <div className="px-6 py-5 border-b border-[#1f1f1f]">
              <h2 className="text-base font-medium">
                Profile
              </h2>

              <p className="text-xs text-gray-600 mt-1">
                Update your personal information.
              </p>
            </div>

            <div className="p-6">

              {/* Avatar */}
              <div className="flex items-center gap-4 mb-7">

                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-[#1c1c1c] border border-[#292929] flex items-center justify-center text-lg font-medium">
                    DS
                  </div>

                  <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition">
                    <Camera size={14} />
                  </button>
                </div>

                <div>
                  <p className="text-sm font-medium">
                    Profile Photo
                  </p>

                  <p className="text-xs text-gray-600 mt-1">
                    JPG, PNG or WEBP. Max 2MB.
                  </p>
                </div>

              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-xs text-gray-500 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    defaultValue="Divyanshu Shah"
                    className="w-full bg-[#0b0b0b] border border-[#242424] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#3a3a3a] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-2">
                    Username
                  </label>

                  <input
                    type="text"
                    defaultValue="divyanshu"
                    className="w-full bg-[#0b0b0b] border border-[#242424] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#3a3a3a] transition"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs text-gray-500 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    defaultValue="divyanshu@example.com"
                    className="w-full bg-[#0b0b0b] border border-[#242424] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#3a3a3a] transition"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs text-gray-500 mb-2">
                    Bio
                  </label>

                  <textarea
                    rows="3"
                    placeholder="Tell us a little about yourself..."
                    className="w-full bg-[#0b0b0b] border border-[#242424] rounded-lg px-4 py-3 text-sm outline-none resize-none placeholder:text-gray-700 focus:border-[#3a3a3a] transition"
                  />
                </div>

              </div>

              {/* Save */}
              <div className="flex justify-end mt-6">
                <button className="flex items-center gap-2 bg-white text-black px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                  <Save size={15} />
                  Save Changes
                </button>
              </div>

            </div>
          </section>

          {/* Notifications */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-xl">

            <div className="px-6 py-5 border-b border-[#1f1f1f]">
              <h2 className="text-base font-medium">
                Notifications
              </h2>

              <p className="text-xs text-gray-600 mt-1">
                Choose what notifications you want to receive.
              </p>
            </div>

            <div className="p-6 space-y-5">

              <SettingToggle
                title="Task assignments"
                description="Notify me when a task is assigned to me."
                enabled={true}
              />

              <SettingToggle
                title="Task updates"
                description="Notify me when a task I'm involved in is updated."
                enabled={true}
              />

              <SettingToggle
                title="Comments"
                description="Notify me when someone comments on my tasks."
                enabled={true}
              />

              <SettingToggle
                title="Project updates"
                description="Notify me about important project changes."
                enabled={false}
              />

            </div>
          </section>

          {/* Security */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-xl">

            <div className="px-6 py-5 border-b border-[#1f1f1f]">
              <div className="flex items-center gap-3">
                <Shield size={18} className="text-gray-400" />

                <div>
                  <h2 className="text-base font-medium">
                    Security
                  </h2>

                  <p className="text-xs text-gray-600 mt-1">
                    Manage your password and account security.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-xs text-gray-500 mb-2">
                    Current Password
                  </label>

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-[#0b0b0b] border border-[#242424] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#3a3a3a]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-2">
                    New Password
                  </label>

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-[#0b0b0b] border border-[#242424] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#3a3a3a]"
                  />
                </div>

              </div>

              <div className="flex justify-end mt-6">
                <button className="px-4 py-2.5 rounded-lg border border-[#292929] text-sm text-gray-300 hover:bg-[#181818] hover:text-white transition">
                  Update Password
                </button>
              </div>

            </div>
          </section>

          {/* Appearance */}
          <section className="bg-[#111111] border border-[#1f1f1f] rounded-xl">

            <div className="px-6 py-5 border-b border-[#1f1f1f]">
              <h2 className="text-base font-medium">
                Appearance
              </h2>

              <p className="text-xs text-gray-600 mt-1">
                Customize how Flowboard looks.
              </p>
            </div>

            <div className="p-6">

              <p className="text-xs text-gray-500 mb-3">
                Theme
              </p>

              <div className="grid grid-cols-3 gap-3">

                <button className="border border-white rounded-lg p-3 bg-[#0b0b0b]">
                  <div className="h-16 rounded-md bg-[#111111] border border-[#242424]" />
                  <p className="text-xs text-gray-300 mt-2">
                    Dark
                  </p>
                </button>

                <button className="border border-[#242424] rounded-lg p-3 bg-[#0b0b0b] opacity-60 hover:opacity-100 transition">
                  <div className="h-16 rounded-md bg-gray-300" />
                  <p className="text-xs text-gray-500 mt-2">
                    Light
                  </p>
                </button>

                <button className="border border-[#242424] rounded-lg p-3 bg-[#0b0b0b] opacity-60 hover:opacity-100 transition">
                  <div className="h-16 rounded-md bg-gradient-to-br from-[#111] to-gray-300" />
                  <p className="text-xs text-gray-500 mt-2">
                    System
                  </p>
                </button>

              </div>

            </div>
          </section>

          {/* Danger Zone */}
          <section className="bg-[#111111] border border-red-500/10 rounded-xl">

            <div className="px-6 py-5 border-b border-red-500/10">
              <h2 className="text-base font-medium text-red-400">
                Danger Zone
              </h2>

              <p className="text-xs text-gray-600 mt-1">
                These actions cannot be undone.
              </p>
            </div>

            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

              <div>
                <p className="text-sm text-gray-300">
                  Delete your account
                </p>

                <p className="text-xs text-gray-600 mt-1">
                  Permanently delete your Flowboard account and data.
                </p>
              </div>

              <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-red-500/20 text-red-400 text-sm hover:bg-red-500/5 transition">
                <Trash2 size={15} />
                Delete Account
              </button>

            </div>

          </section>

        </main>
      </div>
    </div>
  );
};


/* Toggle Component */
const SettingToggle = ({ title, description, enabled }) => {
  return (
    <div className="flex items-center justify-between gap-6">

      <div>
        <p className="text-sm text-gray-300">
          {title}
        </p>

        <p className="text-xs text-gray-600 mt-1">
          {description}
        </p>
      </div>

      <button
        className={`relative w-10 h-5 rounded-full shrink-0 transition ${
          enabled ? "bg-white" : "bg-[#292929]"
        }`}
      >
        <span
          className={`absolute top-0.5 w-4 h-4 rounded-full transition ${
            enabled
              ? "right-0.5 bg-black"
              : "left-0.5 bg-gray-500"
          }`}
        />
      </button>

    </div>
  );
};

export default Settings;