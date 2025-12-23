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
    // Generate Order ID (simple timestamp based)
    const orderId = `FL-${Date.now().toString().slice(-6)}`;

    // Generate HTML rows for items
    const orderItemsHtml = orderData.items.map(item => `
      <tr style="vertical-align: top">
        <td style="padding: 24px 8px 0 4px; display: inline-block; width: max-content">
          <img style="height: 64px" height="64px" src="https://drive.google.com/uc?export=view&id=1t8Mx3iW5OdsfgPzPMOzNGYUooUWcwVod" alt="${item.name}" />
        </td>
        <td style="padding: 24px 8px 0 8px; width: 100%">
          <div style="font-family: serif; color: #333;">${item.name}</div>
          <div style="font-size: 14px; color: #888; padding-top: 4px">QTY: ${item.quantity}</div>
        </td>
        <td style="padding: 24px 4px 0 0; white-space: nowrap">
          <strong>PKR ${(item.price * item.quantity).toLocaleString('en-PK')}</strong>
        </td>
      </tr>
    `).join('');

    const templateParams = {
      order_id: orderId,
      customer_name: orderData.name,
      customer_email: orderData.email,
      to_email: orderData.email,
      email: orderData.email,
      is_admin: false,  // Customer email flag

      order_items_html: orderItemsHtml,
      shipping_cost: 'Free',
      tax_cost: '0',
      total_amount: `PKR ${orderData.total}`,

      customer_phone: orderData.phone,
      customer_address: orderData.address,
      order_date: new Date().toLocaleDateString('en-PK'),
      company_name: import.meta.env.VITE_COMPANY_NAME,
      company_email: import.meta.env.VITE_COMPANY_EMAIL,
      company_phone: import.meta.env.VITE_COMPANY_PHONE,
      company_address: import.meta.env.VITE_COMPANY_ADDRESS
    };

    // Send email to customer
    const customerResult = await emailjs.send(serviceId, templateId, templateParams);
    console.log('Order confirmation email sent to customer:', customerResult);

    // Send email to admin
    const adminEmail = 'info@floralock.com';
    const adminTemplateParams = {
      ...templateParams,
      to_email: adminEmail,
      email: adminEmail,
      is_admin: true  // Admin email flag
    };

    try {
      const adminResult = await emailjs.send(serviceId, templateId, adminTemplateParams);
      console.log('Order notification email sent to admin:', adminResult);
    } catch (adminError) {
      console.error('Failed to send order notification to admin:', adminError);
      // Don't fail the whole operation if admin email fails
    }

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
