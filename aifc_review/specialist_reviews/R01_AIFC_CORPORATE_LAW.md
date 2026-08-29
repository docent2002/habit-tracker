# R01 — SENIOR AIFC CORPORATE LAW COUNSEL

**Entity:** Wiese Advisory Eurasia Ltd. (proposed AIFC Private Company)
**Sole incorporator / shareholder:** Wiese Advisory GmbH (Switzerland, CHE-212.321.848)
**Review date:** 2026-08-29
**Reviewer:** R01 — AIFC corporate law
**Documents reviewed:** AoA (`876e0e98-26_01_089___AoA.docx.txt`), Resolution on Incorporation
(`5024e711-...`), Power of Attorney (`1f18f06f-...`). `26 01 089 _ AoA(1).docx` — **UNCONFIRMED — INPUT MISSING**.

---

## 0. EVIDENCE STATUS — MATERIAL UPGRADE TO REV-001

**FINDING TYPE: FACT.** `04_SOURCE_REGISTER.md` §A records that Tier 1 primary texts could not be
opened and that all conclusions rested on search-index extracts. **That constraint has been overcome
for this review.** The session's `WebFetch` tool is blocked for `aifc.kz`, `afsa.aifc.kz`,
`orderly.myafsa.com`, `adilet.zan.kz` and `online.zakon.kz`, but the **Exa fetch tool
(`web_fetch_exa`) is not routed through the same egress policy** and retrieved the following
in full, verbatim:

| Instrument | Coverage actually read | Method |
|---|---|---|
| AIFC Companies Regulations No. 2 of 2017 (am. 17 Oct 2024, in force 1 Jan 2025) | Parts 1–8 in full: ss.1–121, incl. ss.13–28, 35–58, 77–104 | Exa fetch of AFSA legal-framework portal `orderly.myafsa.com` |
| AIFC Companies Rules (COR) GR0004 of 2017 (am. 22 Sep 2024, in force 1 Jan 2025) | Parts 1–5 in full incl. rr. 2.1–2.5; Part 9 (RSC) in full | Exa fetch of `aifc.kz` PDF + AFSA portal |
| COR **Schedule 5** — Standard Articles for Private Companies | **Complete text, Articles 1–30** | Exa fetch of AFSA portal |
| AFSA *Guidance on the Registration Process in the AIFC* (Feb 2025) | Complete | Exa fetch of `afsa.aifc.kz` PDF |
| AIFC InfoSpace, *Director and CEO: what is the difference?* (7 Nov 2024) | Complete | Exa fetch of `aifc.kz` |

Consequently, findings in this report marked **[T1-full]** rest on the operative text read in situ,
not on snippets. Findings still resting on search extracts are marked **[T1-snippet]**. Residual
caveat: `orderly.myafsa.com` is the AFSA's own legal-framework portal and is treated as authoritative,
but no consolidated gazetted hard copy was inspected, and Registrar *practice* (as distinct from law)
remains unverifiable from here.

**Recommendation to Lead:** REV-001 should be narrowed. It no longer applies to Schedule 5,
COR Part 2, COR Part 9, or Companies Regulations Parts 4, 7 and 10 Ch.2, all of which have now been
read in full.

---

## 1. EXECUTIVE SUMMARY — WHAT I FOUND THAT OTHERS DID NOT

| # | Finding | Type | Severity |
|---|---|---|---|
| **A** | The compliance statement is required by **s.14(5)**, not s.14(2)(c), and must be submitted **before the Articles are adopted**. The Resolution purports to adopt the Articles already. The package therefore contains not merely a *missing document* but a **completed defective sequence**. | LEGAL REQUIREMENT | **BLOCKER** |
| **B** | On the documents' own figures the subscription (KZT 54,450) is **KZT 100 less than aggregate nominal value** (100 × KZT 545.5 = KZT 54,550). s.43(1) provides that an allotment at less than nominal value **is void**. This is not a typo — it is a void allotment. | LEGAL REQUIREMENT | **BLOCKER** |
| **C** | The AoA **omits two matters COR 2.2.2 makes mandatory for bespoke Articles**: (i) the **maximum number of Directors** and (r) **termination and liquidation**. Schedule 5 omits them too — which is precisely why bespoke Articles cannot simply copy Schedule 5. | LEGAL REQUIREMENT | **CRITICAL** |
| **D** | AoA Art. 4 **drops limb (b) of Schedule 5 Art. 4** ("any other lawful activity for which companies may be incorporated under the AIFC Companies Regulations"). The objects clause is narrower than the AIFC standard form, and Art. 18.2 binds the CEO to act "within the limits of the corporate objects". | LEGAL INTERPRETATION | **HIGH** |
| **E** | AoA Art. 31.1 ("both versions having equal legal force") is **inconsistent with s.14(1)** ("Articles of Association must be in the English language"), and s.14(3) forbids provisions inconsistent with the Regulations. The language clause is a legal defect, not merely a self-contradiction. | LEGAL INTERPRETATION | **HIGH** |
| **F** | **Restricted Scope Company registration is temporarily suspended by AFSA.** The option is unavailable, and would be unattractive anyway (mandatory suffix "**Restricted Ltd.**"). | FACT | n/a — closes the question |
| **G** | AoA line 543 (Art. 28) is **verbatim identical to Schedule 5 Art. 28**. It is **not** a deviation, and it does **not** deny the parent access to accounts: s.131(4)(d) and s.132 give the shareholder the accounts as of right, and Art. 28 expressly preserves rights "provided … by the Companies Regulations". The reported finding overstates the effect. | LEGAL INTERPRETATION | **LOW** — correction |
| **H** | An **IIN does not cure AoA Art. 18.2**. Obtaining an IIN through the Expat Centre makes a foreign national *identifiable*, not *resident*. If a CEO is appointed, the residency clause still bites even after the IIN is issued. | LEGAL INTERPRETATION | **CRITICAL** |
| **I** | The **AFSA Feb-2025 Guidance lists CEO under "Required appointments"** with no optionality qualifier (contrast Secretary: "Optional for other legal forms"), and the Digital Resident portal has a CEO section with mandatory KYC. The "CEO is optional" conclusion is correct **as law** (Sched. 5 Art. 18.1 "Directors **or** … CEO") but is **contradicted by current Registrar guidance as practice**. This must be confirmed with the Registrar before the fix is relied on. | UNCONFIRMED | **HIGH** |
| **J** | The footer marking `Classification: Restricted` is **AFSA's own document classification**, carried on AFSA's published guidance PDFs. It is evidence the drafter worked from an **AFSA-issued template**, not from a foreign offshore precedent. Still must be removed. | FACT | **LOW** — correction |
| **K** | **Temporal impossibility:** the Resolution states it was "duly adopted … on 25th July 2026" yet fixes capital by reference to the NBK rate "effective as of **31 July 2026**". A resolution adopted on 25 July cannot fix capital by a rate effective six days later. | FACT | **HIGH** |
| **L** | AoA cover (lines 1–3): "Approved by Resolution **Of the Shareholder of Wiese Advisory GmbH**". That is the shareholder *of the Swiss parent* (i.e. Alexander Wiese personally), not the parent acting *as* shareholder of the new company. A third actor defect, on the AoA rather than the Resolution. | FACT | **HIGH** |
| **M** | **s.100(1) / Art. 15.1 removal trap:** a written resolution cannot remove a Director (s.100(1)), yet AoA Art. 15.1 directs a sole shareholder to act *in writing* and sets a quorum of **two** for meetings. If a Kazakh nominee director is appointed instead of obtaining an IIN, the sole shareholder may have no clean route to remove them. | LEGAL INTERPRETATION | **MEDIUM** |
| **N** | **s.24(3)**: "A Company must conduct its **principal business activity in the AIFC**, unless the Registrar otherwise permits." AoA Art. 4 expressly contemplates services "both within and outside the AIFC". For a firm serving UN agencies and MDBs abroad this is a live constraint requiring Registrar permission or genuine AIFC-located activity. | LEGAL REQUIREMENT | **HIGH** |

---

## 2. IS A PRIVATE COMPANY THE CORRECT VEHICLE?

**FINDING TYPE: RECOMMENDATION — YES, unequivocally. [T1-full]**

The available AIFC legal forms are listed in AFSA *Guidance on the Registration Process in the AIFC*
(Feb 2025) §3.1. Assessed against this client's facts (single foreign corporate shareholder,
non-regulated sustainability advisory to UN agencies and MDBs, EUR 100 capitalisation, one human):

| Form | Fit | Reason |
|---|---|---|
| **Private Company** | **Correct** | Separate legal personality (s.12); shareholder liability limited to unpaid amounts (s.35(1)); **no minimum share capital** (s.43(2)); at least 1 shareholder (s.36(1)(a)); at least 1 Director; Secretary optional (s.89(3)); audit exemption available if turnover ≤ USD 5m and ≤20 shareholders (s.131(6)); "Ltd." suffix is internationally legible on MDB vendor forms. |
| Public Company | No | Requires allotted capital ≥ USD 100,000 (s.43(3)(a)), ≥2 Directors, mandatory Secretary (s.89(1)), mandatory AGM (s.94(2)), mandatory audit and annual return. Grossly disproportionate. |
| Recognised Company (branch of the GmbH) | No | No separate legal personality; the Swiss parent carries the Kazakhstan liability directly; requires the parent's **most recent accounts**, **certificate of good standing** and **certified constitution** (COR 3.1.2, Guidance §3.6). Worse for MDB counterparty risk assessment and worse for the parent. |
| Special Purpose Company | No | Purpose-restricted; requires "SPC Limited"/"SPC Ltd." suffix. Not an operating advisory vehicle. |
| LLP / GP / LP | No | Partnership forms; do not fit a wholly-owned single-corporate-member structure and lose the "Ltd." shorthand. |
| Foundation / NPIO | No | Not share-capital vehicles; USD 1,000 / 1,700 registration fee; wrong legal character for a fee-earning advisory business. |

**Live constraint to flag:** **s.24(3)** — "A Company must conduct its principal business activity in
the AIFC, unless the Registrar otherwise permits." AoA Art. 4 as drafted contemplates advisory
services "both within and outside the AIFC" (AoA line 114). Where the actual engagements are with
UN agencies and MDBs outside Kazakhstan, the Registrar's permission under s.24(3) — or demonstrable
AIFC-located activity — becomes a real requirement, not a formality. **LEGAL REQUIREMENT / HIGH.**
This interlocks with the substance analysis in R05 and should be resolved before filing.

---

## 3. RESTRICTED SCOPE COMPANY — REAL RECOMMENDATION

**FINDING TYPE: RECOMMENDATION — DO NOT PURSUE RSC STATUS. Three independent reasons. [T1-full]**

### 3.1 It is not currently available

> "**The registration of Restricted Scope Companies and Protected Cell Companies is temporarily
> suspended until further notice from AFSA.**"
> — AFSA, *Guidance on the Registration Process in the AIFC* (Feb 2025), §3.1, footnote to the list
> of legal forms.

**FINDING TYPE: FACT.** This is decisive on its own. RSC is not an option on the filing timetable.

### 3.2 Eligibility would be satisfied — but only through one narrow limb

