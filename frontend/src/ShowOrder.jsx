import Navbar from "./components/Navbar";

import OrderTable from "./components/OrderTable";

function ShowOrder() {
  return (
    <>
      <Navbar />

      <h4 className="text-center p-4">My Orders List</h4>
      <table className="table table-striped text-center">
        <thead className="table-secondary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Image</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Order Status</th>
            <th scope="col">Payment Status</th>
            
          </tr>
        </thead>
        <OrderTable />
      </table>
    </>
  );
}

export default ShowOrder;
