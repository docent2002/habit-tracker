# 04 — SOURCE REGISTER

Verification date: **2026-08-28**.

## A. Network constraint on this review (must be disclosed)

**FINDING TYPE: FACT.** The session's network egress policy **blocks direct fetches** to the
primary-source domains. Confirmed via the proxy status endpoint, which logged `connect_rejected`
/ `403 to CONNECT` for `aifc.kz:443`, `aol.aifc.kz:443`, `orderly.myafsa.com:443`, and reviewers
additionally reported blocks for `afsa.aifc.kz`, `adilet.zan.kz`, `fedlex.admin.ch`, `zefix.ch`.

Consequence: **Tier 1 primary legal texts could not be opened and read in full.** Verified
propositions below rest on **search-index extracts of the primary pages** plus corroborating Tier 3
commentary. That is materially better than memory, but it is **not** a substitute for reading the
provision in situ.

**Every legal conclusion in this review therefore carries the standing caveat that the operative
provision must be read in full, in its current version, before reliance.** This is recorded as
issue **REV-001** and appears in `05_DECISIONS_REQUIRED.md` as an external-confirmation item.

## B. Verified propositions

| # | Issue | Source | Provision | URL | Status |
|---|---|---|---|---|---|
| S-01 | Director must be a natural person holding an **IIN** | AIFC Companies Rules, **Schedule 5** (Standard Articles of Association for Private Companies), via AFSA legal-framework portal | "The Company must have at least 1 Director, who is a natural person and has an Individual Identification Number." | https://orderly.myafsa.com/entiresection/a0001000100020001000E/schedule-5:-standard-articles-of-association-for-private-companies | **VERIFIED (extract)** |
| S-02 | CEO **must be a resident of the Republic of Kazakhstan** | AIFC Companies Rules, **Schedule 5** | "The Chief Executive Officer must be a natural person and a resident of the Republic of Kazakhstan." Also carries the "broadest powers … represent the Company in its dealings with third parties" formulation. | as above | **VERIFIED (extract)** |
| S-03 | **A CEO is OPTIONAL** for an AIFC private company | AIFC Companies Rules Schedule 5 + AIFC guidance "Director and CEO: what is the difference?" | Business "must be managed by the directors **or** by another natural person … bearing the title of Chief Executive Officer"; "the appointment of a Chief Executive Officer is **optional**". Director = mandatory; CEO = optional. | https://aifc.kz/infospace/director-and-ceo-what-is-the-difference/ | **VERIFIED (extract)** |
| S-04 | A **foreign national** director **can** obtain an IIN | AIFC / AFSA registration guidance | "If a foreign national is appointed as a company Director, he or she must obtain an individual identification number (IIN), for which purpose he or she must apply to the special Expat Center." | https://aol.aifc.kz/en/specifics-of-setting-up-and-registering-companies-in-the-aifc | **VERIFIED (extract)** |
| S-05 | Same individual may hold both Director and CEO roles | AIFC guidance | Permitted; if split between two people, duties must be delineated. | https://chambers.com/articles/10-questions-to-a-lawyer-about-a-director-and-the-ceo-in-the-astana-international-financial-centre | **VERIFIED (extract)** |
| S-06 | Public company contrast | Schedule 6 (Standard Articles, Public Companies) | ≥2 Directors; **at least 1** must hold an IIN — i.e. the private-company rule is stricter per-director. | https://orderly.myafsa.com/entiresection/a0001000100020001000F/schedule-6:-standard-articles-of-association-for-public-companies | **VERIFIED (extract)** |
| S-07 | AFSA registration guidance (document set, forms, fees) | AFSA, *Guidance on Registration in the AIFC*, Nov 2024 | Not yet read in full — egress blocked. | https://afsa.aifc.kz/wp-content/uploads/2024/11/guidance-on-registration-in-the-aifc-1.pdf | **UNCONFIRMED — retrieve** |

## C. The finding that changes the recommended fix

**FINDING TYPE: LEGAL REQUIREMENT (verified by extract).**

The mandate (§13, Red Team) asked whether *"a local Kazakhstan operating requirement [has]
accidentally been converted into a constitutional requirement"* and whether provisions were
inserted *"simply because a local adviser used an old or generic template"*.

For the CEO residency and Director IIN clauses, **the answer is NO.**

AoA lines 33, 358, 365 and 367 **faithfully reproduce the AIFC's own Schedule 5 Standard Articles**,
including the distinctive "broadest powers to act in all circumstances" formulation. The service
provider did not invent these requirements and did not import general Kazakhstan law into the
constitution. The Lead Reviewer's initial working hypothesis to the contrary is **withdrawn**.

**But the practical consequence is better for the client, not worse**, because of S-03:

- A **Director is mandatory** and **must hold an IIN** (S-01). Alexander Wiese has none — but a
  foreign national **can obtain one** through the AIFC Expat Centre (S-04). This is a
  procedural step, not a barrier.
- A **CEO is optional** (S-03). The Kazakhstan-residency requirement **only engages if a CEO is
  appointed at all.**

Therefore the correct remedy is **not** to amend the Articles away from the AIFC standard form
(which invites Registrar scrutiny), but to **not appoint a CEO**. The company is then managed by
its Director. Alexander Wiese serves as **Director + Authorised Signatory**; the residency clause
sits dormant in the Articles and never bites.

The defect is therefore located in the **Resolution** (which appoints a CEO who cannot qualify),
not in the **Articles** (which are standard-form and correct).

Recommended treatment, to be tested by the Red Team:
1. **Delete the CEO appointment** from the Resolution [Res. line 21]. — resolves the contradiction.
2. **Obtain an IIN for Alexander Wiese** via the AIFC Expat Centre before or alongside filing. —
   required for him to serve as Director.
3. Leave AoA Schedule-5 clauses **unamended**.

**Caveat (REV-001):** S-01 to S-06 rest on search-index extracts because the primary pages could
not be opened. Schedule 5 must be read in full, in its current in-force version, and the optionality
of the CEO confirmed against the operative text and current Registrar practice, before this
recommendation is acted on.
