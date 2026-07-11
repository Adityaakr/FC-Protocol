// Post body rendered inside .prose on the BlogPost page.
// Headings are Inter (via .prose h2), body text is Satoshi (via .prose).
// Plain semantic JSX; custom blocks use div/span so .prose rules don't fight them.
// Key lines use the global .marker volt highlighter; headings are numbered
// "01 - " (dash, never a period) per the blog's editorial voice.

const Post = () => (
  <>
    <p>
      Monaris is joining the Payy ecosystem to build structured, private credit
      for stablecoin businesses.
    </p>
    <p>
      Money moves at internet speed now. Credit does not. Stablecoins solved
      settlement: a business can get paid across the world in seconds, for
      cents, onchain. But the moment that same business needs capital against
      revenue it has already earned, it is back in the old world of slow
      underwriting, opaque terms, and a system that was never built to read an
      onchain track record.
    </p>
    <p>
      <span className="marker">Payments raced ahead. Credit stayed behind.</span>
    </p>
    <p>
      That gap is the largest unmet need in the stablecoin economy, and it is
      the one Monaris was built to close.
    </p>

    <h2><span className="tnum text-volt-text">01</span> - Credit was always the point</h2>
    <p>
      <span className="marker">
        Monaris is the private credit layer for the stablecoin economy. We turn
        stablecoin cashflow and receivables into working capital.
      </span>
    </p>
    <p>
      Settlement is becoming a commodity: instant, cheap, and everywhere. The
      value sits one layer up, in what that settlement makes possible. A
      business that earns onchain, invoices onchain, and builds real financial
      history onchain should be able to borrow against it, on terms that
      reflect reality. That is the layer we build.
    </p>
    <p>
      We are building structured credit products for a stablecoin-native world:
      working capital for the businesses that need it, and private, real-yield
      exposure for the capital that funds it. Capital providers gain access to
      structured exposure backed by verified receivables and recurring
      stablecoin cashflows, without exposing borrower-level commercial data
      publicly. Two sides of a market that have never been properly connected
      onchain. It begins with financing businesses against what they are
      already owed, and it does not end there.
    </p>

    <h2><span className="tnum text-volt-text">02</span> - Credit has a privacy problem, and no one solved it</h2>
    <p>
      Here is what most onchain finance gets wrong. A business's financial data
      is valuable precisely because it is private.
    </p>
    <p>
      Revenue, customers, margins, who owes you and when: it is the most
      sensitive information a company holds, and it is exactly what a lender
      must see to price risk. On a public chain, those two facts collide. To
      get financed, a business would have to expose its entire commercial life
      to competitors and customers alike. No serious operator will do that, and
      no serious capital will underwrite against data the whole world can see
      and game. It is why real credit has never moved onchain at scale.
    </p>
    <p>
      <span className="marker">The answer is not anonymity. It is precision.</span>
    </p>
    <p>
      Reveal exactly what is required, to exactly who needs it, and nothing
      else.
    </p>

    <h2><span className="tnum text-volt-text">03</span> - Why Payy</h2>
    <p>
      That precision is what{" "}
      <a href="https://x.com/payy_link" target="_blank" rel="noopener noreferrer">
        @payy_link
      </a>{" "}
      makes possible.
    </p>
    <p>
      Payy Network is Ethereum's first privacy-native EVM L2, where
      transactions are private by default and can be selectively disclosed to
      an authorized party only when there is a reason to. Privacy where it
      protects the business. Verifiability where credit requires it. That
      combination is rare, and it is exactly what structured credit needs to
      work onchain without forcing anyone to choose between confidentiality and
      trust.
    </p>
    <p>
      Built by the team at Polybase Labs and backed by FirstMark, Payy already
      moves real volume across more than 120 countries, on infrastructure
      designed for compliance and usability from day one. For a credit
      protocol, that is not a convenience. It is the foundation.
    </p>
    <p>
      <span className="marker">Monaris builds the credit. Payy keeps it private.</span>
    </p>
    <p>
      Together, that is a category that has not existed until now.
    </p>

    <h2><span className="tnum text-volt-text">04</span> - Where this goes</h2>
    <p>
      Financing backed by real payments, and yield backed by real financing.
      Receivables are the entry point, not the destination.
    </p>
    <p>
      Over time, every payment a business makes and receives becomes part of a
      private financial identity it actually owns: portable, verifiable, and
      impossible to surveil. Credit that compounds with activity instead of
      resetting with every new lender. Capital access that finally reflects how
      a business truly operates, without the cost of exposure.
    </p>
    <p>
      That is the arc we are building toward. Structured, private credit as core
      infrastructure for the stablecoin economy.
    </p>

    <h2><span className="tnum text-volt-text">05</span> - Get early access</h2>
    <p>
      Monaris is building on Payy. Early access opens soon on testnet: test the
      future of working capital before it ships. If you are a stablecoin-native
      business tired of waiting on the money you are owed, or a capital provider
      looking for private, real credit yield, we want to talk.
    </p>
    <p>
      <strong>Settlement becomes credit. Credit becomes capital.</strong> Join
      the waitlist and follow along as we build.
    </p>

    <div className="mt-8 flex flex-wrap gap-3">
      <a
        className="cta cta-dark inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold"
        href="https://waitlist.monaris.co"
      >
        Join the waitlist
      </a>
    </div>
  </>
);

export default Post;
