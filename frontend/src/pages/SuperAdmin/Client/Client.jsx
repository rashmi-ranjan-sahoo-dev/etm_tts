import React, { useState } from 'react';
import './All_Client.css';

// const HomeIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
//     <polyline points="9 22 9 12 15 12 15 22"></polyline>
//   </svg>
// );

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="16"></line>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

const RefreshIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 4v6h-6"></path>
    <path d="M1 20v-6h6"></path>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
  </svg>
);

const EditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const FileTextIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-3-3.87M4 21v-2a4 4 0 0 1 3-3.87M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path>
  </svg>
);

const BuildingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="9" y1="3" x2="9" y2="21"></line>
    <line x1="15" y1="3" x2="15" y2="21"></line>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="3" y1="15" x2="21" y2="15"></line>
  </svg>
);

const WalletIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></path>
    <path d="M16 11h4v2h-4z"></path>
  </svg>
);

const ClipboardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="2" width="6" height="4" rx="1"></rect>
    <path d="M9 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"></path>
  </svg>
);

const AttachmentIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.44 11.05l-9.19 9.19a5 5 0 0 1-7.07-7.07l9.19-9.19a3 3 0 0 1 4.24 4.24l-9.19 9.19a1 1 0 0 1-1.41-1.41l9.19-9.19"></path>
  </svg>
);

const NotesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3h18v14H10l-4 4v-4H3z"></path>
  </svg>
);

const initialClients = [
  { id: 1, clientId: 'CL-0001', name: 'Ashton Cox', avatar: 'https://i.pravatar.cc/150?u=1', mobile: '1234567890', email: 'test@email.com', company: 'ABC Infotech', currency: 'euro', billing: 'Hourly User Rate', contactPerson: 'John Doe', contactPhone: '1234567892', status: 'Active', address: '123 Main St', notes: '' },
  { id: 2, clientId: 'CL-0002', name: 'Sarah Smith', avatar: 'https://i.pravatar.cc/150?u=2', mobile: '1234567890', email: 'test@email.com', company: 'xyz software', currency: 'euro', billing: 'Fixed Price', contactPerson: 'Jane Smith', contactPhone: '2345678901', status: 'Inactive', address: '456 Elm St', notes: '' },
  { id: 3, clientId: 'CL-0003', name: 'Airi Satou', avatar: 'https://i.pravatar.cc/150?u=3', mobile: '1234567890', email: 'test@email.com', company: 'Hello It Solutions', currency: 'rupee', billing: 'Hourly Job Rate', contactPerson: 'Tom Brown', contactPhone: '3456789012', status: 'Active', address: '789 Oak Ave', notes: '' },
  { id: 4, clientId: 'CL-0004', name: 'Jay Soni', avatar: 'https://i.pravatar.cc/150?u=4', mobile: '1234567890', email: 'test@email.com', company: 'Jk prime', currency: 'dollar', billing: 'Hourly Job Rate', contactPerson: 'Lisa White', contactPhone: '4567890123', status: 'Active', address: '321 Pine Rd', notes: '' },
  { id: 5, clientId: 'CL-0005', name: 'Rajesh', avatar: 'https://i.pravatar.cc/150?u=5', mobile: '1234567890', email: 'test@email.com', company: 'JR Infra', currency: 'dollar', billing: 'Hourly User Rate', contactPerson: 'Raj Kumar', contactPhone: '5678901234', status: 'Active', address: '654 Maple Dr', notes: '' },
  { id: 6, clientId: 'CL-0006', name: 'Cara Stevens', avatar: 'https://i.pravatar.cc/150?u=6', mobile: '1234567890', email: 'test@email.com', company: 'ABX Infra', currency: 'ruble', billing: 'Fixed Price', contactPerson: 'Steve Green', contactPhone: '6789012345', status: 'Inactive', address: '987 Birch Ln', notes: '' },
  { id: 7, clientId: 'CL-0007', name: 'Ashton Cox', avatar: 'https://i.pravatar.cc/150?u=7', mobile: '1234567890', email: 'test@email.com', company: 'JX chemicals', currency: 'euro', billing: 'Fixed Price', contactPerson: 'Alice Brown', contactPhone: '7890123456', status: 'Active', address: '456 Cedar St', notes: '' },
  { id: 8, clientId: 'CL-0008', name: 'Garrett Winters', avatar: 'https://i.pravatar.cc/150?u=8', mobile: '1234567890', email: 'test@email.com', company: 'Tech Flow', currency: 'dollar', billing: 'Hourly User Rate', contactPerson: 'Bob Wilson', contactPhone: '8901234567', status: 'Active', address: '741 Spruce Ct', notes: '' },
  { id: 9, clientId: 'CL-0009', name: 'Tiger Nixon', avatar: 'https://i.pravatar.cc/150?u=9', mobile: '1234567890', email: 'test@email.com', company: 'System Architect', currency: 'pound', billing: 'Fixed Price', contactPerson: 'Carol Clark', contactPhone: '9012345678', status: 'Inactive', address: '852 Fir Pl', notes: '' },
  { id: 10, clientId: 'CL-0010', name: 'Cedric Kelly', avatar: 'https://i.pravatar.cc/150?u=10', mobile: '1234567890', email: 'test@email.com', company: 'Services Inc', currency: 'euro', billing: 'Hourly Job Rate', contactPerson: 'Dave Miller', contactPhone: '0123456789', status: 'Active', address: '963 Walnut Blvd', notes: '' },
  { id: 11, clientId: 'CL-0011', name: 'Haley Kennedy', avatar: 'https://i.pravatar.cc/150?u=11', mobile: '1234567890', email: 'test@email.com', company: 'Design Co', currency: 'dollar', billing: 'Fixed Price', contactPerson: 'Eve Davis', contactPhone: '1123456789', status: 'Active', address: '159 Cherry St', notes: '' },
  { id: 12, clientId: 'CL-0012', name: 'Tatyana Fitzpatrick', avatar: 'https://i.pravatar.cc/150?u=12', mobile: '1234567890', email: 'test@email.com', company: 'Regional Director', currency: 'pound', billing: 'Hourly User Rate', contactPerson: 'Frank Evans', contactPhone: '2234567890', status: 'Active', address: '753 Apple Rd', notes: '' },
];