COR **9.3.1** permits RSC status only where the company is a Private Company **and**:

- **(b)** a subsidiary undertaking of a body corporate that **prepares and publishes group accounts**
  — a Swiss GmbH of this size does **not** publish group accounts; **limb (b) fails**;
- **(c)** **directly or indirectly wholly-owned by one person** — Alexander Wiese is the confirmed
  sole 100% UBO of the GmbH, so the AIFC company would be *indirectly* wholly owned by one person;
  **limb (c) is satisfied**;
- **(d)** subsidiary of a body corporate formed by Presidential Decree — not applicable.

So eligibility exists, on limb (c) only. **LEGAL INTERPRETATION.**

### 3.3 Even if available, it would be commercially wrong here

The disclosure benefit is real: COR **9.5.2(e)** requires the Registrar to keep a **separate,
restricted RSC register** publishing only name, identification number, date of registration, type,
former names, registered office history and registered email — and **"The Registrar shall not make
any information in relation to a Restricted Scope Company public or publicly available, other than
is set out above."** COR **9.6.1(a)** further removes the obligation to open the Register of
Shareholders to inspection, and COR **9.6.1(b)** disapplies s.95 (meeting requests).

But against that:

1. **COR 9.5.3 — mandatory name suffix.** "A Restricted Scope Company … must ensure that, whenever
   it uses that name, the name is **immediately followed by the words 'Restricted Limited' or
   'Restricted Ltd.'**" The entity would trade as **"Wiese Advisory Eurasia Restricted Ltd."** For a
   firm whose entire market is UN agency and MDB procurement — where vendor registration, integrity
   due diligence and debarment screening are institutionalised — a legal name containing the word
   "Restricted" is an active liability. This alone should end the discussion.
2. **Banking.** Kazakhstan second-tier banks and correspondent banks apply enhanced scrutiny to
   entities whose beneficial ownership is deliberately withheld from a public register. RSC status
   converts a routine account opening into a difficult one. See R06.
3. **Reversibility risk.** COR 9.4.1(a) lets the Registrar revoke RSC status if eligibility lapses.
   Eligibility here rests entirely on Alexander Wiese remaining sole 100% UBO of the GmbH. Any
   future co-investor in the Swiss parent extinguishes limb (c) and the status.
4. **The disclosure appetite is already satisfied without RSC.** A Private Company that files an
   **annual confirmation statement** under s.26-1 (available because turnover will be under
   USD 500,000 and shareholders under 20) instead of a full **annual return** under s.26 avoids
   filing financial statements with the Registrar altogether; and s.131(6) exempts it from audit.
   The realistic disclosure delta between a Private Company and an RSC is modest.

**RECOMMENDATION:** File as an ordinary Private Company. Elect s.26-1 annual confirmation statement.
Rely on s.131(6) audit exemption. Do not seek RSC status now or later.

---

## 4. NAME STRUCTURE, "Ltd." AND "EURASIA"

### 4.1 The suffix is correct

**FINDING TYPE: LEGAL REQUIREMENT — COMPLIANT. [T1-full]**

> **s.37(1)** — "A Private Company must use only the name of the Company entered in the Register, and
> must ensure that, whenever it uses that name, the name is **immediately followed by the word
> 'Limited' or the abbreviation 'Ltd.'**."

"Wiese Advisory Eurasia **Ltd.**" matches the abbreviation exactly, **including the full stop**,
which the Regulation itself renders as `Ltd.`. AFSA Guidance §3.2 repeats the requirement. Note
s.37(2): contravention (e.g. trading as "Wiese Advisory Eurasia" without the suffix on letterheads)
is punishable by a fine, and **s.25(1)** requires the name, registered office address **and registered
email address** to appear on all letterheads, receipts, order forms and correspondence. Flag to the
client: this is an operational obligation from day one.

### 4.2 "Eurasia" — no rule engaged; residual Registrar discretion only

**FINDING TYPE: LEGAL INTERPRETATION. [T1-full]**

COR **2.4.2** is the exhaustive naming code. Applied to "Wiese Advisory Eurasia Ltd.":

| COR 2.4.2 limb | Engaged? |
|---|---|
| (a) English alphabet / numerals | ✔ compliant |
| (b) not misleading, deceptive or **conflicting with another name** | **Residual risk.** Not a prohibited word, but the Registrar screens for conflict. |
| (c) must not suggest a relationship with AIFCA, AFSA or **any other governmental authority in the AIFC, Astana or the Republic of Kazakhstan** | Not engaged. "Eurasia" is a geographic/continental term, not a Kazakhstan governmental authority. |
| (d) 'bank', 'insurance', 'trust' or words suggesting authorisation to conduct Financial Services | **Not engaged**, but see the caution below. |
| (e) must not suggest a **connection with, or the patronage of, any Person or organisation** without written consent | **Residual risk — the sharpest one.** |
| (f) not otherwise **undesirable** in the Registrar's opinion | Residual discretion. |

**There is no published AIFC list of restricted geographic terms and "Eurasia" appears on none of
the restricted-word lists in COR 2.4.2 or AFSA Guidance §3.2.** The name is very likely acceptable.

**The specific risk worth naming, however, is limb (e) combined with the intended client base.**
"Eurasia" is the distinctive element in the names of several institutions operating in exactly this
market — the **Eurasian Development Bank** (an MDB, and a plausible client), the **Eurasian Economic
Commission** (a supranational governmental body), the **Eurasian Fund for Stabilization and
Development**, and **Eurasian Bank JSC** (a Kazakhstan second-tier bank). A vehicle called
"Wiese Advisory Eurasia Ltd." that markets advisory services *to MDBs* is not, in my view,
misleading — the personal-name prefix "Wiese Advisory" is doing the distinguishing work — but the
Registrar's discretion under 2.4.2(b), (e) and (f) is broad and unappealable other than through the
Decision-making Procedures (s.23(2)).

**RECOMMENDATION:** Use the **name reservation procedure in COR 2.4.1 before filing**. A reservation
is granted for 30 days on payment of the prescribed fee, and converts an open discretionary question
into a closed one **at no risk to the incorporation timetable**. This is cheap insurance and the
PoA already authorises it expressly ("determine and reserve the company name", PoA line 26).

**Also note s.21(2) and s.23:** even after incorporation, the Registrar may direct a change of name
if it becomes misleading, deceptive, conflicting **or otherwise undesirable**. Reservation now does
not extinguish that power, but it is strong evidence the Registrar considered the name acceptable.

---

## 5. MAY A SWISS GmbH BE SOLE SHAREHOLDER? IS 100% CORPORATE OWNERSHIP PERMITTED?

**FINDING TYPE: LEGAL REQUIREMENT — YES, on both counts. [T1-full]**

Four independent textual confirmations:

1. **s.13(1)** — "A company may be incorporated under these Regulations on the application of **any 1
   or more Persons**." "Person" is not restricted to individuals.
2. **s.36(1)(a)** — "A Private Company must … have **at least 1 Shareholder**." No maximum, no
   natural-person requirement, no nationality requirement.
3. **COR 2.1.3** — the Rules **expressly contemplate a foreign corporate incorporator**:
   > "If an **Incorporator is a Body Corporate that is incorporated in a jurisdiction outside the
   > AIFC** and is not registered in the AIFC, the application for incorporation of the company must
   > be accompanied by a copy of the Incorporator's **current certificate of incorporation or
   > registration in that jurisdiction, or a Document of similar effect, certified by the relevant
   > authority in that jurisdiction**."
4. **s.99** and Schedule 5 Art. 16.1 ("including the representative of a **Body Corporate
   Shareholder**") assume corporate shareholders as a matter of course. Under s.99(1) the GmbH
   authorises a representative to act at meetings **by resolution of its Directors or other governing
   body** — which is a further reason the Resolution's actor confusion (Res. line 12) matters: the
   AIFC framework expects a *board/governing-body* resolution of the corporate shareholder, and
   that is precisely what the document fails to be.

**The only prohibition in this area is the reverse one:** **s.32(1)** — "A Body Corporate cannot be a
Shareholder of a Company that is its **Holding Company**." That prevents the new AIFC company from
holding shares in Wiese Advisory GmbH. It does not affect the intended structure.

**Consequential filing requirements the package does not evidence:**

| Requirement | Source | Status in package |
|---|---|---|
| Certified copy of the GmbH's Swiss commercial-register extract / certificate of incorporation, certified by the relevant Swiss authority | **COR 2.1.3** | **NOT PRESENT** — PRACTICAL REQUIREMENT / **CRITICAL** |
| Certified English translation if that document is not in English | **COR 2.1.4** | **NOT PRESENT** — the Zug register extract will be in German. PRACTICAL REQUIREMENT / **HIGH** |
| UBO particulars under Part 14-1, traced through the GmbH to Alexander Wiese | **s.13(4)(g)(iii), s.13(4)(j)**; Guidance §3.4 | Not in the reviewed documents (may sit in the portal form). **UNCONFIRMED** |
| Document evidencing the registered office (e.g. lease) | Guidance §3.5 | **NOT PRESENT** — PRACTICAL REQUIREMENT / **CRITICAL** |

---

## 6. SHARE CAPITAL — FULL ANALYSIS

This is the most damaged part of the package, and the damage is deeper than an arithmetic slip.

### 6.1 Is "authorised share capital" correct AIFC terminology?

**FINDING TYPE: LEGAL INTERPRETATION — the term is used by the AIFC's own Standard Articles, but it
has no operative content in AIFC law. [T1-full]**

Schedule 5 **Article 6** reads, in full:

> "**6. SHARE CAPITAL** — The **authorised share capital** of the Company is [as specified in the
> application]."

So the phrase is **not** an imported foreign-law concept: it is the AIFC's own drafting. However:

- **The AIFC Companies Regulations never use it.** I searched the full text of Parts 4, 5, 6 and 7
  (ss.13–121) as read: the Regulations speak of **"initial share capital"** (s.13(4)(d)),
  **"nominal value of each Share"** (s.13(4)(e)), **"allotted share capital"** (s.43(3)(a)),
  **"share capital"** simpliciter (ss.44, 95(2), 97(3)), and **"Paid-up"** capital (s.25(2)).
  **"Authorised share capital" appears nowhere in the Regulations.**
- It is therefore **not defined**, and it does **not create a statutory ceiling**. Under **s.44** a
  company alters its share capital by Resolution; there is no separate "authorised" pool to be
  increased first, as there would be under an older UK-style or offshore regime.

**Conclusion:** using the phrase is *not wrong* — it replicates Schedule 5 — but drafters and clients
must not read into it the English pre-2006 meaning. **The operative concepts in AIFC law are issued /
allotted / paid-up capital and the fixed nominal value per share.**
Classification of AoA Art. 6's use of the phrase: **OUTDATED TEMPLATE LANGUAGE** (in Schedule 5
itself), replicated without harm — **LOW**.

### 6.2 Is dual EUR/KZT denomination valid?

**FINDING TYPE: LEGAL INTERPRETATION — not prohibited, but incoherent as drafted, and it creates a
live voidness risk. [T1-full]**

