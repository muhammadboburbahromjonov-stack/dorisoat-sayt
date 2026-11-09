// Dorisoat veb sahifalari sozlamasi (sayt, dorixona kabineti plakati).
//   apk   — ilovani to'g'ridan-to'g'ri yuklab olish. Repozitoriy yopiq, shuning uchun APK serverning o'zida turadi:
//           eng oxirgi Dorisoat.apk ni /opt/dorisoat/pb_public/Dorisoat.apk ga nusxalang (server/README.md).
//   play  — Google Play havolasi (chiqqach yozing; bo'sh bo'lsa saytda "Tez kunda" ko'rinadi, plakat QR-kodi APK ga olib boradi)
//   email — murojaat uchun email (bo'sh bo'lsa saytda ko'rinmaydi)
window.DORISOAT = {
  apk: "/Dorisoat.apk",
  play: "",
  email: "",
  // server — dorixona kabineti, akkauntni o'chirish va API shu domenda ishlayaptimi (VPS'dagi PocketBase).
  // Sayt Vercel'da turganda false; VPS'ga ko'chganda true qiling.
  server: false,
};
