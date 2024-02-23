import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [addonBill, setAddonBill] = useState("disatisfield");
  const [addonFriendBill, setAddonFriendBill] = useState("disatisfield");
  let totalBill;
  let totalFreindBill;
  if (addonBill === "disatisfield") totalBill = 0;
  if (addonBill === "okay") totalBill = 5;
  if (addonBill === "good") totalBill = 10;
  if (addonBill === "amazing") totalBill = 20;

  if (addonFriendBill === "disatisfield") totalFreindBill = 0;
  if (addonFriendBill === "okay") totalFreindBill = 5;
  if (addonFriendBill === "good") totalFreindBill = 10;
  if (addonFriendBill === "amazing") totalFreindBill = 20;
  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <AddonBill addonBill={addonBill} setAddonBill={setAddonBill}>
        <p>how did you like ther service?</p>
      </AddonBill>
      <AddonBill addonBill={addonFriendBill} setAddonBill={setAddonFriendBill}>
        <p>how did your freind like the service?</p>
      </AddonBill>
      <Balance
        bill={+bill}
        totalBill={+totalBill}
        totalFreindBill={+totalFreindBill}
      ></Balance>
      <Reset></Reset>
    </div>
  );
}

function Bill({ bill, setBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input value={bill} onChange={(e) => setBill(e.target.value)} />
    </div>
  );
}
function AddonBill({ addonBill, setAddonBill, children }) {
  return (
    <div>
      <span>{children}</span>
      <select value={addonBill} onChange={(e) => setAddonBill(e.target.value)}>
        <option value="disatisfield">Disatisfield(0%)</option>
        <option value="okay">it was okay(5%)</option>
        <option value="good">it was good(10%)</option>
        <option value="amazing">Absolutely amazing(20%)</option>
      </select>
    </div>
  );
}
function Balance({ bill, totalBill, totalFreindBill }) {
  const averageTotal = (totalBill + totalFreindBill) / 2;
  return (
    <div>
      <strong>
        YOU PAY ${bill + averageTotal} (${bill} + ${averageTotal} tip)
      </strong>
    </div>
  );
}
function Reset() {}
