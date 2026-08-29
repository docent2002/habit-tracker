# 02 — MASTER ISSUE REGISTER

Review date **2026-08-28**. Severity: **BLOCKER** (do not file) / CRITICAL / HIGH / MEDIUM / LOW /
TYPOGRAPHICAL. Where the Red Team (R10) re-read the primary source, its verdict governs.

Owner key: **AW** Alexander Wiese · **CSP** AIFC service provider · **CHL** Swiss counsel/notary ·
**KZT** Kazakhstan tax counsel · **REG** AIFC Registrar.

## STRUCTURAL — answer before spending further

| ID | Sev | Document | Clause | Issue | Evidence | Legal source | Recommendation | Owner |
|---|---|---|---|---|---|---|---|---|
| STRUCT-001 | **STRUCTURAL** | — | — | The primary motive (tax) is not delivered. Advisory to UN/MDBs fails both exemption limbs; expect 20% CIT + 16% VAT | R05 §1, §4; R10 §2.5 | Const. Statute Art. 6; joint List | Decide whether to proceed on the market-access rationale. Obtain E2–E4 first | AW / KZT |

## BLOCKER — do not file

| ID | Sev | Document | Clause | Issue | Evidence | Legal source | Recommendation | Owner |
|---|---|---|---|---|---|---|---|---|
| FILE-001 | **BLOCKER** | package | — | No application exists: prescribed form, name reservation, registered-office evidence, certified Swiss extract + translation, registered email all absent | R09; R10 P1 | COR 2.1.1, 2.1.3, 2.1.4, 2.4.1; s.24-1, s.13(4)(fa) | Assemble the actual application | CSP |
| CORP-001 | **BLOCKER** | AoA line 128; Res. line 32 | Share capital | Three inconsistent per-share values: 545.5 figures / 545.05 words / 544.50 implied. Aggregate contradicts per-share figure. Allotment below nominal value, and without fixed nominal value, is void | R01 B; R07 A1; R10 §2.1 | s.13(4)(d)–(e); **s.43(1)** | Restate in a single currency, round, exactly divisible. Delete the NBK-rate mechanic | CSP / AW |
| CORP-002 | **BLOCKER** | Res. line 29 | Adoption | No instrument adopts the Articles. "the Company" is defined as the GmbH, so the clause resolves that a non-existent company adopts articles to incorporate the Swiss parent | D03; R10 P3 | s.13(5) | Replace the Resolution entirely | CHL |
| DOC-002 | **CRITICAL→BLOCKER for KZ use** | PoA lines 88–97 | Execution | No notarial block, attestation, capacity statement or date. A private document cannot be apostilled unnotarised | D02; R04 | Hague Convention; KZ notarial practice | Add a full execution and notarial block | CHL |

## CRITICAL

| ID | Sev | Document | Clause | Issue | Evidence | Legal source | Recommendation | Owner |
|---|---|---|---|---|---|---|---|---|
| CORP-003 | CRITICAL | AoA | whole | Route A/B fork unresolved. Package is bespoke (carrying COR 2.2.2 + s.14(5)) yet retains the two Schedule 5 clauses that disqualify the intended officer — the worst combination | R10 §3.2 | s.14(4)–(5); COR 2.2.2 | Choose a route; do not straddle | AW / CSP |
| KZ-001 | CRITICAL | AoA 33, 367; Res. 21 | CEO | Package appoints a CEO the Articles disqualify (KZ residency). Whether a CEO is mandatory is unresolved: Sch. 5 Art. 18.1 disjunctive and CEO absent from the Regulations (R01/R04/S-03) vs AFSA Guidance §3.3 "Required appointments" (R01 f.7, R02 PER-16, R10 §2.3) | R10 §2.3 | COR Sch. 5 Arts. 17, 18; Guidance §3.3 | **Obtain written Registrar confirmation (E1)** before drafting | REG / CSP |
| DOC-001 | CRITICAL (review) | AoA(1).docx | — | Fifth mandated document not supplied; version control over the constitution not established | D05 | — | Confirm whether a second version exists; record approved MD5 | CSP |
| SWISS-002 | CRITICAL | Res. lines 12, 32 | Dates | Certified as adopted 25 Jul 2026 and unmodified, yet fixes capital by an FX rate effective 31 Jul 2026 — six days later. Either the recital or the certification is false | R03; R08 F8-01; R09 | — | Re-date coherently in the replacement instrument | CHL |

