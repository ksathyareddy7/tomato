function getData() {
  const items = document.querySelectorAll(".sc-jiIkmg.kKqQYh");
  const results = [];
  const restaurantName = "Biryani Blues";
  const restaurantId = 10;
  let uniqueId = 1; // Initialize a counter for unique IDs

  items.forEach((item) => {
    const categoryElement = item.querySelector(".sc-khKDHO.jzCyhx");
    const category = categoryElement ? categoryElement.textContent.trim() : "";

    const products = item.querySelectorAll(".sc-whdbJ.hpuHXg");
    products.forEach((product) => {
      const titleElement = product.querySelector(".sc-kKBQAD.glfHFU");
      const title = titleElement ? titleElement.textContent.trim() : "";

      const imgElement = product.querySelector(".sc-hJtTsn.gkEemP img");
      const image = imgElement ? imgElement.src : "";

      const ratingElement = product.querySelector(".sc-WeVYj.fMBiyz");
      const rating = ratingElement ? ratingElement.getAttribute("title") : "";

      const priceElement = product.querySelector(".sc-17hyc2s-1.cCiQWA");
      const price = priceElement ? priceElement.textContent.trim() : "";

      const descriptionElement = product.querySelector(".sc-jnkmnc.gBjkwZ");
      const description = descriptionElement
        ? descriptionElement.textContent.replace(" read more", "").trim()
        : "";

      results.push({
        id: uniqueId++, // Assign a unique ID and increment the counter
        restaurantId,
        restaurantName,
        category,
        title,
        image,
        rating,
        price,
        description,
      });
    });
  });

  console.log(results);
}

getData();
