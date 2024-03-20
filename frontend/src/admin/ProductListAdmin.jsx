import AdminNav from "../components/AdminNav";
import ProductAddForm from "../components/ProductAddForm";
import ProductList from "../components/ProductList";

function ProductListAdmin() {
  return (
    <>
      <AdminNav />

      <h4 className="text-center p-4">Products List</h4>
      <ProductAddForm/>
      
      <table className="table table-striped text-center overflow-x-scroll">
        <thead className="table-secondary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Image</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total Stock</th>
           
          </tr>
        </thead>
        <ProductList />
      </table>
    </>
  );
}

export default ProductListAdmin;