## HIGH

| ID | Sev | Document | Clause | Issue | Evidence | Legal source | Recommendation | Owner |
|---|---|---|---|---|---|---|---|---|
| REG-001 | HIGH | AoA line 114 | Objects | "advisory in the fields of finance … within and outside the AIFC": invites a perimeter query, is an adverse admission for tax, and misdescribes the business | R02; R05 §5 | ComReg s.13(4)(c), s.14(2)(b) | Redraft to describe sustainability/ESG advisory. **Do NOT adopt R02's negative covenant** — it would foreclose the exemption route (R10 §3.1) | CSP |
| SWISS-001 | HIGH | Res. throughout | Capacity | Five inconsistent capacities for one signatory; signature block "FOR Wiese Advisory GmbH" forecloses the quotaholder reading; "bye-laws" is offshore terminology; "CEO" is not a Swiss GmbH organ | R03; D03 | CO arts. 804, 805(4), 810, 814 | Replace with Geschäftsführerbeschluss + sole-quotaholder ratification | CHL |
| SWISS-003 | HIGH | Res. | Self-dealing | Doppelvertretung unratified; written form required | R03 | CO arts. 814(4), 718b | Add an express ratification paragraph | CHL |
| SWISS-004 | HIGH | AoA 114 vs CH register | Objects | The parent's registered Swiss Zweck is sustainability/climate advisory; the subsidiary's objects say "finance". The parent's own register entry contradicts it | R10 §3.8 | — | Align the objects clause to the real business | CSP |
| LANG-001 | HIGH | PoA 66–73 RU | Covenants | Russian negative covenants narrower in **five of six** sub-items; RU line 55 drops a limiting phrase, widening authority | R07 B | — | Re-translate; add a language clause | CSP |
| LANG-002 | HIGH | AoA 15.1 RU | Quorum | «при этом» destroys the single-shareholder carve-out, leaving a two-person quorum for a one-shareholder company | R07 A7 | Sch. 5 Art. 15.1 | Correct the Russian | CSP |
| LANG-003 | HIGH | PoA line 8 RU | Principal | «Доверитель» defined twice, the second attaching to Wiese personally — arguably displacing the GmbH as incorporating shareholder | D02; R07 B | — | Redraft the Russian preamble | CSP |
| CORP-004 | HIGH | AoA | Missing | Bespoke Articles omit COR 2.2.2(i) maximum number of Directors and (r) termination/liquidation | R01 C | COR 2.2.2 | Add if Route B | CSP |
| FILE-002 | HIGH | package | — | s.14(5) compliance statement absent. (Sequencing objection falls: it *accompanies* the Articles, per Guidance §3.6) | R01 A; R10 §2.2 | s.14(5) | File with the application if Route B | CSP |
| REG-002 | HIGH | business model | — | Carbon credits/allowances/RECs are **Investments**; instrument-specific carbon advice is a Regulated Activity. Likeliest accidental breach | R02 PER-07; R10 §2.6 | GLO "Environmental Instrument" | Scope engagement letters to exclude instrument-specific advice | AW |
| REG-003 | HIGH | business model | — | *Arranging* has no "capacity as investor" limit and catches introductions producing no transaction | R02 PER-09 | PERG | Train and document the boundary | AW |
| AML-002 | HIGH | PoA | Bank powers | Pre-incorporation bank powers fall under s.31, making the two attorneys **personally liable** — not void | R10 §3.6 | ComReg s.31 | Split into a post-incorporation PoA from the company | CSP |

## MEDIUM

