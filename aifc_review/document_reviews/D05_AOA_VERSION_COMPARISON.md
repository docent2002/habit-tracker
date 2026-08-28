# D05 — AoA VERSION COMPARISON

**STATUS: CANNOT BE PERFORMED — INPUT MISSING**
**FINDING TYPE: FACT**
**Issue ID: DOC-001**

## 1. What was mandated

Mandate §1 requires a forensic comparison of two Articles of Association files:

- `26 01 089 _ AoA.docx`
- `26 01 089 _ AoA(1).docx`

with an explicit instruction *"Do not accidentally treat the two AoA files as one file"*, and a
determination of whether they are byte-identical and whether their XML, visible text, formatting,
metadata, tracked changes or substantive clauses differ.

## 2. What was actually supplied

The upload set contains **four** files. Only **one** Articles of Association file is present:

| Expected | Supplied? | MD5 |
|---|---|---|
| `26 01 089 _ AoA.docx` | **YES** — as `876e0e98-26_01_089___AoA.docx` | `5592357b3fa586049f281648a3501d2f` |
| `26 01 089 _ AoA(1).docx` | **NO — absent from the upload set** | n/a |

Directory listing of the upload set confirms four files only: the PPTX, the PoA, the Resolution and
a single AoA.

## 3. Conclusion

No comparison is possible. Every comparison dimension is therefore recorded as **UNCONFIRMED —
INPUT MISSING**, not as "identical" and not as "different":

| Dimension | Result |
|---|---|
| Byte-identical? | UNCONFIRMED — INPUT MISSING |
| DOCX XML differences | UNCONFIRMED — INPUT MISSING |
| Visible text differences | UNCONFIRMED — INPUT MISSING |
| Formatting differences | UNCONFIRMED — INPUT MISSING |
| Metadata differences | UNCONFIRMED — INPUT MISSING |
| Tracked changes / comments | UNCONFIRMED — INPUT MISSING |
| Which is newer | UNCONFIRMED — INPUT MISSING |
| Substantive clause differences | UNCONFIRMED — INPUT MISSING |

**No comparison has been simulated, inferred or reconstructed.** Reporting a result here without
the second file would be fabrication, and the mandate's evidence standard (§28) forbids presenting
an assumption as fact.

## 4. Why this matters beyond the review

**FINDING TYPE: LEGAL INTERPRETATION.** If two AoA versions are genuinely in circulation between
the client and the service provider, that is itself a live filing risk independent of their
contents:

1. The wrong version may be executed, apostilled or filed.
2. The version the client approves may not be the version submitted to the Registrar.
3. Constitutional documents are the company's foundational instrument; ambiguity about which text
   was adopted is expensive to unwind after incorporation.

The single AoA that *was* supplied bears strong evidence of being a reused precedent
(`lastPrinted` 2025-09-23 predating `created` 2026-01-05; a foreign `Classification: Restricted`
footer; 22 revisions), which makes multiple circulating drafts more plausible, not less.

## 5. Action required

**Decision D-DOC-001 for Sasha / the service provider — resolve before any execution:**

- (a) Does a second AoA version exist? If yes, supply it and this comparison will be completed.
- (b) If only one version exists, confirm that `26 01 089 _ AoA.docx`
      (MD5 `5592357b3fa586049f281648a3501d2f`) is the **single authoritative draft**, and record
      that MD5 in the filing file so the executed version can be proven to match the approved one.

Until (a) or (b) is answered, **version control over the constitutional document is not
established**, and no AoA should be signed or apostilled.

## 6. Effect on the rest of the review

All AoA findings in `D04_ARTICLES_OF_ASSOCIATION.md`, `R01`, `R07` and `R08` relate **solely** to
the single supplied file identified by the MD5 above. If a second version exists, those findings
must be re-run against it before reliance.
