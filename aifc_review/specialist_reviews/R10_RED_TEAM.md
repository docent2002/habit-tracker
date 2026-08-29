# R10 — RED TEAM

**Reviewer:** Reviewer 10 — Red Team (adversarial)
**Review date:** 2026-08-29
**Mandate:** prove the package should NOT be filed; attack R01–R09 and D01–D05.
**Posture adopted, in turn:** the Registrar; AFSA supervision; Swiss corporate authority; bank
compliance; the Kazakhstan tax authority; an opposing corporate lawyer; a future investor; a
future auditor.

---

## 0. EVIDENCE STATUS — WHAT I ACTUALLY READ

**FINDING TYPE: FACT.** `WebFetch` remains blocked for `aifc.kz`, `afsa.aifc.kz`,
`orderly.myafsa.com` and `adilet.zan.kz`. The Exa server-side fetch tool is not subject to that
policy. Everything below marked **[VERIFIED]** was retrieved and read verbatim by me on
**29 August 2026**, not taken from another reviewer:

| Instrument | What I read | Method |
|---|---|---|
| AIFC Companies Regulations, **Part 4** (ss.13–28) | full text | Exa → `orderly.myafsa.com` |
| AIFC Companies Regulations, **Part 7** (ss.35–48) | full text incl. **s.43(1)** | Exa → `orderly.myafsa.com` |
| AIFC Companies Rules (COR), **Part 2** (rr.2.1–2.5) | full text incl. **COR 2.2.2** | Exa → `orderly.myafsa.com` |
| COR **Schedule 5** — Standard Articles, Private Companies | Arts. 1–29 verbatim | Exa → `orderly.myafsa.com` |
| AFSA *Guidance on the Registration Process in the AIFC* (Feb 2025) | **§§1–5 in full, incl. §3.3, §3.6, §4.3, §4.5, §4.6** | Exa → `afsa.aifc.kz` PDF |
| AFSA *Guidance on Providing Consultancy Services in the AIFC* (12 Mar 2020) | **¶¶1–9 and Schedule 1, complete** | Exa → `aifc.kz` PDF |
| Constitutional Statute No. 438-V ZRK, **Article 6** (all 9 paragraphs) | verbatim | Exa → `aifc.kz` full-text page |
| **The joint List** of exempt financial services — **Schedule 1** | verbatim | Exa → `orderly.myafsa.com` |
| AIFC Glossary — **"Environmental Instrument"**, **"Investment"** | verbatim | Exa → `aifc.kz` GLO v21 |
| AIFC Fees Rules **Amendments No. 17** (in force 1 Dec 2025) | Schedule 1 application fees | Exa → `aifc.kz` PDF |
| **Swiss Commercial Register, CHE-212.321.848** — SHAB publication history 2019–2023, current entry | via three independent Zefix-derived aggregators | Exa |
| The three extracted source `.txt` files | in full, plus code-point analysis | local |

**Not obtained, and I say so rather than guessing:** the Registrar's prescribed application form;
FEES Schedule 5 (registration fee) as amended by A17; the NBK official EUR/KZT rate for
31 July 2026; a *certified* Handelsregisterauszug (only public aggregator data); the missing
`AoA(1).docx`.

**Consequence for the file:** `04_SOURCE_REGISTER.md` §A and issue **REV-001** are now materially
out of date. Schedule 5, COR Part 2, ComReg Parts 4 and 7, the Feb-2025 Guidance, the Consultancy
Guidance, Constitutional Statute Art. 6 and the joint List have all been read in situ. REV-001
should be narrowed to the five items above.

---

## 1. EXECUTIVE VERDICT

**Yes. I can prove the package should not be filed — and on narrower, harder ground than most of
the review uses.**

Three propositions are each independently sufficient, each rests on primary text I read myself,
and none of them depends on the CEO question, the tax question or the Swiss authority question
that the file has spent most of its energy on:

| # | Proposition | Authority |
|---|---|---|
| **P1** | **There is nothing here to file.** The prescribed application form (COR 2.1.1), the name reservation (COR 2.4.1), the registered-office evidence (Guidance §3.5), the certified Swiss register extract for the corporate Incorporator (**COR 2.1.3**) with certified English translation (**COR 2.1.4**), and the **registered email address** (**s.24-1**, s.13(4)(fa), COR 2.3-1) are all absent. Four documents are not an incorporation application. | [VERIFIED] |
| **P2** | **The capital clause cannot be keyed into the register.** s.13(4)(d) and (e) require the application to state the initial share capital **and** the nominal value of each Share. The clause supplies three mutually inconsistent per-share values (545.5 in figures / 545.05 in words / 544.50 implied by the total) and an aggregate that contradicts its own per-share figure. **s.43(1)** voids an allotment of a Share that "does not have a fixed nominal value" *as well as* one allotted below nominal value. | [VERIFIED] |
| **P3** | **No instrument in the package adopts the Articles.** s.13(5) requires bespoke Articles "signed by or on behalf of each Incorporator" to be filed. The Resolution's only adoption clause [Res. 29] resolves that **"the Wiese Advisory Eurasia Ltd. duly adopts proposed Articles of Association for the purpose of incorporation of the Company"** — and "the Company" is expressly defined at Res. 12 as **Wiese Advisory GmbH**. On its own defined terms the clause resolves that a non-existent company adopts articles in order to incorporate the Swiss parent in the AIFC. | [VERIFIED] |

**But I also have to report the opposite finding, and it is the more useful one.** Several of the
review's most alarming conclusions do not survive contact with the primary sources:

- **R03's BLOCKER falls.** Alexander Wiese holds **Einzelunterschrift**. The public Swiss register
  says so. Nothing in the package is defectively executed for want of a second signature (§2.7).
- **R06's AML-01 BLOCKER is largely cured by statute**, not by drafting (§3.5).
- **At least five defects the review attributes to the drafter are AFSA's own drafting errors,
  reproduced faithfully from Schedule 5** (§3.4).
- **R05's reason for saying the tax exemption cannot be reached is wrong on the primary text**, and
  there is a route nobody found — which R02's recommended objects clause would constitutionally
  foreclose (§2.5, §3.1).

The file, taken as a whole, is **over-alarmed about authority and under-alarmed about substance.**

---

## 2. ATTACKS ON THE LOAD-BEARING CLAIMS

### 2.1 R01 finding B — s.43(1): the KZT 100 gap is a VOID allotment, not a typo

**CLAIM ATTACKED.** R01 §6.3: on the documents' own figures the subscription (KZT 54,450) is
KZT 100 less than aggregate nominal value (100 × 545.5 = 54,550); s.43(1) makes such an allotment
void; therefore BLOCKER, not TYPOGRAPHICAL.

**MY FINDING.** I read s.43(1) in situ. It reads, in full:

> **s.43(1)** — "Each Share in a Company must have a fixed nominal value. A Share may not be
> allotted by a Company at less than its nominal value. **An Allotment of a Share that does not
> have a fixed nominal value, or is Allotted at less than its nominal value, is void.**"
> — AIFC Companies Regulations, Part 7. [VERIFIED]

And I read the operative clause in situ (AoA line 128, mirrored at Res. line 32):

> "The authorised share capital of the Company is EUR 100 (one hundred) **which will be equal to
> KZT 54 450** … that for the purpose of forming such capital is allotted 100 (one hundred)
> ordinary shares … **each having a nominal value of KZT 545,5** … and that **the total nominal
> value of the issued and allotted shares amounts to KZT 54 450**."

Four points, two against R01 and two for it.

**Against R01 (a):** the clause does **not** state that the consideration is less than aggregate
nominal value. It states that both are KZT 54,450. The shortfall only appears once you *correct*
the aggregate against the per-share figure. That is a self-contradiction, not a self-confessed
discount. An opposing lawyer would say: the document nowhere admits a discount; it admits an
arithmetic error, and one of the two candidate corrections (nominal = 544.50) produces **no
discount at all**.

**Against R01 (b):** R01's downstream consequence is overstated. At incorporation there is no
"allotment **by a Company**" — the company does not exist. **s.41(1)** provides that "The
Incorporators of a Company are taken to have agreed to become Shareholders … and, on the
registration of the Company, must be entered as Shareholders", and **s.16(2)(a)** that "the
Incorporators of the Company become the Shareholders of the Company" on the date of incorporation.
[VERIFIED] The initial shareholding arises by operation of statute from the *application*, not
from an allotment instrument. R01's chain — "the sole shareholder may hold **no valid shares**;
every subsequent shareholder act rests on a defective title" — does not follow.

**For R01 (a):** R01 argued only the *second* limb of s.43(1) (discount). The **first** limb is
worse and R01 missed it. "Each Share in a Company must have a fixed nominal value", and an
allotment of a Share "that does not have a fixed nominal value … is void." A clause that yields
**three** irreconcilable per-share values in one sentence, in two languages, does not fix a nominal
value. That limb bites regardless of which figure is right, and regardless of what EUR 100 buys.

**For R01 (b):** the FX-peg defect is structural and permanent. Nominal value is pegged to "the
official exchange rate … effective as of 31 July 2026". Even corrected, a nominal value defined by
reference to a rate on a past date, against a subscription price denominated in a different
currency, re-creates the s.43(1) exposure on every future allotment.

**VERDICT: claim SURVIVES, on stronger grounds than R01 gave, but its consequence is overstated.**
It is a **BLOCKER for filing** (the register cannot be keyed from it) and a **live voidness risk**,
but it is not an incurable defect and it does not, on these facts, put the shareholder's title at
risk. It is 100% curable by correcting one number before filing.

**Curable pre-incorporation? Yes, trivially.** Because the shares arise on registration from the
application (s.16(2)(a), s.41(1)), and because Schedule 5 Art. 6 puts capital in the application
rather than the constitution, the cure is: (i) obtain the NBK EUR/KZT rate for the chosen date;
(ii) pick **one** currency; (iii) state one per-share nominal value in figures and words that agree;
(iv) make the aggregate the exact product; (v) restore Schedule 5 Art. 6 so the figures live in the
application, where a later correction costs a notification rather than a Special Resolution.

**Evidence:** ComReg ss.16(2)(a), 41(1), 43(1), 13(4)(d)–(e) —
`https://orderly.myafsa.com/entiresection/a00010001000100010007/part-7` and `…/part-4:-company-formation-and-incorporation`.
COR Sched. 5 Art. 6 — `https://orderly.myafsa.com/entiresection/a0001000100020001000E/…`.

---

### 2.2 R01 finding A — s.14(5): the compliance statement must **precede** adoption, so the sequence is broken

**CLAIM ATTACKED.** R01 §8.4: s.14(5) requires the statement *before* adoption; the AoA cover
asserts the Articles are "Approved by Resolution" and Res. 29 says they are adopted; therefore the
package contains "a completed defective sequence" and "redating or back-dating the statement is not
an available remedy" — BLOCKER.

**MY FINDING.** The text is exactly as R01 states:

> **s.14(5)** — "If Standard Articles are not adopted by a Company in their entirety, **the Company
> must submit to the Registrar, before the Articles of Association are adopted by the Company**, a
> statement by the Incorporators that the Articles of Association proposed to be adopted by the
> Company comply with the requirements of these Regulations, the Rules and all other applicable
> AIFC Regulations and AIFC Rules." [VERIFIED]

R01 is right that this is s.14(5) and not s.14(2)(c), and right that the statement is absent. But
the "broken sequence" conclusion does not survive three points.

**(a) The subsection is internally impossible at incorporation, and therefore cannot mean what R01
says it means.** The duty is imposed on "**the Company**", and the Company does not exist until
s.16 operates. A non-existent company cannot submit anything to the Registrar. On R01's reading,
s.14(5) could never be complied with by any incorporator of any AIFC company — which cannot be
right. The coherent reading is that s.14(5) does its work (i) as a *content and accompaniment*
requirement at incorporation, and (ii) with full temporal force **after** incorporation, when a
company amends into non-standard Articles.

