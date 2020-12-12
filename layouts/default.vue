<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-4 order-1"/>
      <div class="col-lg-8 col-12 container p-3 p-lg-5 order-2 bg-white content-container">
        <div class="p-3 p-lg-0">
          <Nuxt/>
        </div>
      </div>
      <div class="col-lg-4 col-12 sidebar order-0">
        <div class="px-2 py-0 px-lg-4 py-lg-3">
          <Sidebar/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "default",
    mounted() {
      // browser scale disable
      document.addEventListener('touchmove', function (event) {
        if (event.scale !== 1) { event.preventDefault(); }
      }, false);
      let lastTouchEnd = 0;
      document.addEventListener('touchend', function (event) {
        let now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) event.preventDefault();
        lastTouchEnd = now;
      }, false);
      document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
        // special hack to prevent zoom-to-tabs gesture in safari
        document.body.style.zoom = 0.99;
      });

      document.addEventListener('gesturechange', function(e) {
        e.preventDefault();
        // special hack to prevent zoom-to-tabs gesture in safari
        document.body.style.zoom = 0.99;
      });

      document.addEventListener('gestureend', function(e) {
        e.preventDefault();
        // special hack to prevent zoom-to-tabs gesture in safari
        document.body.style.zoom = 0.99;
      });
    }
  }
</script>
