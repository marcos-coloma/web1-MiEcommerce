// src/App.jsx

import { Routes, Route } from "react-router-dom";

// Layout
import DashboardLayout from "./layouts/DashboardLayout";


// Home
import Home from "./pages/Home/Home";

// Products
import ProductsList from "./pages/Products/ProductsList/ProductsList";
import ProductsView from "./pages/Products/ProductsView/ProductsView";

// Categories
import CategoriesList from "./pages/Categories/CategoriesList/CategoriesList";
import CategoriesView from "./pages/Categories/CategoriesView/CategoriesView";

// Users
import ProfileList from "./pages/profile/ProfileList/ProfileList";
import ProfileView from "./pages/profile/ProfileView/ProfileView";

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
          <Route path="products/:id" element={<ProductsView />} />

          {/* Categories */}
          <Route path="categories" element={<CategoriesList />} />
          <Route path="categories/:id" element={<CategoriesView />} />

          {/* Users */}
          <Route path="profile" element={<ProfileList />} />
          <Route path="profile/:id" element={<ProfileView />} />

        </Route>

        {/* Errors */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;