import emailjs from '@emailjs/browser';

// Initialize EmailJS
const initializeEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (!publicKey) {
    console.error('EmailJS Public Key not found in environment variables');
    return false;
  }
  
  emailjs.init(publicKey);
  return true;
};

// Send order confirmation email
export const sendOrderConfirmation = async (orderData) => {
  if (!initializeEmailJS()) return false;

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ORDER;
  
  if (!serviceId || !templateId) {
    console.error('EmailJS Service ID or Template ID not found');
    return false;
  }

  try {
    const templateParams = {
      customer_name: orderData.name,
      customer_phone: orderData.phone,
      customer_address: orderData.address,
      order_items: orderData.items.map(item => 
        `${item.name} x${item.quantity} = PKR ${(item.price * item.quantity).toLocaleString('en-PK')}`
      ).join('\n'),
      total_amount: `PKR ${orderData.total}`,
      order_date: new Date().toLocaleDateString('en-PK'),
      company_name: import.meta.env.VITE_COMPANY_NAME,
      company_email: import.meta.env.VITE_COMPANY_EMAIL,
      company_phone: import.meta.env.VITE_COMPANY_PHONE,
      company_address: import.meta.env.VITE_COMPANY_ADDRESS
    };

    const result = await emailjs.send(serviceId, templateId, templateParams);
    console.log('Order confirmation email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Failed to send order confirmation email:', error);
    return false;
  }
};

// Send contact form email
export const sendContactForm = async (contactData) => {
  if (!initializeEmailJS()) return false;

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT;
  
  if (!serviceId || !templateId) {
    console.error('EmailJS Service ID or Template ID not found');
    return false;
  }

  try {
    const templateParams = {
      customer_name: contactData.name,
      customer_email: contactData.email,
      customer_phone: contactData.phone,
      message: contactData.message,
      contact_date: new Date().toLocaleDateString('en-PK'),
      company_name: import.meta.env.VITE_COMPANY_NAME,
      company_email: import.meta.env.VITE_COMPANY_EMAIL
    };

    const result = await emailjs.send(serviceId, templateId, templateParams);
    console.log('Contact form email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Failed to send contact form email:', error);
    return false;
  }
};