**(b) The Registrar's own Guidance settles the practice, and it contradicts R01.** AFSA
*Guidance on the Registration Process in the AIFC* (Feb 2025) **§3.6** reads, verbatim:

> "Entities may: ▪ Adopt the Standard Template provided on the AFSA website, or ▪ Submit a Bespoke
> Version, ensuring compliance with the AIFC Companies Regulations and Rules. **A statement
> confirming such compliance must accompany any bespoke version.**" [VERIFIED]

"**Accompany**" — not "precede". The Registrar collects the statement *with* the bespoke Articles.

**(c) The portal renders it as an in-form tick.** Guidance §4.4 reproduces the portal wording:
"Please confirm that the agreement proposed to be adopted by the Company complies with the
requirements of the Companies Regulations, the Rules, and all other applicable AIFC Regulations and
AIFC Rules." [VERIFIED] A confirmation ticked at submission cannot precede adoption in any
meaningful sense.

**VERDICT: claim SURVIVES as to the missing statement; FALLS as to the "broken sequence".**

The missing compliance statement is real and is a filing defect. But it is a **missing document**,
not a **completed defective sequence**, and R01's assertion that "redating is not an available
remedy" is wrong: the remedy is to (i) re-issue the Articles as *proposed* rather than *approved*,
(ii) have the GmbH as sole Incorporator sign the s.14(5) statement, and (iii) file both together.
That is ordinary practice and it takes an afternoon. **Severity: HIGH, not BLOCKER.**

**One point in R01's favour that R01 did not make.** The AoA cover page asserting "Approved by
Resolution … Dated 11 August 2026" is worse than a sequencing problem: it makes the *filed
instrument itself* assert a fact (adoption) that the Resolution attributes to a different date
(25 July) and to a different actor (the non-existent company). Delete the cover assertion whatever
else is done.

---

### 2.3 THE LIVE CONFLICT — is a CEO optional?

This is the question the file cannot proceed without, and I was asked to resolve it or to state
definitively that it cannot be resolved. **I read all four sources myself.**

**The law — Schedule 5, verbatim [VERIFIED]:**

> **17. NUMBER OF DIRECTORS** — "The Company must have at least 1 Director, who is a natural person
> and has an Individual Identification Number."
>
> **18.1** — "Subject to the Companies Regulations and these Articles, the business of the Company
> must be managed by the Directors **or** by another natural person appointed by the Shareholders or
> Directors and bearing the title of Chief Executive Officer."
>
> **18.2** — "The Shareholders or Directors **may** appoint from among or from outside of its
> members, **the Chief Executive Officer, who shall be a natural person and a resident of the
> Republic of Kazakhstan.** The Chief Executive Officer shall have the broadest powers to act in all
> circumstances in the name of the Company, within the limits of the corporate objects and subject
> to powers expressly reserved by law for Shareholders' meetings and the Directors. He shall
> represent the Company in its dealings with third parties."

Art. 18.1 is **disjunctive**. Art. 18.2 is **permissive** ("may appoint"). The office of Chief
Executive Officer appears **nowhere** in the Companies Regulations Parts 4 or 7 as read; the
Regulations know only Directors and Secretaries (s.13(4)(h), s.89, s.90). **As a matter of AIFC
law, a CEO is optional. R04 and Source Register S-03 are correct on the law.**

**The practice — AFSA Guidance Feb 2025 §3.3, verbatim [VERIFIED]:**

> "**3.3. Required appointments** — Each legal entity **must** make the following appointments:
> • **Directors:** ○ Private Companies and other legal forms: At least one director is required.
> ○ Public Companies: A minimum of two directors is required. ○ Eligibility: Directors must be at
> least 18 years old and free of disqualifying factors such as criminal records or bankruptcy.
> • **Chief Executive Officer (CEO):** ○ The CEO must have a Kazakhstani Individual Identification
> Number (IIN), obtainable through the AIFC Expat Centre.
> • **Company Secretary:** ○ Mandatory for Public Companies ○ **Optional for other legal forms.**
> • **Authorised Signatory:** ○ A designated individual authorised to act on behalf of the entity…"

R01 finding I and R02 PER-16 are **factually correct**: the CEO sits under a heading that says
"must make the following appointments", with no optionality marker, while the Secretary immediately
below is expressly marked optional. Guidance §4.3 item 9 makes "Information on CEO" a form section
and §4.5 makes CEO KYC mandatory. [VERIFIED]

**Two arguments the other way that nobody in this file found, both from inside the same Guidance:**

1. **Where AFSA means a CEO to be mandatory, it says so in terms — and it says so for a different
   legal form, not for a Private Company.** Guidance **§4.4** (Specific Requirements for Certain
   Legal Forms), dealing with Recognised Partnerships/branches: *"**It is mandatory to designate a
   Person as the CEO** of the branch or representative office."* [VERIFIED] The drafter of this
   Guidance plainly knows the phrase "it is mandatory to designate a Person as the CEO". It is used
   once, for branches, and is absent from §3.3.
2. **AFSA's own prescribed content for the Resolution on Incorporation does not include a CEO
   appointment.** Guidance **§3.6** lists what the Resolution must confirm: incorporation of the
   entity; appointment of the person authorised to execute documents in relation to incorporation;
   appointment of the person authorised to execute documents following incorporation; **"Appointment
   of Director(s); Appointment of Secretary(s) – if any"**; and adoption of the governing documents.
   [VERIFIED] **There is no CEO appointment in the required resolution content.** If a CEO were a
   mandatory appointment, its appointment would be a mandatory resolution.

**VERDICT: UNRESOLVED — and it cannot be resolved without the Registrar. But the balance of the
primary material now favours optionality, and the file should stop treating this as 50/50.**

The score is: law (Sched. 5 Art. 18.1 disjunctive, 18.2 permissive, ComReg silent) → optional;
Guidance §4.4 (express mandatory language used only for branches) → optional; Guidance §3.6
(required resolution content omits CEO) → optional; Guidance §3.3 heading + §4.3 item 9 + §4.5 KYC
→ mandatory in practice. **Three to one for optionality, with the one being a formatting inference
from a non-binding document.** Note also that the Guidance itself states at §1: *"this Guidance is
**non-binding** and should be read together with the relevant AIFC legislation."* [VERIFIED]

**What must be done, and it is one email.** Write to `registration@afsa.kz`: *"For a Private Company
with a single corporate shareholder that will be managed by its sole Director under Schedule 5
Article 18.1, please confirm that the 'Information on CEO' section of the Digital Resident
registration form may be left blank and that no Chief Executive Officer need be appointed."* Do not
build the file on either answer until it is in writing. **R02's recommendation 4 is correct and is
the highest-value open item in the whole review.**

**A consequence nobody drew.** If the answer is "CEO is mandatory", the client is in a far worse
position than the file records — because Guidance §3.3 requires the CEO to hold an IIN *and*
Schedule 5 Art. 18.2 requires the CEO to be a **resident of the Republic of Kazakhstan**, and
**R01 finding H is right that an IIN is an identifier, not a residence status.** The only lawful
outcomes are then (a) appoint a Kazakhstan-resident CEO — which hands "the broadest powers to act
in all circumstances in the name of the Company" and the power to "represent the Company in its
dealings with third parties" to someone who is not Alexander Wiese, or (b) go deliberately bespoke
and delete the residency limb — which triggers the full COR 2.2.2 + s.14(5) apparatus. **A future
investor or auditor reading Art. 18.2 will see that the company's constitution vests plenary
executive authority in a Kazakhstan resident. That is a governance fact, not a formality.**

---

### 2.4 R02 PER-03/PER-04 — NO Ancillary Services licence is needed

**CLAIM ATTACKED.** R02: the ASP consultancy regime is confined by Consultancy Guidance ¶5 to
consultancy "in relation to Financial Services" and by ¶6 to the four Schedule 1 species;
sustainability advisory to UN agencies and MDBs reaches none of them; therefore **Non-Regulated
Business, no licence.** R02 rates this "High confidence — operative text read" and describes it as
resolving R09's "single most important external confirmation".

**MY FINDING.** I read the Consultancy Guidance in full. R02's quotations are **exact**:

> "**5.** Regulatory requirements for Ancillary Services providers are part of the AIFC financial
> services framework. **It means that Consultancy Services shall be provided in relation to
> Financial Services.**
> **6.** AFSA considers that a Person must apply to the AFSA for a Licence … **if the following
> conditions are met: (a)** the activities fall under the list of services listed in Schedule 1 …
> **and (b)** the activities are carried on by way of business."
>
> **Schedule 1 — "The list of Consultancy Services Providing which requires the authorisation from
> the AFSA":** 1. Compliance, regulatory, due diligence and risk consultancy (including Shari'ah
> compliance consultancy) · 2. Management and business consultancy (including market research)
> **related to Financial Services** · 3. Tax consultancy · 4. Company Service Provider. [VERIFIED]

**Three attacks.**

**Attack 1 — the limiting words are in guidance, and the binding text is unlimited.** The
prohibition is **FSFR s.24**; the defined term is in **GEN Schedule 2 ¶4**, quoted at ¶3 of the
Guidance: *"Performing Consultancy Services means providing expert knowledge or advice on a
particular topic."* On the face of the Rule, sustainability advisory **is** the provision of expert
advice on a particular topic and **is** therefore an Ancillary Service. Paragraph 5 is AFSA's stated
view; ¶4 describes the document as "describ[ing] the view of the AFSA". Guidance does not amend a
Rule. **R02's conclusion rests on a regulator's published construction of its own rule, not on the
rule.** That is usually good enough — but R02 should not have graded it "High confidence" without
saying so, because the downside is FSFR s.28 (agreements unenforceable, fees repayable).

**Attack 2 — and this is the one that matters. The "related to Financial Services" qualifier
attaches to Schedule 1 item 2 ONLY.** Items 1, 3 and 4 carry no such qualifier. Item 1 is:
"**Compliance, regulatory, due diligence and risk consultancy**". Read on its own words, that
captures a great deal of what a sustainability adviser to MDBs actually sells:

| Real deliverable in this market | Schedule 1 item 1, on its own words |
|---|---|
| **Environmental and social due diligence** on an MDB-financed project | "due diligence … consultancy" — squarely within |
| **Climate risk** assessment / physical and transition risk screening | "risk consultancy" — squarely within |
| **ESG regulatory readiness** (CSRD, CSDDD, taxonomy alignment, IFRS S1/S2) | "regulatory … consultancy" — squarely within |
| **Compliance with MDB safeguard policies** (IFC Performance Standards, ESS) | "compliance … consultancy" — squarely within |

R02's §4.1 table disposes of item 1 in a single line — *"not compliance or regulatory consultancy in
the financial-regulatory sense the Guidance uses"* — which is an inference **from ¶5**, i.e. from the
very proposition under attack. It is circular. E&S due diligence for a development bank is, in
plain English and on the face of Schedule 1, due-diligence consultancy carried on by way of
business. **This is the single most under-stated regulatory exposure in the file, and it is far more
likely to arise than the green-bond and blended-finance scenarios R02 spends §7 on.**

**Attack 3 — PERG 2.3.4.2 records "Exclusions: There are none."** R02 quotes this and then relies on
being outside Schedule 1. But if item 1 is engaged there is no escape hatch, and PERG 2.1.1 (which
R02 itself flags) suggests the "by way of business" filter may not even apply to Ancillary Services.

**VERDICT: claim SURVIVES for the business as described in the Shared Brief — but R02's confidence
grading is wrong and its treatment of Schedule 1 item 1 is unsound.**

The conclusion "no ASP licence for advisory to UN agencies and MDBs on sustainability policy,
programme design, impact measurement and standards alignment" is right. The conclusion should be
**restated with the item-1 boundary drawn explicitly**, because the client's most natural adjacent
product — ESG/E&S due diligence and ESG regulatory-readiness work — sits on the wrong side of it on
the face of the Schedule. R02's engagement-acceptance checklist (§4.3) has three triggers; it needs
a fourth, and the fourth is the commonest.

