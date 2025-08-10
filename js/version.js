(function () {
  // تولید نسخه بر اساس تاریخ و ساعت
  const version = new Date().toISOString().replace(/[-:.TZ]/g, '');

  // افزودن نسخه به فایل CSS
  const styleTag = document.getElementById('main-style');
  if (styleTag) {
    styleTag.href += `?v=${version}`;
  }

  // افزودن نسخه به فایل JS
  const scriptTag = document.getElementById('main-script');
  if (scriptTag) {
    scriptTag.src += `?v=${version}`;
  }
})();