import "./skeleton.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonCard() {
  return (
    <div className="container">
      <Skeleton height={25} width="89%" />
      <Skeleton height={25} width="98%" />
      <Skeleton height={25} width="95%" />
      <Skeleton height={25} width="40%" />
    </div>
  );
}

export default SkeletonCard;
