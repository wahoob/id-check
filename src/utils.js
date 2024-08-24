export function getGovernorate(code) {
  switch (code) {
    case "01":
      return "القاهرة";
    case "02":
      return "الإسكندرية";
    case "03":
      return "بورسعيد";
    case "04":
      return "السويس";
    case "11":
      return "دمياط";
    case "12":
      return "الدقهلية";
    case "13":
      return "الشرقية";
    case "14":
      return "القليوبية";
    case "15":
      return "كفر الشيخ";
    case "16":
      return "الغربية";
    case "17":
      return "المنوفية";
    case "18":
      return "البحيرة";
    case "19":
      return "الإسماعيلية";
    case "21":
      return "الجيزة";
    case "22":
      return "بني سويف";
    case "23":
      return "الفيوم";
    case "24":
      return "المنيا";
    case "25":
      return "أسيوط";
    case "26":
      return "سوهاج";
    case "27":
      return "قنا";
    case "28":
      return "أسوان";
    case "29":
      return "الأقصر";
    case "31":
      return "البحر الأحمر";
    case "32":
      return "الوادى الجديد";
    case "33":
      return "مطروح";
    case "34":
      return "شمال سيناء";
    case "35":
      return "جنوب سيناء";
    case "88":
      return "خارج الجمهورية";
    default:
      return "Unknown Code";
  }
}

export function formatDate(dateString) {
  const months = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];

  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${months[month]}، ${year}`;
}

export function checkDate(dateString) {
  const givenDate = new Date(dateString);

  const now = new Date();
  const thresholdDate = new Date(now);
  thresholdDate.setFullYear(now.getFullYear() - 110);

  if (givenDate < thresholdDate || givenDate > now) {
    return false;
  }

  // True means it is VALID
  return true;
}
