// Post body rendered inside .prose on the BlogPost page.
// Headings are Inter (via .prose h2), body text is Satoshi (via .prose).
// Plain semantic JSX; custom blocks use div/span so .prose rules don't fight them.
// Key lines use the global .marker volt highlighter; headings are numbered
// "01 - " (dash, never a period) per the blog's editorial voice.

const Post = () => (
  <>
    <p>
      Stablecoins are becoming the settlement layer of the internet economy.
      They move faster than banks, cross borders without friction, and are
      increasingly how businesses, freelancers, and marketplaces get paid.
    </p>
    <p>
      <span className="marker">Payments are improving. Credit is still missing.</span>
    </p>
    <p>
      A business can have strong recurring revenue, verified invoices, and
      predictable cashflow, and still struggle to access working capital at the
      moment it matters. And the onchain systems that could fix this expose too
      much: wallet balances, payment flows, revenue patterns, and customer
      activity, all visible in ways no serious business would accept.
    </p>
    <p>
      Good businesses locked out of capital on one side. Radical transparency
      they cannot afford on the other. That is the gap Monaris is built to
      close.
    </p>

    <h2><span className="tnum text-volt-text">01</span> - Turning cashflow into instant liquidity</h2>
    <p>
      <span className="marker">
        Monaris turns receivables and recurring cashflow into instant
        liquidity, backed by private, verifiable credit.
      </span>
    </p>
    <p>
      For a growing business, cashflow matters more than a balance sheet.
      Revenue arrives every week or every month, but payroll, inventory, vendor
      payments, and growth opportunities do not wait for it.
    </p>
    <p>
      Monaris lets businesses use the payment flows they already have as the
      basis for credit. Real revenue signals, verified receivables, and
      recurring cashflow become proof a lender can trust. Instead of pledging
      assets or handing over their entire financial history, businesses unlock
      liquidity from money that is already on its way, without giving up
      control or exposing sensitive data.
    </p>

    <h2><span className="tnum text-volt-text">02</span> - Why privacy matters in business finance</h2>
    <p>
      <span className="marker">Privacy is not a luxury in finance. It is a requirement.</span>
    </p>
    <p>
      No serious business publishes its revenue, customer payments, treasury
      activity, or credit behavior. Yet in many onchain systems, that is
      exactly what happens by default.
    </p>
    <p>
      Monaris is designed around private, verifiable credit: prove what
      matters, reveal nothing else. Lenders, partners, and financial
      applications can verify cashflow, trust, and repayment ability while the
      underlying business data stays protected.
    </p>
    <p>
      That is what makes onchain finance usable for real businesses.
    </p>

    <h2><span className="tnum text-volt-text">03</span> - One layer for payments, credit, and repayments</h2>
    <p>
      Monaris is not another payment tool. It is one financial layer for
      stablecoin-native businesses, starting with:
    </p>
    <ul>
      <li><strong>Working capital</strong> powered by receivables and recurring cashflow</li>
      <li><strong>BNPL-style financing</strong> for better customer payment experiences</li>
      <li><strong>Automated repayments</strong> connected to real payment flows</li>
      <li><strong>Treasury tools</strong> for managing stablecoin-based business finance</li>
      <li><strong>One-click private payments</strong> for faster, safer transactions</li>
    </ul>
    <p>
      Each piece works on its own. Together they compound: payments create
      cashflow data, cashflow data supports credit, credit funds growth,
      repayments settle automatically from future revenue, and treasury tools
      manage the whole cycle.
    </p>
    <p>
      <strong>That is the Monaris loop.</strong>
    </p>

    <h2><span className="tnum text-volt-text">04</span> - Where finance is heading</h2>
    <p>
      The next generation of finance will be stablecoin-native, privacy-first,
      and programmable. Stablecoins will not just move money. They will
      underwrite working capital, embedded financing, merchant credit,
      cross-border commerce, and automated treasury operations.
    </p>
    <p>
      That future needs better infrastructure:
    </p>
    <ul>
      <li><strong>Privacy,</strong> because businesses cannot operate with everything exposed</li>
      <li><strong>Verifiable credit,</strong> because capital only moves on trust</li>
      <li><strong>Automation,</strong> because repayments and treasury should not depend on slow manual processes</li>
      <li><strong>Simple experiences,</strong> because no one should need to understand crypto rails to benefit from them</li>
    </ul>

    <h2><span className="tnum text-volt-text">05</span> - What Monaris is building</h2>
    <p>
      <span className="marker">
        Monaris is the private credit layer for the stablecoin economy.
      </span>
    </p>
    <p>
      We are starting with the most important unlock: helping businesses turn
      receivables and recurring cashflow into instant liquidity. From there,
      Monaris becomes the layer where private payments, working capital,
      BNPL-style financing, automated repayments, and treasury come together.
    </p>
    <p>
      The vision is not to replace business finance with crypto complexity. It
      is to make finance faster, more private, and more useful for the
      businesses already operating in a stablecoin-first world.
    </p>
    <p>
      <strong>Private credit. Instant liquidity. One-click payments.</strong>{" "}
      That is the financial layer the stablecoin economy needs, and we are
      building it now.
    </p>

    <div className="mt-8 flex flex-wrap gap-3">
      <a
        className="cta cta-dark inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold"
        href="https://waitlist.monaris.co"
      >
        Launch app
      </a>
    </div>
  </>
);

export default Post;
