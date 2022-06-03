import { useEffect, useState } from "react";

const useServiceDetail = serviceId => {
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `https://frozen-eyrie-09644.herokuapp.com/service/${serviceId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setService(data));
  }, [serviceId]);
  return [service];
}

export default useServiceDetail;