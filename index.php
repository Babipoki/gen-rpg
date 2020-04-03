<?php $gen = $_GET["gen"]?>
<script> var gen = "<?php echo $gen; ?>" </script>

<head>
    <title>Babipoki's Generators</title>
    <link rel="stylesheet" href="style.css" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Abel|Fjalla+One&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
    <link rel="icon" href="img/favicon.png">
    
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
    <META HTTP-EQUIV="EXPIRES" CONTENT="Mon, 22 Jul 2002 11:12:01 GMT">
    <meta name="google-site-verification" content="3WUrJsem0s6ghm4EqlVtXVi4StneVxostiQQOyu1pm8" />
</script>
</head>
<body>
    <?php include "./header.html"; ?>
        <?php if (empty($gen)) {
            $gen = "character";
            echo '<script> var gen = "' . $gen . '" </script>';
            include "./character.html";
        } 
        elseif ($gen == "currency"){
            include "./currency/currency.html";
        } elseif ($gen == "salary"){
            include "./salary/salary.html";
        } elseif ($gen == "senses"){
            include "./senses/senses.html";
        } elseif ($gen == "balloon"){
            include "./balloon/balloon.html";
        } elseif ($gen == "art"){
            include "./art/art.html";
        } elseif ($gen == "gameidea"){
            include "./gameidea/gameidea.html";
        }
        
        else {
            
            include "./" . $gen . ".html";
        }
        ?>
    
    
    <?php include "./footer.html"; ?>
</body>
