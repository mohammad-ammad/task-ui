

function App() {
  return (

<div class='flex items-center justify-center min-h-screen'>
    <div class='w-full max-w-xl px-6 py-5 mx-auto bg-white rounded-lg shadow-md  ring-2 ring-gray-300 ring-inset'>
      <div className="w-full flex flex-row justify-between py-4 ">
        <p className="text-xl font-['Poppins']">All pages</p>
        <input type="checkbox" className="form-checkbox h-6 w-6 text-indigo-600  rounded-sm"/>

      </div>
      <hr className="my-2 border border-gray-300"/>
      <div className="w-full flex flex-row justify-between py-4 ">
        <p className="text-xl font-['Poppins']">Page 1</p>
        <input type="checkbox" className="form-checkbox h-6 w-6 text-indigo-600  rounded-sm"/>
      </div>
      <div className="w-full flex flex-row justify-between py-4 ">
        <p className="text-xl font-['Poppins']">Page 2</p>
        <input type="checkbox" className="form-checkbox h-6 w-6 text-indigo-600  rounded-full"/>
      </div>
      <div className="w-full flex flex-row justify-between py-4 ">
        <p className="text-xl font-['Poppins']">Page 3</p>
        <input type="checkbox" className="form-checkbox h-6 w-6 text-indigo-600 "/>
      </div>
      <hr className="my-2  border border-gray-300"/>
      <button className="w-full py-2 mt-4 text-center bg-yellow-400">
        Done
      </button>
    </div>
</div>
  );
}

export default App;
