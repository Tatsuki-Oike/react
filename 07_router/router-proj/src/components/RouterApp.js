import { Link, Outlet } from "react-router-dom"

export default function RouterApp() {
    return (
      <div className="my-5">

        <Link className="btn btn-primary mb-5" to="/">Home</Link>
        <Link className="btn btn-primary ms-3 mb-5" to="/page">Page</Link>
        <Link className="btn btn-primary ms-3 mb-5" to="/param/1">Param</Link>
        <Link className="btn btn-primary ms-3 mb-5" to="/query?id=1">Query</Link>
        <Link className="btn btn-primary ms-3 mb-5" to="/navigate">Navigate</Link>

        <Outlet className="my-5"/>
      </div>
    );
  }
  