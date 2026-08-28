# R09 — AIFC REGISTRAR FILING-READINESS REVIEW

**Reviewer:** Reviewer 9 — AIFC Registrar Filing-Readiness Specialist
**Review date:** 2026-08-28
**Entity:** Wiese Advisory Eurasia Ltd. (proposed), AIFC, Astana, Kazakhstan
**Incorporating shareholder:** Wiese Advisory GmbH, CHE-212.321.848, c/o Guthirt Treuhand, Ibelweg 18a, 6300 Zug
**Posture adopted:** the package is being uploaded to the Digital Resident portal tomorrow morning.

---

## 0. METHOD, AND A MATERIAL LIMIT ON THIS REVIEW

### 0.1 Primary sources were blocked by this session's egress policy

**FINDING TYPE: FACT.** Direct retrieval (`WebFetch` / `curl`) of every Tier 1 and Tier 2 source
was refused by the organisation's egress proxy with HTTP 403 at CONNECT. Blocked hosts, confirmed
from the proxy's own failure log (`$HTTPS_PROXY/__agentproxy/status`):

| Host | Tier | What was lost |
|---|---|---|
| `aifc.kz` | 1 | Companies Regulations / Companies Rules / Data Protection Regulations full texts |
| `afsa.aifc.kz` | 2 | *Guidance on the Registration Process in the AIFC* (Feb 2025); *Guidance on Registration in the AIFC* (Nov 2024); *AIFC Guidance on Ultimate Beneficial Owner*; `Application-to-Register-Private-Company.docx` |
| `orderly.myafsa.com` | 1 | AFSA rulebook, incl. COR Schedule 5 (Standard Articles), Fees Rules Schedule 5, PERG |
| `adilet.zan.kz` | 1 | Kazakhstan statutory texts |
| `gsl.org`, `en.wikipedia.org`, and all other tested hosts | 3 | commentary |

Per `/root/.ccr/README.md` these are organisation policy denials and must be reported, not routed
around. **All web evidence in this report therefore comes from `WebSearch` result text**, which
returns quoted extracts from those same documents but not the documents themselves. Consequences:

- Where a proposition is supported only by a search extract of a primary instrument, it is marked
  **Tier 1 (extract)** and the section number is given as quoted.
- Where a proposition depends on a *current* AFSA checklist or portal field list that I could not
  open, the status is **EXTERNAL CONFIRMATION REQUIRED**. I have not guessed at any of them.
- **No fee figure in this report should be relied on without re-checking the live Fees Rules.**
  I found two mutually inconsistent published figures (§E.12).

### 0.2 Scope exception carried forward

`26 01 089 _ AoA(1).docx` was not supplied. **UNCONFIRMED — INPUT MISSING.** If two AoA versions
exist, the risk that the wrong one is executed and filed is itself a filing risk and is listed at
§B.14. The Corporate Structure `.pptx` was inventoried but no text extraction was provided to
reviewers; its content is **UNCONFIRMED** and my assessment of it rests on the inventory's
"1 slide / 28 words" metric only.

---

## 1. HEADLINE VERDICT

> **DO NOT FILE TOMORROW.** The package is not a filing. It is three constitutional/authority
> documents plus a chart. The prescribed application, the name reservation, the registered-office
> evidence, the Swiss corporate evidence and the director's IIN are all absent, and two of the
> three supplied documents contain defects that a Registrar reading the constitution will see on
> the face of the page.

**Single largest obstacle, and it is not a drafting one:** Alexander Wiese has no IIN. The Articles
in this package require the sole Director to have one (line 358) and define the CEO as a person who
has one (line 33). Both of those sentences are **verbatim AIFC Standard Articles** (§A.2 below),
so they cannot be dismissed as sloppy drafting — they are the AIFC default. Obtaining an IIN runs
through the AIFC Expat Centre and is measured in weeks, not hours. **This gates the filing date.**

**Second largest, and the most under-appreciated:** the objects clause. "Advisory services in the
fields of finance" is filed with an authority for whom *"Providing Consulting Services"* is itself
a **licensed Ancillary Service**. See §B.5 — this is not a theoretical perimeter risk.

---

## PART A — ITEM-BY-ITEM FILING-READINESS MATRIX

Status legend: **READY** / **NEEDS CORRECTION** / **MISSING** / **NOT APPLICABLE** /
**EXTERNAL CONFIRMATION REQUIRED (ECR)**.

### A.1 Constitutional and authority documents

| # | Required item | Status | Reason | Evidence |
|---|---|---|---|---|
| 1 | **Proposed company name** | **READY** | "Wiese Advisory Eurasia Ltd." uses Latin characters, is immediately followed by "Ltd.", and contains no restricted word ("bank", "insurance", "trust") requiring AFSA written consent. | AoA line 99/102. LEGAL REQUIREMENT: a Private Company "must ensure their name is immediately followed by the word 'Limited' or the abbreviation 'Ltd.'"; name "must not include … 'bank', 'insurance' or 'trust'" absent AFSA written consent — Companies Regulations, Tier 1 (extract) [S3][S9]. |
| 2 | **Name reservation** | **MISSING** | No reservation application or confirmation in the package. A name is reserved only on application and only for **30 days**; that 30-day clock must still be running on the incorporation filing date. | LEGAL REQUIREMENT: "A Person may apply to the Registrar of Companies for the reservation of a name … the Registrar must reserve the name for 30 days", and the application "must be accompanied by the prescribed fee" — Tier 1 (extract) [S9][S4]. FACT: nothing in the 4 files evidences reservation. |
| 3 | **Articles of Association** | **NEEDS CORRECTION** | Substantively the AIFC Standard Articles, which is the right starting point — but it carries (a) a KZT 100 capital arithmetic error, (b) a self-contradictory language clause, (c) another organisation's confidentiality footer, (d) an objects clause that invites a perimeter question, and (e) a CEO clause the accompanying Resolution contradicts. | AoA lines 128, 590–591, footer, 114, 367. See §B. |
| 4 | **Statement that the Articles comply with the Regulations and Rules** (required where the Standard Articles are not adopted in their entirety) | **ECR → assume MISSING** | The AoA departs from Schedule 5 at least by inserting a bespoke SHARE CAPITAL article (line 128) and a bespoke NATURE OF BUSINESS article (line 114), and by adding a bilingual LANGUAGE clause (lines 590–591). On the face of the Rules that triggers the statement obligation. Whether AFSA's current portal collects this as a separate upload or as a tick-box could not be verified (host blocked). | LEGAL REQUIREMENT: "If Standard Articles are not adopted by a Company in its entirety, the Company must submit to the Registrar a statement that the Articles of Association comply with the requirements of AIFC Companies Regulations and AIFC Companies Rules"; and the Articles "must not contain a provision that is inconsistent with" them — AIFC Companies Rules, Tier 1 (extract) [S4]. |
| 5 | **Incorporation resolution of the incorporating shareholder** | **NEEDS CORRECTION** | The document does not do what it must do. Its title, its Russian title, its recital and its operative clause name four different actors; the wrong actor adopts the Articles; it recites a Swiss GmbH's "bye-laws"; and it contains an internal date impossibility (§B.6). | Res. lines 2–3, 7–8, 12, 29, 32. |
| 6 | **Power of Attorney** | **NEEDS CORRECTION** | Substantively fit for the incorporation and banking mandate, but over-broad in one paragraph, uses an undefined term, and has an execution block with no printed name, capacity, date line or notarial certificate. | PoA lines 81, 83, 88–98. See §B.8, §B.9. |
| 7 | **Prescribed application form** (`Application to Register a Private Company`, or its Digital Resident equivalent) | **MISSING** | Not in the package. This is the document the Registrar actually adjudicates; the AoA and Resolution are its annexes. It must state the proposed name, private/public, **the nature of the business**, the amount of initial share capital and shareholdings of the Incorporators, **the nominal value of each Share**, the registered office address, and each Incorporator's full name, nationality and address. | LEGAL REQUIREMENT: application contents — AIFC Companies Regulations Part 2 (incorporation), Tier 1 (extract) [S1]. PRACTICAL REQUIREMENT: AFSA publishes `Application-to-Register-Private-Company.docx` [S8]. |

### A.2 The two clauses the brief flags — corrected characterisation

This is the most important correction this review makes to the working assumptions.

