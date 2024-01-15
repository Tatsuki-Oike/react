import { useNavigate } from "react-router-dom"

export default function Navigate() {
  const navigate = useNavigate()
  const handleClick = () => navigate("/")

  return (
    <>
    <h2> Navigate </h2>
    <button className="btn btn-outline-primary" onClick={handleClick}>
      Home
    </button>
    </>
  );
}
