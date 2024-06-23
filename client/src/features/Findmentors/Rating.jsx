import { FaRegStar } from "react-icons/fa";

export default function BasicRating({ rating }) {
  return (
    <>
      <FaRegStar value={rating} readOnly />
    </>
  );
}
