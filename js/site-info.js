(function () {
  const apiUrl =
    window.siteInfoApiUrl || "http://127.0.0.1:8001/api/site-info/";

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach(function (element) {
      element.textContent = value;
    });
  }

  function applySiteInfo(data) {
    const city = data.city || "Abilene";
    const cityUrl = data.city_url || "/abilene-escorts";
    const phoneNumber = data.phone_number || "+12144298973";
    const phoneHref = data.phone_href || "tel:12144298973";
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

  fetch(apiUrl)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Unable to load site info");
      }
      return response.json();
    })
    .then(applySiteInfo)
    .catch(function () {});
})();
