import { Outlet } from "react-router-dom"

function UILayout() {
  return (
    <div className="m-4">

        <Outlet />
    </div>
  )
}

export default UILayout