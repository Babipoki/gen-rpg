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
</script>
</head>
<body>
    <?php include "./header.html"; ?>
        <?php if (empty($gen)) {
            echo "Please pick the generator...";
        } 
        elseif ($gen == "currency"){
            include "./currency/currency.html";
        } elseif ($gen == "salary"){
            include "./salary/salary.html";
        }
        
        else {
            
            include "./" . $gen . ".html";
        }
        ?>
    
    
    <?php include "./footer.html"; ?>
</body>

