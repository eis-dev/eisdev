// head
const head = require('./config/head.json');

// css
const css = [{src: './assets/scss/index.scss', lang: 'scss'}];

// content
const content = require('./config/content.json');

// components
const components = true;

// modules
const modules = ['@nuxt/content', 'bootstrap-vue/nuxt'];

// build modules
const buildModules = [];

// hook
const hook = (page) => require('./config/hook.js')(page);
const hooks = {'generate:page': hook, 'build:page': hook, 'render:page': hook};

// build options
const buildOptions = require('./config/build-options.json');
buildOptions.optimization.splitChunks.cacheGroups.styles["test"] = /\.(scss|css|vue)$/;
const buildOpt = {generate: buildOptions, render: buildOptions, build: buildOptions}

export default {head, css, components, modules, buildModules, content, ...buildOpt, hooks}
