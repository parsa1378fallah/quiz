<template>
  <div style="font-size : 50px">
    <span v-for="char in formulaArray" :key="char">
        <sub v-if="isNumber(char)">{{char}}</sub>
        <template v-else>{{char.toUpperCase()}}</template>
    </span>
    ∫<sub>0</sub><sup>∞</sup> e<sup>-st<sup>147</sup></sup> h(t) dt
  </div>
</template>

<script setup>

const props = defineProps({
  formula : String
})
const formula = props.formula
const formulaArray = Array.from(formula);
const isNumber = (char) => {
  return /^\d$/.test(char);
}


</script>

<style>

</style>