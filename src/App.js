import React, { useState } from "react";

// bootstrap components
import { Button } from "react-bootstrap";
// Components
import { SubscribeModal } from "./components";
import { useAppContext } from "./contexts/appContext";

function App() {
  const { state } = useAppContext();
  const [subscriberModal, setSubscriberModal] = useState(false);
  console.log("User Data", state?.userData);
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
    </>
  );
}

export default App;
