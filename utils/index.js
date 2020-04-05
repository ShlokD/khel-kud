export async function addSubscription(email) {
  const options = {
    method: "POST",
    body: JSON.stringify({ email }),
  };
  const response = await fetch("/api/email-submit", options);
  const jsonResponse = await response.json();
  return (jsonResponse && jsonResponse.status) || "SUBSCRIPTION_ERROR";
}
