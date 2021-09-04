import SideBarMenu from '../SideBarMenu';
import Footer from './Footer';
import Profile from './Profile';

export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile name="Shayna Anne" email="shayna@anne.com" />
        <SideBarMenu />
        <Footer />
      </div>
    </section>
  );
}
