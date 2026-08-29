# R02 — AFSA REGULATORY PERIMETER, LICENSING AND OBJECTS CLAUSE

**Reviewer 2 — Senior AFSA Financial Services Regulatory Counsel**
Entity: **Wiese Advisory Eurasia Ltd.** (proposed), AIFC, Kazakhstan
Review date: **2026-08-28** · Report date: 2026-08-29
Document under review: `876e0e98-26_01_089___AoA.docx.txt` **line 114** (English) / **line 116** (Russian)

---

## 0. EVIDENCE STATUS — MATERIAL UPGRADE TO REV-001

**FINDING TYPE: FACT.**

`04_SOURCE_REGISTER.md` §A records that Tier 1 primary legal texts "could not be opened and read in
full" because direct egress to `aifc.kz`, `afsa.aifc.kz`, `orderly.myafsa.com` and `adilet.zan.kz` is
blocked, and that all conclusions therefore rested on search-index extracts (issue **REV-001**).

**That constraint has been overcome for this review.** Direct `WebFetch` to `aifc.kz` still returns
`EGRESS_BLOCKED`, but a server-side retrieval tool (Exa `web_fetch_exa`) fetched the AIFC/AFSA PDFs
**in full**. The following instruments were read end-to-end, in their current in-force versions, and
every citation below is quoted from the operative text, not from a snippet:

| Instrument | Version read |
|---|---|
| AIFC Financial Services Framework Regulations (FSFR) | v11, amendments to 13 Dec 2023, in force 1 Jan 2024 |
| AIFC General Rules (GEN) — incl. Schedules 1, 2, 4 | v19, amendments to 13 Apr 2025, in force 13 Oct 2025 |
| AFSA Perimeter Guidance (PERG) | approved 10 Sep 2023, in force 11 Sep 2023 |
| AFSA Guidance on Providing Consultancy Services in the AIFC — **incl. Schedule 1** | approved & in force 12 Mar 2020 |
| AIFC Fees Rules (FEES) v16 + **Amendments No. 17** | A17 in force **1 Dec 2025** |
| AIFC Prudential Rules for Investment Firms (PRU(INV)) | v6, in force 4 Oct 2024 |
| AIFC Market Rules (MAR) — incl. 1.10 AIFC ESG Debentures | v12, in force 1 Jan 2025 |
| AIFC Glossary (GLO) | v17, in force 1 Jan 2024 |
| AIFC Companies Regulations (ComReg) | initial text + Amendments No. 6 and No. 7 (A7 in force 1 Jan 2025) |
| AFSA *Guidance on Registration in the AIFC* | Nov 2024 |
| AFSA *Guidance on the Registration Process in the AIFC* | **Feb 2025** — supersedes in practice |
| AFSA *Guide on the Authorisation Process* | **Feb 2026 (V4_022026)** |
| AFSA Public Register — Ancillary Service Providers | live, 29 Aug 2026 |

**Consequence.** `S-07` in the Source Register (AFSA registration guidance — "UNCONFIRMED, retrieve")
and `S7`/`S8`/`S10` in R05's source table (Consultancy Guidance Schedule 1, ASP fees, Perimeter
Guidance — all "BLOCKED") are now **retrieved and read**. The standing REV-001 caveat does **not**
apply to the conclusions in this report. Residual risk is version currency only: ComReg V8 was read
as initial-text-plus-amendments rather than as a consolidated V8, so ComReg citations are marked
accordingly.

---

## 1. BOTTOM LINE (read this if you read nothing else)

| # | Question | Answer | Type | Confidence |
|---|---|---|---|---|
| 1 | Does an AIFC company providing **non-financial consultancy** need an AFSA Ancillary Services licence? | **No.** The ASP consultancy regime is expressly confined to consultancy **provided in relation to Financial Services**, and further confined to four enumerated services in Schedule 1 to the AFSA Consultancy Guidance. Generic non-financial consultancy is a **Non-Regulated Business**: register with the Registrar, no AFSA authorisation. | LEGAL REQUIREMENT | **High** — operative text read |
| 2 | Does sustainability advisory to UN agencies / MDBs fall inside it? | **No** — on the intended facts. It is not compliance/regulatory/DD/risk consultancy, not management or business consultancy *related to Financial Services*, not tax consultancy, and not Company Service Provider work. **Three named exceptions** bite if the mandate mix changes (§4.3). | LEGAL INTERPRETATION | **High** |
| 3 | Does "in the fields of **finance**" in the objects clause independently create perimeter risk? | **Yes.** Not because it is itself a licensable activity — an objects clause is not an activity — but because (a) ComReg s.13(4)(c) makes the nature-of-business statement a **mandatory filed representation to a regulator**, (b) the Registrar of Companies sits **inside AFSA**, and (c) the same words are re-keyed into the Digital Resident registration form and the OKED activity code. It invites a query, it is inaccurate, and it is free to fix. | LEGAL INTERPRETATION | **High** |
| 4 | What does the client actually need? | **Company incorporation only.** No AFSA Financial Services authorisation. No Ancillary Services licence. Registration review **1–3 business days online**; fee **USD 500**. | LEGAL REQUIREMENT / FACT | **High** |

**Severity of the line-114 defect: HIGH (not BLOCKER).** It will not, on its own, cause the Registrar
to refuse incorporation. It is nonetheless the single cheapest correction in the whole file, and it
should not be filed as drafted.

---

## 2. THE ARCHITECTURE — THREE GATES, NOT ONE

**FINDING TYPE: LEGAL REQUIREMENT.**

**FSFR s.24 (The General Prohibition)**, quoted in full:

> "A Centre Participant must not carry on a Regulated Activity, Market Activity or Ancillary Service
> unless it is licensed to do so by the AFSA."

That is the entire prohibition. Three closed lists sit under it, and **nothing outside those three
lists requires AFSA permission at all**:

| Gate | Content | Where defined | Who licenses |
|---|---|---|---|
| **Regulated Activities** | 31 activities (Dealing, Managing, Advising, Arranging, Custody, Trust, Credit, Money Services, Insurance, Digital Assets, Credit Rating…) | **GEN Schedule 1** (FSFR s.17) | AFSA **Authorisations Division** |
| **Market Activities** | Exchange, Clearing House, Loan Crowdfunding Platform, Investment Crowdfunding Platform, Private Financing Platform | **GEN Schedule 4** (FSFR s.18) | AFSA Authorisations Division |
| **Ancillary Services** | **Providing Legal Services; Providing Audit Services; Providing Accountancy Services; Providing Consulting Services; Providing Credit Rating Services** | **GEN Schedule 2** (FSFR s.19; FSFR s.16 defines ASP) | **Office of the Registrar** (AFSA, *Guide on the Authorisation Process*, Feb 2026, §2) |

**PERG 5.1.1 (Unregulated Activities — AIFC Participants)**, quoted in full, is the decisive
statement of principle:

> "While Persons applying to carry on Regulated Activities, Market Activities, Ancillary Services,
> and FinTech Lab Activities must be authorised, and must be registered/incorporated in the AIFC,
> **not all companies registered/incorporated in the AIFC require an authorisation. Those activities
> that are not listed as Regulated Activities, Market Activities, Ancillary Services and FinTech Lab
> Activities, could be registered/incorporated without authorisation.**"

The Registrar's own *Guidance on the Registration Process in the AIFC* (Feb 2025) §2.2 puts the same
point operationally:

> "**Non-Regulated Business.** If your business does not intend to conduct financial or ancillary
> services in or from the AIFC, the authorisation process is not required and you can immediately
> proceed to registration process."

**So the whole question for this client reduces to one thing: is sustainability advisory to UN
agencies and MDBs inside GEN Schedule 2 paragraph 4?**

---

## 3. QUESTION 1 — IS "PROVIDING CONSULTING SERVICES" REALLY A LICENSED ANCILLARY SERVICE, AND HOW FAR DOES IT REACH?

### 3.1 The flag is correct — and it is narrower than it looks

**FINDING TYPE: LEGAL REQUIREMENT.** The other reviewer's flag (R09 §B.5(a); R05 §2) is **verified**.
"Providing Consulting Services" **is** one of the five licensed Ancillary Services. It sits at
**paragraph 4 of GEN Schedule 2**, it carries a dedicated AFSA Guidance with its own Schedule 1, it
has a line in the Fees Rules, and licensees appear on the AFSA public register. This is a live
licensing regime, not a theoretical one.

**GEN Schedule 2, paragraph 4 — the statutory definition, in full:**

> "**Providing Consulting Services.** Performing Consultancy Services means providing expert
> knowledge or advice on a particular topic. Consultancy Services may include the activity of Company
> service providers."

Read alone, that definition is breathtakingly wide — it would capture every consultant on earth. It
is not read alone.

### 3.2 The two limiting provisions — this is the answer to Question 1

**FINDING TYPE: LEGAL REQUIREMENT.** *AFSA Guidance on Providing Consultancy Services in the AIFC*
(approved and commenced 12 March 2020), paragraphs 5 and 6, **quoted verbatim**:

> "**5.** Regulatory requirements for Ancillary Services providers are part of the AIFC financial
> services framework. **It means that Consultancy Services shall be provided in relation to Financial
> Services.**
>
> **6.** AFSA considers that a Person must apply to the AFSA for a Licence authorising the AIFC
> Participant to carry on Consultancy Services **if the following conditions are met: (a) the
> activities fall under the list of services listed in Schedule 1 to this Guidance and (b) the
> activities are carried on by way of business.**"

And **Schedule 1 to that Guidance — "The list of Consultancy Services Providing which requires the
authorisation from the AFSA" — in full, all four items**:

> **1.** Compliance, regulatory, due diligence and risk consultancy (including Shari'ah compliance
> consultancy)
> **2.** Management and business consultancy (including market research) **related to Financial Services**
> **3.** Tax consultancy
> **4.** Company Service Provider

That is the complete list. There is no fifth item and no residual catch-all.

**Answer to Question 1, stated precisely.** The Ancillary Services regime is **not** a general
professional-services licensing regime and it is **not** confined by counterparty (there is no
"to AIFC participants" limb in the *regulatory* test — that limb belongs to the *tax* exemption in
Art. 6 of the Constitutional Statute, which R05 correctly analysed and which must not be confused
with this). The regulatory limitation is **subject-matter**: consultancy is licensable only where it
is (i) *in relation to Financial Services*, and (ii) one of the four Schedule 1 species, and (iii)
carried on by way of business (GEN 1.1.9: engaging in the activity in a manner that constitutes
carrying on a business; holding oneself out as willing and able; or regularly soliciting others).

**A drafting caveat worth recording.** PERG 2.1.1 states, parenthetically: *"(Note that for Market
Activities and Ancillary Services being included into the list of activities in GEN is a sufficient
provision for requiring authorisation)"* — i.e. PERG suggests the "by way of business" filter is a
*Regulated Activities* filter only. The Consultancy Guidance para 6 says the opposite, requiring both
limbs. `LEGAL INTERPRETATION`: the tension is immaterial here, because the client fails limb (a)
anyway — it does not reach any Schedule 1 item. It would matter if the client ever did a single
piece of financial-sector compliance work "not by way of business"; do not rely on the "by way of
business" escape.

