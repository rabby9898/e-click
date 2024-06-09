const Faq = () => {
  return (
    <div
      id="accordion-flush"
      data-accordion="collapse"
      data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
      data-inactive-classes="text-gray-500 dark:text-gray-400"
    >
      <div className="collapse collapse-arrow bg-base-200 my-3">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What payment methods do you accept?
        </div>
        <div className="collapse-content">
          <p>
            We accept various payment methods including credit/debit cards,
            PayPal, and bank transfers.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 my-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How can I track my order?
        </div>
        <div className="collapse-content">
          <p>
            Once your order is shipped, we will send you a tracking number via
            email. You can use this number on our website to track your order.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 my-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is your return policy?
        </div>
        <div className="collapse-content">
          <p>
            You can return any item within 30 days of purchase for a full refund
            or exchange. The item must be in its original condition and
            packaging.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 my-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How long does shipping take?
        </div>
        <div className="collapse-content">
          <p>
            Shipping times vary depending on your location. Typically, it takes
            5-7 business days for domestic shipping and 10-15 business days for
            international shipping.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 my-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Do you offer international shipping?
        </div>
        <div className="collapse-content">
          <p>
            Yes, we offer international shipping to many countries. Please check
            our shipping policy for more details on the countries we ship to and
            the associated costs.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 my-3">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How can I contact customer support?
        </div>
        <div className="collapse-content">
          <p>
            You can contact our customer support team via email at
            support@example.com or call us at (123) 456-7890. We are available
            Monday to Friday, from 9 AM to 6 PM.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
