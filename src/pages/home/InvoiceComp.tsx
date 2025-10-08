import './invoice.css'
import { useState } from 'react';
import { usePDF } from 'react-to-pdf';
import InvoiceForm from '../../components/form/InvoiceForm';
import InvoicePreview from '../../components/preview/InvoicePreview';

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

const InvoiceComp = () => {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const formattedDate = today.toLocaleDateString("en-US");
    const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null);
    const { toPDF, targetRef } = usePDF({ filename: `${invoiceData?.billedToName}_proforma-invoice_${formattedDate+"_"+hours+minutes+seconds}.pdf`});


    const handleGenerate = (data: InvoiceData) => {
        setInvoiceData(data);
    };

  return (
    <div className="container">
      <h1 className="header">Proforma Invoice Generator</h1>
      <InvoiceForm onGenerate={handleGenerate} />
      {invoiceData && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">PREVIEW</h2>
          <div ref={targetRef}>
            <InvoicePreview data={invoiceData} />
          </div>
          <div className='PreviewButton'>
            <button onClick={() => toPDF()} style={{background: "purple"}}>Download PDF</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default InvoiceComp