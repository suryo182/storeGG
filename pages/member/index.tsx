import OverviewContent from '../../components/organisms/OverviewContent';
import SideBar from '../../components/organisms/SideBar';

export default function Overview() {
  return (
    <section className="overview overflow-auto">
      <SideBar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}
