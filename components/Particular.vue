<template>
    <div>
        <img class="cv-image" :src="profile"/>
        <div class="top-el">
            <div class="profile-info">
                <h3 class="profile-name mb-0 pb-2" v-text="cv.name"/>
                <h5 class="profile-desc mb-0" v-text="cv.title"/>
            </div>
            <div class="contact-info">
                <table class="w-100 h-100 contact-table">
                    <tr>
                        <td v-text="cv.birth"/>
                        <td v-text="'Tel: ' + cv.tel"/>
                    </tr>
                    <tr>
                        <td v-text="cv.address"/>
                        <td v-text="'Mail: ' + cv.mail"/>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import profile from "../content/cv/profile.jpg";

    export default {
        name: "Particular",
        props: ["cv"],
        data() {
            return {profile}
        }
    }
</script>