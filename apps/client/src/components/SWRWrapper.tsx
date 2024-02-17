import * as React from "react";
import { useState } from "react";
import { useHook } from "../../lib/utils";
// import { api } from "../../lib/trpc";

function App() {
  const { data, isError, isLoading } = useHook();

  if (isLoading) return <h1>Loading...</h1>;

  if (isError || !data) return <h1 className="text-red-500">Failed to load</h1>;

  console.log(data);
  console.log("hi from react");

  return <h1 className="text-black">Hello World! Nitro data </h1>;
}

function Wrapper() {
  // const [client] = useState(() => api.createClient());
  return (
    <React.StrictMode>
      {/* <api.Provider client={client}> */}
      <App />
      {/* </api.Provider> */}
    </React.StrictMode>
  );
}

export default Wrapper;
