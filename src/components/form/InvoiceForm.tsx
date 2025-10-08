import { useState } from 'react';
import './invoiceForm.css';

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

interface InvoiceFormProps {
  onGenerate: (data: InvoiceData) => void;
}

export default function InvoiceForm({ onGenerate }: InvoiceFormProps) {
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [dateIssued, setDateIssued] = useState(new Date().toISOString().split('T')[0]); // Default to current date
  const [dueDate, setDueDate] = useState('');
  const [billedToTitle, setBilledToTitle] = useState('Cost Estimate for Electrical Application');
  const [billedToName, setBilledToName] = useState('');
  const [address, setAddress] = useState('');
  const [tin, setTin] = useState('');
  const [items, setItems] = useState<Item[]>([{ description: '', unit: '', quantity: 1, unitPrice: 0 }]);
  const [labor, setLabor] = useState(0);
  const [transport, setTransport] = useState(0);
  const [tanesco, setTanesco] = useState(0);

  const addItem = () => {
    setItems([...items, { description: '', unit: '', quantity: 1, unitPrice: 0 }]);
  };

  const updateItem = (index: number, field: keyof Item, value: string) => {
    const newItems = [...items];
    if (field === 'quantity' || field === 'unitPrice') {
      newItems[index][field] = Number(value);
    } else {
      newItems[index][field] = value;
    }
    setItems(newItems);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({
      invoiceNumber,
      dateIssued,
      dueDate,
      billedToTitle,
      billedToName,
      address,
      tin,
      items,
      labor,
      transport,
      tanesco,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="invoice-form">
      <h2 className="form-header">DETAILS</h2>
      <div className="invoice-inputs">
        <div className="form-input">
          <label className="form_label">Invoice Number:</label>
          <input type="text" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} className="formInput_text" required />
        </div>
        <div className="form-input">
          <label className="form_label">Date Issued:</label>
          <input type="date" value={dateIssued} onChange={(e) => setDateIssued(e.target.value)} className="formInput_text" required />
        </div>
        <div className="form-input">
          <label className="form_label">Due Date:</label>
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="formInput_text" />
        </div>
        <div className="form-input">
          <label className="form_label">Billed To Title:</label>
          <input type="text" value={billedToTitle} onChange={(e) => setBilledToTitle(e.target.value)} className="formInput_text" />
        </div>
        <div className="form-input">
          <label className="form_label">Billed To Name:</label>
          <input type="text" value={billedToName} onChange={(e) => setBilledToName(e.target.value)} className="formInput_text" required />
        </div>
        <div className="form-input">
          <label className="form_label">Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="formInput_text" required />
        </div>
        <div className="form-input">
          <label className="form_label">TIN:</label>
          <input type="text" value={tin} onChange={(e) => setTin(e.target.value)} className="formInput_text" />
        </div>
      </div>

      <h2 className="form-header">ITEMS</h2>
      <div className="form-items">
        <div className="formItems_input">
          <label className="form_label">Title</label>
        </div>
        <div className="formItems_input">
          <label className="form_label">Unit</label>
        </div>
        <div className="formItems_input">
          <label className="form_label">Quantity</label>
        </div>
        <div className="formItems_input">
          <label className="form_label">Unit price</label>
        </div>
      </div>
      {items.map((item, index) => (
        <div key={index} className="form-items">
          <div className="formItems_input">
            <input type="text" placeholder="Description" value={item.description} onChange={(e) => updateItem(index, 'description', e.target.value)} className="formInput_text" required />
          </div>
          <div className="formItems_input">
            <input type="text" placeholder="Unit" value={item.unit} onChange={(e) => updateItem(index, 'unit', e.target.value)} className="formInput_text" required />
          </div>
          <div className="formItems_input">
            <input type="number" placeholder="Quantity" value={item.quantity} onChange={(e) => updateItem(index, 'quantity', e.target.value)} className="formInput_text" required />
          </div>
          <div className="formItems_input">
            <input type="number" placeholder="Unit Price" value={item.unitPrice} onChange={(e) => updateItem(index, 'unitPrice', e.target.value)} className="formInput_text" required />
          </div>
        </div>
      ))}
      <div className='FormsButton'>
        <button type="button" onClick={addItem} className="Item-button">Add Item</button>
      </div>
      
      <div className="invoice-inputs">
        <div className="form-input">
          <label className="form_label">Labor Charge (TSH):</label>
          <input type="number" value={labor} onChange={(e) => setLabor(Number(e.target.value))} className="formInput_text" />
        </div>
        <div className="form-input">
          <label className="form_label">Transport Charges (TSH):</label>
          <input type="number" value={transport} onChange={(e) => setTransport(Number(e.target.value))} className="formInput_text" />
        </div>
        <div className="form-input">
          <label className="form_label">TANESCO Charges (TSH):</label>
          <input type="number" value={tanesco} onChange={(e) => setTanesco(Number(e.target.value))} className="formInput_text" />
        </div>
      </div>
      <div className='PreviewButton'>
        <button type="submit">Preview Invoice</button>
      </div>
    </form>
  );
}