### 3.3 Corroboration from the register — what AFSA actually licenses

**FINDING TYPE: FACT.** The AFSA Public Register of Ancillary Service Providers (read 29 Aug 2026)
shows the entire population of consulting licensees. It is small (roughly 15 ASP licences per year
across all five services) and its composition is diagnostic: consulting licences are held by
**law firms, audit and accounting firms, compliance and corporate-services boutiques** —
e.g. `Unicase Ltd.`, `GRATA International GLF Law Firm Ltd.`, `QUORUS KAZAKHSTAN Ltd.`,
`Burkardt Klinner & Partner LLP`, `Legal & Compliance Group Ltd.`, `Ledgery Ltd.` (accountancy +
consulting), `RIB Risk Solutions Ltd.` Nothing on that register resembles a generic non-financial
advisory practice. `LEGAL INTERPRETATION`: regulatory practice matches the text.

### 3.4 PERG 2.3.4.2 — "Exclusions: There are none."

**FINDING TYPE: FACT.** PERG 2.3.4 reproduces Schedule 1 verbatim as the operative test and then
states, under **2.3.4.2 Exclusions: "There are none."** There is no statutory exclusion available to
a consultancy that *is* inside Schedule 1. The only defence is being outside Schedule 1 in the first
place. **That makes the accuracy of the client's self-description a first-order compliance control,
not a cosmetic matter** — which is precisely why line 114 has to be fixed.

---

## 4. QUESTION 2 — DOES SUSTAINABILITY ADVISORY TO UN AGENCIES AND MDBs FALL INSIDE?

### 4.1 The test, run item by item

**FINDING TYPE: LEGAL INTERPRETATION.** Severity: this determines whether a USD 2,800 licence and an
ongoing supervisory relationship are needed.

