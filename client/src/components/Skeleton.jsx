import { Fragment, Suspense } from "react";
import { Await, Link } from "react-router-dom";

const widthVariants = {
  short: "15em",
  medium: "25em",
};

export function Skeleton({ width, inline, classNames }) {
  const skeletonStyles = {
    width: widthVariants[width],
    display: inline ? "inline-block" : undefined,
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

export function UserCardSkeleton() {
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

export function PostCardSkeleton() {
  return (
    <div className="card">
      <div className="card-header">
        <Skeleton width={"short"} />
      </div>
      <div className="card-body">
        <div className="card-preview-text">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
      <div className="card-footer">
        <Skeleton classNames={"skeleton-btn"} />
      </div>
    </div>
  );
}

export function PostCommentsSkeleton() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="text-sm mb-1">
          <Skeleton width={"short"} />
        </div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
}

export function SimpleSkeletonText({ resolve, children }) {
  return (
    <Suspense fallback={<Skeleton width={"short"} inline />}>
      <Await resolve={resolve}>{children}</Await>
    </Suspense>
  );
}
