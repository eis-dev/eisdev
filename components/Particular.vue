<template>
    <div>
        <div class="cv-image"
             :style="{background: 'url(' + cv.image.source + ')', backgroundSize: cv.image.size, backgroundPosition: cv.image.position, height: cv.image.height}"/>
        <div class="top-el">
            <div class="profile-info">
                <h3 class="profile-name mb-0 pb-2" v-text="cv.name"/>
                <h5 class="profile-desc mb-0" v-text="cv.title"/>
            </div>
            <div class="contact-info" :style="{height: 'calc(' + cv.image.height + ' - 7rem - 3px)'}">
                <table class="w-100 h-100 contact-table">
                    <tr>
                        <td v-text="cv.birth"/>
                        <td v-text="cv.tel"/>
                    </tr>
                    <tr>
                        <td v-text="cv.address"/>
                        <td v-text="cv.mail"/>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Particular",
        computed: {
            cv() {
                return require("../content/cv.json")
            }
        }
    }
</script>