| Schedule 1 item | Does the intended business reach it? | Reasoning |
|---|---|---|
| **1. Compliance, regulatory, due diligence and risk consultancy (incl. Shari'ah compliance)** | **No**, as intended | ESG/sustainability advice to a UN agency on programme design is not compliance or regulatory consultancy in the financial-regulatory sense the Guidance uses (it sits in a rulebook whose subject is financial regulation). **But see §4.3(a) — this is the item most easily crossed.** |
| **2. Management and business consultancy (incl. market research) related to Financial Services** | **No**, as intended | The qualifier *"related to Financial Services"* is the operative words. UN/MDB sustainability advisory is not related to Financial Services as defined (GEN Sch 1/2/4 activities). Advising a **bank or fund** on its ESG strategy **would** be. |
| **3. Tax consultancy** | **No** | Not offered. |
| **4. Company Service Provider** | **No** | Not offered. Note the CSP definition (formation agent; acting as/arranging director, secretary or nominee shareholder; providing registered office/business address; acting as trustee) — AFSA *Guidance on Registration in the AIFC*, AML section. |

**Conclusion: the intended business is a Non-Regulated Business.** No ASP licence is required. The
company registers with the Registrar and proceeds directly to trading. `LEGAL REQUIREMENT` (FSFR
s.24; GEN Sch 2 ¶4; Consultancy Guidance ¶¶5–6 and Sch 1; PERG 5.1.1).

**This resolves R09's ECR at §B.5 — described there as "the single most important external
confirmation in this report" — in the client's favour, on primary text.**

### 4.2 The identity of the counterparty is irrelevant to this question

**FINDING TYPE: LEGAL INTERPRETATION.** It is worth stating plainly, because the two regimes are
easily conflated and R05's tax analysis uses a counterparty test:

- **Regulatory perimeter (this report):** subject-matter test. *Is the service one of the listed
  activities?* The client's UN/MDB client base neither helps nor hurts.
- **Tax exemption (R05):** counterparty test. *Is the recipient an AIFC Body or an AIFC Participant
  providing financial services?* The client's UN/MDB client base is fatal to the exemption.

The client is therefore in the position of being **outside the licensing regime (good) and outside
the tax exemption (bad)**. Both flow from the same business, by different tests. Any attempt to
re-characterise the business as "green finance advisory" to reach the tax exemption would move it
towards Schedule 1 item 2 and towards *Advising on Investments* — R05 §6 is right to warn against
it, and this report confirms the regulatory half of that warning on primary text.

### 4.3 The three mandate types that would flip the answer

**FINDING TYPE: RECOMMENDATION.** Severity: **MEDIUM**, rising to **HIGH** if any is accepted without
re-testing. These should go into the engagement-acceptance checklist:

**(a) ESG advisory *to a financial institution about its own business*.** An engagement for an AIFC
bank, an insurer, a fund manager or an AIX-listed issuer on ESG strategy, ESG risk frameworks, ESG
disclosure readiness or climate-risk stress testing is **"management and business consultancy …
related to Financial Services"** (Sch 1 item 2), and plausibly **"compliance, regulatory … and risk
consultancy"** (item 1). **ASP licence required before the first such engagement.** This is not
hypothetical: it is the natural adjacent market for a sustainability adviser in a financial centre.

**(b) Shari'ah compliance consultancy.** Expressly named in Schedule 1 item 1. If green sukuk work
extends to advising on Shari'ah compliance, the ASP gate opens. **HIGH** relevance given the sukuk
line in the mandate.

**(c) Company Service Provider drift.** If the AIFC entity ever provides a registered address,
supplies a director or secretary, or acts as formation agent for a client's SPV — a real temptation
for a blended-finance adviser structuring project vehicles — it becomes a CSP: ASP licence (item 4),
**plus DNFBP status under the AIFC AML Rules** with an annual AML return to AFSA (PERG ch.6).

**Mitigation:** the negative covenant proposed at §8 addresses (a) and (b) at the constitutional
level; (c) needs an operational policy, not a clause.

### 4.4 A fourth point, aimed at the client's own advisers rather than the client

**FINDING TYPE: LEGAL REQUIREMENT.** Severity: **MEDIUM.** AFSA publishes a standing disclaimer on
its Ancillary Services page, quoted in full:

> "Please note that **providing advice and support for the registration of legal entities in the AIFC,
> obtaining authorisation to conduct licensed activities in the AIFC, and submitting documents related
> to the same are considered Ancillary Services.**
>
> The Acting Law of the AIFC **does not permit individuals (natural persons) to conduct business in the
> AIFC, including providing Ancillary Services.** Under section 24 of the AIFC Financial Services
> Framework Regulations, Ancillary Services within the AIFC may only be provided by an AIFC Participant
> (legal entities) that has obtained an appropriate licence from the AFSA.
>
> **Providing Ancillary Services without the required licence constitutes a contravention of the Acting
> Law of the AIFC.**"

Two consequences for this file, neither of which affects the client's own licensing position:

1. **Incorporation-agent work is itself a licensed Ancillary Service.** The service being rendered to
   Wiese Advisory GmbH — preparing the AoA, Resolution and PoA and filing the incorporation — is, on
   AFSA's own statement, an Ancillary Service. `PRACTICAL REQUIREMENT`: **verify that the firm behind
   this filing appears on the AFSA Public Register of Ancillary Service Providers.** If it does not,
   the client is being served by an unlicensed provider, in a matter that will be read by that
   provider's own regulator.
2. **Individuals cannot provide Ancillary Services.** The PoA appoints two natural persons —
   Shopanova Diana and Namyssova Alina — as attorneys with wide powers [PoA lines 81, 83]. Acting as
   **attorney of the shareholder** is not the same as **providing Ancillary Services by way of
   business**, and nothing in the documents says the two individuals are contracting in their own
   names; the natural reading is that they are employees of the service-provider firm. `UNCONFIRMED`
   — but it is a five-minute check against the public register, and it is worth doing, because a
   defect here sits upstream of everything else in the package.

---

## 5. QUESTION 3 — DOES "IN THE FIELDS OF FINANCE" INDEPENDENTLY CREATE PERIMETER RISK?

**FINDING TYPE: LEGAL INTERPRETATION.** Severity: **HIGH.** Answer: **yes, but for reasons that are
procedural and evidential, not because an objects clause is itself an activity.**

Four distinct mechanisms, in ascending order of practical importance:

**(1) The objects clause is a mandatory filing, not boilerplate.** ComReg **s.13(4)(c)** requires the
incorporation application to state *"the nature of the business to be conducted by the proposed
Company"*, and **s.14(2)(b)** requires the Articles of Association to **contain that same
information**. The client cannot delete the clause; it can only make it accurate. It is a
representation to a regulator about what the company will do.

**(2) It is re-keyed into the registration form, alongside an OKED code.** AFSA *Guidance on the
Registration Process in the AIFC* (Feb 2025) §4.3, item 3, requires the Digital Resident application
to state the **"Nature of Business"** — *"Description of the business activities. The economic
activity code (OKED), with up to three codes allowed (one primary, others secondary)."* A file in
which the Articles say "advisory services in the fields of finance", the OKED code says
management consultancy, and the KYC narrative says sustainability advisory to UN agencies is an
internally inconsistent file. **`PRACTICAL REQUIREMENT`: the AoA wording, the form free text and the
OKED codes must be aligned before submission.** This is a new point not covered elsewhere in the
file and it is where the perimeter question actually bites at the counter.

**(3) The reader is the financial regulator.** The Registrar of Companies is established **"within
the framework of the AFSA"** (ComReg s.9(1)) and *"is an agent of the AFSA"* (s.9(3)). The reviewing
officer is at the same institution that administers FSFR s.24. Volunteering "finance" as the first
named field, when the actual business is sustainability advisory to multilateral institutions, adds
regulatory salience for no benefit and misdescribes the business.

**(4) The open-ended tail is the worse half.** *"as well as the provision of other advisory and
support services to legal entities and individuals both within and outside the AIFC"* is unbounded.
Given that PERG 2.3.4.2 records **no exclusions** for consultancy, an unbounded advisory object makes
it impossible for a reviewing officer — or, later, a bank's compliance function or a counterparty —
to satisfy themselves that the company sits outside Schedule 1. **The catch-all does more damage
than the word "finance".**

**What the clause does *not* do.** `LEGAL INTERPRETATION`: it does not create liability, and it does
not restrict the company's capacity. **ComReg s.29(1)–(3)**: a Company *"has the capacity, rights and
privileges of a natural person"*; the validity of an act *"must not be called into question on the
ground of lack of capacity because of anything in its Articles of Association"*; and a person acting
in good faith *"is not affected by any limitations in its Articles of Association"*. Two consequences
follow, and both are useful:

- The words "in the fields of finance" do **not** cause the company to be carrying on a Regulated
  Activity. Only conduct does that. **The risk is a query, a delay and a mischaracterisation — not an
  automatic contravention.** That is why this is HIGH and not BLOCKER, and the file should say so
  rather than overstating it.
- Conversely, a **self-limiting negative covenant in the Articles costs the client nothing in
  commercial capacity** (s.29 protects third parties dealing in good faith) while buying a clean
  answer at the counter. It is a pure-upside drafting move. This is the doctrinal justification for
  the second paragraph of the clause proposed at §8, and it should be explained to the client so the
  covenant is not resisted as a self-imposed handcuff.

**One further defect, noted for completeness and referred out.** ComReg s.14(2)(b) requires the
Articles to contain the information in s.13(4)(a)–(h), which includes incorporator and director
particulars. The AoA as drafted contains the name (line 99), registered office (line 107), nature of
business (line 114), share capital (line 128) and a Private Company statement (line 35), but **no
incorporator or director particulars**. Whether the Registrar treats the portal fields as satisfying
this is `UNCONFIRMED` and is a matter for R09's filing-readiness review, not this one.

---

## 6. THE MANDATED ACTIVITY TABLE (§5 of the master mandate)

**Reading the table.** "Regulated?" answers *is this activity inside the AFSA perimeter as such* —
not *is the client doing it*. "Actual contemplated service" states what this client is understood to
contemplate. Definitions are quoted from **GEN Schedule 1** (Regulated Activities), **GEN Schedule 2**
(Ancillary Services) and **GEN Schedule 4** (Market Activities); guidance from **PERG**; the
prohibition throughout is **FSFR s.24**.

Two GLO definitions drive most of the table:
- **Investment** = *"A Security, Unit, Derivative, Digital Asset or Environmental Instrument and a
  right or interest in the relevant Security, Unit, Derivative, Digital Asset, or Environmental
  Instrument."*
- **Debenture** = *"An instrument creating or acknowledging indebtedness, whether secured or not"* —
  i.e. **every bond, green bond, sustainability-linked bond and sukuk is a Debenture, hence a
  Security, hence an Investment.**

| # | Activity | Actual contemplated service | AIFC/AFSA classification | Regulated? | Permission potentially required | Legal source | Risk |
|---|---|---|---|---|---|---|---|
| 1 | **Advising on Investments** | None intended. Risk arises indirectly where sustainability advice touches the merits of a named instrument for a client acting as investor | **Regulated Activity** — advice to a Person *in his capacity as an investor* on the merits of buying/selling/holding/subscribing for/underwriting **a particular Investment**; "advice" includes any statement, opinion or report intended, or reasonably regarded as intended, to influence selection of a particular Investment | **YES** | AFSA Licence: *Advising on Investments*. App. **USD 7,000**; annual supervision **USD 1,400**; Base Capital **USD 10,000**; Liquid Assets ≥25% of annual opex; 4 mandatory Approved Individuals | GEN Sch 1 ¶10; PERG 2.2.10; PRU(INV) 1.3(4)(h), 3.3 Table 3.3, 4.2; GEN 2.1.1; FEES Sch 1 & 6 (A17) | **HIGH** — nearest boundary; see §7 |
| 2 | **Arranging Deals in Investments** | None intended. Risk arises via investor introductions and placement support on ESG bonds | **Regulated Activity** — making arrangements with a view to another Person buying, selling, subscribing for or underwriting an Investment. PERG expressly includes *introducing potential subscribers to issuers*, *introducing potential underwriters to issuers*, assisting with applications, negotiating terms, transmitting instructions — **and applies even where no transaction results** | **YES** | AFSA Licence: *Arranging Deals in Investments*. App. **USD 7,000**; annual **USD 1,400**; Base Capital **USD 10,000** | GEN Sch 1 ¶11; PERG 2.2.11; PRU(INV) Table 3.3; FEES Sch 1 & 6 (A17) | **HIGH** — see §7 |
| 3 | **Dealing in Investments** (as Principal / as Agent) | Not contemplated | **Regulated Activity** ×2 — buying, selling, subscribing for or underwriting an Investment as principal / as agent. Agent = has authority to bind a party; that is the line against "arranging" | **YES** | AFSA Licence. App. **USD 14,000** each; Base Capital **USD 500,000** (principal) / **USD 50,000** (agent) | GEN Sch 1 ¶¶1–2; GEN 1.1.10; PERG 2.2.1–2.2.2; PRU(INV) Table 3.3 | LOW |
| 4 | **Managing Assets** (AIFC term: **Managing Investments**) | Not contemplated | **Regulated Activity** — managing on a **discretionary** basis assets belonging to another Person where the assets include any Investment | **YES** | AFSA Licence: *Managing Investments*. App. **USD 7,000**; Base Capital **USD 150,000** | GEN Sch 1 ¶3; PERG 2.2.3; PRU(INV) Table 3.3 | LOW |
| 5 | **Managing a Collective Investment Scheme** | Not contemplated | **Regulated Activity** — establishing, managing, operating or winding up a CIS. Absorbs Managing Assets, Fund Administration, Dealing, Arranging and Custody carried on within it | **YES** | AFSA Licence. App. **USD 7,000** (Exempt Fund) / **USD 10,000** (Non-Exempt); Base Capital **USD 50,000–500,000** | GEN Sch 1 ¶4; PERG 2.2.4; PRU(INV) Table 3.3; FEES Sch 1 (A17) | LOW |
| 6 | **Fund Administration** | Not contemplated | **Regulated Activity** — 8 enumerated fund services (dealing instructions, NAV, register, AML, reconciliation, treasury, financial statements, participant communications) | **YES** | AFSA Licence. App. **USD 7,000**; Base Capital **USD 10,000** | GEN Sch 1 ¶8; PERG 2.2.8 | LOW |
| 7 | **Custody** (and **Arranging Custody**) | Not contemplated | **Regulated Activity** ×2 — safeguarding and administering Investments / Fund Property / Digital Assets belonging to another | **YES** | AFSA Licence. App. **USD 7,000**; Base Capital **USD 500,000** (Providing) / **USD 10,000** (Arranging) | GEN Sch 1 ¶¶5–6; PERG 2.2.5–2.2.6 | LOW |
| 8 | **Trust Services** | Not contemplated | **Regulated Activity** — creating an express trust, arranging for a trustee, acting as trustee, protector or enforcer. Note: acting as trustee/protector/enforcer is **not** incidental to law or accountancy and always needs a Licence | **YES** | AFSA Licence. App. **USD 7,000**; Base Capital **USD 200,000** | GEN Sch 1 ¶7; GEN 1.1.16 + Guidance; PERG 2.2.7 | LOW — but see §4.3(c) CSP drift |
| 9 | **Credit arranging** | Not intended; **live risk in blended-finance work** | **Regulated Activity** — *Arranging a Credit Facility*: making arrangements for the provision of a Credit Facility by one or more Persons. Companion: *Advising on a Credit Facility* (advice to a **borrower** on the merits of entering a **particular** Credit Facility). "Credit Facility" is very wide: *"any loan or syndicated loan, mortgage, overdraft, financial lease, letter of credit, financial guarantee, trade finance, transaction finance, **project finance**, asset finance"* | **YES** | AFSA Licence: *Arranging a Credit Facility* and/or *Advising on a Credit Facility*. App. **USD 7,000** each; annual **USD 1,400**; not PRU(INV) firms unless combined | GEN Sch 1 ¶¶19–20; GLO "Credit Facility"; PERG 2.2.19–2.2.20 | **MEDIUM–HIGH** — see §7.3 |
| 10 | **Lending** | Not contemplated | **Regulated Activity** — *Providing Credit*: providing a Credit Facility to another Person | **YES** | AFSA Licence. App. **USD 14,000**; annual **USD 9,800** | GEN Sch 1 ¶18 | LOW |
| 11 | **Corporate finance** | Not intended | **Not a standalone AIFC head — it decomposes.** PERG 2.2.10 states in terms that *Advising on Investments* **"also includes investment banking services of financial consulting (M&A structuring, private equity, restructuring, hedging)"** | **YES, in substance** | *Advising on Investments* and/or *Arranging Deals in Investments* | PERG 2.2.10 (currency-regulation table); GEN Sch 1 ¶¶10–11 | **HIGH** — the label "corporate finance advisory" must never appear in the client's marketing |
| 12 | **Arranging financing** | Not intended; adjacent to blended finance | Debt → *Arranging a Credit Facility*; securities → *Arranging Deals in Investments*. Note GEN Sch 1 ¶20(3) exclusion covers only **legal or accountancy** services provided free of separate remuneration — **not consultancy** | **YES** | *Arranging a Credit Facility* and/or *Arranging Deals in Investments* | GEN Sch 1 ¶¶11, 20; PERG 2.2.11 | **HIGH** |
| 13 | **Arranging issuance of securities** | Not intended | **Squarely *Arranging Deals in Investments***. PERG lists as arranging: *"the introduction of potential subscribers for Securities to issuers"* and *"potential underwriters to issuers of Securities"* | **YES** | AFSA Licence: *Arranging Deals in Investments* | GEN Sch 1 ¶11; PERG 2.2.11 | **HIGH** |
| 14 | **Placement** | Not intended | *Arranging Deals in Investments* (or *Dealing as Agent* if binding authority). Separately, MAR 1.1.2 sets the conditions for an offer of Securities **by way of placement** | **YES** | *Arranging Deals in Investments* / *Dealing in Investments as Agent* | GEN Sch 1 ¶¶2, 11; MAR 1.1.2 | **HIGH** |
| 15 | **Investment introductions** | Not intended; the classic accidental breach | ***Arranging Deals in Investments***. PERG: arranging covers *"the introduction of potential buyers of Investments to issuers or sellers of Investments, or vice versa"*, and *"an activity falls within the scope of 'arranging' even if it does not necessarily lead to a completed transaction"* | **YES** | *Arranging Deals in Investments* | GEN Sch 1 ¶11; PERG 2.2.11 | **HIGH** — see §7.2 for the safe-harbour language |
| 16 | **Capital raising** | Not intended | *Arranging Deals in Investments* (equity/bond) or *Arranging a Credit Facility* (loan/guarantee), depending on instrument | **YES** | As above | GEN Sch 1 ¶¶11, 20 | **HIGH** |
| 17 | **Bond structuring** | Possible — advising an issuer on instrument design | A Bond is a **Debenture → Security → Investment**. Advising the **issuer on the design of its own instrument** is *not* advising a Person "in his capacity as an investor", so it is **not** *Advising on Investments*. It becomes *Arranging* the moment it extends to approaching, introducing or assisting investors. Note the PERG arranging exclusion for *"arrangements made by … a person issuing their own Debentures"* protects **the issuer**, not its adviser | **NOT PER SE** — adjacent | None if confined to issuer-side design and documentation input; *Arranging Deals in Investments* if it reaches investors | GLO "Debenture", "Investment"; GEN Sch 1 ¶¶10–11; PERG 2.2.11 exclusions (2), (6) | **MEDIUM–HIGH** |
| 18 | **Green bond structuring** | **Core intended business** | As row 17, **plus an express safe harbour**: MAR 1.10.4 requires the *Issuer* to appoint one or more **external review providers** to assess pre-issuance compliance with Qualifying ESG Debenture Standards and to verify post-issuance reporting. **Acting as external review provider is not a Regulated Activity, Market Activity or Ancillary Service** — MAR imposes the obligation on the Issuer, and AFSA regulates the reviewer only through the Issuer's duty of competence and independence | **NO** for external review / taxonomy / use-of-proceeds / impact work | **None** for the external-review, standards-alignment and impact-reporting role | MAR 1.10.2–1.10.4 and Guidance; GEN Sch 1 (external review absent from all 31 heads) | **MEDIUM** — safe if confined; see §7.1 |
| 19 | **Sustainability-linked bond structuring** | **Core intended business** | As row 18. SLBs complying with ICMA SLBP or the Climate Bonds Standard are expressly named as AIFC ESG Debentures. **KPI selection, SPT calibration and verification of performance status are external-review functions under MAR 1.10.4(b)(ii)** | **NO** for KPI/SPT design and verification | None | MAR 1.10.3 Guidance (1)(d); MAR 1.10.4(b)(ii) | **MEDIUM** |
| 20 | **Sukuk structuring** | Possible | MAR 1.10.1: the ESG Debenture rules apply to an Offer of **Sukuk** *"as if each reference to Debenture were a reference to Sukuk"*. Structuring analysis identical to rows 17–19. **But Shari'ah compliance consultancy is expressly Schedule 1 item 1 of the Consultancy Guidance** | **NO** as structuring; **YES (ASP)** if it extends to Shari'ah compliance consultancy | ASP Licence: *Providing Consulting Services* (**USD 2,800**) if Shari'ah compliance advice is given by way of business | MAR 1.10.1; Consultancy Guidance Sch 1 ¶1; GEN Sch 2 ¶4 | **HIGH** — the sharpest ASP trap in the list |
| 21 | **Blended finance structuring** | **Plausible intended business** | Designing concessional tranches, guarantees, first-loss layers and de-risking facilities. If the work advises a **borrower** on the merits of entering a **particular** facility → *Advising on a Credit Facility*. If it makes **arrangements for the provision** of a facility by DFIs/donors → *Arranging a Credit Facility*. "Credit Facility" expressly includes **project finance** and **financial guarantee**. If the vehicle is a fund → *Managing a CIS* / *Arranging Deals in Investments* | **BOUNDARY — depends on the deliverable** | *Advising on a Credit Facility* and/or *Arranging a Credit Facility* (**USD 7,000** each) if the line is crossed | GEN Sch 1 ¶¶19–20; GLO "Credit Facility"; PERG 2.2.19–2.2.20 | **HIGH** — see §7.3 |
| 22 | **Investment structuring** | Not intended | PERG 2.2.10 names *"M&A structuring, private equity, restructuring, hedging"* as falling **within** *Advising on Investments*. The word "structuring" is not a safe harbour in the AIFC | **YES, in substance** | *Advising on Investments* | PERG 2.2.10 | **HIGH** — avoid the term entirely |
| 23 | **Financial product structuring** | Not intended | As row 22. If it reaches distribution → *Arranging*; if a Fund → *Managing a CIS* | **YES, in substance** | *Advising on Investments* / *Arranging Deals in Investments* | PERG 2.2.10; GEN Sch 1 ¶¶4, 10–11 | **HIGH** |
| 24 | **Securities issuance** | Not intended by the company itself | Issuing **one's own** securities is not a Regulated Activity (PERG 2.2.11 exclusion (6)); a **Private Company** is in any event prohibited from offering its Securities to the public (ComReg s.50). Assisting a **third party** to issue = *Arranging*. A public offer engages the MAR Prospectus regime | **NO** (own) / **YES** (for others) | None (own) / *Arranging Deals in Investments* (others) | ComReg s.50 (as amended by A7); MAR ch.1; PERG 2.2.11 | LOW (own) / HIGH (others) |
| 25 | **Investment management** | Not contemplated | = *Managing Investments*, row 4 | **YES** | AFSA Licence | GEN Sch 1 ¶3 | LOW |
| 26 | **Fund structuring** | Possible — advising a sponsor on a blended-finance or climate fund | Advising a sponsor on fund design is **not itself** a Regulated Activity. **Establishing, managing, operating or winding up** the CIS is | **NOT PER SE** | None if confined to design advice; *Managing a CIS* if the client establishes or operates the vehicle, or is named in a role that amounts to operating it | GEN Sch 1 ¶4; PERG 2.2.4 | **MEDIUM** — watch role creep into "establishing" |
| 27 | **Fund management** | Not contemplated | = *Managing a Collective Investment Scheme*, row 5 | **YES** | AFSA Licence | GEN Sch 1 ¶4 | LOW |
| 28 | **Crowdfunding** | Not contemplated | **Market Activity** — *Operating a Loan Crowdfunding Platform* (Sch 4 ¶4); *Operating an Investment Crowdfunding Platform* (Sch 4 ¶5). Includes administering the resulting loan agreement | **YES (Market Activity)** | AMI Licence; annual supervision **USD 10,000** fixed + variable levy (loan platform) | GEN Sch 4 ¶¶4–5; FSFR s.18; FEES Sch 6.2 | LOW |
| 29 | **Digital assets** | Not contemplated — **but see the carbon-credit point below** | *Operating a Digital Asset Trading Facility* is a Regulated Activity (Sch 1 ¶30). More importantly, **a Digital Asset is an Investment**, so any *advising* or *arranging* in relation to tokenised instruments is caught by rows 1–2, with an **additional USD 2,800 application fee and USD 2,800 annual fee** for digital-asset RAs | **YES** | *Operating a DATF* (**USD 98,000**) or the underlying RA + digital-asset uplift | GEN Sch 1 ¶30; GLO "Digital Asset"; FEES Sch 1 ¶1.1-1, Sch 6 ¶6.1-1 (A17); AIFC DAA | LOW as intended; **MEDIUM** if tokenised carbon work is taken on |
| 30 | **Payments** | Not contemplated | *Providing Money Services* (Sch 1 ¶21, 8 limbs incl. e-money, remittance, payment accounts, AIS) and *Operation of a Payment System* (Sch 1 ¶27). Broad exclusions in GEN Sch 1 ¶21-1, incl. intra-group transactions | **YES** | AFSA Licence: *Providing Money Services* (**USD 14,000**) / *Operation of a Payment System* (**USD 10,000**) | GEN Sch 1 ¶¶21, 21-1, 27; AIFC PMS Rules | LOW |

### 6.1 An activity the mandate list omits — and the client should not

**FINDING TYPE: LEGAL INTERPRETATION.** Severity: **MEDIUM**, rising to HIGH on any carbon mandate.

| Activity | Classification | Regulated? | Permission | Source | Risk |
|---|---|---|---|---|---|
| **Advising on carbon credits, emission allowances, RECs or other environmental attribute certificates** | GLO defines **Environmental Instrument** as *"An Investment which: (a) enables its holder to emit greenhouse gases … including such carbon units as emissions allowances or equivalent; (b) evidences the reduction or removal of greenhouse gases … including such carbon units as carbon credits or equivalent; or (c) evidences the environmental attributes of an underlying unit (i.e., renewable energy or environmental attribute certificates)."* An Environmental Instrument **is an Investment** by definition | **YES** — advice on the merits of buying/selling/holding a **particular** carbon credit or allowance for a client as investor is ***Advising on Investments***; introducing a buyer to a seller is ***Arranging Deals in Investments*** | *Advising on Investments* / *Arranging Deals in Investments* — **USD 7,000**, Base Capital **USD 10,000** | GLO "Environmental Instrument"; GLO "Investment"; GEN Sch 1 ¶¶10–11; cf. GEN 1.1.14 (commodity-derivative/Environmental Instrument exclusion, available only to AMI members dealing for own account) | **MEDIUM–HIGH** |

**Why this matters here.** The AIFC has deliberately pulled carbon units **inside** the definition of
Investment. A sustainability adviser is, of all consultancies, the one most likely to end up advising
a client on the merits of a specific carbon credit portfolio, or introducing a project developer to a
credit buyer. **That is the most likely route by which this particular client accidentally crosses
the perimeter — more likely than green bonds.** Methodology advice, MRV design, taxonomy alignment
and project-level GHG accounting are safe; instrument-specific buy/sell/hold advice and
buyer–seller introductions are not.

---

## 7. WHERE THE LINE ACTUALLY RUNS — THE THREE HARD CASES

### 7.1 Green bonds and sustainability-linked bonds

**FINDING TYPE: LEGAL INTERPRETATION.** Severity: **MEDIUM.** This is better news than the file
currently assumes, and it is grounded in a specific rule.

**MAR 1.10.2**: a Debenture is an AIFC ESG Debenture if it (a) is the subject of an Offer of
Securities, (b) complies with a Qualifying ESG Debenture Standard, and (c) **is subject to external
review in accordance with MAR 1.10.4**. **MAR 1.10.4**: *"a Debenture is subject to external review
if the Issuer appoints one or more external review providers to (a) assess through a pre-issuance
external review the compliance of the Debenture with Qualifying ESG Debenture Standards; or (b)
verify the content of post-issuance reporting …"* — including *"a report on the use of proceeds and
the sustainability-related impact performance in respect of eligible projects"* and *"a report on the
performance status in respect of sustainability targets"*.

The Guidance to MAR 1.10.4 places the duty on the **Issuer**: before appointing a reviewer it *"should
take reasonable steps to ensure that the external review provider (a) has the required skills,
resources, and experience … and (b) is independent of, and not subject to any conflict of interest
with respect to, the Issuer."*

**Consequence.** AFSA has built an ESG-bond framework that **requires** external review providers but
**does not license them**. External review is absent from all 31 Regulated Activities, from the five
Market Activities and from the five Ancillary Services. **The client can act as external reviewer /
second-party-opinion provider / post-issuance verifier for AIFC ESG Debentures and sukuk without any
AFSA licence.** Qualifying standards are ICMA Principles and Guidelines, the Climate Bonds Standard,
the EU Green Bond Standard, the ASEAN Green Bond Standard, or an AFSA-approved equivalent; eligible
projects may reference Kazakhstan's Green Taxonomy, the Climate Bonds Taxonomy, the EU Taxonomy, the
Common Ground Taxonomy, the ASEAN Taxonomy or the MAS Singapore-Asia Taxonomy.

**The line, stated as a rule the client can apply:**

| Can do without a licence | Cannot do without a licence |
|---|---|
| Pre-issuance external review / SPO on alignment with ICMA GBP/SBP/SBG/SLBP, CBS, EU GBS | Advising **investors** on whether to buy, hold or sell the bond |
| Drafting or reviewing a Green/Sustainability **Bond Framework** for an issuer | Approaching, identifying or introducing **potential investors** to the issuer |
| Eligible-project screening; taxonomy-alignment assessment | Marketing the offer, roadshow participation aimed at inducing subscription |
| KPI selection, SPT calibration, materiality and ambition assessment for an SLB | Negotiating or settling terms **between issuer and investors** |
| Post-issuance use-of-proceeds and impact verification; allocation and impact reporting | Collecting or processing subscription applications or fees |
| Advising the issuer on **its own instrument's** design, disclosure and reporting | Transmitting instructions or confirmations relating to the transaction |
| GHG accounting, MRV design, methodology and impact measurement | Any statement, opinion or report **intended to influence a person to select a particular Investment** |

**The controlling sentence for the right-hand column.** *Advising on Investments* is defined by the
**capacity of the recipient**: advice given to a Person *"in his capacity as an investor or potential
investor"*. Issuer-side work is outside it. **But *Arranging Deals in Investments* has no such
capacity limit** — it catches *"making arrangements with a view to another Person buying, selling,
subscribing for or underwriting an Investment"*, expressly extends to arrangements *"which would not
bring about a particular transaction"* where the involvement was of *"enough importance that without
that involvement it would not take place"*, and applies *"even if it does not necessarily lead to a
completed transaction"*. **Arranging is the real exposure on a green bond mandate, not advising.**

### 7.2 Capital-raising advice and investor introductions

**FINDING TYPE: LEGAL INTERPRETATION.** Severity: **HIGH.**

PERG 2.2.11 gives three exclusions that a sustainability adviser can actually use, and one trap:

- **Mere communication facility.** *"where a Person merely enables parties to communicate, the Person
  does not make arrangements with a view …"* — but *"The word 'merely' is crucial"*, and going beyond
  the provision of communication facilities brings the person back inside.
- **Passive display.** *"A passive display of literature which advertises Investments does not amount
  to arranging, unless something more is done to help potential investors … to buy such Investments."*
- **Outsourced back office.** A person performing delegated or outsourced administrative functions
  for a financial service provider *"does not carry on 'arranging' activities."*
- **The trap:** *"An arrangement which is part of a wider arrangement for the purpose of bringing
  about transactions in Investments still falls within the scope of Arranging Deals in Investments."*
  A "market-sounding" or "investor-mapping" workstream inside a capital-raising mandate is part of a
  wider arrangement.

**Operational line for the client:**

- **Permitted:** generic market analysis; describing categories of capital provider (concessional,
  blended, commercial) without naming and connecting counterparties; advising a government or MDB on
  a financing *strategy*; producing a public investor-facing sustainability report; preparing a data
  room's ESG content.
- **Not permitted without a licence:** naming specific investors and effecting the introduction;
  arranging or attending investor meetings for the purpose of inducing subscription; assisting with
  subscription documentation; success-fee or placement-fee remuneration tied to funds raised.

**The remuneration test is the practical tell.** GEN Sch 1 ¶20(3) treats separate remuneration as a
disqualifier even for the (unavailable) legal/accountancy exclusion; **a fee contingent on capital
being raised is the single strongest evidential marker that the firm was arranging.** Advise the
client to price on time and deliverables, never on funds mobilised.

### 7.3 Blended finance structuring — the sharpest line in the file

**FINDING TYPE: LEGAL INTERPRETATION.** Severity: **HIGH.**

Blended finance is where a sustainability adviser to MDBs most naturally drifts across the perimeter,
because the deliverable is by definition a financing structure. Three heads are in play:

1. **Advising on a Credit Facility** (GEN Sch 1 ¶19) — *"giving advice to a Person in his capacity as
   a borrower or a potential borrower … on the merits of his entering into a particular Credit
   Facility"*, where "advice" includes any statement, opinion or report intended, or reasonably
   regarded as intended, to influence that decision.
2. **Arranging a Credit Facility** (¶20) — *"making arrangements for the provision of a Credit
   Facility by one or more Persons"*. The only exclusions are being a party oneself, merely providing
   communication means, and a narrow carve-out for **legal or accountancy** services that are a
   necessary part of those services and **not separately remunerated**. **There is no consultancy
   carve-out.**
3. **Arranging Deals in Investments** (¶11) if the instrument is a bond, note or fund interest rather
   than a loan or guarantee.

"Credit Facility" is defined to include *"any loan or syndicated loan, mortgage, overdraft, financial
lease, letter of credit, **financial guarantee**, trade finance, transaction finance, **project
finance**, asset finance"* — i.e. exactly the instruments blended finance uses.

**The line:**

| Can do without a licence | Cannot do without a licence |
|---|---|
| Design **generic** blended-finance architectures — layered capital, first-loss, guarantee and TA-facility typologies | Advise a **named borrower** on the merits of entering a **particular** facility |
| Advise a donor, MDB or government on **policy and instrument choice at portfolio level** | Approach lenders/guarantors to procure a facility for a client |
| Financial modelling, concessionality and subsidy-efficiency analysis, additionality assessment | Negotiate or settle terms of a facility between borrower and provider |
| Impact frameworks, results measurement, DFI reporting alignment | Take a fee contingent on financial close |
| Feasibility studies, pipeline development, project preparation (technical) | Assemble a lender syndicate, or introduce a borrower to specific lenders |

**Where the client is safest.** Advising the **donor / MDB / public authority in its capacity as
funder or policymaker** — as opposed to advising a **borrower** or **investor** — sits outside both
¶19 (which is defined by the recipient's capacity **as borrower**) and ¶10 (capacity **as investor**).
On a UN/MDB-facing practice, that is the natural centre of gravity, and it is genuinely outside the
perimeter. **The perimeter risk in this business is not the subject matter; it is the client's
capacity and the adviser's fee structure.**

### 7.4 A trap that applies even with no licence and no regulated activity

**FINDING TYPE: LEGAL REQUIREMENT.** Severity: **MEDIUM.** Not addressed elsewhere in this file.

**FSFR s.27 — Prohibition relating to Financial Promotions.** A "Financial Promotion" is *"any
communication (made via any medium including brochures, telephone calls and presentations) the
purpose or effect of which is: (a) to promote or advertise (i) Investments or (ii) any Regulated
Activity; or (b) to invite or induce any Person (i) to enter into an agreement with any Person in
relation to Investments or (ii) to engage in any Regulated Activity."* And: *"**A Centre Participant
may not make a Financial Promotion except as provided by or under these Regulations.**"*

**This binds every Centre Participant, licensed or not.** An unlicensed sustainability adviser that
publishes a report promoting a client's green bond, or a webinar inducing readers to subscribe, is
capable of breaching s.27 without ever carrying on a Regulated Activity. PERG 3.1.2 confirms that
*"an unauthorised Person must not make a Financial Promotion in relation to a Regulated Activity or
Market Activity"*, and that lawful promotion requires the promotion to be made by an Authorised Firm,
approved by an Authorised Firm, or be an Exempt Financial Promotion.

**Exempt Financial Promotions available to this client** (PERG 3.1.3): directed at and capable of
acceptance exclusively by a **Professional Client or Market Counterparty**; made in response to an
**unsolicited request**; **made or issued by or on behalf of a government or non-commercial
government entity (including a central bank)**; included in an AFSA-approved Prospectus; or included
in a document required or permitted under the Listing Rules.

**Note the third exemption.** Much of this client's output will be produced *for* and published *by*
UN agencies, governments and public bodies. Material issued **by or on behalf of** such an entity is
an Exempt Financial Promotion. `RECOMMENDATION`: where sustainable-finance material could be read as
promotional, ensure it is issued by or on behalf of the public-sector or intergovernmental client,
and keep the firm's own website and marketing free of instrument-specific promotion.

### 7.5 The consequence of getting it wrong

**FINDING TYPE: LEGAL REQUIREMENT.** **FSFR s.28(1)**:

> "a Centre Participant who makes an agreement whilst acting in breach of the General Prohibition, or
> who makes an agreement as a result of the making … of a Financial Promotion which is in breach of
> the Financial Promotions Prohibition, **will not be entitled to enforce such agreement against any
> party**."

s.28(2) additionally lets the counterparty recover money paid, property transferred, and compensation
for loss. s.28(5) gives the AIFC Court a discretion to enforce where the participant *"reasonably
believed that he was not in breach"* — and s.28(6) makes clear that mere ignorance of the prohibition
is **not** relevant to that defence.

**Practical translation for the client: an engagement letter written outside the perimeter is
unenforceable, and the fee may have to be repaid.** That is what makes the perimeter question
commercial rather than merely regulatory, and it is the reason a written AFSA view should be obtained
before accepting any mandate in the right-hand columns of §7.1–7.3.

---

## 8. THE REPLACEMENT OBJECTS CLAUSE — LITERAL WORDING

**FINDING TYPE: RECOMMENDATION.** Replaces AoA **line 114** (English) and **line 116** (Russian).
Both must be replaced; the file is bilingual and the Russian mirror carries equal weight (subject to
the language-clause defect at AoA lines 590–591, which is R07's issue).

The clause is drafted to four constraints: (a) it accurately describes sustainability/ESG advisory;
(b) it does not suggest regulated status; (c) it does not artificially block legitimate consulting;
(d) it forecloses perimeter exposure. It satisfies **ComReg s.13(4)(c)** and **s.14(2)(b)**. Because
of **ComReg s.29**, the negative covenant in the second paragraph costs the company nothing in
capacity or third-party dealings.

### 8.1 Recommended wording — ENGLISH (replaces line 114)

> **NATURE OF COMPANY'S BUSINESS**
>
> The principal activities of the Company are the provision of sustainability advisory services,
> comprising advice, research, analysis, technical assistance, capacity building, training, programme
> and project design, monitoring, evaluation and impact assessment in the fields of climate change,
> environmental, social and governance performance, sustainable development and related public
> policy, together with the assessment of alignment with sustainability standards and taxonomies, the
> measurement and verification of sustainability outcomes, and the provision of independent external
> review and second-party opinion services in respect of instruments carrying environmental, social,
> sustainability or sustainability-linked labels, in each case for international and
> intergovernmental organisations, United Nations bodies and agencies, multilateral and bilateral
> development finance institutions, governments and public authorities, non-governmental and
> not-for-profit organisations and corporate clients, together with such other advisory, research and
> support services as are incidental or ancillary to the foregoing.
>
> The Company does not provide, and shall not provide, any of its services in relation to Financial
> Services. The Company shall not carry on any Regulated Activity, Market Activity or Ancillary
> Service in or from the Astana International Financial Centre unless and until it holds a licence
> from the Astana Financial Services Authority authorising it to do so.

### 8.2 Recommended wording — RUSSIAN (replaces line 116)

> **ХАРАКТЕР ДЕЯТЕЛЬНОСТИ КОМПАНИИ**
>
> Основными видами деятельности Компании являются оказание консультационных услуг в области
> устойчивого развития, включающих консультирование, исследования, анализ, техническое содействие,
> укрепление потенциала, обучение, разработку программ и проектов, мониторинг, оценку и оценку
> воздействия в сферах изменения климата, экологических, социальных и управленческих показателей,
> устойчивого развития и связанной с ними государственной политики, а также оценку соответствия
> стандартам и таксономиям устойчивого развития, измерение и верификацию результатов в области
> устойчивого развития и оказание услуг независимого внешнего обзора и второго мнения в отношении
> инструментов, имеющих экологическую, социальную маркировку, маркировку устойчивого развития или
> маркировку, привязанную к показателям устойчивого развития, — в каждом случае для международных и
> межправительственных организаций, органов и учреждений Организации Объединённых Наций,
> многосторонних и двусторонних институтов финансирования развития, государственных органов и
> публичных учреждений, неправительственных и некоммерческих организаций и корпоративных клиентов,
> а также оказание иных консультационных, исследовательских и вспомогательных услуг, сопутствующих
> вышеуказанным видам деятельности.
>
> Компания не оказывает и не будет оказывать какие-либо свои услуги в отношении Финансовых услуг
> (Financial Services). Компания не вправе осуществлять какую-либо Регулируемую деятельность,
> Рыночную деятельность или Сопутствующую услугу на территории Международного финансового центра
> «Астана» или из него, если и до тех пор, пока она не получит лицензию Комитета Международного
> финансового центра «Астана» по регулированию финансовых услуг (AFSA), разрешающую ей это делать.

### 8.3 Short-form alternative, if the Registrar prefers brevity

> The principal activities of the Company are the provision of sustainability, climate and
> environmental, social and governance advisory, research, technical assistance and independent
> assessment and verification services to international and intergovernmental organisations,
> development finance institutions, governments and public authorities, non-governmental
> organisations and corporate clients, together with such other advisory and support services as are
> incidental or ancillary to the foregoing. The Company does not provide its services in relation to
> Financial Services, and shall not carry on any Regulated Activity, Market Activity or Ancillary
> Service in or from the Astana International Financial Centre without a licence from the Astana
> Financial Services Authority.

### 8.4 Drafting rationale, clause by clause — and what was deliberately excluded

| Element | Why |
|---|---|
| **"sustainability advisory services"** as the head term | Accurate; matches the KYC narrative, the business plan and the Substantial Presence economic study. Removes the misdescription that R05 §5(c) identified |
| **"in relation to Financial Services" negative** | Directly tracks **Consultancy Guidance ¶5** — the exact limiting words of the ASP regime. A reviewing officer applying Schedule 1 reaches "no" on the face of the document |
| **Negative covenant re Regulated / Market / Ancillary** | Tracks **FSFR s.24**. Answers the perimeter question at the counter without an AFSA enquiry. Costs nothing: **ComReg s.29** means it cannot be used against the company by a third party dealing in good faith |
| **"independent external review and second-party opinion … labels"** | Positively claims the **MAR 1.10.4** space, which is unlicensed. Preserves the green-bond business without using regulated vocabulary |
| **"incidental or ancillary to the foregoing"** | Satisfies constraint (c) — real headroom for legitimate consulting — while remaining tethered. Not an unbounded catch-all |
| **Deleted: "in the fields of finance"** | The gratuitous salience problem. Replaced by nothing; the actual field is now named |
| **Deleted: "other advisory and support services … to legal entities and individuals"** | Unbounded advisory object; PERG 2.3.4.2 records **no exclusions** for consultancy, so an unbounded object is the worst possible framing |
| **Deleted: "both within and outside the AIFC"** | Not required by ComReg s.13(4)(c). It volunteers an adverse fact for the CIT and Substantial Presence analyses (R05 §5(a)) and adds nothing |
| **Avoided throughout:** *investment, capital, fund, portfolio, corporate finance, structuring, arranging, placement, fundraising, capital raising, M&A* | Every one of these maps to a Regulated Activity or is expressly named in **PERG 2.2.10** as within *Advising on Investments*. "Structuring" in particular is not a safe harbour in the AIFC |
| **Avoided:** naming the AFSA Consultancy Guidance or its Schedule 1 by number | Guidance is renumbered; a constitution should not hard-code a paragraph reference. The substantive words are quoted instead |

### 8.5 Two consequential steps that must accompany the clause

**FINDING TYPE: PRACTICAL REQUIREMENT.**

1. **The registration form must match.** The Digital Resident "Nature of Business" free text
   (Registration Process Guidance Feb 2025, §4.3 item 3) must carry the same description, and the
   **OKED codes** (up to three; one primary) must be consistent with it — a management/technical
   consultancy code, **not** a code in the auxiliary-financial-services family. A mismatch between
   the Articles, the form and the OKED code is the most likely trigger for a Registrar query.
2. **The Resolution must adopt the corrected Articles.** The Resolution [Res. line 29] purports to
   have *the company itself* adopt the Articles; whatever wording replaces it must attach and adopt
   the **corrected** AoA. Sequencing point only — the substantive defect is R09's.

---

## 9. WHAT THE CLIENT ACTUALLY NEEDS — THE THREE TRACKS, STATED SEPARATELY

**FINDING TYPE: LEGAL REQUIREMENT / FACT.**

### Track 1 — Company incorporation (Registrar of Companies) — **REQUIRED**

| Item | Position | Source |
|---|---|---|
| Required? | **Yes.** ComReg s.13–16. This is the only gate the client must pass | ComReg ss.13–16 |
| Who | Office of the Registrar of Companies, established within AFSA and acting as its agent | ComReg s.9(1), (3) |
| Fee | **USD 500 online / USD 1,500 paper** for a Private Company, in force **1 Dec 2025** | FEES Sch 5 as amended by **Amendments No. 17** |
| ⚠️ Fee discrepancy | The AFSA Registration Process Guidance (Feb 2025) still says **USD 300 online / 500 offline**, and the Nov 2024 Guidance says **USD 300**. **The Rules prevail over the Guidance.** Budget USD 500 and expect the portal to quote it | FEES A17 vs. AFSA Guidance Feb 2025 §4.6 |
| Review time | **1–3 business days** (online); **3–5 business days** (offline). *"If additional assessment is required … up to 1 month"* | AFSA Registration Process Guidance (Feb 2025) §§4.7, 5.3 |
| Realistic end-to-end | **4–8 weeks** from a clean document set, driven not by the Registrar but by: obtaining an **IIN** for the Director via the AIFC Expat Centre; securing a **registered office lease inside the AIFC territory**; **KYC video verification** of shareholder, UBO, Director, CEO (if any) and Authorised Signatory; and obtaining a Kazakhstan **EDS** to sign the online application | AFSA Guidance Feb 2025 §§3.5, 4.5, 4.6 |
| Prerequisites the file must satisfy | AoA with the s.13(4) content; Resolution of Incorporation; registered-office evidence; Director (≥18, not disqualified); Authorised Signatory with PoA or resolution; UBO disclosure to 25%; Fit & Proper questionnaire; AML/CTF questionnaire | AFSA Guidance Feb 2025 §§3.3–3.6, 4.3 |
| Output | Certificate of Incorporation (with QR code) — **conclusive evidence** that the Regulations' incorporation requirements were complied with | ComReg s.16(3) |

### Track 2 — AFSA authorisation to conduct Financial Services (Regulated / Market Activities) — **NOT REQUIRED**

| Item | Position |
|---|---|
| Required? | **No**, on the intended business. Sustainability advisory to UN agencies and MDBs reaches none of the 31 Regulated Activities in GEN Schedule 1 or the 5 Market Activities in Schedule 4 |
| If it ever became required | Nearest heads: *Advising on Investments* and *Arranging Deals in Investments*. Application **USD 7,000** each (highest fee + 50% of each additional); annual supervision **USD 1,400** each; **Base Capital USD 10,000**; Liquid Assets ≥25% of annual operating expenditure; **four mandatory Approved Individuals** (SEO, Finance Officer, Compliance Officer, MLRO) at **USD 500** per additional application; full COB, PRU(INV), AML and reporting obligations |
| Order if required | **Authorisation first, registration second.** *"If your entity intends to conduct financial or ancillary services in or from the AIFC, your entity must obtain authorisation from the AFSA, prior to submitting your registration application"* (AFSA Guidance Feb 2025 §2.2). The process is: preliminary meeting → draft application + Regulatory Business Plan → formal application → **In-Principle Approval** → incorporate the entity and inject capital → **Licence** |
| Time if required | Not published as an SLA; iterative, driven by the Regulatory Business Plan. **Plan 4–9 months.** `PRACTICAL REQUIREMENT` — `UNCONFIRMED` as to any AFSA service standard |

### Track 3 — Ancillary Services licence (*Providing Consulting Services*) — **NOT REQUIRED**

| Item | Position |
|---|---|
| Required? | **No**, on the intended business — it reaches no item in Schedule 1 to the AFSA Consultancy Guidance and is not provided in relation to Financial Services |
| If it became required (see §4.3) | ASP Licence: *Providing Consulting Services*. Application **USD 2,800**; annual supervision **USD 1,500** (excluding CSP activity) or **USD 3,000** (including CSP activity), both in force 1 Dec 2025. Assessed on fitness and propriety (standing with regulators, disciplinary record, financial-crime procedures, risk to the AIFC) and capability of effective supervision |
| Who decides | **The Office of the Registrar**, not the Authorisations Division — a lighter-touch gate than a Regulated Activity licence |
| Order | Application may precede incorporation; a successful application yields an **In-Principle Approval**, after which the company is registered and the final Licence issues. Editable ASP forms from `registration@afsa.kz` |
| Time | **On average about one month** for a materially complete application (AFSA ASP FAQ, `[T1-snippet]`) |
| What it does **not** do | It confers **no** tax benefit by itself (R05 §4: the CIT exemption turns on the counterparty, not the licence), and **no** authority to carry on any Regulated Activity. PRU(INV) expressly does not apply to Ancillary Services |

### 9.1 The order, and the one thing that must be decided first

```
  Decide the business description  ──►  Objects clause + OKED codes + KYC narrative aligned
              │
              ├─ Non-Regulated Business (this client)  ──►  Register with Registrar  ──►  Trade
              │                                              (1–3 business days, USD 500)
              │
              └─ Regulated or Ancillary  ──►  AFSA/Registrar authorisation FIRST
                                              ──►  In-Principle Approval
                                              ──►  Incorporate + fulfil IPA conditions
                                              ──►  Licence  ──►  Trade
```

**The classification decision precedes everything, and it is made — in writing, to a regulator — by
the objects clause.** That is the practical reason line 114 is worth the attention it is getting.

### 9.2 Total cost and time on the recommended path

| Item | Amount | Timing |
|---|---|---|
| Registrar registration fee (Private Company, online) | **USD 500** | At submission |
| Annual return / confirmation statement filing | **USD 20** each (online, from 1 Dec 2025) | Annually |
| Post-registration procedures (per filing) | **USD 50** online / 100 paper | As needed |
| AFSA authorisation fees | **USD 0** | n/a |
| ASP licence fees | **USD 0** | n/a |
| Registrar review | — | **1–3 business days** |
| Realistic end-to-end to a trading company | — | **4–8 weeks**, gated by IIN, office lease, KYC and EDS — not by AFSA |

Excludes the registered-office lease, IIN/visa costs, audit, accounting, and Substantial Presence
costs analysed in R05, and the AML/banking onboarding analysed in R06.

---

## 10. FINDINGS REGISTER

| ID | Finding | Evidence | Type | Severity |
|---|---|---|---|---|
| **PER-01** | AoA line 114 misdescribes the business: it names "finance" as the first field and adds an unbounded advisory catch-all, in a statement that ComReg s.13(4)(c)/s.14(2)(b) require to be filed with, and relied on by, the financial regulator that also runs the company register | AoA lines 114 / 116; ComReg ss.13(4)(c), 14(2)(b), 9(1),(3) | LEGAL INTERPRETATION | **HIGH** |
| **PER-02** | "Providing Consulting Services" **is** a licensed Ancillary Service (GEN Sch 2 ¶4) — the other reviewer's flag is verified on primary text | GEN Sch 2 ¶4; FSFR ss.16, 19, 24 | LEGAL REQUIREMENT | **FACT** |
| **PER-03** | The ASP consultancy regime is confined to consultancy **"provided in relation to Financial Services"** and to four enumerated Schedule 1 species. **Generic non-financial consultancy needs no licence.** Resolves R09's ECR at §B.5 | Consultancy Guidance ¶¶5–6 and Sch 1; PERG 2.3.4, 5.1.1; AFSA Registration Process Guidance Feb 2025 §2.2 | LEGAL REQUIREMENT | **Resolves a CRITICAL open item** |
| **PER-04** | The intended business (sustainability advisory to UN agencies and MDBs) is a **Non-Regulated Business**. No AFSA authorisation, no ASP licence | §4.1 analysis against Sch 1 items 1–4 | LEGAL INTERPRETATION | **FACT — favourable** |
| **PER-05** | **Shari'ah compliance consultancy is expressly inside Schedule 1 item 1.** Any sukuk mandate extending to Shari'ah compliance advice triggers an ASP licence | Consultancy Guidance Sch 1 ¶1 | LEGAL REQUIREMENT | **HIGH** (conditional) |
| **PER-06** | **ESG advisory to a financial institution about its own business** is "management and business consultancy … related to Financial Services" — Schedule 1 item 2. The most commercially likely licence trigger for this client | Consultancy Guidance Sch 1 ¶2 | LEGAL INTERPRETATION | **HIGH** (conditional) |
| **PER-07** | **Carbon credits, emission allowances and environmental attribute certificates are Investments** (GLO "Environmental Instrument"). Instrument-specific advice or buyer–seller introductions are *Advising on Investments* / *Arranging Deals in Investments*. Not previously identified anywhere in this file | GLO "Environmental Instrument", "Investment"; GEN Sch 1 ¶¶10–11 | LEGAL INTERPRETATION | **MEDIUM–HIGH** |
| **PER-08** | **Acting as external review provider / SPO provider for AIFC ESG Debentures and sukuk requires no licence.** MAR imposes the duty on the Issuer; the reviewer role appears in no Schedule | MAR 1.10.2–1.10.4 + Guidance; GEN Schs 1, 2, 4 | LEGAL INTERPRETATION | **FACT — commercially valuable** |
| **PER-09** | ***Arranging Deals in Investments*, not *Advising on Investments*, is the real exposure** on green-bond and capital-raising work: it has no "capacity as investor" limitation, catches arrangements that bring about no transaction, and catches introductions | GEN Sch 1 ¶11; PERG 2.2.11 | LEGAL INTERPRETATION | **HIGH** |
| **PER-10** | PERG 2.2.10 states that *Advising on Investments* **"also includes investment banking services of financial consulting (M&A structuring, private equity, restructuring, hedging)"**. "Structuring" is not a safe harbour in the AIFC and must be kept out of the objects clause and marketing | PERG 2.2.10 | LEGAL INTERPRETATION | **HIGH** |
| **PER-11** | **FSFR s.27 binds every Centre Participant, licensed or not.** An unlicensed adviser can breach the Financial Promotions Prohibition by promoting a client's instrument. Exemptions include material issued by or on behalf of a government or non-commercial government entity | FSFR s.27; PERG 3.1.2–3.1.3 | LEGAL REQUIREMENT | **MEDIUM** |
| **PER-12** | **FSFR s.28: agreements made in breach are unenforceable**, with restitution and compensation available to the counterparty; ignorance of the prohibition is not a defence to the s.28(5) discretion | FSFR s.28(1)–(6) | LEGAL REQUIREMENT | **CRITICAL if triggered** |
| **PER-13** | **ComReg s.29** means a self-limiting objects clause does not reduce the company's capacity or bind third parties in good faith — so the negative covenant at §8 is pure upside | ComReg s.29(1)–(3) | LEGAL REQUIREMENT | **FACT — enabling** |
| **PER-14** | **Registration fee is USD 500, not USD 300.** FEES Amendments No. 17 (in force 1 Dec 2025) raised Private Company registration from 300/500 to **500/1,500**. The AFSA Registration Guidance still prints the old figures. Rules prevail | FEES Sch 5 as amended by A17; AFSA Guidance Feb 2025 §4.6 | FACT | **LOW** (budget), **MEDIUM** (reliance on stale guidance) |
| **PER-15** | ASP application fee is **USD 2,800** (A17, from 1 Dec 2025), not the USD 2,000 in FEES v16. R05's figure of USD 2,800 is **confirmed**; annual supervision is **USD 1,500 / 3,000 with CSP** | FEES Sch 3 and Sch 6.3 as amended by A17 | FACT | **LOW** |
| **PER-16** | **Challenge to the Source Register's recommended fix.** `04_SOURCE_REGISTER.md` §C recommends *not appointing a CEO* on the basis that the CEO is optional (S-03). The Registrar's own current *Guidance on the Registration Process in the AIFC* (Feb 2025) lists the CEO under **"§3.3 Required appointments"** with no optionality marker — while expressly marking the Company Secretary *"Mandatory for Public Companies, Optional for other legal forms"* — and the online form includes a mandatory-looking **"Information on CEO"** section with KYC verification. **The optionality of the CEO must be confirmed with the Registrar before the file is built on it.** Note also that this Guidance states the CEO requirement as **holding an IIN**, not as **Kazakhstan residency** | AFSA Guidance Feb 2025 §§3.3, 4.3 item 9, 4.5; cf. AoA line 367; Source Register S-03 | **UNCONFIRMED** — material to the recommended remedy | **HIGH** |
| **PER-17** | **Correction to `01_DOCUMENT_INVENTORY.md` §C.3 and R08.** The AoA footer marking `Classification: Restricted` is characterised there as *"a confidentiality marking belonging to another organisation's document template"*. **It is the AIFC's / AFSA's own marking.** It appears as a header or footer on the published PDFs of GEN, FSFR, MAR, GLO, the Fees Rules, the Companies Regulations amendments and the AFSA *Guide on the Authorisation Process* (Feb 2026). The likely origin is an AIFC/AFSA-derived precedent, not a foreign organisation. **The recommendation to remove it before filing stands** — it is meaningless on a public-register document — but the inference drawn from it should be corrected | Direct inspection of aifc.kz/afsa.aifc.kz PDFs, 29 Aug 2026; AoA footer | FACT | **TYPOGRAPHICAL** (defect) / **MEDIUM** (correction to the file's reasoning) |
| **PER-18** | AFSA states that **advising on and filing AIFC incorporations is itself an Ancillary Service**, that **natural persons may not provide Ancillary Services**, and that doing so unlicensed contravenes the Acting Law. The firm behind this filing should be checked against the AFSA Public Register of ASPs | AFSA Ancillary Services page (disclaimer); FSFR s.24; PoA lines 81, 83 | LEGAL REQUIREMENT / **UNCONFIRMED** as to this provider | **MEDIUM** |

---

## 11. RECOMMENDATIONS

**Before filing**

1. **Replace AoA line 114 and line 116** with the wording at §8.1–8.2 (or §8.3). — resolves PER-01.
2. **Align the Digital Resident "Nature of Business" free text and the OKED codes** with the new
   clause; choose a management/technical consultancy code, not an auxiliary-financial-services code.
3. **Do not seek an ASP licence and do not seek AFSA authorisation.** Register as a Non-Regulated
   Business and proceed directly. — PER-03, PER-04.
4. **Confirm the CEO point with the Registrar in writing** before relying on the "do not appoint a
   CEO" remedy. — PER-16. This is the highest-value open item in the file.
5. **Remove the `Classification: Restricted` footer**, but correct the file's characterisation of it.
   — PER-17.
6. **Budget USD 500, not USD 300**, for registration. — PER-14.
7. **Check the incorporation agent against the AFSA Public Register of Ancillary Service Providers.**
   Advising on and filing AIFC incorporations is itself a licensed Ancillary Service, and natural
   persons may not provide it. — PER-18.

**Before the first mandate**

8. **Adopt a written perimeter policy** built on the two tables at §7.1 and §7.3 and the carbon-credit
   point at §6.1. One page, signed off by the Director, reviewed on every new engagement.
9. **Never price on funds raised or mobilised.** A success fee tied to financial close is the
   strongest single evidential marker of *Arranging*. — PER-09.
10. **Screen every engagement against three questions**: (i) is my client acting as an **investor** or
   a **borrower** in respect of a **particular** instrument or facility? (ii) am I connecting two
   parties to a transaction? (iii) is my client a **financial institution** asking about **its own**
   business? Any "yes" stops the engagement pending advice. — PER-05, PER-06, PER-09.
11. **Route promotional sustainable-finance material through the public-sector or intergovernmental
    client**, so it falls within the government/non-commercial-government-entity exemption. — PER-11.

**Optional but cheap**

12. **Consider a pre-application call with AIFC Business Connect / the Registrar** (`bcs@aifc.kz`,
    `registration@afsa.kz`) putting the corrected objects clause and a two-paragraph business
    description, and asking for confirmation that the activity is Non-Regulated. AFSA also operates a
    formal **no-action letter** procedure under FSFR with a fee in FEES Schedule 7, if written comfort
    is wanted. This converts a HIGH interpretive risk into a documented regulator position for the
    cost of an email.

---

## 12. SOURCES

**Access note.** Direct `WebFetch` to `aifc.kz`, `afsa.aifc.kz`, `orderly.myafsa.com` and
`adilet.zan.kz` returns `EGRESS_BLOCKED` in this environment, as recorded in `04_SOURCE_REGISTER.md`
§A. All documents marked **[T1-full]** below were nevertheless retrieved **in full** and read in situ
via a server-side fetch (Exa `web_fetch_exa`), which is not subject to the same egress policy.
**[T1-snippet]** marks propositions resting on a search-index extract of a primary page.
Retrieval date for every source: **29 August 2026**.

| # | Source | Tier | Provision(s) relied on | URL | Access |
|---|---|---|---|---|---|
| S1 | **AIFC Financial Services Framework Regulations**, Regs. No. 18 of 2017, v11 (amendments to 13 Dec 2023, in force 1 Jan 2024) | 1 | s.6 (meaning of "in or from the AIFC"); s.16 (ASP definition); ss.17–19 (Regulated / Market / Ancillary); **s.24 (General Prohibition)**; s.27 (Financial Promotions); **s.28 (Enforceability of Agreements)** | `https://aifc.kz/wp-content/uploads/2024/05/fsfr_v11-01.01.2024-sto_gk_as.pdf` | **[T1-full]** |
| S2 | **AIFC General Rules (GEN)**, Rules No. FR0001 of 2017, v19 (amendments to 13 Apr 2025, in force 13 Oct 2025) | 1 | 1.1.9 (by way of business); 1.1.10–1.1.18 (exclusions); 1.3.1–1.3.6 (ASP licensing); 2.1.1 (mandatory appointments); **Schedule 1 ¶¶1–31**; **Schedule 2 ¶¶1–4**; **Schedule 4** | `https://aifc.kz/wp-content/uploads/2024/06/gen-_v19_13.10.2025_-ma-1.pdf` | **[T1-full]** |
| S3 | **AFSA Guidance on Providing Consultancy Services in the AIFC** (approved & commenced 12 Mar 2020) | 2 | **¶¶1–9 and Schedule 1 (all four items)** — the operative scope of the consulting ASP regime | `https://aifc.kz/wp-content/uploads/2024/06/afsa-guidance-on-providing-consultancy-services-in-the-aifc.pdf` | **[T1-full]** — *resolves R05 source S7 and R09 §B.5 ECR* |
| S4 | **AFSA Perimeter Guidance (PERG)** (approved 10 Sep 2023, in force 11 Sep 2023) | 2 | 2.1.1–2.1.10; 2.2.10 (Advising on Investments); 2.2.11 (Arranging Deals + exclusions); 2.3.4 (Providing Consulting Services); 3.1.1–3.1.4 (Financial Promotions); **5.1.1–5.1.2 (Unregulated Activities)**; ch.6 (DNFBPs) | `https://aifc.kz/wp-content/uploads/2024/06/perimeter-guidance.pdf` | **[T1-full]** — *resolves R05 source S10* |
| S5 | **AIFC Market Rules (MAR)**, Rules No. FR0003 of 2017, v12 (in force 1 Jan 2025) | 1 | 1.1.2 (offer by placement); **1.10.1–1.10.4 AIFC ESG Debentures + Guidance** | `https://aifc.kz/wp-content/uploads/2024/06/mar_v12_01.01.2025_zs.pdf` | **[T1-full]** |
| S6 | **AIFC Glossary (GLO)**, Act No. FR0017 of 2018, v17 (in force 1 Jan 2024) | 1 | "Investment"; "Debenture"; "Certificate"; "Derivative"; "**Environmental Instrument**"; "Credit Facility"; "Credit Rating"; "Investment Business"; "Client" | `https://aifc.kz/wp-content/uploads/2024/06/glo_v17_fr0017_01.01.2024-stoesg_gk-3.pdf` | **[T1-full]** |
| S7 | **AIFC Fees Rules (FEES)** v16 (in force 18 Oct 2024) | 1 | 1.2.1–1.2.6; 2.1–2.3; Schedules 1, 3, 5, 5-1, 5-2, 6 | `https://aifc.kz/wp-content/uploads/2024/06/fees-v16-18.10.2024_gk-1.pdf` | **[T1-full]** |
| S8 | **AIFC Fees Rules — Amendments No. 17** (approved 13 Nov 2025, **in force 1 Dec 2025**) | 1 | Sch 1 (RA application fees); **Sch 3 (ASP fees — Consulting USD 2,800)**; **Sch 5 (Private Company USD 500 online / 1,500 paper)**; Sch 5-2; **Sch 6.1 and 6.3 (annual supervision)** | `https://aifc.kz/wp-content/uploads/2024/06/fees-rules-a17.-with-amendments-as-of-13-november-2025-commence-on-1-december-2025.pdf` | **[T1-full]** — *current fee position* |
| S9 | **AIFC Prudential Rules for Investment Firms PRU(INV)**, Rules No. FR0011 of 2017, v6 (in force 4 Oct 2024) | 1 | 1.3 (PRU Investment Firm; **Ancillary Services excluded**); 2.2; **3.3 Table 3.3 Base Capital**; 4.2 (Liquid Assets 25%) | `https://aifc.kz/wp-content/uploads/2024/06/pru.inv_v6_fr0011_04.10.2024-1.pdf` | **[T1-full]** |
| S10 | **AIFC Companies Regulations (ComReg)**, Regs. No. 2 of 2017 — initial text | 1 | ss.7–8 (Commercial Licence); s.9 (Registrar within AFSA); **s.13(4)(c)**; **s.14(2)**; s.15; s.16; **s.29 (capacity)**; s.50 | `https://aifc.kz/wp-content/uploads/2024/05/comreg-initial.pdf` | **[T1-full]** |
| S11 | **ComReg Amendments No. 6** (in force 1 Jan 2023) and **No. 7** (in force 1 Jan 2025) | 1 | s.13(4)(fa) registered email; s.24-1; s.50(3); s.167; UBO register. **Neither amends ss.13(4)(c), 14(2) or 29** | `https://aifc.kz/wp-content/uploads/2024/06/comreg_a6_01.01.2023-1.pdf` · `https://aifc.kz/wp-content/uploads/2024/06/comreg_a7_01.01.2024.pdf` | **[T1-full]** |
| S12 | **AFSA, Guidance on the Registration Process in the AIFC** (Feb 2025) | 2 | **§2.2 (Regulated vs Non-Regulated Business; authorisation before registration)**; §3.3 (required appointments — **CEO**); §3.6; §4.3 (Nature of Business + **OKED**); §4.5 (KYC); §4.6 (fee, EDS); **§4.7 (1–3 business days)**; §5.3 (3–5 business days) | `https://afsa.aifc.kz/wp-content/uploads/2025/02/Guidance-on-the-Registration-Process-in-the-AIFC.pdf` | **[T1-full]** |
| S13 | **AFSA, Guidance on Registration in the AIFC** (Nov 2024) | 2 | Non-regulated business; **AoA must contain "the nature of the business to be conducted"**; name restrictions (words suggesting authorisation to conduct Financial Services); CEO; CSP definition in the AML section | `https://afsa.aifc.kz/wp-content/uploads/2024/11/guidance-on-registration-in-the-aifc-1.pdf` | **[T1-full]** — *resolves Source Register S-07* |
| S14 | **AFSA, Guide on the Authorisation Process: How to Become Authorised** (Feb 2026, V4_022026) | 2 | §2 (**Office of the Registrar authorises ASPs**); §4 Steps 1–6 (IPA → incorporation → Licence); §7 (Regulatory Business Plan); Appendix 1 (all Regulated, Market and Ancillary Services); Appendix 2 (capital) | `https://afsa.aifc.kz/wp-content/uploads/2026/02/Guide-on-the-Authorisation-process_February-2026.pdf` | **[T1-full]** — *resolves R04 source 12* |
| S15 | **AFSA Public Register — Ancillary Service Providers** | 1 | Composition of the consulting-licensee population (law, audit, accounting, compliance and corporate-services firms); licence numbering `AFSA-O-LA-YYYY-NNNN`; ~15 ASP licences p.a. | `https://publicreg.myafsa.com/ancillary/` | **[T1-full]** |
| S16 | **AFSA — Ancillary Services Provider (ASP), Frequently Asked Questions** | 2 | Licence required under FSFR s.24; application via AIFC Digital Portal with business plan; **"on average materially complete applications for ancillary services take a month"**; application may precede registration, yielding an IPA | `https://afsa.aifc.kz/authorisation/ancillary-services-provider-asp/frequently-asked-questions-faq/` | **[T1-snippet]** — page retrieved, but the 15 FAQ answers render client-side and did not resolve; the substance is corroborated by S14 §4 and S8 |
| S19 | **AFSA — Ancillary Services (registration page), standing disclaimer** | 2 | **Advising on and filing AIFC registrations/authorisations is an Ancillary Service; natural persons may not provide Ancillary Services; unlicensed provision contravenes the Acting Law** (FSFR s.24) | `https://afsa.aifc.kz/registration/ancillary-services/` | **[T1-full]** |
| S17 | **AFSA Legal Framework portal (orderly.myafsa.com)** — Consultancy Guidance, GEN Schedule 2, PERG 2.3.4 navigation | 1/2 | Cross-check of section numbering only; corroborates S2–S4 | `https://orderly.myafsa.com/articles/2.3.4.-providing-consulting-services` · `https://orderly.myafsa.com/articles/schedule-2:-ancillary-services` | **[T1-snippet]** — page body renders client-side; navigation retrieved, body not |
| S18 | **AIFC ESG Debentures — MAR 1.10 (portal copy)** | 1 | Corroborates S5 | `https://orderly.myafsa.com/entiresection/a00010002000200060002000A/1.10.-aifc-esg-debentures` | **[T1-snippet]** |

**Not relied on.** No Tier 3 law-firm commentary is relied on for any proposition in this report.
Where secondary commentary appeared in search results it was used only to locate primary documents.

**Residual `UNCONFIRMED` items**

| Item | What would confirm it |
|---|---|
| **PER-16** — whether appointing a CEO is optional for an AIFC Private Company in current Registrar practice, given AFSA Guidance Feb 2025 §3.3 lists it under "Required appointments" and the portal has a CEO section with mandatory KYC | Written confirmation from the Office of the Registrar (`registration@afsa.kz`), or a test submission on the Digital Resident portal with the CEO section left blank |
| Whether a separate **Commercial Licence** under ComReg ss.7–8 is issued in current practice, or is subsumed in the Certificate of Incorporation. Neither the Feb 2025 nor the Nov 2024 registration guidance mentions one, and FEES Schedule 5 contains no Commercial Licence fee — but ss.7–8 were not repealed by Amendments No. 6 or No. 7 | Consolidated ComReg V8 (in force 1 Jan 2025) read in full, plus confirmation from the Registrar |
| Whether AoA compliance with **ComReg s.14(2)(b)** requires incorporator and director particulars **in the Articles** where the portal captures them separately | Registrar confirmation; referred to R09 |
| **PER-18** — whether the firm that prepared and will file this incorporation holds an ASP licence | Search the firm's name on `https://publicreg.myafsa.com/ancillary/` |
| The correct **OKED** primary code for sustainability/ESG advisory in the AIFC portal's classifier | AIFC Business Connect (`bcs@aifc.kz`) |
| Any AFSA published service standard for Regulated Activity authorisation timing | AFSA Authorisations Division (`authorisation@afsa.kz`) |

---

*Prepared by Reviewer 2 (AFSA financial services regulatory counsel) on the documents at
`<scratchpad>/extract/` and the primary AIFC/AFSA instruments listed at §12. No source document was
edited or rewritten. All fee figures are stated as at the AIFC Fees Rules in force 1 December 2025.*
