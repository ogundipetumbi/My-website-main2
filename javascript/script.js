/* LengthHairCare interactions for the hair guide, product catalogue and forms. */
document.addEventListener('DOMContentLoaded', () => {
    // Porosity cards work as a simple keyboard-friendly accordion on small screens too.
    document.querySelectorAll('[data-accordion-button]').forEach((button) => {
        button.addEventListener('click', () => {
            const panel = document.getElementById(button.getAttribute('aria-controls'));
            const expanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', String(!expanded));
            if (panel) panel.hidden = expanded;
        });
    });

    // The catalogue is rendered from one small data list so search and filtering stay in sync.
    const productGrid = document.querySelector('[data-product-grid]');
    if (productGrid) {
        const requestedProduct = new URLSearchParams(window.location.search).get("product");
        const interestSelect = document.querySelector("#interest");
        if (requestedProduct && interestSelect) {
            const option = Array.from(interestSelect.options).find((item) => item.value === requestedProduct || item.textContent === requestedProduct);
            if (option) option.selected = true;
        }
        const products = [
            { name: 'Hair Growth Oil', category: 'oil', price: 'R350', image: '../assets/high-porosity-hair-oil.jpg', alt: 'Bottle of LengthHairCare hair growth oil', description: 'A nourishing oil blend for scalp care and sealing in moisture.' },
            { name: 'Herbal Hair Tea Spray', category: 'spray', price: 'Price on enquiry', image: '../assets/high-porosity-herbal-tea.jpg', alt: 'Herbal hair tea spray for a refreshing moisture boost', description: 'A refreshing herbal spray to add a light layer of moisture to your routine.' },
            { name: 'Natural Hair Growth Guide', category: 'guide', price: 'Price on enquiry', image: '../assets/hair-care-comb-guide.jpg', alt: 'Comb and natural hair care guide', description: 'A practical digital guide to building a consistent natural hair routine.' },
            { name: 'Porosity Care Combo', category: 'combo', price: 'Price on enquiry', image: '../assets/high-porosity-care-combo.jpg', alt: 'Hair care products arranged as a porosity care combo', description: 'A convenient pairing for people who want to explore a simple care routine.' },
            { name: 'Low Porosity Hair Oil', category: 'oil', price: 'Price on enquiry', image: '../assets/low-porosity-hair-oil.jpg', alt: 'Hair oil recommendation for low porosity hair', description: 'A lighter oil option to discuss if you are concerned about product build-up.' },
            { name: 'Medium Porosity Hair Tea', category: 'spray', price: 'Price on enquiry', image: '../assets/medium-porosity-herbal-tea.jpg', alt: 'Herbal tea hair product for medium porosity hair', description: 'A balanced herbal spray option for a regular moisture routine.' },
            { name: 'High Porosity Hair Tea', category: 'spray', price: 'Price on enquiry', image: '../assets/high-porosity-herbal-tea.jpg', alt: 'Herbal tea hair product for high porosity hair', description: 'A refreshing spray to complement a routine focused on retaining moisture.' }
        ];
        const search = document.querySelector('#product-search');
        const filter = document.querySelector('#product-filter');
        const count = document.querySelector('#product-count');
        const empty = document.querySelector('#no-products');

        const render = () => {
            const query = (search?.value || '').trim().toLowerCase();
            const category = filter?.value || 'all';
            const matches = products.filter((item) => {
                const text = `${item.name} ${item.description} ${item.category}`.toLowerCase();
                return text.includes(query) && (category === 'all' || item.category === category);
            });
            productGrid.innerHTML = matches.map((item) => `
                <article class="product-card">
                    <button class="gallery-trigger" type="button" aria-label="View larger image of ${item.name}" data-full-image="${item.image}" data-image-alt="${item.alt}">
                        <span class="product-image"><img src="${item.image}" alt="${item.alt}" loading="lazy"></span>
                        <span class="gallery-hint">View image</span>
                    </button>
                    <h3>${item.name}</h3><p>${item.description}</p>
                    <p class="price">${item.price}</p>
                    <a class="button" href="enquiry.html?product=${encodeURIComponent(item.name)}">Enquire about this</a>
                </article>`).join('');
            if (count) count.textContent = `${matches.length} ${matches.length === 1 ? 'product' : 'products'} shown`;
            if (empty) empty.hidden = matches.length > 0;
        };
        search?.addEventListener('input', render);
        filter?.addEventListener('change', render);
        render();
    }

    // Accessible lightbox: click a gallery image, close button, backdrop or Escape.
    const lightbox = document.querySelector('#image-lightbox');
    if (lightbox) {
        const image = lightbox.querySelector('img');
        const closeButton = lightbox.querySelector('[data-lightbox-close]');
        let previousFocus;
        const close = () => {
            lightbox.hidden = true;
            document.body.classList.remove('lightbox-open');
            previousFocus?.focus();
        };
        document.addEventListener('click', (event) => {
            const trigger = event.target.closest('.gallery-trigger');
            if (!trigger) return;
            previousFocus = trigger;
            image.src = trigger.dataset.fullImage;
            image.alt = trigger.dataset.imageAlt || '';
            lightbox.hidden = false;
            document.body.classList.add('lightbox-open');
            closeButton.focus();
        });
        closeButton?.addEventListener('click', close);
        lightbox.addEventListener('click', (event) => { if (event.target === lightbox) close(); });
        document.addEventListener('keydown', (event) => {
            if (lightbox.hidden) return;
            if (event.key === 'Escape') close();
            if (event.key === 'Tab') {
                event.preventDefault();
                closeButton.focus();
            }
        });
    }

    // Product links preselect the matching enquiry option, so the hand-off is clear.
    const requestedProduct = new URLSearchParams(window.location.search).get('product');
    const interestSelect = document.querySelector('#interest');
    if (requestedProduct && interestSelect) {
        const option = Array.from(interestSelect.options).find((item) => item.value === requestedProduct || item.textContent === requestedProduct);
        if (option) option.selected = true;
    }

    // Enquiry responses are calculated from the selected interest and hair porosity.
    const enquiryForm = document.querySelector('#enquiry-form');
    enquiryForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!enquiryForm.reportValidity()) return;
        const data = new FormData(enquiryForm);
        const result = document.querySelector('#enquiry-result');
        const selected = data.get('interest');
        const porosity = data.get('porosity');
        const friendly = { low: 'low', medium: 'medium', high: 'high' }[porosity];
        const response = selected === 'Hair Growth Oil'
            ? 'The Hair Growth Oil is listed at R350. We can confirm current availability when we reply.'
            : `Thanks for asking about ${selected}. Price and availability are confirmed on enquiry.`;
        result.innerHTML = `<strong>Thanks, ${escapeHTML(data.get('name'))}.</strong> ${response} ${friendly ? `Based on your ${friendly} porosity selection, our team can also suggest how to introduce it into a routine.` : `If you are unsure of your porosity, our team can help you think through a gentle starting point.`} This summary has not been sent to the team. To send us a message, please use the contact form.`;
        result.hidden = false;
        result.focus();
        enquiryForm.querySelector('button[type="submit"]').disabled = true;
        enquiryForm.querySelector('button[type="submit"]').textContent = 'Enquiry received';
    });

    // Contact uses mailto because this static site has no private email service/backend.
    // The wording makes clear that the visitor still needs to press Send in their email app.
    const contactForm = document.querySelector('#contact-form');
    contactForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!contactForm.reportValidity()) return;
        const data = new FormData(contactForm);
        const subject = `[LengthHairCare] ${data.get('topic')}: ${data.get('subject')}`;
        const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nMessage type: ${data.get('topic')}\n\n${data.get('message')}`;
        const result = document.querySelector('#contact-result');
        result.textContent = 'Your email app should open with the message prepared. Please press Send there; this website cannot confirm delivery.';
        result.hidden = false;
        window.location.href = `mailto:info@lengthhaircare.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });

});

function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>"']/g, (character) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[character]);
}


