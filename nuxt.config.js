// head
const head = require('./config/head.json');

// css
const css = [{src: './assets/style.scss', lang: 'scss'}];

// content
const content = require('./config/content.json');

// components
const components = true;

// modules
const modules = ['@nuxt/content', 'bootstrap-vue/nuxt'];

// build modules
const buildModules = [];

// build options
const buildOptions = require('./config/build-options.json');
buildOptions.optimization.splitChunks.cacheGroups.styles["test"] = /\.(css|vue)$/;
const buildOpt = {generate: buildOptions, render: buildOptions, build: buildOptions}

// hook
const hook = (page) => require('./config/hook.js')(page);
const hooks = {
    'generate:page': page => hook(page),
    'build:page': page => hook(page),
    'render:page': page => hook(page)
};

export default {head, css, components, modules, buildModules, content, ...buildOpt, hooks}
