import React, { useState } from 'react';
import { Phone, Mail, MapPin, Headphones, Send, CheckCircle2 } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    pinCode: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateFullName = (value) => {
    if (value === undefined || value === null) {
      return 'Please enter a valid name.';
    }
    const trimmed = value.trim().replace(/\s+/g, ' ');
    if (!trimmed || trimmed.length < 2) {
      return 'Please enter a valid name.';
    }
    const nameRegex = /^[\p{L}]+(?:[ '\-][\p{L}]+)*$/u;
    if (!nameRegex.test(trimmed)) {
      return 'Please enter a valid name.';
    }
    return '';
  };

  const validateField = (name, value) => {
    if (name === 'fullName') {
      return validateFullName(value);
    }
    if (name === 'phone') {
      if (!value || !value.trim() || !/^[0-9]{10}$/.test(value.trim())) {
        return 'Please enter a valid 10-digit mobile number.';
      }
      return '';
    }
    if (name === 'pinCode') {
      if (!value || !value.trim() || !/^[0-9]{6}$/.test(value.trim())) {
        return 'Please enter a valid 6-digit PIN Code.';
      }
      return '';
    }
    return '';
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === 'fullName') {
      // Restrict input to alphabetic letters, spaces, hyphens, and apostrophes only (block numbers and emojis)
      value = value.replace(/[^\p{L}\s'\-]/gu, '');
    } else if (name === 'phone') {
      // Restrict input to numbers 0-9 only (max 10 digits)
      value = value.replace(/[^0-9]/g, '').slice(0, 10);
    } else if (name === 'pinCode') {
      // Restrict input to numbers 0-9 only (max 6 digits)
      value = value.replace(/[^0-9]/g, '').slice(0, 6);
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name] || errors[name]) {
      const err = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameErr = validateFullName(formData.fullName);
    const phoneErr = validateField('phone', formData.phone);
    const pinErr = validateField('pinCode', formData.pinCode);

    if (nameErr || phoneErr || pinErr) {
      setErrors({
        fullName: nameErr,
        phone: phoneErr,
        pinCode: pinErr,
      });
      setTouched({
        fullName: true,
        phone: true,
        pinCode: true,
      });
      return;
    }

    const cleanedName = formData.fullName.trim().replace(/\s+/g, ' ');
    setFormData((prev) => ({ ...prev, fullName: cleanedName }));

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="contact-section page-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Connect With Us <span className="text-red">Today</span>
          </h2>
          <p className="section-subtitle">
            Have questions about new connections, plan upgrades, or CCTV installation? We are here to help.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact & Support Details Card */}
          <div className="contact-info-card">
            <h2 className="contact-info-title">Contact & Support Details</h2>
            <p className="contact-info-desc">
              Reach out to our customer care team or visit our office. Our expert technicians respond promptly to all new connection enquiries.
            </p>

            <div className="contact-details-list">
              {/* Phone Number */}
              <div className="c-detail-item">
                <div className="c-icon-wrap">
                  <Phone size={18} className="text-red" />
                </div>
                <div className="c-text-wrap">
                  <div className="c-label">PHONE NUMBER</div>
                  <div className="c-value">+91 70271 04250</div>
                </div>
              </div>

              {/* WhatsApp Support */}
              <div className="c-detail-item">
                <div className="c-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--red-cta, #e31b23)">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="c-text-wrap">
                  <div className="c-label">WHATSAPP SUPPORT</div>
                  <div className="c-value">+91 70271 04250 (Instant Chat)</div>
                </div>
              </div>

              {/* Email Address */}
              <div className="c-detail-item">
                <div className="c-icon-wrap">
                  <Mail size={18} className="text-red" />
                </div>
                <div className="c-text-wrap">
                  <div className="c-label">EMAIL ADDRESS</div>
                  <div className="c-value">vstelicommunication@gmail.com</div>
                </div>
              </div>

              {/* Office Address */}
              <div className="c-detail-item">
                <div className="c-icon-wrap">
                  <MapPin size={18} className="text-red" />
                </div>
                <div className="c-text-wrap">
                  <div className="c-label">OFFICE ADDRESS</div>
                  <div className="c-value">VS Telecommunication, Subhash Nagar, Sonipat</div>
                </div>
              </div>

              {/* Customer Support */}
              <div className="c-detail-item">
                <div className="c-icon-wrap">
                  <Headphones size={18} className="text-red" />
                </div>
                <div className="c-text-wrap">
                  <div className="c-label">CUSTOMER SUPPORT & NEW CONNECTION ENQUIRY</div>
                  <div className="c-value">24/7 Helpline • Same Day Technician Dispatch</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Request A Call Back Form Card */}
          <div className="contact-form-card">
            <h2 className="contact-form-title">Request A Call Back</h2>

            {isSubmitted ? (
              <div className="contact-success-state">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>Request Received!</h3>
                <p>Thank you, {formData.fullName || 'Valued Customer'}. Our customer support team will get in touch with you shortly.</p>
                <button
                  className="reset-form-btn"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      pinCode: '',
                      message: '',
                    });
                  }}
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="callback-form">
                <div className="form-group">
                  <label htmlFor="fullName">
                    Full Name <span className="req-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.fullName ? 'input-error' : ''}
                  />
                  {errors.fullName && (
                    <span className="error-message">{errors.fullName}</span>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      Mobile Number <span className="req-star">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.phone ? 'input-error' : ''}
                    />
                    {errors.phone && (
                      <span className="error-message">{errors.phone}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="pinCode">
                      Area / PIN Code <span className="req-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="pinCode"
                      name="pinCode"
                      placeholder="6-digit PIN Code"
                      maxLength={6}
                      value={formData.pinCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.pinCode ? 'input-error' : ''}
                    />
                    {errors.pinCode && (
                      <span className="error-message">{errors.pinCode}</span>
                    )}
                  </div>
                </div>

                <div className="form-group form-group-textarea">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Enter your message or requirement..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="submit-callback-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      Request Call Back <Send size={16} className="btn-icon" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
