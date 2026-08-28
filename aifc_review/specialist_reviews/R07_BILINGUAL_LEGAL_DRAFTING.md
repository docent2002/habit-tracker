# R07 — BILINGUAL LEGAL DRAFTING REVIEW (EN/RU)

**Reviewer 7 — Bilingual English/Russian corporate lawyer**
**Review date:** 2026-08-28
**Entity:** Wiese Advisory Eurasia Ltd. (to be incorporated, AIFC, Kazakhstan)

## Scope and method

Clause-by-clause comparison of the English and Russian texts of the three bilingual documents
supplied, testing for **identity of legal effect**, not for grammar alone. All arithmetic was
recomputed independently from the primitives in the documents (share count, nominal value, EUR
amount, stated totals). Line references are to the extracted `.txt` working copies named in the
Shared Brief.

Files reviewed:

| Ref | File |
|---|---|
| **PoA** | `1f18f06f-26_07_30_POWER_OF_ATTORNEY_registration.docx.txt` (97 lines) |
| **RES** | `5024e711-26_07_30___Resolution_on_Incorporation.docx.txt` (49 lines) |
| **AoA** | `876e0e98-26_01_089___AoA.docx.txt` (607 lines) |

`26 01 089 _ AoA(1).docx` was not supplied — **UNCONFIRMED — INPUT MISSING**. No comparison
against it is attempted or inferred anywhere in this report.

### Headline conclusion

The package is **not fit to file in its current bilingual form**. Three findings are independently
sufficient to stop the filing:

1. The **share-capital clause is arithmetically wrong in both languages in both the constitutional
   document and the shareholder resolution** (§1).
2. **AoA Art. 18.1 — the clause that allocates management power over the company — is not
   grammatically coherent in Russian** and does not state the same rule as the English (§3, row A2).
3. The **PoA and the Resolution are bilingual instruments with materially divergent texts and no
   governing-language clause at all**, so there is no rule to resolve the divergences this review
   identifies (§3, row A5).

---

## 1. NUMERICAL REVIEW — independently recomputed

### 1.1 The primitives, as stated

| Primitive | English | Russian | Where |
|---|---|---|---|
| Capital contribution | EUR 100 (one hundred) | 100 (сто) евро | RES L32/L33; AoA L128/L130 |
| Share count | 100 (one hundred) ordinary shares | 100 (сто) обыкновенных акций | RES L32/L33; AoA L128/L130 |
| Nominal value per share | KZT 545,5 (five hundred forty five tenge and five tiyn) | 545,5 (пятьсот сорок пять теңге и пять тиын) теңге | RES L32/L33; AoA L128/L130 |
| Stated aggregate nominal value | KZT 54 450 (fifty four thousand four hundred fifty) | 54 450 (пятьдесят четыре тысячи четыреста пятьдесят) теңге | RES L32/L33; AoA L128/L130 |
| FX reference date | 31 July 2026 (NBK official rate) | 31 июля 2026 года | RES L32/L33; AoA L128/L130 |

### 1.2 The arithmetic

```
100 shares × KZT 545.50            = KZT 54,550.00
Stated aggregate nominal value     = KZT 54,450.00
Discrepancy                        = KZT    100.00   ← the documents do not add up
```

Because 100 shares are issued for EUR 100, the per-share nominal value in KZT is numerically
**identical to the EUR/KZT rate**. The clause is therefore a single-variable statement, and the two
figures in it imply two different rates:

| Reading | Nominal/share | Aggregate | Implied EUR/KZT rate |
|---|---|---|---|
| Nominal value is correct | KZT 545.50 | KZT **54,550** | **545.50** |
| Aggregate is correct | KZT **544.50** | KZT 54,450 | **544.50** |

The two candidate rates are **544.50 and 545.50** — a single transposed digit. Exactly one of the
two stated figures is wrong; they cannot both be right. **The same error appears in all four texts**
(RES EN, RES RU, AoA EN, AoA RU), i.e. it has been propagated by copy-paste rather than
independently introduced, which is why no internal cross-check caught it.

> **FINDING TYPE: FACT.** The arithmetic is wrong on the face of the documents.
> **Severity: BLOCKER.** The aggregate nominal value of issued shares is a figure the Registrar
> records and that appears on the Certificate of Incorporation and in the Register of Shareholders.
> Filing a share-capital clause that does not reconcile is a rejection risk, and if it is registered
> the company's constitution permanently misstates its own capital.

### 1.3 Which figure is correct — UNCONFIRMED

> **FINDING TYPE: UNCONFIRMED.** I could not verify the National Bank of Kazakhstan official
> EUR/KZT rate for 31 July 2026: `nationalbank.kz` is blocked by this environment's egress proxy,
> and no mirror carrying that specific date was reachable.
>
> **What would confirm it:** the NBK daily official (market) rate table for **31.07.2026** at
> <https://nationalbank.kz/ru/exchangerates/ezhednevnye-oficialnye-rynochnye-kursy-valyut>
> (English: `/en/exchangerates/...`). Take the EUR value on that date and use it as the per-share
> nominal value; the aggregate is then that value × 100. Print the NBK page and keep it on file —
> the Registrar may ask for the source of the rate.
>
> Note also that the NBK sets the official rate for the **next business day** after trading, and
> 31 July 2026 is a Friday. Confirm you are quoting the rate *effective on* 31 July 2026, not the
> rate *set on* 31 July 2026, and use the same convention in both languages.

### 1.4 Amount in words — wrong in both languages

1 tenge = 100 tiyn. Therefore:

```
KZT 545.50  =  545 tenge and 50 tiyn        ← correct
"545 tenge and 5 tiyn"  =  KZT 545.05       ← what the documents actually say
Error in the words:  KZT 0.45 per share, KZT 45 across the issue
```

The English "**five tiyn**" and the Russian "**пять тиын**" both express **545.05**, not 545.50.
A third figure is therefore in circulation: the documents contain **545.5 in figures, 545.05 in
words, and 544.50 implied by the total** — three mutually inconsistent per-share values in one
sentence, in both languages.

Under the general rule that words prevail over figures where the two conflict (and there is nothing
in these documents displacing it), the *words* would govern — producing an aggregate of
KZT 54,505, a fourth figure that appears nowhere.

> **FINDING TYPE: FACT. Severity: BLOCKER** (same clause as 1.2).

### 1.5 Currency formatting defects

| # | Defect | Where | Issue |
|---|---|---|---|
| N1 | `KZT 545,5` written with a **comma decimal separator inside an English sentence**, while the thousands in the same sentence are separated by a **space** (`KZT 54 450`) | RES L32; AoA L128 | An English reader may parse `545,5` as a thousands group. English text should read **KZT 545.50** and **KZT 54,450**. Mixed conventions in a single sentence. |
| N2 | One decimal place used for a currency with a 100-unit subdivision (`545,5` not `545,50`) | RES L32/33; AoA L128/130 | A money amount in a constitutional document should be written to the subunit: **545.50 / 545,50**. |
| N3 | Russian uses **«теңге»** (Kazakh orthography, 4 occurrences in each of RES and AoA) throughout a Russian-language text; **«тенге»** (Russian orthography) appears 0 times | RES L33; AoA L130 | The Russian text is written in Russian; the currency should be «тенге». The ISO code KZT is never given in the Russian at all, while the English never gives the Russian/Kazakh name. |
| N4 | Russian duplicates the currency word: `545,5 (пятьсот сорок пять теңге и пять тиын) теңге каждая` | RES L33; AoA L130 | "545.5 (five hundred forty-five tenge and five tiyn) tenge each" — the unit appears both inside and outside the parenthesis. The words in brackets should carry no currency noun, or the trailing one should be deleted. |
| N5 | Russian **missing closing parenthesis**: `54 450 (пятьдесят четыре тысячи четыреста пятьдесят теңге.` | RES L33 | The bracket never closes and the currency word is trapped inside it. Compare AoA L130, which renders the identical phrase correctly as `54 450 (…четыреста пятьдесят) теңге.` — so the Resolution and the Articles state the same figure in two different, one of them broken, forms. |
| N6 | Russian **duplicated amount**: `Уставный капитал Компании составляет 100 евро 100 (сто) евро` | AoA L130 | "The charter capital of the Company is EUR 100 EUR 100 (one hundred)". A stutter left by an edit. |

### 1.6 Capital denominated in one currency, shares in another

The English says *"The **authorised share capital** of the Company is **EUR 100** … each having a
nominal value of **KZT 545,5**"* (AoA L128). Capital is fixed in euro; the shares are denominated in
tenge; the two are reconciled only by the NBK rate **on one historic day**.

