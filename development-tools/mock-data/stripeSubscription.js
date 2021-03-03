module.exports = [
  {
    id: 'sub_36VrPHS2vVxJMq',
    object: 'subscription',
    application_fee_percent: null,
    billing_cycle_anchor: 1387222772,
    billing_thresholds: null,
    cancel_at: null,
    cancel_at_period_end: false,
    canceled_at: 1445989053,
    collection_method: 'charge_automatically',
    created: 1386790772,
    current_period_end: 1447702772,
    current_period_start: 1444678772,
    customer: 'cus_InD6MODH9LBA75',
    days_until_due: null,
    default_payment_method: null,
    default_source: null,
    default_tax_rates: [],
    discount: null,
    ended_at: 1445989053,
    items: {
      object: 'list',
      data: [
        {
          id: 'si_18SfBn2eZvKYlo2C1fwOImYF',
          object: 'subscription_item',
          billing_thresholds: null,
          created: 1386790772,
          metadata: {},
          price: {
            id: '40',
            object: 'price',
            active: true,
            billing_scheme: 'per_unit',
            created: 1386694689,
            currency: 'usd',
            livemode: false,
            lookup_key: null,
            metadata: {
              charset: 'utf-8',
              content: '40',
            },
            nickname: null,
            product: 'prod_ImLiyZDEY9QBl4',
            recurring: {
              aggregate_usage: null,
              interval: 'week',
              interval_count: 5,
              usage_type: 'licensed',
            },
            tiers_mode: null,
            transform_quantity: null,
            type: 'recurring',
            unit_amount: 5465,
            unit_amount_decimal: '5465',
          },
          quantity: 1,
          subscription: 'sub_36VrPHS2vVxJMq',
          tax_rates: [],
        },
      ],
      has_more: false,
      url: '/v1/subscription_items?subscription=sub_36VrPHS2vVxJMq',
    },
    latest_invoice: null,
    livemode: false,
    metadata: {},
    next_pending_invoice_item_invoice: null,
    pause_collection: null,
    pending_invoice_item_interval: null,
    pending_setup_intent: null,
    pending_update: null,
    schedule: null,
    start_date: 1386790772,
    status: 'active',
    transfer_data: null,
    trial_end: 1387222772,
    trial_start: 1386790772,
  }];
