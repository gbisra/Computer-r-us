$(document).ready(function() {
    
  function loadProducts() {
        console.log("hi");
            $.ajax({
                url: "../adminProducts.php",
                type: "GET",
                dataType: 'html',
                success: function(returnedData) {   
                   
                    $("#adminProducts").html(returnedData)
                   },
                    error: function(jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR.statusText, textStatus);
                }
            });  
        }; loadProducts();
    
    /*function loadProducts() {
        console.log("hi");
            $.ajax({
                url: "../products.php",
                type: "GET",
                dataType: 'json',
                success: function(returnedData) {   
                    console.log(returnedData);
                   //var cartData = localStorage.setObject('autosave', {items: []});
                    
                    //console.log(returnedData);
                    //$("#productslist").html(returnedData);
                    
                      
                    
                    for(var i = 0; i < returnedData.length; i++) {
                        var contentDiv = document.getElementById("#adminproductslist");
                       
                       
                        
                       contentDiv.innerHTML="<tr class='row'><td class='sec1'>'"+returnedData[i].sku+"'>"+returnedData[i].item+"</td><td class='sec2'>'"+returnedData[i].sku+"'>"+returnedData[i].info+"</td><td class='sec3'>'"+returnedData[i].sku+"'>"+returnedData[i].item_price+"</td><td class='sec6'><input type='button' data-remove-button='remove' value='X'</td></tr>";

                         document.getElementById(returnedData[i]).appendChild(contentDiv);
                        
                    };
                   },
                    error: function(jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR.statusText, textStatus);
                }
            });  
        }; loadProducts();
        
        */
        
    });