| ID | Sev | Document | Clause | Issue | Evidence | Recommendation | Owner |
|---|---|---|---|---|---|---|---|
| AML-001 | MEDIUM *(was BLOCKER)* | Res. | Subscription | No express subscription clause. Cured by statute | R06; R10 §3.5 | Add one anyway for bank comfort | CHL |
| AML-003 | MEDIUM | PPTX | whole | Unsigned, undated, KYC-incomplete; never says "UBO"; no jurisdictions, legal forms or registration numbers — yet is the only document stating ownership % | D01; R06 | Rebuild and have the UBO sign it | CSP / AW |
| DOC-003 | MEDIUM | PoA line 81 | "the Company" | Undefined term; only "Principal" is defined. Literally reads as the GmbH's own capital | R03; D02 | Define terms; remove capital-increase power | CSP |
| LANG-004 | MEDIUM | PoA RU line 21 | Authorities | AFSA omitted from the Russian list | R07; R02 | Restore | CSP |
| LANG-005 | MEDIUM | AoA 590–593 | Language | "equal legal force" and "English prevails" are self-contradictory, in both languages | R07; D04 | Single formulation: "equally authentic … provided that … English prevails" | CSP |
| CORP-005 | MEDIUM | AoA Art. 4 | Objects | Silently drops Sch. 5 Art. 4(b) general-objects catch-all while Art. 18.2 binds the CEO to act within the objects | R01 | Restore the catch-all | CSP |
| KZ-002 | MEDIUM | — | IIN | IIN is needed in practice for bank, EDS and BIN — but does **not** gate the Registrar filing | R10 §3.3 | Start the application, but do not treat it as a filing gate | AW |
| DOC-004 | MEDIUM | Res. line 12 | "bye-laws" | Offshore terminology; the sentence was never a template variable so was never reviewed | R08 T2-02 | Remove | CHL |

## LOW / TYPOGRAPHICAL

| ID | Sev | Document | Issue | Evidence | Recommendation |
|---|---|---|---|---|---|
| DOC-005 | LOW | AoA footer | `Classification: Restricted` is **AFSA's own** marking (provenance evidence, not a leak) | R01, R02 PER-17, R04 | Remove before filing |
| LANG-006 | LOW | Res. | "Aлександр" uses **Latin U+0041** in all six occurrences incl. the signature block; the AoA uses Cyrillic | R07 | Normalise to Cyrillic |
| LANG-007 | LOW | AoA | EN/RU article numbering diverges from Share Certificates onward; 17 articles carry no RU number | R07; R08 T2-11 | Rebuild numbering; confirm in Word |
| DOC-006 | LOW | Res./AoA | "Ltd.." double periods; missing closing parenthesis in RU | R07 | Correct |
| DOC-007 | LOW | AoA | 29 orphan `_Toc` anchors; the language clause has none, i.e. appended after the precedent's TOC | R08 T2-06 | Clean before execution |
| REV-001 | LOW *(narrowed)* | review | Egress block on primary domains. **Retired** for everything R01/R02/R10 read in situ | R01, R02, R10 | Residual UNCONFIRMED items listed per report |

## WITHDRAWN — findings this review raised and then disproved

| ID | Originally | Now | Why |
|---|---|---|---|
| SWISS-005 | **BLOCKER** — signature authority unevidenced; PoA/Res/AoA possibly void | **CLOSED** | Zug register: *Einzelunterschrift*, 200/200 quotas, since 18.01.2023 (R10 §2.7) |
| D04-10 | HIGH — Art. 28 denies the parent inspection of the books | **WITHDRAWN** | Verbatim Sch. 5 Art. 28; ss.131(4)(d), 132, 56, 90(2), 104(4)–(5) survive it (R01 §12; R10 §3.4) |
| DOC-002a | — foreign template's confidentiality marking | **WITHDRAWN** | AFSA's own banner (R01, R02, R04) |
| six drafting defects | attributed to the drafter | **WITHDRAWN** | Verbatim Schedule 5 text — AFSA's own errors (R10 §3.4) |
