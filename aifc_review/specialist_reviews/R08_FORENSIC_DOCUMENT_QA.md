# R08 — FORENSIC TRANSACTION-DOCUMENT REVIEW

**Reviewer:** 8 — Forensic Transaction-Document Reviewer
**Review date:** 2026-08-28
**Entity:** Wiese Advisory Eurasia Ltd. (to be incorporated, AIFC, Kazakhstan)
**Scope:** cross-document fact reconciliation; independent DOCX/PPTX technical forensics; stale-template evidence.

## Sources examined

| Ref | File (unmodified) | MD5 verified |
|---|---|---|
| **PPTX** | `/root/.claude/uploads/6f49b862-666b-5efd-8ff6-5ba4142a28a5/13bb1101-Corporate_Structure.pptx` | `e8071dae…d1b6` |
| **PoA** | `/root/.claude/uploads/6f49b862-666b-5efd-8ff6-5ba4142a28a5/1f18f06f-26_07_30_POWER_OF_ATTORNEY_registration.docx` | `7780dc5e…030d` |
| **RES** | `/root/.claude/uploads/6f49b862-666b-5efd-8ff6-5ba4142a28a5/5024e711-26_07_30___Resolution_on_Incorporation.docx` | `247981f7…8270` |
| **AoA** | `/root/.claude/uploads/6f49b862-666b-5efd-8ff6-5ba4142a28a5/876e0e98-26_01_089___AoA.docx` | `5592357b…1d2f` |
| **AoA(1)** | `26 01 089 _ AoA(1).docx` | **MISSING — NOT SUPPLIED** |

