# R03 — Swiss Parent Authority Review

**Reviewer 3 — Swiss corporate counsel (GmbH governance, art. 772 ff. CO)**
**Review date:** 28 August 2026
**Subject:** Wiese Advisory GmbH, CHE-212.321.848, c/o Guthirt Treuhand, Ibelweg 18a, 6300 Zug,
as proposed founder / sole shareholder of **Wiese Advisory Eurasia Ltd.** (AIFC)

**Documents reviewed** (extracted .txt, line numbers as cited):
- `1f18f06f-26_07_30_POWER_OF_ATTORNEY_registration.docx.txt` — cited as **[PoA n]**
- `5024e711-26_07_30___Resolution_on_Incorporation.docx.txt` — cited as **[Res n]**
- `876e0e98-26_01_089___AoA.docx.txt` — cited as **[AoA n]**
- `26 01 089 _ AoA(1).docx` — **UNCONFIRMED — INPUT MISSING** (per SHARED BRIEF scope exception)

---

## 0. Method and evidence limits (read first)

This review deliberately **does not** accept any proposition about Alexander Wiese's Swiss corporate
authority merely because an AIFC-facing document asserts it. The three documents in the pack are
**self-certifying**: the only evidence of the parent's authority is a sentence written by the same
person whose authority is in question [Res 12]. No Swiss corporate evidence whatsoever accompanies
the pack.

**Verification constraint (disclose to the client):** direct HTTPS fetches to `fedlex.admin.ch`,
`zefix.ch`, `justement.ch`, `aifc.kz`, `afsa.aifc.kz` and `adilet.zan.kz` were **blocked by this
environment's network egress policy**. Swiss CO article content below rests on indexed search
results (cited) plus standard doctrine; **no article text was read from the official Fedlex
consolidated text, and the Zefix / Handelsregister Zug entry for CHE-212.321.848 was not inspected.**
Every proposition that a primary-source reading would have settled is labelled `UNCONFIRMED`.

---

## 1. Executive summary — the authority position is unproven, not merely defective

| # | Finding | Type | Severity |
|---|---|---|---|
| S-01 | **Alexander Wiese's signature authority for the GmbH (Einzelunterschrift vs Kollektivunterschrift zu zweien) is nowhere evidenced.** If he holds only joint signature, the PoA, the Resolution and the AoA signature are **all void as against the GmbH**. The entire package hangs on this single unverified fact. | `UNCONFIRMED` | **BLOCKER** |
| S-02 | The Resolution's authority chain is **internally incoherent across five different capacities** (shareholder / founder / Director / CEO / Managing Director). As drafted no identifiable organ of the GmbH has adopted anything. | `LEGAL INTERPRETATION` | **CRITICAL** |
| S-03 | **Date impossibility.** A resolution certified as adopted **25 July 2026** and "**not modified**" resolves by reference to an NBK FX rate "**effective as of 31 July 2026**" [Res 12 vs Res 32] — a fact that did not exist on the adoption date. | `FACT` | **CRITICAL** |
| S-04 | The PoA authorises attorneys to "**increase the share capital of the Company**" [PoA 81] where "**the Company**" is **an undefined term** in the PoA. On its face it can be read as the GmbH's own Stammkapital — a non-transferable quotaholders' power requiring a public deed. | `LEGAL INTERPRETATION` | **CRITICAL** |
| S-05 | **No subscription clause.** Nothing in the pack states that Wiese Advisory GmbH **subscribes for** the 100 shares. [Res 32] uses a passive, subscriber-less formulation. | `FACT` | **HIGH** |
| S-06 | "**Chief Executive Officer**" is **not a recognised organ or registrable organ-title of a Swiss GmbH** [Res 43; AoA 602]. | `LEGAL REQUIREMENT` | **HIGH** |
| S-07 | The GmbH's **corporate purpose (Zweck)** has not been produced. Whether it carries a participation clause is unknown. | `UNCONFIRMED` | **HIGH** |
| S-08 | The **PoA signature block is blank** — no printed name, no capacity, no entity attribution beneath either signature line [PoA 88–97]. | `FACT` | **HIGH** |
| S-09 | **No Handelsregister extract, no Statuten, no quotaholders' register** accompanies the filing. | `PRACTICAL REQUIREMENT` | **HIGH** |
| S-10 | **Dual representation (Doppelvertretung) is unaddressed.** Wiese will represent both the GmbH and the new company. Art. 718b CO applies by analogy via **art. 814(4) CO**; written form and ratification by the sole quotaholder are required/advisable. | `LEGAL REQUIREMENT` | **MEDIUM-HIGH** |
| S-11 | **Nothing authorises the PoA.** The Resolution authorises only Alexander Wiese personally [Res 18]; it never authorises appointing third-party attorneys or granting a right of substitution. | `LEGAL INTERPRETATION` | **MEDIUM** |
| S-12 | PoA EN says "**Managing Director**", PoA RU says only "**Директора**" (Director) [PoA 7 vs 8]. Under Swiss law *Geschäftsführer* and *Direktor* are **legally distinct** (art. 814(3) CO names both separately). | `LEGAL INTERPRETATION` | **MEDIUM** |
| S-13 | "**bye-laws of the Company**" [Res 12] — Bermuda/BVI template residue. A Swiss GmbH has **Statuten**. | `FACT` | **MEDIUM** |
| S-14 | AoA cover page says the Articles were "**Approved by Resolution of the Shareholder … Dated 11 August 2026**" [AoA 1–4], while the Resolution's own operative clause says "**the Wiese Advisory Eurasia Ltd. duly adopts**" them [Res 29] and the recital dates adoption to 25 July [Res 12]. Three inconsistent accounts of who approved the Articles and when. | `FACT` | **HIGH** |

**Bottom line:** *Do not file.* Not because the transaction is impossible — it is entirely
ordinary — but because **not one element of the parent's authority is currently evidenced**, and the
one instrument that purports to evidence it contradicts itself on its face.

---

## 2. Swiss law framework relied on

