
import data from "./data";
import { useParams } from "react-router-dom";

function OrderDetail() {
    const { id } = useParams<{ id: string }>();
    const orderId = Number(id);
    const order = data.orders.find((item) => item._id === orderId);

    if (!order) {
        return <div className="content content-margined">Order not found.</div>;
    }

    return (
        <div>
            <h3>Order name: {order.user.name}</h3>
        </div>
    );
}

export default OrderDetail;
