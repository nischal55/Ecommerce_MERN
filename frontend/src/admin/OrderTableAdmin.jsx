import AdminNav from "../components/AdminNav";
import OrderListAdmin from "../components/OrderListAdmin";

function OrderTableAdmin() {
  return (
    <>
      <AdminNav />
      <h4 className="text-center p-4">Orders List</h4>
      <table className="table table-striped text-center">
        <thead className="table-secondary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Image</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Contact</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Order Status</th>
            <th scope="col">Payment Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <OrderListAdmin />
      </table>
    </>
  );
}

export default OrderTableAdmin;