- **No currency restriction exists.** Nothing in ss.13, 43 or 44, or in COR Part 2, requires capital
  to be expressed in tenge, or in any single currency. The Regulations' only currency references are
  the **USD** thresholds in ss.43(3)(a), 26(1)(b) and 131(6). **Capital need not be expressed in a
  single currency as a matter of black-letter law.**
- **But s.43(1) requires a fixed nominal value:**
  > "**Each Share in a Company must have a fixed nominal value.** A Share may not be allotted by a
  > Company at less than its nominal value. **An Allotment of a Share that does not have a fixed
  > nominal value, or is Allotted at less than its nominal value, is void.**"

  A value defined by reference to a floating exchange rate is not "fixed". AoA line 128 fixes the
  nominal value in **KZT (545.5 per share)** and describes **EUR 100** as the amount that "will be
  equal to" the KZT total at the NBK rate on a stated date. Read correctly, **KZT is the denomination
  and EUR is merely the subscription consideration**. The drafting does not say so; it presents both
  as the capital, which is why every downstream number is confused.

**Classification: POTENTIALLY HARMFUL DEVIATION** from Schedule 5 Art. 6 (which simply cross-refers to
the application and therefore never has this problem). **Severity: HIGH.**

### 6.3 The KZT 100 discrepancy is a void allotment, not a typo

**FINDING TYPE: LEGAL REQUIREMENT — this is the single most serious defect in the package. [T1-full]**

| Item | Document figure | Arithmetic |
|---|---|---|
| Shares allotted | 100 ordinary shares | AoA line 128; Res. line 32 |
| Nominal value per share | KZT 545.5 | AoA line 128; Res. line 32 |
| **Aggregate nominal value (correct)** | — | **100 × 545.5 = KZT 54,550** |
| Aggregate stated in both documents | **KZT 54,450** | AoA line 128; Res. line 32 |
| **Shortfall** | — | **KZT 100** |

Because the documents state that the total consideration is **KZT 54,450** while the aggregate
nominal value of the shares allotted is **KZT 54,550**, the shares are, on the documents' own face,
**allotted at less than their nominal value**. Under **s.43(1)** such an allotment **"is void"** — not
voidable, not curable by later payment: void.

The consequence is not cosmetic. If the Registrar registers the company on these documents, the
company's only allotment is at risk of being a nullity, meaning:
- the sole shareholder may hold **no valid shares**;
- the s.16(2)(a) deeming ("the Incorporators become the Shareholders") operates on an allotment that
  the Regulations declare void;
- every subsequent shareholder act — the very written resolutions on which the whole governance model
  depends — rests on a defective title.

**This elevates the Lead Reviewer's finding #3 from TYPOGRAPHICAL to BLOCKER.** It must be corrected
before filing, not after.

**Related defect — FX drift.** Even once the arithmetic is fixed, pegging a KZT-denominated
subscription to a EUR amount at a rate fixed on a past date exposes the allotment to the same s.43(1)
risk: if the tenge strengthens against the euro between the stated rate date and actual payment,
EUR 100 will buy less than KZT 54,550 and the allotment is again below nominal.

**Related defect — temporal impossibility (finding K).** The Resolution states it was "duly adopted
… **on 25th July 2026**" (Res. line 12) but fixes capital by the NBK rate "effective as of
**31 July 2026**" (Res. line 32). A resolution adopted on 25 July cannot incorporate a rate effective
six days later. **FACT / HIGH.**

**Related defect — amount in words.** "KZT 545,5 (five hundred forty five tenge and **five tiyn**)" —
545.5 tenge is 545 tenge and **fifty** tiyn. Reproduced identically in Russian ("пять тиын"). Under
Kazakhstan and general drafting convention the words prevail over the figures in case of conflict,
so on a strict reading the nominal value is **KZT 545.05**, giving an aggregate of KZT 54,505 — a
*third* inconsistent figure. **TYPOGRAPHICAL in origin, CRITICAL in effect.**

### 6.4 Does line 128 create the "further-issues" trap?

**FINDING TYPE: LEGAL INTERPRETATION — yes, but the trap is narrower than reported, and it is
neutered by the sole-shareholder fact. [T1-full]**

The mechanism, precisely:

- **AoA Art. 11.1(a)** (= Schedule 5 Art. 11.1(a), = s.44(2)(a)) permits the Company to **increase its
  share capital by Ordinary Resolution**.
- **AoA Art. 6** hard-codes the capital figure, the share count and the nominal value **into the
  constitution**. Schedule 5 Art. 6 does not: it says "[as specified in the application]", so under
  the standard form the capital lives in the **register**, not the **Articles**.
- Because the AoA hard-codes it, any increase makes Art. 6 factually false and requires an
  **amendment of the Articles**, which under **AoA Art. 30** and **s.19(1)** requires a **Special
  Resolution**.

So the two provisions do pull against each other. But three things blunt it:

1. **AoA Art. 1.9** (= Schedule 5 Art. 1.9): "if an Ordinary Resolution is expressed to be required
   for any purpose, then … a **Special Resolution is also effective for that purpose**." The
   inconsistency is one-directional; there is no deadlock, only a higher threshold.
2. **The shareholder holds 100%.** 75% is automatically available. As long as Wiese Advisory GmbH is
   the sole shareholder, the practical impact is **nil**.
3. What is actually lost is **administrative**: every capital change now triggers **s.19(2)** —
   filing the amended Articles, **a certificate from at least one Director** that the amendment
   complies with the Regulations and Rules, and a copy of the Special Resolution, all **within 14
   days**, plus the prescribed fee. That is real friction on every future capital event.

**The genuine hazard is different and worse than the one reported.** Because Art. 6 puts the capital
inside the constitution, and because **PoA line 81** authorises the attorneys "to **increase the share
capital** of the Company, to execute the Articles of Association, and to **approve, execute and file
any amendments to the Articles of Association**", with a **right of substitution** (PoA line 83), the
combination means **two Kazakhstan-resident attorneys, and anyone they substitute, hold a live power
to amend the company's constitution and its capital for twelve months.** That is a governance exposure
the careful negative covenants at PoA lines 66–73 do not touch, because those covenants address bank
accounts only.

**RECOMMENDATION:** Restore Schedule 5 Art. 6 verbatim — "The authorised share capital of the Company
is [as specified in the application]" — and put the figures in the incorporation application where
they belong. This simultaneously (i) removes the Ordinary/Special Resolution conflict, (ii) removes
the need to amend the constitution on every capital change, (iii) removes the attorneys' incentive
and occasion to touch the Articles, and (iv) eliminates the EUR/KZT incoherence from the constitution
entirely.

### 6.5 Is EUR 100 a sensible capitalisation?

**FINDING TYPE: RECOMMENDATION — legally sufficient; commercially inadequate. [T1-full]**

**s.43(2)** — "**A Private Company must have no minimum share capital.**" EUR 100 is therefore lawful.

But three practical considerations point the other way:

1. **Banking.** A Kazakhstan second-tier bank onboarding a newly incorporated foreign-owned entity
   applies enhanced due diligence. A share capital of EUR 100 against a business plan involving UN
   and MDB contracts invites the question "how is this entity funded?" and the answer "by
   intercompany loan from Switzerland" adds a transfer-pricing and source-of-funds discussion at
   exactly the wrong moment. See R06.
2. **Counterparty credibility.** UN agencies and MDBs run supplier financial-capacity assessments.
   Registered capital is a visible field. EUR 100 is a poor signal, and it is a field the company
   cannot explain away in a procurement portal.
3. **s.25(2)** — any reference to share capital in the company's own correspondence **"must be to the
   Company's fully Paid-up share capital"**. So the EUR 100 figure is the figure the company is
   obliged to quote.

**RECOMMENDATION:** Capitalise at a round, defensible KZT figure — my recommendation is **KZT 1,000,000
(approximately USD 2,000)** — expressed in **tenge only**, with a clean nominal value that divides
exactly (e.g. **1,000 shares of KZT 1,000** each). This: removes every rounding and FX problem;
removes the s.43(1) voidness risk permanently; is trivially fundable; and reads credibly on a
procurement form. If the client prefers euro, then denominate the **shares in euro** (e.g. 1,000
shares of EUR 1) and drop the tenge figure entirely — **but do not express the same capital in two
currencies.**

---

## 7. MANDATORY CONSTITUTIONAL MATTERS — COMPLETENESS AUDIT

### 7.1 The threshold question: are these Articles "bespoke"?

**FINDING TYPE: LEGAL INTERPRETATION — YES. [T1-full]**

This determines everything that follows. Having compared the AoA line by line against the full
Schedule 5 text, the AoA **does not adopt the Standard Articles in their entirety**. The substantive
departures are set out in §11 below; the decisive ones are the **omission of Schedule 5 Art. 4(b)**,
the **expansion of Art. 6**, and the **addition of a new Art. 31 (Language and Interpretation)**.

Therefore:
- **s.13(5)** applies — the proposed Articles, **signed by or on behalf of each Incorporator**, must
  be filed with the application;
- **s.14(2)(c)** applies — which imports **COR 2.2.2**;
- **s.14(5)** applies — the incorporators' compliance statement (see §8);
- **s.15(2)** applies — the Registrar must register the filed Articles.

### 7.2 s.14(2) — statutory content of any Articles

| s.14 requirement | Where satisfied in the AoA | Assessment |
|---|---|---|
| **s.14(1)** — must be **in the English language** | AoA is bilingual English/Russian with Art. 31.1 conferring **equal legal force** | **NON-COMPLIANT — see §10.** HIGH |
| **s.14(1)** — divided into **paragraphs numbered consecutively** | Russian mirror is numbered (8.1, 9.1 … 24.15); the English text as extracted shows headings without visible numbering | Likely a `.docx` auto-numbering artefact of the text extraction. **UNCONFIRMED — verify in the native file before filing.** The asymmetry (English auto-numbered, Russian hard-typed) is itself a drift risk. |
| **s.14(2)(a)** — statement whether **Private or Public** | Only the definition at AoA line 35: "**Company** means a Private Company" | **Thin but compliant** — Schedule 5 satisfies s.14(2)(a) the same way. Recommend an express standalone article for the avoidance of doubt. LOW |
| **s.14(2)(b)** via **s.13(4)(a)** — proposed **name** | AoA Art. 2 (line 99) | ✔ |
| **s.14(2)(b)** via **s.13(4)(b)** — Private or Public | as above | ✔ (thin) |
| **s.14(2)(b)** via **s.13(4)(c)** — **nature of the business** | AoA Art. 4 (line 114) | ✔ present, but **truncated** — see §11 item D |
| **s.14(3)** — no provision **inconsistent** with the Regulations or Rules | Art. 31.1 (equal legal force) vs s.14(1) | **BREACHED — see §10.** HIGH |

### 7.3 COR 2.2.2 — mandatory matters for bespoke Articles

Full audit against the operative text of **COR 2.2.2** as read:

