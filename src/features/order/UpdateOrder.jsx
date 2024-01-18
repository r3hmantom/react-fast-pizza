import React from "react";
import Button from "../../ui/Button";
import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";

export default function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  useEffect(() => {}, [fetcher]);
  return (
    <fetcher.Form method="PATCH" className="text-right"> 
      <Button type="primary">Update Order</Button>
    </fetcher.Form>
  );
}


export async function action({request, params}) {
    const data = {priority: true};
    await updateOrder(params.orderId, data)
    return null
}
