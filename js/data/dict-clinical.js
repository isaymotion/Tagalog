/* Dictionary part 3: health, emotions, mind, psychiatry, folk beliefs.
   Format: tagalog|english|pos|category|root|note
   Clinical phrasing is for practice. Confirm local usage with your supervisors and patients. */
window.DICT_RAW = window.DICT_RAW || [];
window.DICT_RAW.push(`
sakit|illness; pain|n|health
may sakit|sick; has an illness|phr|health|sakit
masakit|painful; hurts|adj|health|sakit
sumasakit|is hurting (ongoing)|v|health|sakit
sakit ng ulo|headache|phr|health|sakit
lagnat|fever|n|health
nilalagnat|has a fever|v|health|lagnat
ubo|cough|n|health
inuubo|is coughing|v|health|ubo
sipon|colds; runny nose|n|health
sinisipon|has a cold|v|health|sipon
pagsusuka|vomiting|n|health|suka
nagsusuka|is vomiting|v|health|suka
pagtatae|diarrhea|n|health|tae
nagtatae|has diarrhea|v|health|tae
hilo|dizziness|n|health
nahihilo|is dizzy|v|health|hilo
pagkahilo|dizziness|n|health|hilo
nanghihina|feeling weak|v|health|hina
panghihina|weakness|n|health|hina
pamamanhid|numbness|n|health|manhid
namamanhid|is numb|v|health|manhid
pangangatog|shaking; trembling|n|health|katog
nanginginig|trembling; shivering|v|health|nginig
panginginig|tremor; trembling|n|health|nginig
paninigas|stiffness|n|health|tigas
naninigas|is stiffening; rigid|v|health|tigas
kombulsiyon|convulsion; seizure|n|health
kumbulsyon|seizure (spoken)|n|health
nangisay|had a seizure; convulsed|v|health|kisay
nawalan ng malay|lost consciousness; fainted|phr|health|malay
nahimatay|fainted|v|health|himatay
hinimatay|fainted|v|health|himatay
sugat|wound|n|health
pasa|bruise|n|health
peklat|scar|n|health
pilay|sprain; limp|n|health
bali|fracture|n|health
pamamaga|swelling|n|health|maga
namamaga|swollen|v|health|maga
kati|itch|n|health
makati|itchy|adj|health|kati
pantal|rash; hives|n|health
alta-presyon|hypertension|n|health
high blood|high blood pressure; also slang for getting angry|n|health||"Na-high blood ako" can mean "I got really angry."
diyabetis|diabetes|n|health
asukal sa dugo|blood sugar|phr|health
hika|asthma|n|health
kanser|cancer|n|health
istrok|stroke|n|health
atake sa puso|heart attack|phr|health|atake
buntis|pregnant|adj|health
nagbubuntis|is pregnant|v|health|buntis
regla|menstruation|n|health
mens|period (spoken)|n|health
nanganak|gave birth|v|health|anak
panganganak|childbirth|n|health|anak
nakunan|had a miscarriage|v|health|kuha
gamot|medicine; medication|n|health
uminom ng gamot|take medicine|phr|health|inom
reseta|prescription|n|health
tableta|tablet|n|health
kapsula|capsule|n|health
iniksiyon|injection|n|health
turok|injection; shot|n|health
dosis|dose|n|health
epekto|effect|n|health
side effect|side effect|n|health
allergy|allergy|n|health
bakuna|vaccine|n|health
check-up|check-up|n|health
pagsusuri|examination; test|n|health|suri
eksamen|exam|n|health
laboratoryo|laboratory|n|health
resulta|result|n|health
operasyon|operation; surgery|n|health
maospital|to be hospitalized|v|health|ospital
na-ospital|was hospitalized|v|health|ospital
na-admit|was admitted|v|health
admit|admission|n|health
pasyente|patient|n|health
bantay|watcher; companion at hospital bedside|n|health||Filipino patients usually have a family "bantay" who stays with them.
emerhensiya|emergency|n|health
ambulansya|ambulance|n|health
timbang|weight|n|health
pumayat|lost weight|v|health|payat
payat|thin|adj|health
tumaba|gained weight|v|health|taba
mataba|fat|adj|health|taba
gana|appetite; enthusiasm|n|health
walang gana|no appetite; unmotivated|phr|health|gana
nawalan ng gana|lost appetite|phr|health|gana
puyat|sleep-deprived; staying up late|adj|health
napuyat|stayed up late; lost sleep|v|health|puyat
insomya|insomnia|n|health
hindi makatulog|can't sleep|phr|health|tulog
bangungot|nightmare; also sudden death in sleep (folk)|n|health
panaginip|dream|n|health
nanaginip|dreamed|v|health|panaginip
damdamin|feeling; emotion|n|emotions|damdam
pakiramdam|feeling; how one feels|n|emotions|damdam
nararamdaman|feels (ongoing); is feeling|v|emotions|damdam
naramdaman|felt|v|emotions|damdam
emosyon|emotion|n|emotions
lungkot|sadness|n|emotions
kalungkutan|sadness; sorrow|n|emotions|lungkot
nalulungkot|is sad|v|emotions|lungkot
saya|happiness; joy|n|emotions
kasiyahan|happiness; enjoyment|n|emotions|saya
tuwa|joy; delight|n|emotions
masaya|happy|adj|emotions|saya
natutuwa|is glad|v|emotions|tuwa
galit|anger|n|emotions
nagagalit|is angry|v|emotions|galit
inis|annoyance; irritation|n|emotions
naiinis|is annoyed|v|emotions|inis
mainis|to get annoyed|v|emotions|inis
mainit ang ulo|irritable; hot-headed|phr|emotions|init||Literally "hot head." Common description of irritability.
init ng ulo|irritability; temper|phr|emotions|init
takot|fear|n|emotions
natatakot|is afraid|v|emotions|takot
kaba|nervousness; palpitation of fear|n|emotions
kinakabahan|is nervous|v|emotions|kaba
nerbiyos|nerves; anxiety|n|emotions||"Nerbiyos" is a common way patients describe anxiety.
ninerbiyos|became nervous|v|emotions|nerbiyos
pag-aalala|worry|n|emotions|alala
nag-aalala|is worried|v|emotions|alala
alalahanin|worries; concerns|n|emotions|alala
balisa|restless; anxious|adj|emotions
pagkabalisa|anxiety; restlessness|n|emotions|balisa
hindi mapakali|can't keep still; restless|phr|emotions|pakali
pagkabagabag|troubled feeling; unease|n|emotions|bagabag
hiya|shame; embarrassment; propriety|n|emotions||Core Filipino value. Patients may underreport symptoms because of hiya.
nahihiya|is shy; embarrassed|v|emotions|hiya
walang hiya|shameless (strong insult)|phr|emotions|hiya
sama ng loob|resentment; hurt feelings|phr|emotions|sama||Often held in silently. A common precursor to depressive complaints.
nagtatampo|sulking (feeling hurt, wanting attention)|v|emotions|tampo
tampo|sulking; hurt withdrawal|n|emotions
selos|jealousy|n|emotions
nagseselos|is jealous|v|emotions|selos
inggit|envy|n|emotions
pagsisisi|regret|n|emotions|sisi
nagsisisi|regrets|v|emotions|sisi
sisihin|to blame|v|emotions|sisi
pagkakonsensiya|guilt|n|emotions|konsensiya
konsensiya|conscience|n|emotions
nakokonsensiya|feels guilty|v|emotions|konsensiya
kawalan ng pag-asa|hopelessness|phr|emotions|asa
pag-asa|hope|n|emotions|asa
wala nang pag-asa|there's no hope anymore|phr|emotions|asa
bigo|disappointed; failed|adj|emotions
kabiguan|failure; disappointment|n|emotions|bigo
pighati|grief; anguish|n|emotions
dalamhati|grief; deep sorrow|n|emotions
pagdadalamhati|mourning; grieving|n|emotions|dalamhati
nagluluksa|is in mourning|v|emotions|luksa
pangungulila|longing; loneliness for someone absent|n|emotions|ulila
nangungulila|misses someone; feels bereft|v|emotions|ulila
ulila|orphan|n|emotions
pag-iisa|being alone; solitude|n|emotions|isa
nag-iisa|alone|adj|emotions|isa
malungkot ako|I'm sad|phr|emotions|lungkot
mabigat ang loob|heavy-hearted|phr|emotions|bigat
mabigat ang dibdib|heavy chest (emotional distress)|phr|emotions|bigat||Patients often describe sadness or anxiety as heaviness in the chest.
naninikip ang dibdib|chest feels tight|phr|emotions|sikip
loob|inner self; inside|n|emotions||Central concept: kalooban (inner self), lakas ng loob (courage), utang na loob (debt of gratitude).
kalooban|inner self; will; feelings|n|emotions|loob
lakas ng loob|courage|phr|emotions|lakas
utang na loob|debt of gratitude|phr|emotions|utang
pakikisama|getting along; going along with the group|n|emotions|sama
bahala na|come what may; leave it to fate|phr|emotions|bahala
tiis|endurance; bearing hardship|n|emotions
pagtitiis|enduring; suffering in silence|n|emotions|tiis
tiisin|to endure|v|emotions|tiis
kapit|hold on|v|emotions
pagod na pagod|exhausted|phr|emotions|pagod
pagod na ako|I'm tired already; I'm tired of it|phr|emotions|pagod
suko na ako|I give up|phr|emotions|suko
sumuko|to give up; surrender|v|emotions|suko
isip|mind; thought|n|mind
pag-iisip|thinking; mind|n|mind|isip
kaisipan|mentality; mind; thought|n|mind|isip
kalusugang pangkaisipan|mental health|phr|mind|isip
kalusugan ng isip|mental health|phr|mind|isip
sakit sa isip|mental illness (plain)|phr|mind|isip
sakit sa pag-iisip|mental illness|phr|mind|isip
alaala|memory|n|mind|alala
memorya|memory|n|mind
malilimutin|forgetful|adj|mind|limot
ulyanin|senile; forgetful (elderly)|adj|mind|ulyan||Common lay term for dementia. Can sound disrespectful in front of the patient.
pagkaulyanin|senility; dementia (lay)|n|mind|ulyan
nalilito|is confused|v|mind|lito
pagkalito|confusion|n|mind|lito
lito|confused|adj|mind
tuliro|dazed; at a loss|adj|mind
wala sa sarili|not oneself; out of it|phr|mind|sarili
tulala|staring blankly; dazed|adj|mind||Families often say "tulala lang siya" for withdrawal, catatonia, or dissociation.
natutulala|keeps staring blankly|v|mind|tulala
balisa|restless|adj|mind
nagwawala|going berserk; agitated; out of control|v|mind|wala
pagwawala|agitation; violent outburst|n|mind|wala
nagagalit nang walang dahilan|gets angry for no reason|phr|mind|galit
kinakausap ang sarili|talks to oneself|phr|mind|usap
nagsasalita mag-isa|talks alone; talks to oneself|phr|mind|salita
tumatawa mag-isa|laughs alone|phr|mind|tawa
nakatitig|staring|v|mind|titig
naglalakad nang walang direksiyon|wandering aimlessly|phr|mind|lakad
gumagala|roams; wanders|v|mind|gala
paranoid|suspicious; paranoid|adj|mind
paghihinala|suspicion|n|mind|hinala
naghihinala|is suspicious|v|mind|hinala
pinaghihinalaan|is suspected|v|mind|hinala
guni-guni|imagination; illusion; something imagined|n|mind
ilusyon|illusion|n|mind
halusinasyon|hallucination|n|mind
boses|voice|n|mind
bulong|whisper|n|mind
bumubulong|is whispering|v|mind|bulong
binubulungan|being whispered to|v|mind|bulong
naririnig|hears; is heard|v|mind|dinig
nakikita|sees; is seen|v|mind|kita
anino|shadow; shadowy figure|n|mind
multo|ghost|n|beliefs
kaluluwa|soul; spirit of the dead|n|beliefs
maligno|evil spirit; malevolent being|n|beliefs
masamang espiritu|evil spirit|phr|beliefs|espiritu
engkanto|enchanted being; spirit of nature|n|beliefs
na-engkanto|bewitched by an engkanto|v|beliefs|engkanto
duwende|dwarf spirit|n|beliefs
nuno sa punso|old man of the anthill (spirit)|phr|beliefs|nuno||Saying "tabi-tabi po" avoids offending him. Illness may be blamed on him.
tabi-tabi po|excuse me (said to unseen spirits)|phr|beliefs|tabi
kapre|tree giant spirit (smokes a cigar)|n|beliefs
tikbalang|horse-headed trickster spirit|n|beliefs
aswang|shape-shifting ghoul|n|beliefs
manananggal|self-segmenting viscera-sucker|n|beliefs
lamang-lupa|earth spirit; creature of the ground|n|beliefs
diwata|fairy; nature deity|n|beliefs
kulam|witchcraft; hex|n|beliefs||"Kinulam ako" (I was hexed) may be cultural belief or a delusion. Assess context.
kinulam|was bewitched; hexed|v|beliefs|kulam
mangkukulam|witch; sorcerer|n|beliefs|kulam
barang|sorcery using insects|n|beliefs
gayuma|love potion|n|beliefs
usog|illness from a stranger's greeting (folk)|n|beliefs||Folk illness of infants; cured with saliva on the forehead.
nausog|afflicted by usog|v|beliefs|usog
pasma|folk illness from hot-cold imbalance (tremor, sweaty hands)|n|beliefs||Often blamed for tremors, sweaty palms, or aches. Watch for anxiety or EPS being labeled pasma.
napasma|got pasma|v|beliefs|pasma
lihi|pregnancy cravings; birthmark belief|n|beliefs
sinapian|was possessed|v|beliefs|sapi
sinasapian|is being possessed|v|beliefs|sapi
sapi|possession (by a spirit)|n|beliefs
sinasaniban|is being possessed (by a spirit)|v|beliefs|sanib
sanib|possession; spirit entering a body|n|beliefs
nasaniban|was possessed|v|beliefs|sanib
pagsapi|possession|n|beliefs|sapi
exorcism|exorcism|n|beliefs
pagpapalayas ng masamang espiritu|exorcism; driving out evil spirits|phr|beliefs|layas
sumpa|curse|n|beliefs
isinumpa|cursed|v|beliefs|sumpa
malas|bad luck|n|beliefs
suwerte|luck|n|beliefs
pamahiin|superstition|n|beliefs
paniniwala|belief|n|beliefs|paniwala
naniniwala|believes|v|beliefs|paniwala
maniwala|to believe|v|beliefs|paniwala
kapangyarihan|power|n|mind|kapangyarihan
espesyal na kapangyarihan|special powers|phr|mind|kapangyarihan
sinusundan|is being followed|v|mind|sunod
minamanmanan|is being watched; under surveillance|v|mind|manman
binabantayan|is being watched; guarded|v|mind|bantay
pinag-uusapan|is being talked about|v|mind|usap
ginagaya|being imitated|v|mind|gaya
nilalason|being poisoned|v|mind|lason
lason|poison|n|mind
pinaplanuhan|is being plotted against|v|mind|plano
kinokontrol|is being controlled|v|mind|kontrol
mensahe|message|n|mind
balak|plan; intention|n|mind
plano|plan|n|mind
balak na magpakamatay|plan to commit suicide|phr|risk|patay
magpakamatay|to commit suicide|v|risk|patay||Direct term. Asking directly does not increase risk.
nagpakamatay|committed suicide|v|risk|patay
pagpapakamatay|suicide|n|risk|patay
tangkang pagpapakamatay|suicide attempt|phr|risk|patay
nagtangka|attempted|v|risk|tangka
tangka|attempt|n|risk
wakasan|to end|v|risk|wakas
wakasan ang buhay|to end one's life|phr|risk|wakas
saktan ang sarili|to hurt oneself|phr|risk|sakit
sinaktan ang sarili|hurt oneself|phr|risk|sakit
paglalaslas|cutting (self-harm)|n|risk|laslas
naglaslas|cut (wrist/skin)|v|risk|laslas
pulso|wrist; pulse|n|risk
nagbigti|hanged oneself|v|risk|bigti
lubid|rope|n|risk
tumalon|jumped|v|risk|talon
lumunod|drowned (oneself)|v|risk|lunod
lumaklak|guzzled; drank in large quantity|v|risk|laklak
overdose|overdose|n|risk
sobrang dosis|overdose|phr|risk|dosis
ayaw nang mabuhay|doesn't want to live anymore|phr|risk|buhay
sana hindi na lang ako nagising|I wish I hadn't woken up|phr|risk|gising
pabigat|a burden|n|risk|bigat||"Pabigat lang ako" (I'm just a burden) is a warning sign.
sulat ng paalam|goodbye letter|phr|risk|sulat
armas|weapon|n|risk
baril|gun|n|risk
kutsilyo|knife|n|risk
itak|bolo knife; machete|n|risk
pananakit|hurting; violence|n|risk|sakit
karahasan|violence|n|risk|dahas
pumatay|to kill|v|risk|patay
gumanti|to take revenge|v|risk|ganti
paghihiganti|revenge|n|risk|higanti
alak|liquor|n|substance
lasing|drunk|adj|substance
nalasing|got drunk|v|substance|lasing
uminom ng alak|drink alcohol|phr|substance|inom
manginginom|heavy drinker|n|substance|inom
tagay|a shot (of liquor); round of drinks|n|substance
inuman|drinking session|n|substance|inom
gin|gin (commonly "Ginebra")|n|substance
tuba|coconut wine|n|substance
lambanog|coconut liquor (strong)|n|substance
sigarilyo|cigarette|n|substance
yosi|cigarette (slang)|n|substance
naninigarilyo|smokes (cigarettes)|v|substance|sigarilyo
droga|illegal drugs|n|substance
shabu|methamphetamine|n|substance||Most common illicit drug in the Philippines. Also called "bato," "ice," "sha."
bato|shabu (slang); stone|n|substance
damo|marijuana (slang); grass|n|substance
marijuana|marijuana|n|substance
rugby|contact cement (inhaled solvent)|n|substance||Inhalant abuse, often among street children.
sumisinghot|sniffing (inhalants/drugs)|v|substance|singhot
gumagamit|uses (drugs)|v|substance|gamit
adik|addict (stigmatizing)|n|substance||Avoid in clinical speech. Prefer "gumagamit ng droga."
pagkalulong|addiction|n|substance|lulong
nalulong|became addicted|v|substance|lulong
tumigil|stopped; quit|v|substance|tigil
withdrawal|withdrawal|n|substance
nanginginig ang kamay|hands are trembling|phr|substance|nginig
sugal|gambling|n|substance
nagsusugal|gambles|v|substance|sugal
online sabong|online cockfighting (gambling)|n|substance
baliw|crazy (stigmatizing)|adj|stigma||Avoid. Patients and families may fear this label.
sira-ulo|crazy (literally broken head; stigmatizing)|adj|stigma
may sayad|a bit crazy (slang, stigmatizing)|phr|stigma
abnormal|abnormal (used as an insult)|adj|stigma
mental|mental hospital patient (slang insult)|adj|stigma||"Dadalhin ka sa Mental" refers to the National Center for Mental Health. Use with care.
NCMH|National Center for Mental Health (Mandaluyong)|n|clinical
psychiatrist|psychiatrist|n|clinical
saykayatrista|psychiatrist|n|clinical
sikolohista|psychologist|n|clinical
sikolohiya|psychology|n|clinical
saykayatriya|psychiatry|n|clinical
konsulta|consultation|n|clinical
magpakonsulta|to consult; see a doctor|v|clinical|konsulta
kumpidensiyal|confidential|adj|clinical
lihim|secret|n|clinical
pahintulot|permission; consent|n|clinical|tulot
pumayag|to agree; consent|v|clinical|payag
pagpayag|consent; agreement|n|clinical|payag
karapatan|right (legal)|n|clinical|dapat
diyagnosis|diagnosis|n|clinical
depresyon|depression|n|clinical
anxiety|anxiety|n|clinical
pagkabalisa|anxiety|n|clinical|balisa
schizophrenia|schizophrenia|n|clinical
bipolar|bipolar disorder|n|clinical
psychosis|psychosis|n|clinical
trauma|trauma|n|clinical
bangungot|nightmare|n|clinical
flashback|flashback|n|clinical
gulat|startle; shock|n|clinical
magugulatin|easily startled|adj|clinical|gulat
nagugulat|is startled|v|clinical|gulat
pag-iwas|avoidance|n|clinical|iwas
umiiwas|avoids|v|clinical|iwas
paulit-ulit|repeatedly; over and over|adv|clinical|ulit
paghuhugas ng kamay|handwashing|phr|clinical|hugas
pagbibilang|counting|n|clinical|bilang
pagsusuri|checking; examination|n|clinical|suri
paulit-ulit na pag-iisip|repetitive thoughts; obsessions|phr|clinical|isip
sobrang sigla|excessive energy|phr|clinical|sigla
sigla|energy; vigor|n|clinical
lakas|strength; energy|n|clinical
enerhiya|energy|n|clinical
mabilis magsalita|talks fast|phr|clinical|bilis
hindi mapigilan|can't be stopped; uncontrollable|phr|clinical|pigil
gastos|expense; spending|n|clinical
gumastos|spent|v|clinical|gastos
waldas|spend recklessly|v|clinical
pagwawaldas|reckless spending|n|clinical|waldas
konsentrasyon|concentration|n|clinical
pokus|focus|n|clinical
makapag-concentrate|to be able to concentrate|v|clinical
ospital|hospital|n|clinical
ward|ward|n|clinical
pagkakulong|confinement; detention|n|clinical|kulong
nakatali|tied; restrained|adj|clinical|tali
restraint|restraint|n|clinical
pampakalma|sedative; something to calm|n|clinical|kalma
kumalma|to calm down|v|clinical|kalma
kalma lang|calm down; just relax|phr|clinical|kalma
pampatulog|sleeping pill|n|clinical|tulog
antidepressant|antidepressant|n|clinical
gamot sa nerbiyos|medicine for nerves/anxiety|phr|clinical|nerbiyos
hindi pag-inom ng gamot|not taking medication; non-adherence|phr|clinical|inom
regular na pag-inom|taking regularly|phr|clinical|inom
tumigil sa gamot|stopped taking medication|phr|clinical|tigil
paninigas ng katawan|body stiffness (e.g., EPS)|phr|clinical|tigas
naglalaway|drooling|v|clinical|laway
laway|saliva|n|clinical
hindi mapakali ang paa|restless legs (akathisia)|phr|clinical|pakali
malabo ang paningin|blurry vision|phr|clinical|labo
tuyo ang bibig|dry mouth|phr|clinical|tuyo
hirap umihi|difficulty urinating|phr|clinical|ihi
tibi|constipation|n|clinical
constipated|constipated|adj|clinical
`);
