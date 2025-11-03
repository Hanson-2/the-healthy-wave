# Simple Order Form Setup - 100% FREE, NO SIGNUP

## What This Does

The order form sends orders directly to your phone via text message using your mobile carrier's **FREE** email-to-SMS gateway. 

**Zero cost. Zero signup. Zero API keys.**

---

## Setup Instructions (1 Minute!)

### Step 1: Find Your Carrier Gateway

Identify your mobile carrier and use the corresponding email address:

- **AT&T**: `8325233281@txt.att.net`
- **T-Mobile**: `8325233281@tmomail.net`
- **Verizon**: `8325233281@vtext.com`
- **Sprint**: `8325233281@messaging.sprintpcs.com`

*(Replace `8325233281` with your actual business phone number)*

### Step 2: Update the Code

1. Open `order-script.js`
2. Find line 50 (look for `const smsGateway`)
3. Replace the current gateway with YOUR carrier's gateway

**Example:**
```javascript
const smsGateway = '8325233281@txt.att.net'; // <-- Change this line
```

If you use T-Mobile:
```javascript
const smsGateway = '8325233281@tmomail.net';
```

### Step 3: Done!

That's it! Save the file and test it.

---

## How It Works

1. Customer fills out the order form
2. Clicks "Send My Order"
3. Their **email client opens** with order details pre-filled
4. Email is addressed to your carrier's SMS gateway
5. They click "Send" in their email
6. **You receive the order as a text message** on your phone!

---

## Testing

1. Open `order-ahead.html` in browser
2. Fill out test order
3. Submit form
4. Your default email client will open
5. Click Send
6. Check your phone for the text!

---

## Important Notes

### Character Limits
- SMS via email has a ~160 character limit per message
- Long orders may split into multiple texts
- All essential info (name, items) comes through

### Email Client Required
- Customer's device needs an email client (Gmail, Outlook, Apple Mail, etc.)
- Works on phones, tablets, and computers
- If email doesn't work, form falls back to SMS app

### Delivery Time
- Usually instant (seconds)
- Sometimes takes 1-2 minutes
- Depends on carrier network

---

## Advantages

✅ **100% FREE** - No services, no subscriptions, no API keys
✅ **No Signup** - Uses existing carrier infrastructure  
✅ **Works Immediately** - Change one line of code
✅ **Private** - No third-party services
✅ **Reliable** - Uses carrier's own email-to-SMS system

---

## Alternative Option

If you prefer customers to use their SMS app directly (current fallback):

The form already has this as backup! If email fails, it automatically opens their SMS app with the order pre-filled. This works on all mobile devices.

---

## Troubleshooting

**Email client doesn't open?**
- Check if customer has default email app set
- Form will automatically fall back to SMS app

**Not receiving texts?**
- Verify your phone number is correct
- Confirm you're using the right carrier gateway
- Check if your carrier blocks email-to-SMS (rare)

**Order gets cut off?**
- SMS via email has character limits
- Essential info (name, main items) always comes through
- Customer can call to clarify details

---

## Questions?

This uses your mobile carrier's built-in email-to-SMS feature. Every major US carrier provides this for free. It's been around for decades and is completely reliable.

If you want to test it manually:
1. Send an email to `yourphonenumber@txt.att.net` (or your carrier)
2. You'll get the email body as a text message!
