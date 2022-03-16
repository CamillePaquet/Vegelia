import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

const GridCard = lazy(() => import("./GridCard"));

function Favorites() {
  const recipes = useSelector((state) => state.favorites);

  return (
    <div data-testid="content">
      <Suspense fallback={<div>Loading...</div>}>
        <GridCard recipes={recipes}></GridCard>
      </Suspense>
    </div>
  );
}

export default Favorites;
