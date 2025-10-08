import './invoicePreview.css'

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
    <div className="invoice_preview">
      <div className="invoice_wrapper">
        <div className="invoice_preview_header">
          <img
            src="/assets/logo.png" 
            alt="TANG TECH Logo"
            className="w-24 h-24"
          />
          <div className="invoice-header-desc">
            <h1>TANG TECH AND ENGINEERING LTD</h1>
            <p>P.O. Box 2233, Dar es salaam</p>
            <p>Mobile: +255 659 801321, +255 714 376836</p>
            <p>TIN: 168-901-461</p>
          </div>
        </div>
        
        <div className="invoice_preview_receiver">
          <h2>PROFORMA INVOICE</h2>
          <p className="invoice_preview_billed">BILLED TO: {data.billedToTitle}</p>
          <div className="invoice_receiver_info">
            <div className='invoice_receiver_details'>
              <p>Invoice Number:</p>
              <p>{data.invoiceNumber}</p>
            </div>
            <div className='invoice_receiver_details'>
              <p>Date Issued:</p>
              <p>{data.dateIssued}</p>
            </div>
            <div className='invoice_receiver_details'>
              <p>Due Date:</p>
              <p>{data.dueDate}</p>
            </div>
            <div className='invoice_receiver_details'>
              <p>Name:</p>
              <p>{data.billedToName}</p>
            </div>
            <div className='invoice_receiver_details'>
              <p>Address:</p>
              <p>{data.address}</p>
            </div>
            <div className='invoice_receiver_details'>
              <p>TIN:</p>
              <p>{data.tin}</p>
            </div>
          </div>
        </div>

        <div className="invoice_preview_table">
          <table>
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
                  <td style={{ textAlign: 'center' }}>{index + 1}</td>
                  <td>{item.description}</td>
                  <td style={{ textAlign: 'center' }}>{item.unit}</td>
                  <td style={{ textAlign: 'center' }}>{item.quantity}</td>
                  <td style={{ textAlign: 'right' }}>{formatNumber(item.unitPrice)}</td>
                  <td style={{ textAlign: 'right' }}>{formatNumber(item.quantity * item.unitPrice)}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={5} className="border border-gray-400 p-2 font-bold text-right">Sub Total for Material cost.</td>
                <td style={{ textAlign: 'right' }}>{formatNumber(subtotalMaterials)}</td>
              </tr>
              <tr>
                <td colSpan={5} className="border border-gray-400 p-2 font-bold text-right">Labor Charge</td>
                <td style={{ textAlign: 'right' }}>{formatNumber(data.labor)}</td>
              </tr>
              <tr>
                <td colSpan={5} className="border border-gray-400 p-2 font-bold text-right">Transport Charges</td>
                <td style={{ textAlign: 'right' }}>{formatNumber(data.transport)}</td>
              </tr>
              <tr>
                <td colSpan={5} className="border border-gray-400 p-2 font-bold text-right">TANESCO CHARGES & COMISSION DEPEND ON SITE VIST</td>
                <td style={{ textAlign: 'right' }}>{formatNumber(data.tanesco)}</td>
              </tr>
              <tr>
                <td colSpan={5} className="border border-gray-400 p-2 font-bold text-right">GRAND TOTAL VAT EXCLUSIVE</td>
                <td style={{ textAlign: 'right' }}>{formatNumber(grandExclusive)}</td>
              </tr>
              <tr>
                <td colSpan={5} className="border border-gray-400 p-2 font-bold text-right">VAT 18%</td>
                <td style={{ textAlign: 'right' }}>{formatNumber(vat)}</td>
              </tr>
              <tr>
                <td colSpan={5} className="border border-gray-400 p-2 font-bold text-right">TOTAL</td>
                <td style={{ textAlign: 'right' }}>{formatNumber(total)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}