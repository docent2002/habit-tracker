# R06 — AML / KYC / BANKING SPECIALIST REVIEW

**Reviewer:** Reviewer 6 — AML / KYC / Banking Specialist
**Review date:** 2026-08-28
**Subject:** Wiese Advisory Eurasia Ltd. (to be incorporated, AIFC, Kazakhstan)
**Parent / proposed sole shareholder:** Wiese Advisory GmbH, CHE-212.321.848, c/o Guthirt Treuhand, Ibelweg 18a, 6300 Zug, Switzerland
**Sole UBO (client-confirmed):** Alexander Wiese — German national, Swiss resident, no Kazakhstan IIN

---

## 0. METHOD AND A MATERIAL RESEARCH LIMITATION

**FINDING TYPE: FACT.** All primary AIFC/AFSA/Kazakh legal sources are **unreachable from this
review environment**. The egress gateway returned HTTP 403 on `CONNECT` for `aifc.kz`,
`afsa.aifc.kz`, `afsa.kz`, `aol.aifc.kz`, `orderly.myafsa.com`, `adilet.zan.kz` and
`online.zakon.kz`, and also for `fatf-gafi.org`, `consilium.europa.eu` and `fedlex`-adjacent
mirrors. Verified against `$HTTPS_PROXY/__agentproxy/status`, which logs the rejections.

Consequence: statements of AIFC law below are derived from **search-index summaries of** the
primary texts (Part 14-1 AIFC Companies Regulations; AFSA *Guidance on the Registration Process in
the AIFC*; AFSA *Guidance on Ultimate Beneficial Owner*), **not from the texts themselves**. Every
such statement is labelled **UNCONFIRMED — PRIMARY SOURCE UNREACHABLE** and carries the URL that
must be opened to confirm it. Nothing in section 4 (Power of Attorney) or section 3 (ownership
evidence) depends on this: those findings rest on the documents in front of me.

**RECOMMENDATION (AML-00, MEDIUM):** before this report is relied on for filing, one person with
unrestricted internet access should open the four URLs in §6 and initial each legal proposition.

Incidental but relevant: the AFSA registration guidance PDF is itself titled
*"Guidance on the Registration Process in the AIFC **Classification: Restricted**"*. That is the
same footer marking found in the client's AoA (Inventory §C.3). **FINDING TYPE: LEGAL
INTERPRETATION.** The AoA was very probably built from an AFSA-circulated template and the
classification marking travelled with it. It is not the client's marking to carry onto a public
register, and it should be deleted.

---

## 0.1 ISSUE REGISTER — AML/KYC/BANKING

| ID | Finding | Type | Severity |
|---|---|---|---|
| AML-01 | **No document in the package states that Wiese Advisory GmbH subscribes for or holds the 100 shares.** The 100% ownership of the AIFC company is nowhere expressly recorded | FACT | **BLOCKER** |
| AML-02 | PoA line 81 catch-all ("increase the share capital", "approve, execute and file any amendments to the Articles of Association", "any other legal and factual acts") sits *after* and unsubordinated to the negative covenants at lines 66–73 and materially undercuts them | LEGAL INTERPRETATION | **CRITICAL** |
| AML-03 | Unrestricted **right of substitution** (PoA line 83) — attorneys may sub-delegate the line 81 powers to persons never identified to, or screened by, the principal or the bank | LEGAL INTERPRETATION | **CRITICAL** |
| AML-04 | PoA purports to authorise the attorneys to act for **"the company being incorporated"** before banks (line 16, 36, 39–44). The GmbH cannot confer authority to act for a separate legal person that does not yet exist; line 85 concedes this. The bank-onboarding half of the PoA is largely ineffective as drafted | LEGAL INTERPRETATION | **HIGH** |
| AML-05 | **Three different titles for the same signatory across three documents** — "Managing Director" (PoA line 7), "Director" (Res. line 12), "Chief Executive Officer" / "Генеральный Директор" (Res. lines 43/48; AoA lines 602/607). Classic KYC document-inconsistency flag | FACT | **HIGH** |
| AML-06 | No evidence of Alexander Wiese's **signing authority for the GmbH** (sole vs joint signature) is in the package; without a Handelsregister extract the PoA and Resolution are unverifiable | PRACTICAL REQUIREMENT | **HIGH** |
| AML-07 | PoA carries **no notarial certification block, no apostille, no capacity line** — two unlabelled blank signature lines (lines 93, 97) | PRACTICAL REQUIREMENT | **HIGH** |
| AML-08 | **Business purpose mismatch**: AoA line 114 says advisory "in the fields of **finance**, corporate governance and business development"; the KYC narrative is sustainability advisory to UN agencies and MDBs. "Finance advisory" invites both AFSA licensing questions and bank scrutiny | FACT | **HIGH** |
| AML-09 | **Corporate structure chart is not fit for any of its three purposes** (Registrar filing, UBO record, bank KYC) — see §2 | FACT | **HIGH** |
| AML-10 | The word **"UBO" appears nowhere** in the AoA, the Resolution or the structure chart. There is **no UBO declaration** in the package at all | FACT | **HIGH** |
| AML-11 | **Date incoherence across the set**: Resolution adopted 25 Jul 2026 (Res. line 12), Resolution dated 11 Aug 2026 (line 6), AoA cover "Approved by Resolution … Dated 11 August 2026" (AoA line 4), FX rate taken at 31 Jul 2026 (Res. line 32), filenames `26_07_30` | FACT | **MEDIUM** |
| AML-12 | Capital figures internally inconsistent (100 × 545.5 = 54,550 ≠ 54,450) and "five tiyn" ≠ 0.50 tenge. A bank's compliance function reads arithmetic errors in constitutional documents as a control-quality signal | FACT | **MEDIUM** |
| AML-13 | AoA contains **no article obliging the company to keep a Beneficial Ownership Register**, despite Part 14-1 AIFC Companies Regulations | RECOMMENDATION | **MEDIUM** |
| AML-14 | `c/o` fiduciary registered address in Zug is a recognised generic risk indicator; it is mitigable but is **not currently mitigated by anything in the package** | LEGAL INTERPRETATION | **MEDIUM** |
| AML-15 | PoA negative list (lines 66–73) is good but **incomplete** — nine further exclusions needed (§4.4) | RECOMMENDATION | **MEDIUM** |
| AML-16 | PoA valid **12 months** with no purpose-limitation to this incorporation and no expenditure cap | RECOMMENDATION | **MEDIUM** |
| AML-17 | "Jointly **and/or** severally" (PoA line 16) means one attorney alone can exercise every power, including the line 81 powers. No four-eyes control anywhere in the instrument | LEGAL INTERPRETATION | **HIGH** |
| AML-18 | Attorneys identified by **IIN only** — no DOB, no passport number, no address, no specimen signature. Banks will not accept an attorney they cannot themselves KYC | PRACTICAL REQUIREMENT | **MEDIUM** |
| AML-19 | The AoA/Resolution CEO-residency and director-IIN clauses (AoA lines 358, 367) are also a **banking** problem, not only a corporate one: KZ banks in practice require an IIN for the person heading a non-resident-owned legal entity | LEGAL INTERPRETATION | **HIGH** |
| AML-20 | Positive finding: AoA line 139 ("must not recognise a Person as holding a Share on trust … except an absolute right of ownership") is a genuine **anti-nominee** provision and should be cited to the bank | FACT | **POSITIVE** |

---

## 1. DOCUMENTATION LIKELY REQUIRED

### 1.1 Legal anchor

