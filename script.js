const articleContainer = document.querySelector(".container-article");
const topicCards = document.querySelectorAll(".topic-card");
const contentButtons = document.querySelectorAll(".button-content");
const buttonTop = document.querySelector(".button-top");
let currentActive;

if (localStorage.getItem("topic")) {
  currentActive = localStorage.getItem("topic");
} else {
  currentActive = "presiden";
}

changeArticle(currentActive);

topicCards.forEach((e) => {
  if (currentActive == e.dataset.card) {
    topicCards.forEach((e) => {
      if (e.classList.contains("topic-active")) {
        e.classList.remove("topic-active");
      }
    });
    e.classList.add("topic-active");
  }
});

for (const card of topicCards) {
  card.addEventListener("click", () => {
    if (!card.classList.contains("topic-active")) {
      topicCards.forEach((e) => {
        if (e.classList.contains("topic-active")) {
          e.classList.remove("topic-active");
        }
      });
      card.classList.add("topic-active");
      currentActive = card.dataset.card;
      changeArticle(currentActive);
    }
  });
}

for (const contentButton of contentButtons) {
  contentButton.addEventListener("click", () => {
    if (currentActive != contentButton.dataset.card) {
      topicCards.forEach((e) => {
        if (e.classList.contains("topic-active")) {
          e.classList.remove("topic-active");
        }
        if (e.dataset.card == contentButton.dataset.card) {
          e.classList.add("topic-active");
          currentActive = e.dataset.card;
          changeArticle(currentActive);
        }
      });
    }
  });
}

