import React from "react";

function ChangePassword() {
  return (
    <div className="w-[65vw]">
      <p className="text-2xl pb-10">Change your Password</p>
      <div className="flex items-center justify-center pt-20">
        <div className="flex flex-col gap-2">
          <input
            type="password"
            name="oldPassword"
            placeholder="Enter Old Password"
            className="rounded-3xl px-5"
            required
          />
          <input
            type="password"
            name="newPassword"
            placeholder="Enter New Password"
            className="rounded-3xl px-5"
            required
          />
          <input
            type="password"
            name="newPassword"
            placeholder="Confirm New Password"
            className="rounded-3xl px-5"
            required
          />
          <button className="bg-red-500 text-white p-2 hover:scale-110 rounded-md">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
