import TransactionItem from './TransactionItem';

export default function LatestTransactions() {
  return (
    <div className="latest-transaction">
      <p className="text-lg fw-medium color-palette-1 mb-14">
        Latest Transactions
      </p>
      <div className="main-content main-content-table overflow-auto">
        <table className="table table-borderless">
          <thead>
            <tr className="color-palette-1">
              <th className="text-start" scope="col">
                Game
              </th>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-middle">
              <TransactionItem
                title="Mobile Legens: New Battle 2021"
                type="Mobile"
                nominal="290"
                price="Rp 290.000"
                status="Pending"
                image="overview-1"
              />
            </tr>
            <tr className="align-middle">
              <TransactionItem
                title="Call of Duty: Modern"
                type="Mobile"
                nominal="550"
                price="Rp 730.000"
                status="Success"
                image="overview-2"
              />
            </tr>
            <tr className="align-middle">
              <TransactionItem
                title="Clash of Clans"
                type="Mobile"
                nominal="100"
                price="Rp 120.000"
                status="Failed"
                image="overview-3"
              />
            </tr>
            <tr className="align-middle">
              <TransactionItem
                title="The Royal Game"
                type="Mobile"
                nominal="225"
                price="Rp 200.000"
                status="Pending"
                image="overview-4"
              />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
