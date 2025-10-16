# EmailJS Integration Setup Guide for Floralock

## 📧 EmailJS Configuration

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (you'll need this)

### Step 3: Create Email Templates

#### Order Confirmation Template
1. Go to "Email Templates" → "Create New Template"
2. Use this template ID: `order_confirmation_template`
3. Copy the template HTML below:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Confirmation - Floralock</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #0e0e0e 0%, #1a1a1a 100%); padding: 30px; text-align: center; }
        .logo { color: #c5a25b; font-size: 28px; font-weight: bold; margin-bottom: 10px; }
        .content { padding: 30px; }
        .greeting { color: #333; font-size: 18px; margin-bottom: 20px; }
        .order-details { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .order-item { padding: 10px 0; border-bottom: 1px solid #eee; }
        .order-item:last-child { border-bottom: none; }
        .total { font-weight: bold; font-size: 18px; color: #c5a25b; margin-top: 15px; }
        .customer-info { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .footer { background-color: #0e0e0e; color: #c5a25b; padding: 20px; text-align: center; }
        .contact-info { margin: 10px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">Floralock™</div>
            <p style="color: #c5a25b; margin: 0;">100% Organic Shampoo</p>
        </div>
        
        <div class="content">
            <div class="greeting">Dear {{customer_name}},</div>
            
            <p>Thank you for your order! We're excited to help you achieve stronger, healthier hair with our premium organic shampoo.</p>
            
            <div class="order-details">
                <h3 style="color: #c5a25b; margin-top: 0;">Order Details</h3>
                <div class="order-item">
                    <strong>Order Date:</strong> {{order_date}}
                </div>
                <div class="order-item">
                    <strong>Items:</strong><br>
                    {{order_items}}
                </div>
                <div class="total">Total Amount: {{total_amount}}</div>
            </div>
            
            <div class="customer-info">
                <h3 style="color: #c5a25b; margin-top: 0;">Delivery Information</h3>
                <p><strong>Name:</strong> {{customer_name}}</p>
                <p><strong>Phone:</strong> {{customer_phone}}</p>
                <p><strong>Address:</strong> {{customer_address}}</p>
            </div>
            
            <p><strong>What happens next?</strong></p>
            <ul>
                <li>We'll call you within 24 hours to confirm your order</li>
                <li>Your order will be processed and dispatched within 2-3 business days</li>
                <li>You'll receive a tracking number once your order ships</li>
                <li>Delivery typically takes 3-5 business days</li>
            </ul>
            
            <p>If you have any questions, please don't hesitate to contact us.</p>
            
            <p>Best regards,<br>The Floralock Team</p>
        </div>
        
        <div class="footer">
            <div class="contact-info">
                <strong>{{company_name}}</strong><br>
                📧 {{company_email}}<br>
                📞 {{company_phone}}<br>
                📍 {{company_address}}
            </div>
            <p style="margin: 15px 0 0 0; font-size: 12px;">
                This email was sent because you placed an order on our website.
            </p>
        </div>
    </div>
</body>
</html>
```

#### Contact Form Template
1. Create another template with ID: `contact_form_template`
2. Use this template HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission - Floralock</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #0e0e0e 0%, #1a1a1a 100%); padding: 30px; text-align: center; }
        .logo { color: #c5a25b; font-size: 28px; font-weight: bold; margin-bottom: 10px; }
        .content { padding: 30px; }
        .contact-details { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .message-box { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .footer { background-color: #0e0e0e; color: #c5a25b; padding: 20px; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">Floralock™</div>
            <p style="color: #c5a25b; margin: 0;">New Contact Form Submission</p>
        </div>
        
        <div class="content">
            <h2 style="color: #c5a25b;">New Contact Form Submission</h2>
            
            <div class="contact-details">
                <h3 style="color: #c5a25b; margin-top: 0;">Contact Information</h3>
                <p><strong>Name:</strong> {{customer_name}}</p>
                <p><strong>Email:</strong> {{customer_email}}</p>
                <p><strong>Phone:</strong> {{customer_phone}}</p>
                <p><strong>Date:</strong> {{contact_date}}</p>
            </div>
            
            <div class="message-box">
                <h3 style="color: #c5a25b; margin-top: 0;">Message</h3>
                <p style="white-space: pre-wrap;">{{message}}</p>
            </div>
            
            <p><strong>Action Required:</strong> Please respond to this inquiry within 24 hours.</p>
        </div>
        
        <div class="footer">
            <p><strong>{{company_name}}</strong></p>
            <p>📧 {{company_email}}</p>
        </div>
    </div>
</body>
</html>
```

### Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. **Copy your Public Key**

### Step 5: Update Environment Variables
Replace the values in your `.env` file:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID_ORDER=template_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID_CONTACT=template_xxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# EmailJS Template Variables
VITE_COMPANY_NAME=Floralock Organics
VITE_COMPANY_EMAIL=hello@floralock.com
VITE_COMPANY_PHONE=+92-XXX-XXXXXXX
VITE_COMPANY_ADDRESS=Pakistan
```

## 🚀 Testing

1. Start your development server: `npm run dev`
2. Test the order form by adding items to cart and submitting
3. Test the contact form in the new contact section
4. Check your email for the formatted notifications

## 📧 Email Features

### Order Confirmation Emails Include:
- ✅ Beautiful HTML formatting with Floralock branding
- ✅ Customer details and order summary
- ✅ Itemized list with quantities and prices
- ✅ Total amount in PKR
- ✅ Delivery information
- ✅ Next steps for the customer
- ✅ Company contact information

### Contact Form Emails Include:
- ✅ Customer contact information
- ✅ Formatted message
- ✅ Submission date
- ✅ Professional layout
- ✅ Action required notification

## 🔧 Troubleshooting

- **Emails not sending**: Check console for errors and verify all environment variables
- **Template not found**: Ensure template IDs match exactly
- **Service not working**: Verify service is properly connected to your email provider
- **Rate limits**: Free tier allows 200 emails/month

## 📈 Upgrade Options

- **Paid plans**: Start at $15/month for 1,000 emails
- **Higher limits**: Up to 100,000 emails/month
- **Advanced features**: Analytics, webhooks, custom domains
