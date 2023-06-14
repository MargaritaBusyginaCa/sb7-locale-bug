<template>
  <button type="button" class="storybook-button--primary" @click="onClick">
    {{ $t("message.greeting") }}
  </button>
</template>

<script setup>
import "./button.css";
import { useI18n } from "vue-i18n";
import { reactive, computed, ref } from "vue";
const { locale, t } = useI18n();
function onClick() {
  console.log(locale.value);
  if (locale.value === "es") {
    locale.value = "en";
  } else if (locale.value === "en") {
    locale.value = "es";
  }
}
</script>
<style>
.storybook-button {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}
.storybook-button--primary {
  color: white;
  background-color: #1ea7fd;
}
.storybook-button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.storybook-button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.storybook-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.storybook-button--large {
  font-size: 16px;
  padding: 12px 24px;
}
</style>
