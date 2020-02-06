/**
 * @summary Called on startup
 * @param {Object} context Startup context
 * @param {Object} context.collections Map of MongoDB collections
 * @returns {undefined}
 */
export default function startup(context) {
  context.collections.VCoinPaymentRefunds = context.app.db.collection("VCoinPaymentRefunds");
}
