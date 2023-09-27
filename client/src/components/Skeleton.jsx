import { Fragment } from "react";
import { Link } from "react-router-dom";

const widthVariants = {
  short: "15em",
  medium: "25em",
};

export function Skeleton({ width, classNames }) {
  const skeletonStyles = {
    width: widthVariants[width],
  };
  return <div className={`skeleton ${classNames}`} style={skeletonStyles} />;
}

export function SkeletonList({ amount, children }) {
  return (
    <>
      {Array.from({ length: amount }).map((_, i) => (
        <Fragment key={i}>{children}</Fragment>
      ))}
    </>
  );
}

export function UsersListSkeleton() {
  {
    return (
      <div className="card">
        <div className="card-header">
          <Skeleton width={"short"} />
        </div>
        <div className="card-body">
          <Skeleton width={"short"} />
          <Skeleton width={"short"} />
          <Skeleton width={"short"} />
        </div>
        <div className="card-footer">
          <Skeleton classNames={"skeleton-btn"} />
        </div>
      </div>
    );
  }
}
