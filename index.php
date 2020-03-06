<?php $gen = $_GET["gen"]?>
<script> var gen = "<?php echo $gen; ?>" </script>

<head>
    <title>Babipoki's Generators</title>
    <link rel="stylesheet" href="style.css" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Abel|Fjalla+One&display=swap" rel="stylesheet">
    
</head>
<body>
    <?php include "./header.html"; ?>

    
        <?php if (empty($gen)) {
            echo "Please pick the generator...";
        } else {
            
            include "./" . $gen . ".html";
        }
        ?>
    
    
    <?php include "./footer.html"; ?>
</body>

