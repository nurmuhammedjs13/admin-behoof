import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import AddProduct from "./pages/addProduct/addProduct";
import "./index.css";
import { v4 as uuidv4 } from "uuid";

import List from "./pages/List/list";
import Context from "./Context";
import { useState } from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/AddProduct",
        element: <AddProduct />,
    },
    {
        path: "/List",
        element: <List />,
    },
]);

function App() {
    const id = uuidv4();

    const [detail, setDetail] = useState<{
        key: string;
        value: string;
        id?: string;
    }>({
        key: "",
        value: "",
        id,
    });
    const [details, setDetails] = useState<{ key: string; value: string }[]>(
        []
    );

    const [litteImg, setLitteImg] = useState<{ imgs: string }>({ imgs: "" });
    const [arrlitteImg, setArrLitteImg] = useState<{ imgs: string }[]>([]);

    const [marks] = useState<{
        battery: number;
        display: number;
        camera: number;
        answer: number;
        design: number;
        portabl: number;
    }>({
        battery: 0,
        display: 0,
        camera: 0,
        answer: 0,
        design: 0,
        portabl: 0,
    });

    const [data, setData] = useState({
        img: "",
        type: "",
        model: "",
        price: "",
        storage: "",
        color: "",
        description: "",
        date: "",
        id: "",
        ...marks,
        ...detail,
        ...litteImg,
    });

    return (
        <Context.Provider
            value={{
                marks,
                data,
                setData,
                detail,
                setDetail,
                details,
                setDetails,
                litteImg,
                setLitteImg,
                arrlitteImg,
                setArrLitteImg,
                id,
            }}
        >
            <RouterProvider router={router} />
        </Context.Provider>
    );
}

export default App;
