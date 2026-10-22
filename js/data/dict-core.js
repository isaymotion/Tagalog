/* Dictionary part 1: core words.
   Format per line: tagalog | english | part of speech | category | root (optional) | note (optional)
   To add words, append lines in the same format. */
window.DICT_RAW = window.DICT_RAW || [];
window.DICT_RAW.push(`
oo|yes|interj|basics
opo|yes (polite, to elders/strangers)|interj|basics||Use with older people, patients, and anyone you address formally.
oho|yes (polite, softer than opo)|interj|basics
hindi|no; not|adv|basics
hindi po|no (polite)|phr|basics
salamat|thank you|interj|basics
salamat po|thank you (polite)|phr|basics
maraming salamat|thank you very much|phr|basics
walang anuman|you're welcome|phr|basics
paumanhin|excuse me; pardon (formal)|interj|basics
pasensya na|sorry; please bear with me|phr|basics||Everyday apology for inconvenience.
patawad|forgiveness; I'm sorry (deep)|n|basics|tawad
sori|sorry (Taglish)|interj|basics
makikiraan po|excuse me, may I pass|phr|basics|daan
tao po|anyone home? (said at a door)|phr|basics
magandang umaga|good morning|phr|basics|ganda
magandang tanghali|good noon (around 12pm)|phr|basics|ganda
magandang hapon|good afternoon|phr|basics|ganda
magandang gabi|good evening|phr|basics|ganda
kumusta|how are you; hello|interj|basics||From Spanish ¿cómo está?
mabuti|good; well; fine|adj|basics|buti
mabuti naman|I'm fine|phr|basics|buti
ayos lang|I'm okay; it's fine|phr|basics|ayos
paalam|goodbye|interj|basics|alam
ingat|take care|interj|basics||Short for mag-ingat ka.
mag-ingat ka|take care (of yourself)|phr|basics|ingat
sige|okay; go ahead; bye|interj|basics
tara|let's go; come on|interj|basics
halika|come here|interj|basics
teka|wait (a moment)|interj|basics
sandali|a moment; wait|n|basics
sandali lang|just a moment|phr|basics|sandali
ano|what|pron|questions
sino|who|pron|questions
saan|where (place of action)|adv|questions
nasaan|where is (location of something)|adv|questions
kailan|when|adv|questions
bakit|why|adv|questions
paano|how|adv|questions
ilan|how many|adv|questions
magkano|how much (price)|adv|questions
alin|which|pron|questions
kanino|whose; to whom|pron|questions
gaano|how (to what degree)|adv|questions
gaano katagal|how long (time)|phr|questions|tagal
gaano kadalas|how often|phr|questions|dalas
ilang taon|how old; how many years|phr|questions|taon
ba|question particle|part|particles||Turns a statement into a yes/no question. Comes after the first word or phrase.
po|politeness particle|part|particles||Shows respect. Use with elders, patients, strangers, superiors.
ho|politeness particle (softer, casual-polite)|part|particles
na|already; now; linker|part|particles||As an adverb: already/now. As a linker: joins words after consonants.
pa|still; yet; more|part|particles
naman|on the other hand; softener|part|particles||Softens requests or adds contrast: Ikaw naman? (How about you?)
kasi|because; you see|conj|particles
nga|really; indeed; please (softener)|part|particles
lang|just; only|part|particles||Short for lamang.
lamang|only; just (formal)|adv|particles
din|also; too (after consonants)|part|particles
rin|also; too (after vowels)|part|particles
daw|reportedly; they say (after consonants)|part|particles
raw|reportedly; they say (after vowels)|part|particles
yata|maybe; I think|part|particles
sana|hopefully; I wish; should have|part|particles
pala|oh, so...! (realization)|part|particles
muna|first (before anything else); for now|part|particles
kaya|so; therefore; can|conj|particles
at|and|conj|grammar
o|or|conj|grammar
pero|but|conj|grammar
ngunit|but (formal)|conj|grammar
dahil|because|conj|grammar
kung|if; whether|conj|grammar
kapag|when; whenever; if|conj|grammar
pag|when; if (short for kapag)|conj|grammar
habang|while|conj|grammar
para|for; in order to|prep|grammar
para sa|for (someone)|prep|grammar
tungkol sa|about|prep|grammar
mula sa|from|prep|grammar
hanggang|until; up to|prep|grammar
ang|topic marker (common nouns)|part|grammar
ng|non-topic marker (of; by)|part|grammar||Pronounced "nang".
sa|location/direction marker (in, at, to)|part|grammar
mga|plural marker|part|grammar||Pronounced "ma-NGA".
si|topic marker for names|part|grammar
ni|non-topic marker for names|part|grammar
kay|direction marker for names (to, for)|part|grammar
sina|plural of si|part|grammar
nina|plural of ni|part|grammar
kina|plural of kay|part|grammar
ay|inversion marker (is)|part|grammar
may|there is; has (followed by noun)|v|grammar
mayroon|there is; has|v|grammar
meron|there is; has (spoken)|v|grammar
wala|there is none; nothing; absent|adj|grammar
huwag|don't|adv|grammar
ako|I|pron|pronouns
ko|my; by me|pron|pronouns
akin|mine; to me|pron|pronouns
ikaw|you (singular)|pron|pronouns
ka|you (singular, after a word)|pron|pronouns
mo|your; by you|pron|pronouns
iyo|yours; to you|pron|pronouns
siya|he; she|pron|pronouns||Tagalog pronouns have no gender.
niya|his; her; by him/her|pron|pronouns
kaniya|his; hers; to him/her|pron|pronouns
kami|we (excluding listener)|pron|pronouns
namin|our (excl.); by us|pron|pronouns
amin|ours (excl.); to us|pron|pronouns
tayo|we (including listener)|pron|pronouns
natin|our (incl.); by us|pron|pronouns
atin|ours (incl.); to us|pron|pronouns
kita|I ... you (ko + ikaw)|pron|pronouns||Mahal kita = I love you.
kayo|you (plural or polite singular)|pron|pronouns||Use kayo for one older person to show respect.
ninyo|your (plural/polite)|pron|pronouns
inyo|yours (plural/polite)|pron|pronouns
sila|they|pron|pronouns
nila|their; by them|pron|pronouns
kanila|theirs; to them|pron|pronouns
ito|this|pron|pronouns
iyan|that (near listener)|pron|pronouns
iyon|that (far from both)|pron|pronouns
dito|here|adv|pronouns
diyan|there (near you)|adv|pronouns
doon|over there|adv|pronouns
ganito|like this|adv|pronouns
ganyan|like that|adv|pronouns
ganoon|like that (far)|adv|pronouns
lahat|all; everyone|pron|basics
wala na|none anymore; gone|phr|basics
isa|one|num|numbers
dalawa|two|num|numbers
tatlo|three|num|numbers
apat|four|num|numbers
lima|five|num|numbers
anim|six|num|numbers
pito|seven|num|numbers
walo|eight|num|numbers
siyam|nine|num|numbers
sampu|ten|num|numbers
labing-isa|eleven|num|numbers
labindalawa|twelve|num|numbers
labinlima|fifteen|num|numbers
dalawampu|twenty|num|numbers
tatlumpu|thirty|num|numbers
apatnapu|forty|num|numbers
limampu|fifty|num|numbers
sandaan|one hundred|num|numbers||Also isang daan.
isang libo|one thousand|num|numbers|libo
milyon|million|num|numbers
una|first|adj|numbers
ikalawa|second|adj|numbers|dalawa
ikatlo|third|adj|numbers|tatlo
kalahati|half|n|numbers|hati
uno|one (Spanish)|num|numbers||Spanish numbers are used for time and money.
dos|two (Spanish)|num|numbers
tres|three (Spanish)|num|numbers
kuwatro|four (Spanish)|num|numbers
singko|five (Spanish)|num|numbers
sais|six (Spanish)|num|numbers
siyete|seven (Spanish)|num|numbers
otso|eight (Spanish)|num|numbers
nuwebe|nine (Spanish)|num|numbers
diyes|ten (Spanish)|num|numbers
onse|eleven (Spanish)|num|numbers
dose|twelve (Spanish)|num|numbers
beinte|twenty (Spanish)|num|numbers
treinta|thirty (Spanish)|num|numbers
singkwenta|fifty (Spanish)|num|numbers
siyento|one hundred (Spanish)|num|numbers
alas-|o'clock (Spanish-derived time prefix)|part|time||alas-tres = 3 o'clock; ala-una = 1 o'clock.
ala-una|one o'clock|phr|time
alas-dos|two o'clock|phr|time
alas-tres|three o'clock|phr|time
alas-sais|six o'clock|phr|time
alas-diyes|ten o'clock|phr|time
y medya|thirty (half past)|phr|time||alas-tres y medya = 3:30
oras|hour; time|n|time
minuto|minute|n|time
segundo|second|n|time
araw|day; sun|n|time
linggo|week|n|time
Linggo|Sunday|n|time
Lunes|Monday|n|time
Martes|Tuesday|n|time
Miyerkules|Wednesday|n|time
Huwebes|Thursday|n|time
Biyernes|Friday|n|time
Sabado|Saturday|n|time
buwan|month; moon|n|time
taon|year|n|time
ngayon|now; today|adv|time
ngayong araw|today|phr|time|araw
kahapon|yesterday|adv|time|hapon
bukas|tomorrow; open|adv|time
mamaya|later (today)|adv|time
kanina|earlier (today)|adv|time
kagabi|last night|adv|time|gabi
mamayang gabi|tonight|phr|time|gabi
noon|then; at that time (past)|adv|time
dati|before; formerly|adv|time
palagi|always|adv|time
lagi|always|adv|time
minsan|sometimes; once|adv|time
madalas|often|adv|time|dalas
bihira|rarely|adv|time
hindi kailanman|never|phr|time
umaga|morning|n|time
tanghali|noon; midday|n|time
hapon|afternoon|n|time
gabi|night; evening|n|time
hatinggabi|midnight|n|time
madaling-araw|dawn; early morning (before sunrise)|n|time
nakaraan|past; last (previous)|adj|time|daan
noong isang linggo|last week|phr|time
susunod|next|adj|time|sunod
sa susunod na linggo|next week|phr|time|sunod
Enero|January|n|time
Pebrero|February|n|time
Marso|March|n|time
Abril|April|n|time
Mayo|May|n|time
Hunyo|June|n|time
Hulyo|July|n|time
Agosto|August|n|time
Setyembre|September|n|time
Oktubre|October|n|time
Nobyembre|November|n|time
Disyembre|December|n|time
Pasko|Christmas|n|time
Bagong Taon|New Year|n|time
Undas|All Saints' / All Souls' Day|n|time||Nov 1–2, families visit the dead.
pula|red|adj|colors
asul|blue|adj|colors
bughaw|blue (formal)|adj|colors
dilaw|yellow|adj|colors
berde|green|adj|colors
luntian|green (formal)|adj|colors
puti|white|adj|colors
itim|black|adj|colors
kayumanggi|brown|adj|colors
kulay-abo|gray|adj|colors
rosas|pink; rose|adj|colors
lila|purple|adj|colors
kahel|orange (color)|adj|colors
kulay|color|n|colors
tao|person; human|n|people
mga tao|people|n|people|tao
lalaki|man; male|n|people
babae|woman; female|n|people
bata|child; young|n|people
sanggol|baby; infant|n|people
binata|young man (single)|n|people
dalaga|young woman (single)|n|people
matanda|old person; elderly; old|n|people|tanda
kaibigan|friend|n|people|ibig
kapitbahay|neighbor|n|people|bahay
kasama|companion; with|n|people|sama
bisita|visitor; guest|n|people
estranghero|stranger|n|people
pangalan|name|n|people
edad|age|n|people
pamilya|family|n|family
mag-anak|family (formal)|n|family|anak
nanay|mother; mom|n|family
ina|mother (formal)|n|family
inay|mom (address)|n|family
tatay|father; dad|n|family
ama|father (formal)|n|family
itay|dad (address)|n|family
magulang|parent|n|family|gulang
anak|child (son or daughter)|n|family
anak na lalaki|son|phr|family|anak
anak na babae|daughter|phr|family|anak
kapatid|sibling|n|family
kuya|older brother; respectful address for older male|n|family||Also used for drivers, guards, and male staff older than you.
ate|older sister; respectful address for older female|n|family||Also used for female staff older than you.
bunso|youngest child|n|family
panganay|eldest child|n|family
asawa|spouse; husband; wife|n|family
mister|husband (colloquial)|n|family
misis|wife (colloquial)|n|family
lolo|grandfather|n|family
lola|grandmother|n|family
apo|grandchild|n|family
tito|uncle|n|family
tiyo|uncle|n|family
tita|aunt|n|family
tiya|aunt|n|family
pamangkin|niece; nephew|n|family
pinsan|cousin|n|family
biyenan|parent-in-law|n|family
manugang|son- or daughter-in-law|n|family
bayaw|brother-in-law|n|family
hipag|sister-in-law|n|family
ninong|godfather|n|family
ninang|godmother|n|family
inaanak|godchild|n|family|anak
kumpare|co-parent (male); close buddy|n|family
kumare|co-parent (female); close friend|n|family
kasintahan|boyfriend; girlfriend (formal)|n|family
nobyo|boyfriend|n|family
nobya|girlfriend|n|family
jowa|partner (slang)|n|family
balo|widow; widower|n|family
biyudo|widower|n|family
biyuda|widow|n|family
hiwalay|separated|adj|family
kasal|wedding; married|n|family
binyag|baptism|n|family
lamay|wake (for the dead)|n|family
libing|burial; funeral|n|family
patay|dead|adj|family
namatay|died|v|family|patay
yumao|passed away (polite)|v|family
`);
