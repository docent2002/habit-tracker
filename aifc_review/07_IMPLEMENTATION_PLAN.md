# 07 — IMPLEMENTATION PLAN

**This phase was review only. No source document was modified.** The next phase — implementing
approved corrections and producing the final package — is a separate instruction.

Owner key: **AW** Alexander Wiese · **CSP** AIFC service provider · **CHL** Swiss counsel/notary ·
**KZT** Kazakhstan tax counsel · **REG** AIFC Registrar · **DE** German tax counsel

---

## Phase A — Decisions (nothing else starts until A1 and A2 are answered)

| Order | Action | Document | Responsible | Dependency | Status |
|---|---|---|---|---|---|
| A1 | Obtain Kazakhstan tax view (E2–E4): does advisory to UN/MDBs qualify; VAT place-of-supply under the 2026 Code; negative confirmation on green/ESG | — | KZT | — | OPEN |
| A2 | **Decision D01** — proceed on the market-access rationale, or not | — | AW | A1 | OPEN |
| A3 | Obtain **written Registrar confirmation (E1)**: is a CEO mandatory? | — | CSP → REG | — | OPEN |
| A4 | **Decision D02** — appoint a CEO or not | — | AW | A3 | OPEN |
| A5 | **Decision D03** — Route A (Schedule 5 entire) or Route B (bespoke, clauses deleted) | — | AW | A3, A4 | OPEN |
| A6 | **Decision D04** — scope of the attorneys' powers | — | AW | — | OPEN |
| A7 | **Decision D05** — confirm whether a second Articles version exists | — | CSP | — | OPEN |
| A8 | Confirm the filing agent's own ASP licence (E6); confirm the current fee (E5) | — | CSP | — | OPEN |
| A9 | Commission German personal/CFC advice (E7) | — | DE | A2 | OPEN |

**A2 is the gate. If D01 = do not proceed, stop here.**

## Phase B — Document corrections

| Order | Action | Document | Responsible | Dependency | Status |
|---|---|---|---|---|---|
| B1 | Restate share capital: single currency, round, exactly divisible (e.g. KZT 1,000,000 = 1,000 × KZT 1,000). **Delete the NBK-rate mechanic entirely** | AoA + resolution | CSP | A5 | OPEN |
| B2 | Redraft the objects clause to describe sustainability/ESG advisory. **Do not adopt the "no Financial Services" covenant** | AoA | CSP | A2 | OPEN |
| B3 | Apply Route A or B: either adopt Schedule 5 entire, or delete the IIN/residency limbs and add COR 2.2.2(i) and (r) | AoA | CSP | A5 | OPEN |
| B4 | Fix the language/prevalence clause to a single formulation | AoA | CSP | A5 | OPEN |
| B5 | Remove the `Classification: Restricted` footer; clean orphan TOC anchors; rebuild EN/RU numbering | AoA | CSP | A5 | OPEN |
| B6 | Draft the replacement Swiss instrument: managing-officer resolution + sole-quotaholder ratification; express subscription clause; Doppelvertretung ratification; correct capacity throughout; remove "bye-laws"; coherent single date | Resolution | CHL | A4 | OPEN |
| B7 | Normalise the Latin U+0041 name to Cyrillic across all documents | all | CSP | — | OPEN |
| B8 | Split the PoA into (i) registration PoA from the GmbH and (ii) post-incorporation PoA from the company. Narrow powers per D04; define "the Company"; fix the RU double definition; restore AFSA to the RU list; retain the banking negative covenants verbatim and mirror them for corporate acts; **add a full notarial/execution block**; add a language clause | PoA | CHL + CSP | A6 | OPEN |
| B9 | Rebuild the structure chart: jurisdictions, legal forms, CHE number, the word "UBO", direct/indirect labels, a no-other-shareholders/no-nominee statement, signature and date | PPTX | CSP | — | OPEN |
| B10 | Re-run the EN/RU comparison over every corrected document before execution | all | CSP | B1–B9 | OPEN |

