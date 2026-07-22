import React, { useState } from 'react';

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="col">
      <div className="text-center mb-4">
        <div className="nav nav-tabs custom-detail-tabs-wrapper border-0 justify-content-center">
          <button 
            className={`nav-item nav-link ${activeTab === 'description' ? 'active' : ''}`} 
            style={{
              backgroundColor: activeTab === 'description' ? '#28a745' : 'transparent',
              color: activeTab === 'description' ? '#fff' : '#28a745',
              borderColor: '#28a745',
              margin: '0 5px',
              padding: '8px 20px',
              fontWeight: '600'
            }}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button 
            className={`nav-item nav-link ${activeTab === 'specifications' ? 'active' : ''}`} 
            style={{
              backgroundColor: activeTab === 'specifications' ? '#28a745' : 'transparent',
              color: activeTab === 'specifications' ? '#fff' : '#28a745',
              borderColor: '#28a745',
              margin: '0 5px',
              padding: '8px 20px',
              fontWeight: '600'
            }}
            onClick={() => setActiveTab('specifications')}
          >
            Specifications
          </button>
          <button 
            className={`nav-item nav-link ${activeTab === 'reviews' ? 'active' : ''}`} 
            style={{
              backgroundColor: activeTab === 'reviews' ? '#28a745' : 'transparent',
              color: activeTab === 'reviews' ? '#fff' : '#28a745',
              borderColor: '#28a745',
              margin: '0 5px',
              padding: '8px 20px',
              fontWeight: '600'
            }}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews (1)
          </button>
        </div>
      </div>

      <div className="tab-content tab-content-wrapper">
        {activeTab === 'description' && (
          <div className="tab-pane fade show active ">
            <h4 className="fw-bold text-dark mb-4" style={{ fontSize: '1.35rem' }}>Product Description</h4>
            <p className="text-muted" style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>Our organic Red Delicious apples are grown in naturally nutrient-rich soils under traditional agricultural methods. They are selected for their deep red color, sweet aroma, and crunchy texture. No synthetic pesticides, herbicides, or artificial ripening treatments are used during growth and harvesting, ensuring you receive the cleanest and healthiest fruit possible.</p>
            <p className="text-muted mb-0" style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>Apples are known to support digestion, heart health, and blood sugar control. They are packed with essential nutrients, dietary fibers, and flavonoids. Eat them raw, add to oatmeal, bake them with cinnamon, or mix them into a vibrant morning smoothie.</p>
          </div>
        )}

        {activeTab === 'specifications' && (
          <div className="tab-pane fade show active">
            <h4 className="font-weight-bold text-dark mb-4" style={{ fontSize: '1.35rem' }}>Specifications & Handling</h4>
            <div className="row">
              <div className="col-md-6">
                <div className="spec-table-row">
                  <span className="spec-table-label">Source</span>
                  <span className="spec-table-value">100% Certified Local Orchards</span>
                </div>
                <div className="spec-table-row">
                  <span className="spec-table-label">Certification</span>
                  <span className="spec-table-value">USDA Organic & ISO 22000 compliant</span>
                </div>
                <div className="spec-table-row">
                  <span className="spec-table-label">Shelf Life</span>
                  <span className="spec-table-value">7 to 10 days (stored cool)</span>
                </div>
                <div className="spec-table-row">
                  <span className="spec-table-label">Weight Options</span>
                  <span className="spec-table-value">500g, 1kg, 2kg packs</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="spec-table-row">
                  <span className="spec-table-label">Variety</span>
                  <span className="spec-table-value">Red Delicious, Gala, Granny Smith</span>
                </div>
                <div className="spec-table-row">
                  <span className="spec-table-label">Packaging</span>
                  <span className="spec-table-value">Eco-friendly card box</span>
                </div>
                <div className="spec-table-row">
                  <span className="spec-table-label">Pesticide Free</span>
                  <span className="spec-table-value">Yes, verified residue free</span>
                </div>
                <div className="spec-table-row">
                  <span className="spec-table-label">GMO Status</span>
                  <span className="spec-table-value">Non-GMO Project verified</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="tab-pane fade show active">
            <div className="row">
              <div className="col-md-6">
                <h4 className="font-weight-bold text-dark mb-4" style={{ fontSize: '1.35rem' }}>1 Review for "Fresh Organic Red Apples"</h4>
                <div className="review-card shadow-none">
                  <div className="media align-items-center mb-3">
                    <img src="img/user.jpg" alt="Rajesh Kumar" className="img-fluid mr-3 rounded-circle shadow-sm" style={{ width: '50px', height: '50px', border: '2px solid #eef7ed' }} />
                    <div className="media-body">
                      <h6 className="font-weight-bold text-dark mb-1">Rajesh Kumar <span className="badge badge-success font-weight-semi-bold ml-2 text-xs" style={{ backgroundColor: '#eef7ed', color: '#2e7d32', borderRadius: '4px', fontSize: '0.7rem', padding: '3px 6px' }}>Verified Buyer</span></h6>
                      <div className="text-warning text-sm">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <span className="text-muted text-xs align-self-start">July 15, 2026</span>
                  </div>
                  <p className="text-muted mb-0" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>These organic apples are incredibly sweet and crisp! They arrived fresh and in perfect packaging without any spots. Highly recommended for daily snacks.</p>
                </div>
              </div>
              <div className="col-md-6">
                <h4 className="font-weight-bold text-dark mb-3" style={{ fontSize: '1.35rem' }}>Leave a Review</h4>
                <p className="text-muted text-sm mb-4">Your email address will not be published. Required fields are marked *</p>
                <form>
                  <div className="d-flex mb-3 align-items-center">
                    <p className="mb-0 mr-3 text-dark font-weight-bold">Your Rating * :</p>
                    <div className="text-warning" style={{ cursor: 'pointer', fontSize: '1.1rem' }}>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="message" className="text-dark font-weight-bold mb-1">Your Review *</label>
                    <textarea id="message" cols="30" rows="4" className="form-control review-input-field" required></textarea>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="name" className="text-dark font-weight-bold mb-1">Your Name *</label>
                    <input type="text" className="form-control review-input-field" id="name" required />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="email" className="text-dark font-weight-bold mb-1">Your Email *</label>
                    <input type="email" className="form-control review-input-field" id="email" required />
                  </div>
                  <div className="form-group mb-0">
                    <input type="submit" value="Submit Review" className="btn btn-primary px-4 py-2 font-weight-semi-bold" style={{ boxShadow: '0 4px 15px rgba(46, 125, 50, 0.25)' }} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;