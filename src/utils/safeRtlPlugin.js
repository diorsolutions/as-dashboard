import rtlPlugin from "stylis-plugin-rtl";

export default function safeRtlPlugin(element, index, children, callback) {
  try {
    return rtlPlugin(element, index, children, callback);
  } catch (_) {
    return "";
  }
}

