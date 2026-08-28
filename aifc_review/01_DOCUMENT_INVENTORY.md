# 01 — DOCUMENT INVENTORY

Review date: 2026-08-28

## A. Files actually received (4, not 5)

| # | File as supplied | MD5 | Size | Type |
|---|---|---|---|---|
| 1 | `13bb1101-Corporate_Structure.pptx` | `e8071dae8471b8c4c0025a4e5afdd1b6` | 39,034 B | PPTX, 1 slide |
| 2 | `1f18f06f-26_07_30_POWER_OF_ATTORNEY_registration.docx` | `7780dc5e5b8a1ae407b43ea97cb9030d` | 31,261 B | DOCX, 4 pages |
| 3 | `5024e711-26_07_30___Resolution_on_Incorporation.docx` | `247981f722ca5e187952049d24ed8270` | 37,295 B | DOCX, 2 pages |
| 4 | `876e0e98-26_01_089___AoA.docx` | `5592357b3fa586049f281648a3501d2f` | 68,103 B | DOCX, 19 pages |

## B. SCOPE EXCEPTION — the fifth document was not supplied

**FINDING TYPE: FACT**

The mandate (§1) requires review of five documents, including a second Articles file
`26 01 089 _ AoA(1).docx`, and requires a forensic comparison of the two AoA versions.

**Only one AoA file was uploaded.** There is no `AoA(1).docx` in the upload set.

Consequences:
- `D05_AOA_VERSION_COMPARISON.md` **cannot be completed** as specified. No byte, XML, text,
  formatting, metadata or clause comparison is possible against a file that is absent.
- No comparison has been simulated or inferred. Reported as **UNCONFIRMED / MISSING INPUT**.
- Issue **DOC-001 (BLOCKER for the review, not for the filing)** raised in the Issue Register.

**Action required from Sasha:** confirm whether (a) a second AoA version exists and should be
supplied, or (b) only one AoA version exists and the mandate's reference to two files is an error.

Until resolved, no conclusion is drawn about whether two divergent AoA versions are circulating.
If two versions do exist and differ, that is itself a filing risk (wrong version executed).

## C. Document metadata (forensic)

| Field | PoA | Resolution | AoA | Structure chart |
|---|---|---|---|---|
| `dc:creator` | Microsoft Office User | **Anara Omarova** | Microsoft Office User | Diana D |
| `cp:lastModifiedBy` | Diana D | Diana D | Diana D | Diana D |
| `dcterms:created` | 2025-09-20 | **2020-04-30** | 2026-01-05 | 2026-08-19 |
| `dcterms:modified` | 2026-08-24 | 2026-08-25 | 2026-08-25 | 2026-08-24 |
| `cp:revision` | 24 | **39** | 22 | 2 |
| `cp:lastPrinted` | — | — | **2025-09-23** | — |
| Pages / words | 4 / 1,521 | 2 / 669 | 19 / 8,216 | 1 slide / 28 words |

### Metadata observations

1. **Resolution created 2020-04-30, revision 39, original author "Anara Omarova".**
   FINDING TYPE: FACT. The Resolution is a ~6-year-old template carried through 39 revisions by
   at least two authors. Corroborates the stale-template language found in its text (see DOC-004,
   reference to "bye-laws").

2. **AoA `lastPrinted` (2025-09-23) precedes `created` (2026-01-05).**
   FINDING TYPE: FACT. This is only possible where a document was created by copying an earlier
   file, and is direct evidence that the AoA is a reused precedent rather than a fresh draft.

3. **AoA footer contains `Classification: Restricted`.**
   FINDING TYPE: FACT. A confidentiality marking belonging to another organisation's document
   template has been left in the footer of a document intended for filing on a public register.
   Should be removed before execution (DOC-002).

4. No tracked changes (`w:ins` / `w:del`), no comments, and no hidden text (`w:vanish`) were found
   in any of the three DOCX files. 31 bookmarks exist in the AoA (benign, navigation artefacts).

5. PPTX: 1 slide, **0 speaker notes, 0 hidden slides**, no embedded objects beyond the theme.
   No concealed content.

## D. Extracted working copies

Plain-text extractions used by all reviewers (do not edit source files):

```
<scratchpad>/extract/1f18f06f-26_07_30_POWER_OF_ATTORNEY_registration.docx.txt
<scratchpad>/extract/5024e711-26_07_30___Resolution_on_Incorporation.docx.txt
<scratchpad>/extract/876e0e98-26_01_089___AoA.docx.txt
```

Source documents have **not** been modified, consistent with §27 of the mandate.