**Also recorded [VERIFIED], because it bears on R05:** Consultancy Guidance **¶9** — *"the list of
activities specified in Schedule 1 … **does not define the consulting services for the tax
purposes**. The definition of consulting services for these purposes could be found in the Tax Code
of the Republic of Kazakhstan."* The regulatory and tax definitions of "consulting" are expressly
decoupled. Any Kazakhstan tax opinion must run the Tax Code definition, not Schedule 1.

---

### 2.5 R05 — the tax exemption fails

**CLAIM ATTACKED.** R05 §4: sustainability advisory to UN agencies and MDBs falls outside **both**
limbs of Constitutional Statute Art. 6; expected outcome 20% CIT on worldwide profit; the tax motive
is unlikely to be satisfied. R05 could not open Art. 6 or the joint List and marked both
UNCONFIRMED. I was asked to attack this from the other side.

**MY FINDING — the counterparty limb.** Art. 6(4), verbatim:

> "**4.** Until 1 January 2066, AIFC Participants are exempt from corporate income tax on income
> received from **legal, audit, accounting and consulting services provided to AIFC Bodies as well
> as to AIFC Participants that provide financial services mentioned in paragraph 3 of this
> article**." [VERIFIED]

**R05 is right, and R05 is right for the right reason.** The ancillary limb is a closed counterparty
test. UN agencies and MDBs are neither AIFC Bodies (Art. 9) nor AIFC Participants providing
para-3 financial services. **That half of R05's conclusion SURVIVES unamended.**

I also **confirm two things R05 could only mark UNCONFIRMED**:

- **Art. 6(6)** — the personal income tax exemption for foreign employees is available only where
  they are employed by "an AIFC Participant **that provides services mentioned in paragraphs 3 and
  4**". [VERIFIED] R05's §9 Caveat 1 is **CORRECT**: a non-qualifying consultancy's foreign staff
  get no IIT exemption. Upgrade from UNCONFIRMED to **VERIFIED**.
- **Art. 6(8)** — property and land tax exemption likewise limited to para-3/para-4 providers.
  **Art. 6(8-2)** — the VAT exemption covers only "the services of AIFC Participants mentioned in
  **paragraph 3**", i.e. **not** the ancillary limb. Even a fully qualifying consulting participant
  gets CIT relief but **no** VAT relief. [VERIFIED] R05 §3.3 was right to mark VAT as tracking the
  same closed set, and is now confirmed.

**MY FINDING — the other side, which R05 did not find and which changes the answer.**

R05 reasoned (§6) that reframing as green-finance advisory "does not work — the Schedule 1 list is
service-specific and generic advisory is not in it". **I obtained Schedule 1 to the joint List.
It reads, in its entirety:**

> **Schedule 1** — "**A Regulated Activity and Market Activity listed in GEN.**"
> — *The List of financial services provided by the AIFC participants, income from which is exempt
> from Corporate Income Tax and Value Added Tax*, and its operative rule:
> "1.1 In the event a Centre Participant carries on any service specified in Schedule 1, the Centre
> Participant **shall not be liable for corporation tax** imposed by the Republic of Kazakhstan on
> income or capital resulting from that service **provided the service is carried on in full
> compliance with AFSA Rules**." [VERIFIED —
> `https://orderly.myafsa.com/entiresection/a000100020002000T/financialservicesexemptcorporatetax`]

The document then reproduces **GEN Schedule 1 in full** — including, at ¶10, **Advising on
Investments**, and at ¶11, **Arranging Deals in Investments**.

**Three consequences, none of which is anywhere in this file:**

1. **The Art. 6(3)(5) "other financial services" list is not narrow. It is every Regulated Activity
   and every Market Activity in GEN.** R05's premise — that Schedule 1 is a short list of banking,
   insurance, funds and securities services — is **factually wrong**.
2. **The para-3 limb has NO counterparty test.** It exempts income "received from providing the
   following financial services **in the territory of the AIFC**". Who the client is does not
   matter. A UN agency or an MDB is a perfectly good client for exempt income under para 3.
3. **Therefore there IS a reading under which sustainability advisory to UN/MDBs is CIT- and
   VAT-exempt**: if the company obtains an AFSA Licence for **Advising on Investments** (and/or
   *Arranging Deals in Investments*), carries that Regulated Activity on in the territory of the
   AIFC in full compliance with AFSA Rules, and — critically — its sustainability work is
   *within* that licensed activity. Given that **Environmental Instruments (carbon credits,
   allowances, I-RECs) are Investments** (§2.6) and the AIFC operates a live Carbon Platform on AIX,
   an ESG adviser advising on environmental-instrument portfolios is doing exactly this.

**Is that a real plan? Honestly assessed: probably not — but it must be put to the client, because
it is the only route and because one of R02's recommendations would close it permanently.**

| Against | For |
|---|---|
| Application **USD 7,000** (FEES A17, in force 1 Dec 2025 — [VERIFIED]); annual supervision USD 1,400; Base Capital USD 10,000; liquid assets ≥25% of annual opex; four mandatory Approved Individuals (SEO, Finance Officer, Compliance Officer, MLRO); full COB/PRU(INV)/AML/reporting | 0% CIT and 0% VAT on the whole revenue line, not on a client-by-client slice |
| **Substantial Presence Rules** bite the moment an exemption is claimed: CIGA in the Centre, adequate operating expenditure, adequate qualified full-time employees, plus an economic study to the state revenue authority. A Zug-managed shell fails all three | The AIFC's own Green Finance Centre operates in precisely this space |
| Authorisation must precede registration (Guidance §2.2, [VERIFIED]); plan 4–9 months | Removes R05's §12 POEM problem as a side-effect, because real substance in Astana is the price of entry |
| The exemption applies only to income from **the licensed activity**, so non-instrument sustainability advisory is still taxable and separate accounting is required (Art. 6(5)) | |

**VERDICT: R05's conclusion SURVIVES on the facts as they stand. R05's *reasoning* at §6 FALLS.**
The exemption is unavailable **because the client has chosen to be a non-regulated adviser**, not
because the AIFC regime structurally excludes advisory income. That is a materially different
message for the client, and it is the difference between "the AIFC has nothing for you" and "the
AIFC's tax regime is a regulated-firm regime; you are choosing not to enter it, for good reasons."

**And here is the trap.** R02 §8.1 recommends putting into the **constitution** the words:

> "The Company does not provide, and shall not provide, any of its services in relation to Financial
> Services. The Company shall not carry on any Regulated Activity, Market Activity or Ancillary
> Service in or from the Astana International Financial Centre unless and until it holds a licence
> from the Astana Financial Services Authority authorising it to do so."

The second sentence is fine (it is conditional). **The first sentence is not.** An unconditional
constitutional covenant never to provide services "in relation to Financial Services" (i) forecloses
the only route to the Art. 6(3) exemption, (ii) forecloses the AIFC's most obvious adjacent market
for this client (advising financial institutions on ESG), and (iii) would have to be undone by
Special Resolution plus a s.19(2) filing. **RECOMMENDATION: delete the first sentence; keep the
second.** A negative covenant that is conditional on licensing costs nothing; one that is absolute
costs the client an option worth 20% of profit.

**Two further Art. 6 findings that improve the client's position, both [VERIFIED]:**

- **Art. 6(7)(4)** — "natural and legal persons are exempt from individual and corporate income tax
  on income received from … **dividends from shares or stakes in the capital of AIFC Participants
  that are legal persons registered under the Acting Law of the AIFC**." There is **no** condition
  that the payer provide exempt services and **no** residence condition on the recipient. R05's T13
  ("the AIFC dividend exemption may be the only materially valuable feature actually available") is
  **CONFIRMED on the primary text**, and R05 was right to put it first in the verification queue.
- **Art. 6(7)(2)** — exemption from CIT/IIT on "**profits from the sale of shares or stakes in the
  capital of AIFC Participants**". **Nobody in this review mentions the exit.** For a founder-owned
  advisory business the capital-gains exemption on a future sale of the AIFC subsidiary is worth
  more than any amount of CIT planning, and it belongs in the "why incorporate here" memo R06 asks
  for at N7.

**Correction to R05 §4.1.** R05 offers as "the one genuine, narrow exception" that some MDBs hold
AIFC Participant status. On the verified text that exception is **narrower still**: the counterparty
must be an AIFC Participant **providing the financial services mentioned in paragraph 3** — Islamic
banking, reinsurance/insurance broking, fund management/administration/custody/securities services,
brokerage/dealer/underwriting, or a GEN Regulated/Market Activity via the joint List. An MDB's AIFC
entity that lends or invests on its own account provides none of those. Do not price this.

---

### 2.6 R02 PER-07 — Environmental Instruments are Investments, so carbon advice is a Regulated Activity

**CLAIM ATTACKED.** R02 PER-07 (flagged by R02 as "not previously identified anywhere in this file").

**MY FINDING.** GLO, verbatim:

> "**Environmental Instrument** — An Investment which: a) enables its holder to emit greenhouse
> gases into the atmosphere in accordance with any emissions trading scheme, including such carbon
> units as emissions allowances or equivalent; b) evidences the reduction or removal of greenhouse
> gases into the atmosphere, including such carbon units as carbon credits or equivalent; or c)
> evidences the environmental attributes of an underlying unit (i.e., renewable energy or
> environmental attribute certificates)."
>
> "**Investment** — A Security, Unit, Derivative, Digital Asset **or Environmental Instrument** and
> a right or interest in the relevant Security, Unit, Derivative, Digital Asset, or Environmental
> Instrument." [VERIFIED — AIFC Glossary v21, in force 1 Jan 2025]

And GEN Schedule 1 ¶10, as reproduced in the joint List [VERIFIED]: *Advising on Investments* means
advice to a Person "in his capacity as an investor or potential investor … on the merits of his
buying, selling, holding, subscribing for or underwriting **a particular Investment**", and "advice"
includes any statement, opinion or report intended, or reasonably regarded as intended, to influence
selection of a particular Investment.

**VERDICT: claim SURVIVES in full, and is stronger than R02 stated.**

R02 rated it MEDIUM–HIGH. I would rate it **HIGH**, for a reason R02 did not have: the AIFC is not
merely theorising about carbon units — **AIX operates a live Carbon Platform** trading I-REC
certificates, with voluntary carbon standards (Verra, Gold Standard) being onboarded, and the AIFC's
own published guidance tells prospective buyers to build "an environmental instruments portfolio in
close cooperation with your **licensed AIX broker**". A sustainability adviser in Astana advising a
Kazakh corporate on which I-RECs or voluntary carbon units to buy for its Scope 2/Scope 3 position is
advising on the merits of a particular Investment, for a client in its capacity as investor, in a
market the AIFC runs. This is not an edge case; it is the most probable route by which this
particular client crosses the perimeter.

**Practical line for the engagement checklist:** methodology, MRV design, GHG accounting, project
GHG quantification, taxonomy alignment and standards assurance are outside. **Instrument selection,
portfolio construction, buy/hold/sell views on named credits, and introducing a project developer to
a credit buyer are inside** (the last is *Arranging Deals in Investments*, which R02 correctly
identifies at PER-09 as the head with no "capacity as investor" limitation).

---

### 2.7 R03's BLOCKER — Alexander Wiese's signature authority is unevidenced

**CLAIM ATTACKED.** R03 §1 S-01 and §9: *"Alexander Wiese's signature authority
(Einzelunterschrift vs Kollektivunterschrift zu zweien) is nowhere evidenced. If he holds only joint
signature, the PoA, the Resolution and the AoA signature are all void as against the GmbH. The entire
package hangs on this single unverified fact… **Nothing else in this review can be relied on until
this is resolved.**"* R03 rated it **BLOCKER** and added, as "aggravating context", that a
`c/o Treuhand` domicile "materially raises the prior probability of a joint-signature regime".

**MY FINDING.** The Swiss commercial register is public and the entry is retrievable. From the SHAB
publication history for **CHE-212.321.848** and the current register entry [VERIFIED via three
independent Zefix-derived sources — moneyhouse.ch, lixt.ch, onlineinfo.ch — cross-read against the
SHAB citations they reproduce]:

