import React from "react";

function BaseModal() {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <div className="flex flex-col items-center space-x-8">
        <button
          className="btn btn-circle btn-primary mb-1"
          onClick={() => {
            document ? (document.getElementById("mint-modal") as HTMLFormElement).showModal() : null;
          }}
        >
          <svg viewBox="0 0 512 512" fill="currentColor" className="h-6 w-6">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M259.92 262.91L216.4 149.77a9 9 0 00-16.8 0l-43.52 113.14a9 9 0 01-5.17 5.17L37.77 311.6a9 9 0 000 16.8l113.14 43.52a9 9 0 015.17 5.17l43.52 113.14a9 9 0 0016.8 0l43.52-113.14a9 9 0 015.17-5.17l113.14-43.52a9 9 0 000-16.8l-113.14-43.52a9 9 0 01-5.17-5.17zM108 68L88 16 68 68 16 88l52 20 20 52 20-52 52-20-52-20zM426.67 117.33L400 48l-26.67 69.33L304 144l69.33 26.67L400 240l26.67-69.33L496 144l-69.33-26.67z"
            />
          </svg>
        </button>
        Acuñar
      </div>
      <dialog id="mint-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-medium text-center text-2xl">Acuñar $PULPA</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default BaseModal;
