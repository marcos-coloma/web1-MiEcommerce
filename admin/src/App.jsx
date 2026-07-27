// src/App.jsx

import { Routes, Route } from "react-router-dom";

// Layout
import DashboardLayout from "./layouts/DashboardLayout";

// Home
import Home from "./pages/Home/Home";

// Products
import ProductsList from "./pages/products/ProductsList/ProductsList";
import ProductsView from "./pages/products/ProductsView/ProductsView";
import NewProduct from "./pages/products/NewProduct/NewProduct";

// Categories
import CategoriesList from "./pages/categories/CategoriesList/CategoriesList";
import CategoriesView from "./pages/categories/CategoriesView/CategoriesView";
import NewCategory from "./pages/categories/NewCategory/NewCategory";

// Users
import ProfileList from "./pages/profile/ProfileList/ProfileList";
import ProfileView from "./pages/profile/ProfileView/ProfileView";

// Analytics
import Analytics from "./pages/analytics/Analytics";

// Errors
import NotFound from "./errors/NotFound/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>

          {/* Home */}
          <Route index element={<Home />} />

          {/* Products */}
          <Route path="products" element={<ProductsList />} />
          <Route path="products/new" element={<NewProduct />} />
          <Route path="products/:id" element={<ProductsView />} />

          {/* Categories */}
          <Route path="categories" element={<CategoriesList />} />
          <Route path="categories/new" element={<NewCategory />} />
          <Route path="categories/:id" element={<CategoriesView />} />

          {/* Users */}
          <Route path="profile" element={<ProfileList />} />
          <Route path="profile/:id" element={<ProfileView />} />

          {/* Analytics */}
          <Route path="analytics" element={<Analytics />} />

        </Route>

        {/* Errors */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;