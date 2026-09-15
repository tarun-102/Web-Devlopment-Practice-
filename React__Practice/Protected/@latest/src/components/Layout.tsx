import { Outlet } from "react-router-dom"
function Layout() {
  return (
    <div className="m-5 p-4">

    <div className="row ">
        <div className="col-md-7">
             <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="main_logi background" height={"500px"} />
        </div>
        <div className="col-md-5">
            <Outlet />
        </div>
    </div>
    </div>
  )
}

export default Layout