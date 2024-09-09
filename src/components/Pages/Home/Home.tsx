import { useState, useEffect } from "react";
import Table from "../../Molecules/Table/Table";
import BasicTemplate from "../../Templates/Basic/BasicTemplate";
import { Product } from "../../../interfaces/global";
import { fetchProducts } from "../../../utils/fetchProducts";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Atoms/Button/Button";
import FooterAntd from "jeff/Footer"


const Home: React.FC = () => {
  const [productData, setProductData] = useState<Product[]>([]);
  const navigate = useNavigate();
  
  const navigateToId = (destiny: string, product: Product): void => {
    navigate(destiny, { state: product });
  };

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
      key: 'Actions',
      header: 'Actions',
      accessor: (row: Product) => <Button label="See Details" onClick={() => navigateToId("/details/" + row.id.toString(), row)} />, 
    },
  ];

  useEffect(() => {
    fetchProducts()
      .then((products) => setProductData(products))
      .catch((error) => console.error("Error Fetching Products", error));
  }, []);

  return (
    <div>
        <BasicTemplate>
            <Table columns={columns} data={productData} />
            <FooterAntd />
        </BasicTemplate>

    </div>

  );
};

export default Home;
