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

<style scoped>
    .top-el {
        position: absolute;
        top: 45px;
        z-index: 0;
        width: 800px;
        margin-left: -2rem;
    }

    .profile-info {
        background: #ececec;
        padding: 1.1rem 1rem 1.2rem 13.25rem;
    }

    .contact-info {
        padding: 1.1rem 1rem 1.2rem 13.25rem;
    }

    .contact-table {
        color: #626262;
        font-size: 17px
    }

    .profile-name {
        font-weight: 600;
    }

    .profile-desc {
        color: #5d5d5d;
        margin-left: 1px;
    }

    .cv-image {
        width: 9.5rem;
        border: 4px solid #e3e3e3;
        margin-bottom: 1rem;
        position: relative;
        z-index: 1;
    }

    a {
        color: #626262;
        text-decoration: none;
    }
</style>