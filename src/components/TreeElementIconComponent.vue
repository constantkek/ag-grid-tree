<template>
    <div>12{{ type }}</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'TreeElementIconComponent',
    components: {},
    props: {},
    data() {
        return {
            type: '',
        };
    },
    mounted(): void {
        console.log(this.$props);
        // console.log(this.params);

        // this.type = this.params.node.group;
    },
});
</script>

<style lang="less"></style>