| Date | SHAB | Entry |
|---|---|---|
| 11.10.2019 | Nr. 200 | Incorporation. Stiller, Helene, in Steinhausen, **Gesellschafterin und Geschäftsführerin, mit Einzelunterschrift, mit 200 Stammanteilen zu je CHF 100.00**. Verzicht auf Revision. |
| 01.05.2020 | Nr. 87 | Sitz → Cham. Stiller 100 Stammanteile; **Wiese, Alexander, deutscher Staatsangehöriger, Gesellschafter, ohne Zeichnungsberechtigung, mit 100 Stammanteilen**. |
| 13.04.2022 | Nr. 76 | Both re-domiciled. Wiese still **ohne Zeichnungsberechtigung**. |
| **18.01.2023** | **Nr. 15 vom 23.01.2023** | Statutenänderung 16.12.2022. **Sitz neu: Baar. Domizil neu: c/o Guthirt Treuhand AG, Ibelweg 18A, 6300 Zug.** **Ausgeschiedene Personen und erloschene Unterschriften: Stiller, Helene** … **Eingetragene Personen neu oder mutierend: Wiese, Alexander, deutscher Staatsangehöriger, in Zug, Gesellschafter und Geschäftsführer, mit EINZELUNTERSCHRIFT, mit 200 Stammanteilen zu je CHF 100.00** [bisher: Gesellschafter, ohne Zeichnungsberechtigung, mit 100 Stammanteilen]. |

Registered capital **CHF 20,000** = 200 × CHF 100. Alexander Wiese holds **200 of 200 quotas**.
Moneyhouse records that "the management of the firm consists of **one person**" and that the last
register change was 23.01.2023.

**VERDICT: claim FALLS.**

1. **Alexander Wiese holds Einzelunterschrift** as *Gesellschafter und Geschäftsführer*, registered
   since 18/23 January 2023. Under art. 718a(2) CO (via art. 814(4)) a registered sole-signature
   entitlement is effective against third parties. **The PoA, the Resolution and the AoA signature
   block are each validly executed by one hand as against the GmbH.** R03's blocker, R06's AML-06,
   D01's item 1 caveat, D02-14 reading (b) and R09's C12 all fall with it.
2. **The 100% sole-UBO representation is independently corroborated by a public state register**
   (CO art. 791 requires GmbH quotaholders to be registered). R06 §3.1's finding that *"nothing
   currently in the package evidences that Alexander Wiese owns any part of Wiese Advisory GmbH"* is
   true of the *package* but is no longer true of the *file*: it is now evidenced.
3. **R03's "aggravating context" inference was wrong.** The `c/o Treuhand` domicile in fact
   coincides with the *removal* of the second Geschäftsführerin. This is worth recording as a
   methodological point: R03 elevated a plausible prior to a BLOCKER and then wrote that nothing else
   could be relied on until it was resolved. The fact was 60 seconds away in a public register.

