import React from "react";
import { Link } from "react-router-dom";

function Settings() {
  return (
    <div>
      <p className="text-2xl pb-10">Update your Information</p>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-10">
          <label htmlFor="name">Name</label>
          <div className="flex gap-5">
            <input
              type="text"
              name="name"
              placeholder="New Name"
              className="rounded-3xl px-5"
              required
            />
            <button className="bg-red-500 text-white p-2 hover:scale-110 rounded-md">
              Update
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-10">
          <label>Email</label>
          <div className="flex gap-5">
            <input
              type="text"
              name="oldEmail"
              placeholder="Old Email"
              className="rounded-3xl px-5"
              required
            />
            <input
              type="text"
              name="newEmail"
              placeholder="New Email"
              className="rounded-3xl px-5"
              required
            />
            <button className="bg-red-500 text-white p-2 hover:scale-110 rounded-md">
              Update
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-10">
          <label htmlFor="street">Street</label>
          <div className="flex gap-5">
            <input
              type="text"
              name="street"
              placeholder="New Street"
              className="rounded-3xl px-5"
              required
            />
            <button className="bg-red-500 text-white p-2 hover:scale-110 rounded-md">
              Update
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-10">
          <label htmlFor="city">City</label>
          <div className="flex gap-5">
            <input
              type="text"
              name="city"
              placeholder="New City"
              className="rounded-3xl px-5"
              required
            />
            <button className="bg-red-500 text-white p-2 hover:scale-110 rounded-md">
              Update
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-10">
          <label htmlFor="country">Country</label>
          <div className="flex gap-5">
            <input
              type="text"
              name="country"
              placeholder="New Country"
              className="rounded-3xl px-5"
              required
            />
            <button className="bg-red-500 text-white p-2 hover:scale-110 rounded-md">
              Update
            </button>
          </div>
        </div>
        <Link to='/user/dashboard/change-password' className="bg-red-700 text-white px-3 py-1 rounded-lg w-fit hover:bg-red-500">
          Change Password
        </Link>
      </div>
    </div>
  );
}

export default Settings;
