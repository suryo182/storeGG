import Footer from './Footer';
import Profile from './Profile';
import MenuItem from '../MenuItem';

interface SideBarProps {
  activeMenu: 'overview' | 'transactions' | 'settings';
}
export default function SideBar({ activeMenu }: SideBarProps) {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile name="Shayna Anne" email="shayna@anne.com" />
        <div className="menus">
          <MenuItem
            name="Overview"
            logo="overview"
            isActive={activeMenu === 'overview'}
            href="/member"
          />
          <MenuItem
            name="Transactions"
            logo="transaction"
            href="/member/transactions"
            isActive={activeMenu === 'transactions'}
          />
          <MenuItem name="Messages" logo="message" href="/member" />
          <MenuItem name="Card" logo="card" href="/member" />
          <MenuItem name="Rewards" logo="reward" href="/member" />
          <MenuItem
            name="Settings"
            logo="setting"
            href="/member/edit-profile"
            isActive={activeMenu === 'settings'}
          />
          <MenuItem name="Log Out" logo="logout" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
