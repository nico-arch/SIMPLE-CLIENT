export const ping = async () => {
  const pingEndpoint = `${API_URL_V1}/ping`;

  const header = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const method = "GET";

  try {
    const rawResponse = await fetch(pingEndpoint, {
      method,
      headers: header,
    });

    return rawResponse.json();
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
