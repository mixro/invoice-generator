interface Item {
  description: string;
  unit: string;
  quantity: number;
  unitPrice: number;
}

interface InvoiceData {
  invoiceNumber: string;
  dateIssued: string;
  dueDate: string;
  billedToTitle: string;
  billedToName: string;
  address: string;
  tin: string;
  items: Item[];
  labor: number;
  transport: number;
  tanesco: number;
}

export default function InvoicePreview({ data }: { data: InvoiceData }) {
  const subtotalMaterials = data.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const grandExclusive = subtotalMaterials + data.labor + data.transport + data.tanesco;
  const vat = grandExclusive * 0.18;
  const total = grandExclusive + vat;

  const formatNumber = (num: number) => num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="p-8 bg-white border border-gray-300 max-w-4xl mx-auto font-sans text-sm">
      <div className="flex justify-between mb-4 items-start">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D0BAQGIAaDBNhk0iw/company-logo_200_200/company-logo_200_200/0/1733920127968/mamodo_inc_logo?e=2147483647&v=beta&t=5y2SOIGnbo9pmL0QhrFkx849BcajHoqXaVIzvlhpGCg" // Replace with actual logo URL if available
          alt="TANG TECH Logo"
          className="w-24 h-24"
        />
        <div className="text-right">
          <h1 className="text-2xl font-bold">TANG TECH AND ENGINEERING LTD</h1>
          <p>P.O. Box 2233, Dar es salaam</p>
          <p>Mobile: +255 659 801321, +255 714 376836</p>
          <p>TIN: 168-901-461</p>
        </div>
      </div>
      <h2 className="text-xl font-bold text-center mb-4">PROFORMA INVOICE</h2>
      <p className="mb-4 font-bold">BILLED TO: {data.billedToTitle}</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p>Invoice Number: {data.invoiceNumber}</p>
          <p>Date Issued: {data.dateIssued}</p>
          <p>Due Date: {data.dueDate}</p>
        </div>
        <div>
          <p>Name: {data.billedToName}</p>
          <p>Address: {data.address}</p>
          <p>TIN: {data.tin}</p>
        </div>
      </div>
      <table className="w-full border-collapse mb-4 text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">S/N</th>
            <th className="border border-gray-400 p-2">Description</th>
            <th className="border border-gray-400 p-2">Unit</th>
            <th className="border border-gray-400 p-2">Quantity</th>
            <th className="border border-gray-400 p-2">Unit Price (TSH)</th>
            <th className="border border-gray-400 p-2">Amount (TSH)</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-400 p-2">{index + 1}</td>
              <td className="border border-gray-400 p-2">{item.description}</td>
              <td className="border border-gray-400 p-2">{item.unit}</td>
              <td className="border border-gray-400 p-2">{item.quantity}</td>
              <td className="border border-gray-400 p-2">{formatNumber(item.unitPrice)}</td>
              <td className="border border-gray-400 p-2">{formatNumber(item.quantity * item.unitPrice)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={5} className="border border-gray-400 p-2 font-bold text-right">Sub Total for Material cost.</td>
            <td className="border border-gray-400 p-2">{formatNumber(subtotalMaterials)}</td>
          </tr>
          <tr>
            <td colSpan={5} className="border border-gray-400 p-2 font-bold text-right">Labor Charge</td>
            <td className="border border-gray-400 p-2">{formatNumber(data.labor)}</td>
          </tr>
          <tr>
            <td colSpan={5} className="border border-gray-400 p-2 font-bold text-right">Transport Charges</td>
            <td className="border border-gray-400 p-2">{formatNumber(data.transport)}</td>
          </tr>
          <tr>
            <td colSpan={5} className="border border-gray-400 p-2 font-bold text-right">TANESCO CHARGES & COMISSION DEPEND ON SITE VIST</td>
            <td className="border border-gray-400 p-2">{formatNumber(data.tanesco)}</td>
          </tr>
          <tr>
            <td colSpan={5} className="border border-gray-400 p-2 font-bold text-right">GRAND TOTAL VAT EXCLUSIVE</td>
            <td className="border border-gray-400 p-2">{formatNumber(grandExclusive)}</td>
          </tr>
          <tr>
            <td colSpan={5} className="border border-gray-400 p-2 font-bold text-right">VAT 18%</td>
            <td className="border border-gray-400 p-2">{formatNumber(vat)}</td>
          </tr>
          <tr>
            <td colSpan={5} className="border border-gray-400 p-2 font-bold text-right">TOTAL</td>
            <td className="border border-gray-400 p-2">{formatNumber(total)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}