import { useState, useEffect } from "react";
import Table from "../../Molecules/Table/Table";
import BasicTemplate from "../../Templates/Basic/BasicTemplate";
import { Product } from "../../../interfaces/global";
import { fetchProducts } from "../../../utils/fetchProducts";
import NavLink from "../../Atoms/NavLink/NavLink";
import { Button } from "../../../stories/Button";

const Home: React.FC = () => {
  const [productData, setProductData] = useState<Product[]>([]);

  // Define the columns for the table
  const columns = [
    {
      key: 'id',
      header: 'ID',
      accessor: (row: Product) => row.id,
    },
    {
      key: 'title',
      header: 'Title',
      accessor: (row: Product) => row.title,
    },
    {
      key: 'description',
      header: 'Description',
      accessor: (row: Product) => row.description,
    },
    {
      key: 'category',
      header: 'Category',
      accessor: (row: Product) => row.category,
    },
    {
      key: 'Ações',
      header: 'Ações',
      accessor: (row: Product) => <NavLink linkPath={row.id.toString()}><Button label="Ver Detalhes" /></NavLink>, // Format the price
    },
  ];

  useEffect(() => {
    fetchProducts()
      .then((products) => setProductData(products))
      .catch((error) => console.error("Error Fetching Products", error));
  }, []);

  return (
    <BasicTemplate>
      <Table columns={columns} data={productData} />
    </BasicTemplate>
  );
};

export default Home;
