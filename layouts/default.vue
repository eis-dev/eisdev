<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-4 order-1"/>
            <div class="col-lg-8 col-12 container p-3 p-lg-5 order-2 bg-white content-container">
                <Nuxt class="p-3 p-lg-0"/>
            </div>
            <div class="col-lg-4 col-12 sidebar order-0">
                <Sidebar class="px-2 py-0 px-lg-4 py-lg-3"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "default"
    }
</script>