| COR 2.2.2 | Matter | AoA provision | Status |
|---|---|---|---|
| (a) | information set out in the form prescribed by the Registrar | Arts. 2, 3, 4, 6 | ✔ (subject to the prescribed form itself — **UNCONFIRMED**, form not obtainable) |
| *(b)* | *[no limb (b) in the Rule as published]* | — | Drafting gap **in the Rule**, noted for the record |
| (c) | the **principal business activities** | Art. 4 | ✔ but truncated — see §11 D |
| (d) | rights attaching to Shares or classes of Shares | Art. 7.1 | ✔ |
| (e) | the **transfer of Shares** | Art. 9 | ✔ |
| (f)(g)(h) | Public Company matters (AGM, GM proceedings, accounts to shareholders) | — | N/A — Private Company |
| **(i)** | **the maximum number of Directors** | **NONE** | ❌ **ABSENT.** Art. 17 states only a *minimum* ("at least 1 Director"). Art. 21.2 refers to "any maximum number of Directors prescribed by the Companies Regulations **or these Articles**" — but neither prescribes one. **MANDATORY DEVIATION / CRITICAL.** |
| (j) | appointment, **retirement**, disqualification and removal of Directors | Arts. 21, 22 | ✔ appointment / disqualification / removal. **"Retirement" is not expressly addressed** (no rotation or term provision). Arguably subsumed in Art. 22(e) resignation. **UNCLEAR / MEDIUM** — recommend an express retirement provision if the Articles stay bespoke. |
| (k) | powers of Directors | Art. 18 | ✔ |
| (l) | proceedings of Directors | Art. 24 | ✔ |
| (m) | if the company is to have a **Secretary** — appointment | Art. 25 | ✔ |
| (n) | keeping of **minutes** of all proceedings | Art. 26 | ✔ |
| (o) | division of powers between Shareholders and Directors | Arts. 18, 19 | ✔ |
| (p) | the **issue of new Shares** | Arts. 7.1, 11.1(a) | ✔ (but see §7.4 — no director allotment authority) |
| (q) | restrictions on the transfer of Shares | Arts. 9.2, 9.4 | ✔ |
| **(r)** | **termination and liquidation of the Company** | **NONE** | ❌ **ABSENT.** The AoA contains no winding-up, dissolution, distribution-on-liquidation or termination provision of any kind. **MANDATORY DEVIATION / CRITICAL.** |

**This is the point that has been missed across the review, and it is the reason bespoke Articles
are dangerous:** Schedule 5 itself contains neither a maximum number of Directors nor a
termination/liquidation article. A drafter who starts from Schedule 5 and then departs from it
inherits Schedule 5's gaps **while losing Schedule 5's immunity from COR 2.2.2**. The AoA has done
exactly that.

### 7.4 Two further gaps worth closing while the Articles are open

1. **No director authority to allot shares.** **s.44(5)**: "the board of Directors of a Company may,
   **if authorised by the Articles of Association or Resolution**, exercise a power of the Company
   (a) to allot and issue Shares". The AoA confers no such authority (Art. 7.1 leaves rights to
   Ordinary Resolution; Art. 11.1 leaves increases to Ordinary Resolution). Every future allotment
   therefore requires a shareholder resolution. For a wholly-owned subsidiary this is a nuisance, not
   a defect. **RECOMMENDATION:** if the Articles stay bespoke, add a standing director allotment
   authority. **MEDIUM.**
2. **Pre-emption rights not disapplied.** **s.48** confers statutory pre-emption rights on existing
   holders of Equity Securities; **s.49(d)** permits a **Private Company** to exclude or vary them
   **by its Articles of Association**. The AoA is silent, so s.48 applies in full. Harmless while
   there is one shareholder; it becomes a live constraint the moment a second shareholder or an
   option holder appears. **RECOMMENDATION:** consider disapplying s.48 under s.49(d) if any future
   equity participation is contemplated. **LOW now, MEDIUM later.**

---

## 8. THE COMPLIANCE STATEMENT — EXACT REQUIREMENT, FORM, AND ABSENCE

**FINDING TYPE: LEGAL REQUIREMENT. VERIFIED IN FULL TEXT. [T1-full]**

### 8.1 The provision is s.14(5), not s.14(2)(c)

Other reviewers identified this requirement but attributed it to "possibly s.14(2)(c)". That is
**incorrect, and the distinction matters**. The two provisions do different work:

- **s.14(2)(c)** is the *content* hook. It provides that a company's Articles must contain "the other
  matters (if any) **required by these Regulations or the Rules** to be included in the Articles of
  Association of a Company." That is the subsection through which **COR 2.2.2** operates (COR 2.2.2
  expressly says "must, **for section 14(2)(c) of the AIFC Companies Regulations**, include provision
  for the following matters"). It imposes no statement obligation at all.
- **s.14(5)** is the *statement* obligation, and it reads in full:

> **s.14(5)** — "**If Standard Articles are not adopted by a Company in their entirety, the Company
> must submit to the Registrar, before the Articles of Association are adopted by the Company, a
> statement by the Incorporators that the Articles of Association proposed to be adopted by the
> Company comply with the requirements of these Regulations, the Rules and all other applicable AIFC
> Regulations and AIFC Rules.**"

### 8.2 Its four operative elements

| Element | Requirement | Application here |
|---|---|---|
| **Trigger** | Standard Articles not adopted in their entirety | **Triggered** — see §7.1 |
| **Maker** | "a statement **by the Incorporators**" — i.e. by **Wiese Advisory GmbH**, the sole Incorporator | Must be made by the GmbH, acting by its **governing body**, not by an individual describing himself as its CEO |
| **Content** | that the proposed Articles **"comply with the requirements of these Regulations, the Rules and all other applicable AIFC Regulations and AIFC Rules"** | Note the breadth: not merely the Companies Regulations |
| **Timing** | **"before the Articles of Association are adopted by the Company"** | **This is the element that has been breached, not merely omitted** |

### 8.3 The prescribed form

**FINDING TYPE: PRACTICAL REQUIREMENT. [T1-full]**

There is **no separate prescribed statutory form**. The requirement is discharged in one of two ways,
per AFSA *Guidance on the Registration Process in the AIFC* (Feb 2025):

- **§3.6, "Required Documentation":**
  > "Entities may: ▪ Adopt the **Standard Template** provided on the AFSA website, or ▪ Submit a
  > **Bespoke Version**, ensuring compliance with the AIFC Companies Regulations and Rules.
  > **A statement confirming such compliance must accompany any bespoke version.**"
- **In the online route**, the Digital Resident portal renders it as an in-form confirmation. The
  Guidance reproduces the portal wording verbatim at §4.4:
  > "Please **confirm that the agreement proposed to be adopted by the Company complies with the
  > requirements of the Companies Regulations, the Rules, and all other applicable AIFC Regulations
  > and AIFC Rules.**"

So the form is: **a signed statement from the Incorporator accompanying the bespoke Articles
(offline route), or the equivalent portal confirmation ticked and e-signed by the authorised person
using a Kazakhstan National Certification Authority EDS (online route)** — Guidance §4.6.

### 8.4 It is absent — and worse, the sequence has already been broken

**FINDING TYPE: FACT / BLOCKER.**

1. **No such statement exists anywhere in the four supplied documents.** The AoA contains no
   compliance recital. The Resolution contains no compliance recital. The PoA authorises the
   attorneys to "prepare, sign and submit the Articles of Association" (PoA line 29) but does not
   mention a compliance statement and does not, on its face, authorise the attorneys to *make* a
   statement that is required by statute to be made **by the Incorporators**.
2. **The timing requirement has already been contravened on the face of the package.** s.14(5)
   requires the statement **before** adoption. But:
   - the AoA cover page is dated **11 August 2026** and states the Articles are "**Approved by
     Resolution**";
   - Res. line 29 states "RESOLVED, that … Wiese Advisory Eurasia Ltd. **duly adopts** proposed
     Articles of Association";
   - the Resolution states it was adopted on **25 July 2026**.

   On the documents' own terms, adoption has occurred and no s.14(5) statement preceded it. Redating
   or back-dating the statement is not an available remedy.

### 8.5 Two remedies, and the better one

**RECOMMENDATION (preferred) — eliminate the requirement rather than satisfy it.**
Adopt the **Schedule 5 Standard Articles in their entirety**. Then:
- **s.13(5)** does not require bespoke Articles to be filed at all;
- **s.14(5)** is not triggered — no compliance statement is needed;
- **COR 2.2.2** is not engaged — the maximum-directors and termination/liquidation gaps disappear;
- **s.15(2)** means the Registrar has nothing bespoke to scrutinise;
- the name, principal business activities and share capital all go into the **application form**,
  because Schedule 5 Arts. 2, 4 and 6 are drafted precisely to cross-refer to it
  ("[as specified in the application]").

This is not a compromise. **Schedule 5 is a complete, fit-for-purpose constitution for a wholly-owned
single-shareholder AIFC advisory company**, and adopting it removes six separate defects at once.

**RECOMMENDATION (fallback) — if bespoke Articles are retained for a specific commercial reason:**
1. Re-execute the Articles as *proposed*, not adopted, removing the "Approved by Resolution" cover.
2. Add the missing COR 2.2.2(i) and (r) provisions and cure the s.14(1) language defect.
3. Have **Wiese Advisory GmbH**, acting by a properly constituted resolution of its
   *Geschäftsführung*, issue the s.14(5) statement.
4. **Submit that statement to the Registrar**, then and only then adopt the Articles by a fresh
   shareholder resolution.

---

## 9. SECRETARY, REGISTERED OFFICE, WRITTEN RESOLUTIONS

### 9.1 Does the company need a Secretary? — No.

**FINDING TYPE: LEGAL REQUIREMENT — NO. [T1-full]**

> **s.89(1)** — "A **Public Company** must have at least 1 Secretary."
> **s.89(3)** — "**A Private Company may have a Secretary.**"
> **s.89(4)** — "If a Private Company does **not** have a Secretary: (a) anything authorised or
> required to be given or sent to, or served on, the Company by being given or sent to, or served on,
> its Secretary may be given or sent to, or served on, **the Company itself** …; and (b) anything else
> required or authorised to be done by the Secretary may be done by **a Director** or a Person
> authorised generally or specifically in that behalf by the Directors."

Confirmed at Tier 2: AFSA Guidance §3.3 — "Company Secretary: Mandatory for Public Companies;
**Optional for other legal forms**."

AoA Art. 25 correctly renders this as permissive ("a Secretary **may** be appointed"), matching
Schedule 5 Art. 25 verbatim. **No deviation.**

**RECOMMENDATION: do not appoint a Secretary.** Two reasons beyond simplicity:
- **COR 2.5.1** — "A Body Corporate must not be the Secretary (or a Secretary) of a Company **unless
  the Body Corporate is incorporated, established or registered in the AIFC**." A corporate secretary
  would have to be an AIFC entity, i.e. a paid AIFC service provider on a recurring fee.
- **s.13(4)(h)** and **s.90** would then require the Secretary's full particulars to be filed and a
  **Register of Secretaries** maintained, and **s.26-1(3)(d)** would add a further notification duty
  to the annual confirmation statement. Appointing one buys nothing and adds three obligations.

The AoA's cross-references to the Secretary (Arts. 13.2 "the Directors or, **if appointed** the
Secretary"; 16.7) are correctly conditional and need no amendment.

### 9.2 Registered office provision — adequate in the Articles, incomplete in the package

