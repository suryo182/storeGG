import Row from './Row';
import TransactionDetailTitle from './TransactionDetailTitle';

export default function TransactionDetailContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Details #GG001
        </h2>
        <div className="details">
          <div className="main-content main-content-card overflow-auto">
            <section className="checkout mx-auto">
              <TransactionDetailTitle type="Mobile" status="Pending">
                Mobile Legends
                <br />
                New Battle 2021
              </TransactionDetailTitle>
              <hr />
              <div className="purchase pt-30">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Purchase Details
                </h2>
                <Row title="Your ID" value="masayoshizero" />
                <Row title="Order ID" value="#GG001" />
                <Row title="Item" value={250} />
                <Row title="Price" value={42280500} />
                <Row title="Tax (10%)" value={4228000} />
                <Row
                  title="Total"
                  value={55000600}
                  className="color-palette-4"
                />
              </div>
              <div className="payment pt-10 pb-10">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">
                  Payment Informations
                </h2>
                <Row title="Your Account Name" value="Masayoshi Angga Zero" />
                <Row title="Type" value="Worldwide Transfer" />
                <Row title="Bank Name" value="Mandiri" />
                <Row title="Bank Account Name" value="PT Store GG Indonesia" />
                <Row title="Bank Number" value="1800 - 9090 - 2021" />
              </div>
              <div className="d-md-block d-flex flex-column w-100">
                <a
                  className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                  href="/#"
                  role="button"
                >
                  WhatsApp ke Admin
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
