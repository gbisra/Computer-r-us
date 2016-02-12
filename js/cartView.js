
        $(document).ready(function() {

            //
            function loadProducts() {
                $.ajax({
                    url: "../products.php",
                    type: "GET",
                    dataType: 'json',
                    success: function(returnedData) {
                        console.log(returnedData);
                        //$("#productslist").html(returnedData);
                         for (i=0; i<returnedData.length; i++){
                                var prodDiv = document.createElement("div");
                                prodDiv.className = "imgBoxSm";
                                prodDiv.innerHTML="<img src='../images/110591_l_i5.jpg' class='prdImg'/><span data-sku-item='"+returnedData[i].sku+"'>"+returnedData[i].item+"</span><p class='pInfo' data-sku-info='"+returnedData[i].sku+"'>"+returnedData[i].info+"</p><p class='pInfo' data-sku-price='"+returnedData[i].sku+"'>"+returnedData[i].item_price+"</p><input class='pIndex' data-sku-qty='"+returnedData[i].sku+"' type='number'id='numqty' min='1' max='10' step='1' value='1'/><button class='pBut' data-sku-add='"+returnedData[i].sku+"' type='button' value='Add' id='checkbut'>Add</button>";
                            
                             console.log(returnedData[i].category);
                             document.getElementById(returnedData[i].category).appendChild(prodDiv);
                     }
                        
                        
                        
                        $('#cpu').on('click', 'button[data-sku-add]', function() {
                //console.log(this.getAttribute("data-sku-add"));
                console.log("click");

                // get the sku
                var sku = this.getAttribute("data-sku-add");
                var info = $("p[data-sku-info='" + sku + "']").text();
                var price = $("p[data-sku-price='" + sku + "']").text();
                var qty = $("input[data-sku-qty='" + sku + "']").val();
                   
                var subtotal = parseFloat(Math.round((qty * price) * 100) / 100).toFixed(2);
                console.log(sku, "quantity", qty, "price", subtotal);
                        })},
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR.statusText, textStatus);
                    }
                });
            }

            loadProducts();
            
           /*prodDiv.innerHTML = "<div class='imgBoxSm'><img src='../images/110591_l_i5.jpg' class='prdImg'/><span data-sku-item='$sku'>$item</span><p class='pInfo' data-sku-info='$sku'>$info</p><p class='pInfo' data-sku-price='$sku'>$price</p><input class='pIndex' data-sku-qty='$sku' type='number'id='numqty' min='1' max='10' step='1' value='1'/><button class='pBut' data-sku-add='$sku' type='button' value='Add' id='checkbut'>Add</button></div>";*/
            
            
            /*$('#cpu').on('click', 'button[data-sku-add]', function() {
                //console.log(this.getAttribute("data-sku-add"));
                console.log("click");

                // get the sku
                var sku = this.getAttribute("data-sku-add");
                var info = $("p[data-sku-info='" + sku + "']").text();
                var price = $("p[data-sku-price='" + sku + "']").text();
                var qty = $("input[data-sku-qty='" + sku + "']").val();
                   
                var subtotal = parseFloat(Math.round((qty * price) * 100) / 100).toFixed(2);
                console.log(sku, "quantity", qty, "price", subtotal);

                //var shoppingCartList = $("#shoppingCart");


                //var item = "<li data-item-sku='" + sku + "' data-item-qty='" + qty + "'>"
                  //  + info + " " + qty + " x $" + price + " = " + subtotal
                   // + " <input type='button' data-remove-button='remove' value='X'/></li>";
               // shoppingCartList.append(item);

            });

            // remove items from the car
            /*$("#shoppingCart").on("click", "input", function() {
                // https://api.jquery.com/closest/
                this.closest("li").remove();

            });*/


            // start the cart
           /* $("#startCart").click(function() {
                console.log("Start cart.");
                $.ajax({
                    url: "./shoppingcart.php",
                    type: "POST",
                    dataType: 'json',
                    data: {action: "startcart"},
                    success: function(returnedData) {
                        console.log("cart start response: ", returnedData);

                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR.statusText, textStatus);
                    }
                });
            });

            // cancel the cart
            /*$("#cancelCart").click(function() {

                console.log("End cart.");
                $.ajax({
                    url: "./shoppingcart.php",
                    type: "POST",
                    dataType: 'json',
                    data: {action: "cancelcart"},
                    success: function(returnedData) {
                        console.log("cart cancel response: ", returnedData);

                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR.statusText, textStatus);
                    }
                });
                var shoppingCartList = $("#shoppingCart").html("");
            });*/

            // cancel the cart
            /*$("#checkoutcart").click(function() {

                // retrieve all of the items from the cart:
                var items = $("#shoppingCart li");
                var itemArray = [];
                $.each(items, function(key, value) {

                    var item = {sku: value.getAttribute("data-item-sku"),
                        qty: value.getAttribute("data-item-qty")};
                    itemArray.push(item);
                });
                var itemsAsJSON = JSON.stringify(itemArray);
                console.log("itemsAsJSON", itemsAsJSON);


                console.log("Check out cart with the following items", itemArray);
                $.ajax({
                    url: "./shoppingcart.php",
                    type: "POST",
                    dataType: 'json',
                    data: {
                        action: "checkoutcart", 
                        items: itemsAsJSON
                    },
                    success: function(returnedData) {
                        console.log("cart check out response: ", returnedData);

                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR.statusText, textStatus);
                    }
                });
                var shoppingCartList = $("#shoppingCart").html("");
            });*/




        });
    

