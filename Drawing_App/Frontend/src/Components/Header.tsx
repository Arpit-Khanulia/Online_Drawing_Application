import { Link } from "react-router-dom";
import { useUpdateDrawingMutation } from "../Redux/Slices/Api";
import { useAppSelector } from "../Redux/Hooks";

function Header(props:any) {

  
  const [updatedrawing] = useUpdateDrawingMutation();
  const data = useAppSelector(state=>state.myid)

  console.log('ye he store ki id',data);
  
  
  const handlesave = ()=>{

    console.log('this should be iddddddddddddddddddd ',data);
    updatedrawing({id: data, body: props.lines });
      
  }

  const handlecopy = ()=>{

    const url = 'http://localhost:5173/drawings/'+data;
    navigator.clipboard.writeText(url);
    alert('Copied to clipboard!');
  }

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/pay"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Create New Drawing
                  </Link>

                  <button

                    onClick={handlecopy}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Copy Link
                  </button>

                  <Link
                  onClick={handlesave}
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Save
                  </Link>

                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </nav>
    </div>
    
  );
}
export default Header;