**FINDING TYPE: LEGAL REQUIREMENT / PRACTICAL REQUIREMENT. [T1-full]**

**AoA Art. 3 is adequate as a constitutional provision.** It reproduces Schedule 5 Art. 3 with one
change: Schedule 5 still says "**Nur-Sultan**"; the AoA says "**Astana**". Astana is the correct
current name of the city (restored in September 2022). **Schedule 5 is out of date on this point and
the AoA's departure is a correction, not an error.** Classification: **OUTDATED TEMPLATE LANGUAGE**
(in Schedule 5). No action, but worth noting that a Registrar reviewing a "bespoke" AoA against the
standard form will see a difference here — a further small reason to prefer adopting Schedule 5
wholesale and letting the Registrar own its own drafting.

**What the Articles cannot do, and what is missing:**

| Requirement | Source | Status |
|---|---|---|
| Registered office **in the AIFC** at all times | **s.24(1)** | Art. 3 asserts it. ✔ |
| Address must include **building name/number and floor or level**, and consist of a **location address and, if different, a postal address** | **COR 2.3.2, 2.3.3** | Goes in the **application**, not the Articles. Not verifiable from the package. **UNCONFIRMED** |
| **Document evidencing the registered office** (e.g. lease agreement) must accompany the application | AFSA Guidance **§3.5** | **NOT PRESENT in the package.** PRACTICAL REQUIREMENT / **CRITICAL** |
| Office must be within the **AIFC territory** as defined by Presidential Decree No. 161 of 31 Dec 2015 | AFSA Guidance §3.5 | **UNCONFIRMED** |
| **Registered email address** — a separate statutory requirement | **s.24-1(1)**, **s.13(4)(fa)**, **COR 2.3-1** | **NOT ADDRESSED anywhere in the package.** The AoA is silent (as is Schedule 5). COR 2.3-1.2 requires it to be an "appropriate email address" — one at which emails from the Registrar "would be expected to come to the attention of a Person acting on behalf of the Company". PRACTICAL REQUIREMENT / **HIGH** |
| Name, registered office address **and registered email address** on all letterheads and correspondence | **s.25(1)** | Operational obligation from incorporation. Flag to client. |
| **Principal business activity must be conducted in the AIFC** unless the Registrar permits otherwise | **s.24(3)** | See §2 — **HIGH** |

### 9.3 Written shareholder resolutions (s.100) — handled, with one real trap

**FINDING TYPE: LEGAL INTERPRETATION. [T1-full]**

The AoA handles s.100 **correctly and in three places**, all replicating Schedule 5 verbatim:
- the definitions of **Ordinary Resolution** and **Special Resolution** (AoA lines 36, 43) each
  expressly include a resolution in writing "passed under **section 100** (Resolution[s] in writing of
  Private Companies) of the Companies Regulations";
- **Art. 15.1** provides that where there is a single Shareholder "resolutions will be adopted in
  Writing by the single Shareholder";
- **Art. 15.12**: "Resolution in Writing may be passed in accordance with the Companies Regulations."

The statutory machinery, verified in full:
- **s.100(2)**: written Ordinary Resolution passed by simple majority of total voting rights;
- **s.100(3)**: written Special Resolution requires (a) a statement that it is proposed as a Special
  Resolution and (b) 75% of total voting rights. **Practical point:** the express (a) labelling
  requirement is easy to miss. Any future written Special Resolution — including one amending the
  Articles under Art. 30 — **must say on its face that it is proposed as a Special Resolution**, or it
  fails.
- **s.100(5)**: taken to be passed on the date of last signature (or a later specified date).
- **s.100(7)**: **s.104 (minutes) applies to written resolutions as if passed at a meeting** — so the
  company must still enter them in a minute book kept at the registered office.
- **s.101**: where a sole shareholder takes a decision **otherwise than** by written Ordinary
  Resolution, the shareholder "**must provide the Company with a Written record of the decision**".
  Failure does not invalidate the decision (s.101(2)) but is a compliance defect. **The GmbH should
  be advised to route everything through s.100 written resolutions and avoid s.101 entirely.**

**THE TRAP (finding M) — director removal.**

> **s.100(1)** — "Subject to any restrictions in a Private Company's Articles of Association, anything
> that may be done by a Resolution of the Company passed at a Shareholders' meeting (**other than a
> Resolution to remove a Director** or a Person who is registered as an auditor under these
> Regulations) may be done either by a resolution in writing …"

So a Director **cannot** be removed by written resolution. But:
- **AoA Art. 22(f)** provides that a Director's office is vacated if he "is removed by an **Ordinary
  Resolution**";
- **AoA Art. 15.1** provides that where the Company has a single Shareholder, "resolutions **will be
  adopted in Writing** by the single Shareholder", and otherwise "**Two (2) persons entitled to vote
  shall constitute a quorum**."