| Clause | Text in the package | What the research shows |
|---|---|---|
| AoA line 358 (Art. 17) | "The Company must have at least 1 Director, who is a natural person and has an Individual Identification Number." | **This is verbatim AIFC Standard Articles, Schedule 5.** A search of that exact string returns AFSA's *SCHEDULE 5: STANDARD ARTICLES OF ASSOCIATION FOR PRIVATE COMPANIES* as the matching official source. Tier 1 (extract) [S6]. |
| AoA line 367 (Art. 18.2) | "…the Chief Executive Officer, who shall be a natural person and a resident of the Republic of Kazakhstan. The Chief Executive Officer shall have the broadest powers to act in all circumstances…" | **Also verbatim Standard Articles, Schedule 5 Art. 18.2**, including the "broadest powers … in its dealings with third parties" sentence. Tier 1 (extract) [S5]. |

**FINDING TYPE: LEGAL INTERPRETATION.** The consequence is the opposite of a drafting complaint and
is worse for the client:

1. These are not stray clauses a Registrar might overlook as boilerplate noise. They are **the
   Registrar's own model text**, which the reviewing officer will recognise on sight.
2. The package therefore does not contain a *drafting* inconsistency so much as a **substantive
   appointment that the AIFC default constitution forbids** — a Swiss-resident CEO under an
   unamended Art. 18.2, and an IIN-less sole Director under an unamended Art. 17.
3. The fix is *not* "tidy up the wording". It is a real choice: **amend Art. 18.2 (or delete the
   CEO appointment entirely) and obtain the IIN**. Amending it is permitted — the model Articles
   "may be amended or supplemented subject to requirements of the AIFC Acts" [S2] — but amending
   triggers the compliance-statement obligation at item A.1/4.

**Separately: AIFC law does not itself impose a residency test on directors.** "A Private Company
must have at least one director, and there are no requirements for their nationality or residency"
(Tier 3 [S2][S16]). The residency constraint here is **self-imposed, and only on the CEO**, by
adopting Schedule 5 unamended. That is a genuinely helpful finding: it means the CEO problem is
solvable by amendment, whereas the IIN problem is not.

### A.3 Shareholder, UBO and officer information

