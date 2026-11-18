var payloadsPath = "./includes/payloads/Bins/";
var legacyPayloadsPath = "./includes/payloads/Legacy/";
var homebrewPath = "./includes/payloads/Homebrew/";
var linuxPath = "./includes/payloads/Linux/";

var payloadsList = [
  {
    id: "FTP",
    name: "FTP",
    author: "Scene Collective",
    description: "Dosya aktarimlari icin FTP sunucusu erisimini etkinlestirir.",
    specificFW: "4.73 - latest",
    category: "tools",
    src: payloadsPath + "ps4-ftp.bin",
    legacySrc: legacyPayloadsPath + "ps4-ftp-legacy.bin"
  },
  {
    id: "BinLoader",
    name: "Bin Loader",
    author: "Exploit",
    description: "Bin payloadlarini gondermek icin 9020 portunda BinLoader sunucusunu baslatir.",
    specificFW: "4.50 - 5.07, 7.00 - 9.60",
    category: "tools",
    src: undefined,
    legacySrc: undefined
  },
  {
    id: "ElfLoader",
    name: "Elf Loader",
    author: "John Tornblom",
    description: "ELF payloadlarini almak icin 9021 portunda Elf Loader sunucusunu baslatir.",
    specificFW: "4.71 - latest",
    category: "tools",
    src: payloadsPath + "elfldr.elf"
  },
  {
    id: "DisableUpdates",
    name: "Guncellemeleri Kapat",
    author: "Scene Collective",
    description: "Otomatik sistem yazilimi guncellemelerini devre disi birakir.",
    specificFW: "4.73 - latest",
    category: "tools",
    src: payloadsPath + "ps4-disable-updates.bin",
    legacySrc: legacyPayloadsPath + "ps4-disable-updates-legacy.bin"
  },
  {
    id: "DBRebuilder",
    name: "Veritabani Onarici",
    author: "4GAMER",
    description: "PS4 FPKG veritabanini yeniden olusturarak homebrew simgelerini ana ekrana geri getirir.",
    specificFW: "4.73 - latest",
    category: "tools",
    src: payloadsPath + "db-rebuilder-v0.2.bin",
    needsPayloadLoader: true
  },
  {
    id: "DetectSouthbridge",
    name: "Southbridge Algila",
    author: "ArabPixel",
    description: "PS4'unuzun Southbridge modelini algilar. PS4 Linux kurulumu icin faydalidir.",
    specificFW: "4.73 - latest",
    category: "tools",
    src: payloadsPath + "ps4-southbridge-detector.bin"
  },
  {
    id: "EnableBrowser",
    name: "PS4 Tarayici Etkinlestir",
    author: "Scene Collective",
    description: "PSN oturumu acmaya gerek kalmadan tarayiciyi kalici olarak etkinlestirir.",
    specificFW: "4.50 - 5.07",
    category: "tools",
    legacySrc: legacyPayloadsPath + "ps4-enable-browser-legacy.bin"
  },
  {
    id: "FanThreshold",
    name: "Fan Esik Degeri",
    author: "Scene Collective",
    description: "PlayStation 4 uzerinde sogutma fani sicaklik profilini ayarlar.",
    specificFW: "4.73 - latest",
    category: "tools",
    src: null
  },
  {
    id: "WebSrv",
    name: "PS4 Websrv",
    author: "ArabPixel",
    description: "Harici cihazlardan anlik payload yuklemek icin PS4 uzerinde 80 portunda bir web sunucusu baslatir.",
    specificFW: "4.73 - latest",
    category: "tools",
    src: payloadsPath + "ps4-websrv.bin",
    needsPayloadLoader: true,
  },
  {
    id: "NpFakeSignin",
    name: "NP Fake Signin",
    author: "earthonion",
    description: "PS4 uzerinde PSN durumunu 'oturum acildi' olarak ayarlar, sahte aktivasyon sonrasinda kullanilir.",
    specificFW: "4.71 - latest",
    category: "tools",
    src: payloadsPath + "np-fake-signin-ps4.elf",
    needsPayloadLoader: true
  },
  {
    id: "BackupDB",
    name: "Veritabani Yedekle",
    author: "Stooged",
    description: "PS4 veritabanlarinizi, lisanslarinizi ve kullanici verilerinizi yedekler. Konsol sifirlanirsa anahtarlar degisebilecegi icin ise yaramayabilir.",
    specificFW: "4.73 - latest",
    category: "tools",
    src: payloadsPath + "ps4-backup.bin"
  },
  {
    id: "RestoreDB",
    name: "Veritabani Geri Yukle",
    author: "Stooged",
    description: "'Yedekle' payloadi ile kaydedilen verileri geri yukler.",
    specificFW: "4.73 - latest",
    category: "tools",
    src: payloadsPath + "ps4-restore.bin"
  },
  {
    id: "ExitIDU",
    name: "IDU Modundan Cik",
    author: "Scene Collective",
    description: "IDU (magaza) modundan cikar ve konsolu yeniden baslatir.",
    specificFW: "4.73 - latest",
    category: "tools",
    src: payloadsPath + "ps4-exit-idu.bin"
  },
  {
    id: "WebRTE",
    name: "WebRTE",
    author: "golden tarafindan yapildi<br>EchoStretch tarafindan guncellendi",
    description: "Web Gercek Zamanli Egitim Motoru (Web Realtime Trainer Engine)",
    specificFW: "5.05, 6.72, 7.00 - 11.00",
    category: "tools",
    src: payloadsPath + "WebRTE.bin"
  },
  {
    id: "HistoryBlocker",
    name: "Gecmis Engelleyici",
    author: "Stooged",
    description: "Tarayicinin acilista son acilan sayfayi hatirlayip ona donmesini engeller. Acmak/kapatmak icin tekrar calistirin.",
    specificFW: "4.73 - latest",
    category: "tools",
    src: payloadsPath + "ps4-history-blocker.bin"
  },
  {
    id: "App2USB",
    name: "App2USB",
    author: "Stooged",
    description: "Yuklu uygulamalari gayri resmi olarak harici bir USB surucuye tasir.",
    specificFW: "4.73 - latest",
    category: "tools",
    src: payloadsPath + "ps4-app2usb.bin"
  },
  {
    id: "Linux1024mb",
    name: "Linux Yukleyici 1GB",
    author: "ps4boot<br>ArabPixel, rmux",
    description: "Tum konsollar icin Linux Yukleyici. 1GB VRAM.",
    specificFW: "5.05, 6.72 - latest",
    category: "linux",
    src: linuxPath + "linux-1024mb.elf",
    needsPayloadLoader: true
  },
  {
    id: "Linux2048mb",
    name: "Linux Yukleyici 2GB",
    author: "ps4boot<br>ArabPixel, rmux",
    description: "Tum konsollar icin Linux Yukleyici. 2GB VRAM.",
    specificFW: "5.05, 6.72 - latest",
    category: "linux",
    src: linuxPath + "linux-2048mb.elf",
    needsPayloadLoader: true
  },
  {
    id: "Linux3072mb",
    name: "Linux Yukleyici 3GB",
    author: "ps4boot<br>ArabPixel, rmux",
    description: "Tum konsollar icin Linux Yukleyici. 3GB VRAM.",
    specificFW: "5.05, 6.72 - latest",
    category: "linux",
    src: linuxPath + "linux-3072mb.elf",
    needsPayloadLoader: true
  },
  {
    id: "Linux4096mb",
    name: "Linux Yukleyici 4GB",
    author: "ps4boot<br>ArabPixel, rmux",
    description: "Tum konsollar icin Linux Yukleyici. 4GB VRAM.",
    specificFW: "5.05, 6.72 - latest",
    category: "linux",
    src: linuxPath + "linux-4096mb.elf",
    needsPayloadLoader: true
  },
  {
    id: "Linux128mb",
    name: "Linux Yukleyici 128MB",
    author: "ps4boot<br>ArabPixel, rmux",
    description: "Tum konsollar icin Linux Yukleyici. 128MB VRAM.",
    specificFW: "5.05, 6.72 - latest",
    category: "linux",
    src: linuxPath + "linux-128mb.elf",
    needsPayloadLoader: true
  },
  {
    id: "Linux256mb",
    name: "Linux Yukleyici 256MB",
    author: "ps4boot<br>ArabPixel, rmux",
    description: "Tum konsollar icin Linux Yukleyici. 256MB VRAM.",
    specificFW: "5.05, 6.72 - latest",
    category: "linux",
    src: linuxPath + "linux-256mb.elf",
    needsPayloadLoader: true
  },
  {
    id: "Linux512mb",
    name: "Linux Yukleyici 512MB",
    author: "ps4boot<br>ArabPixel, rmux",
    description: "Tum konsollar icin Linux Yukleyici. 512MB VRAM.",
    specificFW: "5.05, 6.72 - latest",
    category: "linux",
    src: linuxPath + "linux-512mb.elf",
    needsPayloadLoader: true
  },
  {
    id: "PS4DebugNG",
    name: "PS4Debug-NG",
    author: "golden, Pharaoh2k",
    description: "PlayStation 4 icin yeni nesil ps4debug surumu.",
    specificFW: "5.05 - latest",
    category: "advanced",
    src: payloadsPath + "ps4debug-ng_v1.3.4.bin"
  },
  {
    id: "PUPDecrypt",
    name: "PUP Cozucu",
    author: "andy-man",
    description: "PS4 uzerinde bir sistem guncelleme dosyasinin (PUP) icerigini cozmeye yarayan payload.",
    specificFW: "4.73 - latest",
    category: "advanced",
    src: payloadsPath + "ps4-pup-decrypt.bin"
  },
  {
    id: "ModuleDumper",
    name: "Modul Dokumcusu",
    author: "SocraticBliss",
    description: "Sifresi cozulmus modulleri /system, /system_ex, /update ve dosya sistemi kokunden bir USB cihaza aktarir.",
    specificFW: "4.73 - latest",
    category: "advanced",
    src: payloadsPath + "ps4-module-dumper.bin"
  },
  {
    id: "KernelDumper",
    name: "Kernel Dokumcusu",
    author: "Eversion",
    description: "PS4 kernelinin dokumunu alir.",
    specificFW: "4.73 - latest",
    category: "advanced",
    src: payloadsPath + "ps4-kernel-dumper.bin"
  },
  {
    id: "DisableASLR",
    name: "ASLR Devre Disi",
    author: "Scene Collective",
    description: "Bellek ile calismayi kolaylastirmak/tekrarlanabilir kilmak icin ASLR (Adres Alani Duzeni Rastgelelestirme) ozelligini kapatir.",
    specificFW: "4.73 - latest",
    category: "advanced",
    src: payloadsPath + "ps4-disable-aslr.bin"
  },
  {
    id: "PermanentUART",
    name: "Kalici UART",
    author: "JTAG7371",
    description: "Kernel yamasi olmadan donanim tabanli UART'i etkinlestirir, guncellemelerden sonra da kalici olur.",
    specificFW: "4.73 - latest",
    category: "advanced",
    src: payloadsPath + "ps4-permanent-uart.bin"
  },
  {
    id: "RIFRenamer",
    name: "RIF Yeniden Adlandir",
    author: "Al Azif",
    description: "Daha iyi HEN uyumlulugu icin 'fake' RIF dosyalarini 'free' RIF olarak yeniden adlandirir. PKG'leriniz sadece Mira+HEN ile calisiyorsa kullanin.",
    specificFW: "4.73 - latest",
    category: "advanced",
    src: payloadsPath + "ps4-rif-renamer.bin"
  },
  {
    id: "PSVue",
    name: "PlayStation Vue v1.24",
    author: "Sorny",
    description: "PlayStation Vue exploit kurulumu icindir. <br>Bu payloadi kullanmak icin internet baglantisi gerekir.<br><strong>Bu islem download0 veya kayit dosyasini KURMAZ ve ayarlamaz!</strong>",
    specificFW: "4.73 - latest",
    category: "homebrew",
    src: homebrewPath + "PlayStationVue-base-installer.bin",
    needsPayloadLoader: true
  },
  {
    id: "OnlineStoreInstall",
    name: "Homebrew Magazasi",
    author: "LightningMods",
    description: "PS4 Homebrew Store icin cevrimici kurucu.<br>Bu payloadi kullanmak icin internet baglantisi gerekir.",
    specificFW: "4.73 - latest",
    category: "homebrew",
    src: homebrewPath + "online-store-installer.bin",
    needsPayloadLoader: true
  },
  {
    id: "ApolloSaveTool",
    name: "Apollo Save Tool",
    author: "Bucanero",
    description: "Apollo Save Tool, PlayStation 4 uzerindeki oyun kayit dosyalarini yonetmeye yarayan bir uygulamadir.<br>Bu payloadi kullanmak icin internet baglantisi gerekir.",
    specificFW: "4.73 - latest",
    category: "homebrew",
    src: homebrewPath + "ApolloSaveToolv232.bin",
    needsPayloadLoader: true
  },
  {
    id: "Itemzflow",
    name: "Itemzflow Kurucu",
    author: "LightningMods",
    description: "Itemzflow, ucretsiz ve acik kaynakli bir PS4 ana menu alternatifidir ve Sony'nin ShellUI sinirlarinin otesine gecer.<br>Bu payloadi kullanmak icin internet baglantisi gerekir.",
    specificFW: "4.73 - latest",
    category: "homebrew",
    src: homebrewPath + "PS4-Itemzflow-v108.bin",
    needsPayloadLoader: true
  },
  {
    id: "PS4Xplorer2.10",
    name: "Dosya Yoneticisi (Xplorer 2.0)",
    author: "Lapy",
    description: "PlayStation 4 konsolu icin bir Dosya Yoneticisi.<br>Bu payloadi kullanmak icin internet baglantisi gerekir.",
    specificFW: "4.73 - latest",
    category: "homebrew",
    src: homebrewPath + "PS4-Xplorer-210.bin",
    needsPayloadLoader: true
  }
];
