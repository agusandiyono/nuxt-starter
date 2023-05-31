<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    "data-sidebar": "dark",
    "data-bs-theme": "light",
    "data-topbar": "light",
  },
  link: [
    {
      rel: "stylesheet",
      href: "/assets/app/css/bootstrap.min.css",
    },
    {
      rel: "stylesheet",
      href: "/assets/app/css/app.min.css",
    },
    {
      rel: "stylesheet",
      href: "/assets/app/css/icons.min.css",
    },
    {
      rel: "stylesheet",
      href: "/assets/app/libs/chartist/chartist.min.css",
    },
  ],
  script: [
    { src: "/assets/app/libs/jquery/jquery.min.js", type: "text/javascript" },
    {
      src: "/assets/app/libs/bootstrap/js/bootstrap.bundle.min.js",
      type: "text/javascript",
    },
    { src: "/assets/app/js/app.js", type: "text/javascript" },
  ],
});
</script>

<style></style>
