<div align="center">

# WebKitty (Turkce)

<img src="includes/assets/icons/webkitty.svg" width="220" alt="WebKitty Logo">

**PlayStation 4 icin moduler, WebKit tabanli exploit zincirleri koleksiyonu.**

*(Eski adiyla PSFree Enhanced - [ArabPixel/WebKitty](https://github.com/ArabPixel/WebKitty) reposunun Turkce forkudur)*

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/alpay35/1402)](https://github.com/alpay35/1402/issues)
[![GitHub stars](https://img.shields.io/github/stars/alpay35/1402)](https://github.com/alpay35/1402/stargazers)

[Ozellikler](#ozellikler) • [Firmware Uyumlulugu](#bu-depo-tarafindan-desteklenen-surumler) • [Kurulum ve Barindirma](#kurulum-ve-barindirma) • [Ekran Goruntuleri](#ekran-goruntuleri) • [Katkida Bulunma](#katkida-bulunma) • [Emegi Gecenler](#emegi-gecenler)

</div>

---

## Ozellikler

### Temel Exploit ve Calistirma
- **Otomatik Algilama:** Konsol turunu ve firmware surumunu otomatik olarak algilar.
- **WebKit Exploitleri:** Konsolun web tarayicisi uzerinden **PSFree**, **Bad Hoist**, **CSSFontFace** veya **slopkit** kullanarak giris saglar.
- **Kernel Exploitleri:** **Lapse**, **Netctrl**, **Relapse** veya **Sleirsgoevy 6.7x** kullanarak yetkileri kernel seviyesine yukseltir.
- **Payload Yukleyici (Payload Loader):** Basarili kernel exploit sonrasinda payloadlari yukler veya `9020` portu uzerinden gelen payloadlari dinler.
- **Yalin (Barebone) Jailbreak Deneyimi secenegi:** Exploiti minimum DOM yukuyle calistirir ve tamamlandiginda otomatik olarak ana sayfaya geri yonlendirir.
- **Secim Hatirlama ve Otomatik Devam:** Ayni cihazda daha once yapilan secimleri hatirlar, acilista 5'ten geriye sayarak sure sonunda otomatik olarak devam eder.
- **Firmware Tabanli Onbellekleme:** Her seyi cevrimdisi onbellege almak yerine *yalnizca* mevcut firmware surumunuzun ihtiyac duydugu dosyalari onbellege alir.

### Arayuz ve Ozellestirme
- **Temalar ve Duzenler:** Bagimsiz tema secenekleriyle ozellestirilebilir yerlesim modlari.
- **HEN Secici:** Entegre GoldHEN surum secimi ile **HEN** ve **GoldHEN** arasinda gecis yapma imkani.
- **Aciklayici Payload Secimi:** Net aciklamalar ve desteklenmeyen payload yuklemelerine karsi koruma.
- **Coklu Dil Destegi:** Dinamik dil degistirici (varsayilan Turkce, Turkce karaktersiz arayuz).

### Gelismis Yerel ve Ag Ozellikleri
PC veya PS4 uzerinde **[PS4-Websrv](https://github.com/ArabPixel/ps4-websrv)** ile yerel olarak barindirildiginda genisletilmis islevsellik sunar:
- **Ag Tarayici:** PS4'u bulmak icin yerel agi tarama ozelligi.
- **Uzaktan Payload Gonderimi:** Mevcut veya ozel payloadlari herhangi bir akilli cihazdan dogrudan PS4'e gonderme imkani.

---

## Bu Depo Tarafindan Desteklenen Surumler

Bu tablo, bu deponun *mevcut surumunun* islevsel ve test edilmis bir exploit zinciri sagladigi firmware surumlerini gosterir.

| Userland | Kernel | Firmware |
| :--- | :---: | :--- |
| **Have A Bad Time & <br> Stack Unitialized Read** | Bpf Double Free | 4.50 - 5.07 |
| **Bad Hoist** | sleirsgoevy's kexploit | 6.70 - 6.72 |
| **PSFree** | Lapse | 7.00 - 9.60 |
| **CSSFontFace** | Lapse | 7.00 - 11.02 |
| **CSSFontFace** | Netctrl | 9.00 - 11.02 |
| **Wobkot (Slopkit)** | Lapse | 9.00 - 12.02 |
| **Slopkit** | Lapse | 10.00 - 12.02 |
| **Slopkit** | Netctrl | 12.50 - 13.00 |
| **Slopkit** | Relapse | 12.50 - 13.52 |
| **Slopkit** | Afterglow | 14.00 - 14.02 |
| **Payload Yukleyici (Loader)** | - | 5.05 - en son |

---

## Kurulum ve Barindirma

### Secenek 1: Uzak Sunucu Uzerinden Erisim
PS4 web tarayicisini acin ve bu forkun GitHub Pages adresi (etkinse `https://alpay35.github.io/1402/`) veya orijinal sunucu uzerinden erisin:
`http://webkitty.arabpixel.net/`
> Orijinal baglantiya erisilemiyorsa su yansiyi da deneyebilirsiniz: `arabpixel.gitlab.io/WebKitty`

### Secenek 2: Yerel Barindirma (PC / PS4 Sunucusu)
1. Depoyu klonlayin:
   ```bash
   git clone https://github.com/alpay35/1402.git
   ```
2. Dizini standart herhangi bir web sunucusu ile yayinlayin (ornegin Nginx, Apache, Python HTTP server veya **[PS4-Websrv](https://github.com/ArabPixel/ps4-websrv)**).
3. PS4 uzerinden tarayiciyi acin, hepsi bu kadar!

---

## Yapilacaklar Listesi
- [ ] Diger exploitleri ekleyerek daha dusuk firmware surumlerini desteklemek

---

## Ekran Goruntuleri

<details>
<summary><b>Ekran Goruntuleri ve Onizlemeleri gormek icin buraya tiklayin</b></summary>
<br>

<table align="center" style="border: none;">
  <tr>
    <td align="center" style="border: none;">
      <img src="includes/assets/showcase/default-layout-1.png" width="350" alt="Varsayilan Duzen: Baslangic Ekrani">
      <br>
      <b>Varsayilan Duzen: Baslangic Ekrani</b>
    </td>
    <td align="center" style="border: none;">
      <img src="includes/assets/showcase/default-layout-2.png" width="350" alt="Varsayilan Duzen: Exploit Ekrani">
      <br>
      <b>Varsayilan Duzen: Exploit Ekrani</b>
    </td>
  </tr>
  <tr>
    <td align="center" style="border: none;">
      <img src="includes/assets/showcase/compact-layout.png" width="350" alt="Kompakt Duzen (Birlesik)">
      <br>
      <b>Kompakt Duzen (Birlesik)</b>
    </td>
    <td align="center" style="border: none;">
      <img src="includes/assets/showcase/compact-layout-vibrant.png" width="350" alt="Kompakt Duzen (Birlesik, Vibrant)">
      <br>
      <b>Kompakt Duzen (Vibrant)</b>
    </td>
  </tr>
  <tr>
    <td align="center" style="border: none;">
      <img src="includes/assets/showcase/settings-vibrant.png" width="350" alt="Ayarlar">
      <br>
      <b>Ayarlar</b>
    </td>
    <td align="center" style="border: none;">
      <img src="includes/assets/showcase/about-vibrant.png" width="350" alt="Hakkinda">
      <br>
      <b>Hakkinda</b>
    </td>
  </tr>
  <tr>
    <td align="center" style="border: none;">
      <img src="includes/assets/showcase/customization-vibrant.png" width="350" alt="Ozellestirme">
      <br>
      <b>Ozellestirme</b>
    </td>
    <td align="center" style="border: none;">
      <img src="includes/assets/showcase/about-catppuccino.png" width="350" alt="Hakkinda Catppuccino">
      <br>
      <b>Hakkinda (Catppuccino)</b>
    </td>
  </tr>
  <tr>
    <td align="center" style="border: none;">
      <img src="includes/assets/showcase/catppuccino-layout-1.png" width="350" alt="Catppuccino">
      <br>
      <b>Catppuccino: Baslangic Ekrani</b>
    </td>
    <td align="center" style="border: none;">
      <img src="includes/assets/showcase/catppuccino-layout-2.png" width="350" alt="Catppuccino">
      <br>
      <b>Catppuccino: Exploit Ekrani</b>
    </td>
  </tr>
</table>

</details>

---

## Katkida Bulunma

WebKitty'ye su sekillerde katkida bulunabilirsiniz:
- [`languages` klasorunde](includes/js/languages) yeni ceviriler icin pull request olusturarak.
- Mevcut host ozelliklerini duzenleyerek, guncelleyerek veya yeni ozellikler ekleyerek.
- [Issues](https://github.com/alpay35/1402/issues/new) uzerinden hata bildirerek veya iyilestirme onererek.
- Pull request'iniz `jailbreak.js` dosyasi icinde degisiklik iceriyorsa, asagidaki komutlari calistirarak `jailbreak-legacy.js` dosyasini yeniden olusturmayi unutmayin:
```bash
npm install # daha once kurmadiysaniz
npm run build
```

> **Onemli:** PR'iniz yeni bir dosya iceriyorsa, bunu ilgili firmware tabanli manifest dosyalarina eklemeyi unutmayin!

---

## Telif Hakki ve Gelistiriciler

AGPL-3.0-or-later (bkz. [LICENSE](LICENSE)). Bu deponun bir kismi `anonymous` grubuna aittir. Anonim katki saglayanlar da "anonymous" olarak anilmaktadir. Orijinal proje: [ArabPixel/WebKitty](https://github.com/ArabPixel/WebKitty).

---

## Emegi Gecenler

*(Rastgele siralama)*
- **abc:** PSFree userland ve Lapse kernel exploitleri icin.
- **Al-Azif:** Moduler (coklu dosya) PSFree Lapse ve AIO gecici cozum uygulamalari icin.
- **anonymous:** PS4 firmware kernel dokumleri icin.
- **Dr.Yenyen:** Kapsamli coklu firmware testleri icin.
- **Egycnq:** Netctrl'i slopkit'e port ettigi icin.
- **Feyzee61:** PSFree lapse paket (tek dosya) ve 6.7x exploit uygulamalari icin.
- **Fire30:** Bad Hoist userland exploiti icin.
- **GattoDev:** WebKitty logosu icin.
- **Jordy ve Sonic-Iso:** Orijinal Slopkit projesi icin.
- **Nathan Fargo ve ufm42:** CSSFontFace userland exploiti icin.
- **Payload gelistiricileri:** Paylasilan tum payloadlar icin.
- **Nazky:** Ilk incelenen host oldugu icin.
- **qwertyoruiopz:** BPF Double Free icin.
- **Raw Game:** Slopkit Lapse, Netctrl ve SlopKit Relapse PS4 portlari icin.
- **sleirsgoevy:** 6.7x kernel exploiti icin.
- **TheFlow:** Netctrl kernel exploiti icin.
- **ufm42:** CSSFontFace Netctrl ve Lapse uygulamalari icin.
- **m0zz:** Slopkit afterglow kaynagi icin.

Ek katki saglayanlar icin ilgili dosyalari kontrol edebilirsiniz. Aksi belirtilmedikce buradaki tum calismalarin emegi ilgili gelistiricilere aittir.
