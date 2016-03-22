<?php

require_once('init.php');
loadScripts();

    $data = array("status" => "not set!");

    if(Utils::isGET()) {
        $pm = new ProductManager();
        $rows = $pm->listProducts();
      
        $html = "";
        foreach($rows as $row) {
            $sku = $row['SKU'];
            $item = $row['item'];
            $info = $row['info'];
            $price = $row['item_price'];
            $stock = $row['stock'];
            
            // <img src="data:image/jpeg;base64,' . base64_encode($row2['image']) . '" width="290" height="290">'
            $html .= "<tr class='row' data-sku-item='$sku'><td class='sec1'>$item</td>
            <td class='sec2' data-sku-info='$sku'>$info</td>
            <td class='sec3' data-sku-stock='$sku'>$stock</td>
            <td class='sec4' data-sku-price='$sku'>$price</td>
            <td class='sec6'><input type='button' data-remove-button='remove' value='X'</td></tr>";
        }
        echo $html;
        return;

    } else {
        $data = array("status" => "error", "msg" => "Only GET allowed.");

    }

    echo json_encode($data, JSON_FORCE_OBJECT);

?>