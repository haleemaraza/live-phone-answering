import Link from 'next/link'

// Section 9. Twelve types, four-up on large screens so all three rows fill.
const TYPES = [
  {
    icon: 'icon-building',
    title: 'Retail & Ecommerce',
    body: 'Capture product choices, variants and quantities from your approved catalogue.',
  },
  {
    icon: 'icon-doc-check',
    title: 'Catalogue & Mail-Order Sellers',
    body: 'Record product codes, campaign references and approved offer details.',
  },
  {
    icon: 'icon-layers',
    title: 'Wholesalers & Distributors',
    body: 'Capture account references, pack quantities and purchase-order details.',
  },
  {
    icon: 'icon-gear',
    title: 'Industrial Parts & Tools',
    body: 'Note part numbers, specifications and the quantities requested.',
  },
  {
    icon: 'icon-refresh',
    title: 'Auto Parts & Accessories',
    body: "Record part codes and vehicle details for your team's checks.",
  },
  {
    icon: 'icon-home',
    title: 'Homeware & Furniture',
    body: 'Capture item codes, finishes, dimensions and delivery preferences.',
  },
  {
    icon: 'icon-price-tag',
    title: 'Apparel & Footwear',
    body: 'Record styles, sizes, colours and quantities for each item.',
  },
  {
    icon: 'icon-heart',
    title: 'Beauty & Personal Care',
    body: 'Capture product names, variants, pack sizes and quantities.',
  },
  {
    icon: 'icon-briefcase',
    title: 'Office & Business Supplies',
    body: 'Record product codes, pack sizes and repeat-order references.',
  },
  {
    icon: 'icon-smile',
    title: 'Pet Supplies',
    body: 'Note product types, sizes, pack quantities and delivery requests.',
  },
  {
    icon: 'icon-sun',
    title: 'Garden & Outdoor Products',
    body: 'Capture item details, quantities and collection or delivery preferences.',
  },
  {
    icon: 'icon-pencil-circle',
    title: 'Gifts & Personalised Goods',
    body: 'Record product choices and personalisation details for approval.',
  },
]

export default function OrderBusinessTypes() {
  return (
    <section className="w-full bg-[#f8f7f2] py-14 md:py-16" aria-labelledby="order-types-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="icon-mask icon-buildings-arrow [--icon-size:1rem] inline-flex items-center gap-2 bg-[#8CA365]/10 text-[#5f7a3a] rounded-full text-sm font-semibold px-4 py-1.5">
            Order support by business type
          </p>
          <h2
            id="order-types-heading"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.14] tracking-tight text-[#1b4332]"
          >
            Order Support for the Way{' '}
            <br />
            Your Business Sells
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Define the product details, references and handling rules your order calls need.
          </p>
        </div>

        <ul className="mt-8 grid list-none grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TYPES.map((type) => (
            <li
              key={type.title}
              className="flex h-full flex-col rounded-xl border border-gray-300/50 bg-white p-5 sm:p-6"
            >
              <span
                className={`icon-mask ${type.icon} [--icon-size:1.7rem] flex h-12 w-12 items-center justify-center rounded-lg bg-[#eef2e6] text-[#1b4332]`}
                aria-hidden="true"
              ></span>
              <h3 className="mt-4 text-[1.02rem] font-bold leading-snug text-[#1b4332]">{type.title}</h3>
              <p className="mt-2 flex-grow text-base leading-relaxed text-gray-600">{type.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-start gap-5 rounded-xl bg-[#1d4b37] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="block text-[1.2rem] font-extrabold text-white">Your sales model. Your order rules.</span>
            <span className="mt-1 block text-base text-white/70">
              Build a call plan around the details your business needs.
            </span>
          </p>
          <Link
            prefetch={false}
            href="/contact-us"
            className="icon-mask icon-arrow-right [--icon-size:0.95rem] inline-flex flex-shrink-0 flex-row-reverse items-center gap-3 rounded-lg bg-[#8CA365] px-7 py-3.5 text-lg font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9cb374]"
          >
            Build My Order Taking Plan
          </Link>
        </div>
      </div>
    </section>
  )
}
