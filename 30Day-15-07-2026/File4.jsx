import { useReducer } from "react";

function LightExample() {

  const startingLight = {
    isOn: false
  };

  function lightController(currentLight, receivedCommand) {

    if (receivedCommand.type === "TURN_ON") {
      return {
        isOn: true
      };
    }

    if (receivedCommand.type === "TURN_OFF") {
      return {
        isOn: false
      };
    }

    return currentLight;
  }

  const [lightStatus, sendCommand] = useReducer(
    lightController,
    startingLight
  );

  return (
    <div>

      <h1>
        Light is {lightStatus.isOn ? "ON" : "OFF"}
      </h1>

      <button
        onClick={() => sendCommand({ type: "TURN_ON" })}
      >
        Turn ON
      </button>

      <button
        onClick={() => sendCommand({ type: "TURN_OFF" })}
      >
        Turn OFF
      </button>

    </div>
  );
}

export default LightExample;