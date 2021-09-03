import Link from 'next/link';

import InputForm from '../../molecules/InputForm';
import MiniCard from '../../molecules/MiniCard';

export default function DetailForm() {
  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <label
            htmlFor="ID"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Verify ID
          </label>

          <InputForm
            type="text"
            id="ID"
            name="ID"
            ariaDesc="verifyID"
            placeholder="Enter your ID"
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          <MiniCard
            id="topup1"
            name="topup"
            value="topup1"
            type="radio"
            htmlFor="topup1"
            mainTitle="125"
            secondaryTitle="Gold"
            description="Rp 3.250.000"
          />
          <MiniCard
            id="topup2"
            name="topup"
            value="topup2"
            type="radio"
            htmlFor="topup2"
            mainTitle="225"
            secondaryTitle="Gold"
            description="Rp 3.250.000"
          />
          <MiniCard
            id="topup3"
            name="topup"
            value="topup3"
            type="radio"
            htmlFor="topup3"
            mainTitle="350"
            secondaryTitle="Gold"
            description="Rp 3.250.000"
          />
          <MiniCard
            id="topup4"
            name="topup"
            value="topup4"
            type="radio"
            htmlFor="topup4"
            mainTitle="550"
            secondaryTitle="Gold"
            description="Rp 3.250.000"
          />
          <MiniCard
            id="topup5"
            name="topup"
            value="topup5"
            type="radio"
            htmlFor="topup5"
            mainTitle="750"
            secondaryTitle="Gold"
            description="Rp 3.250.000"
          />
          <div className="col-lg-4 col-sm-6" />
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            <MiniCard
              id="transfer"
              name="paymentMethod"
              value="transfer"
              type="radio"
              htmlFor="transfer"
              mainTitle="Transfer"
              description="Worldwide Available"
            />
            <MiniCard
              id="visa"
              name="paymentMethod"
              value="visa"
              type="radio"
              htmlFor="visa"
              mainTitle="VISA"
              description="Credit Card"
            />
            <div className="col-lg-4 col-sm-6" />
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label
          htmlFor="bankAccount"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Bank Account Name
        </label>
        <InputForm
          type="text"
          id="bankAccount"
          name="bankAccount"
          ariaDesc="bankAccount"
          placeholder="Enter your Bank Account Name"
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <Link href="/checkout">
          <a
            type="submit"
            className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          >
            Continue
          </a>
        </Link>
      </div>
    </form>
  );
}
