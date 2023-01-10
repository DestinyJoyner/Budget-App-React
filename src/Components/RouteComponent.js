import { Route, Routes } from "react-router-dom";
import Edit from '../Pages/Edit'
import Error from '../Pages/Error'
import Home from '../Pages/Home'
import Index from '../Pages/Index'
import New from '../Pages/New'
import Pending from "../Pages/Pending";
import Show from '../Pages/Show'

function RouteComponent() {
    return (
      <Routes>
        <Route path = "/">
            <Route index element = {<Home />} />
            <Route path = "transactions">
                <Route index element = {<Index />} />
                <Route path = "new" element = {<New />} />
                <Route path = "pending" element = {<Pending />} />
                <Route path = ":id">
                    <Route index element = {<Show />} />
                    <Route path = "edit" element = {<Edit />} />
                </Route>
            </Route>
        </Route>
        <Route path = "*" element = {<Error />} />
      </Routes>
    );
}

export default RouteComponent;