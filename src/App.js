import React, { useEffect, useState } from "react";

// bootstrap components
import { Button } from "react-bootstrap";
// Components
import { SubscribeModal, ProductModal } from "./components";
import { useAppContext } from "./contexts/appContext";

function App() {
  const { state } = useAppContext();
  const [subscriberModal, setSubscriberModal] = useState(false);
  const [productModal, setProductModal] = useState(false);

  useEffect(() => {
    if (state?.userData) setProductModal(true);
  }, [state.userData]);
  return (
    <>
      <div className="main">
        <Button
          className="button"
          size="lg"
          onClick={() => setSubscriberModal(true)}
        >
          JOIN THE WAITLIST
        </Button>
      </div>
      <SubscribeModal show={subscriberModal} setShow={setSubscriberModal} />
      <ProductModal show={productModal} setShow={setProductModal} />
    </>
  );
}

export default App;
