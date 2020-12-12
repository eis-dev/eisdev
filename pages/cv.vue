<template>
  <VueHtml2pdf :show-layout="false" :float-layout="false" :enable-download="true" :preview-modal="false"
               :paginate-elements-by-height="999999" filename="Eyup_ISIK_CV" :pdf-quality="5"
               :manual-pagination="false" pdf-format="a4" pdf-orientation="portrait" pdf-content-width="800px"
               ref="html2Pdf">
    <section slot="pdf-content">
      <div class="a4">
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
                <td>Tel:</td>
                <td v-text="cv.tel"/>
                <td v-text="cv.birth"/>
              </tr>
              <tr>
                <td>Mail:</td>
                <td>
                  <a :href="'mailto:' + cv.mail" v-text="cv.mail"/>
                </td>
                <td v-text="cv.address"/>
              </tr>
            </table>
          </div>
        </div>

        <div id="content" class="nuxt-content">
          <p v-html="cv.about.intro.replace('{year}', (new Date().getFullYear() - 2012))"/>
          <ul>
            <li>
              <p v-html="cv.about.skillsText"/>
              <div class="pl-3">
                  <span v-for="(skill, index) in cv.about.skills"
                        v-text="skill + (index < cv.about.skills.length - 1 ? ', ' : '.')"/>
              </div>
            </li>
            <li v-for="item in cv.about.items" v-html="item"/>
          </ul>
          <p v-html="cv.about.closing.replace('{year}', (new Date().getFullYear() - 2012))"/>
        </div>

        <div class="row mt-4">
          <div class="col-5 pr-3 py-2">
            <table class="h-100 infos-table">
              <tr>
                <td class="pr-3 pb-2" v-text="'Education'"/>
                <td class="pl-1">
                  <div class="mb-2" v-for="item in cv.education">
                    <p class="mb-0" v-text="item.name"/>
                    <p class="mb-0 text-grey" v-text="item.info"/>
                  </div>
                </td>
              </tr>
              <tr class="pt-3 spacer">
                <td v-text="'Language'" class="pr-3 pb-2"/>
                <td class="pl-1">
                  <div class="mb-2" v-for="item in cv.languages">
                    <span v-text="item.name"/>
                    <span class="text-grey" v-text="'(' + item.degree + ')'"/>
                  </div>
                </td>
              </tr>
              <tr class="pt-3">
                <td v-text="'M. Service'" class="pr-3"/>
                <td class="pl-1" v-text="cv.military"/>
              </tr>
            </table>
          </div>
          <div class="col-7 pl-3 pt-0 pb-1 works-div">
            <table class="w-100 h-100 works-table">
              <tr v-for="item in cv.works">
                <td class="pr-1" v-text="item.name"/>
                <td class="text-grey" v-text="item.title"/>
                <td class="text-grey works-time" v-text="item.time"/>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  </VueHtml2pdf>
</template>

<script>
  import VueHtml2pdf from "vue-html2pdf";

  export default {
    layout: "empty",
    computed: {
      cv() {
        return require("../content/cv.json")
      }
    },
    components: {VueHtml2pdf},
    mounted() {
      this.$refs.html2Pdf.generatePdf();
    },
    async asyncData({$content, params}) {
      let text = await $content('pages', 'about').fetch();
      text = JSON.stringify(text).replace(/http:\/\//g, '').replace(/https:\/\//g, '');
      text = JSON.parse(text);
      return {text}
    }
  };
</script>

<style scoped>

  .a4 {
    width: 800px;
    height: 1100px;
    padding: 2rem;
    background: white;
    /*font-family: "Times New Roman";*/
  }

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

  .nuxt-content {
    font-size: 1rem;
    color: #505050;
    font-weight: 400;
    text-align: justify;
  }

  .nuxt-content a {
    color: inherit;
    text-decoration: underline;
  }

  .contact-table a {
    color: inherit;
    text-decoration: none;
  }

  .nuxt-content ul li::marker {
    color: inherit;
    font-size: inherit;
  }

  .nuxt-content ul li {
    padding-left: 4px;
  }

  #content ul p {
    margin-bottom: .25rem;
  }

  #content li {
    margin-bottom: .75rem;
  }

  .yapbtn {
    position: relative;
    z-index: 9999999;
  }

  .works-div {
    border-left: 1px solid #dddddd;
  }

  .text-grey {
    color: #979797;
  }

  .works-time {
    width: 135px;
  }

  .infos-table tr {
    border-bottom: 1rem solid transparent;
  }
</style>