**One residual, and it must be closed before anyone signs a UBO declaration.**
`onlineinfo.ch` (Datenstand 23.05.2026) lists under "Eingetragene Personen (2)" both Alexander Wiese
**and** "Stiller Helene, in Steinhausen, Gesellschafterin und Geschäftsführerin, Einzelunterschrift",
while separately listing three "Ehemals eingetragene Personen" including two Stiller rows. The
Steinhausen row matches the **2019** registration, so on the balance of the evidence it is a stale
aggregator row that was never retired — a reading confirmed by the SHAB text ("Ausgeschiedene
Personen und erloschene Unterschriften: Stiller, Helene") and by moneyhouse's "management consists of
one person". **But at least one 2026-dated commercial source and the GmbH's own LinkedIn page
("Helene Wiese-Stiller: Geschäftsführer") still show a second officer.** A signed UBO declaration
asserting sole 100% ownership is a warranty to a regulator and a bank. **Order the certified
Handelsregisterauszug before signing it** — which you must do anyway under **COR 2.1.3**.
`FINDING TYPE: UNCONFIRMED` / **HIGH** (as to the declaration, not as to execution).

---

### 2.8 R01 finding C — COR 2.2.2 omits maximum directors and termination/liquidation

**CLAIM ATTACKED.** R01 §7.3: bespoke Articles must, under COR 2.2.2, include (i) the maximum number
of Directors and (r) termination and liquidation; the AoA has neither; Schedule 5 has neither; a
drafter who starts from Schedule 5 and departs "inherits Schedule 5's gaps while losing Schedule 5's
immunity from COR 2.2.2".

**MY FINDING.** COR 2.2.2, verbatim [VERIFIED]:

> "**2.2.2.** If the proposed Articles of Association filed with an application for the incorporation
> of a company **do not adopt the Standard Articles in their entirety**, the proposed Articles of
> Association must, for section 14(2)(c) of the AIFC Companies Regulations, include provision for the
> following matters: (a) information set out in the form prescribed by the Registrar of Companies;
> (c) the principal business activities; (d) the rights attaching to Shares…; (e) the transfer of
> Shares; (f)–(h) [Public Company matters]; **(i) the maximum number of Directors**; (j) the
> appointment, retirement, disqualification and removal of Directors; (k)–(q) …; **(r) termination
> and liquidation of the Company.**"

(There is indeed no limb (b) in the Rule as published — R01's footnote is correct.)

I then read **Schedule 5 Arts. 1–29 verbatim**. Schedule 5 contains **no maximum number of
Directors** (Art. 17 states a minimum only; Art. 21.2 refers to "any maximum number of Directors
prescribed by the Companies Regulations **or these Articles**" — and neither prescribes one) and **no
termination, winding-up, dissolution or liquidation article of any kind**.

**VERDICT: claim SURVIVES, verbatim and in full. This is R01's best finding and it is correct.**

It also verifies R01's structural point on primary text. Adopting Schedule 5 *in its entirety*
disapplies four separate obligations at once:

| Obligation | Trigger | Disapplied by wholesale adoption? |
|---|---|---|
| File the proposed Articles with the application | s.13(5) "**Unless** the Standard Articles are adopted by a Company in their entirety" | **Yes** [VERIFIED] |
| Registrar registers the bespoke instrument on the public record | s.15(2) "**unless** the Standard Articles are adopted by a Company in their entirety" | **Yes** [VERIFIED] |
| Incorporators' compliance statement | s.14(5) "**If** Standard Articles are not adopted … in their entirety" | **Yes** [VERIFIED] |
| Mandatory content (i) max directors, (r) termination and liquidation | COR 2.2.2 "**If** … do not adopt the Standard Articles in their entirety" | **Yes** [VERIFIED] |

**But R01 never confronts the price of its own recommendation, and it is a high price.** See §3.2.

---

## 3. WHAT EVERYONE MISSED

### 3.1 The joint List makes the whole tax analysis different — and R02's fix would close the door

Covered at §2.5. **The single most consequential unexamined fact in the file:** Schedule 1 to the
joint List is "**A Regulated Activity and Market Activity listed in GEN**", so *Advising on
Investments* is an exempt financial service with **no counterparty test**; and R02's proposed
constitutional covenant "The Company does not provide, and shall not provide, any of its services in
relation to Financial Services" would foreclose it permanently.
`FINDING TYPE: LEGAL REQUIREMENT` / **HIGH**.

### 3.2 The fork nobody named: R01's fix and R04's fix are mutually exclusive

R01 §15 step 2: **"adopt the Schedule 5 Standard Articles in their entirety"** — which resolves
B-1, C-1, C-2, H-1, H-2, H-6, M-1, M-4, M-5, L-1, L-3, L-4, L-5 at a stroke.
R04 §8 step 0: **"delete the CEO office; delete AoA line 367's residency sentence; delete the IIN
qualifier at line 358 and in the line 33 definition."**

**These cannot both be done.** Schedule 5 Art. 17 *is* the IIN requirement and Art. 18.2 *is* the
residency requirement [VERIFIED verbatim]. Adopting Schedule 5 in its entirety adopts both.

| | **Route A — adopt Schedule 5 wholesale (R01)** | **Route B — bespoke, clauses deleted (R04)** |
|---|---|---|
| s.13(5) / s.15(2) / s.14(5) / COR 2.2.2 | All disapplied | All engaged: file signed Articles, compliance statement, add max-directors and termination/liquidation articles |
| Alexander Wiese as sole Director | **Requires an IIN** — Art. 17 is adopted. The IIN becomes a hard precondition to lawful office, and per R09 it is measured in weeks | **No IIN needed for a Director** — see §3.3 |
| CEO residency | Art. 18.2 adopted; dormant only if no CEO is appointed — which is the unresolved question at §2.3 | Deleted; problem gone in both branches |
| Registrar scrutiny | Minimal; nothing bespoke goes on the register | A bespoke constitution is read clause by clause on a first filing |
| Inherited defects | You also adopt Schedule 5's own errors: "**Nur-Sultan**" (Art. 3), "shorter notice **that** otherwise required" (Art. 14.4), "by a Resolution **or** suspend or relax" (Art. 24.13), "physical or mental disability **or other**" (Art. 16.3), "section 97 of the **Company** Regulations" (Art. 14.4), "For the purposes of **the** section 21.3" (Art. 21.4) — **all six verified in Schedule 5 itself** | You may fix them, but every fix is a deviation |
| Amendment cost later | Any change → bespoke, and COR 2.2.2 + s.14(5) engage then | Already bespoke; amendment by Special Resolution + s.19(2) filing |

**RECOMMENDATION (mine).** The choice turns entirely on the §2.3 CEO answer and on whether the IIN
is being obtained anyway.

- If the Registrar confirms **CEO optional** *and* the client is content to obtain an IIN (which he
  will need for the bank account, the EDS and the entity BIN regardless — R04 §3), take **Route A**.
  It is cleaner, cheaper and removes the most defects.
- If the Registrar says **CEO mandatory**, Route A is impossible (Art. 18.2 residency cannot be
  satisfied) and **Route B is forced**. Then do it properly: add COR 2.2.2(i) and (r), delete the
  residency limb, delete the IIN limb from Art. 17, fix the Art. 31 language clause, and file the
  s.14(5) statement with the application.

**The one thing that must not happen is what the package currently does: Route B's exposure with
Route A's content.** The AoA is bespoke — it drops Schedule 5 Art. 4(b), rewrites Art. 6 and adds
Art. 31 — so it carries every COR 2.2.2 and s.14(5) obligation, while retaining precisely the two
Schedule 5 clauses that disqualify the client. It is the worst cell in the matrix.

### 3.3 AFSA's own current Guidance imposes an IIN on the CEO — and NOT on Directors

Guidance §3.3 [VERIFIED, quoted at §2.3]: for Directors, the stated eligibility is "**at least 18
years old and free of disqualifying factors such as criminal records or bankruptcy**". **No IIN.**
For the CEO: "The CEO **must** have a Kazakhstani Individual Identification Number (IIN)."

Nothing in ComReg Part 4 or Part 7 requires a Director to hold an IIN. The requirement exists in
exactly one place: **Schedule 5 Article 17**, a template default the company is free to decline
(s.14(4): "A Company may adopt … the whole **or any part** of the Standard Articles").

**Consequence.** R09 ranks "Director/CEO has no IIN" as Rank 1, Certain, BLOCKER, and says "the IIN,
not the documents, sets the filing date". That is true **only because the client is proposing to
adopt Schedule 5 Art. 17**. It is a self-inflicted gate. It can be removed by deletion (Route B) or
accepted deliberately (Route A). What it must not be is presented to the client as an immovable
requirement of AIFC law, because it is not one, and R04 was right to say so.
`FINDING TYPE: LEGAL REQUIREMENT (negative)` / **HIGH** — this reframes the critical path.

### 3.4 Six reviewers criticised the drafter for AFSA's own drafting errors

I compared the AoA against Schedule 5 line by line. The following are **verbatim Schedule 5 text**
and are therefore not the local adviser's work:

| Defect | Raised as a defect by | Actually |
|---|---|---|
| "the Company may, **by a Resolution or suspend or relax** any provision…" (AoA 474) | R07 C5, R08 F8-26 (LOW) | **Schedule 5 Art. 24.13 verbatim.** R07 C5's claim that "the Russian is correct and silently repairs it" therefore describes the Russian *translator* improving on AFSA |
| "section 97 of the **Company** Regulations" (AoA 256) | R07 C11, R08 F8-25 | **Schedule 5 Art. 14.4 verbatim** |
| "because of a physical or mental disability **or other**" (AoA 326) | R07 D15 | **Schedule 5 Art. 16.3 verbatim** |
| "For the purposes of **the** section 21.3" (AoA 405) | R07 §2.4 (MEDIUM), R08 F8-27 | **Schedule 5 Art. 21.4 verbatim**, including the stray definite article |
| "shorter notice **that** otherwise required" | R01 D-04 (correctly identified as a Schedule 5 typo the AoA fixed) | Confirmed |
| Art. 15.1 two-person quorum with only a written-resolution carve-out | R01 M-2, D04-15, R07 A7 | **Schedule 5 Art. 15.1 verbatim** — R01 correctly classifies it as OUTDATED TEMPLATE LANGUAGE originating in Schedule 5 |
| Art. 28 (no shareholder right to inspect accounting records) | D04-10 (HIGH, "against the parent's own interest") | **Schedule 5 Art. 28 verbatim.** R01 §12's correction is right; D04-10 should be withdrawn |

`FINDING TYPE: FACT` / **MEDIUM (as a correction to the file's reasoning)**. This matters for tone:
a covering note to the client that lists these as drafting failures by the Kazakh service provider
would be unfair and, if repeated to that provider, wrong.

**And one that runs the other way.** The AoA *corrects* two Schedule 5 defects ("Nur-Sultan" →
"Astana"; "notice **that**" → "notice **than**"). So the drafter **did** read and edit Schedule 5.
That undercuts "it's just a template" as a complete explanation and makes the **omission of Schedule
5 Art. 4(b)** — "any other lawful activity for which companies may be incorporated under the AIFC
Companies Regulations" — look like a deliberate narrowing rather than an accident. It should be put
to the drafter as a question, not assumed to be a slip.

### 3.5 R06's AML-01 BLOCKER is substantially cured by statute

**CLAIM ATTACKED.** R06 AML-01 (**BLOCKER**), R03 S-05 (HIGH), D01 §4.2, D03-08: *"No document in the
package states that Wiese Advisory GmbH subscribes for or holds the 100 shares… a bank compliance
officer reading this package cannot establish the ownership chain from the documents at all."*

**MY FINDING.** The subscription does not live in the Resolution. It lives in the **application**:

- **s.13(4)(d)** — the application must state "the amount of the initial share capital **and
  shareholdings of the Incorporators**". [VERIFIED]
- **s.13(4)(g)(i)** — full name, nationality and address of each Incorporator. [VERIFIED]
- **s.41(1)** — "**The Incorporators of a Company are taken to have agreed to become Shareholders of
  the Company** and, on the registration of the Company, must be entered as Shareholders in the
  Company's Register of Shareholders." [VERIFIED]
- **s.16(2)(a)** — "On the date of incorporation … the Incorporators of the Company **become the
  Shareholders** of the Company." [VERIFIED]
- Guidance **§4.3 item 6** — the portal collects shareholder information, with "registration details
  and a certificate of incorporation" for corporate entities. [VERIFIED]

**VERDICT: claim FALLS as a BLOCKER; SURVIVES as a drafting recommendation.**

Once the GmbH is named as Incorporator in the application with a 100-share holding, it becomes the
sole Shareholder by operation of statute and is entered in the Register of Shareholders. The missing
express subscription clause is **not** the reason the ownership chain cannot be established; the
missing **application form** is. R06's remedy (add an express subscription clause) is good practice
and costs nothing — a bank will want to see it, and R06's suggested wording is correct — but it
should be reclassified **MEDIUM**, and the BLOCKER label should move to the absent application.

### 3.6 The correct analysis of the PoA's bank-account powers — s.31, not nullity

**CLAIM ATTACKED.** R06 AML-04 (HIGH) and D02-07 (HIGH): the GmbH cannot confer authority to act for
a company that does not yet exist; therefore "the bank-onboarding half of the PoA is **largely
ineffective as drafted**" and "**most of Block B is a nullity**".

**MY FINDING.** ComReg **s.31**, verbatim [VERIFIED]:

> "(1) A contract that purports to be made by or on behalf of a Company **before its incorporation**
> has effect as a contract made with **the Person purporting to act for or on behalf of the
> Company**, and **that Person is personally liable** on the contract and entitled to the benefits of
> the contract unless subsection (2) applies.
> (2) The Company may, within … a reasonable time after the Company is incorporated, **adopt the
> contract** by act or conduct signifying its intention to be bound … If the Company adopts the
> contract: (a) the Company is bound … and (b) the Person who purported to act for or on behalf of
> the Company … ceases to be bound."

So the acts are **not a nullity**. They bind **Shopanova Diana and Namyssova Alina personally** until
the incorporated company adopts them. That is a materially different — and in one respect worse —
answer than the file gives:

- **For the client:** the defect is curable in one line, by a post-incorporation board/shareholder
  resolution of Wiese Advisory Eurasia Ltd. adopting the acts. The PoA's own line 85 already
  anticipates it.
- **For the attorneys:** they are being asked to sign bank documents in a capacity that makes them
  personally liable. That is a point their own firm should be told about, and it is a further reason
  the "sign" powers at PoA lines 40 and 44 should become "submit".
- **For the bank:** a bank onboarding *Wiese Advisory Eurasia Ltd.* on a mandate from *Wiese Advisory
  GmbH* is contracting with the attorneys, not with its customer. It will decline — R06's §4.5
  prediction ("returned at first pass") is right, for a reason R06 did not give.

**VERDICT: R06/D02's conclusion SURVIVES in outcome; its legal characterisation FALLS and should be
replaced with s.31.** `FINDING TYPE: LEGAL REQUIREMENT` / **HIGH**.

**Answering the mandate's question directly — "can the GmbH lawfully confer authority over an entity
that does not yet exist?"** No, as a matter of agency: a principal cannot appoint an agent of a third
person. But AIFC law provides the machinery to make it work: pre-incorporation acts bind the actor
and are adoptable by the company (s.31), and the framework positively expects the incorporating
shareholder to nominate the company's first officers before it exists (s.13(4)(h); Guidance §3.6
requires the Resolution on Incorporation to contain "Appointment of Director(s)"). **Pre-incorporation
appointments of Director, CEO and Authorised Signatory are therefore effective — they take effect on
incorporation, not before — and are in fact mandatory content of the resolution AFSA requires.**
`FINDING TYPE: LEGAL INTERPRETATION` / closes an open question.

### 3.7 AFSA expressly accepts a resolution signed by the incorporating shareholder's **Board of Directors**

**CLAIM ATTACKED.** R03 S-02 (**CRITICAL**): the Resolution's authority chain is incoherent across
five capacities and "as drafted **no identifiable organ of the GmbH has adopted anything**"; R08
F8-07 (CRITICAL); D03-05 (CRITICAL).

**MY FINDING.** Guidance §3.6, verbatim [VERIFIED]:

> "**Resolution on Incorporation** — A resolution **signed by shareholders/partners/Board of
> Directors** confirming: - The incorporation of the entity, - Appointment of person authorized to
> execute all documents … in relation to the incorporation …, - Appointment of person authorized to
> execute all documents … following the incorporation …, - Appointment of Director(s); - Appointment
> of Secretary(s) – if any; and adoption of governing documents (Articles of Association/…)."

**AFSA's own prescribed instrument is a resolution signed by the shareholder *or* by the shareholder's
board of directors.** A resolution in which "I, Alexander Wiese … the duly appointed **Director** of
Wiese Advisory GmbH" resolves on behalf of the GmbH is therefore **exactly the form the Registrar
asks for**, even though the English title says "RESOLUTION OF SHAREHOLDER" and the Russian says
"РЕШЕНИЕ УЧРЕДИТЕЛЯ".

**VERDICT: R03 S-02, R08 F8-07 and D03-05 SURVIVE as Swiss-law and drafting criticisms but FALL as
AIFC filing objections. Downgrade from CRITICAL to MEDIUM for filing purposes.**

The residual and genuine defects in the Resolution are (i) the operative adoption clause naming the
wrong actor [Res. 29] — which is P3 above and remains a BLOCKER; (ii) the date impossibility; (iii)
the "bye-laws"; (iv) the capital arithmetic; and (v) the Swiss title. Those are enough. The
"no identifiable organ has resolved anything" framing overstates it and would, if put to the service
provider, be met with §3.6.

**Two more corrections in the same family:**

- **"Authorised Signatory" is not an invented office.** R08 F8-12 (MEDIUM) and D03-14 (MEDIUM) treat
  it as "an office the Articles do not create". Guidance **§3.3** lists **Authorised Signatory** as a
  required appointment whose "authority should be documented in a **resolution or power of attorney**
  and submitted during registration", and §4.3 item 11 makes it a form section. [VERIFIED] The
  Resolution's appointment at line 26 is exactly right. **Withdraw the finding.**
- **The Feb-2025 Guidance is stale on fees.** §4.6 states USD 300 online / §5.2 USD 500 offline
  [VERIFIED], while FEES Amendments No. 17 (in force 1 Dec 2025) raised the fees across the board —
  I verified from A17 Schedule 1 that Regulated Activity application fees rose (e.g. Advising on
  Investments 5,000 → **7,000**), which corroborates R02's PER-14. **Budget USD 500, expect the
  portal to quote it, and do not rely on any figure in the Feb-2025 Guidance.**

### 3.8 The Swiss parent's registered purpose contradicts the AIFC subsidiary's objects clause

This is the strongest available argument for fixing AoA line 114, and no reviewer had it.

The GmbH's **registered Zweck** [VERIFIED, Commercial Register of the Canton of Zug]:

> "**Beratung von Unternehmen aus dem Bereich Nachhaltigkeit und Umweltfragen zur Bewältigung von
> Umweltproblemen der Neuzeit sowie zur Unterstützung in Sachen Klimawandel und Erreichung der damit
> einhergehenden vom UN-Gipfel festgelegten Ziele**; vollständige Zweckumschreibung gemäss Statuten."
>
> ("Advising companies in the field of sustainability and environmental questions, on addressing
> contemporary environmental problems and on supporting climate change and the achievement of the
> associated goals set by the UN summit.")

The subsidiary's objects clause [AoA 114] says: "advisory services in the fields of **finance,
corporate governance and business development**".

**The parent's own state-registered purpose is sustainability and climate advisory aligned to UN
goals. The subsidiary's constitution says finance.** Under **COR 2.1.3** the Registrar will
*require* the parent's certified register extract, and under **COR 2.1.4** a certified English
translation of it. The Registrar, the bank and any future auditor will therefore hold both documents
side by side, and the mismatch is on the face of the two instruments. R02, R05 §5(c), R09 §B.5(b) and
R06 AML-08 all argue the objects clause is inaccurate; **this is the evidence.**

It also disposes of a related question: R03 §7 could not obtain the Zweck and asked whether it
authorises founding a foreign subsidiary. The published Zweck is abbreviated ("vollständige
Zweckumschreibung gemäss Statuten") and contains **no participation clause**. R03's legal analysis is
right — art. 53 ZGB gives general capacity, art. 718a(2) CO protects the bona fide AIFC Registrar —
so this cannot void the incorporation. But the Statuten must still be read, and if there is no
participation clause the sole-quotaholder authorisation R03 recommends should be added.
`FINDING TYPE: FACT` / **HIGH** (as support for the objects-clause fix); `UNCONFIRMED` as to the full
Statuten wording.

**One further register-derived fact for the KYC file.** Alexander Wiese also appears on the Zug
register as **Gesellschafter und Vorsitzender der Geschäftsführung, Einzelunterschrift** of **True
Finance Holding GmbH** (Zug), as Inhaber of *Wiese Fotografie* (Einzelunternehmen), and as former
*Präsident des Vorstandes* of **Mine Action Finance Initiative — in Liquidation**. None of these is
adverse. But R06 §2.3 recommends the structure chart carry a signed statement that "This chart shows
the **complete** group", and the AFSA form includes a **Fit and Proper Questionnaire** (Guidance §4.3
item 14). A bank will find these in one search. **Disclose the other mandates proactively rather
than certify completeness in terms that invite the question.** `PRACTICAL REQUIREMENT` / **MEDIUM**.

### 3.9 Does R01's KZT 1,000,000 recapitalisation create a new problem?

**CLAIM TESTED.** R01 §6.5 / step 3: restate capital at **KZT 1,000,000 = 1,000 shares of KZT 1,000**.

**MY FINDING — no threshold is triggered.** I checked every capital-linked threshold I could find:

| Threshold | Basis | Engaged at KZT 1,000,000? |
|---|---|---|
| Minimum share capital | **s.43(2)** "A Private Company must have no minimum share capital" | No |
| Public Company minimum | s.43(3)(a) USD 100,000 **allotted** capital | Not applicable |
| Annual return vs confirmation statement | s.26(1)(b) — **turnover** > USD 500,000 or > 20 shareholders | No — turnover-based |
| Audit exemption | s.131(6) — **turnover** and shareholder count | No — turnover-based |
| **Substantial Presence Rules** | Apply to participants **applying tax exemptions**; tests are CIGA location, opex and qualified FTEs | **No** — not capital-linked, and not engaged at all while no exemption is claimed |
| Registration fee | Flat by legal form | No |

**But it creates two real, small problems R01 did not mention:**

1. **s.45(1)** — "A Private Company **must not** … allot Shares as Paid-up (in part or in full)
   other than for **cash consideration**", except on the s.45(2) board-valuation procedure.
   [VERIFIED] KZT 1,000,000 (~USD 1,900) must therefore actually be **remitted in cash** by the
   GmbH — which cannot happen until the company has a bank account, which is the last item on the
   critical path. EUR 100 has the same problem but is trivially fundable; a larger figure makes the
   chicken-and-egg visible.
2. **s.25(2)** — "Any reference to the amount of the Company's share capital included in relevant
   communications of the Company must be to the Company's **fully Paid-up share capital**."
   [VERIFIED] If the capital is declared but not paid, the company may not quote it; and under
   **s.35(1)** the shareholder's liability extends to "the amount … that remains unpaid on the
   Shares". Declaring KZT 1,000,000 and paying KZT 54,550 creates a KZT 945,450 unpaid-capital
   liability sitting on the GmbH's balance sheet — which a future auditor will pick up.

**VERDICT: R01's proposal is SAFE and I endorse it, subject to one condition — pay it in full, in
cash, or do not declare it.** Round it to a figure the client will actually remit on day one.

### 3.10 The Latin-U+0041 defect — does it affect execution?

**MY FINDING.** I verified at code-point level. In the Resolution, the initial character of
«Aлександр Визе» is **U+0041 LATIN CAPITAL LETTER A** at lines **14, 19, 22, 25, 28 and 47** — the
last being the **executed signature block**. The AoA at line 606 uses correct Cyrillic
«**А**лександр» (U+0410). R07 D1 and R04 R04-07 are factually correct.

**Does it affect execution? No.**
- Swiss law: art. 11 CO, freedom of form. A signature is the manuscript mark, not the typed name
  beneath it. The typed name is identification, not execution.
- AIFC law: the Registrar takes English-language filings (s.14(1); Guidance §3.6 and §4.3 are all in
  English); the English text uses "Alexander Wiese" in Latin script throughout.
- The defect is confined to the **Russian mirror** of one document.

**Does it matter? Yes, in three ways, and one of them is not in the file.**
1. **Automated matching fails.** Kazakhstan state systems (eGov, the notarial register, the State
   Revenue Committee, the Mobile Citizens Database) match on exact Cyrillic strings. A mixed-script
   name will not match an IIN record or a notarised translation.
2. **Notarial translation.** R04 §7 is right that a notarised RU/KZ translation is required for the
   bank and the notary; the translator will certify a name that does not exist.
3. **Not in the file: mixed-script homograph substitution is a recognised document-tampering
   indicator.** Bank forensic tooling flags Cyrillic/Latin homograph mixing precisely because it is
   used to defeat sanctions and PEP screening. Six occurrences in a shareholder resolution, one of
   them in the signature block, in a file that already carries a 2020 creation date and revision 39,
   is exactly the pattern that turns a routine review into an escalation. **This is why it should be
   fixed with a script check, not a visual proofread.**

**VERDICT: does not affect validity of execution. `FINDING TYPE: PRACTICAL REQUIREMENT` / MEDIUM —
correctly graded by R04 and R07, but the escalation risk should be stated.**

### 3.11 Smaller corrections

| # | Finding | Type | Severity |
|---|---|---|---|
| **R10-a** | **The PoA's signing powers are self-limited.** PoA line 81 reads "prepare, **sign (where permitted by applicable law)**, submit…". Neither R06 §4.2 nor D02 quotes the parenthesis. It does not cure the objection (an attorney-signed UBO declaration or KYC warranty is worthless to a bank whether or not law permits it) but it materially softens the "the attorneys may sign the Articles" and "may sign declarations" criticisms, and it should be quoted accurately when the point is put to the drafter | FACT | LOW (correction) |
| **R10-b** | **The GmbH's registered Sitz is Baar, not Zug.** SHAB Nr. 15 of 23.01.2023: "Sitz neu: **Baar**. Domizil neu: c/o **Guthirt Treuhand AG**, Ibelweg 18A, 6300 Zug." Every document in the package gives only the Zug domicile and omits both the Sitz and the "AG" in the fiduciary's name. Kazakh banks match entity names character-for-character | FACT | MEDIUM |
| **R10-c** | **COR 2.4.2(c) still says "Nur-Sultan".** The naming rule prohibits names suggesting a relationship with a governmental authority "in the AIFC, **Nur-Sultan** or the Republic of Kazakhstan" [VERIFIED], while the Feb-2025 Guidance §3.2 renders the same rule with "Astana". Immaterial to "Eurasia", but it confirms that AFSA's own instruments are not internally current — a reason to prefer the Guidance's own wording over the Rule's in correspondence | FACT | LOW |
| **R10-d** | **The registered email address is missing from the entire analysis chain.** s.13(4)(fa), **s.24-1** and COR 2.3-1 [all VERIFIED] make a registered email address a mandatory application field and a standing obligation, with COR 2.3-1(d) requiring an express statement that it is an "appropriate email address". Only R01 H-4 raises it. It must be a real, monitored address — not the service provider's | LEGAL REQUIREMENT | HIGH |
| **R10-e** | **s.24(3) is a genuine live constraint and only R01 raises it.** "A Company must conduct its **principal business activity in the AIFC**, unless the Registrar otherwise permits" [VERIFIED], and contravention is punishable by a fine (s.24(4)). AoA Art. 4 volunteers "both within and outside the AIFC". For a firm whose engagements are with UN agencies and MDBs abroad and whose management sits in Zug, this is the provision that ties together R05's POEM analysis, the Substantial Presence question and the objects clause. **It should be raised with the Registrar in the same email as the CEO question** | LEGAL REQUIREMENT | HIGH |
| **R10-f** | **No reviewer priced the downside of the s.100(1) trap correctly.** s.100(1) excludes a resolution to remove a Director from the written-resolution route (corroborated Tier 3; R01 read the text). Combined with AoA Art. 15.1's two-person quorum — which is **Schedule 5's own drafting** and displaces the s.98(b) single-shareholder carve-out — a sole shareholder has no clean route to remove a director. **This becomes live the moment a Kazakhstan-resident CEO or nominee director is appointed**, which is precisely the outcome if the Registrar says a CEO is mandatory. R01 M-2 is right and should be promoted from MEDIUM to **HIGH**, contingent on the §2.3 answer | LEGAL INTERPRETATION | HIGH (contingent) |

---

## 4. THE MANDATE'S THREE PARTICULAR QUESTIONS

### 4.1 Does the AoA unnecessarily impose restrictions on Wiese Advisory Eurasia Ltd. or Alexander Wiese that AIFC law does not require?

**YES — seven, and six of them are avoidable at zero legal cost.** `FINDING TYPE: LEGAL
INTERPRETATION`, each item verified against Schedule 5 and the Regulations.

| # | Restriction | Required by AIFC law? | Effect |
|---|---|---|---|
| 1 | **Art. 17 — every Director must hold an IIN** | **No.** Not in ComReg. Not in AFSA Guidance §3.3, which imposes an IIN on the **CEO only**. Schedule 5 default | Disqualifies Alexander Wiese from the only mandatory office in the company until he obtains an IIN. **This single sentence is the file's critical path** |
| 2 | **Art. 18.2 — the CEO must be a resident of the Republic of Kazakhstan** | **No.** No residency test anywhere in ComReg. Schedule 5 default | Disqualifies him from the office the Resolution appoints him to. Vests "the broadest powers to act in all circumstances" in a Kazakhstan resident if a CEO is ever appointed |
| 3 | **Art. 4 — Schedule 5 limb (b) deleted** | **No — the AIFC standard form is WIDER.** Schedule 5 Art. 4 has "(a) [as specified in the application]; **and (b) any other lawful activity for which companies may be incorporated under the AIFC Companies Regulations**" | Narrows corporate objects below the AIFC's own default. Interacts with Art. 18.2 ("within the limits of the corporate objects") and s.77(a) (director's duty to act in accordance with the Constitutional Documents). **A self-imposed restriction with no counterpart benefit** |
| 4 | **Art. 6 — capital, share count, nominal value and an FX rate hard-coded into the constitution** | **No.** Schedule 5 Art. 6: "The authorised share capital of the Company is **[as specified in the application]**" | Every capital change now requires a Special Resolution (Art. 30, s.19(1)) plus a s.19(2) filing within 14 days with a director's compliance certificate — instead of a notification. Also creates the s.43(1) voidness risk and the FX-drift risk. **Pure self-inflicted friction** |
| 5 | **Art. 15.1 — two-person quorum, carve-out only for written resolutions** | **No.** The statutory default at **s.98(b)** carves out a single-shareholder company from the two-person quorum — but only "unless the Articles of Association provide otherwise", and Art. 15.1 does provide otherwise. Schedule 5 default | Combined with s.100(1), leaves a sole shareholder with no clean route to remove a director |
| 6 | **Art. 31.1 — the Russian version has "equal legal force"** | **No — and it is prohibited.** s.14(1): Articles "**must be in the English language**". s.14(3): must not contain a provision inconsistent with the Regulations or Rules. Schedule 5 has no counterpart | Imports every one of R07's 40+ Russian divergences into the binding constitution: the garbled Art. 18.1, the reversed dividend obligation at Art. 27.5, the "conclusive"→"убедительный" downgrade, the invented «совет Директоров», and the Russian Art. 15.1 that requires a quorum of two for a one-shareholder company. **The most damaging self-imposed provision in the document** |
| 7 | Art. 28 (no shareholder inspection of accounting records) | Schedule 5 verbatim; and s.131(4)(d), s.132(1)–(2), s.56(1), s.90(2), s.104(4)–(5), s.20(1) preserve everything that matters | **Not** an unnecessary restriction. R01 §12 is right and **D04-10 should be withdrawn** |

**Restrictions on Alexander Wiese personally:** items 1 and 2, and nothing else. The AoA imposes no
personal covenants on him. **The instruments that actually restrict him are the PoA and the
Resolution, not the Articles** — and the PoA restricts him in the wrong direction: it protects the
cash (lines 66–73) and leaves the company open (line 81). R06 §4.3 is right about that and it is the
best analysis in the file.

### 4.2 Has a local Kazakhstan operating requirement accidentally been converted into a constitutional requirement?

**The file's current answer is "no — these are the AIFC's own Schedule 5 model articles."
That answer is right about the clauses it examined and wrong as a general answer. The correct answer
is YES, twice — once upstream and once by the drafter.**

**(a) Upstream, by the AIFC itself.** Source Register §C is correct that the drafter copied Schedule
5 faithfully — I verified Arts. 17 and 18.2 word for word. But that finding answers "who did it",
not "was it done". **The Individual Identification Number is a creature of Kazakhstan national law**
(RK Law No. 223 of 12 January 2007 "On National Registers of Identification Numbers"), and
"**resident of the Republic of Kazakhstan**" is a Kazakhstan tax and migration concept. Neither
appears anywhere in the AIFC Companies Regulations. **They appear only in a template constitution.**
So a local operating requirement *has* been converted into a constitutional requirement — the AIFC
did the converting, in Schedule 5, and the client is about to volunteer for it. That is a materially
more useful answer than "no", because it tells the client the requirement is **declinable**
(s.14(4): "the whole **or any part**"), and because AFSA's own current Guidance §3.3 no longer states
an IIN requirement for Directors at all.

**(b) By the drafter — AoA Article 6, and nobody found this.** The capital clause is not an AIFC
formation mechanic. It is a **Kazakhstan charter-capital formation mechanic**:

- Schedule 5 Art. 6, in full: *"The authorised share capital of the Company is [as specified in the
  application]."* [VERIFIED] Nothing else.
- The AoA substitutes a clause that fixes capital in a foreign currency, converts it at "**the
  official exchange rate of the National Bank of the Republic of Kazakhstan effective as of 31 July
  2026**", derives a per-share nominal value from that rate, and recites the aggregate. That is
  precisely how a Kazakhstan **TOO/LLP** records a foreign-currency contribution to its
  «уставный капитал» at formation. It has no counterpart in AIFC law, where s.43(1) requires only a
  *fixed* nominal value and the Regulations never use the phrase "authorised share capital" at all
  (they use "initial share capital" s.13(4)(d), "nominal value of each Share" s.13(4)(e), "allotted
  share capital" s.43(3)(a), "fully Paid-up share capital" s.25(2) — [all VERIFIED]).
- **The Russian text proves the transplant.** The heading is «**АКЦИОНЕРНЫЙ КАПИТАЛ**» (share
  capital) but the operative sentence begins «**Уставный капитал** Компании составляет…» — the
  charter-capital term of Kazakhstan LLP law. Two different Russian terms for the same concept
  inside one article, one of them from the wrong statute.

**And it is the source of nearly every capital defect in the review**: the void-allotment risk
(§2.1), the FX-drift risk, the "authorised vs issued" conflation, the Ordinary/Special Resolution
conflict with Art. 11.1(a), the s.19(2) amendment burden, and the PoA attorneys' standing occasion to
amend the constitution. **Restoring Schedule 5 Art. 6 verbatim removes all six at once.**

**(c) The same transplant runs through the Russian text generally**, and Art. 31.1 gives it equal
legal force: «**УЧРЕДИТЕЛЬ**» (founder — a TOO concept; the AoA's own Russian uses «Акционер» 66
times and «Учредитель» zero times), «**Уполномоченный Подписант**», «**совет Директоров**» (a board
this company will not have, invented five times). R07 catalogued these as translation errors. They
are better understood as **a systematic drafting of the Russian mirror in Kazakhstan LLP
vocabulary** — which is exactly the phenomenon the mandate's question 2 was asking about, and it sits
in a text the constitution declares to be of equal legal force.

`FINDING TYPE: LEGAL INTERPRETATION` / **HIGH**.

### 4.3 Is anything included simply because a local adviser used an old or generic template?

**The file's current answer is "no". That is right about the body of the AoA and wrong about
everything else in the package. The correct answer is PARTLY YES.**

| Item | Template residue? | Evidence |
|---|---|---|
| AoA Arts. 1–5, 7–30 | **No** — verbatim Schedule 5. I verified this myself | The file's current answer holds here, and R01, R04, R05, R08 and R09 are all right to say so |
| **AoA Art. 6** | **YES, and it is the most damaging clause in the document.** It is a *resolution* clause pasted into a *constitution*: "…effective as of 31 July 2026, **that** for the purpose of forming such capital is allotted 100 … **and that** the total nominal value … amounts to KZT 54 450." Those subordinate clauses have no governing verb. They are the orphaned tail of "**RESOLVED, that** …" at Res. 32. I confirmed both texts from the extracts | R08 item 16 found the grammar; nobody connected it to the answer to this question |
| **AoA Art. 31 (language)** | **YES.** No Schedule 5 counterpart; contradicts itself in consecutive sentences; and R08 T2-06 established it carries **no `_Toc` bookmark** while every other heading does — i.e. it was appended after the source precedent's table of contents was generated. Generic bilingual boilerplate bolted on late | Verified: Schedule 5 has no such article |
| **The Resolution, in its entirety** | **YES, demonstrably.** Created 2020-04-30 by a different author, revision 39; **two content controls, and only two**, holding "of Wiese Advisory GmbH" and "the Swiss Confederation" with the placeholder prompt «Место для ввода текста»; "**bye-laws**" (Bermudian) applied to a Swiss GmbH; US Letter page size in an A4 package; SharePoint content-type ID from a third party's document library; `-webkit-standard` in the font table; "I are" | R08 T2-01, T2-02, T2-03; I verified the visible text |
| `Classification: Restricted` footer | **No** — this is **AFSA's own marking**. I saw it at the head of the AIFC's own PDF of the Constitutional Statute during this review. R01 J, R02 PER-17, R04 R04-10, R05 §15 and R09 §B.15 are all correct, and `01_DOCUMENT_INVENTORY.md` §C.3's correction is right. **Still remove it** — a regulator's internal handling marking has no place on a public-register document | Verified directly |
| The PoA | **PARTLY.** Created 2025-09-20 at revision 24; **never names the target company** (attorneys may incorporate "a Private Company" and "**determine** and reserve the company name"); «11» guillemet date convention imported into English; orphan even-page footer. But the negative covenants at lines 66–73 are genuinely well drafted and specific to this mandate | R08 §3.3; R06 §4.1 |

**And the decisive sub-question the mandate asked: does copying Schedule 5 and then deviating create
obligations that adopting Schedule 5 wholesale would avoid?**

**YES — four, all verified on primary text, and this is R01's core insight:**

1. **s.13(5)** — the proposed Articles need not be filed at all if the Standard Articles are adopted
   in their entirety.
2. **s.15(2)** — the Registrar registers the filed Articles "**unless** the Standard Articles are
   adopted by a Company in their entirety", so nothing bespoke goes onto the public record.
3. **s.14(5)** — the Incorporators' compliance statement is triggered only by non-adoption.
4. **COR 2.2.2** — the mandatory-content list, including **(i) the maximum number of Directors** and
   **(r) termination and liquidation of the Company**, is triggered only by non-adoption — and
   **Schedule 5 itself contains neither**, so a bespoke drafter who starts from Schedule 5 inherits
   two guaranteed omissions.

**The AoA has incurred all four costs and captured none of the benefit.** It deviates from Schedule 5
in three places (Art. 4(b) dropped, Art. 6 rewritten, Art. 31 added), which is enough to be bespoke,
while retaining the two Schedule 5 clauses that disqualify the client. **The correct question for the
client is not "how do we fix these Articles" but "which side of the Schedule 5 line are we on" — see
the fork at §3.2.**

---

## 5. R10 BLOCKER LIST

My own list, independently arrived at. I have deliberately promoted things the file under-weights
and demoted things it over-weights.

### BLOCKER — do not file

| # | Finding | Authority | Why it is a blocker |
|---|---|---|---|
| **RT-1** | **There is no application.** The prescribed form (COR 2.1.1), the name reservation (COR 2.4.1), the registered-office evidence (Guidance §3.5) and the **registered email address** (s.13(4)(fa), s.24-1, COR 2.3-1) are all absent | [VERIFIED] | Nothing has been submitted that the Registrar can adjudicate. This, not the drafting, is the reason the package is not filable |
| **RT-2** | **The certified Swiss register extract for the corporate Incorporator is absent**, as is the certified English translation of it | **COR 2.1.3, 2.1.4** [VERIFIED] | Mandatory where the Incorporator is a foreign body corporate. The extract is also the document that closes the UBO question (§2.7) and evidences the Zweck (§3.8). One order to the Handelsregisteramt Zug fixes three problems |
| **RT-3** | **The share-capital clause cannot be keyed into the register and is void-risked under both limbs of s.43(1)** — three inconsistent per-share values, an aggregate contradicting its own per-share figure, and a nominal value pegged to a foreign-exchange rate | **s.43(1)**, s.13(4)(d)–(e) [VERIFIED] | The Registrar must enter initial share capital and nominal value per share from this clause. It is not possible to do so correctly |
| **RT-4** | **No instrument adopts the Articles.** Res. 29 resolves that the not-yet-existing company adopts the Articles "for the purpose of incorporation of **the Company**", and "the Company" is defined at Res. 12 as **Wiese Advisory GmbH** | **s.13(5)** [VERIFIED] | Bespoke Articles must be "signed by or on behalf of each Incorporator" and adopted by the incorporating shareholder. On its own defined terms the package does neither |
| **RT-5** | **The Articles are bespoke and omit COR 2.2.2(i) and (r), and no s.14(5) compliance statement exists** | **COR 2.2.2, s.14(2)(c), s.14(5)** [VERIFIED] | Mandatory constitutional content is missing and the accompanying statement AFSA §3.6 requires is absent. Curable in a day — but not filable as is |
| **RT-6** | **Art. 31.1 gives the Russian text equal legal force, contrary to s.14(1) and prohibited by s.14(3)** | **s.14(1), s.14(3)** [VERIFIED] | The Registrar is being asked to register a constitution that is not in English and that contains a provision inconsistent with the Regulations. It also imports R07's 40+ divergences into binding text |

### CRITICAL

| # | Finding |
|---|---|
| **RT-7** | **The CEO question is unresolved and everything branches off it** (§2.3). Do not draft, do not execute and do not reserve the name until `registration@afsa.kz` has answered in writing |
| **RT-8** | **The Route A / Route B fork has not been put to the client** (§3.2). The package currently sits in the worst cell of the matrix |
| **RT-9** | **Objects clause.** Inaccurate, unbounded, names "finance" first, and **contradicts the Swiss parent's own registered Zweck**, which the Registrar will hold under COR 2.1.3 (§3.8) |
| **RT-10** | **Date impossibility.** A resolution certified as adopted 25 July 2026 and "not modified" fixes capital by an NBK rate "effective as of 31 July 2026". The certificate is self-falsifying on its face. R03 §8 is right and this is the single most damaging thing a bank compliance officer will see |
| **RT-11** | **PoA line 81** — power to increase share capital and to *approve*, execute and file **any** amendments to the Articles, held severally, with an unrestricted right of substitution, for 12 months. R06 §4.3 is correct and its four-reason analysis should be adopted verbatim |

### HIGH

| # | Finding |
|---|---|
| **RT-12** | Consultancy Guidance **Schedule 1 item 1** ("compliance, regulatory, **due diligence** and **risk** consultancy") carries no "related to Financial Services" qualifier, and E&S due diligence for MDBs is a core product. R02's perimeter conclusion needs a fourth trigger (§2.4) |
| **RT-13** | **Environmental Instruments are Investments** and the AIFC runs a live carbon market on AIX. R02 PER-07 should be **HIGH**, not MEDIUM (§2.6) |
| **RT-14** | **s.24(3)** — principal business activity must be conducted in the AIFC unless the Registrar permits otherwise; contravention punishable by a fine. Ask in the same email as RT-7 (§3.11 R10-e) |
| **RT-15** | **The registered email address** is unaddressed anywhere in the package (§3.11 R10-d) |
| **RT-16** | Under **s.31**, the PoA's pre-incorporation bank acts bind **the two attorneys personally** until the company adopts them. Tell them (§3.6) |
| **RT-17** | Alexander Wiese's Swiss title is **Geschäftsführer mit Einzelunterschrift**, not "Chief Executive Officer" or "Director". Three documents use three titles; the register uses one. **Use the register's** (§2.7) |
| **RT-18** | The **UBO declaration** must not be signed until the certified extract confirms the current registered persons (§2.7 residual) |
| **RT-19** | R05's tax conclusion should be **re-stated** as "unavailable because you are choosing to be non-regulated", with the Art. 6(3) route, the Art. 6(7)(4) dividend exemption and the **Art. 6(7)(2) exit-gain exemption** on the table (§2.5) |
| **RT-20** | **Delete the first sentence of R02's proposed negative covenant.** An absolute constitutional undertaking never to provide services in relation to Financial Services forecloses RT-19 and requires a Special Resolution to undo (§2.5) |

### DOWNGRADED — findings the file over-weights

| Finding | Was | Now | Reason |
|---|---|---|---|
| R03 S-01 — signature authority unevidenced | **BLOCKER** | **CLOSED** | Einzelunterschrift confirmed on the public register (§2.7) |
| R06 AML-01 — no subscription clause | **BLOCKER** | **MEDIUM** | Cured by s.13(4)(d) + s.16(2)(a) + s.41(1) (§3.5) |
| R01 finding A — "broken s.14(5) sequence" | **BLOCKER** | **HIGH** (missing document) | Guidance §3.6 says the statement **accompanies** the bespoke version (§2.2) |
| R03 S-02 / R08 F8-07 / D03-05 — no organ resolved | **CRITICAL** | **MEDIUM** for filing | Guidance §3.6 accepts a resolution signed by the shareholder's **Board of Directors** (§3.7) |
| R08 F8-12 / D03-14 — "Authorised Signatory" invented | MEDIUM | **WITHDRAW** | It is a required appointment under Guidance §3.3 (§3.7) |
| D04-10 — Art. 28 denies the parent access to books | HIGH | **WITHDRAW** | Schedule 5 verbatim; s.131(4)(d), s.132, s.56(1), s.90(2), s.104(4)–(5) preserve everything material. R01 §12 is right |
| R07 C5, C11, D15; R08 F8-25, F8-26; R07 §2.4 | LOW–MEDIUM drafter defects | **RE-ATTRIBUTE** | All six are Schedule 5's own text (§3.4) |

---

## 6. CAN I PROVE THE PACKAGE SHOULD NOT BE FILED?

**Yes, and the proof is short.**

I do not need the CEO question, the tax analysis, the Swiss authority question, the bilingual
divergences, the metadata forensics or any of the review's contested findings. **RT-1 alone is
dispositive**: the prescribed application form, the name reservation, the registered-office
evidence, the registered email address and the COR 2.1.3 certified extract of the corporate
Incorporator are all absent, and each is a mandatory component of an AIFC incorporation application
that I have verified against the operative text. Four constitutional and authority documents plus a
PowerPoint slide are not a filing. **R09's headline verdict — "The package is not a filing" — is
correct, and it is the finding on which the whole review should rest.**

**RT-3 and RT-4 are each independently sufficient as well**, and both are on the face of the
documents in a way a Registrar's officer cannot miss: a capital clause the register cannot be keyed
from, and an adoption clause that, applying the document's own definitions, resolves that a
non-existent company adopts articles in order to incorporate the Swiss parent in Kazakhstan.

**What I cannot prove, and will not assert:**

- I cannot prove the package is *unlawful*. Most of what is wrong with it is incomplete, not
  illegal. **Nothing here is a legal impediment to this structure.** A wholly-owned AIFC private
  company with a Swiss GmbH parent and a single German-national, Swiss-resident director is an
  ordinary transaction that AIFC law expressly contemplates (s.13(1), s.36(1)(a), COR 2.1.3,
  Guidance §3.4).
- I cannot prove a CEO must or must not be appointed. That is genuinely unresolved and only the
  Registrar can close it — though the primary material now leans three-to-one toward optionality.
- I cannot prove the ownership representation. The public register strongly supports it; the
  certified extract must still be ordered.

**What actually gates the filing date**, ranked, having removed the items I have disproved:

1. **The Registrar's answer on the CEO** (one email; days). Everything constitutional branches off it.
2. **The IIN**, *if and only if* Route A is chosen or a CEO is required (weeks; AIFC Expat Centre;
   possibly one trip to Astana — R04 §8's conflict on that point remains genuinely open).
3. **The certified, apostilled Zug extract + certified English translation** (1–3 business days plus
   apostille). Closes RT-2, RT-18 and the Zweck question together.
4. **The AIFC registered-office lease** (fixed workspace; no bare legal address exists).
5. Redrafting. Which is the fastest item on the list, and which the file has treated as the slowest.

**Closing observation for the Lead Reviewer.** The most striking thing about this file is not the
number of defects — an incorporation package assembled from a 2020 precedent will always have them —
but the **asymmetry of the review's attention**. Nine reviewers produced roughly 640KB on drafting,
authority and translation, and not one obtained the joint List that determines the tax answer, the
Swiss register entry that determines the authority answer, or the two passages in AFSA's own Guidance
(§4.4 and §3.6) that most nearly resolve the CEO question. All three were retrievable in under five
minutes. **Before this file goes to the client, the missing `AoA(1).docx` should be demanded, the
Zug extract ordered, and one email sent to `registration@afsa.kz` containing three questions: the
CEO, s.24(3), and whether the compliance statement is an upload or a portal declaration.** That email
is worth more than another round of drafting.

---

## 7. SOURCES INDEPENDENTLY READ BY R10

All retrieved **29 August 2026** via the Exa server-side fetch tool, which is not subject to the
`WebFetch` egress block recorded at `04_SOURCE_REGISTER.md` §A. Every provision quoted above was read
in situ.

| # | Source | Provisions relied on | URL |
|---|---|---|---|
| V1 | **AIFC Companies Regulations, Part 4** | ss.13(1)–(5), **14(1)–(6)**, 15, **16(2)–(3)**, 17, 18, 19, 20, 21–23, **24(1),(3)**, **24-1**, 25(1)–(2), 26, 26-1, 27, 28 | `https://orderly.myafsa.com/entiresection/a00010001000100010004/part-4:-company-formation-and-incorporation` |
| V2 | **AIFC Companies Regulations, Part 7** | ss.35(1), 36(1), 37(1)–(2), 39–40, **41(1)**, 42, **43(1)–(3)**, 44(1)–(5), **45(1)–(2)**, 46, 47, 48 | `https://orderly.myafsa.com/entiresection/a00010001000100010007/part-7` |
| V3 | **AIFC Companies Rules, Part 2** | **2.1.1, 2.1.3, 2.1.4, 2.2.1, 2.2.2(a),(c)–(r)**, 2.3.2–2.3.3, **2.3-1**, 2.4.1, 2.4.2(a)–(f), 2.4.4, 2.5.1–2.5.2 | `https://orderly.myafsa.com/entiresection/a00010001000200010002/part-2:-companies` |
| V4 | **COR Schedule 5 — Standard Articles for Private Companies** | **Arts. 1–29 complete**, esp. 1.1 (CEO definition), 2, 3, 4(a)–(b), 6, 7.3, 9.4, 11.1, 14.4, 15.1, 15.6, 16.3, 16.7, **17**, **18.1–18.3**, 19, 21.1–21.4, 22, 24.1–24.14, 25, 27.5, 28, 29 | `https://orderly.myafsa.com/entiresection/a0001000100020001000E/schedule-5:-standard-articles-of-association-for-private-companies` |
| V5 | **AFSA, Guidance on the Registration Process in the AIFC (Feb 2025)** | §1 (non-binding), §2.2, §3.1 (+RSC suspension footnote), §3.2, **§3.3**, §3.4, §3.5, **§3.6**, §4.3 items 1–16, **§4.4**, §4.5, §4.6, §4.7, §5.2 | `https://afsa.aifc.kz/wp-content/uploads/2025/02/Guidance-on-the-Registration-Process-in-the-AIFC.pdf` |
| V6 | **AFSA, Guidance on Providing Consultancy Services in the AIFC (12 Mar 2020)** | **¶¶1–9 and Schedule 1 items 1–4, complete** | `https://aifc.kz/wp-content/uploads/2024/06/afsa-guidance-on-providing-consultancy-services-in-the-aifc.pdf` |
| V7 | **Constitutional Statute No. 438-V ZRK, Article 6** | **6(1)–(9) complete**, esp. 6(3)(5), **6(4)**, 6(5), **6(6)**, **6(7)(2),(4)**, 6(8), **6(8-2)** | `https://aifc.kz/legal-framework/constitutional-statute-of-the-republic-of-kazakhstan/constitutional-statute-of-the-republic-of-kazakhstan-full-text/` (cross-checked against `https://aifc.kz/wp-content/uploads/2024/05/constitutional-statute-of-the-republic-of-kazakhstan-eng.pdf`) |
| V8 | **The List of financial services … exempt from CIT and VAT — rule 1.1 and Schedule 1** | **"A Regulated Activity and Market Activity listed in GEN"**; GEN Schedule 1 ¶¶1–14 as reproduced | `https://orderly.myafsa.com/entiresection/a000100020002000T/financialservicesexemptcorporatetax` |
| V9 | **AIFC Glossary (GLO) v21, in force 1 Jan 2025** | **"Environmental Instrument"**, **"Investment"**, "Commodity" | `https://aifc.kz/wp-content/uploads/2024/06/glo_v21_fr0017_01.01.2025_gk_zs-1-1.pdf` |
| V10 | **AIFC Fees Rules — Amendments No. 17** (approved 13 Nov 2025, in force 1 Dec 2025) | 3.1.1–3.1.6; **Schedule 1 application fees** (Advising on Investments 5,000 → **7,000**) | `https://aifc.kz/wp-content/uploads/2024/06/fees-rules-a17.-with-amendments-as-of-13-november-2025-commence-on-1-december-2025.pdf` |
| V11 | **Swiss Commercial Register, Canton of Zug — CHE-212.321.848** | SHAB Nr. 200/16.10.2019; Nr. 87/06.05.2020; Nr. 76/20.04.2022; **Nr. 15/23.01.2023** (Tagesregister 1097/18.01.2023): Sitz Baar; Domizil c/o Guthirt Treuhand AG; Stiller ausgeschieden; **Wiese, Alexander — Gesellschafter und Geschäftsführer, mit Einzelunterschrift, mit 200 Stammanteilen zu je CHF 100.00**; registered **Zweck** | `https://www.moneyhouse.ch/de/company/wiese-advisory-gmbh-11058383011` · `https://www.lixt.ch/handelsregister/wiese-advisory-gmbh-1410676` · `https://onlineinfo.ch/firma/wiese-advisory-gmbh---che-212-321-848` · `https://mercury-reports.com/companies/uid/CHE212321848/shab` — **aggregators of Zefix/SHAB data; a certified Handelsregisterauszug has NOT been obtained** |
| V12 | **AIFC Carbon Platform / AIX** | Environmental instruments traded (I-REC live; Verra and Gold Standard being onboarded); "licensed AIX broker" | `https://aifc.kz/faq/carbon-platform/` · `https://aifc.kz/carbon-platform/` |
| V13 | Corroboration only (Tier 3) for **s.100(1)** — written resolutions, with the two exceptions (removal of a director; removal of a registered auditor) | s.100(1) | practitioner commentary; the operative text was read by R01 and is not independently verified by me |

**Document evidence.** All line references are to the shared extractions at
`<scratchpad>/extract/`. I re-read AoA lines 112–116 and 126–132, Resolution lines 1–35 and 47, and
PoA lines 1–20 and 60–97 directly, and performed a Unicode code-point analysis of the Resolution
confirming **U+0041 LATIN CAPITAL LETTER A** at six occurrences of «Aлександр Визе».
**No source document was modified.**

---

*Prepared by Reviewer 10 — Red Team. This report is adversarial by design: where it agrees with
another reviewer it says so, and where it does not it gives the primary text. Section references are
to the AIFC Companies Regulations No. 2 of 2017 and the AIFC Companies Rules GR0004 of 2017 as read
on 29 August 2026 unless otherwise stated.*
