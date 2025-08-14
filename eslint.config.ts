import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default tseslint.config([
    eslint.configs.recommended,
    tseslint.configs.recommended,
    {
        languageOptions: { globals: globals.browser },
    },
    pluginVue.configs["flat/essential"],
    {
        files: ["**/*.vue"],
        languageOptions: { parserOptions: { parser: tseslint.parser } },
        rules: {
            "vue/multi-word-component-names": ["off"],
        },
    },
]);