> **FINDING TYPE: LEGAL INTERPRETATION. Severity: HIGH.**
> From 1 August 2026 onward, the two limbs of the Company's own capital clause contradict each
> other, and they diverge further every day. Every future filing that restates capital (allotment
> returns, annual confirmation, any Art. 11 alteration) will have to choose which limb is true.
> **Correct approach:** denominate the share capital and the nominal value in **one** currency —
> normally KZT, since the nominal value and the Registrar's records are in KZT — and either drop the
> EUR figure entirely or relegate it to a non-operative recital ("being the equivalent of
> approximately EUR 100 at the NBK official rate on 31 July 2026"). The FX rate must not sit in the
> operative words of a constitutional capital clause.

### 1.7 "Allotted" vs "issued" — a further EN/RU divergence in the same clause

English: *"…is **allotted** 100 (one hundred) ordinary shares of the Company"* (agentless passive).
Russian: *"…**Компания осуществляет выпуск** 100 (сто) обыкновенных акций"* — "the Company
**issues** 100 ordinary shares".

Allotment and issue are distinct steps under the AIFC Companies Regulations (allotment creates the
right to be entered in the register; issue completes it). The Russian names a different act, and
names an actor (the Company) that the English does not. **Severity: MEDIUM.**

### 1.8 Date arithmetic — a chronological impossibility

| Fact | Source |
|---|---|
| Resolution is **dated** 11 August 2026 | RES L6 / L11; AoA cover L4 |
| Resolution certifies the resolution was **adopted on 25 July 2026** | RES L12 EN / L14 RU («принята мной 25 Июля 2026») |
| The capital resolution relies on the NBK rate **effective as of 31 July 2026** | RES L32 / L33 |
| PoA is dated 11 August 2026 | PoA L4 / L6 |

> **FINDING TYPE: FACT. Severity: HIGH.**
> A resolution adopted on **25 July 2026** cannot fix a share nominal value by reference to an
> exchange rate that did not exist until **31 July 2026**. Either the adoption date is wrong, or the
> rate date is wrong, or (most likely) the resolution was actually adopted on 11 August and the
> "25 July" certification is template residue. As it stands the instrument is self-refuting on its
> face and invites the Registrar to ask when the shareholder actually decided. Both language
> versions carry the defect identically.
> **Correct approach:** one date. If the resolution is signed on 11 August 2026, it was adopted on
> 11 August 2026, and the rate should be the NBK rate for a date on or shortly before that.

### 1.9 All other numbers — verified as consistent between EN and RU

I checked every quantity, period and statutory reference in the AoA in both languages. The following
**match** and need no action:

75% (Special Resolution), simple majority (Ordinary Resolution), quorum of two (2) persons, 1 vote
per share, 14 days (refusal of transfer), 30 days in any year (suspension of transfers), 2 months
(requisitioned meeting), 7 days (notice of general meeting; adjourned meeting; deferred poll),
half an hour (quorum wait), 15 minutes (chair absence, twice), 14 days / 7 days (adjournment
notice), 30 days (deferred poll longstop), 48 hours (proxy deposit), 48 hours (deemed postal
service), 3 consecutive meetings (director vacation of office), 12 years (unclaimed dividend
forfeiture), 2 days (notice of urgent decision), section 95, section 97, section 100 (×2), 1
certificate / 2 or more persons, 1 Director minimum.

Two reference defects in that set are dealt with in §2.4 (the "section 21.3" cross-reference) and
§4 (the "Company Regulations" mis-citation).

---

## 2. NUMBERING REVIEW

### 2.1 The two documents use two incompatible numbering mechanisms

> **FINDING TYPE: FACT.** The AoA package contains `word/numbering.xml` (confirmed in the forensic
> part listing), i.e. Word **automatic list numbering** is in use. The extracted English body carries
> **no literal numbers**, while the Russian mirror carries **literal, typed numbers** as ordinary
> text (`8.1.`, `9.1.`, `15.10.`, `24.15.`).

This means:

- **English article numbers are generated by Word.** They exist on the printed page but are not
  characters in the text. They **renumber automatically** if any paragraph is inserted, deleted or
  re-levelled.
- **Russian article numbers are hard-typed text.** They **do not renumber**. Any edit to the Russian
  body leaves the numbering stale and silently wrong.

> **Severity: HIGH. Correct approach:** make both language bodies use the *same* mechanism. In a
> bilingual instrument that will be amended over its life, the safer choice is **hard-typed numbers
> in both languages** (auto-numbering in a document that is copied, split and re-pasted between
> drafters is how the defects in §2.2 arise). Whichever is chosen, the two must match, and a final
> visual check of the rendered PDF against the Russian typed numbers is mandatory before execution.

### 2.2 Russian numbering is incomplete — 13 articles carry no number at all

The Russian text numbers a clause only where the article has **more than one** sub-paragraph.
Single-paragraph articles were left unnumbered. Numbered in Russian: **8, 9, 10, 11, 13, 14, 15, 16,
18, 20, 21, 24, 27, 29**. Carrying **no** Russian number:

| Article (by position) | Heading | RU line |
|---|---|---|
| 1 | ТОЛКОВАНИЕ (Interpretation) | 71–95 |
| 2 | НАИМЕНОВАНИЕ КОМПАНИИ | 102 |
| 3 | ЮРИДИЧЕСКИЙ АДРЕС КОМПАНИИ | 110 |
| 4 | ХАРАКТЕР ДЕЯТЕЛЬНОСТИ КОМПАНИИ | 116 |
| 5 | ОТВЕТСТВЕННОСТЬ АКЦИОНЕРОВ | 124 |
| 6 | АКЦИОНЕРНЫЙ КАПИТАЛ | 130 |
| 7 | АКЦИИ КОМПАНИИ | 141–143 |
| 12 | ПРИОБРЕТЕНИЕ СОБСТВЕННЫХ АКЦИЙ | 239 |
| 17 | КОЛИЧЕСТВО ДИРЕКТОРОВ | 360 |
| 19 | ДОПОЛНИТЕЛЬНЫЕ ПОЛНОМОЧИЯ АКЦИОНЕРОВ | 381 |
| 22 | ДИСКВАЛИФИКАЦИЯ И ОТСТРАНЕНИЕ ДИРЕКТОРОВ | 425 (has (a)–(f) but no `22.1`) |
| 23 | ВОЗНАГРАЖДЕНИЕ И РАСХОДЫ ДИРЕКТОРОВ | 439 |
| 25 | СЕКРЕТАРЬ | 506 |
| 26 | ПРОТОКОЛЫ | 516 |
| 28 | ПРОВЕРКА БУХГАЛТЕРСКИХ ЗАПИСЕЙ | 545 |
| 30 | ВНЕСЕНИЕ ПОПРАВОК В НАСТОЯЩИЙ УСТАВ | 587 |
| 31 | ЯЗЫК И ТОЛКОВАНИЕ | 592–593 |

The article numbers 1–7, 12, 17, 19, 22–23, 25–26, 28, 30–31 are **inferred only from the gaps in the
Russian sequence** (the jump from unnumbered blocks to `8.1`, from `11.3` to `13.1`, from `16.8` to
`18.1`, `18.3` to `20.1`, `21.4` to `24.1`, `24.15` to `27.1`, `27.5` to `29.1`). If the English
auto-numbering assigns a *different* article number to any of those blocks, the two texts number the
same article differently and **no cross-reference in either language can be relied on**.

> **Severity: HIGH.** Article 17 (minimum directors / IIN) and Article 18 (management powers / CEO
> residence) — the two most contentious clauses in the whole instrument — are among the affected
> set: Art. 17 has no Russian number, Art. 18 does. Any correspondence with AFSA that cites "Article
> 17" is citing a number that appears only in the English rendering.

### 2.3 Two probable off-by-one breaks between EN and RU sequences

Two English paragraphs are free-standing paragraphs in the English but appear as **unnumbered
continuations** inside a numbered clause in the Russian. If Word numbers them (which it will, unless
they carry a "no number" style), the English sequence runs one ahead of the Russian from that point
to the end of the article:

| Article | English paragraph | Russian treatment | Consequence |
|---|---|---|---|
| **15** | L272 *"The person chairing a meeting in accordance with this Article is referred to as 'the meeting chair'."* | RU L305 — unnumbered tail of **15.3** | If numbered in EN, EN 15.4 = this definition, and EN 15.5…15.13 = RU 15.4…15.12. **Nine clauses misaligned.** |
| **24** | L468 *"Any decision made pursuant to this Article shall be notified to any Director who did not participate…"* | RU L491 — unnumbered tail of **24.11** | If numbered in EN, EN has 16 clauses in Art. 24 against RU's 15. **EN 24.13…24.16 = RU 24.12…24.15.** |

Counting the substantive paragraphs confirms the imbalance: Art. 24 has **16** English paragraphs
against **15** Russian clauses; Art. 15 has **13** against **12**.

> **FINDING TYPE: LEGAL INTERPRETATION. Severity: HIGH.**
> **Verification required (I cannot see the rendered numbers):** open the AoA in Word, turn on
> paragraph marks, and read the printed number against each Russian typed number for Articles 15 and
> 24. If they differ, every reference to "Article 15.x" or "Article 24.x" in any subsequent
> shareholder resolution, board minute or filing will point at different provisions depending on
> which language the reader has.
> **Correct approach:** number the definition of "the meeting chair" and the notification sentence
> identically in both languages — either both numbered or both unnumbered continuations.

### 2.4 A cross-reference that points at the wrong instrument, in both languages

| | Text |
|---|---|
| EN (L405) | "For the purposes of **the section 21.3**, where 2 or more Shareholders die…" |
| RU (L412) | «Для целей **раздела 21.3.** если 2 или более Акционеров умирают…» |

Throughout both texts, "**section**" / «**раздел**» is the word reserved for provisions of the
**AIFC Companies Regulations** — "section 95", "section 97", "section 100" / «разделом 95…
Положения о компаниях». The Articles' own provisions are called "**Article**" / «**Статья**»
(EN L272 "this Article", L471 "this Article"; RU L305 «настоящей Статьей», L493 «настоящей Статьи»).

So **"the section 21.3" reads as section 21.3 of the Companies Regulations**, not as Article 21.3 of
these Articles — in both languages. The Russian is marginally worse because «раздел» has been used
for the Regulations four times already by that point.

> **FINDING TYPE: FACT. Severity: MEDIUM.**
> **Correct approach:** "For the purposes of **Article 21.3**" / «Для целей **статьи 21.3
> настоящего Устава**». Also delete the stray definite article ("the section 21.3").

### 2.5 Broken sub-lettering

| # | Where | Defect |
|---|---|---|
| L2-a | AoA EN L465–467 (Art. 24.11) | The list opens with `(b)` at L467 and **there is no `(a)`** — L466 ("with the proposed resolution of the matter; or") is unlettered. The Russian at L489–490 correctly has both `(a)` and `(b)`. An English list that begins at (b). |
| L2-b | AoA EN L418–423 (Art. 22) | The six grounds for automatic vacation of office carry **no letters at all** in the English; the Russian at L426–432 letters them `(a)`–`(f)`. Cross-references to "Article 22(d)" would be unlocatable in the English text unless Word auto-letters them. |
| L2-c | AoA EN Art. 8 | Mixed manual formats within one article: `(a)\t` tab-aligned at L149–151, `(a)      ` space-aligned at L159–163. Cosmetic evidence that the lettering is hand-typed and unmanaged. |

---

## 3. MASTER DISCREPANCY TABLE — ranked by legal significance

### Band A — BLOCKER / CRITICAL

| Document | Clause / line | English | Russian | Issue | Legal significance | Correct approach |
|---|---|---|---|---|---|---|
| **A1** RES + AoA | RES L32/L33; AoA L128/L130 | "100 … ordinary shares … each having a nominal value of KZT 545,5 … total nominal value … KZT 54 450" | «100 (сто) обыкновенных акций номинальной стоимостью 545,5 … совокупная номинальная стоимость … 54 450» | 100 × 545.5 = **54,550**, not 54,450. Words say "five tiyn"/«пять тиын» = 545.05, a third value. Error is identical in all four texts. | **BLOCKER.** The constitution misstates the company's own capital. Registrar-facing figure; appears on the incorporation record. Words-prevail-over-figures would produce a fourth number (54,505). | Verify the NBK EUR/KZT rate for 31.07.2026; set nominal = that rate; aggregate = rate × 100. Write "KZT 545.50 (five hundred forty-five tenge and **fifty** tiyn)" / «545,50 (пятьсот сорок пять тенге **пятьдесят** тиын)». Correct all four texts together. |
| **A2** AoA | Art. 18.1 — EN L365 / RU L372 | "the business of the Company must be managed by the Directors **or by another natural person appointed by the Shareholders or Directors and bearing the title of Chief Executive Officer**" | «управление деятельностью Компании должно осуществляться Директорами **или другим назначенным физическим Акционерами лицом, или Директорами и имеющими должность Генерального директора**» | The Russian is **not coherent**. «физическим … лицом» is split around «Акционерами»; a comma + «или» manufactures a **third** alternative ("or by the Directors and [persons] holding the office of CEO"); «имеющими» is plural instrumental agreeing with no noun (should be «имеющим», agreeing with «лицом»). The qualifiers "appointed by … Directors" and "bearing the title of CEO" are detached from the person they qualify. | **BLOCKER.** This is the clause that allocates management authority. In Russian it can be read as permitting management by an individual appointed by the Shareholders alone, with no requirement that he hold the office of CEO — a different constitution from the English one. A Russian-reading counterparty, bank or court cannot determine who may lawfully manage the company. | Redraft the Russian: «…управление деятельностью Компании осуществляется Директорами либо иным физическим лицом, назначенным Акционерами или Директорами и занимающим должность Генерального директора.» Re-verify against the English word by word. |
| **A3** AoA | Art. 18.2 — EN L367 / RU L373 | "may appoint … **the Chief Executive Officer**, who shall be a natural person and a resident of the Republic of Kazakhstan" | «могут назначить Генерального директора …, и **такой директор** должен являться физическим лицом и резидентом Республики Казахстан» | Russian attaches the residence condition to «**такой директор**» — "such **director**" — where «Директор» is a *separate defined term* from «Генеральный директор». | **CRITICAL.** In Russian the Republic-of-Kazakhstan residence requirement reads as biting on a **Director**, not (or not only) on the CEO. Combined with Art. 17 (director must hold an IIN), the Russian text arguably disqualifies Alexander Wiese from the directorship as well as the CEO role. The English and Russian therefore impose different eligibility rules on different offices. | Replace «такой директор» with «Генеральный директор» (or «такое лицо»). Separately — and outside this reviewer's lane — the residence condition itself should be reconsidered, since the package appoints a Swiss-resident CEO. |
| **A4** AoA | Art. 31 — EN L590–591 / RU L592–593 | "…both versions having **equal legal force**." *then* "…the **English version shall prevail**." | «…обе версии имеют **одинаковую юридическую силу**.» *then* «…преимущественную силу имеет **английская версия**.» | The self-contradiction is faithfully mirrored in Russian: **yes, the Russian says the same thing.** Two rules of construction of equal rank, one saying neither text yields, the other saying one does. | **CRITICAL.** The clause is the only mechanism for resolving the 40+ divergences catalogued in this report, and it is inoperative as drafted. A tribunal reaching the equal-force sentence first has no tie-breaker; reaching the prevalence sentence first must explain why the equal-force sentence is meaningless. | Delete the equal-force sentence and use **one** formulation. Recommended: **EN** — "These Articles are executed in the English and Russian languages, both texts being equally authentic, provided that in the event of any discrepancy, inconsistency or difference of interpretation the English text shall prevail." **RU** — «Настоящий Устав составлен на английском и русском языках, оба текста являются аутентичными, при условии, что в случае любых расхождений, противоречий или различий в толковании преимущественную силу имеет английский текст.» ("equally authentic" describes execution and is compatible with a prevalence rule; "equal legal force" is not.) |
| **A5** PoA + RES | Whole instruments | — | — | **Neither the PoA nor the Resolution contains any language or prevalence clause.** Both are bilingual, both diverge materially (rows B1–B7, C1–C3 below). | **CRITICAL.** A Kazakhstan bank, notary or state body will read and rely on the **Russian**. Where the Russian grants more (PoA L55) or prohibits less (PoA L75–79) than the English, there is no instrument-level rule saying the English governs — and no reason a Russian-reading relying party should be bound by an English text it was never given priority over. The negative covenants at PoA L66–73, which are the client's principal protection, are the very block where the Russian is narrower. | Insert the same prevalence formulation as A4 into **both** the PoA and the Resolution, in both languages, **and** fix the substantive divergences — a prevalence clause is a tie-breaker, not a licence to leave the texts different. |
| **A6** RES | L12 / L14 vs L29 / L30 | "Wiese Advisory GmbH … (the "**Company**")" … later: "RESOLVED, that the Wiese Advisory Eurasia Ltd. duly adopts proposed Articles of Association for the purpose of incorporation of **the Company** in the Astana International Financial Centre." | «Wiese Advisory GmbH, компании … (далее — «**Компания**»)» … later: «…принимает предлагаемый Устав в целях регистрации **Компании** в Международном финансовом центре «Астана».» | "the Company" / «Компания» is expressly defined as **Wiese Advisory GmbH**. Applying the definition, the operative clause resolves that the Eurasia entity adopts articles *for the purpose of incorporating the Swiss GmbH in the AIFC*. | **CRITICAL.** A defined-term failure in the single operative clause that adopts the constitution. Identical in both languages, so the prevalence clause (if inserted) would not save it. Compounds the actor defect already logged by the Lead Reviewer (the not-yet-existing company purporting to adopt its own articles). | Rewrite the clause so the incorporating shareholder acts: "RESOLVED, that **Wiese Advisory GmbH, as sole incorporating shareholder, hereby approves and adopts** the Articles of Association of **Wiese Advisory Eurasia Ltd.** for the purpose of its incorporation in the AIFC." Mirror in Russian using «Wiese Advisory GmbH в качестве единственного акционера-учредителя». Do not use the defined term «Компания» for the new entity anywhere. |
| **A7** AoA | Art. 15.1 — EN L266 / RU L299 | "**Except in the case of the Company having a single Shareholder, in which case** resolutions will be adopted in Writing by the single Shareholder, no meeting shall take place unless a quorum is present. Two (2) persons entitled to vote shall constitute a quorum." | «Кроме тех случаев, когда в Компании имеется только один Акционер, решения будут приниматься в письменной форме единственным Акционером, **при этом** собрание не может состояться без кворума. Два (2) лица, имеющие право голоса, составляют кворум.» | English: the quorum rule **does not apply** to a single-shareholder company. Russian: «при этом» = "at the same time / moreover" — it **conjoins** the two propositions, so the two-person quorum requirement reads as continuing to apply. | **CRITICAL and directly operative.** Wiese Advisory Eurasia Ltd. will have exactly **one** shareholder. Under the Russian text the company's general meetings require a quorum of two persons entitled to vote — an unsatisfiable condition. Any Russian-language challenge to a shareholder decision has a ready-made argument. | Russian must reproduce the exception structure: «За исключением случая, когда в Компании имеется единственный Акционер (в котором решения принимаются единственным Акционером в письменной форме), собрание не может состояться при отсутствии кворума. Кворум составляют два (2) лица, имеющие право голоса.» |

### Band B — HIGH

| Document | Clause / line | English | Russian | Issue | Legal significance | Correct approach |
|---|---|---|---|---|---|---|
| **B1** PoA | L7 / L8 | "…(hereinafter referred to as the "**Principal**"), represented by its Managing Director, Alexander Wiese, acting pursuant to the Articles of Association, hereby authorizes…" | «…(далее — «**Доверитель**»), в лице Директора Александра Визе, действующего на основании Устава, **именуемому в дальнейшем «Доверитель»** настоящим уполномочивает…» | The Russian **defines «Доверитель» twice**, and the second definition — «именуемому», dative singular masculine — grammatically agrees with «Директора Александра Визе», i.e. it names **Alexander Wiese personally** as the Principal. (A correct agreement with «юридическое лицо» would be «именуемое».) | **HIGH.** On its Russian face the power of attorney may be read as granted by Alexander Wiese in his personal capacity rather than by Wiese Advisory GmbH. That is a different grantor with different assets and a different authority chain, and it is the version a Kazakhstan notary or bank will read. | Delete the second definition entirely. The Russian should read «…(далее — «Доверитель»), в лице управляющего директора (Geschäftsführer) Александра Визе, действующего на основании Устава, настоящим уполномочивает…». |
| **B2** PoA | L7 / L8 | "represented by its **Managing Director**, Alexander Wiese" | «в лице **Директора** Александра Визе» | English names the Swiss office (Managing Director = *Geschäftsführer*); Russian uses the generic «Директор», which in this package is also the AIFC company's defined office. | **HIGH.** Representative authority for a Swiss GmbH is verified against the *Handelsregister*, which will show *Geschäftsführer*. A Russian text saying only «Директор» does not match the register extract and does not distinguish which company's director is meant. See also the four-way title problem at B8. | «в лице управляющего директора (Geschäftsführer) Александра Визе». Use the same rendering in the Resolution and the AoA signature blocks. |
| **B3** PoA | L16 vs L21 | "…including, without limitation, the Astana International Financial Centre (AIFC), **the Astana Financial Services Authority (AFSA)**, the Registrar of Companies of the AIFC, the State Revenue Committee…" | «…включая, помимо прочего, Международный финансовый центр «Астана» (МФЦА), Регистратора компаний МФЦА, Комитет государственных доходов…» | **CONFIRMED: AFSA is omitted from the Russian list.** The English names AFSA, the Registrar and the State Revenue Committee; the Russian names the Registrar and the State Revenue Committee only. | **HIGH.** AFSA is the regulator that houses the Registrar function and receives the incorporation application. The Russian text omits the single most important addressee. The "including, without limitation" wrapper mitigates but does not cure — an official checking a specific mandate reads the enumeration. (The Russian does mention AFSA later, at L50, in Latin script — showing the omission at L21 is an oversight, not a choice.) | Insert «Комитет Международного финансового центра «Астана» по регулированию финансовых услуг (AFSA)» into the Russian enumeration at L21, in the same position as the English. Use one consistent Russian rendering of AFSA at L21 and L50. |
| **B4** PoA | L67–71 vs L75–79 (negative covenants) | six prohibitions | five of six **narrower** | Systematic narrowing of the prohibitions in the Russian: (i) L67 "dispose of **or otherwise operate**" → L75 «распоряжаться» only; (ii) L68 "**payment instructions** or payment documents" → L76 «платежные документы» only — an electronic instruction is not a «документ»; (iii) L69 "…electronic keys, **passwords or any other security credentials**" → L77 stops at «электронные ключи»; (iv) L70 "amend or **designate** authorized signatories" → L78 «изменять» only; (v) L71 "provide security, **issue guarantees**, or assume any other financial obligations" → L79 drops «выдавать гарантии». | **HIGH.** These are the client's core protections against the attorneys, and they are addressed to banks — who will read the Russian. Under the Russian text the attorneys are **not** prohibited from receiving passwords or security credentials, from initiating electronic payment instructions, or from designating new signatories. With no prevalence clause in the PoA (A5), there is no argument that the English cures this. | Retranslate the whole block from the English, word for word: «…распоряжаться денежными средствами или иным образом совершать операции по банковским счетам; инициировать, подтверждать или подписывать платежные поручения либо платежные документы; получать банковские карты, токены, средства аутентификации, электронные ключи, пароли либо любые иные средства доступа; изменять или назначать лиц, имеющих право подписи…; получать кредиты, предоставлять обеспечение, выдавать гарантии или принимать иные финансовые обязательства…». |
| **B5** PoA | L34 vs L55 | "receive the Certificate of Incorporation, certificates, extracts, notices, decisions and any other documents **issued in connection with the incorporation and registration of the company**" | «получать свидетельство о регистрации, сертификаты, выписки, уведомления, решения и любые иные документы;» | The Russian **drops the limiting phrase**. "Any other documents" becomes unbounded. | **HIGH.** The Russian grants a power the English deliberately confines. Direction of error is *expansion of the attorneys' authority* — the opposite direction from B4, which shows the divergences are not systematically in the client's favour in either direction. | Restore: «…и любые иные документы, выданные в связи с учреждением и регистрацией компании». |
| **B6** PoA | L81 vs L82 | "to **increase the share capital of the Company**, to execute the Articles of Association, and to **approve, execute and file** any amendments to the Articles of Association" | «увеличивать **уставный капитал**, подписывать устав, изменения в устав» | Two defects. (i) "**the Company**" is **undefined in the PoA** — the instrument defines only "Principal" and "Attorneys", and never names Wiese Advisory Eurasia Ltd. anywhere. So "the Company" could be the GmbH. (ii) The Russian drops the object altogether («увеличивать уставный капитал» — *whose* capital?) and drops "approve" and "file". | **HIGH.** An unqualified, un-attributed power to increase share capital, granted to two attorneys with a right of substitution. In Russian it has no stated object at all. This compounds the over-breadth already flagged by the Lead Reviewer at PoA L81. | Define the target entity in the PoA (e.g. "the Company to be incorporated under the name Wiese Advisory Eurasia Ltd. or such other name as may be reserved (the "**New Company**")") and use it. Russian: «увеличивать уставный капитал Новой компании, подписывать Устав Новой компании, а также утверждать, подписывать и подавать любые изменения в Устав». Consider deleting the capital-increase and amendment powers entirely — they are not needed to incorporate. |
| **B7** RES | L18 vs L19 | "…and is hereby appointed and authorised to execute all documents and take all necessary appropriate actions **on behalf of the incorporating shareholder following incorporation**." | «…а после ее регистрации — подписывать любые документы и совершать все необходимые и целесообразные действия от имени акционера-учредителя **в связи с учреждением указанной компании**.» | The Russian adds a **limitation absent from the English**: "in connection with the incorporation of the said company". English grants open-ended post-incorporation authority to act for the shareholder; Russian confines it to incorporation-related matters. | **HIGH.** Two different grants of authority to the same person under the same instrument, with no prevalence clause (A5). A bank presented with the Russian will refuse post-incorporation instructions the English would support; a counterparty relying on the English may take instructions the Russian does not authorise. | Decide which scope is intended and make both texts say it. The narrower Russian scope is the better drafting; if adopted, the English should read "…on behalf of the incorporating shareholder in connection with the incorporation of that company." |
| **B8** All three | RES L2–3/L7–8; RES L12/L14; RES L43/L48; PoA L7/L8; AoA L602/L607 | "Shareholder" (RES title); "Director" (RES body); "Managing Director" (PoA); "Chief Executive Officer" (RES + AoA signature blocks) | «Учредитель» (RES title); «директор» (RES body); «Директор» (PoA); «Генеральный Директор» (RES + AoA signature blocks) | **One person's single office is rendered five different ways across the package**, and the title of the Resolution names a third legal concept: «Учредитель» = **founder / incorporator**, a Kazakhstan LLP («ТОО») concept with no counterpart in AIFC company law, which uses «Акционер». The AoA's own Russian uses «Акционер» 66 times and «Учредитель» **zero** times. | **HIGH.** (i) A "founder's resolution" and a "shareholder's resolution" are different instruments with different signatories; AFSA expects the latter. (ii) Rendering the Swiss office as «Генеральный Директор» gives Alexander Wiese, in Russian, the *same* title the AoA assigns to the AIFC company's CEO — a Russian reader cannot tell which company's CEO signed. (iii) A single natural person is simultaneously described as the GmbH's Managing Director, Director and CEO across three documents in one filing bundle. | Standardise: title the Resolution "**RESOLUTION OF THE SOLE SHAREHOLDER**" / «**РЕШЕНИЕ ЕДИНСТВЕННОГО АКЦИОНЕРА**» (never «Учредитель»). Describe Alexander Wiese's Swiss office identically everywhere: "Managing Director (*Geschäftsführer*)" / «управляющий директор (Geschäftsführer)». Reserve "Chief Executive Officer" / «Генеральный директор» exclusively for the AIFC company's office. Signature blocks must match the Handelsregister entry. |
| **B9** AoA | Art. 18.2 — EN L367 / RU L373 | "…subject to **powers expressly reserved by law for Shareholders' meetings and the Directors**." | «…с учетом **полномочий, прямо предусмотренных законом, на собраниях Акционеров и Директоров**.» | English **reserves** a class of powers away from the CEO. Russian says the CEO's powers are subject to "powers expressly provided by law **at** meetings of Shareholders and Directors" — a phrase with no operative content. The reservation concept is lost. | **HIGH.** The English grants the CEO "the broadest powers to act in all circumstances in the name of the Company" and then carves out reserved matters. The Russian grants the broadest powers **with no effective carve-out**. This is the widest grant of executive authority in the constitution and the two texts limit it differently. | «…с учетом полномочий, прямо отнесенных законом к компетенции общего собрания Акционеров и Директоров». |
| **B10** AoA | Art. 27.5 — EN L532 / RU L538 | "If the Directors resolve that any dividend or other amount is forfeited, **the dividend ceases to be owing by the Company**." | «Если Директора примут решение о конфискации каких-либо дивидендов или другой суммы, **дивиденды перестают причитаться Компании**.» | «причитаться Компании» is dative — "cease to be owed **to** the Company". The English says the **Company ceases to owe** the dividend. **The direction of the obligation is reversed.** | **HIGH.** A money clause in which the debtor and creditor are swapped. Under the Russian, forfeiture extinguishes a debt owed *to* the company — the opposite of the intended release of the company's liability to the shareholder. | «…Компания перестаёт быть обязанной выплатить такие дивиденды» or «…такие дивиденды перестают причитаться Акционеру». |
| **B11** AoA | Art. 29.6 — EN L562 / RU L580 | "…is **conclusive** evidence that the notice was given 48 hours after it was posted." | «…является **убедительным** доказательством того, что уведомление было предоставлено…» | «убедительное доказательство» = *persuasive/convincing* evidence — **rebuttable**. "Conclusive evidence" is **irrebuttable**. Note that the same English term is correctly rendered «**неоспоримым** доказательством» at RU L311 (Art. 15.7) — so the document translates one term two ways, one of them wrong. | **HIGH.** A deeming provision for service of notices. Under the English, proof of posting cannot be contradicted; under the Russian it can. This determines whether a general meeting was validly convened. | RU L580: «является неоспоримым доказательством». Audit the whole Russian text for "conclusive" and use «неоспоримым» uniformly. |
| **B12** AoA + all | §2.1–2.3 above | Auto-generated numbering | Hard-typed numbering, 13 articles unnumbered, probable off-by-one in Arts. 15 and 24 | See §2. | **HIGH.** Cross-references, AFSA correspondence and future amending resolutions all depend on a stable, matching numbering scheme, and there isn't one. | See §2.1–2.3. |

### Band C — MEDIUM

| Document | Clause / line | English | Russian | Issue | Legal significance | Correct approach |
|---|---|---|---|---|---|---|
| **C1** AoA | Art. 15.6 — EN L279 / RU L308 | "A poll may be demanded, **before or on the declaration of the result** of a vote by show of hands" | «Опрос (голосование) может быть проведен **до или после объявления результатов** голосования поднятием рук» | English: before or **at the moment of** declaration. Russian: before or **after** declaration. | The Russian permits re-opening a vote whose result has already been declared, defeating the finality that "on the declaration" creates. | «до объявления результатов голосования поднятием рук или в момент их объявления». |
| **C2** AoA | Arts. 15–16 throughout — e.g. EN L279, L283, L290 / RU L308, L311, L314 | "poll"; "unless a poll is **demanded**" | «опрос (голосование)»; «если не требуется проведение опроса» | (i) «опрос» = *survey/canvass*, not a formal ballot. (ii) "demanded" is repeatedly rendered «требуется» = "is **required**". A poll that no one demands is not a poll that is not required. | The trigger for a poll differs between texts: a right exercised on demand (EN) vs a condition of requirement (RU). Affects the validity of every resolution passed on a show of hands. | Use «голосование по бюллетеням» (or simply «голосование») for *poll*, and «если не заявлено требование о проведении голосования» for "unless a poll is demanded". Remove the parenthetical «(голосование)» crutch — it makes the Russian read as a gloss rather than a term. |
| **C3** AoA | EN L136, L421, L448 / RU L142, L429, L480–481 | "at the discretion of **the Directors**"; "3 consecutive meetings **of the Directors**"; "a meeting of **the Directors**" | «по усмотрению **совета Директоров**»; «на 3 собраниях **совета Директоров**»; «на собрании **совета Директоров**» | The Russian invents «**совет Директоров**» — a **board of directors** — five times. The AoA constitutes no board; the defined term is "Directors" / «Директора». | The company will have **one** director. A Russian text referring to decisions of "the board of directors" invites the argument that a sole director cannot validly act, and that a collegiate organ must be constituted first. | Replace every «совет Директоров / совета Директоров / советом Директоров» with «Директора / Директоров / Директорами». |
| **C4** AoA | Art. 24.11 — EN L465–467 / RU L488–490 | "…and **provided that** Directors constituting a quorum of a duly convened meeting either agree: [(a) missing] with the proposed resolution…; or (b) that the matter may be resolved in accordance with the decision of the majority…, and the matter shall be resolved in accordance with **those communications (however made)**." | «…при условии, **составляющие что кворум Директора**, должным образом созванного собрания, либо соглашаются: … (b) с тем, что вопрос может быть решен в соответствии **большинства с решением** Директоров …, и вопрос должен быть решен в соответствии **с этими** (как бы это ни было сделано).» | **Both** texts are broken. English: "provided that … either agree" has no main clause, and the `(a)` is missing (§2.5). Russian: «составляющие что кворум Директора» is scrambled word order; «в соответствии большинства с решением» is scrambled; and «в соответствии **с этими**» has **no noun at all** — the object of the phrase ("those communications") is simply absent. | The urgent-decision procedure — the mechanism by which time-critical decisions are validly taken — cannot be construed in either language, and cannot be construed *at all* in Russian. | Redraft the clause from scratch in English, then translate. English: "If in the opinion of the Chair a matter … is sufficiently urgent, the matter may be submitted to the Directors for consideration without a meeting, and the matter is resolved if Directors who would constitute a quorum at a duly convened meeting agree, by any means of communication, either (a) with the proposed resolution, or (b) that the matter be resolved by the decision of a majority of them." |
| **C5** AoA | Art. 24.14 — EN L474 / RU L498 | "the Company may, by a Resolution **or** suspend or relax any provision of these Articles prohibiting a Director from voting" | «Компания может на основании Решения приостановить или ослабить действие какого-либо положения настоящего Устава, запрещающего Директору голосовать» | The English contains a stray "or" that makes the sentence ungrammatical ("by a Resolution or suspend"). The **Russian is correct** and silently repairs it. | Illustrates the practical consequence of A4: the prevalence clause elects the **English** — i.e. the broken text — to govern. Where the Russian is the only intelligible version, an English-prevails rule produces the worse outcome. | Delete the stray "or" in the English. (And note this is an argument for fixing the texts, not for relying on the prevalence clause.) |
| **C6** AoA | Art. 25 — EN L504 / RU L506 | "a Secretary **may be** appointed and removed by the Directors" | «Секретарь **назначается и освобождается** от должности Директорами» | English is permissive; the Russian indicative reads as a statement that there **is** a Secretary who is appointed and removed. | Conflicts with the definition at EN L47 / RU L82 («Секретарь означает секретаря Компании, **при наличии такой должности**»). The Russian text can be read as requiring the office to be filled — a governance obligation the company does not intend to assume. | «Директора вправе назначать и освобождать от должности Секретаря, определяя срок, вознаграждение и условия назначения». |
| **C7** AoA | Art. 24.7 — EN L455 / RU L484 | "**If there is no Director holding office as Chair**, or if the Chair is unwilling … or is not present … within 15 minutes" | «**Если Директор, занимающий должность Председателя, отсутствует**, или если Председатель не желает председательствовать … или не присутствует … в течение 15 минут» | The Russian converts "there is no Chair" into "the Chair is absent", then repeats the absence limb. The case *"no Chair has ever been appointed"* disappears from the Russian. | Where no Chair exists — the default position for a newly incorporated single-director company — the Russian provides no mechanism to appoint a meeting chair. | «Если ни один Директор не занимает должность Председателя, либо если Председатель не желает председательствовать…». |
| **C8** AoA | Art. 1, definition of Writing — EN L63 / RU L93 | "any document, **instrument**, certificate, notice, register or communication" | «любого документа, **финансового документа**, сертификата, уведомления, реестра или сообщения» | "instrument" (a legal instrument) rendered as «финансовый документ» (a **financial** document). Elsewhere the same English word is correctly rendered «документ о передаче» (instrument of transfer, RU L193) and «Документ о назначении доверенного лица» (instrument appointing a proxy, RU L351). | The scope of the "Writing" definition — which governs every notice, resolution and register entry in the Articles — is narrower and differently framed in Russian. | «любого документа, правового акта/инструмента, сертификата, уведомления, реестра или сообщения». |
| **C9** AoA | Art. 8.1 — EN L148 / RU L165 vs Art. 27.2–27.3 RU L535–536 | "the **allotment** of Shares" | «условиями **Распределения** Акций» | The Russian capitalises «Распределение» in Art. 8.1 for *allotment*, and uses the same capitalised «Распределение» in Arts. 27.2–27.3 for *Distribution* (of profits/assets). **Two different concepts share one capitalised Russian term.** | A defined-term collision that exists **only in Russian**. Art. 8.1 can be read as conditioned on the terms of a dividend distribution. | Use «Размещение Акций» (allotment) in Art. 8, reserving «Распределение» for Distribution. |
| **C10** AoA | Art. 7.1 — EN L135 / RU L141 | "without affecting any rights, **entitlements** or restrictions attached to existing Shares, a Share may be issued with the rights, **entitlements** or restrictions…" | «без ущерба для каких-либо прав или ограничений… с правами или ограничениями…» | The Russian **omits "entitlements" in both places** — a three-element list becomes two. | The clause that governs the terms on which new share classes may be created. "Entitlements" (e.g. to dividends, to participate on a winding up) is a distinct category from "rights"; the Russian narrows what may be attached to, and what is protected on, a share. | «…прав, правомочий или ограничений…» in both places. |
| **C11** AoA | Art. 14.4 — EN L256 | "…under section 97 of the **Company Regulations**" | «…в соответствии с разделом 97 **Положения о компаниях**» | The English cites "the **Company** Regulations" — a term that is **not defined** anywhere. The defined term is "**Companies** Regulations" (EN L31). The Russian is correct. | An undefined instrument is cited in the clause that permits short-notice general meetings. Under an English-prevails rule, the governing text refers to a document that does not exist. | English: "the Companies Regulations". |
| **C12** AoA | Arts. 24.3, 24.7, 24.9 — EN L448, L455, L462 / RU L480, L484 | "in person or **by alternate**" | «лично или через **заместителей**» | Both texts refer to **alternate directors** — an office these Articles nowhere create, permit or regulate (there is no appointment mechanism, no eligibility rule, no notice requirement). | Quorum and voting at directors' meetings are expressed by reference to a category of participant the constitution does not provide for. Consistent between languages, but unworkable in both. | Either delete the references to alternates, or add an Article constituting the office (appointment, revocation, powers, and whether an alternate counts in the quorum). |
| **C13** AoA | Art. 16.7 — EN L339 / RU L352 | "…before the General Meeting at which the proxy **is to be exercised**"; "For a poll … not being taken immediately but sometime after **it is demanded**" | «…до Общего собрания, на котором **должен присутствовать доверенное лицо**»; «Для опроса…, который проводится не сразу, а через некоторое время **после его проведения**» | Two errors. (i) EN condition = the proxy is *exercised*; RU = the proxy is *present*. (ii) RU renders "after it is demanded" as «**после его проведения**» — "after it is **held**" — making the sentence circular: a poll held some time after it is held. | (i) A proxy may be exercised without attendance; the RU trigger is wrong. (ii) The deposit deadline for a deferred poll is unascertainable in Russian. | (i) «…на котором доверенное лицо будет осуществлять полномочия»; (ii) «…через некоторое время после заявления требования о его проведении». Also correct the agreement error «должен присутствовать доверенное лицо» → «должно». |
| **C14** RES | L21/L22, L23/L25, L26/L28 | "appointed as **Chief Executive Officer (CEO)**"; "appointed as **Director**"; "appointed as **Authorized Signatory**" | «назначается **Генеральным Директором**»; «назначается **Директором**»; «назначается **Уполномоченным Подписантом Компании** Wiese Advisory Eurasia Ltd.» | (i) «Уполномоченный Подписант» is not a term of art in AIFC or Kazakhstan practice. (ii) The Russian at L28 inserts «**Компании**» before the company name — and «Компания» is defined in this very document as **Wiese Advisory GmbH** (see A6). (iii) The Resolution capitalises «Генеральным Директором» while the AoA writes «Генеральный директор» — the same defined office, two capitalisations across the bundle. | The Russian at L28 appoints an authorised signatory of *"the Company [= Wiese Advisory GmbH] Wiese Advisory Eurasia Ltd."* — an entity that does not exist. | «назначается уполномоченным лицом, имеющим право подписи от имени Wiese Advisory Eurasia Ltd.» Delete «Компании». Standardise «Генеральный директор» throughout. |
| **C15** PoA | L28, L29 vs L48, L49 | "**prepare**, sign, submit, amend, withdraw and receive any … documents required for the **incorporation and registration** of the company"; "**prepare**, sign and submit the Articles of Association…" | «подписывать, подавать, изменять, отзывать и получать любые … документы, необходимые для **регистрации** компании»; «подписывать и подавать Устав…» | The Russian drops "**prepare**" (готовить) from both sub-powers, and drops "incorporation and" from the first. Note the Russian *does* include «готовить» at L82 — so the omission is inconsistent within the same document. | Narrower authority in the Russian for the two most operationally important sub-powers in the mandate. | Restore «готовить» to both, and «учреждения и регистрации компании» to the first. |
| **C16** AoA | Art. 22 — EN L420 / RU L428 vs Art. 16.3 EN L326 / RU L347 | "because of any mental or physical **disability**" (twice in the document) | Art. 22: «умственной или физической **неполноценности**»; Art. 16.3: «физической или психической **недееспособности**» | The same English concept is translated two different ways, and one of them — «неполноценность» (*inferiority, defectiveness*) — is both legally wrong and pejorative. «Недееспособность» (legal incapacity) is the correct term and is used elsewhere in the same document. | A ground for automatic vacation of a director's office turns on a term that is not a legal category in Russian. Also a reputational point in a document that goes on a public register. | Use «недееспособности (в силу психического или физического состояния)» in both places. |
| **C17** AoA | Art. 1, first definition — EN L31 / RU L73 | "**Companies Regulations** means the AIFC Companies Regulations and includes the AIFC Companies Rules." | «**Положение о компаниях** означает Положения о компаниях МФЦА, и включают Правила о компаниях МФЦА.» | The Russian defined term is **singular** («Положение») while the definiens is **plural** («Положения») and the verb is **plural** («включают»). The definition does not agree with itself. | The very first definition in the constitution is grammatically incoherent, and the singular/plural mismatch recurs 30+ times downstream (the body consistently uses the singular «Положение о компаниях» for a plural instrument). | «**Положения о компаниях** означают Положения о компаниях МФЦА и включают Правила о компаниях МФЦА», with the plural used consistently throughout the Russian text. |
| **C18** AoA | Art. 1 — EN L36 vs L43 / RU L77 vs L81 | "section 100 (**Resolution** in writing of Private Companies)" *vs* "section 100 (**Resolutions** in writing of Private Companies)" | «(Письменное решение частных компаний)» *vs* «(Письменные решения частных компаний)» | The same statutory provision is cited under two different headings, and the Russian faithfully mirrors both. One of the two must be wrong. | A mis-cited statutory heading in the definitions of the two resolution types. Minor, but it is the kind of inconsistency a Registrar's reviewer notices. | Check the actual heading of s.100 of the AIFC Companies Regulations (<https://aifc.kz>) and use it verbatim in both definitions and both languages. **FINDING TYPE: UNCONFIRMED** — I could not reach aifc.kz from this environment to confirm which form is correct. |
| **C19** AoA | Art. 9.4 — EN L186 / RU L196 | "The Directors may suspend the registration of transfers … **at the times and for the periods** (not exceeding 30 days in any year), **as decided by them, acting reasonably**." | «Директора Компании могут приостановить регистрацию передачи Акций Компании **в любое время** и на периоды (не превышающие 30 дней в любом году), на основании своего решения, действуя на разумных началах.» | "at the times … as decided by them" → «в любое время» ("at any time"). | A restriction expressed as a considered decision becomes an at-will power in Russian. The 30-day annual cap survives, so the practical effect is limited. | «в такие сроки и на такие периоды…, которые они определят, действуя разумно». |
| **C20** AoA + RES | AoA L128/L130; RES heading vs body | "SHARE CAPITAL"; "**authorised** share capital"; "ALTERATION OF SHARE CAPITAL" | «АКЦИОНЕРНЫЙ КАПИТАЛ» (heading); «**Уставный** капитал» (body); «ИЗМЕНЕНИЕ АКЦИОНЕРНОГО КАПИТАЛА» | The Russian uses **two different terms** for share capital — «акционерный капитал» in both headings and «уставный капитал» in the operative capital clause — and the English adds a third concept, "**authorised** share capital", which appears nowhere else in either text. | «Уставный капитал» and «акционерный капитал» are not interchangeable in Kazakhstan practice; "authorised share capital" is a distinct concept from issued/allotted capital and is used only once, in the clause that also contains the arithmetic error. | Pick one Russian term (recommend «акционерный капитал», matching the headings) and use it throughout. In English, decide whether the figure is authorised or issued capital and say so consistently — the same clause currently describes it as authorised, then states that 100 shares have been allotted. |
| **C21** AoA | Art. 24 — EN L453 vs L464 / RU L482 vs L487 | 24.5 "If a Director is required not to vote … because of a conflict of interest, the Director must not be counted in working out whether there is a quorum" | 24.10 "A Director shall not be counted in the quorum … in relation to a resolution on which he is not entitled to vote" | The same rule stated twice, five clauses apart, in slightly different words, in both languages. | Redundant provisions invite the argument that they mean different things. Consistent across languages, so not a translation defect — a drafting one. | Delete one (24.10 is the more general and should survive). |
| **C22** AoA | Arts. 10.2, 16.3 — EN L205 vs L326 / RU L209 vs L347 | "the Shareholder's **Personal Representative**" (capitalised) *vs* "a **personal representative**" (lowercase) | «**Личный представитель**» *vs* «**личный представитель**» | "Personal Representative" is used as if it were a defined term but appears nowhere in Art. 1. Capitalisation is inconsistent in both languages. | An undefined capitalised term in the clause governing transmission of shares on death — the mechanism by which the sole shareholder's holding would pass. | Either define "Personal Representative" in Art. 1 (both languages) or lowercase it throughout. Note it is also relied on by Art. 21.3 (appointment of a director where all shareholders and directors have died). |

### Band D — LOW / TYPOGRAPHICAL

| Document | Clause / line | English | Russian | Issue | Legal significance | Correct approach |
|---|---|---|---|---|---|---|
| **D1** RES | L14, L19, L22, L25, L28, **L47 (signature block)** | — | «**A**лександр Визе» | **Verified at code-point level:** the initial "A" is **Latin U+0041**, not Cyrillic А (U+0410), in **all six** occurrences in the Resolution, including the executed signature block. The AoA at L606 uses the correct Cyrillic «Александр». | The signatory's name in the Resolution is not the same string as the signatory's name in the Articles. Register text-search, KYC name-matching and any automated comparison against an identity document will fail. Invisible on the page. | Replace with Cyrillic А (U+0410) in all six places. Run a script check on the final files, not a visual one — the defect is not visible. |
| **D2** RES | L21, L23, L28 | "Wiese Advisory Eurasia Ltd**..**" (×2) | «Wiese Advisory Eurasia Ltd**..**» | **Confirmed:** double period after the company name at RES L21, L23 (English) and L28 (Russian). | Cosmetic, but it appears in the clauses appointing the CEO, the Director and the Authorised Signatory — the three clauses AFSA reads most closely. | Single period. Also decide once whether the suffix is "Ltd" or "Ltd." and use the **exact** form reserved with the Registrar in every document. **FINDING TYPE: PRACTICAL REQUIREMENT** — the name must match the reservation character for character. |
| **D3** PoA | L16 | "…and the opening of bank accounts**..**" | — | Double period at the end of the English preamble. | Cosmetic. | Single period. |
| **D4** AoA | Cover, L3 | "Wiese Advisory GmbH**.**" | — | Stray full stop after the parent's name on the approval block. The cover block (L1–4) and the title page (L19–20) exist **in English only** — there is no Russian mirror of "Approved by Resolution of the Shareholder of Wiese Advisory GmbH, dated 11 August 2026". | A bilingual constitution whose approval block exists in only one language. Also note the cover says "**Shareholder**" while the Resolution it refers to is titled «**УЧРЕДИТЕЛЯ**» (B8). | Add the Russian mirror of the cover and title page; remove the stray period; align "Shareholder"/«Акционер». |
| **D5** RES | L12 / L14 | "I, Alexander Wiese do hereby certify that **I are** the duly appointed Director…" | «…настоящим удостоверяю, что **являюсь** надлежащим образом назначенным директором…» | "I are" — agreement error in the English. The Russian is grammatically correct. | An obvious error in the opening sentence of an instrument filed with a regulator. Another instance of the Russian silently repairing the English while the English is the prevailing text elsewhere in the bundle. | "I am the duly appointed…". Also insert the missing comma: "I, Alexander Wiese, do hereby certify…". |
| **D6** RES | L12 / L14 | "…is in conformity with the provisions of the **bye-laws of the Company** (hereinafter referred to as the "**Resolution**")" | «…соответствует положениям **Устава Компании** (далее — «**Решение**»)» | Two issues. (i) "bye-laws" (Bermuda/offshore terminology) vs the Russian «Устав» — the **Russian is correct** for a Swiss GmbH (*Statuten*) and the English is wrong. (ii) In **both** languages the parenthetical defining "the Resolution" is placed after "bye-laws of the Company" / «Устава Компании», so it grammatically defines the **constitutional document**, not the resolution. | (i) A further indicator of the stale template already logged by the Lead Reviewer. (ii) The defined term "Resolution" attaches to the wrong antecedent in both texts. | English: "…is in conformity with the articles of association (*Statuten*) of the Company". Move the defining parenthetical to attach to the resolution: "…the resolution set forth below (the "**Resolution**") was duly adopted…". |
| **D7** PoA | L17 / L22 | "For the above purposes, **Principal hereby authorize Attorneys** to:" | «Для вышеуказанных целей **Доверитель настоящим уполномочиваю** Доверенных лиц:» | English: missing articles and subject-verb disagreement ("Principal … authorize"). Russian: «**уполномочиваю**» is **first person singular** ("I authorize") with a third-person subject «Доверитель». | The Russian first-person form is direct evidence that the template was written for an **individual** principal and adapted for a company without proofreading — consistent with B1, where the Russian re-defines the Principal as the individual. | EN: "For the above purposes, the Principal hereby authorises the Attorneys to:". RU: «…Доверитель настоящим уполномочивает Доверенных лиц:». |
| **D8** PoA | L49 vs L60 | "Chief Executive Officer (CEO)"; "Ultimate Beneficial Owner (UBO)" | L49: «Chief Executive Officer (CEO)», «Ultimate Beneficial Owner (UBO)» — **untranslated Latin**; L60: «конечном бенефициарном владельце» — **translated** | The same two terms are left in English at RU L49 and translated at RU L60, in one document. AFSA/МФЦА is translated («МФЦА») while AFSA is left in Latin at RU L50 but omitted entirely at RU L21 (B3). | Inconsistent treatment of defined terms within a single Russian text. A notary certifying the Russian may query untranslated terms. | Translate consistently and gloss once: «Генерального директора (Chief Executive Officer, CEO)», «конечного бенефициарного владельца (Ultimate Beneficial Owner, UBO)», and use the Russian thereafter. |
| **D9** Package-wide | PoA vs AoA | PoA: "auth**oriz**es", "auth**oriz**ed"; RES: "Auth**oriz**ed Signatory"; AoA: "auth**oris**ed share capital", "recogn**is**e", "Auth**oris**ed" | — | **US and British spelling conventions are mixed across the bundle**, and within it (RES uses "Authorized", AoA uses "authorised"). | AIFC drafting follows British/Commonwealth convention. Cosmetic, but a filing bundle should be internally consistent. | Standardise on British "-ise/-isation" throughout, matching the AIFC Companies Regulations. |
| **D10** AoA | Art. 1 — EN L47 / RU L82 | "including a **joint**, assistant or deputy secretary" | «включая **ассоциированного** секретаря, помощника или заместителя секретаря» | "joint secretary" rendered as «ассоциированный» (*associate*) secretary. A joint secretary and an associate secretary are different offices. | Minor; the office is optional and unlikely to be used. | «включая совместного секретаря, помощника или заместителя секретаря». |
| **D11** AoA | Art. 8.5 — EN L158 / RU L174; Art. 8.5(c) EN L163 / RU L177 | "damaged, **defaced**, lost or destroyed"; "the payment of a reasonable **fee**" | «повреждения, утери или уничтожения» (defaced omitted); «выплаты разумного **вознаграждения**» | (i) "defaced" omitted from the Russian opening words, although RU L176 (b) does say «поврежденные или **испорченные**». (ii) «вознаграждение» = *remuneration*, not a fee/charge. | Minor; the replacement-certificate mechanism still works. | (i) «повреждения, порчи, утери или уничтожения»; (ii) «уплаты разумного сбора». |
| **D12** AoA | Art. 26 — RU L516 | "The Directors must ensure…" | «**Директоры** Компании должны обеспечить…» | «Директоры» is a non-standard plural; the correct form «Директора» is used throughout the rest of the Russian text (66 occurrences of the «Акционер» family, 116 of the «Директор» family). | Typographical. | «Директора». |
| **D13** AoA | Art. 29.5 — EN L561 / RU L579 | "Every Person who becomes entitled to a Share … **is bound by** any notice in relation to the Share." | «Каждое Лицо, получающее право на Акцию Компании, **связывается** любым уведомлением, относящимся к этой Акции.» | «связывается» is reflexive and in ordinary Russian most naturally means "**gets in touch with**". The intended sense ("is bound") requires «связано». | The Russian sentence reads as "every person entitled to a share gets in touch with any notice relating to that share" — meaningless. Low practical impact but visible nonsense in a filed document. | «…**связано** любым уведомлением…» or, better, «…**обязано** соблюдать любое уведомление…». |
| **D14** AoA | Art. 29.2(b) — EN L554 / RU L573 | "at the Shareholder's **registered address**" | «по **юридическому адресу** Акционера» | «Юридический адрес» is the registered office address of a **legal entity**. The clause applies to any Shareholder, including a natural person, who has no «юридический адрес». | Service on an individual shareholder is undefined in the Russian. Low, given the sole shareholder is a company. | «по зарегистрированному адресу Акционера». |
| **D15** AoA | Art. 16.3 — EN L326 | "because of a physical or mental disability **or other**" | «или по иным **причинам**» | The English phrase dangles ("or other" — or other *what*?); the Russian completes it. | A further instance of the Russian being the better text while the English prevails. | English: "…or for any other reason". |
| **D16** AoA | Art. 19 heading — EN L376 / RU L377 | "SHAREHOLDERS **RESERVE POWER**" | «**ДОПОЛНИТЕЛЬНЫЕ ПОЛНОМОЧИЯ** АКЦИОНЕРОВ» | "Reserve power" (an overriding power held in reserve) rendered as "**additional** powers". | The Russian heading mischaracterises the article, which is a direction power over the Directors, not a grant of extra shareholder rights. Headings are usually non-operative but they guide construction. | «РЕЗЕРВНЫЕ ПОЛНОМОЧИЯ АКЦИОНЕРОВ». |
| **D17** AoA | Art. 18.2 — EN L367 / RU L373 | "from among or from outside of **its members**"; "within the limits of the **corporate objects**" | «из числа своих **участников** или не из их числа»; «в рамках **корпоративных целей**» | (i) EN "its members" is ambiguous (members of *what* — the Shareholders? the Directors?); RU «участник» is the Kazakhstan **LLP** term for a participant, matching neither Shareholder nor Director. (ii) "corporate objects" / «корпоративные цели» — these Articles contain **no objects clause** (Art. 4 is "Nature of Company's Business"). | Cross-references to a category of person and a category of provision that the constitution does not create. | (i) "from among the Directors or from outside" / «из числа Директоров либо из числа иных лиц». (ii) Either add an objects clause or replace with "within the limits of the Company's business as described in Article 4" / «в рамках деятельности Компании, указанной в статье 4». |
| **D18** RES | L15 / L17 | "RESOLVED, that the Wiese Advisory Eurasia Ltd. **be incorporated** in the Astana International Financial Centre." | «ПОСТАНОВИЛИ, что Wiese Advisory Eurasia Ltd. **подлежит регистрации** в Международном финансовом центре «Астана».» | English uses the resolving subjunctive ("be incorporated"); the Russian states a fact/obligation ("is subject to registration"). Also "the Wiese Advisory Eurasia Ltd." — definite article before a proper name, recurring at L18, L23, L26, L29. | Modal drift: a decision to do something vs an assertion that something must happen. Minor but it runs through every operative clause of the Resolution. | «ПОСТАНОВИЛИ: учредить компанию Wiese Advisory Eurasia Ltd. в Международном финансовом центре «Астана».» Delete the definite articles in English. |
| **D19** RES / AoA | RES L35/L37; AoA L594/L596 | "Signed by" | RES: «**Подписи**» (plural); AoA: «**Подпись**» (singular) | The same English caption is rendered two different ways across the bundle, and the Resolution uses the plural for a single signatory. | Cosmetic. | «Подписано» or «Подпись» consistently; not the plural. |
| **D20** AoA | Art. 24.12 — EN L469 / RU L492 | "For this **subarticle**…" | «Что касается данной **подстатьи**…» | "Subarticle"/«подстатья» is used once and nowhere else; every other self-reference is "this Article"/«настоящей Статьей». | Cosmetic inconsistency in internal terminology, but see §2.4 — internal referencing in this document is generally unreliable. | "For the purposes of this Article 24.12" / «Для целей настоящей статьи 24.12». |
| **D21** AoA | Art. 24.15 — EN L476 / RU L499 | "The decision of the meeting chair is final **and conclusive**." | «Решение председателя собрания является **окончательным**.» | "and conclusive" dropped in the Russian. Cf. Art. 16.4 (EN L329 / RU L349) where the English says only "final" — so the two parallel provisions differ in the English too. | Minor; "final" carries most of the weight. Note the same "conclusive" translation problem as B11. | «является окончательным и неоспоримым», and align Arts. 16.4 and 24.15 in the English. |
| **D22** AoA | Art. 21.1 — EN L398 / RU L407 | "Any person who is willing to act as a **director** … may be appointed to be a **director**" (lowercase) | «в качестве **директора** … назначено **директором**» (lowercase) | The defined term is "Directors"/«Директора» (capitalised); this clause uses lowercase in both languages. Also "permitted by Companies Regulations" is missing "the". | Inconsistent use of a defined term in the clause that appoints directors. Saved by context, but sloppy. | Capitalise "Director"/«Директор»; insert "the" before "Companies Regulations". |

---

## 4. DEFINED-TERM CONSISTENCY MATRIX

| Concept | AoA EN | AoA RU | RES EN | RES RU | PoA EN | PoA RU | Consistent? |
|---|---|---|---|---|---|---|---|
| Shareholder | Shareholder | Акционер (×66) | Shareholder (title) | **Учредитель** (title) | shareholder | акционер / **акционер-учредитель** | **NO** — B8 |
| Director | Directors / Director / director | Директора / Директор / директор (×116) | Director | директор | Managing Director | **Директор** | **NO** — B2, B8 |
| CEO | Chief Executive Officer | Генеральный директор | Chief Executive Officer (CEO) | Генеральн**ым** Директором | Chief Executive Officer (CEO) | **untranslated** at L49 | **NO** — C14, D8 |
| Board | *(no board constituted)* | «совет Директоров» ×5 | — | — | — | — | **NO** — C3 |
| Private Company | Private Company | Частная компания | — | — | a Private Company | частная компания (Private Company) | Yes |
| Companies Regulations | Companies Regulations / **Company Regulations** (L256) | Положение о компаниях (sing.) / Положения (pl.) | — | — | — | — | **NO** — C11, C17 |
| Share capital | share capital / **authorised** share capital | акционерный капитал / **уставный** капитал | share capital | уставный капитал | share capital (L81) | уставный капитал (L82) | **NO** — C20 |
| Conclusive evidence | conclusive evidence (×2) | неоспоримым (L311) / **убедительным** (L580) | — | — | — | — | **NO** — B11 |
| Allotment vs Distribution | allotment / Distribution | **Распределение** for both | allotted | выпуск (issue) | — | — | **NO** — C9, §1.7 |
| Personal Representative | Personal Representative / personal representative | Личный представитель / личный представитель | — | — | — | — | **NO** — C22 |
| Alexander Wiese (RU) | Александр (Cyrillic) | — | — | **A**лександр (Latin A, ×6) | — | Александра (Cyrillic) | **NO** — D1 |
| Company name | Wiese Advisory Eurasia Ltd. | Wiese Advisory Eurasia Ltd. | Ltd**..** ×2 | Ltd**..** ×1 | *(never named)* | *(never named)* | **NO** — D2, B6 |

**Singular vs plural of "Director(s)":** the Articles define only the plural "**Directors**" (EN L32) /
«**Директора**» (RU L74). The singular "Director" / «Директор» is then used operatively throughout
(Art. 17 "at least 1 Director"; Art. 22 "A Director's office"; Art. 9.1 "the Director(s)"). This is
saved by the singular/plural rule at EN L56 / RU L89, which is present and correct in both
languages. **Acceptable — no change required**, but the mixed form "the Director(s)" at EN L181 /
RU L193 («Директором(ми)») should be regularised to "the Directors" / «Директорами» since the
saving provision already does the work.

---

## 5. SUMMARY — what must change before filing

**Stop-the-filing items (Band A):**

1. Recompute and correct the share-capital clause in **all four** texts (RES EN/RU, AoA EN/RU) once
   the NBK EUR/KZT rate for 31.07.2026 is confirmed. Correct the amount in words to "**fifty**
   tiyn" / «**пятьдесят** тиын». Fix N4, N5 and N6 in the same pass.
2. Redraft AoA Art. 18.1 in Russian — it is currently unintelligible.
3. Fix AoA Art. 18.2 Russian «такой директор» → «Генеральный директор», and restore the
   reservation-of-powers carve-out.
4. Replace the AoA Art. 31 language clause with a single formulation (text supplied at A4) and
   insert the same clause into the PoA and the Resolution.
5. Fix the Resolution's defined-term failure ("the Company" = Wiese Advisory GmbH used to mean the
   new entity).
