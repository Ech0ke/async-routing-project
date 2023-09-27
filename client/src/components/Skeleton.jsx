import { Fragment } from "react";

const widthVariants = {
  short: "15em",
  medium: "25em",
};

export function Skeleton({ width }) {
  const skeletonStyles = {
    width: widthVariants[width],
  };
  return <div className="skeleton" style={skeletonStyles} />;
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
