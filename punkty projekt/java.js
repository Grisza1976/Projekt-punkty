const jsonData = {
    "p0": {
      "pozycja": "palenie",
      "punkty": "50-100"
    },
    "p1": {
      "pozycja": "Nagana Rady Pedagogicznej",
      "punkty": 400
    },
    "p2": {
      "pozycja": "Nagana Dyrektora",
      "punkty": 300
    },
    "p3": {
      "pozycja": "Upomnienie Dyrektora",
      "punkty": 150
    },
    "p4": {
      "pozycja": "Nagana wychowawcy",
      "punkty": 100
    },
    "p5": {
      "pozycja": "pomnienie wychowawcy",
      "punkty": 50
    },
    "p6": {
      "pozycja": "Uwaga za naganne zachowanie w czasie zajęć",
      "punkty": 15
    },
    "p7": {
      "pozycja": "Uwaga za naganne zachowanie w czasie zbiorowych imprez",
      "punkty": 30
    },
    "p8": {
      "pozycja": "podrabianie dokumentów szkolnych",
      "punkty": 100
    },
    "p9": {
      "pozycja": "Wandalizm",
      "punkty": "20-50"
    },
    "p10": {
      "pozycja": "Aroganckie zachowanie",
      "punkty": "50-100"
    },
    "p11": {
      "pozycja": "Zaczepki słowne i fizyczne",
      "punkty": "50-100"
    },
    "p12": {
      "pozycja": "Wulgarne słownictwo",
      "punkty": 20
    },
    "p13": {
      "pozycja": "Niewykonywanie poleceń nauczyciela i innych pracowników szkoły",
      "punkty": 20
    },
    "p14": {
      "pozycja": "Niewywiązywanie się ze zobowiązań",
      "punkty": 20
    },
    "p15": {
      "pozycja": "Niewywiązywanie się ze zobowiązań reprezentantów szkoły",
      "punkty": 30
    },
    "p16": {
      "pozycja": "Nieprzestrzeganie przepisów BHP",
      "punkty": 15
    },
    "p17": {
      "pozycja": "Za każdą opuszczoną godzinę bez usprawiedliwienia",
      "punkty": 3
    },
    "p18": {
      "pozycja": "Za każdą opuszczoną godzinę bez usprawiedliwienia w dniu odrabiania zajęć szkolnych",
      "punkty": 5
    },
    "p19": {
      "pozycja": "Za zbiorową ucieczkę z zajęć lekcyjnych",
      "punkty": 20
    },
    "p20": {
      "pozycja": "Spóźnienia",
      "punkty": 1
    },
    "p21": {
      "pozycja": "Zaśmiecanie szkoły i jej otoczenia",
      "punkty": 10
    },
    "p22": {
      "pozycja": "Korzystanie z telefonu komórkowego w czasie lekcji",
      "punkty": "30-50"
    }
  }
const jsonData1 = {
    "p1": {
      "pozycja": "Udział w olimpiadzie przedmiotowej",
      "punkty": {
        "etap szkolny": 10,
        "etap miejski": 30,
        "etap okręgowy": 50,
        "etap ogólnopolski": 100
      }
    },
    "p2": {
      "pozycja": "Udział w konkursie szkolnym udział",
      "punkty": {
        "finał": 20,
        "zwycięstwo (miejsca 1-3)": 30
      }
    },
    "p3": {
      "pozycja": "Udział w konkursie pozaszkolnym",
      "punkty": {
        "etap szkolny": 10,
        "etap miejski": 30,
        "etap okręgowy": 40,
        "miejsce w pierwszej trójce w okręgu": 50,
        "etap ogólnopolski": 100
      }
    },
    "p4": {
      "pozycja": "Udział w zawodach sportowych",
      "punkty": {
        "zwycięstwo w szkole": 5,
        "miejsca 1-3 w mieście": 20,
        "miejsca 1-3 w okręgu": 30,
        "miejsca 1-3 w zawodach ogólnopolskich": 40
      }
    },
    "p5": {
      "pozycja": "Funkcje społeczne w klasie",
      "punkty": {
        "w szkole": 20,
        "w mieście": "10-50"
      }
    },
    "p6": {
      "pozycja": "Praca społeczna",
      "punkty": {
        "klasy": 3,
        "szkoły": 5,
        "środowiska": "5 pkt-maks."
      }
    },
    "p7": {
      "pozycja": "Uczestnictwo w zorganizowanych zajęciach pozalekcyjnych",
      "punkty": 20
    },
    "p8": {
      "pozycja": "Honorowe krwiodawstwo, wolontariat za każdą akcję",
      "punkty": 30
    },
    "p9": {
      "pozycja": "Frekwencja od 90 %",
      "punkty": {
        "od 95 %": 50,
        "od 98 %": 70
      }
    },
    "p10": {
      "pozycja": "Do dyspozycji wychowawców klas programowo najwyższych po konsultacji z zespołem nauczycieli",
      "punkty": "0-50"
    },
    "p11": {
      "pozycja": "Stosunek do obowiązków szkolnych po konsultacji z zespołem nauczycieli",
      "punkty": "0-30"
    },
    "p12": {
      "pozycja": "Kultura osobista po konsultacji z zespołem nauczycieli",
      "punkty": "0-30"
    },
    "p13": {
      "pozycja": "Pomoc koleżeńska uzgodniona z wychowawcą klasy",
      "punkty": "0-20"
    }
  }
  function wyświetl_ujemny() {
    const selectA0 = document.getElementById("a0");
    Object.keys(jsonData).forEach((key, index) => {
      let option = document.createElement("option");
      option.value = key;
      option.text = jsonData[key].pozycja;
      selectA0.appendChild(option);
    });
  }
  function wyświetl_dodatni() {
    const selectA1 = document.getElementById("a1");
    Object.keys(jsonData1).forEach((key, index) => {
      let option = document.createElement("option");
      option.value = key;
      option.text = jsonData1[key].pozycja;
      selectA1.appendChild(option);
    });
  }
  function wywolaj() {
    const selectedIndex = document.getElementById("a0").value;
    const selectedData = jsonData[selectedIndex];
    const wypluwaczDiv = document.getElementById("wypluwacz");
    let wypluwaczContent = "";
    if (typeof selectedData.punkty === "object") {
        wypluwaczContent = Object.entries(selectedData.punkty)
          .map(([key, value]) => `${key}: ${value}`)
          .join("<br>");
      } else {
        wypluwaczContent = `${selectedData.punkty}`;
      }
    wypluwaczDiv.innerHTML = `<p>${selectedData.punkty}</p>`;
  }
  function wywolajSecond() {
    const selectedIndex = document.getElementById("a1").value;
    const selectedData = jsonData1[selectedIndex];
    const wypluwaczDiv = document.getElementById("wypluwacz");
  
    let wypluwaczContent = "";
    if (typeof selectedData.punkty === "object") {
      wypluwaczContent = Object.entries(selectedData.punkty)
        .map(([key, value]) => `${key}: ${value}`)
        .join("<br>");
    } else {
      wypluwaczContent = `${selectedData.punkty}`;
    }
  
    wypluwaczDiv.innerHTML = `<p>${wypluwaczContent}</p>`;
  }
  
  wyświetl_ujemny();
  wyświetl_dodatni();