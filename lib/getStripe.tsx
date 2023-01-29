import { loadStripe } from '@stripe/stripe-js';

let stripePromise:any;
const getStripe = () => {
  if (!stripePromise) {
    let key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if(key) stripePromise = loadStripe(key);
    else stripePromise = 'pk_test_51MQt9MK7tKkQJn2C9ZIWuSiUYxT9JzSLnoSippLi4j96nouxMwuJqWGG96BpywJvOPy801COtL92aQbYC0PqIvZP00gmw2A6I9';
  }
  return stripePromise;
};

export default getStripe;