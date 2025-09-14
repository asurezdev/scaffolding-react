import { Link, Outlet } from "react-router"


export const ModuloBLayout = () => {
  return (
     <div className="flex flex-col min-h-screen">
      {/* header */}
      <div className="bg-sky-700 p-4 text-white flex justify-between items-center">
        <h1>Modulo B</h1>
        <div className="flex gap-4">
           <Link to="/one">one</Link>
           <Link to="/two">two</Link>
           <Link to="/module-b/three">three</Link>
           <Link to="/module-b/four">four</Link>
        </div>
      </div>
      {/* content */}
      <div className="flex-grow pt-4">
        <Outlet />
      </div> 
      {/* footer */}
      <div className="bg-sky-700 p-4 text-white text-center">
        footer
      </div>
    </div>
  )
}

export default ModuloBLayout;