| Provision | Proposition relied on | Source |
|---|---|---|
| **Art. 804(2) CO** | Non-transferable powers of the Gesellschafterversammlung: amendment of the Statuten, appointment/removal of Geschäftsführer, appointment/removal of auditors, approval of accounts, etc. **Founding a subsidiary is not on the list.** No. 17 permits a statutory approval reservation (Genehmigungsvorbehalt) over management matters; no. 18 permits further competences to be conferred by the Statuten. | [UZH Gesellschaftsrecht — Gesellschafterversammlung](https://www.rwi.uzh.ch/static/elt/lst-vogt/gesellschaftsrecht/gmbh/de/html/organisationsver_learningObject1.php); [onlinekommentar.ch](https://onlinekommentar.ch/de/kommentare/or808c) |
| **Art. 805(4) CO** | Quotaholders' resolutions **may be adopted in writing** (schriftliche Beschlussfassung / Zirkularbeschluss), provided no quotaholder requests oral deliberation. In a **single-quotaholder GmbH this is always available.** | [Walder Wyss, REPRAX 4/20](https://www.walderwyss.com/assets/content/publications/Eggimann_Haecki_Zysset-Schriftliche-Beschlusse-der-GV.pdf) |
| **Art. 810(1)–(2) CO** | The **Geschäftsführer** are competent for **all matters not allocated by law or the Statuten to the Gesellschafterversammlung**, and hold non-transferable duties including overall management (Oberleitung) and organisation. | [CMS Expert Guide — Switzerland](https://cms.law/en/int/expert-guides/cms-expert-guide-for-directors-of-companies/switzerland) |
| **Art. 811 CO** | The Statuten may require the Geschäftsführer to submit specified decisions to the Gesellschafterversammlung for approval; such a reservation does **not** restrict representative power vis-à-vis third parties. | ibid. |
| **Art. 812 CO** | Geschäftsführer must act with due care and safeguard the company's interests in good faith (Treuepflicht). | ibid. |
| **Art. 814(1)–(2) CO** | Each Geschäftsführer represents the company; **the Statuten may provide otherwise** (e.g. Kollektivunterschrift zu zweien). | [swissrights, Art. 814 OR](https://www.swissrights.ch/gesetze/Artikel-814-OR-2025-EN.php) |
| **Art. 814(3) CO** | The company must be capable of being represented by a person **domiciled in Switzerland**, who must be a **Geschäftsführer or a Direktor** — the two are distinct offices. | [Goldblum — Resident Director](https://goldblum.ch/company-formation/resident-director/) |
| **Art. 814(4) CO** | For the **scope and limitation of representative power**, and for **contracts between the company and the person representing it**, the **stock-corporation provisions (art. 718a, 718b CO) apply by analogy**. | [swissrights, Art. 814 OR](https://www.swissrights.ch/gesetze/Artikel-814-OR-2025-EN.php); [Haufe — Vertretung der Gesellschaft](https://www.haufe.de/id/beitrag/schweiz-iv-vertretung-der-gesellschaft-HI14963264.html) |
| **Art. 718a(1)–(2) CO** (via 814(4)) | Representatives may perform all legal acts **that the company's purpose may entail**; **restrictions have no effect against bona fide third parties**, save registered sole/joint-signature provisions. | [swissrights, Art. 718a OR](https://www.swissrights.ch/gesetze/Artikel-718a-OR-2025-EN.php) |
| **Art. 718b CO** (via 814(4)) | Where the company is represented in concluding a contract **by the person with whom it contracts**, the contract **must be in writing**; the exception is confined to everyday business (Geschäfte des täglichen Verkehrs) below CHF 1,000. | [swissrights, Art. 718 OR](https://www.swissrights.ch/gesetze/Artikel-718-OR-2025-EN.php) |
| **Art. 53 ZGB** | Legal entities have **general legal capacity**; the Zweck limits **representative power**, not capacity. | Doctrine; see §7 |
| **Art. 776, 777, 780 CO** | Statuten must state the Zweck; formation and **amendment of the Statuten require a public deed (öffentliche Beurkundung)**. `UNCONFIRMED` as to exact article for GmbH amendment — verify art. 780 CO against Fedlex. | Not read from primary source |
| **Art. 936b CO** | Facts entered in the Handelsregister are effective against third parties from publication. `UNCONFIRMED` — post-2021 numbering not verified. | Not read from primary source |

---

## 3. The nine authority heads — what the pack asserts vs what is actually proven

Legend: **A** = asserted in the pack; **P** = proven by Swiss evidence in the pack.

| # | Authority head | Where asserted | A | P | Correct Swiss competence | Verification required |
|---|---|---|:-:|:-:|---|---|
| 1 | **Incorporate a foreign subsidiary** | [Res 15] | ✔ | ✘ | **Geschäftsführung** (art. 810(1) CO) — not an art. 804(2) reserved matter — *unless* the Statuten reserve it (art. 804(2)(17)–(18), 811 CO) | Statuten Zweck + reserved-powers clause; HR extract |
| 2 | **Subscribe for the shares** | **nowhere** — [Res 32] is passive and names no subscriber | ✘ | ✘ | Geschäftsführung; but the contribution is a self-dealing/dual-representation act → art. 718b CO written form | Express subscription clause naming the GmbH as subscriber of all 100 shares |
| 3 | **Approve the subsidiary's Articles** | [Res 29] — but attributed to **the not-yet-existent subsidiary**; [AoA 1–4] attributes it to the GmbH's shareholder | ~ | ✘ | The **incorporating shareholder** approves; internally a Geschäftsführung act (or quotaholders' if reserved) | Corrected operative clause; single consistent date |
| 4 | **Appoint the subsidiary's Director** | [Res 23] | ✔ | ✘ | Exercise of the GmbH's shareholder rights in the subsidiary → Geschäftsführung act of the GmbH | As above. (Substantive AIFC disqualification — no IIN — is R01/R02's scope) |
| 5 | **Appoint the subsidiary's CEO** | [Res 21] | ✔ | ✘ | As above | As above. (AoA Art. 18.2 residency bar — outside this review) |
| 6 | **Appoint Authorised Signatory** | [Res 26] | ✔ | ✘ | As above | As above |
| 7 | **Issue the Power of Attorney** | [PoA 7] — rests on organ representation ("acting pursuant to the Articles of Association"), **not** on the Resolution | ✔ | ✘ | Art. 814(1) CO representative power — **valid only if Einzelunterschrift** | **HR extract showing Einzelunterschrift** — decisive |
| 8 | **Delegate incorporation powers** | [Res 18] to A. Wiese personally; [PoA 23–34] to the two KZ attorneys | ~ | ✘ | Geschäftsführung may appoint agents (art. 814(4)/718a CO); but the Resolution never authorises third-party attorneys or substitution | Express resolution authorising the PoA and the right of substitution |
| 9 | **Delegate bank-opening powers** | [PoA 35–44], with negative covenants [PoA 66–73] | ✔ | ✘ | Geschäftsführung | HR extract + notarised/apostilled PoA (bank practice) |

**Observation.** Heads 1, 3–6 and 8 are all asserted in **one** instrument whose adopting organ cannot
be identified (§4). Head 2 is asserted **nowhere**. Head 7 rests on a fact (sole signature authority)
that is asserted in **no** document at all.

---

## 4. The Resolution on Incorporation — reconstructing the authority chain

### 4.1 Five mutually inconsistent capacities

| Location | Text | Capacity implied | Is that a real Swiss capacity? |
|---|---|---|---|
| [Res 2–4] title (EN) | "RESOLUTION OF **SHAREHOLDER** OF WIESE ADVISORY GmbH" | Alexander Wiese **personally**, as owner of the GmbH | A Swiss GmbH has **Gesellschafter** holding **Stammanteile**, not shareholders holding shares. Terminologically wrong, substantively the right *body* |
| [Res 7–8] title (RU) | "РЕШЕНИЕ **УЧРЕДИТЕЛЯ**" = resolution of the **FOUNDER** | The person who founded the GmbH | **No.** A founder qua founder holds no continuing organ capacity after incorporation. Not a mistranslation of "shareholder" — a third, distinct term |
| [Res 12] recital | "I … am the duly appointed **Director** of Wiese Advisory GmbH … the resolution … was duly adopted **by myself**" | An **organ/officer** of the GmbH adopting a management resolution | Ambiguous. Under **art. 814(3) CO** a Swiss company may have both a *Geschäftsführer* (organ) and a *Direktor* (registered signatory who is **not** an organ). "Director" does not identify which |
| [Res 43] / [AoA 602] signature | "FOR Wiese Advisory GmbH … Alexander Wiese, **Chief Executive Officer**" | Agent signing **on behalf of the GmbH** | **No.** See §5 |
| [PoA 7] | "represented by its **Managing Director**, Alexander Wiese" | *Geschäftsführer* | Closest to correct — but not matched by the RU text [PoA 8], which says only "Директора" |

### 4.2 Who legally adopts? Who certifies? Who signs?

As drafted, these three roles are **assigned to three different capacities of the same person, and
they do not cohere**:

- **Adopts:** on the title, the *shareholder/founder*; in the body, the *Director*, "by myself".
  A director is not the shareholder. The two are different organs with different competences and
  different formalities. **The document does not disclose which body resolved.**
- **Certifies:** the *Director*, in the classic offshore secretary's-certificate register
  ("I hereby certify that … the said resolution has not been modified or rescinded and is now in
  full force and effect"). That structure presupposes **a separate underlying resolution or
  minute** which the certifier attests to. **No underlying 25 July resolution is attached or
  referenced by any identifier.** The AIFC Registrar and any bank would therefore be certifying-by-
  proxy a document they never see.
- **Signs:** "**FOR** Wiese Advisory GmbH" as **CEO**. This is fatal to the "shareholder resolution"
  reading: a quotaholders' resolution is **not signed on behalf of the company**. It is signed by
  the quotaholder **in his own name**, and the company is the object of the resolution, not its
  author. The signature block therefore contradicts the title.

**Finding (`LEGAL INTERPRETATION`, CRITICAL):** the instrument is a hybrid of (i) a
quotaholders' resolution, (ii) a managing-officer's resolution and (iii) an officer's certificate of
resolutions, and it is none of them cleanly. A careful registrar or bank compliance officer can
reasonably conclude that **no organ of Wiese Advisory GmbH has validly resolved anything**.

### 4.3 Which instrument is correct — and which is safest

**Swiss competence analysis.** Founding a subsidiary is **not** listed among the non-transferable
powers of the Gesellschafterversammlung in **art. 804(2) CO**. Under **art. 810(1) CO** the
Geschäftsführer are competent for everything not so allocated. **Therefore the incorporation of
Wiese Advisory Eurasia Ltd. is, by default, a management act — a *Geschäftsführerbeschluss*.**

Three qualifications:

1. The **Statuten may reserve it** — either by conferring the competence on the Gesellschafterversammlung
   (art. 804(2)(18) CO) or by imposing a **Genehmigungsvorbehalt** (art. 804(2)(17), art. 811 CO).
   Many Zug GmbH Statuten drafted by Treuhand firms contain exactly such a clause for the acquisition
   of participations. **`UNCONFIRMED` — the Statuten have not been produced.**
2. The **Geschäftsführer may voluntarily submit** the matter to the Gesellschafterversammlung, which
   may then resolve on it. That is expressly contemplated by art. 804(2) CO.
3. The act involves **dual representation** and therefore attracts art. 718b CO via art. 814(4) CO
   (§6), for which quotaholder ratification is the standard cure.

**Recommendation (`RECOMMENDATION`, adopt in full):** produce **one bilingual instrument containing
two clearly separated and separately signed parts**:

> **Part A — Beschluss der Geschäftsführung / Resolution of the Managing Officer(s)** of Wiese
> Advisory GmbH: resolving to incorporate Wiese Advisory Eurasia Ltd. in the AIFC; **to subscribe
> for all 100 ordinary shares**; to approve the Articles of Association in the form annexed; to
> exercise the GmbH's rights as sole shareholder to appoint the Director, the CEO and the Authorised
> Signatory; to grant the Power of Attorney of even date; and confirming that this act falls within
> the GmbH's Zweck and is not reserved by the Statuten.
> *Signed: Alexander Wiese, **Geschäftsführer mit Einzelunterschrift** (Managing Officer with sole
> signatory power).*
>
> **Part B — Beschluss des Alleingesellschafters / Written Resolution of the Sole Quotaholder**
> (art. 805(4) CO): approving and ratifying Part A in every respect; expressly approving the
> **dual representation / self-dealing** inherent in Alexander Wiese acting for both the GmbH and
> Wiese Advisory Eurasia Ltd.; and confirming that no statutory approval reservation is unmet.
> *Signed: Alexander Wiese, **sole quotaholder (Alleingesellschafter)**, in his own name.*

This is the belt-and-braces form. It is **legally correct under Swiss law**, it produces the
document a foreign registrar and a Kazakh bank expect to see ("shareholder resolution"), and it
cures the art. 718b/718a exposure in the same instrument. Two signatures in two named capacities
also make the authority chain self-explanatory to a non-Swiss reader.

**Is the present title accurate?** **No.** "RESOLUTION OF SHAREHOLDER OF WIESE ADVISORY GmbH" is
inaccurate on three counts: (i) a GmbH has *Gesellschafter*, not shareholders; (ii) the body of the
document says the **Director** adopted it, not the shareholder; (iii) the signature block signs
**for the company**, which no quotaholders' resolution does. The Russian "РЕШЕНИЕ УЧРЕДИТЕЛЯ" is
worse still, naming a fourth and legally inert capacity.

**Is the authority chain coherent as drafted?** **No.** `LEGAL INTERPRETATION` — **CRITICAL**.

---

## 5. "Chief Executive Officer" is not an organ of a Swiss GmbH

`LEGAL REQUIREMENT` — **HIGH**. [Res 43], [AoA 602].

The organs of a Swiss GmbH under art. 804 ff. CO are:

| Organ | German | Official CO English | Registrable |
|---|---|---|---|
| Quotaholders' meeting | **Gesellschafterversammlung** | quotaholders' meeting | — |
| Managing officer(s) | **Geschäftsführer** (chair: *Vorsitzender der Geschäftsführung*) | **managing officer / managing director** | yes, as *Geschäftsführer* |
| Auditor (if any) | **Revisionsstelle** | auditor | yes |

"**Chief Executive Officer**" / "**Генеральный Директор**" is **not** a Swiss statutory office and
is **not** a function that the Handelsregister records for a GmbH. It is a functional business title
with no representative power of its own.

Separately — and this is the trap — **"Director" is not a safe abbreviation either.** Art. 814(3)
CO expressly contemplates two distinct persons: a **Geschäftsführer** (an organ) and a **Direktor**
(a registered signatory who is *not* an organ and whose authority derives solely from the register
entry and any internal delegation). Describing Alexander Wiese as "**Director**" [Res 12] and as
"**Директор**" [PoA 8] may be read as a claim to the *Direktor* title. If in fact he is the
*Geschäftsführer*, the documents understate his office; if in fact he is *not* the Geschäftsführer
(e.g. a Guthirt Treuhand officer holds that role — see §9), the documents materially overstate it.

**Correct wording for every signature block and recital in the pack:**

> **DE:** Alexander Wiese, Geschäftsführer mit Einzelunterschrift
> **EN:** Alexander Wiese, Managing Officer (Geschäftsführer) with sole signatory power
> **RU:** Александр Визе, управляющий (Geschäftsführer) с правом единоличной подписи

Use one rendering, and **use it identically in the Resolution, the AoA signature block and the PoA**.
The present pack uses three different titles across three documents for one man in one capacity —
which is precisely the pattern a bank AML officer is trained to escalate.

---

## 6. Sole quotaholder who is also sole Geschäftsführer — self-dealing formalities

`LEGAL REQUIREMENT` / `RECOMMENDATION` — **MEDIUM-HIGH**.

**Art. 814(4) CO** makes the stock-corporation rules on representation apply to the GmbH by analogy —
including **art. 718b CO**: where the company is represented in concluding a contract by the person
with whom it contracts, **the contract must be in writing** ([swissrights, Art. 718 OR](https://www.swissrights.ch/gesetze/Artikel-718-OR-2025-EN.php);
[Haufe](https://www.haufe.de/id/beitrag/schweiz-iv-vertretung-der-gesellschaft-HI14963264.html)).

Two distinct issues arise here, and the pack addresses neither:

**(a) Insichgeschäft / Doppelvertretung.** Alexander Wiese is to act simultaneously for
Wiese Advisory GmbH (as Geschäftsführer) **and** for Wiese Advisory Eurasia Ltd. (as its Director,
CEO and Authorised Signatory) [Res 21, 23, 26]. Every intra-group act between them — the share
subscription and contribution, any services agreement, any intercompany loan — is a **dual-
representation transaction**. Swiss doctrine and Federal Supreme Court practice treat dual
representation by analogy with self-contracting: the transaction is **voidable unless** either the
risk of prejudice to the represented party is excluded, or it is **approved or ratified by a superior
or equally-ranking body**. `UNCONFIRMED` as to the precise BGE citations — the leading authorities
(commonly cited as **BGE 127 III 332** and **BGE 126 III 361**) were **not** read from primary
source in this review; verify before relying on them in an opinion letter.

In a **single-quotaholder GmbH**, the risk of prejudice to the company is ordinarily regarded as
excluded, because the sole economic owner is the counterparty's controller. So the substantive
exposure here is low. **But that is a reason to document it, not to omit it**: the cure costs one
paragraph, and its absence is exactly what a reviewing registrar or bank will query.

**(b) Written form.** The art. 718b CO written-form requirement is **not** disapplied by the small
amount involved (EUR 100 ≈ CHF 95). The CHF 1,000 carve-out applies only to **contracts relating to
everyday business** (Geschäfte des täglichen Verkehrs). **Founding a foreign subsidiary is not
everyday business.** Written form therefore applies regardless of value.

**Required (add to Part B of the corrected resolution):**

> The sole quotaholder, being also the sole managing officer, hereby expressly approves and ratifies
> the conclusion by Wiese Advisory GmbH of the subscription for shares in Wiese Advisory Eurasia
> Ltd. and all related acts, notwithstanding that the Company is represented in such acts by
> Alexander Wiese, who simultaneously acts for Wiese Advisory Eurasia Ltd., and confirms that the
> requirements of art. 718b CO (applicable by analogy pursuant to art. 814(4) CO) are observed by
> the written form of this resolution.

**Is notarisation required?** **No, not under Swiss law**, for any instrument in this pack:

| Act | Swiss form requirement |
|---|---|
| Managing-officer resolution to found a subsidiary | **None** by statute; written form required here via art. 718b/814(4) CO. `LEGAL REQUIREMENT` |
| Sole quotaholder's written resolution | **Written**, art. 805(4) CO. No notarisation |
| Power of attorney | **None** — art. 11 CO freedom of form. Written form is a practical necessity only |
| **Amendment of the GmbH's own Statuten** (e.g. to widen the Zweck — §7) | **Public deed (öffentliche Beurkundung)** before a Swiss notary. `UNCONFIRMED` — verify art. 780 CO text against Fedlex |

**But note the practical layer** (`PRACTICAL REQUIREMENT`): one search result asserts that documents
issued abroad **do not require apostille or Russian/Kazakh translation for AIFC filing and must be
submitted in English**. That claim originates from a summarised page and **could not be verified
against the AFSA guidance PDF (egress blocked)** — treat as **`UNCONFIRMED`** and confirm with the
Registrar before relying on it. Independently, **Kazakh second-tier banks routinely require the
foreign parent's corporate documents and any PoA to be notarised and apostilled**, and a substitution
under a PoA is generally required to be notarised. Since Switzerland and Kazakhstan are both parties
to the Hague Apostille Convention 1961, **notarisation in Zug + apostille by the Zug State Chancellery**
is the cheap, standard route. Budget for it even if AFSA does not demand it.

---

## 7. Can the GmbH's Zweck limit its capacity to found a foreign subsidiary?

`LEGAL INTERPRETATION` — the answer is a qualified **no**, and the qualification matters.

1. **Capacity.** Under **art. 53 ZGB** a legal entity has **general legal capacity**. Swiss law does
   **not** adopt the common-law *ultra vires* doctrine. The GmbH's Zweck therefore **cannot render
   the incorporation of a foreign subsidiary void for want of capacity.**
2. **Representative power.** The Zweck **does** bound the organs' representative power: under
   **art. 718a(1) CO** (applicable via art. 814(4) CO) representatives may perform all legal acts
   **that the company's purpose may entail** ([swissrights, Art. 718a OR](https://www.swissrights.ch/gesetze/Artikel-718a-OR-2025-EN.php)).
   Swiss practice reads "may entail" **broadly** — it covers acts that merely serve the purpose, not
   only acts that realise it directly.
3. **Third parties.** **Art. 718a(2) CO**: restrictions on representative power **have no effect
   against bona fide third parties**, save registered sole/joint-signature provisions. So the AIFC
   Registrar, taking in good faith, is protected even on a narrow Zweck.
4. **Internal exposure.** What survives is **internal**: an act outside the Zweck is a breach of the
   Geschäftsführer's duties under **art. 812 CO** and exposes him to liability (art. 827 CO referring
   to the stock-corporation liability regime, art. 754 CO — `UNCONFIRMED`, article numbers not read
   from primary source). With a sole quotaholder who is the same person, that exposure is
   theoretical — but it is not zero as against creditors, and it is a live point if the GmbH is ever
   sold or enters insolvency.

**Practical conclusion.** A Zweck reading, e.g., "*Beratungsdienstleistungen im Bereich…*" without a
participation clause will **not stop the AIFC incorporation**, but it should still be fixed. Most
Swiss Statuten contain a standard clause of the form:

> "Die Gesellschaft kann Zweigniederlassungen und Tochtergesellschaften im In- und Ausland errichten,
> sich an anderen Unternehmen im In- und Ausland beteiligen sowie alle Geschäfte tätigen, die geeignet
> sind, den Zweck der Gesellschaft zu fördern."

**Action:** read the registered Zweck from the Handelsregister extract. If the participation clause is
present, recite it verbatim in the corrected resolution — this converts an unverified assertion into
a self-proving document. If it is **absent**, the pragmatic fix is an express sole-quotaholder
resolution authorising the act (which forecloses any internal challenge, since the only possible
challenger is the resolving party); a Statuten amendment by public deed is the belt-and-braces
alternative but is disproportionate for a EUR 100 subsidiary.

---

## 8. The multi-date structure — deliberate device, or filing risk?

Dates in the pack:

| Date | Where | Function |
|---|---|---|
| **25 July 2026** | [Res 12] / [Res 14] | claimed date of **adoption** of the resolution |
| **31 July 2026** | [Res 32], [AoA 128] | NBK official EUR/KZT rate used to fix the share capital |
| **11 August 2026** | [Res 5–6], [Res 10–11] | date of the **certificate / document** |
| **11 August 2026** | [AoA 1–4] | date of the resolution said to have **approved the Articles** |
| **11 August 2026** | [PoA 3–6] | date and place (Zug) of the **Power of Attorney** |

**First, the fair point.** `LEGAL INTERPRETATION` — **A certificate dated later than the resolution
it certifies is an entirely normal, legitimate device.** An officer certifying on 11 August that a
resolution was adopted on 25 July, remains unmodified and is in full force, is standard corporate
practice worldwide and is *not* of itself a defect. Two dates are expected here. Reviewers should not
flag the split as such.

**Second, the fatal point.** `FACT` — **CRITICAL. The internal consistency fails.**

> A resolution **adopted on 25 July 2026** fixes the share capital by reference to
> "*the official exchange rate of the National Bank of the Republic of Kazakhstan
> **effective as of 31 July 2026***" [Res 32].

That rate **did not exist on 25 July 2026**. The resolution as certified therefore either:

- **(a)** was not in fact adopted on 25 July 2026 — the recital is false; or
- **(b)** was adopted on 25 July and **subsequently amended** to insert the 31 July rate — which
  **directly contradicts the certification** at [Res 12] that "*the said resolution has not been
  modified or rescinded*".

There is no third reading. This is not a typographical wrinkle: it is a **self-falsifying
certificate**, signed, in a document that will be relied on by a financial-centre registrar and by a
bank's compliance function. Given that the same file carries offshore template residue and
(per the SHARED BRIEF) metadata showing creation on **30 April 2020 by a different author at
revision 39**, the natural inference — that the dates were typed over an old precedent without
being reconciled — is exactly the inference one does not want a compliance officer to draw.

**Third, a compounding inconsistency.** `FACT` — **HIGH.** The AoA cover page states the Articles
were "*Approved by Resolution of the Shareholder of Wiese Advisory GmbH. **Dated 11 August 2026***"
[AoA 1–4]. But the Resolution says the resolution was adopted **25 July 2026** [Res 12], and its
operative clause attributes adoption of the Articles to "**the Wiese Advisory Eurasia Ltd.**" [Res 29]
— an entity that does not exist. Three documents, three incompatible accounts of who approved the
Articles and when. Note in passing that the **AoA cover page is the one that gets it right**: the
approving party *is* the GmbH's shareholder. The drafter knew the correct answer and did not carry it
into the operative clause.

**Assessment of the date architecture:** **unnecessary, contradictory, and a filing risk.** The
certificate framing buys nothing here — there is no third party who adopted the resolution and no
minute book to certify against; the certifier, the adopter and the signatory are one man.

**Recommendation:**

- **Preferred — collapse to one date.** Re-adopt the resolution as a written resolution **dated the
  date of signature**, drop the "I hereby certify … adopted on …" framing entirely, and state the
  operative resolutions directly in the first person of the adopting body. One date, no certificate,
  no gap to reconcile.
- **If the certificate form is retained** (e.g. because a genuine 25 July decision exists and should
  be preserved): (i) **annex the underlying 25 July resolution** as a schedule, (ii) remove the
  31 July FX reference from it, and (iii) put the FX determination in a **separate, later-dated**
  managing-officer resolution or in the Articles alone.
- **Re-date the FX basis** to a date on or before the adoption date, or state it as "the NBK rate on
  the date of this resolution", and **fix the arithmetic** (100 × 545.5 = **54,550**, not 54,450 —
  see the Lead Reviewer's finding 3; the KZT 100 gap and the "five tiyn"/"fifty tiyn" error are
  echoed identically in [AoA 128] and [AoA 130] and must be corrected in both documents together).

---

## 9. Signature authority — the single decisive unknown

`UNCONFIRMED` — **BLOCKER**.

Nothing in the pack states whether Alexander Wiese holds **Einzelunterschrift** (sole signature) or
**Kollektivunterschrift zu zweien** (joint signature with a second person). This is not a formality:

- **Art. 814(1) CO**: each Geschäftsführer is entitled to represent the company —
- **Art. 814(2) CO**: **but the Statuten may provide otherwise**, and Kollektivunterschrift zu zweien
  is the **most common configuration for Zug GmbHs administered by a Treuhand firm**.
- **Art. 718a(2) CO** (via art. 814(4)): registered sole/joint-signature restrictions **are** effective
  against third parties — the bona-fide-third-party protection **does not** cover them.

**Consequence if he holds only joint signature:** the Power of Attorney [PoA 7, 93/97], the
Resolution signature [Res 41] and the AoA execution [AoA 602] are **each signed by one hand where two
are required** — and are therefore **not binding on the GmbH**. Every downstream act — the
incorporation itself, the attorneys' filings, the bank account opening — would rest on a void
instrument.

**Aggravating context.** The GmbH's registered address is **c/o Guthirt Treuhand, Ibelweg 18a,
6300 Zug** [PoA 7]. A `c/o Treuhand` domicile very commonly coincides with a Treuhand-provided or
Treuhand-co-signing officer, which materially raises the prior probability of a joint-signature
regime — and may also be how the GmbH satisfies **art. 814(3) CO** (Swiss-domiciled representative).
Alexander Wiese is Swiss-resident, so art. 814(3) is likely satisfied by him personally, but that
must be read off the register, not assumed.

**Nothing else in this review can be relied on until this is resolved.**

---

## 10. Additional Swiss-side defects in the PoA

| Ref | Finding | Type | Severity |
|---|---|---|---|
| [PoA 88–97] | **The signature block is empty** — two bare signature lines with **no printed name, no capacity, and no "for and on behalf of Wiese Advisory GmbH" attribution**. A PoA whose signatory is unidentified on its face cannot be verified by any counterparty. Must read: "Wiese Advisory GmbH, represented by Alexander Wiese, Geschäftsführer mit Einzelunterschrift". | `FACT` | **HIGH** |
| [PoA 81] | "**increase the share capital of the Company**" — "**the Company**" is **an undefined term** in the PoA. The only defined party is the "**Principal**" (= the GmbH) [PoA 7]; the subsidiary is referred to only as "a Private Company" [PoA 16, 24] and "the company being incorporated" [PoA 36]. On a literal reading the attorneys may increase **the GmbH's own Stammkapital** — a **non-transferable power of the Gesellschafterversammlung** (art. 804(2) CO) which additionally requires a **public deed**, and which cannot be delegated to an attorney by a management-issued PoA at all. **Define the term or delete the power.** | `LEGAL INTERPRETATION` | **CRITICAL** |
| [PoA 81] | Same clause: power to "**approve, execute and file any amendments to the Articles of Association**" of the subsidiary. Under the subsidiary's own Articles, amendment requires a **Special Resolution** [AoA 585–588] — i.e. a shareholder act. The PoA is issued by the **management** of the GmbH; **no shareholder resolution authorises delegation of the GmbH's shareholder rights in the subsidiary to third-party attorneys.** Fix in Part B of the corrected resolution. | `LEGAL INTERPRETATION` | **HIGH** |
| [PoA 83] | **Right of substitution** (передоверие) granted with no limitation, no notice obligation and no requirement that substitutes be named. Combined with the catch-all "any other legal and factual acts" [PoA 81], this defeats the carefully drafted negative covenants at [PoA 66–73], which bind only "the Attorneys" and not their substitutes. **Restrict substitution to named partners of the same firm, require written notice to the Principal, and extend the negative covenants expressly to any substitute.** | `RECOMMENDATION` | **HIGH** |
| [PoA 7] vs [PoA 8] | EN "**Managing Director**" / RU "**Директора**" — the RU text drops "Managing", producing a different Swiss office (see §5). Align both. | `FACT` | **MEDIUM** |
| [PoA 7] | "acting **pursuant to the Articles of Association**". For a Swiss GmbH the source of representative power is **art. 814 CO plus the registered signature authority**, not the Statuten alone. Amend to: "acting pursuant to the law, the Company's Statuten and his sole signatory power as recorded in the Commercial Register of the Canton of Zug (CHE-212.321.848)". | `RECOMMENDATION` | **MEDIUM** |
| PoA generally | **No governing-law clause.** A Swiss-issued PoA used before Kazakh authorities and banks, granting substitution rights, should state that its **grant and revocation** are governed by Swiss law while its **exercise** is subject to Kazakh/AIFC law. | `RECOMMENDATION` | **MEDIUM** |
| [Res 18] vs PoA | **Nothing in the Resolution authorises the PoA.** [Res 18] authorises **Alexander Wiese** to act singly; it says nothing about appointing attorneys, delegating, or granting substitution. The PoA therefore rests **entirely** on organ representative power — which returns to §9. | `LEGAL INTERPRETATION` | **MEDIUM** |

---

## 11. "Bye-laws" — stale offshore template language

`FACT` — **MEDIUM**. [Res 12]: "*is in conformity with the provisions of the **bye-laws** of the
Company*".

"Bye-laws" is the constitutional document of a **Bermuda** company (and the spelling with the *-e-*
is characteristically Bermudian; Cayman/BVI use "Articles of Association", US corporations use
"bylaws"). **A Swiss GmbH has no bye-laws.** Its constitution is the **Statuten** (articles of
association), supplemented where adopted by an **Organisationsreglement** (organisational
regulations) under art. 809(3)/(4) CO.

This is not merely cosmetic. It is corroborating evidence — alongside the certificate-of-resolutions
structure, the "duly appointed Director" formula, the "RESOLVED, that …" caption style, the
`Classification: Restricted` footer in the AoA, and (per the SHARED BRIEF) the file's
2020-04-30 creation date at revision 39 by a different author — that **the instrument governing the
Swiss parent's authority was produced by adapting an offshore precedent and was never reviewed
against Swiss law.** For a bank AML officer, template residue in the authority instrument is a
recognised red flag about the quality of the whole structure. **Replace with "the Statuten (articles
of association) of the Company" / "Устава Компании"** — noting that the Russian text at [Res 14]
already says "Устава", so only the English is wrong, which is itself evidence of piecemeal
translation without reconciliation.

---

## 12. **Schedule of Swiss documents that must be obtained**

This is the operative deliverable of this review. Items 1–4 are **mandatory before filing**.

| # | Document | German name | Source | What it proves / must be checked for | Status |
|---|---|---|---|---|---|
| **1** | **Certified Commercial Register extract**, current, for CHE-212.321.848 | **Beglaubigter Handelsregisterauszug** | Handelsregisteramt des Kantons Zug (order online; CHF ~20–35; 1–3 business days) | (a) the GmbH exists and is not in liquidation; (b) **Alexander Wiese's registered function** — *Gesellschafter und Geschäftsführer*? *Geschäftsführer*? *Direktor*?; (c) **his signature authority — Einzelunterschrift or Kollektivunterschrift zu zweien** (§9, the BLOCKER); (d) **whether any other person (e.g. a Guthirt Treuhand officer) holds signature authority**; (e) the **registered Zweck** (§7); (f) art. 814(3) CO Swiss-domiciled representative; (g) the registered Stammkapital | **MISSING** |
| **2** | **Statuten** (current consolidated version) | **Statuten der Gesellschaft** | Handelsregisteramt Zug (free download in most cantons) | (a) the **Zweck in full**, incl. any participation clause; (b) **any deviation from art. 814(1) CO** on representation (the source of a joint-signature regime); (c) **any Genehmigungsvorbehalt or reserved-powers clause** under art. 804(2)(17)–(18) / art. 811 CO capturing the acquisition of participations or the founding of subsidiaries; (d) any Organisationsreglement referenced | **MISSING** |
| **3** | **Corrected resolution** in the two-part form set out at §4.3 | **Beschluss der Geschäftsführung + Beschluss des Alleingesellschafters** | To be drafted | Establishes heads 1–9 of §3 unambiguously; supplies the missing **subscription clause**; ratifies the **dual representation** (art. 718b/814(4) CO); recites the Zweck verbatim | **TO DRAFT** |
| **4** | **Corrected Power of Attorney** | **Vollmacht** | To be re-executed | Complete signature block with name + capacity; "the Company" defined; capital-increase power deleted or scoped; substitution restricted; governing law stated (§10) | **TO RE-EXECUTE** |
| 5 | **Quotaholders' register** / evidence of 100% ownership | **Anteilbuch / Gesellschafterverzeichnis** (art. 790 CO — `UNCONFIRMED`, article not verified) | Company's own records; the HR extract also names quotaholders for a GmbH | Substantiates the client's confirmation that Alexander Wiese is **sole 100% UBO** — currently an unevidenced client statement. Required for AIFC UBO filing and for bank KYC | **MISSING** |
| 6 | **Passport / Swiss residence permit** of Alexander Wiese | — | Client | Identity and Swiss residence (relevant to art. 814(3) CO and to the AoA Art. 18.2 residency problem raised by the Lead Reviewer) | **MISSING** |
| 7 | **Notarisation + apostille** of items 1, 3 and 4 | **Beglaubigung + Apostille** | Zug notary; Staatskanzlei des Kantons Zug (Hague Convention 1961; CH and KZ both parties) | Bank acceptance in Kazakhstan; AFSA acceptance is `UNCONFIRMED` (see §6) | **NOT OBTAINED** |
| 8 | Certificate of good standing (optional) | **Bescheinigung / HR-Auszug genügt** | Handelsregisteramt Zug | Some banks ask for it by name; in Switzerland the certified HR extract normally serves | Optional |

---

## 13. Consolidated recommendations, in priority order

1. **Do not file.** `RECOMMENDATION` — **BLOCKER**. Order the certified Handelsregister extract and
   the Statuten **first**. If Alexander Wiese holds only Kollektivunterschrift zu zweien, every
   signed instrument in the pack must be re-executed by two signatories, and nothing else can be
   settled until that is known.
2. **Replace the Resolution** with the two-part instrument at §4.3 — a *Geschäftsführerbeschluss*
   plus a *Beschluss des Alleingesellschafters*, one date, no certificate framing, both signed in
   correctly named capacities.
3. **Insert an express subscription clause.** The pack currently nowhere says the GmbH subscribes for
   the shares (§3, head 2).
4. **Fix the operative clause on the Articles** [Res 29]: the **incorporating shareholder** approves
   the Articles, not the unincorporated subsidiary. Align with the AoA cover page [AoA 1–4], which is
   already correct.
5. **Standardise the title** to *Geschäftsführer / Managing Officer with sole signatory power* in all
   three documents and in both languages. Delete "Chief Executive Officer" and "Генеральный Директор"
   as descriptions of the **Swiss** office. (The subsidiary's own CEO title [Res 21] is a separate,
   AIFC-law matter.)
6. **Resolve the date architecture** (§8): collapse to a single date, or annex the underlying
   resolution and remove the anachronistic FX reference. Fix the KZT 54,450 / 54,550 arithmetic and
   the "five tiyn" error **in the Resolution and the AoA together**.
7. **Add the art. 718b / 814(4) CO ratification paragraph** for dual representation (§6).
8. **Recite the registered Zweck verbatim** in the corrected resolution once read from the extract
   (§7). If no participation clause exists, rely on the sole-quotaholder authorisation rather than a
   Statuten amendment, unless the client wants belt-and-braces.
9. **Re-execute the PoA** with a complete signature block, "the Company" defined, the capital-increase
   power deleted, substitution restricted and covered by the negative covenants, and a governing-law
   clause (§10).
10. **Replace "bye-laws" with "Statuten"** (§11) and sweep the Resolution and AoA for any remaining
    offshore template residue, including the `Classification: Restricted` footer.
11. **Notarise and apostille** items 1, 3 and 4 in Zug regardless of whether AFSA requires it — the
    bank will (§6).

---

## 14. `UNCONFIRMED` register

| Item | What would confirm it |
|---|---|
| Alexander Wiese's registered function and **signature authority** | Certified Handelsregister extract, CHE-212.321.848 |
| Existence, status and registered Zweck of Wiese Advisory GmbH | Same extract / Zefix (**egress blocked in this environment**) |
| Whether the Statuten deviate from art. 814(1) CO or reserve subsidiary-founding | Statuten from Handelsregisteramt Zug |
| Whether any Guthirt Treuhand officer holds signature authority | Same extract |
| Sole 100% ownership by Alexander Wiese | Anteilbuch + HR extract (currently only a client statement) |
| Exact text of arts. 776, 780, 804, 805, 810, 811, 812, 814, 718a, 718b, 827, 936b CO | Fedlex consolidated SR 220 (**egress blocked**) — all article content above rests on indexed secondary sources |
| BGE authorities on Doppelvertretung (commonly cited as BGE 127 III 332; 126 III 361) | bger.ch (**not read**) |
| Whether AIFC filings genuinely require **no** apostille or translation | AFSA *Guidance on the Registration Process in the AIFC* (**PDF fetch blocked**); confirm with the Registrar |
| NBK official EUR/KZT rate on 25 July / 31 July 2026 | nationalbank.kz |
| Whether Kazakh law requires a substitution PoA (передоверие) to be notarised | KZ Civil Code (**adilet.zan.kz blocked**) — flagged for the Kazakh-law reviewer |
| `26 01 089 _ AoA(1).docx` | **INPUT MISSING** per SHARED BRIEF scope exception |

---

**Sources:**
[swissrights — Art. 814 OR (EN)](https://www.swissrights.ch/gesetze/Artikel-814-OR-2025-EN.php) ·
[swissrights — Art. 718a OR (EN)](https://www.swissrights.ch/gesetze/Artikel-718a-OR-2025-EN.php) ·
[swissrights — Art. 718 OR (EN)](https://www.swissrights.ch/gesetze/Artikel-718-OR-2025-EN.php) ·
[Haufe — Schweiz / IV. Vertretung der Gesellschaft](https://www.haufe.de/id/beitrag/schweiz-iv-vertretung-der-gesellschaft-HI14963264.html) ·
[UZH Gesellschaftsrecht — GmbH Gesellschafterversammlung](https://www.rwi.uzh.ch/static/elt/lst-vogt/gesellschaftsrecht/gmbh/de/html/organisationsver_learningObject1.php) ·
[UZH Gesellschaftsrecht — GmbH Geschäftsführer](https://www.rwi.uzh.ch/static/elt/lst-vogt/gesellschaftsrecht/gmbh/de/html/organisationsver_geschaeftsf.php) ·
[Walder Wyss — Schriftliche GV-Beschlüsse, REPRAX 4/20](https://www.walderwyss.com/assets/content/publications/Eggimann_Haecki_Zysset-Schriftliche-Beschlusse-der-GV.pdf) ·
[onlinekommentar.ch — Art. 808c OR](https://onlinekommentar.ch/de/kommentare/or808c) ·
[CMS Expert Guide for Directors — Switzerland](https://cms.law/en/int/expert-guides/cms-expert-guide-for-directors-of-companies/switzerland) ·
[Goldblum — Swiss Resident Director](https://goldblum.ch/company-formation/resident-director/) ·
[Goldblum — Handelsregister](https://goldblum.ch/knowledgebase/handelsregister-trade-register/) ·
[AIFC Companies Regulations (full text)](https://aifc.kz/legal-framework/aifc-companies-regulations/aifc-companies-regulations-full-text/) ·
[AFSA — Guidance on the Registration Process in the AIFC](https://afsa.aifc.kz/wp-content/uploads/2025/02/Guidance-on-the-Registration-Process-in-the-AIFC.pdf)