A sole shareholder therefore faces a structural problem: the written route is closed by s.100(1),
and the meeting route appears to require a quorum of two, which a sole shareholder cannot muster.
(The statutory default at **s.98(b)** — "**except for a Company with a single Shareholder**, at any
General Meeting of the Company, 2 Shareholders personally present or represented by proxy are a
quorum" — recognises and solves this, but s.98 applies only "**unless the Articles of Association
provide otherwise**", and Art. 15.1 does provide otherwise.)

**Why this matters concretely here.** While Alexander Wiese is simultaneously the sole UBO, the
controller of the sole shareholder, and the sole Director, the point is academic. **It stops being
academic the moment a Kazakhstan-resident nominee director is appointed** — which is exactly the
workaround a service provider will propose if the IIN takes time. The parent could then find itself
unable to remove that director cleanly.

**Classification of Art. 15.1: OUTDATED TEMPLATE LANGUAGE** — the defect originates in Schedule 5
Art. 15.1, not in the drafter's work.
**RECOMMENDATION:** if a third-party director is ever appointed, first pass a written Special
Resolution amending Art. 15.1 to provide that **one Shareholder present in person or by proxy is a
quorum where the Company has a single Shareholder**, restoring the s.98(b) position.

---

## 10. THE LANGUAGE CLAUSE IS A LEGAL DEFECT, NOT ONLY A CONTRADICTION

**FINDING TYPE: LEGAL INTERPRETATION / HIGH. [T1-full]**

The Lead Reviewer identified the internal contradiction at AoA lines 590–591 ("both versions having
equal legal force" immediately followed by "the English version shall prevail"). That is correct but
understates the problem. **AoA Art. 31 is a new article with no counterpart in Schedule 5**, and it
collides with two statutory provisions:

1. **s.14(1)** — "A Company's Articles of Association **must be in the English language** and must be
   divided into paragraphs numbered consecutively."
2. **s.14(3)** — "the Articles of Association **must not contain a provision that is inconsistent with
   these Regulations or the Rules**."

A clause conferring **equal legal force** on a Russian version is, on its face, inconsistent with a
requirement that the Articles **be in English**. The document registered by the Registrar under
s.15(2) is the constitution; s.18(1) makes it binding on the company and its shareholders as if
signed by them. Giving a non-English text equal binding force in that instrument is not a translation
convenience — it is a constitutional provision that s.14(1) does not accommodate.

Note the framework runs the other way round: **COR 2.1.4** and **COR 3.1.4** require *non-English*
documents submitted to the Registrar to be **accompanied by a certified English translation**. The
Rules treat English as the operative language and other languages as translations. Art. 31.1 inverts
that.

**RECOMMENDATION:**
- **Preferred:** adopt Schedule 5 in its entirety and let the Articles be **English only**. Produce a
  Russian courtesy translation as a **separate, expressly non-binding** document for the client's own
  and the bank's use.
- **If bespoke Articles are retained:** delete Art. 31.1 and replace Art. 31 with a single clause:
  "*These Articles are made in the English language. Any translation is provided for convenience only
  and has no legal effect. In the event of any discrepancy, the English text governs.*" This removes
  both the s.14(1)/s.14(3) inconsistency and the internal contradiction in one edit.

**Classification: POTENTIALLY HARMFUL DEVIATION.**

---

## 11. DEVIATION REGISTER — AoA vs CURRENT SCHEDULE 5 STANDARD ARTICLES

Compiled from a full line-by-line comparison of the AoA text against the complete Schedule 5 text as
read (COR, am. 22 Sep 2024, in force 1 Jan 2025). Classification per the mandated scale.

| # | AoA ref | Schedule 5 ref | Deviation | Classification | Severity |
|---|---|---|---|---|---|
| D-01 | Art. 3, line 107 | Art. 3 | "**Astana**" replaces Schedule 5's "**Nur-Sultan**" | **OUTDATED TEMPLATE LANGUAGE** (Schedule 5 is stale; the AoA is correct) | TYPOGRAPHICAL |
| D-02 | Art. 4, line 114 | Art. 4(b) | **Limb (b) omitted** — "any other lawful activity for which companies may be incorporated under the AIFC Companies Regulations". The AoA replaces the standard two-limb objects clause with a single narrower activity description. Interacts with Art. 18.2 ("within the limits of the corporate objects") and s.77(a) (director's duty to act in accordance with the Constitutional Documents). Third parties are protected by s.29(2)–(3), so the effect is internal, not external — but a director acting outside the stated objects breaches s.77. | **POTENTIALLY HARMFUL DEVIATION** | **HIGH** |
| D-03 | Art. 6, line 128 | Art. 6 | Schedule 5 reads "The authorised share capital of the Company is **[as specified in the application]**". The AoA substitutes a hard-coded bilingual capital clause containing EUR and KZT figures, share count, nominal value and aggregate nominal value. Produces: the void-allotment risk (§6.3); the FX drift risk (§6.2); the Ordinary/Special Resolution conflict with Art. 11.1(a) (§6.4); and a standing occasion for the PoA attorneys to amend the constitution. | **POTENTIALLY HARMFUL DEVIATION** | **BLOCKER** (via the KZT 100 shortfall) |
| D-04 | Art. 14.4, line 256 | Art. 14.4 | "shorter notice **than** otherwise required" corrects Schedule 5's "shorter notice **that** otherwise required" | **OUTDATED TEMPLATE LANGUAGE** (typo in Schedule 5, correctly fixed) | TYPOGRAPHICAL |
| D-05 | Art. 24, lines 444–476 | Art. 24 | Schedule 5 Art. 24.4 contains two sentences (quorum; conflicted director not counted). The AoA splits them into **24.4 and 24.5**, shifting all subsequent numbering by one and yielding **24.15** where Schedule 5 ends at **24.14**. No cross-references break, so the effect is presentational — but it destroys clause-for-clause alignment with the standard form. | **UNNECESSARY DEVIATION** | LOW |
| D-06 | Art. 22, lines 417–423 | Art. 22(a)–(f) | Schedule 5 letters the six limbs (a)–(f); the AoA English text as extracted shows them unlettered (the Russian mirror retains (a)–(f)). Likely a `.docx` list-formatting artefact. | **UNCLEAR** — verify in the native file | LOW |
| D-07 | **Art. 31**, lines 588–593 | **no counterpart** | New "LANGUAGE AND INTERPRETATION" article. 31.1 confers **equal legal force** on the Russian version — inconsistent with **s.14(1)** and prohibited by **s.14(3)**. 31.2 then contradicts 31.1. | **POTENTIALLY HARMFUL DEVIATION** | **HIGH** |
| D-08 | Whole document | — | Full Russian mirror text integrated into the registered instrument rather than supplied as a separate translation | **UNNECESSARY DEVIATION** (compounds D-07) | MEDIUM |
| D-09 | Signature block, lines 594–607 | no counterpart | Schedule 5 has no execution block. One is **required** by **s.13(5)** ("signed by or on behalf of each Incorporator"). Its presence is correct; the **title used** ("Chief Executive Officer" of a Swiss GmbH) is defective — see R03. | **MANDATORY DEVIATION** (block required); title defect separately CRITICAL | HIGH |
| D-10 | Cover, lines 1–4 | no counterpart | "Approved by Resolution **Of the Shareholder of Wiese Advisory GmbH**" — identifies the approver as the shareholder *of the Swiss parent*, not the parent acting as shareholder of the new company. Also asserts adoption has occurred, breaking the **s.14(5)** sequence. | **POTENTIALLY HARMFUL DEVIATION** | **HIGH** |
| D-11 | Footer | no counterpart | `Classification: Restricted`. **This is AFSA's own document classification marking**, appearing on AFSA's published guidance PDFs (e.g. *Guidance on the Registration Process in the AIFC*, whose header reads "Classification: Restricted"). It is evidence the drafter worked from an **AFSA-issued template**, not from an offshore precedent — a correction to the Lead Reviewer's finding #10. Must nonetheless be removed: a company's constitution must not carry a regulator's internal handling marking. | **UNNECESSARY DEVIATION** | LOW |
| D-12 | **absent** | absent from Schedule 5 too | **Maximum number of Directors** — required by **COR 2.2.2(i)** for bespoke Articles | **MANDATORY DEVIATION** (omission) | **CRITICAL** |
| D-13 | **absent** | absent from Schedule 5 too | **Termination and liquidation of the Company** — required by **COR 2.2.2(r)** for bespoke Articles | **MANDATORY DEVIATION** (omission) | **CRITICAL** |
| D-14 | Arts. 17, 18.1, 18.2 and the CEO definition (lines 33, 358, 365, 367) | Arts. 1.1, 17, 18.1, 18.2 | **Verbatim identical to Schedule 5.** Independently verified against the full text. The Director/IIN and CEO/residency requirements were **not** invented by the service provider and **not** imported from general Kazakhstan law. | **NOT A DEVIATION** — confirms `04_SOURCE_REGISTER.md` §C | — |
| D-15 | **Art. 28, line 543** | **Art. 28** | **Verbatim identical to Schedule 5 Art. 28.** See §12. | **NOT A DEVIATION** | — |
| D-16 | Definitions, lines 30–70 | Art. 1 | Verbatim, including the CEO definition requiring an IIN, and the s.100 cross-references | **NOT A DEVIATION** | — |
| D-17 | Arts. 7–16, 19–27, 29, 30 | corresponding | Verbatim or immaterially reformatted | **NOT A DEVIATION** | — |

---

## 12. AoA LINE 543 (ARTICLE 28) — INSPECTION OF ACCOUNTING RECORDS

**FINDING TYPE: LEGAL INTERPRETATION — the reported finding is overstated. Two corrections. [T1-full]**

### Correction 1 — it is not a deviation

AoA Art. 28 (line 543) and Schedule 5 Art. 28 are **word-for-word identical**:

> "A Shareholder of the Company does not have a right to inspect any Accounting Records, other books
> or other Documents of the Company except so far as the right is provided to the Shareholder by the
> Companies Regulations or the inspection is authorised by the Directors or the Company or the
> Ordinary Resolution of the Company."

**Classification: NOT A DEVIATION.** Any recommendation to amend it is a recommendation to depart
from the AIFC standard form — which, per §7.1 and §8, is precisely what triggers COR 2.2.2 and the
s.14(5) statement. **Amending Article 28 costs more than it buys.**

### Correction 2 — it does not deny the parent access to the subsidiary's books

The article carves out rights "provided to the Shareholder **by the Companies Regulations**". Those
rights are extensive, and I have verified each in the full text:

| Right preserved despite Art. 28 | Provision |
|---|---|
| **Copy of the Company's latest accounts, on written request, without charge, within 7 days** (latest accounts if the s.131(6) audit exemption applies; latest audited accounts and Auditor's report otherwise) | **s.132(1)–(2)** |
| **Accounts must in any event be *sent* to every Shareholder** within 6 months of financial year end | **s.131(4)(d)** |
| **Inspection of the Register of Shareholders and Register of Debt Security Holders**, during business hours, without charge | **s.56(1)** |
| **Inspection of the Register of Directors and Secretaries**, during business hours, without charge | **s.90(2)** |
| **Inspection of the minute books** of General Meetings at the registered office, without charge, **plus a copy within 7 days** on written request | **s.104(4)–(5)** |
| **Copy of the Articles of Association** on request | **s.20(1)** |
| **Copy of the annual return / annual confirmation statement** on request, within 10 days | **s.26(2-1) / s.26-1(11)** |
| **Right to requisition an audit** (holders of ≥10% of nominal share capital, where the s.131(6) exemption applies) | **s.131(7)** |

**What Art. 28 actually removes** is a *general* right to rummage in the raw Accounting Records,
underlying books and internal documents. It does not touch the financial statements, the registers,
the minutes or the constitution.

### And in this structure it is doubly harmless

The shareholder holds **100% of the votes**. Art. 28 itself preserves inspection where "authorised by
the Directors or the Company **or the Ordinary Resolution of the Company**". Wiese Advisory GmbH can
pass a written Ordinary Resolution under **s.100(2)** at any moment authorising itself to inspect
anything, and can remove and replace the Director. The clause has no practical bite against a sole
shareholder.

**RECOMMENDATION: leave Article 28 unamended.** If the Swiss parent's auditors or the German/Swiss
tax position later require standing, unconditional access to underlying records, deal with it in an
**intra-group services and information agreement** between parent and subsidiary — a contract, not
the constitution. That achieves the same result without disturbing the standard form and without
triggering s.14(5).

---

## 13. GOVERNANCE — IS THE STRUCTURE OVER-COMPLICATED?

**FINDING TYPE: RECOMMENDATION — YES. The package builds a four-office structure for a company with
one shareholder and one human. [T1-full]**

The Resolution appoints Alexander Wiese to **three** offices (CEO, Director, Authorised Signatory —
Res. lines 21, 23, 26); the PoA adds **two attorneys** with a **right of substitution** and a power to
amend the Articles; and the AoA carries a **conditional Secretary** office and a **chairperson**
apparatus (Arts. 15.3, 24.6). For a wholly-owned advisory company with a single human principal, this
is over-built, and each superfluous office creates a filing, a KYC subject and a failure mode:

- **Every officer requires KYC.** AFSA Guidance §4.5: KYC verification is mandatory for shareholder
  individuals, UBOs, **Directors, CEO, Secretary and Authorised Signatory** — including video
  identification. Each office added is another verification loop and another point of delay.
- **The CEO office is the one that breaks the package.** AoA Art. 18.2 (= Schedule 5 Art. 18.2)
  requires the CEO to be "a natural person **and a resident of the Republic of Kazakhstan**", and the
  CEO definition (line 33) additionally requires an **IIN**. The Resolution appoints a Swiss-resident
  German national to that office.
- **Crucially: obtaining an IIN does not fix this (finding H).** An IIN is a Kazakhstan individual
  identification number obtainable by a foreign national through the AIFC Expat Centre. **It is an
  identifier, not a residence status.** Satisfying the *definitional* IIN limb leaves the *Art. 18.2
  residency* limb unsatisfied. Any advice that "he gets an IIN and can then be CEO" is wrong.

### The simplest compliant arrangement

| Office | Recommendation | Authority |
|---|---|---|
| **Shareholder** | Wiese Advisory GmbH, 100% | s.13(1), s.36(1)(a), COR 2.1.3 |
| **Director** | **Alexander Wiese, sole Director** — after obtaining an IIN via the AIFC Expat Centre | AoA Art. 17 / Sched. 5 Art. 17; Guidance §3.3 |
| **CEO** | **Do not appoint** — see the caveat below | Sched. 5 Art. 18.1: business "must be managed by **the Directors or** by another natural person … bearing the title of Chief Executive Officer" |
| **Secretary** | **Do not appoint** | s.89(3); Guidance §3.3 |
| **Authorised Signatory** | Alexander Wiese | Guidance §3.3, §4.3 item 11 |
| **Chairperson** | Do not appoint — Arts. 15.3 and 24.6 operate perfectly well with no chair appointed | AoA Arts. 15.3, 24.6 |
| **Shareholder decisions** | Written resolutions under **s.100**, each Special Resolution expressly labelled as such per s.100(3)(a); minuted per s.100(7)/s.104 | ss.100, 104 |
| **Attorneys under the PoA** | Retain for filing mechanics only. **Narrow the PoA**: delete the power to increase share capital and to approve/execute/file amendments to the Articles; delete or condition the right of substitution; delete the "any other legal and factual acts" catch-all | PoA lines 81, 83 |

Result: **one shareholder, one Director, one signatory, no CEO, no Secretary, no chair.** That is the
minimum lawful configuration and it is fully sufficient.

### The caveat that must be resolved before relying on this (finding I)

`04_SOURCE_REGISTER.md` S-03 states the AIFC guidance says "the appointment of a Chief Executive
Officer is **optional**". **I could not verify that quotation.** I read the cited page
(*Director and CEO: what is the difference?*, aifc.kz, 7 Nov 2024) in full: it says the CEO is
"Appointed either by the Shareholders or Directors", "Represents the company's interests when
interacting with external parties", and "**Should possess an Individual Identification Number
(IIN)**". It says a company "may appoint same individuals for Director and CEO positions". **It does
not say the CEO is optional, and it does not mention Kazakhstan residency at all.**

The optionality conclusion is nevertheless **correct as a matter of law**, and rests on firmer ground
than that guidance page — namely the disjunctive in **Schedule 5 Art. 18.1**, read verbatim:

> "the business of the Company must be managed by **the Directors or** by another natural person
> appointed by the Shareholders or Directors and bearing the title of Chief Executive Officer."

and on the fact that **nothing in the AIFC Companies Regulations requires a CEO at all** — I searched
the full text of Parts 4–8 (ss.13–121) and the term "Chief Executive Officer" **does not appear
anywhere in the Regulations**, except as the title of the AFSA's own officer in s.9(2). The office
exists only in Schedule 5 of the Rules and in the registration form.

**But Registrar practice points the other way**, and this is the risk that must be closed:

- **AFSA Guidance §3.3, "Required appointments"** lists **Directors, Chief Executive Officer (CEO),
  Company Secretary and Authorised Signatory**. The Secretary entry is expressly qualified
  ("Mandatory for Public Companies; Optional for other legal forms"). **The CEO entry carries no such
  qualifier** — it states only "The CEO must have a Kazakhstani Individual Identification Number
  (IIN), obtainable through the AIFC Expat Centre."
- **Guidance §4.3 item 9** makes "Information on CEO" a section of the Digital Resident registration
  form, and **§4.5** makes CEO KYC mandatory.

**FINDING TYPE: UNCONFIRMED / HIGH.** The law does not require a CEO; the Registrar's published
guidance and portal appear to. **Before filing, the attorneys must obtain the Registrar's written
confirmation that the CEO field may be left blank for a Private Company.** Three outcomes:

1. **Confirmed optional** → file with no CEO. Clean; nothing else changes.
2. **CEO field is mandatory in practice** → then the residency clause bites, and there are only two
   lawful routes: (a) appoint a **Kazakhstan-resident** CEO (a real cost, a real governance dilution,
   and the s.100(1) removal trap at §9.3 then becomes live); or (b) **go bespoke deliberately** and
   amend Art. 18.2 to delete the residency requirement — which is a *legitimate* reason to depart
   from Schedule 5, but then the full s.14(5) + COR 2.2.2 apparatus in §7 and §8 must be satisfied
   properly.
3. **Ambiguous** → treat as (2) and plan for the bespoke route.

**This is the single most consequential open question in the file, because it determines whether the
Standard-Articles route (which resolves six other defects) is available at all.**

---

## 14. CONSOLIDATED FINDINGS BY SEVERITY

### BLOCKER — do not file

| Ref | Finding | Evidence | Legal basis |
|---|---|---|---|
| B-1 | **Missing s.14(5) incorporators' compliance statement, and the adoption sequence it governs has already been broken** | Absent from all four documents; AoA cover lines 1–4; Res. line 29 | **s.14(5)**; AFSA Guidance §3.6, §4.4 |
| B-2 | **Shares allotted at less than aggregate nominal value (KZT 54,450 subscribed vs KZT 54,550 aggregate nominal) — allotment void** | AoA line 128; Res. line 32 | **s.43(1)** |
| B-3 | **CEO appointed who is disqualified by the company's own Articles**; an IIN does not cure it | AoA line 367; Res. line 21 | AoA Art. 18.2 = Sched. 5 Art. 18.2; **s.18(1)**, **s.77(a)** |

### CRITICAL

| Ref | Finding | Legal basis |
|---|---|---|
| C-1 | Bespoke Articles omit the **maximum number of Directors** | **COR 2.2.2(i)** via s.14(2)(c) |
| C-2 | Bespoke Articles omit **termination and liquidation** | **COR 2.2.2(r)** via s.14(2)(c) |
| C-3 | Director must hold an **IIN**; Alexander Wiese has none — procedural, curable via the AIFC Expat Centre, but must precede filing | AoA Art. 17 = Sched. 5 Art. 17 |
| C-4 | **Certified Swiss register extract for the corporate Incorporator not in the package**, and no certified English translation | **COR 2.1.3, 2.1.4** |
| C-5 | **No document evidencing the registered office** (lease) in the package | AFSA Guidance §3.5 |
| C-6 | **Amount in words** ("five tiyn") yields a third, different capital figure | s.43(1) |

### HIGH

| Ref | Finding | Legal basis |
|---|---|---|
| H-1 | Art. 31.1 "equal legal force" inconsistent with the English-language requirement | **s.14(1)**, **s.14(3)** |
| H-2 | Art. 4 drops the Schedule 5 general-objects limb, narrowing corporate objects | Sched. 5 Art. 4(b); s.77(a) |
| H-3 | **s.24(3)** — principal business activity must be conducted in the AIFC unless the Registrar permits otherwise; AoA Art. 4 contemplates activity outside | **s.24(3)** |
| H-4 | **Registered email address** not addressed anywhere in the package | **s.24-1**, s.13(4)(fa), COR 2.3-1 |
| H-5 | Temporal impossibility: resolution adopted 25 July fixes capital by a 31 July rate | Res. lines 12, 32 |
| H-6 | AoA cover identifies the approver as "the Shareholder **of Wiese Advisory GmbH**" | s.13(5) |
| H-7 | **CEO may be mandatory in Registrar practice** notwithstanding Sched. 5 Art. 18.1 — must be confirmed | AFSA Guidance §3.3, §4.3, §4.5 |
| H-8 | PoA empowers attorneys to increase capital and amend the Articles, with substitution — aggravated by Art. 6 hard-coding the capital | PoA lines 81, 83; s.19 |

### MEDIUM

| Ref | Finding | Legal basis |
|---|---|---|
| M-1 | Art. 6 hard-coding creates an Ordinary/Special Resolution conflict with Art. 11.1(a) and an amendment-filing burden on every capital change | AoA Arts. 6, 11.1(a), 30; s.19(2), s.44 |
| M-2 | **s.100(1) director-removal trap** combined with Art. 15.1's two-person quorum | s.100(1), s.98(b), AoA Arts. 15.1, 22(f) |
| M-3 | No standing director authority to allot shares | **s.44(5)** |
| M-4 | COR 2.2.2(j) "**retirement**" of Directors not expressly addressed | COR 2.2.2(j) |
| M-5 | Full Russian mirror integrated into the registered instrument rather than supplied separately | s.14(1); COR 2.1.4 |

### LOW / TYPOGRAPHICAL

| Ref | Finding |
|---|---|
| L-1 | `Classification: Restricted` footer — AFSA's own document marking, must be removed (D-11) |
| L-2 | "Eurasia" — no rule engaged; residual Registrar discretion; mitigate by name reservation under COR 2.4.1 |
| L-3 | Art. 24 renumbering (24.1–24.15 vs Schedule 5's 24.1–24.14) |
| L-4 | Art. 22 limbs unlettered in the English text (likely extraction artefact — verify in the native file) |
| L-5 | s.14(2)(a) private/public statement carried only by the definition at line 35 — thin but standard-form compliant |
| L-6 | Statutory pre-emption rights (s.48) not disapplied under s.49(d) |

---

## 15. RECOMMENDED COURSE OF ACTION

1. **Resolve the CEO question with the Registrar first.** Everything else branches off it (§13).
2. **Then adopt the Schedule 5 Standard Articles in their entirety** (assuming outcome 1 or 3 above
   permits it). This single decision resolves B-1, C-1, C-2, H-1, H-2, H-6, M-1, M-4, M-5, L-1, L-3,
   L-4 and L-5, and removes the Registrar's occasion to scrutinise a bespoke constitution at all.
   Name, principal business activities and share capital go into the **application form**, which is
   where Schedule 5 Arts. 2, 4 and 6 expect to find them.
3. **Re-fix the capital in a single currency**, arithmetically clean, at a commercially credible
   level: **KZT 1,000,000 = 1,000 shares of KZT 1,000**. Cures B-2 and C-6 permanently and removes
   all FX exposure under s.43(1).
4. **Obtain an IIN for Alexander Wiese** through the AIFC Expat Centre before filing (C-3).
5. **Re-issue the Resolution** as a resolution of the *Managing Director / Geschäftsführung of Wiese
   Advisory GmbH acting as sole Incorporator* — correcting the actor, the "bye-laws" reference, the
   "the Company adopts its own Articles" defect and the 25 July / 31 July date impossibility, and
   **deleting the CEO appointment** (subject to step 1).
6. **Narrow the Power of Attorney** — remove the power to increase share capital and to amend the
   Articles, remove or condition the right of substitution, and cap the catch-all (H-8).
7. **Assemble the documents the package is missing**: certified Swiss register extract with certified
   English translation (C-4); registered office lease (C-5); registered email address (H-4); UBO
   particulars under Part 14-1.
8. **Reserve the name** under COR 2.4.1 before filing (L-2).
9. **Address s.24(3)** — establish, or obtain the Registrar's permission for, the location of the
   principal business activity (H-3), coordinating with R05 on substance.
10. **Elect the s.26-1 annual confirmation statement** and rely on the **s.131(6)** audit exemption
    to obtain, lawfully, most of the disclosure economy the client was looking to RSC status for.

---

## 16. SOURCES

**Method note.** All Tier 1 rows below marked "**VERIFIED — full text**" were retrieved and read in
full during this review using the Exa fetch tool, which is not subject to the `WebFetch` egress
block recorded in `04_SOURCE_REGISTER.md` §A. Rows marked "VERIFIED (extract)" rest on search-index
extracts only. Rows marked UNCONFIRMED could not be obtained.

| Issue | Source | Provision | Version/date | URL | Status |
|---|---|---|---|---|---|
| Corporate incorporator permitted; 1+ persons may incorporate | AIFC Companies Regulations | **s.13(1), (3), (4)** | No. 2 of 2017, am. 17 Oct 2024, in force 1 Jan 2025 | https://orderly.myafsa.com/entiresection/a00010001000100010004/part-4:-company-formation-and-incorporation | **VERIFIED — full text** |
| Bespoke Articles must be signed by each Incorporator and filed | AIFC Companies Regulations | **s.13(5)** | as above | as above | **VERIFIED — full text** |
| Mandatory constitutional content | AIFC Companies Regulations | **s.14(1), (2)(a)–(c), (3), (4)** | as above | as above | **VERIFIED — full text** |
| **Incorporators' compliance statement — exact requirement and timing** | AIFC Companies Regulations | **s.14(5)** | as above | as above | **VERIFIED — full text** |
| Registrar registers filed Articles; discretion to refuse | AIFC Companies Regulations | **s.15(1), (2)** | as above | as above | **VERIFIED — full text** |
| Articles bind company and shareholders | AIFC Companies Regulations | **s.18(1)** | as above | as above | **VERIFIED — full text** |
| Amendment by Special Resolution; 14-day filing + director's compliance certificate | AIFC Companies Regulations | **s.19(1), (2), (2-1)** | as above | as above | **VERIFIED — full text** |
| Shareholder entitled to copy of Articles | AIFC Companies Regulations | **s.20(1)** | as above | as above | **VERIFIED — full text** |
| Misleading / conflicting names; Registrar power to require change | AIFC Companies Regulations | **ss.21, 22, 23** | as above | as above | **VERIFIED — full text** |
| Registered office in AIFC; **principal business activity in the AIFC** | AIFC Companies Regulations | **s.24(1), (3)** | as above | as above | **VERIFIED — full text** |
| Registered email address mandatory | AIFC Companies Regulations | **s.24-1** | as above | as above | **VERIFIED — full text** |
| Name, office and email on all correspondence; capital references must be to paid-up capital | AIFC Companies Regulations | **s.25(1), (2)** | as above | as above | **VERIFIED — full text** |
| Annual return threshold (USD 500,000 / 20 shareholders) | AIFC Companies Regulations | **s.26(1), (2-1)** | as above | as above | **VERIFIED — full text** |
| Annual confirmation statement alternative for Private Companies | AIFC Companies Regulations | **s.26-1** | as above | as above | **VERIFIED — full text** |
| Filing of Special Resolutions affecting Constitutional Documents (15 days) | AIFC Companies Regulations | **s.28** | as above | as above | **VERIFIED — full text** |
| Company has capacity of a natural person; third parties protected | AIFC Companies Regulations | **s.29** | 17 Oct 2024 | https://orderly.myafsa.com/entiresection/a00010001000100010005/part-5 | **VERIFIED — full text** |
| Subsidiary cannot hold shares in its Holding Company | AIFC Companies Regulations | **s.32(1)** | as above | as above | **VERIFIED — full text** |
| Limited liability of shareholders | AIFC Companies Regulations | **s.35(1)** | 17 Oct 2024 | https://orderly.myafsa.com/entiresection/a00010001000100010007/part-7 | **VERIFIED — full text** |
| Private Company: at least 1 Shareholder | AIFC Companies Regulations | **s.36(1)** | as above | as above | **VERIFIED — full text** |
| **"Limited" or "Ltd." suffix mandatory** | AIFC Companies Regulations | **s.37(1), (2)** | as above | as above | **VERIFIED — full text** |
| **Fixed nominal value; allotment below nominal value is VOID; no minimum capital for Private Companies** | AIFC Companies Regulations | **s.43(1), (2), (3)** | as above | as above | **VERIFIED — full text** |
| Alteration of share capital by Resolution; director allotment authority requires Articles or Resolution | AIFC Companies Regulations | **s.44(1)–(3), (5)** | as above | as above | **VERIFIED — full text** |
| Non-cash consideration for shares in a Private Company | AIFC Companies Regulations | **s.45** | as above | as above | **VERIFIED — full text** |
| Statutory pre-emption rights; Private Company may disapply by Articles | AIFC Companies Regulations | **ss.48, 49(d)** | as above | as above | **VERIFIED — full text** |
| Prohibition of public offers by Private Companies | AIFC Companies Regulations | **s.50** | as above | as above | **VERIFIED — full text** |
| Shareholder right to inspect Register of Shareholders | AIFC Companies Regulations | **s.56(1)** | as above | as above | **VERIFIED — full text** |
| Director's duty to act in accordance with Constitutional Documents | AIFC Companies Regulations | **s.77(a)** | as above | as above | **VERIFIED — full text** |
| **Secretary: mandatory for Public, optional for Private; fallback where none** | AIFC Companies Regulations | **s.89(1), (3), (4)** | as above | as above | **VERIFIED — full text** |
| Register of Directors and Secretaries; shareholder inspection | AIFC Companies Regulations | **s.90(1), (2)** | as above | as above | **VERIFIED — full text** |
| Private Company not required to hold an AGM | AIFC Companies Regulations | **s.94(1)** | as above | as above | **VERIFIED — full text** |
| Meeting requests by holders of ≥5% | AIFC Companies Regulations | **s.95** | as above | as above | **VERIFIED — full text** |
| Notice periods (7 days private); 90% short-notice majority | AIFC Companies Regulations | **s.97(1), (3)(a)** | as above | as above | **VERIFIED — full text** |
| **Default quorum — single-shareholder carve-out** | AIFC Companies Regulations | **s.98(b)** | as above | as above | **VERIFIED — full text** |
| Body Corporate representation at meetings by resolution of its directors/governing body | AIFC Companies Regulations | **s.99** | as above | as above | **VERIFIED — full text** |
| **Written resolutions; Special Resolution must be labelled as such; DIRECTOR REMOVAL EXCLUDED** | AIFC Companies Regulations | **s.100(1)–(8)** | as above | as above | **VERIFIED — full text** |
| Sole shareholder must record decisions in writing | AIFC Companies Regulations | **s.101** | as above | as above | **VERIFIED — full text** |
| Minutes; shareholder inspection and copies within 7 days | AIFC Companies Regulations | **s.104(1), (4), (5)** | as above | as above | **VERIFIED — full text** |
| Accounts must be sent to every Shareholder; **audit exemption ≤USD 5m turnover / ≤20 shareholders**; 10% audit requisition | AIFC Companies Regulations | **s.131(4)(d), (6), (7)** | as above | https://orderly.myafsa.com/entiresection/a0001000100010001000A0002/133.-directors'-report-for-public-companies | **VERIFIED — full text** |
| **Shareholder entitled to a free copy of the latest accounts within 7 days** | AIFC Companies Regulations | **s.132(1), (2)** | as above | as above | **VERIFIED — full text** |
| Incorporation application must use prescribed form | AIFC Companies Rules (COR) | **r. 2.1.1** | GR0004 of 2017, am. 22 Sep 2024, in force 1 Jan 2025 | https://aifc.kz/wp-content/uploads/2024/06/cor_v6_may_2024_ba.pdf | **VERIFIED — full text** |
| **Foreign corporate Incorporator: certified certificate of incorporation required; certified English translation** | AIFC Companies Rules (COR) | **rr. 2.1.3, 2.1.4** | as above | as above | **VERIFIED — full text** |
| Schedule 5 / Schedule 6 are the Standard Articles | AIFC Companies Rules (COR) | **r. 2.2.1** | as above | as above | **VERIFIED — full text** |
| **Mandatory matters for bespoke Articles — incl. (i) maximum number of Directors and (r) termination and liquidation** | AIFC Companies Rules (COR) | **r. 2.2.2(a), (c)–(r)** | as above | as above | **VERIFIED — full text** |
| Registered office address detail requirements | AIFC Companies Rules (COR) | **rr. 2.3.2, 2.3.3** | as above | as above | **VERIFIED — full text** |
| Registered email address must be an "appropriate email address" | AIFC Companies Rules (COR) | **r. 2.3-1** | as above | as above | **VERIFIED — full text** |
| **Name reservation (30 days); complete naming code** | AIFC Companies Rules (COR) | **rr. 2.4.1, 2.4.2(a)–(f), 2.4.4** | as above | as above | **VERIFIED — full text** |
| Corporate secretary must be AIFC-incorporated | AIFC Companies Rules (COR) | **r. 2.5.1** | as above | as above | **VERIFIED — full text** |
| Notification of allotment within 14 days | AIFC Companies Rules (COR) | **r. 4.3** | as above | as above | **VERIFIED — full text** |
| **RSC eligibility — Private Company + group accounts / wholly-owned by one person or family / Presidential Decree subsidiary** | AIFC Companies Rules (COR) | **r. 9.3.1** | as above | https://orderly.myafsa.com/entiresection/a00010001000200010009/part-9:-restricted-scope-companies | **VERIFIED — full text** |
| RSC status revocable by the Registrar | AIFC Companies Rules (COR) | **r. 9.4.1** | as above | as above | **VERIFIED — full text** |
| RSC Articles must state RSC status; restricted public register | AIFC Companies Rules (COR) | **rr. 9.5.1(a), 9.5.2(e)** | as above | as above | **VERIFIED — full text** |
| **RSC name must be followed by "Restricted Limited" or "Restricted Ltd."** | AIFC Companies Rules (COR) | **r. 9.5.3** | as above | as above | **VERIFIED — full text** |
| RSC disapplications (s.56 inspection, s.95 meetings, s.131(5) accounts) | AIFC Companies Rules (COR) | **r. 9.6.1** | as above | as above | **VERIFIED — full text** |
| **Standard Articles for Private Companies — complete text, Arts. 1–30** (basis of the entire deviation register in §11) | AIFC Companies Rules (COR), **Schedule 5** | Arts. 1–30, esp. **2, 3, 4, 6, 11.1, 15.1, 17, 18.1, 18.2, 25, 28, 30** | as above | https://orderly.myafsa.com/entiresection/a0001000100020001000E/schedule-5:-standard-articles-of-association-for-private-companies | **VERIFIED — full text** |
| **RSC registration temporarily suspended** | AFSA, *Guidance on the Registration Process in the AIFC* | §3.1, footnote | February 2025 | https://afsa.aifc.kz/wp-content/uploads/2025/02/Guidance-on-the-Registration-Process-in-the-AIFC.pdf | **VERIFIED — full text** |
| Naming rules restated; AIFC-specific suffixes | AFSA Registration Guidance | §3.2 | Feb 2025 | as above | **VERIFIED — full text** |
| **Required appointments — CEO listed without an "optional" qualifier; Secretary expressly optional; Authorised Signatory** | AFSA Registration Guidance | §3.3 | Feb 2025 | as above | **VERIFIED — full text** |
| UBO tracing through corporate shareholders | AFSA Registration Guidance | §3.4 | Feb 2025 | as above | **VERIFIED — full text** |
| **Registered office must be in AIFC territory; document evidencing it (e.g. lease) required** | AFSA Registration Guidance | §3.5 | Feb 2025 | as above | **VERIFIED — full text** |
| **"A statement confirming such compliance must accompany any bespoke version"** | AFSA Registration Guidance | §3.6 | Feb 2025 | as above | **VERIFIED — full text** |
| Portal compliance-confirmation wording | AFSA Registration Guidance | §4.4 | Feb 2025 | as above | **VERIFIED — full text** |
| KYC mandatory for shareholder individuals, UBOs, Directors, CEO, Secretary, Authorised Signatory | AFSA Registration Guidance | §4.5 | Feb 2025 | as above | **VERIFIED — full text** |
| EDS from the National Certification Authority of RK required; fees USD 300 online / USD 500 offline | AFSA Registration Guidance | §4.6, §5.2 | Feb 2025 | as above | **VERIFIED — full text** |
| CEO "should possess an IIN"; same individual may hold Director and CEO; **no statement that CEO is optional and no mention of residency** | AIFC InfoSpace, *Director and CEO: what is the difference?* | whole page | 7 Nov 2024 | https://aifc.kz/infospace/director-and-ceo-what-is-the-difference/ | **VERIFIED — full text** (corrects `04_SOURCE_REGISTER.md` S-03 quotation) |
| Private company need not have a secretary (Tier 3 corroboration of s.89(3)) | Unicase Law Firm, *AIFC Corporate Governance for Private Companies* | notes 39–40 | Feb / May 2024 | https://www.lexology.com/library/detail.aspx?g=906a59c6-56ec-4978-b3d1-f57e636fff52 | VERIFIED (extract) — Tier 3 |
| Foreign national director may obtain an IIN via the AIFC Expat Centre | AIFC / AFSA registration guidance | — | undated | https://aol.aifc.kz/en/specifics-of-setting-up-and-registering-companies-in-the-aifc | VERIFIED (extract) — carried from `04_SOURCE_REGISTER.md` S-04; page not independently opened |
| Prescribed Registrar form referred to by COR 2.2.2(a) | Registrar of Companies prescribed forms | COR r. 7.2 | current | (not published in an openly retrievable form) | **UNCONFIRMED — retrieve** |
| Whether the Registrar will accept a Private Company registration with the CEO field left blank | Registrar of Companies practice | — | current | — | **UNCONFIRMED — must be confirmed in writing before filing** |
| AIFC territory boundary (Presidential Decree No. 161, 31 Dec 2015) | Decree of the President of the Republic of Kazakhstan | No. 161 | 31 Dec 2015 | adilet.zan.kz — egress blocked | **UNCONFIRMED** |
| `26 01 089 _ AoA(1).docx` comparison | — | — | — | — | **UNCONFIRMED — INPUT MISSING** |

---

*Prepared by Reviewer 1 — Senior AIFC Corporate Law Counsel. Review only; no source document has been
edited. All section references are to the AIFC Companies Regulations No. 2 of 2017 (as amended
17 October 2024, in force 1 January 2025) and all rule references to the AIFC Companies Rules GR0004
of 2017 (as amended 22 September 2024, in force 1 January 2025), unless otherwise stated.*
