import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { getUsers } from "../api/users";
import { Suspense } from "react";
import { SkeletonList, UserCardSkeleton } from "../components/Skeleton";

function UserList() {
  const { usersPromise } = useLoaderData();

  return (
    <>
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        <Suspense
          fallback={
            <SkeletonList amount={10}>
              <UserCardSkeleton />
            </SkeletonList>
          }
        >
          <Await resolve={usersPromise}>
            {(users) =>
              users.map((user) => (
                <div key={user.id} className="card">
                  <div className="card-header">{user.name}</div>
                  <div className="card-body">
                    <div>{user.company.name}</div>
                    <div>{user.website}</div>
                    <div>{user.email}</div>
                  </div>
                  <div className="card-footer">
                    <Link className="btn" to={user.id.toString()}>
                      View
                    </Link>
                  </div>
                </div>
              ))
            }
          </Await>
        </Suspense>
      </div>
    </>
  );
}

function loader({ request: { signal } }) {
  return defer({ usersPromise: getUsers({ signal }) });
}

export const userListRoute = {
  loader,
  element: <UserList />,
};