function changeArticle(topic) {
  if (topic == "presiden") {
    articleContainer.innerHTML = `
            <div class="sub-judul">
              <h1>Presiden</h1>
              <p>07 Januari 2021</p>
            </div>
            <div class="article-content">
              <p>
                Presiden Indonesia adalah kepala negara sekaligus kepala pemerintahan Indonesia. Sebagai kepala negara, Presiden adalah simbol resmi negara Indonesia di dunia. Sebagai kepala pemerintahan, Presiden dibantu oleh wakil
                presiden dan menteri-menteri dalam kabinet, memegang kekuasaan eksekutif untuk melaksanakan tugas-tugas pemerintah sehari-hari. Presiden (dan Wakil Presiden) menjabat selama 5 tahun, dan sesudahnya dapat dipilih kembali
                dalam jabatan yang sama untuk satu kali masa jabatan.
              </p>
              <h2 class="heading-title">Wewenang, Kewajiban dan Hak Presiden antara lain :</h2>
              <ul type="square">
                <li>Memegang kekuasaan pemerintahan menurut UUD</li>
                <li>Memegang kekuasaan yang tertinggi atas Angkatan Darat, Angkatan Laut, dan Angkatan Udara.</li>
                <li>Mengangkat dan memberhentikan menteri-menteri.</li>
                <li>Mengajukan Rancangan Undang-Undang kepada Dewan Perwakilan Rakyat (DPR). Presiden melakukan pembahasan dan pemberian persetujuan atas RUU bersama DPR serta mengesahkan RUU menjadi UU.</li>
                <li>Menetapkan Peraturan Pemerintah Pengganti Undang-Undang (dalam kegentingan yang memaksa).</li>
                <li>Menetapkan Peraturan Pemerintah.</li>
                <li>Mengangkat dan memberhentikan menteri-menteri.</li>
              </ul>
              <h2 class="heading-title">Berikut adalah nama-nama presiden yang pernah menjabat dari zaman kemerdekaan-sekarang :</h2>
              <h2 class="heading-title">1. I.r Soekarno</h2>
              <img class="mr-10" src="img/article/presiden/soekarno.jpg" width="200" />
              <p>
                Beliau adalah Koesno Sosrodihardjo atau dikenal Soekarno adalah presiden pertama Indonesia yang menjabat pada periode 1945-1967. (Beliau lahir di Surabaya,6 Juni 1901-meninggal di Jakarta,21 Juni 1970 pada umur 69 tahun). Ia
                adalah seorang tokoh perjuangan yang memainkan peranan penting dalam memerdekakan bangsa Indonesia dari penjajahan Belanda. Ia adalah Proklamator Kemerdekaan Indonesia (bersama dengan Mohammad Hatta) yang terjadi pada
                tanggal 17 Agustus 1945. Soekarno adalah yang pertama kali mencetuskan konsep mengenai Pancasila sebagai dasar negara Indonesia dan ia sendiri yang menamainya.
              </p>
              <h2 class="heading-title">2. Soeharto</h2>
              <img class="mr-10" src="img/article/presiden/soeharto.jpg" width="200" />
              <p>
                Jenderal Besar TNI (Purn.) H. M. Soeharto atau Soeharto adalah presiden kedua Indonesia.(Beliau lahir di Kemusyuk, Yogyakarta, 8 Juni 1921-meninggal di Jakarta, 27 Januari 2008). Beliau adalah presiden terlama yang menjabat
                yaitu selama 32 tahun dari tahun 1967-1998. Selama hampir 32 tahun pemerintahannya Soeharto meletakkan pondasi pembangunan di Indonesia melalui Repelita. Dalam masa kekuasaannya, yang disebut Orde Baru, Soeharto membangun
                negara yang stabil dan mencapai kemajuan ekonomi dan infrastruktur. Soeharto juga merupakan sosok yang kontroversial karena membatasi kebebasan warga negara Indonesia keturunan Tionghoa, menduduki Timor Timur, pemaksaan azas
                tunggal Pancasila di berbagai bidang dan disebut sebagai salah satu rezim paling korup dalam sejarah dunia modern.
              </p>
              <h2 class="heading-title">3. B.J.Habibie</h2>
              <img class="mr-10" src="img/article/presiden/Habibie.jpg" width="200" />
              <p>
                Bacharuddin Jusuf Habibie atau dikenal B.J.Habibie adalah presiden Ketiga Indonesia. Sebelumnya, B.J. Habibie menjabat sebagai Wakil Presiden Republik Indonesia ke-7. B. J. Habibie menggantikan Soeharto yang mengundurkan
                diri dari jabatan presiden pada tanggal 21 Mei 1998. (Beliau lahir di Kota Parepare, 25 Juni 1936-meninggal di Jakarta, 11 September 2019. B.J.Habibie dikenal luas sebagai seorang profesor dan ilmuwan dalam teknologi aviasi
                internasional dan satu-satunya presiden Indonesia berlatarbelakang teknokrat. Dengan menjabat selama 2 bulan dan 7 hari (sebagai wakil presiden) dan juga selama 1 tahun dan 5 bulan (sebagai presiden), B. J. Habibie merupakan
                Wakil Presiden dan juga Presiden Indonesia dengan masa jabatan terpendek.
              </p>
              <h2 class="heading-title">4. Abdurrahman Wahid</h2>
              <img class="mr-10" src="img/article/presiden/gus dur.jpg" width="200" />
              <p>
                Abdurrahman Wahid atau yang akrab disapa Gus Dur adalah tokoh Muslim Indonesia dan pemimpin politik yang menjadi Presiden Indonesia yang keempat dari tahun 1999 hingga 2001. (Beliau lahir di Jombang, 7 September
                1940-meninggal di Jakarta, 30 Desember 2009 pada umur 69 tahun). Masa kepresidenan Abdurrahman Wahid dimulai pada 20 Oktober 1999 dan berakhir pada Sidang Istimewa MPR pada tahun 2001. Tepat 23 Juli 2001, kepemimpinannya
                digantikan oleh Megawati Soekarnoputri setelah mandatnya dicabut oleh MPR. Gus dur juga dikenal dengan sebutan"Bapak Pluralisme" karena toleransinya terhadap semua agama di Indonesia.
              </p>
              <h2 class="heading-title">5. Megawati Soekarnoputri</h2>
              <img class="mr-10" src="img/article/presiden/Megawati.jpg" width="200" />
              <p>
                Dyah Permata Megawati Setyawati Soekarnoputri atau umumnya lebih dikenal sebagai Megawati Soekarnoputri atau biasa disapa dengan panggilan "Mbak Mega" adalah Presiden Indonesia yang kelima yang menjabat sejak 23 Juli 2001
                sampai 20 Oktober 2004. (Beliau lahir pada tanggal 23 Januari 1947-sekarang). Ia merupakan presiden wanita Indonesia pertama dan putri dari presiden Indonesia pertama, Soekarno, yang kemudian mengikuti jejak ayahnya menjadi
                Presiden Indonesia. Megawati juga merupakan pernah menjadi ketua umum Partai Demokrasi Indonesia Perjuangan (PDI-P).
              </p>
              <h2 class="heading-title">6. Susilo Bambang Yudhoyono</h2>
              <img class="mr-10" src="img/article/presiden/sby.png" width="200" />
              <p>
                Jenderal TNI (HOR) (Purn.) Prof. Dr. Dr. (HC). H. Susilo Bambang Yudhoyono, M.A., GCB., AC. adalah Presiden Indonesia ke-6 yang menjabat sejak 20 Oktober 2004 hingga 20 Oktober 2014. (Beliau lahir pada tanggal 9 September
                1949-sekarang). Ia adalah Presiden pertama di Indonesia yang dipilih melalui jalur pemilu. Ia, bersama Wakil Presiden Muhammad Jusuf Kalla, terpilih dalam Pemilu Presiden 2004. berhasil melanjutkan pemerintahannya untuk
                periode kedua dengan kembali memenangkan Pemilu Presiden 2009, kali ini bersama Wakil Presiden Boediono. Sejak era reformasi dimulai, Susilo Bambang Yudhoyono merupakan Presiden Indonesia pertama yang menyelesaikan masa
                kepresidenan selama 5 tahun dan berhasil terpilih kembali untuk periode kedua.
              </p>
              <h2 class="heading-title">7. Joko Widodo</h2>
              <img class="mr-10" src="img/article/presiden/jokowi.jpg" width="200" />
              <p>
                Ir. H. Joko Widodo atau Jokowi adalah Presiden Indonesia yang mulai menjabat sejak 20 Oktober 2014. Terpilih dalam Pemilu Presiden 2014, Jokowi menjadi Presiden Indonesia pertama sepanjang sejarah yang bukan berasal dari
                latar belakang elite politik atau militer Indonesia. (Beliau lahir pada tanggal 21 Juni 1961-sekarang). Ia terpilih bersama Wakil Presiden Muhammad Jusuf Kalla dan kembali terpilih bersama Wakil Presiden Ma'ruf Amin dalam
                Pemilu Presiden 2019.
              </p>
            </div>
          `;
    setLocalTopic(topic);
  } else if (topic == "lpnk") {
    articleContainer.innerHTML = `
            <div class="sub-judul">
                <h1>LPNK</h1>
                 <p>07 Januari 2021</p>
            </div>
            <div class="article-content">
                <h1 class="heading-title">Pengertian LPNK</h1>
                <p>
                    <span style="font-weight: bold;">Lembaga Pemerintah Nonkementerian </span>(disingkat LPNK), dahulu bernama Lembaga Pemerintah Nondepartemen (LPND), adalah lembaga negara di Indonesia yang dibentuk untuk melaksanakan tugas pemerintahan tertentu dari Presiden. Kepala LPNK berada di bawah dan bertanggung jawab langsung kepada presiden melalui menteri atau pejabat setingkat menteri yang mengoordinasikan.
                </p>
                <h1 class="heading-title">Dasar Hukum Lembaga Pemerintah Non Kementerian</h1>
                <h3 class="mr-10">Berikut adalah peraturan-peraturan yang menjadi dasar LPNK:</h3>
                <p>
                    <ol>
                    <li>Keputusan Presiden 103 Tahun 2001 tentang Kedudukan, Tugas, Fungsi, Kewenangan, Susunan Organisasi, dan Tata Kerja Lembaga Pemerintah Non Departemen;</li>
                    <li>Keputusan Presiden Nomor 3 Tahun 2002 tentang Perubahan Atas Keputusan Presiden Nomor 103 Tahun 2001 Tentang Kedudukan, Tugas, Fungsi, Kewenangan, Susunan Organisasi, Dan Tata Kerja Lembaga Pemerintah Non Departemen</li>
                    <li>Keputusan Presiden Nomor 46 Tahun 2002 tentang Perubahan Atas Keputusan Presiden Nomor 103 Tahun 2001 Tentang Kedudukan, Tugas, Fungsi, Kewenangan, Susunan Organisasi, Dan Tata Kerja Lembaga Pemerintah Non Departemen Sebagaimana Telah Diubah Dengan Keputusan Presiden Nomor 3 Tahun 2002</li>
                    <li>Keputusan Presiden Nomor 30 Tahun 2003 tentang Perubahan Atas Keputusan Presiden Nomor 103 Tahun 2001 Tentang Kedudukan, Tugas, Fungsi, Kewenangan, Susunan Organisasi, Dan Tata Kerja Lembaga Pemerintah Non Departemen Sebagaimana Telah Beberapa Kali Diubah Terakhir Dengan Keputusan Presiden Nomor 46 Tahun 2002</li>
                    <li>Keputusan Presiden Nomor 9 Tahun 2004 tentang Perubahan Atas Keputusan Presiden Nomor 103 Tahun 2001 Tentang Kedudukan, Tugas, Fungsi, Kewenangan, Susunan Organisasi, Dan Tata Kerja Lembaga Pemerintah Non Departemen Sebagaimana Telah Beberapa Kali Diubah Terakhir Dengan Keputusan Presiden Nomor 30 Tahun 2003</li>
                    <li>Peraturan Presiden Nomor 64 Tahun 2005 tentang Perubahan Keenam atas Keputusan Presiden Nomor 103 Tahun 2001 Tentang Kedudukan, Tugas, Fungsi, Kewenangan, Susunan Organisasi, dan Tata Kerja Lembaga Pemerintah Non Departemen</li>
                    <li>Peraturan Presiden Nomor 145 Tahun 2015 tentang Perubahan Kedelapan atas Keputusan Presiden Nomor 103 Tahun 2001 tentang Kedudukan, Tugas, Fungsi, Kewenangan, Susunan Organisasi, dan Tata Kerja Lembaga Pemerintah Non Kementerian</li>
                    </ol>
                </p>    
                <h1 class="heading-title">Fungsi Lembaga Pemerintah Non Kementerian</h1>
                <p>Menurut Karyana dalam Modul 3 Pengorganisasian Kelembagaan Pemerintah di Pusat, Modul Sistem Administrasi Negara Kesatuan Republik Indonesia, pembentukan LPNK terbagi atas empat fungsi, sebagai berikut:
                    <ol>
                    <li>LPNK pendukung yang menyelenggarakan fungsi dukungan terhadap kementerian atau lembaga di bidang manajemen pemerintahan. Contohnya adalah LAN, BKN, BPKP, LKPP dan ANRI.</li>
                    <li>LPNK pendukung yang menyelenggarakan fungsi dukungan terhadap kementerian atau lembaga di bidang substansi pemerintahan tertentu. Contohnya adalah BASARNAS, BPS, BIN, BMKG dan BNPT.</li>
                    <li>LPNK yang menyelenggarakan fungsi pelayanan publik regulasi publik. Contohnya adalah BPOM dan BP2MI.</li>
                    <li>LPNK yang berfokus pada tugas dan fungsi pengkajian dan penelitian. Contohnya adalah LIPI, LAPAN, BPPT dan BATAN.</li>
                    </ol>
                </p>
                <h1 class="heading-title">LPNK Negara</h1>
                <h2 class="heading-title"> 1. Arsip Nasional Republik Indonesia</h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Logo_ANRI_%282016%29.jpg" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center">Arsip Nasional Republik Indonesia</summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Mustari Irawan</li>
                      <li>Koordinator : Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi</li>
                    </ul>
                  </details>
                <h2 class="heading-title"> 2. Badan Informasi Geospasial </h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Badan_Informasi_Geospasial_logo.png/1200px-Badan_Informasi_Geospasial_logo.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center">Badan Informasi Geospasial</summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Muh Aris Marfai </li>
                      <li>Koordinator : Menteri Perencanaan Pembangunan Nasional/Kepala Badan Perencanaan Pembangunan Nasional</li>
                    </ul>
                  </details>
                <h2 class="heading-title"> 3. Badan Intelijen Negara </h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/The_National_Intelligence_Agency_%28Indonesia%29.svg/1200px-The_National_Intelligence_Agency_%28Indonesia%29.svg.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center">Badan Intelijen Negara</summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala :  Budi Gunawan </li>
                      <li> Koordinator : Presiden</li>
                    </ul>
                  </details>
                <h2 class="heading-title"> 4. Badan Keamanan Laut Republik Indonesia  </h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/7/77/Logo_of_the_Maritime_Security_Agency_of_the_Republic_of_Indonesia.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center">Badan Keamanan Laut Republik Indonesia </summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala :  Aan Kurnia  </li>
                      <li> Koordinator : Menteri Koordinator Bidang Politik, Hukum, dan Keamanan </li>
                    </ul>
                  </details>
                <h2 class="heading-title"> 5. Badan Kepegawaian Negara </h2>
                <img class="mr-10" src="http://bkpsdm.muaraenimkab.go.id/upload/informasi_kepegawaian/Logo%20BKN.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center"> Badan Kepegawaian Negara</summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Bima Haria Wibisana </li>
                      <li> Koordinator : Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi </li>
                    </ul>
                  </details>
                <h2 class="heading-title"> 6. Badan Kependudukan dan Keluarga Berencana Nasional </h2>
                <img class="mr-10" src="https://lh3.googleusercontent.com/proxy/Xva0qYDl5ATY9tGZnQ867GLnFhYWxKlR3uOg1zhE2x9DR0tXiQaGa1OkCqdcRR_hBDPOLkUxvy_SHLqxBZ7MuRnQGKGXlX_eHQVlxC4dxFx9uPxPL7cp_gVDKjKl2C6dTvRak2YwGYRs" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center"> Badan Kependudukan dan Keluarga Berencana Nasional</summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Hasto Wardoyo </li>
                      <li>Koordinator : Menteri Kesehatan</li>
                    </ul>
                  </details>
                <h2 class="heading-title"> 7. Badan Koordinasi Penanaman Modal </h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/6/67/Logo_Kementerian_Investasi_-_BKPM_%282021%29.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center"> Badan Koordinasi Penanaman Modal</summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Bahlil Lahadalia</li>
                      <li>Koordinator : Presiden</li>
                    </ul>
                  </details>
                <h2 class="heading-title"> 8. Badan Meteorologi, Klimatologi, dan Geofisika </h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/1/12/Logo_BMKG_%282010%29.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center"> Badan Meteorologi, Klimatologi, dan Geofisika</summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Dwikorita Karnawati</li>
                      <li>Koordinator : Presiden</li>
                    </ul>
                  </details>
                <h2 class="heading-title"> 9. Badan Narkotika Nasional </h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/id/c/cf/Logo_BNN.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center"> Badan Narkotika Nasional</summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Petrus Reinhard Golose</li>
                      <li>Koordinator : Presiden</li>
                    </ul>
                  </details>
                <h2 class="heading-title"> 10. Badan Nasional Penanggulangan Bencana</h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Logo_BNPB.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center"> Badan Nasional Penanggulangan Bencana </summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Ganip Warsito</li>
                      <li>Koordinator : Presiden</li>
                    </ul>
                  </details>
                <h2 class="heading-title">11. Badan Nasional Penanggulangan Terorisme</h2>
                <img class="mr-10" src="https://static.republika.co.id/uploads/images/inpicture_slide/logo-badan-nasional-penanggulangan-terorisme_210119005500-954.jpg" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center">Badan Nasional Penanggulangan Terorisme</summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Boy Rafli Amar</li>
                      <li>Koordinator : Menteri Koordinator Bidang Politik, Hukum, dan Keamanan</li>
                    </ul>
                  </details>
                <h2 class="heading-title">12. Badan Nasional Pencarian dan Pertolongan</h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Basarnas_Logo.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center">Badan Nasional Pencarian dan Pertolongan</summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Henri Alfiandi</li>
                      <li>Koordinator : Menteri Perhubungan</li>
                    </ul>
                  </details>
                <h2 class="heading-title">13. Badan Pariwisata dan Ekonomi Kreatif</h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Seal_of_the_Ministry_of_Tourism_and_Creative_Economy_of_the_Republic_of_Indonesia_%28Indonesian_version%29.svg/1200px-Seal_of_the_Ministry_of_Tourism_and_Creative_Economy_of_the_Republic_of_Indonesia_%28Indonesian_version%29.svg.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center"> Badan Pariwisata dan Ekonomi Kreatif</summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Sandiaga Salahuddin Uno </li>
                      <li>Koordinator : Menteri Pariwisata dan Ekonomi Kreatif Indonesia </li>
                    </ul>
                  </details>
                <h2 class="heading-title">14. Badan Pelindungan Pekerja Migran Indonesia</h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/BP2MI_logo.png/360px-BP2MI_logo.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center"> Badan Pelindungan Pekerja Migran Indonesia</summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Benny Rhamdani </li>
                      <li>Koordinator : Menteri Ketenagakerjaan</li>
                    </ul>
                  </details>
                <h2 class="heading-title">15. Badan Pengawas Keuangan dan Pembangunan</h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/1/11/BPKP_Logo.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center"> Badan Pengawas Keuangan dan Pembangunan</summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Muhammad Yusuf Ateh </li>
                      <li>Koordinator : Presiden</li>
                    </ul>
                  </details>
                <h2 class="heading-title">16. Badan Pengawas Tenaga Nuklir</h2>
                <img class="mr-10" src="https://jdih.bapeten.go.id/favicon.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center"> Badan Pengawas Tenaga Nuklir</summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Jazi Eko Istiyanto </li>
                      <li>Koordinator : Menteri Riset dan Teknologi Indonesia/Kepala Badan Riset Inovasi Nasional Indonesia</li>
                    </ul>
                  </details>
                <h2 class="heading-title">17. Badan Pengawas Obat dan Makanan</h2>
                <img class="mr-10" src="https://d23ndc1l41hue8.cloudfront.net/wp-content/uploads/2021/01/LOGO_BPOM-e1611338664504.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center">Badan Pengawas Obat dan Makanan</summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Penny Kusumastuti Lukito </li>
                      <li>Koordinator : Menteri Kesehatan </li>
                    </ul>
                  </details>
                <h2 class="heading-title">18. Badan Pengkajian dan Penerapan Teknologi </h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Logo_BPPT.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center">Badan Pengkajian dan Penerapan Teknologi </summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Hammam Riza </li>
                      <li>Koordinator : Menteri Riset dan Teknologi Indonesia/Kepala Badan Riset Inovasi Nasional Indonesia </li>
                    </ul>
                  </details>
                <h2 class="heading-title">19. Badan Perencanaan Pembangunan Nasional </h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Logo_Bappenas_Indonesia_%28National_Development_Planning_Agency%29.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center">Badan Perencanaan Pembangunan Nasional </summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Suharso Monoarfa</li>
                      <li>Koordinator : Presiden </li>
                    </ul>
                  </details>
                <h2 class="heading-title">20. Badan Pertanahan Nasional </h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Logo_BPN-KemenATR_%282017%29.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center">Badan Pertanahan Nasional </summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Sofyan Djalil </li>
                      <li>Koordinator : Menteri Agraria dan Tata Ruang </li>
                    </ul>
                  </details>
                <h2 class="heading-title">21. Badan Pusat Statistik  </h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/2/28/Lambang_Badan_Pusat_Statistik_%28BPS%29_Indonesia.svg" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center">Badan Pusat Statistik  </summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Suhariyanto</li>
                      <li>Koordinator : Presiden </li>
                    </ul>
                  </details>
                <h2 class="heading-title">22. Badan Siber dan Sandi Negara</h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_BSSN_new.png/1200px-Logo_BSSN_new.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center">Badan Siber dan Sandi Negara</summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Hinsa Siburian   </li>
                      <li>Koordinator : Presiden </li>
                    </ul>
                  </details>
                <h2 class="heading-title">23. Badan Standardisasi Nasional</h2>
                <img class="mr-10" src="http://technology-indonesia.com/wp-content/uploads/2016/11/www.technology-indonesia.com_images_bsn1.gif" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center">Badan Standardisasi Nasional</summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Kukuh S. Achmad </li>
                      <li>Koordinator : Menteri Riset dan Teknologi Indonesia/Kepala Badan Riset Inovasi Nasional Indonesia </li>
                    </ul>
                  </details>
                <h2 class="heading-title">24. Badan Tenaga Nuklir Nasional</h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Logo_Badan_Tenaga_Nuklir_Nasional_%282013%29.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center">Badan Tenaga Nuklir Nasional</summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Anhar Riza Antariksawan </li>
                      <li>Koordinator : Menteri Riset dan Teknologi Indonesia/Kepala Badan Riset Inovasi Nasional Indonesia </li>
                    </ul>
                  </details>
                <h2 class="heading-title">25. Lembaga Administrasi Negara </h2>
                <img class="mr-10" src="https://media.neliti.com/media/organisations/logo-None-lembaga-administrasi-negara.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center">Lembaga Administrasi Negara </summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Adi Suryanto </li>
                      <li>Koordinator : Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi </li>
                    </ul>
                  </details>
                <h2 class="heading-title">26. Lembaga Ilmu Pengetahuan Indonesia</h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/LIPI_logo_2013-2014.svg/1200px-LIPI_logo_2013-2014.svg.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center">Lembaga Ilmu Pengetahuan Indonesia</summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Laksana Tri Handoko </li>
                      <li>Koordinator : Menteri Riset dan Teknologi Indonesia/Kepala Badan Riset Inovasi Nasional Indonesia </li>
                    </ul>
                  </details>
                <h2 class="heading-title">27. Lembaga Ketahanan Nasional Republik Indonesia  </h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Logo_Lemhannas.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center">Lembaga Ketahanan Nasional Republik Indonesia  </summary>
                    <ul style="list-style: none; text-align: center;">
                        <li>Kepala : Agus Widjojo</li>
                        <li>Koordinator : Menteri Pertahanan </li>
                    </ul>
                  </details>
                <h2 class="heading-title">28. Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah </h2>
                <img class="mr-10" src="https://static.wikia.nocookie.net/logopedia/images/b/bd/Lembaga_Kebijakan_Pengadaan_Barang-Jasa_Pemerintah.png/revision/latest?cb=20190907054231" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center">Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah </summary>
                    <ul style="list-style: none; text-align: center;">
                        <li>Kepala : Roni Dwi Susanto</li>
                        <li>Koordinator : Menteri Perencanaan Pembangunan Nasional/Kepala Badan Perencanaan Pembangunan Nasional </li>
                    </ul>
                  </details>
                <h2 class="heading-title">29. Lembaga Penerbangan dan Antariksa Nasional </h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/LAPAN_logo_2015.svg/1200px-LAPAN_logo_2015.svg.png" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center">Lembaga Penerbangan dan Antariksa Nasional </summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Thomas Djamaluddin </li>
                      <li>Koordinator : Menteri Riset dan Teknologi Indonesia/Kepala Badan Riset Inovasi Nasional Indonesia  </li>
                    </ul>
                  </details>
                <h2 class="heading-title">30. Perpustakaan Nasional Republik Indonesia</h2>
                <img class="mr-10" src="https://upload.wikimedia.org/wikipedia/commons/e/e2/LOGO-PERPUSNAS.svg" alt="Logo" width="200px">
                <details>
                    <summary style="text-align: center">Perpustakaan Nasional Republik Indonesia</summary>
                    <ul style="list-style: none; text-align: center;">
                      <li>Kepala : Muh. Syarif Bando </li>
                      <li>Koordinator : Menteri Pendidikan dan Kebudayaan  </li>
                    </ul>
                  </details>
            </div>
        `;
    setLocalTopic(topic);
  } else if (topic == "wapres") {
    articleContainer.innerHTML = `
            <div class="sub-judul">
                <h1>Wakil Presiden</h1>
                 <p>07 Januari 2021</p>
            </div>
            <div class="article-content">
                <p>
                    Wakil Presiden adalah jabatan pemerintahan yang berada satu tingkat lebih rendah daripada Presiden. Biasanya dalam urutan suksesi, wakil presiden akan mengambil alih jabatan presiden bila ia berhalangan sementara atau tetap. Di
                    Indonesia dan negara-negara Amerika Latin, wakil presiden dipilih langsung oleh warga negara dan merupakan satu paket dengan presiden. Dalam sistem pemilihan umum lain, jabatan wakil presiden dapat juga diserahkan pada kandidat yang
                    memperoleh suara kedua terbanyak, atau ditunjuk langsung oleh presiden. Wakil Presiden umumnya ditetapkan oleh konstitusi oleh suatu negara untuk mendampingi sang presiden jika presiden menjalankan tugas-tugas kenegaraan di negara
                    lain atau jika presiden menyerahkan jabatan kepresidenan baik pengunduran diri atau halangan dalam menjalankan tugas seperti misalnya mengalami kematian saat menjabat presiden.
                </p>
                <h2 class="heading-title">Tugas dan Wewenang Wakil Presiden</h2>
                <ul type="square">
                    <li>Membantu presiden dalam melakukan kewajibannya</li>
                    <li>Menggantikan presiden sampai habis waktunya jika presiden meninggal dunia, berhenti atau tidak dapat melakukan kewajibannya dalam masa jabatan yang telah ditentukan</li>
                    <li>Memperhatikan secara khusus, menampung masalah yang perlu penanganan menyangkut bidang tugas kesejahteraan rakyat</li>
                    <li>Mengajukan Rancangan Undang-Undang kepada Dewan Perwakilan Rakyat (DPR). Presiden melakukan pembahasan dan pemberian persetujuan atas RUU bersama DPR serta mengesahkan RUU menjadi UU.</li>
                    <li>
                      Melakukan pengawasan operasional pembangunan, dengan bantuan departemen, lembaga non departemen, dalam hal ini inspektur jenderal dari departemen yang bersangkutan atau depti pengawasan dari lembaga non departemen yang bersangkutan.
                    </li>
                    <li>Wewenang wakil presiden yakni menggantikan atau mewakili presiden saat melaksanakan tugas dan kewajiban serta wewenang jabatan presiden namun sebelumnya telah mendapatkan perintah atau diberi kuasa oleh presiden.</li>
                    <li>Wakil presiden berwenang untuk membantu presiden di dalam tugas yang sudah tercantum di undang-undang.</li>
                    <li>Wakil presiden tidak lagi disebut wakip presiden melainkan menjadi presiden dan tidak terjadi rangkap jabatan dengan alasan yang sudah di atur.</li>
                    <li>
                      Jika wakil presiden diminta oleh perorangan maupun organisasi sebagai pembicara atau sekedar tamu, dalam hal ini wakil presiden melakukan suatu kegiatan secara mandiri dan tidak memerlukan perintah maupun persetujuan dari presiden.
                    </li>
                </ul>
                <h2 class="heading-title">
                    Berikut adalah nama-nama Wakil Presiden yang pernah menjabat dari zaman kemerdekaan-sekarang :
                </h2>
                <h2 class="heading-title">1. Mohammad Hatta</h2>
                <img class="mr-10" src="img/article/wakil-presiden/Mohammad Hatta.jpg" width="200" height="260">
                <p>
                    Dr. (H.C.) Drs. H. Mohammad Hatta (populer sebagai Bung Hatta; dengan nama Mohammad Athar 12 Agustus 1902 – 14 Maret 1980) adalah negarawan dan ekonom Indonesia yang menjabat sebagai Wakil Presiden Indonesia pertama. Ia bersama
                    Soekarno memainkan peranan sentral dalam perjuangan kemerdekaan Indonesia dari penjajahan Belanda sekaligus memproklamirkannya pada 17 Agustus 1945. Ia pernah menjabat sebagai Perdana Menteri dalam Kabinet Hatta I, Hatta II, dan
                    RIS. Pada 1956, ia mundur dari jabatan wakil presiden karena berselisih dengan Presiden Soekarno.
                  </p>
                  <p>
                    Hatta dikenal akan komitmennya pada demokrasi. Ia mengeluarkan Maklumat X yang menjadi tonggak awal demokrasi Indonesia. Di bidang ekonomi, pemikiran dan sumbangsihnya terhadap perkembangan koperasi membuat ia dijuluki sebagai Bapak
                    Koperasi.
                  </p>
                  <p>
                    Hatta meninggal pada 1980 dan jenazahnya dimakamkan di Tanah Kusir, Jakarta. Pemerintah Indonesia menetapkannya sebagai salah seorang Pahlawan Nasional Indonesia pada tanggal 23 Oktober 1986 melalui Keppres nomor 081/TK/1986.
                    Namanya bersanding dengan Soekarno sebagai Dwi-Tunggal dan disematkan pada Bandar Udara Soekarno-Hatta. Di Belanda, namanya diabadikan sebagai nama jalan di kawasan perumahan Zuiderpolder, Haarlem.
                  </p>
                <h2 class="heading-title">2. Sri Sultan Hamengkubuwana IX</h2>
                <img class="mr-10" src="img/article/wakil-presiden/Hamengkubuwana IX.jpg" width="200" height="260">
                <p>
                    Sri Sultan Hamengkubuwana IX atau Gusti Raden Mas Dorodjatun, (12 April 1912 – 2 Oktober 1988) adalah seorang sultan yang pernah memimpin di Kesultanan Yogyakarta dan Gubernur Daerah Istimewa Yogyakarta yang pertama setelah
                    kemerdekaan Indonesia. Memerintah antara tahun 1940-1988, beliau adalah penguasa Yogyakarta terlama dalam sejarah (48 tahun). selain itu pernah menjabat sebagai Wakil Presiden Indonesia yang kedua antara tahun 1973 dan 1978 dan juga
                    dikenal sebagai Bapak Pramuka Indonesia serta pernah menjabat sebagai Ketua Kwartir Nasional Gerakan Pramuka.
                  </p>
                <h2 class="heading-title">3. Adam Malik</h2>
                <img class="mr-10" src="img/article/wakil-presiden/Adam Malik.jpg" width="200" height="260">
                <p>
                    H. Adam Malik Batubara (22 Juli 1917 – 5 September 1984) adalah seorang politikus Indonesia dan mantan jurnalis yang menjabat sebagai wakil presiden ketiga. Sebelumnya ia menjabat sebagai ketua parlemen, menteri luar negeri,
                    presiden Majelis Umum Perserikatan Bangsa-Bangsa, dan jurnalis. Adam Malik ditetapkan sebagai salah seorang Pahlawan Nasional Indonesia pada tanggal 6 November 1998 berdasarkan Keppres Nomor 107/TK/1998.
                  </p>
                  <p>
                    Adam Malik adalah anak dari pasangan Abdul Malik Batubara dan Salamah Lubis.Ayahnya, Abdul Malik, adalah seorang pedagang kaya di Pematangsiantar.Adam Malik adalah anak ketiga dari sepuluh bersaudara.Adam Malik menempuh pendidikan
                    dasarnya di Hollandsch-Inlandsche School Pematangsiantar. Ia melanjutkan di Sekolah Agama Madrasah Sumatera Thawalib Parabek di Bukittinggi, namun hanya satu setengah tahun saja karena kemudian pulang kampung dan membantu orang tua
                    berdagang.
                  </p>
                  <p>
                    Keinginannya untuk maju dan berbakti kepada bangsa mendorong Adam Malik untuk pergi merantau ke Jakarta. Pada usia 20 tahun, ia bersama dengan Soemanang, Albert Manoempak Sipahoetar, Armijn Pane, Abdul Hakim, dan Pandu Kartawiguna
                    memelopori berdirinya Kantor Berita Antara.
                  </p>
                <h2 class="heading-title">4. Umar Wirahadikusumah</h2>
                <img class="mr-10" src="img/article/wakil-presiden/Umarwirahadi.jpg" width="200" height="260">
                <p>Jenderal TNI (Purn.) Umar Wirahadikusumah (10 Oktober 1924 – 21 Maret 2003) adalah Wakil Presiden Indonesia keempat yang menjabat antara 1983 dan 1988 dan menjadi wakil presiden pertama yang berasal dari suku Sunda.</p>
                <p>
                  Umar Wirahadikusumah lahir di Situraja, Sumedang, Jawa Barat pada tanggal 10 Oktober 1924 dari pasangan Raden Rangga Wirahadikusumah dan Raden Ratnaringrum. Umar dilahirkan sebagai keluarga bangsawan dan menyelesaikan pendidikannya
                  di bawah Pemerintah Kolonial Belanda.
                </p>
                <p>
                  Pada tahun 1943, dengan Indonesia saat itu di bawah pendudukan Jepang, Umar bersama dengan kelompok pemuda bergabung dengan Pasukan Pembela Tanah Air (PETA). Sebelum masuk PETA, ia mendapatkan pelatihan militer Dai Nippon,
                  Seinendojo, di Tangerang, selama 4 bulan. Keputusan Umar yang bergabung menjadi prajurit tidak dikehendaki oleh keluarganya. Kelompok-kelompok pemuda memberikan beberapa pelatihan fisik yang Umar melakukan. Hal ini diikuti pada
                  Oktober 1944 oleh PETA, pasukan tambahan yang terdiri dari rekrutan Indonesia yang dimaksudkan untuk membantu Jepang dalam melawan Sekutu. Ketika Indonesia memproklamasikan kemerdekaannya, Umar, seperti banyak pemuda lain dari usia
                  yang sama bergabung dengan Tentara Keamanan Rakyat, cikal bakal TNI.
                </p>
                <p>Umar menikah dengan Karlina dan memiliki dua anak perempuan. Ia juga adalah paman dari Agus Wirahadikusumah, seorang perwira militer yang menjadi Panglima Kostrad.</p>
                <h2 class="heading-title">5. Soedharmono</h2>
                <img class="mr-10" src="img/article/wakil-presiden/Sudharmono.jpg" width="200" height="260">
                <p>Letnan Jenderal TNI (Purn.) H. Soedharmono, S.H. (12 Maret 1927 – 25 Januari 2006) adalah Wakil Presiden Indonesia kelima yang menjabat selama periode 1988—1993 mendampingi Soeharto.</p>
                <p>
                  Lahir di Cerme, Gresik pada tanggal 12 Maret 1927, Ia adalah anak dari Soepijo Wirodiredjo, yang merupakan anak seorang carik atau sekretaris Desa Kabalan, Kecamatan Kanor, Bojonegoro. Sedang ibunya bernama Raden Nganten Sukarsi
                  yang merupakan putri asisten wedana (sekarang disebut camat) Kecamatan Balen, Bojonegoro. Jadi Sudharmono adalah cucu para priyayi Bojonegoro. Ayahnya mengawali karier menjadi pegawai magang di kantor Kecamatan Balen. Saat itulah
                  Soepijo bertemu dengan Sukarsi. Waktu bertemu, Sukarsi adalah seorang janda karena suami terdahulu meninggal dunia. Cinta Soepijo dan Sukarsi akhirnya menjalin cinta dan menikah. Soepijo lalu diterima kerja menjadi juru tulis di
                  Kecamatan Cerme, Gresik. Di sinilah pada tahun 1927 Sudharmono lahir. Kakaknya, Mbak Siti, lahir pada tahun 1924. Dan kakak tertuanya, Mas Sunar yang lahir pada tahun 1921. Ketika ia berusia 2 tahun, sang ayah dipindah ke Tuban
                  menjadi juru tulis di Kepatihan (Wakil Bupati). Tapi di Tuban inilah sang ibu meninggal dunia saat melahirkan anak keempat. ia sudah menjadi yatim piatu dari kecil. Ibunya Soekarsi meninggal ketika melahirkan adik bungsu Soedharmono
                  (1930). Ayahnya R. Wiroredjo meninggal 6 bulan kemudian karena sakit. beberapa bulan kemudian saat di rawat di Surabaya. Tapi sebelum meninggal, ayahnya sempat dipindah ke Kec. Tambakrejo, Kab. Bojonegoro.
                </p>
                <h2 class="heading-title">6. Try Sutrisno</h2>
                <img class="mr-10" src="img/article/wakil-presiden/Try Sutrisno.jpg" width="200" height="260">
                <p>
                    Jenderal TNI (Purn.) Try Sutrisno (15 November 1935) adalah Wakil Presiden Indonesia ke-6 periode 1993-1998. Sebelum diangkat sebagai Wakil Presiden Indonesia, Try menjabat sebagai Panglima Angkatan Bersenjata Republik Indonesia.
                  </p>
                  <p>
                    Try Sutrisno lahir pada 15 November 1935 di Surabaya, Jawa Timur. Ayahnya Subandi adalah sopir ambulans, dan ibunya Mardiyah adalah ibu rumah tangga. Setelah Proklamasi Kemerdekaan Indonesia, Belanda kembali untuk mengklaim kembali
                    Indonesia sebagai koloni mereka. Try Sutrisno dan keluarganya pindah dari Surabaya ke Mojokerto. Ayahnya bekerja sebagai petugas medis untuk Batalyon Angkatan Darat Poncowati, memaksa Try Sutrisno untuk berhenti sekolah dan mencari
                    nafkah sebagai penjual rokok dan penjual koran. Pada usia 13, Try Sutrisno ingin bergabung dengan Batalyon Poncowati dan melawan tetapi tidak ada yang menganggapnya serius dan ia akhirnya dipekerjakan sebagai kurir.Tugas Try
                    Sutrisno adalah untuk mencari informasi ke daerah-daerah yang diduduki oleh tentara Belanda serta mengambil obat untuk Angkatan Darat Indonesia. Akhirnya pada tahun 1949, Belanda mundur dan mengakui kemerdekaan Indonesia. Try
                    Sutrisno dan keluarganya kemudian kembali ke Surabaya di mana ia menyelesaikan pendidikannya pada tahun 1956. Setelah lulus dari SMA, Try Sutrisno ingin mendaftar di ATEKAD (Akademi Teknik Angkatan Darat). Dia berpartisipasi dan
                    lulus dalam ujian masuk, sebelum gagal dalam pemeriksaan fisik. Meskipun demikian, Mayor Jenderal GPH Djatikusumo tertarik dengan Try dan memanggilnya kembali. Try Sutrisno berpartisipasi dalam pemeriksaan psikologis di Bandung,
                    Jawa Barat, dan ia diterima di ATEKAD.
                  </p>
                <h2 class="heading-title">8. Megawati</h2>
                <img class="mr-10" src="img/article/wakil-presiden/Megawati Sukarnoputri.jpg" width="200" height="260">
                <p>
                    Dyah Permata Megawati Setyawati Soekarnoputri atau umumnya lebih dikenal sebagai Megawati Soekarnoputri atau biasa disapa dengan panggilan "Mbak Mega" (23 Januari 1947) adalah Presiden Indonesia yang kelima yang menjabat sejak 23
                    Juli 2001 sampai 20 Oktober 2004. Ia merupakan presiden wanita Indonesia pertama dan putri dari presiden Indonesia pertama, Soekarno, yang kemudian mengikuti jejak ayahnya menjadi Presiden Indonesia. Pada 20 September 2004, ia kalah
                    suara dari Susilo Bambang Yudhoyono dalam Pemilu Presiden 2004 putaran yang kedua.
                  </p>
                  <p>
                    Ia menjadi presiden setelah MPR mengadakan Sidang Istimewa MPR pada tahun 2001. Sidang Istimewa MPR ini diadakan dalam menanggapi langkah Presiden Abdurrahman Wahid (Gus Dur) yang membekukan lembaga MPR/DPR dan Partai Golkar. Ia
                    dilantik pada 23 Juli 2001. Sebelumnya dari tahun 1999–2001, ia menjabat Wakil Presiden pada pemerintahan Presiden Abdurrahman Wahid (Gus Dur).Megawati juga merupakan ketua umum Partai Demokrasi Indonesia Perjuangan (PDI-P) sejak
                    memisahkan diri dari Partai Demokrasi Indonesia pada tahun 1999.
                  </p>
                <h2 class="heading-title">9. Hamzah Haz</h2>
                <img class="mr-10" src="img/article/wakil-presiden/Hamzah Haz.jpg" width="200" height="260">
                <p>
                    Dr. H. Hamzah Haz, M.A., Ph.D. (15 Februari 1940) adalah Wakil Presiden Republik Indonesia kesembilan yang menjabat sejak tahun 2001 bersamaan dengan naiknya Megawati Soekarnoputri menjadi Presiden Republik Indonesia. Dalam
                    kepartaian, Hamzah Haz menjabat sebagai Ketua Umum Partai Persatuan Pembangunan (PPP) tahun 1998–2007.
                  </p>
                  <p>
                    Pada 1961 setelah lulus dari Sekolah Menengah Ekonomi Atas (SMEA) di Pontianak, ia menjadi Wartawan surat kabar Bebas, Hamzah pernah kuliah di Yogyakarta sampai lulus pada 1965 dan melanjutkan kuliah di Jurusan Ilmu Perusahaan
                    Fakultas Ekonomi Universitas Tanjungpura Pontianak. Selama menuntut ilmu di Pontianak, ia juga merupakan Ketua Presidium KAMI Konsulat Pontianak.
                  </p>
                <h2 class="heading-title">10. Boediono</h2>
                <img class="mr-10" src="img/article/wakil-presiden/Boediono.jpeg" width="200" height="260">
                <p>
                    Prof. Dr. H. Boediono, B.Sc., M.Ec. (25 Februari 1943) adalah Wakil Presiden Indonesia kesebelas yang menjabat sejak 20 Oktober 2009 hingga 20 Oktober 2014. Ia terpilih dalam Pilpres 2009 bersama pasangannya, presiden yang sedang
                    menjabat, Susilo Bambang Yudhoyono.
                  </p>
                  <p>
                    Sebelumnya ia pernah menjabat sebagai Gubernur Bank Indonesia, Menteri Koordinator Bidang Perekonomian, Menteri Keuangan, Menteri Negara Perencanaan dan Pembangunan Nasional/Kepala Bappenas, dan Direktur Bank Indonesia (sekarang
                    setara Deputi Gubernur). Saat ini ia juga mengajar di Fakultas Ekonomi Universitas Gadjah Mada sebagai guru besar.Oleh relasi dan orang-orang yang sering kali berinteraksi dengannya ia dijuluki The man to get the job done.
                  </p>
                <h2 class="heading-title">11. Jusuf Kalla</h2>
                <img class="mr-10" src="img/article/wakil-presiden/Jusuf Kalla.jpg" width="200" height="260">
                <p>
                    Dr. (H.C.) Drs. H. Muhammad Jusuf Kalla (15 Mei 1942), sering ditulis sebagai Jusuf Kalla atau JK adalah pengusaha dan politisi Indonesia yang menjabat sebagai Wakil Presiden Indonesia (Wapres) ke-10 dan ke-12. Ia merupakan Wakil
                    Presiden Indonesia pertama yang menjabat 2 kali, ia menjadi Wapres dalam 2 masa jabatan yang tidak berturut-turut. Dalam masa jabatannya yang pertama, periode 2004-2009, ia merangkap sebagai Ketua Umum Partai Golongan Karya. JK
                    menjadi calon presiden bersama Wiranto dalam Pilpres 2009 yang diusung Golkar dan Hanura.
                  </p>
                  <p>
                    Pada 19 Mei 2014, JK secara resmi dicalonkan sebagai cawapres mendampingi Joko Widodo dalam deklarasi pasangan capres-cawapres Jokowi-JK, di Gedung Joang '45, Jakarta Pusat. Pasangan ini diusung oleh lima partai yaitu PDI
                    Perjuangan, Partai Nasdem, Partai Kebangkitan Bangsa, Partai Hanura, dan PKPI.
                  </p>
                <h2 class="heading-title">12. Ma'ruf Amin</h2>
                <img class="mr-10" src="img/article/wakil-presiden/Ma'ruf Amin.jpg" width="200" height="260">
                <p>
                    <p>
                        Prof. Dr. (H.C.) K. H. Ma'ruf Amin (11 Maret 1943) adalah politisi, ulama dan dosen Indonesia berasal dari Suku Banten yang saat ini menjabat sebagai Wakil Presiden Indonesia. Ma'ruf pernah duduk sebagai anggota Dewan Pertimbangan
                        Presiden pada masa jabatan Presiden Susilo Bambang Yudhoyono.
                      </p>
                      <p>
                        Pada 9 Agustus 2018, beliau diumumkan sebagai calon wakil presiden pada pemilihan umum Presiden Indonesia 2019 oleh Presiden Joko Widodo, yang ingin maju sekali lagi dalam pemilihan umum Presiden Indonesia 2019 sebagai calon
                        presiden.Sebelum diumumkan sebagai calon wakil presiden, Joko Widodo sempat memberikan pernyataan bahwa huruf pertama nama depan pasangannya adalah M.
                      </p>
            </div>
    `;
    setLocalTopic(topic);
  } else if (topic == "menteri") {
    articleContainer.innerHTML = `  
            <div class="sub-judul">
                <h1>Menteri</h1>
                 <p>07 Januari 2021</p>
            </div>
            <div class="article-content">
                <h1 class="heading-title">Apa itu Menteri?</h1>
                <p>
                    Menteri (bahasa Inggris: minister) adalah jabatan politik yang memegang suatu jabatan publik signifikan dalam pemerintah. Menteri biasanya memimpin suatu kementerian dan dapat merupakan anggota dari suatu kabinet, yang umumnya dipimpin oleh seorang raja/ratu, gubernur jenderal, presiden, atau perdana menteri.
                </p>
                <h1 class="heading-title">Tugas-tugas Menteri</h1>
                <h3 class="mr-10">Berikut adalah tugas-tugas menteri : </h3>
                <p>
                    <ul>
                        <li>
                          <p>Bertanggung jawab untuk mengikuti koordinasi untuk terlaksana program yang diberikan</p>
                        </li>
                        <li>
                          <p>Menampung dan memikirkan tentang penyelesaian suatu masalah yang sedang mencuat di dalam bidangnya</p>
                        </li>
                        <li>
                          <p>Menjalin hubungan dan kerja sama yang baik dengan Direktur Jenderal serta pimpinan atau ketua lembaga pemerintahan yang Anda di Indonesia.</p>
                        </li>
                        <li>
                          <p>Bekerja sama dan menjalin hubungan yang baik dengan instansi atau departemen lain di pemerintahan.t.</p>
                        </li>
                        <li>
                          <p>Memberikan laporan kepada Presiden, Menteri Koordinator, dan Menteri Pimpinan Departemen. Laporan tersebut berisi tentang data-data penting, pertimbangan, dan saran dari bidang atau divide yang menjadi tanggung jawabnya.</p>
                        </li>
                      </ul>
                </p>   
                <h1 class="heading-title">Susunan organisasi</h1>
                <p class="mr-10">Dalam kementrian negara, susunan organisasi tetap diatur dalam UU No. 39 Tahun 2008 Pasal 9 terdiri atas unsur: </p>
                <p>
                    <ol>
                    <li>Menteri sebagai pemimpin. </li>
                    <li>Sekretariat jenderal sebagai pembantu pemimpin. </li>
                    <li>Direktorat jenderal sebagai pelaksanaan tugas pokok. </li>
                    <li>Inspektorat jenderal sebagai pengawas.</li>
                    <li>Badan atau pusat menjadi pendukung dari susunan organisasi. </li>
                    <li>Kementerian yang menangani dalam negeri dan luar negeri melaksanaan tugas pokok di daerah dan/atau perwakilan luar negeri sesuai dengan peraturan perundang-undangan.</li>
                    <li>Kementerian yang menangani urusan agama, hukum, keuangan, dan keamanan memiliki unsur pelaksana tugas pokok di daerah.
                    </li>
                    </ol>
                </p>    
                <h1 class="heading-title">Kabinet Menteri</h1>
                <h2 class="heading-title"> 1. Menteri Koordinator Bidang Politik, Hukum, dan Keamanan</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/01-MAHFUD-MD-MENTERI-KOORDINATOR-BIDANG-POLITIK-HUKUM-DAN-KEAMANAN-178x230.jpg" alt="Logo" width="200px">
                <h3>Mohammad Mahfud Md.</h3>

                <h2 class="heading-title"> 2. Menteri Koordinator Bidang Perekonomian</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/02-AIRLANGGA-HARTARTO-MENTERI-KOORDINATOR-BIDANG-PEREKONOMIAN-180x230.jpg" alt="Logo" width="200px">
                <h3>Airlangga Hartarto.</h3>

                <h2 class="heading-title"> 3. Menteri Koordinator Bidang Pembangunan Manusia dan Kebudayaan</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/03-MUHADJIR-EFFENDY-MENTERI-KOORDINATOR-BIDANG-PEMBANGUNAN-MANUSIA-DAN-KEBUDAYAAN-178x230.jpg" alt="Logo" width="200px">
                <h3>Muhadjir Effendy</h3>

                <h2 class="heading-title"> 4. Kepala Staf Kepresidenan</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/36-MOELDOKO-KEPALA-STAF-KEPRESIDENAN-178x230.jpg" alt="Logo" width="200px">
                <h3>Moeldoko</h3>

                <h2 class="heading-title"> 5. Menteri Koordinator Bidang Kemaritiman dan Investasi</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/04-LUHUT-BINSAR-PANDJAITAN-MENTERI-KOORDINATOR-BIDANG-KEMARITIMAN-DAN-INVESTASI-179x230.jpg" alt="Logo" width="200px">
                <h3>Luhut Binsar Pandjaitan</h3>

                <h2 class="heading-title"> 6. Menteri Sekretaris Negara</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/05-PRATIKNO-MENTERI-SEKRETARIS-NEGARA-178x230.jpg" alt="Logo" width="200px">
                <h3>Pratikno</h3>
                
                <h2 class="heading-title"> 7. Menteri Dalam Negeri</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/06-TITO-KARNAVIAN-MENTERI-DALAM-NEGERI-178x230.jpg" alt="Logo" width="200px">
                <h3>Muhammad Tito Karnavian</h3>
                
                <h2 class="heading-title"> 8. Menteri Luar Negeri</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/07-RETNO-MARSUDI-MENTERI-LUAR-NEGERI-180x230.jpg" alt="Logo" width="200px">
                <h3>Retno Lestari Priansari Marsudi</h3>
                
                <h2 class="heading-title"> 9. Menteri Pertahanan</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/08-PRABOWO-MENTERI-PERTAHANAN-180x230.jpg" alt="Logo" width="200px">
                <h3>Prabowo Subianto</h3>
                
                <h2 class="heading-title"> 10. Menteri Agama</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/09-FACHRUL-RAZI-MENTERI-AGAMA-180x230.jpg" alt="Logo" width="200px">
                <h3>Fachrul Razi</h3>
                
                <h2 class="heading-title"> 12. Menteri Hukum dan Hak Asasi Manusia</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/10-YASONNA-H.-LAOLY-MENTERI-HUKUM-DAN-HAK-ASASI-MANUSIA-179x230.jpg" alt="Logo" width="200px">
                <h3>Yasonna H. Laoly</h3>
                
                <h2 class="heading-title"> 13. Menteri Keuangan</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/11-SRI-MULYANI-INDRAWATI-MENTERI-KEUANGAN-182x230.jpg" alt="Logo" width="200px">
                <h3>Sri Mulyani Indrawati</h3>
                
                <h2 class="heading-title"> 14. Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/12-NADIEM-MAKARIM-MENTERI-PENDIDIKAN-DAN-KEBUDAYAAN-179x230.jpg" alt="Logo" width="200px">
                <h3>Nadiem Anwar Makarim</h3>
                
                <h2 class="heading-title"> 15. Menteri Kesehatan</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2020/12/20201222-menker-budi-gunadi-230x230.png" alt="Logo" width="200px">
                <h3>Budi Gunadi Sadikin</h3>
                
                <h2 class="heading-title"> 16. Menteri Sosial</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2020/12/20201222-mensos-risma-230x230.png" alt="Logo" width="200px">
                <h3>Tri Rismaharini</h3>
                
                <h2 class="heading-title"> 17. Menteri Ketenagakerjaan</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/15-IDA-FAUZIYAH-MENTERI-TENAGA-KERJA-170x230.jpg" alt="Logo" width="200px">
                <h3>Ida Fauziyah</h3>
                
                <h2 class="heading-title"> 18. Menteri Perindustrian</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/16-AGUS-GUMIWANG-MENTERI-PERINDUSTRIAN-178x230.jpg" alt="Logo" width="200px">
                <h3>Agus Gumiwang Kartasasmita</h3>
                
                <h2 class="heading-title"> 19. Menteri Perdagangan</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2022/06/ZULKIFLI-HASAN-180x230-1.jpg" alt="Logo" width="200px">
                <h3>Zulkifli Hasan</h3>
                
                <h2 class="heading-title"> 20. Menteri Energi dan Sumber Daya Mineral</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/18-ARIFIN-TASRIF-185x230.jpg" alt="Logo" width="200px">
                <h3>Arifin Tasrif</h3>
                
                <h2 class="heading-title"> 21. Menteri Pekerjaan Umum dan Perumahan Rakyat</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/19-BASUKI-HADIMULJONO-MENTERI-PEKERJAAN-UMUM-DAN-PERUMAHAN-RAKYAT-180x230.jpg" alt="Logo" width="200px">
                <h3>Mochamad Basuki Hadimuljono</h3>
                
                <h2 class="heading-title"> 22. Menteri Perhubungan</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/20-BUDI-KARYA-SUMADI-MENTERI-PERHUBUNGAN-176x230.jpg" alt="Logo" width="200px">
                <h3>Budi Karya Sumadi</h3>
                
                <h2 class="heading-title"> 23. Menteri Komunikasi dan Informatika</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/21-JOHNNY-GERARD-PLATE-MENTERI-KOMUNIKASI-DAN-INFORMATIKA-178x230.jpg" alt="Logo" width="200px">
                <h3>Johnny Gerard Plate</h3>
                
                <h2 class="heading-title"> 24. Menteri Pertanian</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/22-SYAHRUL-YASIN-LIMPO-MENTERI-PERTANIAN-176x230.jpg" alt="Logo" width="200px">
                <h3>Syahrul Yasin Limpo</h3>
                
                <h2 class="heading-title"> 25. Menteri Lingkungan Hidup dan Kehutanan</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/23-SITI-NURBAYA-MENTERI-LINGKUNGAN-HIDUP-DAN-KEHUTANAN-179x230.jpg" alt="Logo" width="200px">
                <h3>Siti Nurbaya</h3>
                
                <h2 class="heading-title"> 26. Menteri Kelautan dan Perikanan</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2020/12/20201222-KKP-sakti-230x230.png" alt="Logo" width="200px">
                <h3>Sakti Wahyu Trenggono</h3>
                
                <h2 class="heading-title"> 27. Menteri Desa, Pembangunan Daerah Tertinggal, dan Transmigrasi</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/25-A.-HALIM-ISKANDAR-MENTERI-DESA-PEMBANGUNAN-DAERAH-TERTINGGAL-DAN-TRANSMIGRASI-178x230.jpg" alt="Logo" width="200px">
                <h3>A. Halim Iskandar</h3>
                
                <h2 class="heading-title"> 28. Menteri Agraria dan Tata Ruang</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2022/06/HADI-TJAHJANTO-180x230-1.jpg" alt="Logo" width="200px">
                <h3>Hadi Tjahjanto</h3>
                
                <h2 class="heading-title"> 29. Menteri Perencanaan Pembangunan Nasional </h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/27-SUHARSO-MONOARFA-MENTERI-PERENCANAAN-PEMBANGUNAN-NASIONA-KEPALA-BADAN-PERENCANAAN-PEMBANGUNAN-NASIONAL-179x230.jpg" alt="Logo" width="200px">
                <h3>Suharso Monoarfa</h3>
                
                <h2 class="heading-title"> 30. Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Transmigrasi</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2022/09/Abdullah-Azwar-Anas.jpg" alt="Logo" width="200px">
                <h3>Abdullah Azwar Anas</h3>
                
                <h2 class="heading-title"> 31. Menteri Badan Usaha Milik Negara</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/29-ERICK-THOHIR-MENTERI-BADAN-USAHA-MILIK-NEGARA-179x230.jpg" alt="Logo" width="200px">
                <h3>Erick Thohir</h3>
                
                <h2 class="heading-title"> 32. Menteri Koperasi dan Usaha Kecil dan Menengah</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/30-TETEN-MASDUKI-MENTERI-KOPERASI-DAN-USAHA-KECIL-DAN-MENENGAH-178x230.jpg" alt="Logo" width="200px">
                <h3>Teten Masduki</h3>
                
                <h2 class="heading-title"> 33. Menteri Pariwisata dan Ekonomi Kreatif</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2020/12/sandi-uno-290x230.png" alt="Logo" width="200px">
                <h3>Sandiaga Salahuddin Uno</h3>
                
                <h2 class="heading-title"> 34. Menteri Pemberdayaan Perempuan dan Perlindungan Anak
                </h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/32-I-GUSTI-AYU-BINTANG-DARMAWATI-MENTERI-PEMBERDAYAAN-PEREMPUAN-DAN-PERLINDUNGAN-ANAK-179x230.jpg" alt="Logo" width="200px">
                <h3>I Gusti Ayu Bintang Darmavati</h3   >
                
                <h2 class="heading-title"> 35. Menteri Investasi</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/37-BAHLIL-LAHADALIA-KEPALA-BADAN-KOORDINASI-PENANAMAN-MODAL-178x230.jpg" alt="Logo" width="200px">
                <h3>Bahlil Lahadalia</h3>
                
                <h2 class="heading-title"> 36. Menteri Pemuda dan Olahraga</h2>
                <img class="mr-10" src="https://setkab.go.id/wp-content/uploads/2019/10/34-ZAINUDIN-AMALI-175x230.jpg" alt="Logo" width="200px">
                <h3>Zainudin Amali</h3>       
            </div>
            `;
    setLocalTopic(topic);
  }
}

function setLocalTopic(topic) {
  localStorage.setItem("topic", topic);
}

document.addEventListener("scroll", () => {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    buttonTop.classList.remove("hidden");
  } else {
    buttonTop.classList.add("hidden");
  }
});

buttonTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
