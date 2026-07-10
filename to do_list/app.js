$(document).ready(function () {
  let id;
  let editid = null;
  $(document).ready(function () {
    let editId = null;

    displayproduct();

    $("form").submit(function (e) {
      e.preventDefault();

      let title = $("#productname").val();
      let description = $("#description").val();
      let price = $("#price").val();
      let imgurl = $("#imgurl").val();

      if (title == "" || description == "" || price == "" || imgurl == "") {
        alert("Please fill all details");
        return;
      }

      let products = JSON.parse(localStorage.getItem("products")) || [];

      if (editId == null) {
        // Add Product
        products.push({
          id: Date.now(),
          title: title,
          description: description,
          price: price,
          url: imgurl,
        });
      } else {
        // Update Product
        products = products.map((product) => {
          if (product.id == editId) {
            return {
              id: editId,
              title: title,
              description: description,
              price: price,
              url: imgurl,
            };
          }

          return product;
        });

        editId = null;
        $("#submitbtn").text("Add Product");
        $("#submitbtn").css("background-color", "black");
      }

      localStorage.setItem("products", JSON.stringify(products));

      this.reset();

      displayproduct();
    });

    function displayproduct() {
      $(".product-container").empty();

      let products = JSON.parse(localStorage.getItem("products")) || [];

      products.forEach((product) => {
        const newcard = `
            <div class="product-card" data-id="${product.id}">
                <div class="product-img">
                    <img src="${product.url}" class="pimg" alt="">
                </div>

                <div class="product-details">
                    <h3 class="p-name">${product.title}</h3>
                    <p class="p-description">${product.description}</p>
                    <h3 class="p-price">${product.price}</h3>
                </div>

                <div>
                    <button class="btn edit btn-outline-success">
                        Edit
                    </button>

                    <button class="btn delete btn-outline-danger">
                        Delete
                    </button>
                </div>
            </div>
            `;

        $(".product-container").append(newcard);
      });
    }

    // Delete Product
    $(document).on("click", ".delete", function () {
      let id = $(this).closest(".product-card").data("id");

      let products = JSON.parse(localStorage.getItem("products")) || [];

      products = products.filter((product) => product.id != id);

      localStorage.setItem("products", JSON.stringify(products));
      alert("are You sure to delete this product")
      displayproduct();
    });

    // Edit Product
    $(document).on("click", ".edit", function () {
      let card = $(this).closest(".product-card");

      editId = card.data("id");

      $("#productname").val(card.find(".p-name").text());
      $("#description").val(card.find(".p-description").text());
      $("#price").val(card.find(".p-price").text());
      $("#imgurl").val(card.find(".pimg").attr("src"));

      $("#submitbtn").text("Update");

      $("#submitbtn").css({
        "background-color": "blue",
      });
    });
  });
  displayproduct();

  $(document).on("click", ".delete", function () {
    let id = $(this).closest(".product-card").data("id");

    let products = JSON.parse(localStorage.getItem("products")) || [];

    products = products.filter((product) => product.id != id);

    localStorage.setItem("products", JSON.stringify(products));

    displayproduct();
  });

  $(document).on("click", ".edit", function () {
    let card = $(this).closest(".product-card");

    editId = card.data("id");

    $("#productname").val(card.find(".p-name").text());
    $("#description").val(card.find(".p-description").text());
    $("#price").val(card.find(".p-price").text());
    $("#imgurl").val(card.find(".pimg").attr("src"));

    $("#submitbtn").text("Update");
  });

  $("#submitbtn").click(function () {
    let btntext = $(this).text();
    if (btntext == "Update") {
      $(this).text("Add Product");
      $(this).css("background-color", "black");
    }
  });
});