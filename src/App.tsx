import { useState } from 'react';
import { usePDF } from 'react-to-pdf';
import InvoiceForm from './components/InvoiceForm';
import InvoicePreview from './components/InvoicePreview';

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

function App() {
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null);
  const { toPDF, targetRef } = usePDF({ filename: 'proforma-invoice.pdf' });

  const handleGenerate = (data: InvoiceData) => {
    setInvoiceData(data);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Proforma Invoice Generator</h1>
      <InvoiceForm onGenerate={handleGenerate} />
      {invoiceData && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Preview</h2>
          <div ref={targetRef}>
            <InvoicePreview data={invoiceData} />
          </div>
          <button onClick={() => toPDF()} className="mt-4 bg-purple-500 text-white p-2">Download PDF</button>
        </div>
      )}
    </div>
  );
}

export default App;