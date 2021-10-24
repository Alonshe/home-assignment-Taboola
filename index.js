(async () => {
  // Fetching data
  const data = await config.fetchData();
  const client = document.getElementById("MAIN_taboola");
  // Container
  const container = document.createElement("div");
  container.className = "taboola-container";

  for (const item of data.list) {
    const clickableLink = item.url;
    const wrapper = document.createElement("div"); // Wrapper
    const img = document.createElement("img"); // Img
    const infoWrapper = document.createElement("section"); // Wrapping ['title', 'category', 'branding']
    const title = document.createElement("p"); // Title
    const category = document.createElement("span"); // Category
    const branding = document.createElement("p"); // Branding
    const PLink = document.createElement("a"); // Photo Link
    const BLink = document.createElement("a"); // Branding Link
    const TLink = document.createElement("a"); // Title Link

    // Wrapper & InfoWrapper
    wrapper.className = "WRAPPER_taboola";
    infoWrapper.className = "INFO-WRAPPER_taboola";

    // Image
    img.src = item.thumbnail[0].url;
    // (img.height = "235"),
    //   (img.width = "250"),
    img.className = "IMAGE_taboola";
    // Photo Link
    PLink.href = clickableLink;
    PLink.appendChild(img);

    // Title
    const language = config.checkLanguage(item.name);
    if (language === "hebrew") {
      title.style.direction = "rtl";
    }
    title.textContent = item.name;
    title.className = `TITLE_taboola`;
    // Title Link
    TLink.href = clickableLink;
    TLink.style.textDecoration = "none";
    TLink.appendChild(title);

    // Branding
    branding.textContent = item.branding;
    branding.className = "taboola-branding";
    // Branding link
    BLink.href = clickableLink;
    BLink.className = "taboola-BLink";
    BLink.appendChild(branding);
    //
    // Element stacking =>
    wrapper.append(PLink); // Photo
    infoWrapper.append(TLink); // Title
    // Check if item has a category
    if (item.categories) {
      const categoryString = item.categories[0];
      const formattedCategory =
        categoryString.charAt(0).toUpperCase() + categoryString.slice(1);
      category.textContent = `-${formattedCategory}`;
      category.className = "CATEGORY_taboola";
      infoWrapper.append(category);
    }
    infoWrapper.append(BLink); // Branding
    wrapper.append(infoWrapper); // Wrapping the title, category and branding
    container.append(wrapper); // Appending it all to the container
  }

  client.appendChild(container);
})();
