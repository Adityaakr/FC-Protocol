// Post body rendered inside .prose on the BlogPost page.
// Headings are Inter (via .prose h2), body text is Satoshi (via .prose).
// Plain semantic JSX; custom blocks use div/span so .prose rules don't fight them.
// Key lines use the global .marker volt highlighter; headings are numbered
// "01 - " (dash, never a period) per the blog's editorial voice.

const Post = () => (
  <>
    <p>
      Stablecoins moved more value last year than Visa and Mastercard combined.
      By Visa's own onchain analytics, transaction volume passed thirty trillion
      dollars in 2025, and the adjusted figure, stripped of bots and exchange
      noise, still lands around nine trillion of real economic activity, growing
      near ninety percent a year.
    </p>
    <p>
      Here is the detail that matters more than the size: almost all of that
      volume is still trading. Stablecoins remain roughly one percent of global
      payment flows, and the share used for actual business finance is smaller
      still.
    </p>
    <p>
      <span className="marker">
        The most successful new money rail in a generation has settlement figured
        out and almost nothing built on top of it.
      </span>
    </p>
    <p>
      No credit. No working capital. No financial memory. A business can run its
      entire revenue through stablecoins and end the year with nothing to show a
      lender. That absence is not a detail. It is the opportunity.
    </p>

    <h2><span className="tnum text-volt-text">01</span> - Two curves that have never met</h2>
    <p>
      Consider what is happening on each side of the gap.
    </p>
    <p>
      On one side, stablecoin settlement is compounding. Trillions in annual
      volume, regulatory frameworks now law across the US, EU, Japan, Hong Kong,
      Singapore, and the UAE, and banks moving from pilots to production.
      Businesses, marketplaces, exporters, and freelancers are getting paid
      onchain at growing scale, and B2B stablecoin flows alone are already
      annualizing in the tens of billions.
    </p>
    <p>
      On the other side, private credit has become one of the fastest growing
      asset classes in finance. Roughly two trillion dollars under management
      today, projected by Moody's and others to approach three to four trillion
      by the end of the decade. Two thirds of that demand comes from small and
      mid-sized businesses. And beneath it sits a financing hole the Asian
      Development Bank pegs at two and a half trillion dollars a year:
      creditworthy businesses, mostly SMEs, that banks cannot profitably serve.
    </p>
    <p>
      Two enormous curves. One is where businesses increasingly get paid. The
      other is where capital increasingly wants to lend. They have never properly
      intersected, because the rail that connects them, private, verifiable,
      programmable credit on stablecoin cashflow, has not existed.
    </p>
    <p>
      <span className="marker">Monaris is that rail.</span>
    </p>
    <p>
      Even a few basis points on flows of this size is a very large business.
      Owning the layer where those flows become credit is a much larger one.
    </p>

    <h2><span className="tnum text-volt-text">02</span> - Why credit never made it onchain</h2>
    <p>
      The blocker was never demand. It was a contradiction.
    </p>
    <p>
      Credit runs on information. A lender must see revenue, receivables,
      repayment history, and counterparties to price risk. But that same
      information is the most confidential thing a business owns. Publish it on a
      transparent ledger and every competitor, customer, and supplier can read
      your margins and your stress in real time. No serious operator accepts
      that, and no serious capital underwrites data the whole world can see and
      game.
    </p>
    <p>
      So onchain credit stalled at two dead ends: overcollateralized lending that
      defeats the purpose of credit, and transparent lending that no real
      business will touch.
    </p>
    <p>
      <span className="marker">The answer is not anonymity. It is precision.</span>
    </p>
    <p>
      Prove exactly what a lender needs to see, to exactly the party who needs to
      see it, and nothing else. Selective disclosure turns the contradiction into
      a design principle: private by default, verifiable on demand, compliant by
      design. That is the foundation Monaris is built on, and it is what finally
      makes credit possible at the scale the settlement layer already operates
      at.
    </p>

    <h2><span className="tnum text-volt-text">03</span> - One layer, one loop</h2>
    <p>
      <span className="marker">
        Monaris is the private credit layer for the stablecoin economy. Working
        capital is the wedge, not the whole.
      </span>
    </p>
    <p>
      The full layer, as it comes together:
    </p>
    <ul>
      <li><strong>Working capital</strong> against receivables and recurring revenue, priced on real payment history instead of paperwork</li>
      <li><strong>Embedded financing,</strong> so platforms and merchants can offer payment terms without becoming lenders themselves</li>
      <li><strong>Automated repayments</strong> that settle directly from future payment flows</li>
      <li><strong>Treasury</strong> for running stablecoin-based business finance in one place</li>
      <li><strong>Private payments,</strong> one click, confidential by default</li>
    </ul>
    <p>
      Each product stands alone. Together they compound. Payments generate
      cashflow data. Cashflow data supports credit. Credit funds growth.
      Repayments settle automatically from revenue. Treasury manages the cycle,
      and every turn of the loop makes the next one stronger.
    </p>
    <p>
      <strong>That is the Monaris loop,</strong> and it is why this is a layer and
      not a lending app. Lending apps fight for each loan. A layer gets stronger
      with every transaction that touches it.
    </p>

    <h2><span className="tnum text-volt-text">04</span> - Built for both sides of the market</h2>
    <p>
      Credit is a two-sided market, and Monaris serves both sides by design.
    </p>
    <p>
      <strong>For businesses:</strong> capital against what you&rsquo;re owed.
      Advances on receivables and recurring revenue, funded in stablecoins, with
      financials visible to no one. Choose what you disclose. Get funded. As
      simple as getting paid.
    </p>
    <p>
      <strong>For capital providers:</strong> yield backed by real financing, not
      token emissions. Structured exposure secured by verified receivables and
      recurring stablecoin cashflows, with senior and junior tranches to match
      different risk appetites. Selective disclosure lets providers verify the
      health of the book, exposure, performance, and repayment behavior, without
      ever seeing an individual business's private data.
    </p>
    <p>
      <span className="marker">
        Verifiable enough to underwrite. Private enough that businesses actually
        participate.
      </span>
    </p>
    <p>
      That combination is the unlock, and it is why the two curves can finally
      meet.
    </p>

    <h2><span className="tnum text-volt-text">05</span> - The compounding asset: financial identity</h2>
    <p>
      Here is the long game, and the reason the layer matters more than any single
      product.
    </p>
    <p>
      Every payment a business sends or receives through Monaris becomes part of a
      private financial identity the business actually owns: portable, verifiable,
      and impossible to surveil. Credit history that compounds with activity
      instead of resetting with every new lender. A reputation that travels with
      the business across the stablecoin economy.
    </p>
    <p>
      In traditional finance, credit bureaus became some of the most durable
      businesses ever built, because whoever holds the trusted record of repayment
      sits underneath every lending decision. The stablecoin economy has no such
      layer. It will need one, native to how these businesses actually operate:
      private, programmable, and earned transaction by transaction.
    </p>
    <p>
      That is what Monaris is building toward. Settlement becomes credit. Credit
      becomes capital. Capital compounds into identity, and identity brings the
      cost of capital down for every business that builds one.
    </p>

    <h2><span className="tnum text-volt-text">06</span> - The layer gets built now</h2>
    <p>
      The settlement layer took a decade and now moves trillions. The credit layer
      on top of it is being built now, and the businesses and capital providers
      who move first will shape it.
    </p>
    <p>
      Monaris is live on testnet soon, with early access opening for
      stablecoin-native businesses that are tired of waiting on money they have
      already earned, and for capital providers who want real credit yield with
      verifiable book health.
    </p>
    <p>
      <strong>Settlement becomes credit. Credit becomes capital.</strong> Join the
      waitlist and follow along as we build.
    </p>

    <div className="mt-8 flex flex-wrap gap-3">
      <a
        className="cta cta-dark inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold"
        href="https://waitlist.monaris.co"
      >
        Join the waitlist
      </a>
    </div>

    <div className="mt-12 border-t border-ink/10 pt-6 text-sm text-ink/55">
      <p>
        <em>
          Market figures referenced: Visa Onchain Analytics and Artemis (stablecoin
          volumes, 2025 to 2026); Moody's and Mordor Intelligence (private credit
          market size and forecasts); Asian Development Bank (global trade finance
          gap); World Economic Forum and Wharton Blockchain Project (stablecoin
          usage composition).
        </em>
      </p>
      <p>
        <strong>About Monaris.</strong> Monaris is the private credit layer for the
        stablecoin economy, turning stablecoin cashflow and receivables into
        programmable working capital. Capital against what you&rsquo;re owed.
      </p>
    </div>
  </>
);

export default Post;
