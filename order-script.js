// Order Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderForm');
    const successMessage = document.getElementById('successMessage');
    
    // Phone number formatting
    const phoneInput = document.getElementById('phoneNumber');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 3) {
                    e.target.value = value;
                } else if (value.length <= 6) {
                    e.target.value = value.slice(0, 3) + '-' + value.slice(3);
                } else {
                    e.target.value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
                }
            }
        });
    }

    // Form submission - FormSubmit.co handles it automatically!
    // The form will submit to 7039158507@vtext.com via email (as SMS)
    // No JavaScript needed - native HTML form submission works!
    
    // Optional: Show success message after form submits
    if (window.location.search.includes('success')) {
        orderForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Reset after 5 seconds
        setTimeout(() => {
            window.location.href = window.location.pathname;
        }, 5000);
    }
    
    // Format order message for SMS
    function formatOrderMessage(details) {
        let message = '📱 NEW ORDER FROM WEBSITE\n\n';
        
        // Customer info
        message += `👤 Name: ${details.customerName}\n`;
        message += `📞 Phone: ${details.phoneNumber}\n`;
        if (details.newCustomer) {
            message += `✨ NEW CUSTOMER\n`;
        }
        message += '\n';
        
        // Tea order
        if (details.teaLevel || details.teaFlavor) {
            message += '☕ TEA ORDER:\n';
            if (details.teaLevel) {
                message += `  Level: ${details.teaLevel}\n`;
            }
            if (details.teaFlavor) {
                message += `  Flavor: ${details.teaFlavor}\n`;
            }
            message += '\n';
        }
        
        // Meal order
        if (details.mealType || details.mealLevel || details.mealFlavor) {
            message += '🍽️ MEAL ORDER:\n';
            if (details.mealType) {
                message += `  Type: ${details.mealType}\n`;
            }
            if (details.mealLevel) {
                message += `  Level: ${details.mealLevel}\n`;
            }
            if (details.mealFlavor) {
                message += `  Flavor: ${details.mealFlavor}\n`;
            }
            message += '\n';
        }
        
        // Boosts
        if (details.boosts && details.boosts.length > 0) {
            message += '🚀 BOOSTS:\n';
            details.boosts.forEach(boost => {
                message += `  • ${boost}\n`;
            });
            message += '\n';
        }
        
        // Special instructions
        if (details.specialInstructions) {
            message += `💬 Special Instructions:\n${details.specialInstructions}\n\n`;
        }
        
        message += '---\nSent via website order form';
        
        return message;
    }
    
    // Enable/disable meal level based on meal type
    const mealTypeSelect = document.getElementById('mealType');
    const mealLevelSelect = document.getElementById('mealLevel');
    
    if (mealTypeSelect && mealLevelSelect) {
        mealTypeSelect.addEventListener('change', function() {
            const selectedType = this.value;
            // Kids Smoothie doesn't have levels
            if (selectedType === 'Kids Smoothie' || selectedType === 'Stacked') {
                mealLevelSelect.disabled = true;
                mealLevelSelect.value = '';
            } else {
                mealLevelSelect.disabled = false;
            }
        });
    }
    
    // Add visual feedback for form sections
    const formSections = document.querySelectorAll('.form-section');
    formSections.forEach(section => {
        const inputs = section.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                section.style.backgroundColor = '#f0f9fb';
                section.style.transition = 'background-color 0.3s ease';
            });
            input.addEventListener('blur', function() {
                // Check if any input in section has value
                const hasValue = Array.from(inputs).some(inp => {
                    if (inp.type === 'checkbox') {
                        return inp.checked;
                    }
                    return inp.value;
                });
                
                if (!hasValue) {
                    section.style.backgroundColor = '';
                }
            });
        });
    });
});

// Alternative: Direct SMS fallback button
function sendViaSMS() {
    const form = document.getElementById('orderForm');
    const formData = new FormData(form);
    const orderDetails = {};
    
    for (let [key, value] of formData.entries()) {
        if (key === 'boosts') {
            if (!orderDetails.boosts) {
                orderDetails.boosts = [];
            }
            orderDetails.boosts.push(value);
        } else if (value) {
            orderDetails[key] = value;
        }
    }
    
    // Build SMS message
    let message = `Order from ${orderDetails.customerName}\n`;
    if (orderDetails.newCustomer) message += '(NEW CUSTOMER)\n';
    if (orderDetails.teaLevel) message += `Tea: ${orderDetails.teaLevel}`;
    if (orderDetails.teaFlavor) message += ` - ${orderDetails.teaFlavor}\n`;
    if (orderDetails.mealType) message += `Meal: ${orderDetails.mealType}`;
    if (orderDetails.mealLevel) message += ` - ${orderDetails.mealLevel}`;
    if (orderDetails.mealFlavor) message += ` - ${orderDetails.mealFlavor}\n`;
    if (orderDetails.boosts && orderDetails.boosts.length > 0) {
        message += `Boosts: ${orderDetails.boosts.join(', ')}\n`;
    }
    if (orderDetails.specialInstructions) {
        message += `Notes: ${orderDetails.specialInstructions}`;
    }
    
    const smsLink = `sms:832-523-3281${/iPhone|iPad|iPod/.test(navigator.userAgent) ? '&' : '?'}body=${encodeURIComponent(message)}`;
    window.location.href = smsLink;
}
