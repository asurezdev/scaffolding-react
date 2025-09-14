import { Link, Outlet } from "react-router"


export const ModuloALayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* header */}
      <div className="bg-gray-700 p-4 text-white flex justify-between items-center">
        <h1>Modulo A</h1>
        <div className="flex gap-4">
           <Link to="/one">one</Link>
           <Link to="/two">two</Link>
           <Link to="/module-b/three">three</Link>
           <Link to="/module-b/four">four</Link>
        </div>
      </div>
      {/* content */}
      <div className="flex-grow h-full">
        <Outlet />
      </div> 
      {/* footer */} 
      <div className="bg-gray-700 p-4 text-white text-center">
        footer
      </div>
    </div>
  )
}


export default ModuloALayout;