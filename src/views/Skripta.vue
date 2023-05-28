<template>
  <div class="container">
    <header>
      <nav>
        <Navbar />
      </nav>
    </header>
    <h2>Navigacijska traka za skriptu!</h2>
    <ul class="nav">
      <li class="nav__links">
        <button class="nav__button" @click="scrollTo('article1')">
          1.Uvod i instalacija alata "Unity"
        </button>
      </li>
      <li class="nav__links">
        <button class="nav__button" @click="scrollTo('article2')">
          2."Import-anje Asset-a"
        </button>
      </li>
      <li class="nav__links">
        <button class="nav__button" @click="scrollTo('article3')">
          3.Funkcionalnosti "gameObject-a"
        </button>
      </li>
      <li class="nav__links">
        <button class="nav__button" @click="scrollTo('article4')">
          4."Camera movement"
        </button>
      </li>
      <li class="nav__links">
        <button class="nav__button" @click="scrollTo('article5')">
          5."Scene loading"
        </button>
      </li>
      <li class="nav__links">
        <button class="nav__button" @click="scrollTo('article6')">
          6."Respawn" i "Pause Menu"
        </button>
      </li>
    </ul>
    <h1>2D Platformer igra</h1>
    <main class="article">
      <section id="article1" class="article__text">
        <h1 class="article__title">1.Uvod i instalacija alata "Unity"</h1>
        <p>
          Prvo poglavlje pokriva instalaciju "Unity Hub" i "Unity Editor-a" te
          upoznavanje sa alatom. Potrebno imati instaliran i "Visual Studio
          Code" koji se koristi pri izradi skripti. <br />
          Koristiti posljednje verzije za "download". Završavanjem ovog
          tutorijala moći ćete napraviti 2D jednostavnu platformer igru.
        </p>
        <h3 class="article__subtitle">1.1. Instalacija potrebnih programa</h3>
        <p>
          Instalacija "Unity Hub-a" pristupa se putem službene stranice
          "Unity-a":
          <a href="https://unity.com/download">UnityInstalacija</a>. Potrebno
          pratiti instrukcije na linku. Za MacOS i Linux instalaciju "scrollati"
          malo dolje. <br />
          Nakon što je instaliran "Unity Hub", na sljedećem linku je potrebno
          instalirati "Visual Studio Code":
          <a href="https://code.visualstudio.com/">VSCInstalacija</a>. Kliknuti
          na "download" te odabrati mjesto instalacije. <br />
        </p>
        <h3 class="article__subtitle">1.2. UI "Unity" i pomoćni alati</h3>
        <p>
          Sljedeća slika pod nazivom "Slika 1. Prikaz glavnog zaslona "Unity
          Editor-a"" prikazivat će "UI" "Unity-a".
        </p>
        <div class="article__img">
          <img
            src="../assets/skripta_image1.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 1. Prikaz glavnog zaslona "Unity Editor-a"
        </p>
        <p>
            Objašnjenje pomoćnih alata "Unity Editor-a:"
         <ol>
            <li>"The toolbar" - pruža pristup Unity računu i uslugama „Unity Cloud-a“. 
                Također sadrži kontrole za način rada reprodukcije; "Unity Search", "A layer visibility menu", "Editor layout menu".</li>
            <li>"The Hierarchy window" - hijerarhijsko tekstualno prikazivanje svakog „GameObject-a“ u sceni. 
                Svaka stavka u sceni ima unos u hijerarhiji, pa su dva prozora inherentno povezana. 
                Hijerarhija otkriva strukturu načina na koji „GameObjecti“ prilože jedan drugome.</li>
            <li>"The Game view" - simulira kako će konačno rendirana igra izgledati kroz kameru u sceni. Kada kliknemo na 
                 gumb „Play“, simulacija započinje.</li>
            <li>"The Scene view" - omogućuje vizualno navigiranje i uređivanje scene. Prikaz scene može prikazati 3D ili 2D perspektivu, 
                 ovisno o vrsti projekta koja se radi.</li>
            <li>"Overlays" - sadrži osnovne alate za manipuliranje prikaza scene i „GameObject-ima“ unutar nje. 
                Također može dodati „custom Overlays“ za poboljšavanje radnog procesa.</li>
            <li>"The Inspector window" - omogoućuje pregledavanje i uređivanje svih svojstava trenutno odabranog „GameObject-a“. 
                Raspored i sadržaj inspektora mijenja se svaki put kad je odabran drugi „GameObject“ zbog toga što različite vrste 
                „GameObject-a“ imaju različite skupove svojstava.</li>
            <li>"The Project window" - prikazuje "library of Assets" koji su dostupni za upotrebu u projektu. 
                Kad se resursi uvežu u projekt, pojavljuju se u „Project window-u“.</li>
            <li>"The status bar" - pruža obavijesti o različitim procesima „Unity-a“ i brzi pristup povezanim alatima i postavkama.</li>
         </ol>
        </p>
        <p> Naravno pri novom kreiranju projekta većina prikazanih alata "Unity Editor-a" bit će prazni!</p>
        <h3 class="article__subtitle">1.3. Kreiranje novog projekta</h3>
        <ul>
          <li>Otvoriti "Unity Hub"</li>
          <li>
            U gornjem desnom kutu aplikacije pritisnuti gumb "New project"
          </li>
          <li>Odabrati "2D Core" "template"</li>
          <li>Naziv projekta i "path" po želji</li>
          <li>Pritisnuti gumb "Create project"</li>
        </ul>
      </section>
      <section id="article2" class="article__text">
        <h2 class="article__title">2."Import-anje Asset-a"</h2>
        <p>Ako niste, odradite poglavlje 1.3. Kreiranje novog projekta!
           Kada se kreira novi projekt trebao bi izgledati kao na sljedećoj slici pod nazivom: "Slika 2. Novo kreirani projekt".
        </p>
        <div class="article__img">
        <img
            src="../assets/skripta_image2.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 2. Novo kreirani projekt
        </p>
        <p>
           Prvo što je potrebno napraviti je ubaciti sve potrebne resurse koji će se koristiti u igri.
           Mišom na "Assets" te pritisnemo desni klik i zatim "import new asset". "Import" običan "sprite" nazvan "CubeP",
           koji će se koristiti za sve, od platforma do igrača. Ovo je ustvari obična ".png" slika bijele kocke. Dimenzija slike je 225x225.
           Zatim je potrebno kocku "drag&drop-ati" iz "Assets" u projekt. U "Game View-u" (kartica pored "Scene View") možemo vidjeti ako pritisnemo
           "Play" da se ništa ne događa, ali se vidi "gameObject" "Player". To možemo vidjeti na sljedećoj slici: Slika 3. Prikaz "Game View-a" 
           nakon dodavanja "Player-a".
        </p>
        <div class="article__img">
        <img
            src="../assets/skripta_image3.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 3. Prikaz "Game View-a" nakon dodavanja "Player-a"
        </p>
        <h3>Mijenanje postavke "Asset-a"</h3>
        <p>Prvo što je potrebno promijenit je:</p>
        <ol>
           <li> Klik na kocku ("gameObject"), te zatim u "Inspector View-u" promijeniti ime u "Player".</li>
           <li> I njegov "Tag" promijeniti lijevim klikom i odabrati "Player".</li>
        </ol>
        <p>
            Nakon toga dodat ćemo još jedan "gameObject" koji će biti platforma, koristit ćemo istu kocku. "Drag&Drop" malo niže od definirane "Player" 
            kocke. Zatim je potrebno pritisnuti slovo W što je ustvari "shortcut" za jedan alat koji se zove "Move tool", a on nam omogućava da držanjem 
            lijevog klika mičemo naš "asset" po volji. Zatim pomoću "Scale Tool-a" potrebno napraviti malo dulju platformu. Uz pomoć "Scale Tool-a" 
            možemo mijenjati veličinu "asset-a" kad je ubačen u scenu. Promijeniti boju "gameObject-a" Player-a" i platforme klikom na njih pa zatim u 
            "Inspector View-u" pronađemo "color". Sve iznad rečeno se može vidjet i na slijedećoj slici: "Slika 4. Prikaz "Player-a" i njegovih postavka".
        </p>
        <div class="article__img">
        <img
            src="../assets/skripta_image4.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 4. Prikaz "Player-a" i njegovih postavka u "Inspector View-u"
        </p>
        <p>
            Potrebno promijeniti ime platforme u "Platform" na isti način kao što smo "Player-a", dakle prvo kliknemo na platformu i zatim u 
            "Inspector View-u" mijenjamo ime na vrhu.
        </p>
      </section>
      <section id="article3" class="article__text">
        <h2 class="article__title">3.Funkcionalnosti "gameObject-a"</h2>
        <h3>3.1.Komponente za "collide","gravity"</h3>
        <p>
            Trenutno je u projekt samo ubačeno ono što želimo prikazati, no ništa se ne događa kada se pokrene simulacija igre. Sljedeći korak je
            dodavanje "basic components" za "collide-anje", definiranje "gravity-a", i dodavanje "basic movement-a" za "Player-a" kao što je kretanje
            i skok, da bi se moglo upravljati igračem.
        </p>
        <p>
            Prvo što je potrebno napraviti je pritisnuti na "Player-a", te u "Inspector Window-u" na dnu pritisnuti "Add Component", te upisati komponentu
            "Rigibody 2D". To je komponenta koja omogućava da odabrani "gameObject" (u ovom slučaju "Player") može komunicirati i "collide-ati" sa "gravity"
            i ostalim objektima koji imaju tu istu komponentu. Trenutno se ne može "collide-ati" sa ničime jer nema dodan neki "collider", no kada se 
            definiraju i ostali "gameObject-i" će biti moguće. Sljedeća komponenta koja se dodaje "Player-u" je komponenta "Box Collider 2D". Ta komponenta
            pomaže u definiranju fizičkog oblika "asset-a"(gameObjecta) kako bi se odredilo kako komuniciraju s drugim "collider-ima" u sceni. Sad lijevim
            klikom miša na platformu i "Add component" te dodati "Box Collider 2D", što omogućava da "Player" ne prođe kroz platformu već se zaustavi na
            njoj. Možemo vidjeti na slijedećim slikama dodane komponente: "Slika 5. Prikazuje dodane komponente za "Player-a"", te "collide" "Player-a"
            sa platformom: "Slika 6. Simulacija igre i "collide" "Player-a" i platforme".
        </p>
         <div class="article__img">
        <img
            src="../assets/skripta_image5.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 5. Prikazuje dodane komponente za "Player-a"
        </p>
         <div class="article__img">
        <img
            src="../assets/skripta_image6.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 6. Simulacija igre("Game View") i "collide" "Player-a" i platforme"
        </p>
        <p>
            Sad kada je definiran "gravity" i "collision" sa dodanim komponentama, sljedeće na redu je kreiranje skripte za definiranje kretnje "Player-a".

        </p>
        <h3>3.2. Definiranje kretnje "Player-a" </h3>
        <p>
            Prvo treba napraviti novu skriptu, a to se radi desnim klikom na "Assets", "create", i zatim "C# script" koju možemo nazvati "PlayerMovement".
            Otvoriti skriptu "PlayerMovement". Potreban "Visual Studio Code", link za instalaciju se nalazi u poglavlju 1.1. Otvara se skripta u "VS Code-u", te
            je u trenutku prazna. Potrebno popuniti skriptu slijedećim kodom prikazanim na: "Slika 7. Prikaz koda za skriptu "PlayerMovement"".
        </p>
        <div class="article__img">
        <img
            src="../assets/skripta_image7.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 7. Prikaz koda za skriptu "PlayerMovement"
        </p>
        <ul>
            Objašnjenje koda:
            <li>"public float speed" - razlika koja će se primijetiti i kasnije kada dodamo skriptu na "Player-a" jest da kad se koristi public,
                to znači da se može mijenjati vrijednost u "Inspector View-u". Dakle ovo će biti public jer ne znamo točno željenu brzinu naše igre.</li>
            <li>"private float Move" - koristimo private jer ovo nećemo mijenjati u "Inspector View-u".</li>
            <li>"private Rigibody2D rb;" - ovom linijom koda smo napravili "shortcut" da ne moramo pisati stalno Rigibody2D već samo kraticu rb.</li>
            <li>"void Start(){}" - označava prvi "frame" igre.</li>
            <li>"rb = GetComponent Rigibody()" - u start funkciji smo dodijelili rb sa "Rigibody2D" koji je dodijeljen "Player-u". Dakle "referring" 
                na "Rigibody2D" od "Player-a".</li>
            <li>"void Update(){}" - sve što je u ovom dijelu koda se doagađa u svakom "frame-u". Ovdje je potrebno staviti "movement code", jer želimo
                da "Player" ima mogučnost micanja u svakom trenutku. </li>
            <li>"Move = Input.GetAxis("Horizontal")" - ovdje uzimamo "horizontal movement" reference</li>
            <li>"rb.velocity = new Vector2(speed * Move, rb.velocity.y)" - "reffering" na "velocity"(brzina) od "Rigibody2D" našeg "Player-a". Dodijeljujemo
                ga vektoru. Kad dodijeljujemo brzinu vektoru, potrebno je u zagradama deklarirati "x axis" i "y axis", a u ovom slučaju to je "speed" * Move("x axis"),
                rb.velocity("y axis"). </li>
        </ul>
        <p>
            Zatim u "Unity-u", kliknuti na "Player-a", te stisnuti u "Inspector View-u" "Add component". i dodaje se skripta "PlayerMovement". Sada na dnu
            imamo označenu kvačicom skriptu, i ispod nje "Speed" i polje koje možemo mijenjati. Tu upisujemo neki broj koji će biti brzina "Player-a",
            a s obzirom da je "public float", to znači da se mogu isprobavati različiti brojevi dok se ne nađe željena brzina za igru.<br />
            Nakon što smo dodali skriptu i stavili neki broj pod "Speed", potrebno je testirati kretnju "Player-a" na način da pokrenemo simulaciju igre,
            te koristeći tipke A i D napraviti kretanje "Player-a". Na slijedećoj slici se vidi simulacija igre i da je "Player" se kretao u jednu stranu:
            "Slika 8. Prikaz kretnje "Player-a"".
        </p>
        <div class="article__img">
        <img
            src="../assets/skripta_image8.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 8. Prikaz kretnje "Player-a"
        </p>
        <h3>3.3. Dodavanje "jump-a" za "Player-a"</h3>
        <p>
          Sad kad postoji kretnja "Player-a", s obzirom da je ovo "2D platformer", potrebno je definirati njegov skok. Otvaramo ponovno "MovementPlayer"
          skriptu. Prvo je potrebno definirati skok kao "public". Sav kod je vidljiv na slijedećoj slici: "Slika 9. Prikaz dodanog koda za "Jump"". A na
          slici: "Slika 10. Prikaz "jump-a" "Player-a"" sa komponentom "jump" u "Inspector View-u"".
        </p>
        <div class="article__img">
        <img
            src="../assets/skripta_image9.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 9. Prikaz dodanog koda za "Jump"
        </p>
        <div class="article__img">
        <img
            src="../assets/skripta_image10.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 10. Prikaz "jump-a" "Player-a"" sa komponentom "jump" u "Inspector View-u"
        </p>
        <p>
        Nakon pritisnute tipe "space" "Player" ima mogućnost skoka. Novi problemi koji se ovdje javljaju su taj da ako "Player" više puta pritisne tipku
        za skok, nestat će sa ekrana. Potrebno je implementirati "ground check", koji će provjeriti ako je "Player" već u zraku, te ovisno o tome 
        dopustiti skok. Na slici je prikazan kod: "Slika 11. Prikaz koda za "ground check"".
      </p>
      <div class="article__img">
        <img
            src="../assets/skripta_image11.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 11. Prikaz koda za "ground check"
        </p>
        <p>
          Objašnjenje koda:
        </p>
        <ul>
          <li>
            if(other.gameObject.CompareTag("Ground")) - provjerava ako je "Player" u "collision-u" sa objektom koji ima "Tag" nazvan "Ground". Dakle u
            "Inspector View" će biti potrebno sve platforme postaviti "Tag" kao "Ground". 
          </li>
          <li>
            Dodan je "&& isJumping" - sada prvi "if statement" ima dva uvjeta (prikazano na slika 11.), jedan je ako je pritisnuta tipka za skok, a drugi je ako je varijabla
            "isJumping == false", odnosno ako "Player" trenutno ne skače. Kad su oba uvjeta ispunjena tek onda "Player" može skakati.
          </li>
        </ul>
        <p>
          Sad je potrebno vratiti se u "Inspector View", te odabrati platformu i pritisnuti lijevim klikom "Tag" i zatim "Add Tag", pritisnuti na "+", i
          nazvati ga točno onako kako smo ga nazvali u kodu, a to je "Ground". Zatim pod "Tag" odabrati "Ground" za platformu. Odabrati "Player-a", te na
          dnu se može vidjeti da sad postoji "isJumping" "boolean", koji se označi kada "Player" skoči i označen je sve dok ponovno ne dotakne platformu.
          To je funkcija "ground check" koja se aktivira kad "Player" skoči. Na slici: "Slika 12. Prikaz "Player-a" u skoku sa označenom varijablom "isJumping"".
        </p>
        <div class="article__img">
        <img
            src="../assets/skripta_image12.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 12. Prikaz "Player-a" u skoku sa označenom varijablom "isJumping"
        </p>
        <p>
          Potrebno definirati varijablu "public bool isJumping;" iznad "void start()".
        </p>
      </section>
      <section id="article4" class="article__text">
        <h1 class="article__title">4."Camera movement"</h1>
        <p>
        Slijedeći korak je napraviti skriptu u kojoj definiramo da "Player-a" prati "default-na" kamera koja je ovdje od početka kreiranja projekta 
        (uz pomoć te kamere je moguće ići u simulaciju igre gdje vidimo postavljenu scenu). Prvo je potrebno napraviti malo veći "level". Kopirat ćemo
        platformu te ju zalijepiti dva puta na način da ako "Player" želi na druge platforme mora skočiti na njih. Kako treba izgledati 
        se vidi na slici: "Slika 13. Prikaz "level-a"". Kod na slici: "Slika 14. Prikaz koda za skriput "GameMovement"".<br />
        "Hint": za micanje "View-a" po ekranu potrebno držati "middle mouse button".
      </p>
      <div class="article__img">
        <img
            src="../assets/skripta_image13.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 13. Prikaz "level-a"
        </p>
        <div class="article__img">
        <img
            src="../assets/skripta_image14.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 14. Prikaz koda za skriput "GameMovement"
        </p>
        <ul>
          Objašnjenje koda
          <li> "public GameObject target" - "target" će biti "Player"</li>
          <li>"transform.position = new Vector3(target.transform.position.x, transform.position.y, -10)" - ukratko pomoću "target.transform.position.x"
            definirali smo da želimo da kamera prati kako se target odnosno "Player" miče horizontalno, vertikalno je stavljeno da ostane kako jest, odnosno
            ovime smo napravili da se kamera ne miče vertikalno. -10 je "z.axis" je postavljen tako da se sve što je potrebno vidi. Može biti i 0.
          </li>
        </ul>
        <p>
          Sad je potrebno skriptu "drag&drop" skriptu na "Main Camera". Može se vidjeti u "Inspector View-u" da je skripta dodana, te sada je potrebno "drag&drop"
          "Player-a", te ga staviti kao "target" u "Main Camera". Skripta i "target" se vide na slijedećoj slici: "Slika 15. Prikaz postavljanja skripte
           i "target-a"".
        </p>
        <div class="article__img">
        <img
            src="../assets/skripta_image15.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 15. Prikaz postavljanja skripte i "target-a"
        </p>
      </section>
      <section id="article5" class="article__text">
        <h2 class="article__title">5. "Scene loading"</h2>
        <p>
          Potrebno otići u "Asset-s" -> "Scenes". Pritisnuti na "sampleScene" i "ctrl + D", da se duplicira isti level koji je već napravljen. Jednog 
          nazvati "level1", a drugog "level2" u kojem je potrebno obrisati dvije platforme. Prikaz svega ima na slici: 
          "Slika 16. Prikaz nove scene pod nazivom "level2"".
        </p>
        <div class="article__img">
        <img
            src="../assets/skripta_image16.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 16. Prikaz nove scene pod nazivom "level2"
        </p>
        <p>
          Potrebne su dvije scene zato jer se u ovom poglavlju radi na "Finish line-u", te "transition" na drugi "level". Slijedeće je potrebno napraviti
          još jednu skriptu pod nazivom "FinishLine". Kod koji se nalazi u njoj je prikazan na slici: "Slika 17. Prikaz koda "Finish Line" skripte".   
        </p>
        <div class="article__img">
        <img
            src="../assets/skripta_image17.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 17. Prikaz koda "Finish Line" skripte
        </p>
        <p>
          Uzimamo ponovno "asset" kocku te ju stavljamo u scenu. Promijeniti boju u npr. plavu, koja će označavati "gameObject" cilj i imati "Finish Line"
          skriptu. Potrebno "drag&drop" skriptu na taj cilj. I dodati "Add component" -> "Box Collider 2D". Da se izbjegne česti "error" koji se ima pri
          pravljenju skripte za cilj, potrebno ići "File" -> "Build settings" -> "drag&drop" oba dvije scene pod: "Scenes in Build". Sad "Unity" točno
          zna što mislimo pod "level2".  Prikazano na slici: "Slika 18. Prikaz "Build settings-a"".
        </p>
        <div class="article__img">
        <img
            src="../assets/skripta_image18.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 18. Prikaz "Build settings-a"
        </p>
      </section>
        <section id="article6" class="article__text">
        <h2 class="article__title">6. "Respawn" i "Pause Menu"</h2>
        <p>
          Slijedeće na redu je napraviti objekt, koji kada se "Player" "collide-a" sa njime, vraća ga na početak "level-a", odnosno simulirat će se
          smrt "Player-a". Potrebno ponovno ubaciti "CubeP" negdje na drugu platformu, promijeniti boju u crveno i nazvati "Death", jer će to biti
          "gameObject" zbog kojeg se "Player" vraća na početak "level-a". Slijedeće je potrebno napraviti desni klik na "Hierarchy window", te 
          odabrati "create empty" koji će biti referenciran u slijedećoj skripti kao mjesto gdje se "Player" teleportira nakon što dotakne "Death" 
          "gameObject". Prikazano na slici: "Slika 19. Prikaz "Start" objekta".
        </p>
        <div class="article__img">
        <img
            src="../assets/skripta_image19.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 19. Prikaz "Start" objekta
        </p>
        <p>
          Napraviti novu skriptu nazvanu "DeathScript". Kod u skripti mora izgledati kao na slici: "Slika 20. Prikaz koda za skriptu "DeathScript"".
        </p>
        <div class="article__img">
        <img
            src="../assets/skripta_image20.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 20. Prikaz koda za skriptu "DeathScript"
        </p>
        <p>
          Dodati "Box Collider 2D" i kreiranu skriptu na objekt "Death". U skripti na polje "Start Point" dodati "Start" objekt, a na "Player" polje dodati
          "Player-a". Testirati ako funkcionira "Death" objekt. Potrebno resetirati level kada "Player" dotakne "Death" objekt.
        </p>
        </section>
        <section id="article7" class="article__text">
        <h2 class="article__title">7. "Pause Menu"</h2>
        <p>
          Zadnje što prolazi ovaj tutorijal je "Pause Menu". Kada pritisnemo "esc" želimo da nam igra se zaustavi i prikaže opciju "Resume" da nastavimo
          igrati, i opciju "Quit". Desni klik na "Hierarchy Window", odabrati "UI" i zatim "Canvas". Odabrati
          "Canvas", desni klik -> "UI" -> "Panel". Na ovaj način se lakše vidi kad je pauzirana igra. "Panel" je "child object" "Canvas-u". Prikazano na
          slici: "Slika 21. Prikaz kreiranog "Canvas-a" i "Panel-a"".
        </p>
        <div class="article__img">
        <img
            src="../assets/skripta_image21.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 21. Prikaz kreiranog "Canvas-a" i "Panel-a"
        </p>
        <p>
          Odabrati "Panel", te promijeniti boju da se vidi razlika kad je pauzirana igra. Desni klik na "Canvas" -> "UI" -> "Legacy" -> "Button". I 
          tako napraviti dva gumba. Preimenovati gornji u "Resume", i donji gumb u "Quit". Pritisnuti na strelicu koja otvara "drop-down" u "Hierarchy View"
          za gumbe, te otvoriti njihov "Text" i promijeniti nazive također u "Resume" i "Quit". Slijedeći korak je kreirati skriptu "PauseMenu" koja ima
          kod prikazan kao na slici: "Slika 22. Prikaz i objašnjenje koda skripte "PauseMenu"" i "Slika 23. Prikaz i objašnjenje koda skripte "PauseMenu"".
        </p>
        <div class="article__img">
        <img
            src="../assets/skripta_image22.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 22. Prikaz i objašnjenje koda skripte "PauseMenu"
        </p>
        <div class="article__img">
        <img
            src="../assets/skripta_image23.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 23. Prikaz i objašnjenje koda skripte "PauseMenu"
        </p>
        <p>
          "Canvas" preimenovati u "PauseMenu", dodati mu "PauseMenu" skriptu i u prazno polje skripte "drag&drop" "Panel". Pritisnuti na "resume"
          i "quit" te pritisnuti na "+" pod "On Click()" svakog gumba, i u prazno polje "drag&drop" "PauseMenu". I pod "No Function" za gumb "Quit" Dodati
          "PauseMenu" -> "quit()", a za "Resume" dodati "resume()". Prikazano na slici: "Slika 24. Prikaz "Pause Menu-a"".
        </p>
        <div class="article__img">
        <img
            src="../assets/skripta_image24.jpg"
            class="article__img"
            alt="..."
          />
        </div>
        <p class="article__img__name">
          Slika 24. Prikaz "Pause Menu-a"
        </p>
      </section>
      <h2> GOTOV TUTORIJAL! </h2>
    </main>
    <footer>
      <p>&copy; 2023,UNIPU,Student: Niko Novak</p>
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  methods: {
    scrollTo(articleId) {
      const article = document.getElementById(articleId);
      article.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
.nav {
  list-style-type: none;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  list-style: none;
  background-color: rgb(27, 177, 195);
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 100px;
  margin-left: 1px;
  margin-right: 1px;
}

.nav__button {
  display: inline-block;
  padding: 12px 24px;
  font-size: 18px;
  text-align: center;
  border-radius: 20px;
  background-color: rgb(220, 215, 84);
  color: rgb(4, 4, 4);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
  margin: 10px;
}

.nav__button:hover {
  background-color: #27ae60;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

.nav__links {
  font-size: 28px;
}

.article {
  margin: 50px 0;
  padding-left: 20px;
  padding-right: 20px;
}

.article__text {
  text-align: left;
  font-size: 20px;
}

.article__title {
  text-align: left;
  font-size: 32px;
  margin-top: 40px;
}

.article__subtitle {
    font-size: 25px;
}

.article__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.article__list li {
  margin-bottom: 15px;
}

.article__img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
}

.article__img__name {
  display: flex;
  justify-content: center;
}

li {
    margin-bottom: 10px;
    margin-top: 10px;
}
</style>