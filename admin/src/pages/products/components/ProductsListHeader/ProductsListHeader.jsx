import { useState } from "react";

import "./ProductsListHeader.css";

import lensIcon from "../../../../assets/icons/lens.svg";
import filterIcon from "../../../../assets/icons/filter.svg";


export default function ProductsListHeader({
    onAdd,
    search,
    setSearch,
    category,
    setCategory,
    categories
}) {

    const [showCategory, setShowCategory] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);


    const closeSearch = () => {

        if (!search) {
            setSearchOpen(false);
        }

    };


    return (
        <div className="products-header">

            <h1 className="products-header__title">
                Productos
            </h1>


            <div className="products-header__actions">


                <div
                    className={`products-header__search-container ${
                        searchOpen ? "open" : ""
                    }`}
                >

                    <span className="search-icon">
                        <img 
                            src={lensIcon}
                            alt="Buscar"
                        />
                    </span>


                    <input
                        className="products-header__search"
                        placeholder="Buscar producto..."
                        value={search}

                        onFocus={() => setSearchOpen(true)}

                        onBlur={closeSearch}

                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>



                <select
                    className={`products-header__category ${
                        showCategory ? "show-mobile" : ""
                    }`}

                    value={category}

                    onChange={(e) => {
                        setCategory(e.target.value);
                        setShowCategory(false);
                    }}
                >

                    <option value="">
                        Todas las categorías
                    </option>


                    {categories.map((category) => (

                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>

                    ))}

                </select>



                <button
                    className="products-header__filter-mobile"

                    type="button"

                    onClick={() => setShowCategory(!showCategory)}
                >

                    <img
                        src={filterIcon}
                        alt="Filtrar"
                    />

                </button>



                <button
                    className="products-header__add"

                    onClick={onAdd}
                >

                    <span className="add-text">
                        Agregar Producto
                    </span>


                    <span className="add-icon">
                        +
                    </span>

                </button>


            </div>

        </div>
    );
}