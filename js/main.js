const questionPlace = document.querySelector(".question-place");
const timePlace = document.querySelector(".time-place");
const choicePlace = document.querySelectorAll(".choice-place");
const choiceText = document.querySelectorAll(".choice-text");
const scorePlace = document.querySelector(".skor");
const jumlahPlace = document.querySelector(".jumlah");
const penjelasan = document.querySelector(".penjelasan-isi");
const penjelasanPlace = document.querySelector(".penjelasan-place");
const tombolNext = document.querySelector(".next");
const infoJawaban = document.querySelector(".info-jawaban");
const jawabanBenar = document.querySelector(".jawaban-benar");
const hasilScore = document.querySelector(".hasil");
const imageAnswer = document.querySelector(".image-answer");
const bar = document.querySelectorAll('.bar');
const alertUsername = document.querySelector('.alert-username');
const soundBenar = document.querySelector('.sound-benar')
const soundSalah = document.querySelector('.sound-salah')

const check = document.querySelector('.icon-check')

let choiceClick = true;
let currentQuestion = [];
let score = 0;
let acceptingAnswer = true;
let questionCounter = 0;
let avaibleQuestion = [];
let questions = [
  {
    question: "Bapak Proklamator Indonesia adalah ? ",
    ChoiceA: "Soepomo",
    ChoiceB: "K.H Dewantara",
    ChoiceC: "Ir. Soekarno",
    jawaban: "C",
    penjelasan:
      "pada 17 Agustus 1945 Indonesia menyatakan diri sebagai bangsa yang merdeka. Soekarno dipercaya menjadi pembaca naskah proklamasi. Namanya tercantum dalam naskah proklamasi bersama Bung Hatta sebagai repesentasi alias wakil bangsa Indonesia.",
    ilustrasi: "properties/proklamator.jpg",
  },
  {
    question: "Kapan Proklamasi kemerdekaan Indonesia dilaksanakan?",
    ChoiceA: "15 Agustus 1945",
    ChoiceB: "17 Agustus 1945",
    ChoiceC: "17 Agustus 1946",
    jawaban: "B",
    penjelasan:
      "pada 17 Agustus 1945 Indonesia menyatakan diri sebagai bangsa yang merdeka.",
    ilustrasi: "properties/proklamator.jpg",
  },
  {
    question: "Tokoh yang mengetik teks Proklamasi adalah?",
    ChoiceA: "Ir.Soekarno",
    ChoiceB: "Soepomo",
    ChoiceC: "Sayuti Melik",
    jawaban: "C",
    penjelasan:
      "Dilansir dari buku Seri Pengenalan Tokoh Sekitar Proklamasi Kemerdekaan yang diterbitkan Kemdikbud RI, orang yang mengetik naskah proklamasi adalah Sayuti Melik. Sebelumnya, naskah proklamasi ini disusun oleh tokoh yakni Bung Karno, Bung Hatta dan Achmad Soebardjo.",
    ilustrasi: "properties/sayutimelik.jpg",
  },
  {
    question:
      "Kemerdekaan Indonesia (proklamasi kemerdekaan) terjadi ketika Indonesia berada dibawah jajahan?",
    ChoiceA: "Jepang",
    ChoiceB: "Portugis",
    ChoiceC: "Belanda",
    jawaban: "A",
    penjelasan:
      "Indonesia merdeka setelah Jepang dibombardir oleh Bom Hiroshima dan Nagasaki dari Amerika Serikat, yang membuat secercah harapan rakyat Indonesia untuk memerdekakan diri.",
    ilustrasi: "properties/jepang.jpg",
  },
  {
    question: "Tokoh yang pertama kali mendengar info kekalahan Jepang adalah?",
    ChoiceA: "Ir.Soekarno",
    ChoiceB: "Soepomo",
    ChoiceC: "Sutan Syahrir",
    jawaban: "C",
    penjelasan:
      "pada tanggal 10 Agustus 1945, Sutan Syahrir telah mendengar berita lewat radio bahwa Jepang telah menyerah kepada Sekutu.",
    ilustrasi: "properties/sutansyahrir.jpg",
  },
  { 
    question: "Satu-satunya presiden perempuan Indonesia adalah?",
    ChoiceA: "R.A Kartini",
    ChoiceB: "Megawati Soekarno Putri",
    ChoiceC: "Cut Nyak Dien",
    jawaban: "B",
    penjelasan:
      "Megawati Soekarno Putri satu-satunya perempuan yang pernah menjadi presiden dalam sejarah Indonesia sampai saat ini.",
    ilustrasi: "properties/megawati.jpg",
  },
  {
    question: "Siapa nama Presiden RI yang pertama?",
    ChoiceA: "Soepomo",
    ChoiceB: "Soekarno",
    ChoiceC: "Jendral Soedirman",
    jawaban: "B",
    penjelasan:
      "Tanggal 17 Agustus 1945, Ir Soekarno dan Drs.Mohammad Hatta memproklamasikan kemerdekaan Indonesia. Dalam sidang PPKI, 18 Agustus 1945 Ir.Soekarno terpilih secara aklamasi sebagai Presiden Republik Indonesia yang pertama.",
    ilustrasi: "properties/sukarno.jpg",
  },
  {
    question: "Sumber dari segala sumber hukum negara Indonesia adalah?",
    ChoiceA: "UUD",
    ChoiceB: "Pancasila",
    ChoiceC: "Peraturan Presiden",
    jawaban: "B",
    penjelasan:
      "Sebagaimana dinyatakan pada Pasal 2 UU 12/2011 bahwa Pancasila merupakan sumber dari segala sumber hukum. Perundang-Undangan.",
    ilustrasi: "properties/pancasila.jpg",
  },
  {
    question:
      "Siapakah nama pahlawan perempuan yang berasal dari Aceh yang berjuang melawan Belanda pada masa perang Aceh?",
    ChoiceA: "Cut Nyak Dien",
    ChoiceB: "R.A Kartini",
    ChoiceC: "Dewi Sartika",
    jawaban: "A",
    penjelasan:
      "Salah satu srikandi Aceh yang terkenal di Nusantara adalah Cut Nyak Dhien, perempuan yang lahir pada tahun 1948 di kampung Lampadang. Sebagai seorang keturunan bangsawan, Cut Nyak Dhien memiliki sifat kepahlawanan yang diturunkan dari sang ayah yang juga berjuang dalam perang Aceh melawan kolonial Belanda.",
    ilustrasi: "properties/cutnyakdien.jpg",
  },
  {
    question:
      "Penjajahan bangsa Indonesia oleh Belanda terjadi kurang lebih selama?",
    ChoiceA: "200 Tahun",
    ChoiceB: "350 Tahun",
    ChoiceC: "400 Tahun",
    jawaban: "B",
    penjelasan:
      "Indonesia dijajah Belanda selama 350 tahun, kalau dihitung mundur dari tahun 1945, artinya Indonesia dijajah Belanda mulai 1595. Sedangkan tahun 1596 Cornelis de Houtman baru pertama kali mendarat di Banten dan dalam catatan sejarah de Houtman adalah orang Belanda yang pertama kali menginjakkan kaki di Nusantara.",
    ilustrasi: "properties/belanda.jpg",
  },
  {
    question: "PPKI adalah singkatan dari?",
    ChoiceA: "Panitia Persiapan Kemerdekaan Indonesia",
    ChoiceB: "Panitia Perang Kemerdekaan Indonesia",
    ChoiceC: "Panitia Persiapan Kemenangan Indonesia",
    jawaban: "A",
    penjelasan:
      "Panitia Persiapan Kemerdekaan Indonesia Pada masa sejarah Indonesia, PPKI adalah singkatan dari “Panitia Persiapan Kemerdekaan Indonesia.” PPKI adalah badan yang bertugas merumuskan dasar negara dan menyelenggarakan proses persiapan kemerdekaan Indonesia pada awal deklarasi kemerdekaan dari penjajahan Belanda.",
    ilustrasi: "properties/ppki.jpg",
  },
  {
    question:
      "Peristiwa pengamanan Soekarno dan Moh Hatta oleh golongan pemuda dikenal sebagai?",
    ChoiceA: "Perjanjian Linggarjati",
    ChoiceB: "Peristiwa 10 November",
    ChoiceC: "Peristiwa Rengasdengklok",
    jawaban: "C",
    penjelasan:
      "Peristiwa Rengasdengklok adalah peristiwa penculikan yang dilakukan oleh sejumlah pemuda antara lain Soekarni, Wikana, Aidit, dan Chaerul Saleh dari perkumpulan Menteng 31 terhadap Soekarno dan Hatta.",
    ilustrasi: "properties/rengasdengklok.jpg",
  },
];

