import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { CarritoProvider } from "./context/CarritoProvider"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoPage } from "./pages/CarritoPage"
import { ComprasPage } from "./pages/ComprasPage"

export const CarritoApp = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <NavBar></NavBar>
        <div className="container">
          <Routes>
              <Route path="/" element={<ComprasPage/>}></Route>
              <Route path="/carrito" element={<CarritoPage/>}></Route>
              <Route path="/" element={<Navigate to='/' />}></Route>
              
          </Routes>
        </div>
      </CarritoProvider>
    </ProductosProvider>
  )
}
