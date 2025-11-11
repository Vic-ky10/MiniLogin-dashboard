import { useEffect, useState } from "react";

function useGreeting(name) {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hours = new Date().getHours();
    let message = "";

    if (hours < 12) message = "🌅 Good Morning";
    else if (hours < 18) message = "☀️ Good Afternoon";
    else message = "🌙 Good Evening";

    setGreeting(`${message}, ${name}`);
  }, [name]);

  return greeting;
}

export default useGreeting;