| # | Required item | Status | Reason | Evidence |
|---|---|---|---|---|
| 8 | **Shareholder information** (full name, nationality/jurisdiction, address, shareholding) | **NEEDS CORRECTION** | The parent's name, Swiss registration number and registered address appear only in the **PoA** (line 7), which is an authority document, not a shareholder disclosure. The AoA never names the shareholder; the Resolution names it but not its registration number or address. The register entry cannot be built from these. | PoA line 7; AoA (silent); Res. lines 3–4. LEGAL REQUIREMENT: application must state each Incorporator's full name, nationality and address — Tier 1 (extract) [S1]. |
| 9 | **Corporate shareholder evidence — Swiss commercial register extract** | **MISSING** | Not in the package. Mandatory where the Incorporator is a foreign body corporate. | LEGAL REQUIREMENT: "if an Incorporator is a Body Corporate that is incorporated in a jurisdiction outside the AIFC and is not registered in the AIFC, the application for incorporation of the company must be accompanied by a copy of the Incorporator's current certificate of incorporation or registration in that jurisdiction, or a Document of similar effect, certified by …" — AIFC Companies Regulations, Tier 1 (extract) [S1]. For a Swiss GmbH the "Document of similar effect" is the **Handelsregisterauszug (canton of Zug)**. |
| 10 | **Corporate shareholder evidence — Statuten (GmbH constitutional documents)** | **MISSING** | Not in the package. Needed both as constitutional evidence and to prove Alexander Wiese's authority to bind the GmbH (which the Resolution and the PoA both assert but neither proves). | PoA line 7 ("acting pursuant to the Articles of Association") — an assertion with no annexed Articles. PRACTICAL REQUIREMENT: foreign corporate shareholders provide certificate of incorporation plus constitutional documents [S13]. |
| 11 | **Apostille on the Swiss documents** | **ECR** | Tier 3 commentary from Kazakh counsel states that for AIFC (unlike mainland Kazakhstan) "Documents issued by a foreign country **do not require apostille** and translation into Russian/Kazakh language" [S2]. I could not verify this against the AFSA registration guidance (host blocked). Both Switzerland and Kazakhstan are Hague Apostille parties, so an apostille is cheap insurance. **Recommendation: obtain it; do not rely on the commentary.** | Tier 3 [S2] vs Tier 2 unverifiable. |
| 12 | **Certified English translation of the Swiss documents** | **MISSING (and required)** | The Zug register extract and the Statuten are in German. This is a firm rule, not practice. | LEGAL REQUIREMENT: "The Document accompanying the application must be acceptable to the Registrar of Companies. If the Document is not in the English language, the Document must be accompanied by an English translation **certified to the satisfaction of the Registrar of Companies**" — AIFC Companies Rules, Tier 1 (extract) [S4]. |
| 13 | **UBO declaration** | **MISSING** | No UBO instrument in the package. The PoA anticipates one (line 29: attorneys may submit "information relating to the shareholder, director, Chief Executive Officer (CEO), Ultimate Beneficial Owner (UBO)") but no such information exists in the four files. Note also the **post-incorporation** obligation: a Beneficial Ownership Register must be established **within 30 days of incorporation**, with changes recorded within 14 days. | PoA line 29. LEGAL REQUIREMENT: Companies Regulations Part 14-1 (Ultimate Beneficial Owners), Chapter 2 (Beneficial Ownership Register), Tier 1 (extract) [S10]; AIFC Guidance on Ultimate Beneficial Owner [S10]. |
| 14 | **Director details** | **NEEDS CORRECTION** | Alexander Wiese is appointed Director by the Resolution (line 23). He is a natural person (satisfies the Regulations) but **has no IIN**, which the adopted Articles require (line 358). No director consent-to-act, no passport, no address, no date of birth is in the package. | Res. line 23; AoA line 358; brief §Established facts. |
| 15 | **CEO details** | **NEEDS CORRECTION** | Appointed by the Resolution (line 21) as a Swiss resident, into an office the adopted Articles reserve to a **resident of the Republic of Kazakhstan** who **has an IIN** (lines 33, 367). Two independent disqualifications under the company's own constitution. **The cleanest fix is not to appoint a CEO at all** — Art. 18.1 permits management by the Directors, and Art. 18.2 is permissive ("may appoint"). | Res. line 21; AoA lines 33, 365, 367. |
| 16 | **IIN (Individual Identification Number)** | **MISSING — this is the critical-path item** | Confirmed by the client that Alexander Wiese holds none. Obtained via the **AIFC Expat Centre** (Astana, 55/18 Mangilik El Ave, Pavilion C3.3), through the AIFC portal, with an **in-person appointment** for document submission. Processing time not published. | LEGAL/PRACTICAL REQUIREMENT: "If a foreigner is appointed as director of a company, they must obtain an individual identification number (IIN) … apply to the special Expat Center" [S2][S16]; "If a foreign national is appointed as a Chief Executive Officer … he/she must obtain an [IIN] … IIN is required for the CEO to introduce information about the CEO into the **National Register of Business Identification Numbers**" [S16]; Expat Centre process and address [S15]. |
| 17 | **Passport / ID evidence** (AW; and the two attorneys) | **MISSING** | Not in the package. "For founders who are individuals, a passport is sufficient. If the founder is a legal entity, a Certificate of Incorporation is required. Additional documentation may include originals or notarized copies of passports **and proofs of address** for the directors and shareholders." | Tier 3 [S17]. FACT: AW holds a **German** passport while resident in Switzerland — the nationality/residence split is itself a KYC prompt (§B.11). |
| 18 | **Proof of address** (AW's Swiss residential address) | **MISSING** | Not in the package. Note that the *only* address anywhere in the four files is a **c/o fiduciary address** (`c/o Guthirt Treuhand`), which is a corporate service address, not a residential one, and not AW's. | PoA line 7; Tier 3 [S17]. |
| 19 | **Corporate structure chart** | **NEEDS CORRECTION** | Supplied (`13bb1101-Corporate_Structure.pptx`) but at **1 slide / 28 words** it cannot carry what a chain-of-ownership chart must carry for a two-tier structure with a fiduciary-registered parent: percentages, jurisdictions, registration numbers, the identification of the UBO as a natural person, and a date. **UNCONFIRMED:** no text extraction of the slide was provided to reviewers, so this is an assessment of capacity, not of content. | `01_DOCUMENT_INVENTORY.md` §C. PRACTICAL REQUIREMENT: "If the shareholder is itself owned by another company, the Registrar will follow the chain upwards" [S13]. |

### A.4 Capital, office and activity

| # | Required item | Status | Reason | Evidence |
|---|---|---|---|---|
| 20 | **Share capital** | **NEEDS CORRECTION — arithmetic does not close** | 100 shares × KZT 545.5 = **KZT 54,550**. Both instruments state **KZT 54,450**. The same clause also (a) labels the figure "authorised share capital" while describing issued and allotted shares, (b) states it in EUR and KZT simultaneously, and (c) mis-states 545.5 tenge in words as "five tiyn" (correct: fifty tiyn / пятьдесят тиын). No minimum applies to a Private Company, so the *amount* is unobjectionable — it is the **internal inconsistency** that is fatal, because the Registrar keys nominal value and total capital into the public register from this clause. | AoA line 128; Res. line 32; Russian mirrors AoA line 130 / Res. line 33. LEGAL: no minimum share capital for a Private Company (a Public Company must have allotted capital ≥ USD 100,000) — Tier 1 (extract) [S12][S17]. |
| 21 | **"Authorised" vs issued/allotted terminology** | **NEEDS CORRECTION** | The clause opens "The **authorised share capital** of the Company is EUR 100" and closes "the total nominal value of the **issued and allotted** shares amounts to KZT 54 450". Those are different legal concepts collapsed into one sentence. AIFC distinguishes them: "allotment refers to the giving of the shares to a new shareholder, whereas issue covers the additional step of actually registering a new shareholder" [S12]. The application form asks for **initial share capital** and **nominal value of each Share** [S1] — neither of which is "authorised capital". | AoA line 128. |
| 22 | **Registered office / flexi-desk evidence** | **MISSING** | The AoA (line 107) says only that the office "is situated in the [AIFC] … at the address provided in the public register" — i.e. it names no address at all. That is acceptable in the constitution but the *application* must state the registered office address, and the Registrar expects supporting evidence. | AoA line 107. LEGAL/PRACTICAL REQUIREMENT: "All entities must have a registered office within the AIFC territory in Astana … You must provide a document evidencing the registered office, such as a **lease agreement**" [S11]; "The applicant should provide a copy of the lease agreement duly signed by all relevant parties" [S1]. |
| 23 | **Nature of business / activity description** | **NEEDS CORRECTION — and this is a perimeter exposure, not a wording point** | The objects clause reads "advisory services **in the fields of finance**, corporate governance and business development, as well as … **other advisory and support services**". It is (i) inaccurate — the client-confirmed business is sustainability advisory to UN agencies and MDBs — and (ii) filed with an authority for which **"Providing Consulting Services" is one of five licensed Ancillary Services**. | AoA line 114. LEGAL REQUIREMENT: "the list of ancillary services licensed by the AFSA include: (1) Providing Legal Services (2) Providing Audit Services (3) Providing Accountancy Services (4) **Providing Consulting Services** (5) Providing Credit Rating Services"; "A Centre Participant must not carry on a Regulated Activity, Market Activity or Ancillary Service unless it is **licensed to do so by the AFSA**" — Tier 1/2 (extract) [S7]. See §B.5. |
| 24 | **Business plan** | **NOT APPLICABLE (to the Registrar) / MISSING (for the bank)** | A registration-only (non-licensed) Private Company files an application, not a business plan; the "nature of the business" statement in the application is what the Registrar adjudicates. A business plan and source-of-funds narrative **will** be demanded by the second-tier bank at account opening, and the PoA expressly contemplates the attorneys supplying "information regarding the company's business activities" to banks. | PoA lines 39, 42. **ECR:** whether the current Digital Resident form requests a free-text activity description beyond the s.14 "nature of business" field could not be verified. |

### A.5 Execution, filing mechanics and post-filing

| # | Required item | Status | Reason | Evidence |
|---|---|---|---|---|
| 25 | **Notarisation** | **ECR → treat as MISSING for the PoA** | The PoA's execution block (lines 88–98) is two blank rules with **no printed name, no capacity, no date line, no company stamp line and no notarial certificate**. Whether the Registrar will accept an unnotarised foreign PoA could not be verified; Tier 3 commentary is only that "An individual authorised to act on behalf of the entity must have their authority documented in a resolution or power of attorney and submitted during registration" [S14] — silent on form. **Banks will not be silent.** The PoA covers bank account opening (lines 35–44), and Kazakh second-tier banks routinely require a notarised, apostilled and translated foreign PoA. | PoA lines 88–98. |
| 26 | **Apostille (PoA and Swiss corporate documents)** | **ECR — obtain it anyway** | Same evidential position as item 11. A Swiss notary's certification of AW's signature and capacity, followed by a Zug cantonal apostille, removes the question for both the Registrar and the bank. Filing without it is a bet on a proposition I cannot verify. | See §B.9. |
| 27 | **Certified translation** | **MISSING** | Required for every non-English document (Tier 1, item 12). The English/Russian AoA, Resolution and PoA are self-translating, but the **Swiss documents are not**, and the Russian mirrors themselves contain divergences from the English (§B.13) which a certifying translator would be expected to reconcile. | [S4]. |
| 28 | **Fees** | **ECR — conflicting published figures** | I found **two** incompatible figures and cannot resolve them without the Fees Rules: (a) "The fee for registration/incorporation in the AIFC is **USD 300**" [S2][S18]; (b) "The registration fee is **500 USD for online application and 1500 USD for paper application**" [S8]. There are additionally a name-reservation fee "prescribed … in the Rules" (amount not published in any extract I obtained) [S9], and a Data Protection notification fee [S19]. **Do not budget from this report.** | Fees Rules Schedule 5 / 5-1 / 5-2 [S4]. |
| 29 | **Online filing mechanics** | **NEEDS PREPARATION** | Filing is through the **Digital Resident portal** (digitalresident.kz): create/login to account → new registration application → choose organisational-legal form → complete application → **pay** → submit. **All uploaded documents must be PDF.** Payment is by bank card in-portal. Review is by the Registrar of Companies. **The portal account must be opened in advance** — and by whom matters (see §D). | [S8][S17]. |
| 30 | **Processing time** | **INFORMATIONAL** | Published estimates diverge widely and should be treated as a range, not a promise: "**1–3 business days**" [S1]; "for online applications … without errors or resubmission requests … typically completed within **1 hour to 1 day**" [S8]; "about 2 weeks" [S2]; "5 to 20 working days" [S17]. The spread is itself the point: the fast figures are explicitly conditioned on *no resubmission requests*. | As cited. |
| 31 | **Data protection notification** | **MISSING (post-incorporation)** | An AIFC participant processing personal data must notify the Commissioner of Data Protection, with a fee payable to the AIFCA on each notification. Not a pre-incorporation filing, but it is a live obligation from day one and is routinely forgotten. | LEGAL REQUIREMENT: AIFC Data Protection Regulations **s.19** (notification); "a Data Controller must pay fees to the AIFCA on each notification by the Data Controller under section 19 of the Regulations" — Tier 1 (extract) [S19]. |
| 32 | **Register of Directors / Register of Shareholders** | **NOT APPLICABLE at filing** | Statutory registers are maintained by the company after incorporation, not filed with the application. The AoA correctly defines both. | AoA lines 40–41; Companies Regulations s.90 (Register of Directors and Secretaries) [S2]. |
| 33 | **Company Secretary** | **NOT APPLICABLE** | Optional for a Private Company; the AoA treats it as optional ("a Secretary **may** be appointed"). No action needed. | AoA line 504. |

---

## PART B — WHAT WILL TRIGGER A QUESTION, REJECTION, RESUBMISSION, KYC ESCALATION OR DELAY

Ranked by **likelihood of actually causing friction on a filing made tomorrow**. Severity is given
separately, because the two do not track each other: the most likely trigger is not the most
legally serious, and the most legally serious is not the most likely to be spotted.

| Rank | Trigger | Likelihood | Severity | Outcome type |
|---|---|---|---|---|
| 1 | Director/CEO has no IIN | Certain | **BLOCKER** | Cannot complete; weeks of delay |
| 2 | Application, name reservation, registered office not in package | Certain | **BLOCKER** | Cannot file |
| 3 | Swiss corporate evidence absent | Certain | **BLOCKER** | Statutory non-compliance with the application requirement |
| 4 | Share capital does not add up, in both instruments | Very high | **CRITICAL** | Rejection / resubmission |
| 5 | Objects clause "in the fields of finance" + "other advisory" | High | **CRITICAL** | Perimeter query; possible licensing referral |
| 6 | Resolution appoints a CEO the Articles disqualify | High | **CRITICAL** | Registrar question; refusal to register the CEO |
| 7 | Resolution's actor/capacity defects and date impossibility | Medium-high | **HIGH** | Question on validity of adoption of the Articles |
| 8 | Signature blocks: "Chief Executive Officer" of a Swiss GmbH | Medium-high | **HIGH** | KYC escalation; bank rejection |
| 9 | PoA form: no notarisation, no apostille, empty execution block | Medium-high | **HIGH** | Rejection of attorney-signed filings; certain bank rejection |
| 10 | PoA over-breadth: amend Articles / increase capital / substitution | Medium | **HIGH** | Question; bank refusal to accept |
| 11 | UBO / fiduciary-address / nationality-residence split | Medium | **HIGH** | KYC escalation at the bank |
| 12 | "Authorised" vs issued/allotted; dual EUR/KZT | Medium | **MEDIUM** | Clarification request |
| 13 | Bilingual divergences (AoA language clause; PoA RU vs EN) | Low-medium | **MEDIUM** | Clarification request |
| 14 | Two AoA versions may be circulating | Unknown | **HIGH if real** | Wrong version executed |
| 15 | `Classification: Restricted` footer | Low | **LOW** | Embarrassment on a public register |
| 16 | "five tiyn"; stray "Ltd.."; trailing periods | Low | **TYPOGRAPHICAL** | Cosmetic, but in the constitution |

### B.1 — Director and CEO have no IIN *(Rank 1 · Certain · BLOCKER)*

**FINDING TYPE: LEGAL REQUIREMENT.** The adopted Articles state at line 358 that the Company "must
have at least 1 Director, who is a natural person and **has an Individual Identification Number**",
and at line 33 define the CEO as one who "**has an Individual Identification Number**". Both are
verbatim AIFC Standard Articles [S5][S6]. Independently, Kazakh practice requires it: "If a
foreigner is appointed as director of a company, they must obtain an [IIN] … apply to the special
Expat Center" [S2][S16], and for a CEO the IIN "is required … to introduce information about the
CEO into the National Register of Business Identification Numbers" [S16].

**Why this ranks first:** it is the one defect that no amount of redrafting overnight can cure. It
requires an application through the AIFC portal, approval of documents by the Expat Centre, and an
**in-person appointment in Astana** (09:00–16:00, lunch 13:00–14:00; applications after 14:00 roll
to the next working day) [S15]. **The IIN, not the documents, sets the filing date.**

**ECR:** the current Expat Centre processing time is not published in any source I could reach.
Confirm directly before committing to a date.

### B.2 — The package is not a filing *(Rank 2 · Certain · BLOCKER)*

Four documents were supplied. The Registrar adjudicates a **prescribed application** stating the
proposed name, company type, nature of business, initial share capital and shareholdings, nominal
value per share, registered office address, and each Incorporator's name, nationality and address
[S1]. That form is absent, as is the name reservation (30-day validity, [S9]) and the registered
office evidence [S11][S1]. Filed as-is, there is nothing for the Registrar to grant.

### B.3 — Swiss corporate evidence absent *(Rank 3 · Certain · BLOCKER)*

Where an Incorporator is a foreign body corporate, the application "**must be accompanied by** a
copy of the Incorporator's current certificate of incorporation or registration in that
jurisdiction, or a Document of similar effect, certified by …" [S1]. Nothing of the kind is in the
package. The PoA's bare assertion that the GmbH exists and that AW is its Managing Director
(line 7) is a statement by the very person whose authority is in question. See §C.

### B.4 — The constitution's capital does not add up *(Rank 4 · Very high · CRITICAL)*

100 × KZT 545.5 = **54,550**. Both the AoA (line 128) and the Resolution (line 32) say **54,450**.
The error is duplicated in both Russian mirrors (AoA line 130, Res. line 33), so it will not be
caught by a bilingual cross-check either.

The implied FX rates are mutually inconsistent: EUR 100 → KZT 54,450 implies **544.50/EUR**, while
a nominal value of KZT 545.5 implies **545.50/EUR** — a transposition of one digit propagated
through the whole clause.

**Why the Registrar will see it.** This is not a clause an officer skims. Total share capital and
nominal value per share are **register fields**. The officer must key both from this clause, and
the two numbers supplied are mutually contradictory. There is no way to complete the register entry
correctly from the document as drafted.

**Compounding:** "KZT 545,5 (five hundred forty five tenge and **five tiyn**)" — 545.5 tenge is 545
tenge and **fifty** tiyn. In Kazakh/Russian practice the **words control** over the figure in a
constitutional instrument. On the words, the nominal value is KZT 545.05, and 100 × 545.05 =
KZT 54,505 — a *third* total. The same error is in the Russian ("пять тиын").

**ECR:** the NBK official EUR/KZT rate effective 31 July 2026 could not be checked (`adilet.zan.kz`
and the National Bank were unreachable). Verify the rate independently before re-drafting, and
note §B.7 — the Resolution could not have known that rate when it says it was adopted.

**Recommendation.** Pick one authoritative figure and make every instance agree: figure, words,
Russian figure, Russian words, in both documents and in the application form. Consider choosing a
nominal value that divides cleanly (e.g. KZT 545 × 100 = 54,500) to remove the rounding problem at
source.

### B.5 — The objects clause invites an AFSA perimeter question *(Rank 5 · High · CRITICAL)*

AoA line 114 states the principal activities are "the provision of advisory services **in the
fields of finance**, corporate governance and business development, as well as the provision of
**other advisory and support services** to legal entities and individuals both within and outside
the AIFC".

Two independent problems.

**(a) The consultancy perimeter — the serious one.** AFSA licenses five **Ancillary Services**, and
the fourth is "**Providing Consulting Services**" [S7]. A Centre Participant "must not carry on a
Regulated Activity, Market Activity or Ancillary Service unless it is **licensed to do so by the
AFSA**" [S7]. AFSA publishes a dedicated *Guidance on Providing Consultancy Services in the AIFC*
with a Schedule 1 list of consultancy services whose provision requires authorisation [S7]. A
constitution whose stated principal activity is "the provision of advisory services … as well as
the provision of other advisory and support services" sits directly on that line — and the
open-ended "other advisory and support services" makes it impossible for a reviewing officer to
satisfy themselves that the company falls outside Schedule 1.

**ECR — and this is the single most important external confirmation in this report:** whether the
client's actual business (sustainability advisory to UN agencies and MDBs) falls inside or outside
AFSA's Schedule 1 consultancy list **cannot be determined from this package or from any source I
could reach**, because the Guidance itself is on a blocked host. This must be checked against
Schedule 1 **before filing**, not after. The brief records "non-regulated advisory intended; no
AFSA licence sought" — that is the client's intention, not a legal conclusion, and it has not been
tested against the list.

**(b) "In the fields of finance" is gratuitous.** The Registrar of Companies sits **inside AFSA**,
the financial regulator. Volunteering "finance" as the first-named field, when the actual business
is sustainability advisory to multilateral institutions, adds regulatory salience for no benefit
and describes a business the client does not intend to carry on. Under PERG, "Advising on
Investments" means advice "on the merits of his buying, selling, holding, subscribing for or
underwriting **a particular Investment**" [S7] — the client's work is not that, but the constitution
does not say so.

**Recommendation.** Replace line 114 with an accurate, bounded description of the sustainability
advisory business, drop "in the fields of finance", drop the open-ended catch-all, and add an
express negative statement — the company will not carry on any Regulated Activity, Market Activity
or Ancillary Service in or from the AIFC without AFSA authorisation. A self-limiting objects clause
is the cheapest way to close a perimeter question at the counter. Confirm the classification with
AFSA in writing first.

### B.6 — The Resolution appoints a CEO its own Articles disqualify *(Rank 6 · High · CRITICAL)*

Res. line 21 appoints Alexander Wiese CEO. AoA line 367 — **unamended Standard Article 18.2** —
requires the CEO to be "a resident of the Republic of Kazakhstan"; AoA line 33 requires an IIN. He
is neither. The two documents are in the **same upload**, and the Registrar reads both.

The characterisation matters. This is not "an internally inconsistent package" in the sense of two
drafters disagreeing. It is a package that adopts the Registrar's own model constitution unamended
and then makes an appointment that model forbids. An officer who recognises Schedule 5 — and they
will — sees immediately that the incorporator either did not read Art. 18.2 or intends to ignore it.

**Three clean fixes, in order of preference:**

1. **Do not appoint a CEO.** Art. 18.1 permits management by the Directors; Art. 18.2 is permissive
   ("may appoint"). Delete Res. line 21. This removes the residency problem entirely and removes
   one of the two IIN-dependent offices. **Recommended.**
2. **Amend Art. 18.2** to delete the residency requirement, and file the compliance statement
   (item A.1/4). Permitted — model Articles "may be amended or supplemented subject to requirements
   of the AIFC Acts" [S2] — but it puts a bespoke amendment in front of the Registrar on a first
   filing, and does not solve the CEO's IIN requirement at line 33.
3. **Appoint a Kazakhstan-resident CEO with an IIN.** Solves the constitution but changes the
   client's governance.

Note that fixes 1 and 2 do **not** dispose of §B.1: the **Director** IIN requirement at line 358 is
separate and survives.

### B.7 — Resolution actor, capacity and date defects *(Rank 7 · Medium-high · HIGH)*

The document must prove one thing: that the incorporating shareholder validly resolved to
incorporate and validly adopted the Articles. On its face it does not.

| Defect | Text | Problem |
|---|---|---|
| Four actors, one document | Title "RESOLUTION OF **SHAREHOLDER** OF WIESE ADVISORY GmbH" (line 3) / Russian title "РЕШЕНИЕ **УЧРЕДИТЕЛЯ**" = **FOUNDER** (line 8) / recital "I … am the duly appointed **Director**" (line 12) / signature block "**Chief Executive Officer**" (line 43) | The English title describes a resolution passed *by the GmbH's own shareholder*; the body describes one passed by its *director*; the Russian title uses a third term. What is needed is a resolution **of Wiese Advisory GmbH, acting through its Geschäftsführer, in its capacity as incorporating shareholder of the new AIFC company**. None of the four formulations says that. |
| Wrong actor adopts the Articles | "RESOLVED, that **the Wiese Advisory Eurasia Ltd.** duly adopts proposed Articles of Association" (line 29) | The company does not exist and cannot adopt its own constitution. The incorporating shareholder must. **This is the operative clause the Registrar needs and it is defective.** |
| Stale offshore template | "in conformity with the provisions of the **bye-laws** of the Company" (line 12) | Bermuda/BVI terminology. A Swiss GmbH has *Statuten*. Corroborated forensically: the file was created **2020-04-30** by a different author, at revision **39** (`01_DOCUMENT_INVENTORY.md` §C). |
| Grammatical failure in an operative recital | "I … certify that **I are** the duly appointed Director" (line 12) | In the certifying sentence of a certificate. |
| **Date impossibility (new finding)** | Header "DATED 11th of August 2026" (lines 5–6); recital "adopted by myself on **25th July 2026**" (line 12); capital clause fixes the NBK rate "effective as of **31 July 2026**" (line 32) | A resolution stated to have been **adopted on 25 July 2026** cannot fix an exchange rate **effective 31 July 2026** — a date six days in its future. Either the adoption date, the rate date, or the document date is wrong. The AoA cover page compounds this by reciting approval "by Resolution … Dated 11 August 2026" (AoA lines 1–4), i.e. the *document* date, not the *adoption* date. All four filenames are stamped `26_07_30` (30 July 2026) — a **fourth** date. |

**Why it matters at the counter:** where the incorporating shareholder is a foreign body corporate
and the filing is made by attorneys, the resolution is the document that proves the chain of
authority. A resolution with a self-contradictory adoption date and the wrong party adopting the
constitution is exactly the kind of thing that generates a "please clarify and resubmit".

### B.8 — Signature blocks describe an office Swiss law does not create *(Rank 8 · Medium-high · HIGH)*

Both the AoA (line 602) and the Resolution (line 43) have Alexander Wiese signing **FOR Wiese
Advisory GmbH** as "**Chief Executive Officer**". The PoA (line 7) calls him the GmbH's "**Managing
Director**"; the PoA's own Russian text (line 8) calls him "**Директора**" (Director); the
Resolution body (line 12) calls him "**Director**". Swiss GmbH law knows *Geschäftsführer*.

The Registrar and, far more searchingly, the bank will compare the signing capacity on the face of
the instrument against the **Handelsregisterauszug**, which will record him as *Geschäftsführer*
with a specified signature type (*Einzelunterschrift* or *Kollektivunterschrift zu zweien*). A
document signed in a capacity that does not appear in the register is a direct KYC and
authority-of-signatory question.

**Recommendation.** Use one capacity, matching the Zug register verbatim, in all three documents
and in the English translation of the extract. If the register records *Einzelunterschrift*, say so
in the covering letter — it pre-empts the question.

### B.9 — Will the Registrar accept a Swiss PoA without apostille or notarised translation? *(Rank 9 · Medium-high · HIGH)*

**Status: EXTERNAL CONFIRMATION REQUIRED. I could not verify this and will not guess.**

What I can establish:

- Tier 3 Kazakh counsel commentary states that for AIFC, "**Documents issued by a foreign country
  do not require apostille** and translation into Russian/Kazakh language and must be submitted to
  the AIFC" [S2]. AIFC is deliberately lighter-touch than mainland Kazakhstan on this point.
- Tier 1 is nonetheless explicit that any accompanying document not in English "must be accompanied
  by an English translation **certified to the satisfaction of the Registrar of Companies**" [S4].
  The PoA is already bilingual EN/RU, so this bites on the **Swiss** documents, not on the PoA.
- Tier 3 on authority: "An individual authorised to act on behalf of the entity must have their
  authority documented in a resolution or power of attorney and submitted during registration"
  [S14] — silent as to form.
- The AFSA registration guidance that would settle it is on a blocked host.

**Practical assessment (FINDING TYPE: RECOMMENDATION).** Even if the Registrar accepts a plain PoA,
the same PoA is the instrument the attorneys will present to a **second-tier Kazakh bank** for
account opening (PoA lines 35–44). Banks apply their own standards and routinely require a foreign
PoA to be notarised, apostilled and accompanied by a certified translation. Filing an unnotarised
PoA therefore risks succeeding at the Registrar and failing at the bank — the worse outcome,
because by then the company exists and the clock on its obligations has started.

**Compounding the form problem:** the PoA's execution block (lines 88–98) is **two bare rules**.
No printed name. No capacity. No date beside the signature. No company stamp line. No notarial
certificate. No governing-law clause. Nothing identifies which rule is for which signatory, or
whether a second signature is expected (which matters if the Zug register records
*Kollektivunterschrift zu zweien*). **Fix the execution block regardless of the apostille question.**

**Recommendation.** Have the PoA re-executed before a Swiss notary who certifies AW's identity
**and his capacity to bind the GmbH by reference to the commercial register**, then obtain a Zug
cantonal apostille. Cost is trivial; it removes the question for both the Registrar and the bank,
and it doubles as the authority evidence for §B.3.

### B.10 — PoA over-breadth: amending the Articles and increasing capital *(Rank 10 · Medium · HIGH)*

PoA line 81 authorises the attorneys "to **increase the share capital of the Company**, to execute
the Articles of Association, and to **approve, execute and file any amendments to the Articles of
Association**", plus (line 83) a **right of substitution**, plus a catch-all for "any other legal
and factual acts reasonably necessary".

**Four distinct problems.**

1. **"the Company" is undefined in the PoA.** Line 7 defines Wiese Advisory GmbH as "**the
   Principal**" — not as "the Company". No other definition is given. So "increase the share capital
   of the Company" could read as authority to increase the capital of the **Swiss GmbH**. Under
   Swiss law that requires a shareholders' resolution in **notarised** form; a private PoA cannot
   confer it. Read the other way (the new AIFC company), the power is being granted before the
   company exists, by a person who is not yet its shareholder. **Either reading is defective.**
2. **"Approve" amendments is a shareholder act, not an agent's act.** Under the AoA (line 586)
   "These Articles may be amended by **Special Resolution**". An attorney may execute and file a
   Special Resolution passed by the shareholder; the PoA instead purports to let the attorney
   *approve* it. A Registrar asked to accept a constitutional amendment on an attorney's signature
   alone can reasonably require the underlying Special Resolution of the shareholder. **Attorneys
   should be given filing authority, not approval authority.**
3. **It contradicts the document's own drafting posture.** Lines 66–73 contain a careful, closed
   list of things the attorneys may *not* do — all banking. Line 81 then hands them constitutional
   amendment power and unlimited substitution. A reviewer comparing the two paragraphs sees a
   document that was tightened where the drafter was worried and left wide open where they were not.
4. **Right of substitution with no limit.** The attorneys may delegate to persons the Principal has
   never identified, for twelve months. This is a KYC point as much as a corporate one: the bank
   will ask who may end up holding this authority.

**Will the Registrar accept filings signed by an attorney under it?** For the **incorporation
filings** — probably yes: paragraph 23–34 of the PoA is a precise, well-drawn incorporation
mandate that names the Registrar, names the documents, and covers fee payment and receipt of the
certificate. **ECR** on the Registrar's current formal requirements. For **post-incorporation
constitutional amendments** signed by an attorney under line 81, I would expect a query.

**Recommendation.** Delete "increase the share capital of the Company" and "approve" from line 81;
retain "execute and file amendments to the Articles of Association **as approved by the
Shareholder**". Define "the Company" as the AIFC company. Either delete the right of substitution
or limit it to named persons within a named firm.

### B.11 — KYC escalation profile *(Rank 11 · Medium · HIGH)*

Not a Registrar issue but the same package feeds it, and it is where this structure will actually
be slowed down. Four features combine:

1. **Fiduciary registered address.** The parent's only address is `c/o Guthirt Treuhand, Ibelweg
   18a, 6300 Zug` (PoA line 7) — a Treuhand (trustee/fiduciary) service address. Compliance systems
   treat a c/o fiduciary address as a nominee-address indicator. It is entirely normal in Zug and
   entirely certain to be asked about.
2. **Nationality/residence split.** German national, Swiss resident, incorporating in Kazakhstan
   through two Kazakh attorneys. Three jurisdictions, one natural person.
3. **Sole UBO, sole director, sole CEO, sole authorised signatory.** All four roles in one person
   (Res. lines 18, 21, 23, 26). No segregation, no second signatory, no independent director.
4. **Client base.** UN agencies and MDBs — counterparties whose officers may be PEPs or
   PEP-adjacent, which raises the enhanced-due-diligence probability on the *company's* account.

None of these is a problem. All four together, presented with **no UBO declaration, no passport, no
proof of address and a 28-word structure chart**, is a file that goes to enhanced due diligence.

**Recommendation.** Pre-empt: prepare a one-page UBO and ownership narrative (100% GmbH → 100%
A. Wiese, with the Treuhand relationship explained as a registered-address service, not a nominee
holding), a proper structure chart with percentages, jurisdictions and registration numbers, and a
source-of-wealth note, and hand them over unprompted.

### B.12 — "Authorised" vs issued/allotted, and dual currency *(Rank 12 · Medium · MEDIUM)*

Discussed at A.4/21. AoA line 128 opens with "authorised share capital … EUR 100" and closes with
"the total nominal value of the **issued and allotted** shares". AIFC distinguishes allotment from
issue [S12]; neither is "authorised capital". The application form asks for *initial share capital*
and *nominal value of each Share* [S1]. Expressing the same capital in EUR and KZT in one sentence,
pegged to a single day's NBK rate, also builds an obsolescence date into the constitution: the
sentence becomes false the day the rate moves.

**Recommendation.** State capital in **KZT only**, as an amount of issued and allotted shares, with
the nominal value per share. Move the EUR equivalent and the FX rate into the Resolution as a
recital if the shareholder wants the record, not into the Articles.

### B.13 — Bilingual divergences *(Rank 13 · Low-medium · MEDIUM)*

| Where | Divergence |
|---|---|
| AoA lines 590–591 | "both versions having **equal legal force**" immediately followed by "the **English version shall prevail**". Self-cancelling: a prevalence clause is meaningless if the versions have equal force. Mirrored identically in Russian (lines 592–593), so the contradiction is in both languages. |
| PoA line 16 vs 21 | The English list of authorities includes "**the Astana Financial Services Authority (AFSA)**"; the Russian list **omits AFSA**. Since the Registrar of Companies sits within AFSA, an attorney relying on the Russian text has a narrower mandate than one relying on the English. |
| PoA line 7 vs 8 | EN "**Managing Director**" vs RU "**Директора**". |
| PoA line 28 vs 48 | EN "**prepare**, sign, submit, amend, withdraw and receive"; RU omits "prepare" (готовить). |
| PoA line 8 | The Russian defines Wiese Advisory GmbH as «Доверитель» and then, mid-sentence, applies the same label to Alexander Wiese ("именуемому в дальнейшем «Доверитель»"). **The Russian text defines the principal twice, as two different persons.** |
| PoA line 16 | Ends "…the opening of bank accounts**..**" — double full stop. |
| Res. lines 21, 23 | "Wiese Advisory Eurasia Ltd**..**" — double full stop, twice. Trivial in isolation, but it is the **company name** in an operative appointment clause. |

**Recommendation.** Fix the language clause to say one thing (recommended: equally authentic, with
English prevailing on discrepancy — drop "equal legal force"). Have the Russian PoA re-reconciled;
the double-definition of «Доверитель» is a substantive defect, not a typo.

### B.14 — Possible second AoA version *(Rank 14 · Unknown · HIGH if real)*

**UNCONFIRMED — INPUT MISSING.** The mandate refers to `26 01 089 _ AoA(1).docx`, which was not
supplied. If two AoA versions are in circulation, the risk that the wrong one is executed and filed
is real and material — and irreversible once the constitution is on the public register. **Resolve
before execution**, not before filing.

### B.15 — `Classification: Restricted` footer *(Rank 15 · Low · LOW)*

**FINDING TYPE: FACT, with an irony worth recording.** The footer marking is not a stray from an
unrelated law firm. **It is AFSA's own document classification.** Search results show AFSA's
published PDFs carrying it in their titles — *"1 Guidance on the Registration Process in the AIFC
**Classification: Restricted**"* [S8] and *"**Classification: Restricted Classification: Restricted**
Guidance on…"* [S9]; it even appears in the title metadata of AFSA's own hosted copy of the
Companies Regulations [S9].

Two consequences:

1. **Forensically, this is direct evidence of the AoA's provenance**: it was built from an
   AFSA-sourced template, consistent with the fact that Articles 17 and 18.2 are verbatim
   Schedule 5, and with the metadata anomaly that `lastPrinted` (2025-09-23) precedes `created`
   (2026-01-05) (`01_DOCUMENT_INVENTORY.md` §C).
2. **It is unlikely to cause rejection** — the reviewing officer will recognise their own
   organisation's marking. But it is a confidentiality classification on a document destined for a
   **public register**, and it advertises that the constitution was assembled by copy-paste.
   **Remove it before execution.** Zero cost, non-zero embarrassment.

### B.16 — Typographical *(Rank 16 · Low · TYPOGRAPHICAL)*

"five tiyn" / "пять тиын" (AoA 128/130, Res. 32/33 — but see §B.4, this one is *not* merely
cosmetic because words control over figures); "Ltd.." (Res. 21, 23); "Wiese Advisory GmbH." with
trailing period (AoA line 3); "I are" (Res. 12); Russian "100 евро 100 (сто) евро" — the figure is
duplicated (AoA line 130); Russian "54 450 (пятьдесят четыре тысячи четыреста пятьдесят теңге" —
**unclosed parenthesis** (Res. line 33).

---

## PART C — DOCUMENTS NEEDED FROM SWITZERLAND, NOT IN THE PACKAGE

All of these must be procured in Switzerland. None exists in the four supplied files. The first
four are, in my assessment, hard prerequisites; the remainder are required by the bank and by
prudence.

| # | Document (Swiss name) | Why needed | Form required |
|---|---|---|---|
| C1 | **Handelsregisterauszug**, canton of Zug, for CHE-212.321.848 — current, dated within (typically) 3 months | The "certificate of incorporation or registration … or a Document of similar effect" that the Companies Regulations require to accompany the application where the Incorporator is a foreign body corporate [S1]. Also the **only** document that proves AW's capacity and signature type — which §B.8 puts directly in issue. | Certified current extract + **certified English translation** [S4]; **apostille recommended** (§B.9, ECR) |
| C2 | **Statuten** of Wiese Advisory GmbH | Constitutional evidence of the incorporating shareholder; the PoA asserts AW acts "pursuant to the Articles of Association" (line 7) without producing them. | Certified copy + certified English translation; apostille recommended |
| C3 | **Anteilbuch / shareholder register** of the GmbH | Evidences that Alexander Wiese holds 100% and is therefore the sole UBO. The brief records this as client-confirmed; the Registrar and the bank will want it documented. | Certified extract + certified English translation |
| C4 | **Re-executed Power of Attorney with notarial certification** of AW's identity **and** his authority to bind the GmbH per C1 | Cures the empty execution block (PoA lines 88–98) and the apostille question in one step; required in practice by Kazakh second-tier banks. | Swiss notary + **Zug cantonal apostille** |
| C5 | **Certificate of Good Standing / Existenzbescheinigung** | Not evidenced as a Registrar requirement for a Private Company incorporation (it *is* required for a Recognised Company's head office [S8]). Banks commonly require it. **ECR.** | Certified + translated |
| C6 | **Alexander Wiese's German passport** — certified copy | Identity of the director, CEO, authorised signatory and UBO. Note it is a **German** passport with **Swiss** residence, so identity and residence need two documents, not one. | Notarised copy; apostille recommended |
| C7 | **Proof of Swiss residential address** — *Wohnsitzbestätigung* from the Einwohnerkontrolle, or a utility bill / bank statement < 3 months | Proof of address for the director/shareholder [S17]. Note the *c/o Guthirt Treuhand* address is a **service address and will not serve** — see §B.11. | Original or certified copy; translated if not in English |
| C8 | **UBO declaration** naming Alexander Wiese as sole 100% ultimate beneficial owner, with date of birth, nationality, residence and basis of control | Required for the application's UBO information and for the Beneficial Ownership Register that must be established **within 30 days of incorporation** [S10]. | Signed declaration; bank may require notarisation |
| C9 | **Source of wealth / source of funds statement** | Bank KYC. Given §B.11's escalation profile, prepare it before it is asked for. | Signed, with supporting evidence |
| C10 | **Director's consent to act / personal questionnaire and CV for A. Wiese** | Standard officer information; also feeds the IIN application. **ECR** on the current portal's required fields. | Signed |
| C11 | **Confirmation of the Guthirt Treuhand relationship** (domiciliation agreement or letter) | Explains the c/o address as a registered-address service rather than a nominee holding — the single most likely KYC question (§B.11). | Letter from the Treuhand |
| C12 | **Swiss-side authority for the PoA**, if the Zug register records *Kollektivunterschrift zu zweien* | If AW does not hold sole signing authority, **every document in this package is defectively executed**, including the Resolution and the AoA. C1 will reveal which. | Depends on C1 |

**Not from Switzerland, but equally absent and equally required:** the AIFC registered-office lease
or flexi-desk agreement [S11][S1]; the name reservation [S9]; the prescribed application form [S8];
the compliance statement for non-standard Articles [S4]; the IIN for A. Wiese [S15][S16]; and copies
of the two attorneys' identity documents.

---

## PART D — RECOMMENDED FILING SEQUENCE WITH DEPENDENCIES

Four workstreams. **W1 (Kazakhstan-side, IIN) is the critical path and should start today** — it is
the only item measured in weeks, and it does not depend on any of the drafting work.

```
                         ┌──────────────────────────────────────────────┐
 W1  CRITICAL PATH       │ D1 Confirm IIN route & lead time (Expat Ctr) │
     Kazakhstan          │            ↓                                 │
                         │ D2 IIN application for A. Wiese ──── weeks ──┼──┐
                         └──────────────────────────────────────────────┘  │
                                                                           │
 W2  Switzerland   D3 Order Handelsregisterauszug (C1) ─┐                  │
                   D4 Statuten + Anteilbuch (C2, C3)    ├→ D6 Certified    │
                   D5 Passport, address, UBO (C6–C8)    ┘   translations   │
                          ↓ (C1 reveals signature type)     + apostilles   │
                   D7 Re-execute PoA before notary (C4) ────→ (C10) ───────┤
                                                                           │
 W3  Perimeter     D8 Check activity vs AFSA Schedule 1 consultancy list   │
     ⚠ BEFORE      D9 Written AFSA confirmation: no ASP licence needed     │
       drafting            ↓                                              │
                   D10 Re-draft objects clause (AoA line 114)             │
                                                                           │
 W4  Drafting      D11 Fix capital arithmetic (AoA 128 / Res 32 + RU)     │
                   D12 Resolve CEO: delete appointment (preferred)         │
                   D13 Rewrite Resolution: correct actor, capacity, dates  │
                   D14 Language clause; remove "Restricted" footer; typos  │
                   D15 Narrow PoA line 81 (if not superseded by D7)        │
                          ↓                                                │
                   D16 Compliance statement for non-standard Articles      │
                          ↓                                                │
        ┌──────────────────┴────────────────────────────────────────────┐  │
        │ D17 Name reservation  ⏱ 30-day clock starts — DO NOT DO EARLY │  │
        └──────────────────┬────────────────────────────────────────────┘  │
                           ↓                                               │
                   D18 Registered office / flexi-desk agreement            │
                           ↓                                               │
                   D19 Execute AoA + Resolution (final versions)  ←────────┘
                           ↓                                        (needs IIN
                   D20 Digital Resident account + application form   for D20)
                           ↓
                   D21 Pay fee → submit → Certificate of Incorporation
                           ↓
     POST:  D22 Beneficial Ownership Register  ≤ 30 days
            D23 Data Protection notification (s.19)
            D24 Company-level PoA for the bank; open bank account
```

### Sequencing rules that matter

| Rule | Why |
|---|---|
| **Start D1/D2 today, ahead of everything.** | The IIN is the only item measured in weeks and blocks D19/D20. Every day of drafting saved is worthless if the IIN is not running. [S15][S16] |
| **D8/D9 must precede D10, and D10 must precede D19.** | If the activity falls inside AFSA's Schedule 1 consultancy list, this is not a registration-only filing at all and the whole plan changes. Discovering that *after* incorporation is the worst outcome in this report. [S7] |
| **D3 (register extract) must precede D7 and D19.** | The extract determines AW's signature type. If it records *Kollektivunterschrift zu zweien*, every single-signature document in the package is defectively executed and must be re-executed. |
| **D17 (name reservation) comes LATE, not first.** | The reservation lasts **30 days** [S9]. Reserving before the IIN and the Swiss documents are in hand risks the reservation lapsing and having to be re-taken (and re-paid). Reserve only once D19 is within ~2 weeks. |
| **D16 depends on D10–D14.** | The compliance statement must describe the Articles as finally amended, so it is drafted last among the constitutional documents. [S4] |
| **D19 (execution) must be the last step before filing.** | Execute once, on final text. Executing before D10–D14 are settled re-creates exactly the two-versions risk at §B.14. |
| **D22/D23 are diarised at incorporation, not later.** | The Beneficial Ownership Register is due **within 30 days of incorporation** [S10]; the data protection notification is a live obligation from day one [S19]. Both are commonly missed. |
| **D24 needs a new, company-level PoA.** | The current PoA is granted by the GmbH and binds only the GmbH. Its own line 85 concedes that post-incorporation acts on behalf of the new company "may require a separate power of attorney or corporate resolution issued by such company." |

### Minimum set that must be in hand before D21 is attempted

Application form · name reservation (unexpired) · corrected AoA · corrected Resolution · compliance
statement · Zug register extract + certified English translation (+ apostille) · Statuten ·
UBO declaration · A. Wiese passport + proof of address + **IIN** · registered office agreement ·
structure chart · notarised/apostilled PoA · fee.

---

## PART E — EXTERNAL CONFIRMATION REQUIRED (consolidated)

Every item below is one I could not verify because the source is on a host blocked by this
session's egress policy (§0.1). **None has been guessed at.** Each names what would settle it.

| # | Question | What would confirm it |
|---|---|---|
| E.1 | Does the client's sustainability-advisory business fall inside AFSA's Schedule 1 list of consultancy services requiring authorisation? **Highest-priority item in this report.** | *Guidance on Providing Consultancy Services in the AIFC*, Schedule 1 (`aifc.kz` / `orderly.myafsa.com`); written AFSA confirmation |
| E.2 | Current required-document checklist and portal field list for a Private Company | *Guidance on the Registration Process in the AIFC* (Feb 2025), `afsa.aifc.kz` |
| E.3 | Does the Registrar accept a foreign PoA without notarisation and apostille? | AFSA registration guidance; Registrar enquiry |
| E.4 | Is an apostille genuinely not required for the Swiss corporate documents (Tier 3 says no [S2])? | AFSA registration guidance |
| E.5 | Current incorporation fee — **USD 300** [S2][S18] or **USD 500 online / 1,500 paper** [S8]? | AIFC Fees Rules, Schedule 5 |
| E.6 | Name reservation fee amount | AIFC Fees Rules |
| E.7 | Expat Centre IIN processing time for a non-resident foreign director | AIFC Expat Centre directly |
| E.8 | Is the compliance statement for non-standard Articles a separate upload or a portal declaration? | AFSA registration guidance / portal |
| E.9 | Can the BIN be issued where no officer holds an IIN at incorporation? | AFSA / State Revenue Committee |
| E.10 | Is a CEO with an IIN mandatory in practice for the National Register of BINs, even where the Articles make the office optional? | AFSA Registrar enquiry |
| E.11 | NBK official EUR/KZT rate effective 31 July 2026 | National Bank of Kazakhstan (`adilet.zan.kz` blocked) |
| E.12 | Data Protection notification fee (Data Protection Rules, Schedule 1) | AIFC Data Protection Rules |
| E.13 | Whether the Registrar requires certified copies of the attorneys' identity documents | AFSA registration guidance |

---

## PART F — SOURCES

All entries were retrieved via `WebSearch` result text on 2026-08-28. **Direct retrieval of every
URL below was refused by this session's egress proxy (HTTP 403 at CONNECT)** — see §0.1. Tier is
per the shared brief's hierarchy.

| ID | Source | Tier | URL | Used for |
|---|---|---|---|---|
| S1 | AIFC Companies Regulations (No. 2 of 2017, as amended) — incorporation application contents; foreign body-corporate incorporator evidence; certificate of incorporation; registered office / lease; 1–3 business day review | 1 (extract) | https://aifc.kz/legal-framework/aifc-companies-regulations/aifc-companies-regulations-full-text/ · https://aifc.kz/wp-content/uploads/2024/05/comreg-initial.pdf | A.1/7, A.3/9, A.4/22, B.2, B.3 |
| S2 | Aequitas / AIFC Academy of Law, *Specifics of Setting Up and Registering Companies in the AIFC* — model Articles amendable; no apostille/RU-KZ translation for AIFC; no director residency requirement; foreign director must obtain IIN; USD 300 fee; ~2 weeks | 3 | https://aol.aifc.kz/en/specifics-of-setting-up-and-registering-companies-in-the-aifc · https://dev.aequitas.kz/uploads/Specifics_of_Setting_Up_and_Registering_Companies_in_the_AIFC_340c497c10.pdf | A.2, A.3/11, B.1, B.6 |
| S3 | AFSA — Private Company (types of participants): ≥1 shareholder; name followed by "Limited"/"Ltd." | 2 | https://afsa.aifc.kz/registration/types-of-participants/private-company/ | A.1/1 |
| S4 | AIFC Companies Rules (COR) — Standard Articles in Schedule 5; compliance statement where Standard Articles not adopted in entirety; no provision inconsistent with Regulations/Rules; certified English translation of non-English documents; Fees Rules Schedules 5 / 5-1 / 5-2 | 1 (extract) | https://aifc.kz/wp-content/uploads/2024/06/cor_v6_may_2024_ba.pdf · https://orderly.myafsa.com/entiresection/a0001000100020001/companies-rules | A.1/4, A.3/12, A.5/27, B.9 |
| S5 | AIFC Companies Rules Schedule 5 — Standard Articles for Private Companies, **Art. 18.2** (CEO "a natural person and a resident of the Republic of Kazakhstan"; "broadest powers") | 1 (extract) | https://orderly.myafsa.com/entiresection/a0001000100020001000E/schedule-5:-standard-articles-of-association-for-private-companies | **A.2**, B.6 |
| S6 | AIFC Companies Rules Schedule 5 — Standard Articles, **Art. 17** ("at least 1 Director, who is a natural person and has an Individual Identification Number") | 1 (extract) | https://orderly.myafsa.com/entiresection/a0001000100020001000E/schedule-5:-standard-articles-of-association-for-private-companies | **A.2**, B.1 |
| S7 | AFSA Perimeter Guidance (PERG); AFSA Regulated Activities & Ancillary Services; *Guidance on Providing Consultancy Services in the AIFC* — five licensed Ancillary Services incl. Providing Consulting Services; General Prohibition; "Advising on Investments" definition | 1–2 (extract) | https://aifc.kz/wp-content/uploads/2024/06/perimeter-guidance.pdf · https://aifc.kz/legal-framework/guidance-on-providing-consultancy-services-in-the-aifc/ · https://orderly.myafsa.com/articles/2.3.4.-providing-consulting-services · https://afsa.aifc.kz/regulated-activities/advising-on-investments/ | **A.4/23, B.5** |
| S8 | AFSA — *Guidance on the Registration Process in the AIFC* (Feb 2025); `Application-to-Register-Private-Company.docx`; Digital Resident 7-step process; PDF uploads; card payment; USD 500 online / 1,500 paper; 1 hour–1 day where no resubmission | 2 | https://afsa.aifc.kz/wp-content/uploads/2025/02/Guidance-on-the-Registration-Process-in-the-AIFC.pdf · https://afsa.aifc.kz/wp-content/uploads/2025/02/Application-to-Register-Private-Company.docx | A.1/7, A.5/28–30, B.2, B.15 |
| S9 | AFSA — *Guidance on Registration in the AIFC* (Nov 2024); name reservation (30 days, prescribed fee); restricted words ("bank", "insurance", "trust"); AFSA "Classification: Restricted" marking | 2 | https://afsa.aifc.kz/wp-content/uploads/2024/11/guidance-on-registration-in-the-aifc-1.pdf | A.1/1–2, B.15 |
| S10 | AIFC Companies Regulations Part 14-1 (Ultimate Beneficial Owners), Ch. 2 (Beneficial Ownership Register); AIFC Guidance on UBO — register within 30 days of incorporation; changes within 14 days | 1–2 (extract) | https://orderly.myafsa.com/entiresection/a0001000100010001000F/part-14-1:-ultimate-beneficial-owners · https://afsa.aifc.kz/wp-content/uploads/2024/11/AIFC-Guidance-on-Ultimate-Beneficial-Owner.pdf | A.3/13, C8, D22 |
| S11 | AFSA / AIFC — registered office must be within AIFC territory in Astana; lease agreement as evidence | 2 | https://afsa.aifc.kz/registration/consider-before-opening-business/the-application-process/ | A.4/22 |
| S12 | AIFC Companies Regulations — allotment vs issue; nominal value; Public Company minimum allotted capital USD 100,000 | 1 (extract) | https://aifc.kz/wp-content/uploads/2024/06/comreg_a4_14.12.2019-1.pdf | A.4/20–21, B.12 |
| S13 | Foreign corporate shareholder evidence practice; Registrar follows the ownership chain upwards | 3 | https://www.atlascorp.ae/blog/difc-company-setup-requirements/ | A.3/10, A.3/19 |
| S14 | AIFC — authority to act must be documented in a resolution or power of attorney and submitted at registration | 3 | https://chambers.com/articles/10-burning-questions-to-a-lawyer-about-activities-of-private-companies-in-the-aifc · https://www.aequitas.kz/en/press-center/publications/10-burning-questions-lawyer-about-activities-private-companies-aifc | A.5/25, B.9 |
| S15 | AIFC Expat Centre — IIN process, portal application, in-person appointment, address, hours | 2 | https://expatcentre.aifc.kz/en/obtaining-iin2 · https://aifc.kz/government-services/ | A.3/16, B.1, D1–D2 |
| S16 | Chambers / Aequitas — *10 Questions to a Lawyer About a Director and the CEO in the AIFC*: foreign CEO must obtain IIN; IIN required to enter CEO in National Register of BINs; ≥1 director, no nationality/residency requirement | 3 | https://chambers.com/articles/10-questions-to-a-lawyer-about-a-director-and-the-ceo-in-the-astana-international-financial-centre · https://aequitas.kz/en/press-center/publications/khamidullina-kulteleev-10-questions-about-a-director | A.2, A.3/14–16, B.1 |
| S17 | AIFC registration overview — Digital Resident (digitalresident.kz); passport for individual founders, Certificate of Incorporation for corporate founders; notarised passports and proofs of address; no minimum capital; 5–20 working days | 2–3 | https://aifc.kz/registration/ · https://digitalresident.kz/ | A.3/17–18, A.4/20, A.5/29–30 |
| S18 | Chambers — *Brief Overview: Key Aspects of Law and Activities of the AIFC*: USD 300 registration fee | 3 | https://chambers.com/articles/brief-overview-key-aspects-of-law-and-activities-of-the-astana-international-financial-centre | A.5/28 |
| S19 | AIFC Data Protection Regulations (2025 consolidation) **s.19** notification to the Commissioner; Data Protection Rules Schedule 1 fees | 1 (extract) | https://aifc.kz/legal-framework/aifc-data-protection-rules/aifc-data-protection-rules-full-text/ · https://aifc.kz/wp-content/uploads/2024/06/aifc-data-protection-regulations-2025-1.pdf | A.5/31, D23 |

### Document evidence cited

| Ref | File |
|---|---|
| AoA line *n* | `<scratchpad>/extract/876e0e98-26_01_089___AoA.docx.txt` |
| Res. line *n* | `<scratchpad>/extract/5024e711-26_07_30___Resolution_on_Incorporation.docx.txt` |
| PoA line *n* | `<scratchpad>/extract/1f18f06f-26_07_30_POWER_OF_ATTORNEY_registration.docx.txt` |
| Metadata | `/home/user/habit-tracker/aifc_review/01_DOCUMENT_INVENTORY.md` §C |

*No source document was modified. This phase is review only.*
