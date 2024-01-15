import { useSearchParams } from "react-router-dom";

export default function Query() {
  const [query] = useSearchParams()
  return (
    <h2> Query: {query.get("id")} </h2>
  );
}
