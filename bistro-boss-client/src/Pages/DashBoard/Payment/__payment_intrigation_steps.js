/**
 * 1. Install stripe & react stripe js.
 * 2. Create a checkout form (card elements contains: card number, expiration date, cvs, zip code).
 * 3. create a account on stripe and get the publishable key.
 * 4. get card information.
 * 5. create a payment method.
 * 6. use test card to test payment.
 * -------------------------------------------------------------------------
 *                          Server side
 * -------------------------------------------------------------------------
 * 7. on the server side install stripe.
 * 8. create a payment intent api.
 * 9. make sure you provide amount in cents (multiply price with 100).
 * 10. call payment intent api to get client secret and store it in a state.
 * 11. useConfirmCardPayment api with client secret and card information.
 * 12. display confirm error.
 * 13. display confirm and card success.
 * 14. Do things after payment --->
 */