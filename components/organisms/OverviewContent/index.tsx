import LatestTransactions from '../LatestTransactions';
import TopUpCategories from '../TopUpCategories';

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <TopUpCategories />
        <LatestTransactions />
      </div>
    </main>
  );
}