6. Fix AoA Art. 15.1 in Russian — the single-shareholder carve-out from the quorum requirement.

**Then:** work Band B in full (these are all capable of producing a different legal outcome
depending on which language a reader holds), Band C as a drafting pass, and Band D as a proofread.

**Cross-cutting recommendation:** the Russian text of all three documents should be re-derived from
the corrected English by a legal translator working clause by clause, rather than patched. The
density of divergence found here — 22 medium-or-above items across roughly 700 lines, including
omissions in five of six negative covenants and a reversed obligation in a dividend clause —
indicates the Russian was produced by successive partial edits of a template rather than translated
as a whole. Patching will leave the ones not yet found.

**Do not rely on the prevalence clause to do this work.** C5 (Art. 24.14) and D5, D6, D15 show
several clauses where the English is the broken text and the Russian is correct — an English-prevails
rule elects the defective version in those places. Prevalence resolves ambiguity; it does not repair
drafting.

---

## 6. UNCONFIRMED items — what would close them

| # | Item | What would confirm it |
|---|---|---|
| U1 | The correct EUR/KZT nominal value: **544.50 or 545.50** | NBK daily official rate table for 31.07.2026, <https://nationalbank.kz/ru/exchangerates/ezhednevnye-oficialnye-rynochnye-kursy-valyut>. Blocked by this environment's egress proxy; not obtainable from any reachable mirror. |
| U2 | Whether the English body's auto-numbering actually matches the Russian typed numbers, and whether Arts. 15 and 24 are off by one | Open the AoA in Word and read the rendered numbers against the Russian. Cannot be determined from a text extraction. |
| U3 | The correct heading of s.100 of the AIFC Companies Regulations ("Resolution" or "Resolutions" in writing) — C18 | AIFC Companies Regulations text at <https://aifc.kz>. Not reachable from this environment. |
| U4 | Whether the Registrar accepts "Ltd." (with full stop) as a name suffix, and the exact reserved form of the name — D2 | The name-reservation confirmation from the AIFC Registrar of Companies. |
| U5 | Comparison against the second AoA version | **INPUT MISSING** — `26 01 089 _ AoA(1).docx` was not supplied. |

Sources consulted for exchange-rate verification (none yielded the 31.07.2026 rate):
[National Bank of Kazakhstan — daily official rates](https://nationalbank.kz/ru/exchangerates/ezhednevnye-oficialnye-rynochnye-kursy-valyut),
[National Bank of Kazakhstan — average rates](https://nationalbank.kz/en/news/oficialnye-kursy),
[minfin.com.ua NBK rate archive](https://index.minfin.com.ua/exchange/nbk/).
