import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

const GridCard = lazy(() => import("./GridCard"));

function Favorites() {
  const recipes = useSelector((state) => state.favorites);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GridCard recipes={recipes}></GridCard>
    </Suspense>
  );
}

export default Favorites;
