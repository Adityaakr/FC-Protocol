import { X_URL } from "@/components/landing/data";

// Custom blocks (stack diagram, build panel, CTA row) use div/span only, so the
// .prose element rules don't fight them; plain content stays semantic JSX.

// Mono section kicker from the announcement page; the h2 that follows needs
// !mt-3 to beat .prose h2's 1.8em top margin.
const Eyebrow = ({ label }: { label: string }) => (
  <div className="mt-14 flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[.16em] text-ink">
    <span aria-hidden className="h-[9px] w-[9px] border-[1.5px] border-ink bg-volt" />
    {label}
  </div>
);

const Post = () => (
  <>
    <p>
      <strong>We are building Monaris settlement directly on the Payy
      SDK.</strong> Through the testnet phase, Monaris invoices settle on
      Payy's private rollup through the SDK, and our credit layer is built on
      top. The Monaris testnet portal opens soon. Here is the thinking, and
      the build.
    </p>

    <Eyebrow label="What Monaris is" />
    <h2 className="!mt-3">The private credit layer for the stablecoin economy</h2>
    <p>
      Monaris lets businesses invoice and settle in stablecoins without
      publishing their revenue, margins and counterparties to the open
      internet, then unlock capital against what they are owed. Receivables
      financing and cashflow advances, underwritten by settlement history a
      business can prove without exposing it.
    </p>
    <p>
      Privacy on Monaris means selective disclosure. Provable to lenders.
      Opaque to competitors. That distinction is the whole product.
    </p>

    <Eyebrow label="What Payy is" />
    <h2 className="!mt-3">A payments network that is private by architecture</h2>
    <p>
      Payy runs as a zero-knowledge rollup on Ethereum. Value moves as private
      notes, so amounts, senders and receivers stay shielded on chain, with
      circuits built on Noir and Barretenberg, the ZK stack from Aztec. Selective
      auditability keeps it compliant and usable for real businesses. Blocks
      confirm in about a second, wallets stay self custodial, and the whole
      thing speaks EVM.
    </p>
    <p>
      Payy is not a whiteboard project. More than 100,000 people already move
      stablecoins through its wallet and card, and the network testnet now
      opens those same rails to builders. We are one of them.
    </p>

    <Eyebrow label="Why Payy" />
    <h2 className="!mt-3">Every credit decision starts with settlement data</h2>
    <p>
      Public rails leak that data to anyone with a block explorer. Private
      rails without structure lock it away where no underwriter can use it.
      Both fail the businesses that need capital.
    </p>
    <p>
      The layer split is clean. Payy owns the rail: private settlement, fast
      finality, stablecoin native. Monaris owns what happens above it: credit
      intelligence, underwriting, and the disclosure layer that turns private
      settlement history into provable creditworthiness. Neither layer dilutes
      the other, and the flywheel gets both halves. Settlement becomes credit.
      Credit becomes capital.
    </p>

    <div className="my-8">
      <div className="overflow-hidden rounded-[16px] border border-ink/15">
        <div className="flex flex-wrap items-baseline justify-between gap-3 bg-volt px-6 py-5">
          <div>
            <div className="font-mono text-[13px] font-semibold uppercase tracking-[.12em] text-ink">Monaris</div>
            <div className="mt-0.5 font-mono text-[10px] font-medium uppercase tracking-[.14em] text-ink/60">Credit layer</div>
          </div>
          <div className="font-mono text-[12px] text-ink/80">credit intelligence · underwriting · selective disclosure</div>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-3 bg-ink px-6 py-5">
          <div>
            <div className="font-mono text-[13px] font-semibold uppercase tracking-[.12em] text-volt">Payy Network</div>
            <div className="mt-0.5 font-mono text-[10px] font-medium uppercase tracking-[.14em] text-volt/60">Settlement rail</div>
          </div>
          <div className="font-mono text-[12px] text-volt/80">private settlement · zk rollup · stablecoin rails</div>
        </div>
      </div>
      <div className="mt-3 font-mono text-[11.5px] tracking-[.02em] text-ink/50">
        The layer split. Monaris never becomes a payments company. Payy never becomes a lender.
      </div>
    </div>

    <Eyebrow label="On testnet" />
    <h2 className="!mt-3">What we are building with Payy</h2>
    <p>This is an SDK-level integration, built on what Payy's testnet actually ships today.</p>

    <div className="my-8 rounded-[24px] bg-ink p-7 sm:p-9">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <span className="inline-block rounded-[2px] bg-volt px-2 py-0.5 font-mono text-[10.5px] font-semibold uppercase tracking-[.16em] text-ink">Rail</span>
          <div className="mt-3 font-sans text-[17px] font-semibold text-white">Native settlement</div>
          <div className="mt-2 text-[15px] leading-relaxed text-white/75">
            Monaris invoices settle on Payy's testnet rollup. Amounts and
            counterparties are shielded on chain as private notes, so the
            record belongs to the businesses involved, not to the block
            explorer. Payy's transaction model supports batching, scheduling
            and sponsored gas, which maps cleanly onto how invoices actually
            get paid.
          </div>
        </div>
        <div>
          <span className="inline-block rounded-[2px] bg-volt px-2 py-0.5 font-mono text-[10.5px] font-semibold uppercase tracking-[.16em] text-ink">SDK</span>
          <div className="mt-3 font-mono text-[16px] font-semibold text-volt">@payy/client</div>
          <div className="mt-2 text-[15px] leading-relaxed text-white/75">
            Payy's TypeScript SDK handles local privacy signing, proof
            generation and note discovery, with adapters for viem. Our stack is
            React and viem end to end, and Payy's testnet is already documented
            against the wallet layer we run, so it drops in cleanly. Keys stay
            with the business. Proofs are generated client side.
          </div>
        </div>
        <div>
          <span className="inline-block rounded-[2px] bg-volt px-2 py-0.5 font-mono text-[10.5px] font-semibold uppercase tracking-[.16em] text-ink">CLI</span>
          <div className="mt-3 font-sans text-[17px] font-semibold text-white">Beam</div>
          <div className="mt-2 text-[15px] leading-relaxed text-white/75">
            Beam is Payy's Rust CLI for EVM wallet work. We use it to script
            and drill settlement flows end to end through testnet. Its 402
            payment flow, where software can meet a payment challenge and retry
            on its own, points at something we care about long term: financing
            operations that run without a human clicking buttons.
          </div>
        </div>
        <div>
          <span className="inline-block rounded-[2px] bg-volt px-2 py-0.5 font-mono text-[10.5px] font-semibold uppercase tracking-[.16em] text-ink">Credit</span>
          <div className="mt-3 font-sans text-[17px] font-semibold text-white">Settlement history</div>
          <div className="mt-2 text-[15px] leading-relaxed text-white/75">
            Every invoice settled on Payy becomes verified repayment behavior
            inside Monaris. That history feeds underwriting for receivables
            financing and cashflow advances, and a business discloses it only
            when it chooses to prove something to a lender.
          </div>
        </div>
      </div>
    </div>

    <Eyebrow label="What happens next" />
    <h2 className="!mt-3">The testnet portal opens soon</h2>
    <p>
      Private invoicing, settlement over Payy, and the first working look at
      credit built on a private rail. The 18,000 people on our waitlist get in
      first.
    </p>
    <div className="my-8 flex flex-wrap gap-3">
      <a
        href="https://waitlist.monaris.co"
        className="cta cta-dark inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
      >
        Join the waitlist
      </a>
      <a
        href={X_URL}
        className="cta cta-ghost inline-flex items-center rounded-full border border-ink/25 px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
      >
        Follow the build
      </a>
    </div>
  </>
);

export default Post;
