import Category from './Category';
import TableRow from './TableRow';

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <Category icon="desktop" total={18500000}>
                Game
                <br />
                Desktop
              </Category>
              <Category icon="mobile" total={8455000}>
                Game
                <br />
                Mobile
              </Category>
              <Category icon="desktop" total={5000000}>
                Others
                <br />
                Categories
              </Category>
            </div>
          </div>
        </div>
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
                <TableRow
                  title="Mobile Legens: New Battle 2021"
                  type="Mobile"
                  item={290}
                  price={290000}
                  status="Pending"
                  image="overview-1"
                />
                <TableRow
                  title="Call of Duty: Modern"
                  type="Mobile"
                  item={550}
                  price={730000}
                  status="Success"
                  image="overview-2"
                />
                <TableRow
                  title="Clash of Clans"
                  type="Mobile"
                  item={100}
                  price={120000}
                  status="Failed"
                  image="overview-3"
                />
                <TableRow
                  title="The Royal Game"
                  type="Mobile"
                  item={225}
                  price={200000}
                  status="Pending"
                  image="overview-4"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
