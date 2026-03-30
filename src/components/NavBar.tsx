import ContactButton from "./buttons/ContactBtn";

// reusable nav bar, buttons or models'
function NavBar() {
  return (
    <>
      <div className=" bg-white shadow-blue-950 py-5">
        <div className="container m-auto px-4 flex justify-between">
          <h1 className="text-3xl font-bold">Ali M.</h1>

          <div className="flex items-center gap-2">
            <ul className="flex gap-2 mr-4 font-bold">
              <li className="hover:text-blue-600 hover:bg-gray-200 rounded-md  p-2">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-blue-600 hover:bg-gray-200 rounded-md  p-2">
                <a href="#">About</a>
              </li>
              <li className="hover:text-blue-600 hover:bg-gray-200 rounded-md  p-2">
                <a href="#">Process</a>
              </li>
              <li className="hover:text-blue-600 hover:bg-gray-200 rounded-md  p-2">
                <a href="#">Portfolio</a>
              </li>
            </ul>

            {/* <button className="cursor-pointer bg-blue-600 p-2 text-white rounded-md">
              Contact
            </button> */}
            <ContactButton>
              
            </ContactButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
