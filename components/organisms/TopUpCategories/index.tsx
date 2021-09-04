import CategoriesCard from '../CategoriesCard';

export default function TopUpCategories() {
  return (
    <div className="top-up-categories mb-30">
      <p className="text-lg fw-medium color-palette-1 mb-14">
        Top Up Categories
      </p>
      <div className="main-content">
        <div className="row">
          <CategoriesCard type="desktop" total="Rp18.500.000" />
          <CategoriesCard type="mobile" total="Rp8.455.000" />
          <CategoriesCard type="desktop" total="Rp5.000.000" />
        </div>
      </div>
    </div>
  );
}
