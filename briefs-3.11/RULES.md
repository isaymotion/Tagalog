# Usap Tayo: rules for every writer

Usap Tayo is a web app that teaches Tagalog to English speakers, used by psychiatry residents and nurses at a
Philippine public hospital (Mariveles, Bataan). The app repo is at /home/claude/tagalog (READ ONLY for you: never
edit, commit or push there). Write your output ONLY to the file named in your task, and write it early (save a first
version as soon as you have some items, then extend it), so nothing is lost if you are cut off.

## Language
- Natural, conversational Manila / Central Luzon Tagalog as patients, families, nurses and doctors really speak it.
  Not textbook-stiff, not deep literary Filipino unless the item is about formal Filipino.
- Everything must be correct for a careful native speaker: focus (um / mag / in / i / an), aspect, markers
  (ang / ng / sa, si / ni / kay), linkers (na / -ng), enclitic order (ko, mo, ka, na, pa, po, ba, lang, raw / daw, din / rin).
  Use raw / rin / dito-rito after a vowel sound and daw / din / dito after a consonant in model answers.
  ng vs nang: ng = marker of a noun; nang = when / so that / adverb linker ("tumakbo nang mabilis").
- Respectful forms use po and kayo / ninyo / inyo; everyday forms use ka / mo / iyo.
- Spelling: standard modern Filipino (puwede, kuwarto, suweldo, piyesta, doktor, nars, ospital, gamot, kumusta).
  English loans used in real speech are fine when a Filipino would say them (cellphone, check-up), but keep them few.
- NEVER write a Tagalog word in ALL CAPITALS (the voice would spell it). No acronyms (BP, CR, TV, OPD, ID) and no
  "Dr." / "Doc" in Tagalog sentences. Write numbers as words in Tagalog sentences ("alas tres", "dalawang tableta").
- NEVER use accented letters (á, â, ô …) in any Tagalog sentence. The voice drops them.
- No brand names. No real people. Invented first names only (Ana, Ben, Aling Rosa, Mang Tonyo, Liza, Carlo).
- No stigmatizing words (baliw, adik, sira-ulo, loko-loko) anywhere.
- No em dashes used as asides in English text. Plain, active English. British/American spelling: follow American.
- Clinical content: keep it safe and plain. Do not write sentences that encourage self-harm, and do not write dosing
  advice (a neutral "dalawang tableta sa gabi" as an example of a number is fine).
- About a third of the examples should come from the ward, clinic or family visit; the rest from everyday life.

## JavaScript
- Strings in single quotes; escape an apostrophe as \' (or use backticks for a lesson body).
- The file must load with `node -e "global.window=global; require('<your file>')"` without error. Run that before you finish.
- Do not repeat a sentence that already exists in the app when you were told to avoid duplicates.

## When done
Reply with: the file path, the item counts, and a short list of any item where two natural wordings exist and you had
to choose (so the owner, a native speaker, can check those first).
