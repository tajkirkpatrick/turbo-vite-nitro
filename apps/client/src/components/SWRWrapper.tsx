import * as React from "react";
import { useState } from "react";

import { useHook } from "../lib/utils";
import { api } from "../lib/trpc";

function App() {
  const { data: result, error, isLoading } = useHook();
  // console.log(data, error, isLoading);

  if (isLoading) return <h1>Loading...</h1>;

  if (error || !result) return <h1 className="text-red-500">Failed to load</h1>;

  return (
    <h1 className="text-black font-fs-inter">
      Hello World! Nitro data {result.data.str}
    </h1>
  );
}

function Wrapper() {
  const [client] = useState(() => api.createClient());
  return (
    <React.StrictMode>
      <api.Provider client={client}>
        <App />
      </api.Provider>
    </React.StrictMode>
  );
}

export default Wrapper;
