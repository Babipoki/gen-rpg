<?php $gen = $_GET["gen"]?>
<script> var gen = "<?php echo $gen; ?>" </script>

<head>
    <title>Babipoki's Generators</title>
    <link rel="stylesheet" href="style.css" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Abel|Fjalla+One&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
    <script data-ad-client="ca-pub-8965027181070208" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</script>
</head>
<body>
    <?php include "./header.html"; ?>

    <div class="ads_left"><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- BabiGenerators -->
<ins class="adsbygoogle"
     style=" position: absolute; left: 0;"
     data-ad-client="ca-pub-8965027181070208"
     data-ad-slot="9971903109"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script></div>
        <?php if (empty($gen)) {
            echo "Please pick the generator...";
        } else {
            
            include "./" . $gen . ".html";
        }
        ?>
    
    
    <?php include "./footer.html"; ?>
</body>

