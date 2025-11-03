# Order Ahead Page - SMS Integration Setup

## Overview
The Order Ahead page includes a fully functional form that can send orders via SMS to The Healthy Wave. The page displays all the ordering information from your image and provides TWO methods for receiving orders:

### Method 1: Web3Forms (Recommended - FREE)
This service can send form submissions to email, which can then be forwarded to SMS.

**Setup Steps:**

1. Go to https://web3forms.com/
2. Sign up for a FREE account
3. Create a new form and get your Access Key
4. Open `order-script.js` and replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key (line 46)
5. Set up email-to-SMS forwarding:

#### Email-to-SMS Gateway Options:
- **AT&T**: Forward emails to `8325233281@txt.att.net`
- **T-Mobile**: Forward emails to `8325233281@tmomail.net`
- **Verizon**: Forward emails to `8325233281@vtext.com`
- **Sprint**: Forward emails to `8325233281@messaging.sprintpcs.com`

Replace the phone number with your actual business number.

### Method 2: Formspree (Also FREE Tier Available)
Alternative form submission service.

**Setup Steps:**

1. Go to https://formspree.io/
2. Create a FREE account
3. Create a new form
4. Get your form endpoint URL
5. In `order-ahead.html`, update line 94:
   ```html
   <form id="orderForm" class="order-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your actual Formspree form ID

### Method 3: Direct SMS Fallback
The form includes a fallback that opens the phone's SMS app with a pre-filled message. This works on both mobile and desktop (if SMS-capable).

## Features Included

✅ **Header Section** matching your image:
- Large "Text ahead for quicker service!" heading
- Prominent phone number (832-523-3281) that's clickable
- "Be sure to let us know if you're new" message
- Circular "Text your Order" graphic with animation

✅ **Instructions Section**:
- Shows "Include:" with icon
- Lists: Your Name, Tea Level & Flavor, and/or Meal Option Level & Flavor
- Matches the layout from your image

✅ **Online Order Form** with sections for:
- Customer Information (Name, Phone, New Customer checkbox)
- LIT TEAS Order (Level: Regular/Double/Mega, Flavor selection)
- Meal Options (Type, Level: Gold/Platinum, 60+ flavor choices)
- Boost It! (All 13 boost options as checkboxes)
- Special Instructions (textarea for custom requests)

✅ **Responsive Design**:
- Works perfectly on mobile, tablet, and desktop
- Touch-friendly form controls
- Adaptive layouts

✅ **User Experience**:
- Auto-formatting phone numbers (###-###-####)
- Visual feedback on form sections
- Smooth animations and hover effects
- Success message after submission
- Quick contact section at bottom

## Form Data Sent

When a customer submits an order, they receive a formatted message like:

```
📱 NEW ORDER FROM WEBSITE

👤 Name: John Smith
📞 Phone: 832-555-1234
✨ NEW CUSTOMER

☕ TEA ORDER:
  Level: Double - 50mg caffeine
  Flavor: Raspberry

🍽️ MEAL ORDER:
  Type: Smoothie
  Level: Platinum - 24g protein
  Flavor: Birthday Cake

🚀 BOOSTS:
  • Fat Release
  • Collagen
  • Protein Boost

💬 Special Instructions:
Extra ice please

---
Sent via website order form
```

## Testing the Form

1. Open `order-ahead.html` in your browser
2. Fill out the form with test data
3. Submit the form
4. Check your configured email/SMS destination

## Styling

The page uses:
- Brand colors (Teal #1b7a8e, Light Cyan #5fc9db)
- Matching fonts (Poppins, Montserrat, Black Bones)
- Animated gradients and effects
- Glass morphism design elements
- Professional form styling

## Files Created

1. `order-ahead.html` - Main order page HTML
2. `order-styles.css` - Complete styling for order page
3. `order-script.js` - Form handling and SMS functionality
4. `ORDER_SETUP.md` - This documentation file

## Next Steps

1. Choose your preferred SMS delivery method (Web3Forms recommended)
2. Sign up and get your API key/Form ID
3. Update the configuration in the code
4. Test the form with a real submission
5. Optionally customize the success message or form fields

## Support

For issues with:
- **Web3Forms**: Visit https://web3forms.com/docs
- **Formspree**: Visit https://help.formspree.io/
- **Email-to-SMS**: Contact your mobile carrier for gateway details

---

**Note**: The form works immediately in fallback mode (opens SMS app), but for automated delivery, you'll need to complete the setup with Web3Forms or Formspree.