## Phase C — Supporting documents

| Order | Action | Responsible | Dependency | Status |
|---|---|---|---|---|
| C1 | Order the certified Zug register extract **and a certified English translation** | AW / CHL | A2 | IN PROGRESS |
| C2 | Order a certified copy of the Statuten | AW / CHL | A2 | IN PROGRESS |
| C3 | Passport copy (secure channel, watermarked) + proof of residential address | AW | — | OPEN |
| C4 | Signed, dated UBO declaration | AW | B9 | OPEN |
| C5 | Registered office / flexi-desk agreement | CSP | A2 | OPEN |
| C6 | Registered email address | AW | — | OPEN |
| C7 | s.14(5) compliance statement (Route B only) | CSP | A5 | OPEN |
| C8 | Start the **IIN** application via the Expat Centre — needed for bank, EDS and BIN regardless | AW / CSP | A2 | OPEN |

## Phase D — Execution, notarisation, apostille

| Order | Action | Responsible | Dependency | Status |
|---|---|---|---|---|
| D1 | Execute the resolution and PoAs in Zug | AW | B6, B8 | OPEN |
| D2 | Notarise | CHL | D1 | OPEN |
| D3 | Apostille **only** the instruments that need it (notaries, tax committee, banks — not AFSA) | CHL | D2 | OPEN |
| D4 | Certified Russian translations where required for Kazakhstan use | CSP | D3 | OPEN |

> **Do not execute or apostille anything until Phase A and B are complete.** The provider's own
> instruction to hold off on apostilles is correct and should be followed.

## Phase E — AIFC submission

| Order | Action | Responsible | Dependency | Status |
|---|---|---|---|---|
| E1 | Reserve the company name | CSP | A2 | OPEN |
| E2 | Secure the registered office | CSP | C5 | OPEN |
| E3 | File: application form + Articles + adoption instrument + compliance statement + registered email + officer and UBO details + structure chart + Swiss evidence | CSP | all above | OPEN |
| E4 | Pay the fee (confirm the amount first) | CSP | A8 | OPEN |

## Phase F — Registrar responses

| Order | Action | Responsible | Dependency | Status |
|---|---|---|---|---|
| F1 | Respond to queries; execute Registrar-required corrections under the narrowed execution power | CSP | E3 | OPEN |
| F2 | Receive the Certificate of Incorporation | CSP | F1 | OPEN |

## Phase G — Post-incorporation

| Order | Action | Responsible | Dependency | Status |
|---|---|---|---|---|
| G1 | Issue the post-incorporation PoA from the company itself | AW | F2 | OPEN |
| G2 | BIN, tax registration, EDS | CSP | F2, C8 | OPEN |
| G3 | Share certificate; registers of shareholders and directors | CSP | F2 | OPEN |

## Phase H — Banking, tax, operations

| Order | Action | Responsible | Dependency | Status |
|---|---|---|---|---|
| H1 | Open the bank account — **the real timeline bottleneck** | AW / CSP | G1, G2 | OPEN |
| H2 | Intercompany service agreement + transfer-pricing file | KZT / CHL | F2 | OPEN |
| H3 | Substance build-out; monitor place-of-effective-management risk | AW | F2 | OPEN |
| H4 | Separate accounting for any exempt income stream; annual CIT return (due 31 March) | KZT | H2 | OPEN |
| H5 | Scope engagement letters to exclude instrument-specific carbon advice and introductions | AW | F2 | OPEN |

---

## Critical path

**A1 → A2 → A3 → A5 → B1/B3/B6 → C1/C2 → D1–D3 → E3 → F2 → G2 → H1**

The binding constraints are **the Kazakhstan tax view (A1)** and **the Registrar's CEO answer (A3)** —
both external, both startable today, and neither dependent on any drafting. The IIN (C8) should also
start now: it does not gate the filing, but it does gate the bank account.
