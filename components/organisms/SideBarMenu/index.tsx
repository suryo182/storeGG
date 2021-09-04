import MenuItem from '../MenuItem';

export default function index() {
  return (
    <div className="menus">
      <MenuItem name="Overview" logo="overview" isActive />
      <MenuItem name="Transactions" logo="transaction" />
      <MenuItem name="Messages" logo="message" />
      <MenuItem name="Card" logo="card" />
      <MenuItem name="Rewards" logo="reward" />
      <MenuItem name="Settings" logo="setting" />
      <MenuItem name="Log Out" logo="logout" />
    </div>
  );
}
