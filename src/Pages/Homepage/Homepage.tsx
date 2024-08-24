import { qr } from "../../assets";
import { Navbar } from "../../Components";
import "./style.scss";

function Homepage() {
  return (
    <div className="_homepage bg-black pb-10">
      <Navbar />
      <main className="main pt-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 _card_flex">
            <h1 className="text-white">ENTER CARD ISSUER</h1>
            <input type="text" className="px-3 py-2 outline-none _card_iss" />
          </div>
          <div className="flex items-center gap-4 _card_flex">
            <h1 className="text-white">ENTER PASSWORD</h1>
            <input
              required
              type="text"
              className="px-3 py-2 outline-none _card_iss"
            />
          </div>
        </div>

        {/* SeedQR */}
        <div className="flex justify-between items-center mt-14">
          <h1>GENERATE SEEDQR</h1>
          <div className="flex items-center gap-10 _qr_flex">
            <button>
              <div className="h-10 w-10 rounded-full bg-green-500"></div>
            </button>
            <div
              style={{ width: "150px", height: "150px" }}
              className="bg-white"
            >
              <img src={qr} alt="qr.png" className="h-full w-full" />
            </div>
          </div>
        </div>
        {/* XPUBQR */}
        <div className="flex justify-between items-center mt-8">
          <h1>GENERATE XPUB QR</h1>
          <div className="flex items-center gap-10 _qr_flex">
            <button>
              <div className="h-10 w-10 rounded-full bg-green-500"></div>
            </button>
            <div
              style={{ width: "150px", height: "150px" }}
              className="bg-white"
            >
              <img src={qr} alt="qr.png" className="h-full w-full" />
            </div>
          </div>
        </div>

        {/* WALLET NAME */}
        <div className="flex items-center justify-between mt-8 _wallet_nme">
          <h1 className="text-white">ENTER WALLET NAME</h1>
          <input type="text" className="px-3 py-2 outline-none _wallet_name" />
        </div>

        {/* GENERATE WALLETQR */}
        <div className="flex justify-between items-center mt-8">
          <h1>GENERATE WALLET NAME QR</h1>
          <div className="flex items-center gap-10 _qr_flex">
            <button>
              <div className="h-10 w-10 rounded-full bg-green-500"></div>
            </button>
            <div
              style={{ width: "150px", height: "150px" }}
              className="bg-white"
            >
              <img src={qr} alt="qr.png" className="h-full w-full" />
            </div>
          </div>
        </div>

        {/* FINGERPRINT DISPLAY CONTAINER */}
        <div className="flex justify-between items-center mt-6">
          <div className="flex flex-col gap-4 items-center justify-center">
            <input type="text" className="px-3 py-4 outline-none _card_iss" />
            <h1>FINGERPRINT 1</h1>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <input type="text" className="px-3 py-4 outline-none _card_iss" />
            <h1>FINGERPRINT 2</h1>
          </div>
        </div>

        {/* RANDOMISATION */}
        <div className="flex justify-between items-center mt-8">
          <h1>RANDOMISATION</h1>
          <div className="flex items-center gap-10 _qr_flex">
            <button>
              <div className="h-10 w-10 rounded-full bg-green-500"></div>
            </button>
            <input
              type="text"
              className="px-3 py-2 outline-none _wallet_name"
              placeholder="3 / 11 / 12 / 2 / 1 / 10
"
            />
          </div>
        </div>

        {/* RETURN MESSAGE */}
        <div className="mt-16 flex flex-col gap-6 items-center justify-center">
          <input
            type="text"
            className="w-full p-4"
            placeholder=" 39a103a7_MM_ decembermotheropenarchoxygeneternal
"
          />
          <h1>OP_RETURN MESSAGE</h1>
        </div>

        {/* RESTART BUTTON BOTTOM */}
        <div className="mt-20 flex flex-col gap-6 justify-center items-center">
          <button>
            <div className="h-10 w-10 rounded-full bg-green-500"></div>
          </button>
          <h1>RESTART</h1>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
