(function () {
  const apiUrl =
    window.siteInfoApiUrl || "http://127.0.0.1:8001/api/site-info/";
  const defaultSiteInfo = {
    city: "Abilene",
    city_url: "/abilene-escorts",
    phone_number: "+12144298973",
    phone_href: "tel:12144298973",
    contact_items: [
      {
        id: "phone",
        label: "Phone",
        value: "+12144298973",
        url: "tel:12144298973",
      },
      {
        id: "whatsapp",
        label: "WhatsApp",
        value: "+12144298973",
        url: "https://wa.me/12144298973",
      },
      {
        id: "telegram",
        label: "Telegram",
        value: "@Ruby0036",
        url: "https://t.me/Ruby0036",
      },
      {
        id: "signal",
        label: "Signal",
        value: "+12144298973",
        url: "https://signal.me/#p/+12144298973",
      },
    ],
  };
  let siteInfo = defaultSiteInfo;

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach(function (element) {
      element.textContent = value;
    });
  }

  function applySiteInfo(data) {
    siteInfo = Object.assign({}, defaultSiteInfo, data);

    const city = siteInfo.city || defaultSiteInfo.city;
    const cityUrl = siteInfo.city_url || defaultSiteInfo.city_url;
    const phoneNumber = siteInfo.phone_number || defaultSiteInfo.phone_number;
    const phoneHref = siteInfo.phone_href || defaultSiteInfo.phone_href;
    const titleElement = document.querySelector("[data-site-title]");
    const headingElement = document.querySelector("[data-site-heading]");
    const titleText = titleElement
      ? titleElement.textContent.replace("Abilene", city)
      : "Escort model Ruby | " + city + " ladys.one";
    const headingText = headingElement
      ? headingElement.textContent.replace("Abilene", city)
      : "Escort model Ruby, " + city;

    setText("[data-site-city]", city);
    setText("[data-site-phone]", phoneNumber);
    setText("[data-site-title]", titleText);
    setText("[data-site-heading]", headingText);

    document
      .querySelectorAll("[data-site-city-link]")
      .forEach(function (element) {
        element.setAttribute("href", cityUrl);
      });

    document.querySelectorAll("[data-site-phone]").forEach(function (element) {
      element.setAttribute("href", phoneHref);
    });
  }

  function icon(id) {
    const icons = {
      phone:
        '<svg viewBox="0 0 24 24" class="site-contact-icon" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.4 22 2 13.6 2 3.4 2 2.7 2.5 2 3.2 2h3.6C7.5 2 8 2.5 8 3.2c0 1.4.2 2.8.6 4 .1.4 0 .8-.3 1.2l-1.7 2.4z" fill="currentColor"/></svg>',
      whatsapp:
        '<svg viewBox="0 0 24 24" class="site-contact-icon" aria-hidden="true"><path d="M12 2a9.7 9.7 0 0 0-8.4 14.6L2.4 22l5.5-1.4A9.7 9.7 0 1 0 12 2zm0 17.6c-1.5 0-2.9-.4-4.1-1.2l-.3-.2-3.2.8.9-3.1-.2-.3A7.8 7.8 0 1 1 12 19.6zm4.4-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.7-1.2-1.4-1.4-1.7-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1 0-.2-.2-.2-.4-.3z" fill="currentColor"/></svg>',
      telegram:
        '<svg viewBox="0 0 24 24" class="site-contact-icon" aria-hidden="true"><path d="M21.7 3.3c.3-.9-.5-1.6-1.3-1.2L2.8 8.9c-1 .4-.9 1.8.1 2.1l4.5 1.4 1.7 5.4c.3.9 1.4 1.1 2 .4l2.5-2.6 4.5 3.4c.8.6 1.9.1 2.1-.9l1.5-14.8zM8.2 11.6l8.8-5.5c.4-.2.8.3.5.6l-7.2 6.5-.3 3.1-1.8-4.7z" fill="currentColor"/></svg>',
      signal:
        '<svg viewBox="0 0 24 24" class="site-contact-icon" aria-hidden="true"><path d="M12 3.8a8.2 8.2 0 0 0-7.1 12.3L4 20l4-1a8.2 8.2 0 1 0 4-15.2zm0 13.8c-1.2 0-2.3-.4-3.2-1l-.4-.3-2 .5.5-1.9-.3-.4A5.6 5.6 0 1 1 12 17.6zM3.7 7.5l-1.3-.8A11.4 11.4 0 0 1 6.7 2.4l.8 1.3a9.8 9.8 0 0 0-3.8 3.8zm16.6 0a9.8 9.8 0 0 0-3.8-3.8l.8-1.3a11.4 11.4 0 0 1 4.3 4.3l-1.3.8zM7.5 20.3l-.8 1.3a11.4 11.4 0 0 1-4.3-4.3l1.3-.8a9.8 9.8 0 0 0 3.8 3.8zm14.1-3a11.4 11.4 0 0 1-4.3 4.3l-.8-1.3a9.8 9.8 0 0 0 3.8-3.8l1.3.8z" fill="currentColor"/></svg>',
    };

    return icons[id] || icons.phone;
  }

  function closeContactDrawer() {
    const container = document.getElementById("advert-detail-bottom-sheet");
    if (!container) return;
    container.innerHTML = "";
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }

  function openContactDrawer() {
    const container = document.getElementById("advert-detail-bottom-sheet");
    if (!container) return;

    const items = siteInfo.contact_items || defaultSiteInfo.contact_items;
    const links = items
      .map(function (item) {
        return (
          '<a class="site-contact-row" href="' +
          item.url +
          '" target="_blank" rel="noopener noreferrer">' +
          icon(item.id) +
          '<span class="site-contact-data"><span class="site-contact-label">' +
          item.label +
          '</span><span class="site-contact-value"></span></span></a>'
        );
      })
      .join("");

    container.innerHTML =
      '<div class="bottom-sheet-overlay" data-site-contact-close></div>' +
      '<div class="bottom-sheet site-contact-sheet" style="bottom: 0">' +
      '<div class="bottom-sheet__content">' +
      '<div class="bottom-sheet__header" data-site-contact-close></div>' +
      '<div class="bottom-sheet__body">' +
      '<div class="site-contact-drawer">' +
      '<div class="site-contact-title">Contact Ruby</div>' +
      links +
      "</div></div></div></div>";

    container
      .querySelectorAll(".site-contact-value")
      .forEach(function (element, index) {
        element.textContent = items[index].value;
      });

    document.body.style.overflow = "hidden";
  }

  function initContactDrawer() {
    const style = document.createElement("style");
    style.textContent =
      ".site-contact-sheet{background:#fff;color:#111;height:auto;max-height:90vh}" +
      ".site-contact-drawer{padding:0 0 18px}" +
      ".site-contact-title{font-size:22px;font-weight:700;padding:4px 18px 14px;color:#111}" +
      ".site-contact-row{display:flex;align-items:center;gap:14px;padding:14px 18px;color:#111;text-decoration:none;border-top:1px solid #eee}" +
      ".site-contact-row:hover,.site-contact-row:focus{background:#f6f6f6;color:#111;text-decoration:none}" +
      ".site-contact-icon{width:30px;height:30px;flex-shrink:0;color:#35b866}" +
      ".site-contact-data{display:flex;flex-direction:column;min-width:0}" +
      ".site-contact-label{font-size:13px;color:#777;line-height:1.2}" +
      ".site-contact-value{font-size:22px;font-weight:700;color:#111;word-break:break-word}";
    document.head.appendChild(style);

    document.addEventListener(
      "click",
      function (event) {
        if (event.target.closest("[data-site-contact-close]")) {
          closeContactDrawer();
          return;
        }

        if (!event.target.closest(".advert-contacts")) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        openContactDrawer();
      },
      true,
    );

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeContactDrawer();
      }
    });
  }

  initContactDrawer();

  fetch(apiUrl)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Unable to load site info");
      }
      return response.json();
    })
    .then(applySiteInfo)
    .catch(function () {
      applySiteInfo(defaultSiteInfo);
    });
})();