| Proposition | Source | Type |
|---|---|---|
| Where an Incorporator is a body corporate incorporated outside the AIFC and not registered in the AIFC, the incorporation application must be accompanied by a copy of that Incorporator's **current certificate of incorporation or registration**, or a document of similar effect, **certified by the relevant authority in that jurisdiction** | AIFC Companies Regulations, Part 4 (Company Formation and Incorporation) — via [orderly.myafsa.com Part 4](https://orderly.myafsa.com/entiresection/a00010001000100010004/part-4:-company-formation-and-incorporation) | LEGAL REQUIREMENT — **UNCONFIRMED, PRIMARY SOURCE UNREACHABLE** |
| Documents not in English must be accompanied by an **English translation certified to the satisfaction of the Registrar of Companies** | AIFC Companies Regulations / Companies Rules — via [orderly.myafsa.com Companies Rules](https://orderly.myafsa.com/entiresection/a0001000100020001/companies-rules) | LEGAL REQUIREMENT — **UNCONFIRMED, PRIMARY SOURCE UNREACHABLE** |
| The **only constituent document** of an AIFC company is the Articles of Association (model articles may be used and amended) | AIFC Companies Regulations, Part 4 | LEGAL REQUIREMENT — **UNCONFIRMED** |
| A Relevant Person must **keep and maintain a Beneficial Ownership Register** recording the UBO Details of each UBO, and must record changes **within 14 days** of becoming aware | AIFC Companies Regulations **Part 14-1**, Chapter 2 — [Part 14-1](https://orderly.myafsa.com/entiresection/a0001000100010001000F/part-14-1:-ultimate-beneficial-owners), [Chapter 2](https://orderly.myafsa.com/entiresection/a0001000100010001000F0002/chapter-2:-beneficial-ownership-register) | LEGAL REQUIREMENT — **UNCONFIRMED, PRIMARY SOURCE UNREACHABLE** |
| UBO is identified by tracing through layers of ownership to the ultimate natural person(s); the working threshold is holdings **exceeding 25%** | AFSA *Guidance on Ultimate Beneficial Owner* (PDF, egress-blocked) | LEGAL INTERPRETATION — **UNCONFIRMED**; the 25% figure must be verified against Part 14-1 before it is used in a declaration |
| Originals or notarised copies of **passports and proofs of address** for directors and shareholders are required at AIFC registration | AFSA *Guidance on the Registration Process in the AIFC* (PDF, egress-blocked) | PRACTICAL REQUIREMENT — **UNCONFIRMED** |
| All company documents for a Kazakh **second-tier bank** account must be notarised and apostilled and translated into Russian (and, in practice, Kazakh); account opening follows an in-depth compliance check; personal presence of the director is normally required, though most banks accept a power of attorney | Practitioner commentary (Tier 3): [Azizov & Partners](https://azizovpartners.kz/en/2023/04/12/features-of-opening-bank-accounts-by-non-residents/), [REVERA](https://revera.legal/en/info-centr/news-and-analytical-materials/1464-otkrytie-bankovskogo-scheta-dlya-nerezidentov-respubliki-kazaxstan/), [GSL](https://gsl.org/en/offers/services-for-opening-corporate-accounts-with-banks-of-kazakhstan/) | PRACTICAL REQUIREMENT (Tier 3 — must not be treated as law) |
| A foreign legal entity needs a **BIN**, and the head of the non-resident legal entity an **IIN**, to open an account at a Kazakh commercial bank | Practitioner commentary (Tier 3), as above | PRACTICAL REQUIREMENT — **UNCONFIRMED**; directly compounds AML-19 and the IIN defect at AoA line 358 |

### 1.2 (a) Wiese Advisory GmbH — corporate shareholder pack

| # | Document | Purpose | Form expected | Status in package |
|---|---|---|---|---|
| C1 | **Certified Handelsregisterauszug** (commercial register extract), Canton of Zug, current — showing company, CHE number, domicile, purpose, quotaholders and signature authorities | Legal existence + ownership + who may sign | Certified by the register office, **apostilled**, certified EN (and RU) translation | **Absent** |
| C2 | **Statuten** (articles) of the GmbH | Constitution; confirms the Managing Director's competences | Certified copy, apostille, certified translation | **Absent** |
| C3 | **Certificate of Good Standing / Handelsregister confirmation of no liquidation** | Standing | Register-issued, apostilled | **Absent** |
| C4 | **Shareholder / quotaholder resolution** approving the KZ subsidiary, the capital contribution and the appointments | Authorisation of the transaction | Original, signed by the **quotaholder** (not the director), notarised + apostilled | Present but **defective actor** (Res. line 12: adopted by the *Director*, under a title naming the *Shareholder*, with the Russian title naming the *Founder*) |
| C5 | **UBO declaration** of the GmbH | AML | Signed by an authorised signatory, notarised | **Absent** |
| C6 | **Group / corporate structure chart**, certified | AML; UBO tracing | Signed and dated by the UBO | Present but **not fit for purpose** (§2) |
| C7 | **Latest financial statements** (signed; audited if audit applies) | Source of funds; substance | Copy | **Absent** |
| C8 | **Bank reference letter** from the GmbH's existing Swiss bank — relationship length, conduct, no adverse | Standard for a corporate account applicant with no KZ footprint | Original on bank letterhead, ≤3 months old | **Absent** |
| C9 | **Swiss VAT / UID registration** and a **tax residence certificate** | Substance; treaty position | Copy / authority-issued | **Absent** |
| C10 | **Domiciliation confirmation from Guthirt Treuhand** and the domiciliation agreement | Explains the `c/o` address (§1.5) | Letter on letterhead + contract | **Absent** |
| C11 | **Evidence of trading**: 2–3 executed client contracts/POs, recent invoices, 6–12 months of Swiss bank statements | Source of funds; business rationale | Copies | **Absent** |
| C12 | **Board/shareholder resolution of the GmbH authorising the account opening** and naming the account signatory | Banks require this from the *shareholder* only where the shareholder is a signatory or guarantor | Original | **Absent** |

### 1.3 (b) Alexander Wiese — UBO, Director, CEO, Authorised Signatory

He occupies **four** roles at once (UBO, Director, CEO, Authorised Signatory). Each attracts its own
evidence set; the bank will treat him as the single point of concentration risk.

| # | Document | For which role | Form expected | Status |
|---|---|---|---|---|
| P1 | **Passport** (German), full-page colour, valid ≥6 months | All four | Notarised copy or certified true copy; some KZ banks require **apostilled** notarial copy | **Absent** |
| P2 | **Swiss residence permit** (Ausweis B/C) or equivalent | Residence; also relevant to the CEO-residency defect | Notarised copy | **Absent** |
| P3 | **Proof of residential address** ≤3 months (utility bill, Wohnsitzbestätigung / Gemeinde residence confirmation, bank statement). The `c/o Ibelweg 18a` address is **not** an acceptable residential address for the UBO | UBO, Director | Original or certified copy + translation | **Absent** |
| P4 | **CV / professional biography**, dated and signed | Director, CEO — substance and competence | Signed original | **Absent** |
| P5 | **Source of wealth (SoW)** narrative + evidence: how the overall wealth was accumulated — employment history, GmbH dividends/salary, sale proceeds, inheritance. Evidence: tax returns/assessments (Steuerveranlagung), employment contracts, GmbH accounts, dividend resolutions | UBO | Signed statement + documentary annexes | **Absent** |
| P6 | **Source of funds (SoF)** for the specific EUR 100 capital contribution and for the working capital that will actually fund the KZ entity. EUR 100 is trivial; the bank will ask about the *expected turnover*, not the capital | UBO / company | Bank statement showing the remitting account; the remitter must be the GmbH, not the individual | **Absent** |
| P7 | **UBO self-declaration** — identity, DOB, place of birth, nationality(ies), tax residence, TIN, %, direct/indirect, source of control, PEP self-declaration, sanctions self-declaration | UBO | Signed, dated; notarised for KZ bank | **Absent** |
| P8 | **Specimen signature card**, notarised | Authorised Signatory | Notarised, apostilled | **Absent** |
| P9 | **IIN** (Individual Identification Number) | Director (AoA line 358), CEO, bank signatory | KZ authority-issued | **Absent and confirmed not held** — see AML-19 |
| P10 | **Tax residence self-certification (CRS/FATCA)** for both the individual and the entity | Account opening | Bank form | **Absent** |
| P11 | **Personal bank reference** | UBO | Bank letterhead, ≤3 months | **Absent** |
| P12 | **Criminal record extract** (Führungszeugnis / Strafregisterauszug) | Some KZ banks and some AIFC applications | Authority-issued, apostilled | **Absent** — **UNCONFIRMED** whether AFSA requires it for a non-regulated Private Company |

### 1.4 Notarisation / apostille / translation matrix

| Document class | Notarisation | Apostille | Translation | Note |
|---|---|---|---|---|
| Swiss register extract, Statuten, good-standing | Register-certified | **Yes** — Switzerland and Kazakhstan are both Hague Apostille parties (**UNCONFIRMED** accession date for KZ; verify at hcch.net before relying) | Certified EN; RU/KK for the bank | Apostille is issued by the cantonal Staatskanzlei (Zug) |
| Power of Attorney | **Yes — notarised signature** | **Yes** | Bilingual EN/RU already, but the translation must be certified | Currently has **neither** (AML-07) |
| Shareholder resolution | Yes | Yes | Certified | Currently unnotarised |
| Passport copy | Notarised copy | Usually yes for KZ banks | Certified RU | — |
| Proof of address, CV, SoW/SoF annexes | Usually certified copy only | Usually not | Certified RU for the bank | — |
| UBO declaration, specimen signature | **Yes** | Yes for the bank | Certified RU | — |
| Bank reference | Original letterhead | No | Certified RU | Banks accept SWIFT-delivered references |

**PRACTICAL REQUIREMENT.** Build a single apostille run at the Zug Staatskanzlei covering C1–C4, the
re-executed PoA, and the notarised passport copy. Doing it piecemeal costs two to three weeks per
round trip and is the most common cause of AIFC filing slippage.

### 1.5 The `c/o Guthirt Treuhand` registered address — does it raise scrutiny?

**Yes. FINDING TYPE: LEGAL INTERPRETATION.**

| Risk indicator present | Why a bank flags it |
|---|---|
| Registered office is a **fiduciary's address**, not premises the company occupies | Standard indicator of a "domiciliary company" / letterbox entity in every European AML typology |
| **Canton of Zug** | Historically over-represented in shell-company typologies; not adverse in itself, but it raises the base rate of enquiry |
| **Sole UBO = sole director = sole CEO = sole signatory** | No segregation of duties, no independent oversight |
| **Nominal capital (EUR 100)** in the new entity | Substance question |
| **Non-resident director/CEO with no local IIN** and a **c/o** parent address | The combination — no local presence at either level — is what actually triggers enhanced due diligence, more than either factor alone |
| The package contains **no explanation** of the `c/o` at all | The chart, AoA and Resolution are silent; the bank will ask and the answer is currently improvised |

**A `c/o` fiduciary address is entirely lawful and common in Switzerland.** Under Swiss commercial
register practice a company domiciled at a third party's address must name the domicile holder and
the holder must consent (Handelsregisterverordnung art. 117(3) — **UNCONFIRMED text, verify at
fedlex.admin.ch**). The problem is not legality; it is that the file currently offers a bank nothing
to distinguish this from a shell.

**Mitigants to assemble (RECOMMENDATION, HIGH priority):**

| # | Mitigant | Why it works |
|---|---|---|
| M1 | **Domiciliation letter from Guthirt Treuhand** on letterhead: mandate scope, start date, that mail is forwarded to a named individual, contact person | Converts an anonymous address into a named, contactable, regulated-profession relationship |
| M2 | **Guthirt Treuhand's own professional credentials** — membership of TREUHAND\|SUISSE or EXPERTsuisse, and whether it is an AMLA-supervised financial intermediary (**UNCONFIRMED** — verify) | A supervised fiduciary is itself a KYC-performing party; banks weight this heavily |
| M3 | **The UBO's own residential address in Switzerland**, evidenced (P3) | Shows the human being is real and locally resident — a c/o for the *company* is far less troubling when the *owner* has a verified home address in the same country |
| M4 | **Evidence of operations**: signed client contracts, invoices, Swiss bank statements showing recurring receipts (C11) | Substance beats address every time. A trading history is the single strongest rebuttal |
| M5 | **Business rationale memo** — why a Swiss sustainability advisory needs an AIFC entity (regional MDB/UN presence in Central Asia, procurement eligibility, local contracting) | Answers the unspoken question "why Kazakhstan?" before it is asked |
| M6 | **Named AIFC registered office provider** for the new company, with lease/service agreement | AIFC requires a registered office within the AIFC (AoA line 107 recites this without naming a provider or a lease) |
| M7 | **Website, LinkedIn, professional references** | Cheap open-source corroboration; banks check anyway |

---

## 2. CORPORATE STRUCTURE CHART — SUFFICIENCY

### 2.1 What the chart currently contains

Per the Document Inventory, the PPTX contains 28 words in total:
"Wiese Advisory GmbH", "Wiese Advisory Eurasia Ltd.", "Corporate Structure", "Alexander Wiese",
"100 %", "100 %", "Alexander Wiese (Authorised Signatory)", plus signature and date lines.
(**Note:** the .pptx itself was not in this reviewer's extract set; content is taken from the
Inventory, which is authoritative for this review. **UNCONFIRMED — INPUT NOT DIRECTLY INSPECTED.**)

**Assessment: it is a picture of a hierarchy, not a compliance document.** It correctly conveys the
shape of the group — two boxes, one person, two 100% lines — and nothing else that any of its three
audiences needs.

### 2.2 Gap analysis against the three purposes

| # | Missing element | AIFC filing | UBO record | Bank KYC | Severity |
|---|---|---|---|---|---|
| S1 | **Jurisdiction of each entity** (Switzerland / AIFC, Kazakhstan) + country flags or ISO codes | ● | ● | ● | HIGH |
| S2 | **Legal form** spelled out (GmbH = Gesellschaft mit beschränkter Haftung, a Swiss limited liability company; "Ltd." = AIFC **Private Company**) | ● | ● | ● | HIGH |
| S3 | **Registration numbers** — CHE-212.321.848 for the GmbH; BIN/registration number placeholder for the AIFC entity | ● | ● | ● | HIGH |
| S4 | **Registered addresses**, including express disclosure of the `c/o Guthirt Treuhand` domiciliation | | ● | ● | HIGH |
| S5 | **The word "UBO"** — Alexander Wiese must be expressly labelled *Ultimate Beneficial Owner* | ● | ● | ● | **CRITICAL** |
| S6 | **UBO identity data**: full legal name as in passport, **date of birth**, place of birth, **nationality (German)**, **country of residence (Switzerland)**, passport number, tax residence/TIN | ● | ● | ● | **CRITICAL** |
| S7 | **Direct vs indirect** labels — Wiese holds the GmbH **directly**; he holds the AIFC company **indirectly (100% × 100% = 100% effective)** | ● | ● | ● | HIGH |
| S8 | **Basis of control** — the chart shows ownership only. It should also state voting rights % and that control arises from shareholding (not from any agreement, option, or right to appoint) | | ● | ● | HIGH |
| S9 | **Negative statement — "there are no other shareholders, no nominee shareholders, no nominee directors, no trusts, no bearer instruments, no shareholders' agreement, no options, no pledges over the shares, and no person other than the named UBO exercises control"** | | ● | ● | **CRITICAL** |
| S10 | **Share class and count** — 100 ordinary shares of KZT 545.5 each (once the arithmetic at Res. line 32 / AoA line 128 is corrected) | ● | | ● | MEDIUM |
| S11 | **Officer roles annotated on the boxes** — Wiese as Managing Director of the GmbH; as Director + CEO + Authorised Signatory of the AIFC entity. Currently only "Authorised Signatory" appears, which is the least significant of the four | ● | | ● | HIGH |
| S12 | **PEP status statement** — "the UBO is not, and has not within the last 12 months been, a politically exposed person, nor a family member or close associate of one" (or a disclosure if he is) | | ● | ● | HIGH |
| S13 | **Sanctions statement** — no listed person in the chain | | ● | ● | HIGH |
| S14 | **Certification and signature by the UBO personally** — "I certify that this chart is complete and accurate as at [date] and that I am the sole ultimate beneficial owner", signed and dated. The current signature line is unattributed and uncertified | ● | ● | ● | **CRITICAL** |
| S15 | **"As at" date** and a version number | | ● | ● | MEDIUM |
| S16 | **Group activity line** per entity — what each company actually does and where its revenue comes from | | | ● | HIGH |
| S17 | Statement that the chart shows **the complete group** (no other subsidiaries, branches, or affiliates) | | ● | ● | HIGH |
| S18 | **Intermediate-entity absence** stated expressly — i.e. that there is no holding vehicle between the GmbH and the AIFC company | | ● | ● | MEDIUM |

### 2.3 Recommended content list for the replacement chart

Single A4 page, portrait, English (RU mirror optional), one certification block. Concretely:

**Header**
1. "Corporate Structure and Ultimate Beneficial Ownership — Wiese Advisory Group"
2. "As at [date]" · "Version 1.0" · "Prepared for: AIFC Registrar of Companies / [Bank name]"

**Box 1 — the natural person, at the top**
3. ALEXANDER WIESE — **Ultimate Beneficial Owner (UBO)**
4. Date of birth: [DD.MM.YYYY] · Place of birth: [city, country]
5. Nationality: **German** · Country of residence: **Switzerland**
6. Passport no.: [xxx] (issuing state, expiry) · Tax residence: Switzerland, TIN [xxx]
7. Residential address: [full street address — **not** the c/o address]
8. PEP status: [Not a PEP / disclosure]

**Edge 1**
9. "100% of quota capital and 100% of voting rights — **held directly**"
10. "Evidenced by: Commercial Register of the Canton of Zug, extract dated [date]"

**Box 2 — the parent**
11. **Wiese Advisory GmbH** · Switzerland 🇨🇭
12. Legal form: Gesellschaft mit beschränkter Haftung (limited liability company)
13. Registration no.: **CHE-212.321.848** · Register: Handelsregister des Kantons Zug
14. Registered address: **c/o Guthirt Treuhand, Ibelweg 18a, 6300 Zug** *(domiciliation address; domiciliation agent: Guthirt Treuhand)*
15. Activity: sustainability advisory services
16. Officer: Alexander Wiese, Managing Director (Geschäftsführer), [sole / collective] signature

**Edge 2**
17. "100% of issued share capital (100 of 100 ordinary shares) and 100% of voting rights — **held directly by Wiese Advisory GmbH**"
18. "Alexander Wiese's interest in this entity is therefore **indirect**; effective beneficial interest 100% × 100% = **100%**"

**Box 3 — the new entity**
19. **Wiese Advisory Eurasia Ltd.** · AIFC, Kazakhstan 🇰🇿
20. Legal form: **Private Company** under the AIFC Companies Regulations
21. Registration no. / BIN: [to be inserted on incorporation]
22. Registered office: [AIFC address of the registered-office provider]
23. Activity: sustainability advisory to UN agencies and multilateral development banks
24. Officers: Alexander Wiese — Director, Chief Executive Officer, Authorised Signatory

**Declarations block (the part that actually does the compliance work)**
25. "Wiese Advisory GmbH is the **sole** shareholder of Wiese Advisory Eurasia Ltd. There are no other shareholders."
26. "Alexander Wiese is the **sole** ultimate beneficial owner of both entities. No other natural person owns or controls, directly or indirectly, 25% or more of either entity, and no other natural person exercises control by any other means."
27. "There are **no nominee shareholders, no nominee directors, no trust, foundation or fiduciary arrangement, no bearer shares or bearer instruments, no shareholders' agreement, no option, convertible instrument or right of pre-emption, and no pledge, charge or security interest** over the shares or quotas of either entity."
28. "This chart shows the **complete** group. Neither entity has any other subsidiary, branch, representative office or affiliate."
29. "No person in this structure is a designated person under any UN, EU, OFAC, UK OFSI, Swiss SECO or Republic of Kazakhstan sanctions programme."

**Certification block**
30. "I, Alexander Wiese, certify that the information in this chart is true, complete and accurate as at the date stated, and undertake to notify [the AIFC Registrar / the Bank] within 14 days of any change."
31. Signature ______________ · Name: Alexander Wiese · Capacity: **Ultimate Beneficial Owner and, for and on behalf of Wiese Advisory GmbH, its Managing Director** · Date: __________ · Place: __________
32. Space for notarial certification (banks in KZ will want the signature notarised and apostilled).

**Deliberately excluded:** the "Authorised Signatory" parenthetical as currently used. It labels
Wiese with his least significant role and, floating free of an entity, is ambiguous as to which
company he signs for.

---

## 3. VERIFYING OWNERSHIP FROM EVIDENCE

The mandate is to state what **substantiates** each limb, not to assume it. The two limbs are in
very different evidential condition.

### 3.1 Limb (i) — Alexander Wiese owns 100% of Wiese Advisory GmbH

| Evidence | Status | Weight |
|---|---|---|
| Client's oral/written confirmation of sole 100% UBO | Available (Shared Brief) | **Self-declaration only. Not evidence for AML purposes.** |
| **Commercial register extract, Canton of Zug** | **Not in the package** | **Decisive — and obtainable in a day** |
| GmbH Statuten | Not in the package | Corroborative |
| Quota certificate / share ledger (Anteilbuch) | Not in the package | Corroborative |
| PoA line 7 — describes him as "Managing Director" | In package | **Evidences office, not ownership.** A managing director need own nothing |
| Res. line 12 — "duly appointed Director" | In package | Same — office, not ownership |
| Signature blocks — "Chief Executive Officer" | In package | Neither office nor ownership; a title unknown to Swiss GmbH law |

**FINDING (AML-06, HIGH).** **Nothing currently in the package evidences that Alexander Wiese owns
any part of Wiese Advisory GmbH.** Every document describes his *office*. Ownership is asserted only
by the client.

**Why the Swiss GmbH form is a gift here — and should be used deliberately:**

**FINDING TYPE: LEGAL REQUIREMENT.** Unlike a Swiss AG (whose shareholders are private) or most
common-law companies, a Swiss **GmbH must enter its quotaholders (Gesellschafter) in the commercial
register**, with name, domicile, and the number and nominal value of their quota contributions
(Stammanteile) — Swiss Code of Obligations **art. 791**. The register is public and free to search
at Zefix. ([Art. 791 OR](https://www.swissrights.ch/gesetze/Artikel-791-OR-2022-EN.php);
[Grant Thornton, Overview of the Swiss LLC/GmbH](https://www.grantthornton.ch/en/insights/overview-swiss-llc-gmbh/)
— *page fetch egress-blocked; text taken from search index, verify at fedlex.admin.ch*.)

Consequences to exploit:

1. **The ownership assertion is independently verifiable by the bank and by AFSA, from a public
   state register, without relying on the client.** That is a materially better evidential position
   than most corporate-shareholder KYC files ever achieve, and it should be stated in the cover
   letter, not left for the analyst to discover.
2. A **certified, apostilled extract** naming Alexander Wiese as holder of 100% of the quota capital
   converts the weakest link in the file into the strongest.
3. The same extract simultaneously proves (a) legal existence, (b) the registered `c/o` address,
   (c) the corporate purpose, and (d) **who may sign for the GmbH and whether alone or jointly** —
   which is the precondition for the PoA and the Resolution being valid at all (AML-06).
4. Under Swiss AML company-law rules a GmbH quotaholder must notify the company of a beneficial
   owner holding ≥25% (CO art. 790a — **UNCONFIRMED article number, verify**). Where the registered
   quotaholder *is himself* the natural person, register entry and beneficial ownership coincide and
   there is no gap to explain. Say so expressly.

**ACTION:** order a *beglaubigter Handelsregisterauszug* from the Handelsregisteramt des Kantons Zug,
have it apostilled at the Staatskanzlei, and obtain a certified EN + RU translation. This single
document closes AML-06 and most of AML-05.

### 3.2 Limb (ii) — Wiese Advisory GmbH will own 100% of Wiese Advisory Eurasia Ltd.

| Evidence | Status | Weight |
|---|---|---|
| Res. line 32 / AoA line 128 — "share capital … is formed through a contribution in the amount of EUR 100 … 100 ordinary shares … allotted" | In package | **Names no subscriber and no allottee.** It says shares exist; it does not say who gets them |
| Resolution title "RESOLUTION OF SHAREHOLDER OF WIESE ADVISORY GmbH" | In package | Grammatically this means *the shareholder **of** the GmbH* — i.e. Alexander Wiese — **not** the GmbH *as* shareholder. The Russian title says "**УЧРЕДИТЕЛЯ**" (**Founder**), a third concept |
| Res. line 18 — Wiese authorised to act "on behalf of the incorporating shareholder" | In package | Implies the GmbH is the incorporating shareholder, but only by inference |
| AoA line 1–4 — "Approved by Resolution of the Shareholder of Wiese Advisory GmbH" | In package | Same ambiguity, repeated |
| AoA signature block — "FOR Wiese Advisory GmbH" | In package | Indicates the GmbH is the incorporating party. Best single indicator present — and it is a signature block, not an operative clause |
| PoA line 24 — attorneys may "incorporate a Private Company … **on behalf of the Principal**" (= the GmbH) | In package | Corroborative |
| Subscription/allotment clause naming Wiese Advisory GmbH as subscriber of 100 of 100 shares | **Absent** | **This is the missing document** |
| Register of Shareholders (AoA line 41 defines it; nobody has opened it) | Post-incorporation | Decisive, once it exists |
| Share certificate under AoA Art. 8 | Post-incorporation | Decisive |
| Certificate of Incorporation + AFSA public register extract | Post-incorporation | Decisive |

**FINDING AML-01 — BLOCKER.** **No document in the package expressly states that Wiese Advisory GmbH
subscribes for, is allotted, or holds the 100 shares in Wiese Advisory Eurasia Ltd.** The proposition
on which the entire UBO chain depends is carried only by a signature block and an inference from the
resolution's title — a title which, in English, is ambiguous and, in Russian, says something else
again ("founder"). Combined with the actor defect at Res. line 12 (a *director* purporting to adopt a
*shareholder's* resolution) and the impossible actor at Res. line 29 (the not-yet-existing company
adopting its own Articles), a bank compliance officer reading this package cannot establish the
ownership chain from the documents at all.

**Remedy (must be done before filing):** insert into the re-executed shareholder resolution an
express subscription clause, e.g. —

> "RESOLVED, that **Wiese Advisory GmbH**, registration number CHE-212.321.848, **subscribes for and
> shall be allotted 100 (one hundred) ordinary shares** of Wiese Advisory Eurasia Ltd., being the
> entire issued share capital, each of nominal value KZT [545.50], and shall on incorporation be
> entered in the Register of Shareholders as the holder of 100% of the issued share capital and
> 100% of the voting rights; and that there is and shall be **no other shareholder**."

And re-title the instrument, in both languages, as a **written resolution of the sole quotaholder /
of Wiese Advisory GmbH as incorporating shareholder** — resolving the Russian/English/"founder"
three-way mismatch at the same time.

### 3.3 Evidence chain the bank will actually need (post-incorporation)

| Link | Document |
|---|---|
| Wiese → GmbH | Zug commercial register extract (certified, apostilled) |
| GmbH → Eurasia Ltd. | Certificate of Incorporation + AIFC register extract + Register of Shareholders + share certificate + the corrected subscription resolution |
| Eurasia Ltd. → its officers | Register of Directors, CEO appointment, specimen signature card |
| UBO attestation over the whole chain | Certified structure chart per §2.3 |
| Beneficial Ownership Register | To be opened on day 1 under Part 14-1 (AML-13) |

---

## 4. POWER OF ATTORNEY — BANKING AUTHORITIES, DETAILED REVIEW

### 4.1 What the instrument does well

Credit where due. The PoA at lines 66–73 contains a **genuinely well-constructed negative covenant
list** — no disposal of funds, no payment instructions, no receipt of cards/tokens/credentials, no
changing authorised signatories, no borrowing or guarantees, no closing accounts. Very few
incorporation PoAs seen in practice carve out payment-instrument receipt and signatory amendment,
and both are exactly right. Line 85 also correctly warns that a separate PoA may be needed from the
incorporated company. Lines 44 ("sign documents required **solely for the purpose of** opening bank
accounts") and 81 ("using funds **provided by the Principal**") are well judged.

The problem is not the drafter's instinct. It is that **lines 81 and 83 pull in the opposite
direction from lines 66–73, and appear after them.**

### 4.2 Power-by-power classification

Legend: ✔ Appropriate · ○ Unnecessary · ▲ Unusually broad · ⛔ Likely unacceptable to a bank ·
☠ Potentially dangerous · ✖ Inconsistent with the intended limited mandate.

**Block A — incorporation (PoA lines 23–34)**

| Line | Power | Class | Comment |
|---|---|---|---|
| 24 | Incorporate a Private Company in the AIFC on behalf of the Principal | ✔ | Core purpose. Should name the target company, "Wiese Advisory Eurasia Ltd.", not any private company |
| 26 | Determine **and reserve** the company name | ▲ | "Reserve" is fine; "**determine**" lets the attorneys choose a different name. Restrict to "reserve the name *Wiese Advisory Eurasia Ltd.* or such alternative as the Principal approves in writing" |
| 28 | Prepare, sign, submit, **amend, withdraw** and receive any applications, forms, questionnaires, declarations, notices | ▲ | "Amend" and "withdraw" without reference back to the principal is broad for a filing agent, but defensible for registry correspondence |
| 29 | Prepare, sign and submit the **Articles of Association**, the Sole Shareholder's Resolution, and information relating to shareholder, director, CEO, **UBO** | ⛔ ✖ | **Signing the Articles and the shareholder's resolution is not agency work — it is the exercise of the shareholder's constitutional function.** A bank and a registrar both expect the shareholder to execute its own constitutive instruments. Note the Resolution and AoA in this package are in fact signed by Wiese personally — so this power is not even needed. **Restrict to "submit and file (not sign)"**. Signing a **UBO declaration** by proxy is worse: a UBO declaration is a personal attestation; no bank will accept one signed by an attorney |
| 30–31 | Represent before AFSA/Registrar; provide explanations; respond to requests | ✔ | Exactly what a local agent is for |
| 32 | Pay registration fees and duties | ✔ | Cap it (§4.5) |
| 34 | Receive the Certificate of Incorporation, certificates, extracts | ✔ | — |

**Block B — bank account opening (PoA lines 35–44)**

| Line | Power | Class | Comment |
|---|---|---|---|
| 36 | Represent the Principal **and the company being incorporated** before banks | ⛔ ☠ | **AML-04.** The GmbH cannot grant authority to act for a legal person that does not yet exist and that, once incorporated, is a distinct entity. A bank onboarding *Wiese Advisory Eurasia Ltd.* needs a mandate **from that company**. As drafted, most of Block B is a nullity as against the account-holding entity |
| 37 | Apply for the opening of bank accounts | ⛔ | Same defect. Also: an application in whose name? Unspecified |
| 39 | Submit corporate/registration/**KYC-AML** documents and information on ownership, shareholder, director and UBO | ▲ | Submitting is fine. But there is no obligation to submit *only* documents supplied by the principal, and no prohibition on the attorneys generating representations about the UBO themselves |
| 40 | Complete **and sign** questionnaires, applications, **declarations** for compliance procedures | ⛔ ☠ | A KYC declaration is a warranty of truth. Signed by an attorney, it is (a) worthless to the bank and (b) exposes the principal to liability for statements it never made. Banks routinely refuse this. **Should be "complete and submit", never "sign"** |
| 41 | Correspond with banks, respond to compliance departments | ✔ | The genuinely useful power, and the one that justifies local attorneys at all |
| 42 | Arrange and participate in meetings, interviews, **video identification** and other CDD procedures | ▲ ⛔ | "Arrange and participate" is fine. But **video identification of the UBO cannot be done by proxy** — identification is of the person being identified. If read as "undergo identification on behalf of", it is unacceptable and possibly an AML offence to attempt. Redraft: "arrange, and attend alongside the Principal's representative" |
| 43 | Receive draft banking agreements, notices | ✔ | Receiving drafts is right; note it does **not** authorise acceptance |
| 44 | **Sign documents required solely for the purpose of opening bank accounts**, where the bank's internal requirements permit | ▲ ☠ | The "solely for the purpose of" limitation is good drafting — but the scope is defined by **the bank's own internal requirements**, i.e. by a third party, not by the principal. Bank account-opening packs routinely include general terms with set-off rights, pledge over balances, indemnities, e-banking enrolment and arbitration clauses. **The negative list at 66–73 does not exclude signing those.** Add an express carve-out |

**Block C — negative covenants (PoA lines 66–73)**

| Line | Exclusion | Class | Comment |
|---|---|---|---|
| 67 | Dispose of or operate funds | ✔ | Correct and necessary |
| 68 | Initiate/authorise/execute payment instructions | ✔ | Correct |
| 69 | Receive cards, tokens, authentication devices, e-keys, passwords, credentials | ✔ | **The best clause in the instrument.** This is the exclusion that actually prevents value transfer |
| 70 | Amend or designate authorised signatories | ✔ | Correct |
| 71 | Obtain loans, provide security, issue guarantees, assume financial obligations | ✔ | Correct |
| 73 | Close accounts or otherwise dispose of funds | ✔ | Correct |
| — | **Scope defect** | ▲ | All six exclusions are drafted around **bank accounts and money**. **None of them restrains a single corporate act.** Nothing at 66–73 prevents the attorneys from amending the Articles, issuing shares, changing the director, or appointing a service provider — which is precisely what line 81 then permits |

**Block D — line 81, the catch-all**

| Fragment of line 81 | Class | Comment |
|---|---|---|
| "prepare, sign …, submit, receive and withdraw applications, petitions, letters, **agreements**, invoices, receipts, certificates and any other documents" | ▲ ⛔ | Unqualified power to sign **agreements** on behalf of the GmbH, with no subject-matter limit at all. This is a general commercial mandate, not a registration mandate |
| "**to increase the share capital of the Company**" | ☠ ⛔ ✖ | **The single most dangerous phrase in the package.** A capital increase issues new shares. New shares can go to someone other than the GmbH. That **changes the ownership structure and therefore the UBO** — the very fact the bank and the Registrar are being asked to verify. It also engages AoA Art. 11 (line 214), which requires an **Ordinary Resolution of shareholders** — so the clause hands a shareholder-reserved power to two agents. No bank will accept an attorney who can alter the ownership of the account holder. Note also the drafting slip: "the Company" is undefined in the PoA and could mean the **GmbH** |
| "to **execute the Articles of Association**" | ⛔ ✖ | Duplicates line 29; same objection. The Articles are the constitution, executed by the incorporating shareholder |
| "**to approve, execute and file any amendments to the Articles of Association**" | ☠ ⛔ ✖ | "**Approve**" is the operative word. Approving amendments to the Articles is a **Special Resolution** matter reserved to shareholders under AoA Art. 30 (line 586). The attorneys could amend the object clause, the transfer restrictions, the anti-nominee clause at line 139, the director/CEO qualification clauses, or the amendment clause itself. "**Any** amendments" is unbounded and there is no requirement of prior written instruction |
| "pay state duties, registration fees, third-party service fees and any other expenses … **using funds provided by the Principal**" | ✔ ▲ | The funding limitation is good. But there is no monetary cap and "any other expenses" is open-ended |
| "and perform **any other legal and factual acts reasonably necessary** for the implementation of this Power of Attorney" | ▲ ☠ | Standard civil-law formula (*любые иные юридические и фактические действия*) and not objectionable in itself — but here it follows an express grant of capital-increase and constitution-amendment powers, so "the implementation of this Power of Attorney" is a much larger universe than incorporation and account opening |

**Block E — duration, substitution, revocation (line 83)**

| Feature | Class | Comment |
|---|---|---|
| **12 months** | ▲ ✖ | Long for a task that should complete in 6–10 weeks. Every additional month is unmonitored exposure. **3 months with a written extension** is the proportionate answer |
| **With the right of substitution** (*с правом передоверия*) | ☠ ⛔ | **AML-03.** See §4.3 |
| Revocable at any time by written notice | ✔ ▲ | Correct in principle, but there is **no notice address, no notified-party list, and no obligation to return the original or to inform the bank and the Registrar of revocation**. A revoked PoA that the bank never hears about is still being relied on |
| "jointly **and/or** severally" (line 16) | ▲ ☠ | **AML-17.** "Severally" means either attorney alone can do everything, including increase the capital and amend the Articles. There is no four-eyes control on any power in the instrument |

### 4.3 Does line 81 undercut the negative covenants? Yes — and here is the mechanism

**FINDING TYPE: LEGAL INTERPRETATION. Severity: CRITICAL (AML-02).**

Four independent reasons:

1. **Different subject matter, so no conflict to resolve.** The exclusions at 66–73 are exclusively
   about *bank accounts and money*. Line 81 is about *corporate acts*. A reader looking for a
   conflict finds none — and therefore reads line 81 as fully effective. The negative list does not
   restrain line 81 because it was never aimed at it.
2. **Position and absence of subordination.** Line 81 appears *after* the negative list and is
   introduced with no words of subordination — no "Subject to the restrictions above", no
   "Notwithstanding the foregoing, and without prejudice to". In both common-law and civil-law
   construction, a later, unqualified, specific grant is a strong candidate to prevail over an
   earlier restriction. A conservative bank will not adjudicate; it will decline.
3. **The catch-all swallows the limits.** "Any other legal and factual acts reasonably necessary for
   the implementation of this Power of Attorney" is measured against the PoA's own purposes — and
   those purposes now include increasing capital and amending the Articles. The tail wags the dog.
4. **The exclusions protect the wrong asset.** Lines 66–73 protect the *cash*. Line 81 puts the
   *company* at risk — its ownership, its constitution, its officers. In a newly incorporated entity
   with EUR 100 of capital, the cash is worth EUR 100 and the corporate shell is worth everything.
   **The instrument is armoured over the cheap asset and open over the valuable one.**

**Worked illustration (not an allegation — an exposure test):** attorney A, acting severally, files a
capital increase issuing 900 new shares to a third party. The GmbH's holding falls to 10%. The UBO
changes. Nothing at lines 66–73 has been breached. The company's Register of Shareholders and the
Beneficial Ownership Register now contradict every KYC representation made to the bank. The bank's
remedy is to freeze and exit. **This risk is created entirely by line 81 and is entirely avoidable
by deleting eleven words.**

### 4.4 Right of substitution — assessment

**FINDING TYPE: LEGAL INTERPRETATION. Severity: CRITICAL (AML-03). Not acceptable as drafted.**

| Issue | Analysis |
|---|---|
| **Who** | The instrument names two attorneys and identifies them by IIN. A substitute is, by definition, unnamed, unidentified, unscreened and unknown to the principal, the Registrar and the bank |
| **What they get** | Substitution passes on *the powers held* — including, on the face of line 81, the power to increase capital and amend the Articles. Sub-delegation of a shareholder-reserved power to an anonymous person is not a defensible arrangement |
| **Chain length** | Nothing limits substitution to one link. A → B → C is not excluded |
| **Interaction with "severally"** | Either attorney alone may substitute. One person's decision can transfer the whole mandate |
| **KYC consequence** | A bank must identify and verify **every** person who can act on a customer's account or corporate affairs. An open substitution right makes that population indeterminate. This is the specific feature bank compliance functions are trained to reject |
| **Formality** | Under Kazakh civil law, substitution (*передоверие*) is generally required to be notarised and the principal notified — **UNCONFIRMED, verify against the Civil Code of the Republic of Kazakhstan at adilet.zan.kz (egress-blocked from this environment)**. Even if notarisation applies, notarisation authenticates a signature; it does not vet the person |
| **Is it ever justified?** | Narrowly. A named law firm may need a colleague to queue at a registry window. That is met by a **limited** substitution right, not an open one |

**Recommended replacement:** *"This Power of Attorney is granted without the right of substitution,
save that an Attorney may delegate, in writing and with prior written notice to the Principal
identifying the delegate by full name and identity-document number, the purely ministerial acts of
lodging and collecting documents at the Registrar of Companies. No other power may be delegated. No
delegate may exercise any power under clause [81] or any power in relation to a bank."*

### 4.5 How a bank compliance function will react to this PoA

**FINDING TYPE: LEGAL INTERPRETATION.** Predicted reaction, in the order it will occur:

| Stage | Reaction | Likely outcome |
|---|---|---|
| Intake | Wrong grantor: PoA is from the GmbH; the applicant is Eurasia Ltd. | **Returned at first pass.** The single most likely outcome, before compliance even sees it (AML-04) |
| Document check | No notarisation, no apostille, unlabelled signature lines, no printed name or capacity | **Rejected as a matter of form** (AML-07) |
| Authority check | No proof the signatory can bind the GmbH; three different titles across three documents | **Query raised; file paused** (AML-05, AML-06) |
| Attorney KYC | Attorneys identified by IIN only; no DOB, passport, address or specimen signature | **Full KYC demanded on both attorneys** before any reliance (AML-18) |
| Powers review | Attorney may sign KYC declarations (line 40) and undergo CDD procedures (line 42) | **Refused outright.** These are personal attestations; a bank cannot accept a proxy warranty of truth |
| Powers review | Attorney may increase capital and amend Articles (line 81) | **Escalation.** This is read as "the ownership we are verifying can be changed by someone who is not our customer." Expect a request to either revoke and re-issue, or to obtain a written bank-form confirmation that these powers will not be exercised |
| Powers review | Open right of substitution (line 83) | **Refused.** Standard policy in most institutions: no reliance on a PoA with unrestricted sub-delegation |
| Consistency review | Date incoherence (25 Jul / 30 Jul / 31 Jul / 11 Aug), capital arithmetic error, "bye-laws" in a Swiss context, `Classification: Restricted` footer, AoA appointing a CEO its own Art. 18.2 disqualifies | **Control-quality downgrade.** Individually minor; collectively they read as a file assembled without review, which raises the perceived risk rating of the whole relationship (AML-11, AML-12) |
| Business review | AoA says "advisory in the fields of **finance**"; KYC narrative says sustainability advisory to UN/MDBs | **Regulatory-perimeter question**: is this entity carrying on a licensable activity without an AFSA licence? Expect a written explanation to be demanded (AML-08) |
| Net | — | **The PoA as drafted is more likely to obstruct account opening than to enable it.** |

The uncomfortable irony worth putting to the client plainly: **the PoA's excessive breadth makes the
bank account harder to open, not easier.** A narrower instrument would be accepted faster.

### 4.6 Recommended remediation of the PoA

| # | Change | Priority |
|---|---|---|
| R1 | **Delete** from line 81: "to increase the share capital of the Company, to execute the Articles of Association, and to approve, execute and file any amendments to the Articles of Association" | **BLOCKER** |
| R2 | **Delete** the right of substitution, or replace with the limited ministerial version in §4.4 | **BLOCKER** |
| R3 | Change every "sign" to "submit/file" for: the Articles, the shareholder's resolution, UBO information, and all **KYC/compliance declarations** (lines 29, 40) | **BLOCKER** |
| R4 | Subordinate the residual catch-all: open line 81 with "**Subject always to the restrictions in the preceding paragraph**, and solely for the purposes stated above, …" | CRITICAL |
| R5 | Delete "represent … **the company being incorporated**" (line 36) and the Block B powers exercisable for the new company; replace with a recital that a **separate PoA or board resolution will be issued by Wiese Advisory Eurasia Ltd. after incorporation** (line 85 already anticipates this) | CRITICAL |
| R6 | Name the target company expressly: "for the sole purpose of incorporating **Wiese Advisory Eurasia Ltd.** in the AIFC" | CRITICAL |
| R7 | **Notarise and apostille**; add a proper signature block — printed name, capacity ("Managing Director / Geschäftsführer, signing with sole signature authority as recorded in the Commercial Register of the Canton of Zug"), place and date | CRITICAL |
| R8 | Reduce term to **3 months**, extendable once in writing | HIGH |
| R9 | Change "jointly **and/or** severally" to: severally for filings and correspondence; **jointly** for anything touching capital, constitution, officers or banking | HIGH |
| R10 | Extend the negative list with: no **corporate** acts (no share issue, allotment, transfer, buy-back, capital increase or reduction); no amendment or approval of the Articles; no appointment or removal of directors, CEO, secretary, auditor or registered-office provider; no e-banking or mobile-banking enrolment; no acceptance of bank general terms, indemnities, set-off, pledge or arbitration clauses; no opening of any account other than in the name of Wiese Advisory Eurasia Ltd.; no sub-authorisation to any bank or third party; no self-dealing or acting where the attorney has a conflict; no signing of any declaration, warranty or certification as to facts | HIGH |
| R11 | Add an **expenditure cap** (e.g. "not exceeding KZT [x] in aggregate without prior written approval") | MEDIUM |
| R12 | Add **governing law and jurisdiction**, a **reporting obligation** (attorneys to report actions taken monthly and to deliver all originals), and a **revocation-notification** clause naming the Registrar and the bank as parties to be notified | MEDIUM |
| R13 | Identify each attorney by **full name, DOB, passport number, address and specimen signature**, not IIN alone | MEDIUM |
| R14 | Add a clause: "Nothing in this Power of Attorney authorises an Attorney to make any statement, declaration or certification of fact on behalf of the Principal or of the Ultimate Beneficial Owner" | HIGH |

---

## 5. SANCTIONS, PEP AND CORRESPONDENT-BANKING CONSIDERATIONS

**No speculation is offered about Alexander Wiese personally.** Nothing in the documents suggests any
adverse factor. What follows is structural.

### 5.1 Clientele — genuinely favourable, and it should be evidenced

| Point | Assessment |
|---|---|
| Counterparties are **UN agencies and MDBs** | Among the lowest-risk revenue sources a bank can see: transparent public procurement, published contract awards, institutional payers, wire transfers from identifiable institutional accounts. **This is an asset in the file and should be led with, not buried** |
| Sustainability advisory | Non-cash, non-trade, no third-party funds handled, no client money — a benign risk profile |
| **However** | UN/MDB counterparties conduct their **own** vendor due diligence and sanctions screening. The company must be able to pass *their* checks too, and MDB **debarment/cross-debarment** lists (World Bank, ADB, AfDB, EBRD, IDB) should be screened for the entity, the GmbH and the UBO at onboarding and annually |
| **Nuance to disclose proactively** | Staff and officials of **public international organisations are "international organisation PEPs"** under FATF Recommendation 12 and most national regimes. The company's *counterparties and contacts* will therefore routinely include PEPs. This is normal for the sector and is not adverse — but the company's own AML policy and the bank onboarding narrative should say so up front, so that a later screening hit is expected rather than alarming |

### 5.2 Jurisdictional and correspondent-banking risk — where the real exposure sits

| Factor | Assessment | Type |
|---|---|---|
| Kazakhstan FATF status | Kazakhstan is **not** on the FATF blacklist (which contains only DPRK, Iran and Myanmar) and does not appear on the current grey list. **UNCONFIRMED — the FATF country page was egress-blocked**; verify at [fatf-gafi.org/en/countries/detail/Kazakhstan.html](https://www.fatf-gafi.org/en/countries/detail/Kazakhstan.html) before relying. *(A search-index summary asserted a "call for action" listing; that is inconsistent with the same summary's own list of blacklisted states and should be treated as an artefact, not a finding.)* | UNCONFIRMED |
| EU high-risk third countries | Kazakhstan does **not** appear in the January 2026 update; additions were Bolivia, the British Virgin Islands and the Russian Federation. **UNCONFIRMED — verify at** [European Commission](https://finance.ec.europa.eu/news/european-commission-updates-list-high-risk-countries-strengthen-international-fight-against-2025-12-04_en) | UNCONFIRMED |
| **Russia-adjacency — the material point** | Kazakhstan's principal AML/sanctions exposure is as a **circumvention channel**, not domestic AML deficiency. The EU has for the first time designated **Central Asian banks**, and the 19th package (Oct 2025) imposed transaction bans on banks in Kazakhstan and Belarus connected to Russian financial-messaging and payment systems. Roughly 500,000 accounts were opened by Russian citizens in Kazakhstan in 2022. Sources: [Consilium 19th package](https://www.consilium.europa.eu/en/press/press-releases/2025/10/23/19th-package-of-sanctions-against-russia-eu-targets-russian-energy-third-country-banks-and-crypto-providers/), [The Diplomat](https://thediplomat.com/2025/10/more-central-asian-banks-sanctioned-by-the-eu/), [BISI](https://bisi.org.uk/reports/eu-sanctions-target-central-asian-banks-for-the-first-time), [Eurasianet](https://eurasianet.org/kazakhstan-banks-flummoxed-by-russian-money-whack-a-mole), [Risk Advisory](https://www.riskadvisory.com/news/kazakhstan-is-vulnerable-to-secondary-sanctions/) — *pages egress-blocked; titles and summaries from the search index.* | LEGAL INTERPRETATION — **UNCONFIRMED in detail** |
| Consequence for this structure | **The risk is in the choice of bank and its correspondent chain, not in the client.** A German-owned, Swiss-parented, UN/MDB-serving advisory has no Russia nexus in the structure as presented. But if the chosen KZ bank is designated, or loses its USD/EUR correspondent, the company's receivables stop moving | LEGAL INTERPRETATION |
| Swiss overlay | The GmbH is Swiss, so **SECO** measures apply to the parent independently of EU/US measures. Screening must include SECO, not only UN/EU/OFAC/OFSI | LEGAL REQUIREMENT |

### 5.3 Recommendations

| # | Recommendation | Priority |
|---|---|---|
| N1 | **Before** selecting a bank, obtain written confirmation of (a) its EU/US/UK designation status, (b) its **USD and EUR correspondent arrangements** and whether they are intact, (c) whether it accepts AIFC-registered companies with a non-resident director. Prefer an AIFC-licensed bank or a top-tier second-tier bank with unimpaired Western correspondents | **HIGH** |
| N2 | **Keep the Swiss GmbH account as the primary receipt account for UN/MDB fees**; use the KZ account for local operating costs. This de-risks the receivables chain entirely and is easy to explain to both banks | **HIGH** |
| N3 | Screen at onboarding and annually against: UN Consolidated, EU Consolidated, **OFAC SDN + SSI**, UK OFSI, **Swiss SECO**, RK national lists, and **MDB debarment/cross-debarment lists** — for the GmbH, the AIFC company, the UBO and both PoA attorneys | HIGH |
| N4 | **Screen the two attorneys.** They will hold a mandate over the corporate affairs of the applicant; the bank will screen them and so should the client, before signing | HIGH |
| N5 | Adopt a short written **AML/sanctions policy** for the new entity covering client acceptance, screening, PEP handling (including the international-organisation PEP point at §5.1), record-keeping and the Part 14-1 Beneficial Ownership Register | MEDIUM |
| N6 | Include a **sanctions representation and termination right** in client contracts, and a no-Russia-nexus representation in supplier contracts | MEDIUM |
| N7 | Prepare a one-page **business rationale memo** ("why an AIFC entity?") for the bank file. This is the highest-value KYC artefact in the whole pack and costs an hour to write | **HIGH** |
| N8 | No PEP speculation about the UBO. Obtain a **signed PEP self-declaration** (P7) and let independent screening do the rest | — |

---

## 6. LEGAL SOURCES — VERIFICATION QUEUE

All four must be opened and initialled by someone with unrestricted access (§0).

| # | Source | What to confirm | URL |
|---|---|---|---|
| 1 | AIFC Companies Regulations, **Part 14-1 (Ultimate Beneficial Owners)**, Chapters 1–2 | UBO definition; threshold %; exact list of "UBO Details"; Beneficial Ownership Register obligation; the 14-day recording/notification deadlines; exemptions | [Part 14-1](https://orderly.myafsa.com/entiresection/a0001000100010001000F/part-14-1:-ultimate-beneficial-owners) · [Ch.1](https://orderly.myafsa.com/entiresection/a0001000100010001000F0001/chapter-1beneficial-ownership-of-relevant-persons) · [Ch.2](https://orderly.myafsa.com/entiresection/a0001000100010001000F0002/chapter-2:-beneficial-ownership-register) |
| 2 | AIFC Companies Regulations, **Part 4 (Company Formation and Incorporation)** | Contents of the incorporation application; the corporate-incorporator certificate requirement; certified-translation requirement | [Part 4](https://orderly.myafsa.com/entiresection/a00010001000100010004/part-4:-company-formation-and-incorporation) · [full text](https://aifc.kz/legal-framework/aifc-companies-regulations/aifc-companies-regulations-full-text/) |
| 3 | AFSA, **Guidance on the Registration Process in the AIFC** (Feb 2025) | The definitive document checklist; notarisation/apostille expectations; whether a structure chart is a required attachment and in what form | [PDF](https://afsa.aifc.kz/wp-content/uploads/2025/02/Guidance-on-the-Registration-Process-in-the-AIFC.pdf) |
| 4 | AFSA, **AIFC Guidance on Ultimate Beneficial Owner** | The UBO "tests"; tracing through layers; the 25% threshold; what a compliant UBO declaration looks like | [PDF (Apr 2025)](https://afsa.aifc.kz/wp-content/uploads/2025/04/AIFC-Guidance-on-Ultimate-Beneficial-Owner.pdf) · [PDF (Nov 2024)](https://afsa.aifc.kz/wp-content/uploads/2024/11/AIFC-Guidance-on-Ultimate-Beneficial-Owner.pdf) |
| 5 | **Swiss Code of Obligations art. 791** (and art. 790a) | That GmbH quotaholders are entered in the commercial register with name, domicile and quota nominal value; the ≥25% beneficial-owner notification duty | [Art. 791 OR](https://www.swissrights.ch/gesetze/Artikel-791-OR-2022-EN.php) · verify at fedlex.admin.ch |
| 6 | **Handelsregisterverordnung art. 117(3)** | The `c/o` domicile-holder consent requirement | fedlex.admin.ch |
| 7 | **Civil Code of the Republic of Kazakhstan** — provisions on *передоверие* (substitution) | Form requirements and notification duties for sub-delegation under a PoA | adilet.zan.kz |
| 8 | **FATF country page — Kazakhstan**; **EU high-risk third countries list** | Current listing status of Kazakhstan | [FATF](https://www.fatf-gafi.org/en/countries/detail/Kazakhstan.html) · [EU Commission](https://finance.ec.europa.eu/news/european-commission-updates-list-high-risk-countries-strengthen-international-fight-against-2025-12-04_en) |

---

## 7. ACTION LIST, IN ORDER

| # | Action | Owner | Blocks filing? |
|---|---|---|---|
| 1 | Re-execute the shareholder resolution with an **express subscription/allotment clause** naming Wiese Advisory GmbH as holder of 100 of 100 shares, and correct the actor, the title (EN and RU) and the capital arithmetic | KZ counsel + Swiss counsel | **YES (AML-01)** |
| 2 | **Re-issue the PoA** per §4.6 R1–R7 (delete capital-increase and Articles-amendment powers; delete substitution; "submit" not "sign" for declarations; notarise + apostille) | Swiss notary + KZ counsel | **YES (AML-02/03)** |
| 3 | Order the **certified, apostilled Zug commercial register extract** + certified EN/RU translation | Guthirt Treuhand | **YES (AML-06)** |
| 4 | Rebuild the **structure chart** per §2.3, signed and certified by the UBO, notarised | Reviewer + UBO | **YES (AML-09/10)** |
| 5 | Resolve the CEO-residency (AoA line 367) and director-IIN (AoA line 358) defects — either obtain an IIN and address the residency requirement, or amend the Articles. This is also a **bank** blocker, not only a corporate one | KZ counsel | **YES (AML-19)** |
| 6 | Align the AoA objects clause (line 114) with the true business, and reconsider the word "finance" | KZ counsel | High |
| 7 | Assemble the KYC pack in §1.2 and §1.3; single apostille run at the Zug Staatskanzlei | Client + Treuhand | High |
| 8 | Write the **business rationale memo** (N7) and the UBO **SoW/SoF** narrative (P5/P6) | UBO | High |
| 9 | Bank selection due diligence (N1) and the two-account strategy (N2) | Client | High |
| 10 | Remove the `Classification: Restricted` footer before execution | KZ counsel | Medium |
| 11 | Open the **Beneficial Ownership Register** on day 1 post-incorporation; add an article to the AoA requiring it (AML-13) | Company | Medium |
| 12 | Verify all eight sources in §6 | Reviewer with unrestricted access | Medium |

---

### Sources

- [AIFC Companies Regulations — Part 14-1: Ultimate Beneficial Owners](https://orderly.myafsa.com/entiresection/a0001000100010001000F/part-14-1:-ultimate-beneficial-owners)
- [AIFC Companies Regulations — Chapter 1: Beneficial Ownership of Relevant Persons](https://orderly.myafsa.com/entiresection/a0001000100010001000F0001/chapter-1beneficial-ownership-of-relevant-persons)
- [AIFC Companies Regulations — Chapter 2: Beneficial Ownership Register](https://orderly.myafsa.com/entiresection/a0001000100010001000F0002/chapter-2:-beneficial-ownership-register)
- [AIFC Companies Regulations — Part 4: Company Formation and Incorporation](https://orderly.myafsa.com/entiresection/a00010001000100010004/part-4:-company-formation-and-incorporation)
- [AIFC Companies Regulations (full text)](https://aifc.kz/legal-framework/aifc-companies-regulations/aifc-companies-regulations-full-text/)
- [AIFC Companies Rules](https://orderly.myafsa.com/entiresection/a0001000100020001/companies-rules)
- [AFSA — Guidance on the Registration Process in the AIFC](https://afsa.aifc.kz/wp-content/uploads/2025/02/Guidance-on-the-Registration-Process-in-the-AIFC.pdf)
- [AFSA — AIFC Guidance on Ultimate Beneficial Owner](https://afsa.aifc.kz/wp-content/uploads/2025/04/AIFC-Guidance-on-Ultimate-Beneficial-Owner.pdf)
- [AFSA — Guidance on Registration in the AIFC](https://afsa.aifc.kz/wp-content/uploads/2024/11/guidance-on-registration-in-the-aifc-1.pdf)
- [Swiss Code of Obligations, Art. 791](https://www.swissrights.ch/gesetze/Artikel-791-OR-2022-EN.php)
- [Grant Thornton — Overview of the Swiss LLC / GmbH](https://www.grantthornton.ch/en/insights/overview-swiss-llc-gmbh/)
- [Azizov & Partners — Features of opening bank accounts by non-residents (Kazakhstan)](https://azizovpartners.kz/en/2023/04/12/features-of-opening-bank-accounts-by-non-residents/)
- [REVERA — Opening a bank account for non-residents of the Republic of Kazakhstan](https://revera.legal/en/info-centr/news-and-analytical-materials/1464-otkrytie-bankovskogo-scheta-dlya-nerezidentov-respubliki-kazaxstan/)
- [GSL — Corporate accounts with banks of Kazakhstan](https://gsl.org/en/offers/services-for-opening-corporate-accounts-with-banks-of-kazakhstan/)
- [FATF — Kazakhstan country page](https://www.fatf-gafi.org/en/countries/detail/Kazakhstan.html)
- [European Commission — updated list of high-risk third countries](https://finance.ec.europa.eu/news/european-commission-updates-list-high-risk-countries-strengthen-international-fight-against-2025-12-04_en)
- [Council of the EU — 19th sanctions package: third-country banks](https://www.consilium.europa.eu/en/press/press-releases/2025/10/23/19th-package-of-sanctions-against-russia-eu-targets-russian-energy-third-country-banks-and-crypto-providers/)
- [The Diplomat — More Central Asian banks sanctioned by the EU](https://thediplomat.com/2025/10/more-central-asian-banks-sanctioned-by-the-eu/)
- [BISI — EU sanctions target Central Asian banks for the first time](https://bisi.org.uk/reports/eu-sanctions-target-central-asian-banks-for-the-first-time)
- [Eurasianet — Kazakhstan: banks flummoxed by Russian money whack-a-mole](https://eurasianet.org/kazakhstan-banks-flummoxed-by-russian-money-whack-a-mole)
- [Risk Advisory — Kazakhstan is vulnerable to secondary sanctions](https://www.riskadvisory.com/news/kazakhstan-is-vulnerable-to-secondary-sanctions/)

*Pages hosted on aifc.kz, afsa.aifc.kz, orderly.myafsa.com, fatf-gafi.org, consilium.europa.eu,
adilet.zan.kz, online.zakon.kz and swissrights.ch were **egress-blocked** from this review
environment (HTTP 403 at the gateway). Content attributed to them derives from search-index
summaries and is labelled UNCONFIRMED throughout.*