let point = 10;
let maxQuestions = 10;
let timeGame;

timeStart = () => {
  let time = 30;
  timePlace.textContent = time;
  timeGame = setInterval(() => {
    time--;
    timePlace.textContent = time;
    if (time == 0) {
      soundSalah.play();
      clearInterval(timeGame);
      choiceClick = false;
      const benar = currentQuestion["Choice" + currentQuestion.jawaban];
      infoJawaban.textContent = "Yah.. Sayang Sekali, Waktumu Habis";
      jawabanBenar.textContent = "Jawaban : " + benar;
      timePlace.textContent = "0";
      

      const materi = currentQuestion.penjelasan;
      penjelasanPlace.style.display = "flex";
      penjelasan.textContent = materi;
      

    }
  }, 1000);
};

timeStop = () => {
  if (timeGame) {
    timePlace.textContent = "";
    clearInterval(timeGame);
    timeGame = null;
  }
};

startGame = () => {
  questionCounter = 0;
  score = 0;
  avaibleQuestion = [...questions];
  scorePlace.innerText = score;
  getNewQuestions();
};

getNewQuestions = () => {
  questionCounter++;
  timeStart();
  choiceClick = true;
  if (avaibleQuestion.length == 0 || questionCounter > maxQuestions) {
    // End Page
    localStorage.setItem("score", score);
    return window.location.assign("end.html");
  }
  jumlahPlace.textContent = `${questionCounter} / ${maxQuestions}`;
  const random = Math.floor(Math.random() * avaibleQuestion.length);
  currentQuestion = avaibleQuestion[random];
  questionPlace.textContent = currentQuestion.question;
  imageAnswer.src = currentQuestion.ilustrasi;

  choiceText.forEach((c) => {
    const number = c.dataset["number"];
    c.innerText = currentQuestion["Choice" + number];
  });

  avaibleQuestion.splice(random, 1);
  acceptingAnswer = true;
};

