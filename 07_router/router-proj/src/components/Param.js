import { useParams } from "react-router-dom";

export default function Param() {
  const params = useParams()
  return (
    <h2> Param: {params.id} </h2>
  );
}