Text line references (`L…`) are to the shared extractions at
`<scratchpad>/extract/*.docx.txt`. XML references are to parts inside the ZIP containers, re-derived
independently for this report with Python `zipfile` + regex/XML parsing (no reliance on the lead
reviewer's extraction).

### Scope exception — fifth document

**FINDING TYPE: FACT.** Only four files were supplied. `AoA(1).docx` is absent from the upload set.
No column has been created for it and no comparison has been inferred. Every statement in this
report that would depend on it is marked **UNCONFIRMED — INPUT MISSING**. In particular, this
review **cannot** determine whether two divergent AoA versions are in circulation, and therefore
cannot exclude the risk that the version executed differs from the version reviewed.

---

# TASK 1 — MASTER FACT TABLE

`—` = document silent on the point. All cells are **FACT** (what the document says), not
interpretation. Interpretation is separated into the register that follows.

| # | Fact | Corporate Structure (PPTX) | Power of Attorney | Resolution | Articles of Association | AoA(1) |
|---|---|---|---|---|---|---|
| 1 | **Company name (NewCo)** | "Wiese Advisory Eurasia Ltd." (slide1, shape *Скругленный прямоугольник 4*) | **—** never named; only "a **Private Company** in the AIFC" [L16, L24] | "Wiese Advisory Eurasia Ltd." — but rendered "**the** Wiese Advisory Eurasia Ltd." 6× and "Ltd**..**" 3× [L15, 18, 21, 23, 26, 29, 32] | "Wiese Advisory Eurasia Ltd." [L20, L99] | MISSING |
| 2 | **Legal form** | — | "Private Company" (AIFC) [L16, L24, L46] | — (only the suffix "Ltd.") | "**Company** means a Private Company" [L35]; the name clause itself states no form [L99] | MISSING |
| 3 | **Parent** | "Wiese Advisory GmbH" | "Wiese Advisory GmbH, … Swiss Confederation, registration number **CHE-212.321.848**, registered address **c/o Guthirt Treuhand, Ibelweg 18a, 6300 Zug**" [L7] | "Wiese Advisory GmbH, a company organized and existing under the laws of the Swiss Confederation" — **no reg. no., no address** [L12] | "Wiese Advisory GmbH**.**" (cover) [L3]; signature block [L595] — **no reg. no., no address**; body silent | MISSING |
| 4 | **Shareholder (of NewCo)** | not labelled; implied by the 100 % connector | "information relating to the **shareholder**" [L29, L39] — never identified | Title: "RESOLUTION OF **SHAREHOLDER** OF WIESE ADVISORY GmbH" [L2–4]; RU title: "РЕШЕНИЕ **УЧРЕДИТЕЛЯ**" (= *founder*) [L7–8]; body: "the **incorporating shareholder**" [L18] / RU "акционера-**учредителя**" [L19] | Defined only generically: "Shareholder means a Person entered in the Register of Shareholders" [L42]; cover refers to "the Shareholder of Wiese Advisory GmbH" [L2–3]. **Never identified in the operative text** | MISSING |
| 5 | **UBO** | "Alexander Wiese" at the head of the chain — **not labelled UBO** | "Ultimate Beneficial Owner (UBO)" named as an information/document category [L29, L39, L49, L60] — **never identified** | — | — | MISSING |
| 6 | **Ownership %** | **100 %** (A. Wiese → GmbH); **100 %** (GmbH → Eurasia) — the only document stating any percentage | — | — (implied only: 100 of 100 shares allotted [L32]) | — (no shareholding stated anywhere) | MISSING |
| 7 | **Director (NewCo)** | — | "information relating to the … **director**" [L29, L39] — not named | "Alexander Wiese is hereby appointed as **Director**" [L23] | "at least 1 Director, who is a natural person and **has an Individual Identification Number**" [L358] — no name | MISSING |
| 8 | **CEO (NewCo)** | — | "**Chief Executive Officer (CEO)**" as an information category [L29, L49] | "Alexander Wiese … appointed as **Chief Executive Officer (CEO)**" [L21]; RU "**Генеральным Директором**" [L22] | Definition: CEO "is a natural person and **has an Individual Identification Number**" [L33]; Art. 18.2: "shall be a natural person and **a resident of the Republic of Kazakhstan**" [L367] — no name | MISSING |
| 9 | **Authorised signatory (NewCo)** | "Alexander Wiese **(Authorised Signatory)**" (slide1, *TextBox 22*) | — | "Alexander Wiese … appointed as **Authorized Signatory**" [L26]; RU "Уполномоченным Подписантом" [L28] | **—** the office does not exist in the Articles | MISSING |
| 10 | **Attorneys** | — | **SHOPANOVA DIANA**, KZ citizen, IIN 930718400043; **NAMYSSOVA ALINA**, KZ citizen, IIN 990416450128 [L10–11]; RU adds patronymics: ШОПАНОВА ДИАНА **БАХЫТЖАНОВНА**, НАМЫСОВА АЛИНА **ЕРЛАНОВНА** [L12–13]; "jointly and/or severally" [L16]; **right of substitution** [L83]; term **12 months** [L83] | — | — | MISSING |
| 11 | **Share capital** | — | — (but attorneys may "**increase the share capital** of the Company" [L81]) | "EUR 100 (one hundred) which will be equal to **KZT 54 450**" [L32] | "The **authorised** share capital … is EUR 100 (one hundred) which will be equal to **KZT 54 450**" [L128] | MISSING |
| 12 | **Currency** | — | — | EUR (contribution) + KZT (nominal value / total) [L32] — no statement of which is the capital currency of record | EUR + KZT [L128]; RU renders "**100 евро 100 (сто) евро**" (duplicated) [L130] | MISSING |
| 13 | **Number of shares** | — | — | **100** ordinary shares [L32] | **100** ordinary shares [L128] | MISSING |
| 14 | **Nominal value** | — | — | "**KZT 545,5** (five hundred forty five tenge and **five tiyn**)" [L32]; RU "545,5 (пятьсот сорок пять теңге и **пять тиын**)" [L33] | identical wording, both languages [L128, L130] | MISSING |
| 15 | **Registered office** | — | — (AIFC generally, as a venue [L16]) | — | "situated in the AIFC, Astana, Republic of Kazakhstan, **at the address provided in the public register**" [L107] — **no address stated** | MISSING |
| 16 | **Business activities** | — | referenced only as a KYC input: "information regarding the company's **business activities**" [L39]; "subsequent corporate maintenance" [L16] | — | "advisory services in the fields of **finance, corporate governance and business development**, as well as other advisory and support services … within and outside the AIFC" [L114] | MISSING |
| 17 | **Signing / execution date** | signature line **blank**, "Date of signature ______" **blank** (*TextBox 22*) — **undated** | "Zug, Switzerland «**11**» **August 2026**" [L3–4]; RU "«11» Августа 2026 г." [L5–6] | "DATED **11th of August 2026**" [L5–6]; RU "11 августа 2026 года" [L10–11] | cover "Dated **11 August 2026**" [L4]; signature block itself is **undated** [L594–607] | MISSING |
| 18 | **Resolution / adoption date** | — | — | resolution "was duly adopted by myself on **25th July 2026**" [L12]; RU "**25 Июля 2026**" [L14] | "**Approved by Resolution** Of the Shareholder of Wiese Advisory GmbH. Dated **11 August 2026**" [L1–4] | MISSING |
| 19 | **FX reference date** | — | — | NBK official rate "effective as of **31 July 2026**" [L32–33] | NBK official rate "effective as of **31 July 2026**" [L128, L130] | MISSING |
| 20 | **Governing law** | — | **—** no governing-law clause | **—** none. "laws of the Swiss Confederation" [L12] describes only the GmbH's incorporation | **—** no express governing-law clause. AIFC Companies Regulations/Rules incorporated by reference throughout [L31, L55, L66] | MISSING |
| 21 | **Signatory capacity of A. Wiese** | "(Authorised Signatory)" — of an unstated entity | "**Managing Director**" of the GmbH (EN) [L7] / "**Директора**" (RU) [L8] | body: "**Director** of Wiese Advisory GmbH" [L12]; signature block: "**Chief Executive Officer**" / "**Генеральный Директор**" [L43, L48] | signature block: "**Chief Executive Officer**" / "**Генеральный Директор**" [L602, L607] | MISSING |
| 22 | **Language / prevalence clause** | EN text only (slide XML carries `en-US`, `en-GB`, `ru-RU`, `ru-KZ` language attributes) | bilingual EN/RU; **no language or prevalence clause** | bilingual EN/RU; **no language or prevalence clause** | Art. "LANGUAGE AND INTERPRETATION": "both versions having **equal legal force**" [L590] immediately followed by "the **English version shall prevail**" [L591] | MISSING |
| 23 | *(house-keeping)* **Page size** | 13.33″×7.5″ widescreen | **A4** (11906×16838 twips) | **US Letter** (12240×15840 twips) | **A4** | MISSING |
| 24 | *(house-keeping)* **Footer** | n/a | `PAGE` field only (`word/footer1.xml`, `footer2.xml`) | **no header or footer part exists** — no page numbers | "**Classification: Restricted**", centred, on every page; **no page number** (`word/footer1.xml`) | MISSING |

### Facts stated in **no** document

**FINDING TYPE: FACT.** Across all four supplied files, the following are never stated:
A. Wiese's nationality, date of birth, passport/ID number or residential address; his (absent)
Kazakhstan IIN; the GmbH's UBO in terms; the NewCo's registered-office address; the NewCo's
intended AIFC activity codes; any place of execution for the Resolution or the AoA; any witness,
notarial or apostille block in any document.

---

## Inconsistency register

Severity per the shared brief: **BLOCKER / CRITICAL / HIGH / MEDIUM / LOW / TYPOGRAPHICAL**.

| ID | Inconsistency | Evidence | Severity | Type |
|---|---|---|---|---|
| **F8-01** | **Adoption date precedes the FX date it relies on.** The Resolution certifies the resolution was "duly adopted by myself on **25th July 2026**" [RES L12], yet the same resolution fixes the share capital at the NBK rate "effective as of **31 July 2026**" [RES L32]. A resolution cannot on 25 July adopt a rate published six days later. The AoA repeats the 31 July rate [AoA L128] while its cover dates the approving resolution **11 August 2026** [AoA L4] — a **third** date. Filenames add a **fourth**: `26_07_30` = 30 July 2026. | RES L12, L32; AoA L4, L128; filenames | **CRITICAL** | FACT (dates) / LEGAL INTERPRETATION (effect) |
| **F8-02** | **Capital arithmetic does not close.** 100 × KZT 545.5 = **54,550**, not the stated **54,450**. Verified in XML: the figure is `54 450` (non-breaking space) in both languages of both documents. Implied FX: 544.50 (from EUR 100 = 54,450) vs 545.50 (from the nominal value) — digit transposition. | RES L32–33; AoA L128, L130 | **CRITICAL** | FACT |
| **F8-03** | **Amount in words is wrong in both languages.** "KZT 545,5 (five hundred forty five tenge and **five tiyn**)" — 545.5 tenge = 545 tenge and **fifty** tiyn. RU repeats it: "пять тиын". Where figures and words conflict, the words often govern; the words say 545.05. | RES L32–33; AoA L128, L130 | **HIGH** | FACT / LEGAL INTERPRETATION |
| **F8-04** | **CEO appointed whom the Articles disqualify.** AoA Art. 18.2: the CEO "shall be a natural person and **a resident of the Republic of Kazakhstan**" [AoA L367]; AoA definition also requires the CEO to hold an **IIN** [AoA L33]. The Resolution appoints Alexander Wiese (German national, Swiss resident, client-confirmed **no IIN**) as CEO [RES L21]. Two independent AoA qualifications, neither met. | AoA L33, L367; RES L21 | **BLOCKER** | FACT (texts) / LEGAL INTERPRETATION (invalidity) |
| **F8-05** | **Director appointed whom the Articles disqualify.** AoA Art. 17: the Company "must have at least 1 Director, who is a natural person and **has an Individual Identification Number**" [AoA L358]. The Resolution appoints A. Wiese as Director [RES L23]. He has no IIN. On the AoA's own terms the Company would have **zero** qualifying Directors. | AoA L358; RES L23 | **BLOCKER** | FACT / LEGAL INTERPRETATION |
| **F8-06** | **Four different titles for one man.** "Managing Director" of the GmbH [PoA L7]; "Директора" [PoA L8]; "Director" of the GmbH [RES L12]; "Chief Executive Officer" / "Генеральный Директор" in both signature blocks [RES L43, L48; AoA L602, L607]; "Authorised Signatory" on the chart. Swiss GmbH law knows *Geschäftsführer*; "CEO" is not a Swiss corporate office. A registrar or bank comparing the PoA to the signature blocks sees a signatory whose stated capacity changes document to document. | PoA L7–8; RES L12, L43, L48; AoA L602, L607; PPTX *TextBox 22* | **HIGH** | FACT / LEGAL INTERPRETATION |
| **F8-07** | **Actor defect — a director is not the shareholder.** Under the title "RESOLUTION OF **SHAREHOLDER**", the text reads "I, Alexander Wiese … am the duly appointed **Director** of Wiese Advisory GmbH … the resolution … was duly adopted **by myself**" [RES L12]. A director does not pass shareholder resolutions. The Russian title is a third term: "РЕШЕНИЕ **УЧРЕДИТЕЛЯ**" (*founder*) [RES L7–8], and the body uses a fourth, "акционера-учредителя" [RES L19]. | RES L2–4, L7–8, L12, L19 | **CRITICAL** | FACT / LEGAL INTERPRETATION |
| **F8-08** | **Wrong actor adopts the constitution.** "RESOLVED, that **the Wiese Advisory Eurasia Ltd.** duly adopts proposed Articles of Association for the purpose of incorporation of the Company" [RES L29]. The company does not exist and cannot adopt its own constitution. Circular with the AoA cover, which says the AoA was "Approved by Resolution **Of the Shareholder**" [AoA L1–3]. | RES L29–30; AoA L1–3 | **CRITICAL** | FACT / LEGAL INTERPRETATION |
| **F8-09** | **The PoA never names the company being incorporated.** "Wiese Advisory Eurasia" appears **0 times** in the PoA (verified across all `word/*.xml` and `customXml/*` parts). The attorneys are empowered to "incorporate **a** Private Company" and to "**determine and reserve the company name**" [PoA L24, L26]. Combined with the power to "**increase the share capital**", to "approve, execute and file **any amendments** to the Articles" [PoA L81], the **right of substitution** [PoA L83], and the catch-all "any other legal and factual acts" [PoA L81], the instrument authorises incorporation of an unnamed company on unbounded terms. This sits in direct tension with the carefully drafted negative covenants at PoA L66–73. | PoA L16, L24, L26, L66–73, L81, L83 | **HIGH** | FACT / LEGAL INTERPRETATION |
| **F8-10** | **AoA language clause contradicts itself in consecutive sentences.** "both versions having equal legal force" [AoA L590] then "the English version shall prevail" [AoA L591]. Both are repeated in Russian [L592–593]. The clause cannot be applied. | AoA L590–593 | **HIGH** | FACT / LEGAL INTERPRETATION |
| **F8-11** | **English and Russian article numbers do not match — computed from the numbering model.** See **T2-11** below. From "SHARE CERTIFICATES" onward every Russian article heading renders **one lower** than its English counterpart, and the Russian heading numbers contradict the hard-typed Russian sub-clause numbers in the same document (heading "7. СЕРТИФИКАТЫ АКЦИЙ" over clauses typed "8.1–8.5"). Two English headings both render "**1.**". Because the AoA is bilingual and its own prevalence clause is broken (F8-10), a cross-reference in one language does not resolve in the other. | `word/document.xml` + `word/numbering.xml`; AoA L165, L193, L259, L299, L372, L407 | **HIGH** | FACT (numbering model) / LEGAL INTERPRETATION (effect) |
| **F8-12** | **"Authorised Signatory" is an office the Articles do not create.** The Resolution appoints one [RES L26] and the chart names one [PPTX], but the AoA contains no such office and no delegation route to it other than the agent power at Art. 18.3 [AoA L370] and the delegation article [AoA L386]. | RES L26; AoA L370, L386; PPTX | **MEDIUM** | FACT / LEGAL INTERPRETATION |
| **F8-13** | **Authorised vs issued capital conflated.** The AoA calls EUR 100 the "**authorised** share capital" and in the same sentence allots all 100 shares and states the total nominal value of "the **issued and allotted** shares" [AoA L128]. The Resolution calls the same figure capital "formed through a contribution" [RES L32]. Authorised, issued and paid-up are three different things; the drafting leaves no headroom for any future issue without a Special Resolution. | AoA L128; RES L32 | **HIGH** | FACT / LEGAL INTERPRETATION |
| **F8-14** | **A spot FX rate is hard-coded into the constitution.** The AoA permanently records the NBK rate "effective as of 31 July 2026" [AoA L128]. Constitutions are not amended when currencies move; the clause is stale the day after filing and can only be corrected by Special Resolution [AoA L586]. | AoA L128, L586 | **MEDIUM** | LEGAL INTERPRETATION |
| **F8-15** | **Stated business activities do not match the client's confirmed intention.** AoA Art. 4 states "advisory services in the fields of **finance**, corporate governance and business development" [AoA L114]. Client-confirmed intent (shared brief) is **sustainability advisory to UN agencies and MDBs**, non-regulated, no AFSA licence sought. "Advisory services in the field of finance" is the wording most likely to attract an AFSA regulated-activity query. Referred to the AFSA/licensing reviewers. | AoA L114; shared brief | **HIGH** | FACT (mismatch) / referred for LEGAL analysis |
| **F8-16** | **PoA and Resolution are bilingual with no language clause.** Neither instrument says which language governs or that the two texts are one instrument. Where the two texts diverge (F8-17 to F8-19) there is no rule to resolve the divergence. | PoA (whole); RES (whole) | **HIGH** | FACT / LEGAL INTERPRETATION |
| **F8-17** | **PoA: the Russian text defines «Доверитель» (Principal) twice** — once for the GmbH and again, immediately after, for Alexander Wiese personally: "…(далее — «**Доверитель**»), в лице Директора Александра Визе, действующего на основании Устава, именуемому в дальнейшем «**Доверитель**»…" [PoA L8]. The English defines "Principal" once, for the company [PoA L7]. On the Russian text the natural person is also the Principal — a materially different instrument. | PoA L7 vs L8 | **HIGH** | FACT / LEGAL INTERPRETATION |
| **F8-18** | **PoA: AFSA is dropped from the Russian authority list.** English: "…including, without limitation, the AIFC, the **Astana Financial Services Authority (AFSA)**, the Registrar of Companies…" [PoA L16]. Russian: "…включая, помимо прочего, Международный финансовый центр «Астана» (МФЦА), **Регистратора компаний МФЦА**, Комитет государственных доходов…" — **AFSA absent** [PoA L21]. A Russian-reading counterparty sees no authority to appear before the regulator. | PoA L16 vs L21 | **HIGH** | FACT / LEGAL INTERPRETATION |
| **F8-19** | **PoA: further EN/RU divergences.** English "**prepare**, sign, submit, amend, withdraw and receive any applications … required for the **incorporation and registration**" [PoA L28]; Russian omits "prepare" and narrows to "необходимые для **регистрации** компании" [PoA L48]. English refers to "the **Sole Shareholder's Resolution**" [PoA L29] — a fifth name for the Resolution, which is titled "Resolution of Shareholder" / "Решение Учредителя". | PoA L28 vs L48; L29 | **MEDIUM** | FACT |
| **F8-20** | **AoA: the Russian of Art. 18.1 is garbled and changes meaning.** English: managed "by the Directors or by another natural person appointed by the Shareholders or Directors and bearing the title of Chief Executive Officer" [AoA L365]. Russian: "…Директорами или другим назначенным физическим Акционерами лицом, или Директорами и имеющими должность Генерального директора" [AoA L372] — the word order breaks the sentence; on its face the Russian makes the Directors themselves hold the office of CEO. This is the management clause of the company. | AoA L365 vs L372 | **HIGH** | FACT / LEGAL INTERPRETATION |
| **F8-21** | **Resolution: the English says "bye-laws", the Russian says "Устава".** English: "in conformity with the provisions of the **bye-laws** of the Company" [RES L12]; Russian: "соответствует положениям **Устава** Компании" [RES L14]. The translator corrected the offshore term; the English original was never fixed. A Swiss GmbH has *Statuten*; "bye-laws" is Bermuda/Cayman/BVI terminology. | RES L12 vs L14 | **HIGH** | FACT / LEGAL INTERPRETATION |
| **F8-22** | **Corporate structure chart is unsigned, undated and KYC-incomplete.** Blank signature line and blank "Date of signature" line [PPTX *TextBox 22*]. The chart states no registration numbers, no jurisdictions, no legal forms, no UBO label, no date of birth or nationality, and does not say whose "Authorised Signatory" A. Wiese is. It is the **only** document in the package stating any ownership percentage. Bank onboarding normally requires all of the above on a signed, dated structure chart. | PPTX `ppt/slides/slide1.xml` | **HIGH** | FACT / PRACTICAL REQUIREMENT |
| **F8-23** | **Registered office is stated circularly.** "situated in the AIFC … **at the address provided in the public register**" [AoA L107] — the Articles derive the address from the register that will be populated from the filing. No address is stated anywhere in the package. | AoA L107 | **MEDIUM** | FACT / PRACTICAL REQUIREMENT |
| **F8-24** | **Single-director / single-shareholder mechanics only half-adapted.** The general-meeting article carves out the sole shareholder [AoA L266], but the directors' articles do not: quorum is "fixed … by a decision of the Directors" [AoA L452], the chair gets "a second or a casting vote" on tied votes [AoA L448], and decisions require eligible Directors to "indicate **to each other**" a common view [AoA L459]. With one director these provisions are inoperable. Art. 24.11 assumes a "Chair" the company will not have. | AoA L448, L452, L455, L459, L465 | **MEDIUM** | FACT / LEGAL INTERPRETATION |
| **F8-25** | **Undefined term: "Company Regulations".** Art. 14.4 refers to "section 97 of the **Company** Regulations" [AoA L256]. The defined term is "**Companies** Regulations" [AoA L31]. An undefined term in an operative notice-shortening clause. | AoA L31, L256 | **LOW** | FACT |
| **F8-26** | **Broken operative sentence.** "the Company may, by a Resolution **or** suspend or relax any provision of these Articles prohibiting a Director from voting" [AoA L474] — the verb is missing; the clause as written does not parse. | AoA L474 | **LOW** | FACT |
| **F8-27** | **Hard-typed cross-references.** Independent XML check: the AoA contains **zero** field codes (`w:instrText` = 0, `w:fldSimple` = 0). Every cross-reference is typed text, e.g. "For the purposes of **the section 21.3**" [AoA L405, RU L412]. They will not update, and given F8-11 the Russian ones already point to the wrong heading number. | `word/document.xml`; AoA L405, L412 | **MEDIUM** | FACT |
| **F8-28** | **Duplicated words in the Russian capital clause.** "Уставный капитал Компании составляет **100 евро 100 (сто) евро**" [AoA L130]; the Russian sentence also ends with an unclosed bracket and a dropped word: "…составляет 54 450 (пятьдесят четыре тысячи четыреста пятьдесят теңге." [RES L33]. The Russian heading says "**АКЦИОНЕРНЫЙ** капитал" [AoA L126] while the clause body says "**Уставный** капитал" [AoA L130] — two Russian terms for the same concept inside one article. | AoA L126, L130; RES L33 | **TYPOGRAPHICAL** | FACT |
| **F8-29** | **"I are".** "I, Alexander Wiese do hereby certify that **I are** the duly appointed Director" [RES L12]. The Russian mirror has the equivalent defect at PoA L22: "Доверитель настоящим **уполномочиваю**" (third-person subject, first-person verb). English PoA L17 has the same: "**Principal hereby authorize**". | RES L12; PoA L17, L22 | **TYPOGRAPHICAL** | FACT |
| **F8-30** | **"Ltd.." (double full stop) 3× and "the Wiese Advisory Eurasia Ltd." (definite article before a proper name) 6×** in the Resolution; "the opening of bank accounts**..**" in the PoA [L16]; "Wiese Advisory GmbH**.**" on the AoA cover [L3]. Verified by run-merged regex, so these are real characters, not extraction artefacts. | RES L15–32; PoA L16; AoA L3 | **TYPOGRAPHICAL** | FACT |
| **F8-31** | **Kazakh orthography inside the Russian text.** The Russian versions use the Kazakh "**теңге**" rather than the Russian "тенге" [RES L33; AoA L130]. Consistent throughout, so likely deliberate, but inconsistent with a document declared to be in Russian. | RES L33; AoA L130 | **LOW** | FACT |
| **F8-32** | **Package is internally inconsistent on paper size.** PoA and AoA are **A4**; the Resolution is **US Letter** (12240×15840 twips, `word/document.xml` `w:sectPr`). Printed together the Resolution will not match. | `word/document.xml` (all three) | **LOW** | FACT |
| **F8-33** | **No page numbering where it matters.** The 19-page AoA's only footer content is "Classification: Restricted" — **no page number** (`word/footer1.xml`). The 2-page Resolution has **no header or footer part at all**. Constitutional documents and shareholder resolutions filed on a public register normally carry pagination for tamper-evidence. | AoA `word/footer1.xml`; RES part list | **MEDIUM** | FACT / PRACTICAL REQUIREMENT |
| **F8-34** | **AoA(1) not supplied.** Cannot be reconciled. Risk that a different AoA version is executed cannot be excluded. | upload set | **UNCONFIRMED — INPUT MISSING** | FACT |

---

# TASK 2 — TECHNICAL DOCX / PPTX FORENSICS

All results below were re-derived independently with Python (`zipfile` + regex/XML parsing) against
the original uploads. The source files were **not** modified.

## 2.1 Verification of the lead reviewer's findings

| Lead reviewer's finding | My independent result | Verdict |
|---|---|---|
| No tracked changes in any DOCX | `w:ins` = 0, `w:del` = 0, `w:moveFrom` = 0, `w:moveTo` = 0 in all three `word/document.xml`; `<w:trackChanges/>` absent from all three `word/settings.xml` | **CONFIRMED** |
| No comments | no `commentReference` in any document; **no `word/comments*.xml` part exists** in any of the three packages | **CONFIRMED (stronger)** |
| No hidden text | `w:vanish` = 0; additionally `w:highlight` = 0, `w:strike` = 0, no white-on-white (`w:color w:val="FFFFFF"`) = 0 | **CONFIRMED (stronger)** |
| 31 bookmarks in the AoA | exactly **31** `w:bookmarkStart`: 29 `_Toc298285xx` + `_Hlk24106656` + `_Hlk24107451`. Not benign — see **T2-06** | **CONFIRMED as to count; DISAGREE as to significance** |
| AoA footer contains "Classification: Restricted" | `word/footer1.xml` contains exactly one paragraph, centred, Times New Roman 10.5 pt: `Classification: Restricted`. It is the **default** footer, the section has **no `w:titlePg`**, and it is the **only** footer part → it prints on **all 19 pages including page 1** | **CONFIRMED and aggravated** |
| AoA `lastPrinted` 2025-09-23 precedes `created` 2026-01-05 | `docProps/core.xml`: `<cp:lastPrinted>2025-09-23T14:57:00Z</cp:lastPrinted>`, `<dcterms:created>2026-01-05T10:41:00Z</dcterms:created>` | **CONFIRMED** |
| Resolution created 2020-04-30 by "Anara Omarova", revision 39 | `docProps/core.xml`: `dc:creator = Anara Omarova`, `dcterms:created = 2020-04-30T09:31:00Z`, `cp:revision = 39`, `cp:lastModifiedBy = Diana D`, `TotalTime = 312` minutes | **CONFIRMED** |
| PPTX: 1 slide, 0 notes, 0 hidden slides | `docProps/app.xml`: `<Slides>1</Slides><Notes>0</Notes><HiddenSlides>0</HiddenSlides>`; no `notesSlide` part in the package; no `hidden="1"` attribute on the slide | **CONFIRMED** |

**No finding of the lead reviewer was contradicted.** Two are materially understated (bookmarks;
footer scope) and are corrected below.

## 2.2 New technical findings

### T2-01 — The Resolution is a SharePoint/OneDrive document from another organisation's library
**FINDING TYPE: FACT.** `docProps/custom.xml` carries a SharePoint content-type identifier:

```
<property … name="ContentTypeId"><vt:lpwstr>0x0101009D6925198262BD48B1741B7FA53E7BB6</vt:lpwstr></property>
```

`customXml/item3.xml` (12,001 bytes) is the matching SharePoint **content-type schema**, exposing
two library site-column namespace GUIDs — `98769dcb-6259-4fcd-826d-704b491ed513` and
`c7242abf-8b5f-4307-afa1-3ee7db574829` — and the field set of the originating library, including
`SharedWithUsers`, `SharedWithDetails`, `SharingHintHash`, `MediaServiceOCR`, `MediaServiceAutoTags`.
`customXml/item1.xml` is the SharePoint `DocumentLibraryForm` template marker.

**What leaked and what did not.** `customXml/item2.xml` — the part that would hold the *values* of
those fields — is empty (`<documentManagement/>`). **No third party's name, email or account ID is
disclosed.** What is disclosed is that this document was checked out of a document library that is
not the client's, together with that library's content-type ID, version (`contentTypeVersion="11"`),
version hash and two site-column GUIDs. These are stable identifiers: anyone holding another
document from the same library can match them and link the two files.

**Severity: MEDIUM.** No personal data, but it is provenance metadata that a counterparty can
correlate, and it has no business being on a document filed with the AIFC Registrar or sent to a
bank. `AoA` and `PoA` contain **no** `customXml` parts and no `docProps/custom.xml` — the Resolution
is the only contaminated file.

### T2-02 — The Resolution is a fill-in-the-blanks precedent, and the two blanks are the client's name and its jurisdiction
**FINDING TYPE: FACT.** This is the single most direct piece of template evidence in the package.
`word/document.xml` contains exactly **two** content controls (`w:sdt`). Each is a placeholder
control bound to a building block in `word/glossary/document.xml`. Their contents are:

| Control | `w:docPart` GUID | Text currently inside |
|---|---|---|
| 1 | `B19C10C6FB8663439240FAB2CC818BAB` | **"of Wiese Advisory GmbH"** |
| 2 | `48BEDEDC6B54364AAD5CE96B35A66C77` | **"the Swiss Confederation"** |

Both sit inside the certification sentence at RES L12. The glossary's placeholder text for both is
`Место для ввода текста.` — Russian for *"Click here to enter text."*

**Interpretation (LEGAL INTERPRETATION / FACT boundary):** the *fact* is that the entity name and
the governing jurisdiction are the document's two variable fields. The *inference* — which I regard
as unavoidable — is that this Resolution is reused by swapping those two fields, and that nothing
else in the sentence is treated as variable. That is precisely why "**bye-laws**" survived: the
constitutional-document term was never a fill-in field. **This converts the "bye-laws" point from a
typo into a systemic defect** (see Task 3).

Corroborating rsid evidence: the certification paragraph's runs carry rsids `004E7E59` and
`001E5CD6`, and both `w:sdt` elements carry `w:rsidR="004E7E59"` — i.e. the drafter was editing
*inside that exact sentence* in the same save session in which the name and jurisdiction were set,
and left "bye-laws" untouched.

### T2-03 — All three DOCX files descend from one Word document lineage
**FINDING TYPE: FACT.** Revision-save identifiers (rsids) are 32-bit values Word assigns per editing
session; a collision between unrelated documents is ~2⁻³² per pair. Comparing the `<w:rsid>` tables
in `word/settings.xml`:

| Pair | Shared rsids |
|---|---|
| RES ∩ AoA | `000461F7` |
| RES ∩ PoA | `000461F7` |
| AoA ∩ PoA | `000461F7`, `002E0A8C`, `00447299` |
| **All three** | **`000461F7`** |

`000461F7` is present in all three rsid tables but is **used by no paragraph in any of the three
documents** — a dead identifier inherited from a common ancestor. The AoA and PoA share **three**
session identifiers, placing them closer still in the same family.

**Interpretation:** the three instruments are not independently drafted documents that happen to
share a client. They are branches of one house precedent set. Combined with T2-04, the drafting
shop's identity is inferable from the metadata even though it is never named.

### T2-04 — Consistent authoring-environment fingerprint
**FINDING TYPE: FACT.** `dc:creator` is the macOS Word default `Microsoft Office User` on both the
PoA and the AoA (never set to a real name); `cp:lastModifiedBy` is `Diana D` on **all four** files;
`dc:creator` on the PPTX is `Diana D`; the PPTX `Application` is `Microsoft Macintosh PowerPoint`.
Both the PoA and AoA themes are named `Тема Office` (Russian-locale Office) while the Resolution's
is the English `Office Theme`. PPTX shape names are Russian (`Скругленный прямоугольник`,
`Стрелка вниз`, `Прямая со стрелкой`). `Carlito` — the LibreOffice metric-compatible Calibri clone —
appears in the AoA and PoA `fontTable.xml`, indicating at least one pass through LibreOffice.

**Practical consequence:** the metadata identifies the individual who last touched every document in
the package by name (`Diana D`) and identifies a second individual (`Anara Omarova`) who has no
connection to this transaction. If these files are filed or emailed as `.docx`, that is disclosed.
`DocSecurity = 0` and no `w:documentProtection` on any file — all three are freely editable and
carry no final/read-only marking. **Recommendation: file and circulate as PDF with metadata
stripped, or scrub `docProps` before release.**

### T2-05 — "Classification: Restricted" is worse than a stray footer
**FINDING TYPE: FACT.** As set out in 2.1, it is the AoA's **only** footer, **default** type, with no
title-page suppression → it prints on **every page of a 19-page document that is destined for a
public register**. It is also the reason the AoA has **no page numbers**: the footer that would
normally hold the `PAGE` field holds a foreign classification marking instead. (The PoA, by
contrast, does have `PAGE` fields in `footer1.xml`/`footer2.xml`.)

**Reputational read-across:** a document filed publicly and marked "Restricted" invites the question
"restricted by whom, and why is it on the public register?" A bank's compliance team seeing a
constitution stamped with another organisation's confidentiality classification will ask where the
document came from. **Severity: HIGH for filing; the marking must be removed before execution.**

### T2-06 — 31 orphan bookmarks are evidence of clause surgery on a precedent, not navigation artefacts
**FINDING TYPE: FACT.** The AoA contains **zero** field codes, therefore **no table of contents**.
Yet it carries 29 `_Toc` bookmarks — the anchors Word writes when a TOC is generated. They point at
nothing. Their numeric IDs run `_Toc29828558` → `_Toc29828590` and are contiguous **except for four
missing IDs**, mapped here against document order:

| Position in current document | Bookmark |
|---|---|
| INTERPRETATION … LIABILITY OF SHAREHOLDERS | 558–562 |
| *(nothing present here)* | **563 MISSING** |
| SHARE CAPITAL, COMPANY'S SHARES, SHARE CERTIFICATES | 564, 565, 566 |
| **TRANSFER OF SHARES** — heading present, **no bookmark** | **567 MISSING** |
| TRANSMISSION … NUMBER OF DIRECTORS | 568–575 |
| *(nothing present here)* | **576 MISSING** |
| POWERS OF DIRECTORS, SHAREHOLDERS RESERVE POWER | 577, 578 |
| *(nothing present here)* | **579 MISSING** |
| DELEGATION … AMENDMENT OF THESE ARTICLES | 580–590 |
| **LANGUAGE AND INTERPRETATION** — heading present, **no bookmark** | *(after 590)* |

**Interpretation (LEGAL INTERPRETATION / drafting inference):**
1. ID **567** falls exactly where TRANSFER OF SHARES now sits, and that heading has no bookmark →
   the heading was **re-typed or replaced**, destroying its anchor.
2. IDs **563, 576, 579** have **no counterpart in the current text** → three headings present in the
   source precedent were **deleted**. What they were cannot be established from this file alone.
   **UNCONFIRMED** — confirming would require the source precedent or the AIFC model articles.
3. **LANGUAGE AND INTERPRETATION carries no `_Toc` anchor at all** → it was **appended after** the
   precedent's TOC was generated. That is the clause that contradicts itself (F8-10). The forensic
   record and the drafting defect point to the same conclusion: the prevalence clause was bolted on
   late and never reconciled.
4. The two `_Hlk` bookmarks — Word's edit-session markers — sit on **Art. 18.1** ("…bearing the title
   of Chief Executive Officer") and **Art. 21.2** ("However, Directors may appoint additional
   Directors temporarily"). Their IDs (`24106656`, `24107451`) are far **lower** than the `_Toc` IDs
   (`298285xx`), consistent with hand-edits made in an **earlier** session than the TOC generation.
   The CEO management clause is one of only two places in a 19-page document bearing a hand-edit
   marker — and it is one of the clauses that is now defective.

### T2-07 — External links, embedded objects, images
**FINDING TYPE: FACT.** `word/_rels/document.xml.rels` was parsed for every file. **No relationship
of any kind has `TargetMode="External"`** in any of the three DOCX files or in the PPTX. No
`w:hyperlink`, no `w:object` (OLE), no `w:pict`, no `a:blip` (images) in any `document.xml`. No
`oleObject`, `.bin`, `.emf` or media parts exist in any package. `LinksUpToDate = false` and
`HyperlinksChanged = false` throughout.

The only external URLs anywhere in the packages are the two W3C/Dublin Core `schemaLocation`
attributes inside the Resolution's SharePoint schema (`http://dublincore.org/schemas/…`) — inert
boilerplate, not a data path. **No callback, tracking or remote-template link exists. Nothing to
remediate here.**

### T2-08 — Glossary part (Resolution only)
**FINDING TYPE: FACT.** `word/glossary/document.xml` contains exactly two `docPart` entries, both
`bbPlcHdr` placeholder building blocks, matching the two content controls at T2-02. Their only text
is `Место для ввода текста.` under the category `Общие` ("General"). The glossary also drags along
its own `styles.xml` (30,232 B), `settings.xml`, `webSettings.xml` and `fontTable.xml`.
**No third-party content, client name or clause text is present in the glossary.** It leaks nothing;
its significance is as proof of template mechanics (T2-02), and it is ~38 KB of dead weight that
should be removed.

### T2-09 — Fields and instruction text
**FINDING TYPE: FACT.** AoA: `w:instrText` = 0, `w:fldSimple` = 0 — no fields at all, including no
DATE, no cross-reference and no TOC fields. Resolution: 0 fields. PoA: the only fields in the package
are two `PAGE` fields, in `footer1.xml` and `footer2.xml`. Consequence at F8-27: every
cross-reference in the AoA is hard-typed and will silently go stale.

**Ancillary defect:** the PoA declares `<w:footerReference w:type="even" …>` but
`<w:evenAndOddHeaders/>` is **absent** from `word/settings.xml` → `footer1.xml` is an orphan part
that will never render. Cosmetic; **LOW**.

### T2-10 — Languages and fonts
**FINDING TYPE: FACT.**

| File | `w:lang` values found (count) | Notable fonts |
|---|---|---|
| PoA | `ru-RU` (146), `en-US` (135), **`ru-KZ` (5)** | Times New Roman, Calibri, **Carlito** |
| RES | `ru-RU` (169), `en-US` (56) | Times New Roman, Calibri, **`-webkit-standard`** |
| AoA | `ru-RU` (602), **`en-GB` (536)** | Arial, Times New Roman, Calibri, **Carlito** |
| PPTX | `en-US`, `en-GB`, `ru-RU`, `ru-KZ` — **four locales in a 28-word slide** | Aptos, Aptos Display, Arial |

Two observations. First, the AoA is tagged **en-GB** while the PoA and Resolution are **en-US** —
the documents were not spell-checked as one package, which is consistent with independent
precedents (T2-03). Second, **the Resolution's `fontTable.xml` contains `-webkit-standard`**, a
browser default font name that only enters a Word document when text is **pasted from a web page or
an HTML email**. That is direct evidence that part of the Resolution's content arrived via
copy-paste from a browser. **Severity: LOW on its own; corroborative for Task 3.**

### T2-11 — The AoA's article numbering is broken, and the two language versions do not align
**FINDING TYPE: FACT (numbering model) — this is a new finding.**

Because the extracted `.txt` strips auto-numbers, this defect is invisible in the text and only
appears on render. Method: every numbered paragraph in `word/document.xml` was mapped to its
`w:numId`, thence via `word/numbering.xml` to its `w:abstractNumId`, and the level-0 counters were
simulated in document order. Each `abstractNum` holds an independent counter; all level-0 formats
here are `decimal`, `%1.`.

```
numId → abstractNum :  2→8   3→4   4→5   5→1   6→3   7→0   8→6   9→7
English headings use numId 8 (abstract 6).  Russian headings use numId 7 (abstract 0).
```

Three defects fall out:

1. **Duplicate article "1."** — `INTERPRETATION` is numbered off `numId 2` (abstract 8, counter 1)
   while `COMPANY NAME` starts `numId 8` (abstract 6, counter 1). **Both render "1."**
2. **A Russian heading is numbered off the English list.** `АКЦИИ КОМПАНИИ` ("Company's Shares",
   AoA L133) carries `numId 8` — the **English** list — consuming English counter value **7**.
3. **Systematic one-off drift.** From `SHARE CERTIFICATES` onward, every English heading renders one
   higher than its Russian counterpart:

| Article | English renders | Russian renders | Russian sub-clauses hard-typed as |
|---|---|---|---|
| SHARE CERTIFICATES / СЕРТИФИКАТЫ АКЦИЙ | **8** | **7** | 8.1–8.5 [L165–177] |
| TRANSFER OF SHARES / ПЕРЕДАЧА АКЦИЙ | **9** | **8** | 9.1–9.7 [L193–199] |
| NUMBER OF DIRECTORS / КОЛИЧЕСТВО ДИРЕКТОРОВ | **17** | **16** | — |
| POWERS OF DIRECTORS / ПОЛНОМОЧИЯ ДИРЕКТОРОВ | **18** | **17** | 18.1–18.3 [L372–374] |
| APPOINTMENT OF DIRECTORS / НАЗНАЧЕНИЕ ДИРЕКТОРОВ | **21** | **20** | 21.1–21.4, cross-ref "раздела **21.3**" [L407–412] |
| NOTICES / УВЕДОМЛЕНИЯ | **29** | **28** | 29.1–29.8 [L570–582] |
| LANGUAGE AND INTERPRETATION / ЯЗЫК И ТОЛКОВАНИЕ | **31** | **30** | — |

The English auto-numbers match the hard-typed Russian sub-clause numbers (8.x under English Art. 8,
21.x under English Art. 21), confirming the English sequence is the intended one and that the
Russian sub-numbers were transcribed from the English rendering. But the **Russian headings** then
disagree with the **Russian sub-clauses printed beneath them**: a reader of the Russian text sees
"**7.** СЕРТИФИКАТЫ АКЦИЙ" followed by clauses numbered "8.1, 8.2, 8.3, 8.4, 8.5", and
"**20.** НАЗНАЧЕНИЕ ДИРЕКТОРОВ" whose own clause 21.4 cross-refers to "раздела 21.3".

This also means the shared brief's citations (Art. 17 director/IIN; Art. 18.2 CEO residency) are
correct **in the English version only**; in the Russian they are Arts. 16 and 17.1–17.2.

**Caveat (method):** these are the numbers the OOXML numbering model produces. LibreOffice was
unavailable in this environment to render a confirming PDF (`soffice` failed to load the file). The
computation is deterministic and I am confident in it, but **it should be confirmed by opening the
AoA in Microsoft Word and reading the printed numbers** before it is put to the drafters — a
30-second check. Marked **FACT (derived)**, pending that visual confirmation.

**Severity: HIGH.** A constitution whose two equally-authentic language versions carry different
article numbers, and whose Russian headings contradict its Russian clause numbers, cannot be safely
cross-referenced — and its prevalence clause, which would resolve the conflict, is itself broken
(F8-10).

### T2-12 — PPTX: no third-party branding; layout and content weaknesses only
**FINDING TYPE: FACT.** Full inspection of `theme1.xml`, `slideMaster1.xml` and all eleven
`slideLayout*.xml`:

- Theme is the **stock `Тема Office`**. No custom colour scheme, no `srgbClr` overrides on the
  slide, no custom fonts, no logo, no picture parts anywhere in the package. **No residual
  third-party branding of any kind.**
- Master and layouts contain only stock Russian placeholder strings (`Образец заголовка`,
  `Образец текста`) and a fixed date placeholder `24.08.2026`. None of this renders.
- `docProps/thumbnail.jpeg` was extracted and viewed: it depicts the **current** slide. **No earlier
  version leaks through the thumbnail.**
- 8 shapes, 1 connector, 0 pictures, no hidden shapes, no animations, no speaker notes.
- Chart geometry confirms the chain top-to-bottom: **Alexander Wiese** (y=1,737,814) →100 %→ **Wiese
  Advisory GmbH** (y=3,092,997) →100 %→ **Wiese Advisory Eurasia Ltd.** (y=4,450,445).
- The slide is built on **`slideLayout1` — "Титульный слайд" (Title Slide)** — with none of its
  placeholders used; every element is a free-floating text box. Cosmetic; **LOW**.

The PPTX is the cleanest file in the package technically. Its problems are substantive (F8-22), not
forensic.

## 2.3 What would embarrass the client if this package were filed or sent to a bank

Ranked, all **FACT** unless noted:

1. **"Classification: Restricted" on all 19 pages of the constitution** — another organisation's
   confidentiality marking on a public-register document (T2-05). **HIGH.**
2. **`Anara Omarova` named as author of the Resolution** — an individual with no role in this
   transaction, disclosed in `docProps/core.xml` of a document the client will sign. **HIGH.**
3. **SharePoint content-type ID and two site-column GUIDs from a non-client document library**
   (T2-01) — correlatable provenance metadata. **MEDIUM.**
4. **`dcterms:created = 2020-04-30` and `cp:revision = 39` on a 2026 incorporation resolution** — on
   its face, a six-year-old document recycled 39 times. **MEDIUM–HIGH.**
5. **`cp:lastPrinted` (2025-09-23) earlier than `dcterms:created` (2026-01-05)** on the AoA — an
   impossibility that only arises from copying an earlier file. **MEDIUM.**
6. **`cp:lastModifiedBy = Diana D` on all four files**, including the client's own structure chart —
   discloses the service provider's staff member as the last hand on every document. **MEDIUM.**
7. **`-webkit-standard` in the Resolution's font table** — evidence of text pasted from a browser
   into a corporate resolution. **LOW**, but poor optics if noticed.
8. **All files unprotected** (`DocSecurity = 0`, no `documentProtection`) and distributed as
   editable `.docx`. **MEDIUM / PRACTICAL.**

**RECOMMENDATION:** before execution, (a) delete the AoA footer text, (b) run Word's *Document
Inspector* over all three DOCX files to strip document properties, personal information, custom XML
and the Resolution's glossary, (c) re-set `dc:creator`/`lastModifiedBy` or blank them, and (d)
release only flattened PDFs to the Registrar and to banks. None of this cures any substantive defect
in this report; it only stops the metadata from broadcasting them.

---

# TASK 3 — STALE TEMPLATE: THE EVIDENCE

**FINDING TYPE: FACT for each item; the cumulative conclusion is LEGAL INTERPRETATION.**

## 3.1 The Resolution

| # | Evidence | Where |
|---|---|---|
| 1 | Created **2020-04-30**, i.e. **~6 years and 4 months** before the transaction date | `docProps/core.xml` |
| 2 | **`cp:revision = 39`**, `TotalTime = 312` minutes — carried through 39 save cycles | `docProps/core.xml`, `app.xml` |
| 3 | Original author **`Anara Omarova`**; last modifier **`Diana D`** — at least two hands, no continuity with this client | `docProps/core.xml` |
| 4 | **"the provisions of the bye-laws of the Company"** — Bermuda/Cayman/BVI terminology applied to a **Swiss GmbH**, which has *Statuten* | RES L12 |
| 5 | The **Russian mirror of the same sentence says "Устава"** — the translator corrected the term; the English original was never touched | RES L14 |
| 6 | **Two content controls, and only two**, holding "of Wiese Advisory GmbH" and "the Swiss Confederation", with the placeholder prompt *"Место для ввода текста."* — the entity name and the jurisdiction are literally the fill-in fields (**T2-02**) | `word/document.xml`, `word/glossary/document.xml` |
| 7 | The certification paragraph's runs and both content controls share rsid **`004E7E59`** — the drafter edited that exact sentence and left "bye-laws" in it | `word/document.xml` |
| 8 | **US Letter** page size in a package whose other documents are A4 — a US/offshore-origin template | `word/document.xml` `w:sectPr` |
| 9 | **SharePoint content-type ID + library GUIDs** from a foreign document library (**T2-01**) | `docProps/custom.xml`, `customXml/item3.xml` |
| 10 | **`-webkit-standard`** in the font table — content pasted from a browser | `word/fontTable.xml` |
| 11 | **No footer, no header, no page numbers** on a resolution intended to be relied on by a registrar and a bank | package part list |

## 3.2 The Articles of Association

| # | Evidence | Where |
|---|---|---|
| 12 | **`lastPrinted` 2025-09-23 precedes `created` 2026-01-05.** Only possible where the file was created by copying an earlier document — the print event belongs to the parent, not to this file | `docProps/core.xml` |
| 13 | **"Classification: Restricted"** — a foreign template's confidentiality marking, on every page (**T2-05**) | `word/footer1.xml` |
| 14 | **29 orphan `_Toc` bookmarks and no table of contents**, with four IDs missing from an otherwise contiguous run, one heading whose anchor was destroyed, and one heading appended after the TOC was built (**T2-06**) | `word/document.xml` |
| 15 | **Two `_Hlk` edit markers**, one of them sitting on the CEO management clause — a hand-edit to the precedent at exactly the clause that is now defective | `word/document.xml` |
| 16 | **Art. 5 is a resolution clause pasted into a constitution.** The AoA reads: "The authorised share capital of the Company is EUR 100 … **that** for the purpose of forming such capital is allotted 100 … **and that** the total nominal value …" [AoA L128]. Those subordinate clauses have no governing verb — they are orphaned fragments of "**RESOLVED, that** …" [RES L32]. The Resolution's sentence was copied into the Articles without adapting the grammar. **This is textual proof of the direction of copying.** | AoA L128 vs RES L32 |
| 17 | **Numbering built from four different auto-numbering lists** with English and Russian headings drawing on different counters (**T2-11**) — the signature of a document assembled from more than one source | `word/numbering.xml` |
| 18 | **UK/offshore model-articles residue** with no application to a single-member AIFC company: dividends unclaimed for **12 years** may be forfeited [L532]; on the death of all shareholders the personal representatives may appoint a director [L404]; where two shareholders die and the order is uncertain, "a **younger** Shareholder is deemed to have survived an older Shareholder" [L405]; poll/show-of-hands machinery [L279–295]; casting vote of the chair [L448] | AoA L279–295, L404–405, L448, L532 |
| 19 | **Two-person quorum with a single-shareholder carve-out for meetings [L266] but none for the board** [L448–465] — the adaptation was done once and not carried through | AoA L266, L448–465 |
| 20 | **`en-GB` language tagging** against `en-US` in the other two files — a different precedent stream | `word/document.xml` |

## 3.3 The Power of Attorney

| # | Evidence | Where |
|---|---|---|
| 21 | Created **2025-09-20**, `revision 24` — pre-dates the mandate; author left at the macOS default `Microsoft Office User` | `docProps/core.xml` |
| 22 | **Shares three rsids with the AoA** (`000461F7`, `002E0A8C`, `00447299`) — same precedent family (**T2-03**) | `word/settings.xml` |
| 23 | **The target company is never named** — the operative grant is to incorporate "a Private Company" and to "determine and reserve the company name" [L24, L26]. A PoA that does not identify its subject is a template that was never specialised | PoA L16, L24, L26 |
| 24 | **`«11» August 2026`** — CIS notarial date convention (guillemets around the day) imported verbatim into English text | PoA L3–4 |
| 25 | **Orphan even-page footer** referenced but never rendered (**T2-09**) | `word/settings.xml`, `document.xml` |

## 3.4 Search for other jurisdictions, other entities and placeholder text

**FINDING TYPE: FACT.** All `word/*.xml` and `customXml/*.xml` parts of all three DOCX files were
concatenated at the `<w:t>` level (so text split across runs is caught) and searched for 60 terms:
21 offshore and other financial-centre jurisdictions (Bermuda, BVI, Cayman, Jersey, Guernsey,
Delaware, DIFC, ADGM, Seychelles, Belize, Panama, Mauritius, Gibraltar, Isle of Man, Luxembourg,
Cyprus, Malta, Singapore, Hong Kong, Dubai, Abu Dhabi), the usual placeholder markers
(`[ ]`, `XXX`, `TBD`, `TBC`, `N/A`, `Insert`, `Lorem`, `Sample`, `Template`, `DRAFT`), and the names
of every person appearing in the metadata.

**Result — the good news:**

- **No foreign jurisdiction is named in the text of any document.** Zero hits on all 21 terms.
- **No other company name appears** in any document.
- **No unfilled placeholder or bracket text remains** in any document.
- **No name from the metadata** (`Anara Omarova`, `Diana D`, `Microsoft Office User`) appears in any
  visible text.

**The only textual survivor of the precedent's origin is "bye-laws"** — one word, in one sentence, in
the English text of the Resolution. Everything else that betrays the templates' provenance lives in
the metadata, the numbering model, the bookmarks and the file structure, not in the words a reader
sees.

## 3.5 Conclusion on Task 3

**FINDING TYPE: LEGAL INTERPRETATION (drafting-quality assessment).**

These are reused precedents. The evidence is not circumstantial: the Resolution's own content
controls show that the entity name and the jurisdiction are its only variable fields (T2-02); the
AoA's Art. 5 retains the orphaned subordinate grammar of the Resolution clause it was pasted from
(item 16); the three files share dead revision identifiers from a common ancestor (T2-03); and the
AoA's bookmark record shows clauses deleted from, and appended to, a precedent whose table of
contents was generated in a different document (T2-06).

The material point is not that precedents were used — that is normal and efficient — but **what the
reuse pattern predicts about where errors will be**. The Resolution's template exposes exactly two
variables. Everything outside those two variables was, by construction, not reviewed for this
transaction. That is consistent with what the substantive review found: the errors cluster precisely
in the un-varied material — the constitutional-document term ("bye-laws"), the actor of the
resolution ("Director" under a "SHAREHOLDER" heading), the party adopting the Articles ("the
Company" adopting its own constitution), the residency and IIN qualifications inherited from a
standard AIFC precedent that assumed a Kazakh-resident officer, and the arithmetic of a capital
clause that was copied twice and checked never.

**The single highest-value remediation is therefore not textual editing.** It is to stop treating
these documents as filled-in forms and to re-read them once, end to end, against the actual facts of
this transaction: a German national resident in Switzerland, with no IIN, who is both the sole UBO
and the intended sole officer of an AIFC private company whose parent is a Swiss GmbH.

---

## Summary of severities raised by this reviewer

| Severity | IDs |
|---|---|
| **BLOCKER** | F8-04, F8-05 |
| **CRITICAL** | F8-01, F8-02, F8-07, F8-08 |
| **HIGH** | F8-03, F8-06, F8-09, F8-10, F8-11, F8-13, F8-15, F8-16, F8-17, F8-18, F8-20, F8-21, F8-22; T2-05, T2-11 |
| **MEDIUM** | F8-12, F8-14, F8-19, F8-23, F8-24, F8-27, F8-33; T2-01, T2-04, T2-06 |
| **LOW** | F8-25, F8-26, F8-31, F8-32; T2-09, T2-10, T2-12 |
| **TYPOGRAPHICAL** | F8-28, F8-29, F8-30 |
| **UNCONFIRMED — INPUT MISSING** | F8-34 (AoA(1).docx) |

**Source documents were not modified.** All analysis was performed on read-only copies of the
uploads and on the shared text extractions.