const AllClient = () => {
  const [clients, setClients] = useState(initialClients);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [formData, setFormData] = useState({
    clientId: '',
    name: '',
    mobile: '',
    email: '',
    company: '',
    currency: '',
    billing: '',
    contactPerson: '',
    contactPhone: '',
    status: 'Active',
    address: '',
    notes: '',
    contractDocument: '',
  });

  const itemsPerPage = 10;

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredClients.slice(indexOfFirstItem, indexOfLastItem);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      setClients(clients.filter(client => client.id !== id));
    }
  };

  const openEdit = (client) => {
    setEditingClient(client);
    setFormData({
      clientId: client.clientId,
      name: client.name,
      mobile: client.mobile,
      email: client.email,
      company: client.company,
      currency: client.currency,
      billing: client.billing,
      contactPerson: client.contactPerson,
      contactPhone: client.contactPhone,
      status: client.status,
      address: client.address,
      notes: client.notes || '',
      contractDocument: client.contractDocument || '',
    });
    setShowModal(true);
  };

  const openAdd = () => {
    const nextId = (Math.max(0, ...clients.map(c => c.id)) + 1);
    const nextClientId = `CL-${String(nextId).padStart(4, '0')}`;
    setEditingClient(null);
    setFormData({
      clientId: nextClientId,
      name: '',
      mobile: '',
      email: '',
      company: '',
      currency: '',
      billing: '',
      contactPerson: '',
      contactPhone: '',
      status: 'Active',
      address: '',
      notes: '',
      contractDocument: '',
    });
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, contractDocument: file }));
    }
  };

  const handleSave = () => {
    if (!formData.name || !formData.email || !formData.company || !formData.mobile) return;
    if (editingClient) {
      setClients(prev => prev.map(c => c.id === editingClient.id ? {
        ...c,
        ...formData,
      } : c));
    } else {
      const newId = (Math.max(0, ...clients.map(c => c.id)) + 1);
      const newAvatar = `https://i.pravatar.cc/150?u=${newId}`;
      setClients(prev => [...prev, {
        id: newId,
        avatar: newAvatar,
        ...formData,
      }]);
    }
    setShowModal(false);
  };

  const handleViewDocument = (doc) => {
    if (!doc) {
      alert('No contract document uploaded');
      return;
    }
    if (typeof doc === 'string') {
      window.open(doc, '_blank');
    } else {
      const url = URL.createObjectURL(doc);
      window.open(url, '_blank');
    }
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="all-client-container">
      {/* <div className="page-header"> */}
        <h2 className="page-title">All Clients</h2>
        <div className="breadcrumbs">
          {/* <span className="home-icon"><HomeIcon /></span>
          <span>&gt;</span>
          <span>Clients</span>
          <span>&gt;</span>
          <span>All Clients</span> */}
        </div>
      {/* </div> */}

      <div className="client-table-card">
        <div className="table-toolbar">
          <div className="toolbar-left">
            <span className="tab-title">Clients</span>
            <div className="search-bar">
              <span className="search-icon"><SearchIcon /></span>
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search" 
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
          <div className="toolbar-right">
            <button className="action-btn add-btn" title="Add Client" onClick={openAdd}><PlusIcon /></button>
            <button className="action-btn" title="Refresh" onClick={() => window.location.reload()}><RefreshIcon /></button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="client-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Client ID</th>
                <th>Client Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Company Name</th>
                <th>Currency</th>
                <th>Billing Method</th>
                <th>Contact Person</th>
                <th>Contact Phone</th>
                <th>Status</th>
                <th>Contract Document</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((client) => (
                  <tr key={client.id}>
                    <td><input type="checkbox" /></td>
                    <td>{client.clientId}</td>
                    <td>
                      <div className="client-info">
                        <img src={client.avatar} alt={client.name} className="client-avatar" />
                        <span>{client.name}</span>
                      </div>
                    </td>
                    <td>
                      <div className="contact-info">
                        <span className="contact-icon"><PhoneIcon /></span>
                        {client.mobile}
                      </div>
                    </td>
                    <td>
                      <div className="contact-info">
                        <span className="email-icon"><MailIcon /></span>
                        {client.email}
                      </div>
                    </td>
                    <td>{client.company}</td>
                    <td>{client.currency}</td>
                    <td>{client.billing}</td>
                    <td>{client.contactPerson}</td>
                    <td>{client.contactPhone}</td>
                    <td>
                      <span className={`status-badge ${client.status === 'Active' ? 'status-active' : 'status-inactive'}`}>
                        {client.status}
                      </span>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <button className="view-contract-btn" title="View Contract" onClick={() => handleViewDocument(client.contractDocument)}>
                        <span className="document-icon"><FileTextIcon /></span>
                      </button>
                    </td>
                    <td>
                      <div className="address-cell">
                        <MapPinIcon />
                        {client.address.length > 15 ? client.address.substring(0, 12) + '...' : client.address}
                      </div>
                    </td>
                    <td>
                      <div className="action-cell">
                        <button type="button" className="edit-btn" title="Edit" onClick={() => openEdit(client)}><EditIcon /></button>
                        <button type="button" className="delete-btn" title="Delete" onClick={() => handleDelete(client.id)}><TrashIcon /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="13" style={{ textAlign: 'center', padding: '20px' }}>No clients found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="pagination-container">
          <div className="pagination">
            <button 
              className="page-btn" 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`page-btn ${currentPage === page ? 'active' : ''}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
            <button 
              className="page-btn" 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <img src="https://i.pravatar.cc/40" alt="avatar" className="modal-avatar" />
              <div className="modal-title">{editingClient ? 'Edit Client' : 'New Client'}</div>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label>Client ID</label>
                <div className="input-with-icon">
                  <span className="input-icon"><ClipboardIcon /></span>
                  <input name="clientId" value={formData.clientId} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label>Name</label>
                <div className="input-with-icon">
                  <span className="input-icon"><UserIcon /></span>
                  <input name="name" value={formData.name} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label>Mobile</label>
                <div className="input-with-icon">
                  <span className="input-icon"><PhoneIcon /></span>
                  <input name="mobile" value={formData.mobile} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <div className="input-with-icon">
                  <span className="input-icon"><MailIcon /></span>
                  <input name="email" value={formData.email} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label>Company Name</label>
                <div className="input-with-icon">
                  <span className="input-icon"><BuildingIcon /></span>
                  <input name="company" value={formData.company} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label>Currency</label>
                <div className="input-with-icon">
                  <span className="input-icon"><WalletIcon /></span>
                  <select name="currency" value={formData.currency} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="euro">euro</option>
                    <option value="rupee">rupee</option>
                    <option value="dollar">dollar</option>
                    <option value="pound">pound</option>
                    <option value="ruble">ruble</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Billing Method</label>
                <div className="input-with-icon">
                  <span className="input-icon"><ClipboardIcon /></span>
                  <select name="billing" value={formData.billing} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Hourly User Rate">Hourly User Rate</option>
                    <option value="Hourly Job Rate">Hourly Job Rate</option>
                    <option value="Fixed Price">Fixed Price</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Contact Person</label>
                <div className="input-with-icon">
                  <span className="input-icon"><UserIcon /></span>
                  <input name="contactPerson" value={formData.contactPerson} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label>Contact Phone</label>
                <div className="input-with-icon">
                  <span className="input-icon"><PhoneIcon /></span>
                  <input name="contactPhone" value={formData.contactPhone} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label>Status</label>
                <div className="input-with-icon">
                  <span className="input-icon"><ClipboardIcon /></span>
                  <select name="status" value={formData.status} onChange={handleChange}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Contract Document</label>
                <div className="input-with-icon">
                  <span className="input-icon"><AttachmentIcon /></span>
                  <input type="file" name="contractDocument" onChange={handleFileChange} />
                </div>
                {formData.contractDocument && typeof formData.contractDocument !== 'string' && (
                  <small style={{ color: '#667085' }}>{formData.contractDocument.name}</small>
                )}
              </div>
              <div className="form-group form-full">
                <label>Notes</label>
                <div className="input-with-icon">
                  <span className="input-icon"><NotesIcon /></span>
                  <textarea name="notes" rows="3" value={formData.notes} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group form-full">
                <label>Address</label>
                <div className="input-with-icon">
                  <span className="input-icon"><MapPinIcon /></span>
                  <textarea name="address" rows="2" value={formData.address} onChange={handleChange} />
                </div>
              </div>
            </div>
            <div className="modal-actions">
              <button className="btn btn-save" onClick={handleSave} disabled={!formData.name || !formData.email || !formData.company || !formData.mobile}>Save</button>
              <button className="btn btn-cancel" onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllClient;
