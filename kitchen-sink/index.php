

<!DOCTYPE html
   PUBLIC "html" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" class="no-js" lang="en">
   <head>
      <meta http-equiv="Content-Type"
         content="text/html; charset=UTF-8"/>
      <?php include("includes/uthsc-head-scripts.inc"); ?>

      <title>The University of Tennessee Health Science Center (UTHSC)</title>
      <meta name="description"
         content="Established in 1911, The University of Tennessee Health Science Center aims to improve human health through education, research, clinical care and public service. The UT Health Science Center campuses include colleges of Dentistry, Graduate Health Sciences, Health Professions, Medicine, Nursing and Pharmacy. Patient care, professional education and research are carried out at hospitals and other clinical sites across Tennessee. Endowed professorships, Research Centers of Excellence, and continuing relationships with research and healthcare facilities across Tennessee ensure that both basic science and applied research stay focused on contemporary health topics."/>
   </head>
   <body class="homepage">
      <?php include("includes/uthsc-google-tag-manager-scripts.inc"); ?>

      <br>
      <hr width="85%">

      <?php include("includes/uthsc-site-navigation.inc"); ?> 
      
      <br>
      <hr width="85%">

      <?php include("includes/-navigation.inc"); ?>

      <br>
      <hr width="85%">

      <nav id="uthsc-off-canvas-menu--slide-left" class="uthsc-off-canvas-menu uthsc-off-canvas-menu--slide-left"
         aria-hidden="true">
         <div class="off-canvas-search">
            <form class="input-group search-form" aria-label="Search the UTHSC site" action="/search/" method="get">
               <input
                  class="input-group-field search-input" placeholder="Search …" value="" type="search"
                  aria-label="Search the UTHSC site" role="search" name="q" style="margin-right:0;"/>
               <div class="input-group-button">
                  <button type="submit" class="button" aria-label="Submit search form"><span aria-hidden="true"
                     class="fa fa-search"></span>
                  </button>
               </div>
            </form>
         </div>
         <button class="uthsc-off-canvas-menu__close"><span class="fa fa-chevron-left"></span>  Close Menu
         </button><?php include("includes/-navigation.txt"); ?>
         <div class="safari-bottom-nav-fix"></div>
      </nav>


      <br>
      <hr width="85%">

      <nav id="uthsc-off-canvas-menu--slide-right" class="uthsc-off-canvas-menu uthsc-off-canvas-menu--slide-right"
         aria-hidden="true">
         <div class="off-canvas-search">
            <form class="input-group search-form" aria-label="Search the UTHSC site" action="/search/" method="get">
               <input
                  class="input-group-field search-input" placeholder="Search …" value="" type="search"
                  aria-label="Search the UTHSC site" role="search" name="q" style="margin-right:0;"/>
               <div class="input-group-button">
                  <button type="submit" class="button" aria-label="Submit search form"><span aria-hidden="true"
                     class="fa fa-search"></span>
                  </button>
               </div>
            </form>
         </div>
         <button class="uthsc-off-canvas-menu__close">
         Close Menu  <span class="fa fa-chevron-right"></span>
         </button><?php include("includes/uthsc-off-canvas-right.inc"); ?>
         <div class="safari-bottom-nav-fix"></div>
      </nav>

      <br>
      <hr width="85%">

      

      <div id="uthsc-off-canvas-mask" class="uthsc-off-canvas-mask hide-for-print"></div>
      <div aria-hidden="true" id="mobile-navigation" class="hide-for-large hide-for-print">
         <button id="uthsc-off-canvas-button--slide-left" class="toggle-slide-left button"
            style="background-image:url('/images/nav-toggler-left-home-page.png');"></button>
         <button id="uthsc-off-canvas-button--slide-right" class="toggle-slide-right button"></button>
      </div>



      <?php include("includes/uthsc-closing-scripts.inc"); ?>
      <script src="/js/masonry.pkgd.min.js"></script>
      <script src="/js/imagesloaded.pkgd.min.js"></script>
      <script src="/js/uthsc-now-homepage.min.js"></script>
      <script src="/js/uthsc-news-ajax.min.js"></script>
      
   </body>
</html>

