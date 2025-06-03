'use client'
import React from 'react'

const Nav = (props) => {

  return (
    <div className="navbar bg-base-100 shadow-sm col-span-3 h-14 bg-linear-to-t from-sky-500 to-indigo-500">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Poke-Search</a>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-ghost btn-circle"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />{" "}
          </svg>
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box flex flex-col gap-2 items-center">
            <form
              onSubmit={(e) => {
                props.onSubmit(e);
                document.getElementById("my_modal_3").close();
              }}
            >
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <h3 className="font-bold text-lg">Enter Pokemon name or id</h3>
              <input
                type="text"
                name="poke_name"
                placeholder="pikachu or 25"
                className="input "
                value={props.value}
                onChange={props.onChange}
              />
              <button>Submit</button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default Nav