choicePlace.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswer) return;
    if(!choiceClick) return;

    timeStop();
    acceptingAnswer = false;
    const select = e.target;
    const selectAnswer = select.dataset["number"];
    const classAnswer =
      selectAnswer == currentQuestion.jawaban ? "correct" : "incorrect";
    choice.classList.add(classAnswer);
    const benar = currentQuestion["Choice" + currentQuestion.jawaban];
    if (classAnswer === "correct") {
        soundBenar.play();
        infoJawaban.textContent = `Hore!!! Jawabanmu Benar`;
        jawabanBenar.textContent = `Jawaban : ${benar}`;
        bar[questionCounter - 1].classList.add(classAnswer);
      } else {
        soundSalah.play();
        infoJawaban.textContent = `Yah.. Jawabanmu Masih Salah`;
        jawabanBenar.textContent = `Jawaban : ${benar}`;
        bar[questionCounter - 1].classList.add(classAnswer);
      }

    timePlace.textContent = "0";
    const materi = currentQuestion.penjelasan;
    penjelasanPlace.style.display = "flex";
    penjelasan.textContent = materi;

    if (selectAnswer == currentQuestion.jawaban) {
      scorePlace.innerText = `${(score += point)}`;
    }

    clearInterval(timeGame);
  });
});

tombolNext.addEventListener("click", function () {
  choicePlace.forEach((c) => {
    c.classList.remove("correct");
    c.classList.remove("incorrect");
  });
  penjelasanPlace.style.display = "none";
  getNewQuestions();
});

startGame();
