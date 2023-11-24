import en from "@/messages/en";
import ja from "@/messages/ja";

class Const {
  static get DRAWER_WIDTH() {
    return 240;
  }

  static get MINI_DRAWER_WIDTH() {
    return 72;
  }

  static get LOCALES() {
    return { en: "en-US", ja: "ja-JP" };
  }

  static get DEFAULT_LOCALE() {
    return "ja";
  }

  static get LOCALE_COOKIE_NAME() {
    return "NEXT_LOCALE";
  }

  static get TRANSLATIONS_OBJ() {
    return { en, ja };
  }
}

export default Const;
